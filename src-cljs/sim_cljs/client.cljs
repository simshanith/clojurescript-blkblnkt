(ns simCljs.app
  (:require
   ;; Only include Browser REPL on simple optimizations, local environment
   [clojure.browser.repl :as repl]
   [shoreleave.remote :as remote]
   [jayq.core :as jq]
   ))


;; The browser REPL offers quick testing of functions in the browser
;; environment from (with Piggieback) an nREPL session. Combined with
;; Emacs (or your editor of choice), you can quickly sketch out
;; functions and inspect how your ClojureScript is evaluated.


;; Wrap the connection with a simple check for advanced optimizations.
;; This helps prevent errors when switching back and forth from simple
;; to advanced, tho if properly using `:advanced` compilation, the
;; `clojure.browser.repl` namespace should be omitted entirely.

;;(comment
  (if (.has js/_ js/window "clojure") 
    (repl/connect "http://localhost:9000/repl"));;)


(defn ^:export safeLog
  "Wrapper for console.log that gracefully fails on `console`-less browsers. Yay tail recursion."
  [& logs]
  (when (and (seq logs)
             (.has js/_ js/window "console")
             (.isFunction js/_ (aget js/console "log"))) ;; aget compiles to console["log"]
    (.log js/console  (clj->js (first logs)))
    (recur (next logs))))

(defn photoSrcs
  "Extracts relevant data from tumblr post object. Returns a string or JS array of strings."
  [elem]
  (if (and (:photos elem)
           (> (count (:photos elem)) 0))
    (map photoSrcs (:photos elem))
    (:photo-url-1280 elem)))

(def myTumblrData (atom []))
(def tumblrIndex (atom 0))

(defn insertPhoto
  "Given an unattached `<img />` wrapped in jQuery, attach it to the DOM and remove it after ~13 seconds."
  [$img]
  (do (-> $img (jq/append-to :body) (jq/add-class :go))
      (js/setTimeout #(-> $img (jq/remove)) 13138)))

(defn insertPhotos
  "Takes a JS array of image sources and recursively calls insertPhoto down the list, with a delay of 1 second."
  [srcList]
  (let [$img (jq/$ (apply str ["<img src=\"" (first srcList) "\" />"]))
        ms-delay 1000]
    (if (not-empty srcList)
      (do (insertPhoto $img)
          (js/setTimeout #(insertPhotos (rest srcList)) ms-delay))
      (js/setTimeout #(-> (jq/$ :#wrapper) (jq/remove-class :fadeOut)) 13138))))

(declare get-tumblr-data)

;; Event binding.
(defn bind-button []
  (-> (jq/$ :button#go) (jq/one :click get-tumblr-data)))


(defn handle-json-resp
  "Manages myTumblrData and inserts photos."
  [resp]
  (when (:posts resp)
    (-> (jq/$ :#wrapper) (jq/add-class :fadeOut))
    (swap! myTumblrData (fn [col] (into col (flatten (map photoSrcs (:posts resp))))))
    (js/alert (str "Cool! Loaded my " (count @myTumblrData) " most recent tumblr photos."))
    (insertPhotos @myTumblrData)
    (swap! tumblrIndex (fn [i] (+ 50 i)))
    (bind-button)))

(defn get-tumblr-data
  "Requests photo posts from tumblr's API using JSONP."
  []
  (remote/jsonp
   "http://simloovoo.com/api/read/json"
   :on-success handle-json-resp
   :on-timeout (fn [_] (js/alert "Timed out."))
   :content {:type "photo" :num 50 :start @tumblrIndex}))

(defn ^:export showData
  "Exposes state of myTumblrData."
  [] @myTumblrData)

(defn ^:export externTest
  "Dependent on jQuery externs when running in advanced compilation mode, this simple function should return `ClojureScript rules.`"
  []
  (-> (jq/$ :#go) (jq/attr "data-sim")))

(bind-button)