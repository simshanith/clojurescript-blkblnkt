(ns sim-cljs.server
  (:use compojure.core)
  (:require [compojure.handler :as handler]
            [compojure.route :as route]
            [ring.adapter.jetty :as jetty]
            [net.cgrand.enlive-html :as enlive]
            [cljs.repl.browser]
            [cemerick.piggieback]
            [watchtower.core :as watch])
  (:gen-class))

(enlive/deftemplate layout "sim_cljs/views/layout.html" [])

(defroutes app-routes
  (GET "/" [] (layout))
  (route/resources "/templates/" {:root "sim_cljs/views/"})
  (route/resources "/" {:root "public"})
  (route/not-found "<h1>Page not found</h1>"))

(def app
  (handler/site app-routes))

(println "Server restarted.")

(defn piggybackBrowserREPL []
  (cemerick.piggieback/cljs-repl
  :repl-env (doto (cljs.repl.browser/repl-env :port 9000)
              cljs.repl/-setup)))
;;
(defn -main [& args]
  (jetty/run-jetty #'app {:port 3000}))

(watch/watcher ["src/sim_cljs/views/"]
               (watch/rate 250)
               (watch/on-change (fn [_] (require `sim-cljs.server :reload))))