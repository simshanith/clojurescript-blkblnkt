(defproject sim-cljs "0.1.0-SNAPSHOT"
  :description "Test development environment for Clojure + ClojureScript stack"
  :url "http://simloovoo.com"
  :min-lein-version "2.0.0"
  :dependencies [[org.clojure/clojure "1.4.0"]
                 [org.clojure/clojurescript "0.0-1552"]
                 [org.clojure/google-closure-library "0.0-2029-2"]
                 [org.clojure/data.json "0.2.1"]
                 [ring "1.1.8"]
                 [compojure "1.1.5"]
                 [aleph "0.3.0-beta11"]
                 
                 [enlive "1.0.1"]
                 [org.clojure/tools.nrepl "0.2.1"]
                 [com.cemerick/drawbridge "0.0.6"]
                 [ring-basic-authentication "1.0.1"]
                 [com.cemerick/piggieback "0.0.2"]
;;                 [enfocus "1.0.0-beta3"]
;;                 [domina "1.0.1"]
                 [jayq "2.2.0"]]
  :plugins [[lein-cljsbuild "0.3.0"]
            [lein-ring "0.8.2"]
            [lein-marginalia "0.7.1"]]
  :repl-options
    {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}
  :profiles
  {:server-repl
   {:repl-options
    {:init (def server (future (-main 3000)))}}
   :browser-repl 
   {:repl-options
     {:init (sim-cljs.server/piggiebackBrowserREPL)}}}
  :cljsbuild {:builds
    [{:jar true
      :source-paths ["src-cljs"]
      :id "main"
      :compiler
      {:pretty-print false
       :output-to "resources/public/js/cljs.js"
       :externs ["resources/externs/jquery-1.8.js" "resources/externs/underscore-1.4.3.js" "resources/externs/backbone-0.9.10.js"]
       :optimizations :advanced}}]}
  :ring {:handler sim-cljs.server/app}
  :aliases 
  {"server"  ["with-profile" "server-repl" "repl"]
   "browser" ["with-profile" "browser-repl" "repl"]}
  :main sim-cljs.server)