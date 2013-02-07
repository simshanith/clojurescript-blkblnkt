goog.provide('hello_clojurescript');
goog.require('cljs.core');
goog.require('goog.array');
goog.require('goog.net.Jsonp');
goog.require('clojure.browser.repl');
clojure.browser.repl.connect.call(null,"http://localhost:9000/repl");
hello_clojurescript.photoSrcs = (function photoSrcs(elem){
if(cljs.core.truth_((function (){var and__3822__auto____61591 = elem.photos;
if(cljs.core.truth_(and__3822__auto____61591))
{return (elem.photos.length > 0);
} else
{return and__3822__auto____61591;
}
})()))
{return goog.array.map(elem.photos,photoSrcs);
} else
{return (elem["photo-url-1280"]);
}
});
hello_clojurescript.myTumblrData = cljs.core.atom.call(null,Array());
hello_clojurescript.handle_json_resp = (function handle_json_resp(resp){
return cljs.core.swap_BANG_.call(null,hello_clojurescript.myTumblrData,(function (_){
return goog.array.flatten(goog.array.map(resp.posts,hello_clojurescript.photoSrcs));
}));
});
hello_clojurescript.get_tumblr_data = (function get_tumblr_data(){
var jsonp__61593 = (new goog.net.Jsonp("http://simloovoo.tumblr.com/api/read/json"));
return jsonp__61593.send({"type":"photo","num":50,"start":0},hello_clojurescript.handle_json_resp,(function (){
return cljs.core.List.EMPTY;
}),"cacheplz");
});
hello_clojurescript.clickable = document.getElementById("go");
hello_clojurescript.clickable.addEventListener("click",hello_clojurescript.get_tumblr_data);
