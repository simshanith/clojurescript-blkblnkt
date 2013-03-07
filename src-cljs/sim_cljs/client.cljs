(ns simCljs.app
  (:require
   ;; Only include Browser REPL on simple optimizations, local environment
   ;;[clojure.browser.repl :as repl]
   [goog.net.Jsonp :as goog.net.Jsonp]
   [goog.array :as goog.array]
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

(comment
  (if (.has js/_ js/window "clojure") 
    (repl/connect "http://localhost:9000/repl")))


(defn ^:export safeLog
  "Wrapper for console.log that gracefully fails on `console`-less browsers. Yay tail recursion."
  [& logs]
  (when (and (seq logs)
             (.has js/_ js/window "console")
             (.isFunction js/_ (aget js/console "log")))
    (.log js/console (first logs))
    (recur (next logs))))

(defn photoSrcs
  "Extracts relevant data from tumblr post object. Returns a string or JS array of strings."
  [elem]
  (if (and (.isArray js/_ (aget elem "photos"))
           (> (.-length (aget elem "photos")) 0))
    (goog.array.map (aget elem "photos") photoSrcs)
    (aget elem "photo-url-1280")))

(def myTumblrData (atom (js/Array)))

(defn insertPhoto
  "Given an unattached `<img />` wrapped in jQuery, attach it to the DOM and remove it after ~13 seconds."
  [$img]
  (do (-> $img (jq/append-to :body) (jq/add-class :go))
      (js/setTimeout #(-> $img (jq/remove)) 13138)))

(defn insertPhotos
  "Takes a JS array of image sources and recursively calls insertPhoto down the list, with a delay of 1 second."
  [srcArray]
  (let [srcList (js->clj srcArray)
        $img (jq/$ (apply str ["<img src=\"" (first srcList) "\" />"]))
        ms-delay 1000]
    (if (not-empty srcList)
      (do (insertPhoto $img)
          (js/setTimeout #(insertPhotos (rest srcList)) ms-delay))
      (js/setTimeout #(-> (jq/$ :#wrapper) (jq/remove-class :fadeOut)) 13138))))


(defn handle-json-resp
  "Manages myTumblrData and inserts photos."
  [resp]
  (do
    (js/alert "Cool! Loaded my 50 most recent tumblr photo posts.")
    (-> (jq/$ :#wrapper) (jq/add-class :fadeOut))
    (safeLog resp)
    (safeLog (swap! myTumblrData
                    (fn [_] (if (aget resp "posts")
                             (goog.array.flatten (goog.array.map (aget resp "posts") photoSrcs))))))
    (insertPhotos @myTumblrData)))

(defn get-tumblr-data
  "Requests photo posts from tumblr's API using JSONP."
  []
  (let [jsonp (goog.net.Jsonp. "http://simloovoo.tumblr.com/api/read/json")]
    (.send jsonp (js-obj  "type" "photo" "num" 50 "start" 0) handle-json-resp #() "cacheplz")))

;; Event binding.
(-> (jq/$ :button#go) (jq/on :click get-tumblr-data))

(defn ^:export showData
  "Exposes state of myTumblrData."
  [] @myTumblrData)

(defn ^:export externTest
  "Dependent on jQuery externs when running in advanced compilation mode, this simple function should return `ClojureScript rules.`"
  []
  (-> (jq/$ :#go) (jq/attr "data-sim")))