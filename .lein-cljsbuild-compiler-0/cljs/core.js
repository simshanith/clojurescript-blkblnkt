goog.provide('cljs.core');
goog.require('goog.array');
goog.require('goog.object');
goog.require('goog.string.format');
goog.require('goog.string.StringBuffer');
goog.require('goog.string');
cljs.core._STAR_unchecked_if_STAR_ = false;
/**
* Each runtime environment provides a diffenent way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){
throw (new Error("No *print-fn* fn set for evaluation environment"));
});
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
/**
* Tests if 2 arguments are the same object
*/
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
/**
* Returns true if x is nil, false otherwise.
*/
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return (x == null);
});
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
var x__6115 = (((x == null))?null:x);
if((p[goog.typeOf(x__6115)]))
{return true;
} else
{if((p["_"]))
{return true;
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
});
cljs.core.is_proto_ = (function is_proto_(x){
return (x.constructor.prototype === x);
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
return Error(["No protocol method ",proto," defined for type ",goog.typeOf(obj),": ",obj].join(""));
});
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return array_like.slice();
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
cljs.core.make_array = (function() {
var make_array = null;
var make_array__1 = (function (size){
return (new Array(size));
});
var make_array__2 = (function (type,size){
return make_array.call(null,size);
});
make_array = function(type,size){
switch(arguments.length){
case 1:
return make_array__1.call(this,type);
case 2:
return make_array__2.call(this,type,size);
}
throw('Invalid arity: ' + arguments.length);
};
make_array.cljs$lang$arity$1 = make_array__1;
make_array.cljs$lang$arity$2 = make_array__2;
return make_array;
})()
;
/**
* Returns the value at the index.
* @param {...*} var_args
*/
cljs.core.aget = (function() {
var aget = null;
var aget__2 = (function (array,i){
return (array[i]);
});
var aget__3 = (function() { 
var G__6116__delegate = function (array,i,idxs){
return cljs.core.apply.call(null,aget,aget.call(null,array,i),idxs);
};
var G__6116 = function (array,i,var_args){
var idxs = null;
if (goog.isDef(var_args)) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6116__delegate.call(this, array, i, idxs);
};
G__6116.cljs$lang$maxFixedArity = 2;
G__6116.cljs$lang$applyTo = (function (arglist__6117){
var array = cljs.core.first(arglist__6117);
var i = cljs.core.first(cljs.core.next(arglist__6117));
var idxs = cljs.core.rest(cljs.core.next(arglist__6117));
return G__6116__delegate(array, i, idxs);
});
G__6116.cljs$lang$arity$variadic = G__6116__delegate;
return G__6116;
})()
;
aget = function(array,i,var_args){
var idxs = var_args;
switch(arguments.length){
case 2:
return aget__2.call(this,array,i);
default:
return aget__3.cljs$lang$arity$variadic(array,i, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
aget.cljs$lang$maxFixedArity = 2;
aget.cljs$lang$applyTo = aget__3.cljs$lang$applyTo;
aget.cljs$lang$arity$2 = aget__2;
aget.cljs$lang$arity$variadic = aget__3.cljs$lang$arity$variadic;
return aget;
})()
;
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
cljs.core.into_array = (function() {
var into_array = null;
var into_array__1 = (function (aseq){
return into_array.call(null,null,aseq);
});
var into_array__2 = (function (type,aseq){
return cljs.core.reduce.call(null,(function (a,x){
a.push(x);
return a;
}),[],aseq);
});
into_array = function(type,aseq){
switch(arguments.length){
case 1:
return into_array__1.call(this,type);
case 2:
return into_array__2.call(this,type,aseq);
}
throw('Invalid arity: ' + arguments.length);
};
into_array.cljs$lang$arity$1 = into_array__1;
into_array.cljs$lang$arity$2 = into_array__2;
return into_array;
})()
;
cljs.core.IFn = {};
cljs.core._invoke = (function() {
var _invoke = null;
var _invoke__1 = (function (this$){
if((function (){var and__3822__auto____6202 = this$;
if(and__3822__auto____6202)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3822__auto____6202;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{var x__2387__auto____6203 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6204 = (cljs.core._invoke[goog.typeOf(x__2387__auto____6203)]);
if(or__3824__auto____6204)
{return or__3824__auto____6204;
} else
{var or__3824__auto____6205 = (cljs.core._invoke["_"]);
if(or__3824__auto____6205)
{return or__3824__auto____6205;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3822__auto____6206 = this$;
if(and__3822__auto____6206)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3822__auto____6206;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{var x__2387__auto____6207 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6208 = (cljs.core._invoke[goog.typeOf(x__2387__auto____6207)]);
if(or__3824__auto____6208)
{return or__3824__auto____6208;
} else
{var or__3824__auto____6209 = (cljs.core._invoke["_"]);
if(or__3824__auto____6209)
{return or__3824__auto____6209;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3822__auto____6210 = this$;
if(and__3822__auto____6210)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3822__auto____6210;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{var x__2387__auto____6211 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6212 = (cljs.core._invoke[goog.typeOf(x__2387__auto____6211)]);
if(or__3824__auto____6212)
{return or__3824__auto____6212;
} else
{var or__3824__auto____6213 = (cljs.core._invoke["_"]);
if(or__3824__auto____6213)
{return or__3824__auto____6213;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3822__auto____6214 = this$;
if(and__3822__auto____6214)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3822__auto____6214;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{var x__2387__auto____6215 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6216 = (cljs.core._invoke[goog.typeOf(x__2387__auto____6215)]);
if(or__3824__auto____6216)
{return or__3824__auto____6216;
} else
{var or__3824__auto____6217 = (cljs.core._invoke["_"]);
if(or__3824__auto____6217)
{return or__3824__auto____6217;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3822__auto____6218 = this$;
if(and__3822__auto____6218)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3822__auto____6218;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{var x__2387__auto____6219 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6220 = (cljs.core._invoke[goog.typeOf(x__2387__auto____6219)]);
if(or__3824__auto____6220)
{return or__3824__auto____6220;
} else
{var or__3824__auto____6221 = (cljs.core._invoke["_"]);
if(or__3824__auto____6221)
{return or__3824__auto____6221;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3822__auto____6222 = this$;
if(and__3822__auto____6222)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3822__auto____6222;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{var x__2387__auto____6223 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6224 = (cljs.core._invoke[goog.typeOf(x__2387__auto____6223)]);
if(or__3824__auto____6224)
{return or__3824__auto____6224;
} else
{var or__3824__auto____6225 = (cljs.core._invoke["_"]);
if(or__3824__auto____6225)
{return or__3824__auto____6225;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3822__auto____6226 = this$;
if(and__3822__auto____6226)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3822__auto____6226;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{var x__2387__auto____6227 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6228 = (cljs.core._invoke[goog.typeOf(x__2387__auto____6227)]);
if(or__3824__auto____6228)
{return or__3824__auto____6228;
} else
{var or__3824__auto____6229 = (cljs.core._invoke["_"]);
if(or__3824__auto____6229)
{return or__3824__auto____6229;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3822__auto____6230 = this$;
if(and__3822__auto____6230)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3822__auto____6230;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{var x__2387__auto____6231 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6232 = (cljs.core._invoke[goog.typeOf(x__2387__auto____6231)]);
if(or__3824__auto____6232)
{return or__3824__auto____6232;
} else
{var or__3824__auto____6233 = (cljs.core._invoke["_"]);
if(or__3824__auto____6233)
{return or__3824__auto____6233;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3822__auto____6234 = this$;
if(and__3822__auto____6234)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3822__auto____6234;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{var x__2387__auto____6235 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6236 = (cljs.core._invoke[goog.typeOf(x__2387__auto____6235)]);
if(or__3824__auto____6236)
{return or__3824__auto____6236;
} else
{var or__3824__auto____6237 = (cljs.core._invoke["_"]);
if(or__3824__auto____6237)
{return or__3824__auto____6237;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3822__auto____6238 = this$;
if(and__3822__auto____6238)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3822__auto____6238;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{var x__2387__auto____6239 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6240 = (cljs.core._invoke[goog.typeOf(x__2387__auto____6239)]);
if(or__3824__auto____6240)
{return or__3824__auto____6240;
} else
{var or__3824__auto____6241 = (cljs.core._invoke["_"]);
if(or__3824__auto____6241)
{return or__3824__auto____6241;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3822__auto____6242 = this$;
if(and__3822__auto____6242)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3822__auto____6242;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{var x__2387__auto____6243 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6244 = (cljs.core._invoke[goog.typeOf(x__2387__auto____6243)]);
if(or__3824__auto____6244)
{return or__3824__auto____6244;
} else
{var or__3824__auto____6245 = (cljs.core._invoke["_"]);
if(or__3824__auto____6245)
{return or__3824__auto____6245;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3822__auto____6246 = this$;
if(and__3822__auto____6246)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3822__auto____6246;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{var x__2387__auto____6247 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6248 = (cljs.core._invoke[goog.typeOf(x__2387__auto____6247)]);
if(or__3824__auto____6248)
{return or__3824__auto____6248;
} else
{var or__3824__auto____6249 = (cljs.core._invoke["_"]);
if(or__3824__auto____6249)
{return or__3824__auto____6249;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3822__auto____6250 = this$;
if(and__3822__auto____6250)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3822__auto____6250;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{var x__2387__auto____6251 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6252 = (cljs.core._invoke[goog.typeOf(x__2387__auto____6251)]);
if(or__3824__auto____6252)
{return or__3824__auto____6252;
} else
{var or__3824__auto____6253 = (cljs.core._invoke["_"]);
if(or__3824__auto____6253)
{return or__3824__auto____6253;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3822__auto____6254 = this$;
if(and__3822__auto____6254)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3822__auto____6254;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{var x__2387__auto____6255 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6256 = (cljs.core._invoke[goog.typeOf(x__2387__auto____6255)]);
if(or__3824__auto____6256)
{return or__3824__auto____6256;
} else
{var or__3824__auto____6257 = (cljs.core._invoke["_"]);
if(or__3824__auto____6257)
{return or__3824__auto____6257;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3822__auto____6258 = this$;
if(and__3822__auto____6258)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3822__auto____6258;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{var x__2387__auto____6259 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6260 = (cljs.core._invoke[goog.typeOf(x__2387__auto____6259)]);
if(or__3824__auto____6260)
{return or__3824__auto____6260;
} else
{var or__3824__auto____6261 = (cljs.core._invoke["_"]);
if(or__3824__auto____6261)
{return or__3824__auto____6261;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3822__auto____6262 = this$;
if(and__3822__auto____6262)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3822__auto____6262;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{var x__2387__auto____6263 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6264 = (cljs.core._invoke[goog.typeOf(x__2387__auto____6263)]);
if(or__3824__auto____6264)
{return or__3824__auto____6264;
} else
{var or__3824__auto____6265 = (cljs.core._invoke["_"]);
if(or__3824__auto____6265)
{return or__3824__auto____6265;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3822__auto____6266 = this$;
if(and__3822__auto____6266)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3822__auto____6266;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{var x__2387__auto____6267 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6268 = (cljs.core._invoke[goog.typeOf(x__2387__auto____6267)]);
if(or__3824__auto____6268)
{return or__3824__auto____6268;
} else
{var or__3824__auto____6269 = (cljs.core._invoke["_"]);
if(or__3824__auto____6269)
{return or__3824__auto____6269;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3822__auto____6270 = this$;
if(and__3822__auto____6270)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3822__auto____6270;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{var x__2387__auto____6271 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6272 = (cljs.core._invoke[goog.typeOf(x__2387__auto____6271)]);
if(or__3824__auto____6272)
{return or__3824__auto____6272;
} else
{var or__3824__auto____6273 = (cljs.core._invoke["_"]);
if(or__3824__auto____6273)
{return or__3824__auto____6273;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if((function (){var and__3822__auto____6274 = this$;
if(and__3822__auto____6274)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3822__auto____6274;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{var x__2387__auto____6275 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6276 = (cljs.core._invoke[goog.typeOf(x__2387__auto____6275)]);
if(or__3824__auto____6276)
{return or__3824__auto____6276;
} else
{var or__3824__auto____6277 = (cljs.core._invoke["_"]);
if(or__3824__auto____6277)
{return or__3824__auto____6277;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if((function (){var and__3822__auto____6278 = this$;
if(and__3822__auto____6278)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3822__auto____6278;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{var x__2387__auto____6279 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6280 = (cljs.core._invoke[goog.typeOf(x__2387__auto____6279)]);
if(or__3824__auto____6280)
{return or__3824__auto____6280;
} else
{var or__3824__auto____6281 = (cljs.core._invoke["_"]);
if(or__3824__auto____6281)
{return or__3824__auto____6281;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if((function (){var and__3822__auto____6282 = this$;
if(and__3822__auto____6282)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3822__auto____6282;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{var x__2387__auto____6283 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6284 = (cljs.core._invoke[goog.typeOf(x__2387__auto____6283)]);
if(or__3824__auto____6284)
{return or__3824__auto____6284;
} else
{var or__3824__auto____6285 = (cljs.core._invoke["_"]);
if(or__3824__auto____6285)
{return or__3824__auto____6285;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
});
_invoke = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
switch(arguments.length){
case 1:
return _invoke__1.call(this,this$);
case 2:
return _invoke__2.call(this,this$,a);
case 3:
return _invoke__3.call(this,this$,a,b);
case 4:
return _invoke__4.call(this,this$,a,b,c);
case 5:
return _invoke__5.call(this,this$,a,b,c,d);
case 6:
return _invoke__6.call(this,this$,a,b,c,d,e);
case 7:
return _invoke__7.call(this,this$,a,b,c,d,e,f);
case 8:
return _invoke__8.call(this,this$,a,b,c,d,e,f,g);
case 9:
return _invoke__9.call(this,this$,a,b,c,d,e,f,g,h);
case 10:
return _invoke__10.call(this,this$,a,b,c,d,e,f,g,h,i);
case 11:
return _invoke__11.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case 12:
return _invoke__12.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return _invoke__13.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return _invoke__14.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return _invoke__15.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return _invoke__16.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return _invoke__17.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return _invoke__18.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return _invoke__19.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case 20:
return _invoke__20.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case 21:
return _invoke__21.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
_invoke.cljs$lang$arity$1 = _invoke__1;
_invoke.cljs$lang$arity$2 = _invoke__2;
_invoke.cljs$lang$arity$3 = _invoke__3;
_invoke.cljs$lang$arity$4 = _invoke__4;
_invoke.cljs$lang$arity$5 = _invoke__5;
_invoke.cljs$lang$arity$6 = _invoke__6;
_invoke.cljs$lang$arity$7 = _invoke__7;
_invoke.cljs$lang$arity$8 = _invoke__8;
_invoke.cljs$lang$arity$9 = _invoke__9;
_invoke.cljs$lang$arity$10 = _invoke__10;
_invoke.cljs$lang$arity$11 = _invoke__11;
_invoke.cljs$lang$arity$12 = _invoke__12;
_invoke.cljs$lang$arity$13 = _invoke__13;
_invoke.cljs$lang$arity$14 = _invoke__14;
_invoke.cljs$lang$arity$15 = _invoke__15;
_invoke.cljs$lang$arity$16 = _invoke__16;
_invoke.cljs$lang$arity$17 = _invoke__17;
_invoke.cljs$lang$arity$18 = _invoke__18;
_invoke.cljs$lang$arity$19 = _invoke__19;
_invoke.cljs$lang$arity$20 = _invoke__20;
_invoke.cljs$lang$arity$21 = _invoke__21;
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if((function (){var and__3822__auto____6290 = coll;
if(and__3822__auto____6290)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3822__auto____6290;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{var x__2387__auto____6291 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6292 = (cljs.core._count[goog.typeOf(x__2387__auto____6291)]);
if(or__3824__auto____6292)
{return or__3824__auto____6292;
} else
{var or__3824__auto____6293 = (cljs.core._count["_"]);
if(or__3824__auto____6293)
{return or__3824__auto____6293;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if((function (){var and__3822__auto____6298 = coll;
if(and__3822__auto____6298)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3822__auto____6298;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var x__2387__auto____6299 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6300 = (cljs.core._empty[goog.typeOf(x__2387__auto____6299)]);
if(or__3824__auto____6300)
{return or__3824__auto____6300;
} else
{var or__3824__auto____6301 = (cljs.core._empty["_"]);
if(or__3824__auto____6301)
{return or__3824__auto____6301;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3822__auto____6306 = coll;
if(and__3822__auto____6306)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3822__auto____6306;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{var x__2387__auto____6307 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6308 = (cljs.core._conj[goog.typeOf(x__2387__auto____6307)]);
if(or__3824__auto____6308)
{return or__3824__auto____6308;
} else
{var or__3824__auto____6309 = (cljs.core._conj["_"]);
if(or__3824__auto____6309)
{return or__3824__auto____6309;
} else
{throw cljs.core.missing_protocol.call(null,"ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__2 = (function (coll,n){
if((function (){var and__3822__auto____6318 = coll;
if(and__3822__auto____6318)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3822__auto____6318;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{var x__2387__auto____6319 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6320 = (cljs.core._nth[goog.typeOf(x__2387__auto____6319)]);
if(or__3824__auto____6320)
{return or__3824__auto____6320;
} else
{var or__3824__auto____6321 = (cljs.core._nth["_"]);
if(or__3824__auto____6321)
{return or__3824__auto____6321;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3822__auto____6322 = coll;
if(and__3822__auto____6322)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3822__auto____6322;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{var x__2387__auto____6323 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6324 = (cljs.core._nth[goog.typeOf(x__2387__auto____6323)]);
if(or__3824__auto____6324)
{return or__3824__auto____6324;
} else
{var or__3824__auto____6325 = (cljs.core._nth["_"]);
if(or__3824__auto____6325)
{return or__3824__auto____6325;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return _nth__2.call(this,coll,n);
case 3:
return _nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
_nth.cljs$lang$arity$2 = _nth__2;
_nth.cljs$lang$arity$3 = _nth__3;
return _nth;
})()
;
cljs.core.ASeq = {};
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if((function (){var and__3822__auto____6330 = coll;
if(and__3822__auto____6330)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3822__auto____6330;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{var x__2387__auto____6331 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6332 = (cljs.core._first[goog.typeOf(x__2387__auto____6331)]);
if(or__3824__auto____6332)
{return or__3824__auto____6332;
} else
{var or__3824__auto____6333 = (cljs.core._first["_"]);
if(or__3824__auto____6333)
{return or__3824__auto____6333;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if((function (){var and__3822__auto____6338 = coll;
if(and__3822__auto____6338)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3822__auto____6338;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{var x__2387__auto____6339 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6340 = (cljs.core._rest[goog.typeOf(x__2387__auto____6339)]);
if(or__3824__auto____6340)
{return or__3824__auto____6340;
} else
{var or__3824__auto____6341 = (cljs.core._rest["_"]);
if(or__3824__auto____6341)
{return or__3824__auto____6341;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.INext = {};
cljs.core._next = (function _next(coll){
if((function (){var and__3822__auto____6346 = coll;
if(and__3822__auto____6346)
{return coll.cljs$core$INext$_next$arity$1;
} else
{return and__3822__auto____6346;
}
})())
{return coll.cljs$core$INext$_next$arity$1(coll);
} else
{var x__2387__auto____6347 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6348 = (cljs.core._next[goog.typeOf(x__2387__auto____6347)]);
if(or__3824__auto____6348)
{return or__3824__auto____6348;
} else
{var or__3824__auto____6349 = (cljs.core._next["_"]);
if(or__3824__auto____6349)
{return or__3824__auto____6349;
} else
{throw cljs.core.missing_protocol.call(null,"INext.-next",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__2 = (function (o,k){
if((function (){var and__3822__auto____6358 = o;
if(and__3822__auto____6358)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3822__auto____6358;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{var x__2387__auto____6359 = (((o == null))?null:o);
return (function (){var or__3824__auto____6360 = (cljs.core._lookup[goog.typeOf(x__2387__auto____6359)]);
if(or__3824__auto____6360)
{return or__3824__auto____6360;
} else
{var or__3824__auto____6361 = (cljs.core._lookup["_"]);
if(or__3824__auto____6361)
{return or__3824__auto____6361;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3822__auto____6362 = o;
if(and__3822__auto____6362)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3822__auto____6362;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{var x__2387__auto____6363 = (((o == null))?null:o);
return (function (){var or__3824__auto____6364 = (cljs.core._lookup[goog.typeOf(x__2387__auto____6363)]);
if(or__3824__auto____6364)
{return or__3824__auto____6364;
} else
{var or__3824__auto____6365 = (cljs.core._lookup["_"]);
if(or__3824__auto____6365)
{return or__3824__auto____6365;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case 2:
return _lookup__2.call(this,o,k);
case 3:
return _lookup__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
_lookup.cljs$lang$arity$2 = _lookup__2;
_lookup.cljs$lang$arity$3 = _lookup__3;
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if((function (){var and__3822__auto____6370 = coll;
if(and__3822__auto____6370)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3822__auto____6370;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{var x__2387__auto____6371 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6372 = (cljs.core._contains_key_QMARK_[goog.typeOf(x__2387__auto____6371)]);
if(or__3824__auto____6372)
{return or__3824__auto____6372;
} else
{var or__3824__auto____6373 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3824__auto____6373)
{return or__3824__auto____6373;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3822__auto____6378 = coll;
if(and__3822__auto____6378)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3822__auto____6378;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{var x__2387__auto____6379 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6380 = (cljs.core._assoc[goog.typeOf(x__2387__auto____6379)]);
if(or__3824__auto____6380)
{return or__3824__auto____6380;
} else
{var or__3824__auto____6381 = (cljs.core._assoc["_"]);
if(or__3824__auto____6381)
{return or__3824__auto____6381;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3822__auto____6386 = coll;
if(and__3822__auto____6386)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3822__auto____6386;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{var x__2387__auto____6387 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6388 = (cljs.core._dissoc[goog.typeOf(x__2387__auto____6387)]);
if(or__3824__auto____6388)
{return or__3824__auto____6388;
} else
{var or__3824__auto____6389 = (cljs.core._dissoc["_"]);
if(or__3824__auto____6389)
{return or__3824__auto____6389;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.IMapEntry = {};
cljs.core._key = (function _key(coll){
if((function (){var and__3822__auto____6394 = coll;
if(and__3822__auto____6394)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3822__auto____6394;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{var x__2387__auto____6395 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6396 = (cljs.core._key[goog.typeOf(x__2387__auto____6395)]);
if(or__3824__auto____6396)
{return or__3824__auto____6396;
} else
{var or__3824__auto____6397 = (cljs.core._key["_"]);
if(or__3824__auto____6397)
{return or__3824__auto____6397;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){
if((function (){var and__3822__auto____6402 = coll;
if(and__3822__auto____6402)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3822__auto____6402;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{var x__2387__auto____6403 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6404 = (cljs.core._val[goog.typeOf(x__2387__auto____6403)]);
if(or__3824__auto____6404)
{return or__3824__auto____6404;
} else
{var or__3824__auto____6405 = (cljs.core._val["_"]);
if(or__3824__auto____6405)
{return or__3824__auto____6405;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3822__auto____6410 = coll;
if(and__3822__auto____6410)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3822__auto____6410;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{var x__2387__auto____6411 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6412 = (cljs.core._disjoin[goog.typeOf(x__2387__auto____6411)]);
if(or__3824__auto____6412)
{return or__3824__auto____6412;
} else
{var or__3824__auto____6413 = (cljs.core._disjoin["_"]);
if(or__3824__auto____6413)
{return or__3824__auto____6413;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if((function (){var and__3822__auto____6418 = coll;
if(and__3822__auto____6418)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3822__auto____6418;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{var x__2387__auto____6419 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6420 = (cljs.core._peek[goog.typeOf(x__2387__auto____6419)]);
if(or__3824__auto____6420)
{return or__3824__auto____6420;
} else
{var or__3824__auto____6421 = (cljs.core._peek["_"]);
if(or__3824__auto____6421)
{return or__3824__auto____6421;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if((function (){var and__3822__auto____6426 = coll;
if(and__3822__auto____6426)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3822__auto____6426;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{var x__2387__auto____6427 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6428 = (cljs.core._pop[goog.typeOf(x__2387__auto____6427)]);
if(or__3824__auto____6428)
{return or__3824__auto____6428;
} else
{var or__3824__auto____6429 = (cljs.core._pop["_"]);
if(or__3824__auto____6429)
{return or__3824__auto____6429;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3822__auto____6434 = coll;
if(and__3822__auto____6434)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3822__auto____6434;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{var x__2387__auto____6435 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6436 = (cljs.core._assoc_n[goog.typeOf(x__2387__auto____6435)]);
if(or__3824__auto____6436)
{return or__3824__auto____6436;
} else
{var or__3824__auto____6437 = (cljs.core._assoc_n["_"]);
if(or__3824__auto____6437)
{return or__3824__auto____6437;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if((function (){var and__3822__auto____6442 = o;
if(and__3822__auto____6442)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3822__auto____6442;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{var x__2387__auto____6443 = (((o == null))?null:o);
return (function (){var or__3824__auto____6444 = (cljs.core._deref[goog.typeOf(x__2387__auto____6443)]);
if(or__3824__auto____6444)
{return or__3824__auto____6444;
} else
{var or__3824__auto____6445 = (cljs.core._deref["_"]);
if(or__3824__auto____6445)
{return or__3824__auto____6445;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3822__auto____6450 = o;
if(and__3822__auto____6450)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3822__auto____6450;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{var x__2387__auto____6451 = (((o == null))?null:o);
return (function (){var or__3824__auto____6452 = (cljs.core._deref_with_timeout[goog.typeOf(x__2387__auto____6451)]);
if(or__3824__auto____6452)
{return or__3824__auto____6452;
} else
{var or__3824__auto____6453 = (cljs.core._deref_with_timeout["_"]);
if(or__3824__auto____6453)
{return or__3824__auto____6453;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if((function (){var and__3822__auto____6458 = o;
if(and__3822__auto____6458)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3822__auto____6458;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{var x__2387__auto____6459 = (((o == null))?null:o);
return (function (){var or__3824__auto____6460 = (cljs.core._meta[goog.typeOf(x__2387__auto____6459)]);
if(or__3824__auto____6460)
{return or__3824__auto____6460;
} else
{var or__3824__auto____6461 = (cljs.core._meta["_"]);
if(or__3824__auto____6461)
{return or__3824__auto____6461;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3822__auto____6466 = o;
if(and__3822__auto____6466)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3822__auto____6466;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{var x__2387__auto____6467 = (((o == null))?null:o);
return (function (){var or__3824__auto____6468 = (cljs.core._with_meta[goog.typeOf(x__2387__auto____6467)]);
if(or__3824__auto____6468)
{return or__3824__auto____6468;
} else
{var or__3824__auto____6469 = (cljs.core._with_meta["_"]);
if(or__3824__auto____6469)
{return or__3824__auto____6469;
} else
{throw cljs.core.missing_protocol.call(null,"IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__2 = (function (coll,f){
if((function (){var and__3822__auto____6478 = coll;
if(and__3822__auto____6478)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3822__auto____6478;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{var x__2387__auto____6479 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6480 = (cljs.core._reduce[goog.typeOf(x__2387__auto____6479)]);
if(or__3824__auto____6480)
{return or__3824__auto____6480;
} else
{var or__3824__auto____6481 = (cljs.core._reduce["_"]);
if(or__3824__auto____6481)
{return or__3824__auto____6481;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3822__auto____6482 = coll;
if(and__3822__auto____6482)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3822__auto____6482;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{var x__2387__auto____6483 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6484 = (cljs.core._reduce[goog.typeOf(x__2387__auto____6483)]);
if(or__3824__auto____6484)
{return or__3824__auto____6484;
} else
{var or__3824__auto____6485 = (cljs.core._reduce["_"]);
if(or__3824__auto____6485)
{return or__3824__auto____6485;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case 2:
return _reduce__2.call(this,coll,f);
case 3:
return _reduce__3.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
_reduce.cljs$lang$arity$2 = _reduce__2;
_reduce.cljs$lang$arity$3 = _reduce__3;
return _reduce;
})()
;
cljs.core.IKVReduce = {};
cljs.core._kv_reduce = (function _kv_reduce(coll,f,init){
if((function (){var and__3822__auto____6490 = coll;
if(and__3822__auto____6490)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3822__auto____6490;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{var x__2387__auto____6491 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6492 = (cljs.core._kv_reduce[goog.typeOf(x__2387__auto____6491)]);
if(or__3824__auto____6492)
{return or__3824__auto____6492;
} else
{var or__3824__auto____6493 = (cljs.core._kv_reduce["_"]);
if(or__3824__auto____6493)
{return or__3824__auto____6493;
} else
{throw cljs.core.missing_protocol.call(null,"IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3822__auto____6498 = o;
if(and__3822__auto____6498)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3822__auto____6498;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{var x__2387__auto____6499 = (((o == null))?null:o);
return (function (){var or__3824__auto____6500 = (cljs.core._equiv[goog.typeOf(x__2387__auto____6499)]);
if(or__3824__auto____6500)
{return or__3824__auto____6500;
} else
{var or__3824__auto____6501 = (cljs.core._equiv["_"]);
if(or__3824__auto____6501)
{return or__3824__auto____6501;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if((function (){var and__3822__auto____6506 = o;
if(and__3822__auto____6506)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3822__auto____6506;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{var x__2387__auto____6507 = (((o == null))?null:o);
return (function (){var or__3824__auto____6508 = (cljs.core._hash[goog.typeOf(x__2387__auto____6507)]);
if(or__3824__auto____6508)
{return or__3824__auto____6508;
} else
{var or__3824__auto____6509 = (cljs.core._hash["_"]);
if(or__3824__auto____6509)
{return or__3824__auto____6509;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if((function (){var and__3822__auto____6514 = o;
if(and__3822__auto____6514)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3822__auto____6514;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{var x__2387__auto____6515 = (((o == null))?null:o);
return (function (){var or__3824__auto____6516 = (cljs.core._seq[goog.typeOf(x__2387__auto____6515)]);
if(or__3824__auto____6516)
{return or__3824__auto____6516;
} else
{var or__3824__auto____6517 = (cljs.core._seq["_"]);
if(or__3824__auto____6517)
{return or__3824__auto____6517;
} else
{throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
cljs.core.ISequential = {};
cljs.core.IList = {};
cljs.core.IRecord = {};
cljs.core.IReversible = {};
cljs.core._rseq = (function _rseq(coll){
if((function (){var and__3822__auto____6522 = coll;
if(and__3822__auto____6522)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3822__auto____6522;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{var x__2387__auto____6523 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6524 = (cljs.core._rseq[goog.typeOf(x__2387__auto____6523)]);
if(or__3824__auto____6524)
{return or__3824__auto____6524;
} else
{var or__3824__auto____6525 = (cljs.core._rseq["_"]);
if(or__3824__auto____6525)
{return or__3824__auto____6525;
} else
{throw cljs.core.missing_protocol.call(null,"IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISorted = {};
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3822__auto____6530 = coll;
if(and__3822__auto____6530)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3822__auto____6530;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{var x__2387__auto____6531 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6532 = (cljs.core._sorted_seq[goog.typeOf(x__2387__auto____6531)]);
if(or__3824__auto____6532)
{return or__3824__auto____6532;
} else
{var or__3824__auto____6533 = (cljs.core._sorted_seq["_"]);
if(or__3824__auto____6533)
{return or__3824__auto____6533;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3822__auto____6538 = coll;
if(and__3822__auto____6538)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3822__auto____6538;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{var x__2387__auto____6539 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6540 = (cljs.core._sorted_seq_from[goog.typeOf(x__2387__auto____6539)]);
if(or__3824__auto____6540)
{return or__3824__auto____6540;
} else
{var or__3824__auto____6541 = (cljs.core._sorted_seq_from["_"]);
if(or__3824__auto____6541)
{return or__3824__auto____6541;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3822__auto____6546 = coll;
if(and__3822__auto____6546)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3822__auto____6546;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{var x__2387__auto____6547 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6548 = (cljs.core._entry_key[goog.typeOf(x__2387__auto____6547)]);
if(or__3824__auto____6548)
{return or__3824__auto____6548;
} else
{var or__3824__auto____6549 = (cljs.core._entry_key["_"]);
if(or__3824__auto____6549)
{return or__3824__auto____6549;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3822__auto____6554 = coll;
if(and__3822__auto____6554)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3822__auto____6554;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{var x__2387__auto____6555 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6556 = (cljs.core._comparator[goog.typeOf(x__2387__auto____6555)]);
if(or__3824__auto____6556)
{return or__3824__auto____6556;
} else
{var or__3824__auto____6557 = (cljs.core._comparator["_"]);
if(or__3824__auto____6557)
{return or__3824__auto____6557;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if((function (){var and__3822__auto____6562 = o;
if(and__3822__auto____6562)
{return o.cljs$core$IPrintable$_pr_seq$arity$2;
} else
{return and__3822__auto____6562;
}
})())
{return o.cljs$core$IPrintable$_pr_seq$arity$2(o,opts);
} else
{var x__2387__auto____6563 = (((o == null))?null:o);
return (function (){var or__3824__auto____6564 = (cljs.core._pr_seq[goog.typeOf(x__2387__auto____6563)]);
if(or__3824__auto____6564)
{return or__3824__auto____6564;
} else
{var or__3824__auto____6565 = (cljs.core._pr_seq["_"]);
if(or__3824__auto____6565)
{return or__3824__auto____6565;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IWriter = {};
cljs.core._write = (function _write(writer,s){
if((function (){var and__3822__auto____6570 = writer;
if(and__3822__auto____6570)
{return writer.cljs$core$IWriter$_write$arity$2;
} else
{return and__3822__auto____6570;
}
})())
{return writer.cljs$core$IWriter$_write$arity$2(writer,s);
} else
{var x__2387__auto____6571 = (((writer == null))?null:writer);
return (function (){var or__3824__auto____6572 = (cljs.core._write[goog.typeOf(x__2387__auto____6571)]);
if(or__3824__auto____6572)
{return or__3824__auto____6572;
} else
{var or__3824__auto____6573 = (cljs.core._write["_"]);
if(or__3824__auto____6573)
{return or__3824__auto____6573;
} else
{throw cljs.core.missing_protocol.call(null,"IWriter.-write",writer);
}
}
})().call(null,writer,s);
}
});
cljs.core._flush = (function _flush(writer){
if((function (){var and__3822__auto____6578 = writer;
if(and__3822__auto____6578)
{return writer.cljs$core$IWriter$_flush$arity$1;
} else
{return and__3822__auto____6578;
}
})())
{return writer.cljs$core$IWriter$_flush$arity$1(writer);
} else
{var x__2387__auto____6579 = (((writer == null))?null:writer);
return (function (){var or__3824__auto____6580 = (cljs.core._flush[goog.typeOf(x__2387__auto____6579)]);
if(or__3824__auto____6580)
{return or__3824__auto____6580;
} else
{var or__3824__auto____6581 = (cljs.core._flush["_"]);
if(or__3824__auto____6581)
{return or__3824__auto____6581;
} else
{throw cljs.core.missing_protocol.call(null,"IWriter.-flush",writer);
}
}
})().call(null,writer);
}
});
cljs.core.IPrintWithWriter = {};
cljs.core._pr_writer = (function _pr_writer(o,writer,opts){
if((function (){var and__3822__auto____6586 = o;
if(and__3822__auto____6586)
{return o.cljs$core$IPrintWithWriter$_pr_writer$arity$3;
} else
{return and__3822__auto____6586;
}
})())
{return o.cljs$core$IPrintWithWriter$_pr_writer$arity$3(o,writer,opts);
} else
{var x__2387__auto____6587 = (((o == null))?null:o);
return (function (){var or__3824__auto____6588 = (cljs.core._pr_writer[goog.typeOf(x__2387__auto____6587)]);
if(or__3824__auto____6588)
{return or__3824__auto____6588;
} else
{var or__3824__auto____6589 = (cljs.core._pr_writer["_"]);
if(or__3824__auto____6589)
{return or__3824__auto____6589;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintWithWriter.-pr-writer",o);
}
}
})().call(null,o,writer,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3822__auto____6594 = d;
if(and__3822__auto____6594)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3822__auto____6594;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{var x__2387__auto____6595 = (((d == null))?null:d);
return (function (){var or__3824__auto____6596 = (cljs.core._realized_QMARK_[goog.typeOf(x__2387__auto____6595)]);
if(or__3824__auto____6596)
{return or__3824__auto____6596;
} else
{var or__3824__auto____6597 = (cljs.core._realized_QMARK_["_"]);
if(or__3824__auto____6597)
{return or__3824__auto____6597;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3822__auto____6602 = this$;
if(and__3822__auto____6602)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3822__auto____6602;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{var x__2387__auto____6603 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6604 = (cljs.core._notify_watches[goog.typeOf(x__2387__auto____6603)]);
if(or__3824__auto____6604)
{return or__3824__auto____6604;
} else
{var or__3824__auto____6605 = (cljs.core._notify_watches["_"]);
if(or__3824__auto____6605)
{return or__3824__auto____6605;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3822__auto____6610 = this$;
if(and__3822__auto____6610)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3822__auto____6610;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{var x__2387__auto____6611 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6612 = (cljs.core._add_watch[goog.typeOf(x__2387__auto____6611)]);
if(or__3824__auto____6612)
{return or__3824__auto____6612;
} else
{var or__3824__auto____6613 = (cljs.core._add_watch["_"]);
if(or__3824__auto____6613)
{return or__3824__auto____6613;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3822__auto____6618 = this$;
if(and__3822__auto____6618)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3822__auto____6618;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{var x__2387__auto____6619 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6620 = (cljs.core._remove_watch[goog.typeOf(x__2387__auto____6619)]);
if(or__3824__auto____6620)
{return or__3824__auto____6620;
} else
{var or__3824__auto____6621 = (cljs.core._remove_watch["_"]);
if(or__3824__auto____6621)
{return or__3824__auto____6621;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
cljs.core.IEditableCollection = {};
cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3822__auto____6626 = coll;
if(and__3822__auto____6626)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3822__auto____6626;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{var x__2387__auto____6627 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6628 = (cljs.core._as_transient[goog.typeOf(x__2387__auto____6627)]);
if(or__3824__auto____6628)
{return or__3824__auto____6628;
} else
{var or__3824__auto____6629 = (cljs.core._as_transient["_"]);
if(or__3824__auto____6629)
{return or__3824__auto____6629;
} else
{throw cljs.core.missing_protocol.call(null,"IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ITransientCollection = {};
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3822__auto____6634 = tcoll;
if(and__3822__auto____6634)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3822__auto____6634;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{var x__2387__auto____6635 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____6636 = (cljs.core._conj_BANG_[goog.typeOf(x__2387__auto____6635)]);
if(or__3824__auto____6636)
{return or__3824__auto____6636;
} else
{var or__3824__auto____6637 = (cljs.core._conj_BANG_["_"]);
if(or__3824__auto____6637)
{return or__3824__auto____6637;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3822__auto____6642 = tcoll;
if(and__3822__auto____6642)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3822__auto____6642;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{var x__2387__auto____6643 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____6644 = (cljs.core._persistent_BANG_[goog.typeOf(x__2387__auto____6643)]);
if(or__3824__auto____6644)
{return or__3824__auto____6644;
} else
{var or__3824__auto____6645 = (cljs.core._persistent_BANG_["_"]);
if(or__3824__auto____6645)
{return or__3824__auto____6645;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientAssociative = {};
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3822__auto____6650 = tcoll;
if(and__3822__auto____6650)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3822__auto____6650;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{var x__2387__auto____6651 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____6652 = (cljs.core._assoc_BANG_[goog.typeOf(x__2387__auto____6651)]);
if(or__3824__auto____6652)
{return or__3824__auto____6652;
} else
{var or__3824__auto____6653 = (cljs.core._assoc_BANG_["_"]);
if(or__3824__auto____6653)
{return or__3824__auto____6653;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
cljs.core.ITransientMap = {};
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3822__auto____6658 = tcoll;
if(and__3822__auto____6658)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3822__auto____6658;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{var x__2387__auto____6659 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____6660 = (cljs.core._dissoc_BANG_[goog.typeOf(x__2387__auto____6659)]);
if(or__3824__auto____6660)
{return or__3824__auto____6660;
} else
{var or__3824__auto____6661 = (cljs.core._dissoc_BANG_["_"]);
if(or__3824__auto____6661)
{return or__3824__auto____6661;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
cljs.core.ITransientVector = {};
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3822__auto____6666 = tcoll;
if(and__3822__auto____6666)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3822__auto____6666;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{var x__2387__auto____6667 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____6668 = (cljs.core._assoc_n_BANG_[goog.typeOf(x__2387__auto____6667)]);
if(or__3824__auto____6668)
{return or__3824__auto____6668;
} else
{var or__3824__auto____6669 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3824__auto____6669)
{return or__3824__auto____6669;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3822__auto____6674 = tcoll;
if(and__3822__auto____6674)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3822__auto____6674;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{var x__2387__auto____6675 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____6676 = (cljs.core._pop_BANG_[goog.typeOf(x__2387__auto____6675)]);
if(or__3824__auto____6676)
{return or__3824__auto____6676;
} else
{var or__3824__auto____6677 = (cljs.core._pop_BANG_["_"]);
if(or__3824__auto____6677)
{return or__3824__auto____6677;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientSet = {};
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3822__auto____6682 = tcoll;
if(and__3822__auto____6682)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3822__auto____6682;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{var x__2387__auto____6683 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____6684 = (cljs.core._disjoin_BANG_[goog.typeOf(x__2387__auto____6683)]);
if(or__3824__auto____6684)
{return or__3824__auto____6684;
} else
{var or__3824__auto____6685 = (cljs.core._disjoin_BANG_["_"]);
if(or__3824__auto____6685)
{return or__3824__auto____6685;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
cljs.core.IComparable = {};
cljs.core._compare = (function _compare(x,y){
if((function (){var and__3822__auto____6690 = x;
if(and__3822__auto____6690)
{return x.cljs$core$IComparable$_compare$arity$2;
} else
{return and__3822__auto____6690;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else
{var x__2387__auto____6691 = (((x == null))?null:x);
return (function (){var or__3824__auto____6692 = (cljs.core._compare[goog.typeOf(x__2387__auto____6691)]);
if(or__3824__auto____6692)
{return or__3824__auto____6692;
} else
{var or__3824__auto____6693 = (cljs.core._compare["_"]);
if(or__3824__auto____6693)
{return or__3824__auto____6693;
} else
{throw cljs.core.missing_protocol.call(null,"IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});
cljs.core.IChunk = {};
cljs.core._drop_first = (function _drop_first(coll){
if((function (){var and__3822__auto____6698 = coll;
if(and__3822__auto____6698)
{return coll.cljs$core$IChunk$_drop_first$arity$1;
} else
{return and__3822__auto____6698;
}
})())
{return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else
{var x__2387__auto____6699 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6700 = (cljs.core._drop_first[goog.typeOf(x__2387__auto____6699)]);
if(or__3824__auto____6700)
{return or__3824__auto____6700;
} else
{var or__3824__auto____6701 = (cljs.core._drop_first["_"]);
if(or__3824__auto____6701)
{return or__3824__auto____6701;
} else
{throw cljs.core.missing_protocol.call(null,"IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedSeq = {};
cljs.core._chunked_first = (function _chunked_first(coll){
if((function (){var and__3822__auto____6706 = coll;
if(and__3822__auto____6706)
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else
{return and__3822__auto____6706;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else
{var x__2387__auto____6707 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6708 = (cljs.core._chunked_first[goog.typeOf(x__2387__auto____6707)]);
if(or__3824__auto____6708)
{return or__3824__auto____6708;
} else
{var or__3824__auto____6709 = (cljs.core._chunked_first["_"]);
if(or__3824__auto____6709)
{return or__3824__auto____6709;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._chunked_rest = (function _chunked_rest(coll){
if((function (){var and__3822__auto____6714 = coll;
if(and__3822__auto____6714)
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else
{return and__3822__auto____6714;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else
{var x__2387__auto____6715 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6716 = (cljs.core._chunked_rest[goog.typeOf(x__2387__auto____6715)]);
if(or__3824__auto____6716)
{return or__3824__auto____6716;
} else
{var or__3824__auto____6717 = (cljs.core._chunked_rest["_"]);
if(or__3824__auto____6717)
{return or__3824__auto____6717;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedNext = {};
cljs.core._chunked_next = (function _chunked_next(coll){
if((function (){var and__3822__auto____6722 = coll;
if(and__3822__auto____6722)
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else
{return and__3822__auto____6722;
}
})())
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else
{var x__2387__auto____6723 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6724 = (cljs.core._chunked_next[goog.typeOf(x__2387__auto____6723)]);
if(or__3824__auto____6724)
{return or__3824__auto____6724;
} else
{var or__3824__auto____6725 = (cljs.core._chunked_next["_"]);
if(or__3824__auto____6725)
{return or__3824__auto____6725;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedNext.-chunked-next",coll);
}
}
})().call(null,coll);
}
});
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__6729__6730 = coll;
if(G__6729__6730)
{if((function (){var or__3824__auto____6731 = (G__6729__6730.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3824__auto____6731)
{return or__3824__auto____6731;
} else
{return G__6729__6730.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__6729__6730.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__6729__6730);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__6729__6730);
}
})())
{return coll;
} else
{return cljs.core._seq.call(null,coll);
}
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__6736__6737 = coll;
if(G__6736__6737)
{if((function (){var or__3824__auto____6738 = (G__6736__6737.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____6738)
{return or__3824__auto____6738;
} else
{return G__6736__6737.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__6736__6737.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__6736__6737);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__6736__6737);
}
})())
{return cljs.core._first.call(null,coll);
} else
{var s__6739 = cljs.core.seq.call(null,coll);
if((s__6739 == null))
{return null;
} else
{return cljs.core._first.call(null,s__6739);
}
}
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
if(!((coll == null)))
{if((function (){var G__6744__6745 = coll;
if(G__6744__6745)
{if((function (){var or__3824__auto____6746 = (G__6744__6745.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____6746)
{return or__3824__auto____6746;
} else
{return G__6744__6745.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__6744__6745.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__6744__6745);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__6744__6745);
}
})())
{return cljs.core._rest.call(null,coll);
} else
{var s__6747 = cljs.core.seq.call(null,coll);
if(!((s__6747 == null)))
{return cljs.core._rest.call(null,s__6747);
} else
{return cljs.core.List.EMPTY;
}
}
} else
{return cljs.core.List.EMPTY;
}
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__6751__6752 = coll;
if(G__6751__6752)
{if((function (){var or__3824__auto____6753 = (G__6751__6752.cljs$lang$protocol_mask$partition0$ & 128);
if(or__3824__auto____6753)
{return or__3824__auto____6753;
} else
{return G__6751__6752.cljs$core$INext$;
}
})())
{return true;
} else
{if((!G__6751__6752.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__6751__6752);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__6751__6752);
}
})())
{return cljs.core._next.call(null,coll);
} else
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
}
}
});
/**
* Equality. Returns true if x equals y, false if not. Compares
* numbers and collections in a type-independent manner.  Clojure's immutable data
* structures define -equiv (and thus =) as a value, not an identity,
* comparison.
* @param {...*} var_args
*/
cljs.core._EQ_ = (function() {
var _EQ_ = null;
var _EQ___1 = (function (x){
return true;
});
var _EQ___2 = (function (x,y){
var or__3824__auto____6755 = (x === y);
if(or__3824__auto____6755)
{return or__3824__auto____6755;
} else
{return cljs.core._equiv.call(null,x,y);
}
});
var _EQ___3 = (function() { 
var G__6756__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__6757 = y;
var G__6758 = cljs.core.first.call(null,more);
var G__6759 = cljs.core.next.call(null,more);
x = G__6757;
y = G__6758;
more = G__6759;
continue;
}
} else
{return _EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__6756 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6756__delegate.call(this, x, y, more);
};
G__6756.cljs$lang$maxFixedArity = 2;
G__6756.cljs$lang$applyTo = (function (arglist__6760){
var x = cljs.core.first(arglist__6760);
var y = cljs.core.first(cljs.core.next(arglist__6760));
var more = cljs.core.rest(cljs.core.next(arglist__6760));
return G__6756__delegate(x, y, more);
});
G__6756.cljs$lang$arity$variadic = G__6756__delegate;
return G__6756;
})()
;
_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ___1.call(this,x);
case 2:
return _EQ___2.call(this,x,y);
default:
return _EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_EQ_.cljs$lang$maxFixedArity = 2;
_EQ_.cljs$lang$applyTo = _EQ___3.cljs$lang$applyTo;
_EQ_.cljs$lang$arity$1 = _EQ___1;
_EQ_.cljs$lang$arity$2 = _EQ___2;
_EQ_.cljs$lang$arity$variadic = _EQ___3.cljs$lang$arity$variadic;
return _EQ_;
})()
;
cljs.core.type = (function type(x){
if((x == null))
{return null;
} else
{return x.constructor;
}
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o instanceof t);
});
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__6761 = null;
var G__6761__2 = (function (o,k){
return null;
});
var G__6761__3 = (function (o,k,not_found){
return not_found;
});
G__6761 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__6761__2.call(this,o,k);
case 3:
return G__6761__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6761;
})()
);
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.call(null,k,v);
}));
(cljs.core.INext["null"] = true);
(cljs.core._next["null"] = (function (_){
return null;
}));
(cljs.core.IPrintWithWriter["null"] = true);
(cljs.core._pr_writer["null"] = (function (o,writer,_){
return cljs.core._write.call(null,writer,"nil");
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__6762 = null;
var G__6762__2 = (function (_,f){
return f.call(null);
});
var G__6762__3 = (function (_,f,start){
return start;
});
G__6762 = function(_,f,start){
switch(arguments.length){
case 2:
return G__6762__2.call(this,_,f);
case 3:
return G__6762__3.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6762;
})()
);
(cljs.core.IPrintable["null"] = true);
(cljs.core._pr_seq["null"] = (function (o){
return cljs.core.list.call(null,"nil");
}));
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.call(null);
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return (o == null);
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__6763 = null;
var G__6763__2 = (function (_,n){
return null;
});
var G__6763__3 = (function (_,n,not_found){
return not_found;
});
G__6763 = function(_,n,not_found){
switch(arguments.length){
case 2:
return G__6763__2.call(this,_,n);
case 3:
return G__6763__3.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6763;
})()
);
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var and__3822__auto____6764 = cljs.core.instance_QMARK_.call(null,Date,other);
if(and__3822__auto____6764)
{return (o.toString() === other.toString());
} else
{return and__3822__auto____6764;
}
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return (x === o);
}));
(cljs.core.IHash["boolean"] = true);
(cljs.core._hash["boolean"] = (function (o){
if((o === true))
{return 1;
} else
{return 0;
}
}));
(cljs.core.IHash["_"] = true);
(cljs.core._hash["_"] = (function (o){
return goog.getUid(o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});

goog.provide('cljs.core.Reduced');

/**
* @constructor
*/
cljs.core.Reduced = (function (val){
this.val = val;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32768;
})
cljs.core.Reduced.cljs$lang$type = true;
cljs.core.Reduced.cljs$lang$ctorPrSeq = (function (this__2322__auto__){
return cljs.core.list.call(null,"cljs.core/Reduced");
});
cljs.core.Reduced.cljs$lang$ctorPrWriter = (function (this__2322__auto__,writer__2323__auto__){
return cljs.core._write.call(null,writer__2323__auto__,"cljs.core/Reduced");
});
cljs.core.Reduced.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var this__6765 = this;
return this__6765.val;
});
cljs.core.Reduced;
/**
* Wraps x in a way such that a reduce will terminate with the value x
*/
cljs.core.reduced = (function reduced(x){
return (new cljs.core.Reduced(x));
});
/**
* Returns true if x is the result of a call to reduced
*/
cljs.core.reduced_QMARK_ = (function reduced_QMARK_(r){
return cljs.core.instance_QMARK_.call(null,cljs.core.Reduced,r);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__2 = (function (cicoll,f){
var cnt__6778 = cljs.core._count.call(null,cicoll);
if((cnt__6778 === 0))
{return f.call(null);
} else
{var val__6779 = cljs.core._nth.call(null,cicoll,0);
var n__6780 = 1;
while(true){
if((n__6780 < cnt__6778))
{var nval__6781 = f.call(null,val__6779,cljs.core._nth.call(null,cicoll,n__6780));
if(cljs.core.reduced_QMARK_.call(null,nval__6781))
{return cljs.core.deref.call(null,nval__6781);
} else
{{
var G__6790 = nval__6781;
var G__6791 = (n__6780 + 1);
val__6779 = G__6790;
n__6780 = G__6791;
continue;
}
}
} else
{return val__6779;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var cnt__6782 = cljs.core._count.call(null,cicoll);
var val__6783 = val;
var n__6784 = 0;
while(true){
if((n__6784 < cnt__6782))
{var nval__6785 = f.call(null,val__6783,cljs.core._nth.call(null,cicoll,n__6784));
if(cljs.core.reduced_QMARK_.call(null,nval__6785))
{return cljs.core.deref.call(null,nval__6785);
} else
{{
var G__6792 = nval__6785;
var G__6793 = (n__6784 + 1);
val__6783 = G__6792;
n__6784 = G__6793;
continue;
}
}
} else
{return val__6783;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var cnt__6786 = cljs.core._count.call(null,cicoll);
var val__6787 = val;
var n__6788 = idx;
while(true){
if((n__6788 < cnt__6786))
{var nval__6789 = f.call(null,val__6787,cljs.core._nth.call(null,cicoll,n__6788));
if(cljs.core.reduced_QMARK_.call(null,nval__6789))
{return cljs.core.deref.call(null,nval__6789);
} else
{{
var G__6794 = nval__6789;
var G__6795 = (n__6788 + 1);
val__6787 = G__6794;
n__6788 = G__6795;
continue;
}
}
} else
{return val__6787;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case 2:
return ci_reduce__2.call(this,cicoll,f);
case 3:
return ci_reduce__3.call(this,cicoll,f,val);
case 4:
return ci_reduce__4.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
ci_reduce.cljs$lang$arity$2 = ci_reduce__2;
ci_reduce.cljs$lang$arity$3 = ci_reduce__3;
ci_reduce.cljs$lang$arity$4 = ci_reduce__4;
return ci_reduce;
})()
;
cljs.core.array_reduce = (function() {
var array_reduce = null;
var array_reduce__2 = (function (arr,f){
var cnt__6808 = arr.length;
if((arr.length === 0))
{return f.call(null);
} else
{var val__6809 = (arr[0]);
var n__6810 = 1;
while(true){
if((n__6810 < cnt__6808))
{var nval__6811 = f.call(null,val__6809,(arr[n__6810]));
if(cljs.core.reduced_QMARK_.call(null,nval__6811))
{return cljs.core.deref.call(null,nval__6811);
} else
{{
var G__6820 = nval__6811;
var G__6821 = (n__6810 + 1);
val__6809 = G__6820;
n__6810 = G__6821;
continue;
}
}
} else
{return val__6809;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){
var cnt__6812 = arr.length;
var val__6813 = val;
var n__6814 = 0;
while(true){
if((n__6814 < cnt__6812))
{var nval__6815 = f.call(null,val__6813,(arr[n__6814]));
if(cljs.core.reduced_QMARK_.call(null,nval__6815))
{return cljs.core.deref.call(null,nval__6815);
} else
{{
var G__6822 = nval__6815;
var G__6823 = (n__6814 + 1);
val__6813 = G__6822;
n__6814 = G__6823;
continue;
}
}
} else
{return val__6813;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){
var cnt__6816 = arr.length;
var val__6817 = val;
var n__6818 = idx;
while(true){
if((n__6818 < cnt__6816))
{var nval__6819 = f.call(null,val__6817,(arr[n__6818]));
if(cljs.core.reduced_QMARK_.call(null,nval__6819))
{return cljs.core.deref.call(null,nval__6819);
} else
{{
var G__6824 = nval__6819;
var G__6825 = (n__6818 + 1);
val__6817 = G__6824;
n__6818 = G__6825;
continue;
}
}
} else
{return val__6817;
}
break;
}
});
array_reduce = function(arr,f,val,idx){
switch(arguments.length){
case 2:
return array_reduce__2.call(this,arr,f);
case 3:
return array_reduce__3.call(this,arr,f,val);
case 4:
return array_reduce__4.call(this,arr,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
array_reduce.cljs$lang$arity$2 = array_reduce__2;
array_reduce.cljs$lang$arity$3 = array_reduce__3;
array_reduce.cljs$lang$arity$4 = array_reduce__4;
return array_reduce;
})()
;
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var G__6829__6830 = x;
if(G__6829__6830)
{if((function (){var or__3824__auto____6831 = (G__6829__6830.cljs$lang$protocol_mask$partition0$ & 2);
if(or__3824__auto____6831)
{return or__3824__auto____6831;
} else
{return G__6829__6830.cljs$core$ICounted$;
}
})())
{return true;
} else
{if((!G__6829__6830.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__6829__6830);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__6829__6830);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__6835__6836 = x;
if(G__6835__6836)
{if((function (){var or__3824__auto____6837 = (G__6835__6836.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____6837)
{return or__3824__auto____6837;
} else
{return G__6835__6836.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__6835__6836.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__6835__6836);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__6835__6836);
}
});

goog.provide('cljs.core.IndexedSeq');

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 166199550;
})
cljs.core.IndexedSeq.cljs$lang$type = true;
cljs.core.IndexedSeq.cljs$lang$ctorPrSeq = (function (this__2322__auto__){
return cljs.core.list.call(null,"cljs.core/IndexedSeq");
});
cljs.core.IndexedSeq.cljs$lang$ctorPrWriter = (function (this__2322__auto__,writer__2323__auto__){
return cljs.core._write.call(null,writer__2323__auto__,"cljs.core/IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__6838 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var this__6839 = this;
if(((this__6839.i + 1) < this__6839.a.length))
{return (new cljs.core.IndexedSeq(this__6839.a,(this__6839.i + 1)));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__6840 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__6841 = this;
var c__6842 = coll.cljs$core$ICounted$_count$arity$1(coll);
if((c__6842 > 0))
{return (new cljs.core.RSeq(coll,(c__6842 - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.IndexedSeq.prototype.toString = (function (){
var this__6843 = this;
var this__6844 = this;
return cljs.core.pr_str.call(null,this__6844);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__6845 = this;
if(cljs.core.counted_QMARK_.call(null,this__6845.a))
{return cljs.core.ci_reduce.call(null,this__6845.a,f,(this__6845.a[this__6845.i]),(this__6845.i + 1));
} else
{return cljs.core.ci_reduce.call(null,coll,f,(this__6845.a[this__6845.i]),0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__6846 = this;
if(cljs.core.counted_QMARK_.call(null,this__6846.a))
{return cljs.core.ci_reduce.call(null,this__6846.a,f,start,this__6846.i);
} else
{return cljs.core.ci_reduce.call(null,coll,f,start,0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__6847 = this;
return this$;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__6848 = this;
return (this__6848.a.length - this__6848.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__6849 = this;
return (this__6849.a[this__6849.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__6850 = this;
if(((this__6850.i + 1) < this__6850.a.length))
{return (new cljs.core.IndexedSeq(this__6850.a,(this__6850.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__6851 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__6852 = this;
var i__6853 = (n + this__6852.i);
if((i__6853 < this__6852.a.length))
{return (this__6852.a[i__6853]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__6854 = this;
var i__6855 = (n + this__6854.i);
if((i__6855 < this__6854.a.length))
{return (this__6854.a[i__6855]);
} else
{return not_found;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__6856 = this;
return cljs.core.List.EMPTY;
});
cljs.core.IndexedSeq;
cljs.core.prim_seq = (function() {
var prim_seq = null;
var prim_seq__1 = (function (prim){
return prim_seq.call(null,prim,0);
});
var prim_seq__2 = (function (prim,i){
if((prim.length === 0))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
prim_seq = function(prim,i){
switch(arguments.length){
case 1:
return prim_seq__1.call(this,prim);
case 2:
return prim_seq__2.call(this,prim,i);
}
throw('Invalid arity: ' + arguments.length);
};
prim_seq.cljs$lang$arity$1 = prim_seq__1;
prim_seq.cljs$lang$arity$2 = prim_seq__2;
return prim_seq;
})()
;
cljs.core.array_seq = (function() {
var array_seq = null;
var array_seq__1 = (function (array){
return cljs.core.prim_seq.call(null,array,0);
});
var array_seq__2 = (function (array,i){
return cljs.core.prim_seq.call(null,array,i);
});
array_seq = function(array,i){
switch(arguments.length){
case 1:
return array_seq__1.call(this,array);
case 2:
return array_seq__2.call(this,array,i);
}
throw('Invalid arity: ' + arguments.length);
};
array_seq.cljs$lang$arity$1 = array_seq__1;
array_seq.cljs$lang$arity$2 = array_seq__2;
return array_seq;
})()
;
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__6857 = null;
var G__6857__2 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__6857__3 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__6857 = function(array,f,start){
switch(arguments.length){
case 2:
return G__6857__2.call(this,array,f);
case 3:
return G__6857__3.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6857;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__6858 = null;
var G__6858__2 = (function (array,k){
return (array[k]);
});
var G__6858__3 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__6858 = function(array,k,not_found){
switch(arguments.length){
case 2:
return G__6858__2.call(this,array,k);
case 3:
return G__6858__3.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6858;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__6859 = null;
var G__6859__2 = (function (array,n){
if((n < array.length))
{return (array[n]);
} else
{return null;
}
});
var G__6859__3 = (function (array,n,not_found){
if((n < array.length))
{return (array[n]);
} else
{return not_found;
}
});
G__6859 = function(array,n,not_found){
switch(arguments.length){
case 2:
return G__6859__2.call(this,array,n);
case 3:
return G__6859__3.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6859;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.call(null,array,0);
}));

goog.provide('cljs.core.RSeq');

/**
* @constructor
*/
cljs.core.RSeq = (function (ci,i,meta){
this.ci = ci;
this.i = i;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850574;
})
cljs.core.RSeq.cljs$lang$type = true;
cljs.core.RSeq.cljs$lang$ctorPrSeq = (function (this__2322__auto__){
return cljs.core.list.call(null,"cljs.core/RSeq");
});
cljs.core.RSeq.cljs$lang$ctorPrWriter = (function (this__2322__auto__,writer__2323__auto__){
return cljs.core._write.call(null,writer__2323__auto__,"cljs.core/RSeq");
});
cljs.core.RSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__6860 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__6861 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.RSeq.prototype.toString = (function (){
var this__6862 = this;
var this__6863 = this;
return cljs.core.pr_str.call(null,this__6863);
});
cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__6864 = this;
return coll;
});
cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__6865 = this;
return (this__6865.i + 1);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__6866 = this;
return cljs.core._nth.call(null,this__6866.ci,this__6866.i);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__6867 = this;
if((this__6867.i > 0))
{return (new cljs.core.RSeq(this__6867.ci,(this__6867.i - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__6868 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var this__6869 = this;
return (new cljs.core.RSeq(this__6869.ci,this__6869.i,new_meta));
});
cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__6870 = this;
return this__6870.meta;
});
cljs.core.RSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__6871 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__6871.meta);
});
cljs.core.RSeq;
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
var sn__6873 = cljs.core.next.call(null,s);
if(!((sn__6873 == null)))
{{
var G__6874 = sn__6873;
s = G__6874;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return (x === o);
}));
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__2 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__3 = (function() { 
var G__6875__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__6876 = conj.call(null,coll,x);
var G__6877 = cljs.core.first.call(null,xs);
var G__6878 = cljs.core.next.call(null,xs);
coll = G__6876;
x = G__6877;
xs = G__6878;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__6875 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6875__delegate.call(this, coll, x, xs);
};
G__6875.cljs$lang$maxFixedArity = 2;
G__6875.cljs$lang$applyTo = (function (arglist__6879){
var coll = cljs.core.first(arglist__6879);
var x = cljs.core.first(cljs.core.next(arglist__6879));
var xs = cljs.core.rest(cljs.core.next(arglist__6879));
return G__6875__delegate(coll, x, xs);
});
G__6875.cljs$lang$arity$variadic = G__6875__delegate;
return G__6875;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj__2.call(this,coll,x);
default:
return conj__3.cljs$lang$arity$variadic(coll,x, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__3.cljs$lang$applyTo;
conj.cljs$lang$arity$2 = conj__2;
conj.cljs$lang$arity$variadic = conj__3.cljs$lang$arity$variadic;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty.call(null,coll);
});
cljs.core.accumulating_seq_count = (function accumulating_seq_count(coll){
var s__6882 = cljs.core.seq.call(null,coll);
var acc__6883 = 0;
while(true){
if(cljs.core.counted_QMARK_.call(null,s__6882))
{return (acc__6883 + cljs.core._count.call(null,s__6882));
} else
{{
var G__6884 = cljs.core.next.call(null,s__6882);
var G__6885 = (acc__6883 + 1);
s__6882 = G__6884;
acc__6883 = G__6885;
continue;
}
}
break;
}
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
if(cljs.core.counted_QMARK_.call(null,coll))
{return cljs.core._count.call(null,coll);
} else
{return cljs.core.accumulating_seq_count.call(null,coll);
}
});
cljs.core.linear_traversal_nth = (function() {
var linear_traversal_nth = null;
var linear_traversal_nth__2 = (function (coll,n){
while(true){
if((coll == null))
{throw (new Error("Index out of bounds"));
} else
{if((n === 0))
{if(cljs.core.seq.call(null,coll))
{return cljs.core.first.call(null,coll);
} else
{throw (new Error("Index out of bounds"));
}
} else
{if(cljs.core.indexed_QMARK_.call(null,coll))
{return cljs.core._nth.call(null,coll,n);
} else
{if(cljs.core.seq.call(null,coll))
{{
var G__6886 = cljs.core.next.call(null,coll);
var G__6887 = (n - 1);
coll = G__6886;
n = G__6887;
continue;
}
} else
{if("\uFDD0'else")
{throw (new Error("Index out of bounds"));
} else
{return null;
}
}
}
}
}
break;
}
});
var linear_traversal_nth__3 = (function (coll,n,not_found){
while(true){
if((coll == null))
{return not_found;
} else
{if((n === 0))
{if(cljs.core.seq.call(null,coll))
{return cljs.core.first.call(null,coll);
} else
{return not_found;
}
} else
{if(cljs.core.indexed_QMARK_.call(null,coll))
{return cljs.core._nth.call(null,coll,n,not_found);
} else
{if(cljs.core.seq.call(null,coll))
{{
var G__6888 = cljs.core.next.call(null,coll);
var G__6889 = (n - 1);
var G__6890 = not_found;
coll = G__6888;
n = G__6889;
not_found = G__6890;
continue;
}
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
}
break;
}
});
linear_traversal_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return linear_traversal_nth__2.call(this,coll,n);
case 3:
return linear_traversal_nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
linear_traversal_nth.cljs$lang$arity$2 = linear_traversal_nth__2;
linear_traversal_nth.cljs$lang$arity$3 = linear_traversal_nth__3;
return linear_traversal_nth;
})()
;
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__2 = (function (coll,n){
if((coll == null))
{return null;
} else
{if((function (){var G__6897__6898 = coll;
if(G__6897__6898)
{if((function (){var or__3824__auto____6899 = (G__6897__6898.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____6899)
{return or__3824__auto____6899;
} else
{return G__6897__6898.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__6897__6898.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__6897__6898);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__6897__6898);
}
})())
{return cljs.core._nth.call(null,coll,Math.floor(n));
} else
{return cljs.core.linear_traversal_nth.call(null,coll,Math.floor(n));
}
}
});
var nth__3 = (function (coll,n,not_found){
if(!((coll == null)))
{if((function (){var G__6900__6901 = coll;
if(G__6900__6901)
{if((function (){var or__3824__auto____6902 = (G__6900__6901.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____6902)
{return or__3824__auto____6902;
} else
{return G__6900__6901.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__6900__6901.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__6900__6901);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__6900__6901);
}
})())
{return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
} else
{return cljs.core.linear_traversal_nth.call(null,coll,Math.floor(n),not_found);
}
} else
{return not_found;
}
});
nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return nth__2.call(this,coll,n);
case 3:
return nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
nth.cljs$lang$arity$2 = nth__2;
nth.cljs$lang$arity$3 = nth__3;
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__2 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__3 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case 2:
return get__2.call(this,o,k);
case 3:
return get__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
get.cljs$lang$arity$2 = get__2;
get.cljs$lang$arity$3 = get__3;
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__3 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__4 = (function() { 
var G__6905__delegate = function (coll,k,v,kvs){
while(true){
var ret__6904 = assoc.call(null,coll,k,v);
if(cljs.core.truth_(kvs))
{{
var G__6906 = ret__6904;
var G__6907 = cljs.core.first.call(null,kvs);
var G__6908 = cljs.core.second.call(null,kvs);
var G__6909 = cljs.core.nnext.call(null,kvs);
coll = G__6906;
k = G__6907;
v = G__6908;
kvs = G__6909;
continue;
}
} else
{return ret__6904;
}
break;
}
};
var G__6905 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6905__delegate.call(this, coll, k, v, kvs);
};
G__6905.cljs$lang$maxFixedArity = 3;
G__6905.cljs$lang$applyTo = (function (arglist__6910){
var coll = cljs.core.first(arglist__6910);
var k = cljs.core.first(cljs.core.next(arglist__6910));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6910)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6910)));
return G__6905__delegate(coll, k, v, kvs);
});
G__6905.cljs$lang$arity$variadic = G__6905__delegate;
return G__6905;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 3:
return assoc__3.call(this,coll,k,v);
default:
return assoc__4.cljs$lang$arity$variadic(coll,k,v, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__4.cljs$lang$applyTo;
assoc.cljs$lang$arity$3 = assoc__3;
assoc.cljs$lang$arity$variadic = assoc__4.cljs$lang$arity$variadic;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__1 = (function (coll){
return coll;
});
var dissoc__2 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__3 = (function() { 
var G__6913__delegate = function (coll,k,ks){
while(true){
var ret__6912 = dissoc.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__6914 = ret__6912;
var G__6915 = cljs.core.first.call(null,ks);
var G__6916 = cljs.core.next.call(null,ks);
coll = G__6914;
k = G__6915;
ks = G__6916;
continue;
}
} else
{return ret__6912;
}
break;
}
};
var G__6913 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6913__delegate.call(this, coll, k, ks);
};
G__6913.cljs$lang$maxFixedArity = 2;
G__6913.cljs$lang$applyTo = (function (arglist__6917){
var coll = cljs.core.first(arglist__6917);
var k = cljs.core.first(cljs.core.next(arglist__6917));
var ks = cljs.core.rest(cljs.core.next(arglist__6917));
return G__6913__delegate(coll, k, ks);
});
G__6913.cljs$lang$arity$variadic = G__6913__delegate;
return G__6913;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return dissoc__1.call(this,coll);
case 2:
return dissoc__2.call(this,coll,k);
default:
return dissoc__3.cljs$lang$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__3.cljs$lang$applyTo;
dissoc.cljs$lang$arity$1 = dissoc__1;
dissoc.cljs$lang$arity$2 = dissoc__2;
dissoc.cljs$lang$arity$variadic = dissoc__3.cljs$lang$arity$variadic;
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta.call(null,o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if((function (){var G__6921__6922 = o;
if(G__6921__6922)
{if((function (){var or__3824__auto____6923 = (G__6921__6922.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____6923)
{return or__3824__auto____6923;
} else
{return G__6921__6922.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__6921__6922.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__6921__6922);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__6921__6922);
}
})())
{return cljs.core._meta.call(null,o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek.call(null,coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop.call(null,coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__1 = (function (coll){
return coll;
});
var disj__2 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__3 = (function() { 
var G__6926__delegate = function (coll,k,ks){
while(true){
var ret__6925 = disj.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__6927 = ret__6925;
var G__6928 = cljs.core.first.call(null,ks);
var G__6929 = cljs.core.next.call(null,ks);
coll = G__6927;
k = G__6928;
ks = G__6929;
continue;
}
} else
{return ret__6925;
}
break;
}
};
var G__6926 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6926__delegate.call(this, coll, k, ks);
};
G__6926.cljs$lang$maxFixedArity = 2;
G__6926.cljs$lang$applyTo = (function (arglist__6930){
var coll = cljs.core.first(arglist__6930);
var k = cljs.core.first(cljs.core.next(arglist__6930));
var ks = cljs.core.rest(cljs.core.next(arglist__6930));
return G__6926__delegate(coll, k, ks);
});
G__6926.cljs$lang$arity$variadic = G__6926__delegate;
return G__6926;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return disj__1.call(this,coll);
case 2:
return disj__2.call(this,coll,k);
default:
return disj__3.cljs$lang$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__3.cljs$lang$applyTo;
disj.cljs$lang$arity$1 = disj__1;
disj.cljs$lang$arity$2 = disj__2;
disj.cljs$lang$arity$variadic = disj__3.cljs$lang$arity$variadic;
return disj;
})()
;
cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
cljs.core.add_to_string_hash_cache = (function add_to_string_hash_cache(k){
var h__6932 = goog.string.hashCode(k);
(cljs.core.string_hash_cache[k] = h__6932);
cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + 1);
return h__6932;
});
cljs.core.check_string_hash_cache = (function check_string_hash_cache(k){
if((cljs.core.string_hash_cache_count > 255))
{cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
} else
{}
var h__6934 = (cljs.core.string_hash_cache[k]);
if(!((h__6934 == null)))
{return h__6934;
} else
{return cljs.core.add_to_string_hash_cache.call(null,k);
}
});
cljs.core.hash = (function() {
var hash = null;
var hash__1 = (function (o){
return hash.call(null,o,true);
});
var hash__2 = (function (o,check_cache){
if((function (){var and__3822__auto____6936 = goog.isString(o);
if(and__3822__auto____6936)
{return check_cache;
} else
{return and__3822__auto____6936;
}
})())
{return cljs.core.check_string_hash_cache.call(null,o);
} else
{return cljs.core._hash.call(null,o);
}
});
hash = function(o,check_cache){
switch(arguments.length){
case 1:
return hash__1.call(this,o);
case 2:
return hash__2.call(this,o,check_cache);
}
throw('Invalid arity: ' + arguments.length);
};
hash.cljs$lang$arity$1 = hash__1;
hash.cljs$lang$arity$2 = hash__2;
return hash;
})()
;
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return cljs.core.not.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if((x == null))
{return false;
} else
{var G__6940__6941 = x;
if(G__6940__6941)
{if((function (){var or__3824__auto____6942 = (G__6940__6941.cljs$lang$protocol_mask$partition0$ & 8);
if(or__3824__auto____6942)
{return or__3824__auto____6942;
} else
{return G__6940__6941.cljs$core$ICollection$;
}
})())
{return true;
} else
{if((!G__6940__6941.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__6940__6941);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__6940__6941);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if((x == null))
{return false;
} else
{var G__6946__6947 = x;
if(G__6946__6947)
{if((function (){var or__3824__auto____6948 = (G__6946__6947.cljs$lang$protocol_mask$partition0$ & 4096);
if(or__3824__auto____6948)
{return or__3824__auto____6948;
} else
{return G__6946__6947.cljs$core$ISet$;
}
})())
{return true;
} else
{if((!G__6946__6947.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__6946__6947);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__6946__6947);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__6952__6953 = x;
if(G__6952__6953)
{if((function (){var or__3824__auto____6954 = (G__6952__6953.cljs$lang$protocol_mask$partition0$ & 512);
if(or__3824__auto____6954)
{return or__3824__auto____6954;
} else
{return G__6952__6953.cljs$core$IAssociative$;
}
})())
{return true;
} else
{if((!G__6952__6953.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__6952__6953);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__6952__6953);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__6958__6959 = x;
if(G__6958__6959)
{if((function (){var or__3824__auto____6960 = (G__6958__6959.cljs$lang$protocol_mask$partition0$ & 16777216);
if(or__3824__auto____6960)
{return or__3824__auto____6960;
} else
{return G__6958__6959.cljs$core$ISequential$;
}
})())
{return true;
} else
{if((!G__6958__6959.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__6958__6959);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__6958__6959);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__6964__6965 = x;
if(G__6964__6965)
{if((function (){var or__3824__auto____6966 = (G__6964__6965.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____6966)
{return or__3824__auto____6966;
} else
{return G__6964__6965.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__6964__6965.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__6964__6965);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__6964__6965);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null))
{return false;
} else
{var G__6970__6971 = x;
if(G__6970__6971)
{if((function (){var or__3824__auto____6972 = (G__6970__6971.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3824__auto____6972)
{return or__3824__auto____6972;
} else
{return G__6970__6971.cljs$core$IMap$;
}
})())
{return true;
} else
{if((!G__6970__6971.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__6970__6971);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__6970__6971);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__6976__6977 = x;
if(G__6976__6977)
{if((function (){var or__3824__auto____6978 = (G__6976__6977.cljs$lang$protocol_mask$partition0$ & 16384);
if(or__3824__auto____6978)
{return or__3824__auto____6978;
} else
{return G__6976__6977.cljs$core$IVector$;
}
})())
{return true;
} else
{if((!G__6976__6977.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__6976__6977);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__6976__6977);
}
});
cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){
var G__6982__6983 = x;
if(G__6982__6983)
{if((function (){var or__3824__auto____6984 = (G__6982__6983.cljs$lang$protocol_mask$partition1$ & 512);
if(or__3824__auto____6984)
{return or__3824__auto____6984;
} else
{return G__6982__6983.cljs$core$IChunkedSeq$;
}
})())
{return true;
} else
{if((!G__6982__6983.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__6982__6983);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__6982__6983);
}
});
/**
* @param {...*} var_args
*/
cljs.core.js_obj = (function() {
var js_obj = null;
var js_obj__0 = (function (){
return {};
});
var js_obj__1 = (function() { 
var G__6985__delegate = function (keyvals){
return cljs.core.apply.call(null,goog.object.create,keyvals);
};
var G__6985 = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__6985__delegate.call(this, keyvals);
};
G__6985.cljs$lang$maxFixedArity = 0;
G__6985.cljs$lang$applyTo = (function (arglist__6986){
var keyvals = cljs.core.seq(arglist__6986);;
return G__6985__delegate(keyvals);
});
G__6985.cljs$lang$arity$variadic = G__6985__delegate;
return G__6985;
})()
;
js_obj = function(var_args){
var keyvals = var_args;
switch(arguments.length){
case 0:
return js_obj__0.call(this);
default:
return js_obj__1.cljs$lang$arity$variadic(cljs.core.array_seq(arguments, 0));
}
throw('Invalid arity: ' + arguments.length);
};
js_obj.cljs$lang$maxFixedArity = 0;
js_obj.cljs$lang$applyTo = js_obj__1.cljs$lang$applyTo;
js_obj.cljs$lang$arity$0 = js_obj__0;
js_obj.cljs$lang$arity$variadic = js_obj__1.cljs$lang$arity$variadic;
return js_obj;
})()
;
cljs.core.js_keys = (function js_keys(obj){
var keys__6988 = [];
goog.object.forEach(obj,(function (val,key,obj){
return keys__6988.push(key);
}));
return keys__6988;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__6992 = i;
var j__6993 = j;
var len__6994 = len;
while(true){
if((len__6994 === 0))
{return to;
} else
{(to[j__6993] = (from[i__6992]));
{
var G__6995 = (i__6992 + 1);
var G__6996 = (j__6993 + 1);
var G__6997 = (len__6994 - 1);
i__6992 = G__6995;
j__6993 = G__6996;
len__6994 = G__6997;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__7001 = (i + (len - 1));
var j__7002 = (j + (len - 1));
var len__7003 = len;
while(true){
if((len__7003 === 0))
{return to;
} else
{(to[j__7002] = (from[i__7001]));
{
var G__7004 = (i__7001 - 1);
var G__7005 = (j__7002 - 1);
var G__7006 = (len__7003 - 1);
i__7001 = G__7004;
j__7002 = G__7005;
len__7003 = G__7006;
continue;
}
}
break;
}
});
cljs.core.lookup_sentinel = {};
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if((s == null))
{return false;
} else
{var G__7010__7011 = s;
if(G__7010__7011)
{if((function (){var or__3824__auto____7012 = (G__7010__7011.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____7012)
{return or__3824__auto____7012;
} else
{return G__7010__7011.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7010__7011.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7010__7011);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7010__7011);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__7016__7017 = s;
if(G__7016__7017)
{if((function (){var or__3824__auto____7018 = (G__7016__7017.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____7018)
{return or__3824__auto____7018;
} else
{return G__7016__7017.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__7016__7017.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__7016__7017);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__7016__7017);
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3822__auto____7021 = goog.isString(x);
if(and__3822__auto____7021)
{return !((function (){var or__3824__auto____7022 = (x.charAt(0) === "\uFDD0");
if(or__3824__auto____7022)
{return or__3824__auto____7022;
} else
{return (x.charAt(0) === "\uFDD1");
}
})());
} else
{return and__3822__auto____7021;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3822__auto____7024 = goog.isString(x);
if(and__3822__auto____7024)
{return (x.charAt(0) === "\uFDD0");
} else
{return and__3822__auto____7024;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3822__auto____7026 = goog.isString(x);
if(and__3822__auto____7026)
{return (x.charAt(0) === "\uFDD1");
} else
{return and__3822__auto____7026;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber(n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction(f);
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3824__auto____7031 = cljs.core.fn_QMARK_.call(null,f);
if(or__3824__auto____7031)
{return or__3824__auto____7031;
} else
{var G__7032__7033 = f;
if(G__7032__7033)
{if((function (){var or__3824__auto____7034 = (G__7032__7033.cljs$lang$protocol_mask$partition0$ & 1);
if(or__3824__auto____7034)
{return or__3824__auto____7034;
} else
{return G__7032__7033.cljs$core$IFn$;
}
})())
{return true;
} else
{if((!G__7032__7033.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__7032__7033);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__7032__7033);
}
}
});
/**
* Returns true if n is an integer.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3822__auto____7038 = cljs.core.number_QMARK_.call(null,n);
if(and__3822__auto____7038)
{var and__3822__auto____7039 = !(isNaN(n));
if(and__3822__auto____7039)
{var and__3822__auto____7040 = !((n === Infinity));
if(and__3822__auto____7040)
{return (parseFloat(n) === parseInt(n,10));
} else
{return and__3822__auto____7040;
}
} else
{return and__3822__auto____7039;
}
} else
{return and__3822__auto____7038;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if((cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if((function (){var and__3822__auto____7043 = !((coll == null));
if(and__3822__auto____7043)
{var and__3822__auto____7044 = cljs.core.associative_QMARK_.call(null,coll);
if(and__3822__auto____7044)
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3822__auto____7044;
}
} else
{return and__3822__auto____7043;
}
})())
{return cljs.core.PersistentVector.fromArray([k,cljs.core._lookup.call(null,coll,k)], true);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___1 = (function (x){
return true;
});
var distinct_QMARK___2 = (function (x,y){
return !(cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___3 = (function() { 
var G__7053__delegate = function (x,y,more){
if(!(cljs.core._EQ_.call(null,x,y)))
{var s__7049 = cljs.core.PersistentHashSet.fromArray([y,x]);
var xs__7050 = more;
while(true){
var x__7051 = cljs.core.first.call(null,xs__7050);
var etc__7052 = cljs.core.next.call(null,xs__7050);
if(cljs.core.truth_(xs__7050))
{if(cljs.core.contains_QMARK_.call(null,s__7049,x__7051))
{return false;
} else
{{
var G__7054 = cljs.core.conj.call(null,s__7049,x__7051);
var G__7055 = etc__7052;
s__7049 = G__7054;
xs__7050 = G__7055;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__7053 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7053__delegate.call(this, x, y, more);
};
G__7053.cljs$lang$maxFixedArity = 2;
G__7053.cljs$lang$applyTo = (function (arglist__7056){
var x = cljs.core.first(arglist__7056);
var y = cljs.core.first(cljs.core.next(arglist__7056));
var more = cljs.core.rest(cljs.core.next(arglist__7056));
return G__7053__delegate(x, y, more);
});
G__7053.cljs$lang$arity$variadic = G__7053__delegate;
return G__7053;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return distinct_QMARK___1.call(this,x);
case 2:
return distinct_QMARK___2.call(this,x,y);
default:
return distinct_QMARK___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___3.cljs$lang$applyTo;
distinct_QMARK_.cljs$lang$arity$1 = distinct_QMARK___1;
distinct_QMARK_.cljs$lang$arity$2 = distinct_QMARK___2;
distinct_QMARK_.cljs$lang$arity$variadic = distinct_QMARK___3.cljs$lang$arity$variadic;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses IComparable if available and google.array.defaultCompare for objects
* of the same type and special-cases nil to be less than any other object.
*/
cljs.core.compare = (function compare(x,y){
if((x === y))
{return 0;
} else
{if((x == null))
{return -1;
} else
{if((y == null))
{return 1;
} else
{if((cljs.core.type.call(null,x) === cljs.core.type.call(null,y)))
{if((function (){var G__7060__7061 = x;
if(G__7060__7061)
{if((function (){var or__3824__auto____7062 = (G__7060__7061.cljs$lang$protocol_mask$partition1$ & 2048);
if(or__3824__auto____7062)
{return or__3824__auto____7062;
} else
{return G__7060__7061.cljs$core$IComparable$;
}
})())
{return true;
} else
{if((!G__7060__7061.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__7060__7061);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__7060__7061);
}
})())
{return cljs.core._compare.call(null,x,y);
} else
{return goog.array.defaultCompare(x,y);
}
} else
{if("\uFDD0'else")
{throw (new Error("compare on non-nil objects of different types"));
} else
{return null;
}
}
}
}
}
});
/**
* Compare indexed collection.
*/
cljs.core.compare_indexed = (function() {
var compare_indexed = null;
var compare_indexed__2 = (function (xs,ys){
var xl__7067 = cljs.core.count.call(null,xs);
var yl__7068 = cljs.core.count.call(null,ys);
if((xl__7067 < yl__7068))
{return -1;
} else
{if((xl__7067 > yl__7068))
{return 1;
} else
{if("\uFDD0'else")
{return compare_indexed.call(null,xs,ys,xl__7067,0);
} else
{return null;
}
}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){
while(true){
var d__7069 = cljs.core.compare.call(null,cljs.core.nth.call(null,xs,n),cljs.core.nth.call(null,ys,n));
if((function (){var and__3822__auto____7070 = (d__7069 === 0);
if(and__3822__auto____7070)
{return ((n + 1) < len);
} else
{return and__3822__auto____7070;
}
})())
{{
var G__7071 = xs;
var G__7072 = ys;
var G__7073 = len;
var G__7074 = (n + 1);
xs = G__7071;
ys = G__7072;
len = G__7073;
n = G__7074;
continue;
}
} else
{return d__7069;
}
break;
}
});
compare_indexed = function(xs,ys,len,n){
switch(arguments.length){
case 2:
return compare_indexed__2.call(this,xs,ys);
case 4:
return compare_indexed__4.call(this,xs,ys,len,n);
}
throw('Invalid arity: ' + arguments.length);
};
compare_indexed.cljs$lang$arity$2 = compare_indexed__2;
compare_indexed.cljs$lang$arity$4 = compare_indexed__4;
return compare_indexed;
})()
;
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core._EQ_.call(null,f,cljs.core.compare))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__7076 = f.call(null,x,y);
if(cljs.core.number_QMARK_.call(null,r__7076))
{return r__7076;
} else
{if(cljs.core.truth_(r__7076))
{return -1;
} else
{if(cljs.core.truth_(f.call(null,y,x)))
{return 1;
} else
{return 0;
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__1 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__2 = (function (comp,coll){
if(cljs.core.seq.call(null,coll))
{var a__7078 = cljs.core.to_array.call(null,coll);
goog.array.stableSort(a__7078,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__7078);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case 1:
return sort__1.call(this,comp);
case 2:
return sort__2.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
sort.cljs$lang$arity$1 = sort__1;
sort.cljs$lang$arity$2 = sort__2;
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__2 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__3 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case 2:
return sort_by__2.call(this,keyfn,comp);
case 3:
return sort_by__3.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
sort_by.cljs$lang$arity$2 = sort_by__2;
sort_by.cljs$lang$arity$3 = sort_by__3;
return sort_by;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2 = (function (f,coll){
var temp__3971__auto____7084 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____7084)
{var s__7085 = temp__3971__auto____7084;
return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__7085),cljs.core.next.call(null,s__7085));
} else
{return f.call(null);
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__7086 = val;
var coll__7087 = cljs.core.seq.call(null,coll);
while(true){
if(coll__7087)
{var nval__7088 = f.call(null,val__7086,cljs.core.first.call(null,coll__7087));
if(cljs.core.reduced_QMARK_.call(null,nval__7088))
{return cljs.core.deref.call(null,nval__7088);
} else
{{
var G__7089 = nval__7088;
var G__7090 = cljs.core.next.call(null,coll__7087);
val__7086 = G__7089;
coll__7087 = G__7090;
continue;
}
}
} else
{return val__7086;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return seq_reduce__2.call(this,f,val);
case 3:
return seq_reduce__3.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
seq_reduce.cljs$lang$arity$2 = seq_reduce__2;
seq_reduce.cljs$lang$arity$3 = seq_reduce__3;
return seq_reduce;
})()
;
/**
* Return a random permutation of coll
*/
cljs.core.shuffle = (function shuffle(coll){
var a__7092 = cljs.core.to_array.call(null,coll);
goog.array.shuffle(a__7092);
return cljs.core.vec.call(null,a__7092);
});
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__2 = (function (f,coll){
if((function (){var G__7099__7100 = coll;
if(G__7099__7100)
{if((function (){var or__3824__auto____7101 = (G__7099__7100.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____7101)
{return or__3824__auto____7101;
} else
{return G__7099__7100.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__7099__7100.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7099__7100);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7099__7100);
}
})())
{return cljs.core._reduce.call(null,coll,f);
} else
{return cljs.core.seq_reduce.call(null,f,coll);
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__7102__7103 = coll;
if(G__7102__7103)
{if((function (){var or__3824__auto____7104 = (G__7102__7103.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____7104)
{return or__3824__auto____7104;
} else
{return G__7102__7103.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__7102__7103.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7102__7103);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7102__7103);
}
})())
{return cljs.core._reduce.call(null,coll,f,val);
} else
{return cljs.core.seq_reduce.call(null,f,val,coll);
}
});
reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return reduce__2.call(this,f,val);
case 3:
return reduce__3.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
reduce.cljs$lang$arity$2 = reduce__2;
reduce.cljs$lang$arity$3 = reduce__3;
return reduce;
})()
;
/**
* Reduces an associative collection. f should be a function of 3
* arguments. Returns the result of applying f to init, the first key
* and the first value in coll, then applying f to that result and the
* 2nd key and value, etc. If coll contains no entries, returns init
* and f is not called. Note that reduce-kv is supported on vectors,
* where the keys will be the ordinals.
*/
cljs.core.reduce_kv = (function reduce_kv(f,init,coll){
return cljs.core._kv_reduce.call(null,coll,f,init);
});
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___0 = (function (){
return 0;
});
var _PLUS___1 = (function (x){
return x;
});
var _PLUS___2 = (function (x,y){
return (x + y);
});
var _PLUS___3 = (function() { 
var G__7105__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__7105 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7105__delegate.call(this, x, y, more);
};
G__7105.cljs$lang$maxFixedArity = 2;
G__7105.cljs$lang$applyTo = (function (arglist__7106){
var x = cljs.core.first(arglist__7106);
var y = cljs.core.first(cljs.core.next(arglist__7106));
var more = cljs.core.rest(cljs.core.next(arglist__7106));
return G__7105__delegate(x, y, more);
});
G__7105.cljs$lang$arity$variadic = G__7105__delegate;
return G__7105;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _PLUS___0.call(this);
case 1:
return _PLUS___1.call(this,x);
case 2:
return _PLUS___2.call(this,x,y);
default:
return _PLUS___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___3.cljs$lang$applyTo;
_PLUS_.cljs$lang$arity$0 = _PLUS___0;
_PLUS_.cljs$lang$arity$1 = _PLUS___1;
_PLUS_.cljs$lang$arity$2 = _PLUS___2;
_PLUS_.cljs$lang$arity$variadic = _PLUS___3.cljs$lang$arity$variadic;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___1 = (function (x){
return (- x);
});
var ___2 = (function (x,y){
return (x - y);
});
var ___3 = (function() { 
var G__7107__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__7107 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7107__delegate.call(this, x, y, more);
};
G__7107.cljs$lang$maxFixedArity = 2;
G__7107.cljs$lang$applyTo = (function (arglist__7108){
var x = cljs.core.first(arglist__7108);
var y = cljs.core.first(cljs.core.next(arglist__7108));
var more = cljs.core.rest(cljs.core.next(arglist__7108));
return G__7107__delegate(x, y, more);
});
G__7107.cljs$lang$arity$variadic = G__7107__delegate;
return G__7107;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return ___1.call(this,x);
case 2:
return ___2.call(this,x,y);
default:
return ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___3.cljs$lang$applyTo;
_.cljs$lang$arity$1 = ___1;
_.cljs$lang$arity$2 = ___2;
_.cljs$lang$arity$variadic = ___3.cljs$lang$arity$variadic;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___0 = (function (){
return 1;
});
var _STAR___1 = (function (x){
return x;
});
var _STAR___2 = (function (x,y){
return (x * y);
});
var _STAR___3 = (function() { 
var G__7109__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__7109 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7109__delegate.call(this, x, y, more);
};
G__7109.cljs$lang$maxFixedArity = 2;
G__7109.cljs$lang$applyTo = (function (arglist__7110){
var x = cljs.core.first(arglist__7110);
var y = cljs.core.first(cljs.core.next(arglist__7110));
var more = cljs.core.rest(cljs.core.next(arglist__7110));
return G__7109__delegate(x, y, more);
});
G__7109.cljs$lang$arity$variadic = G__7109__delegate;
return G__7109;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _STAR___0.call(this);
case 1:
return _STAR___1.call(this,x);
case 2:
return _STAR___2.call(this,x,y);
default:
return _STAR___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___3.cljs$lang$applyTo;
_STAR_.cljs$lang$arity$0 = _STAR___0;
_STAR_.cljs$lang$arity$1 = _STAR___1;
_STAR_.cljs$lang$arity$2 = _STAR___2;
_STAR_.cljs$lang$arity$variadic = _STAR___3.cljs$lang$arity$variadic;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___1 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___2 = (function (x,y){
return (x / y);
});
var _SLASH___3 = (function() { 
var G__7111__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__7111 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7111__delegate.call(this, x, y, more);
};
G__7111.cljs$lang$maxFixedArity = 2;
G__7111.cljs$lang$applyTo = (function (arglist__7112){
var x = cljs.core.first(arglist__7112);
var y = cljs.core.first(cljs.core.next(arglist__7112));
var more = cljs.core.rest(cljs.core.next(arglist__7112));
return G__7111__delegate(x, y, more);
});
G__7111.cljs$lang$arity$variadic = G__7111__delegate;
return G__7111;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _SLASH___1.call(this,x);
case 2:
return _SLASH___2.call(this,x,y);
default:
return _SLASH___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___3.cljs$lang$applyTo;
_SLASH_.cljs$lang$arity$1 = _SLASH___1;
_SLASH_.cljs$lang$arity$2 = _SLASH___2;
_SLASH_.cljs$lang$arity$variadic = _SLASH___3.cljs$lang$arity$variadic;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___1 = (function (x){
return true;
});
var _LT___2 = (function (x,y){
return (x < y);
});
var _LT___3 = (function() { 
var G__7113__delegate = function (x,y,more){
while(true){
if((x < y))
{if(cljs.core.next.call(null,more))
{{
var G__7114 = y;
var G__7115 = cljs.core.first.call(null,more);
var G__7116 = cljs.core.next.call(null,more);
x = G__7114;
y = G__7115;
more = G__7116;
continue;
}
} else
{return (y < cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__7113 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7113__delegate.call(this, x, y, more);
};
G__7113.cljs$lang$maxFixedArity = 2;
G__7113.cljs$lang$applyTo = (function (arglist__7117){
var x = cljs.core.first(arglist__7117);
var y = cljs.core.first(cljs.core.next(arglist__7117));
var more = cljs.core.rest(cljs.core.next(arglist__7117));
return G__7113__delegate(x, y, more);
});
G__7113.cljs$lang$arity$variadic = G__7113__delegate;
return G__7113;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT___1.call(this,x);
case 2:
return _LT___2.call(this,x,y);
default:
return _LT___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___3.cljs$lang$applyTo;
_LT_.cljs$lang$arity$1 = _LT___1;
_LT_.cljs$lang$arity$2 = _LT___2;
_LT_.cljs$lang$arity$variadic = _LT___3.cljs$lang$arity$variadic;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___1 = (function (x){
return true;
});
var _LT__EQ___2 = (function (x,y){
return (x <= y);
});
var _LT__EQ___3 = (function() { 
var G__7118__delegate = function (x,y,more){
while(true){
if((x <= y))
{if(cljs.core.next.call(null,more))
{{
var G__7119 = y;
var G__7120 = cljs.core.first.call(null,more);
var G__7121 = cljs.core.next.call(null,more);
x = G__7119;
y = G__7120;
more = G__7121;
continue;
}
} else
{return (y <= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__7118 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7118__delegate.call(this, x, y, more);
};
G__7118.cljs$lang$maxFixedArity = 2;
G__7118.cljs$lang$applyTo = (function (arglist__7122){
var x = cljs.core.first(arglist__7122);
var y = cljs.core.first(cljs.core.next(arglist__7122));
var more = cljs.core.rest(cljs.core.next(arglist__7122));
return G__7118__delegate(x, y, more);
});
G__7118.cljs$lang$arity$variadic = G__7118__delegate;
return G__7118;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT__EQ___1.call(this,x);
case 2:
return _LT__EQ___2.call(this,x,y);
default:
return _LT__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___3.cljs$lang$applyTo;
_LT__EQ_.cljs$lang$arity$1 = _LT__EQ___1;
_LT__EQ_.cljs$lang$arity$2 = _LT__EQ___2;
_LT__EQ_.cljs$lang$arity$variadic = _LT__EQ___3.cljs$lang$arity$variadic;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___1 = (function (x){
return true;
});
var _GT___2 = (function (x,y){
return (x > y);
});
var _GT___3 = (function() { 
var G__7123__delegate = function (x,y,more){
while(true){
if((x > y))
{if(cljs.core.next.call(null,more))
{{
var G__7124 = y;
var G__7125 = cljs.core.first.call(null,more);
var G__7126 = cljs.core.next.call(null,more);
x = G__7124;
y = G__7125;
more = G__7126;
continue;
}
} else
{return (y > cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__7123 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7123__delegate.call(this, x, y, more);
};
G__7123.cljs$lang$maxFixedArity = 2;
G__7123.cljs$lang$applyTo = (function (arglist__7127){
var x = cljs.core.first(arglist__7127);
var y = cljs.core.first(cljs.core.next(arglist__7127));
var more = cljs.core.rest(cljs.core.next(arglist__7127));
return G__7123__delegate(x, y, more);
});
G__7123.cljs$lang$arity$variadic = G__7123__delegate;
return G__7123;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT___1.call(this,x);
case 2:
return _GT___2.call(this,x,y);
default:
return _GT___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___3.cljs$lang$applyTo;
_GT_.cljs$lang$arity$1 = _GT___1;
_GT_.cljs$lang$arity$2 = _GT___2;
_GT_.cljs$lang$arity$variadic = _GT___3.cljs$lang$arity$variadic;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___1 = (function (x){
return true;
});
var _GT__EQ___2 = (function (x,y){
return (x >= y);
});
var _GT__EQ___3 = (function() { 
var G__7128__delegate = function (x,y,more){
while(true){
if((x >= y))
{if(cljs.core.next.call(null,more))
{{
var G__7129 = y;
var G__7130 = cljs.core.first.call(null,more);
var G__7131 = cljs.core.next.call(null,more);
x = G__7129;
y = G__7130;
more = G__7131;
continue;
}
} else
{return (y >= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__7128 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7128__delegate.call(this, x, y, more);
};
G__7128.cljs$lang$maxFixedArity = 2;
G__7128.cljs$lang$applyTo = (function (arglist__7132){
var x = cljs.core.first(arglist__7132);
var y = cljs.core.first(cljs.core.next(arglist__7132));
var more = cljs.core.rest(cljs.core.next(arglist__7132));
return G__7128__delegate(x, y, more);
});
G__7128.cljs$lang$arity$variadic = G__7128__delegate;
return G__7128;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT__EQ___1.call(this,x);
case 2:
return _GT__EQ___2.call(this,x,y);
default:
return _GT__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___3.cljs$lang$applyTo;
_GT__EQ_.cljs$lang$arity$1 = _GT__EQ___1;
_GT__EQ_.cljs$lang$arity$2 = _GT__EQ___2;
_GT__EQ_.cljs$lang$arity$variadic = _GT__EQ___3.cljs$lang$arity$variadic;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return (x - 1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__1 = (function (x){
return x;
});
var max__2 = (function (x,y){
return ((x > y) ? x : y);
});
var max__3 = (function() { 
var G__7133__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__7133 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7133__delegate.call(this, x, y, more);
};
G__7133.cljs$lang$maxFixedArity = 2;
G__7133.cljs$lang$applyTo = (function (arglist__7134){
var x = cljs.core.first(arglist__7134);
var y = cljs.core.first(cljs.core.next(arglist__7134));
var more = cljs.core.rest(cljs.core.next(arglist__7134));
return G__7133__delegate(x, y, more);
});
G__7133.cljs$lang$arity$variadic = G__7133__delegate;
return G__7133;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return max__1.call(this,x);
case 2:
return max__2.call(this,x,y);
default:
return max__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__3.cljs$lang$applyTo;
max.cljs$lang$arity$1 = max__1;
max.cljs$lang$arity$2 = max__2;
max.cljs$lang$arity$variadic = max__3.cljs$lang$arity$variadic;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__1 = (function (x){
return x;
});
var min__2 = (function (x,y){
return ((x < y) ? x : y);
});
var min__3 = (function() { 
var G__7135__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__7135 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7135__delegate.call(this, x, y, more);
};
G__7135.cljs$lang$maxFixedArity = 2;
G__7135.cljs$lang$applyTo = (function (arglist__7136){
var x = cljs.core.first(arglist__7136);
var y = cljs.core.first(cljs.core.next(arglist__7136));
var more = cljs.core.rest(cljs.core.next(arglist__7136));
return G__7135__delegate(x, y, more);
});
G__7135.cljs$lang$arity$variadic = G__7135__delegate;
return G__7135;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return min__1.call(this,x);
case 2:
return min__2.call(this,x,y);
default:
return min__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__3.cljs$lang$applyTo;
min.cljs$lang$arity$1 = min__1;
min.cljs$lang$arity$2 = min__2;
min.cljs$lang$arity$variadic = min__3.cljs$lang$arity$variadic;
return min;
})()
;
cljs.core.fix = (function fix(q){
if((q >= 0))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Coerce to int by stripping decimal places.
*/
cljs.core.int$ = (function int$(x){
return cljs.core.fix.call(null,x);
});
/**
* Coerce to long by stripping decimal places. Identical to `int'.
*/
cljs.core.long$ = (function long$(x){
return cljs.core.fix.call(null,x);
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (n % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem__7138 = (n % d);
return cljs.core.fix.call(null,((n - rem__7138) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__7140 = cljs.core.quot.call(null,n,d);
return (n - (d * q__7140));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return Math.random.call(null);
});
var rand__1 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
rand.cljs$lang$arity$0 = rand__0;
rand.cljs$lang$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix.call(null,cljs.core.rand.call(null,n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~ x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Bitwise shift right with zero fill
*/
cljs.core.bit_shift_right_zero_fill = (function bit_shift_right_zero_fill(x,n){
return (x >>> n);
});
/**
* Counts the number of bits set in n
*/
cljs.core.bit_count = (function bit_count(v){
var v__7143 = (v - ((v >> 1) & 1431655765));
var v__7144 = ((v__7143 & 858993459) + ((v__7143 >> 2) & 858993459));
return ((((v__7144 + (v__7144 >> 4)) & 252645135) * 16843009) >> 24);
});
/**
* Returns non-nil if nums all have the equivalent
* value, otherwise false. Behavior on non nums is
* undefined.
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___1 = (function (x){
return true;
});
var _EQ__EQ___2 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___3 = (function() { 
var G__7145__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__7146 = y;
var G__7147 = cljs.core.first.call(null,more);
var G__7148 = cljs.core.next.call(null,more);
x = G__7146;
y = G__7147;
more = G__7148;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__7145 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7145__delegate.call(this, x, y, more);
};
G__7145.cljs$lang$maxFixedArity = 2;
G__7145.cljs$lang$applyTo = (function (arglist__7149){
var x = cljs.core.first(arglist__7149);
var y = cljs.core.first(cljs.core.next(arglist__7149));
var more = cljs.core.rest(cljs.core.next(arglist__7149));
return G__7145__delegate(x, y, more);
});
G__7145.cljs$lang$arity$variadic = G__7145__delegate;
return G__7145;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ__EQ___1.call(this,x);
case 2:
return _EQ__EQ___2.call(this,x,y);
default:
return _EQ__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___3.cljs$lang$applyTo;
_EQ__EQ_.cljs$lang$arity$1 = _EQ__EQ___1;
_EQ__EQ_.cljs$lang$arity$2 = _EQ__EQ___2;
_EQ__EQ_.cljs$lang$arity$variadic = _EQ__EQ___3.cljs$lang$arity$variadic;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return (n > 0);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return (n === 0);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__7153 = n;
var xs__7154 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7155 = xs__7154;
if(and__3822__auto____7155)
{return (n__7153 > 0);
} else
{return and__3822__auto____7155;
}
})()))
{{
var G__7156 = (n__7153 - 1);
var G__7157 = cljs.core.next.call(null,xs__7154);
n__7153 = G__7156;
xs__7154 = G__7157;
continue;
}
} else
{return xs__7154;
}
break;
}
});
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___0 = (function (){
return "";
});
var str_STAR___1 = (function (x){
if((x == null))
{return "";
} else
{if("\uFDD0'else")
{return x.toString();
} else
{return null;
}
}
});
var str_STAR___2 = (function() { 
var G__7158__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__7159 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__7160 = cljs.core.next.call(null,more);
sb = G__7159;
more = G__7160;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__7158 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__7158__delegate.call(this, x, ys);
};
G__7158.cljs$lang$maxFixedArity = 1;
G__7158.cljs$lang$applyTo = (function (arglist__7161){
var x = cljs.core.first(arglist__7161);
var ys = cljs.core.rest(arglist__7161);
return G__7158__delegate(x, ys);
});
G__7158.cljs$lang$arity$variadic = G__7158__delegate;
return G__7158;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str_STAR___0.call(this);
case 1:
return str_STAR___1.call(this,x);
default:
return str_STAR___2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___2.cljs$lang$applyTo;
str_STAR_.cljs$lang$arity$0 = str_STAR___0;
str_STAR_.cljs$lang$arity$1 = str_STAR___1;
str_STAR_.cljs$lang$arity$variadic = str_STAR___2.cljs$lang$arity$variadic;
return str_STAR_;
})()
;
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__0 = (function (){
return "";
});
var str__1 = (function (x){
if(cljs.core.symbol_QMARK_.call(null,x))
{return x.substring(2,x.length);
} else
{if(cljs.core.keyword_QMARK_.call(null,x))
{return cljs.core.str_STAR_.call(null,":",x.substring(2,x.length));
} else
{if((x == null))
{return "";
} else
{if("\uFDD0'else")
{return x.toString();
} else
{return null;
}
}
}
}
});
var str__2 = (function() { 
var G__7162__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__7163 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__7164 = cljs.core.next.call(null,more);
sb = G__7163;
more = G__7164;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__7162 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__7162__delegate.call(this, x, ys);
};
G__7162.cljs$lang$maxFixedArity = 1;
G__7162.cljs$lang$applyTo = (function (arglist__7165){
var x = cljs.core.first(arglist__7165);
var ys = cljs.core.rest(arglist__7165);
return G__7162__delegate(x, ys);
});
G__7162.cljs$lang$arity$variadic = G__7162__delegate;
return G__7162;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str__0.call(this);
case 1:
return str__1.call(this,x);
default:
return str__2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__2.cljs$lang$applyTo;
str.cljs$lang$arity$0 = str__0;
str.cljs$lang$arity$1 = str__1;
str.cljs$lang$arity$variadic = str__2.cljs$lang$arity$variadic;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__2 = (function (s,start){
return s.substring(start);
});
var subs__3 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case 2:
return subs__2.call(this,s,start);
case 3:
return subs__3.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
subs.cljs$lang$arity$2 = subs__2;
subs.cljs$lang$arity$3 = subs__3;
return subs;
})()
;
/**
* Formats a string using goog.string.format.
* @param {...*} var_args
*/
cljs.core.format = (function() { 
var format__delegate = function (fmt,args){
var args__7169 = cljs.core.map.call(null,(function (x){
if((function (){var or__3824__auto____7168 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____7168)
{return or__3824__auto____7168;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{return [cljs.core.str(x)].join('');
} else
{return x;
}
}),args);
return cljs.core.apply.call(null,goog.string.format,fmt,args__7169);
};
var format = function (fmt,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return format__delegate.call(this, fmt, args);
};
format.cljs$lang$maxFixedArity = 1;
format.cljs$lang$applyTo = (function (arglist__7170){
var fmt = cljs.core.first(arglist__7170);
var args = cljs.core.rest(arglist__7170);
return format__delegate(fmt, args);
});
format.cljs$lang$arity$variadic = format__delegate;
return format;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__1 = (function (name){
if(cljs.core.symbol_QMARK_.call(null,name))
{return name;
} else
{if(cljs.core.keyword_QMARK_.call(null,name))
{return cljs.core.str_STAR_.call(null,"\uFDD1","'",cljs.core.subs.call(null,name,2));
} else
{if("\uFDD0'else")
{return cljs.core.str_STAR_.call(null,"\uFDD1","'",name);
} else
{return null;
}
}
}
});
var symbol__2 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case 1:
return symbol__1.call(this,ns);
case 2:
return symbol__2.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
symbol.cljs$lang$arity$1 = symbol__1;
symbol.cljs$lang$arity$2 = symbol__2;
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__1 = (function (name){
if(cljs.core.keyword_QMARK_.call(null,name))
{return name;
} else
{if(cljs.core.symbol_QMARK_.call(null,name))
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",cljs.core.subs.call(null,name,2));
} else
{if("\uFDD0'else")
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",name);
} else
{return null;
}
}
}
});
var keyword__2 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case 1:
return keyword__1.call(this,ns);
case 2:
return keyword__2.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
keyword.cljs$lang$arity$1 = keyword__1;
keyword.cljs$lang$arity$2 = keyword__2;
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$.call(null,((cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__7173 = cljs.core.seq.call(null,x);
var ys__7174 = cljs.core.seq.call(null,y);
while(true){
if((xs__7173 == null))
{return (ys__7174 == null);
} else
{if((ys__7174 == null))
{return false;
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__7173),cljs.core.first.call(null,ys__7174)))
{{
var G__7175 = cljs.core.next.call(null,xs__7173);
var G__7176 = cljs.core.next.call(null,ys__7174);
xs__7173 = G__7175;
ys__7174 = G__7176;
continue;
}
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return (seed ^ (((hash + 2654435769) + (seed << 6)) + (seed >> 2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.call(null,(function (p1__7177_SHARP_,p2__7178_SHARP_){
return cljs.core.hash_combine.call(null,p1__7177_SHARP_,cljs.core.hash.call(null,p2__7178_SHARP_,false));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll),false),cljs.core.next.call(null,coll));
});
cljs.core.hash_imap = (function hash_imap(m){
var h__7182 = 0;
var s__7183 = cljs.core.seq.call(null,m);
while(true){
if(s__7183)
{var e__7184 = cljs.core.first.call(null,s__7183);
{
var G__7185 = ((h__7182 + (cljs.core.hash.call(null,cljs.core.key.call(null,e__7184)) ^ cljs.core.hash.call(null,cljs.core.val.call(null,e__7184)))) % 4503599627370496);
var G__7186 = cljs.core.next.call(null,s__7183);
h__7182 = G__7185;
s__7183 = G__7186;
continue;
}
} else
{return h__7182;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h__7190 = 0;
var s__7191 = cljs.core.seq.call(null,s);
while(true){
if(s__7191)
{var e__7192 = cljs.core.first.call(null,s__7191);
{
var G__7193 = ((h__7190 + cljs.core.hash.call(null,e__7192)) % 4503599627370496);
var G__7194 = cljs.core.next.call(null,s__7191);
h__7190 = G__7193;
s__7191 = G__7194;
continue;
}
} else
{return h__7190;
}
break;
}
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__7202__7203 = cljs.core.seq.call(null,fn_map);
while(true){
if(G__7202__7203)
{var vec__7204__7205 = cljs.core.first.call(null,G__7202__7203);
var key_name__7206 = cljs.core.nth.call(null,vec__7204__7205,0,null);
var f__7207 = cljs.core.nth.call(null,vec__7204__7205,1,null);
var str_name__7208 = cljs.core.name.call(null,key_name__7206);
(obj[str_name__7208] = f__7207);
{
var G__7209 = cljs.core.next.call(null,G__7202__7203);
G__7202__7203 = G__7209;
continue;
}
} else
{}
break;
}
return obj;
});

goog.provide('cljs.core.List');

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65413358;
})
cljs.core.List.cljs$lang$type = true;
cljs.core.List.cljs$lang$ctorPrSeq = (function (this__2322__auto__){
return cljs.core.list.call(null,"cljs.core/List");
});
cljs.core.List.cljs$lang$ctorPrWriter = (function (this__2322__auto__,writer__2323__auto__){
return cljs.core._write.call(null,writer__2323__auto__,"cljs.core/List");
});
cljs.core.List.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7210 = this;
var h__2203__auto____7211 = this__7210.__hash;
if(!((h__2203__auto____7211 == null)))
{return h__2203__auto____7211;
} else
{var h__2203__auto____7212 = cljs.core.hash_coll.call(null,coll);
this__7210.__hash = h__2203__auto____7212;
return h__2203__auto____7212;
}
});
cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7213 = this;
if((this__7213.count === 1))
{return null;
} else
{return this__7213.rest;
}
});
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7214 = this;
return (new cljs.core.List(this__7214.meta,o,coll,(this__7214.count + 1),null));
});
cljs.core.List.prototype.toString = (function (){
var this__7215 = this;
var this__7216 = this;
return cljs.core.pr_str.call(null,this__7216);
});
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7217 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7218 = this;
return this__7218.count;
});
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__7219 = this;
return this__7219.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__7220 = this;
return coll.cljs$core$ISeq$_rest$arity$1(coll);
});
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7221 = this;
return this__7221.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7222 = this;
if((this__7222.count === 1))
{return cljs.core.List.EMPTY;
} else
{return this__7222.rest;
}
});
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7223 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7224 = this;
return (new cljs.core.List(meta,this__7224.first,this__7224.rest,this__7224.count,this__7224.__hash));
});
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7225 = this;
return this__7225.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7226 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List;

goog.provide('cljs.core.EmptyList');

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65413326;
})
cljs.core.EmptyList.cljs$lang$type = true;
cljs.core.EmptyList.cljs$lang$ctorPrSeq = (function (this__2322__auto__){
return cljs.core.list.call(null,"cljs.core/EmptyList");
});
cljs.core.EmptyList.cljs$lang$ctorPrWriter = (function (this__2322__auto__,writer__2323__auto__){
return cljs.core._write.call(null,writer__2323__auto__,"cljs.core/EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7227 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7228 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7229 = this;
return (new cljs.core.List(this__7229.meta,o,null,1,null));
});
cljs.core.EmptyList.prototype.toString = (function (){
var this__7230 = this;
var this__7231 = this;
return cljs.core.pr_str.call(null,this__7231);
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7232 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7233 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__7234 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__7235 = this;
throw (new Error("Can't pop empty list"));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7236 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7237 = this;
return cljs.core.List.EMPTY;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7238 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7239 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7240 = this;
return this__7240.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7241 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__7245__7246 = coll;
if(G__7245__7246)
{if((function (){var or__3824__auto____7247 = (G__7245__7246.cljs$lang$protocol_mask$partition0$ & 134217728);
if(or__3824__auto____7247)
{return or__3824__auto____7247;
} else
{return G__7245__7246.cljs$core$IReversible$;
}
})())
{return true;
} else
{if((!G__7245__7246.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__7245__7246);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__7245__7246);
}
});
cljs.core.rseq = (function rseq(coll){
return cljs.core._rseq.call(null,coll);
});
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
if(cljs.core.reversible_QMARK_.call(null,coll))
{return cljs.core.rseq.call(null,coll);
} else
{return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
}
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() {
var list = null;
var list__0 = (function (){
return cljs.core.List.EMPTY;
});
var list__1 = (function (x){
return cljs.core.conj.call(null,cljs.core.List.EMPTY,x);
});
var list__2 = (function (x,y){
return cljs.core.conj.call(null,list.call(null,y),x);
});
var list__3 = (function (x,y,z){
return cljs.core.conj.call(null,list.call(null,y,z),x);
});
var list__4 = (function() { 
var G__7248__delegate = function (x,y,z,items){
return cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items)),z),y),x);
};
var G__7248 = function (x,y,z,var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7248__delegate.call(this, x, y, z, items);
};
G__7248.cljs$lang$maxFixedArity = 3;
G__7248.cljs$lang$applyTo = (function (arglist__7249){
var x = cljs.core.first(arglist__7249);
var y = cljs.core.first(cljs.core.next(arglist__7249));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7249)));
var items = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7249)));
return G__7248__delegate(x, y, z, items);
});
G__7248.cljs$lang$arity$variadic = G__7248__delegate;
return G__7248;
})()
;
list = function(x,y,z,var_args){
var items = var_args;
switch(arguments.length){
case 0:
return list__0.call(this);
case 1:
return list__1.call(this,x);
case 2:
return list__2.call(this,x,y);
case 3:
return list__3.call(this,x,y,z);
default:
return list__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
list.cljs$lang$maxFixedArity = 3;
list.cljs$lang$applyTo = list__4.cljs$lang$applyTo;
list.cljs$lang$arity$0 = list__0;
list.cljs$lang$arity$1 = list__1;
list.cljs$lang$arity$2 = list__2;
list.cljs$lang$arity$3 = list__3;
list.cljs$lang$arity$variadic = list__4.cljs$lang$arity$variadic;
return list;
})()
;

goog.provide('cljs.core.Cons');

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65405164;
})
cljs.core.Cons.cljs$lang$type = true;
cljs.core.Cons.cljs$lang$ctorPrSeq = (function (this__2322__auto__){
return cljs.core.list.call(null,"cljs.core/Cons");
});
cljs.core.Cons.cljs$lang$ctorPrWriter = (function (this__2322__auto__,writer__2323__auto__){
return cljs.core._write.call(null,writer__2323__auto__,"cljs.core/Cons");
});
cljs.core.Cons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7250 = this;
var h__2203__auto____7251 = this__7250.__hash;
if(!((h__2203__auto____7251 == null)))
{return h__2203__auto____7251;
} else
{var h__2203__auto____7252 = cljs.core.hash_coll.call(null,coll);
this__7250.__hash = h__2203__auto____7252;
return h__2203__auto____7252;
}
});
cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7253 = this;
if((this__7253.rest == null))
{return null;
} else
{return cljs.core._seq.call(null,this__7253.rest);
}
});
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7254 = this;
return (new cljs.core.Cons(null,o,coll,this__7254.__hash));
});
cljs.core.Cons.prototype.toString = (function (){
var this__7255 = this;
var this__7256 = this;
return cljs.core.pr_str.call(null,this__7256);
});
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7257 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7258 = this;
return this__7258.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7259 = this;
if((this__7259.rest == null))
{return cljs.core.List.EMPTY;
} else
{return this__7259.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7260 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7261 = this;
return (new cljs.core.Cons(meta,this__7261.first,this__7261.rest,this__7261.__hash));
});
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7262 = this;
return this__7262.meta;
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7263 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__7263.meta);
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3824__auto____7268 = (coll == null);
if(or__3824__auto____7268)
{return or__3824__auto____7268;
} else
{var G__7269__7270 = coll;
if(G__7269__7270)
{if((function (){var or__3824__auto____7271 = (G__7269__7270.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____7271)
{return or__3824__auto____7271;
} else
{return G__7269__7270.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7269__7270.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7269__7270);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7269__7270);
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq.call(null,coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__7275__7276 = x;
if(G__7275__7276)
{if((function (){var or__3824__auto____7277 = (G__7275__7276.cljs$lang$protocol_mask$partition0$ & 33554432);
if(or__3824__auto____7277)
{return or__3824__auto____7277;
} else
{return G__7275__7276.cljs$core$IList$;
}
})())
{return true;
} else
{if((!G__7275__7276.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__7275__7276);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__7275__7276);
}
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__7278 = null;
var G__7278__2 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__7278__3 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__7278 = function(string,f,start){
switch(arguments.length){
case 2:
return G__7278__2.call(this,string,f);
case 3:
return G__7278__3.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7278;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__7279 = null;
var G__7279__2 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__7279__3 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__7279 = function(string,k,not_found){
switch(arguments.length){
case 2:
return G__7279__2.call(this,string,k);
case 3:
return G__7279__3.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7279;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__7280 = null;
var G__7280__2 = (function (string,n){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return null;
}
});
var G__7280__3 = (function (string,n,not_found){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return not_found;
}
});
G__7280 = function(string,n,not_found){
switch(arguments.length){
case 2:
return G__7280__2.call(this,string,n);
case 3:
return G__7280__3.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7280;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.call(null,string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode(o);
}));

goog.provide('cljs.core.Keyword');

/**
* @constructor
*/
cljs.core.Keyword = (function (k){
this.k = k;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1;
})
cljs.core.Keyword.cljs$lang$type = true;
cljs.core.Keyword.cljs$lang$ctorPrSeq = (function (this__2322__auto__){
return cljs.core.list.call(null,"cljs.core/Keyword");
});
cljs.core.Keyword.cljs$lang$ctorPrWriter = (function (this__2322__auto__,writer__2323__auto__){
return cljs.core._write.call(null,writer__2323__auto__,"cljs.core/Keyword");
});
cljs.core.Keyword.prototype.call = (function() {
var G__7292 = null;
var G__7292__2 = (function (this_sym7283,coll){
var this__7285 = this;
var this_sym7283__7286 = this;
var ___7287 = this_sym7283__7286;
if((coll == null))
{return null;
} else
{var strobj__7288 = coll.strobj;
if((strobj__7288 == null))
{return cljs.core._lookup.call(null,coll,this__7285.k,null);
} else
{return (strobj__7288[this__7285.k]);
}
}
});
var G__7292__3 = (function (this_sym7284,coll,not_found){
var this__7285 = this;
var this_sym7284__7289 = this;
var ___7290 = this_sym7284__7289;
if((coll == null))
{return not_found;
} else
{return cljs.core._lookup.call(null,coll,this__7285.k,not_found);
}
});
G__7292 = function(this_sym7284,coll,not_found){
switch(arguments.length){
case 2:
return G__7292__2.call(this,this_sym7284,coll);
case 3:
return G__7292__3.call(this,this_sym7284,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7292;
})()
;
cljs.core.Keyword.prototype.apply = (function (this_sym7281,args7282){
var this__7291 = this;
return this_sym7281.call.apply(this_sym7281,[this_sym7281].concat(args7282.slice()));
});
cljs.core.Keyword;
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__7301 = null;
var G__7301__2 = (function (this_sym7295,coll){
var this_sym7295__7297 = this;
var this__7298 = this_sym7295__7297;
return cljs.core._lookup.call(null,coll,this__7298.toString(),null);
});
var G__7301__3 = (function (this_sym7296,coll,not_found){
var this_sym7296__7299 = this;
var this__7300 = this_sym7296__7299;
return cljs.core._lookup.call(null,coll,this__7300.toString(),not_found);
});
G__7301 = function(this_sym7296,coll,not_found){
switch(arguments.length){
case 2:
return G__7301__2.call(this,this_sym7296,coll);
case 3:
return G__7301__3.call(this,this_sym7296,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7301;
})()
;
String.prototype.apply = (function (this_sym7293,args7294){
return this_sym7293.call.apply(this_sym7293,[this_sym7293].concat(args7294.slice()));
});
String.prototype.apply = (function (s,args){
if((cljs.core.count.call(null,args) < 2))
{return cljs.core._lookup.call(null,(args[0]),s,null);
} else
{return cljs.core._lookup.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__7303 = lazy_seq.x;
if(lazy_seq.realized)
{return x__7303;
} else
{lazy_seq.x = x__7303.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});

goog.provide('cljs.core.LazySeq');

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x,__hash){
this.meta = meta;
this.realized = realized;
this.x = x;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850700;
})
cljs.core.LazySeq.cljs$lang$type = true;
cljs.core.LazySeq.cljs$lang$ctorPrSeq = (function (this__2322__auto__){
return cljs.core.list.call(null,"cljs.core/LazySeq");
});
cljs.core.LazySeq.cljs$lang$ctorPrWriter = (function (this__2322__auto__,writer__2323__auto__){
return cljs.core._write.call(null,writer__2323__auto__,"cljs.core/LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7304 = this;
var h__2203__auto____7305 = this__7304.__hash;
if(!((h__2203__auto____7305 == null)))
{return h__2203__auto____7305;
} else
{var h__2203__auto____7306 = cljs.core.hash_coll.call(null,coll);
this__7304.__hash = h__2203__auto____7306;
return h__2203__auto____7306;
}
});
cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7307 = this;
return cljs.core._seq.call(null,coll.cljs$core$ISeq$_rest$arity$1(coll));
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7308 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.toString = (function (){
var this__7309 = this;
var this__7310 = this;
return cljs.core.pr_str.call(null,this__7310);
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7311 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7312 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7313 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7314 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7315 = this;
return (new cljs.core.LazySeq(meta,this__7315.realized,this__7315.x,this__7315.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7316 = this;
return this__7316.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7317 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__7317.meta);
});
cljs.core.LazySeq;

goog.provide('cljs.core.ChunkBuffer');

/**
* @constructor
*/
cljs.core.ChunkBuffer = (function (buf,end){
this.buf = buf;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2;
})
cljs.core.ChunkBuffer.cljs$lang$type = true;
cljs.core.ChunkBuffer.cljs$lang$ctorPrSeq = (function (this__2322__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkBuffer");
});
cljs.core.ChunkBuffer.cljs$lang$ctorPrWriter = (function (this__2322__auto__,writer__2323__auto__){
return cljs.core._write.call(null,writer__2323__auto__,"cljs.core/ChunkBuffer");
});
cljs.core.ChunkBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__7318 = this;
return this__7318.end;
});
cljs.core.ChunkBuffer.prototype.add = (function (o){
var this__7319 = this;
var ___7320 = this;
(this__7319.buf[this__7319.end] = o);
return this__7319.end = (this__7319.end + 1);
});
cljs.core.ChunkBuffer.prototype.chunk = (function (o){
var this__7321 = this;
var ___7322 = this;
var ret__7323 = (new cljs.core.ArrayChunk(this__7321.buf,0,this__7321.end));
this__7321.buf = null;
return ret__7323;
});
cljs.core.ChunkBuffer;
cljs.core.chunk_buffer = (function chunk_buffer(capacity){
return (new cljs.core.ChunkBuffer(cljs.core.make_array.call(null,capacity),0));
});

goog.provide('cljs.core.ArrayChunk');

/**
* @constructor
*/
cljs.core.ArrayChunk = (function (arr,off,end){
this.arr = arr;
this.off = off;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 524306;
})
cljs.core.ArrayChunk.cljs$lang$type = true;
cljs.core.ArrayChunk.cljs$lang$ctorPrSeq = (function (this__2322__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayChunk");
});
cljs.core.ArrayChunk.cljs$lang$ctorPrWriter = (function (this__2322__auto__,writer__2323__auto__){
return cljs.core._write.call(null,writer__2323__auto__,"cljs.core/ArrayChunk");
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__7324 = this;
return cljs.core.array_reduce.call(null,this__7324.arr,f,(this__7324.arr[this__7324.off]),(this__7324.off + 1));
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__7325 = this;
return cljs.core.array_reduce.call(null,this__7325.arr,f,start,this__7325.off);
});
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){
var this__7326 = this;
if((this__7326.off === this__7326.end))
{throw (new Error("-drop-first of empty chunk"));
} else
{return (new cljs.core.ArrayChunk(this__7326.arr,(this__7326.off + 1),this__7326.end));
}
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){
var this__7327 = this;
return (this__7327.arr[(this__7327.off + i)]);
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){
var this__7328 = this;
if((function (){var and__3822__auto____7329 = (i >= 0);
if(and__3822__auto____7329)
{return (i < (this__7328.end - this__7328.off));
} else
{return and__3822__auto____7329;
}
})())
{return (this__7328.arr[(this__7328.off + i)]);
} else
{return not_found;
}
});
cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__7330 = this;
return (this__7330.end - this__7330.off);
});
cljs.core.ArrayChunk;
cljs.core.array_chunk = (function() {
var array_chunk = null;
var array_chunk__1 = (function (arr){
return array_chunk.call(null,arr,0,arr.length);
});
var array_chunk__2 = (function (arr,off){
return array_chunk.call(null,arr,off,arr.length);
});
var array_chunk__3 = (function (arr,off,end){
return (new cljs.core.ArrayChunk(arr,off,end));
});
array_chunk = function(arr,off,end){
switch(arguments.length){
case 1:
return array_chunk__1.call(this,arr);
case 2:
return array_chunk__2.call(this,arr,off);
case 3:
return array_chunk__3.call(this,arr,off,end);
}
throw('Invalid arity: ' + arguments.length);
};
array_chunk.cljs$lang$arity$1 = array_chunk__1;
array_chunk.cljs$lang$arity$2 = array_chunk__2;
array_chunk.cljs$lang$arity$3 = array_chunk__3;
return array_chunk;
})()
;

goog.provide('cljs.core.ChunkedCons');

/**
* @constructor
*/
cljs.core.ChunkedCons = (function (chunk,more,meta,__hash){
this.chunk = chunk;
this.more = more;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 31850604;
this.cljs$lang$protocol_mask$partition1$ = 1536;
})
cljs.core.ChunkedCons.cljs$lang$type = true;
cljs.core.ChunkedCons.cljs$lang$ctorPrSeq = (function (this__2322__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedCons");
});
cljs.core.ChunkedCons.cljs$lang$ctorPrWriter = (function (this__2322__auto__,writer__2323__auto__){
return cljs.core._write.call(null,writer__2323__auto__,"cljs.core/ChunkedCons");
});
cljs.core.ChunkedCons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7331 = this;
var h__2203__auto____7332 = this__7331.__hash;
if(!((h__2203__auto____7332 == null)))
{return h__2203__auto____7332;
} else
{var h__2203__auto____7333 = cljs.core.hash_coll.call(null,coll);
this__7331.__hash = h__2203__auto____7333;
return h__2203__auto____7333;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){
var this__7334 = this;
return cljs.core.cons.call(null,o,this$);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7335 = this;
return coll;
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7336 = this;
return cljs.core._nth.call(null,this__7336.chunk,0);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7337 = this;
if((cljs.core._count.call(null,this__7337.chunk) > 1))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first.call(null,this__7337.chunk),this__7337.more,this__7337.meta,null));
} else
{if((this__7337.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__7337.more;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__7338 = this;
if((this__7338.more == null))
{return null;
} else
{return this__7338.more;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7339 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__7340 = this;
return (new cljs.core.ChunkedCons(this__7340.chunk,this__7340.more,m,this__7340.__hash));
});
cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7341 = this;
return this__7341.meta;
});
cljs.core.ChunkedCons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7342 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__7342.meta);
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__7343 = this;
return this__7343.chunk;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__7344 = this;
if((this__7344.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__7344.more;
}
});
cljs.core.ChunkedCons;
cljs.core.chunk_cons = (function chunk_cons(chunk,rest){
if((cljs.core._count.call(null,chunk) === 0))
{return rest;
} else
{return (new cljs.core.ChunkedCons(chunk,rest,null,null));
}
});
cljs.core.chunk_append = (function chunk_append(b,x){
return b.add(x);
});
cljs.core.chunk = (function chunk(b){
return b.chunk();
});
cljs.core.chunk_first = (function chunk_first(s){
return cljs.core._chunked_first.call(null,s);
});
cljs.core.chunk_rest = (function chunk_rest(s){
return cljs.core._chunked_rest.call(null,s);
});
cljs.core.chunk_next = (function chunk_next(s){
if((function (){var G__7348__7349 = s;
if(G__7348__7349)
{if((function (){var or__3824__auto____7350 = (G__7348__7349.cljs$lang$protocol_mask$partition1$ & 1024);
if(or__3824__auto____7350)
{return or__3824__auto____7350;
} else
{return G__7348__7349.cljs$core$IChunkedNext$;
}
})())
{return true;
} else
{if((!G__7348__7349.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__7348__7349);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__7348__7349);
}
})())
{return cljs.core._chunked_next.call(null,s);
} else
{return cljs.core.seq.call(null,cljs.core._chunked_rest.call(null,s));
}
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__7353 = [];
var s__7354 = s;
while(true){
if(cljs.core.seq.call(null,s__7354))
{ary__7353.push(cljs.core.first.call(null,s__7354));
{
var G__7355 = cljs.core.next.call(null,s__7354);
s__7354 = G__7355;
continue;
}
} else
{return ary__7353;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret__7359 = cljs.core.make_array.call(null,cljs.core.count.call(null,coll));
var i__7360 = 0;
var xs__7361 = cljs.core.seq.call(null,coll);
while(true){
if(xs__7361)
{(ret__7359[i__7360] = cljs.core.to_array.call(null,cljs.core.first.call(null,xs__7361)));
{
var G__7362 = (i__7360 + 1);
var G__7363 = cljs.core.next.call(null,xs__7361);
i__7360 = G__7362;
xs__7361 = G__7363;
continue;
}
} else
{}
break;
}
return ret__7359;
});
cljs.core.long_array = (function() {
var long_array = null;
var long_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return long_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("long-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var long_array__2 = (function (size,init_val_or_seq){
var a__7371 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__7372 = cljs.core.seq.call(null,init_val_or_seq);
var i__7373 = 0;
var s__7374 = s__7372;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7375 = s__7374;
if(and__3822__auto____7375)
{return (i__7373 < size);
} else
{return and__3822__auto____7375;
}
})()))
{(a__7371[i__7373] = cljs.core.first.call(null,s__7374));
{
var G__7378 = (i__7373 + 1);
var G__7379 = cljs.core.next.call(null,s__7374);
i__7373 = G__7378;
s__7374 = G__7379;
continue;
}
} else
{return a__7371;
}
break;
}
} else
{var n__2549__auto____7376 = size;
var i__7377 = 0;
while(true){
if((i__7377 < n__2549__auto____7376))
{(a__7371[i__7377] = init_val_or_seq);
{
var G__7380 = (i__7377 + 1);
i__7377 = G__7380;
continue;
}
} else
{}
break;
}
return a__7371;
}
});
long_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return long_array__1.call(this,size);
case 2:
return long_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
long_array.cljs$lang$arity$1 = long_array__1;
long_array.cljs$lang$arity$2 = long_array__2;
return long_array;
})()
;
cljs.core.double_array = (function() {
var double_array = null;
var double_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return double_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("double-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var double_array__2 = (function (size,init_val_or_seq){
var a__7388 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__7389 = cljs.core.seq.call(null,init_val_or_seq);
var i__7390 = 0;
var s__7391 = s__7389;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7392 = s__7391;
if(and__3822__auto____7392)
{return (i__7390 < size);
} else
{return and__3822__auto____7392;
}
})()))
{(a__7388[i__7390] = cljs.core.first.call(null,s__7391));
{
var G__7395 = (i__7390 + 1);
var G__7396 = cljs.core.next.call(null,s__7391);
i__7390 = G__7395;
s__7391 = G__7396;
continue;
}
} else
{return a__7388;
}
break;
}
} else
{var n__2549__auto____7393 = size;
var i__7394 = 0;
while(true){
if((i__7394 < n__2549__auto____7393))
{(a__7388[i__7394] = init_val_or_seq);
{
var G__7397 = (i__7394 + 1);
i__7394 = G__7397;
continue;
}
} else
{}
break;
}
return a__7388;
}
});
double_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return double_array__1.call(this,size);
case 2:
return double_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
double_array.cljs$lang$arity$1 = double_array__1;
double_array.cljs$lang$arity$2 = double_array__2;
return double_array;
})()
;
cljs.core.object_array = (function() {
var object_array = null;
var object_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return object_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("object-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var object_array__2 = (function (size,init_val_or_seq){
var a__7405 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__7406 = cljs.core.seq.call(null,init_val_or_seq);
var i__7407 = 0;
var s__7408 = s__7406;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7409 = s__7408;
if(and__3822__auto____7409)
{return (i__7407 < size);
} else
{return and__3822__auto____7409;
}
})()))
{(a__7405[i__7407] = cljs.core.first.call(null,s__7408));
{
var G__7412 = (i__7407 + 1);
var G__7413 = cljs.core.next.call(null,s__7408);
i__7407 = G__7412;
s__7408 = G__7413;
continue;
}
} else
{return a__7405;
}
break;
}
} else
{var n__2549__auto____7410 = size;
var i__7411 = 0;
while(true){
if((i__7411 < n__2549__auto____7410))
{(a__7405[i__7411] = init_val_or_seq);
{
var G__7414 = (i__7411 + 1);
i__7411 = G__7414;
continue;
}
} else
{}
break;
}
return a__7405;
}
});
object_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return object_array__1.call(this,size);
case 2:
return object_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
object_array.cljs$lang$arity$1 = object_array__1;
object_array.cljs$lang$arity$2 = object_array__2;
return object_array;
})()
;
cljs.core.bounded_count = (function bounded_count(s,n){
if(cljs.core.counted_QMARK_.call(null,s))
{return cljs.core.count.call(null,s);
} else
{var s__7419 = s;
var i__7420 = n;
var sum__7421 = 0;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7422 = (i__7420 > 0);
if(and__3822__auto____7422)
{return cljs.core.seq.call(null,s__7419);
} else
{return and__3822__auto____7422;
}
})()))
{{
var G__7423 = cljs.core.next.call(null,s__7419);
var G__7424 = (i__7420 - 1);
var G__7425 = (sum__7421 + 1);
s__7419 = G__7423;
i__7420 = G__7424;
sum__7421 = G__7425;
continue;
}
} else
{return sum__7421;
}
break;
}
}
});
cljs.core.spread = (function spread(arglist){
if((arglist == null))
{return null;
} else
{if((cljs.core.next.call(null,arglist) == null))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if("\uFDD0'else")
{return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__0 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
}),null));
});
var concat__1 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
}),null));
});
var concat__2 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__7430 = cljs.core.seq.call(null,x);
if(s__7430)
{if(cljs.core.chunked_seq_QMARK_.call(null,s__7430))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,s__7430),concat.call(null,cljs.core.chunk_rest.call(null,s__7430),y));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__7430),concat.call(null,cljs.core.rest.call(null,s__7430),y));
}
} else
{return y;
}
}),null));
});
var concat__3 = (function() { 
var G__7434__delegate = function (x,y,zs){
var cat__7433 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__7432 = cljs.core.seq.call(null,xys);
if(xys__7432)
{if(cljs.core.chunked_seq_QMARK_.call(null,xys__7432))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,xys__7432),cat.call(null,cljs.core.chunk_rest.call(null,xys__7432),zs));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__7432),cat.call(null,cljs.core.rest.call(null,xys__7432),zs));
}
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
}),null));
});
return cat__7433.call(null,concat.call(null,x,y),zs);
};
var G__7434 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7434__delegate.call(this, x, y, zs);
};
G__7434.cljs$lang$maxFixedArity = 2;
G__7434.cljs$lang$applyTo = (function (arglist__7435){
var x = cljs.core.first(arglist__7435);
var y = cljs.core.first(cljs.core.next(arglist__7435));
var zs = cljs.core.rest(cljs.core.next(arglist__7435));
return G__7434__delegate(x, y, zs);
});
G__7434.cljs$lang$arity$variadic = G__7434__delegate;
return G__7434;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return concat__0.call(this);
case 1:
return concat__1.call(this,x);
case 2:
return concat__2.call(this,x,y);
default:
return concat__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__3.cljs$lang$applyTo;
concat.cljs$lang$arity$0 = concat__0;
concat.cljs$lang$arity$1 = concat__1;
concat.cljs$lang$arity$2 = concat__2;
concat.cljs$lang$arity$variadic = concat__3.cljs$lang$arity$variadic;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___1 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___2 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___3 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___4 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___5 = (function() { 
var G__7436__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__7436 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7436__delegate.call(this, a, b, c, d, more);
};
G__7436.cljs$lang$maxFixedArity = 4;
G__7436.cljs$lang$applyTo = (function (arglist__7437){
var a = cljs.core.first(arglist__7437);
var b = cljs.core.first(cljs.core.next(arglist__7437));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7437)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7437))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7437))));
return G__7436__delegate(a, b, c, d, more);
});
G__7436.cljs$lang$arity$variadic = G__7436__delegate;
return G__7436;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return list_STAR___1.call(this,a);
case 2:
return list_STAR___2.call(this,a,b);
case 3:
return list_STAR___3.call(this,a,b,c);
case 4:
return list_STAR___4.call(this,a,b,c,d);
default:
return list_STAR___5.cljs$lang$arity$variadic(a,b,c,d, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___5.cljs$lang$applyTo;
list_STAR_.cljs$lang$arity$1 = list_STAR___1;
list_STAR_.cljs$lang$arity$2 = list_STAR___2;
list_STAR_.cljs$lang$arity$3 = list_STAR___3;
list_STAR_.cljs$lang$arity$4 = list_STAR___4;
list_STAR_.cljs$lang$arity$variadic = list_STAR___5.cljs$lang$arity$variadic;
return list_STAR_;
})()
;
cljs.core.transient$ = (function transient$(coll){
return cljs.core._as_transient.call(null,coll);
});
cljs.core.persistent_BANG_ = (function persistent_BANG_(tcoll){
return cljs.core._persistent_BANG_.call(null,tcoll);
});
cljs.core.conj_BANG_ = (function conj_BANG_(tcoll,val){
return cljs.core._conj_BANG_.call(null,tcoll,val);
});
cljs.core.assoc_BANG_ = (function assoc_BANG_(tcoll,key,val){
return cljs.core._assoc_BANG_.call(null,tcoll,key,val);
});
cljs.core.dissoc_BANG_ = (function dissoc_BANG_(tcoll,key){
return cljs.core._dissoc_BANG_.call(null,tcoll,key);
});
cljs.core.pop_BANG_ = (function pop_BANG_(tcoll){
return cljs.core._pop_BANG_.call(null,tcoll);
});
cljs.core.disj_BANG_ = (function disj_BANG_(tcoll,val){
return cljs.core._disjoin_BANG_.call(null,tcoll,val);
});
cljs.core.apply_to = (function apply_to(f,argc,args){
var args__7479 = cljs.core.seq.call(null,args);
if((argc === 0))
{return f.call(null);
} else
{var a__7480 = cljs.core._first.call(null,args__7479);
var args__7481 = cljs.core._rest.call(null,args__7479);
if((argc === 1))
{if(f.cljs$lang$arity$1)
{return f.cljs$lang$arity$1(a__7480);
} else
{return f.call(null,a__7480);
}
} else
{var b__7482 = cljs.core._first.call(null,args__7481);
var args__7483 = cljs.core._rest.call(null,args__7481);
if((argc === 2))
{if(f.cljs$lang$arity$2)
{return f.cljs$lang$arity$2(a__7480,b__7482);
} else
{return f.call(null,a__7480,b__7482);
}
} else
{var c__7484 = cljs.core._first.call(null,args__7483);
var args__7485 = cljs.core._rest.call(null,args__7483);
if((argc === 3))
{if(f.cljs$lang$arity$3)
{return f.cljs$lang$arity$3(a__7480,b__7482,c__7484);
} else
{return f.call(null,a__7480,b__7482,c__7484);
}
} else
{var d__7486 = cljs.core._first.call(null,args__7485);
var args__7487 = cljs.core._rest.call(null,args__7485);
if((argc === 4))
{if(f.cljs$lang$arity$4)
{return f.cljs$lang$arity$4(a__7480,b__7482,c__7484,d__7486);
} else
{return f.call(null,a__7480,b__7482,c__7484,d__7486);
}
} else
{var e__7488 = cljs.core._first.call(null,args__7487);
var args__7489 = cljs.core._rest.call(null,args__7487);
if((argc === 5))
{if(f.cljs$lang$arity$5)
{return f.cljs$lang$arity$5(a__7480,b__7482,c__7484,d__7486,e__7488);
} else
{return f.call(null,a__7480,b__7482,c__7484,d__7486,e__7488);
}
} else
{var f__7490 = cljs.core._first.call(null,args__7489);
var args__7491 = cljs.core._rest.call(null,args__7489);
if((argc === 6))
{if(f__7490.cljs$lang$arity$6)
{return f__7490.cljs$lang$arity$6(a__7480,b__7482,c__7484,d__7486,e__7488,f__7490);
} else
{return f__7490.call(null,a__7480,b__7482,c__7484,d__7486,e__7488,f__7490);
}
} else
{var g__7492 = cljs.core._first.call(null,args__7491);
var args__7493 = cljs.core._rest.call(null,args__7491);
if((argc === 7))
{if(f__7490.cljs$lang$arity$7)
{return f__7490.cljs$lang$arity$7(a__7480,b__7482,c__7484,d__7486,e__7488,f__7490,g__7492);
} else
{return f__7490.call(null,a__7480,b__7482,c__7484,d__7486,e__7488,f__7490,g__7492);
}
} else
{var h__7494 = cljs.core._first.call(null,args__7493);
var args__7495 = cljs.core._rest.call(null,args__7493);
if((argc === 8))
{if(f__7490.cljs$lang$arity$8)
{return f__7490.cljs$lang$arity$8(a__7480,b__7482,c__7484,d__7486,e__7488,f__7490,g__7492,h__7494);
} else
{return f__7490.call(null,a__7480,b__7482,c__7484,d__7486,e__7488,f__7490,g__7492,h__7494);
}
} else
{var i__7496 = cljs.core._first.call(null,args__7495);
var args__7497 = cljs.core._rest.call(null,args__7495);
if((argc === 9))
{if(f__7490.cljs$lang$arity$9)
{return f__7490.cljs$lang$arity$9(a__7480,b__7482,c__7484,d__7486,e__7488,f__7490,g__7492,h__7494,i__7496);
} else
{return f__7490.call(null,a__7480,b__7482,c__7484,d__7486,e__7488,f__7490,g__7492,h__7494,i__7496);
}
} else
{var j__7498 = cljs.core._first.call(null,args__7497);
var args__7499 = cljs.core._rest.call(null,args__7497);
if((argc === 10))
{if(f__7490.cljs$lang$arity$10)
{return f__7490.cljs$lang$arity$10(a__7480,b__7482,c__7484,d__7486,e__7488,f__7490,g__7492,h__7494,i__7496,j__7498);
} else
{return f__7490.call(null,a__7480,b__7482,c__7484,d__7486,e__7488,f__7490,g__7492,h__7494,i__7496,j__7498);
}
} else
{var k__7500 = cljs.core._first.call(null,args__7499);
var args__7501 = cljs.core._rest.call(null,args__7499);
if((argc === 11))
{if(f__7490.cljs$lang$arity$11)
{return f__7490.cljs$lang$arity$11(a__7480,b__7482,c__7484,d__7486,e__7488,f__7490,g__7492,h__7494,i__7496,j__7498,k__7500);
} else
{return f__7490.call(null,a__7480,b__7482,c__7484,d__7486,e__7488,f__7490,g__7492,h__7494,i__7496,j__7498,k__7500);
}
} else
{var l__7502 = cljs.core._first.call(null,args__7501);
var args__7503 = cljs.core._rest.call(null,args__7501);
if((argc === 12))
{if(f__7490.cljs$lang$arity$12)
{return f__7490.cljs$lang$arity$12(a__7480,b__7482,c__7484,d__7486,e__7488,f__7490,g__7492,h__7494,i__7496,j__7498,k__7500,l__7502);
} else
{return f__7490.call(null,a__7480,b__7482,c__7484,d__7486,e__7488,f__7490,g__7492,h__7494,i__7496,j__7498,k__7500,l__7502);
}
} else
{var m__7504 = cljs.core._first.call(null,args__7503);
var args__7505 = cljs.core._rest.call(null,args__7503);
if((argc === 13))
{if(f__7490.cljs$lang$arity$13)
{return f__7490.cljs$lang$arity$13(a__7480,b__7482,c__7484,d__7486,e__7488,f__7490,g__7492,h__7494,i__7496,j__7498,k__7500,l__7502,m__7504);
} else
{return f__7490.call(null,a__7480,b__7482,c__7484,d__7486,e__7488,f__7490,g__7492,h__7494,i__7496,j__7498,k__7500,l__7502,m__7504);
}
} else
{var n__7506 = cljs.core._first.call(null,args__7505);
var args__7507 = cljs.core._rest.call(null,args__7505);
if((argc === 14))
{if(f__7490.cljs$lang$arity$14)
{return f__7490.cljs$lang$arity$14(a__7480,b__7482,c__7484,d__7486,e__7488,f__7490,g__7492,h__7494,i__7496,j__7498,k__7500,l__7502,m__7504,n__7506);
} else
{return f__7490.call(null,a__7480,b__7482,c__7484,d__7486,e__7488,f__7490,g__7492,h__7494,i__7496,j__7498,k__7500,l__7502,m__7504,n__7506);
}
} else
{var o__7508 = cljs.core._first.call(null,args__7507);
var args__7509 = cljs.core._rest.call(null,args__7507);
if((argc === 15))
{if(f__7490.cljs$lang$arity$15)
{return f__7490.cljs$lang$arity$15(a__7480,b__7482,c__7484,d__7486,e__7488,f__7490,g__7492,h__7494,i__7496,j__7498,k__7500,l__7502,m__7504,n__7506,o__7508);
} else
{return f__7490.call(null,a__7480,b__7482,c__7484,d__7486,e__7488,f__7490,g__7492,h__7494,i__7496,j__7498,k__7500,l__7502,m__7504,n__7506,o__7508);
}
} else
{var p__7510 = cljs.core._first.call(null,args__7509);
var args__7511 = cljs.core._rest.call(null,args__7509);
if((argc === 16))
{if(f__7490.cljs$lang$arity$16)
{return f__7490.cljs$lang$arity$16(a__7480,b__7482,c__7484,d__7486,e__7488,f__7490,g__7492,h__7494,i__7496,j__7498,k__7500,l__7502,m__7504,n__7506,o__7508,p__7510);
} else
{return f__7490.call(null,a__7480,b__7482,c__7484,d__7486,e__7488,f__7490,g__7492,h__7494,i__7496,j__7498,k__7500,l__7502,m__7504,n__7506,o__7508,p__7510);
}
} else
{var q__7512 = cljs.core._first.call(null,args__7511);
var args__7513 = cljs.core._rest.call(null,args__7511);
if((argc === 17))
{if(f__7490.cljs$lang$arity$17)
{return f__7490.cljs$lang$arity$17(a__7480,b__7482,c__7484,d__7486,e__7488,f__7490,g__7492,h__7494,i__7496,j__7498,k__7500,l__7502,m__7504,n__7506,o__7508,p__7510,q__7512);
} else
{return f__7490.call(null,a__7480,b__7482,c__7484,d__7486,e__7488,f__7490,g__7492,h__7494,i__7496,j__7498,k__7500,l__7502,m__7504,n__7506,o__7508,p__7510,q__7512);
}
} else
{var r__7514 = cljs.core._first.call(null,args__7513);
var args__7515 = cljs.core._rest.call(null,args__7513);
if((argc === 18))
{if(f__7490.cljs$lang$arity$18)
{return f__7490.cljs$lang$arity$18(a__7480,b__7482,c__7484,d__7486,e__7488,f__7490,g__7492,h__7494,i__7496,j__7498,k__7500,l__7502,m__7504,n__7506,o__7508,p__7510,q__7512,r__7514);
} else
{return f__7490.call(null,a__7480,b__7482,c__7484,d__7486,e__7488,f__7490,g__7492,h__7494,i__7496,j__7498,k__7500,l__7502,m__7504,n__7506,o__7508,p__7510,q__7512,r__7514);
}
} else
{var s__7516 = cljs.core._first.call(null,args__7515);
var args__7517 = cljs.core._rest.call(null,args__7515);
if((argc === 19))
{if(f__7490.cljs$lang$arity$19)
{return f__7490.cljs$lang$arity$19(a__7480,b__7482,c__7484,d__7486,e__7488,f__7490,g__7492,h__7494,i__7496,j__7498,k__7500,l__7502,m__7504,n__7506,o__7508,p__7510,q__7512,r__7514,s__7516);
} else
{return f__7490.call(null,a__7480,b__7482,c__7484,d__7486,e__7488,f__7490,g__7492,h__7494,i__7496,j__7498,k__7500,l__7502,m__7504,n__7506,o__7508,p__7510,q__7512,r__7514,s__7516);
}
} else
{var t__7518 = cljs.core._first.call(null,args__7517);
var args__7519 = cljs.core._rest.call(null,args__7517);
if((argc === 20))
{if(f__7490.cljs$lang$arity$20)
{return f__7490.cljs$lang$arity$20(a__7480,b__7482,c__7484,d__7486,e__7488,f__7490,g__7492,h__7494,i__7496,j__7498,k__7500,l__7502,m__7504,n__7506,o__7508,p__7510,q__7512,r__7514,s__7516,t__7518);
} else
{return f__7490.call(null,a__7480,b__7482,c__7484,d__7486,e__7488,f__7490,g__7492,h__7494,i__7496,j__7498,k__7500,l__7502,m__7504,n__7506,o__7508,p__7510,q__7512,r__7514,s__7516,t__7518);
}
} else
{throw (new Error("Only up to 20 arguments supported on functions"));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__2 = (function (f,args){
var fixed_arity__7534 = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc__7535 = cljs.core.bounded_count.call(null,args,(fixed_arity__7534 + 1));
if((bc__7535 <= fixed_arity__7534))
{return cljs.core.apply_to.call(null,f,bc__7535,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3 = (function (f,x,args){
var arglist__7536 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__7537 = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc__7538 = cljs.core.bounded_count.call(null,arglist__7536,(fixed_arity__7537 + 1));
if((bc__7538 <= fixed_arity__7537))
{return cljs.core.apply_to.call(null,f,bc__7538,arglist__7536);
} else
{return f.cljs$lang$applyTo(arglist__7536);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7536));
}
});
var apply__4 = (function (f,x,y,args){
var arglist__7539 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__7540 = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc__7541 = cljs.core.bounded_count.call(null,arglist__7539,(fixed_arity__7540 + 1));
if((bc__7541 <= fixed_arity__7540))
{return cljs.core.apply_to.call(null,f,bc__7541,arglist__7539);
} else
{return f.cljs$lang$applyTo(arglist__7539);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7539));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist__7542 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__7543 = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc__7544 = cljs.core.bounded_count.call(null,arglist__7542,(fixed_arity__7543 + 1));
if((bc__7544 <= fixed_arity__7543))
{return cljs.core.apply_to.call(null,f,bc__7544,arglist__7542);
} else
{return f.cljs$lang$applyTo(arglist__7542);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7542));
}
});
var apply__6 = (function() { 
var G__7548__delegate = function (f,a,b,c,d,args){
var arglist__7545 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__7546 = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc__7547 = cljs.core.bounded_count.call(null,arglist__7545,(fixed_arity__7546 + 1));
if((bc__7547 <= fixed_arity__7546))
{return cljs.core.apply_to.call(null,f,bc__7547,arglist__7545);
} else
{return f.cljs$lang$applyTo(arglist__7545);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7545));
}
};
var G__7548 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__7548__delegate.call(this, f, a, b, c, d, args);
};
G__7548.cljs$lang$maxFixedArity = 5;
G__7548.cljs$lang$applyTo = (function (arglist__7549){
var f = cljs.core.first(arglist__7549);
var a = cljs.core.first(cljs.core.next(arglist__7549));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7549)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7549))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7549)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7549)))));
return G__7548__delegate(f, a, b, c, d, args);
});
G__7548.cljs$lang$arity$variadic = G__7548__delegate;
return G__7548;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return apply__2.call(this,f,a);
case 3:
return apply__3.call(this,f,a,b);
case 4:
return apply__4.call(this,f,a,b,c);
case 5:
return apply__5.call(this,f,a,b,c,d);
default:
return apply__6.cljs$lang$arity$variadic(f,a,b,c,d, cljs.core.array_seq(arguments, 5));
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__6.cljs$lang$applyTo;
apply.cljs$lang$arity$2 = apply__2;
apply.cljs$lang$arity$3 = apply__3;
apply.cljs$lang$arity$4 = apply__4;
apply.cljs$lang$arity$5 = apply__5;
apply.cljs$lang$arity$variadic = apply__6.cljs$lang$arity$variadic;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() { 
var vary_meta__delegate = function (obj,f,args){
return cljs.core.with_meta.call(null,obj,cljs.core.apply.call(null,f,cljs.core.meta.call(null,obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__7550){
var obj = cljs.core.first(arglist__7550);
var f = cljs.core.first(cljs.core.next(arglist__7550));
var args = cljs.core.rest(cljs.core.next(arglist__7550));
return vary_meta__delegate(obj, f, args);
});
vary_meta.cljs$lang$arity$variadic = vary_meta__delegate;
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___1 = (function (x){
return false;
});
var not_EQ___2 = (function (x,y){
return !(cljs.core._EQ_.call(null,x,y));
});
var not_EQ___3 = (function() { 
var G__7551__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__7551 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7551__delegate.call(this, x, y, more);
};
G__7551.cljs$lang$maxFixedArity = 2;
G__7551.cljs$lang$applyTo = (function (arglist__7552){
var x = cljs.core.first(arglist__7552);
var y = cljs.core.first(cljs.core.next(arglist__7552));
var more = cljs.core.rest(cljs.core.next(arglist__7552));
return G__7551__delegate(x, y, more);
});
G__7551.cljs$lang$arity$variadic = G__7551__delegate;
return G__7551;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return not_EQ___1.call(this,x);
case 2:
return not_EQ___2.call(this,x,y);
default:
return not_EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___3.cljs$lang$applyTo;
not_EQ_.cljs$lang$arity$1 = not_EQ___1;
not_EQ_.cljs$lang$arity$2 = not_EQ___2;
not_EQ_.cljs$lang$arity$variadic = not_EQ___3.cljs$lang$arity$variadic;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.seq.call(null,coll))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if((cljs.core.seq.call(null,coll) == null))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__7553 = pred;
var G__7554 = cljs.core.next.call(null,coll);
pred = G__7553;
coll = G__7554;
continue;
}
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return !(cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.seq.call(null,coll))
{var or__3824__auto____7556 = pred.call(null,cljs.core.first.call(null,coll));
if(cljs.core.truth_(or__3824__auto____7556))
{return or__3824__auto____7556;
} else
{{
var G__7557 = pred;
var G__7558 = cljs.core.next.call(null,coll);
pred = G__7557;
coll = G__7558;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.integer_QMARK_.call(null,n))
{return ((n & 1) === 0);
} else
{throw (new Error([cljs.core.str("Argument must be an integer: "),cljs.core.str(n)].join('')));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return !(cljs.core.even_QMARK_.call(null,n));
});
cljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__7559 = null;
var G__7559__0 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__7559__1 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__7559__2 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__7559__3 = (function() { 
var G__7560__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__7560 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7560__delegate.call(this, x, y, zs);
};
G__7560.cljs$lang$maxFixedArity = 2;
G__7560.cljs$lang$applyTo = (function (arglist__7561){
var x = cljs.core.first(arglist__7561);
var y = cljs.core.first(cljs.core.next(arglist__7561));
var zs = cljs.core.rest(cljs.core.next(arglist__7561));
return G__7560__delegate(x, y, zs);
});
G__7560.cljs$lang$arity$variadic = G__7560__delegate;
return G__7560;
})()
;
G__7559 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__7559__0.call(this);
case 1:
return G__7559__1.call(this,x);
case 2:
return G__7559__2.call(this,x,y);
default:
return G__7559__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
G__7559.cljs$lang$maxFixedArity = 2;
G__7559.cljs$lang$applyTo = G__7559__3.cljs$lang$applyTo;
return G__7559;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__7562__delegate = function (args){
return x;
};
var G__7562 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7562__delegate.call(this, args);
};
G__7562.cljs$lang$maxFixedArity = 0;
G__7562.cljs$lang$applyTo = (function (arglist__7563){
var args = cljs.core.seq(arglist__7563);;
return G__7562__delegate(args);
});
G__7562.cljs$lang$arity$variadic = G__7562__delegate;
return G__7562;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__0 = (function (){
return cljs.core.identity;
});
var comp__1 = (function (f){
return f;
});
var comp__2 = (function (f,g){
return (function() {
var G__7570 = null;
var G__7570__0 = (function (){
return f.call(null,g.call(null));
});
var G__7570__1 = (function (x){
return f.call(null,g.call(null,x));
});
var G__7570__2 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__7570__3 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__7570__4 = (function() { 
var G__7571__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__7571 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7571__delegate.call(this, x, y, z, args);
};
G__7571.cljs$lang$maxFixedArity = 3;
G__7571.cljs$lang$applyTo = (function (arglist__7572){
var x = cljs.core.first(arglist__7572);
var y = cljs.core.first(cljs.core.next(arglist__7572));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7572)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7572)));
return G__7571__delegate(x, y, z, args);
});
G__7571.cljs$lang$arity$variadic = G__7571__delegate;
return G__7571;
})()
;
G__7570 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__7570__0.call(this);
case 1:
return G__7570__1.call(this,x);
case 2:
return G__7570__2.call(this,x,y);
case 3:
return G__7570__3.call(this,x,y,z);
default:
return G__7570__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7570.cljs$lang$maxFixedArity = 3;
G__7570.cljs$lang$applyTo = G__7570__4.cljs$lang$applyTo;
return G__7570;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__7573 = null;
var G__7573__0 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__7573__1 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__7573__2 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__7573__3 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__7573__4 = (function() { 
var G__7574__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__7574 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7574__delegate.call(this, x, y, z, args);
};
G__7574.cljs$lang$maxFixedArity = 3;
G__7574.cljs$lang$applyTo = (function (arglist__7575){
var x = cljs.core.first(arglist__7575);
var y = cljs.core.first(cljs.core.next(arglist__7575));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7575)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7575)));
return G__7574__delegate(x, y, z, args);
});
G__7574.cljs$lang$arity$variadic = G__7574__delegate;
return G__7574;
})()
;
G__7573 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__7573__0.call(this);
case 1:
return G__7573__1.call(this,x);
case 2:
return G__7573__2.call(this,x,y);
case 3:
return G__7573__3.call(this,x,y,z);
default:
return G__7573__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7573.cljs$lang$maxFixedArity = 3;
G__7573.cljs$lang$applyTo = G__7573__4.cljs$lang$applyTo;
return G__7573;
})()
});
var comp__4 = (function() { 
var G__7576__delegate = function (f1,f2,f3,fs){
var fs__7567 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));
return (function() { 
var G__7577__delegate = function (args){
var ret__7568 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__7567),args);
var fs__7569 = cljs.core.next.call(null,fs__7567);
while(true){
if(fs__7569)
{{
var G__7578 = cljs.core.first.call(null,fs__7569).call(null,ret__7568);
var G__7579 = cljs.core.next.call(null,fs__7569);
ret__7568 = G__7578;
fs__7569 = G__7579;
continue;
}
} else
{return ret__7568;
}
break;
}
};
var G__7577 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7577__delegate.call(this, args);
};
G__7577.cljs$lang$maxFixedArity = 0;
G__7577.cljs$lang$applyTo = (function (arglist__7580){
var args = cljs.core.seq(arglist__7580);;
return G__7577__delegate(args);
});
G__7577.cljs$lang$arity$variadic = G__7577__delegate;
return G__7577;
})()
;
};
var G__7576 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7576__delegate.call(this, f1, f2, f3, fs);
};
G__7576.cljs$lang$maxFixedArity = 3;
G__7576.cljs$lang$applyTo = (function (arglist__7581){
var f1 = cljs.core.first(arglist__7581);
var f2 = cljs.core.first(cljs.core.next(arglist__7581));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7581)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7581)));
return G__7576__delegate(f1, f2, f3, fs);
});
G__7576.cljs$lang$arity$variadic = G__7576__delegate;
return G__7576;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case 0:
return comp__0.call(this);
case 1:
return comp__1.call(this,f1);
case 2:
return comp__2.call(this,f1,f2);
case 3:
return comp__3.call(this,f1,f2,f3);
default:
return comp__4.cljs$lang$arity$variadic(f1,f2,f3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__4.cljs$lang$applyTo;
comp.cljs$lang$arity$0 = comp__0;
comp.cljs$lang$arity$1 = comp__1;
comp.cljs$lang$arity$2 = comp__2;
comp.cljs$lang$arity$3 = comp__3;
comp.cljs$lang$arity$variadic = comp__4.cljs$lang$arity$variadic;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__2 = (function (f,arg1){
return (function() { 
var G__7582__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__7582 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7582__delegate.call(this, args);
};
G__7582.cljs$lang$maxFixedArity = 0;
G__7582.cljs$lang$applyTo = (function (arglist__7583){
var args = cljs.core.seq(arglist__7583);;
return G__7582__delegate(args);
});
G__7582.cljs$lang$arity$variadic = G__7582__delegate;
return G__7582;
})()
;
});
var partial__3 = (function (f,arg1,arg2){
return (function() { 
var G__7584__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__7584 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7584__delegate.call(this, args);
};
G__7584.cljs$lang$maxFixedArity = 0;
G__7584.cljs$lang$applyTo = (function (arglist__7585){
var args = cljs.core.seq(arglist__7585);;
return G__7584__delegate(args);
});
G__7584.cljs$lang$arity$variadic = G__7584__delegate;
return G__7584;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__7586__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__7586 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7586__delegate.call(this, args);
};
G__7586.cljs$lang$maxFixedArity = 0;
G__7586.cljs$lang$applyTo = (function (arglist__7587){
var args = cljs.core.seq(arglist__7587);;
return G__7586__delegate(args);
});
G__7586.cljs$lang$arity$variadic = G__7586__delegate;
return G__7586;
})()
;
});
var partial__5 = (function() { 
var G__7588__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__7589__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__7589 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7589__delegate.call(this, args);
};
G__7589.cljs$lang$maxFixedArity = 0;
G__7589.cljs$lang$applyTo = (function (arglist__7590){
var args = cljs.core.seq(arglist__7590);;
return G__7589__delegate(args);
});
G__7589.cljs$lang$arity$variadic = G__7589__delegate;
return G__7589;
})()
;
};
var G__7588 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7588__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__7588.cljs$lang$maxFixedArity = 4;
G__7588.cljs$lang$applyTo = (function (arglist__7591){
var f = cljs.core.first(arglist__7591);
var arg1 = cljs.core.first(cljs.core.next(arglist__7591));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7591)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7591))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7591))));
return G__7588__delegate(f, arg1, arg2, arg3, more);
});
G__7588.cljs$lang$arity$variadic = G__7588__delegate;
return G__7588;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return partial__2.call(this,f,arg1);
case 3:
return partial__3.call(this,f,arg1,arg2);
case 4:
return partial__4.call(this,f,arg1,arg2,arg3);
default:
return partial__5.cljs$lang$arity$variadic(f,arg1,arg2,arg3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__5.cljs$lang$applyTo;
partial.cljs$lang$arity$2 = partial__2;
partial.cljs$lang$arity$3 = partial__3;
partial.cljs$lang$arity$4 = partial__4;
partial.cljs$lang$arity$variadic = partial__5.cljs$lang$arity$variadic;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__2 = (function (f,x){
return (function() {
var G__7592 = null;
var G__7592__1 = (function (a){
return f.call(null,(((a == null))?x:a));
});
var G__7592__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),b);
});
var G__7592__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),b,c);
});
var G__7592__4 = (function() { 
var G__7593__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),b,c,ds);
};
var G__7593 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7593__delegate.call(this, a, b, c, ds);
};
G__7593.cljs$lang$maxFixedArity = 3;
G__7593.cljs$lang$applyTo = (function (arglist__7594){
var a = cljs.core.first(arglist__7594);
var b = cljs.core.first(cljs.core.next(arglist__7594));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7594)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7594)));
return G__7593__delegate(a, b, c, ds);
});
G__7593.cljs$lang$arity$variadic = G__7593__delegate;
return G__7593;
})()
;
G__7592 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__7592__1.call(this,a);
case 2:
return G__7592__2.call(this,a,b);
case 3:
return G__7592__3.call(this,a,b,c);
default:
return G__7592__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7592.cljs$lang$maxFixedArity = 3;
G__7592.cljs$lang$applyTo = G__7592__4.cljs$lang$applyTo;
return G__7592;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__7595 = null;
var G__7595__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__7595__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),c);
});
var G__7595__4 = (function() { 
var G__7596__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__7596 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7596__delegate.call(this, a, b, c, ds);
};
G__7596.cljs$lang$maxFixedArity = 3;
G__7596.cljs$lang$applyTo = (function (arglist__7597){
var a = cljs.core.first(arglist__7597);
var b = cljs.core.first(cljs.core.next(arglist__7597));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7597)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7597)));
return G__7596__delegate(a, b, c, ds);
});
G__7596.cljs$lang$arity$variadic = G__7596__delegate;
return G__7596;
})()
;
G__7595 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__7595__2.call(this,a,b);
case 3:
return G__7595__3.call(this,a,b,c);
default:
return G__7595__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7595.cljs$lang$maxFixedArity = 3;
G__7595.cljs$lang$applyTo = G__7595__4.cljs$lang$applyTo;
return G__7595;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__7598 = null;
var G__7598__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__7598__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c));
});
var G__7598__4 = (function() { 
var G__7599__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__7599 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7599__delegate.call(this, a, b, c, ds);
};
G__7599.cljs$lang$maxFixedArity = 3;
G__7599.cljs$lang$applyTo = (function (arglist__7600){
var a = cljs.core.first(arglist__7600);
var b = cljs.core.first(cljs.core.next(arglist__7600));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7600)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7600)));
return G__7599__delegate(a, b, c, ds);
});
G__7599.cljs$lang$arity$variadic = G__7599__delegate;
return G__7599;
})()
;
G__7598 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__7598__2.call(this,a,b);
case 3:
return G__7598__3.call(this,a,b,c);
default:
return G__7598__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7598.cljs$lang$maxFixedArity = 3;
G__7598.cljs$lang$applyTo = G__7598__4.cljs$lang$applyTo;
return G__7598;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case 2:
return fnil__2.call(this,f,x);
case 3:
return fnil__3.call(this,f,x,y);
case 4:
return fnil__4.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
fnil.cljs$lang$arity$2 = fnil__2;
fnil.cljs$lang$arity$3 = fnil__3;
fnil.cljs$lang$arity$4 = fnil__4;
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi__7616 = (function mapi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7624 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7624)
{var s__7625 = temp__3974__auto____7624;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7625))
{var c__7626 = cljs.core.chunk_first.call(null,s__7625);
var size__7627 = cljs.core.count.call(null,c__7626);
var b__7628 = cljs.core.chunk_buffer.call(null,size__7627);
var n__2549__auto____7629 = size__7627;
var i__7630 = 0;
while(true){
if((i__7630 < n__2549__auto____7629))
{cljs.core.chunk_append.call(null,b__7628,f.call(null,(idx + i__7630),cljs.core._nth.call(null,c__7626,i__7630)));
{
var G__7631 = (i__7630 + 1);
i__7630 = G__7631;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7628),mapi.call(null,(idx + size__7627),cljs.core.chunk_rest.call(null,s__7625)));
} else
{return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__7625)),mapi.call(null,(idx + 1),cljs.core.rest.call(null,s__7625)));
}
} else
{return null;
}
}),null));
});
return mapi__7616.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7641 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7641)
{var s__7642 = temp__3974__auto____7641;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7642))
{var c__7643 = cljs.core.chunk_first.call(null,s__7642);
var size__7644 = cljs.core.count.call(null,c__7643);
var b__7645 = cljs.core.chunk_buffer.call(null,size__7644);
var n__2549__auto____7646 = size__7644;
var i__7647 = 0;
while(true){
if((i__7647 < n__2549__auto____7646))
{var x__7648 = f.call(null,cljs.core._nth.call(null,c__7643,i__7647));
if((x__7648 == null))
{} else
{cljs.core.chunk_append.call(null,b__7645,x__7648);
}
{
var G__7650 = (i__7647 + 1);
i__7647 = G__7650;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7645),keep.call(null,f,cljs.core.chunk_rest.call(null,s__7642)));
} else
{var x__7649 = f.call(null,cljs.core.first.call(null,s__7642));
if((x__7649 == null))
{return keep.call(null,f,cljs.core.rest.call(null,s__7642));
} else
{return cljs.core.cons.call(null,x__7649,keep.call(null,f,cljs.core.rest.call(null,s__7642)));
}
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi__7676 = (function keepi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7686 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7686)
{var s__7687 = temp__3974__auto____7686;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7687))
{var c__7688 = cljs.core.chunk_first.call(null,s__7687);
var size__7689 = cljs.core.count.call(null,c__7688);
var b__7690 = cljs.core.chunk_buffer.call(null,size__7689);
var n__2549__auto____7691 = size__7689;
var i__7692 = 0;
while(true){
if((i__7692 < n__2549__auto____7691))
{var x__7693 = f.call(null,(idx + i__7692),cljs.core._nth.call(null,c__7688,i__7692));
if((x__7693 == null))
{} else
{cljs.core.chunk_append.call(null,b__7690,x__7693);
}
{
var G__7695 = (i__7692 + 1);
i__7692 = G__7695;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7690),keepi.call(null,(idx + size__7689),cljs.core.chunk_rest.call(null,s__7687)));
} else
{var x__7694 = f.call(null,idx,cljs.core.first.call(null,s__7687));
if((x__7694 == null))
{return keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__7687));
} else
{return cljs.core.cons.call(null,x__7694,keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__7687)));
}
}
} else
{return null;
}
}),null));
});
return keepi__7676.call(null,0,coll);
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__1 = (function (p){
return (function() {
var ep1 = null;
var ep1__0 = (function (){
return true;
});
var ep1__1 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7781 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____7781))
{return p.call(null,y);
} else
{return and__3822__auto____7781;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7782 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____7782))
{var and__3822__auto____7783 = p.call(null,y);
if(cljs.core.truth_(and__3822__auto____7783))
{return p.call(null,z);
} else
{return and__3822__auto____7783;
}
} else
{return and__3822__auto____7782;
}
})());
});
var ep1__4 = (function() { 
var G__7852__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7784 = ep1.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____7784))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3822__auto____7784;
}
})());
};
var G__7852 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7852__delegate.call(this, x, y, z, args);
};
G__7852.cljs$lang$maxFixedArity = 3;
G__7852.cljs$lang$applyTo = (function (arglist__7853){
var x = cljs.core.first(arglist__7853);
var y = cljs.core.first(cljs.core.next(arglist__7853));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7853)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7853)));
return G__7852__delegate(x, y, z, args);
});
G__7852.cljs$lang$arity$variadic = G__7852__delegate;
return G__7852;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep1__0.call(this);
case 1:
return ep1__1.call(this,x);
case 2:
return ep1__2.call(this,x,y);
case 3:
return ep1__3.call(this,x,y,z);
default:
return ep1__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__4.cljs$lang$applyTo;
ep1.cljs$lang$arity$0 = ep1__0;
ep1.cljs$lang$arity$1 = ep1__1;
ep1.cljs$lang$arity$2 = ep1__2;
ep1.cljs$lang$arity$3 = ep1__3;
ep1.cljs$lang$arity$variadic = ep1__4.cljs$lang$arity$variadic;
return ep1;
})()
});
var every_pred__2 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__0 = (function (){
return true;
});
var ep2__1 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7796 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____7796))
{return p2.call(null,x);
} else
{return and__3822__auto____7796;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7797 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____7797))
{var and__3822__auto____7798 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____7798))
{var and__3822__auto____7799 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____7799))
{return p2.call(null,y);
} else
{return and__3822__auto____7799;
}
} else
{return and__3822__auto____7798;
}
} else
{return and__3822__auto____7797;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7800 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____7800))
{var and__3822__auto____7801 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____7801))
{var and__3822__auto____7802 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____7802))
{var and__3822__auto____7803 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____7803))
{var and__3822__auto____7804 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____7804))
{return p2.call(null,z);
} else
{return and__3822__auto____7804;
}
} else
{return and__3822__auto____7803;
}
} else
{return and__3822__auto____7802;
}
} else
{return and__3822__auto____7801;
}
} else
{return and__3822__auto____7800;
}
})());
});
var ep2__4 = (function() { 
var G__7854__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7805 = ep2.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____7805))
{return cljs.core.every_QMARK_.call(null,(function (p1__7651_SHARP_){
var and__3822__auto____7806 = p1.call(null,p1__7651_SHARP_);
if(cljs.core.truth_(and__3822__auto____7806))
{return p2.call(null,p1__7651_SHARP_);
} else
{return and__3822__auto____7806;
}
}),args);
} else
{return and__3822__auto____7805;
}
})());
};
var G__7854 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7854__delegate.call(this, x, y, z, args);
};
G__7854.cljs$lang$maxFixedArity = 3;
G__7854.cljs$lang$applyTo = (function (arglist__7855){
var x = cljs.core.first(arglist__7855);
var y = cljs.core.first(cljs.core.next(arglist__7855));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7855)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7855)));
return G__7854__delegate(x, y, z, args);
});
G__7854.cljs$lang$arity$variadic = G__7854__delegate;
return G__7854;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep2__0.call(this);
case 1:
return ep2__1.call(this,x);
case 2:
return ep2__2.call(this,x,y);
case 3:
return ep2__3.call(this,x,y,z);
default:
return ep2__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__4.cljs$lang$applyTo;
ep2.cljs$lang$arity$0 = ep2__0;
ep2.cljs$lang$arity$1 = ep2__1;
ep2.cljs$lang$arity$2 = ep2__2;
ep2.cljs$lang$arity$3 = ep2__3;
ep2.cljs$lang$arity$variadic = ep2__4.cljs$lang$arity$variadic;
return ep2;
})()
});
var every_pred__3 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__0 = (function (){
return true;
});
var ep3__1 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7825 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____7825))
{var and__3822__auto____7826 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____7826))
{return p3.call(null,x);
} else
{return and__3822__auto____7826;
}
} else
{return and__3822__auto____7825;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7827 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____7827))
{var and__3822__auto____7828 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____7828))
{var and__3822__auto____7829 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____7829))
{var and__3822__auto____7830 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____7830))
{var and__3822__auto____7831 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____7831))
{return p3.call(null,y);
} else
{return and__3822__auto____7831;
}
} else
{return and__3822__auto____7830;
}
} else
{return and__3822__auto____7829;
}
} else
{return and__3822__auto____7828;
}
} else
{return and__3822__auto____7827;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7832 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____7832))
{var and__3822__auto____7833 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____7833))
{var and__3822__auto____7834 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____7834))
{var and__3822__auto____7835 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____7835))
{var and__3822__auto____7836 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____7836))
{var and__3822__auto____7837 = p3.call(null,y);
if(cljs.core.truth_(and__3822__auto____7837))
{var and__3822__auto____7838 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____7838))
{var and__3822__auto____7839 = p2.call(null,z);
if(cljs.core.truth_(and__3822__auto____7839))
{return p3.call(null,z);
} else
{return and__3822__auto____7839;
}
} else
{return and__3822__auto____7838;
}
} else
{return and__3822__auto____7837;
}
} else
{return and__3822__auto____7836;
}
} else
{return and__3822__auto____7835;
}
} else
{return and__3822__auto____7834;
}
} else
{return and__3822__auto____7833;
}
} else
{return and__3822__auto____7832;
}
})());
});
var ep3__4 = (function() { 
var G__7856__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7840 = ep3.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____7840))
{return cljs.core.every_QMARK_.call(null,(function (p1__7652_SHARP_){
var and__3822__auto____7841 = p1.call(null,p1__7652_SHARP_);
if(cljs.core.truth_(and__3822__auto____7841))
{var and__3822__auto____7842 = p2.call(null,p1__7652_SHARP_);
if(cljs.core.truth_(and__3822__auto____7842))
{return p3.call(null,p1__7652_SHARP_);
} else
{return and__3822__auto____7842;
}
} else
{return and__3822__auto____7841;
}
}),args);
} else
{return and__3822__auto____7840;
}
})());
};
var G__7856 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7856__delegate.call(this, x, y, z, args);
};
G__7856.cljs$lang$maxFixedArity = 3;
G__7856.cljs$lang$applyTo = (function (arglist__7857){
var x = cljs.core.first(arglist__7857);
var y = cljs.core.first(cljs.core.next(arglist__7857));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7857)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7857)));
return G__7856__delegate(x, y, z, args);
});
G__7856.cljs$lang$arity$variadic = G__7856__delegate;
return G__7856;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep3__0.call(this);
case 1:
return ep3__1.call(this,x);
case 2:
return ep3__2.call(this,x,y);
case 3:
return ep3__3.call(this,x,y,z);
default:
return ep3__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__4.cljs$lang$applyTo;
ep3.cljs$lang$arity$0 = ep3__0;
ep3.cljs$lang$arity$1 = ep3__1;
ep3.cljs$lang$arity$2 = ep3__2;
ep3.cljs$lang$arity$3 = ep3__3;
ep3.cljs$lang$arity$variadic = ep3__4.cljs$lang$arity$variadic;
return ep3;
})()
});
var every_pred__4 = (function() { 
var G__7858__delegate = function (p1,p2,p3,ps){
var ps__7843 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__7653_SHARP_){
return p1__7653_SHARP_.call(null,x);
}),ps__7843);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__7654_SHARP_){
var and__3822__auto____7848 = p1__7654_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____7848))
{return p1__7654_SHARP_.call(null,y);
} else
{return and__3822__auto____7848;
}
}),ps__7843);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__7655_SHARP_){
var and__3822__auto____7849 = p1__7655_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____7849))
{var and__3822__auto____7850 = p1__7655_SHARP_.call(null,y);
if(cljs.core.truth_(and__3822__auto____7850))
{return p1__7655_SHARP_.call(null,z);
} else
{return and__3822__auto____7850;
}
} else
{return and__3822__auto____7849;
}
}),ps__7843);
});
var epn__4 = (function() { 
var G__7859__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7851 = epn.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____7851))
{return cljs.core.every_QMARK_.call(null,(function (p1__7656_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__7656_SHARP_,args);
}),ps__7843);
} else
{return and__3822__auto____7851;
}
})());
};
var G__7859 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7859__delegate.call(this, x, y, z, args);
};
G__7859.cljs$lang$maxFixedArity = 3;
G__7859.cljs$lang$applyTo = (function (arglist__7860){
var x = cljs.core.first(arglist__7860);
var y = cljs.core.first(cljs.core.next(arglist__7860));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7860)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7860)));
return G__7859__delegate(x, y, z, args);
});
G__7859.cljs$lang$arity$variadic = G__7859__delegate;
return G__7859;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return epn__0.call(this);
case 1:
return epn__1.call(this,x);
case 2:
return epn__2.call(this,x,y);
case 3:
return epn__3.call(this,x,y,z);
default:
return epn__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__4.cljs$lang$applyTo;
epn.cljs$lang$arity$0 = epn__0;
epn.cljs$lang$arity$1 = epn__1;
epn.cljs$lang$arity$2 = epn__2;
epn.cljs$lang$arity$3 = epn__3;
epn.cljs$lang$arity$variadic = epn__4.cljs$lang$arity$variadic;
return epn;
})()
};
var G__7858 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7858__delegate.call(this, p1, p2, p3, ps);
};
G__7858.cljs$lang$maxFixedArity = 3;
G__7858.cljs$lang$applyTo = (function (arglist__7861){
var p1 = cljs.core.first(arglist__7861);
var p2 = cljs.core.first(cljs.core.next(arglist__7861));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7861)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7861)));
return G__7858__delegate(p1, p2, p3, ps);
});
G__7858.cljs$lang$arity$variadic = G__7858__delegate;
return G__7858;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return every_pred__1.call(this,p1);
case 2:
return every_pred__2.call(this,p1,p2);
case 3:
return every_pred__3.call(this,p1,p2,p3);
default:
return every_pred__4.cljs$lang$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__4.cljs$lang$applyTo;
every_pred.cljs$lang$arity$1 = every_pred__1;
every_pred.cljs$lang$arity$2 = every_pred__2;
every_pred.cljs$lang$arity$3 = every_pred__3;
every_pred.cljs$lang$arity$variadic = every_pred__4.cljs$lang$arity$variadic;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__1 = (function (p){
return (function() {
var sp1 = null;
var sp1__0 = (function (){
return null;
});
var sp1__1 = (function (x){
return p.call(null,x);
});
var sp1__2 = (function (x,y){
var or__3824__auto____7942 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____7942))
{return or__3824__auto____7942;
} else
{return p.call(null,y);
}
});
var sp1__3 = (function (x,y,z){
var or__3824__auto____7943 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____7943))
{return or__3824__auto____7943;
} else
{var or__3824__auto____7944 = p.call(null,y);
if(cljs.core.truth_(or__3824__auto____7944))
{return or__3824__auto____7944;
} else
{return p.call(null,z);
}
}
});
var sp1__4 = (function() { 
var G__8013__delegate = function (x,y,z,args){
var or__3824__auto____7945 = sp1.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____7945))
{return or__3824__auto____7945;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__8013 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8013__delegate.call(this, x, y, z, args);
};
G__8013.cljs$lang$maxFixedArity = 3;
G__8013.cljs$lang$applyTo = (function (arglist__8014){
var x = cljs.core.first(arglist__8014);
var y = cljs.core.first(cljs.core.next(arglist__8014));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8014)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8014)));
return G__8013__delegate(x, y, z, args);
});
G__8013.cljs$lang$arity$variadic = G__8013__delegate;
return G__8013;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp1__0.call(this);
case 1:
return sp1__1.call(this,x);
case 2:
return sp1__2.call(this,x,y);
case 3:
return sp1__3.call(this,x,y,z);
default:
return sp1__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__4.cljs$lang$applyTo;
sp1.cljs$lang$arity$0 = sp1__0;
sp1.cljs$lang$arity$1 = sp1__1;
sp1.cljs$lang$arity$2 = sp1__2;
sp1.cljs$lang$arity$3 = sp1__3;
sp1.cljs$lang$arity$variadic = sp1__4.cljs$lang$arity$variadic;
return sp1;
})()
});
var some_fn__2 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__0 = (function (){
return null;
});
var sp2__1 = (function (x){
var or__3824__auto____7957 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____7957))
{return or__3824__auto____7957;
} else
{return p2.call(null,x);
}
});
var sp2__2 = (function (x,y){
var or__3824__auto____7958 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____7958))
{return or__3824__auto____7958;
} else
{var or__3824__auto____7959 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____7959))
{return or__3824__auto____7959;
} else
{var or__3824__auto____7960 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____7960))
{return or__3824__auto____7960;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3824__auto____7961 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____7961))
{return or__3824__auto____7961;
} else
{var or__3824__auto____7962 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____7962))
{return or__3824__auto____7962;
} else
{var or__3824__auto____7963 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____7963))
{return or__3824__auto____7963;
} else
{var or__3824__auto____7964 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____7964))
{return or__3824__auto____7964;
} else
{var or__3824__auto____7965 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____7965))
{return or__3824__auto____7965;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__8015__delegate = function (x,y,z,args){
var or__3824__auto____7966 = sp2.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____7966))
{return or__3824__auto____7966;
} else
{return cljs.core.some.call(null,(function (p1__7696_SHARP_){
var or__3824__auto____7967 = p1.call(null,p1__7696_SHARP_);
if(cljs.core.truth_(or__3824__auto____7967))
{return or__3824__auto____7967;
} else
{return p2.call(null,p1__7696_SHARP_);
}
}),args);
}
};
var G__8015 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8015__delegate.call(this, x, y, z, args);
};
G__8015.cljs$lang$maxFixedArity = 3;
G__8015.cljs$lang$applyTo = (function (arglist__8016){
var x = cljs.core.first(arglist__8016);
var y = cljs.core.first(cljs.core.next(arglist__8016));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8016)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8016)));
return G__8015__delegate(x, y, z, args);
});
G__8015.cljs$lang$arity$variadic = G__8015__delegate;
return G__8015;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp2__0.call(this);
case 1:
return sp2__1.call(this,x);
case 2:
return sp2__2.call(this,x,y);
case 3:
return sp2__3.call(this,x,y,z);
default:
return sp2__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__4.cljs$lang$applyTo;
sp2.cljs$lang$arity$0 = sp2__0;
sp2.cljs$lang$arity$1 = sp2__1;
sp2.cljs$lang$arity$2 = sp2__2;
sp2.cljs$lang$arity$3 = sp2__3;
sp2.cljs$lang$arity$variadic = sp2__4.cljs$lang$arity$variadic;
return sp2;
})()
});
var some_fn__3 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__0 = (function (){
return null;
});
var sp3__1 = (function (x){
var or__3824__auto____7986 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____7986))
{return or__3824__auto____7986;
} else
{var or__3824__auto____7987 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____7987))
{return or__3824__auto____7987;
} else
{return p3.call(null,x);
}
}
});
var sp3__2 = (function (x,y){
var or__3824__auto____7988 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____7988))
{return or__3824__auto____7988;
} else
{var or__3824__auto____7989 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____7989))
{return or__3824__auto____7989;
} else
{var or__3824__auto____7990 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____7990))
{return or__3824__auto____7990;
} else
{var or__3824__auto____7991 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____7991))
{return or__3824__auto____7991;
} else
{var or__3824__auto____7992 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____7992))
{return or__3824__auto____7992;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3824__auto____7993 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____7993))
{return or__3824__auto____7993;
} else
{var or__3824__auto____7994 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____7994))
{return or__3824__auto____7994;
} else
{var or__3824__auto____7995 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____7995))
{return or__3824__auto____7995;
} else
{var or__3824__auto____7996 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____7996))
{return or__3824__auto____7996;
} else
{var or__3824__auto____7997 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____7997))
{return or__3824__auto____7997;
} else
{var or__3824__auto____7998 = p3.call(null,y);
if(cljs.core.truth_(or__3824__auto____7998))
{return or__3824__auto____7998;
} else
{var or__3824__auto____7999 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____7999))
{return or__3824__auto____7999;
} else
{var or__3824__auto____8000 = p2.call(null,z);
if(cljs.core.truth_(or__3824__auto____8000))
{return or__3824__auto____8000;
} else
{return p3.call(null,z);
}
}
}
}
}
}
}
}
});
var sp3__4 = (function() { 
var G__8017__delegate = function (x,y,z,args){
var or__3824__auto____8001 = sp3.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____8001))
{return or__3824__auto____8001;
} else
{return cljs.core.some.call(null,(function (p1__7697_SHARP_){
var or__3824__auto____8002 = p1.call(null,p1__7697_SHARP_);
if(cljs.core.truth_(or__3824__auto____8002))
{return or__3824__auto____8002;
} else
{var or__3824__auto____8003 = p2.call(null,p1__7697_SHARP_);
if(cljs.core.truth_(or__3824__auto____8003))
{return or__3824__auto____8003;
} else
{return p3.call(null,p1__7697_SHARP_);
}
}
}),args);
}
};
var G__8017 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8017__delegate.call(this, x, y, z, args);
};
G__8017.cljs$lang$maxFixedArity = 3;
G__8017.cljs$lang$applyTo = (function (arglist__8018){
var x = cljs.core.first(arglist__8018);
var y = cljs.core.first(cljs.core.next(arglist__8018));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8018)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8018)));
return G__8017__delegate(x, y, z, args);
});
G__8017.cljs$lang$arity$variadic = G__8017__delegate;
return G__8017;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp3__0.call(this);
case 1:
return sp3__1.call(this,x);
case 2:
return sp3__2.call(this,x,y);
case 3:
return sp3__3.call(this,x,y,z);
default:
return sp3__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__4.cljs$lang$applyTo;
sp3.cljs$lang$arity$0 = sp3__0;
sp3.cljs$lang$arity$1 = sp3__1;
sp3.cljs$lang$arity$2 = sp3__2;
sp3.cljs$lang$arity$3 = sp3__3;
sp3.cljs$lang$arity$variadic = sp3__4.cljs$lang$arity$variadic;
return sp3;
})()
});
var some_fn__4 = (function() { 
var G__8019__delegate = function (p1,p2,p3,ps){
var ps__8004 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some.call(null,(function (p1__7698_SHARP_){
return p1__7698_SHARP_.call(null,x);
}),ps__8004);
});
var spn__2 = (function (x,y){
return cljs.core.some.call(null,(function (p1__7699_SHARP_){
var or__3824__auto____8009 = p1__7699_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____8009))
{return or__3824__auto____8009;
} else
{return p1__7699_SHARP_.call(null,y);
}
}),ps__8004);
});
var spn__3 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__7700_SHARP_){
var or__3824__auto____8010 = p1__7700_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____8010))
{return or__3824__auto____8010;
} else
{var or__3824__auto____8011 = p1__7700_SHARP_.call(null,y);
if(cljs.core.truth_(or__3824__auto____8011))
{return or__3824__auto____8011;
} else
{return p1__7700_SHARP_.call(null,z);
}
}
}),ps__8004);
});
var spn__4 = (function() { 
var G__8020__delegate = function (x,y,z,args){
var or__3824__auto____8012 = spn.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____8012))
{return or__3824__auto____8012;
} else
{return cljs.core.some.call(null,(function (p1__7701_SHARP_){
return cljs.core.some.call(null,p1__7701_SHARP_,args);
}),ps__8004);
}
};
var G__8020 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8020__delegate.call(this, x, y, z, args);
};
G__8020.cljs$lang$maxFixedArity = 3;
G__8020.cljs$lang$applyTo = (function (arglist__8021){
var x = cljs.core.first(arglist__8021);
var y = cljs.core.first(cljs.core.next(arglist__8021));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8021)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8021)));
return G__8020__delegate(x, y, z, args);
});
G__8020.cljs$lang$arity$variadic = G__8020__delegate;
return G__8020;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return spn__0.call(this);
case 1:
return spn__1.call(this,x);
case 2:
return spn__2.call(this,x,y);
case 3:
return spn__3.call(this,x,y,z);
default:
return spn__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__4.cljs$lang$applyTo;
spn.cljs$lang$arity$0 = spn__0;
spn.cljs$lang$arity$1 = spn__1;
spn.cljs$lang$arity$2 = spn__2;
spn.cljs$lang$arity$3 = spn__3;
spn.cljs$lang$arity$variadic = spn__4.cljs$lang$arity$variadic;
return spn;
})()
};
var G__8019 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8019__delegate.call(this, p1, p2, p3, ps);
};
G__8019.cljs$lang$maxFixedArity = 3;
G__8019.cljs$lang$applyTo = (function (arglist__8022){
var p1 = cljs.core.first(arglist__8022);
var p2 = cljs.core.first(cljs.core.next(arglist__8022));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8022)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8022)));
return G__8019__delegate(p1, p2, p3, ps);
});
G__8019.cljs$lang$arity$variadic = G__8019__delegate;
return G__8019;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return some_fn__1.call(this,p1);
case 2:
return some_fn__2.call(this,p1,p2);
case 3:
return some_fn__3.call(this,p1,p2,p3);
default:
return some_fn__4.cljs$lang$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__4.cljs$lang$applyTo;
some_fn.cljs$lang$arity$1 = some_fn__1;
some_fn.cljs$lang$arity$2 = some_fn__2;
some_fn.cljs$lang$arity$3 = some_fn__3;
some_fn.cljs$lang$arity$variadic = some_fn__4.cljs$lang$arity$variadic;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8041 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8041)
{var s__8042 = temp__3974__auto____8041;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8042))
{var c__8043 = cljs.core.chunk_first.call(null,s__8042);
var size__8044 = cljs.core.count.call(null,c__8043);
var b__8045 = cljs.core.chunk_buffer.call(null,size__8044);
var n__2549__auto____8046 = size__8044;
var i__8047 = 0;
while(true){
if((i__8047 < n__2549__auto____8046))
{cljs.core.chunk_append.call(null,b__8045,f.call(null,cljs.core._nth.call(null,c__8043,i__8047)));
{
var G__8059 = (i__8047 + 1);
i__8047 = G__8059;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8045),map.call(null,f,cljs.core.chunk_rest.call(null,s__8042)));
} else
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__8042)),map.call(null,f,cljs.core.rest.call(null,s__8042)));
}
} else
{return null;
}
}),null));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8048 = cljs.core.seq.call(null,c1);
var s2__8049 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____8050 = s1__8048;
if(and__3822__auto____8050)
{return s2__8049;
} else
{return and__3822__auto____8050;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__8048),cljs.core.first.call(null,s2__8049)),map.call(null,f,cljs.core.rest.call(null,s1__8048),cljs.core.rest.call(null,s2__8049)));
} else
{return null;
}
}),null));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8051 = cljs.core.seq.call(null,c1);
var s2__8052 = cljs.core.seq.call(null,c2);
var s3__8053 = cljs.core.seq.call(null,c3);
if((function (){var and__3822__auto____8054 = s1__8051;
if(and__3822__auto____8054)
{var and__3822__auto____8055 = s2__8052;
if(and__3822__auto____8055)
{return s3__8053;
} else
{return and__3822__auto____8055;
}
} else
{return and__3822__auto____8054;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__8051),cljs.core.first.call(null,s2__8052),cljs.core.first.call(null,s3__8053)),map.call(null,f,cljs.core.rest.call(null,s1__8051),cljs.core.rest.call(null,s2__8052),cljs.core.rest.call(null,s3__8053)));
} else
{return null;
}
}),null));
});
var map__5 = (function() { 
var G__8060__delegate = function (f,c1,c2,c3,colls){
var step__8058 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__8057 = map.call(null,cljs.core.seq,cs);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__8057))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__8057),step.call(null,map.call(null,cljs.core.rest,ss__8057)));
} else
{return null;
}
}),null));
});
return map.call(null,(function (p1__7862_SHARP_){
return cljs.core.apply.call(null,f,p1__7862_SHARP_);
}),step__8058.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__8060 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8060__delegate.call(this, f, c1, c2, c3, colls);
};
G__8060.cljs$lang$maxFixedArity = 4;
G__8060.cljs$lang$applyTo = (function (arglist__8061){
var f = cljs.core.first(arglist__8061);
var c1 = cljs.core.first(cljs.core.next(arglist__8061));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8061)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8061))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8061))));
return G__8060__delegate(f, c1, c2, c3, colls);
});
G__8060.cljs$lang$arity$variadic = G__8060__delegate;
return G__8060;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return map__2.call(this,f,c1);
case 3:
return map__3.call(this,f,c1,c2);
case 4:
return map__4.call(this,f,c1,c2,c3);
default:
return map__5.cljs$lang$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__5.cljs$lang$applyTo;
map.cljs$lang$arity$2 = map__2;
map.cljs$lang$arity$3 = map__3;
map.cljs$lang$arity$4 = map__4;
map.cljs$lang$arity$variadic = map__5.cljs$lang$arity$variadic;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if((n > 0))
{var temp__3974__auto____8064 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8064)
{var s__8065 = temp__3974__auto____8064;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__8065),take.call(null,(n - 1),cljs.core.rest.call(null,s__8065)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step__8071 = (function (n,coll){
while(true){
var s__8069 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____8070 = (n > 0);
if(and__3822__auto____8070)
{return s__8069;
} else
{return and__3822__auto____8070;
}
})()))
{{
var G__8072 = (n - 1);
var G__8073 = cljs.core.rest.call(null,s__8069);
n = G__8072;
coll = G__8073;
continue;
}
} else
{return s__8069;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__8071.call(null,n,coll);
}),null));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__1 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__2 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case 1:
return drop_last__1.call(this,n);
case 2:
return drop_last__2.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
drop_last.cljs$lang$arity$1 = drop_last__1;
drop_last.cljs$lang$arity$2 = drop_last__2;
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__8076 = cljs.core.seq.call(null,coll);
var lead__8077 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));
while(true){
if(lead__8077)
{{
var G__8078 = cljs.core.next.call(null,s__8076);
var G__8079 = cljs.core.next.call(null,lead__8077);
s__8076 = G__8078;
lead__8077 = G__8079;
continue;
}
} else
{return s__8076;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__8085 = (function (pred,coll){
while(true){
var s__8083 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____8084 = s__8083;
if(and__3822__auto____8084)
{return pred.call(null,cljs.core.first.call(null,s__8083));
} else
{return and__3822__auto____8084;
}
})()))
{{
var G__8086 = pred;
var G__8087 = cljs.core.rest.call(null,s__8083);
pred = G__8086;
coll = G__8087;
continue;
}
} else
{return s__8083;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__8085.call(null,pred,coll);
}),null));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8090 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8090)
{var s__8091 = temp__3974__auto____8090;
return cljs.core.concat.call(null,s__8091,cycle.call(null,s__8091));
} else
{return null;
}
}),null));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)], true);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__1 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
}),null));
});
var repeat__2 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case 1:
return repeat__1.call(this,n);
case 2:
return repeat__2.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
repeat.cljs$lang$arity$1 = repeat__1;
repeat.cljs$lang$arity$2 = repeat__2;
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.call(null,n,cljs.core.repeat.call(null,x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__1 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
}),null));
});
var repeatedly__2 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case 1:
return repeatedly__1.call(this,n);
case 2:
return repeatedly__2.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
repeatedly.cljs$lang$arity$1 = repeatedly__1;
repeatedly.cljs$lang$arity$2 = repeatedly__2;
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
}),null)));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8096 = cljs.core.seq.call(null,c1);
var s2__8097 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____8098 = s1__8096;
if(and__3822__auto____8098)
{return s2__8097;
} else
{return and__3822__auto____8098;
}
})())
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__8096),cljs.core.cons.call(null,cljs.core.first.call(null,s2__8097),interleave.call(null,cljs.core.rest.call(null,s1__8096),cljs.core.rest.call(null,s2__8097))));
} else
{return null;
}
}),null));
});
var interleave__3 = (function() { 
var G__8100__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__8099 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__8099))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__8099),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__8099)));
} else
{return null;
}
}),null));
};
var G__8100 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8100__delegate.call(this, c1, c2, colls);
};
G__8100.cljs$lang$maxFixedArity = 2;
G__8100.cljs$lang$applyTo = (function (arglist__8101){
var c1 = cljs.core.first(arglist__8101);
var c2 = cljs.core.first(cljs.core.next(arglist__8101));
var colls = cljs.core.rest(cljs.core.next(arglist__8101));
return G__8100__delegate(c1, c2, colls);
});
G__8100.cljs$lang$arity$variadic = G__8100__delegate;
return G__8100;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return interleave__2.call(this,c1,c2);
default:
return interleave__3.cljs$lang$arity$variadic(c1,c2, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__3.cljs$lang$applyTo;
interleave.cljs$lang$arity$2 = interleave__2;
interleave.cljs$lang$arity$variadic = interleave__3.cljs$lang$arity$variadic;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.call(null,1,cljs.core.interleave.call(null,cljs.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat__8111 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____8109 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____8109)
{var coll__8110 = temp__3971__auto____8109;
return cljs.core.cons.call(null,cljs.core.first.call(null,coll__8110),cat.call(null,cljs.core.rest.call(null,coll__8110),colls));
} else
{if(cljs.core.seq.call(null,colls))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
}),null));
});
return cat__8111.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__2 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__3 = (function() { 
var G__8112__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__8112 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8112__delegate.call(this, f, coll, colls);
};
G__8112.cljs$lang$maxFixedArity = 2;
G__8112.cljs$lang$applyTo = (function (arglist__8113){
var f = cljs.core.first(arglist__8113);
var coll = cljs.core.first(cljs.core.next(arglist__8113));
var colls = cljs.core.rest(cljs.core.next(arglist__8113));
return G__8112__delegate(f, coll, colls);
});
G__8112.cljs$lang$arity$variadic = G__8112__delegate;
return G__8112;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapcat__2.call(this,f,coll);
default:
return mapcat__3.cljs$lang$arity$variadic(f,coll, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__3.cljs$lang$applyTo;
mapcat.cljs$lang$arity$2 = mapcat__2;
mapcat.cljs$lang$arity$variadic = mapcat__3.cljs$lang$arity$variadic;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8123 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8123)
{var s__8124 = temp__3974__auto____8123;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8124))
{var c__8125 = cljs.core.chunk_first.call(null,s__8124);
var size__8126 = cljs.core.count.call(null,c__8125);
var b__8127 = cljs.core.chunk_buffer.call(null,size__8126);
var n__2549__auto____8128 = size__8126;
var i__8129 = 0;
while(true){
if((i__8129 < n__2549__auto____8128))
{if(cljs.core.truth_(pred.call(null,cljs.core._nth.call(null,c__8125,i__8129))))
{cljs.core.chunk_append.call(null,b__8127,cljs.core._nth.call(null,c__8125,i__8129));
} else
{}
{
var G__8132 = (i__8129 + 1);
i__8129 = G__8132;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8127),filter.call(null,pred,cljs.core.chunk_rest.call(null,s__8124)));
} else
{var f__8130 = cljs.core.first.call(null,s__8124);
var r__8131 = cljs.core.rest.call(null,s__8124);
if(cljs.core.truth_(pred.call(null,f__8130)))
{return cljs.core.cons.call(null,f__8130,filter.call(null,pred,r__8131));
} else
{return filter.call(null,pred,r__8131);
}
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk__8135 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
}),null));
});
return walk__8135.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__8133_SHARP_){
return !(cljs.core.sequential_QMARK_.call(null,p1__8133_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
if((function (){var G__8139__8140 = to;
if(G__8139__8140)
{if((function (){var or__3824__auto____8141 = (G__8139__8140.cljs$lang$protocol_mask$partition1$ & 4);
if(or__3824__auto____8141)
{return or__3824__auto____8141;
} else
{return G__8139__8140.cljs$core$IEditableCollection$;
}
})())
{return true;
} else
{if((!G__8139__8140.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__8139__8140);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__8139__8140);
}
})())
{return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core._conj_BANG_,cljs.core.transient$.call(null,to),from));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,to,from);
}
});
/**
* Returns a vector consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.mapv = (function() {
var mapv = null;
var mapv__2 = (function (f,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (v,o){
return cljs.core.conj_BANG_.call(null,v,f.call(null,o));
}),cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),coll));
});
var mapv__3 = (function (f,c1,c2){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,f,c1,c2));
});
var mapv__4 = (function (f,c1,c2,c3){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,f,c1,c2,c3));
});
var mapv__5 = (function() { 
var G__8142__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.apply.call(null,cljs.core.map,f,c1,c2,c3,colls));
};
var G__8142 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8142__delegate.call(this, f, c1, c2, c3, colls);
};
G__8142.cljs$lang$maxFixedArity = 4;
G__8142.cljs$lang$applyTo = (function (arglist__8143){
var f = cljs.core.first(arglist__8143);
var c1 = cljs.core.first(cljs.core.next(arglist__8143));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8143)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8143))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8143))));
return G__8142__delegate(f, c1, c2, c3, colls);
});
G__8142.cljs$lang$arity$variadic = G__8142__delegate;
return G__8142;
})()
;
mapv = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapv__2.call(this,f,c1);
case 3:
return mapv__3.call(this,f,c1,c2);
case 4:
return mapv__4.call(this,f,c1,c2,c3);
default:
return mapv__5.cljs$lang$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
mapv.cljs$lang$maxFixedArity = 4;
mapv.cljs$lang$applyTo = mapv__5.cljs$lang$applyTo;
mapv.cljs$lang$arity$2 = mapv__2;
mapv.cljs$lang$arity$3 = mapv__3;
mapv.cljs$lang$arity$4 = mapv__4;
mapv.cljs$lang$arity$variadic = mapv__5.cljs$lang$arity$variadic;
return mapv;
})()
;
/**
* Returns a vector of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filterv = (function filterv(pred,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (v,o){
if(cljs.core.truth_(pred.call(null,o)))
{return cljs.core.conj_BANG_.call(null,v,o);
} else
{return v;
}
}),cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),coll));
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__2 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8150 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8150)
{var s__8151 = temp__3974__auto____8150;
var p__8152 = cljs.core.take.call(null,n,s__8151);
if((n === cljs.core.count.call(null,p__8152)))
{return cljs.core.cons.call(null,p__8152,partition.call(null,n,step,cljs.core.drop.call(null,step,s__8151)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
var partition__4 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8153 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8153)
{var s__8154 = temp__3974__auto____8153;
var p__8155 = cljs.core.take.call(null,n,s__8154);
if((n === cljs.core.count.call(null,p__8155)))
{return cljs.core.cons.call(null,p__8155,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__8154)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__8155,pad)));
}
} else
{return null;
}
}),null));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case 2:
return partition__2.call(this,n,step);
case 3:
return partition__3.call(this,n,step,pad);
case 4:
return partition__4.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
partition.cljs$lang$arity$2 = partition__2;
partition.cljs$lang$arity$3 = partition__3;
partition.cljs$lang$arity$4 = partition__4;
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of keys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__2 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__3 = (function (m,ks,not_found){
var sentinel__8160 = cljs.core.lookup_sentinel;
var m__8161 = m;
var ks__8162 = cljs.core.seq.call(null,ks);
while(true){
if(ks__8162)
{var m__8163 = cljs.core._lookup.call(null,m__8161,cljs.core.first.call(null,ks__8162),sentinel__8160);
if((sentinel__8160 === m__8163))
{return not_found;
} else
{{
var G__8164 = sentinel__8160;
var G__8165 = m__8163;
var G__8166 = cljs.core.next.call(null,ks__8162);
sentinel__8160 = G__8164;
m__8161 = G__8165;
ks__8162 = G__8166;
continue;
}
}
} else
{return m__8161;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case 2:
return get_in__2.call(this,m,ks);
case 3:
return get_in__3.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
get_in.cljs$lang$arity$2 = get_in__2;
get_in.cljs$lang$arity$3 = get_in__3;
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__8167,v){
var vec__8172__8173 = p__8167;
var k__8174 = cljs.core.nth.call(null,vec__8172__8173,0,null);
var ks__8175 = cljs.core.nthnext.call(null,vec__8172__8173,1);
if(cljs.core.truth_(ks__8175))
{return cljs.core.assoc.call(null,m,k__8174,assoc_in.call(null,cljs.core._lookup.call(null,m,k__8174,null),ks__8175,v));
} else
{return cljs.core.assoc.call(null,m,k__8174,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() { 
var update_in__delegate = function (m,p__8176,f,args){
var vec__8181__8182 = p__8176;
var k__8183 = cljs.core.nth.call(null,vec__8181__8182,0,null);
var ks__8184 = cljs.core.nthnext.call(null,vec__8181__8182,1);
if(cljs.core.truth_(ks__8184))
{return cljs.core.assoc.call(null,m,k__8183,cljs.core.apply.call(null,update_in,cljs.core._lookup.call(null,m,k__8183,null),ks__8184,f,args));
} else
{return cljs.core.assoc.call(null,m,k__8183,cljs.core.apply.call(null,f,cljs.core._lookup.call(null,m,k__8183,null),args));
}
};
var update_in = function (m,p__8176,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__8176, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__8185){
var m = cljs.core.first(arglist__8185);
var p__8176 = cljs.core.first(cljs.core.next(arglist__8185));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8185)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8185)));
return update_in__delegate(m, p__8176, f, args);
});
update_in.cljs$lang$arity$variadic = update_in__delegate;
return update_in;
})()
;

goog.provide('cljs.core.Vector');

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array,__hash){
this.meta = meta;
this.array = array;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32400159;
})
cljs.core.Vector.cljs$lang$type = true;
cljs.core.Vector.cljs$lang$ctorPrSeq = (function (this__2322__auto__){
return cljs.core.list.call(null,"cljs.core/Vector");
});
cljs.core.Vector.cljs$lang$ctorPrWriter = (function (this__2322__auto__,writer__2323__auto__){
return cljs.core._write.call(null,writer__2323__auto__,"cljs.core/Vector");
});
cljs.core.Vector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8188 = this;
var h__2203__auto____8189 = this__8188.__hash;
if(!((h__2203__auto____8189 == null)))
{return h__2203__auto____8189;
} else
{var h__2203__auto____8190 = cljs.core.hash_coll.call(null,coll);
this__8188.__hash = h__2203__auto____8190;
return h__2203__auto____8190;
}
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8191 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8192 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8193 = this;
var new_array__8194 = this__8193.array.slice();
(new_array__8194[k] = v);
return (new cljs.core.Vector(this__8193.meta,new_array__8194,null));
});
cljs.core.Vector.prototype.call = (function() {
var G__8225 = null;
var G__8225__2 = (function (this_sym8195,k){
var this__8197 = this;
var this_sym8195__8198 = this;
var coll__8199 = this_sym8195__8198;
return coll__8199.cljs$core$ILookup$_lookup$arity$2(coll__8199,k);
});
var G__8225__3 = (function (this_sym8196,k,not_found){
var this__8197 = this;
var this_sym8196__8200 = this;
var coll__8201 = this_sym8196__8200;
return coll__8201.cljs$core$ILookup$_lookup$arity$3(coll__8201,k,not_found);
});
G__8225 = function(this_sym8196,k,not_found){
switch(arguments.length){
case 2:
return G__8225__2.call(this,this_sym8196,k);
case 3:
return G__8225__3.call(this,this_sym8196,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8225;
})()
;
cljs.core.Vector.prototype.apply = (function (this_sym8186,args8187){
var this__8202 = this;
return this_sym8186.call.apply(this_sym8186,[this_sym8186].concat(args8187.slice()));
});
cljs.core.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8203 = this;
var new_array__8204 = this__8203.array.slice();
new_array__8204.push(o);
return (new cljs.core.Vector(this__8203.meta,new_array__8204,null));
});
cljs.core.Vector.prototype.toString = (function (){
var this__8205 = this;
var this__8206 = this;
return cljs.core.pr_str.call(null,this__8206);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__8207 = this;
return cljs.core.ci_reduce.call(null,this__8207.array,f);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__8208 = this;
return cljs.core.ci_reduce.call(null,this__8208.array,f,start);
});
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8209 = this;
if((this__8209.array.length > 0))
{var vector_seq__8210 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < this__8209.array.length))
{return cljs.core.cons.call(null,(this__8209.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
}),null));
});
return vector_seq__8210.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8211 = this;
return this__8211.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8212 = this;
var count__8213 = this__8212.array.length;
if((count__8213 > 0))
{return (this__8212.array[(count__8213 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8214 = this;
if((this__8214.array.length > 0))
{var new_array__8215 = this__8214.array.slice();
new_array__8215.pop();
return (new cljs.core.Vector(this__8214.meta,new_array__8215,null));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__8216 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8217 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8218 = this;
return (new cljs.core.Vector(meta,this__8218.array,this__8218.__hash));
});
cljs.core.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8219 = this;
return this__8219.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8220 = this;
if((function (){var and__3822__auto____8221 = (0 <= n);
if(and__3822__auto____8221)
{return (n < this__8220.array.length);
} else
{return and__3822__auto____8221;
}
})())
{return (this__8220.array[n]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8222 = this;
if((function (){var and__3822__auto____8223 = (0 <= n);
if(and__3822__auto____8223)
{return (n < this__8222.array.length);
} else
{return and__3822__auto____8223;
}
})())
{return (this__8222.array[n]);
} else
{return not_found;
}
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8224 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__8224.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,[],0));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs,null));
});

goog.provide('cljs.core.VectorNode');

/**
* @constructor
*/
cljs.core.VectorNode = (function (edit,arr){
this.edit = edit;
this.arr = arr;
})
cljs.core.VectorNode.cljs$lang$type = true;
cljs.core.VectorNode.cljs$lang$ctorPrSeq = (function (this__2324__auto__){
return cljs.core.list.call(null,"cljs.core/VectorNode");
});
cljs.core.VectorNode.cljs$lang$ctorPrWriter = (function (this__2324__auto__,writer__2325__auto__){
return cljs.core._write.call(null,writer__2325__auto__,"cljs.core/VectorNode");
});
cljs.core.VectorNode;
cljs.core.pv_fresh_node = (function pv_fresh_node(edit){
return (new cljs.core.VectorNode(edit,cljs.core.make_array.call(null,32)));
});
cljs.core.pv_aget = (function pv_aget(node,idx){
return (node.arr[idx]);
});
cljs.core.pv_aset = (function pv_aset(node,idx,val){
return (node.arr[idx] = val);
});
cljs.core.pv_clone_node = (function pv_clone_node(node){
return (new cljs.core.VectorNode(node.edit,node.arr.slice()));
});
cljs.core.tail_off = (function tail_off(pv){
var cnt__8227 = pv.cnt;
if((cnt__8227 < 32))
{return 0;
} else
{return (((cnt__8227 - 1) >>> 5) << 5);
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll__8233 = level;
var ret__8234 = node;
while(true){
if((ll__8233 === 0))
{return ret__8234;
} else
{var embed__8235 = ret__8234;
var r__8236 = cljs.core.pv_fresh_node.call(null,edit);
var ___8237 = cljs.core.pv_aset.call(null,r__8236,0,embed__8235);
{
var G__8238 = (ll__8233 - 5);
var G__8239 = r__8236;
ll__8233 = G__8238;
ret__8234 = G__8239;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__8245 = cljs.core.pv_clone_node.call(null,parent);
var subidx__8246 = (((pv.cnt - 1) >>> level) & 31);
if((5 === level))
{cljs.core.pv_aset.call(null,ret__8245,subidx__8246,tailnode);
return ret__8245;
} else
{var child__8247 = cljs.core.pv_aget.call(null,parent,subidx__8246);
if(!((child__8247 == null)))
{var node_to_insert__8248 = push_tail.call(null,pv,(level - 5),child__8247,tailnode);
cljs.core.pv_aset.call(null,ret__8245,subidx__8246,node_to_insert__8248);
return ret__8245;
} else
{var node_to_insert__8249 = cljs.core.new_path.call(null,null,(level - 5),tailnode);
cljs.core.pv_aset.call(null,ret__8245,subidx__8246,node_to_insert__8249);
return ret__8245;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((function (){var and__3822__auto____8253 = (0 <= i);
if(and__3822__auto____8253)
{return (i < pv.cnt);
} else
{return and__3822__auto____8253;
}
})())
{if((i >= cljs.core.tail_off.call(null,pv)))
{return pv.tail;
} else
{var node__8254 = pv.root;
var level__8255 = pv.shift;
while(true){
if((level__8255 > 0))
{{
var G__8256 = cljs.core.pv_aget.call(null,node__8254,((i >>> level__8255) & 31));
var G__8257 = (level__8255 - 5);
node__8254 = G__8256;
level__8255 = G__8257;
continue;
}
} else
{return node__8254.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(pv.cnt)].join('')));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__8260 = cljs.core.pv_clone_node.call(null,node);
if((level === 0))
{cljs.core.pv_aset.call(null,ret__8260,(i & 31),val);
return ret__8260;
} else
{var subidx__8261 = ((i >>> level) & 31);
cljs.core.pv_aset.call(null,ret__8260,subidx__8261,do_assoc.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__8261),i,val));
return ret__8260;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__8267 = (((pv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__8268 = pop_tail.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__8267));
if((function (){var and__3822__auto____8269 = (new_child__8268 == null);
if(and__3822__auto____8269)
{return (subidx__8267 === 0);
} else
{return and__3822__auto____8269;
}
})())
{return null;
} else
{var ret__8270 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__8270,subidx__8267,new_child__8268);
return ret__8270;
}
} else
{if((subidx__8267 === 0))
{return null;
} else
{if("\uFDD0'else")
{var ret__8271 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__8271,subidx__8267,null);
return ret__8271;
} else
{return null;
}
}
}
});

goog.provide('cljs.core.PersistentVector');

/**
* @constructor
*/
cljs.core.PersistentVector = (function (meta,cnt,shift,root,tail,__hash){
this.meta = meta;
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 4;
this.cljs$lang$protocol_mask$partition0$ = 167668511;
})
cljs.core.PersistentVector.cljs$lang$type = true;
cljs.core.PersistentVector.cljs$lang$ctorPrSeq = (function (this__2322__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentVector");
});
cljs.core.PersistentVector.cljs$lang$ctorPrWriter = (function (this__2322__auto__,writer__2323__auto__){
return cljs.core._write.call(null,writer__2323__auto__,"cljs.core/PersistentVector");
});
cljs.core.PersistentVector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__8274 = this;
return (new cljs.core.TransientVector(this__8274.cnt,this__8274.shift,cljs.core.tv_editable_root.call(null,this__8274.root),cljs.core.tv_editable_tail.call(null,this__8274.tail)));
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8275 = this;
var h__2203__auto____8276 = this__8275.__hash;
if(!((h__2203__auto____8276 == null)))
{return h__2203__auto____8276;
} else
{var h__2203__auto____8277 = cljs.core.hash_coll.call(null,coll);
this__8275.__hash = h__2203__auto____8277;
return h__2203__auto____8277;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8278 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8279 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8280 = this;
if((function (){var and__3822__auto____8281 = (0 <= k);
if(and__3822__auto____8281)
{return (k < this__8280.cnt);
} else
{return and__3822__auto____8281;
}
})())
{if((cljs.core.tail_off.call(null,coll) <= k))
{var new_tail__8282 = this__8280.tail.slice();
(new_tail__8282[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__8280.meta,this__8280.cnt,this__8280.shift,this__8280.root,new_tail__8282,null));
} else
{return (new cljs.core.PersistentVector(this__8280.meta,this__8280.cnt,this__8280.shift,cljs.core.do_assoc.call(null,coll,this__8280.shift,this__8280.root,k,v),this__8280.tail,null));
}
} else
{if((k === this__8280.cnt))
{return coll.cljs$core$ICollection$_conj$arity$2(coll,v);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(k),cljs.core.str(" out of bounds  [0,"),cljs.core.str(this__8280.cnt),cljs.core.str("]")].join('')));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.call = (function() {
var G__8330 = null;
var G__8330__2 = (function (this_sym8283,k){
var this__8285 = this;
var this_sym8283__8286 = this;
var coll__8287 = this_sym8283__8286;
return coll__8287.cljs$core$ILookup$_lookup$arity$2(coll__8287,k);
});
var G__8330__3 = (function (this_sym8284,k,not_found){
var this__8285 = this;
var this_sym8284__8288 = this;
var coll__8289 = this_sym8284__8288;
return coll__8289.cljs$core$ILookup$_lookup$arity$3(coll__8289,k,not_found);
});
G__8330 = function(this_sym8284,k,not_found){
switch(arguments.length){
case 2:
return G__8330__2.call(this,this_sym8284,k);
case 3:
return G__8330__3.call(this,this_sym8284,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8330;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (this_sym8272,args8273){
var this__8290 = this;
return this_sym8272.call.apply(this_sym8272,[this_sym8272].concat(args8273.slice()));
});
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var this__8291 = this;
var step_init__8292 = [0,init];
var i__8293 = 0;
while(true){
if((i__8293 < this__8291.cnt))
{var arr__8294 = cljs.core.array_for.call(null,v,i__8293);
var len__8295 = arr__8294.length;
var init__8299 = (function (){var j__8296 = 0;
var init__8297 = (step_init__8292[1]);
while(true){
if((j__8296 < len__8295))
{var init__8298 = f.call(null,init__8297,(j__8296 + i__8293),(arr__8294[j__8296]));
if(cljs.core.reduced_QMARK_.call(null,init__8298))
{return init__8298;
} else
{{
var G__8331 = (j__8296 + 1);
var G__8332 = init__8298;
j__8296 = G__8331;
init__8297 = G__8332;
continue;
}
}
} else
{(step_init__8292[0] = len__8295);
(step_init__8292[1] = init__8297);
return init__8297;
}
break;
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__8299))
{return cljs.core.deref.call(null,init__8299);
} else
{{
var G__8333 = (i__8293 + (step_init__8292[0]));
i__8293 = G__8333;
continue;
}
}
} else
{return (step_init__8292[1]);
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8300 = this;
if(((this__8300.cnt - cljs.core.tail_off.call(null,coll)) < 32))
{var new_tail__8301 = this__8300.tail.slice();
new_tail__8301.push(o);
return (new cljs.core.PersistentVector(this__8300.meta,(this__8300.cnt + 1),this__8300.shift,this__8300.root,new_tail__8301,null));
} else
{var root_overflow_QMARK___8302 = ((this__8300.cnt >>> 5) > (1 << this__8300.shift));
var new_shift__8303 = ((root_overflow_QMARK___8302)?(this__8300.shift + 5):this__8300.shift);
var new_root__8305 = ((root_overflow_QMARK___8302)?(function (){var n_r__8304 = cljs.core.pv_fresh_node.call(null,null);
cljs.core.pv_aset.call(null,n_r__8304,0,this__8300.root);
cljs.core.pv_aset.call(null,n_r__8304,1,cljs.core.new_path.call(null,null,this__8300.shift,(new cljs.core.VectorNode(null,this__8300.tail))));
return n_r__8304;
})():cljs.core.push_tail.call(null,coll,this__8300.shift,this__8300.root,(new cljs.core.VectorNode(null,this__8300.tail))));
return (new cljs.core.PersistentVector(this__8300.meta,(this__8300.cnt + 1),new_shift__8303,new_root__8305,[o],null));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__8306 = this;
if((this__8306.cnt > 0))
{return (new cljs.core.RSeq(coll,(this__8306.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var this__8307 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var this__8308 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,1);
});
cljs.core.PersistentVector.prototype.toString = (function (){
var this__8309 = this;
var this__8310 = this;
return cljs.core.pr_str.call(null,this__8310);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__8311 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__8312 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8313 = this;
if((this__8313.cnt === 0))
{return null;
} else
{return cljs.core.chunked_seq.call(null,coll,0,0);
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8314 = this;
return this__8314.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8315 = this;
if((this__8315.cnt > 0))
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,(this__8315.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8316 = this;
if((this__8316.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__8316.cnt))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__8316.meta);
} else
{if((1 < (this__8316.cnt - cljs.core.tail_off.call(null,coll))))
{return (new cljs.core.PersistentVector(this__8316.meta,(this__8316.cnt - 1),this__8316.shift,this__8316.root,this__8316.tail.slice(0,-1),null));
} else
{if("\uFDD0'else")
{var new_tail__8317 = cljs.core.array_for.call(null,coll,(this__8316.cnt - 2));
var nr__8318 = cljs.core.pop_tail.call(null,coll,this__8316.shift,this__8316.root);
var new_root__8319 = (((nr__8318 == null))?cljs.core.PersistentVector.EMPTY_NODE:nr__8318);
var cnt_1__8320 = (this__8316.cnt - 1);
if((function (){var and__3822__auto____8321 = (5 < this__8316.shift);
if(and__3822__auto____8321)
{return (cljs.core.pv_aget.call(null,new_root__8319,1) == null);
} else
{return and__3822__auto____8321;
}
})())
{return (new cljs.core.PersistentVector(this__8316.meta,cnt_1__8320,(this__8316.shift - 5),cljs.core.pv_aget.call(null,new_root__8319,0),new_tail__8317,null));
} else
{return (new cljs.core.PersistentVector(this__8316.meta,cnt_1__8320,this__8316.shift,new_root__8319,new_tail__8317,null));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__8322 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8323 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8324 = this;
return (new cljs.core.PersistentVector(meta,this__8324.cnt,this__8324.shift,this__8324.root,this__8324.tail,this__8324.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8325 = this;
return this__8325.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8326 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8327 = this;
if((function (){var and__3822__auto____8328 = (0 <= n);
if(and__3822__auto____8328)
{return (n < this__8327.cnt);
} else
{return and__3822__auto____8328;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8329 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__8329.meta);
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.pv_fresh_node.call(null,null);
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[],0));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){
var l__8334 = xs.length;
var xs__8335 = (((no_clone === true))?xs:xs.slice());
if((l__8334 < 32))
{return (new cljs.core.PersistentVector(null,l__8334,5,cljs.core.PersistentVector.EMPTY_NODE,xs__8335,null));
} else
{var node__8336 = xs__8335.slice(0,32);
var v__8337 = (new cljs.core.PersistentVector(null,32,5,cljs.core.PersistentVector.EMPTY_NODE,node__8336,null));
var i__8338 = 32;
var out__8339 = cljs.core._as_transient.call(null,v__8337);
while(true){
if((i__8338 < l__8334))
{{
var G__8340 = (i__8338 + 1);
var G__8341 = cljs.core.conj_BANG_.call(null,out__8339,(xs__8335[i__8338]));
i__8338 = G__8340;
out__8339 = G__8341;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__8339);
}
break;
}
}
});
cljs.core.vec = (function vec(coll){
return cljs.core._persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core._conj_BANG_,cljs.core._as_transient.call(null,cljs.core.PersistentVector.EMPTY),coll));
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
return cljs.core.vec.call(null,args);
};
var vector = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__8342){
var args = cljs.core.seq(arglist__8342);;
return vector__delegate(args);
});
vector.cljs$lang$arity$variadic = vector__delegate;
return vector;
})()
;

goog.provide('cljs.core.ChunkedSeq');

/**
* @constructor
*/
cljs.core.ChunkedSeq = (function (vec,node,i,off,meta,__hash){
this.vec = vec;
this.node = node;
this.i = i;
this.off = off;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 31719660;
this.cljs$lang$protocol_mask$partition1$ = 1536;
})
cljs.core.ChunkedSeq.cljs$lang$type = true;
cljs.core.ChunkedSeq.cljs$lang$ctorPrSeq = (function (this__2322__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedSeq");
});
cljs.core.ChunkedSeq.cljs$lang$ctorPrWriter = (function (this__2322__auto__,writer__2323__auto__){
return cljs.core._write.call(null,writer__2323__auto__,"cljs.core/ChunkedSeq");
});
cljs.core.ChunkedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8343 = this;
var h__2203__auto____8344 = this__8343.__hash;
if(!((h__2203__auto____8344 == null)))
{return h__2203__auto____8344;
} else
{var h__2203__auto____8345 = cljs.core.hash_coll.call(null,coll);
this__8343.__hash = h__2203__auto____8345;
return h__2203__auto____8345;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__8346 = this;
if(((this__8346.off + 1) < this__8346.node.length))
{var s__8347 = cljs.core.chunked_seq.call(null,this__8346.vec,this__8346.node,this__8346.i,(this__8346.off + 1));
if((s__8347 == null))
{return null;
} else
{return s__8347;
}
} else
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8348 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8349 = this;
return coll;
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8350 = this;
return (this__8350.node[this__8350.off]);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8351 = this;
if(((this__8351.off + 1) < this__8351.node.length))
{var s__8352 = cljs.core.chunked_seq.call(null,this__8351.vec,this__8351.node,this__8351.i,(this__8351.off + 1));
if((s__8352 == null))
{return cljs.core.List.EMPTY;
} else
{return s__8352;
}
} else
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__8353 = this;
var l__8354 = this__8353.node.length;
var s__8355 = ((((this__8353.i + l__8354) < cljs.core._count.call(null,this__8353.vec)))?cljs.core.chunked_seq.call(null,this__8353.vec,(this__8353.i + l__8354),0):null);
if((s__8355 == null))
{return null;
} else
{return s__8355;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8356 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__8357 = this;
return cljs.core.chunked_seq.call(null,this__8357.vec,this__8357.node,this__8357.i,this__8357.off,m);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_meta$arity$1 = (function (coll){
var this__8358 = this;
return this__8358.meta;
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8359 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__8359.meta);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__8360 = this;
return cljs.core.array_chunk.call(null,this__8360.node,this__8360.off);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__8361 = this;
var l__8362 = this__8361.node.length;
var s__8363 = ((((this__8361.i + l__8362) < cljs.core._count.call(null,this__8361.vec)))?cljs.core.chunked_seq.call(null,this__8361.vec,(this__8361.i + l__8362),0):null);
if((s__8363 == null))
{return cljs.core.List.EMPTY;
} else
{return s__8363;
}
});
cljs.core.ChunkedSeq;
cljs.core.chunked_seq = (function() {
var chunked_seq = null;
var chunked_seq__3 = (function (vec,i,off){
return chunked_seq.call(null,vec,cljs.core.array_for.call(null,vec,i),i,off,null);
});
var chunked_seq__4 = (function (vec,node,i,off){
return chunked_seq.call(null,vec,node,i,off,null);
});
var chunked_seq__5 = (function (vec,node,i,off,meta){
return (new cljs.core.ChunkedSeq(vec,node,i,off,meta,null));
});
chunked_seq = function(vec,node,i,off,meta){
switch(arguments.length){
case 3:
return chunked_seq__3.call(this,vec,node,i);
case 4:
return chunked_seq__4.call(this,vec,node,i,off);
case 5:
return chunked_seq__5.call(this,vec,node,i,off,meta);
}
throw('Invalid arity: ' + arguments.length);
};
chunked_seq.cljs$lang$arity$3 = chunked_seq__3;
chunked_seq.cljs$lang$arity$4 = chunked_seq__4;
chunked_seq.cljs$lang$arity$5 = chunked_seq__5;
return chunked_seq;
})()
;

goog.provide('cljs.core.Subvec');

/**
* @constructor
*/
cljs.core.Subvec = (function (meta,v,start,end,__hash){
this.meta = meta;
this.v = v;
this.start = start;
this.end = end;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32400159;
})
cljs.core.Subvec.cljs$lang$type = true;
cljs.core.Subvec.cljs$lang$ctorPrSeq = (function (this__2322__auto__){
return cljs.core.list.call(null,"cljs.core/Subvec");
});
cljs.core.Subvec.cljs$lang$ctorPrWriter = (function (this__2322__auto__,writer__2323__auto__){
return cljs.core._write.call(null,writer__2323__auto__,"cljs.core/Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8366 = this;
var h__2203__auto____8367 = this__8366.__hash;
if(!((h__2203__auto____8367 == null)))
{return h__2203__auto____8367;
} else
{var h__2203__auto____8368 = cljs.core.hash_coll.call(null,coll);
this__8366.__hash = h__2203__auto____8368;
return h__2203__auto____8368;
}
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8369 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8370 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var this__8371 = this;
var v_pos__8372 = (this__8371.start + key);
return (new cljs.core.Subvec(this__8371.meta,cljs.core._assoc.call(null,this__8371.v,v_pos__8372,val),this__8371.start,((this__8371.end > (v_pos__8372 + 1)) ? this__8371.end : (v_pos__8372 + 1)),null));
});
cljs.core.Subvec.prototype.call = (function() {
var G__8398 = null;
var G__8398__2 = (function (this_sym8373,k){
var this__8375 = this;
var this_sym8373__8376 = this;
var coll__8377 = this_sym8373__8376;
return coll__8377.cljs$core$ILookup$_lookup$arity$2(coll__8377,k);
});
var G__8398__3 = (function (this_sym8374,k,not_found){
var this__8375 = this;
var this_sym8374__8378 = this;
var coll__8379 = this_sym8374__8378;
return coll__8379.cljs$core$ILookup$_lookup$arity$3(coll__8379,k,not_found);
});
G__8398 = function(this_sym8374,k,not_found){
switch(arguments.length){
case 2:
return G__8398__2.call(this,this_sym8374,k);
case 3:
return G__8398__3.call(this,this_sym8374,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8398;
})()
;
cljs.core.Subvec.prototype.apply = (function (this_sym8364,args8365){
var this__8380 = this;
return this_sym8364.call.apply(this_sym8364,[this_sym8364].concat(args8365.slice()));
});
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8381 = this;
return (new cljs.core.Subvec(this__8381.meta,cljs.core._assoc_n.call(null,this__8381.v,this__8381.end,o),this__8381.start,(this__8381.end + 1),null));
});
cljs.core.Subvec.prototype.toString = (function (){
var this__8382 = this;
var this__8383 = this;
return cljs.core.pr_str.call(null,this__8383);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__8384 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__8385 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8386 = this;
var subvec_seq__8387 = (function subvec_seq(i){
if((i === this__8386.end))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__8386.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}),null)));
}
});
return subvec_seq__8387.call(null,this__8386.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8388 = this;
return (this__8388.end - this__8388.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8389 = this;
return cljs.core._nth.call(null,this__8389.v,(this__8389.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8390 = this;
if((this__8390.start === this__8390.end))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__8390.meta,this__8390.v,this__8390.start,(this__8390.end - 1),null));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__8391 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8392 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8393 = this;
return (new cljs.core.Subvec(meta,this__8393.v,this__8393.start,this__8393.end,this__8393.__hash));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8394 = this;
return this__8394.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8395 = this;
return cljs.core._nth.call(null,this__8395.v,(this__8395.start + n));
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8396 = this;
return cljs.core._nth.call(null,this__8396.v,(this__8396.start + n),not_found);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8397 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__8397.meta);
});
cljs.core.Subvec;
/**
* Returns a persistent vector of the items in vector from
* start (inclusive) to end (exclusive).  If end is not supplied,
* defaults to (count vector). This operation is O(1) and very fast, as
* the resulting vector shares structure with the original and no
* trimming is done.
*/
cljs.core.subvec = (function() {
var subvec = null;
var subvec__2 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__3 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end,null));
});
subvec = function(v,start,end){
switch(arguments.length){
case 2:
return subvec__2.call(this,v,start);
case 3:
return subvec__3.call(this,v,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
subvec.cljs$lang$arity$2 = subvec__2;
subvec.cljs$lang$arity$3 = subvec__3;
return subvec;
})()
;
cljs.core.tv_ensure_editable = (function tv_ensure_editable(edit,node){
if((edit === node.edit))
{return node;
} else
{return (new cljs.core.VectorNode(edit,node.arr.slice()));
}
});
cljs.core.tv_editable_root = (function tv_editable_root(node){
return (new cljs.core.VectorNode({},node.arr.slice()));
});
cljs.core.tv_editable_tail = (function tv_editable_tail(tl){
var ret__8400 = cljs.core.make_array.call(null,32);
cljs.core.array_copy.call(null,tl,0,ret__8400,0,tl.length);
return ret__8400;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret__8404 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,parent);
var subidx__8405 = (((tv.cnt - 1) >>> level) & 31);
cljs.core.pv_aset.call(null,ret__8404,subidx__8405,(((level === 5))?tail_node:(function (){var child__8406 = cljs.core.pv_aget.call(null,ret__8404,subidx__8405);
if(!((child__8406 == null)))
{return tv_push_tail.call(null,tv,(level - 5),child__8406,tail_node);
} else
{return cljs.core.new_path.call(null,tv.root.edit,(level - 5),tail_node);
}
})()));
return ret__8404;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__8411 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,node);
var subidx__8412 = (((tv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__8413 = tv_pop_tail.call(null,tv,(level - 5),cljs.core.pv_aget.call(null,node__8411,subidx__8412));
if((function (){var and__3822__auto____8414 = (new_child__8413 == null);
if(and__3822__auto____8414)
{return (subidx__8412 === 0);
} else
{return and__3822__auto____8414;
}
})())
{return null;
} else
{cljs.core.pv_aset.call(null,node__8411,subidx__8412,new_child__8413);
return node__8411;
}
} else
{if((subidx__8412 === 0))
{return null;
} else
{if("\uFDD0'else")
{cljs.core.pv_aset.call(null,node__8411,subidx__8412,null);
return node__8411;
} else
{return null;
}
}
}
});
cljs.core.editable_array_for = (function editable_array_for(tv,i){
if((function (){var and__3822__auto____8419 = (0 <= i);
if(and__3822__auto____8419)
{return (i < tv.cnt);
} else
{return and__3822__auto____8419;
}
})())
{if((i >= cljs.core.tail_off.call(null,tv)))
{return tv.tail;
} else
{var root__8420 = tv.root;
var node__8421 = root__8420;
var level__8422 = tv.shift;
while(true){
if((level__8422 > 0))
{{
var G__8423 = cljs.core.tv_ensure_editable.call(null,root__8420.edit,cljs.core.pv_aget.call(null,node__8421,((i >>> level__8422) & 31)));
var G__8424 = (level__8422 - 5);
node__8421 = G__8423;
level__8422 = G__8424;
continue;
}
} else
{return node__8421.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in transient vector of length "),cljs.core.str(tv.cnt)].join('')));
}
});

goog.provide('cljs.core.TransientVector');

/**
* @constructor
*/
cljs.core.TransientVector = (function (cnt,shift,root,tail){
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.cljs$lang$protocol_mask$partition0$ = 275;
this.cljs$lang$protocol_mask$partition1$ = 88;
})
cljs.core.TransientVector.cljs$lang$type = true;
cljs.core.TransientVector.cljs$lang$ctorPrSeq = (function (this__2322__auto__){
return cljs.core.list.call(null,"cljs.core/TransientVector");
});
cljs.core.TransientVector.cljs$lang$ctorPrWriter = (function (this__2322__auto__,writer__2323__auto__){
return cljs.core._write.call(null,writer__2323__auto__,"cljs.core/TransientVector");
});
cljs.core.TransientVector.prototype.call = (function() {
var G__8464 = null;
var G__8464__2 = (function (this_sym8427,k){
var this__8429 = this;
var this_sym8427__8430 = this;
var coll__8431 = this_sym8427__8430;
return coll__8431.cljs$core$ILookup$_lookup$arity$2(coll__8431,k);
});
var G__8464__3 = (function (this_sym8428,k,not_found){
var this__8429 = this;
var this_sym8428__8432 = this;
var coll__8433 = this_sym8428__8432;
return coll__8433.cljs$core$ILookup$_lookup$arity$3(coll__8433,k,not_found);
});
G__8464 = function(this_sym8428,k,not_found){
switch(arguments.length){
case 2:
return G__8464__2.call(this,this_sym8428,k);
case 3:
return G__8464__3.call(this,this_sym8428,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8464;
})()
;
cljs.core.TransientVector.prototype.apply = (function (this_sym8425,args8426){
var this__8434 = this;
return this_sym8425.call.apply(this_sym8425,[this_sym8425].concat(args8426.slice()));
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8435 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8436 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8437 = this;
if(this__8437.root.edit)
{return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8438 = this;
if((function (){var and__3822__auto____8439 = (0 <= n);
if(and__3822__auto____8439)
{return (n < this__8438.cnt);
} else
{return and__3822__auto____8439;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8440 = this;
if(this__8440.root.edit)
{return this__8440.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var this__8441 = this;
if(this__8441.root.edit)
{if((function (){var and__3822__auto____8442 = (0 <= n);
if(and__3822__auto____8442)
{return (n < this__8441.cnt);
} else
{return and__3822__auto____8442;
}
})())
{if((cljs.core.tail_off.call(null,tcoll) <= n))
{(this__8441.tail[(n & 31)] = val);
return tcoll;
} else
{var new_root__8447 = (function go(level,node){
var node__8445 = cljs.core.tv_ensure_editable.call(null,this__8441.root.edit,node);
if((level === 0))
{cljs.core.pv_aset.call(null,node__8445,(n & 31),val);
return node__8445;
} else
{var subidx__8446 = ((n >>> level) & 31);
cljs.core.pv_aset.call(null,node__8445,subidx__8446,go.call(null,(level - 5),cljs.core.pv_aget.call(null,node__8445,subidx__8446)));
return node__8445;
}
}).call(null,this__8441.shift,this__8441.root);
this__8441.root = new_root__8447;
return tcoll;
}
} else
{if((n === this__8441.cnt))
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(this__8441.cnt)].join('')));
} else
{return null;
}
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_pop_BANG_$arity$1 = (function (tcoll){
var this__8448 = this;
if(this__8448.root.edit)
{if((this__8448.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__8448.cnt))
{this__8448.cnt = 0;
return tcoll;
} else
{if((((this__8448.cnt - 1) & 31) > 0))
{this__8448.cnt = (this__8448.cnt - 1);
return tcoll;
} else
{if("\uFDD0'else")
{var new_tail__8449 = cljs.core.editable_array_for.call(null,tcoll,(this__8448.cnt - 2));
var new_root__8451 = (function (){var nr__8450 = cljs.core.tv_pop_tail.call(null,tcoll,this__8448.shift,this__8448.root);
if(!((nr__8450 == null)))
{return nr__8450;
} else
{return (new cljs.core.VectorNode(this__8448.root.edit,cljs.core.make_array.call(null,32)));
}
})();
if((function (){var and__3822__auto____8452 = (5 < this__8448.shift);
if(and__3822__auto____8452)
{return (cljs.core.pv_aget.call(null,new_root__8451,1) == null);
} else
{return and__3822__auto____8452;
}
})())
{var new_root__8453 = cljs.core.tv_ensure_editable.call(null,this__8448.root.edit,cljs.core.pv_aget.call(null,new_root__8451,0));
this__8448.root = new_root__8453;
this__8448.shift = (this__8448.shift - 5);
this__8448.cnt = (this__8448.cnt - 1);
this__8448.tail = new_tail__8449;
return tcoll;
} else
{this__8448.root = new_root__8451;
this__8448.cnt = (this__8448.cnt - 1);
this__8448.tail = new_tail__8449;
return tcoll;
}
} else
{return null;
}
}
}
}
} else
{throw (new Error("pop! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__8454 = this;
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,key,val);
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__8455 = this;
if(this__8455.root.edit)
{if(((this__8455.cnt - cljs.core.tail_off.call(null,tcoll)) < 32))
{(this__8455.tail[(this__8455.cnt & 31)] = o);
this__8455.cnt = (this__8455.cnt + 1);
return tcoll;
} else
{var tail_node__8456 = (new cljs.core.VectorNode(this__8455.root.edit,this__8455.tail));
var new_tail__8457 = cljs.core.make_array.call(null,32);
(new_tail__8457[0] = o);
this__8455.tail = new_tail__8457;
if(((this__8455.cnt >>> 5) > (1 << this__8455.shift)))
{var new_root_array__8458 = cljs.core.make_array.call(null,32);
var new_shift__8459 = (this__8455.shift + 5);
(new_root_array__8458[0] = this__8455.root);
(new_root_array__8458[1] = cljs.core.new_path.call(null,this__8455.root.edit,this__8455.shift,tail_node__8456));
this__8455.root = (new cljs.core.VectorNode(this__8455.root.edit,new_root_array__8458));
this__8455.shift = new_shift__8459;
this__8455.cnt = (this__8455.cnt + 1);
return tcoll;
} else
{var new_root__8460 = cljs.core.tv_push_tail.call(null,tcoll,this__8455.shift,this__8455.root,tail_node__8456);
this__8455.root = new_root__8460;
this__8455.cnt = (this__8455.cnt + 1);
return tcoll;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__8461 = this;
if(this__8461.root.edit)
{this__8461.root.edit = null;
var len__8462 = (this__8461.cnt - cljs.core.tail_off.call(null,tcoll));
var trimmed_tail__8463 = cljs.core.make_array.call(null,len__8462);
cljs.core.array_copy.call(null,this__8461.tail,0,trimmed_tail__8463,0,len__8462);
return (new cljs.core.PersistentVector(null,this__8461.cnt,this__8461.shift,this__8461.root,trimmed_tail__8463,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientVector;

goog.provide('cljs.core.PersistentQueueSeq');

/**
* @constructor
*/
cljs.core.PersistentQueueSeq = (function (meta,front,rear,__hash){
this.meta = meta;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.PersistentQueueSeq.cljs$lang$type = true;
cljs.core.PersistentQueueSeq.cljs$lang$ctorPrSeq = (function (this__2322__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.cljs$lang$ctorPrWriter = (function (this__2322__auto__,writer__2323__auto__){
return cljs.core._write.call(null,writer__2323__auto__,"cljs.core/PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8465 = this;
var h__2203__auto____8466 = this__8465.__hash;
if(!((h__2203__auto____8466 == null)))
{return h__2203__auto____8466;
} else
{var h__2203__auto____8467 = cljs.core.hash_coll.call(null,coll);
this__8465.__hash = h__2203__auto____8467;
return h__2203__auto____8467;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8468 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var this__8469 = this;
var this__8470 = this;
return cljs.core.pr_str.call(null,this__8470);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8471 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8472 = this;
return cljs.core._first.call(null,this__8472.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8473 = this;
var temp__3971__auto____8474 = cljs.core.next.call(null,this__8473.front);
if(temp__3971__auto____8474)
{var f1__8475 = temp__3971__auto____8474;
return (new cljs.core.PersistentQueueSeq(this__8473.meta,f1__8475,this__8473.rear,null));
} else
{if((this__8473.rear == null))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__8473.meta,this__8473.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8476 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8477 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__8477.front,this__8477.rear,this__8477.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8478 = this;
return this__8478.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8479 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8479.meta);
});
cljs.core.PersistentQueueSeq;

goog.provide('cljs.core.PersistentQueue');

/**
* @constructor
*/
cljs.core.PersistentQueue = (function (meta,count,front,rear,__hash){
this.meta = meta;
this.count = count;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31858766;
})
cljs.core.PersistentQueue.cljs$lang$type = true;
cljs.core.PersistentQueue.cljs$lang$ctorPrSeq = (function (this__2322__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueue");
});
cljs.core.PersistentQueue.cljs$lang$ctorPrWriter = (function (this__2322__auto__,writer__2323__auto__){
return cljs.core._write.call(null,writer__2323__auto__,"cljs.core/PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8480 = this;
var h__2203__auto____8481 = this__8480.__hash;
if(!((h__2203__auto____8481 == null)))
{return h__2203__auto____8481;
} else
{var h__2203__auto____8482 = cljs.core.hash_coll.call(null,coll);
this__8480.__hash = h__2203__auto____8482;
return h__2203__auto____8482;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8483 = this;
if(cljs.core.truth_(this__8483.front))
{return (new cljs.core.PersistentQueue(this__8483.meta,(this__8483.count + 1),this__8483.front,cljs.core.conj.call(null,(function (){var or__3824__auto____8484 = this__8483.rear;
if(cljs.core.truth_(or__3824__auto____8484))
{return or__3824__auto____8484;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(this__8483.meta,(this__8483.count + 1),cljs.core.conj.call(null,this__8483.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});
cljs.core.PersistentQueue.prototype.toString = (function (){
var this__8485 = this;
var this__8486 = this;
return cljs.core.pr_str.call(null,this__8486);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8487 = this;
var rear__8488 = cljs.core.seq.call(null,this__8487.rear);
if(cljs.core.truth_((function (){var or__3824__auto____8489 = this__8487.front;
if(cljs.core.truth_(or__3824__auto____8489))
{return or__3824__auto____8489;
} else
{return rear__8488;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__8487.front,cljs.core.seq.call(null,rear__8488),null));
} else
{return null;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8490 = this;
return this__8490.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8491 = this;
return cljs.core._first.call(null,this__8491.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8492 = this;
if(cljs.core.truth_(this__8492.front))
{var temp__3971__auto____8493 = cljs.core.next.call(null,this__8492.front);
if(temp__3971__auto____8493)
{var f1__8494 = temp__3971__auto____8493;
return (new cljs.core.PersistentQueue(this__8492.meta,(this__8492.count - 1),f1__8494,this__8492.rear,null));
} else
{return (new cljs.core.PersistentQueue(this__8492.meta,(this__8492.count - 1),cljs.core.seq.call(null,this__8492.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8495 = this;
return cljs.core.first.call(null,this__8495.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8496 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8497 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8498 = this;
return (new cljs.core.PersistentQueue(meta,this__8498.count,this__8498.front,this__8498.rear,this__8498.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8499 = this;
return this__8499.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8500 = this;
return cljs.core.PersistentQueue.EMPTY;
});
cljs.core.PersistentQueue;
cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,0,null,cljs.core.PersistentVector.EMPTY,0));

goog.provide('cljs.core.NeverEquiv');

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2097152;
})
cljs.core.NeverEquiv.cljs$lang$type = true;
cljs.core.NeverEquiv.cljs$lang$ctorPrSeq = (function (this__2322__auto__){
return cljs.core.list.call(null,"cljs.core/NeverEquiv");
});
cljs.core.NeverEquiv.cljs$lang$ctorPrWriter = (function (this__2322__auto__,writer__2323__auto__){
return cljs.core._write.call(null,writer__2323__auto__,"cljs.core/NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__8501 = this;
return false;
});
cljs.core.NeverEquiv;
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,((cljs.core.map_QMARK_.call(null,y))?(((cljs.core.count.call(null,x) === cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core._lookup.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__8504 = array.length;
var i__8505 = 0;
while(true){
if((i__8505 < len__8504))
{if((k === (array[i__8505])))
{return i__8505;
} else
{{
var G__8506 = (i__8505 + incr);
i__8505 = G__8506;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__8509 = cljs.core.hash.call(null,a);
var b__8510 = cljs.core.hash.call(null,b);
if((a__8509 < b__8510))
{return -1;
} else
{if((a__8509 > b__8510))
{return 1;
} else
{if("\uFDD0'else")
{return 0;
} else
{return null;
}
}
}
});
cljs.core.obj_map__GT_hash_map = (function obj_map__GT_hash_map(m,k,v){
var ks__8518 = m.keys;
var len__8519 = ks__8518.length;
var so__8520 = m.strobj;
var out__8521 = cljs.core.with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,cljs.core.meta.call(null,m));
var i__8522 = 0;
var out__8523 = cljs.core.transient$.call(null,out__8521);
while(true){
if((i__8522 < len__8519))
{var k__8524 = (ks__8518[i__8522]);
{
var G__8525 = (i__8522 + 1);
var G__8526 = cljs.core.assoc_BANG_.call(null,out__8523,k__8524,(so__8520[k__8524]));
i__8522 = G__8525;
out__8523 = G__8526;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,out__8523,k,v));
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){
var new_obj__8532 = {};
var l__8533 = ks.length;
var i__8534 = 0;
while(true){
if((i__8534 < l__8533))
{var k__8535 = (ks[i__8534]);
(new_obj__8532[k__8535] = (obj[k__8535]));
{
var G__8536 = (i__8534 + 1);
i__8534 = G__8536;
continue;
}
} else
{}
break;
}
return new_obj__8532;
});

goog.provide('cljs.core.ObjMap');

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj,update_count,__hash){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
this.update_count = update_count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 4;
this.cljs$lang$protocol_mask$partition0$ = 15075087;
})
cljs.core.ObjMap.cljs$lang$type = true;
cljs.core.ObjMap.cljs$lang$ctorPrSeq = (function (this__2322__auto__){
return cljs.core.list.call(null,"cljs.core/ObjMap");
});
cljs.core.ObjMap.cljs$lang$ctorPrWriter = (function (this__2322__auto__,writer__2323__auto__){
return cljs.core._write.call(null,writer__2323__auto__,"cljs.core/ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__8539 = this;
return cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null),coll));
});
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8540 = this;
var h__2203__auto____8541 = this__8540.__hash;
if(!((h__2203__auto____8541 == null)))
{return h__2203__auto____8541;
} else
{var h__2203__auto____8542 = cljs.core.hash_imap.call(null,coll);
this__8540.__hash = h__2203__auto____8542;
return h__2203__auto____8542;
}
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8543 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8544 = this;
if((function (){var and__3822__auto____8545 = goog.isString(k);
if(and__3822__auto____8545)
{return !((cljs.core.scan_array.call(null,1,k,this__8544.keys) == null));
} else
{return and__3822__auto____8545;
}
})())
{return (this__8544.strobj[k]);
} else
{return not_found;
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8546 = this;
if(goog.isString(k))
{if((function (){var or__3824__auto____8547 = (this__8546.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD);
if(or__3824__auto____8547)
{return or__3824__auto____8547;
} else
{return (this__8546.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD);
}
})())
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
} else
{if(!((cljs.core.scan_array.call(null,1,k,this__8546.keys) == null)))
{var new_strobj__8548 = cljs.core.obj_clone.call(null,this__8546.strobj,this__8546.keys);
(new_strobj__8548[k] = v);
return (new cljs.core.ObjMap(this__8546.meta,this__8546.keys,new_strobj__8548,(this__8546.update_count + 1),null));
} else
{var new_strobj__8549 = cljs.core.obj_clone.call(null,this__8546.strobj,this__8546.keys);
var new_keys__8550 = this__8546.keys.slice();
(new_strobj__8549[k] = v);
new_keys__8550.push(k);
return (new cljs.core.ObjMap(this__8546.meta,new_keys__8550,new_strobj__8549,(this__8546.update_count + 1),null));
}
}
} else
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8551 = this;
if((function (){var and__3822__auto____8552 = goog.isString(k);
if(and__3822__auto____8552)
{return !((cljs.core.scan_array.call(null,1,k,this__8551.keys) == null));
} else
{return and__3822__auto____8552;
}
})())
{return true;
} else
{return false;
}
});
cljs.core.ObjMap.prototype.call = (function() {
var G__8574 = null;
var G__8574__2 = (function (this_sym8553,k){
var this__8555 = this;
var this_sym8553__8556 = this;
var coll__8557 = this_sym8553__8556;
return coll__8557.cljs$core$ILookup$_lookup$arity$2(coll__8557,k);
});
var G__8574__3 = (function (this_sym8554,k,not_found){
var this__8555 = this;
var this_sym8554__8558 = this;
var coll__8559 = this_sym8554__8558;
return coll__8559.cljs$core$ILookup$_lookup$arity$3(coll__8559,k,not_found);
});
G__8574 = function(this_sym8554,k,not_found){
switch(arguments.length){
case 2:
return G__8574__2.call(this,this_sym8554,k);
case 3:
return G__8574__3.call(this,this_sym8554,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8574;
})()
;
cljs.core.ObjMap.prototype.apply = (function (this_sym8537,args8538){
var this__8560 = this;
return this_sym8537.call.apply(this_sym8537,[this_sym8537].concat(args8538.slice()));
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__8561 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.toString = (function (){
var this__8562 = this;
var this__8563 = this;
return cljs.core.pr_str.call(null,this__8563);
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8564 = this;
if((this__8564.keys.length > 0))
{return cljs.core.map.call(null,(function (p1__8527_SHARP_){
return cljs.core.vector.call(null,p1__8527_SHARP_,(this__8564.strobj[p1__8527_SHARP_]));
}),this__8564.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8565 = this;
return this__8565.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8566 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8567 = this;
return (new cljs.core.ObjMap(meta,this__8567.keys,this__8567.strobj,this__8567.update_count,this__8567.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8568 = this;
return this__8568.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8569 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__8569.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8570 = this;
if((function (){var and__3822__auto____8571 = goog.isString(k);
if(and__3822__auto____8571)
{return !((cljs.core.scan_array.call(null,1,k,this__8570.keys) == null));
} else
{return and__3822__auto____8571;
}
})())
{var new_keys__8572 = this__8570.keys.slice();
var new_strobj__8573 = cljs.core.obj_clone.call(null,this__8570.strobj,this__8570.keys);
new_keys__8572.splice(cljs.core.scan_array.call(null,1,k,new_keys__8572),1);
cljs.core.js_delete.call(null,new_strobj__8573,k);
return (new cljs.core.ObjMap(this__8570.meta,new_keys__8572,new_strobj__8573,(this__8570.update_count + 1),null));
} else
{return coll;
}
});
cljs.core.ObjMap;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,[],{},0,0));
cljs.core.ObjMap.HASHMAP_THRESHOLD = 32;
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj,0,null));
});

goog.provide('cljs.core.HashMap');

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj,__hash){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 15075087;
})
cljs.core.HashMap.cljs$lang$type = true;
cljs.core.HashMap.cljs$lang$ctorPrSeq = (function (this__2322__auto__){
return cljs.core.list.call(null,"cljs.core/HashMap");
});
cljs.core.HashMap.cljs$lang$ctorPrWriter = (function (this__2322__auto__,writer__2323__auto__){
return cljs.core._write.call(null,writer__2323__auto__,"cljs.core/HashMap");
});
cljs.core.HashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8578 = this;
var h__2203__auto____8579 = this__8578.__hash;
if(!((h__2203__auto____8579 == null)))
{return h__2203__auto____8579;
} else
{var h__2203__auto____8580 = cljs.core.hash_imap.call(null,coll);
this__8578.__hash = h__2203__auto____8580;
return h__2203__auto____8580;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8581 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8582 = this;
var bucket__8583 = (this__8582.hashobj[cljs.core.hash.call(null,k)]);
var i__8584 = (cljs.core.truth_(bucket__8583)?cljs.core.scan_array.call(null,2,k,bucket__8583):null);
if(cljs.core.truth_(i__8584))
{return (bucket__8583[(i__8584 + 1)]);
} else
{return not_found;
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8585 = this;
var h__8586 = cljs.core.hash.call(null,k);
var bucket__8587 = (this__8585.hashobj[h__8586]);
if(cljs.core.truth_(bucket__8587))
{var new_bucket__8588 = bucket__8587.slice();
var new_hashobj__8589 = goog.object.clone(this__8585.hashobj);
(new_hashobj__8589[h__8586] = new_bucket__8588);
var temp__3971__auto____8590 = cljs.core.scan_array.call(null,2,k,new_bucket__8588);
if(cljs.core.truth_(temp__3971__auto____8590))
{var i__8591 = temp__3971__auto____8590;
(new_bucket__8588[(i__8591 + 1)] = v);
return (new cljs.core.HashMap(this__8585.meta,this__8585.count,new_hashobj__8589,null));
} else
{new_bucket__8588.push(k,v);
return (new cljs.core.HashMap(this__8585.meta,(this__8585.count + 1),new_hashobj__8589,null));
}
} else
{var new_hashobj__8592 = goog.object.clone(this__8585.hashobj);
(new_hashobj__8592[h__8586] = [k,v]);
return (new cljs.core.HashMap(this__8585.meta,(this__8585.count + 1),new_hashobj__8592,null));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8593 = this;
var bucket__8594 = (this__8593.hashobj[cljs.core.hash.call(null,k)]);
var i__8595 = (cljs.core.truth_(bucket__8594)?cljs.core.scan_array.call(null,2,k,bucket__8594):null);
if(cljs.core.truth_(i__8595))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__8620 = null;
var G__8620__2 = (function (this_sym8596,k){
var this__8598 = this;
var this_sym8596__8599 = this;
var coll__8600 = this_sym8596__8599;
return coll__8600.cljs$core$ILookup$_lookup$arity$2(coll__8600,k);
});
var G__8620__3 = (function (this_sym8597,k,not_found){
var this__8598 = this;
var this_sym8597__8601 = this;
var coll__8602 = this_sym8597__8601;
return coll__8602.cljs$core$ILookup$_lookup$arity$3(coll__8602,k,not_found);
});
G__8620 = function(this_sym8597,k,not_found){
switch(arguments.length){
case 2:
return G__8620__2.call(this,this_sym8597,k);
case 3:
return G__8620__3.call(this,this_sym8597,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8620;
})()
;
cljs.core.HashMap.prototype.apply = (function (this_sym8576,args8577){
var this__8603 = this;
return this_sym8576.call.apply(this_sym8576,[this_sym8576].concat(args8577.slice()));
});
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__8604 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.toString = (function (){
var this__8605 = this;
var this__8606 = this;
return cljs.core.pr_str.call(null,this__8606);
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8607 = this;
if((this__8607.count > 0))
{var hashes__8608 = cljs.core.js_keys.call(null,this__8607.hashobj).sort();
return cljs.core.mapcat.call(null,(function (p1__8575_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__8607.hashobj[p1__8575_SHARP_])));
}),hashes__8608);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8609 = this;
return this__8609.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8610 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8611 = this;
return (new cljs.core.HashMap(meta,this__8611.count,this__8611.hashobj,this__8611.__hash));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8612 = this;
return this__8612.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8613 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__8613.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8614 = this;
var h__8615 = cljs.core.hash.call(null,k);
var bucket__8616 = (this__8614.hashobj[h__8615]);
var i__8617 = (cljs.core.truth_(bucket__8616)?cljs.core.scan_array.call(null,2,k,bucket__8616):null);
if(cljs.core.not.call(null,i__8617))
{return coll;
} else
{var new_hashobj__8618 = goog.object.clone(this__8614.hashobj);
if((3 > bucket__8616.length))
{cljs.core.js_delete.call(null,new_hashobj__8618,h__8615);
} else
{var new_bucket__8619 = bucket__8616.slice();
new_bucket__8619.splice(i__8617,2);
(new_hashobj__8618[h__8615] = new_bucket__8619);
}
return (new cljs.core.HashMap(this__8614.meta,(this__8614.count - 1),new_hashobj__8618,null));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,{},0));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__8621 = ks.length;
var i__8622 = 0;
var out__8623 = cljs.core.HashMap.EMPTY;
while(true){
if((i__8622 < len__8621))
{{
var G__8624 = (i__8622 + 1);
var G__8625 = cljs.core.assoc.call(null,out__8623,(ks[i__8622]),(vs[i__8622]));
i__8622 = G__8624;
out__8623 = G__8625;
continue;
}
} else
{return out__8623;
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr__8629 = m.arr;
var len__8630 = arr__8629.length;
var i__8631 = 0;
while(true){
if((len__8630 <= i__8631))
{return -1;
} else
{if(cljs.core._EQ_.call(null,(arr__8629[i__8631]),k))
{return i__8631;
} else
{if("\uFDD0'else")
{{
var G__8632 = (i__8631 + 2);
i__8631 = G__8632;
continue;
}
} else
{return null;
}
}
}
break;
}
});

goog.provide('cljs.core.PersistentArrayMap');

/**
* @constructor
*/
cljs.core.PersistentArrayMap = (function (meta,cnt,arr,__hash){
this.meta = meta;
this.cnt = cnt;
this.arr = arr;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 4;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
})
cljs.core.PersistentArrayMap.cljs$lang$type = true;
cljs.core.PersistentArrayMap.cljs$lang$ctorPrSeq = (function (this__2322__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentArrayMap");
});
cljs.core.PersistentArrayMap.cljs$lang$ctorPrWriter = (function (this__2322__auto__,writer__2323__auto__){
return cljs.core._write.call(null,writer__2323__auto__,"cljs.core/PersistentArrayMap");
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__8635 = this;
return (new cljs.core.TransientArrayMap({},this__8635.arr.length,this__8635.arr.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8636 = this;
var h__2203__auto____8637 = this__8636.__hash;
if(!((h__2203__auto____8637 == null)))
{return h__2203__auto____8637;
} else
{var h__2203__auto____8638 = cljs.core.hash_imap.call(null,coll);
this__8636.__hash = h__2203__auto____8638;
return h__2203__auto____8638;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8639 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8640 = this;
var idx__8641 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__8641 === -1))
{return not_found;
} else
{return (this__8640.arr[(idx__8641 + 1)]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8642 = this;
var idx__8643 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__8643 === -1))
{if((this__8642.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{return (new cljs.core.PersistentArrayMap(this__8642.meta,(this__8642.cnt + 1),(function (){var G__8644__8645 = this__8642.arr.slice();
G__8644__8645.push(k);
G__8644__8645.push(v);
return G__8644__8645;
})(),null));
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,coll)),k,v));
}
} else
{if((v === (this__8642.arr[(idx__8643 + 1)])))
{return coll;
} else
{if("\uFDD0'else")
{return (new cljs.core.PersistentArrayMap(this__8642.meta,this__8642.cnt,(function (){var G__8646__8647 = this__8642.arr.slice();
(G__8646__8647[(idx__8643 + 1)] = v);
return G__8646__8647;
})(),null));
} else
{return null;
}
}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8648 = this;
return !((cljs.core.array_map_index_of.call(null,coll,k) === -1));
});
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__8680 = null;
var G__8680__2 = (function (this_sym8649,k){
var this__8651 = this;
var this_sym8649__8652 = this;
var coll__8653 = this_sym8649__8652;
return coll__8653.cljs$core$ILookup$_lookup$arity$2(coll__8653,k);
});
var G__8680__3 = (function (this_sym8650,k,not_found){
var this__8651 = this;
var this_sym8650__8654 = this;
var coll__8655 = this_sym8650__8654;
return coll__8655.cljs$core$ILookup$_lookup$arity$3(coll__8655,k,not_found);
});
G__8680 = function(this_sym8650,k,not_found){
switch(arguments.length){
case 2:
return G__8680__2.call(this,this_sym8650,k);
case 3:
return G__8680__3.call(this,this_sym8650,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8680;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (this_sym8633,args8634){
var this__8656 = this;
return this_sym8633.call.apply(this_sym8633,[this_sym8633].concat(args8634.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__8657 = this;
var len__8658 = this__8657.arr.length;
var i__8659 = 0;
var init__8660 = init;
while(true){
if((i__8659 < len__8658))
{var init__8661 = f.call(null,init__8660,(this__8657.arr[i__8659]),(this__8657.arr[(i__8659 + 1)]));
if(cljs.core.reduced_QMARK_.call(null,init__8661))
{return cljs.core.deref.call(null,init__8661);
} else
{{
var G__8681 = (i__8659 + 2);
var G__8682 = init__8661;
i__8659 = G__8681;
init__8660 = G__8682;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__8662 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var this__8663 = this;
var this__8664 = this;
return cljs.core.pr_str.call(null,this__8664);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8665 = this;
if((this__8665.cnt > 0))
{var len__8666 = this__8665.arr.length;
var array_map_seq__8667 = (function array_map_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < len__8666))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([(this__8665.arr[i]),(this__8665.arr[(i + 1)])], true),array_map_seq.call(null,(i + 2)));
} else
{return null;
}
}),null));
});
return array_map_seq__8667.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8668 = this;
return this__8668.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8669 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8670 = this;
return (new cljs.core.PersistentArrayMap(meta,this__8670.cnt,this__8670.arr,this__8670.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8671 = this;
return this__8671.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8672 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8672.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8673 = this;
var idx__8674 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__8674 >= 0))
{var len__8675 = this__8673.arr.length;
var new_len__8676 = (len__8675 - 2);
if((new_len__8676 === 0))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var new_arr__8677 = cljs.core.make_array.call(null,new_len__8676);
var s__8678 = 0;
var d__8679 = 0;
while(true){
if((s__8678 >= len__8675))
{return (new cljs.core.PersistentArrayMap(this__8673.meta,(this__8673.cnt - 1),new_arr__8677,null));
} else
{if(cljs.core._EQ_.call(null,k,(this__8673.arr[s__8678])))
{{
var G__8683 = (s__8678 + 2);
var G__8684 = d__8679;
s__8678 = G__8683;
d__8679 = G__8684;
continue;
}
} else
{if("\uFDD0'else")
{(new_arr__8677[d__8679] = (this__8673.arr[s__8678]));
(new_arr__8677[(d__8679 + 1)] = (this__8673.arr[(s__8678 + 1)]));
{
var G__8685 = (s__8678 + 2);
var G__8686 = (d__8679 + 2);
s__8678 = G__8685;
d__8679 = G__8686;
continue;
}
} else
{return null;
}
}
}
break;
}
}
} else
{return coll;
}
});
cljs.core.PersistentArrayMap;
cljs.core.PersistentArrayMap.EMPTY = (new cljs.core.PersistentArrayMap(null,0,[],null));
cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD = 16;
cljs.core.PersistentArrayMap.fromArrays = (function (ks,vs){
var len__8687 = cljs.core.count.call(null,ks);
var i__8688 = 0;
var out__8689 = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i__8688 < len__8687))
{{
var G__8690 = (i__8688 + 1);
var G__8691 = cljs.core.assoc_BANG_.call(null,out__8689,(ks[i__8688]),(vs[i__8688]));
i__8688 = G__8690;
out__8689 = G__8691;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__8689);
}
break;
}
});

goog.provide('cljs.core.TransientArrayMap');

/**
* @constructor
*/
cljs.core.TransientArrayMap = (function (editable_QMARK_,len,arr){
this.editable_QMARK_ = editable_QMARK_;
this.len = len;
this.arr = arr;
this.cljs$lang$protocol_mask$partition1$ = 56;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientArrayMap.cljs$lang$type = true;
cljs.core.TransientArrayMap.cljs$lang$ctorPrSeq = (function (this__2322__auto__){
return cljs.core.list.call(null,"cljs.core/TransientArrayMap");
});
cljs.core.TransientArrayMap.cljs$lang$ctorPrWriter = (function (this__2322__auto__,writer__2323__auto__){
return cljs.core._write.call(null,writer__2323__auto__,"cljs.core/TransientArrayMap");
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__8692 = this;
if(cljs.core.truth_(this__8692.editable_QMARK_))
{var idx__8693 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__8693 >= 0))
{(this__8692.arr[idx__8693] = (this__8692.arr[(this__8692.len - 2)]));
(this__8692.arr[(idx__8693 + 1)] = (this__8692.arr[(this__8692.len - 1)]));
var G__8694__8695 = this__8692.arr;
G__8694__8695.pop();
G__8694__8695.pop();
G__8694__8695;
this__8692.len = (this__8692.len - 2);
} else
{}
return tcoll;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__8696 = this;
if(cljs.core.truth_(this__8696.editable_QMARK_))
{var idx__8697 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__8697 === -1))
{if(((this__8696.len + 2) <= (2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{this__8696.len = (this__8696.len + 2);
this__8696.arr.push(key);
this__8696.arr.push(val);
return tcoll;
} else
{return cljs.core.assoc_BANG_.call(null,cljs.core.array__GT_transient_hash_map.call(null,this__8696.len,this__8696.arr),key,val);
}
} else
{if((val === (this__8696.arr[(idx__8697 + 1)])))
{return tcoll;
} else
{(this__8696.arr[(idx__8697 + 1)] = val);
return tcoll;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__8698 = this;
if(cljs.core.truth_(this__8698.editable_QMARK_))
{if((function (){var G__8699__8700 = o;
if(G__8699__8700)
{if((function (){var or__3824__auto____8701 = (G__8699__8700.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____8701)
{return or__3824__auto____8701;
} else
{return G__8699__8700.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__8699__8700.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__8699__8700);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__8699__8700);
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__8702 = cljs.core.seq.call(null,o);
var tcoll__8703 = tcoll;
while(true){
var temp__3971__auto____8704 = cljs.core.first.call(null,es__8702);
if(cljs.core.truth_(temp__3971__auto____8704))
{var e__8705 = temp__3971__auto____8704;
{
var G__8711 = cljs.core.next.call(null,es__8702);
var G__8712 = tcoll__8703.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll__8703,cljs.core.key.call(null,e__8705),cljs.core.val.call(null,e__8705));
es__8702 = G__8711;
tcoll__8703 = G__8712;
continue;
}
} else
{return tcoll__8703;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__8706 = this;
if(cljs.core.truth_(this__8706.editable_QMARK_))
{this__8706.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,this__8706.len,2),this__8706.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__8707 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__8708 = this;
if(cljs.core.truth_(this__8708.editable_QMARK_))
{var idx__8709 = cljs.core.array_map_index_of.call(null,tcoll,k);
if((idx__8709 === -1))
{return not_found;
} else
{return (this__8708.arr[(idx__8709 + 1)]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__8710 = this;
if(cljs.core.truth_(this__8710.editable_QMARK_))
{return cljs.core.quot.call(null,this__8710.len,2);
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientArrayMap;
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out__8715 = cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY);
var i__8716 = 0;
while(true){
if((i__8716 < len))
{{
var G__8717 = cljs.core.assoc_BANG_.call(null,out__8715,(arr[i__8716]),(arr[(i__8716 + 1)]));
var G__8718 = (i__8716 + 2);
out__8715 = G__8717;
i__8716 = G__8718;
continue;
}
} else
{return out__8715;
}
break;
}
});

goog.provide('cljs.core.Box');

/**
* @constructor
*/
cljs.core.Box = (function (val){
this.val = val;
})
cljs.core.Box.cljs$lang$type = true;
cljs.core.Box.cljs$lang$ctorPrSeq = (function (this__2324__auto__){
return cljs.core.list.call(null,"cljs.core/Box");
});
cljs.core.Box.cljs$lang$ctorPrWriter = (function (this__2324__auto__,writer__2325__auto__){
return cljs.core._write.call(null,writer__2325__auto__,"cljs.core/Box");
});
cljs.core.Box;
cljs.core.key_test = (function key_test(key,other){
if(goog.isString(key))
{return (key === other);
} else
{return cljs.core._EQ_.call(null,key,other);
}
});
cljs.core.mask = (function mask(hash,shift){
return ((hash >>> shift) & 31);
});
cljs.core.clone_and_set = (function() {
var clone_and_set = null;
var clone_and_set__3 = (function (arr,i,a){
var G__8723__8724 = arr.slice();
(G__8723__8724[i] = a);
return G__8723__8724;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__8725__8726 = arr.slice();
(G__8725__8726[i] = a);
(G__8725__8726[j] = b);
return G__8725__8726;
});
clone_and_set = function(arr,i,a,j,b){
switch(arguments.length){
case 3:
return clone_and_set__3.call(this,arr,i,a);
case 5:
return clone_and_set__5.call(this,arr,i,a,j,b);
}
throw('Invalid arity: ' + arguments.length);
};
clone_and_set.cljs$lang$arity$3 = clone_and_set__3;
clone_and_set.cljs$lang$arity$5 = clone_and_set__5;
return clone_and_set;
})()
;
cljs.core.remove_pair = (function remove_pair(arr,i){
var new_arr__8728 = cljs.core.make_array.call(null,(arr.length - 2));
cljs.core.array_copy.call(null,arr,0,new_arr__8728,0,(2 * i));
cljs.core.array_copy.call(null,arr,(2 * (i + 1)),new_arr__8728,(2 * i),(new_arr__8728.length - (2 * i)));
return new_arr__8728;
});
cljs.core.bitmap_indexed_node_index = (function bitmap_indexed_node_index(bitmap,bit){
return cljs.core.bit_count.call(null,(bitmap & (bit - 1)));
});
cljs.core.bitpos = (function bitpos(hash,shift){
return (1 << ((hash >>> shift) & 0x01f));
});
cljs.core.edit_and_set = (function() {
var edit_and_set = null;
var edit_and_set__4 = (function (inode,edit,i,a){
var editable__8731 = inode.ensure_editable(edit);
(editable__8731.arr[i] = a);
return editable__8731;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable__8732 = inode.ensure_editable(edit);
(editable__8732.arr[i] = a);
(editable__8732.arr[j] = b);
return editable__8732;
});
edit_and_set = function(inode,edit,i,a,j,b){
switch(arguments.length){
case 4:
return edit_and_set__4.call(this,inode,edit,i,a);
case 6:
return edit_and_set__6.call(this,inode,edit,i,a,j,b);
}
throw('Invalid arity: ' + arguments.length);
};
edit_and_set.cljs$lang$arity$4 = edit_and_set__4;
edit_and_set.cljs$lang$arity$6 = edit_and_set__6;
return edit_and_set;
})()
;
cljs.core.inode_kv_reduce = (function inode_kv_reduce(arr,f,init){
var len__8739 = arr.length;
var i__8740 = 0;
var init__8741 = init;
while(true){
if((i__8740 < len__8739))
{var init__8744 = (function (){var k__8742 = (arr[i__8740]);
if(!((k__8742 == null)))
{return f.call(null,init__8741,k__8742,(arr[(i__8740 + 1)]));
} else
{var node__8743 = (arr[(i__8740 + 1)]);
if(!((node__8743 == null)))
{return node__8743.kv_reduce(f,init__8741);
} else
{return init__8741;
}
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__8744))
{return cljs.core.deref.call(null,init__8744);
} else
{{
var G__8745 = (i__8740 + 2);
var G__8746 = init__8744;
i__8740 = G__8745;
init__8741 = G__8746;
continue;
}
}
} else
{return init__8741;
}
break;
}
});

goog.provide('cljs.core.BitmapIndexedNode');

/**
* @constructor
*/
cljs.core.BitmapIndexedNode = (function (edit,bitmap,arr){
this.edit = edit;
this.bitmap = bitmap;
this.arr = arr;
})
cljs.core.BitmapIndexedNode.cljs$lang$type = true;
cljs.core.BitmapIndexedNode.cljs$lang$ctorPrSeq = (function (this__2322__auto__){
return cljs.core.list.call(null,"cljs.core/BitmapIndexedNode");
});
cljs.core.BitmapIndexedNode.cljs$lang$ctorPrWriter = (function (this__2322__auto__,writer__2323__auto__){
return cljs.core._write.call(null,writer__2323__auto__,"cljs.core/BitmapIndexedNode");
});
cljs.core.BitmapIndexedNode.prototype.edit_and_remove_pair = (function (e,bit,i){
var this__8747 = this;
var inode__8748 = this;
if((this__8747.bitmap === bit))
{return null;
} else
{var editable__8749 = inode__8748.ensure_editable(e);
var earr__8750 = editable__8749.arr;
var len__8751 = earr__8750.length;
editable__8749.bitmap = (bit ^ editable__8749.bitmap);
cljs.core.array_copy.call(null,earr__8750,(2 * (i + 1)),earr__8750,(2 * i),(len__8751 - (2 * (i + 1))));
(earr__8750[(len__8751 - 2)] = null);
(earr__8750[(len__8751 - 1)] = null);
return editable__8749;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__8752 = this;
var inode__8753 = this;
var bit__8754 = (1 << ((hash >>> shift) & 0x01f));
var idx__8755 = cljs.core.bitmap_indexed_node_index.call(null,this__8752.bitmap,bit__8754);
if(((this__8752.bitmap & bit__8754) === 0))
{var n__8756 = cljs.core.bit_count.call(null,this__8752.bitmap);
if(((2 * n__8756) < this__8752.arr.length))
{var editable__8757 = inode__8753.ensure_editable(edit);
var earr__8758 = editable__8757.arr;
added_leaf_QMARK_.val = true;
cljs.core.array_copy_downward.call(null,earr__8758,(2 * idx__8755),earr__8758,(2 * (idx__8755 + 1)),(2 * (n__8756 - idx__8755)));
(earr__8758[(2 * idx__8755)] = key);
(earr__8758[((2 * idx__8755) + 1)] = val);
editable__8757.bitmap = (editable__8757.bitmap | bit__8754);
return editable__8757;
} else
{if((n__8756 >= 16))
{var nodes__8759 = cljs.core.make_array.call(null,32);
var jdx__8760 = ((hash >>> shift) & 0x01f);
(nodes__8759[jdx__8760] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
var i__8761 = 0;
var j__8762 = 0;
while(true){
if((i__8761 < 32))
{if((((this__8752.bitmap >>> i__8761) & 1) === 0))
{{
var G__8815 = (i__8761 + 1);
var G__8816 = j__8762;
i__8761 = G__8815;
j__8762 = G__8816;
continue;
}
} else
{(nodes__8759[i__8761] = ((!(((this__8752.arr[j__8762]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),cljs.core.hash.call(null,(this__8752.arr[j__8762])),(this__8752.arr[j__8762]),(this__8752.arr[(j__8762 + 1)]),added_leaf_QMARK_):(this__8752.arr[(j__8762 + 1)])));
{
var G__8817 = (i__8761 + 1);
var G__8818 = (j__8762 + 2);
i__8761 = G__8817;
j__8762 = G__8818;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit,(n__8756 + 1),nodes__8759));
} else
{if("\uFDD0'else")
{var new_arr__8763 = cljs.core.make_array.call(null,(2 * (n__8756 + 4)));
cljs.core.array_copy.call(null,this__8752.arr,0,new_arr__8763,0,(2 * idx__8755));
(new_arr__8763[(2 * idx__8755)] = key);
(new_arr__8763[((2 * idx__8755) + 1)] = val);
cljs.core.array_copy.call(null,this__8752.arr,(2 * idx__8755),new_arr__8763,(2 * (idx__8755 + 1)),(2 * (n__8756 - idx__8755)));
added_leaf_QMARK_.val = true;
var editable__8764 = inode__8753.ensure_editable(edit);
editable__8764.arr = new_arr__8763;
editable__8764.bitmap = (editable__8764.bitmap | bit__8754);
return editable__8764;
} else
{return null;
}
}
}
} else
{var key_or_nil__8765 = (this__8752.arr[(2 * idx__8755)]);
var val_or_node__8766 = (this__8752.arr[((2 * idx__8755) + 1)]);
if((key_or_nil__8765 == null))
{var n__8767 = val_or_node__8766.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__8767 === val_or_node__8766))
{return inode__8753;
} else
{return cljs.core.edit_and_set.call(null,inode__8753,edit,((2 * idx__8755) + 1),n__8767);
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__8765))
{if((val === val_or_node__8766))
{return inode__8753;
} else
{return cljs.core.edit_and_set.call(null,inode__8753,edit,((2 * idx__8755) + 1),val);
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return cljs.core.edit_and_set.call(null,inode__8753,edit,(2 * idx__8755),null,((2 * idx__8755) + 1),cljs.core.create_node.call(null,edit,(shift + 5),key_or_nil__8765,val_or_node__8766,hash,key,val));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var this__8768 = this;
var inode__8769 = this;
return cljs.core.create_inode_seq.call(null,this__8768.arr);
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__8770 = this;
var inode__8771 = this;
var bit__8772 = (1 << ((hash >>> shift) & 0x01f));
if(((this__8770.bitmap & bit__8772) === 0))
{return inode__8771;
} else
{var idx__8773 = cljs.core.bitmap_indexed_node_index.call(null,this__8770.bitmap,bit__8772);
var key_or_nil__8774 = (this__8770.arr[(2 * idx__8773)]);
var val_or_node__8775 = (this__8770.arr[((2 * idx__8773) + 1)]);
if((key_or_nil__8774 == null))
{var n__8776 = val_or_node__8775.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__8776 === val_or_node__8775))
{return inode__8771;
} else
{if(!((n__8776 == null)))
{return cljs.core.edit_and_set.call(null,inode__8771,edit,((2 * idx__8773) + 1),n__8776);
} else
{if((this__8770.bitmap === bit__8772))
{return null;
} else
{if("\uFDD0'else")
{return inode__8771.edit_and_remove_pair(edit,bit__8772,idx__8773);
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__8774))
{(removed_leaf_QMARK_[0] = true);
return inode__8771.edit_and_remove_pair(edit,bit__8772,idx__8773);
} else
{if("\uFDD0'else")
{return inode__8771;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var this__8777 = this;
var inode__8778 = this;
if((e === this__8777.edit))
{return inode__8778;
} else
{var n__8779 = cljs.core.bit_count.call(null,this__8777.bitmap);
var new_arr__8780 = cljs.core.make_array.call(null,(((n__8779 < 0))?4:(2 * (n__8779 + 1))));
cljs.core.array_copy.call(null,this__8777.arr,0,new_arr__8780,0,(2 * n__8779));
return (new cljs.core.BitmapIndexedNode(e,this__8777.bitmap,new_arr__8780));
}
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var this__8781 = this;
var inode__8782 = this;
return cljs.core.inode_kv_reduce.call(null,this__8781.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__8783 = this;
var inode__8784 = this;
var bit__8785 = (1 << ((hash >>> shift) & 0x01f));
if(((this__8783.bitmap & bit__8785) === 0))
{return not_found;
} else
{var idx__8786 = cljs.core.bitmap_indexed_node_index.call(null,this__8783.bitmap,bit__8785);
var key_or_nil__8787 = (this__8783.arr[(2 * idx__8786)]);
var val_or_node__8788 = (this__8783.arr[((2 * idx__8786) + 1)]);
if((key_or_nil__8787 == null))
{return val_or_node__8788.inode_find((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__8787))
{return cljs.core.PersistentVector.fromArray([key_or_nil__8787,val_or_node__8788], true);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_without = (function (shift,hash,key){
var this__8789 = this;
var inode__8790 = this;
var bit__8791 = (1 << ((hash >>> shift) & 0x01f));
if(((this__8789.bitmap & bit__8791) === 0))
{return inode__8790;
} else
{var idx__8792 = cljs.core.bitmap_indexed_node_index.call(null,this__8789.bitmap,bit__8791);
var key_or_nil__8793 = (this__8789.arr[(2 * idx__8792)]);
var val_or_node__8794 = (this__8789.arr[((2 * idx__8792) + 1)]);
if((key_or_nil__8793 == null))
{var n__8795 = val_or_node__8794.inode_without((shift + 5),hash,key);
if((n__8795 === val_or_node__8794))
{return inode__8790;
} else
{if(!((n__8795 == null)))
{return (new cljs.core.BitmapIndexedNode(null,this__8789.bitmap,cljs.core.clone_and_set.call(null,this__8789.arr,((2 * idx__8792) + 1),n__8795)));
} else
{if((this__8789.bitmap === bit__8791))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.BitmapIndexedNode(null,(this__8789.bitmap ^ bit__8791),cljs.core.remove_pair.call(null,this__8789.arr,idx__8792)));
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__8793))
{return (new cljs.core.BitmapIndexedNode(null,(this__8789.bitmap ^ bit__8791),cljs.core.remove_pair.call(null,this__8789.arr,idx__8792)));
} else
{if("\uFDD0'else")
{return inode__8790;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__8796 = this;
var inode__8797 = this;
var bit__8798 = (1 << ((hash >>> shift) & 0x01f));
var idx__8799 = cljs.core.bitmap_indexed_node_index.call(null,this__8796.bitmap,bit__8798);
if(((this__8796.bitmap & bit__8798) === 0))
{var n__8800 = cljs.core.bit_count.call(null,this__8796.bitmap);
if((n__8800 >= 16))
{var nodes__8801 = cljs.core.make_array.call(null,32);
var jdx__8802 = ((hash >>> shift) & 0x01f);
(nodes__8801[jdx__8802] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_));
var i__8803 = 0;
var j__8804 = 0;
while(true){
if((i__8803 < 32))
{if((((this__8796.bitmap >>> i__8803) & 1) === 0))
{{
var G__8819 = (i__8803 + 1);
var G__8820 = j__8804;
i__8803 = G__8819;
j__8804 = G__8820;
continue;
}
} else
{(nodes__8801[i__8803] = ((!(((this__8796.arr[j__8804]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),cljs.core.hash.call(null,(this__8796.arr[j__8804])),(this__8796.arr[j__8804]),(this__8796.arr[(j__8804 + 1)]),added_leaf_QMARK_):(this__8796.arr[(j__8804 + 1)])));
{
var G__8821 = (i__8803 + 1);
var G__8822 = (j__8804 + 2);
i__8803 = G__8821;
j__8804 = G__8822;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n__8800 + 1),nodes__8801));
} else
{var new_arr__8805 = cljs.core.make_array.call(null,(2 * (n__8800 + 1)));
cljs.core.array_copy.call(null,this__8796.arr,0,new_arr__8805,0,(2 * idx__8799));
(new_arr__8805[(2 * idx__8799)] = key);
(new_arr__8805[((2 * idx__8799) + 1)] = val);
cljs.core.array_copy.call(null,this__8796.arr,(2 * idx__8799),new_arr__8805,(2 * (idx__8799 + 1)),(2 * (n__8800 - idx__8799)));
added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,(this__8796.bitmap | bit__8798),new_arr__8805));
}
} else
{var key_or_nil__8806 = (this__8796.arr[(2 * idx__8799)]);
var val_or_node__8807 = (this__8796.arr[((2 * idx__8799) + 1)]);
if((key_or_nil__8806 == null))
{var n__8808 = val_or_node__8807.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__8808 === val_or_node__8807))
{return inode__8797;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__8796.bitmap,cljs.core.clone_and_set.call(null,this__8796.arr,((2 * idx__8799) + 1),n__8808)));
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__8806))
{if((val === val_or_node__8807))
{return inode__8797;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__8796.bitmap,cljs.core.clone_and_set.call(null,this__8796.arr,((2 * idx__8799) + 1),val)));
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,this__8796.bitmap,cljs.core.clone_and_set.call(null,this__8796.arr,(2 * idx__8799),null,((2 * idx__8799) + 1),cljs.core.create_node.call(null,(shift + 5),key_or_nil__8806,val_or_node__8807,hash,key,val))));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__8809 = this;
var inode__8810 = this;
var bit__8811 = (1 << ((hash >>> shift) & 0x01f));
if(((this__8809.bitmap & bit__8811) === 0))
{return not_found;
} else
{var idx__8812 = cljs.core.bitmap_indexed_node_index.call(null,this__8809.bitmap,bit__8811);
var key_or_nil__8813 = (this__8809.arr[(2 * idx__8812)]);
var val_or_node__8814 = (this__8809.arr[((2 * idx__8812) + 1)]);
if((key_or_nil__8813 == null))
{return val_or_node__8814.inode_lookup((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__8813))
{return val_or_node__8814;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode;
cljs.core.BitmapIndexedNode.EMPTY = (new cljs.core.BitmapIndexedNode(null,0,cljs.core.make_array.call(null,0)));
cljs.core.pack_array_node = (function pack_array_node(array_node,edit,idx){
var arr__8830 = array_node.arr;
var len__8831 = (2 * (array_node.cnt - 1));
var new_arr__8832 = cljs.core.make_array.call(null,len__8831);
var i__8833 = 0;
var j__8834 = 1;
var bitmap__8835 = 0;
while(true){
if((i__8833 < len__8831))
{if((function (){var and__3822__auto____8836 = !((i__8833 === idx));
if(and__3822__auto____8836)
{return !(((arr__8830[i__8833]) == null));
} else
{return and__3822__auto____8836;
}
})())
{(new_arr__8832[j__8834] = (arr__8830[i__8833]));
{
var G__8837 = (i__8833 + 1);
var G__8838 = (j__8834 + 2);
var G__8839 = (bitmap__8835 | (1 << i__8833));
i__8833 = G__8837;
j__8834 = G__8838;
bitmap__8835 = G__8839;
continue;
}
} else
{{
var G__8840 = (i__8833 + 1);
var G__8841 = j__8834;
var G__8842 = bitmap__8835;
i__8833 = G__8840;
j__8834 = G__8841;
bitmap__8835 = G__8842;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap__8835,new_arr__8832));
}
break;
}
});

goog.provide('cljs.core.ArrayNode');

/**
* @constructor
*/
cljs.core.ArrayNode = (function (edit,cnt,arr){
this.edit = edit;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.ArrayNode.cljs$lang$type = true;
cljs.core.ArrayNode.cljs$lang$ctorPrSeq = (function (this__2322__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNode");
});
cljs.core.ArrayNode.cljs$lang$ctorPrWriter = (function (this__2322__auto__,writer__2323__auto__){
return cljs.core._write.call(null,writer__2323__auto__,"cljs.core/ArrayNode");
});
cljs.core.ArrayNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__8843 = this;
var inode__8844 = this;
var idx__8845 = ((hash >>> shift) & 0x01f);
var node__8846 = (this__8843.arr[idx__8845]);
if((node__8846 == null))
{var editable__8847 = cljs.core.edit_and_set.call(null,inode__8844,edit,idx__8845,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
editable__8847.cnt = (editable__8847.cnt + 1);
return editable__8847;
} else
{var n__8848 = node__8846.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__8848 === node__8846))
{return inode__8844;
} else
{return cljs.core.edit_and_set.call(null,inode__8844,edit,idx__8845,n__8848);
}
}
});
cljs.core.ArrayNode.prototype.inode_seq = (function (){
var this__8849 = this;
var inode__8850 = this;
return cljs.core.create_array_node_seq.call(null,this__8849.arr);
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__8851 = this;
var inode__8852 = this;
var idx__8853 = ((hash >>> shift) & 0x01f);
var node__8854 = (this__8851.arr[idx__8853]);
if((node__8854 == null))
{return inode__8852;
} else
{var n__8855 = node__8854.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__8855 === node__8854))
{return inode__8852;
} else
{if((n__8855 == null))
{if((this__8851.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__8852,edit,idx__8853);
} else
{var editable__8856 = cljs.core.edit_and_set.call(null,inode__8852,edit,idx__8853,n__8855);
editable__8856.cnt = (editable__8856.cnt - 1);
return editable__8856;
}
} else
{if("\uFDD0'else")
{return cljs.core.edit_and_set.call(null,inode__8852,edit,idx__8853,n__8855);
} else
{return null;
}
}
}
}
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var this__8857 = this;
var inode__8858 = this;
if((e === this__8857.edit))
{return inode__8858;
} else
{return (new cljs.core.ArrayNode(e,this__8857.cnt,this__8857.arr.slice()));
}
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var this__8859 = this;
var inode__8860 = this;
var len__8861 = this__8859.arr.length;
var i__8862 = 0;
var init__8863 = init;
while(true){
if((i__8862 < len__8861))
{var node__8864 = (this__8859.arr[i__8862]);
if(!((node__8864 == null)))
{var init__8865 = node__8864.kv_reduce(f,init__8863);
if(cljs.core.reduced_QMARK_.call(null,init__8865))
{return cljs.core.deref.call(null,init__8865);
} else
{{
var G__8884 = (i__8862 + 1);
var G__8885 = init__8865;
i__8862 = G__8884;
init__8863 = G__8885;
continue;
}
}
} else
{return null;
}
} else
{return init__8863;
}
break;
}
});
cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__8866 = this;
var inode__8867 = this;
var idx__8868 = ((hash >>> shift) & 0x01f);
var node__8869 = (this__8866.arr[idx__8868]);
if(!((node__8869 == null)))
{return node__8869.inode_find((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var this__8870 = this;
var inode__8871 = this;
var idx__8872 = ((hash >>> shift) & 0x01f);
var node__8873 = (this__8870.arr[idx__8872]);
if(!((node__8873 == null)))
{var n__8874 = node__8873.inode_without((shift + 5),hash,key);
if((n__8874 === node__8873))
{return inode__8871;
} else
{if((n__8874 == null))
{if((this__8870.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__8871,null,idx__8872);
} else
{return (new cljs.core.ArrayNode(null,(this__8870.cnt - 1),cljs.core.clone_and_set.call(null,this__8870.arr,idx__8872,n__8874)));
}
} else
{if("\uFDD0'else")
{return (new cljs.core.ArrayNode(null,this__8870.cnt,cljs.core.clone_and_set.call(null,this__8870.arr,idx__8872,n__8874)));
} else
{return null;
}
}
}
} else
{return inode__8871;
}
});
cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__8875 = this;
var inode__8876 = this;
var idx__8877 = ((hash >>> shift) & 0x01f);
var node__8878 = (this__8875.arr[idx__8877]);
if((node__8878 == null))
{return (new cljs.core.ArrayNode(null,(this__8875.cnt + 1),cljs.core.clone_and_set.call(null,this__8875.arr,idx__8877,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_))));
} else
{var n__8879 = node__8878.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__8879 === node__8878))
{return inode__8876;
} else
{return (new cljs.core.ArrayNode(null,this__8875.cnt,cljs.core.clone_and_set.call(null,this__8875.arr,idx__8877,n__8879)));
}
}
});
cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__8880 = this;
var inode__8881 = this;
var idx__8882 = ((hash >>> shift) & 0x01f);
var node__8883 = (this__8880.arr[idx__8882]);
if(!((node__8883 == null)))
{return node__8883.inode_lookup((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode;
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim__8888 = (2 * cnt);
var i__8889 = 0;
while(true){
if((i__8889 < lim__8888))
{if(cljs.core.key_test.call(null,key,(arr[i__8889])))
{return i__8889;
} else
{{
var G__8890 = (i__8889 + 2);
i__8889 = G__8890;
continue;
}
}
} else
{return -1;
}
break;
}
});

goog.provide('cljs.core.HashCollisionNode');

/**
* @constructor
*/
cljs.core.HashCollisionNode = (function (edit,collision_hash,cnt,arr){
this.edit = edit;
this.collision_hash = collision_hash;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.HashCollisionNode.cljs$lang$type = true;
cljs.core.HashCollisionNode.cljs$lang$ctorPrSeq = (function (this__2322__auto__){
return cljs.core.list.call(null,"cljs.core/HashCollisionNode");
});
cljs.core.HashCollisionNode.cljs$lang$ctorPrWriter = (function (this__2322__auto__,writer__2323__auto__){
return cljs.core._write.call(null,writer__2323__auto__,"cljs.core/HashCollisionNode");
});
cljs.core.HashCollisionNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__8891 = this;
var inode__8892 = this;
if((hash === this__8891.collision_hash))
{var idx__8893 = cljs.core.hash_collision_node_find_index.call(null,this__8891.arr,this__8891.cnt,key);
if((idx__8893 === -1))
{if((this__8891.arr.length > (2 * this__8891.cnt)))
{var editable__8894 = cljs.core.edit_and_set.call(null,inode__8892,edit,(2 * this__8891.cnt),key,((2 * this__8891.cnt) + 1),val);
added_leaf_QMARK_.val = true;
editable__8894.cnt = (editable__8894.cnt + 1);
return editable__8894;
} else
{var len__8895 = this__8891.arr.length;
var new_arr__8896 = cljs.core.make_array.call(null,(len__8895 + 2));
cljs.core.array_copy.call(null,this__8891.arr,0,new_arr__8896,0,len__8895);
(new_arr__8896[len__8895] = key);
(new_arr__8896[(len__8895 + 1)] = val);
added_leaf_QMARK_.val = true;
return inode__8892.ensure_editable_array(edit,(this__8891.cnt + 1),new_arr__8896);
}
} else
{if(((this__8891.arr[(idx__8893 + 1)]) === val))
{return inode__8892;
} else
{return cljs.core.edit_and_set.call(null,inode__8892,edit,(idx__8893 + 1),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,(1 << ((this__8891.collision_hash >>> shift) & 0x01f)),[null,inode__8892,null,null])).inode_assoc_BANG_(edit,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var this__8897 = this;
var inode__8898 = this;
return cljs.core.create_inode_seq.call(null,this__8897.arr);
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__8899 = this;
var inode__8900 = this;
var idx__8901 = cljs.core.hash_collision_node_find_index.call(null,this__8899.arr,this__8899.cnt,key);
if((idx__8901 === -1))
{return inode__8900;
} else
{(removed_leaf_QMARK_[0] = true);
if((this__8899.cnt === 1))
{return null;
} else
{var editable__8902 = inode__8900.ensure_editable(edit);
var earr__8903 = editable__8902.arr;
(earr__8903[idx__8901] = (earr__8903[((2 * this__8899.cnt) - 2)]));
(earr__8903[(idx__8901 + 1)] = (earr__8903[((2 * this__8899.cnt) - 1)]));
(earr__8903[((2 * this__8899.cnt) - 1)] = null);
(earr__8903[((2 * this__8899.cnt) - 2)] = null);
editable__8902.cnt = (editable__8902.cnt - 1);
return editable__8902;
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){
var this__8904 = this;
var inode__8905 = this;
if((e === this__8904.edit))
{return inode__8905;
} else
{var new_arr__8906 = cljs.core.make_array.call(null,(2 * (this__8904.cnt + 1)));
cljs.core.array_copy.call(null,this__8904.arr,0,new_arr__8906,0,(2 * this__8904.cnt));
return (new cljs.core.HashCollisionNode(e,this__8904.collision_hash,this__8904.cnt,new_arr__8906));
}
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var this__8907 = this;
var inode__8908 = this;
return cljs.core.inode_kv_reduce.call(null,this__8907.arr,f,init);
});
cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__8909 = this;
var inode__8910 = this;
var idx__8911 = cljs.core.hash_collision_node_find_index.call(null,this__8909.arr,this__8909.cnt,key);
if((idx__8911 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__8909.arr[idx__8911])))
{return cljs.core.PersistentVector.fromArray([(this__8909.arr[idx__8911]),(this__8909.arr[(idx__8911 + 1)])], true);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_without = (function (shift,hash,key){
var this__8912 = this;
var inode__8913 = this;
var idx__8914 = cljs.core.hash_collision_node_find_index.call(null,this__8912.arr,this__8912.cnt,key);
if((idx__8914 === -1))
{return inode__8913;
} else
{if((this__8912.cnt === 1))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.HashCollisionNode(null,this__8912.collision_hash,(this__8912.cnt - 1),cljs.core.remove_pair.call(null,this__8912.arr,cljs.core.quot.call(null,idx__8914,2))));
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__8915 = this;
var inode__8916 = this;
if((hash === this__8915.collision_hash))
{var idx__8917 = cljs.core.hash_collision_node_find_index.call(null,this__8915.arr,this__8915.cnt,key);
if((idx__8917 === -1))
{var len__8918 = this__8915.arr.length;
var new_arr__8919 = cljs.core.make_array.call(null,(len__8918 + 2));
cljs.core.array_copy.call(null,this__8915.arr,0,new_arr__8919,0,len__8918);
(new_arr__8919[len__8918] = key);
(new_arr__8919[(len__8918 + 1)] = val);
added_leaf_QMARK_.val = true;
return (new cljs.core.HashCollisionNode(null,this__8915.collision_hash,(this__8915.cnt + 1),new_arr__8919));
} else
{if(cljs.core._EQ_.call(null,(this__8915.arr[idx__8917]),val))
{return inode__8916;
} else
{return (new cljs.core.HashCollisionNode(null,this__8915.collision_hash,this__8915.cnt,cljs.core.clone_and_set.call(null,this__8915.arr,(idx__8917 + 1),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((this__8915.collision_hash >>> shift) & 0x01f)),[null,inode__8916])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__8920 = this;
var inode__8921 = this;
var idx__8922 = cljs.core.hash_collision_node_find_index.call(null,this__8920.arr,this__8920.cnt,key);
if((idx__8922 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__8920.arr[idx__8922])))
{return (this__8920.arr[(idx__8922 + 1)]);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable_array = (function (e,count,array){
var this__8923 = this;
var inode__8924 = this;
if((e === this__8923.edit))
{this__8923.arr = array;
this__8923.cnt = count;
return inode__8924;
} else
{return (new cljs.core.HashCollisionNode(this__8923.edit,this__8923.collision_hash,count,array));
}
});
cljs.core.HashCollisionNode;
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash__8929 = cljs.core.hash.call(null,key1);
if((key1hash__8929 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__8929,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___8930 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash__8929,key1,val1,added_leaf_QMARK___8930).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK___8930);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash__8931 = cljs.core.hash.call(null,key1);
if((key1hash__8931 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__8931,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___8932 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash__8931,key1,val1,added_leaf_QMARK___8932).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK___8932);
}
});
create_node = function(edit,shift,key1,val1,key2hash,key2,val2){
switch(arguments.length){
case 6:
return create_node__6.call(this,edit,shift,key1,val1,key2hash,key2);
case 7:
return create_node__7.call(this,edit,shift,key1,val1,key2hash,key2,val2);
}
throw('Invalid arity: ' + arguments.length);
};
create_node.cljs$lang$arity$6 = create_node__6;
create_node.cljs$lang$arity$7 = create_node__7;
return create_node;
})()
;

goog.provide('cljs.core.NodeSeq');

/**
* @constructor
*/
cljs.core.NodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.NodeSeq.cljs$lang$type = true;
cljs.core.NodeSeq.cljs$lang$ctorPrSeq = (function (this__2322__auto__){
return cljs.core.list.call(null,"cljs.core/NodeSeq");
});
cljs.core.NodeSeq.cljs$lang$ctorPrWriter = (function (this__2322__auto__,writer__2323__auto__){
return cljs.core._write.call(null,writer__2323__auto__,"cljs.core/NodeSeq");
});
cljs.core.NodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8933 = this;
var h__2203__auto____8934 = this__8933.__hash;
if(!((h__2203__auto____8934 == null)))
{return h__2203__auto____8934;
} else
{var h__2203__auto____8935 = cljs.core.hash_coll.call(null,coll);
this__8933.__hash = h__2203__auto____8935;
return h__2203__auto____8935;
}
});
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8936 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.NodeSeq.prototype.toString = (function (){
var this__8937 = this;
var this__8938 = this;
return cljs.core.pr_str.call(null,this__8938);
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__8939 = this;
return this$;
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8940 = this;
if((this__8940.s == null))
{return cljs.core.PersistentVector.fromArray([(this__8940.nodes[this__8940.i]),(this__8940.nodes[(this__8940.i + 1)])], true);
} else
{return cljs.core.first.call(null,this__8940.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8941 = this;
if((this__8941.s == null))
{return cljs.core.create_inode_seq.call(null,this__8941.nodes,(this__8941.i + 2),null);
} else
{return cljs.core.create_inode_seq.call(null,this__8941.nodes,this__8941.i,cljs.core.next.call(null,this__8941.s));
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8942 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8943 = this;
return (new cljs.core.NodeSeq(meta,this__8943.nodes,this__8943.i,this__8943.s,this__8943.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8944 = this;
return this__8944.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8945 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8945.meta);
});
cljs.core.NodeSeq;
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.call(null,nodes,0,null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null))
{var len__8952 = nodes.length;
var j__8953 = i;
while(true){
if((j__8953 < len__8952))
{if(!(((nodes[j__8953]) == null)))
{return (new cljs.core.NodeSeq(null,nodes,j__8953,null,null));
} else
{var temp__3971__auto____8954 = (nodes[(j__8953 + 1)]);
if(cljs.core.truth_(temp__3971__auto____8954))
{var node__8955 = temp__3971__auto____8954;
var temp__3971__auto____8956 = node__8955.inode_seq();
if(cljs.core.truth_(temp__3971__auto____8956))
{var node_seq__8957 = temp__3971__auto____8956;
return (new cljs.core.NodeSeq(null,nodes,(j__8953 + 2),node_seq__8957,null));
} else
{{
var G__8958 = (j__8953 + 2);
j__8953 = G__8958;
continue;
}
}
} else
{{
var G__8959 = (j__8953 + 2);
j__8953 = G__8959;
continue;
}
}
}
} else
{return null;
}
break;
}
} else
{return (new cljs.core.NodeSeq(null,nodes,i,s,null));
}
});
create_inode_seq = function(nodes,i,s){
switch(arguments.length){
case 1:
return create_inode_seq__1.call(this,nodes);
case 3:
return create_inode_seq__3.call(this,nodes,i,s);
}
throw('Invalid arity: ' + arguments.length);
};
create_inode_seq.cljs$lang$arity$1 = create_inode_seq__1;
create_inode_seq.cljs$lang$arity$3 = create_inode_seq__3;
return create_inode_seq;
})()
;

goog.provide('cljs.core.ArrayNodeSeq');

/**
* @constructor
*/
cljs.core.ArrayNodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.ArrayNodeSeq.cljs$lang$type = true;
cljs.core.ArrayNodeSeq.cljs$lang$ctorPrSeq = (function (this__2322__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNodeSeq");
});
cljs.core.ArrayNodeSeq.cljs$lang$ctorPrWriter = (function (this__2322__auto__,writer__2323__auto__){
return cljs.core._write.call(null,writer__2323__auto__,"cljs.core/ArrayNodeSeq");
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8960 = this;
var h__2203__auto____8961 = this__8960.__hash;
if(!((h__2203__auto____8961 == null)))
{return h__2203__auto____8961;
} else
{var h__2203__auto____8962 = cljs.core.hash_coll.call(null,coll);
this__8960.__hash = h__2203__auto____8962;
return h__2203__auto____8962;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8963 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var this__8964 = this;
var this__8965 = this;
return cljs.core.pr_str.call(null,this__8965);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__8966 = this;
return this$;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8967 = this;
return cljs.core.first.call(null,this__8967.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8968 = this;
return cljs.core.create_array_node_seq.call(null,null,this__8968.nodes,this__8968.i,cljs.core.next.call(null,this__8968.s));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8969 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8970 = this;
return (new cljs.core.ArrayNodeSeq(meta,this__8970.nodes,this__8970.i,this__8970.s,this__8970.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8971 = this;
return this__8971.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8972 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8972.meta);
});
cljs.core.ArrayNodeSeq;
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.call(null,null,nodes,0,null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null))
{var len__8979 = nodes.length;
var j__8980 = i;
while(true){
if((j__8980 < len__8979))
{var temp__3971__auto____8981 = (nodes[j__8980]);
if(cljs.core.truth_(temp__3971__auto____8981))
{var nj__8982 = temp__3971__auto____8981;
var temp__3971__auto____8983 = nj__8982.inode_seq();
if(cljs.core.truth_(temp__3971__auto____8983))
{var ns__8984 = temp__3971__auto____8983;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j__8980 + 1),ns__8984,null));
} else
{{
var G__8985 = (j__8980 + 1);
j__8980 = G__8985;
continue;
}
}
} else
{{
var G__8986 = (j__8980 + 1);
j__8980 = G__8986;
continue;
}
}
} else
{return null;
}
break;
}
} else
{return (new cljs.core.ArrayNodeSeq(meta,nodes,i,s,null));
}
});
create_array_node_seq = function(meta,nodes,i,s){
switch(arguments.length){
case 1:
return create_array_node_seq__1.call(this,meta);
case 4:
return create_array_node_seq__4.call(this,meta,nodes,i,s);
}
throw('Invalid arity: ' + arguments.length);
};
create_array_node_seq.cljs$lang$arity$1 = create_array_node_seq__1;
create_array_node_seq.cljs$lang$arity$4 = create_array_node_seq__4;
return create_array_node_seq;
})()
;

goog.provide('cljs.core.PersistentHashMap');

/**
* @constructor
*/
cljs.core.PersistentHashMap = (function (meta,cnt,root,has_nil_QMARK_,nil_val,__hash){
this.meta = meta;
this.cnt = cnt;
this.root = root;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 4;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
})
cljs.core.PersistentHashMap.cljs$lang$type = true;
cljs.core.PersistentHashMap.cljs$lang$ctorPrSeq = (function (this__2322__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashMap");
});
cljs.core.PersistentHashMap.cljs$lang$ctorPrWriter = (function (this__2322__auto__,writer__2323__auto__){
return cljs.core._write.call(null,writer__2323__auto__,"cljs.core/PersistentHashMap");
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__8989 = this;
return (new cljs.core.TransientHashMap({},this__8989.root,this__8989.cnt,this__8989.has_nil_QMARK_,this__8989.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8990 = this;
var h__2203__auto____8991 = this__8990.__hash;
if(!((h__2203__auto____8991 == null)))
{return h__2203__auto____8991;
} else
{var h__2203__auto____8992 = cljs.core.hash_imap.call(null,coll);
this__8990.__hash = h__2203__auto____8992;
return h__2203__auto____8992;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8993 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8994 = this;
if((k == null))
{if(this__8994.has_nil_QMARK_)
{return this__8994.nil_val;
} else
{return not_found;
}
} else
{if((this__8994.root == null))
{return not_found;
} else
{if("\uFDD0'else")
{return this__8994.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8995 = this;
if((k == null))
{if((function (){var and__3822__auto____8996 = this__8995.has_nil_QMARK_;
if(and__3822__auto____8996)
{return (v === this__8995.nil_val);
} else
{return and__3822__auto____8996;
}
})())
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__8995.meta,((this__8995.has_nil_QMARK_)?this__8995.cnt:(this__8995.cnt + 1)),this__8995.root,true,v,null));
}
} else
{var added_leaf_QMARK___8997 = (new cljs.core.Box(false));
var new_root__8998 = (((this__8995.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__8995.root).inode_assoc(0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___8997);
if((new_root__8998 === this__8995.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__8995.meta,((added_leaf_QMARK___8997.val)?(this__8995.cnt + 1):this__8995.cnt),new_root__8998,this__8995.has_nil_QMARK_,this__8995.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8999 = this;
if((k == null))
{return this__8999.has_nil_QMARK_;
} else
{if((this__8999.root == null))
{return false;
} else
{if("\uFDD0'else")
{return !((this__8999.root.inode_lookup(0,cljs.core.hash.call(null,k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__9022 = null;
var G__9022__2 = (function (this_sym9000,k){
var this__9002 = this;
var this_sym9000__9003 = this;
var coll__9004 = this_sym9000__9003;
return coll__9004.cljs$core$ILookup$_lookup$arity$2(coll__9004,k);
});
var G__9022__3 = (function (this_sym9001,k,not_found){
var this__9002 = this;
var this_sym9001__9005 = this;
var coll__9006 = this_sym9001__9005;
return coll__9006.cljs$core$ILookup$_lookup$arity$3(coll__9006,k,not_found);
});
G__9022 = function(this_sym9001,k,not_found){
switch(arguments.length){
case 2:
return G__9022__2.call(this,this_sym9001,k);
case 3:
return G__9022__3.call(this,this_sym9001,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9022;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (this_sym8987,args8988){
var this__9007 = this;
return this_sym8987.call.apply(this_sym8987,[this_sym8987].concat(args8988.slice()));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__9008 = this;
var init__9009 = ((this__9008.has_nil_QMARK_)?f.call(null,init,null,this__9008.nil_val):init);
if(cljs.core.reduced_QMARK_.call(null,init__9009))
{return cljs.core.deref.call(null,init__9009);
} else
{if(!((this__9008.root == null)))
{return this__9008.root.kv_reduce(f,init__9009);
} else
{if("\uFDD0'else")
{return init__9009;
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__9010 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentHashMap.prototype.toString = (function (){
var this__9011 = this;
var this__9012 = this;
return cljs.core.pr_str.call(null,this__9012);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9013 = this;
if((this__9013.cnt > 0))
{var s__9014 = ((!((this__9013.root == null)))?this__9013.root.inode_seq():null);
if(this__9013.has_nil_QMARK_)
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([null,this__9013.nil_val], true),s__9014);
} else
{return s__9014;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9015 = this;
return this__9015.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9016 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9017 = this;
return (new cljs.core.PersistentHashMap(meta,this__9017.cnt,this__9017.root,this__9017.has_nil_QMARK_,this__9017.nil_val,this__9017.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9018 = this;
return this__9018.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9019 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,this__9019.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__9020 = this;
if((k == null))
{if(this__9020.has_nil_QMARK_)
{return (new cljs.core.PersistentHashMap(this__9020.meta,(this__9020.cnt - 1),this__9020.root,false,null,null));
} else
{return coll;
}
} else
{if((this__9020.root == null))
{return coll;
} else
{if("\uFDD0'else")
{var new_root__9021 = this__9020.root.inode_without(0,cljs.core.hash.call(null,k),k);
if((new_root__9021 === this__9020.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__9020.meta,(this__9020.cnt - 1),new_root__9021,this__9020.has_nil_QMARK_,this__9020.nil_val,null));
}
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap;
cljs.core.PersistentHashMap.EMPTY = (new cljs.core.PersistentHashMap(null,0,null,false,null,0));
cljs.core.PersistentHashMap.fromArrays = (function (ks,vs){
var len__9023 = ks.length;
var i__9024 = 0;
var out__9025 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i__9024 < len__9023))
{{
var G__9026 = (i__9024 + 1);
var G__9027 = cljs.core.assoc_BANG_.call(null,out__9025,(ks[i__9024]),(vs[i__9024]));
i__9024 = G__9026;
out__9025 = G__9027;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9025);
}
break;
}
});

goog.provide('cljs.core.TransientHashMap');

/**
* @constructor
*/
cljs.core.TransientHashMap = (function (edit,root,count,has_nil_QMARK_,nil_val){
this.edit = edit;
this.root = root;
this.count = count;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.cljs$lang$protocol_mask$partition1$ = 56;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientHashMap.cljs$lang$type = true;
cljs.core.TransientHashMap.cljs$lang$ctorPrSeq = (function (this__2322__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashMap");
});
cljs.core.TransientHashMap.cljs$lang$ctorPrWriter = (function (this__2322__auto__,writer__2323__auto__){
return cljs.core._write.call(null,writer__2323__auto__,"cljs.core/TransientHashMap");
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__9028 = this;
return tcoll.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__9029 = this;
return tcoll.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var this__9030 = this;
return tcoll.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__9031 = this;
return tcoll.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__9032 = this;
if((k == null))
{if(this__9032.has_nil_QMARK_)
{return this__9032.nil_val;
} else
{return null;
}
} else
{if((this__9032.root == null))
{return null;
} else
{return this__9032.root.inode_lookup(0,cljs.core.hash.call(null,k),k);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__9033 = this;
if((k == null))
{if(this__9033.has_nil_QMARK_)
{return this__9033.nil_val;
} else
{return not_found;
}
} else
{if((this__9033.root == null))
{return not_found;
} else
{return this__9033.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9034 = this;
if(this__9034.edit)
{return this__9034.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var this__9035 = this;
var tcoll__9036 = this;
if(this__9035.edit)
{if((function (){var G__9037__9038 = o;
if(G__9037__9038)
{if((function (){var or__3824__auto____9039 = (G__9037__9038.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____9039)
{return or__3824__auto____9039;
} else
{return G__9037__9038.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__9037__9038.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__9037__9038);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__9037__9038);
}
})())
{return tcoll__9036.assoc_BANG_(cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__9040 = cljs.core.seq.call(null,o);
var tcoll__9041 = tcoll__9036;
while(true){
var temp__3971__auto____9042 = cljs.core.first.call(null,es__9040);
if(cljs.core.truth_(temp__3971__auto____9042))
{var e__9043 = temp__3971__auto____9042;
{
var G__9054 = cljs.core.next.call(null,es__9040);
var G__9055 = tcoll__9041.assoc_BANG_(cljs.core.key.call(null,e__9043),cljs.core.val.call(null,e__9043));
es__9040 = G__9054;
tcoll__9041 = G__9055;
continue;
}
} else
{return tcoll__9041;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var this__9044 = this;
var tcoll__9045 = this;
if(this__9044.edit)
{if((k == null))
{if((this__9044.nil_val === v))
{} else
{this__9044.nil_val = v;
}
if(this__9044.has_nil_QMARK_)
{} else
{this__9044.count = (this__9044.count + 1);
this__9044.has_nil_QMARK_ = true;
}
return tcoll__9045;
} else
{var added_leaf_QMARK___9046 = (new cljs.core.Box(false));
var node__9047 = (((this__9044.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__9044.root).inode_assoc_BANG_(this__9044.edit,0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___9046);
if((node__9047 === this__9044.root))
{} else
{this__9044.root = node__9047;
}
if(added_leaf_QMARK___9046.val)
{this__9044.count = (this__9044.count + 1);
} else
{}
return tcoll__9045;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var this__9048 = this;
var tcoll__9049 = this;
if(this__9048.edit)
{if((k == null))
{if(this__9048.has_nil_QMARK_)
{this__9048.has_nil_QMARK_ = false;
this__9048.nil_val = null;
this__9048.count = (this__9048.count - 1);
return tcoll__9049;
} else
{return tcoll__9049;
}
} else
{if((this__9048.root == null))
{return tcoll__9049;
} else
{var removed_leaf_QMARK___9050 = (new cljs.core.Box(false));
var node__9051 = this__9048.root.inode_without_BANG_(this__9048.edit,0,cljs.core.hash.call(null,k),k,removed_leaf_QMARK___9050);
if((node__9051 === this__9048.root))
{} else
{this__9048.root = node__9051;
}
if(cljs.core.truth_((removed_leaf_QMARK___9050[0])))
{this__9048.count = (this__9048.count - 1);
} else
{}
return tcoll__9049;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var this__9052 = this;
var tcoll__9053 = this;
if(this__9052.edit)
{this__9052.edit = null;
return (new cljs.core.PersistentHashMap(null,this__9052.count,this__9052.root,this__9052.has_nil_QMARK_,this__9052.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientHashMap;
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t__9058 = node;
var stack__9059 = stack;
while(true){
if(!((t__9058 == null)))
{{
var G__9060 = ((ascending_QMARK_)?t__9058.left:t__9058.right);
var G__9061 = cljs.core.conj.call(null,stack__9059,t__9058);
t__9058 = G__9060;
stack__9059 = G__9061;
continue;
}
} else
{return stack__9059;
}
break;
}
});

goog.provide('cljs.core.PersistentTreeMapSeq');

/**
* @constructor
*/
cljs.core.PersistentTreeMapSeq = (function (meta,stack,ascending_QMARK_,cnt,__hash){
this.meta = meta;
this.stack = stack;
this.ascending_QMARK_ = ascending_QMARK_;
this.cnt = cnt;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850574;
})
cljs.core.PersistentTreeMapSeq.cljs$lang$type = true;
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrSeq = (function (this__2322__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMapSeq");
});
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrWriter = (function (this__2322__auto__,writer__2323__auto__){
return cljs.core._write.call(null,writer__2323__auto__,"cljs.core/PersistentTreeMapSeq");
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9062 = this;
var h__2203__auto____9063 = this__9062.__hash;
if(!((h__2203__auto____9063 == null)))
{return h__2203__auto____9063;
} else
{var h__2203__auto____9064 = cljs.core.hash_coll.call(null,coll);
this__9062.__hash = h__2203__auto____9064;
return h__2203__auto____9064;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9065 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var this__9066 = this;
var this__9067 = this;
return cljs.core.pr_str.call(null,this__9067);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__9068 = this;
return this$;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9069 = this;
if((this__9069.cnt < 0))
{return (cljs.core.count.call(null,cljs.core.next.call(null,coll)) + 1);
} else
{return this__9069.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this__9070 = this;
return cljs.core.peek.call(null,this__9070.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this__9071 = this;
var t__9072 = cljs.core.first.call(null,this__9071.stack);
var next_stack__9073 = cljs.core.tree_map_seq_push.call(null,((this__9071.ascending_QMARK_)?t__9072.right:t__9072.left),cljs.core.next.call(null,this__9071.stack),this__9071.ascending_QMARK_);
if(!((next_stack__9073 == null)))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack__9073,this__9071.ascending_QMARK_,(this__9071.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9074 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9075 = this;
return (new cljs.core.PersistentTreeMapSeq(meta,this__9075.stack,this__9075.ascending_QMARK_,this__9075.cnt,this__9075.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9076 = this;
return this__9076.meta;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9077 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9077.meta);
});
cljs.core.PersistentTreeMapSeq;
cljs.core.create_tree_map_seq = (function create_tree_map_seq(tree,ascending_QMARK_,cnt){
return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.tree_map_seq_push.call(null,tree,null,ascending_QMARK_),ascending_QMARK_,cnt,null));
});
cljs.core.balance_left = (function balance_left(key,val,ins,right){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.left))
{return (new cljs.core.RedNode(ins.key,ins.val,ins.left.blacken(),(new cljs.core.BlackNode(key,val,ins.right,right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.right))
{return (new cljs.core.RedNode(ins.right.key,ins.right.val,(new cljs.core.BlackNode(ins.key,ins.val,ins.left,ins.right.left,null)),(new cljs.core.BlackNode(key,val,ins.right.right,right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(key,val,ins,right,null));
} else
{return null;
}
}
}
} else
{return (new cljs.core.BlackNode(key,val,ins,right,null));
}
});
cljs.core.balance_right = (function balance_right(key,val,left,ins){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.right))
{return (new cljs.core.RedNode(ins.key,ins.val,(new cljs.core.BlackNode(key,val,left,ins.left,null)),ins.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.left))
{return (new cljs.core.RedNode(ins.left.key,ins.left.val,(new cljs.core.BlackNode(key,val,left,ins.left.left,null)),(new cljs.core.BlackNode(ins.key,ins.val,ins.left.right,ins.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(key,val,left,ins,null));
} else
{return null;
}
}
}
} else
{return (new cljs.core.BlackNode(key,val,left,ins,null));
}
});
cljs.core.balance_left_del = (function balance_left_del(key,val,del,right){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,del))
{return (new cljs.core.RedNode(key,val,del.blacken(),right,null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right))
{return cljs.core.balance_right.call(null,key,val,del,right.redden());
} else
{if((function (){var and__3822__auto____9079 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right);
if(and__3822__auto____9079)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right.left);
} else
{return and__3822__auto____9079;
}
})())
{return (new cljs.core.RedNode(right.left.key,right.left.val,(new cljs.core.BlackNode(key,val,del,right.left.left,null)),cljs.core.balance_right.call(null,right.key,right.val,right.left.right,right.right.redden()),null));
} else
{if("\uFDD0'else")
{throw (new Error("red-black tree invariant violation"));
} else
{return null;
}
}
}
}
});
cljs.core.balance_right_del = (function balance_right_del(key,val,left,del){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,del))
{return (new cljs.core.RedNode(key,val,left,del.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left))
{return cljs.core.balance_left.call(null,key,val,left.redden(),del);
} else
{if((function (){var and__3822__auto____9081 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left);
if(and__3822__auto____9081)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left.right);
} else
{return and__3822__auto____9081;
}
})())
{return (new cljs.core.RedNode(left.right.key,left.right.val,cljs.core.balance_left.call(null,left.key,left.val,left.left.redden(),left.right.left),(new cljs.core.BlackNode(key,val,left.right.right,del,null)),null));
} else
{if("\uFDD0'else")
{throw (new Error("red-black tree invariant violation"));
} else
{return null;
}
}
}
}
});
cljs.core.tree_map_kv_reduce = (function tree_map_kv_reduce(node,f,init){
var init__9085 = f.call(null,init,node.key,node.val);
if(cljs.core.reduced_QMARK_.call(null,init__9085))
{return cljs.core.deref.call(null,init__9085);
} else
{var init__9086 = ((!((node.left == null)))?tree_map_kv_reduce.call(null,node.left,f,init__9085):init__9085);
if(cljs.core.reduced_QMARK_.call(null,init__9086))
{return cljs.core.deref.call(null,init__9086);
} else
{var init__9087 = ((!((node.right == null)))?tree_map_kv_reduce.call(null,node.right,f,init__9086):init__9086);
if(cljs.core.reduced_QMARK_.call(null,init__9087))
{return cljs.core.deref.call(null,init__9087);
} else
{return init__9087;
}
}
}
});

goog.provide('cljs.core.BlackNode');

/**
* @constructor
*/
cljs.core.BlackNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.BlackNode.cljs$lang$type = true;
cljs.core.BlackNode.cljs$lang$ctorPrSeq = (function (this__2322__auto__){
return cljs.core.list.call(null,"cljs.core/BlackNode");
});
cljs.core.BlackNode.cljs$lang$ctorPrWriter = (function (this__2322__auto__,writer__2323__auto__){
return cljs.core._write.call(null,writer__2323__auto__,"cljs.core/BlackNode");
});
cljs.core.BlackNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9090 = this;
var h__2203__auto____9091 = this__9090.__hash;
if(!((h__2203__auto____9091 == null)))
{return h__2203__auto____9091;
} else
{var h__2203__auto____9092 = cljs.core.hash_coll.call(null,coll);
this__9090.__hash = h__2203__auto____9092;
return h__2203__auto____9092;
}
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__9093 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__9094 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__9095 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__9095.key,this__9095.val], true),k,v);
});
cljs.core.BlackNode.prototype.call = (function() {
var G__9143 = null;
var G__9143__2 = (function (this_sym9096,k){
var this__9098 = this;
var this_sym9096__9099 = this;
var node__9100 = this_sym9096__9099;
return node__9100.cljs$core$ILookup$_lookup$arity$2(node__9100,k);
});
var G__9143__3 = (function (this_sym9097,k,not_found){
var this__9098 = this;
var this_sym9097__9101 = this;
var node__9102 = this_sym9097__9101;
return node__9102.cljs$core$ILookup$_lookup$arity$3(node__9102,k,not_found);
});
G__9143 = function(this_sym9097,k,not_found){
switch(arguments.length){
case 2:
return G__9143__2.call(this,this_sym9097,k);
case 3:
return G__9143__3.call(this,this_sym9097,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9143;
})()
;
cljs.core.BlackNode.prototype.apply = (function (this_sym9088,args9089){
var this__9103 = this;
return this_sym9088.call.apply(this_sym9088,[this_sym9088].concat(args9089.slice()));
});
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__9104 = this;
return cljs.core.PersistentVector.fromArray([this__9104.key,this__9104.val,o], true);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__9105 = this;
return this__9105.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__9106 = this;
return this__9106.val;
});
cljs.core.BlackNode.prototype.add_right = (function (ins){
var this__9107 = this;
var node__9108 = this;
return ins.balance_right(node__9108);
});
cljs.core.BlackNode.prototype.redden = (function (){
var this__9109 = this;
var node__9110 = this;
return (new cljs.core.RedNode(this__9109.key,this__9109.val,this__9109.left,this__9109.right,null));
});
cljs.core.BlackNode.prototype.remove_right = (function (del){
var this__9111 = this;
var node__9112 = this;
return cljs.core.balance_right_del.call(null,this__9111.key,this__9111.val,this__9111.left,del);
});
cljs.core.BlackNode.prototype.replace = (function (key,val,left,right){
var this__9113 = this;
var node__9114 = this;
return (new cljs.core.BlackNode(key,val,left,right,null));
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var this__9115 = this;
var node__9116 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__9116,f,init);
});
cljs.core.BlackNode.prototype.remove_left = (function (del){
var this__9117 = this;
var node__9118 = this;
return cljs.core.balance_left_del.call(null,this__9117.key,this__9117.val,del,this__9117.right);
});
cljs.core.BlackNode.prototype.add_left = (function (ins){
var this__9119 = this;
var node__9120 = this;
return ins.balance_left(node__9120);
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){
var this__9121 = this;
var node__9122 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node__9122,parent.right,null));
});
cljs.core.BlackNode.prototype.toString = (function() {
var G__9144 = null;
var G__9144__0 = (function (){
var this__9123 = this;
var this__9125 = this;
return cljs.core.pr_str.call(null,this__9125);
});
G__9144 = function(){
switch(arguments.length){
case 0:
return G__9144__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9144;
})()
;
cljs.core.BlackNode.prototype.balance_right = (function (parent){
var this__9126 = this;
var node__9127 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__9127,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){
var this__9128 = this;
var node__9129 = this;
return node__9129;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__9130 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__9131 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__9132 = this;
return cljs.core.list.call(null,this__9132.key,this__9132.val);
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__9133 = this;
return 2;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__9134 = this;
return this__9134.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__9135 = this;
return cljs.core.PersistentVector.fromArray([this__9135.key], true);
});
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__9136 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__9136.key,this__9136.val], true),n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9137 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__9138 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__9138.key,this__9138.val], true),meta);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__9139 = this;
return null;
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__9140 = this;
if((n === 0))
{return this__9140.key;
} else
{if((n === 1))
{return this__9140.val;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var this__9141 = this;
if((n === 0))
{return this__9141.key;
} else
{if((n === 1))
{return this__9141.val;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.BlackNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var this__9142 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.BlackNode;

goog.provide('cljs.core.RedNode');

/**
* @constructor
*/
cljs.core.RedNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.RedNode.cljs$lang$type = true;
cljs.core.RedNode.cljs$lang$ctorPrSeq = (function (this__2322__auto__){
return cljs.core.list.call(null,"cljs.core/RedNode");
});
cljs.core.RedNode.cljs$lang$ctorPrWriter = (function (this__2322__auto__,writer__2323__auto__){
return cljs.core._write.call(null,writer__2323__auto__,"cljs.core/RedNode");
});
cljs.core.RedNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9147 = this;
var h__2203__auto____9148 = this__9147.__hash;
if(!((h__2203__auto____9148 == null)))
{return h__2203__auto____9148;
} else
{var h__2203__auto____9149 = cljs.core.hash_coll.call(null,coll);
this__9147.__hash = h__2203__auto____9149;
return h__2203__auto____9149;
}
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__9150 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__9151 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__9152 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__9152.key,this__9152.val], true),k,v);
});
cljs.core.RedNode.prototype.call = (function() {
var G__9200 = null;
var G__9200__2 = (function (this_sym9153,k){
var this__9155 = this;
var this_sym9153__9156 = this;
var node__9157 = this_sym9153__9156;
return node__9157.cljs$core$ILookup$_lookup$arity$2(node__9157,k);
});
var G__9200__3 = (function (this_sym9154,k,not_found){
var this__9155 = this;
var this_sym9154__9158 = this;
var node__9159 = this_sym9154__9158;
return node__9159.cljs$core$ILookup$_lookup$arity$3(node__9159,k,not_found);
});
G__9200 = function(this_sym9154,k,not_found){
switch(arguments.length){
case 2:
return G__9200__2.call(this,this_sym9154,k);
case 3:
return G__9200__3.call(this,this_sym9154,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9200;
})()
;
cljs.core.RedNode.prototype.apply = (function (this_sym9145,args9146){
var this__9160 = this;
return this_sym9145.call.apply(this_sym9145,[this_sym9145].concat(args9146.slice()));
});
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__9161 = this;
return cljs.core.PersistentVector.fromArray([this__9161.key,this__9161.val,o], true);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__9162 = this;
return this__9162.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__9163 = this;
return this__9163.val;
});
cljs.core.RedNode.prototype.add_right = (function (ins){
var this__9164 = this;
var node__9165 = this;
return (new cljs.core.RedNode(this__9164.key,this__9164.val,this__9164.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){
var this__9166 = this;
var node__9167 = this;
throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.remove_right = (function (del){
var this__9168 = this;
var node__9169 = this;
return (new cljs.core.RedNode(this__9168.key,this__9168.val,this__9168.left,del,null));
});
cljs.core.RedNode.prototype.replace = (function (key,val,left,right){
var this__9170 = this;
var node__9171 = this;
return (new cljs.core.RedNode(key,val,left,right,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var this__9172 = this;
var node__9173 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__9173,f,init);
});
cljs.core.RedNode.prototype.remove_left = (function (del){
var this__9174 = this;
var node__9175 = this;
return (new cljs.core.RedNode(this__9174.key,this__9174.val,del,this__9174.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){
var this__9176 = this;
var node__9177 = this;
return (new cljs.core.RedNode(this__9176.key,this__9176.val,ins,this__9176.right,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){
var this__9178 = this;
var node__9179 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__9178.left))
{return (new cljs.core.RedNode(this__9178.key,this__9178.val,this__9178.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,this__9178.right,parent.right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__9178.right))
{return (new cljs.core.RedNode(this__9178.right.key,this__9178.right.val,(new cljs.core.BlackNode(this__9178.key,this__9178.val,this__9178.left,this__9178.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,this__9178.right.right,parent.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,node__9179,parent.right,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.toString = (function() {
var G__9201 = null;
var G__9201__0 = (function (){
var this__9180 = this;
var this__9182 = this;
return cljs.core.pr_str.call(null,this__9182);
});
G__9201 = function(){
switch(arguments.length){
case 0:
return G__9201__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9201;
})()
;
cljs.core.RedNode.prototype.balance_right = (function (parent){
var this__9183 = this;
var node__9184 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__9183.right))
{return (new cljs.core.RedNode(this__9183.key,this__9183.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__9183.left,null)),this__9183.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__9183.left))
{return (new cljs.core.RedNode(this__9183.left.key,this__9183.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__9183.left.left,null)),(new cljs.core.BlackNode(this__9183.key,this__9183.val,this__9183.left.right,this__9183.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__9184,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.blacken = (function (){
var this__9185 = this;
var node__9186 = this;
return (new cljs.core.BlackNode(this__9185.key,this__9185.val,this__9185.left,this__9185.right,null));
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__9187 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__9188 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__9189 = this;
return cljs.core.list.call(null,this__9189.key,this__9189.val);
});
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__9190 = this;
return 2;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__9191 = this;
return this__9191.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__9192 = this;
return cljs.core.PersistentVector.fromArray([this__9192.key], true);
});
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__9193 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__9193.key,this__9193.val], true),n,v);
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9194 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__9195 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__9195.key,this__9195.val], true),meta);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__9196 = this;
return null;
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__9197 = this;
if((n === 0))
{return this__9197.key;
} else
{if((n === 1))
{return this__9197.val;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var this__9198 = this;
if((n === 0))
{return this__9198.key;
} else
{if((n === 1))
{return this__9198.val;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var this__9199 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.RedNode;
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c__9205 = comp.call(null,k,tree.key);
if((c__9205 === 0))
{(found[0] = tree);
return null;
} else
{if((c__9205 < 0))
{var ins__9206 = tree_map_add.call(null,comp,tree.left,k,v,found);
if(!((ins__9206 == null)))
{return tree.add_left(ins__9206);
} else
{return null;
}
} else
{if("\uFDD0'else")
{var ins__9207 = tree_map_add.call(null,comp,tree.right,k,v,found);
if(!((ins__9207 == null)))
{return tree.add_right(ins__9207);
} else
{return null;
}
} else
{return null;
}
}
}
}
});
cljs.core.tree_map_append = (function tree_map_append(left,right){
if((left == null))
{return right;
} else
{if((right == null))
{return left;
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{var app__9210 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__9210))
{return (new cljs.core.RedNode(app__9210.key,app__9210.val,(new cljs.core.RedNode(left.key,left.val,left.left,app__9210.left,null)),(new cljs.core.RedNode(right.key,right.val,app__9210.right,right.right,null)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app__9210,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append.call(null,left.right,right),null));
}
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append.call(null,left,right.left),right.right,null));
} else
{if("\uFDD0'else")
{var app__9211 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__9211))
{return (new cljs.core.RedNode(app__9211.key,app__9211.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app__9211.left,null)),(new cljs.core.BlackNode(right.key,right.val,app__9211.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del.call(null,left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app__9211,right.right,null)));
}
} else
{return null;
}
}
}
}
}
});
cljs.core.tree_map_remove = (function tree_map_remove(comp,tree,k,found){
if(!((tree == null)))
{var c__9217 = comp.call(null,k,tree.key);
if((c__9217 === 0))
{(found[0] = tree);
return cljs.core.tree_map_append.call(null,tree.left,tree.right);
} else
{if((c__9217 < 0))
{var del__9218 = tree_map_remove.call(null,comp,tree.left,k,found);
if((function (){var or__3824__auto____9219 = !((del__9218 == null));
if(or__3824__auto____9219)
{return or__3824__auto____9219;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.left))
{return cljs.core.balance_left_del.call(null,tree.key,tree.val,del__9218,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del__9218,tree.right,null));
}
} else
{return null;
}
} else
{if("\uFDD0'else")
{var del__9220 = tree_map_remove.call(null,comp,tree.right,k,found);
if((function (){var or__3824__auto____9221 = !((del__9220 == null));
if(or__3824__auto____9221)
{return or__3824__auto____9221;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.right))
{return cljs.core.balance_right_del.call(null,tree.key,tree.val,tree.left,del__9220);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del__9220,null));
}
} else
{return null;
}
} else
{return null;
}
}
}
} else
{return null;
}
});
cljs.core.tree_map_replace = (function tree_map_replace(comp,tree,k,v){
var tk__9224 = tree.key;
var c__9225 = comp.call(null,k,tk__9224);
if((c__9225 === 0))
{return tree.replace(tk__9224,v,tree.left,tree.right);
} else
{if((c__9225 < 0))
{return tree.replace(tk__9224,tree.val,tree_map_replace.call(null,comp,tree.left,k,v),tree.right);
} else
{if("\uFDD0'else")
{return tree.replace(tk__9224,tree.val,tree.left,tree_map_replace.call(null,comp,tree.right,k,v));
} else
{return null;
}
}
}
});

goog.provide('cljs.core.PersistentTreeMap');

/**
* @constructor
*/
cljs.core.PersistentTreeMap = (function (comp,tree,cnt,meta,__hash){
this.comp = comp;
this.tree = tree;
this.cnt = cnt;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 418776847;
})
cljs.core.PersistentTreeMap.cljs$lang$type = true;
cljs.core.PersistentTreeMap.cljs$lang$ctorPrSeq = (function (this__2322__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMap");
});
cljs.core.PersistentTreeMap.cljs$lang$ctorPrWriter = (function (this__2322__auto__,writer__2323__auto__){
return cljs.core._write.call(null,writer__2323__auto__,"cljs.core/PersistentTreeMap");
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9228 = this;
var h__2203__auto____9229 = this__9228.__hash;
if(!((h__2203__auto____9229 == null)))
{return h__2203__auto____9229;
} else
{var h__2203__auto____9230 = cljs.core.hash_imap.call(null,coll);
this__9228.__hash = h__2203__auto____9230;
return h__2203__auto____9230;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9231 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9232 = this;
var n__9233 = coll.entry_at(k);
if(!((n__9233 == null)))
{return n__9233.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9234 = this;
var found__9235 = [null];
var t__9236 = cljs.core.tree_map_add.call(null,this__9234.comp,this__9234.tree,k,v,found__9235);
if((t__9236 == null))
{var found_node__9237 = cljs.core.nth.call(null,found__9235,0);
if(cljs.core._EQ_.call(null,v,found_node__9237.val))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__9234.comp,cljs.core.tree_map_replace.call(null,this__9234.comp,this__9234.tree,k,v),this__9234.cnt,this__9234.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__9234.comp,t__9236.blacken(),(this__9234.cnt + 1),this__9234.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__9238 = this;
return !((coll.entry_at(k) == null));
});
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__9272 = null;
var G__9272__2 = (function (this_sym9239,k){
var this__9241 = this;
var this_sym9239__9242 = this;
var coll__9243 = this_sym9239__9242;
return coll__9243.cljs$core$ILookup$_lookup$arity$2(coll__9243,k);
});
var G__9272__3 = (function (this_sym9240,k,not_found){
var this__9241 = this;
var this_sym9240__9244 = this;
var coll__9245 = this_sym9240__9244;
return coll__9245.cljs$core$ILookup$_lookup$arity$3(coll__9245,k,not_found);
});
G__9272 = function(this_sym9240,k,not_found){
switch(arguments.length){
case 2:
return G__9272__2.call(this,this_sym9240,k);
case 3:
return G__9272__3.call(this,this_sym9240,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9272;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (this_sym9226,args9227){
var this__9246 = this;
return this_sym9226.call.apply(this_sym9226,[this_sym9226].concat(args9227.slice()));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__9247 = this;
if(!((this__9247.tree == null)))
{return cljs.core.tree_map_kv_reduce.call(null,this__9247.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__9248 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__9249 = this;
if((this__9249.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__9249.tree,false,this__9249.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){
var this__9250 = this;
var this__9251 = this;
return cljs.core.pr_str.call(null,this__9251);
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var this__9252 = this;
var coll__9253 = this;
var t__9254 = this__9252.tree;
while(true){
if(!((t__9254 == null)))
{var c__9255 = this__9252.comp.call(null,k,t__9254.key);
if((c__9255 === 0))
{return t__9254;
} else
{if((c__9255 < 0))
{{
var G__9273 = t__9254.left;
t__9254 = G__9273;
continue;
}
} else
{if("\uFDD0'else")
{{
var G__9274 = t__9254.right;
t__9254 = G__9274;
continue;
}
} else
{return null;
}
}
}
} else
{return null;
}
break;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__9256 = this;
if((this__9256.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__9256.tree,ascending_QMARK_,this__9256.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__9257 = this;
if((this__9257.cnt > 0))
{var stack__9258 = null;
var t__9259 = this__9257.tree;
while(true){
if(!((t__9259 == null)))
{var c__9260 = this__9257.comp.call(null,k,t__9259.key);
if((c__9260 === 0))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.call(null,stack__9258,t__9259),ascending_QMARK_,-1,null));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c__9260 < 0))
{{
var G__9275 = cljs.core.conj.call(null,stack__9258,t__9259);
var G__9276 = t__9259.left;
stack__9258 = G__9275;
t__9259 = G__9276;
continue;
}
} else
{{
var G__9277 = stack__9258;
var G__9278 = t__9259.right;
stack__9258 = G__9277;
t__9259 = G__9278;
continue;
}
}
} else
{if("\uFDD0'else")
{if((c__9260 > 0))
{{
var G__9279 = cljs.core.conj.call(null,stack__9258,t__9259);
var G__9280 = t__9259.right;
stack__9258 = G__9279;
t__9259 = G__9280;
continue;
}
} else
{{
var G__9281 = stack__9258;
var G__9282 = t__9259.left;
stack__9258 = G__9281;
t__9259 = G__9282;
continue;
}
}
} else
{return null;
}
}
}
} else
{if((stack__9258 == null))
{return (new cljs.core.PersistentTreeMapSeq(null,stack__9258,ascending_QMARK_,-1,null));
} else
{return null;
}
}
break;
}
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__9261 = this;
return cljs.core.key.call(null,entry);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__9262 = this;
return this__9262.comp;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9263 = this;
if((this__9263.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__9263.tree,true,this__9263.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9264 = this;
return this__9264.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9265 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9266 = this;
return (new cljs.core.PersistentTreeMap(this__9266.comp,this__9266.tree,this__9266.cnt,meta,this__9266.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9267 = this;
return this__9267.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9268 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeMap.EMPTY,this__9268.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__9269 = this;
var found__9270 = [null];
var t__9271 = cljs.core.tree_map_remove.call(null,this__9269.comp,this__9269.tree,k,found__9270);
if((t__9271 == null))
{if((cljs.core.nth.call(null,found__9270,0) == null))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__9269.comp,null,0,this__9269.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__9269.comp,t__9271.blacken(),(this__9269.cnt - 1),this__9269.meta,null));
}
});
cljs.core.PersistentTreeMap;
cljs.core.PersistentTreeMap.EMPTY = (new cljs.core.PersistentTreeMap(cljs.core.compare,null,0,null,0));
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in__9285 = cljs.core.seq.call(null,keyvals);
var out__9286 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if(in__9285)
{{
var G__9287 = cljs.core.nnext.call(null,in__9285);
var G__9288 = cljs.core.assoc_BANG_.call(null,out__9286,cljs.core.first.call(null,in__9285),cljs.core.second.call(null,in__9285));
in__9285 = G__9287;
out__9286 = G__9288;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9286);
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this, keyvals);
};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__9289){
var keyvals = cljs.core.seq(arglist__9289);;
return hash_map__delegate(keyvals);
});
hash_map.cljs$lang$arity$variadic = hash_map__delegate;
return hash_map;
})()
;
/**
* keyval => key val
* Returns a new array map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.array_map = (function() { 
var array_map__delegate = function (keyvals){
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,cljs.core.count.call(null,keyvals),2),cljs.core.apply.call(null,cljs.core.array,keyvals),null));
};
var array_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return array_map__delegate.call(this, keyvals);
};
array_map.cljs$lang$maxFixedArity = 0;
array_map.cljs$lang$applyTo = (function (arglist__9290){
var keyvals = cljs.core.seq(arglist__9290);;
return array_map__delegate(keyvals);
});
array_map.cljs$lang$arity$variadic = array_map__delegate;
return array_map;
})()
;
/**
* keyval => key val
* Returns a new object map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.obj_map = (function() { 
var obj_map__delegate = function (keyvals){
var ks__9294 = [];
var obj__9295 = {};
var kvs__9296 = cljs.core.seq.call(null,keyvals);
while(true){
if(kvs__9296)
{ks__9294.push(cljs.core.first.call(null,kvs__9296));
(obj__9295[cljs.core.first.call(null,kvs__9296)] = cljs.core.second.call(null,kvs__9296));
{
var G__9297 = cljs.core.nnext.call(null,kvs__9296);
kvs__9296 = G__9297;
continue;
}
} else
{return cljs.core.ObjMap.fromObject.call(null,ks__9294,obj__9295);
}
break;
}
};
var obj_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return obj_map__delegate.call(this, keyvals);
};
obj_map.cljs$lang$maxFixedArity = 0;
obj_map.cljs$lang$applyTo = (function (arglist__9298){
var keyvals = cljs.core.seq(arglist__9298);;
return obj_map__delegate(keyvals);
});
obj_map.cljs$lang$arity$variadic = obj_map__delegate;
return obj_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.sorted_map = (function() { 
var sorted_map__delegate = function (keyvals){
var in__9301 = cljs.core.seq.call(null,keyvals);
var out__9302 = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(in__9301)
{{
var G__9303 = cljs.core.nnext.call(null,in__9301);
var G__9304 = cljs.core.assoc.call(null,out__9302,cljs.core.first.call(null,in__9301),cljs.core.second.call(null,in__9301));
in__9301 = G__9303;
out__9302 = G__9304;
continue;
}
} else
{return out__9302;
}
break;
}
};
var sorted_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_map__delegate.call(this, keyvals);
};
sorted_map.cljs$lang$maxFixedArity = 0;
sorted_map.cljs$lang$applyTo = (function (arglist__9305){
var keyvals = cljs.core.seq(arglist__9305);;
return sorted_map__delegate(keyvals);
});
sorted_map.cljs$lang$arity$variadic = sorted_map__delegate;
return sorted_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_map_by = (function() { 
var sorted_map_by__delegate = function (comparator,keyvals){
var in__9308 = cljs.core.seq.call(null,keyvals);
var out__9309 = (new cljs.core.PersistentTreeMap(comparator,null,0,null,0));
while(true){
if(in__9308)
{{
var G__9310 = cljs.core.nnext.call(null,in__9308);
var G__9311 = cljs.core.assoc.call(null,out__9309,cljs.core.first.call(null,in__9308),cljs.core.second.call(null,in__9308));
in__9308 = G__9310;
out__9309 = G__9311;
continue;
}
} else
{return out__9309;
}
break;
}
};
var sorted_map_by = function (comparator,var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_map_by__delegate.call(this, comparator, keyvals);
};
sorted_map_by.cljs$lang$maxFixedArity = 1;
sorted_map_by.cljs$lang$applyTo = (function (arglist__9312){
var comparator = cljs.core.first(arglist__9312);
var keyvals = cljs.core.rest(arglist__9312);
return sorted_map_by__delegate(comparator, keyvals);
});
sorted_map_by.cljs$lang$arity$variadic = sorted_map_by__delegate;
return sorted_map_by;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,hash_map));
});
/**
* Returns the key of the map entry.
*/
cljs.core.key = (function key(map_entry){
return cljs.core._key.call(null,map_entry);
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,hash_map));
});
/**
* Returns the value in the map entry.
*/
cljs.core.val = (function val(map_entry){
return cljs.core._val.call(null,map_entry);
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{return cljs.core.reduce.call(null,(function (p1__9313_SHARP_,p2__9314_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3824__auto____9316 = p1__9313_SHARP_;
if(cljs.core.truth_(or__3824__auto____9316))
{return or__3824__auto____9316;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),p2__9314_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this, maps);
};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__9317){
var maps = cljs.core.seq(arglist__9317);;
return merge__delegate(maps);
});
merge.cljs$lang$arity$variadic = merge__delegate;
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{var merge_entry__9325 = (function (m,e){
var k__9323 = cljs.core.first.call(null,e);
var v__9324 = cljs.core.second.call(null,e);
if(cljs.core.contains_QMARK_.call(null,m,k__9323))
{return cljs.core.assoc.call(null,m,k__9323,f.call(null,cljs.core._lookup.call(null,m,k__9323,null),v__9324));
} else
{return cljs.core.assoc.call(null,m,k__9323,v__9324);
}
});
var merge2__9327 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__9325,(function (){var or__3824__auto____9326 = m1;
if(cljs.core.truth_(or__3824__auto____9326))
{return or__3824__auto____9326;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge2__9327,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this, f, maps);
};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__9328){
var f = cljs.core.first(arglist__9328);
var maps = cljs.core.rest(arglist__9328);
return merge_with__delegate(f, maps);
});
merge_with.cljs$lang$arity$variadic = merge_with__delegate;
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__9333 = cljs.core.ObjMap.EMPTY;
var keys__9334 = cljs.core.seq.call(null,keyseq);
while(true){
if(keys__9334)
{var key__9335 = cljs.core.first.call(null,keys__9334);
var entry__9336 = cljs.core._lookup.call(null,map,key__9335,"\uFDD0'cljs.core/not-found");
{
var G__9337 = ((cljs.core.not_EQ_.call(null,entry__9336,"\uFDD0'cljs.core/not-found"))?cljs.core.assoc.call(null,ret__9333,key__9335,entry__9336):ret__9333);
var G__9338 = cljs.core.next.call(null,keys__9334);
ret__9333 = G__9337;
keys__9334 = G__9338;
continue;
}
} else
{return ret__9333;
}
break;
}
});

goog.provide('cljs.core.PersistentHashSet');

/**
* @constructor
*/
cljs.core.PersistentHashSet = (function (meta,hash_map,__hash){
this.meta = meta;
this.hash_map = hash_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 4;
this.cljs$lang$protocol_mask$partition0$ = 15077647;
})
cljs.core.PersistentHashSet.cljs$lang$type = true;
cljs.core.PersistentHashSet.cljs$lang$ctorPrSeq = (function (this__2322__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashSet");
});
cljs.core.PersistentHashSet.cljs$lang$ctorPrWriter = (function (this__2322__auto__,writer__2323__auto__){
return cljs.core._write.call(null,writer__2323__auto__,"cljs.core/PersistentHashSet");
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__9342 = this;
return (new cljs.core.TransientHashSet(cljs.core.transient$.call(null,this__9342.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9343 = this;
var h__2203__auto____9344 = this__9343.__hash;
if(!((h__2203__auto____9344 == null)))
{return h__2203__auto____9344;
} else
{var h__2203__auto____9345 = cljs.core.hash_iset.call(null,coll);
this__9343.__hash = h__2203__auto____9345;
return h__2203__auto____9345;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__9346 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__9347 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__9347.hash_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__9368 = null;
var G__9368__2 = (function (this_sym9348,k){
var this__9350 = this;
var this_sym9348__9351 = this;
var coll__9352 = this_sym9348__9351;
return coll__9352.cljs$core$ILookup$_lookup$arity$2(coll__9352,k);
});
var G__9368__3 = (function (this_sym9349,k,not_found){
var this__9350 = this;
var this_sym9349__9353 = this;
var coll__9354 = this_sym9349__9353;
return coll__9354.cljs$core$ILookup$_lookup$arity$3(coll__9354,k,not_found);
});
G__9368 = function(this_sym9349,k,not_found){
switch(arguments.length){
case 2:
return G__9368__2.call(this,this_sym9349,k);
case 3:
return G__9368__3.call(this,this_sym9349,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9368;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (this_sym9340,args9341){
var this__9355 = this;
return this_sym9340.call.apply(this_sym9340,[this_sym9340].concat(args9341.slice()));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9356 = this;
return (new cljs.core.PersistentHashSet(this__9356.meta,cljs.core.assoc.call(null,this__9356.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.toString = (function (){
var this__9357 = this;
var this__9358 = this;
return cljs.core.pr_str.call(null,this__9358);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9359 = this;
return cljs.core.keys.call(null,this__9359.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__9360 = this;
return (new cljs.core.PersistentHashSet(this__9360.meta,cljs.core.dissoc.call(null,this__9360.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9361 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9362 = this;
var and__3822__auto____9363 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____9363)
{var and__3822__auto____9364 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____9364)
{return cljs.core.every_QMARK_.call(null,(function (p1__9339_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__9339_SHARP_);
}),other);
} else
{return and__3822__auto____9364;
}
} else
{return and__3822__auto____9363;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9365 = this;
return (new cljs.core.PersistentHashSet(meta,this__9365.hash_map,this__9365.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9366 = this;
return this__9366.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9367 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentHashSet.EMPTY,this__9367.meta);
});
cljs.core.PersistentHashSet;
cljs.core.PersistentHashSet.EMPTY = (new cljs.core.PersistentHashSet(null,cljs.core.hash_map.call(null),0));
cljs.core.PersistentHashSet.fromArray = (function (items){
var len__9369 = cljs.core.count.call(null,items);
var i__9370 = 0;
var out__9371 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if((i__9370 < len__9369))
{{
var G__9372 = (i__9370 + 1);
var G__9373 = cljs.core.conj_BANG_.call(null,out__9371,(items[i__9370]));
i__9370 = G__9372;
out__9371 = G__9373;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9371);
}
break;
}
});

goog.provide('cljs.core.TransientHashSet');

/**
* @constructor
*/
cljs.core.TransientHashSet = (function (transient_map){
this.transient_map = transient_map;
this.cljs$lang$protocol_mask$partition0$ = 259;
this.cljs$lang$protocol_mask$partition1$ = 136;
})
cljs.core.TransientHashSet.cljs$lang$type = true;
cljs.core.TransientHashSet.cljs$lang$ctorPrSeq = (function (this__2322__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashSet");
});
cljs.core.TransientHashSet.cljs$lang$ctorPrWriter = (function (this__2322__auto__,writer__2323__auto__){
return cljs.core._write.call(null,writer__2323__auto__,"cljs.core/TransientHashSet");
});
cljs.core.TransientHashSet.prototype.call = (function() {
var G__9391 = null;
var G__9391__2 = (function (this_sym9377,k){
var this__9379 = this;
var this_sym9377__9380 = this;
var tcoll__9381 = this_sym9377__9380;
if((cljs.core._lookup.call(null,this__9379.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__9391__3 = (function (this_sym9378,k,not_found){
var this__9379 = this;
var this_sym9378__9382 = this;
var tcoll__9383 = this_sym9378__9382;
if((cljs.core._lookup.call(null,this__9379.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__9391 = function(this_sym9378,k,not_found){
switch(arguments.length){
case 2:
return G__9391__2.call(this,this_sym9378,k);
case 3:
return G__9391__3.call(this,this_sym9378,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9391;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (this_sym9375,args9376){
var this__9384 = this;
return this_sym9375.call.apply(this_sym9375,[this_sym9375].concat(args9376.slice()));
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var this__9385 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var this__9386 = this;
if((cljs.core._lookup.call(null,this__9386.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__9387 = this;
return cljs.core.count.call(null,this__9387.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var this__9388 = this;
this__9388.transient_map = cljs.core.dissoc_BANG_.call(null,this__9388.transient_map,v);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__9389 = this;
this__9389.transient_map = cljs.core.assoc_BANG_.call(null,this__9389.transient_map,o,null);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__9390 = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_.call(null,this__9390.transient_map),null));
});
cljs.core.TransientHashSet;

goog.provide('cljs.core.PersistentTreeSet');

/**
* @constructor
*/
cljs.core.PersistentTreeSet = (function (meta,tree_map,__hash){
this.meta = meta;
this.tree_map = tree_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 417730831;
})
cljs.core.PersistentTreeSet.cljs$lang$type = true;
cljs.core.PersistentTreeSet.cljs$lang$ctorPrSeq = (function (this__2322__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeSet");
});
cljs.core.PersistentTreeSet.cljs$lang$ctorPrWriter = (function (this__2322__auto__,writer__2323__auto__){
return cljs.core._write.call(null,writer__2323__auto__,"cljs.core/PersistentTreeSet");
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9394 = this;
var h__2203__auto____9395 = this__9394.__hash;
if(!((h__2203__auto____9395 == null)))
{return h__2203__auto____9395;
} else
{var h__2203__auto____9396 = cljs.core.hash_iset.call(null,coll);
this__9394.__hash = h__2203__auto____9396;
return h__2203__auto____9396;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__9397 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__9398 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__9398.tree_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__9424 = null;
var G__9424__2 = (function (this_sym9399,k){
var this__9401 = this;
var this_sym9399__9402 = this;
var coll__9403 = this_sym9399__9402;
return coll__9403.cljs$core$ILookup$_lookup$arity$2(coll__9403,k);
});
var G__9424__3 = (function (this_sym9400,k,not_found){
var this__9401 = this;
var this_sym9400__9404 = this;
var coll__9405 = this_sym9400__9404;
return coll__9405.cljs$core$ILookup$_lookup$arity$3(coll__9405,k,not_found);
});
G__9424 = function(this_sym9400,k,not_found){
switch(arguments.length){
case 2:
return G__9424__2.call(this,this_sym9400,k);
case 3:
return G__9424__3.call(this,this_sym9400,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9424;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (this_sym9392,args9393){
var this__9406 = this;
return this_sym9392.call.apply(this_sym9392,[this_sym9392].concat(args9393.slice()));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9407 = this;
return (new cljs.core.PersistentTreeSet(this__9407.meta,cljs.core.assoc.call(null,this__9407.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__9408 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core.rseq.call(null,this__9408.tree_map));
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var this__9409 = this;
var this__9410 = this;
return cljs.core.pr_str.call(null,this__9410);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__9411 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq.call(null,this__9411.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__9412 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq_from.call(null,this__9412.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__9413 = this;
return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__9414 = this;
return cljs.core._comparator.call(null,this__9414.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9415 = this;
return cljs.core.keys.call(null,this__9415.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__9416 = this;
return (new cljs.core.PersistentTreeSet(this__9416.meta,cljs.core.dissoc.call(null,this__9416.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9417 = this;
return cljs.core.count.call(null,this__9417.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9418 = this;
var and__3822__auto____9419 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____9419)
{var and__3822__auto____9420 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____9420)
{return cljs.core.every_QMARK_.call(null,(function (p1__9374_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__9374_SHARP_);
}),other);
} else
{return and__3822__auto____9420;
}
} else
{return and__3822__auto____9419;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9421 = this;
return (new cljs.core.PersistentTreeSet(meta,this__9421.tree_map,this__9421.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9422 = this;
return this__9422.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9423 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeSet.EMPTY,this__9423.meta);
});
cljs.core.PersistentTreeSet;
cljs.core.PersistentTreeSet.EMPTY = (new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map.call(null),0));
/**
* @param {...*} var_args
*/
cljs.core.hash_set = (function() {
var hash_set = null;
var hash_set__0 = (function (){
return cljs.core.PersistentHashSet.EMPTY;
});
var hash_set__1 = (function() { 
var G__9429__delegate = function (keys){
var in__9427 = cljs.core.seq.call(null,keys);
var out__9428 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if(cljs.core.seq.call(null,in__9427))
{{
var G__9430 = cljs.core.next.call(null,in__9427);
var G__9431 = cljs.core.conj_BANG_.call(null,out__9428,cljs.core.first.call(null,in__9427));
in__9427 = G__9430;
out__9428 = G__9431;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9428);
}
break;
}
};
var G__9429 = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9429__delegate.call(this, keys);
};
G__9429.cljs$lang$maxFixedArity = 0;
G__9429.cljs$lang$applyTo = (function (arglist__9432){
var keys = cljs.core.seq(arglist__9432);;
return G__9429__delegate(keys);
});
G__9429.cljs$lang$arity$variadic = G__9429__delegate;
return G__9429;
})()
;
hash_set = function(var_args){
var keys = var_args;
switch(arguments.length){
case 0:
return hash_set__0.call(this);
default:
return hash_set__1.cljs$lang$arity$variadic(cljs.core.array_seq(arguments, 0));
}
throw('Invalid arity: ' + arguments.length);
};
hash_set.cljs$lang$maxFixedArity = 0;
hash_set.cljs$lang$applyTo = hash_set__1.cljs$lang$applyTo;
hash_set.cljs$lang$arity$0 = hash_set__0;
hash_set.cljs$lang$arity$variadic = hash_set__1.cljs$lang$arity$variadic;
return hash_set;
})()
;
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
return cljs.core.apply.call(null,cljs.core.hash_set,coll);
});
/**
* Returns a new sorted set with supplied keys.
* @param {...*} var_args
*/
cljs.core.sorted_set = (function() { 
var sorted_set__delegate = function (keys){
return cljs.core.reduce.call(null,cljs.core._conj,cljs.core.PersistentTreeSet.EMPTY,keys);
};
var sorted_set = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_set__delegate.call(this, keys);
};
sorted_set.cljs$lang$maxFixedArity = 0;
sorted_set.cljs$lang$applyTo = (function (arglist__9433){
var keys = cljs.core.seq(arglist__9433);;
return sorted_set__delegate(keys);
});
sorted_set.cljs$lang$arity$variadic = sorted_set__delegate;
return sorted_set;
})()
;
/**
* Returns a new sorted set with supplied keys, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_set_by = (function() { 
var sorted_set_by__delegate = function (comparator,keys){
return cljs.core.reduce.call(null,cljs.core._conj,(new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map_by.call(null,comparator),0)),keys);
};
var sorted_set_by = function (comparator,var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_set_by__delegate.call(this, comparator, keys);
};
sorted_set_by.cljs$lang$maxFixedArity = 1;
sorted_set_by.cljs$lang$applyTo = (function (arglist__9435){
var comparator = cljs.core.first(arglist__9435);
var keys = cljs.core.rest(arglist__9435);
return sorted_set_by__delegate(comparator, keys);
});
sorted_set_by.cljs$lang$arity$variadic = sorted_set_by__delegate;
return sorted_set_by;
})()
;
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.vector_QMARK_.call(null,coll))
{var n__9441 = cljs.core.count.call(null,coll);
return cljs.core.reduce.call(null,(function (v,i){
var temp__3971__auto____9442 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));
if(cljs.core.truth_(temp__3971__auto____9442))
{var e__9443 = temp__3971__auto____9442;
return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__9443));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__9441,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__9434_SHARP_){
var temp__3971__auto____9444 = cljs.core.find.call(null,smap,p1__9434_SHARP_);
if(cljs.core.truth_(temp__3971__auto____9444))
{var e__9445 = temp__3971__auto____9444;
return cljs.core.second.call(null,e__9445);
} else
{return p1__9434_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__9475 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__9468,seen){
while(true){
var vec__9469__9470 = p__9468;
var f__9471 = cljs.core.nth.call(null,vec__9469__9470,0,null);
var xs__9472 = vec__9469__9470;
var temp__3974__auto____9473 = cljs.core.seq.call(null,xs__9472);
if(temp__3974__auto____9473)
{var s__9474 = temp__3974__auto____9473;
if(cljs.core.contains_QMARK_.call(null,seen,f__9471))
{{
var G__9476 = cljs.core.rest.call(null,s__9474);
var G__9477 = seen;
p__9468 = G__9476;
seen = G__9477;
continue;
}
} else
{return cljs.core.cons.call(null,f__9471,step.call(null,cljs.core.rest.call(null,s__9474),cljs.core.conj.call(null,seen,f__9471)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
}),null));
});
return step__9475.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});
cljs.core.butlast = (function butlast(s){
var ret__9480 = cljs.core.PersistentVector.EMPTY;
var s__9481 = s;
while(true){
if(cljs.core.next.call(null,s__9481))
{{
var G__9482 = cljs.core.conj.call(null,ret__9480,cljs.core.first.call(null,s__9481));
var G__9483 = cljs.core.next.call(null,s__9481);
ret__9480 = G__9482;
s__9481 = G__9483;
continue;
}
} else
{return cljs.core.seq.call(null,ret__9480);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.string_QMARK_.call(null,x))
{return x;
} else
{if((function (){var or__3824__auto____9486 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____9486)
{return or__3824__auto____9486;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__9487 = x.lastIndexOf("/");
if((i__9487 < 0))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__9487 + 1));
}
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Doesn't support name: "),cljs.core.str(x)].join('')));
} else
{return null;
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if((function (){var or__3824__auto____9490 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____9490)
{return or__3824__auto____9490;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__9491 = x.lastIndexOf("/");
if((i__9491 > -1))
{return cljs.core.subs.call(null,x,2,i__9491);
} else
{return null;
}
} else
{throw (new Error([cljs.core.str("Doesn't support namespace: "),cljs.core.str(x)].join('')));
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__9498 = cljs.core.ObjMap.EMPTY;
var ks__9499 = cljs.core.seq.call(null,keys);
var vs__9500 = cljs.core.seq.call(null,vals);
while(true){
if((function (){var and__3822__auto____9501 = ks__9499;
if(and__3822__auto____9501)
{return vs__9500;
} else
{return and__3822__auto____9501;
}
})())
{{
var G__9502 = cljs.core.assoc.call(null,map__9498,cljs.core.first.call(null,ks__9499),cljs.core.first.call(null,vs__9500));
var G__9503 = cljs.core.next.call(null,ks__9499);
var G__9504 = cljs.core.next.call(null,vs__9500);
map__9498 = G__9502;
ks__9499 = G__9503;
vs__9500 = G__9504;
continue;
}
} else
{return map__9498;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__2 = (function (k,x){
return x;
});
var max_key__3 = (function (k,x,y){
if((k.call(null,x) > k.call(null,y)))
{return x;
} else
{return y;
}
});
var max_key__4 = (function() { 
var G__9507__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__9492_SHARP_,p2__9493_SHARP_){
return max_key.call(null,k,p1__9492_SHARP_,p2__9493_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__9507 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9507__delegate.call(this, k, x, y, more);
};
G__9507.cljs$lang$maxFixedArity = 3;
G__9507.cljs$lang$applyTo = (function (arglist__9508){
var k = cljs.core.first(arglist__9508);
var x = cljs.core.first(cljs.core.next(arglist__9508));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9508)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9508)));
return G__9507__delegate(k, x, y, more);
});
G__9507.cljs$lang$arity$variadic = G__9507__delegate;
return G__9507;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return max_key__2.call(this,k,x);
case 3:
return max_key__3.call(this,k,x,y);
default:
return max_key__4.cljs$lang$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__4.cljs$lang$applyTo;
max_key.cljs$lang$arity$2 = max_key__2;
max_key.cljs$lang$arity$3 = max_key__3;
max_key.cljs$lang$arity$variadic = max_key__4.cljs$lang$arity$variadic;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__2 = (function (k,x){
return x;
});
var min_key__3 = (function (k,x,y){
if((k.call(null,x) < k.call(null,y)))
{return x;
} else
{return y;
}
});
var min_key__4 = (function() { 
var G__9509__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__9505_SHARP_,p2__9506_SHARP_){
return min_key.call(null,k,p1__9505_SHARP_,p2__9506_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__9509 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9509__delegate.call(this, k, x, y, more);
};
G__9509.cljs$lang$maxFixedArity = 3;
G__9509.cljs$lang$applyTo = (function (arglist__9510){
var k = cljs.core.first(arglist__9510);
var x = cljs.core.first(cljs.core.next(arglist__9510));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9510)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9510)));
return G__9509__delegate(k, x, y, more);
});
G__9509.cljs$lang$arity$variadic = G__9509__delegate;
return G__9509;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return min_key__2.call(this,k,x);
case 3:
return min_key__3.call(this,k,x,y);
default:
return min_key__4.cljs$lang$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__4.cljs$lang$applyTo;
min_key.cljs$lang$arity$2 = min_key__2;
min_key.cljs$lang$arity$3 = min_key__3;
min_key.cljs$lang$arity$variadic = min_key__4.cljs$lang$arity$variadic;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__2 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9513 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9513)
{var s__9514 = temp__3974__auto____9513;
return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__9514),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__9514)));
} else
{return null;
}
}),null));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case 2:
return partition_all__2.call(this,n,step);
case 3:
return partition_all__3.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
partition_all.cljs$lang$arity$2 = partition_all__2;
partition_all.cljs$lang$arity$3 = partition_all__3;
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9517 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9517)
{var s__9518 = temp__3974__auto____9517;
if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__9518))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__9518),take_while.call(null,pred,cljs.core.rest.call(null,s__9518)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
cljs.core.mk_bound_fn = (function mk_bound_fn(sc,test,key){
return (function (e){
var comp__9520 = cljs.core._comparator.call(null,sc);
return test.call(null,comp__9520.call(null,cljs.core._entry_key.call(null,sc,e),key),0);
});
});
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.subseq = (function() {
var subseq = null;
var subseq__3 = (function (sc,test,key){
var include__9532 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._GT_,cljs.core._GT__EQ_]).call(null,test)))
{var temp__3974__auto____9533 = cljs.core._sorted_seq_from.call(null,sc,key,true);
if(cljs.core.truth_(temp__3974__auto____9533))
{var vec__9534__9535 = temp__3974__auto____9533;
var e__9536 = cljs.core.nth.call(null,vec__9534__9535,0,null);
var s__9537 = vec__9534__9535;
if(cljs.core.truth_(include__9532.call(null,e__9536)))
{return s__9537;
} else
{return cljs.core.next.call(null,s__9537);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__9532,cljs.core._sorted_seq.call(null,sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____9538 = cljs.core._sorted_seq_from.call(null,sc,start_key,true);
if(cljs.core.truth_(temp__3974__auto____9538))
{var vec__9539__9540 = temp__3974__auto____9538;
var e__9541 = cljs.core.nth.call(null,vec__9539__9540,0,null);
var s__9542 = vec__9539__9540;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,start_test,start_key).call(null,e__9541))?s__9542:cljs.core.next.call(null,s__9542)));
} else
{return null;
}
});
subseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return subseq__3.call(this,sc,start_test,start_key);
case 5:
return subseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw('Invalid arity: ' + arguments.length);
};
subseq.cljs$lang$arity$3 = subseq__3;
subseq.cljs$lang$arity$5 = subseq__5;
return subseq;
})()
;
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a reverse seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.rsubseq = (function() {
var rsubseq = null;
var rsubseq__3 = (function (sc,test,key){
var include__9554 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._LT_,cljs.core._LT__EQ_]).call(null,test)))
{var temp__3974__auto____9555 = cljs.core._sorted_seq_from.call(null,sc,key,false);
if(cljs.core.truth_(temp__3974__auto____9555))
{var vec__9556__9557 = temp__3974__auto____9555;
var e__9558 = cljs.core.nth.call(null,vec__9556__9557,0,null);
var s__9559 = vec__9556__9557;
if(cljs.core.truth_(include__9554.call(null,e__9558)))
{return s__9559;
} else
{return cljs.core.next.call(null,s__9559);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__9554,cljs.core._sorted_seq.call(null,sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____9560 = cljs.core._sorted_seq_from.call(null,sc,end_key,false);
if(cljs.core.truth_(temp__3974__auto____9560))
{var vec__9561__9562 = temp__3974__auto____9560;
var e__9563 = cljs.core.nth.call(null,vec__9561__9562,0,null);
var s__9564 = vec__9561__9562;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,end_test,end_key).call(null,e__9563))?s__9564:cljs.core.next.call(null,s__9564)));
} else
{return null;
}
});
rsubseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return rsubseq__3.call(this,sc,start_test,start_key);
case 5:
return rsubseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw('Invalid arity: ' + arguments.length);
};
rsubseq.cljs$lang$arity$3 = rsubseq__3;
rsubseq.cljs$lang$arity$5 = rsubseq__5;
return rsubseq;
})()
;

goog.provide('cljs.core.Range');

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step,__hash){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32375006;
})
cljs.core.Range.cljs$lang$type = true;
cljs.core.Range.cljs$lang$ctorPrSeq = (function (this__2322__auto__){
return cljs.core.list.call(null,"cljs.core/Range");
});
cljs.core.Range.cljs$lang$ctorPrWriter = (function (this__2322__auto__,writer__2323__auto__){
return cljs.core._write.call(null,writer__2323__auto__,"cljs.core/Range");
});
cljs.core.Range.prototype.cljs$core$IHash$_hash$arity$1 = (function (rng){
var this__9565 = this;
var h__2203__auto____9566 = this__9565.__hash;
if(!((h__2203__auto____9566 == null)))
{return h__2203__auto____9566;
} else
{var h__2203__auto____9567 = cljs.core.hash_coll.call(null,rng);
this__9565.__hash = h__2203__auto____9567;
return h__2203__auto____9567;
}
});
cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){
var this__9568 = this;
if((this__9568.step > 0))
{if(((this__9568.start + this__9568.step) < this__9568.end))
{return (new cljs.core.Range(this__9568.meta,(this__9568.start + this__9568.step),this__9568.end,this__9568.step,null));
} else
{return null;
}
} else
{if(((this__9568.start + this__9568.step) > this__9568.end))
{return (new cljs.core.Range(this__9568.meta,(this__9568.start + this__9568.step),this__9568.end,this__9568.step,null));
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var this__9569 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.toString = (function (){
var this__9570 = this;
var this__9571 = this;
return cljs.core.pr_str.call(null,this__9571);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var this__9572 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){
var this__9573 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var this__9574 = this;
if((this__9574.step > 0))
{if((this__9574.start < this__9574.end))
{return rng;
} else
{return null;
}
} else
{if((this__9574.start > this__9574.end))
{return rng;
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var this__9575 = this;
if(cljs.core.not.call(null,rng.cljs$core$ISeqable$_seq$arity$1(rng)))
{return 0;
} else
{return Math.ceil(((this__9575.end - this__9575.start) / this__9575.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var this__9576 = this;
return this__9576.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var this__9577 = this;
if(!((rng.cljs$core$ISeqable$_seq$arity$1(rng) == null)))
{return (new cljs.core.Range(this__9577.meta,(this__9577.start + this__9577.step),this__9577.end,this__9577.step,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var this__9578 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta){
var this__9579 = this;
return (new cljs.core.Range(meta,this__9579.start,this__9579.end,this__9579.step,this__9579.__hash));
});
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var this__9580 = this;
return this__9580.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var this__9581 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__9581.start + (n * this__9581.step));
} else
{if((function (){var and__3822__auto____9582 = (this__9581.start > this__9581.end);
if(and__3822__auto____9582)
{return (this__9581.step === 0);
} else
{return and__3822__auto____9582;
}
})())
{return this__9581.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var this__9583 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__9583.start + (n * this__9583.step));
} else
{if((function (){var and__3822__auto____9584 = (this__9583.start > this__9583.end);
if(and__3822__auto____9584)
{return (this__9583.step === 0);
} else
{return and__3822__auto____9584;
}
})())
{return this__9583.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var this__9585 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9585.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__0 = (function (){
return range.call(null,0,Number.MAX_VALUE,1);
});
var range__1 = (function (end){
return range.call(null,0,end,1);
});
var range__2 = (function (start,end){
return range.call(null,start,end,1);
});
var range__3 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step,null));
});
range = function(start,end,step){
switch(arguments.length){
case 0:
return range__0.call(this);
case 1:
return range__1.call(this,start);
case 2:
return range__2.call(this,start,end);
case 3:
return range__3.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
range.cljs$lang$arity$0 = range__0;
range.cljs$lang$arity$1 = range__1;
range.cljs$lang$arity$2 = range__2;
range.cljs$lang$arity$3 = range__3;
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9588 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9588)
{var s__9589 = temp__3974__auto____9588;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__9589),take_nth.call(null,n,cljs.core.drop.call(null,n,s__9589)));
} else
{return null;
}
}),null));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)], true);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9596 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9596)
{var s__9597 = temp__3974__auto____9596;
var fst__9598 = cljs.core.first.call(null,s__9597);
var fv__9599 = f.call(null,fst__9598);
var run__9600 = cljs.core.cons.call(null,fst__9598,cljs.core.take_while.call(null,(function (p1__9590_SHARP_){
return cljs.core._EQ_.call(null,fv__9599,f.call(null,p1__9590_SHARP_));
}),cljs.core.next.call(null,s__9597)));
return cljs.core.cons.call(null,run__9600,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__9600),s__9597))));
} else
{return null;
}
}),null));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.assoc_BANG_.call(null,counts,x,(cljs.core._lookup.call(null,counts,x,0) + 1));
}),cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY),coll));
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____9615 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____9615)
{var s__9616 = temp__3971__auto____9615;
return reductions.call(null,f,cljs.core.first.call(null,s__9616),cljs.core.rest.call(null,s__9616));
} else
{return cljs.core.list.call(null,f.call(null));
}
}),null));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9617 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9617)
{var s__9618 = temp__3974__auto____9617;
return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__9618)),cljs.core.rest.call(null,s__9618));
} else
{return null;
}
}),null)));
});
reductions = function(f,init,coll){
switch(arguments.length){
case 2:
return reductions__2.call(this,f,init);
case 3:
return reductions__3.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
reductions.cljs$lang$arity$2 = reductions__2;
reductions.cljs$lang$arity$3 = reductions__3;
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__1 = (function (f){
return (function() {
var G__9621 = null;
var G__9621__0 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__9621__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__9621__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__9621__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__9621__4 = (function() { 
var G__9622__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__9622 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9622__delegate.call(this, x, y, z, args);
};
G__9622.cljs$lang$maxFixedArity = 3;
G__9622.cljs$lang$applyTo = (function (arglist__9623){
var x = cljs.core.first(arglist__9623);
var y = cljs.core.first(cljs.core.next(arglist__9623));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9623)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9623)));
return G__9622__delegate(x, y, z, args);
});
G__9622.cljs$lang$arity$variadic = G__9622__delegate;
return G__9622;
})()
;
G__9621 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9621__0.call(this);
case 1:
return G__9621__1.call(this,x);
case 2:
return G__9621__2.call(this,x,y);
case 3:
return G__9621__3.call(this,x,y,z);
default:
return G__9621__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9621.cljs$lang$maxFixedArity = 3;
G__9621.cljs$lang$applyTo = G__9621__4.cljs$lang$applyTo;
return G__9621;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__9624 = null;
var G__9624__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__9624__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__9624__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__9624__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__9624__4 = (function() { 
var G__9625__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__9625 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9625__delegate.call(this, x, y, z, args);
};
G__9625.cljs$lang$maxFixedArity = 3;
G__9625.cljs$lang$applyTo = (function (arglist__9626){
var x = cljs.core.first(arglist__9626);
var y = cljs.core.first(cljs.core.next(arglist__9626));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9626)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9626)));
return G__9625__delegate(x, y, z, args);
});
G__9625.cljs$lang$arity$variadic = G__9625__delegate;
return G__9625;
})()
;
G__9624 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9624__0.call(this);
case 1:
return G__9624__1.call(this,x);
case 2:
return G__9624__2.call(this,x,y);
case 3:
return G__9624__3.call(this,x,y,z);
default:
return G__9624__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9624.cljs$lang$maxFixedArity = 3;
G__9624.cljs$lang$applyTo = G__9624__4.cljs$lang$applyTo;
return G__9624;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__9627 = null;
var G__9627__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__9627__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__9627__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__9627__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__9627__4 = (function() { 
var G__9628__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__9628 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9628__delegate.call(this, x, y, z, args);
};
G__9628.cljs$lang$maxFixedArity = 3;
G__9628.cljs$lang$applyTo = (function (arglist__9629){
var x = cljs.core.first(arglist__9629);
var y = cljs.core.first(cljs.core.next(arglist__9629));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9629)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9629)));
return G__9628__delegate(x, y, z, args);
});
G__9628.cljs$lang$arity$variadic = G__9628__delegate;
return G__9628;
})()
;
G__9627 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9627__0.call(this);
case 1:
return G__9627__1.call(this,x);
case 2:
return G__9627__2.call(this,x,y);
case 3:
return G__9627__3.call(this,x,y,z);
default:
return G__9627__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9627.cljs$lang$maxFixedArity = 3;
G__9627.cljs$lang$applyTo = G__9627__4.cljs$lang$applyTo;
return G__9627;
})()
});
var juxt__4 = (function() { 
var G__9630__delegate = function (f,g,h,fs){
var fs__9620 = cljs.core.list_STAR_.call(null,f,g,h,fs);
return (function() {
var G__9631 = null;
var G__9631__0 = (function (){
return cljs.core.reduce.call(null,(function (p1__9601_SHARP_,p2__9602_SHARP_){
return cljs.core.conj.call(null,p1__9601_SHARP_,p2__9602_SHARP_.call(null));
}),cljs.core.PersistentVector.EMPTY,fs__9620);
});
var G__9631__1 = (function (x){
return cljs.core.reduce.call(null,(function (p1__9603_SHARP_,p2__9604_SHARP_){
return cljs.core.conj.call(null,p1__9603_SHARP_,p2__9604_SHARP_.call(null,x));
}),cljs.core.PersistentVector.EMPTY,fs__9620);
});
var G__9631__2 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__9605_SHARP_,p2__9606_SHARP_){
return cljs.core.conj.call(null,p1__9605_SHARP_,p2__9606_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.EMPTY,fs__9620);
});
var G__9631__3 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__9607_SHARP_,p2__9608_SHARP_){
return cljs.core.conj.call(null,p1__9607_SHARP_,p2__9608_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.EMPTY,fs__9620);
});
var G__9631__4 = (function() { 
var G__9632__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__9609_SHARP_,p2__9610_SHARP_){
return cljs.core.conj.call(null,p1__9609_SHARP_,cljs.core.apply.call(null,p2__9610_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.EMPTY,fs__9620);
};
var G__9632 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9632__delegate.call(this, x, y, z, args);
};
G__9632.cljs$lang$maxFixedArity = 3;
G__9632.cljs$lang$applyTo = (function (arglist__9633){
var x = cljs.core.first(arglist__9633);
var y = cljs.core.first(cljs.core.next(arglist__9633));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9633)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9633)));
return G__9632__delegate(x, y, z, args);
});
G__9632.cljs$lang$arity$variadic = G__9632__delegate;
return G__9632;
})()
;
G__9631 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9631__0.call(this);
case 1:
return G__9631__1.call(this,x);
case 2:
return G__9631__2.call(this,x,y);
case 3:
return G__9631__3.call(this,x,y,z);
default:
return G__9631__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9631.cljs$lang$maxFixedArity = 3;
G__9631.cljs$lang$applyTo = G__9631__4.cljs$lang$applyTo;
return G__9631;
})()
};
var G__9630 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9630__delegate.call(this, f, g, h, fs);
};
G__9630.cljs$lang$maxFixedArity = 3;
G__9630.cljs$lang$applyTo = (function (arglist__9634){
var f = cljs.core.first(arglist__9634);
var g = cljs.core.first(cljs.core.next(arglist__9634));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9634)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9634)));
return G__9630__delegate(f, g, h, fs);
});
G__9630.cljs$lang$arity$variadic = G__9630__delegate;
return G__9630;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case 1:
return juxt__1.call(this,f);
case 2:
return juxt__2.call(this,f,g);
case 3:
return juxt__3.call(this,f,g,h);
default:
return juxt__4.cljs$lang$arity$variadic(f,g,h, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__4.cljs$lang$applyTo;
juxt.cljs$lang$arity$1 = juxt__1;
juxt.cljs$lang$arity$2 = juxt__2;
juxt.cljs$lang$arity$3 = juxt__3;
juxt.cljs$lang$arity$variadic = juxt__4.cljs$lang$arity$variadic;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__1 = (function (coll){
while(true){
if(cljs.core.seq.call(null,coll))
{{
var G__9637 = cljs.core.next.call(null,coll);
coll = G__9637;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__2 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____9636 = cljs.core.seq.call(null,coll);
if(and__3822__auto____9636)
{return (n > 0);
} else
{return and__3822__auto____9636;
}
})()))
{{
var G__9638 = (n - 1);
var G__9639 = cljs.core.next.call(null,coll);
n = G__9638;
coll = G__9639;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case 1:
return dorun__1.call(this,n);
case 2:
return dorun__2.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
dorun.cljs$lang$arity$1 = dorun__1;
dorun.cljs$lang$arity$2 = dorun__2;
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__1 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__2 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case 1:
return doall__1.call(this,n);
case 2:
return doall__2.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
doall.cljs$lang$arity$1 = doall__1;
doall.cljs$lang$arity$2 = doall__2;
return doall;
})()
;
cljs.core.regexp_QMARK_ = (function regexp_QMARK_(o){
return o instanceof RegExp;
});
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__9641 = re.exec(s);
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__9641),s))
{if((cljs.core.count.call(null,matches__9641) === 1))
{return cljs.core.first.call(null,matches__9641);
} else
{return cljs.core.vec.call(null,matches__9641);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
var matches__9643 = re.exec(s);
if((matches__9643 == null))
{return null;
} else
{if((cljs.core.count.call(null,matches__9643) === 1))
{return cljs.core.first.call(null,matches__9643);
} else
{return cljs.core.vec.call(null,matches__9643);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__9648 = cljs.core.re_find.call(null,re,s);
var match_idx__9649 = s.search(re);
var match_str__9650 = ((cljs.core.coll_QMARK_.call(null,match_data__9648))?cljs.core.first.call(null,match_data__9648):match_data__9648);
var post_match__9651 = cljs.core.subs.call(null,s,(match_idx__9649 + cljs.core.count.call(null,match_str__9650)));
if(cljs.core.truth_(match_data__9648))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__9648,re_seq.call(null,re,post_match__9651));
}),null));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__9658__9659 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___9660 = cljs.core.nth.call(null,vec__9658__9659,0,null);
var flags__9661 = cljs.core.nth.call(null,vec__9658__9659,1,null);
var pattern__9662 = cljs.core.nth.call(null,vec__9658__9659,2,null);
return (new RegExp(pattern__9662,flags__9661));
});
/**
* Do not use this.  It is kept for backwards compatibility with the
* old IPrintable protocol.
*/
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin], true),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep], true),cljs.core.map.call(null,(function (p1__9652_SHARP_){
return print_one.call(null,p1__9652_SHARP_,opts);
}),coll))),cljs.core.PersistentVector.fromArray([end], true));
});
cljs.core.pr_sequential_writer = (function pr_sequential_writer(writer,print_one,begin,sep,end,opts,coll){
cljs.core._write.call(null,writer,begin);
if(cljs.core.seq.call(null,coll))
{print_one.call(null,cljs.core.first.call(null,coll),writer,opts);
} else
{}
var G__9666__9667 = cljs.core.seq.call(null,cljs.core.next.call(null,coll));
while(true){
if(G__9666__9667)
{var o__9668 = cljs.core.first.call(null,G__9666__9667);
cljs.core._write.call(null,writer,sep);
print_one.call(null,o__9668,writer,opts);
{
var G__9669 = cljs.core.next.call(null,G__9666__9667);
G__9666__9667 = G__9669;
continue;
}
} else
{}
break;
}
return cljs.core._write.call(null,writer,end);
});
/**
* @param {...*} var_args
*/
cljs.core.write_all = (function() { 
var write_all__delegate = function (writer,ss){
var G__9673__9674 = cljs.core.seq.call(null,ss);
while(true){
if(G__9673__9674)
{var s__9675 = cljs.core.first.call(null,G__9673__9674);
cljs.core._write.call(null,writer,s__9675);
{
var G__9676 = cljs.core.next.call(null,G__9673__9674);
G__9673__9674 = G__9676;
continue;
}
} else
{return null;
}
break;
}
};
var write_all = function (writer,var_args){
var ss = null;
if (goog.isDef(var_args)) {
  ss = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return write_all__delegate.call(this, writer, ss);
};
write_all.cljs$lang$maxFixedArity = 1;
write_all.cljs$lang$applyTo = (function (arglist__9677){
var writer = cljs.core.first(arglist__9677);
var ss = cljs.core.rest(arglist__9677);
return write_all__delegate(writer, ss);
});
write_all.cljs$lang$arity$variadic = write_all__delegate;
return write_all;
})()
;
cljs.core.string_print = (function string_print(x){
cljs.core._STAR_print_fn_STAR_.call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});

goog.provide('cljs.core.StringBufferWriter');

/**
* @constructor
*/
cljs.core.StringBufferWriter = (function (sb){
this.sb = sb;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1073741824;
})
cljs.core.StringBufferWriter.cljs$lang$type = true;
cljs.core.StringBufferWriter.cljs$lang$ctorPrSeq = (function (this__2322__auto__){
return cljs.core.list.call(null,"cljs.core/StringBufferWriter");
});
cljs.core.StringBufferWriter.cljs$lang$ctorPrWriter = (function (this__2322__auto__,writer__2323__auto__){
return cljs.core._write.call(null,writer__2323__auto__,"cljs.core/StringBufferWriter");
});
cljs.core.StringBufferWriter.prototype.cljs$core$IWriter$_write$arity$2 = (function (_,s){
var this__9678 = this;
return this__9678.sb.append(s);
});
cljs.core.StringBufferWriter.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var this__9679 = this;
return null;
});
cljs.core.StringBufferWriter;
/**
* Do not use this.  It is kept for backwards compatibility with the
* old IPrintable protocol.
*/
cljs.core.pr_seq = (function pr_seq(obj,opts){
if((obj == null))
{return cljs.core.list.call(null,"nil");
} else
{if((void 0 === obj))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if("\uFDD0'else")
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3822__auto____9689 = cljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3822__auto____9689))
{var and__3822__auto____9693 = (function (){var G__9690__9691 = obj;
if(G__9690__9691)
{if((function (){var or__3824__auto____9692 = (G__9690__9691.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____9692)
{return or__3824__auto____9692;
} else
{return G__9690__9691.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__9690__9691.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__9690__9691);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__9690__9691);
}
})();
if(cljs.core.truth_(and__3822__auto____9693))
{return cljs.core.meta.call(null,obj);
} else
{return and__3822__auto____9693;
}
} else
{return and__3822__auto____9689;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"], true),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "], true)):null),(((function (){var and__3822__auto____9694 = !((obj == null));
if(and__3822__auto____9694)
{return obj.cljs$lang$type;
} else
{return and__3822__auto____9694;
}
})())?obj.cljs$lang$ctorPrSeq(obj):(((function (){var G__9695__9696 = obj;
if(G__9695__9696)
{if((function (){var or__3824__auto____9697 = (G__9695__9696.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3824__auto____9697)
{return or__3824__auto____9697;
} else
{return G__9695__9696.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__9695__9696.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__9695__9696);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__9695__9696);
}
})())?cljs.core._pr_seq.call(null,obj,opts):(cljs.core.truth_(cljs.core.regexp_QMARK_.call(null,obj))?cljs.core.list.call(null,"#\"",obj.source,"\""):(("\uFDD0'else")?cljs.core.list.call(null,"#<",[cljs.core.str(obj)].join(''),">"):null)))));
} else
{return null;
}
}
}
});
/**
* Prefer this to pr-seq, because it makes the printing function
* configurable, allowing efficient implementations such as appending
* to a StringBuffer.
*/
cljs.core.pr_writer = (function pr_writer(obj,writer,opts){
if((obj == null))
{return cljs.core._write.call(null,writer,"nil");
} else
{if((void 0 === obj))
{return cljs.core._write.call(null,writer,"#<undefined>");
} else
{if("\uFDD0'else")
{if(cljs.core.truth_((function (){var and__3822__auto____9710 = cljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3822__auto____9710))
{var and__3822__auto____9714 = (function (){var G__9711__9712 = obj;
if(G__9711__9712)
{if((function (){var or__3824__auto____9713 = (G__9711__9712.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____9713)
{return or__3824__auto____9713;
} else
{return G__9711__9712.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__9711__9712.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__9711__9712);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__9711__9712);
}
})();
if(cljs.core.truth_(and__3822__auto____9714))
{return cljs.core.meta.call(null,obj);
} else
{return and__3822__auto____9714;
}
} else
{return and__3822__auto____9710;
}
})()))
{cljs.core._write.call(null,writer,"^");
pr_writer.call(null,cljs.core.meta.call(null,obj),writer,opts);
cljs.core._write.call(null,writer," ");
} else
{}
if((function (){var and__3822__auto____9715 = !((obj == null));
if(and__3822__auto____9715)
{return obj.cljs$lang$type;
} else
{return and__3822__auto____9715;
}
})())
{return obj.cljs$lang$ctorPrWriter(writer,opts);
} else
{if((function (){var G__9716__9717 = obj;
if(G__9716__9717)
{if((function (){var or__3824__auto____9718 = (G__9716__9717.cljs$lang$protocol_mask$partition0$ & 2147483648);
if(or__3824__auto____9718)
{return or__3824__auto____9718;
} else
{return G__9716__9717.cljs$core$IPrintWithWriter$;
}
})())
{return true;
} else
{if((!G__9716__9717.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintWithWriter,G__9716__9717);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintWithWriter,G__9716__9717);
}
})())
{return cljs.core._pr_writer.call(null,obj,writer,opts);
} else
{if((function (){var G__9719__9720 = obj;
if(G__9719__9720)
{if((function (){var or__3824__auto____9721 = (G__9719__9720.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3824__auto____9721)
{return or__3824__auto____9721;
} else
{return G__9719__9720.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__9719__9720.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__9719__9720);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__9719__9720);
}
})())
{return cljs.core.apply.call(null,cljs.core.write_all,writer,cljs.core._pr_seq.call(null,obj,opts));
} else
{if(cljs.core.truth_(cljs.core.regexp_QMARK_.call(null,obj)))
{return cljs.core.write_all.call(null,writer,"#\"",obj.source,"\"");
} else
{if("\uFDD0'else")
{return cljs.core.write_all.call(null,writer,"#<",[cljs.core.str(obj)].join(''),">");
} else
{return null;
}
}
}
}
}
} else
{return null;
}
}
}
});
cljs.core.pr_seq_writer = (function pr_seq_writer(objs,writer,opts){
cljs.core.pr_writer.call(null,cljs.core.first.call(null,objs),writer,opts);
var G__9725__9726 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));
while(true){
if(G__9725__9726)
{var obj__9727 = cljs.core.first.call(null,G__9725__9726);
cljs.core._write.call(null,writer," ");
cljs.core.pr_writer.call(null,obj__9727,writer,opts);
{
var G__9728 = cljs.core.next.call(null,G__9725__9726);
G__9725__9726 = G__9728;
continue;
}
} else
{return null;
}
break;
}
});
cljs.core.pr_sb_with_opts = (function pr_sb_with_opts(objs,opts){
var sb__9731 = (new goog.string.StringBuffer());
var writer__9732 = (new cljs.core.StringBufferWriter(sb__9731));
cljs.core.pr_seq_writer.call(null,objs,writer__9732,opts);
cljs.core._flush.call(null,writer__9732);
return sb__9731;
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
if(cljs.core.empty_QMARK_.call(null,objs))
{return "";
} else
{return [cljs.core.str(cljs.core.pr_sb_with_opts.call(null,objs,opts))].join('');
}
});
/**
* Same as pr-str-with-opts followed by (newline)
*/
cljs.core.prn_str_with_opts = (function prn_str_with_opts(objs,opts){
if(cljs.core.empty_QMARK_.call(null,objs))
{return "\n";
} else
{var sb__9734 = cljs.core.pr_sb_with_opts.call(null,objs,opts);
sb__9734.append("\n");
return [cljs.core.str(sb__9734)].join('');
}
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
return cljs.core.string_print.call(null,cljs.core.pr_str_with_opts.call(null,objs,opts));
});
cljs.core.newline = (function newline(opts){
cljs.core.string_print.call(null,"\n");
if(cljs.core.truth_(cljs.core._lookup.call(null,opts,"\uFDD0'flush-on-newline",null)))
{return cljs.core.flush.call(null);
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["\uFDD0'flush-on-newline","\uFDD0'readably","\uFDD0'meta","\uFDD0'dup"],{"\uFDD0'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"\uFDD0'readably":cljs.core._STAR_print_readably_STAR_,"\uFDD0'meta":cljs.core._STAR_print_meta_STAR_,"\uFDD0'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__9735){
var objs = cljs.core.seq(arglist__9735);;
return pr_str__delegate(objs);
});
pr_str.cljs$lang$arity$variadic = pr_str__delegate;
return pr_str;
})()
;
/**
* Same as pr-str followed by (newline)
* @param {...*} var_args
*/
cljs.core.prn_str = (function() { 
var prn_str__delegate = function (objs){
return cljs.core.prn_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var prn_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn_str__delegate.call(this, objs);
};
prn_str.cljs$lang$maxFixedArity = 0;
prn_str.cljs$lang$applyTo = (function (arglist__9736){
var objs = cljs.core.seq(arglist__9736);;
return prn_str__delegate(objs);
});
prn_str.cljs$lang$arity$variadic = prn_str__delegate;
return prn_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__9737){
var objs = cljs.core.seq(arglist__9737);;
return pr__delegate(objs);
});
pr.cljs$lang$arity$variadic = pr__delegate;
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__9738){
var objs = cljs.core.seq(arglist__9738);;
return cljs_core_print__delegate(objs);
});
cljs_core_print.cljs$lang$arity$variadic = cljs_core_print__delegate;
return cljs_core_print;
})()
;
/**
* print to a string, returning it
* @param {...*} var_args
*/
cljs.core.print_str = (function() { 
var print_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var print_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return print_str__delegate.call(this, objs);
};
print_str.cljs$lang$maxFixedArity = 0;
print_str.cljs$lang$applyTo = (function (arglist__9739){
var objs = cljs.core.seq(arglist__9739);;
return print_str__delegate(objs);
});
print_str.cljs$lang$arity$variadic = print_str__delegate;
return print_str;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var println = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__9740){
var objs = cljs.core.seq(arglist__9740);;
return println__delegate(objs);
});
println.cljs$lang$arity$variadic = println__delegate;
return println;
})()
;
/**
* println to a string, returning it
* @param {...*} var_args
*/
cljs.core.println_str = (function() { 
var println_str__delegate = function (objs){
return cljs.core.prn_str_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var println_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println_str__delegate.call(this, objs);
};
println_str.cljs$lang$maxFixedArity = 0;
println_str.cljs$lang$applyTo = (function (arglist__9741){
var objs = cljs.core.seq(arglist__9741);;
return println_str__delegate(objs);
});
println_str.cljs$lang$arity$variadic = println_str__delegate;
return println_str;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var prn = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__9742){
var objs = cljs.core.seq(arglist__9742);;
return prn__delegate(objs);
});
prn.cljs$lang$arity$variadic = prn__delegate;
return prn;
})()
;
/**
* Prints formatted output, as per format
* @param {...*} var_args
*/
cljs.core.printf = (function() { 
var printf__delegate = function (fmt,args){
return cljs.core.print.call(null,cljs.core.apply.call(null,cljs.core.format,fmt,args));
};
var printf = function (fmt,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return printf__delegate.call(this, fmt, args);
};
printf.cljs$lang$maxFixedArity = 1;
printf.cljs$lang$applyTo = (function (arglist__9743){
var fmt = cljs.core.first(arglist__9743);
var args = cljs.core.rest(arglist__9743);
return printf__delegate(fmt, args);
});
printf.cljs$lang$arity$variadic = printf__delegate;
return printf;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__9744 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__9744,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,[cljs.core.str(n)].join(''));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Subvec.prototype.cljs$core$IPrintable$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.ChunkedCons.prototype.cljs$core$IPrintable$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__9745 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__9745,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__9746 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__9746,"{",", ","}",opts,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#queue ["," ","]",opts,cljs.core.seq.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.RSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.RSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,[cljs.core.str(bool)].join(''));
}));
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.keyword_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str(":"),cljs.core.str((function (){var temp__3974__auto____9747 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____9747))
{var nspc__9748 = temp__3974__auto____9747;
return [cljs.core.str(nspc__9748),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str((function (){var temp__3974__auto____9749 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____9749))
{var nspc__9750 = temp__3974__auto____9749;
return [cljs.core.str(nspc__9750),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if("\uFDD0'else")
{return cljs.core.list.call(null,(cljs.core.truth_((new cljs.core.Keyword("\uFDD0'readably")).call(null,opts))?goog.string.quote(obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.NodeSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.RedNode.prototype.cljs$core$IPrintable$ = true;
cljs.core.RedNode.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__9751 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__9751,"{",", ","}",opts,coll);
});
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
(cljs.core.IPrintable["function"] = true);
(cljs.core._pr_seq["function"] = (function (this$){
return cljs.core.list.call(null,"#<",[cljs.core.str(this$)].join(''),">");
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
cljs.core.BlackNode.prototype.cljs$core$IPrintable$ = true;
cljs.core.BlackNode.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
Date.prototype.cljs$core$IPrintable$ = true;
Date.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (d,_){
var normalize__9753 = (function (n,len){
var ns__9752 = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count.call(null,ns__9752) < len))
{{
var G__9755 = [cljs.core.str("0"),cljs.core.str(ns__9752)].join('');
ns__9752 = G__9755;
continue;
}
} else
{return ns__9752;
}
break;
}
});
return cljs.core.list.call(null,[cljs.core.str("#inst \""),cljs.core.str(d.getUTCFullYear()),cljs.core.str("-"),cljs.core.str(normalize__9753.call(null,(d.getUTCMonth() + 1),2)),cljs.core.str("-"),cljs.core.str(normalize__9753.call(null,d.getUTCDate(),2)),cljs.core.str("T"),cljs.core.str(normalize__9753.call(null,d.getUTCHours(),2)),cljs.core.str(":"),cljs.core.str(normalize__9753.call(null,d.getUTCMinutes(),2)),cljs.core.str(":"),cljs.core.str(normalize__9753.call(null,d.getUTCSeconds(),2)),cljs.core.str("."),cljs.core.str(normalize__9753.call(null,d.getUTCMilliseconds(),3)),cljs.core.str("-"),cljs.core.str("00:00\"")].join(''));
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__9754 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__9754,"{",", ","}",opts,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.HashMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var pr_pair__9756 = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair__9756,"{",", ","}",opts,coll);
});
(cljs.core.IPrintWithWriter["number"] = true);
(cljs.core._pr_writer["number"] = (function (n,writer,opts){
(1 / 0);
return cljs.core._write.call(null,writer,[cljs.core.str(n)].join(''));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll);
});
cljs.core.Subvec.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"["," ","]",opts,coll);
});
cljs.core.ChunkedCons.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var pr_pair__9757 = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair__9757,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var pr_pair__9758 = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair__9758,"{",", ","}",opts,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"#queue ["," ","]",opts,cljs.core.seq.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll);
});
cljs.core.RSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.RSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintWithWriter["boolean"] = true);
(cljs.core._pr_writer["boolean"] = (function (bool,writer,opts){
return cljs.core._write.call(null,writer,[cljs.core.str(bool)].join(''));
}));
(cljs.core.IPrintWithWriter["string"] = true);
(cljs.core._pr_writer["string"] = (function (obj,writer,opts){
if(cljs.core.keyword_QMARK_.call(null,obj))
{cljs.core._write.call(null,writer,":");
var temp__3974__auto____9759 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____9759))
{var nspc__9760 = temp__3974__auto____9759;
cljs.core.write_all.call(null,writer,[cljs.core.str(nspc__9760)].join(''),"/");
} else
{}
return cljs.core._write.call(null,writer,cljs.core.name.call(null,obj));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{var temp__3974__auto____9761 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____9761))
{var nspc__9762 = temp__3974__auto____9761;
cljs.core.write_all.call(null,writer,[cljs.core.str(nspc__9762)].join(''),"/");
} else
{}
return cljs.core._write.call(null,writer,cljs.core.name.call(null,obj));
} else
{if("\uFDD0'else")
{if(cljs.core.truth_((new cljs.core.Keyword("\uFDD0'readably")).call(null,opts)))
{return cljs.core._write.call(null,writer,goog.string.quote(obj));
} else
{return cljs.core._write.call(null,writer,obj);
}
} else
{return null;
}
}
}
}));
cljs.core.NodeSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll);
});
cljs.core.RedNode.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.RedNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"["," ","]",opts,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var pr_pair__9763 = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair__9763,"{",", ","}",opts,coll);
});
cljs.core.Vector.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"["," ","]",opts,coll);
});
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"#{"," ","}",opts,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.List.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll);
});
(cljs.core.IPrintWithWriter["array"] = true);
(cljs.core._pr_writer["array"] = (function (a,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"#<Array [",", ","]>",opts,a);
}));
(cljs.core.IPrintWithWriter["function"] = true);
(cljs.core._pr_writer["function"] = (function (this$,writer,_){
return cljs.core.write_all.call(null,writer,"#<",[cljs.core.str(this$)].join(''),">");
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core._write.call(null,writer,"()");
});
cljs.core.BlackNode.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.BlackNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"["," ","]",opts,coll);
});
Date.prototype.cljs$core$IPrintWithWriter$ = true;
Date.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,writer,_){
var normalize__9765 = (function (n,len){
var ns__9764 = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count.call(null,ns__9764) < len))
{{
var G__9767 = [cljs.core.str("0"),cljs.core.str(ns__9764)].join('');
ns__9764 = G__9767;
continue;
}
} else
{return ns__9764;
}
break;
}
});
return cljs.core.write_all.call(null,writer,"#inst \"",[cljs.core.str(d.getUTCFullYear())].join(''),"-",normalize__9765.call(null,(d.getUTCMonth() + 1),2),"-",normalize__9765.call(null,d.getUTCDate(),2),"T",normalize__9765.call(null,d.getUTCHours(),2),":",normalize__9765.call(null,d.getUTCMinutes(),2),":",normalize__9765.call(null,d.getUTCSeconds(),2),".",normalize__9765.call(null,d.getUTCMilliseconds(),3),"-","00:00\"");
});
cljs.core.Cons.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.Range.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var pr_pair__9766 = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair__9766,"{",", ","}",opts,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IComparable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){
return cljs.core.compare_indexed.call(null,x,y);
});

goog.provide('cljs.core.Atom');

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2690809856;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
cljs.core.Atom.cljs$lang$type = true;
cljs.core.Atom.cljs$lang$ctorPrSeq = (function (this__2322__auto__){
return cljs.core.list.call(null,"cljs.core/Atom");
});
cljs.core.Atom.cljs$lang$ctorPrWriter = (function (this__2322__auto__,writer__2323__auto__){
return cljs.core._write.call(null,writer__2323__auto__,"cljs.core/Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__9768 = this;
return goog.getUid(this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var this__9769 = this;
var G__9770__9771 = cljs.core.seq.call(null,this__9769.watches);
while(true){
if(G__9770__9771)
{var vec__9772__9773 = cljs.core.first.call(null,G__9770__9771);
var key__9774 = cljs.core.nth.call(null,vec__9772__9773,0,null);
var f__9775 = cljs.core.nth.call(null,vec__9772__9773,1,null);
f__9775.call(null,key__9774,this$,oldval,newval);
{
var G__9783 = cljs.core.next.call(null,G__9770__9771);
G__9770__9771 = G__9783;
continue;
}
} else
{return null;
}
break;
}
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var this__9776 = this;
return this$.watches = cljs.core.assoc.call(null,this__9776.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var this__9777 = this;
return this$.watches = cljs.core.dissoc.call(null,this__9777.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var this__9778 = this;
cljs.core._write.call(null,writer,"#<Atom: ");
cljs.core._pr_writer.call(null,this__9778.state,writer,opts);
return cljs.core._write.call(null,writer,">");
});
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var this__9779 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "], true),cljs.core._pr_seq.call(null,this__9779.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var this__9780 = this;
return this__9780.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__9781 = this;
return this__9781.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__9782 = this;
return (o === other);
});
cljs.core.Atom;
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error.  If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__1 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__2 = (function() { 
var G__9795__delegate = function (x,p__9784){
var map__9790__9791 = p__9784;
var map__9790__9792 = ((cljs.core.seq_QMARK_.call(null,map__9790__9791))?cljs.core.apply.call(null,cljs.core.hash_map,map__9790__9791):map__9790__9791);
var validator__9793 = cljs.core._lookup.call(null,map__9790__9792,"\uFDD0'validator",null);
var meta__9794 = cljs.core._lookup.call(null,map__9790__9792,"\uFDD0'meta",null);
return (new cljs.core.Atom(x,meta__9794,validator__9793,null));
};
var G__9795 = function (x,var_args){
var p__9784 = null;
if (goog.isDef(var_args)) {
  p__9784 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9795__delegate.call(this, x, p__9784);
};
G__9795.cljs$lang$maxFixedArity = 1;
G__9795.cljs$lang$applyTo = (function (arglist__9796){
var x = cljs.core.first(arglist__9796);
var p__9784 = cljs.core.rest(arglist__9796);
return G__9795__delegate(x, p__9784);
});
G__9795.cljs$lang$arity$variadic = G__9795__delegate;
return G__9795;
})()
;
atom = function(x,var_args){
var p__9784 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
return atom__2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$lang$arity$1 = atom__1;
atom.cljs$lang$arity$variadic = atom__2.cljs$lang$arity$variadic;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3974__auto____9800 = a.validator;
if(cljs.core.truth_(temp__3974__auto____9800))
{var validate__9801 = temp__3974__auto____9800;
if(cljs.core.truth_(validate__9801.call(null,new_value)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",6683))))].join('')));
}
} else
{}
var old_value__9802 = a.state;
a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__9802,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___2 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___3 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___4 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___5 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___6 = (function() { 
var G__9803__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__9803 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__9803__delegate.call(this, a, f, x, y, z, more);
};
G__9803.cljs$lang$maxFixedArity = 5;
G__9803.cljs$lang$applyTo = (function (arglist__9804){
var a = cljs.core.first(arglist__9804);
var f = cljs.core.first(cljs.core.next(arglist__9804));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9804)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9804))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9804)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9804)))));
return G__9803__delegate(a, f, x, y, z, more);
});
G__9803.cljs$lang$arity$variadic = G__9803__delegate;
return G__9803;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return swap_BANG___2.call(this,a,f);
case 3:
return swap_BANG___3.call(this,a,f,x);
case 4:
return swap_BANG___4.call(this,a,f,x,y);
case 5:
return swap_BANG___5.call(this,a,f,x,y,z);
default:
return swap_BANG___6.cljs$lang$arity$variadic(a,f,x,y,z, cljs.core.array_seq(arguments, 5));
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___6.cljs$lang$applyTo;
swap_BANG_.cljs$lang$arity$2 = swap_BANG___2;
swap_BANG_.cljs$lang$arity$3 = swap_BANG___3;
swap_BANG_.cljs$lang$arity$4 = swap_BANG___4;
swap_BANG_.cljs$lang$arity$5 = swap_BANG___5;
swap_BANG_.cljs$lang$arity$variadic = swap_BANG___6.cljs$lang$arity$variadic;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core._EQ_.call(null,a.state,oldval))
{cljs.core.reset_BANG_.call(null,a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref.call(null,o);
});
/**
* Sets the validator-fn for an atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an Error. If the current state
* is not acceptable to the new validator, an Error will be thrown and the
* validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__9805){
var iref = cljs.core.first(arglist__9805);
var f = cljs.core.first(cljs.core.next(arglist__9805));
var args = cljs.core.rest(cljs.core.next(arglist__9805));
return alter_meta_BANG___delegate(iref, f, args);
});
alter_meta_BANG_.cljs$lang$arity$variadic = alter_meta_BANG___delegate;
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for an atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
/**
* Alpha - subject to change.
* 
* Adds a watch function to an atom reference. The watch fn must be a
* fn of 4 args: a key, the reference, its old-state, its
* new-state. Whenever the reference's state might have been changed,
* any registered watches will have their functions called. The watch
* fn will be called synchronously. Note that an atom's state
* may have changed again prior to the fn call, so use old/new-state
* rather than derefing the reference. Keys must be unique per
* reference, and can be used to remove the watch with remove-watch,
* but are otherwise considered opaque by the watch mechanism.  Bear in
* mind that regardless of the result or action of the watch fns the
* atom's value will change.  Example:
* 
* (def a (atom 0))
* (add-watch a :inc (fn [k r o n] (assert (== 0 n))))
* (swap! a inc)
* ;; Assertion Error
* (deref a)
* ;=> 1
*/
cljs.core.add_watch = (function add_watch(iref,key,f){
return cljs.core._add_watch.call(null,iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){
return cljs.core._remove_watch.call(null,iref,key);
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__0 = (function (){
return gensym.call(null,"G__");
});
var gensym__1 = (function (prefix_string){
if((cljs.core.gensym_counter == null))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,[cljs.core.str(prefix_string),cljs.core.str(cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc))].join(''));
});
gensym = function(prefix_string){
switch(arguments.length){
case 0:
return gensym__0.call(this);
case 1:
return gensym__1.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
gensym.cljs$lang$arity$0 = gensym__0;
gensym.cljs$lang$arity$1 = gensym__1;
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

goog.provide('cljs.core.Delay');

/**
* @constructor
*/
cljs.core.Delay = (function (state,f){
this.state = state;
this.f = f;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 32768;
})
cljs.core.Delay.cljs$lang$type = true;
cljs.core.Delay.cljs$lang$ctorPrSeq = (function (this__2322__auto__){
return cljs.core.list.call(null,"cljs.core/Delay");
});
cljs.core.Delay.cljs$lang$ctorPrWriter = (function (this__2322__auto__,writer__2323__auto__){
return cljs.core._write.call(null,writer__2323__auto__,"cljs.core/Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (d){
var this__9806 = this;
return (new cljs.core.Keyword("\uFDD0'done")).call(null,cljs.core.deref.call(null,this__9806.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__9807 = this;
return (new cljs.core.Keyword("\uFDD0'value")).call(null,cljs.core.swap_BANG_.call(null,this__9807.state,(function (p__9808){
var map__9809__9810 = p__9808;
var map__9809__9811 = ((cljs.core.seq_QMARK_.call(null,map__9809__9810))?cljs.core.apply.call(null,cljs.core.hash_map,map__9809__9810):map__9809__9810);
var curr_state__9812 = map__9809__9811;
var done__9813 = cljs.core._lookup.call(null,map__9809__9811,"\uFDD0'done",null);
if(cljs.core.truth_(done__9813))
{return curr_state__9812;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__9807.f.call(null)});
}
})));
});
cljs.core.Delay;
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_.call(null,cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.delay_QMARK_.call(null,x))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_.call(null,d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() { 
var js__GT_clj__delegate = function (x,options){
var map__9834__9835 = options;
var map__9834__9836 = ((cljs.core.seq_QMARK_.call(null,map__9834__9835))?cljs.core.apply.call(null,cljs.core.hash_map,map__9834__9835):map__9834__9835);
var keywordize_keys__9837 = cljs.core._lookup.call(null,map__9834__9836,"\uFDD0'keywordize-keys",null);
var keyfn__9838 = (cljs.core.truth_(keywordize_keys__9837)?cljs.core.keyword:cljs.core.str);
var f__9853 = (function thisfn(x){
if(cljs.core.seq_QMARK_.call(null,x))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.coll_QMARK_.call(null,x))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray(x)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if((cljs.core.type.call(null,x) === Object))
{return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,(function (){var iter__2484__auto____9852 = (function iter__9846(s__9847){
return (new cljs.core.LazySeq(null,false,(function (){
var s__9847__9850 = s__9847;
while(true){
if(cljs.core.seq.call(null,s__9847__9850))
{var k__9851 = cljs.core.first.call(null,s__9847__9850);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__9838.call(null,k__9851),thisfn.call(null,(x[k__9851]))], true),iter__9846.call(null,cljs.core.rest.call(null,s__9847__9850)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2484__auto____9852.call(null,cljs.core.js_keys.call(null,x));
})());
} else
{if("\uFDD0'else")
{return x;
} else
{return null;
}
}
}
}
}
});
return f__9853.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__9854){
var x = cljs.core.first(arglist__9854);
var options = cljs.core.rest(arglist__9854);
return js__GT_clj__delegate(x, options);
});
js__GT_clj.cljs$lang$arity$variadic = js__GT_clj__delegate;
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem__9859 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
return (function() { 
var G__9863__delegate = function (args){
var temp__3971__auto____9860 = cljs.core._lookup.call(null,cljs.core.deref.call(null,mem__9859),args,null);
if(cljs.core.truth_(temp__3971__auto____9860))
{var v__9861 = temp__3971__auto____9860;
return v__9861;
} else
{var ret__9862 = cljs.core.apply.call(null,f,args);
cljs.core.swap_BANG_.call(null,mem__9859,cljs.core.assoc,args,ret__9862);
return ret__9862;
}
};
var G__9863 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9863__delegate.call(this, args);
};
G__9863.cljs$lang$maxFixedArity = 0;
G__9863.cljs$lang$applyTo = (function (arglist__9864){
var args = cljs.core.seq(arglist__9864);;
return G__9863__delegate(args);
});
G__9863.cljs$lang$arity$variadic = G__9863__delegate;
return G__9863;
})()
;
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__1 = (function (f){
while(true){
var ret__9866 = f.call(null);
if(cljs.core.fn_QMARK_.call(null,ret__9866))
{{
var G__9867 = ret__9866;
f = G__9867;
continue;
}
} else
{return ret__9866;
}
break;
}
});
var trampoline__2 = (function() { 
var G__9868__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__9868 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9868__delegate.call(this, f, args);
};
G__9868.cljs$lang$maxFixedArity = 1;
G__9868.cljs$lang$applyTo = (function (arglist__9869){
var f = cljs.core.first(arglist__9869);
var args = cljs.core.rest(arglist__9869);
return G__9868__delegate(f, args);
});
G__9868.cljs$lang$arity$variadic = G__9868__delegate;
return G__9868;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case 1:
return trampoline__1.call(this,f);
default:
return trampoline__2.cljs$lang$arity$variadic(f, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__2.cljs$lang$applyTo;
trampoline.cljs$lang$arity$1 = trampoline__1;
trampoline.cljs$lang$arity$variadic = trampoline__2.cljs$lang$arity$variadic;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return rand.call(null,1);
});
var rand__1 = (function (n){
return (Math.random.call(null) * n);
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
rand.cljs$lang$arity$0 = rand__0;
rand.cljs$lang$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return Math.floor.call(null,(Math.random.call(null) * n));
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.call(null,coll,cljs.core.rand_int.call(null,cljs.core.count.call(null,coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.call(null,(function (ret,x){
var k__9871 = f.call(null,x);
return cljs.core.assoc.call(null,ret,k__9871,cljs.core.conj.call(null,cljs.core._lookup.call(null,ret,k__9871,cljs.core.PersistentVector.EMPTY),x));
}),cljs.core.ObjMap.EMPTY,coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'descendants","\uFDD0'ancestors"],{"\uFDD0'parents":cljs.core.ObjMap.EMPTY,"\uFDD0'descendants":cljs.core.ObjMap.EMPTY,"\uFDD0'ancestors":cljs.core.ObjMap.EMPTY});
});
cljs.core.global_hierarchy = cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null));
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a JavaScript type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___2 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___3 = (function (h,child,parent){
var or__3824__auto____9880 = cljs.core._EQ_.call(null,child,parent);
if(or__3824__auto____9880)
{return or__3824__auto____9880;
} else
{var or__3824__auto____9881 = cljs.core.contains_QMARK_.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h).call(null,child),parent);
if(or__3824__auto____9881)
{return or__3824__auto____9881;
} else
{var and__3822__auto____9882 = cljs.core.vector_QMARK_.call(null,parent);
if(and__3822__auto____9882)
{var and__3822__auto____9883 = cljs.core.vector_QMARK_.call(null,child);
if(and__3822__auto____9883)
{var and__3822__auto____9884 = (cljs.core.count.call(null,parent) === cljs.core.count.call(null,child));
if(and__3822__auto____9884)
{var ret__9885 = true;
var i__9886 = 0;
while(true){
if((function (){var or__3824__auto____9887 = cljs.core.not.call(null,ret__9885);
if(or__3824__auto____9887)
{return or__3824__auto____9887;
} else
{return (i__9886 === cljs.core.count.call(null,parent));
}
})())
{return ret__9885;
} else
{{
var G__9888 = isa_QMARK_.call(null,h,child.call(null,i__9886),parent.call(null,i__9886));
var G__9889 = (i__9886 + 1);
ret__9885 = G__9888;
i__9886 = G__9889;
continue;
}
}
break;
}
} else
{return and__3822__auto____9884;
}
} else
{return and__3822__auto____9883;
}
} else
{return and__3822__auto____9882;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case 2:
return isa_QMARK___2.call(this,h,child);
case 3:
return isa_QMARK___3.call(this,h,child,parent);
}
throw('Invalid arity: ' + arguments.length);
};
isa_QMARK_.cljs$lang$arity$2 = isa_QMARK___2;
isa_QMARK_.cljs$lang$arity$3 = isa_QMARK___3;
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__1 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core._lookup.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,null));
});
parents = function(h,tag){
switch(arguments.length){
case 1:
return parents__1.call(this,h);
case 2:
return parents__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
parents.cljs$lang$arity$1 = parents__1;
parents.cljs$lang$arity$2 = parents__2;
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__1 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core._lookup.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,null));
});
ancestors = function(h,tag){
switch(arguments.length){
case 1:
return ancestors__1.call(this,h);
case 2:
return ancestors__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
ancestors.cljs$lang$arity$1 = ancestors__1;
ancestors.cljs$lang$arity$2 = ancestors__2;
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on JavaScript type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__1 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core._lookup.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),tag,null));
});
descendants = function(h,tag){
switch(arguments.length){
case 1:
return descendants__1.call(this,h);
case 2:
return descendants__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
descendants.cljs$lang$arity$1 = descendants__1;
descendants.cljs$lang$arity$2 = descendants__2;
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__2 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",6967))))].join('')));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__3 = (function (h,tag,parent){
if(cljs.core.not_EQ_.call(null,tag,parent))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",6971))))].join('')));
}
var tp__9898 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var td__9899 = (new cljs.core.Keyword("\uFDD0'descendants")).call(null,h);
var ta__9900 = (new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h);
var tf__9901 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core._lookup.call(null,targets,k,cljs.core.PersistentHashSet.EMPTY),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});
var or__3824__auto____9902 = ((cljs.core.contains_QMARK_.call(null,tp__9898.call(null,tag),parent))?null:(function (){if(cljs.core.contains_QMARK_.call(null,ta__9900.call(null,tag),parent))
{throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else
{}
if(cljs.core.contains_QMARK_.call(null,ta__9900.call(null,parent),tag))
{throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,cljs.core.conj.call(null,cljs.core._lookup.call(null,tp__9898,tag,cljs.core.PersistentHashSet.EMPTY),parent)),"\uFDD0'ancestors":tf__9901.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,td__9899,parent,ta__9900),"\uFDD0'descendants":tf__9901.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),parent,ta__9900,tag,td__9899)});
})());
if(cljs.core.truth_(or__3824__auto____9902))
{return or__3824__auto____9902;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case 2:
return derive__2.call(this,h,tag);
case 3:
return derive__3.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
derive.cljs$lang$arity$2 = derive__2;
derive.cljs$lang$arity$3 = derive__3;
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__2 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__3 = (function (h,tag,parent){
var parentMap__9907 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var childsParents__9908 = (cljs.core.truth_(parentMap__9907.call(null,tag))?cljs.core.disj.call(null,parentMap__9907.call(null,tag),parent):cljs.core.PersistentHashSet.EMPTY);
var newParents__9909 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__9908))?cljs.core.assoc.call(null,parentMap__9907,tag,childsParents__9908):cljs.core.dissoc.call(null,parentMap__9907,tag));
var deriv_seq__9910 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__9890_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__9890_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__9890_SHARP_),cljs.core.second.call(null,p1__9890_SHARP_)));
}),cljs.core.seq.call(null,newParents__9909)));
if(cljs.core.contains_QMARK_.call(null,parentMap__9907.call(null,tag),parent))
{return cljs.core.reduce.call(null,(function (p1__9891_SHARP_,p2__9892_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__9891_SHARP_,p2__9892_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__9910));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case 2:
return underive__2.call(this,h,tag);
case 3:
return underive__3.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
underive.cljs$lang$arity$2 = underive__2;
underive.cljs$lang$arity$3 = underive__3;
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.call(null,method_cache,(function (_){
return cljs.core.deref.call(null,method_table);
}));
return cljs.core.swap_BANG_.call(null,cached_hierarchy,(function (_){
return cljs.core.deref.call(null,hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs__9918 = cljs.core.deref.call(null,prefer_table).call(null,x);
var or__3824__auto____9920 = (cljs.core.truth_((function (){var and__3822__auto____9919 = xprefs__9918;
if(cljs.core.truth_(and__3822__auto____9919))
{return xprefs__9918.call(null,y);
} else
{return and__3822__auto____9919;
}
})())?true:null);
if(cljs.core.truth_(or__3824__auto____9920))
{return or__3824__auto____9920;
} else
{var or__3824__auto____9922 = (function (){var ps__9921 = cljs.core.parents.call(null,y);
while(true){
if((cljs.core.count.call(null,ps__9921) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__9921),prefer_table)))
{} else
{}
{
var G__9925 = cljs.core.rest.call(null,ps__9921);
ps__9921 = G__9925;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____9922))
{return or__3824__auto____9922;
} else
{var or__3824__auto____9924 = (function (){var ps__9923 = cljs.core.parents.call(null,x);
while(true){
if((cljs.core.count.call(null,ps__9923) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__9923),y,prefer_table)))
{} else
{}
{
var G__9926 = cljs.core.rest.call(null,ps__9923);
ps__9923 = G__9926;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____9924))
{return or__3824__auto____9924;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3824__auto____9928 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);
if(cljs.core.truth_(or__3824__auto____9928))
{return or__3824__auto____9928;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__9946 = cljs.core.reduce.call(null,(function (be,p__9938){
var vec__9939__9940 = p__9938;
var k__9941 = cljs.core.nth.call(null,vec__9939__9940,0,null);
var ___9942 = cljs.core.nth.call(null,vec__9939__9940,1,null);
var e__9943 = vec__9939__9940;
if(cljs.core.isa_QMARK_.call(null,dispatch_val,k__9941))
{var be2__9945 = (cljs.core.truth_((function (){var or__3824__auto____9944 = (be == null);
if(or__3824__auto____9944)
{return or__3824__auto____9944;
} else
{return cljs.core.dominates.call(null,k__9941,cljs.core.first.call(null,be),prefer_table);
}
})())?e__9943:be);
if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__9945),k__9941,prefer_table)))
{} else
{throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k__9941),cljs.core.str(" and "),cljs.core.str(cljs.core.first.call(null,be2__9945)),cljs.core.str(", and neither is preferred")].join('')));
}
return be2__9945;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));
if(cljs.core.truth_(best_entry__9946))
{if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy)))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__9946));
return cljs.core.second.call(null,best_entry__9946);
} else
{cljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if((function (){var and__3822__auto____9951 = mf;
if(and__3822__auto____9951)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3822__auto____9951;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{var x__2387__auto____9952 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____9953 = (cljs.core._reset[goog.typeOf(x__2387__auto____9952)]);
if(or__3824__auto____9953)
{return or__3824__auto____9953;
} else
{var or__3824__auto____9954 = (cljs.core._reset["_"]);
if(or__3824__auto____9954)
{return or__3824__auto____9954;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3822__auto____9959 = mf;
if(and__3822__auto____9959)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3822__auto____9959;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{var x__2387__auto____9960 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____9961 = (cljs.core._add_method[goog.typeOf(x__2387__auto____9960)]);
if(or__3824__auto____9961)
{return or__3824__auto____9961;
} else
{var or__3824__auto____9962 = (cljs.core._add_method["_"]);
if(or__3824__auto____9962)
{return or__3824__auto____9962;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3822__auto____9967 = mf;
if(and__3822__auto____9967)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3822__auto____9967;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{var x__2387__auto____9968 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____9969 = (cljs.core._remove_method[goog.typeOf(x__2387__auto____9968)]);
if(or__3824__auto____9969)
{return or__3824__auto____9969;
} else
{var or__3824__auto____9970 = (cljs.core._remove_method["_"]);
if(or__3824__auto____9970)
{return or__3824__auto____9970;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3822__auto____9975 = mf;
if(and__3822__auto____9975)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3822__auto____9975;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{var x__2387__auto____9976 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____9977 = (cljs.core._prefer_method[goog.typeOf(x__2387__auto____9976)]);
if(or__3824__auto____9977)
{return or__3824__auto____9977;
} else
{var or__3824__auto____9978 = (cljs.core._prefer_method["_"]);
if(or__3824__auto____9978)
{return or__3824__auto____9978;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3822__auto____9983 = mf;
if(and__3822__auto____9983)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3822__auto____9983;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{var x__2387__auto____9984 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____9985 = (cljs.core._get_method[goog.typeOf(x__2387__auto____9984)]);
if(or__3824__auto____9985)
{return or__3824__auto____9985;
} else
{var or__3824__auto____9986 = (cljs.core._get_method["_"]);
if(or__3824__auto____9986)
{return or__3824__auto____9986;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if((function (){var and__3822__auto____9991 = mf;
if(and__3822__auto____9991)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3822__auto____9991;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{var x__2387__auto____9992 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____9993 = (cljs.core._methods[goog.typeOf(x__2387__auto____9992)]);
if(or__3824__auto____9993)
{return or__3824__auto____9993;
} else
{var or__3824__auto____9994 = (cljs.core._methods["_"]);
if(or__3824__auto____9994)
{return or__3824__auto____9994;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3822__auto____9999 = mf;
if(and__3822__auto____9999)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3822__auto____9999;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{var x__2387__auto____10000 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10001 = (cljs.core._prefers[goog.typeOf(x__2387__auto____10000)]);
if(or__3824__auto____10001)
{return or__3824__auto____10001;
} else
{var or__3824__auto____10002 = (cljs.core._prefers["_"]);
if(or__3824__auto____10002)
{return or__3824__auto____10002;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if((function (){var and__3822__auto____10007 = mf;
if(and__3822__auto____10007)
{return mf.cljs$core$IMultiFn$_dispatch$arity$2;
} else
{return and__3822__auto____10007;
}
})())
{return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf,args);
} else
{var x__2387__auto____10008 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10009 = (cljs.core._dispatch[goog.typeOf(x__2387__auto____10008)]);
if(or__3824__auto____10009)
{return or__3824__auto____10009;
} else
{var or__3824__auto____10010 = (cljs.core._dispatch["_"]);
if(or__3824__auto____10010)
{return or__3824__auto____10010;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__10013 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__10014 = cljs.core._get_method.call(null,mf,dispatch_val__10013);
if(cljs.core.truth_(target_fn__10014))
{} else
{throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(cljs.core.name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val__10013)].join('')));
}
return cljs.core.apply.call(null,target_fn__10014,args);
});

goog.provide('cljs.core.MultiFn');

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
this.cljs$lang$protocol_mask$partition0$ = 4194304;
this.cljs$lang$protocol_mask$partition1$ = 256;
})
cljs.core.MultiFn.cljs$lang$type = true;
cljs.core.MultiFn.cljs$lang$ctorPrSeq = (function (this__2322__auto__){
return cljs.core.list.call(null,"cljs.core/MultiFn");
});
cljs.core.MultiFn.cljs$lang$ctorPrWriter = (function (this__2322__auto__,writer__2323__auto__){
return cljs.core._write.call(null,writer__2323__auto__,"cljs.core/MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__10015 = this;
return goog.getUid(this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var this__10016 = this;
cljs.core.swap_BANG_.call(null,this__10016.method_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__10016.method_cache,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__10016.prefer_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__10016.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var this__10017 = this;
cljs.core.swap_BANG_.call(null,this__10017.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__10017.method_cache,this__10017.method_table,this__10017.cached_hierarchy,this__10017.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var this__10018 = this;
cljs.core.swap_BANG_.call(null,this__10018.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__10018.method_cache,this__10018.method_table,this__10018.cached_hierarchy,this__10018.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var this__10019 = this;
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__10019.cached_hierarchy),cljs.core.deref.call(null,this__10019.hierarchy)))
{} else
{cljs.core.reset_cache.call(null,this__10019.method_cache,this__10019.method_table,this__10019.cached_hierarchy,this__10019.hierarchy);
}
var temp__3971__auto____10020 = cljs.core.deref.call(null,this__10019.method_cache).call(null,dispatch_val);
if(cljs.core.truth_(temp__3971__auto____10020))
{var target_fn__10021 = temp__3971__auto____10020;
return target_fn__10021;
} else
{var temp__3971__auto____10022 = cljs.core.find_and_cache_best_method.call(null,this__10019.name,dispatch_val,this__10019.hierarchy,this__10019.method_table,this__10019.prefer_table,this__10019.method_cache,this__10019.cached_hierarchy);
if(cljs.core.truth_(temp__3971__auto____10022))
{var target_fn__10023 = temp__3971__auto____10022;
return target_fn__10023;
} else
{return cljs.core.deref.call(null,this__10019.method_table).call(null,this__10019.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var this__10024 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__10024.prefer_table)))
{throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(this__10024.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else
{}
cljs.core.swap_BANG_.call(null,this__10024.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core._lookup.call(null,old,dispatch_val_x,cljs.core.PersistentHashSet.EMPTY),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__10024.method_cache,this__10024.method_table,this__10024.cached_hierarchy,this__10024.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var this__10025 = this;
return cljs.core.deref.call(null,this__10025.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var this__10026 = this;
return cljs.core.deref.call(null,this__10026.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = (function (mf,args){
var this__10027 = this;
return cljs.core.do_dispatch.call(null,mf,this__10027.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__10029__delegate = function (_,args){
var self__10028 = this;
return cljs.core._dispatch.call(null,self__10028,args);
};
var G__10029 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__10029__delegate.call(this, _, args);
};
G__10029.cljs$lang$maxFixedArity = 1;
G__10029.cljs$lang$applyTo = (function (arglist__10030){
var _ = cljs.core.first(arglist__10030);
var args = cljs.core.rest(arglist__10030);
return G__10029__delegate(_, args);
});
G__10029.cljs$lang$arity$variadic = G__10029__delegate;
return G__10029;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
var self__10031 = this;
return cljs.core._dispatch.call(null,self__10031,args);
});
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset.call(null,multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method.call(null,multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method.call(null,multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods.call(null,multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method.call(null,multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers.call(null,multifn);
});

goog.provide('cljs.core.UUID');

/**
* @constructor
*/
cljs.core.UUID = (function (uuid){
this.uuid = uuid;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2690646016;
})
cljs.core.UUID.cljs$lang$type = true;
cljs.core.UUID.cljs$lang$ctorPrSeq = (function (this__2322__auto__){
return cljs.core.list.call(null,"cljs.core/UUID");
});
cljs.core.UUID.cljs$lang$ctorPrWriter = (function (this__2322__auto__,writer__2323__auto__){
return cljs.core._write.call(null,writer__2323__auto__,"cljs.core/UUID");
});
cljs.core.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__10032 = this;
return goog.string.hashCode(cljs.core.pr_str.call(null,this$));
});
cljs.core.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_10034,writer,_){
var this__10033 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(this__10033.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (_10036,_){
var this__10035 = this;
return cljs.core.list.call(null,[cljs.core.str("#uuid \""),cljs.core.str(this__10035.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var this__10037 = this;
var and__3822__auto____10038 = cljs.core.instance_QMARK_.call(null,cljs.core.UUID,other);
if(and__3822__auto____10038)
{return (this__10037.uuid === other.uuid);
} else
{return and__3822__auto____10038;
}
});
cljs.core.UUID.prototype.toString = (function (){
var this__10039 = this;
var this__10040 = this;
return cljs.core.pr_str.call(null,this__10040);
});
cljs.core.UUID;
