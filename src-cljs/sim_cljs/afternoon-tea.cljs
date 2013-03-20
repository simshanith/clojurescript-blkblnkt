(.-body js/document)

(. js/document -body)

(.-appendChild (.-body js/document))

(.. js/document -body -appendChild)

(. js/document -createElement)

[s (.createElement js/document "script")]

(defn clj->js
  "Recursively transforms ClojureScript maps into Javascript objects,
   other ClojureScript colls into JavaScript arrays, and ClojureScript
   keywords into JavaScript strings."
  [x]
  (cond
    (string? x) x
    (keyword? x) (name x)
    (map? x) (.-strobj (reduce (fn [m [k v]]
               (assoc m (clj->js k) (clj->js v))) {} x))
    (coll? x) (apply array (map clj->js x))
    :else x))

(defn injectScript [src]
	(let [s (.createElement js/document "script")]
		(.setAttribute s "src" src)
		(.. js/document -body (appendChild s))))