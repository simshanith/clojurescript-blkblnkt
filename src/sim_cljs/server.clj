(ns sim-cljs.server
  (:use compojure.core)
  (:require [compojure.handler :as handler]
            [compojure.route :as route]
            [ring.adapter.jetty :as jetty]
            [net.cgrand.enlive-html :as enlive]
            [cemerick.drawbridge :as drawbridge]
            [ring.middleware.params :as params]
            [ring.middleware.keyword-params :as keyword-params]
            [ring.middleware.nested-params :as nested-params]
            [ring.middleware.session :as session]
            [ring.middleware.basic-authentication :as basic]
            [cljs.repl.browser]
            [cemerick.piggieback])
  (:gen-class))

(def header-js-libs
  ["/js/vendor/modernizr.custom.09566.js"])

(def dependency-check (slurp "resources/public/js/externDependencies.js"))

(enlive/deftemplate layout (enlive/xml-resource "sim_cljs/views/layout.html")
  [header-js load-check]
  [:title]
    (enlive/content "Dynamic App")
  [:script#headerScripts]
    (enlive/clone-for [script-src header-js]
      (enlive/do->
        (enlive/set-attr :src script-src)
        (enlive/remove-attr :id)))
  [:script#dependencyCheck]
    (enlive/html-content load-check))

(def app-home (apply str (layout header-js-libs dependency-check)))

(defroutes app-routes
  (GET "/" [] app-home)
  (route/resources "/templates/" {:root "sim_cljs/views/"})
  (route/resources "/" {:root "public"})
  (route/not-found "<h1>Page not found</h1>"))

(def app
  (handler/site app-routes))

(println "Server reloaded.")

(def drawbridge-handler
  (-> (cemerick.drawbridge/ring-handler)
      (keyword-params/wrap-keyword-params)
      (nested-params/wrap-nested-params)
      (params/wrap-params)
      (session/wrap-session)))

(defn authenticated? [name pass]
  (= [name pass] [(System/getenv "AUTH_USER") (System/getenv "AUTH_PASS")]))

(defn wrap-drawbridge [handler]
  (fn [req]
    (let [handler (if (= "/repl" (:uri req))
                    (basic/wrap-basic-authentication
                     drawbridge-handler authenticated?)
                    handler)]
      (handler req))))

(defn -main [& [port]]
  (let [port (Integer. (or port (System/getenv "PORT") 3000))]
    (jetty/run-jetty (wrap-drawbridge app) {:port port :join? false})))

(defn piggiebackBrowserREPL []
  (let [env (cljs.repl.browser/repl-env :port 9000)]
    (try 
      (cemerick.piggieback/cljs-repl :repl-env (doto env cljs.repl/-setup)))))