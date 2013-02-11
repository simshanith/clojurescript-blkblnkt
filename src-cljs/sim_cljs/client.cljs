(ns hello-clojurescript
  (:require 
;;   [clojure.browser.repl :as repl]
   [goog.net.Jsonp :as goog.net.Jsonp]
   [goog.array :as goog.array]
   ))
	
;;(repl/connect "http://localhost:9000/repl")

(defn photoSrcs [elem]
  (if (and (.-photos elem) (> (.-length (.-photos elem)) 0))
    (goog.array.map (.-photos elem) photoSrcs)
    (aget elem "photo-url-1280")))

(def myTumblrData (atom (js/Array)))

(defn handle-json-resp [resp]
  (do
    (js/alert "doop")
    (.log js/console resp)
    (.log js/console (swap! myTumblrData
             (fn [_] (if (aget resp "posts")
                      (goog.array.flatten (goog.array.map (aget resp "posts") photoSrcs)))))))
;;  (.log js/console (.-posts resp))
  )

(defn get-tumblr-data []
  (let [jsonp (goog.net.Jsonp. "http://simloovoo.tumblr.com/api/read/json")]
    (.send jsonp (js-obj  "type" "photo" "num" 50 "start" 0) handle-json-resp #() "cacheplz")))

(def clickable (.getElementById js/document "go"))
;;
(.addEventListener clickable "click" get-tumblr-data)

(defn ^:export showData [] @myTumblrData)