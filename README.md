# Clojure + ClojureScript Overview
This is an example Clojure web app that serves compiled ClojureScript, bringing a modern lisp to both server & browser.

# Prerequisites

* Leiningen 2.0 (`brew install lein` then `lein upgrade`)
* PhantomJS (`brew install phantomjs`)

# Usage

1) Clone the repo and `cd` into the project dir.
2) Run `lein server` to start a REPL and launch the server on port 3000.
3) Open a new terminal and run `lein browser` to start the ClojureScript REPL server, listening on port 9000.
4) Open a third terminal and run `phantomjs phantom/repl.js localhost:3000` to connect to the ClojureScript REPL.

Code away! Two nREPL servers are running, accessible to Emacs or your preferred development environment (as well as the terminal they were launched from). console.log()s in the browser environment will appear in the phantomjs terminal.

#### _“Science without Philosophy is blind...”_
Clojure builds useful abstractions around discrete problemspaces. This design philosophy allows for highly modular components that provide utility for many programming projects. These components are easily distributed as projects themselves, allowing open source communities to build on top of and within each library.

#### _“...Philosophy without Science is empty.”_
Web servers have long been established as a discrete “problemspace” in modern programming. HTTP & other internet protocols can be approached with various architectures. Python’s WSGI & Ruby’s Rack inspired the predominant Clojure web applications library, Ring. These libraries “abstract the details of HTTP into simple, unified APIs,” to paraphrase the [Ring documentation](https://github.com/ring-clojure/ring).

## Useful Abstractions
### [Ring: Fundamental Building Block](https://github.com/ring-clojure/ring/wiki/Concepts)

An HTTP server is fundamentally functional in nature: `Request->*Server Magic*->Response`. Ring handles the server magic with an abstraction in the form of a Clojure function called a `Handler`. Handlers accept Clojure maps representing an HTTP request, apply transformations as needed, and return a Clojure map representing an HTTP response. This uniform behavior allows for composable middleware with higher-level functions wrapping handlers with added functionality.

### [Compojure: Super simple routing](https://github.com/weavejester/compojure/wiki/Routes-In-Detail)
Compojure provides a RESTful approach to request routing and some useful “threaded” Ring middleware handlers for generating a standard web stack. Compojure also offers the `Renderable` protocol, which allows easy conversion from different data structures to the appropriate HTTP responses. Compojure abstracts away much of the usual boilerplate in web application development, handling the “Controller” bit of MVC architecture very well.

### [Aleph: Super simple *asynchronous* routing](https://github.com/ztellman/aleph/wiki/HTTP)
Aleph follows the Ring API, but allows the Request & the Response to be “decoupled.” Web apps built with Compojure behave _synchronously_, while Aleph allows for _asynchronous_ behavior. You can use Ring/Compojure handlers to create the basic structure of the site, then wrap it up with async handlers as needed with Aleph. Example uses of async handlers are WebSockets, chunked responses, HTTP response dependent on a server-side HTTP request, and TCP Client/Server communication.

### [Piggieback: ClojureScript REPL](https://github.com/cemerick/piggieback)
Piggieback lets me connect a Clojure nREPL to a ClojureScript environment, such as Rhino or the browser (***!!!***). With the right code in place on the server and the client, I can have a live link to both. The potential power is intoxicating, but Heroku doesn’t use the same version of Leiningen in production as I run locally, meaning it’s only good for local development & testing. Still, it gives the programmer full control from the command line.

###[Drawbridge: Heroku REPL](https://devcenter.heroku.com/articles/debugging-clojure)
With Drawbridge on the server, the developer can connect via HTTP to a REPL on the live server environment.

### [Enlive: HTML templating, transformed](https://github.com/cgrand/enlive)
Enlive is my favorite templating solution, hands down. Instead of forcing some special templating syntax, Enlive takes HTML and produces HTML. Create a static page with placeholders and Lorem Ipsum, and let Enlive replace it with dynamic content in your app. Enlive recognizes both CSS selectors and XPath, and has advanced transformations for wrangling structured data into structured HTML.

## ClojureScript and Google Closure Tools
ClojureScript is built upon [Google Closure Tools](https://developers.google.com/closure/), implemented using the [Closure Library](https://developers.google.com/closure/library/), and compiled with the [Closure Compiler](https://developers.google.com/closure/compiler/). This provides a surprisingly effective dependency managment solution, well suited for programming with modular components. Google’s rich experience applications such as Search, Gmail, Maps, Docs, Google+, and many others are built with the Closure Library. 

However, it is a totalistic framework: using it alongside traditional, relatively lightweight libraries such as jQuery and Backbone is difficult & cumbersome, not to mention redundant in a network-gobbling way. Google has their own way of doing things, and to adopt Closure in part, you need to swallow it whole. That said, once transitioned to the Closure way, you may have a deeper understanding of how browsers process the DOM & evaluate your scripts.

The Google Closure Tools are Java-based, and Google Closure Javascript is a big step toward Java from Vanilla JS. Writing Javascript that follows Google Closure convention involves a lot of boilerplate much like Java.

[ClojureScript](https://github.com/clojure/clojurescript), thankfully, leverages Clojure’s powerful abstractions to reduce the need for boilerplate. The consistent language abstractions keep source files small and familiar, crucial when applications grow in complexity. ClojureScript is best suited for rich experience applications, allowing the developer to harness the full power of Google Closure’s engine with clear, concise Lisp.

_Shane Daniel_