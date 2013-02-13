(defproject sim-cljs "0.1.0-SNAPSHOT"
  :description "Test development environment for Clojure + ClojureScript stack"
  :url "http://simloovoo.com"
  :min-lein-version "2.0.0"
  :dependencies [[org.clojure/clojure "1.4.0"]
                 [org.clojure/clojurescript "0.0-1552"]
                 [org.clojure/google-closure-library "0.0-2029-2"]
                 [aleph "0.3.0-beta11"]
                 [ring "1.1.8"]
                 [compojure "1.1.5"]
                 [enlive "1.0.1"]
                 [com.cemerick/drawbridge "0.0.6"]
                 [ring-basic-authentication "1.0.1"]
;;                 [enfocus "1.0.0-beta3"]
;;                 [domina "1.0.1"]
                 [org.clojure/tools.nrepl "0.2.1"]
                 [com.cemerick/piggieback "0.0.2"]
                 [jayq "2.2.0"]]
  :plugins [[lein-cljsbuild "0.3.0"]
            [lein-ring "0.8.2"]]
  :repl-options {:init (def server (future (-main 3000)))
                 :nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}
  :cljsbuild {
    :repl-listen-port 9000
    :repl-launch-commands
      {"phantom" ["phantomjs"
                  "phantom/repl.js"
                  :stdout ".repl-phantom-out"
                  :stderr ".repl-phantom-err"]}
    :builds
     [{:source-paths ["src-cljs"],
       :id "main",
       :compiler
         {:pretty-print true,
          :output-to "resources/public/js/cljs.js",
          :externs ["resources/externs/externs.js"],
          :optimizations :whitespace},
       :jar true}]}
  :ring {:handler sim-cljs.server/app}
  :aliases {"phantom" ["trampoline" "cljsbuild" "repl-launch" "phantom" "http://localhost:3000"]}
  :main sim-cljs.server)