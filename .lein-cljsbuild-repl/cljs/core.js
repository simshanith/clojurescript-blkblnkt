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
var x__14242 = (((x == null))?null:x);
if((p[goog.typeOf(x__14242)]))
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
var G__14243__delegate = function (array,i,idxs){
return cljs.core.apply.call(null,aget,aget.call(null,array,i),idxs);
};
var G__14243 = function (array,i,var_args){
var idxs = null;
if (goog.isDef(var_args)) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__14243__delegate.call(this, array, i, idxs);
};
G__14243.cljs$lang$maxFixedArity = 2;
G__14243.cljs$lang$applyTo = (function (arglist__14244){
var array = cljs.core.first(arglist__14244);
var i = cljs.core.first(cljs.core.next(arglist__14244));
var idxs = cljs.core.rest(cljs.core.next(arglist__14244));
return G__14243__delegate(array, i, idxs);
});
G__14243.cljs$lang$arity$variadic = G__14243__delegate;
return G__14243;
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
if((function (){var and__3822__auto____14329 = this$;
if(and__3822__auto____14329)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3822__auto____14329;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{var x__2524__auto____14330 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____14331 = (cljs.core._invoke[goog.typeOf(x__2524__auto____14330)]);
if(or__3824__auto____14331)
{return or__3824__auto____14331;
} else
{var or__3824__auto____14332 = (cljs.core._invoke["_"]);
if(or__3824__auto____14332)
{return or__3824__auto____14332;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3822__auto____14333 = this$;
if(and__3822__auto____14333)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3822__auto____14333;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{var x__2524__auto____14334 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____14335 = (cljs.core._invoke[goog.typeOf(x__2524__auto____14334)]);
if(or__3824__auto____14335)
{return or__3824__auto____14335;
} else
{var or__3824__auto____14336 = (cljs.core._invoke["_"]);
if(or__3824__auto____14336)
{return or__3824__auto____14336;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3822__auto____14337 = this$;
if(and__3822__auto____14337)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3822__auto____14337;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{var x__2524__auto____14338 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____14339 = (cljs.core._invoke[goog.typeOf(x__2524__auto____14338)]);
if(or__3824__auto____14339)
{return or__3824__auto____14339;
} else
{var or__3824__auto____14340 = (cljs.core._invoke["_"]);
if(or__3824__auto____14340)
{return or__3824__auto____14340;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3822__auto____14341 = this$;
if(and__3822__auto____14341)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3822__auto____14341;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{var x__2524__auto____14342 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____14343 = (cljs.core._invoke[goog.typeOf(x__2524__auto____14342)]);
if(or__3824__auto____14343)
{return or__3824__auto____14343;
} else
{var or__3824__auto____14344 = (cljs.core._invoke["_"]);
if(or__3824__auto____14344)
{return or__3824__auto____14344;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3822__auto____14345 = this$;
if(and__3822__auto____14345)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3822__auto____14345;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{var x__2524__auto____14346 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____14347 = (cljs.core._invoke[goog.typeOf(x__2524__auto____14346)]);
if(or__3824__auto____14347)
{return or__3824__auto____14347;
} else
{var or__3824__auto____14348 = (cljs.core._invoke["_"]);
if(or__3824__auto____14348)
{return or__3824__auto____14348;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3822__auto____14349 = this$;
if(and__3822__auto____14349)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3822__auto____14349;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{var x__2524__auto____14350 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____14351 = (cljs.core._invoke[goog.typeOf(x__2524__auto____14350)]);
if(or__3824__auto____14351)
{return or__3824__auto____14351;
} else
{var or__3824__auto____14352 = (cljs.core._invoke["_"]);
if(or__3824__auto____14352)
{return or__3824__auto____14352;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3822__auto____14353 = this$;
if(and__3822__auto____14353)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3822__auto____14353;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{var x__2524__auto____14354 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____14355 = (cljs.core._invoke[goog.typeOf(x__2524__auto____14354)]);
if(or__3824__auto____14355)
{return or__3824__auto____14355;
} else
{var or__3824__auto____14356 = (cljs.core._invoke["_"]);
if(or__3824__auto____14356)
{return or__3824__auto____14356;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3822__auto____14357 = this$;
if(and__3822__auto____14357)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3822__auto____14357;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{var x__2524__auto____14358 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____14359 = (cljs.core._invoke[goog.typeOf(x__2524__auto____14358)]);
if(or__3824__auto____14359)
{return or__3824__auto____14359;
} else
{var or__3824__auto____14360 = (cljs.core._invoke["_"]);
if(or__3824__auto____14360)
{return or__3824__auto____14360;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3822__auto____14361 = this$;
if(and__3822__auto____14361)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3822__auto____14361;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{var x__2524__auto____14362 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____14363 = (cljs.core._invoke[goog.typeOf(x__2524__auto____14362)]);
if(or__3824__auto____14363)
{return or__3824__auto____14363;
} else
{var or__3824__auto____14364 = (cljs.core._invoke["_"]);
if(or__3824__auto____14364)
{return or__3824__auto____14364;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3822__auto____14365 = this$;
if(and__3822__auto____14365)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3822__auto____14365;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{var x__2524__auto____14366 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____14367 = (cljs.core._invoke[goog.typeOf(x__2524__auto____14366)]);
if(or__3824__auto____14367)
{return or__3824__auto____14367;
} else
{var or__3824__auto____14368 = (cljs.core._invoke["_"]);
if(or__3824__auto____14368)
{return or__3824__auto____14368;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3822__auto____14369 = this$;
if(and__3822__auto____14369)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3822__auto____14369;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{var x__2524__auto____14370 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____14371 = (cljs.core._invoke[goog.typeOf(x__2524__auto____14370)]);
if(or__3824__auto____14371)
{return or__3824__auto____14371;
} else
{var or__3824__auto____14372 = (cljs.core._invoke["_"]);
if(or__3824__auto____14372)
{return or__3824__auto____14372;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3822__auto____14373 = this$;
if(and__3822__auto____14373)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3822__auto____14373;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{var x__2524__auto____14374 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____14375 = (cljs.core._invoke[goog.typeOf(x__2524__auto____14374)]);
if(or__3824__auto____14375)
{return or__3824__auto____14375;
} else
{var or__3824__auto____14376 = (cljs.core._invoke["_"]);
if(or__3824__auto____14376)
{return or__3824__auto____14376;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3822__auto____14377 = this$;
if(and__3822__auto____14377)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3822__auto____14377;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{var x__2524__auto____14378 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____14379 = (cljs.core._invoke[goog.typeOf(x__2524__auto____14378)]);
if(or__3824__auto____14379)
{return or__3824__auto____14379;
} else
{var or__3824__auto____14380 = (cljs.core._invoke["_"]);
if(or__3824__auto____14380)
{return or__3824__auto____14380;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3822__auto____14381 = this$;
if(and__3822__auto____14381)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3822__auto____14381;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{var x__2524__auto____14382 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____14383 = (cljs.core._invoke[goog.typeOf(x__2524__auto____14382)]);
if(or__3824__auto____14383)
{return or__3824__auto____14383;
} else
{var or__3824__auto____14384 = (cljs.core._invoke["_"]);
if(or__3824__auto____14384)
{return or__3824__auto____14384;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3822__auto____14385 = this$;
if(and__3822__auto____14385)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3822__auto____14385;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{var x__2524__auto____14386 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____14387 = (cljs.core._invoke[goog.typeOf(x__2524__auto____14386)]);
if(or__3824__auto____14387)
{return or__3824__auto____14387;
} else
{var or__3824__auto____14388 = (cljs.core._invoke["_"]);
if(or__3824__auto____14388)
{return or__3824__auto____14388;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3822__auto____14389 = this$;
if(and__3822__auto____14389)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3822__auto____14389;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{var x__2524__auto____14390 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____14391 = (cljs.core._invoke[goog.typeOf(x__2524__auto____14390)]);
if(or__3824__auto____14391)
{return or__3824__auto____14391;
} else
{var or__3824__auto____14392 = (cljs.core._invoke["_"]);
if(or__3824__auto____14392)
{return or__3824__auto____14392;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3822__auto____14393 = this$;
if(and__3822__auto____14393)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3822__auto____14393;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{var x__2524__auto____14394 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____14395 = (cljs.core._invoke[goog.typeOf(x__2524__auto____14394)]);
if(or__3824__auto____14395)
{return or__3824__auto____14395;
} else
{var or__3824__auto____14396 = (cljs.core._invoke["_"]);
if(or__3824__auto____14396)
{return or__3824__auto____14396;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3822__auto____14397 = this$;
if(and__3822__auto____14397)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3822__auto____14397;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{var x__2524__auto____14398 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____14399 = (cljs.core._invoke[goog.typeOf(x__2524__auto____14398)]);
if(or__3824__auto____14399)
{return or__3824__auto____14399;
} else
{var or__3824__auto____14400 = (cljs.core._invoke["_"]);
if(or__3824__auto____14400)
{return or__3824__auto____14400;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if((function (){var and__3822__auto____14401 = this$;
if(and__3822__auto____14401)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3822__auto____14401;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{var x__2524__auto____14402 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____14403 = (cljs.core._invoke[goog.typeOf(x__2524__auto____14402)]);
if(or__3824__auto____14403)
{return or__3824__auto____14403;
} else
{var or__3824__auto____14404 = (cljs.core._invoke["_"]);
if(or__3824__auto____14404)
{return or__3824__auto____14404;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if((function (){var and__3822__auto____14405 = this$;
if(and__3822__auto____14405)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3822__auto____14405;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{var x__2524__auto____14406 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____14407 = (cljs.core._invoke[goog.typeOf(x__2524__auto____14406)]);
if(or__3824__auto____14407)
{return or__3824__auto____14407;
} else
{var or__3824__auto____14408 = (cljs.core._invoke["_"]);
if(or__3824__auto____14408)
{return or__3824__auto____14408;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if((function (){var and__3822__auto____14409 = this$;
if(and__3822__auto____14409)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3822__auto____14409;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{var x__2524__auto____14410 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____14411 = (cljs.core._invoke[goog.typeOf(x__2524__auto____14410)]);
if(or__3824__auto____14411)
{return or__3824__auto____14411;
} else
{var or__3824__auto____14412 = (cljs.core._invoke["_"]);
if(or__3824__auto____14412)
{return or__3824__auto____14412;
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
if((function (){var and__3822__auto____14417 = coll;
if(and__3822__auto____14417)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3822__auto____14417;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{var x__2524__auto____14418 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____14419 = (cljs.core._count[goog.typeOf(x__2524__auto____14418)]);
if(or__3824__auto____14419)
{return or__3824__auto____14419;
} else
{var or__3824__auto____14420 = (cljs.core._count["_"]);
if(or__3824__auto____14420)
{return or__3824__auto____14420;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if((function (){var and__3822__auto____14425 = coll;
if(and__3822__auto____14425)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3822__auto____14425;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var x__2524__auto____14426 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____14427 = (cljs.core._empty[goog.typeOf(x__2524__auto____14426)]);
if(or__3824__auto____14427)
{return or__3824__auto____14427;
} else
{var or__3824__auto____14428 = (cljs.core._empty["_"]);
if(or__3824__auto____14428)
{return or__3824__auto____14428;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3822__auto____14433 = coll;
if(and__3822__auto____14433)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3822__auto____14433;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{var x__2524__auto____14434 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____14435 = (cljs.core._conj[goog.typeOf(x__2524__auto____14434)]);
if(or__3824__auto____14435)
{return or__3824__auto____14435;
} else
{var or__3824__auto____14436 = (cljs.core._conj["_"]);
if(or__3824__auto____14436)
{return or__3824__auto____14436;
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
if((function (){var and__3822__auto____14445 = coll;
if(and__3822__auto____14445)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3822__auto____14445;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{var x__2524__auto____14446 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____14447 = (cljs.core._nth[goog.typeOf(x__2524__auto____14446)]);
if(or__3824__auto____14447)
{return or__3824__auto____14447;
} else
{var or__3824__auto____14448 = (cljs.core._nth["_"]);
if(or__3824__auto____14448)
{return or__3824__auto____14448;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3822__auto____14449 = coll;
if(and__3822__auto____14449)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3822__auto____14449;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{var x__2524__auto____14450 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____14451 = (cljs.core._nth[goog.typeOf(x__2524__auto____14450)]);
if(or__3824__auto____14451)
{return or__3824__auto____14451;
} else
{var or__3824__auto____14452 = (cljs.core._nth["_"]);
if(or__3824__auto____14452)
{return or__3824__auto____14452;
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
if((function (){var and__3822__auto____14457 = coll;
if(and__3822__auto____14457)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3822__auto____14457;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{var x__2524__auto____14458 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____14459 = (cljs.core._first[goog.typeOf(x__2524__auto____14458)]);
if(or__3824__auto____14459)
{return or__3824__auto____14459;
} else
{var or__3824__auto____14460 = (cljs.core._first["_"]);
if(or__3824__auto____14460)
{return or__3824__auto____14460;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if((function (){var and__3822__auto____14465 = coll;
if(and__3822__auto____14465)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3822__auto____14465;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{var x__2524__auto____14466 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____14467 = (cljs.core._rest[goog.typeOf(x__2524__auto____14466)]);
if(or__3824__auto____14467)
{return or__3824__auto____14467;
} else
{var or__3824__auto____14468 = (cljs.core._rest["_"]);
if(or__3824__auto____14468)
{return or__3824__auto____14468;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.INext = {};
cljs.core._next = (function _next(coll){
if((function (){var and__3822__auto____14473 = coll;
if(and__3822__auto____14473)
{return coll.cljs$core$INext$_next$arity$1;
} else
{return and__3822__auto____14473;
}
})())
{return coll.cljs$core$INext$_next$arity$1(coll);
} else
{var x__2524__auto____14474 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____14475 = (cljs.core._next[goog.typeOf(x__2524__auto____14474)]);
if(or__3824__auto____14475)
{return or__3824__auto____14475;
} else
{var or__3824__auto____14476 = (cljs.core._next["_"]);
if(or__3824__auto____14476)
{return or__3824__auto____14476;
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
if((function (){var and__3822__auto____14485 = o;
if(and__3822__auto____14485)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3822__auto____14485;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{var x__2524__auto____14486 = (((o == null))?null:o);
return (function (){var or__3824__auto____14487 = (cljs.core._lookup[goog.typeOf(x__2524__auto____14486)]);
if(or__3824__auto____14487)
{return or__3824__auto____14487;
} else
{var or__3824__auto____14488 = (cljs.core._lookup["_"]);
if(or__3824__auto____14488)
{return or__3824__auto____14488;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3822__auto____14489 = o;
if(and__3822__auto____14489)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3822__auto____14489;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{var x__2524__auto____14490 = (((o == null))?null:o);
return (function (){var or__3824__auto____14491 = (cljs.core._lookup[goog.typeOf(x__2524__auto____14490)]);
if(or__3824__auto____14491)
{return or__3824__auto____14491;
} else
{var or__3824__auto____14492 = (cljs.core._lookup["_"]);
if(or__3824__auto____14492)
{return or__3824__auto____14492;
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
if((function (){var and__3822__auto____14497 = coll;
if(and__3822__auto____14497)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3822__auto____14497;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{var x__2524__auto____14498 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____14499 = (cljs.core._contains_key_QMARK_[goog.typeOf(x__2524__auto____14498)]);
if(or__3824__auto____14499)
{return or__3824__auto____14499;
} else
{var or__3824__auto____14500 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3824__auto____14500)
{return or__3824__auto____14500;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3822__auto____14505 = coll;
if(and__3822__auto____14505)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3822__auto____14505;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{var x__2524__auto____14506 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____14507 = (cljs.core._assoc[goog.typeOf(x__2524__auto____14506)]);
if(or__3824__auto____14507)
{return or__3824__auto____14507;
} else
{var or__3824__auto____14508 = (cljs.core._assoc["_"]);
if(or__3824__auto____14508)
{return or__3824__auto____14508;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3822__auto____14513 = coll;
if(and__3822__auto____14513)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3822__auto____14513;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{var x__2524__auto____14514 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____14515 = (cljs.core._dissoc[goog.typeOf(x__2524__auto____14514)]);
if(or__3824__auto____14515)
{return or__3824__auto____14515;
} else
{var or__3824__auto____14516 = (cljs.core._dissoc["_"]);
if(or__3824__auto____14516)
{return or__3824__auto____14516;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.IMapEntry = {};
cljs.core._key = (function _key(coll){
if((function (){var and__3822__auto____14521 = coll;
if(and__3822__auto____14521)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3822__auto____14521;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{var x__2524__auto____14522 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____14523 = (cljs.core._key[goog.typeOf(x__2524__auto____14522)]);
if(or__3824__auto____14523)
{return or__3824__auto____14523;
} else
{var or__3824__auto____14524 = (cljs.core._key["_"]);
if(or__3824__auto____14524)
{return or__3824__auto____14524;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){
if((function (){var and__3822__auto____14529 = coll;
if(and__3822__auto____14529)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3822__auto____14529;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{var x__2524__auto____14530 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____14531 = (cljs.core._val[goog.typeOf(x__2524__auto____14530)]);
if(or__3824__auto____14531)
{return or__3824__auto____14531;
} else
{var or__3824__auto____14532 = (cljs.core._val["_"]);
if(or__3824__auto____14532)
{return or__3824__auto____14532;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3822__auto____14537 = coll;
if(and__3822__auto____14537)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3822__auto____14537;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{var x__2524__auto____14538 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____14539 = (cljs.core._disjoin[goog.typeOf(x__2524__auto____14538)]);
if(or__3824__auto____14539)
{return or__3824__auto____14539;
} else
{var or__3824__auto____14540 = (cljs.core._disjoin["_"]);
if(or__3824__auto____14540)
{return or__3824__auto____14540;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if((function (){var and__3822__auto____14545 = coll;
if(and__3822__auto____14545)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3822__auto____14545;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{var x__2524__auto____14546 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____14547 = (cljs.core._peek[goog.typeOf(x__2524__auto____14546)]);
if(or__3824__auto____14547)
{return or__3824__auto____14547;
} else
{var or__3824__auto____14548 = (cljs.core._peek["_"]);
if(or__3824__auto____14548)
{return or__3824__auto____14548;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if((function (){var and__3822__auto____14553 = coll;
if(and__3822__auto____14553)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3822__auto____14553;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{var x__2524__auto____14554 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____14555 = (cljs.core._pop[goog.typeOf(x__2524__auto____14554)]);
if(or__3824__auto____14555)
{return or__3824__auto____14555;
} else
{var or__3824__auto____14556 = (cljs.core._pop["_"]);
if(or__3824__auto____14556)
{return or__3824__auto____14556;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3822__auto____14561 = coll;
if(and__3822__auto____14561)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3822__auto____14561;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{var x__2524__auto____14562 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____14563 = (cljs.core._assoc_n[goog.typeOf(x__2524__auto____14562)]);
if(or__3824__auto____14563)
{return or__3824__auto____14563;
} else
{var or__3824__auto____14564 = (cljs.core._assoc_n["_"]);
if(or__3824__auto____14564)
{return or__3824__auto____14564;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if((function (){var and__3822__auto____14569 = o;
if(and__3822__auto____14569)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3822__auto____14569;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{var x__2524__auto____14570 = (((o == null))?null:o);
return (function (){var or__3824__auto____14571 = (cljs.core._deref[goog.typeOf(x__2524__auto____14570)]);
if(or__3824__auto____14571)
{return or__3824__auto____14571;
} else
{var or__3824__auto____14572 = (cljs.core._deref["_"]);
if(or__3824__auto____14572)
{return or__3824__auto____14572;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3822__auto____14577 = o;
if(and__3822__auto____14577)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3822__auto____14577;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{var x__2524__auto____14578 = (((o == null))?null:o);
return (function (){var or__3824__auto____14579 = (cljs.core._deref_with_timeout[goog.typeOf(x__2524__auto____14578)]);
if(or__3824__auto____14579)
{return or__3824__auto____14579;
} else
{var or__3824__auto____14580 = (cljs.core._deref_with_timeout["_"]);
if(or__3824__auto____14580)
{return or__3824__auto____14580;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if((function (){var and__3822__auto____14585 = o;
if(and__3822__auto____14585)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3822__auto____14585;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{var x__2524__auto____14586 = (((o == null))?null:o);
return (function (){var or__3824__auto____14587 = (cljs.core._meta[goog.typeOf(x__2524__auto____14586)]);
if(or__3824__auto____14587)
{return or__3824__auto____14587;
} else
{var or__3824__auto____14588 = (cljs.core._meta["_"]);
if(or__3824__auto____14588)
{return or__3824__auto____14588;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3822__auto____14593 = o;
if(and__3822__auto____14593)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3822__auto____14593;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{var x__2524__auto____14594 = (((o == null))?null:o);
return (function (){var or__3824__auto____14595 = (cljs.core._with_meta[goog.typeOf(x__2524__auto____14594)]);
if(or__3824__auto____14595)
{return or__3824__auto____14595;
} else
{var or__3824__auto____14596 = (cljs.core._with_meta["_"]);
if(or__3824__auto____14596)
{return or__3824__auto____14596;
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
if((function (){var and__3822__auto____14605 = coll;
if(and__3822__auto____14605)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3822__auto____14605;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{var x__2524__auto____14606 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____14607 = (cljs.core._reduce[goog.typeOf(x__2524__auto____14606)]);
if(or__3824__auto____14607)
{return or__3824__auto____14607;
} else
{var or__3824__auto____14608 = (cljs.core._reduce["_"]);
if(or__3824__auto____14608)
{return or__3824__auto____14608;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3822__auto____14609 = coll;
if(and__3822__auto____14609)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3822__auto____14609;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{var x__2524__auto____14610 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____14611 = (cljs.core._reduce[goog.typeOf(x__2524__auto____14610)]);
if(or__3824__auto____14611)
{return or__3824__auto____14611;
} else
{var or__3824__auto____14612 = (cljs.core._reduce["_"]);
if(or__3824__auto____14612)
{return or__3824__auto____14612;
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
if((function (){var and__3822__auto____14617 = coll;
if(and__3822__auto____14617)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3822__auto____14617;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{var x__2524__auto____14618 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____14619 = (cljs.core._kv_reduce[goog.typeOf(x__2524__auto____14618)]);
if(or__3824__auto____14619)
{return or__3824__auto____14619;
} else
{var or__3824__auto____14620 = (cljs.core._kv_reduce["_"]);
if(or__3824__auto____14620)
{return or__3824__auto____14620;
} else
{throw cljs.core.missing_protocol.call(null,"IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3822__auto____14625 = o;
if(and__3822__auto____14625)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3822__auto____14625;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{var x__2524__auto____14626 = (((o == null))?null:o);
return (function (){var or__3824__auto____14627 = (cljs.core._equiv[goog.typeOf(x__2524__auto____14626)]);
if(or__3824__auto____14627)
{return or__3824__auto____14627;
} else
{var or__3824__auto____14628 = (cljs.core._equiv["_"]);
if(or__3824__auto____14628)
{return or__3824__auto____14628;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if((function (){var and__3822__auto____14633 = o;
if(and__3822__auto____14633)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3822__auto____14633;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{var x__2524__auto____14634 = (((o == null))?null:o);
return (function (){var or__3824__auto____14635 = (cljs.core._hash[goog.typeOf(x__2524__auto____14634)]);
if(or__3824__auto____14635)
{return or__3824__auto____14635;
} else
{var or__3824__auto____14636 = (cljs.core._hash["_"]);
if(or__3824__auto____14636)
{return or__3824__auto____14636;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if((function (){var and__3822__auto____14641 = o;
if(and__3822__auto____14641)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3822__auto____14641;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{var x__2524__auto____14642 = (((o == null))?null:o);
return (function (){var or__3824__auto____14643 = (cljs.core._seq[goog.typeOf(x__2524__auto____14642)]);
if(or__3824__auto____14643)
{return or__3824__auto____14643;
} else
{var or__3824__auto____14644 = (cljs.core._seq["_"]);
if(or__3824__auto____14644)
{return or__3824__auto____14644;
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
if((function (){var and__3822__auto____14649 = coll;
if(and__3822__auto____14649)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3822__auto____14649;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{var x__2524__auto____14650 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____14651 = (cljs.core._rseq[goog.typeOf(x__2524__auto____14650)]);
if(or__3824__auto____14651)
{return or__3824__auto____14651;
} else
{var or__3824__auto____14652 = (cljs.core._rseq["_"]);
if(or__3824__auto____14652)
{return or__3824__auto____14652;
} else
{throw cljs.core.missing_protocol.call(null,"IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISorted = {};
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3822__auto____14657 = coll;
if(and__3822__auto____14657)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3822__auto____14657;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{var x__2524__auto____14658 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____14659 = (cljs.core._sorted_seq[goog.typeOf(x__2524__auto____14658)]);
if(or__3824__auto____14659)
{return or__3824__auto____14659;
} else
{var or__3824__auto____14660 = (cljs.core._sorted_seq["_"]);
if(or__3824__auto____14660)
{return or__3824__auto____14660;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3822__auto____14665 = coll;
if(and__3822__auto____14665)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3822__auto____14665;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{var x__2524__auto____14666 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____14667 = (cljs.core._sorted_seq_from[goog.typeOf(x__2524__auto____14666)]);
if(or__3824__auto____14667)
{return or__3824__auto____14667;
} else
{var or__3824__auto____14668 = (cljs.core._sorted_seq_from["_"]);
if(or__3824__auto____14668)
{return or__3824__auto____14668;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3822__auto____14673 = coll;
if(and__3822__auto____14673)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3822__auto____14673;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{var x__2524__auto____14674 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____14675 = (cljs.core._entry_key[goog.typeOf(x__2524__auto____14674)]);
if(or__3824__auto____14675)
{return or__3824__auto____14675;
} else
{var or__3824__auto____14676 = (cljs.core._entry_key["_"]);
if(or__3824__auto____14676)
{return or__3824__auto____14676;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3822__auto____14681 = coll;
if(and__3822__auto____14681)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3822__auto____14681;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{var x__2524__auto____14682 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____14683 = (cljs.core._comparator[goog.typeOf(x__2524__auto____14682)]);
if(or__3824__auto____14683)
{return or__3824__auto____14683;
} else
{var or__3824__auto____14684 = (cljs.core._comparator["_"]);
if(or__3824__auto____14684)
{return or__3824__auto____14684;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if((function (){var and__3822__auto____14689 = o;
if(and__3822__auto____14689)
{return o.cljs$core$IPrintable$_pr_seq$arity$2;
} else
{return and__3822__auto____14689;
}
})())
{return o.cljs$core$IPrintable$_pr_seq$arity$2(o,opts);
} else
{var x__2524__auto____14690 = (((o == null))?null:o);
return (function (){var or__3824__auto____14691 = (cljs.core._pr_seq[goog.typeOf(x__2524__auto____14690)]);
if(or__3824__auto____14691)
{return or__3824__auto____14691;
} else
{var or__3824__auto____14692 = (cljs.core._pr_seq["_"]);
if(or__3824__auto____14692)
{return or__3824__auto____14692;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IWriter = {};
cljs.core._write = (function _write(writer,s){
if((function (){var and__3822__auto____14697 = writer;
if(and__3822__auto____14697)
{return writer.cljs$core$IWriter$_write$arity$2;
} else
{return and__3822__auto____14697;
}
})())
{return writer.cljs$core$IWriter$_write$arity$2(writer,s);
} else
{var x__2524__auto____14698 = (((writer == null))?null:writer);
return (function (){var or__3824__auto____14699 = (cljs.core._write[goog.typeOf(x__2524__auto____14698)]);
if(or__3824__auto____14699)
{return or__3824__auto____14699;
} else
{var or__3824__auto____14700 = (cljs.core._write["_"]);
if(or__3824__auto____14700)
{return or__3824__auto____14700;
} else
{throw cljs.core.missing_protocol.call(null,"IWriter.-write",writer);
}
}
})().call(null,writer,s);
}
});
cljs.core._flush = (function _flush(writer){
if((function (){var and__3822__auto____14705 = writer;
if(and__3822__auto____14705)
{return writer.cljs$core$IWriter$_flush$arity$1;
} else
{return and__3822__auto____14705;
}
})())
{return writer.cljs$core$IWriter$_flush$arity$1(writer);
} else
{var x__2524__auto____14706 = (((writer == null))?null:writer);
return (function (){var or__3824__auto____14707 = (cljs.core._flush[goog.typeOf(x__2524__auto____14706)]);
if(or__3824__auto____14707)
{return or__3824__auto____14707;
} else
{var or__3824__auto____14708 = (cljs.core._flush["_"]);
if(or__3824__auto____14708)
{return or__3824__auto____14708;
} else
{throw cljs.core.missing_protocol.call(null,"IWriter.-flush",writer);
}
}
})().call(null,writer);
}
});
cljs.core.IPrintWithWriter = {};
cljs.core._pr_writer = (function _pr_writer(o,writer,opts){
if((function (){var and__3822__auto____14713 = o;
if(and__3822__auto____14713)
{return o.cljs$core$IPrintWithWriter$_pr_writer$arity$3;
} else
{return and__3822__auto____14713;
}
})())
{return o.cljs$core$IPrintWithWriter$_pr_writer$arity$3(o,writer,opts);
} else
{var x__2524__auto____14714 = (((o == null))?null:o);
return (function (){var or__3824__auto____14715 = (cljs.core._pr_writer[goog.typeOf(x__2524__auto____14714)]);
if(or__3824__auto____14715)
{return or__3824__auto____14715;
} else
{var or__3824__auto____14716 = (cljs.core._pr_writer["_"]);
if(or__3824__auto____14716)
{return or__3824__auto____14716;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintWithWriter.-pr-writer",o);
}
}
})().call(null,o,writer,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3822__auto____14721 = d;
if(and__3822__auto____14721)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3822__auto____14721;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{var x__2524__auto____14722 = (((d == null))?null:d);
return (function (){var or__3824__auto____14723 = (cljs.core._realized_QMARK_[goog.typeOf(x__2524__auto____14722)]);
if(or__3824__auto____14723)
{return or__3824__auto____14723;
} else
{var or__3824__auto____14724 = (cljs.core._realized_QMARK_["_"]);
if(or__3824__auto____14724)
{return or__3824__auto____14724;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3822__auto____14729 = this$;
if(and__3822__auto____14729)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3822__auto____14729;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{var x__2524__auto____14730 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____14731 = (cljs.core._notify_watches[goog.typeOf(x__2524__auto____14730)]);
if(or__3824__auto____14731)
{return or__3824__auto____14731;
} else
{var or__3824__auto____14732 = (cljs.core._notify_watches["_"]);
if(or__3824__auto____14732)
{return or__3824__auto____14732;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3822__auto____14737 = this$;
if(and__3822__auto____14737)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3822__auto____14737;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{var x__2524__auto____14738 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____14739 = (cljs.core._add_watch[goog.typeOf(x__2524__auto____14738)]);
if(or__3824__auto____14739)
{return or__3824__auto____14739;
} else
{var or__3824__auto____14740 = (cljs.core._add_watch["_"]);
if(or__3824__auto____14740)
{return or__3824__auto____14740;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3822__auto____14745 = this$;
if(and__3822__auto____14745)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3822__auto____14745;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{var x__2524__auto____14746 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____14747 = (cljs.core._remove_watch[goog.typeOf(x__2524__auto____14746)]);
if(or__3824__auto____14747)
{return or__3824__auto____14747;
} else
{var or__3824__auto____14748 = (cljs.core._remove_watch["_"]);
if(or__3824__auto____14748)
{return or__3824__auto____14748;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
cljs.core.IEditableCollection = {};
cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3822__auto____14753 = coll;
if(and__3822__auto____14753)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3822__auto____14753;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{var x__2524__auto____14754 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____14755 = (cljs.core._as_transient[goog.typeOf(x__2524__auto____14754)]);
if(or__3824__auto____14755)
{return or__3824__auto____14755;
} else
{var or__3824__auto____14756 = (cljs.core._as_transient["_"]);
if(or__3824__auto____14756)
{return or__3824__auto____14756;
} else
{throw cljs.core.missing_protocol.call(null,"IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ITransientCollection = {};
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3822__auto____14761 = tcoll;
if(and__3822__auto____14761)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3822__auto____14761;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{var x__2524__auto____14762 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____14763 = (cljs.core._conj_BANG_[goog.typeOf(x__2524__auto____14762)]);
if(or__3824__auto____14763)
{return or__3824__auto____14763;
} else
{var or__3824__auto____14764 = (cljs.core._conj_BANG_["_"]);
if(or__3824__auto____14764)
{return or__3824__auto____14764;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3822__auto____14769 = tcoll;
if(and__3822__auto____14769)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3822__auto____14769;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{var x__2524__auto____14770 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____14771 = (cljs.core._persistent_BANG_[goog.typeOf(x__2524__auto____14770)]);
if(or__3824__auto____14771)
{return or__3824__auto____14771;
} else
{var or__3824__auto____14772 = (cljs.core._persistent_BANG_["_"]);
if(or__3824__auto____14772)
{return or__3824__auto____14772;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientAssociative = {};
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3822__auto____14777 = tcoll;
if(and__3822__auto____14777)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3822__auto____14777;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{var x__2524__auto____14778 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____14779 = (cljs.core._assoc_BANG_[goog.typeOf(x__2524__auto____14778)]);
if(or__3824__auto____14779)
{return or__3824__auto____14779;
} else
{var or__3824__auto____14780 = (cljs.core._assoc_BANG_["_"]);
if(or__3824__auto____14780)
{return or__3824__auto____14780;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
cljs.core.ITransientMap = {};
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3822__auto____14785 = tcoll;
if(and__3822__auto____14785)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3822__auto____14785;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{var x__2524__auto____14786 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____14787 = (cljs.core._dissoc_BANG_[goog.typeOf(x__2524__auto____14786)]);
if(or__3824__auto____14787)
{return or__3824__auto____14787;
} else
{var or__3824__auto____14788 = (cljs.core._dissoc_BANG_["_"]);
if(or__3824__auto____14788)
{return or__3824__auto____14788;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
cljs.core.ITransientVector = {};
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3822__auto____14793 = tcoll;
if(and__3822__auto____14793)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3822__auto____14793;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{var x__2524__auto____14794 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____14795 = (cljs.core._assoc_n_BANG_[goog.typeOf(x__2524__auto____14794)]);
if(or__3824__auto____14795)
{return or__3824__auto____14795;
} else
{var or__3824__auto____14796 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3824__auto____14796)
{return or__3824__auto____14796;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3822__auto____14801 = tcoll;
if(and__3822__auto____14801)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3822__auto____14801;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{var x__2524__auto____14802 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____14803 = (cljs.core._pop_BANG_[goog.typeOf(x__2524__auto____14802)]);
if(or__3824__auto____14803)
{return or__3824__auto____14803;
} else
{var or__3824__auto____14804 = (cljs.core._pop_BANG_["_"]);
if(or__3824__auto____14804)
{return or__3824__auto____14804;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientSet = {};
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3822__auto____14809 = tcoll;
if(and__3822__auto____14809)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3822__auto____14809;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{var x__2524__auto____14810 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____14811 = (cljs.core._disjoin_BANG_[goog.typeOf(x__2524__auto____14810)]);
if(or__3824__auto____14811)
{return or__3824__auto____14811;
} else
{var or__3824__auto____14812 = (cljs.core._disjoin_BANG_["_"]);
if(or__3824__auto____14812)
{return or__3824__auto____14812;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
cljs.core.IComparable = {};
cljs.core._compare = (function _compare(x,y){
if((function (){var and__3822__auto____14817 = x;
if(and__3822__auto____14817)
{return x.cljs$core$IComparable$_compare$arity$2;
} else
{return and__3822__auto____14817;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else
{var x__2524__auto____14818 = (((x == null))?null:x);
return (function (){var or__3824__auto____14819 = (cljs.core._compare[goog.typeOf(x__2524__auto____14818)]);
if(or__3824__auto____14819)
{return or__3824__auto____14819;
} else
{var or__3824__auto____14820 = (cljs.core._compare["_"]);
if(or__3824__auto____14820)
{return or__3824__auto____14820;
} else
{throw cljs.core.missing_protocol.call(null,"IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});
cljs.core.IChunk = {};
cljs.core._drop_first = (function _drop_first(coll){
if((function (){var and__3822__auto____14825 = coll;
if(and__3822__auto____14825)
{return coll.cljs$core$IChunk$_drop_first$arity$1;
} else
{return and__3822__auto____14825;
}
})())
{return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else
{var x__2524__auto____14826 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____14827 = (cljs.core._drop_first[goog.typeOf(x__2524__auto____14826)]);
if(or__3824__auto____14827)
{return or__3824__auto____14827;
} else
{var or__3824__auto____14828 = (cljs.core._drop_first["_"]);
if(or__3824__auto____14828)
{return or__3824__auto____14828;
} else
{throw cljs.core.missing_protocol.call(null,"IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedSeq = {};
cljs.core._chunked_first = (function _chunked_first(coll){
if((function (){var and__3822__auto____14833 = coll;
if(and__3822__auto____14833)
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else
{return and__3822__auto____14833;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else
{var x__2524__auto____14834 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____14835 = (cljs.core._chunked_first[goog.typeOf(x__2524__auto____14834)]);
if(or__3824__auto____14835)
{return or__3824__auto____14835;
} else
{var or__3824__auto____14836 = (cljs.core._chunked_first["_"]);
if(or__3824__auto____14836)
{return or__3824__auto____14836;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._chunked_rest = (function _chunked_rest(coll){
if((function (){var and__3822__auto____14841 = coll;
if(and__3822__auto____14841)
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else
{return and__3822__auto____14841;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else
{var x__2524__auto____14842 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____14843 = (cljs.core._chunked_rest[goog.typeOf(x__2524__auto____14842)]);
if(or__3824__auto____14843)
{return or__3824__auto____14843;
} else
{var or__3824__auto____14844 = (cljs.core._chunked_rest["_"]);
if(or__3824__auto____14844)
{return or__3824__auto____14844;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedNext = {};
cljs.core._chunked_next = (function _chunked_next(coll){
if((function (){var and__3822__auto____14849 = coll;
if(and__3822__auto____14849)
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else
{return and__3822__auto____14849;
}
})())
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else
{var x__2524__auto____14850 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____14851 = (cljs.core._chunked_next[goog.typeOf(x__2524__auto____14850)]);
if(or__3824__auto____14851)
{return or__3824__auto____14851;
} else
{var or__3824__auto____14852 = (cljs.core._chunked_next["_"]);
if(or__3824__auto____14852)
{return or__3824__auto____14852;
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
{if((function (){var G__14856__14857 = coll;
if(G__14856__14857)
{if((function (){var or__3824__auto____14858 = (G__14856__14857.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3824__auto____14858)
{return or__3824__auto____14858;
} else
{return G__14856__14857.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__14856__14857.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__14856__14857);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__14856__14857);
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
{if((function (){var G__14863__14864 = coll;
if(G__14863__14864)
{if((function (){var or__3824__auto____14865 = (G__14863__14864.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____14865)
{return or__3824__auto____14865;
} else
{return G__14863__14864.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__14863__14864.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__14863__14864);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__14863__14864);
}
})())
{return cljs.core._first.call(null,coll);
} else
{var s__14866 = cljs.core.seq.call(null,coll);
if((s__14866 == null))
{return null;
} else
{return cljs.core._first.call(null,s__14866);
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
{if((function (){var G__14871__14872 = coll;
if(G__14871__14872)
{if((function (){var or__3824__auto____14873 = (G__14871__14872.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____14873)
{return or__3824__auto____14873;
} else
{return G__14871__14872.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__14871__14872.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__14871__14872);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__14871__14872);
}
})())
{return cljs.core._rest.call(null,coll);
} else
{var s__14874 = cljs.core.seq.call(null,coll);
if(!((s__14874 == null)))
{return cljs.core._rest.call(null,s__14874);
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
{if((function (){var G__14878__14879 = coll;
if(G__14878__14879)
{if((function (){var or__3824__auto____14880 = (G__14878__14879.cljs$lang$protocol_mask$partition0$ & 128);
if(or__3824__auto____14880)
{return or__3824__auto____14880;
} else
{return G__14878__14879.cljs$core$INext$;
}
})())
{return true;
} else
{if((!G__14878__14879.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__14878__14879);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__14878__14879);
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
var or__3824__auto____14882 = (x === y);
if(or__3824__auto____14882)
{return or__3824__auto____14882;
} else
{return cljs.core._equiv.call(null,x,y);
}
});
var _EQ___3 = (function() { 
var G__14883__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__14884 = y;
var G__14885 = cljs.core.first.call(null,more);
var G__14886 = cljs.core.next.call(null,more);
x = G__14884;
y = G__14885;
more = G__14886;
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
var G__14883 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__14883__delegate.call(this, x, y, more);
};
G__14883.cljs$lang$maxFixedArity = 2;
G__14883.cljs$lang$applyTo = (function (arglist__14887){
var x = cljs.core.first(arglist__14887);
var y = cljs.core.first(cljs.core.next(arglist__14887));
var more = cljs.core.rest(cljs.core.next(arglist__14887));
return G__14883__delegate(x, y, more);
});
G__14883.cljs$lang$arity$variadic = G__14883__delegate;
return G__14883;
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
var G__14888 = null;
var G__14888__2 = (function (o,k){
return null;
});
var G__14888__3 = (function (o,k,not_found){
return not_found;
});
G__14888 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__14888__2.call(this,o,k);
case 3:
return G__14888__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14888;
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
var G__14889 = null;
var G__14889__2 = (function (_,f){
return f.call(null);
});
var G__14889__3 = (function (_,f,start){
return start;
});
G__14889 = function(_,f,start){
switch(arguments.length){
case 2:
return G__14889__2.call(this,_,f);
case 3:
return G__14889__3.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14889;
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
var G__14890 = null;
var G__14890__2 = (function (_,n){
return null;
});
var G__14890__3 = (function (_,n,not_found){
return not_found;
});
G__14890 = function(_,n,not_found){
switch(arguments.length){
case 2:
return G__14890__2.call(this,_,n);
case 3:
return G__14890__3.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14890;
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
var and__3822__auto____14891 = cljs.core.instance_QMARK_.call(null,Date,other);
if(and__3822__auto____14891)
{return (o.toString() === other.toString());
} else
{return and__3822__auto____14891;
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
cljs.core.Reduced.cljs$lang$ctorPrSeq = (function (this__2459__auto__){
return cljs.core.list.call(null,"cljs.core/Reduced");
});
cljs.core.Reduced.cljs$lang$ctorPrWriter = (function (this__2459__auto__,writer__2460__auto__){
return cljs.core._write.call(null,writer__2460__auto__,"cljs.core/Reduced");
});
cljs.core.Reduced.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var this__14892 = this;
return this__14892.val;
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
var cnt__14905 = cljs.core._count.call(null,cicoll);
if((cnt__14905 === 0))
{return f.call(null);
} else
{var val__14906 = cljs.core._nth.call(null,cicoll,0);
var n__14907 = 1;
while(true){
if((n__14907 < cnt__14905))
{var nval__14908 = f.call(null,val__14906,cljs.core._nth.call(null,cicoll,n__14907));
if(cljs.core.reduced_QMARK_.call(null,nval__14908))
{return cljs.core.deref.call(null,nval__14908);
} else
{{
var G__14917 = nval__14908;
var G__14918 = (n__14907 + 1);
val__14906 = G__14917;
n__14907 = G__14918;
continue;
}
}
} else
{return val__14906;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var cnt__14909 = cljs.core._count.call(null,cicoll);
var val__14910 = val;
var n__14911 = 0;
while(true){
if((n__14911 < cnt__14909))
{var nval__14912 = f.call(null,val__14910,cljs.core._nth.call(null,cicoll,n__14911));
if(cljs.core.reduced_QMARK_.call(null,nval__14912))
{return cljs.core.deref.call(null,nval__14912);
} else
{{
var G__14919 = nval__14912;
var G__14920 = (n__14911 + 1);
val__14910 = G__14919;
n__14911 = G__14920;
continue;
}
}
} else
{return val__14910;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var cnt__14913 = cljs.core._count.call(null,cicoll);
var val__14914 = val;
var n__14915 = idx;
while(true){
if((n__14915 < cnt__14913))
{var nval__14916 = f.call(null,val__14914,cljs.core._nth.call(null,cicoll,n__14915));
if(cljs.core.reduced_QMARK_.call(null,nval__14916))
{return cljs.core.deref.call(null,nval__14916);
} else
{{
var G__14921 = nval__14916;
var G__14922 = (n__14915 + 1);
val__14914 = G__14921;
n__14915 = G__14922;
continue;
}
}
} else
{return val__14914;
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
var cnt__14935 = arr.length;
if((arr.length === 0))
{return f.call(null);
} else
{var val__14936 = (arr[0]);
var n__14937 = 1;
while(true){
if((n__14937 < cnt__14935))
{var nval__14938 = f.call(null,val__14936,(arr[n__14937]));
if(cljs.core.reduced_QMARK_.call(null,nval__14938))
{return cljs.core.deref.call(null,nval__14938);
} else
{{
var G__14947 = nval__14938;
var G__14948 = (n__14937 + 1);
val__14936 = G__14947;
n__14937 = G__14948;
continue;
}
}
} else
{return val__14936;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){
var cnt__14939 = arr.length;
var val__14940 = val;
var n__14941 = 0;
while(true){
if((n__14941 < cnt__14939))
{var nval__14942 = f.call(null,val__14940,(arr[n__14941]));
if(cljs.core.reduced_QMARK_.call(null,nval__14942))
{return cljs.core.deref.call(null,nval__14942);
} else
{{
var G__14949 = nval__14942;
var G__14950 = (n__14941 + 1);
val__14940 = G__14949;
n__14941 = G__14950;
continue;
}
}
} else
{return val__14940;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){
var cnt__14943 = arr.length;
var val__14944 = val;
var n__14945 = idx;
while(true){
if((n__14945 < cnt__14943))
{var nval__14946 = f.call(null,val__14944,(arr[n__14945]));
if(cljs.core.reduced_QMARK_.call(null,nval__14946))
{return cljs.core.deref.call(null,nval__14946);
} else
{{
var G__14951 = nval__14946;
var G__14952 = (n__14945 + 1);
val__14944 = G__14951;
n__14945 = G__14952;
continue;
}
}
} else
{return val__14944;
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
var G__14956__14957 = x;
if(G__14956__14957)
{if((function (){var or__3824__auto____14958 = (G__14956__14957.cljs$lang$protocol_mask$partition0$ & 2);
if(or__3824__auto____14958)
{return or__3824__auto____14958;
} else
{return G__14956__14957.cljs$core$ICounted$;
}
})())
{return true;
} else
{if((!G__14956__14957.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__14956__14957);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__14956__14957);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__14962__14963 = x;
if(G__14962__14963)
{if((function (){var or__3824__auto____14964 = (G__14962__14963.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____14964)
{return or__3824__auto____14964;
} else
{return G__14962__14963.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__14962__14963.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__14962__14963);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__14962__14963);
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
cljs.core.IndexedSeq.cljs$lang$ctorPrSeq = (function (this__2459__auto__){
return cljs.core.list.call(null,"cljs.core/IndexedSeq");
});
cljs.core.IndexedSeq.cljs$lang$ctorPrWriter = (function (this__2459__auto__,writer__2460__auto__){
return cljs.core._write.call(null,writer__2460__auto__,"cljs.core/IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__14965 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var this__14966 = this;
if(((this__14966.i + 1) < this__14966.a.length))
{return (new cljs.core.IndexedSeq(this__14966.a,(this__14966.i + 1)));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__14967 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__14968 = this;
var c__14969 = coll.cljs$core$ICounted$_count$arity$1(coll);
if((c__14969 > 0))
{return (new cljs.core.RSeq(coll,(c__14969 - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.IndexedSeq.prototype.toString = (function (){
var this__14970 = this;
var this__14971 = this;
return cljs.core.pr_str.call(null,this__14971);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__14972 = this;
if(cljs.core.counted_QMARK_.call(null,this__14972.a))
{return cljs.core.ci_reduce.call(null,this__14972.a,f,(this__14972.a[this__14972.i]),(this__14972.i + 1));
} else
{return cljs.core.ci_reduce.call(null,coll,f,(this__14972.a[this__14972.i]),0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__14973 = this;
if(cljs.core.counted_QMARK_.call(null,this__14973.a))
{return cljs.core.ci_reduce.call(null,this__14973.a,f,start,this__14973.i);
} else
{return cljs.core.ci_reduce.call(null,coll,f,start,0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__14974 = this;
return this$;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__14975 = this;
return (this__14975.a.length - this__14975.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__14976 = this;
return (this__14976.a[this__14976.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__14977 = this;
if(((this__14977.i + 1) < this__14977.a.length))
{return (new cljs.core.IndexedSeq(this__14977.a,(this__14977.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__14978 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__14979 = this;
var i__14980 = (n + this__14979.i);
if((i__14980 < this__14979.a.length))
{return (this__14979.a[i__14980]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__14981 = this;
var i__14982 = (n + this__14981.i);
if((i__14982 < this__14981.a.length))
{return (this__14981.a[i__14982]);
} else
{return not_found;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__14983 = this;
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
var G__14984 = null;
var G__14984__2 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__14984__3 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__14984 = function(array,f,start){
switch(arguments.length){
case 2:
return G__14984__2.call(this,array,f);
case 3:
return G__14984__3.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14984;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__14985 = null;
var G__14985__2 = (function (array,k){
return (array[k]);
});
var G__14985__3 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__14985 = function(array,k,not_found){
switch(arguments.length){
case 2:
return G__14985__2.call(this,array,k);
case 3:
return G__14985__3.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14985;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__14986 = null;
var G__14986__2 = (function (array,n){
if((n < array.length))
{return (array[n]);
} else
{return null;
}
});
var G__14986__3 = (function (array,n,not_found){
if((n < array.length))
{return (array[n]);
} else
{return not_found;
}
});
G__14986 = function(array,n,not_found){
switch(arguments.length){
case 2:
return G__14986__2.call(this,array,n);
case 3:
return G__14986__3.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14986;
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
cljs.core.RSeq.cljs$lang$ctorPrSeq = (function (this__2459__auto__){
return cljs.core.list.call(null,"cljs.core/RSeq");
});
cljs.core.RSeq.cljs$lang$ctorPrWriter = (function (this__2459__auto__,writer__2460__auto__){
return cljs.core._write.call(null,writer__2460__auto__,"cljs.core/RSeq");
});
cljs.core.RSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__14987 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__14988 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.RSeq.prototype.toString = (function (){
var this__14989 = this;
var this__14990 = this;
return cljs.core.pr_str.call(null,this__14990);
});
cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__14991 = this;
return coll;
});
cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__14992 = this;
return (this__14992.i + 1);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__14993 = this;
return cljs.core._nth.call(null,this__14993.ci,this__14993.i);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__14994 = this;
if((this__14994.i > 0))
{return (new cljs.core.RSeq(this__14994.ci,(this__14994.i - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__14995 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var this__14996 = this;
return (new cljs.core.RSeq(this__14996.ci,this__14996.i,new_meta));
});
cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__14997 = this;
return this__14997.meta;
});
cljs.core.RSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__14998 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__14998.meta);
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
var sn__15000 = cljs.core.next.call(null,s);
if(!((sn__15000 == null)))
{{
var G__15001 = sn__15000;
s = G__15001;
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
var G__15002__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__15003 = conj.call(null,coll,x);
var G__15004 = cljs.core.first.call(null,xs);
var G__15005 = cljs.core.next.call(null,xs);
coll = G__15003;
x = G__15004;
xs = G__15005;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__15002 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__15002__delegate.call(this, coll, x, xs);
};
G__15002.cljs$lang$maxFixedArity = 2;
G__15002.cljs$lang$applyTo = (function (arglist__15006){
var coll = cljs.core.first(arglist__15006);
var x = cljs.core.first(cljs.core.next(arglist__15006));
var xs = cljs.core.rest(cljs.core.next(arglist__15006));
return G__15002__delegate(coll, x, xs);
});
G__15002.cljs$lang$arity$variadic = G__15002__delegate;
return G__15002;
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
var s__15009 = cljs.core.seq.call(null,coll);
var acc__15010 = 0;
while(true){
if(cljs.core.counted_QMARK_.call(null,s__15009))
{return (acc__15010 + cljs.core._count.call(null,s__15009));
} else
{{
var G__15011 = cljs.core.next.call(null,s__15009);
var G__15012 = (acc__15010 + 1);
s__15009 = G__15011;
acc__15010 = G__15012;
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
var G__15013 = cljs.core.next.call(null,coll);
var G__15014 = (n - 1);
coll = G__15013;
n = G__15014;
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
var G__15015 = cljs.core.next.call(null,coll);
var G__15016 = (n - 1);
var G__15017 = not_found;
coll = G__15015;
n = G__15016;
not_found = G__15017;
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
{if((function (){var G__15024__15025 = coll;
if(G__15024__15025)
{if((function (){var or__3824__auto____15026 = (G__15024__15025.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____15026)
{return or__3824__auto____15026;
} else
{return G__15024__15025.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__15024__15025.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__15024__15025);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__15024__15025);
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
{if((function (){var G__15027__15028 = coll;
if(G__15027__15028)
{if((function (){var or__3824__auto____15029 = (G__15027__15028.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____15029)
{return or__3824__auto____15029;
} else
{return G__15027__15028.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__15027__15028.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__15027__15028);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__15027__15028);
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
var G__15032__delegate = function (coll,k,v,kvs){
while(true){
var ret__15031 = assoc.call(null,coll,k,v);
if(cljs.core.truth_(kvs))
{{
var G__15033 = ret__15031;
var G__15034 = cljs.core.first.call(null,kvs);
var G__15035 = cljs.core.second.call(null,kvs);
var G__15036 = cljs.core.nnext.call(null,kvs);
coll = G__15033;
k = G__15034;
v = G__15035;
kvs = G__15036;
continue;
}
} else
{return ret__15031;
}
break;
}
};
var G__15032 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__15032__delegate.call(this, coll, k, v, kvs);
};
G__15032.cljs$lang$maxFixedArity = 3;
G__15032.cljs$lang$applyTo = (function (arglist__15037){
var coll = cljs.core.first(arglist__15037);
var k = cljs.core.first(cljs.core.next(arglist__15037));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__15037)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__15037)));
return G__15032__delegate(coll, k, v, kvs);
});
G__15032.cljs$lang$arity$variadic = G__15032__delegate;
return G__15032;
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
var G__15040__delegate = function (coll,k,ks){
while(true){
var ret__15039 = dissoc.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__15041 = ret__15039;
var G__15042 = cljs.core.first.call(null,ks);
var G__15043 = cljs.core.next.call(null,ks);
coll = G__15041;
k = G__15042;
ks = G__15043;
continue;
}
} else
{return ret__15039;
}
break;
}
};
var G__15040 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__15040__delegate.call(this, coll, k, ks);
};
G__15040.cljs$lang$maxFixedArity = 2;
G__15040.cljs$lang$applyTo = (function (arglist__15044){
var coll = cljs.core.first(arglist__15044);
var k = cljs.core.first(cljs.core.next(arglist__15044));
var ks = cljs.core.rest(cljs.core.next(arglist__15044));
return G__15040__delegate(coll, k, ks);
});
G__15040.cljs$lang$arity$variadic = G__15040__delegate;
return G__15040;
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
if((function (){var G__15048__15049 = o;
if(G__15048__15049)
{if((function (){var or__3824__auto____15050 = (G__15048__15049.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____15050)
{return or__3824__auto____15050;
} else
{return G__15048__15049.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__15048__15049.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__15048__15049);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__15048__15049);
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
var G__15053__delegate = function (coll,k,ks){
while(true){
var ret__15052 = disj.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__15054 = ret__15052;
var G__15055 = cljs.core.first.call(null,ks);
var G__15056 = cljs.core.next.call(null,ks);
coll = G__15054;
k = G__15055;
ks = G__15056;
continue;
}
} else
{return ret__15052;
}
break;
}
};
var G__15053 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__15053__delegate.call(this, coll, k, ks);
};
G__15053.cljs$lang$maxFixedArity = 2;
G__15053.cljs$lang$applyTo = (function (arglist__15057){
var coll = cljs.core.first(arglist__15057);
var k = cljs.core.first(cljs.core.next(arglist__15057));
var ks = cljs.core.rest(cljs.core.next(arglist__15057));
return G__15053__delegate(coll, k, ks);
});
G__15053.cljs$lang$arity$variadic = G__15053__delegate;
return G__15053;
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
var h__15059 = goog.string.hashCode(k);
(cljs.core.string_hash_cache[k] = h__15059);
cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + 1);
return h__15059;
});
cljs.core.check_string_hash_cache = (function check_string_hash_cache(k){
if((cljs.core.string_hash_cache_count > 255))
{cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
} else
{}
var h__15061 = (cljs.core.string_hash_cache[k]);
if(!((h__15061 == null)))
{return h__15061;
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
if((function (){var and__3822__auto____15063 = goog.isString(o);
if(and__3822__auto____15063)
{return check_cache;
} else
{return and__3822__auto____15063;
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
{var G__15067__15068 = x;
if(G__15067__15068)
{if((function (){var or__3824__auto____15069 = (G__15067__15068.cljs$lang$protocol_mask$partition0$ & 8);
if(or__3824__auto____15069)
{return or__3824__auto____15069;
} else
{return G__15067__15068.cljs$core$ICollection$;
}
})())
{return true;
} else
{if((!G__15067__15068.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__15067__15068);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__15067__15068);
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
{var G__15073__15074 = x;
if(G__15073__15074)
{if((function (){var or__3824__auto____15075 = (G__15073__15074.cljs$lang$protocol_mask$partition0$ & 4096);
if(or__3824__auto____15075)
{return or__3824__auto____15075;
} else
{return G__15073__15074.cljs$core$ISet$;
}
})())
{return true;
} else
{if((!G__15073__15074.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__15073__15074);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__15073__15074);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__15079__15080 = x;
if(G__15079__15080)
{if((function (){var or__3824__auto____15081 = (G__15079__15080.cljs$lang$protocol_mask$partition0$ & 512);
if(or__3824__auto____15081)
{return or__3824__auto____15081;
} else
{return G__15079__15080.cljs$core$IAssociative$;
}
})())
{return true;
} else
{if((!G__15079__15080.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__15079__15080);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__15079__15080);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__15085__15086 = x;
if(G__15085__15086)
{if((function (){var or__3824__auto____15087 = (G__15085__15086.cljs$lang$protocol_mask$partition0$ & 16777216);
if(or__3824__auto____15087)
{return or__3824__auto____15087;
} else
{return G__15085__15086.cljs$core$ISequential$;
}
})())
{return true;
} else
{if((!G__15085__15086.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__15085__15086);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__15085__15086);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__15091__15092 = x;
if(G__15091__15092)
{if((function (){var or__3824__auto____15093 = (G__15091__15092.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____15093)
{return or__3824__auto____15093;
} else
{return G__15091__15092.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__15091__15092.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__15091__15092);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__15091__15092);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null))
{return false;
} else
{var G__15097__15098 = x;
if(G__15097__15098)
{if((function (){var or__3824__auto____15099 = (G__15097__15098.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3824__auto____15099)
{return or__3824__auto____15099;
} else
{return G__15097__15098.cljs$core$IMap$;
}
})())
{return true;
} else
{if((!G__15097__15098.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__15097__15098);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__15097__15098);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__15103__15104 = x;
if(G__15103__15104)
{if((function (){var or__3824__auto____15105 = (G__15103__15104.cljs$lang$protocol_mask$partition0$ & 16384);
if(or__3824__auto____15105)
{return or__3824__auto____15105;
} else
{return G__15103__15104.cljs$core$IVector$;
}
})())
{return true;
} else
{if((!G__15103__15104.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__15103__15104);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__15103__15104);
}
});
cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){
var G__15109__15110 = x;
if(G__15109__15110)
{if((function (){var or__3824__auto____15111 = (G__15109__15110.cljs$lang$protocol_mask$partition1$ & 512);
if(or__3824__auto____15111)
{return or__3824__auto____15111;
} else
{return G__15109__15110.cljs$core$IChunkedSeq$;
}
})())
{return true;
} else
{if((!G__15109__15110.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__15109__15110);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__15109__15110);
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
var G__15112__delegate = function (keyvals){
return cljs.core.apply.call(null,goog.object.create,keyvals);
};
var G__15112 = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__15112__delegate.call(this, keyvals);
};
G__15112.cljs$lang$maxFixedArity = 0;
G__15112.cljs$lang$applyTo = (function (arglist__15113){
var keyvals = cljs.core.seq(arglist__15113);;
return G__15112__delegate(keyvals);
});
G__15112.cljs$lang$arity$variadic = G__15112__delegate;
return G__15112;
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
var keys__15115 = [];
goog.object.forEach(obj,(function (val,key,obj){
return keys__15115.push(key);
}));
return keys__15115;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__15119 = i;
var j__15120 = j;
var len__15121 = len;
while(true){
if((len__15121 === 0))
{return to;
} else
{(to[j__15120] = (from[i__15119]));
{
var G__15122 = (i__15119 + 1);
var G__15123 = (j__15120 + 1);
var G__15124 = (len__15121 - 1);
i__15119 = G__15122;
j__15120 = G__15123;
len__15121 = G__15124;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__15128 = (i + (len - 1));
var j__15129 = (j + (len - 1));
var len__15130 = len;
while(true){
if((len__15130 === 0))
{return to;
} else
{(to[j__15129] = (from[i__15128]));
{
var G__15131 = (i__15128 - 1);
var G__15132 = (j__15129 - 1);
var G__15133 = (len__15130 - 1);
i__15128 = G__15131;
j__15129 = G__15132;
len__15130 = G__15133;
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
{var G__15137__15138 = s;
if(G__15137__15138)
{if((function (){var or__3824__auto____15139 = (G__15137__15138.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____15139)
{return or__3824__auto____15139;
} else
{return G__15137__15138.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__15137__15138.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__15137__15138);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__15137__15138);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__15143__15144 = s;
if(G__15143__15144)
{if((function (){var or__3824__auto____15145 = (G__15143__15144.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____15145)
{return or__3824__auto____15145;
} else
{return G__15143__15144.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__15143__15144.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__15143__15144);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__15143__15144);
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
var and__3822__auto____15148 = goog.isString(x);
if(and__3822__auto____15148)
{return !((function (){var or__3824__auto____15149 = (x.charAt(0) === "\uFDD0");
if(or__3824__auto____15149)
{return or__3824__auto____15149;
} else
{return (x.charAt(0) === "\uFDD1");
}
})());
} else
{return and__3822__auto____15148;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3822__auto____15151 = goog.isString(x);
if(and__3822__auto____15151)
{return (x.charAt(0) === "\uFDD0");
} else
{return and__3822__auto____15151;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3822__auto____15153 = goog.isString(x);
if(and__3822__auto____15153)
{return (x.charAt(0) === "\uFDD1");
} else
{return and__3822__auto____15153;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber(n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction(f);
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3824__auto____15158 = cljs.core.fn_QMARK_.call(null,f);
if(or__3824__auto____15158)
{return or__3824__auto____15158;
} else
{var G__15159__15160 = f;
if(G__15159__15160)
{if((function (){var or__3824__auto____15161 = (G__15159__15160.cljs$lang$protocol_mask$partition0$ & 1);
if(or__3824__auto____15161)
{return or__3824__auto____15161;
} else
{return G__15159__15160.cljs$core$IFn$;
}
})())
{return true;
} else
{if((!G__15159__15160.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__15159__15160);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__15159__15160);
}
}
});
/**
* Returns true if n is an integer.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3822__auto____15165 = cljs.core.number_QMARK_.call(null,n);
if(and__3822__auto____15165)
{var and__3822__auto____15166 = !(isNaN(n));
if(and__3822__auto____15166)
{var and__3822__auto____15167 = !((n === Infinity));
if(and__3822__auto____15167)
{return (parseFloat(n) === parseInt(n,10));
} else
{return and__3822__auto____15167;
}
} else
{return and__3822__auto____15166;
}
} else
{return and__3822__auto____15165;
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
if((function (){var and__3822__auto____15170 = !((coll == null));
if(and__3822__auto____15170)
{var and__3822__auto____15171 = cljs.core.associative_QMARK_.call(null,coll);
if(and__3822__auto____15171)
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3822__auto____15171;
}
} else
{return and__3822__auto____15170;
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
var G__15180__delegate = function (x,y,more){
if(!(cljs.core._EQ_.call(null,x,y)))
{var s__15176 = cljs.core.PersistentHashSet.fromArray([y,x]);
var xs__15177 = more;
while(true){
var x__15178 = cljs.core.first.call(null,xs__15177);
var etc__15179 = cljs.core.next.call(null,xs__15177);
if(cljs.core.truth_(xs__15177))
{if(cljs.core.contains_QMARK_.call(null,s__15176,x__15178))
{return false;
} else
{{
var G__15181 = cljs.core.conj.call(null,s__15176,x__15178);
var G__15182 = etc__15179;
s__15176 = G__15181;
xs__15177 = G__15182;
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
var G__15180 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__15180__delegate.call(this, x, y, more);
};
G__15180.cljs$lang$maxFixedArity = 2;
G__15180.cljs$lang$applyTo = (function (arglist__15183){
var x = cljs.core.first(arglist__15183);
var y = cljs.core.first(cljs.core.next(arglist__15183));
var more = cljs.core.rest(cljs.core.next(arglist__15183));
return G__15180__delegate(x, y, more);
});
G__15180.cljs$lang$arity$variadic = G__15180__delegate;
return G__15180;
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
{if((function (){var G__15187__15188 = x;
if(G__15187__15188)
{if((function (){var or__3824__auto____15189 = (G__15187__15188.cljs$lang$protocol_mask$partition1$ & 2048);
if(or__3824__auto____15189)
{return or__3824__auto____15189;
} else
{return G__15187__15188.cljs$core$IComparable$;
}
})())
{return true;
} else
{if((!G__15187__15188.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__15187__15188);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__15187__15188);
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
var xl__15194 = cljs.core.count.call(null,xs);
var yl__15195 = cljs.core.count.call(null,ys);
if((xl__15194 < yl__15195))
{return -1;
} else
{if((xl__15194 > yl__15195))
{return 1;
} else
{if("\uFDD0'else")
{return compare_indexed.call(null,xs,ys,xl__15194,0);
} else
{return null;
}
}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){
while(true){
var d__15196 = cljs.core.compare.call(null,cljs.core.nth.call(null,xs,n),cljs.core.nth.call(null,ys,n));
if((function (){var and__3822__auto____15197 = (d__15196 === 0);
if(and__3822__auto____15197)
{return ((n + 1) < len);
} else
{return and__3822__auto____15197;
}
})())
{{
var G__15198 = xs;
var G__15199 = ys;
var G__15200 = len;
var G__15201 = (n + 1);
xs = G__15198;
ys = G__15199;
len = G__15200;
n = G__15201;
continue;
}
} else
{return d__15196;
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
var r__15203 = f.call(null,x,y);
if(cljs.core.number_QMARK_.call(null,r__15203))
{return r__15203;
} else
{if(cljs.core.truth_(r__15203))
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
{var a__15205 = cljs.core.to_array.call(null,coll);
goog.array.stableSort(a__15205,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__15205);
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
var temp__3971__auto____15211 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____15211)
{var s__15212 = temp__3971__auto____15211;
return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__15212),cljs.core.next.call(null,s__15212));
} else
{return f.call(null);
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__15213 = val;
var coll__15214 = cljs.core.seq.call(null,coll);
while(true){
if(coll__15214)
{var nval__15215 = f.call(null,val__15213,cljs.core.first.call(null,coll__15214));
if(cljs.core.reduced_QMARK_.call(null,nval__15215))
{return cljs.core.deref.call(null,nval__15215);
} else
{{
var G__15216 = nval__15215;
var G__15217 = cljs.core.next.call(null,coll__15214);
val__15213 = G__15216;
coll__15214 = G__15217;
continue;
}
}
} else
{return val__15213;
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
var a__15219 = cljs.core.to_array.call(null,coll);
goog.array.shuffle(a__15219);
return cljs.core.vec.call(null,a__15219);
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
if((function (){var G__15226__15227 = coll;
if(G__15226__15227)
{if((function (){var or__3824__auto____15228 = (G__15226__15227.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____15228)
{return or__3824__auto____15228;
} else
{return G__15226__15227.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__15226__15227.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__15226__15227);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__15226__15227);
}
})())
{return cljs.core._reduce.call(null,coll,f);
} else
{return cljs.core.seq_reduce.call(null,f,coll);
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__15229__15230 = coll;
if(G__15229__15230)
{if((function (){var or__3824__auto____15231 = (G__15229__15230.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____15231)
{return or__3824__auto____15231;
} else
{return G__15229__15230.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__15229__15230.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__15229__15230);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__15229__15230);
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
var G__15232__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__15232 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__15232__delegate.call(this, x, y, more);
};
G__15232.cljs$lang$maxFixedArity = 2;
G__15232.cljs$lang$applyTo = (function (arglist__15233){
var x = cljs.core.first(arglist__15233);
var y = cljs.core.first(cljs.core.next(arglist__15233));
var more = cljs.core.rest(cljs.core.next(arglist__15233));
return G__15232__delegate(x, y, more);
});
G__15232.cljs$lang$arity$variadic = G__15232__delegate;
return G__15232;
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
var G__15234__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__15234 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__15234__delegate.call(this, x, y, more);
};
G__15234.cljs$lang$maxFixedArity = 2;
G__15234.cljs$lang$applyTo = (function (arglist__15235){
var x = cljs.core.first(arglist__15235);
var y = cljs.core.first(cljs.core.next(arglist__15235));
var more = cljs.core.rest(cljs.core.next(arglist__15235));
return G__15234__delegate(x, y, more);
});
G__15234.cljs$lang$arity$variadic = G__15234__delegate;
return G__15234;
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
var G__15236__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__15236 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__15236__delegate.call(this, x, y, more);
};
G__15236.cljs$lang$maxFixedArity = 2;
G__15236.cljs$lang$applyTo = (function (arglist__15237){
var x = cljs.core.first(arglist__15237);
var y = cljs.core.first(cljs.core.next(arglist__15237));
var more = cljs.core.rest(cljs.core.next(arglist__15237));
return G__15236__delegate(x, y, more);
});
G__15236.cljs$lang$arity$variadic = G__15236__delegate;
return G__15236;
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
var G__15238__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__15238 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__15238__delegate.call(this, x, y, more);
};
G__15238.cljs$lang$maxFixedArity = 2;
G__15238.cljs$lang$applyTo = (function (arglist__15239){
var x = cljs.core.first(arglist__15239);
var y = cljs.core.first(cljs.core.next(arglist__15239));
var more = cljs.core.rest(cljs.core.next(arglist__15239));
return G__15238__delegate(x, y, more);
});
G__15238.cljs$lang$arity$variadic = G__15238__delegate;
return G__15238;
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
var G__15240__delegate = function (x,y,more){
while(true){
if((x < y))
{if(cljs.core.next.call(null,more))
{{
var G__15241 = y;
var G__15242 = cljs.core.first.call(null,more);
var G__15243 = cljs.core.next.call(null,more);
x = G__15241;
y = G__15242;
more = G__15243;
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
var G__15240 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__15240__delegate.call(this, x, y, more);
};
G__15240.cljs$lang$maxFixedArity = 2;
G__15240.cljs$lang$applyTo = (function (arglist__15244){
var x = cljs.core.first(arglist__15244);
var y = cljs.core.first(cljs.core.next(arglist__15244));
var more = cljs.core.rest(cljs.core.next(arglist__15244));
return G__15240__delegate(x, y, more);
});
G__15240.cljs$lang$arity$variadic = G__15240__delegate;
return G__15240;
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
var G__15245__delegate = function (x,y,more){
while(true){
if((x <= y))
{if(cljs.core.next.call(null,more))
{{
var G__15246 = y;
var G__15247 = cljs.core.first.call(null,more);
var G__15248 = cljs.core.next.call(null,more);
x = G__15246;
y = G__15247;
more = G__15248;
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
var G__15245 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__15245__delegate.call(this, x, y, more);
};
G__15245.cljs$lang$maxFixedArity = 2;
G__15245.cljs$lang$applyTo = (function (arglist__15249){
var x = cljs.core.first(arglist__15249);
var y = cljs.core.first(cljs.core.next(arglist__15249));
var more = cljs.core.rest(cljs.core.next(arglist__15249));
return G__15245__delegate(x, y, more);
});
G__15245.cljs$lang$arity$variadic = G__15245__delegate;
return G__15245;
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
var G__15250__delegate = function (x,y,more){
while(true){
if((x > y))
{if(cljs.core.next.call(null,more))
{{
var G__15251 = y;
var G__15252 = cljs.core.first.call(null,more);
var G__15253 = cljs.core.next.call(null,more);
x = G__15251;
y = G__15252;
more = G__15253;
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
var G__15250 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__15250__delegate.call(this, x, y, more);
};
G__15250.cljs$lang$maxFixedArity = 2;
G__15250.cljs$lang$applyTo = (function (arglist__15254){
var x = cljs.core.first(arglist__15254);
var y = cljs.core.first(cljs.core.next(arglist__15254));
var more = cljs.core.rest(cljs.core.next(arglist__15254));
return G__15250__delegate(x, y, more);
});
G__15250.cljs$lang$arity$variadic = G__15250__delegate;
return G__15250;
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
var G__15255__delegate = function (x,y,more){
while(true){
if((x >= y))
{if(cljs.core.next.call(null,more))
{{
var G__15256 = y;
var G__15257 = cljs.core.first.call(null,more);
var G__15258 = cljs.core.next.call(null,more);
x = G__15256;
y = G__15257;
more = G__15258;
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
var G__15255 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__15255__delegate.call(this, x, y, more);
};
G__15255.cljs$lang$maxFixedArity = 2;
G__15255.cljs$lang$applyTo = (function (arglist__15259){
var x = cljs.core.first(arglist__15259);
var y = cljs.core.first(cljs.core.next(arglist__15259));
var more = cljs.core.rest(cljs.core.next(arglist__15259));
return G__15255__delegate(x, y, more);
});
G__15255.cljs$lang$arity$variadic = G__15255__delegate;
return G__15255;
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
var G__15260__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__15260 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__15260__delegate.call(this, x, y, more);
};
G__15260.cljs$lang$maxFixedArity = 2;
G__15260.cljs$lang$applyTo = (function (arglist__15261){
var x = cljs.core.first(arglist__15261);
var y = cljs.core.first(cljs.core.next(arglist__15261));
var more = cljs.core.rest(cljs.core.next(arglist__15261));
return G__15260__delegate(x, y, more);
});
G__15260.cljs$lang$arity$variadic = G__15260__delegate;
return G__15260;
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
var G__15262__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__15262 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__15262__delegate.call(this, x, y, more);
};
G__15262.cljs$lang$maxFixedArity = 2;
G__15262.cljs$lang$applyTo = (function (arglist__15263){
var x = cljs.core.first(arglist__15263);
var y = cljs.core.first(cljs.core.next(arglist__15263));
var more = cljs.core.rest(cljs.core.next(arglist__15263));
return G__15262__delegate(x, y, more);
});
G__15262.cljs$lang$arity$variadic = G__15262__delegate;
return G__15262;
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
var rem__15265 = (n % d);
return cljs.core.fix.call(null,((n - rem__15265) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__15267 = cljs.core.quot.call(null,n,d);
return (n - (d * q__15267));
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
var v__15270 = (v - ((v >> 1) & 1431655765));
var v__15271 = ((v__15270 & 858993459) + ((v__15270 >> 2) & 858993459));
return ((((v__15271 + (v__15271 >> 4)) & 252645135) * 16843009) >> 24);
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
var G__15272__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__15273 = y;
var G__15274 = cljs.core.first.call(null,more);
var G__15275 = cljs.core.next.call(null,more);
x = G__15273;
y = G__15274;
more = G__15275;
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
var G__15272 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__15272__delegate.call(this, x, y, more);
};
G__15272.cljs$lang$maxFixedArity = 2;
G__15272.cljs$lang$applyTo = (function (arglist__15276){
var x = cljs.core.first(arglist__15276);
var y = cljs.core.first(cljs.core.next(arglist__15276));
var more = cljs.core.rest(cljs.core.next(arglist__15276));
return G__15272__delegate(x, y, more);
});
G__15272.cljs$lang$arity$variadic = G__15272__delegate;
return G__15272;
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
var n__15280 = n;
var xs__15281 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____15282 = xs__15281;
if(and__3822__auto____15282)
{return (n__15280 > 0);
} else
{return and__3822__auto____15282;
}
})()))
{{
var G__15283 = (n__15280 - 1);
var G__15284 = cljs.core.next.call(null,xs__15281);
n__15280 = G__15283;
xs__15281 = G__15284;
continue;
}
} else
{return xs__15281;
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
var G__15285__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__15286 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__15287 = cljs.core.next.call(null,more);
sb = G__15286;
more = G__15287;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__15285 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15285__delegate.call(this, x, ys);
};
G__15285.cljs$lang$maxFixedArity = 1;
G__15285.cljs$lang$applyTo = (function (arglist__15288){
var x = cljs.core.first(arglist__15288);
var ys = cljs.core.rest(arglist__15288);
return G__15285__delegate(x, ys);
});
G__15285.cljs$lang$arity$variadic = G__15285__delegate;
return G__15285;
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
var G__15289__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__15290 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__15291 = cljs.core.next.call(null,more);
sb = G__15290;
more = G__15291;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__15289 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15289__delegate.call(this, x, ys);
};
G__15289.cljs$lang$maxFixedArity = 1;
G__15289.cljs$lang$applyTo = (function (arglist__15292){
var x = cljs.core.first(arglist__15292);
var ys = cljs.core.rest(arglist__15292);
return G__15289__delegate(x, ys);
});
G__15289.cljs$lang$arity$variadic = G__15289__delegate;
return G__15289;
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
var args__15296 = cljs.core.map.call(null,(function (x){
if((function (){var or__3824__auto____15295 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____15295)
{return or__3824__auto____15295;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{return [cljs.core.str(x)].join('');
} else
{return x;
}
}),args);
return cljs.core.apply.call(null,goog.string.format,fmt,args__15296);
};
var format = function (fmt,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return format__delegate.call(this, fmt, args);
};
format.cljs$lang$maxFixedArity = 1;
format.cljs$lang$applyTo = (function (arglist__15297){
var fmt = cljs.core.first(arglist__15297);
var args = cljs.core.rest(arglist__15297);
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
return cljs.core.boolean$.call(null,((cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__15300 = cljs.core.seq.call(null,x);
var ys__15301 = cljs.core.seq.call(null,y);
while(true){
if((xs__15300 == null))
{return (ys__15301 == null);
} else
{if((ys__15301 == null))
{return false;
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__15300),cljs.core.first.call(null,ys__15301)))
{{
var G__15302 = cljs.core.next.call(null,xs__15300);
var G__15303 = cljs.core.next.call(null,ys__15301);
xs__15300 = G__15302;
ys__15301 = G__15303;
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
return cljs.core.reduce.call(null,(function (p1__15304_SHARP_,p2__15305_SHARP_){
return cljs.core.hash_combine.call(null,p1__15304_SHARP_,cljs.core.hash.call(null,p2__15305_SHARP_,false));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll),false),cljs.core.next.call(null,coll));
});
cljs.core.hash_imap = (function hash_imap(m){
var h__15309 = 0;
var s__15310 = cljs.core.seq.call(null,m);
while(true){
if(s__15310)
{var e__15311 = cljs.core.first.call(null,s__15310);
{
var G__15312 = ((h__15309 + (cljs.core.hash.call(null,cljs.core.key.call(null,e__15311)) ^ cljs.core.hash.call(null,cljs.core.val.call(null,e__15311)))) % 4503599627370496);
var G__15313 = cljs.core.next.call(null,s__15310);
h__15309 = G__15312;
s__15310 = G__15313;
continue;
}
} else
{return h__15309;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h__15317 = 0;
var s__15318 = cljs.core.seq.call(null,s);
while(true){
if(s__15318)
{var e__15319 = cljs.core.first.call(null,s__15318);
{
var G__15320 = ((h__15317 + cljs.core.hash.call(null,e__15319)) % 4503599627370496);
var G__15321 = cljs.core.next.call(null,s__15318);
h__15317 = G__15320;
s__15318 = G__15321;
continue;
}
} else
{return h__15317;
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
var G__15329__15330 = cljs.core.seq.call(null,fn_map);
while(true){
if(G__15329__15330)
{var vec__15331__15332 = cljs.core.first.call(null,G__15329__15330);
var key_name__15333 = cljs.core.nth.call(null,vec__15331__15332,0,null);
var f__15334 = cljs.core.nth.call(null,vec__15331__15332,1,null);
var str_name__15335 = cljs.core.name.call(null,key_name__15333);
(obj[str_name__15335] = f__15334);
{
var G__15336 = cljs.core.next.call(null,G__15329__15330);
G__15329__15330 = G__15336;
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
cljs.core.List.cljs$lang$ctorPrSeq = (function (this__2459__auto__){
return cljs.core.list.call(null,"cljs.core/List");
});
cljs.core.List.cljs$lang$ctorPrWriter = (function (this__2459__auto__,writer__2460__auto__){
return cljs.core._write.call(null,writer__2460__auto__,"cljs.core/List");
});
cljs.core.List.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__15337 = this;
var h__2340__auto____15338 = this__15337.__hash;
if(!((h__2340__auto____15338 == null)))
{return h__2340__auto____15338;
} else
{var h__2340__auto____15339 = cljs.core.hash_coll.call(null,coll);
this__15337.__hash = h__2340__auto____15339;
return h__2340__auto____15339;
}
});
cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__15340 = this;
if((this__15340.count === 1))
{return null;
} else
{return this__15340.rest;
}
});
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__15341 = this;
return (new cljs.core.List(this__15341.meta,o,coll,(this__15341.count + 1),null));
});
cljs.core.List.prototype.toString = (function (){
var this__15342 = this;
var this__15343 = this;
return cljs.core.pr_str.call(null,this__15343);
});
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__15344 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__15345 = this;
return this__15345.count;
});
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__15346 = this;
return this__15346.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__15347 = this;
return coll.cljs$core$ISeq$_rest$arity$1(coll);
});
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__15348 = this;
return this__15348.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__15349 = this;
if((this__15349.count === 1))
{return cljs.core.List.EMPTY;
} else
{return this__15349.rest;
}
});
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__15350 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__15351 = this;
return (new cljs.core.List(meta,this__15351.first,this__15351.rest,this__15351.count,this__15351.__hash));
});
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__15352 = this;
return this__15352.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__15353 = this;
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
cljs.core.EmptyList.cljs$lang$ctorPrSeq = (function (this__2459__auto__){
return cljs.core.list.call(null,"cljs.core/EmptyList");
});
cljs.core.EmptyList.cljs$lang$ctorPrWriter = (function (this__2459__auto__,writer__2460__auto__){
return cljs.core._write.call(null,writer__2460__auto__,"cljs.core/EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__15354 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__15355 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__15356 = this;
return (new cljs.core.List(this__15356.meta,o,null,1,null));
});
cljs.core.EmptyList.prototype.toString = (function (){
var this__15357 = this;
var this__15358 = this;
return cljs.core.pr_str.call(null,this__15358);
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__15359 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__15360 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__15361 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__15362 = this;
throw (new Error("Can't pop empty list"));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__15363 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__15364 = this;
return cljs.core.List.EMPTY;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__15365 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__15366 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__15367 = this;
return this__15367.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__15368 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__15372__15373 = coll;
if(G__15372__15373)
{if((function (){var or__3824__auto____15374 = (G__15372__15373.cljs$lang$protocol_mask$partition0$ & 134217728);
if(or__3824__auto____15374)
{return or__3824__auto____15374;
} else
{return G__15372__15373.cljs$core$IReversible$;
}
})())
{return true;
} else
{if((!G__15372__15373.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__15372__15373);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__15372__15373);
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
var G__15375__delegate = function (x,y,z,items){
return cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items)),z),y),x);
};
var G__15375 = function (x,y,z,var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__15375__delegate.call(this, x, y, z, items);
};
G__15375.cljs$lang$maxFixedArity = 3;
G__15375.cljs$lang$applyTo = (function (arglist__15376){
var x = cljs.core.first(arglist__15376);
var y = cljs.core.first(cljs.core.next(arglist__15376));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__15376)));
var items = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__15376)));
return G__15375__delegate(x, y, z, items);
});
G__15375.cljs$lang$arity$variadic = G__15375__delegate;
return G__15375;
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
cljs.core.Cons.cljs$lang$ctorPrSeq = (function (this__2459__auto__){
return cljs.core.list.call(null,"cljs.core/Cons");
});
cljs.core.Cons.cljs$lang$ctorPrWriter = (function (this__2459__auto__,writer__2460__auto__){
return cljs.core._write.call(null,writer__2460__auto__,"cljs.core/Cons");
});
cljs.core.Cons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__15377 = this;
var h__2340__auto____15378 = this__15377.__hash;
if(!((h__2340__auto____15378 == null)))
{return h__2340__auto____15378;
} else
{var h__2340__auto____15379 = cljs.core.hash_coll.call(null,coll);
this__15377.__hash = h__2340__auto____15379;
return h__2340__auto____15379;
}
});
cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__15380 = this;
if((this__15380.rest == null))
{return null;
} else
{return cljs.core._seq.call(null,this__15380.rest);
}
});
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__15381 = this;
return (new cljs.core.Cons(null,o,coll,this__15381.__hash));
});
cljs.core.Cons.prototype.toString = (function (){
var this__15382 = this;
var this__15383 = this;
return cljs.core.pr_str.call(null,this__15383);
});
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__15384 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__15385 = this;
return this__15385.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__15386 = this;
if((this__15386.rest == null))
{return cljs.core.List.EMPTY;
} else
{return this__15386.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__15387 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__15388 = this;
return (new cljs.core.Cons(meta,this__15388.first,this__15388.rest,this__15388.__hash));
});
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__15389 = this;
return this__15389.meta;
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__15390 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__15390.meta);
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3824__auto____15395 = (coll == null);
if(or__3824__auto____15395)
{return or__3824__auto____15395;
} else
{var G__15396__15397 = coll;
if(G__15396__15397)
{if((function (){var or__3824__auto____15398 = (G__15396__15397.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____15398)
{return or__3824__auto____15398;
} else
{return G__15396__15397.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__15396__15397.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__15396__15397);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__15396__15397);
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq.call(null,coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__15402__15403 = x;
if(G__15402__15403)
{if((function (){var or__3824__auto____15404 = (G__15402__15403.cljs$lang$protocol_mask$partition0$ & 33554432);
if(or__3824__auto____15404)
{return or__3824__auto____15404;
} else
{return G__15402__15403.cljs$core$IList$;
}
})())
{return true;
} else
{if((!G__15402__15403.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__15402__15403);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__15402__15403);
}
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__15405 = null;
var G__15405__2 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__15405__3 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__15405 = function(string,f,start){
switch(arguments.length){
case 2:
return G__15405__2.call(this,string,f);
case 3:
return G__15405__3.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__15405;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__15406 = null;
var G__15406__2 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__15406__3 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__15406 = function(string,k,not_found){
switch(arguments.length){
case 2:
return G__15406__2.call(this,string,k);
case 3:
return G__15406__3.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__15406;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__15407 = null;
var G__15407__2 = (function (string,n){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return null;
}
});
var G__15407__3 = (function (string,n,not_found){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return not_found;
}
});
G__15407 = function(string,n,not_found){
switch(arguments.length){
case 2:
return G__15407__2.call(this,string,n);
case 3:
return G__15407__3.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__15407;
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
cljs.core.Keyword.cljs$lang$ctorPrSeq = (function (this__2459__auto__){
return cljs.core.list.call(null,"cljs.core/Keyword");
});
cljs.core.Keyword.cljs$lang$ctorPrWriter = (function (this__2459__auto__,writer__2460__auto__){
return cljs.core._write.call(null,writer__2460__auto__,"cljs.core/Keyword");
});
cljs.core.Keyword.prototype.call = (function() {
var G__15419 = null;
var G__15419__2 = (function (this_sym15410,coll){
var this__15412 = this;
var this_sym15410__15413 = this;
var ___15414 = this_sym15410__15413;
if((coll == null))
{return null;
} else
{var strobj__15415 = coll.strobj;
if((strobj__15415 == null))
{return cljs.core._lookup.call(null,coll,this__15412.k,null);
} else
{return (strobj__15415[this__15412.k]);
}
}
});
var G__15419__3 = (function (this_sym15411,coll,not_found){
var this__15412 = this;
var this_sym15411__15416 = this;
var ___15417 = this_sym15411__15416;
if((coll == null))
{return not_found;
} else
{return cljs.core._lookup.call(null,coll,this__15412.k,not_found);
}
});
G__15419 = function(this_sym15411,coll,not_found){
switch(arguments.length){
case 2:
return G__15419__2.call(this,this_sym15411,coll);
case 3:
return G__15419__3.call(this,this_sym15411,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__15419;
})()
;
cljs.core.Keyword.prototype.apply = (function (this_sym15408,args15409){
var this__15418 = this;
return this_sym15408.call.apply(this_sym15408,[this_sym15408].concat(args15409.slice()));
});
cljs.core.Keyword;
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__15428 = null;
var G__15428__2 = (function (this_sym15422,coll){
var this_sym15422__15424 = this;
var this__15425 = this_sym15422__15424;
return cljs.core._lookup.call(null,coll,this__15425.toString(),null);
});
var G__15428__3 = (function (this_sym15423,coll,not_found){
var this_sym15423__15426 = this;
var this__15427 = this_sym15423__15426;
return cljs.core._lookup.call(null,coll,this__15427.toString(),not_found);
});
G__15428 = function(this_sym15423,coll,not_found){
switch(arguments.length){
case 2:
return G__15428__2.call(this,this_sym15423,coll);
case 3:
return G__15428__3.call(this,this_sym15423,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__15428;
})()
;
String.prototype.apply = (function (this_sym15420,args15421){
return this_sym15420.call.apply(this_sym15420,[this_sym15420].concat(args15421.slice()));
});
String.prototype.apply = (function (s,args){
if((cljs.core.count.call(null,args) < 2))
{return cljs.core._lookup.call(null,(args[0]),s,null);
} else
{return cljs.core._lookup.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__15430 = lazy_seq.x;
if(lazy_seq.realized)
{return x__15430;
} else
{lazy_seq.x = x__15430.call(null);
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
cljs.core.LazySeq.cljs$lang$ctorPrSeq = (function (this__2459__auto__){
return cljs.core.list.call(null,"cljs.core/LazySeq");
});
cljs.core.LazySeq.cljs$lang$ctorPrWriter = (function (this__2459__auto__,writer__2460__auto__){
return cljs.core._write.call(null,writer__2460__auto__,"cljs.core/LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__15431 = this;
var h__2340__auto____15432 = this__15431.__hash;
if(!((h__2340__auto____15432 == null)))
{return h__2340__auto____15432;
} else
{var h__2340__auto____15433 = cljs.core.hash_coll.call(null,coll);
this__15431.__hash = h__2340__auto____15433;
return h__2340__auto____15433;
}
});
cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__15434 = this;
return cljs.core._seq.call(null,coll.cljs$core$ISeq$_rest$arity$1(coll));
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__15435 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.toString = (function (){
var this__15436 = this;
var this__15437 = this;
return cljs.core.pr_str.call(null,this__15437);
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__15438 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__15439 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__15440 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__15441 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__15442 = this;
return (new cljs.core.LazySeq(meta,this__15442.realized,this__15442.x,this__15442.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__15443 = this;
return this__15443.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__15444 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__15444.meta);
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
cljs.core.ChunkBuffer.cljs$lang$ctorPrSeq = (function (this__2459__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkBuffer");
});
cljs.core.ChunkBuffer.cljs$lang$ctorPrWriter = (function (this__2459__auto__,writer__2460__auto__){
return cljs.core._write.call(null,writer__2460__auto__,"cljs.core/ChunkBuffer");
});
cljs.core.ChunkBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__15445 = this;
return this__15445.end;
});
cljs.core.ChunkBuffer.prototype.add = (function (o){
var this__15446 = this;
var ___15447 = this;
(this__15446.buf[this__15446.end] = o);
return this__15446.end = (this__15446.end + 1);
});
cljs.core.ChunkBuffer.prototype.chunk = (function (o){
var this__15448 = this;
var ___15449 = this;
var ret__15450 = (new cljs.core.ArrayChunk(this__15448.buf,0,this__15448.end));
this__15448.buf = null;
return ret__15450;
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
cljs.core.ArrayChunk.cljs$lang$ctorPrSeq = (function (this__2459__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayChunk");
});
cljs.core.ArrayChunk.cljs$lang$ctorPrWriter = (function (this__2459__auto__,writer__2460__auto__){
return cljs.core._write.call(null,writer__2460__auto__,"cljs.core/ArrayChunk");
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__15451 = this;
return cljs.core.array_reduce.call(null,this__15451.arr,f,(this__15451.arr[this__15451.off]),(this__15451.off + 1));
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__15452 = this;
return cljs.core.array_reduce.call(null,this__15452.arr,f,start,this__15452.off);
});
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){
var this__15453 = this;
if((this__15453.off === this__15453.end))
{throw (new Error("-drop-first of empty chunk"));
} else
{return (new cljs.core.ArrayChunk(this__15453.arr,(this__15453.off + 1),this__15453.end));
}
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){
var this__15454 = this;
return (this__15454.arr[(this__15454.off + i)]);
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){
var this__15455 = this;
if((function (){var and__3822__auto____15456 = (i >= 0);
if(and__3822__auto____15456)
{return (i < (this__15455.end - this__15455.off));
} else
{return and__3822__auto____15456;
}
})())
{return (this__15455.arr[(this__15455.off + i)]);
} else
{return not_found;
}
});
cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__15457 = this;
return (this__15457.end - this__15457.off);
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
cljs.core.ChunkedCons.cljs$lang$ctorPrSeq = (function (this__2459__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedCons");
});
cljs.core.ChunkedCons.cljs$lang$ctorPrWriter = (function (this__2459__auto__,writer__2460__auto__){
return cljs.core._write.call(null,writer__2460__auto__,"cljs.core/ChunkedCons");
});
cljs.core.ChunkedCons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__15458 = this;
var h__2340__auto____15459 = this__15458.__hash;
if(!((h__2340__auto____15459 == null)))
{return h__2340__auto____15459;
} else
{var h__2340__auto____15460 = cljs.core.hash_coll.call(null,coll);
this__15458.__hash = h__2340__auto____15460;
return h__2340__auto____15460;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){
var this__15461 = this;
return cljs.core.cons.call(null,o,this$);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__15462 = this;
return coll;
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__15463 = this;
return cljs.core._nth.call(null,this__15463.chunk,0);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__15464 = this;
if((cljs.core._count.call(null,this__15464.chunk) > 1))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first.call(null,this__15464.chunk),this__15464.more,this__15464.meta,null));
} else
{if((this__15464.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__15464.more;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__15465 = this;
if((this__15465.more == null))
{return null;
} else
{return this__15465.more;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__15466 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__15467 = this;
return (new cljs.core.ChunkedCons(this__15467.chunk,this__15467.more,m,this__15467.__hash));
});
cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__15468 = this;
return this__15468.meta;
});
cljs.core.ChunkedCons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__15469 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__15469.meta);
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__15470 = this;
return this__15470.chunk;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__15471 = this;
if((this__15471.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__15471.more;
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
if((function (){var G__15475__15476 = s;
if(G__15475__15476)
{if((function (){var or__3824__auto____15477 = (G__15475__15476.cljs$lang$protocol_mask$partition1$ & 1024);
if(or__3824__auto____15477)
{return or__3824__auto____15477;
} else
{return G__15475__15476.cljs$core$IChunkedNext$;
}
})())
{return true;
} else
{if((!G__15475__15476.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__15475__15476);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__15475__15476);
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
var ary__15480 = [];
var s__15481 = s;
while(true){
if(cljs.core.seq.call(null,s__15481))
{ary__15480.push(cljs.core.first.call(null,s__15481));
{
var G__15482 = cljs.core.next.call(null,s__15481);
s__15481 = G__15482;
continue;
}
} else
{return ary__15480;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret__15486 = cljs.core.make_array.call(null,cljs.core.count.call(null,coll));
var i__15487 = 0;
var xs__15488 = cljs.core.seq.call(null,coll);
while(true){
if(xs__15488)
{(ret__15486[i__15487] = cljs.core.to_array.call(null,cljs.core.first.call(null,xs__15488)));
{
var G__15489 = (i__15487 + 1);
var G__15490 = cljs.core.next.call(null,xs__15488);
i__15487 = G__15489;
xs__15488 = G__15490;
continue;
}
} else
{}
break;
}
return ret__15486;
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
var a__15498 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__15499 = cljs.core.seq.call(null,init_val_or_seq);
var i__15500 = 0;
var s__15501 = s__15499;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____15502 = s__15501;
if(and__3822__auto____15502)
{return (i__15500 < size);
} else
{return and__3822__auto____15502;
}
})()))
{(a__15498[i__15500] = cljs.core.first.call(null,s__15501));
{
var G__15505 = (i__15500 + 1);
var G__15506 = cljs.core.next.call(null,s__15501);
i__15500 = G__15505;
s__15501 = G__15506;
continue;
}
} else
{return a__15498;
}
break;
}
} else
{var n__2686__auto____15503 = size;
var i__15504 = 0;
while(true){
if((i__15504 < n__2686__auto____15503))
{(a__15498[i__15504] = init_val_or_seq);
{
var G__15507 = (i__15504 + 1);
i__15504 = G__15507;
continue;
}
} else
{}
break;
}
return a__15498;
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
var a__15515 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__15516 = cljs.core.seq.call(null,init_val_or_seq);
var i__15517 = 0;
var s__15518 = s__15516;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____15519 = s__15518;
if(and__3822__auto____15519)
{return (i__15517 < size);
} else
{return and__3822__auto____15519;
}
})()))
{(a__15515[i__15517] = cljs.core.first.call(null,s__15518));
{
var G__15522 = (i__15517 + 1);
var G__15523 = cljs.core.next.call(null,s__15518);
i__15517 = G__15522;
s__15518 = G__15523;
continue;
}
} else
{return a__15515;
}
break;
}
} else
{var n__2686__auto____15520 = size;
var i__15521 = 0;
while(true){
if((i__15521 < n__2686__auto____15520))
{(a__15515[i__15521] = init_val_or_seq);
{
var G__15524 = (i__15521 + 1);
i__15521 = G__15524;
continue;
}
} else
{}
break;
}
return a__15515;
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
var a__15532 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__15533 = cljs.core.seq.call(null,init_val_or_seq);
var i__15534 = 0;
var s__15535 = s__15533;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____15536 = s__15535;
if(and__3822__auto____15536)
{return (i__15534 < size);
} else
{return and__3822__auto____15536;
}
})()))
{(a__15532[i__15534] = cljs.core.first.call(null,s__15535));
{
var G__15539 = (i__15534 + 1);
var G__15540 = cljs.core.next.call(null,s__15535);
i__15534 = G__15539;
s__15535 = G__15540;
continue;
}
} else
{return a__15532;
}
break;
}
} else
{var n__2686__auto____15537 = size;
var i__15538 = 0;
while(true){
if((i__15538 < n__2686__auto____15537))
{(a__15532[i__15538] = init_val_or_seq);
{
var G__15541 = (i__15538 + 1);
i__15538 = G__15541;
continue;
}
} else
{}
break;
}
return a__15532;
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
{var s__15546 = s;
var i__15547 = n;
var sum__15548 = 0;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____15549 = (i__15547 > 0);
if(and__3822__auto____15549)
{return cljs.core.seq.call(null,s__15546);
} else
{return and__3822__auto____15549;
}
})()))
{{
var G__15550 = cljs.core.next.call(null,s__15546);
var G__15551 = (i__15547 - 1);
var G__15552 = (sum__15548 + 1);
s__15546 = G__15550;
i__15547 = G__15551;
sum__15548 = G__15552;
continue;
}
} else
{return sum__15548;
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
var s__15557 = cljs.core.seq.call(null,x);
if(s__15557)
{if(cljs.core.chunked_seq_QMARK_.call(null,s__15557))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,s__15557),concat.call(null,cljs.core.chunk_rest.call(null,s__15557),y));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__15557),concat.call(null,cljs.core.rest.call(null,s__15557),y));
}
} else
{return y;
}
}),null));
});
var concat__3 = (function() { 
var G__15561__delegate = function (x,y,zs){
var cat__15560 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__15559 = cljs.core.seq.call(null,xys);
if(xys__15559)
{if(cljs.core.chunked_seq_QMARK_.call(null,xys__15559))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,xys__15559),cat.call(null,cljs.core.chunk_rest.call(null,xys__15559),zs));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__15559),cat.call(null,cljs.core.rest.call(null,xys__15559),zs));
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
return cat__15560.call(null,concat.call(null,x,y),zs);
};
var G__15561 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__15561__delegate.call(this, x, y, zs);
};
G__15561.cljs$lang$maxFixedArity = 2;
G__15561.cljs$lang$applyTo = (function (arglist__15562){
var x = cljs.core.first(arglist__15562);
var y = cljs.core.first(cljs.core.next(arglist__15562));
var zs = cljs.core.rest(cljs.core.next(arglist__15562));
return G__15561__delegate(x, y, zs);
});
G__15561.cljs$lang$arity$variadic = G__15561__delegate;
return G__15561;
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
var G__15563__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__15563 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__15563__delegate.call(this, a, b, c, d, more);
};
G__15563.cljs$lang$maxFixedArity = 4;
G__15563.cljs$lang$applyTo = (function (arglist__15564){
var a = cljs.core.first(arglist__15564);
var b = cljs.core.first(cljs.core.next(arglist__15564));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__15564)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__15564))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__15564))));
return G__15563__delegate(a, b, c, d, more);
});
G__15563.cljs$lang$arity$variadic = G__15563__delegate;
return G__15563;
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
var args__15606 = cljs.core.seq.call(null,args);
if((argc === 0))
{return f.call(null);
} else
{var a__15607 = cljs.core._first.call(null,args__15606);
var args__15608 = cljs.core._rest.call(null,args__15606);
if((argc === 1))
{if(f.cljs$lang$arity$1)
{return f.cljs$lang$arity$1(a__15607);
} else
{return f.call(null,a__15607);
}
} else
{var b__15609 = cljs.core._first.call(null,args__15608);
var args__15610 = cljs.core._rest.call(null,args__15608);
if((argc === 2))
{if(f.cljs$lang$arity$2)
{return f.cljs$lang$arity$2(a__15607,b__15609);
} else
{return f.call(null,a__15607,b__15609);
}
} else
{var c__15611 = cljs.core._first.call(null,args__15610);
var args__15612 = cljs.core._rest.call(null,args__15610);
if((argc === 3))
{if(f.cljs$lang$arity$3)
{return f.cljs$lang$arity$3(a__15607,b__15609,c__15611);
} else
{return f.call(null,a__15607,b__15609,c__15611);
}
} else
{var d__15613 = cljs.core._first.call(null,args__15612);
var args__15614 = cljs.core._rest.call(null,args__15612);
if((argc === 4))
{if(f.cljs$lang$arity$4)
{return f.cljs$lang$arity$4(a__15607,b__15609,c__15611,d__15613);
} else
{return f.call(null,a__15607,b__15609,c__15611,d__15613);
}
} else
{var e__15615 = cljs.core._first.call(null,args__15614);
var args__15616 = cljs.core._rest.call(null,args__15614);
if((argc === 5))
{if(f.cljs$lang$arity$5)
{return f.cljs$lang$arity$5(a__15607,b__15609,c__15611,d__15613,e__15615);
} else
{return f.call(null,a__15607,b__15609,c__15611,d__15613,e__15615);
}
} else
{var f__15617 = cljs.core._first.call(null,args__15616);
var args__15618 = cljs.core._rest.call(null,args__15616);
if((argc === 6))
{if(f__15617.cljs$lang$arity$6)
{return f__15617.cljs$lang$arity$6(a__15607,b__15609,c__15611,d__15613,e__15615,f__15617);
} else
{return f__15617.call(null,a__15607,b__15609,c__15611,d__15613,e__15615,f__15617);
}
} else
{var g__15619 = cljs.core._first.call(null,args__15618);
var args__15620 = cljs.core._rest.call(null,args__15618);
if((argc === 7))
{if(f__15617.cljs$lang$arity$7)
{return f__15617.cljs$lang$arity$7(a__15607,b__15609,c__15611,d__15613,e__15615,f__15617,g__15619);
} else
{return f__15617.call(null,a__15607,b__15609,c__15611,d__15613,e__15615,f__15617,g__15619);
}
} else
{var h__15621 = cljs.core._first.call(null,args__15620);
var args__15622 = cljs.core._rest.call(null,args__15620);
if((argc === 8))
{if(f__15617.cljs$lang$arity$8)
{return f__15617.cljs$lang$arity$8(a__15607,b__15609,c__15611,d__15613,e__15615,f__15617,g__15619,h__15621);
} else
{return f__15617.call(null,a__15607,b__15609,c__15611,d__15613,e__15615,f__15617,g__15619,h__15621);
}
} else
{var i__15623 = cljs.core._first.call(null,args__15622);
var args__15624 = cljs.core._rest.call(null,args__15622);
if((argc === 9))
{if(f__15617.cljs$lang$arity$9)
{return f__15617.cljs$lang$arity$9(a__15607,b__15609,c__15611,d__15613,e__15615,f__15617,g__15619,h__15621,i__15623);
} else
{return f__15617.call(null,a__15607,b__15609,c__15611,d__15613,e__15615,f__15617,g__15619,h__15621,i__15623);
}
} else
{var j__15625 = cljs.core._first.call(null,args__15624);
var args__15626 = cljs.core._rest.call(null,args__15624);
if((argc === 10))
{if(f__15617.cljs$lang$arity$10)
{return f__15617.cljs$lang$arity$10(a__15607,b__15609,c__15611,d__15613,e__15615,f__15617,g__15619,h__15621,i__15623,j__15625);
} else
{return f__15617.call(null,a__15607,b__15609,c__15611,d__15613,e__15615,f__15617,g__15619,h__15621,i__15623,j__15625);
}
} else
{var k__15627 = cljs.core._first.call(null,args__15626);
var args__15628 = cljs.core._rest.call(null,args__15626);
if((argc === 11))
{if(f__15617.cljs$lang$arity$11)
{return f__15617.cljs$lang$arity$11(a__15607,b__15609,c__15611,d__15613,e__15615,f__15617,g__15619,h__15621,i__15623,j__15625,k__15627);
} else
{return f__15617.call(null,a__15607,b__15609,c__15611,d__15613,e__15615,f__15617,g__15619,h__15621,i__15623,j__15625,k__15627);
}
} else
{var l__15629 = cljs.core._first.call(null,args__15628);
var args__15630 = cljs.core._rest.call(null,args__15628);
if((argc === 12))
{if(f__15617.cljs$lang$arity$12)
{return f__15617.cljs$lang$arity$12(a__15607,b__15609,c__15611,d__15613,e__15615,f__15617,g__15619,h__15621,i__15623,j__15625,k__15627,l__15629);
} else
{return f__15617.call(null,a__15607,b__15609,c__15611,d__15613,e__15615,f__15617,g__15619,h__15621,i__15623,j__15625,k__15627,l__15629);
}
} else
{var m__15631 = cljs.core._first.call(null,args__15630);
var args__15632 = cljs.core._rest.call(null,args__15630);
if((argc === 13))
{if(f__15617.cljs$lang$arity$13)
{return f__15617.cljs$lang$arity$13(a__15607,b__15609,c__15611,d__15613,e__15615,f__15617,g__15619,h__15621,i__15623,j__15625,k__15627,l__15629,m__15631);
} else
{return f__15617.call(null,a__15607,b__15609,c__15611,d__15613,e__15615,f__15617,g__15619,h__15621,i__15623,j__15625,k__15627,l__15629,m__15631);
}
} else
{var n__15633 = cljs.core._first.call(null,args__15632);
var args__15634 = cljs.core._rest.call(null,args__15632);
if((argc === 14))
{if(f__15617.cljs$lang$arity$14)
{return f__15617.cljs$lang$arity$14(a__15607,b__15609,c__15611,d__15613,e__15615,f__15617,g__15619,h__15621,i__15623,j__15625,k__15627,l__15629,m__15631,n__15633);
} else
{return f__15617.call(null,a__15607,b__15609,c__15611,d__15613,e__15615,f__15617,g__15619,h__15621,i__15623,j__15625,k__15627,l__15629,m__15631,n__15633);
}
} else
{var o__15635 = cljs.core._first.call(null,args__15634);
var args__15636 = cljs.core._rest.call(null,args__15634);
if((argc === 15))
{if(f__15617.cljs$lang$arity$15)
{return f__15617.cljs$lang$arity$15(a__15607,b__15609,c__15611,d__15613,e__15615,f__15617,g__15619,h__15621,i__15623,j__15625,k__15627,l__15629,m__15631,n__15633,o__15635);
} else
{return f__15617.call(null,a__15607,b__15609,c__15611,d__15613,e__15615,f__15617,g__15619,h__15621,i__15623,j__15625,k__15627,l__15629,m__15631,n__15633,o__15635);
}
} else
{var p__15637 = cljs.core._first.call(null,args__15636);
var args__15638 = cljs.core._rest.call(null,args__15636);
if((argc === 16))
{if(f__15617.cljs$lang$arity$16)
{return f__15617.cljs$lang$arity$16(a__15607,b__15609,c__15611,d__15613,e__15615,f__15617,g__15619,h__15621,i__15623,j__15625,k__15627,l__15629,m__15631,n__15633,o__15635,p__15637);
} else
{return f__15617.call(null,a__15607,b__15609,c__15611,d__15613,e__15615,f__15617,g__15619,h__15621,i__15623,j__15625,k__15627,l__15629,m__15631,n__15633,o__15635,p__15637);
}
} else
{var q__15639 = cljs.core._first.call(null,args__15638);
var args__15640 = cljs.core._rest.call(null,args__15638);
if((argc === 17))
{if(f__15617.cljs$lang$arity$17)
{return f__15617.cljs$lang$arity$17(a__15607,b__15609,c__15611,d__15613,e__15615,f__15617,g__15619,h__15621,i__15623,j__15625,k__15627,l__15629,m__15631,n__15633,o__15635,p__15637,q__15639);
} else
{return f__15617.call(null,a__15607,b__15609,c__15611,d__15613,e__15615,f__15617,g__15619,h__15621,i__15623,j__15625,k__15627,l__15629,m__15631,n__15633,o__15635,p__15637,q__15639);
}
} else
{var r__15641 = cljs.core._first.call(null,args__15640);
var args__15642 = cljs.core._rest.call(null,args__15640);
if((argc === 18))
{if(f__15617.cljs$lang$arity$18)
{return f__15617.cljs$lang$arity$18(a__15607,b__15609,c__15611,d__15613,e__15615,f__15617,g__15619,h__15621,i__15623,j__15625,k__15627,l__15629,m__15631,n__15633,o__15635,p__15637,q__15639,r__15641);
} else
{return f__15617.call(null,a__15607,b__15609,c__15611,d__15613,e__15615,f__15617,g__15619,h__15621,i__15623,j__15625,k__15627,l__15629,m__15631,n__15633,o__15635,p__15637,q__15639,r__15641);
}
} else
{var s__15643 = cljs.core._first.call(null,args__15642);
var args__15644 = cljs.core._rest.call(null,args__15642);
if((argc === 19))
{if(f__15617.cljs$lang$arity$19)
{return f__15617.cljs$lang$arity$19(a__15607,b__15609,c__15611,d__15613,e__15615,f__15617,g__15619,h__15621,i__15623,j__15625,k__15627,l__15629,m__15631,n__15633,o__15635,p__15637,q__15639,r__15641,s__15643);
} else
{return f__15617.call(null,a__15607,b__15609,c__15611,d__15613,e__15615,f__15617,g__15619,h__15621,i__15623,j__15625,k__15627,l__15629,m__15631,n__15633,o__15635,p__15637,q__15639,r__15641,s__15643);
}
} else
{var t__15645 = cljs.core._first.call(null,args__15644);
var args__15646 = cljs.core._rest.call(null,args__15644);
if((argc === 20))
{if(f__15617.cljs$lang$arity$20)
{return f__15617.cljs$lang$arity$20(a__15607,b__15609,c__15611,d__15613,e__15615,f__15617,g__15619,h__15621,i__15623,j__15625,k__15627,l__15629,m__15631,n__15633,o__15635,p__15637,q__15639,r__15641,s__15643,t__15645);
} else
{return f__15617.call(null,a__15607,b__15609,c__15611,d__15613,e__15615,f__15617,g__15619,h__15621,i__15623,j__15625,k__15627,l__15629,m__15631,n__15633,o__15635,p__15637,q__15639,r__15641,s__15643,t__15645);
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
var fixed_arity__15661 = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc__15662 = cljs.core.bounded_count.call(null,args,(fixed_arity__15661 + 1));
if((bc__15662 <= fixed_arity__15661))
{return cljs.core.apply_to.call(null,f,bc__15662,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3 = (function (f,x,args){
var arglist__15663 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__15664 = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc__15665 = cljs.core.bounded_count.call(null,arglist__15663,(fixed_arity__15664 + 1));
if((bc__15665 <= fixed_arity__15664))
{return cljs.core.apply_to.call(null,f,bc__15665,arglist__15663);
} else
{return f.cljs$lang$applyTo(arglist__15663);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__15663));
}
});
var apply__4 = (function (f,x,y,args){
var arglist__15666 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__15667 = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc__15668 = cljs.core.bounded_count.call(null,arglist__15666,(fixed_arity__15667 + 1));
if((bc__15668 <= fixed_arity__15667))
{return cljs.core.apply_to.call(null,f,bc__15668,arglist__15666);
} else
{return f.cljs$lang$applyTo(arglist__15666);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__15666));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist__15669 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__15670 = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc__15671 = cljs.core.bounded_count.call(null,arglist__15669,(fixed_arity__15670 + 1));
if((bc__15671 <= fixed_arity__15670))
{return cljs.core.apply_to.call(null,f,bc__15671,arglist__15669);
} else
{return f.cljs$lang$applyTo(arglist__15669);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__15669));
}
});
var apply__6 = (function() { 
var G__15675__delegate = function (f,a,b,c,d,args){
var arglist__15672 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__15673 = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc__15674 = cljs.core.bounded_count.call(null,arglist__15672,(fixed_arity__15673 + 1));
if((bc__15674 <= fixed_arity__15673))
{return cljs.core.apply_to.call(null,f,bc__15674,arglist__15672);
} else
{return f.cljs$lang$applyTo(arglist__15672);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__15672));
}
};
var G__15675 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__15675__delegate.call(this, f, a, b, c, d, args);
};
G__15675.cljs$lang$maxFixedArity = 5;
G__15675.cljs$lang$applyTo = (function (arglist__15676){
var f = cljs.core.first(arglist__15676);
var a = cljs.core.first(cljs.core.next(arglist__15676));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__15676)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__15676))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__15676)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__15676)))));
return G__15675__delegate(f, a, b, c, d, args);
});
G__15675.cljs$lang$arity$variadic = G__15675__delegate;
return G__15675;
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
vary_meta.cljs$lang$applyTo = (function (arglist__15677){
var obj = cljs.core.first(arglist__15677);
var f = cljs.core.first(cljs.core.next(arglist__15677));
var args = cljs.core.rest(cljs.core.next(arglist__15677));
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
var G__15678__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__15678 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__15678__delegate.call(this, x, y, more);
};
G__15678.cljs$lang$maxFixedArity = 2;
G__15678.cljs$lang$applyTo = (function (arglist__15679){
var x = cljs.core.first(arglist__15679);
var y = cljs.core.first(cljs.core.next(arglist__15679));
var more = cljs.core.rest(cljs.core.next(arglist__15679));
return G__15678__delegate(x, y, more);
});
G__15678.cljs$lang$arity$variadic = G__15678__delegate;
return G__15678;
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
var G__15680 = pred;
var G__15681 = cljs.core.next.call(null,coll);
pred = G__15680;
coll = G__15681;
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
{var or__3824__auto____15683 = pred.call(null,cljs.core.first.call(null,coll));
if(cljs.core.truth_(or__3824__auto____15683))
{return or__3824__auto____15683;
} else
{{
var G__15684 = pred;
var G__15685 = cljs.core.next.call(null,coll);
pred = G__15684;
coll = G__15685;
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
var G__15686 = null;
var G__15686__0 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__15686__1 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__15686__2 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__15686__3 = (function() { 
var G__15687__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__15687 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__15687__delegate.call(this, x, y, zs);
};
G__15687.cljs$lang$maxFixedArity = 2;
G__15687.cljs$lang$applyTo = (function (arglist__15688){
var x = cljs.core.first(arglist__15688);
var y = cljs.core.first(cljs.core.next(arglist__15688));
var zs = cljs.core.rest(cljs.core.next(arglist__15688));
return G__15687__delegate(x, y, zs);
});
G__15687.cljs$lang$arity$variadic = G__15687__delegate;
return G__15687;
})()
;
G__15686 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__15686__0.call(this);
case 1:
return G__15686__1.call(this,x);
case 2:
return G__15686__2.call(this,x,y);
default:
return G__15686__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
G__15686.cljs$lang$maxFixedArity = 2;
G__15686.cljs$lang$applyTo = G__15686__3.cljs$lang$applyTo;
return G__15686;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__15689__delegate = function (args){
return x;
};
var G__15689 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__15689__delegate.call(this, args);
};
G__15689.cljs$lang$maxFixedArity = 0;
G__15689.cljs$lang$applyTo = (function (arglist__15690){
var args = cljs.core.seq(arglist__15690);;
return G__15689__delegate(args);
});
G__15689.cljs$lang$arity$variadic = G__15689__delegate;
return G__15689;
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
var G__15697 = null;
var G__15697__0 = (function (){
return f.call(null,g.call(null));
});
var G__15697__1 = (function (x){
return f.call(null,g.call(null,x));
});
var G__15697__2 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__15697__3 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__15697__4 = (function() { 
var G__15698__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__15698 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__15698__delegate.call(this, x, y, z, args);
};
G__15698.cljs$lang$maxFixedArity = 3;
G__15698.cljs$lang$applyTo = (function (arglist__15699){
var x = cljs.core.first(arglist__15699);
var y = cljs.core.first(cljs.core.next(arglist__15699));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__15699)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__15699)));
return G__15698__delegate(x, y, z, args);
});
G__15698.cljs$lang$arity$variadic = G__15698__delegate;
return G__15698;
})()
;
G__15697 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__15697__0.call(this);
case 1:
return G__15697__1.call(this,x);
case 2:
return G__15697__2.call(this,x,y);
case 3:
return G__15697__3.call(this,x,y,z);
default:
return G__15697__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__15697.cljs$lang$maxFixedArity = 3;
G__15697.cljs$lang$applyTo = G__15697__4.cljs$lang$applyTo;
return G__15697;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__15700 = null;
var G__15700__0 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__15700__1 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__15700__2 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__15700__3 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__15700__4 = (function() { 
var G__15701__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__15701 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__15701__delegate.call(this, x, y, z, args);
};
G__15701.cljs$lang$maxFixedArity = 3;
G__15701.cljs$lang$applyTo = (function (arglist__15702){
var x = cljs.core.first(arglist__15702);
var y = cljs.core.first(cljs.core.next(arglist__15702));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__15702)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__15702)));
return G__15701__delegate(x, y, z, args);
});
G__15701.cljs$lang$arity$variadic = G__15701__delegate;
return G__15701;
})()
;
G__15700 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__15700__0.call(this);
case 1:
return G__15700__1.call(this,x);
case 2:
return G__15700__2.call(this,x,y);
case 3:
return G__15700__3.call(this,x,y,z);
default:
return G__15700__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__15700.cljs$lang$maxFixedArity = 3;
G__15700.cljs$lang$applyTo = G__15700__4.cljs$lang$applyTo;
return G__15700;
})()
});
var comp__4 = (function() { 
var G__15703__delegate = function (f1,f2,f3,fs){
var fs__15694 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));
return (function() { 
var G__15704__delegate = function (args){
var ret__15695 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__15694),args);
var fs__15696 = cljs.core.next.call(null,fs__15694);
while(true){
if(fs__15696)
{{
var G__15705 = cljs.core.first.call(null,fs__15696).call(null,ret__15695);
var G__15706 = cljs.core.next.call(null,fs__15696);
ret__15695 = G__15705;
fs__15696 = G__15706;
continue;
}
} else
{return ret__15695;
}
break;
}
};
var G__15704 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__15704__delegate.call(this, args);
};
G__15704.cljs$lang$maxFixedArity = 0;
G__15704.cljs$lang$applyTo = (function (arglist__15707){
var args = cljs.core.seq(arglist__15707);;
return G__15704__delegate(args);
});
G__15704.cljs$lang$arity$variadic = G__15704__delegate;
return G__15704;
})()
;
};
var G__15703 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__15703__delegate.call(this, f1, f2, f3, fs);
};
G__15703.cljs$lang$maxFixedArity = 3;
G__15703.cljs$lang$applyTo = (function (arglist__15708){
var f1 = cljs.core.first(arglist__15708);
var f2 = cljs.core.first(cljs.core.next(arglist__15708));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__15708)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__15708)));
return G__15703__delegate(f1, f2, f3, fs);
});
G__15703.cljs$lang$arity$variadic = G__15703__delegate;
return G__15703;
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
var G__15709__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__15709 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__15709__delegate.call(this, args);
};
G__15709.cljs$lang$maxFixedArity = 0;
G__15709.cljs$lang$applyTo = (function (arglist__15710){
var args = cljs.core.seq(arglist__15710);;
return G__15709__delegate(args);
});
G__15709.cljs$lang$arity$variadic = G__15709__delegate;
return G__15709;
})()
;
});
var partial__3 = (function (f,arg1,arg2){
return (function() { 
var G__15711__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__15711 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__15711__delegate.call(this, args);
};
G__15711.cljs$lang$maxFixedArity = 0;
G__15711.cljs$lang$applyTo = (function (arglist__15712){
var args = cljs.core.seq(arglist__15712);;
return G__15711__delegate(args);
});
G__15711.cljs$lang$arity$variadic = G__15711__delegate;
return G__15711;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__15713__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__15713 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__15713__delegate.call(this, args);
};
G__15713.cljs$lang$maxFixedArity = 0;
G__15713.cljs$lang$applyTo = (function (arglist__15714){
var args = cljs.core.seq(arglist__15714);;
return G__15713__delegate(args);
});
G__15713.cljs$lang$arity$variadic = G__15713__delegate;
return G__15713;
})()
;
});
var partial__5 = (function() { 
var G__15715__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__15716__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__15716 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__15716__delegate.call(this, args);
};
G__15716.cljs$lang$maxFixedArity = 0;
G__15716.cljs$lang$applyTo = (function (arglist__15717){
var args = cljs.core.seq(arglist__15717);;
return G__15716__delegate(args);
});
G__15716.cljs$lang$arity$variadic = G__15716__delegate;
return G__15716;
})()
;
};
var G__15715 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__15715__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__15715.cljs$lang$maxFixedArity = 4;
G__15715.cljs$lang$applyTo = (function (arglist__15718){
var f = cljs.core.first(arglist__15718);
var arg1 = cljs.core.first(cljs.core.next(arglist__15718));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__15718)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__15718))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__15718))));
return G__15715__delegate(f, arg1, arg2, arg3, more);
});
G__15715.cljs$lang$arity$variadic = G__15715__delegate;
return G__15715;
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
var G__15719 = null;
var G__15719__1 = (function (a){
return f.call(null,(((a == null))?x:a));
});
var G__15719__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),b);
});
var G__15719__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),b,c);
});
var G__15719__4 = (function() { 
var G__15720__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),b,c,ds);
};
var G__15720 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__15720__delegate.call(this, a, b, c, ds);
};
G__15720.cljs$lang$maxFixedArity = 3;
G__15720.cljs$lang$applyTo = (function (arglist__15721){
var a = cljs.core.first(arglist__15721);
var b = cljs.core.first(cljs.core.next(arglist__15721));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__15721)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__15721)));
return G__15720__delegate(a, b, c, ds);
});
G__15720.cljs$lang$arity$variadic = G__15720__delegate;
return G__15720;
})()
;
G__15719 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__15719__1.call(this,a);
case 2:
return G__15719__2.call(this,a,b);
case 3:
return G__15719__3.call(this,a,b,c);
default:
return G__15719__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__15719.cljs$lang$maxFixedArity = 3;
G__15719.cljs$lang$applyTo = G__15719__4.cljs$lang$applyTo;
return G__15719;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__15722 = null;
var G__15722__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__15722__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),c);
});
var G__15722__4 = (function() { 
var G__15723__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__15723 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__15723__delegate.call(this, a, b, c, ds);
};
G__15723.cljs$lang$maxFixedArity = 3;
G__15723.cljs$lang$applyTo = (function (arglist__15724){
var a = cljs.core.first(arglist__15724);
var b = cljs.core.first(cljs.core.next(arglist__15724));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__15724)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__15724)));
return G__15723__delegate(a, b, c, ds);
});
G__15723.cljs$lang$arity$variadic = G__15723__delegate;
return G__15723;
})()
;
G__15722 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__15722__2.call(this,a,b);
case 3:
return G__15722__3.call(this,a,b,c);
default:
return G__15722__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__15722.cljs$lang$maxFixedArity = 3;
G__15722.cljs$lang$applyTo = G__15722__4.cljs$lang$applyTo;
return G__15722;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__15725 = null;
var G__15725__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__15725__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c));
});
var G__15725__4 = (function() { 
var G__15726__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__15726 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__15726__delegate.call(this, a, b, c, ds);
};
G__15726.cljs$lang$maxFixedArity = 3;
G__15726.cljs$lang$applyTo = (function (arglist__15727){
var a = cljs.core.first(arglist__15727);
var b = cljs.core.first(cljs.core.next(arglist__15727));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__15727)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__15727)));
return G__15726__delegate(a, b, c, ds);
});
G__15726.cljs$lang$arity$variadic = G__15726__delegate;
return G__15726;
})()
;
G__15725 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__15725__2.call(this,a,b);
case 3:
return G__15725__3.call(this,a,b,c);
default:
return G__15725__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__15725.cljs$lang$maxFixedArity = 3;
G__15725.cljs$lang$applyTo = G__15725__4.cljs$lang$applyTo;
return G__15725;
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
var mapi__15743 = (function mapi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____15751 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____15751)
{var s__15752 = temp__3974__auto____15751;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15752))
{var c__15753 = cljs.core.chunk_first.call(null,s__15752);
var size__15754 = cljs.core.count.call(null,c__15753);
var b__15755 = cljs.core.chunk_buffer.call(null,size__15754);
var n__2686__auto____15756 = size__15754;
var i__15757 = 0;
while(true){
if((i__15757 < n__2686__auto____15756))
{cljs.core.chunk_append.call(null,b__15755,f.call(null,(idx + i__15757),cljs.core._nth.call(null,c__15753,i__15757)));
{
var G__15758 = (i__15757 + 1);
i__15757 = G__15758;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15755),mapi.call(null,(idx + size__15754),cljs.core.chunk_rest.call(null,s__15752)));
} else
{return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__15752)),mapi.call(null,(idx + 1),cljs.core.rest.call(null,s__15752)));
}
} else
{return null;
}
}),null));
});
return mapi__15743.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____15768 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____15768)
{var s__15769 = temp__3974__auto____15768;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15769))
{var c__15770 = cljs.core.chunk_first.call(null,s__15769);
var size__15771 = cljs.core.count.call(null,c__15770);
var b__15772 = cljs.core.chunk_buffer.call(null,size__15771);
var n__2686__auto____15773 = size__15771;
var i__15774 = 0;
while(true){
if((i__15774 < n__2686__auto____15773))
{var x__15775 = f.call(null,cljs.core._nth.call(null,c__15770,i__15774));
if((x__15775 == null))
{} else
{cljs.core.chunk_append.call(null,b__15772,x__15775);
}
{
var G__15777 = (i__15774 + 1);
i__15774 = G__15777;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15772),keep.call(null,f,cljs.core.chunk_rest.call(null,s__15769)));
} else
{var x__15776 = f.call(null,cljs.core.first.call(null,s__15769));
if((x__15776 == null))
{return keep.call(null,f,cljs.core.rest.call(null,s__15769));
} else
{return cljs.core.cons.call(null,x__15776,keep.call(null,f,cljs.core.rest.call(null,s__15769)));
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
var keepi__15803 = (function keepi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____15813 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____15813)
{var s__15814 = temp__3974__auto____15813;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15814))
{var c__15815 = cljs.core.chunk_first.call(null,s__15814);
var size__15816 = cljs.core.count.call(null,c__15815);
var b__15817 = cljs.core.chunk_buffer.call(null,size__15816);
var n__2686__auto____15818 = size__15816;
var i__15819 = 0;
while(true){
if((i__15819 < n__2686__auto____15818))
{var x__15820 = f.call(null,(idx + i__15819),cljs.core._nth.call(null,c__15815,i__15819));
if((x__15820 == null))
{} else
{cljs.core.chunk_append.call(null,b__15817,x__15820);
}
{
var G__15822 = (i__15819 + 1);
i__15819 = G__15822;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15817),keepi.call(null,(idx + size__15816),cljs.core.chunk_rest.call(null,s__15814)));
} else
{var x__15821 = f.call(null,idx,cljs.core.first.call(null,s__15814));
if((x__15821 == null))
{return keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__15814));
} else
{return cljs.core.cons.call(null,x__15821,keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__15814)));
}
}
} else
{return null;
}
}),null));
});
return keepi__15803.call(null,0,coll);
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____15908 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____15908))
{return p.call(null,y);
} else
{return and__3822__auto____15908;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____15909 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____15909))
{var and__3822__auto____15910 = p.call(null,y);
if(cljs.core.truth_(and__3822__auto____15910))
{return p.call(null,z);
} else
{return and__3822__auto____15910;
}
} else
{return and__3822__auto____15909;
}
})());
});
var ep1__4 = (function() { 
var G__15979__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____15911 = ep1.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____15911))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3822__auto____15911;
}
})());
};
var G__15979 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__15979__delegate.call(this, x, y, z, args);
};
G__15979.cljs$lang$maxFixedArity = 3;
G__15979.cljs$lang$applyTo = (function (arglist__15980){
var x = cljs.core.first(arglist__15980);
var y = cljs.core.first(cljs.core.next(arglist__15980));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__15980)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__15980)));
return G__15979__delegate(x, y, z, args);
});
G__15979.cljs$lang$arity$variadic = G__15979__delegate;
return G__15979;
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____15923 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____15923))
{return p2.call(null,x);
} else
{return and__3822__auto____15923;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____15924 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____15924))
{var and__3822__auto____15925 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____15925))
{var and__3822__auto____15926 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____15926))
{return p2.call(null,y);
} else
{return and__3822__auto____15926;
}
} else
{return and__3822__auto____15925;
}
} else
{return and__3822__auto____15924;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____15927 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____15927))
{var and__3822__auto____15928 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____15928))
{var and__3822__auto____15929 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____15929))
{var and__3822__auto____15930 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____15930))
{var and__3822__auto____15931 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____15931))
{return p2.call(null,z);
} else
{return and__3822__auto____15931;
}
} else
{return and__3822__auto____15930;
}
} else
{return and__3822__auto____15929;
}
} else
{return and__3822__auto____15928;
}
} else
{return and__3822__auto____15927;
}
})());
});
var ep2__4 = (function() { 
var G__15981__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____15932 = ep2.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____15932))
{return cljs.core.every_QMARK_.call(null,(function (p1__15778_SHARP_){
var and__3822__auto____15933 = p1.call(null,p1__15778_SHARP_);
if(cljs.core.truth_(and__3822__auto____15933))
{return p2.call(null,p1__15778_SHARP_);
} else
{return and__3822__auto____15933;
}
}),args);
} else
{return and__3822__auto____15932;
}
})());
};
var G__15981 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__15981__delegate.call(this, x, y, z, args);
};
G__15981.cljs$lang$maxFixedArity = 3;
G__15981.cljs$lang$applyTo = (function (arglist__15982){
var x = cljs.core.first(arglist__15982);
var y = cljs.core.first(cljs.core.next(arglist__15982));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__15982)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__15982)));
return G__15981__delegate(x, y, z, args);
});
G__15981.cljs$lang$arity$variadic = G__15981__delegate;
return G__15981;
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____15952 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____15952))
{var and__3822__auto____15953 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____15953))
{return p3.call(null,x);
} else
{return and__3822__auto____15953;
}
} else
{return and__3822__auto____15952;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____15954 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____15954))
{var and__3822__auto____15955 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____15955))
{var and__3822__auto____15956 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____15956))
{var and__3822__auto____15957 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____15957))
{var and__3822__auto____15958 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____15958))
{return p3.call(null,y);
} else
{return and__3822__auto____15958;
}
} else
{return and__3822__auto____15957;
}
} else
{return and__3822__auto____15956;
}
} else
{return and__3822__auto____15955;
}
} else
{return and__3822__auto____15954;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____15959 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____15959))
{var and__3822__auto____15960 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____15960))
{var and__3822__auto____15961 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____15961))
{var and__3822__auto____15962 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____15962))
{var and__3822__auto____15963 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____15963))
{var and__3822__auto____15964 = p3.call(null,y);
if(cljs.core.truth_(and__3822__auto____15964))
{var and__3822__auto____15965 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____15965))
{var and__3822__auto____15966 = p2.call(null,z);
if(cljs.core.truth_(and__3822__auto____15966))
{return p3.call(null,z);
} else
{return and__3822__auto____15966;
}
} else
{return and__3822__auto____15965;
}
} else
{return and__3822__auto____15964;
}
} else
{return and__3822__auto____15963;
}
} else
{return and__3822__auto____15962;
}
} else
{return and__3822__auto____15961;
}
} else
{return and__3822__auto____15960;
}
} else
{return and__3822__auto____15959;
}
})());
});
var ep3__4 = (function() { 
var G__15983__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____15967 = ep3.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____15967))
{return cljs.core.every_QMARK_.call(null,(function (p1__15779_SHARP_){
var and__3822__auto____15968 = p1.call(null,p1__15779_SHARP_);
if(cljs.core.truth_(and__3822__auto____15968))
{var and__3822__auto____15969 = p2.call(null,p1__15779_SHARP_);
if(cljs.core.truth_(and__3822__auto____15969))
{return p3.call(null,p1__15779_SHARP_);
} else
{return and__3822__auto____15969;
}
} else
{return and__3822__auto____15968;
}
}),args);
} else
{return and__3822__auto____15967;
}
})());
};
var G__15983 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__15983__delegate.call(this, x, y, z, args);
};
G__15983.cljs$lang$maxFixedArity = 3;
G__15983.cljs$lang$applyTo = (function (arglist__15984){
var x = cljs.core.first(arglist__15984);
var y = cljs.core.first(cljs.core.next(arglist__15984));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__15984)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__15984)));
return G__15983__delegate(x, y, z, args);
});
G__15983.cljs$lang$arity$variadic = G__15983__delegate;
return G__15983;
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
var G__15985__delegate = function (p1,p2,p3,ps){
var ps__15970 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__15780_SHARP_){
return p1__15780_SHARP_.call(null,x);
}),ps__15970);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__15781_SHARP_){
var and__3822__auto____15975 = p1__15781_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____15975))
{return p1__15781_SHARP_.call(null,y);
} else
{return and__3822__auto____15975;
}
}),ps__15970);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__15782_SHARP_){
var and__3822__auto____15976 = p1__15782_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____15976))
{var and__3822__auto____15977 = p1__15782_SHARP_.call(null,y);
if(cljs.core.truth_(and__3822__auto____15977))
{return p1__15782_SHARP_.call(null,z);
} else
{return and__3822__auto____15977;
}
} else
{return and__3822__auto____15976;
}
}),ps__15970);
});
var epn__4 = (function() { 
var G__15986__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____15978 = epn.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____15978))
{return cljs.core.every_QMARK_.call(null,(function (p1__15783_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__15783_SHARP_,args);
}),ps__15970);
} else
{return and__3822__auto____15978;
}
})());
};
var G__15986 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__15986__delegate.call(this, x, y, z, args);
};
G__15986.cljs$lang$maxFixedArity = 3;
G__15986.cljs$lang$applyTo = (function (arglist__15987){
var x = cljs.core.first(arglist__15987);
var y = cljs.core.first(cljs.core.next(arglist__15987));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__15987)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__15987)));
return G__15986__delegate(x, y, z, args);
});
G__15986.cljs$lang$arity$variadic = G__15986__delegate;
return G__15986;
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
var G__15985 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__15985__delegate.call(this, p1, p2, p3, ps);
};
G__15985.cljs$lang$maxFixedArity = 3;
G__15985.cljs$lang$applyTo = (function (arglist__15988){
var p1 = cljs.core.first(arglist__15988);
var p2 = cljs.core.first(cljs.core.next(arglist__15988));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__15988)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__15988)));
return G__15985__delegate(p1, p2, p3, ps);
});
G__15985.cljs$lang$arity$variadic = G__15985__delegate;
return G__15985;
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
var or__3824__auto____16069 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____16069))
{return or__3824__auto____16069;
} else
{return p.call(null,y);
}
});
var sp1__3 = (function (x,y,z){
var or__3824__auto____16070 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____16070))
{return or__3824__auto____16070;
} else
{var or__3824__auto____16071 = p.call(null,y);
if(cljs.core.truth_(or__3824__auto____16071))
{return or__3824__auto____16071;
} else
{return p.call(null,z);
}
}
});
var sp1__4 = (function() { 
var G__16140__delegate = function (x,y,z,args){
var or__3824__auto____16072 = sp1.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____16072))
{return or__3824__auto____16072;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__16140 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__16140__delegate.call(this, x, y, z, args);
};
G__16140.cljs$lang$maxFixedArity = 3;
G__16140.cljs$lang$applyTo = (function (arglist__16141){
var x = cljs.core.first(arglist__16141);
var y = cljs.core.first(cljs.core.next(arglist__16141));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__16141)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__16141)));
return G__16140__delegate(x, y, z, args);
});
G__16140.cljs$lang$arity$variadic = G__16140__delegate;
return G__16140;
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
var or__3824__auto____16084 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____16084))
{return or__3824__auto____16084;
} else
{return p2.call(null,x);
}
});
var sp2__2 = (function (x,y){
var or__3824__auto____16085 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____16085))
{return or__3824__auto____16085;
} else
{var or__3824__auto____16086 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____16086))
{return or__3824__auto____16086;
} else
{var or__3824__auto____16087 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____16087))
{return or__3824__auto____16087;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3824__auto____16088 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____16088))
{return or__3824__auto____16088;
} else
{var or__3824__auto____16089 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____16089))
{return or__3824__auto____16089;
} else
{var or__3824__auto____16090 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____16090))
{return or__3824__auto____16090;
} else
{var or__3824__auto____16091 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____16091))
{return or__3824__auto____16091;
} else
{var or__3824__auto____16092 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____16092))
{return or__3824__auto____16092;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__16142__delegate = function (x,y,z,args){
var or__3824__auto____16093 = sp2.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____16093))
{return or__3824__auto____16093;
} else
{return cljs.core.some.call(null,(function (p1__15823_SHARP_){
var or__3824__auto____16094 = p1.call(null,p1__15823_SHARP_);
if(cljs.core.truth_(or__3824__auto____16094))
{return or__3824__auto____16094;
} else
{return p2.call(null,p1__15823_SHARP_);
}
}),args);
}
};
var G__16142 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__16142__delegate.call(this, x, y, z, args);
};
G__16142.cljs$lang$maxFixedArity = 3;
G__16142.cljs$lang$applyTo = (function (arglist__16143){
var x = cljs.core.first(arglist__16143);
var y = cljs.core.first(cljs.core.next(arglist__16143));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__16143)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__16143)));
return G__16142__delegate(x, y, z, args);
});
G__16142.cljs$lang$arity$variadic = G__16142__delegate;
return G__16142;
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
var or__3824__auto____16113 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____16113))
{return or__3824__auto____16113;
} else
{var or__3824__auto____16114 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____16114))
{return or__3824__auto____16114;
} else
{return p3.call(null,x);
}
}
});
var sp3__2 = (function (x,y){
var or__3824__auto____16115 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____16115))
{return or__3824__auto____16115;
} else
{var or__3824__auto____16116 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____16116))
{return or__3824__auto____16116;
} else
{var or__3824__auto____16117 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____16117))
{return or__3824__auto____16117;
} else
{var or__3824__auto____16118 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____16118))
{return or__3824__auto____16118;
} else
{var or__3824__auto____16119 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____16119))
{return or__3824__auto____16119;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3824__auto____16120 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____16120))
{return or__3824__auto____16120;
} else
{var or__3824__auto____16121 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____16121))
{return or__3824__auto____16121;
} else
{var or__3824__auto____16122 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____16122))
{return or__3824__auto____16122;
} else
{var or__3824__auto____16123 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____16123))
{return or__3824__auto____16123;
} else
{var or__3824__auto____16124 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____16124))
{return or__3824__auto____16124;
} else
{var or__3824__auto____16125 = p3.call(null,y);
if(cljs.core.truth_(or__3824__auto____16125))
{return or__3824__auto____16125;
} else
{var or__3824__auto____16126 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____16126))
{return or__3824__auto____16126;
} else
{var or__3824__auto____16127 = p2.call(null,z);
if(cljs.core.truth_(or__3824__auto____16127))
{return or__3824__auto____16127;
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
var G__16144__delegate = function (x,y,z,args){
var or__3824__auto____16128 = sp3.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____16128))
{return or__3824__auto____16128;
} else
{return cljs.core.some.call(null,(function (p1__15824_SHARP_){
var or__3824__auto____16129 = p1.call(null,p1__15824_SHARP_);
if(cljs.core.truth_(or__3824__auto____16129))
{return or__3824__auto____16129;
} else
{var or__3824__auto____16130 = p2.call(null,p1__15824_SHARP_);
if(cljs.core.truth_(or__3824__auto____16130))
{return or__3824__auto____16130;
} else
{return p3.call(null,p1__15824_SHARP_);
}
}
}),args);
}
};
var G__16144 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__16144__delegate.call(this, x, y, z, args);
};
G__16144.cljs$lang$maxFixedArity = 3;
G__16144.cljs$lang$applyTo = (function (arglist__16145){
var x = cljs.core.first(arglist__16145);
var y = cljs.core.first(cljs.core.next(arglist__16145));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__16145)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__16145)));
return G__16144__delegate(x, y, z, args);
});
G__16144.cljs$lang$arity$variadic = G__16144__delegate;
return G__16144;
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
var G__16146__delegate = function (p1,p2,p3,ps){
var ps__16131 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some.call(null,(function (p1__15825_SHARP_){
return p1__15825_SHARP_.call(null,x);
}),ps__16131);
});
var spn__2 = (function (x,y){
return cljs.core.some.call(null,(function (p1__15826_SHARP_){
var or__3824__auto____16136 = p1__15826_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____16136))
{return or__3824__auto____16136;
} else
{return p1__15826_SHARP_.call(null,y);
}
}),ps__16131);
});
var spn__3 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__15827_SHARP_){
var or__3824__auto____16137 = p1__15827_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____16137))
{return or__3824__auto____16137;
} else
{var or__3824__auto____16138 = p1__15827_SHARP_.call(null,y);
if(cljs.core.truth_(or__3824__auto____16138))
{return or__3824__auto____16138;
} else
{return p1__15827_SHARP_.call(null,z);
}
}
}),ps__16131);
});
var spn__4 = (function() { 
var G__16147__delegate = function (x,y,z,args){
var or__3824__auto____16139 = spn.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____16139))
{return or__3824__auto____16139;
} else
{return cljs.core.some.call(null,(function (p1__15828_SHARP_){
return cljs.core.some.call(null,p1__15828_SHARP_,args);
}),ps__16131);
}
};
var G__16147 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__16147__delegate.call(this, x, y, z, args);
};
G__16147.cljs$lang$maxFixedArity = 3;
G__16147.cljs$lang$applyTo = (function (arglist__16148){
var x = cljs.core.first(arglist__16148);
var y = cljs.core.first(cljs.core.next(arglist__16148));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__16148)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__16148)));
return G__16147__delegate(x, y, z, args);
});
G__16147.cljs$lang$arity$variadic = G__16147__delegate;
return G__16147;
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
var G__16146 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__16146__delegate.call(this, p1, p2, p3, ps);
};
G__16146.cljs$lang$maxFixedArity = 3;
G__16146.cljs$lang$applyTo = (function (arglist__16149){
var p1 = cljs.core.first(arglist__16149);
var p2 = cljs.core.first(cljs.core.next(arglist__16149));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__16149)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__16149)));
return G__16146__delegate(p1, p2, p3, ps);
});
G__16146.cljs$lang$arity$variadic = G__16146__delegate;
return G__16146;
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
var temp__3974__auto____16168 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____16168)
{var s__16169 = temp__3974__auto____16168;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16169))
{var c__16170 = cljs.core.chunk_first.call(null,s__16169);
var size__16171 = cljs.core.count.call(null,c__16170);
var b__16172 = cljs.core.chunk_buffer.call(null,size__16171);
var n__2686__auto____16173 = size__16171;
var i__16174 = 0;
while(true){
if((i__16174 < n__2686__auto____16173))
{cljs.core.chunk_append.call(null,b__16172,f.call(null,cljs.core._nth.call(null,c__16170,i__16174)));
{
var G__16186 = (i__16174 + 1);
i__16174 = G__16186;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16172),map.call(null,f,cljs.core.chunk_rest.call(null,s__16169)));
} else
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__16169)),map.call(null,f,cljs.core.rest.call(null,s__16169)));
}
} else
{return null;
}
}),null));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__16175 = cljs.core.seq.call(null,c1);
var s2__16176 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____16177 = s1__16175;
if(and__3822__auto____16177)
{return s2__16176;
} else
{return and__3822__auto____16177;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__16175),cljs.core.first.call(null,s2__16176)),map.call(null,f,cljs.core.rest.call(null,s1__16175),cljs.core.rest.call(null,s2__16176)));
} else
{return null;
}
}),null));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__16178 = cljs.core.seq.call(null,c1);
var s2__16179 = cljs.core.seq.call(null,c2);
var s3__16180 = cljs.core.seq.call(null,c3);
if((function (){var and__3822__auto____16181 = s1__16178;
if(and__3822__auto____16181)
{var and__3822__auto____16182 = s2__16179;
if(and__3822__auto____16182)
{return s3__16180;
} else
{return and__3822__auto____16182;
}
} else
{return and__3822__auto____16181;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__16178),cljs.core.first.call(null,s2__16179),cljs.core.first.call(null,s3__16180)),map.call(null,f,cljs.core.rest.call(null,s1__16178),cljs.core.rest.call(null,s2__16179),cljs.core.rest.call(null,s3__16180)));
} else
{return null;
}
}),null));
});
var map__5 = (function() { 
var G__16187__delegate = function (f,c1,c2,c3,colls){
var step__16185 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__16184 = map.call(null,cljs.core.seq,cs);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__16184))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__16184),step.call(null,map.call(null,cljs.core.rest,ss__16184)));
} else
{return null;
}
}),null));
});
return map.call(null,(function (p1__15989_SHARP_){
return cljs.core.apply.call(null,f,p1__15989_SHARP_);
}),step__16185.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__16187 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__16187__delegate.call(this, f, c1, c2, c3, colls);
};
G__16187.cljs$lang$maxFixedArity = 4;
G__16187.cljs$lang$applyTo = (function (arglist__16188){
var f = cljs.core.first(arglist__16188);
var c1 = cljs.core.first(cljs.core.next(arglist__16188));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__16188)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__16188))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__16188))));
return G__16187__delegate(f, c1, c2, c3, colls);
});
G__16187.cljs$lang$arity$variadic = G__16187__delegate;
return G__16187;
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
{var temp__3974__auto____16191 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____16191)
{var s__16192 = temp__3974__auto____16191;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__16192),take.call(null,(n - 1),cljs.core.rest.call(null,s__16192)));
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
var step__16198 = (function (n,coll){
while(true){
var s__16196 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____16197 = (n > 0);
if(and__3822__auto____16197)
{return s__16196;
} else
{return and__3822__auto____16197;
}
})()))
{{
var G__16199 = (n - 1);
var G__16200 = cljs.core.rest.call(null,s__16196);
n = G__16199;
coll = G__16200;
continue;
}
} else
{return s__16196;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__16198.call(null,n,coll);
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
var s__16203 = cljs.core.seq.call(null,coll);
var lead__16204 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));
while(true){
if(lead__16204)
{{
var G__16205 = cljs.core.next.call(null,s__16203);
var G__16206 = cljs.core.next.call(null,lead__16204);
s__16203 = G__16205;
lead__16204 = G__16206;
continue;
}
} else
{return s__16203;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__16212 = (function (pred,coll){
while(true){
var s__16210 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____16211 = s__16210;
if(and__3822__auto____16211)
{return pred.call(null,cljs.core.first.call(null,s__16210));
} else
{return and__3822__auto____16211;
}
})()))
{{
var G__16213 = pred;
var G__16214 = cljs.core.rest.call(null,s__16210);
pred = G__16213;
coll = G__16214;
continue;
}
} else
{return s__16210;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__16212.call(null,pred,coll);
}),null));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____16217 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____16217)
{var s__16218 = temp__3974__auto____16217;
return cljs.core.concat.call(null,s__16218,cycle.call(null,s__16218));
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
var s1__16223 = cljs.core.seq.call(null,c1);
var s2__16224 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____16225 = s1__16223;
if(and__3822__auto____16225)
{return s2__16224;
} else
{return and__3822__auto____16225;
}
})())
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__16223),cljs.core.cons.call(null,cljs.core.first.call(null,s2__16224),interleave.call(null,cljs.core.rest.call(null,s1__16223),cljs.core.rest.call(null,s2__16224))));
} else
{return null;
}
}),null));
});
var interleave__3 = (function() { 
var G__16227__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__16226 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__16226))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__16226),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__16226)));
} else
{return null;
}
}),null));
};
var G__16227 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__16227__delegate.call(this, c1, c2, colls);
};
G__16227.cljs$lang$maxFixedArity = 2;
G__16227.cljs$lang$applyTo = (function (arglist__16228){
var c1 = cljs.core.first(arglist__16228);
var c2 = cljs.core.first(cljs.core.next(arglist__16228));
var colls = cljs.core.rest(cljs.core.next(arglist__16228));
return G__16227__delegate(c1, c2, colls);
});
G__16227.cljs$lang$arity$variadic = G__16227__delegate;
return G__16227;
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
var cat__16238 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____16236 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____16236)
{var coll__16237 = temp__3971__auto____16236;
return cljs.core.cons.call(null,cljs.core.first.call(null,coll__16237),cat.call(null,cljs.core.rest.call(null,coll__16237),colls));
} else
{if(cljs.core.seq.call(null,colls))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
}),null));
});
return cat__16238.call(null,null,colls);
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
var G__16239__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__16239 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__16239__delegate.call(this, f, coll, colls);
};
G__16239.cljs$lang$maxFixedArity = 2;
G__16239.cljs$lang$applyTo = (function (arglist__16240){
var f = cljs.core.first(arglist__16240);
var coll = cljs.core.first(cljs.core.next(arglist__16240));
var colls = cljs.core.rest(cljs.core.next(arglist__16240));
return G__16239__delegate(f, coll, colls);
});
G__16239.cljs$lang$arity$variadic = G__16239__delegate;
return G__16239;
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
var temp__3974__auto____16250 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____16250)
{var s__16251 = temp__3974__auto____16250;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16251))
{var c__16252 = cljs.core.chunk_first.call(null,s__16251);
var size__16253 = cljs.core.count.call(null,c__16252);
var b__16254 = cljs.core.chunk_buffer.call(null,size__16253);
var n__2686__auto____16255 = size__16253;
var i__16256 = 0;
while(true){
if((i__16256 < n__2686__auto____16255))
{if(cljs.core.truth_(pred.call(null,cljs.core._nth.call(null,c__16252,i__16256))))
{cljs.core.chunk_append.call(null,b__16254,cljs.core._nth.call(null,c__16252,i__16256));
} else
{}
{
var G__16259 = (i__16256 + 1);
i__16256 = G__16259;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16254),filter.call(null,pred,cljs.core.chunk_rest.call(null,s__16251)));
} else
{var f__16257 = cljs.core.first.call(null,s__16251);
var r__16258 = cljs.core.rest.call(null,s__16251);
if(cljs.core.truth_(pred.call(null,f__16257)))
{return cljs.core.cons.call(null,f__16257,filter.call(null,pred,r__16258));
} else
{return filter.call(null,pred,r__16258);
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
var walk__16262 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
}),null));
});
return walk__16262.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__16260_SHARP_){
return !(cljs.core.sequential_QMARK_.call(null,p1__16260_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
if((function (){var G__16266__16267 = to;
if(G__16266__16267)
{if((function (){var or__3824__auto____16268 = (G__16266__16267.cljs$lang$protocol_mask$partition1$ & 4);
if(or__3824__auto____16268)
{return or__3824__auto____16268;
} else
{return G__16266__16267.cljs$core$IEditableCollection$;
}
})())
{return true;
} else
{if((!G__16266__16267.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__16266__16267);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__16266__16267);
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
var G__16269__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.apply.call(null,cljs.core.map,f,c1,c2,c3,colls));
};
var G__16269 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__16269__delegate.call(this, f, c1, c2, c3, colls);
};
G__16269.cljs$lang$maxFixedArity = 4;
G__16269.cljs$lang$applyTo = (function (arglist__16270){
var f = cljs.core.first(arglist__16270);
var c1 = cljs.core.first(cljs.core.next(arglist__16270));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__16270)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__16270))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__16270))));
return G__16269__delegate(f, c1, c2, c3, colls);
});
G__16269.cljs$lang$arity$variadic = G__16269__delegate;
return G__16269;
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
var temp__3974__auto____16277 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____16277)
{var s__16278 = temp__3974__auto____16277;
var p__16279 = cljs.core.take.call(null,n,s__16278);
if((n === cljs.core.count.call(null,p__16279)))
{return cljs.core.cons.call(null,p__16279,partition.call(null,n,step,cljs.core.drop.call(null,step,s__16278)));
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
var temp__3974__auto____16280 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____16280)
{var s__16281 = temp__3974__auto____16280;
var p__16282 = cljs.core.take.call(null,n,s__16281);
if((n === cljs.core.count.call(null,p__16282)))
{return cljs.core.cons.call(null,p__16282,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__16281)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__16282,pad)));
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
var sentinel__16287 = cljs.core.lookup_sentinel;
var m__16288 = m;
var ks__16289 = cljs.core.seq.call(null,ks);
while(true){
if(ks__16289)
{var m__16290 = cljs.core._lookup.call(null,m__16288,cljs.core.first.call(null,ks__16289),sentinel__16287);
if((sentinel__16287 === m__16290))
{return not_found;
} else
{{
var G__16291 = sentinel__16287;
var G__16292 = m__16290;
var G__16293 = cljs.core.next.call(null,ks__16289);
sentinel__16287 = G__16291;
m__16288 = G__16292;
ks__16289 = G__16293;
continue;
}
}
} else
{return m__16288;
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
cljs.core.assoc_in = (function assoc_in(m,p__16294,v){
var vec__16299__16300 = p__16294;
var k__16301 = cljs.core.nth.call(null,vec__16299__16300,0,null);
var ks__16302 = cljs.core.nthnext.call(null,vec__16299__16300,1);
if(cljs.core.truth_(ks__16302))
{return cljs.core.assoc.call(null,m,k__16301,assoc_in.call(null,cljs.core._lookup.call(null,m,k__16301,null),ks__16302,v));
} else
{return cljs.core.assoc.call(null,m,k__16301,v);
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
var update_in__delegate = function (m,p__16303,f,args){
var vec__16308__16309 = p__16303;
var k__16310 = cljs.core.nth.call(null,vec__16308__16309,0,null);
var ks__16311 = cljs.core.nthnext.call(null,vec__16308__16309,1);
if(cljs.core.truth_(ks__16311))
{return cljs.core.assoc.call(null,m,k__16310,cljs.core.apply.call(null,update_in,cljs.core._lookup.call(null,m,k__16310,null),ks__16311,f,args));
} else
{return cljs.core.assoc.call(null,m,k__16310,cljs.core.apply.call(null,f,cljs.core._lookup.call(null,m,k__16310,null),args));
}
};
var update_in = function (m,p__16303,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__16303, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__16312){
var m = cljs.core.first(arglist__16312);
var p__16303 = cljs.core.first(cljs.core.next(arglist__16312));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__16312)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__16312)));
return update_in__delegate(m, p__16303, f, args);
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
cljs.core.Vector.cljs$lang$ctorPrSeq = (function (this__2459__auto__){
return cljs.core.list.call(null,"cljs.core/Vector");
});
cljs.core.Vector.cljs$lang$ctorPrWriter = (function (this__2459__auto__,writer__2460__auto__){
return cljs.core._write.call(null,writer__2460__auto__,"cljs.core/Vector");
});
cljs.core.Vector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__16315 = this;
var h__2340__auto____16316 = this__16315.__hash;
if(!((h__2340__auto____16316 == null)))
{return h__2340__auto____16316;
} else
{var h__2340__auto____16317 = cljs.core.hash_coll.call(null,coll);
this__16315.__hash = h__2340__auto____16317;
return h__2340__auto____16317;
}
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__16318 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__16319 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__16320 = this;
var new_array__16321 = this__16320.array.slice();
(new_array__16321[k] = v);
return (new cljs.core.Vector(this__16320.meta,new_array__16321,null));
});
cljs.core.Vector.prototype.call = (function() {
var G__16352 = null;
var G__16352__2 = (function (this_sym16322,k){
var this__16324 = this;
var this_sym16322__16325 = this;
var coll__16326 = this_sym16322__16325;
return coll__16326.cljs$core$ILookup$_lookup$arity$2(coll__16326,k);
});
var G__16352__3 = (function (this_sym16323,k,not_found){
var this__16324 = this;
var this_sym16323__16327 = this;
var coll__16328 = this_sym16323__16327;
return coll__16328.cljs$core$ILookup$_lookup$arity$3(coll__16328,k,not_found);
});
G__16352 = function(this_sym16323,k,not_found){
switch(arguments.length){
case 2:
return G__16352__2.call(this,this_sym16323,k);
case 3:
return G__16352__3.call(this,this_sym16323,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16352;
})()
;
cljs.core.Vector.prototype.apply = (function (this_sym16313,args16314){
var this__16329 = this;
return this_sym16313.call.apply(this_sym16313,[this_sym16313].concat(args16314.slice()));
});
cljs.core.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__16330 = this;
var new_array__16331 = this__16330.array.slice();
new_array__16331.push(o);
return (new cljs.core.Vector(this__16330.meta,new_array__16331,null));
});
cljs.core.Vector.prototype.toString = (function (){
var this__16332 = this;
var this__16333 = this;
return cljs.core.pr_str.call(null,this__16333);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__16334 = this;
return cljs.core.ci_reduce.call(null,this__16334.array,f);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__16335 = this;
return cljs.core.ci_reduce.call(null,this__16335.array,f,start);
});
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__16336 = this;
if((this__16336.array.length > 0))
{var vector_seq__16337 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < this__16336.array.length))
{return cljs.core.cons.call(null,(this__16336.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
}),null));
});
return vector_seq__16337.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__16338 = this;
return this__16338.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__16339 = this;
var count__16340 = this__16339.array.length;
if((count__16340 > 0))
{return (this__16339.array[(count__16340 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__16341 = this;
if((this__16341.array.length > 0))
{var new_array__16342 = this__16341.array.slice();
new_array__16342.pop();
return (new cljs.core.Vector(this__16341.meta,new_array__16342,null));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__16343 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__16344 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__16345 = this;
return (new cljs.core.Vector(meta,this__16345.array,this__16345.__hash));
});
cljs.core.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__16346 = this;
return this__16346.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__16347 = this;
if((function (){var and__3822__auto____16348 = (0 <= n);
if(and__3822__auto____16348)
{return (n < this__16347.array.length);
} else
{return and__3822__auto____16348;
}
})())
{return (this__16347.array[n]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__16349 = this;
if((function (){var and__3822__auto____16350 = (0 <= n);
if(and__3822__auto____16350)
{return (n < this__16349.array.length);
} else
{return and__3822__auto____16350;
}
})())
{return (this__16349.array[n]);
} else
{return not_found;
}
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__16351 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__16351.meta);
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
cljs.core.VectorNode.cljs$lang$ctorPrSeq = (function (this__2461__auto__){
return cljs.core.list.call(null,"cljs.core/VectorNode");
});
cljs.core.VectorNode.cljs$lang$ctorPrWriter = (function (this__2461__auto__,writer__2462__auto__){
return cljs.core._write.call(null,writer__2462__auto__,"cljs.core/VectorNode");
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
var cnt__16354 = pv.cnt;
if((cnt__16354 < 32))
{return 0;
} else
{return (((cnt__16354 - 1) >>> 5) << 5);
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll__16360 = level;
var ret__16361 = node;
while(true){
if((ll__16360 === 0))
{return ret__16361;
} else
{var embed__16362 = ret__16361;
var r__16363 = cljs.core.pv_fresh_node.call(null,edit);
var ___16364 = cljs.core.pv_aset.call(null,r__16363,0,embed__16362);
{
var G__16365 = (ll__16360 - 5);
var G__16366 = r__16363;
ll__16360 = G__16365;
ret__16361 = G__16366;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__16372 = cljs.core.pv_clone_node.call(null,parent);
var subidx__16373 = (((pv.cnt - 1) >>> level) & 31);
if((5 === level))
{cljs.core.pv_aset.call(null,ret__16372,subidx__16373,tailnode);
return ret__16372;
} else
{var child__16374 = cljs.core.pv_aget.call(null,parent,subidx__16373);
if(!((child__16374 == null)))
{var node_to_insert__16375 = push_tail.call(null,pv,(level - 5),child__16374,tailnode);
cljs.core.pv_aset.call(null,ret__16372,subidx__16373,node_to_insert__16375);
return ret__16372;
} else
{var node_to_insert__16376 = cljs.core.new_path.call(null,null,(level - 5),tailnode);
cljs.core.pv_aset.call(null,ret__16372,subidx__16373,node_to_insert__16376);
return ret__16372;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((function (){var and__3822__auto____16380 = (0 <= i);
if(and__3822__auto____16380)
{return (i < pv.cnt);
} else
{return and__3822__auto____16380;
}
})())
{if((i >= cljs.core.tail_off.call(null,pv)))
{return pv.tail;
} else
{var node__16381 = pv.root;
var level__16382 = pv.shift;
while(true){
if((level__16382 > 0))
{{
var G__16383 = cljs.core.pv_aget.call(null,node__16381,((i >>> level__16382) & 31));
var G__16384 = (level__16382 - 5);
node__16381 = G__16383;
level__16382 = G__16384;
continue;
}
} else
{return node__16381.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(pv.cnt)].join('')));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__16387 = cljs.core.pv_clone_node.call(null,node);
if((level === 0))
{cljs.core.pv_aset.call(null,ret__16387,(i & 31),val);
return ret__16387;
} else
{var subidx__16388 = ((i >>> level) & 31);
cljs.core.pv_aset.call(null,ret__16387,subidx__16388,do_assoc.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__16388),i,val));
return ret__16387;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__16394 = (((pv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__16395 = pop_tail.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__16394));
if((function (){var and__3822__auto____16396 = (new_child__16395 == null);
if(and__3822__auto____16396)
{return (subidx__16394 === 0);
} else
{return and__3822__auto____16396;
}
})())
{return null;
} else
{var ret__16397 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__16397,subidx__16394,new_child__16395);
return ret__16397;
}
} else
{if((subidx__16394 === 0))
{return null;
} else
{if("\uFDD0'else")
{var ret__16398 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__16398,subidx__16394,null);
return ret__16398;
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
cljs.core.PersistentVector.cljs$lang$ctorPrSeq = (function (this__2459__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentVector");
});
cljs.core.PersistentVector.cljs$lang$ctorPrWriter = (function (this__2459__auto__,writer__2460__auto__){
return cljs.core._write.call(null,writer__2460__auto__,"cljs.core/PersistentVector");
});
cljs.core.PersistentVector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__16401 = this;
return (new cljs.core.TransientVector(this__16401.cnt,this__16401.shift,cljs.core.tv_editable_root.call(null,this__16401.root),cljs.core.tv_editable_tail.call(null,this__16401.tail)));
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__16402 = this;
var h__2340__auto____16403 = this__16402.__hash;
if(!((h__2340__auto____16403 == null)))
{return h__2340__auto____16403;
} else
{var h__2340__auto____16404 = cljs.core.hash_coll.call(null,coll);
this__16402.__hash = h__2340__auto____16404;
return h__2340__auto____16404;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__16405 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__16406 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__16407 = this;
if((function (){var and__3822__auto____16408 = (0 <= k);
if(and__3822__auto____16408)
{return (k < this__16407.cnt);
} else
{return and__3822__auto____16408;
}
})())
{if((cljs.core.tail_off.call(null,coll) <= k))
{var new_tail__16409 = this__16407.tail.slice();
(new_tail__16409[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__16407.meta,this__16407.cnt,this__16407.shift,this__16407.root,new_tail__16409,null));
} else
{return (new cljs.core.PersistentVector(this__16407.meta,this__16407.cnt,this__16407.shift,cljs.core.do_assoc.call(null,coll,this__16407.shift,this__16407.root,k,v),this__16407.tail,null));
}
} else
{if((k === this__16407.cnt))
{return coll.cljs$core$ICollection$_conj$arity$2(coll,v);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(k),cljs.core.str(" out of bounds  [0,"),cljs.core.str(this__16407.cnt),cljs.core.str("]")].join('')));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.call = (function() {
var G__16457 = null;
var G__16457__2 = (function (this_sym16410,k){
var this__16412 = this;
var this_sym16410__16413 = this;
var coll__16414 = this_sym16410__16413;
return coll__16414.cljs$core$ILookup$_lookup$arity$2(coll__16414,k);
});
var G__16457__3 = (function (this_sym16411,k,not_found){
var this__16412 = this;
var this_sym16411__16415 = this;
var coll__16416 = this_sym16411__16415;
return coll__16416.cljs$core$ILookup$_lookup$arity$3(coll__16416,k,not_found);
});
G__16457 = function(this_sym16411,k,not_found){
switch(arguments.length){
case 2:
return G__16457__2.call(this,this_sym16411,k);
case 3:
return G__16457__3.call(this,this_sym16411,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16457;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (this_sym16399,args16400){
var this__16417 = this;
return this_sym16399.call.apply(this_sym16399,[this_sym16399].concat(args16400.slice()));
});
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var this__16418 = this;
var step_init__16419 = [0,init];
var i__16420 = 0;
while(true){
if((i__16420 < this__16418.cnt))
{var arr__16421 = cljs.core.array_for.call(null,v,i__16420);
var len__16422 = arr__16421.length;
var init__16426 = (function (){var j__16423 = 0;
var init__16424 = (step_init__16419[1]);
while(true){
if((j__16423 < len__16422))
{var init__16425 = f.call(null,init__16424,(j__16423 + i__16420),(arr__16421[j__16423]));
if(cljs.core.reduced_QMARK_.call(null,init__16425))
{return init__16425;
} else
{{
var G__16458 = (j__16423 + 1);
var G__16459 = init__16425;
j__16423 = G__16458;
init__16424 = G__16459;
continue;
}
}
} else
{(step_init__16419[0] = len__16422);
(step_init__16419[1] = init__16424);
return init__16424;
}
break;
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__16426))
{return cljs.core.deref.call(null,init__16426);
} else
{{
var G__16460 = (i__16420 + (step_init__16419[0]));
i__16420 = G__16460;
continue;
}
}
} else
{return (step_init__16419[1]);
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__16427 = this;
if(((this__16427.cnt - cljs.core.tail_off.call(null,coll)) < 32))
{var new_tail__16428 = this__16427.tail.slice();
new_tail__16428.push(o);
return (new cljs.core.PersistentVector(this__16427.meta,(this__16427.cnt + 1),this__16427.shift,this__16427.root,new_tail__16428,null));
} else
{var root_overflow_QMARK___16429 = ((this__16427.cnt >>> 5) > (1 << this__16427.shift));
var new_shift__16430 = ((root_overflow_QMARK___16429)?(this__16427.shift + 5):this__16427.shift);
var new_root__16432 = ((root_overflow_QMARK___16429)?(function (){var n_r__16431 = cljs.core.pv_fresh_node.call(null,null);
cljs.core.pv_aset.call(null,n_r__16431,0,this__16427.root);
cljs.core.pv_aset.call(null,n_r__16431,1,cljs.core.new_path.call(null,null,this__16427.shift,(new cljs.core.VectorNode(null,this__16427.tail))));
return n_r__16431;
})():cljs.core.push_tail.call(null,coll,this__16427.shift,this__16427.root,(new cljs.core.VectorNode(null,this__16427.tail))));
return (new cljs.core.PersistentVector(this__16427.meta,(this__16427.cnt + 1),new_shift__16430,new_root__16432,[o],null));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__16433 = this;
if((this__16433.cnt > 0))
{return (new cljs.core.RSeq(coll,(this__16433.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var this__16434 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var this__16435 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,1);
});
cljs.core.PersistentVector.prototype.toString = (function (){
var this__16436 = this;
var this__16437 = this;
return cljs.core.pr_str.call(null,this__16437);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__16438 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__16439 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__16440 = this;
if((this__16440.cnt === 0))
{return null;
} else
{return cljs.core.chunked_seq.call(null,coll,0,0);
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__16441 = this;
return this__16441.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__16442 = this;
if((this__16442.cnt > 0))
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,(this__16442.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__16443 = this;
if((this__16443.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__16443.cnt))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__16443.meta);
} else
{if((1 < (this__16443.cnt - cljs.core.tail_off.call(null,coll))))
{return (new cljs.core.PersistentVector(this__16443.meta,(this__16443.cnt - 1),this__16443.shift,this__16443.root,this__16443.tail.slice(0,-1),null));
} else
{if("\uFDD0'else")
{var new_tail__16444 = cljs.core.array_for.call(null,coll,(this__16443.cnt - 2));
var nr__16445 = cljs.core.pop_tail.call(null,coll,this__16443.shift,this__16443.root);
var new_root__16446 = (((nr__16445 == null))?cljs.core.PersistentVector.EMPTY_NODE:nr__16445);
var cnt_1__16447 = (this__16443.cnt - 1);
if((function (){var and__3822__auto____16448 = (5 < this__16443.shift);
if(and__3822__auto____16448)
{return (cljs.core.pv_aget.call(null,new_root__16446,1) == null);
} else
{return and__3822__auto____16448;
}
})())
{return (new cljs.core.PersistentVector(this__16443.meta,cnt_1__16447,(this__16443.shift - 5),cljs.core.pv_aget.call(null,new_root__16446,0),new_tail__16444,null));
} else
{return (new cljs.core.PersistentVector(this__16443.meta,cnt_1__16447,this__16443.shift,new_root__16446,new_tail__16444,null));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__16449 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__16450 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__16451 = this;
return (new cljs.core.PersistentVector(meta,this__16451.cnt,this__16451.shift,this__16451.root,this__16451.tail,this__16451.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__16452 = this;
return this__16452.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__16453 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__16454 = this;
if((function (){var and__3822__auto____16455 = (0 <= n);
if(and__3822__auto____16455)
{return (n < this__16454.cnt);
} else
{return and__3822__auto____16455;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__16456 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__16456.meta);
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.pv_fresh_node.call(null,null);
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[],0));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){
var l__16461 = xs.length;
var xs__16462 = (((no_clone === true))?xs:xs.slice());
if((l__16461 < 32))
{return (new cljs.core.PersistentVector(null,l__16461,5,cljs.core.PersistentVector.EMPTY_NODE,xs__16462,null));
} else
{var node__16463 = xs__16462.slice(0,32);
var v__16464 = (new cljs.core.PersistentVector(null,32,5,cljs.core.PersistentVector.EMPTY_NODE,node__16463,null));
var i__16465 = 32;
var out__16466 = cljs.core._as_transient.call(null,v__16464);
while(true){
if((i__16465 < l__16461))
{{
var G__16467 = (i__16465 + 1);
var G__16468 = cljs.core.conj_BANG_.call(null,out__16466,(xs__16462[i__16465]));
i__16465 = G__16467;
out__16466 = G__16468;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__16466);
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
vector.cljs$lang$applyTo = (function (arglist__16469){
var args = cljs.core.seq(arglist__16469);;
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
cljs.core.ChunkedSeq.cljs$lang$ctorPrSeq = (function (this__2459__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedSeq");
});
cljs.core.ChunkedSeq.cljs$lang$ctorPrWriter = (function (this__2459__auto__,writer__2460__auto__){
return cljs.core._write.call(null,writer__2460__auto__,"cljs.core/ChunkedSeq");
});
cljs.core.ChunkedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__16470 = this;
var h__2340__auto____16471 = this__16470.__hash;
if(!((h__2340__auto____16471 == null)))
{return h__2340__auto____16471;
} else
{var h__2340__auto____16472 = cljs.core.hash_coll.call(null,coll);
this__16470.__hash = h__2340__auto____16472;
return h__2340__auto____16472;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__16473 = this;
if(((this__16473.off + 1) < this__16473.node.length))
{var s__16474 = cljs.core.chunked_seq.call(null,this__16473.vec,this__16473.node,this__16473.i,(this__16473.off + 1));
if((s__16474 == null))
{return null;
} else
{return s__16474;
}
} else
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__16475 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__16476 = this;
return coll;
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__16477 = this;
return (this__16477.node[this__16477.off]);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__16478 = this;
if(((this__16478.off + 1) < this__16478.node.length))
{var s__16479 = cljs.core.chunked_seq.call(null,this__16478.vec,this__16478.node,this__16478.i,(this__16478.off + 1));
if((s__16479 == null))
{return cljs.core.List.EMPTY;
} else
{return s__16479;
}
} else
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__16480 = this;
var l__16481 = this__16480.node.length;
var s__16482 = ((((this__16480.i + l__16481) < cljs.core._count.call(null,this__16480.vec)))?cljs.core.chunked_seq.call(null,this__16480.vec,(this__16480.i + l__16481),0):null);
if((s__16482 == null))
{return null;
} else
{return s__16482;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__16483 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__16484 = this;
return cljs.core.chunked_seq.call(null,this__16484.vec,this__16484.node,this__16484.i,this__16484.off,m);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_meta$arity$1 = (function (coll){
var this__16485 = this;
return this__16485.meta;
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__16486 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__16486.meta);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__16487 = this;
return cljs.core.array_chunk.call(null,this__16487.node,this__16487.off);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__16488 = this;
var l__16489 = this__16488.node.length;
var s__16490 = ((((this__16488.i + l__16489) < cljs.core._count.call(null,this__16488.vec)))?cljs.core.chunked_seq.call(null,this__16488.vec,(this__16488.i + l__16489),0):null);
if((s__16490 == null))
{return cljs.core.List.EMPTY;
} else
{return s__16490;
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
cljs.core.Subvec.cljs$lang$ctorPrSeq = (function (this__2459__auto__){
return cljs.core.list.call(null,"cljs.core/Subvec");
});
cljs.core.Subvec.cljs$lang$ctorPrWriter = (function (this__2459__auto__,writer__2460__auto__){
return cljs.core._write.call(null,writer__2460__auto__,"cljs.core/Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__16493 = this;
var h__2340__auto____16494 = this__16493.__hash;
if(!((h__2340__auto____16494 == null)))
{return h__2340__auto____16494;
} else
{var h__2340__auto____16495 = cljs.core.hash_coll.call(null,coll);
this__16493.__hash = h__2340__auto____16495;
return h__2340__auto____16495;
}
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__16496 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__16497 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var this__16498 = this;
var v_pos__16499 = (this__16498.start + key);
return (new cljs.core.Subvec(this__16498.meta,cljs.core._assoc.call(null,this__16498.v,v_pos__16499,val),this__16498.start,((this__16498.end > (v_pos__16499 + 1)) ? this__16498.end : (v_pos__16499 + 1)),null));
});
cljs.core.Subvec.prototype.call = (function() {
var G__16525 = null;
var G__16525__2 = (function (this_sym16500,k){
var this__16502 = this;
var this_sym16500__16503 = this;
var coll__16504 = this_sym16500__16503;
return coll__16504.cljs$core$ILookup$_lookup$arity$2(coll__16504,k);
});
var G__16525__3 = (function (this_sym16501,k,not_found){
var this__16502 = this;
var this_sym16501__16505 = this;
var coll__16506 = this_sym16501__16505;
return coll__16506.cljs$core$ILookup$_lookup$arity$3(coll__16506,k,not_found);
});
G__16525 = function(this_sym16501,k,not_found){
switch(arguments.length){
case 2:
return G__16525__2.call(this,this_sym16501,k);
case 3:
return G__16525__3.call(this,this_sym16501,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16525;
})()
;
cljs.core.Subvec.prototype.apply = (function (this_sym16491,args16492){
var this__16507 = this;
return this_sym16491.call.apply(this_sym16491,[this_sym16491].concat(args16492.slice()));
});
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__16508 = this;
return (new cljs.core.Subvec(this__16508.meta,cljs.core._assoc_n.call(null,this__16508.v,this__16508.end,o),this__16508.start,(this__16508.end + 1),null));
});
cljs.core.Subvec.prototype.toString = (function (){
var this__16509 = this;
var this__16510 = this;
return cljs.core.pr_str.call(null,this__16510);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__16511 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__16512 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__16513 = this;
var subvec_seq__16514 = (function subvec_seq(i){
if((i === this__16513.end))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__16513.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}),null)));
}
});
return subvec_seq__16514.call(null,this__16513.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__16515 = this;
return (this__16515.end - this__16515.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__16516 = this;
return cljs.core._nth.call(null,this__16516.v,(this__16516.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__16517 = this;
if((this__16517.start === this__16517.end))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__16517.meta,this__16517.v,this__16517.start,(this__16517.end - 1),null));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__16518 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__16519 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__16520 = this;
return (new cljs.core.Subvec(meta,this__16520.v,this__16520.start,this__16520.end,this__16520.__hash));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__16521 = this;
return this__16521.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__16522 = this;
return cljs.core._nth.call(null,this__16522.v,(this__16522.start + n));
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__16523 = this;
return cljs.core._nth.call(null,this__16523.v,(this__16523.start + n),not_found);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__16524 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__16524.meta);
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
var ret__16527 = cljs.core.make_array.call(null,32);
cljs.core.array_copy.call(null,tl,0,ret__16527,0,tl.length);
return ret__16527;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret__16531 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,parent);
var subidx__16532 = (((tv.cnt - 1) >>> level) & 31);
cljs.core.pv_aset.call(null,ret__16531,subidx__16532,(((level === 5))?tail_node:(function (){var child__16533 = cljs.core.pv_aget.call(null,ret__16531,subidx__16532);
if(!((child__16533 == null)))
{return tv_push_tail.call(null,tv,(level - 5),child__16533,tail_node);
} else
{return cljs.core.new_path.call(null,tv.root.edit,(level - 5),tail_node);
}
})()));
return ret__16531;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__16538 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,node);
var subidx__16539 = (((tv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__16540 = tv_pop_tail.call(null,tv,(level - 5),cljs.core.pv_aget.call(null,node__16538,subidx__16539));
if((function (){var and__3822__auto____16541 = (new_child__16540 == null);
if(and__3822__auto____16541)
{return (subidx__16539 === 0);
} else
{return and__3822__auto____16541;
}
})())
{return null;
} else
{cljs.core.pv_aset.call(null,node__16538,subidx__16539,new_child__16540);
return node__16538;
}
} else
{if((subidx__16539 === 0))
{return null;
} else
{if("\uFDD0'else")
{cljs.core.pv_aset.call(null,node__16538,subidx__16539,null);
return node__16538;
} else
{return null;
}
}
}
});
cljs.core.editable_array_for = (function editable_array_for(tv,i){
if((function (){var and__3822__auto____16546 = (0 <= i);
if(and__3822__auto____16546)
{return (i < tv.cnt);
} else
{return and__3822__auto____16546;
}
})())
{if((i >= cljs.core.tail_off.call(null,tv)))
{return tv.tail;
} else
{var root__16547 = tv.root;
var node__16548 = root__16547;
var level__16549 = tv.shift;
while(true){
if((level__16549 > 0))
{{
var G__16550 = cljs.core.tv_ensure_editable.call(null,root__16547.edit,cljs.core.pv_aget.call(null,node__16548,((i >>> level__16549) & 31)));
var G__16551 = (level__16549 - 5);
node__16548 = G__16550;
level__16549 = G__16551;
continue;
}
} else
{return node__16548.arr;
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
cljs.core.TransientVector.cljs$lang$ctorPrSeq = (function (this__2459__auto__){
return cljs.core.list.call(null,"cljs.core/TransientVector");
});
cljs.core.TransientVector.cljs$lang$ctorPrWriter = (function (this__2459__auto__,writer__2460__auto__){
return cljs.core._write.call(null,writer__2460__auto__,"cljs.core/TransientVector");
});
cljs.core.TransientVector.prototype.call = (function() {
var G__16591 = null;
var G__16591__2 = (function (this_sym16554,k){
var this__16556 = this;
var this_sym16554__16557 = this;
var coll__16558 = this_sym16554__16557;
return coll__16558.cljs$core$ILookup$_lookup$arity$2(coll__16558,k);
});
var G__16591__3 = (function (this_sym16555,k,not_found){
var this__16556 = this;
var this_sym16555__16559 = this;
var coll__16560 = this_sym16555__16559;
return coll__16560.cljs$core$ILookup$_lookup$arity$3(coll__16560,k,not_found);
});
G__16591 = function(this_sym16555,k,not_found){
switch(arguments.length){
case 2:
return G__16591__2.call(this,this_sym16555,k);
case 3:
return G__16591__3.call(this,this_sym16555,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16591;
})()
;
cljs.core.TransientVector.prototype.apply = (function (this_sym16552,args16553){
var this__16561 = this;
return this_sym16552.call.apply(this_sym16552,[this_sym16552].concat(args16553.slice()));
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__16562 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__16563 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__16564 = this;
if(this__16564.root.edit)
{return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__16565 = this;
if((function (){var and__3822__auto____16566 = (0 <= n);
if(and__3822__auto____16566)
{return (n < this__16565.cnt);
} else
{return and__3822__auto____16566;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__16567 = this;
if(this__16567.root.edit)
{return this__16567.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var this__16568 = this;
if(this__16568.root.edit)
{if((function (){var and__3822__auto____16569 = (0 <= n);
if(and__3822__auto____16569)
{return (n < this__16568.cnt);
} else
{return and__3822__auto____16569;
}
})())
{if((cljs.core.tail_off.call(null,tcoll) <= n))
{(this__16568.tail[(n & 31)] = val);
return tcoll;
} else
{var new_root__16574 = (function go(level,node){
var node__16572 = cljs.core.tv_ensure_editable.call(null,this__16568.root.edit,node);
if((level === 0))
{cljs.core.pv_aset.call(null,node__16572,(n & 31),val);
return node__16572;
} else
{var subidx__16573 = ((n >>> level) & 31);
cljs.core.pv_aset.call(null,node__16572,subidx__16573,go.call(null,(level - 5),cljs.core.pv_aget.call(null,node__16572,subidx__16573)));
return node__16572;
}
}).call(null,this__16568.shift,this__16568.root);
this__16568.root = new_root__16574;
return tcoll;
}
} else
{if((n === this__16568.cnt))
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(this__16568.cnt)].join('')));
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
var this__16575 = this;
if(this__16575.root.edit)
{if((this__16575.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__16575.cnt))
{this__16575.cnt = 0;
return tcoll;
} else
{if((((this__16575.cnt - 1) & 31) > 0))
{this__16575.cnt = (this__16575.cnt - 1);
return tcoll;
} else
{if("\uFDD0'else")
{var new_tail__16576 = cljs.core.editable_array_for.call(null,tcoll,(this__16575.cnt - 2));
var new_root__16578 = (function (){var nr__16577 = cljs.core.tv_pop_tail.call(null,tcoll,this__16575.shift,this__16575.root);
if(!((nr__16577 == null)))
{return nr__16577;
} else
{return (new cljs.core.VectorNode(this__16575.root.edit,cljs.core.make_array.call(null,32)));
}
})();
if((function (){var and__3822__auto____16579 = (5 < this__16575.shift);
if(and__3822__auto____16579)
{return (cljs.core.pv_aget.call(null,new_root__16578,1) == null);
} else
{return and__3822__auto____16579;
}
})())
{var new_root__16580 = cljs.core.tv_ensure_editable.call(null,this__16575.root.edit,cljs.core.pv_aget.call(null,new_root__16578,0));
this__16575.root = new_root__16580;
this__16575.shift = (this__16575.shift - 5);
this__16575.cnt = (this__16575.cnt - 1);
this__16575.tail = new_tail__16576;
return tcoll;
} else
{this__16575.root = new_root__16578;
this__16575.cnt = (this__16575.cnt - 1);
this__16575.tail = new_tail__16576;
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
var this__16581 = this;
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,key,val);
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__16582 = this;
if(this__16582.root.edit)
{if(((this__16582.cnt - cljs.core.tail_off.call(null,tcoll)) < 32))
{(this__16582.tail[(this__16582.cnt & 31)] = o);
this__16582.cnt = (this__16582.cnt + 1);
return tcoll;
} else
{var tail_node__16583 = (new cljs.core.VectorNode(this__16582.root.edit,this__16582.tail));
var new_tail__16584 = cljs.core.make_array.call(null,32);
(new_tail__16584[0] = o);
this__16582.tail = new_tail__16584;
if(((this__16582.cnt >>> 5) > (1 << this__16582.shift)))
{var new_root_array__16585 = cljs.core.make_array.call(null,32);
var new_shift__16586 = (this__16582.shift + 5);
(new_root_array__16585[0] = this__16582.root);
(new_root_array__16585[1] = cljs.core.new_path.call(null,this__16582.root.edit,this__16582.shift,tail_node__16583));
this__16582.root = (new cljs.core.VectorNode(this__16582.root.edit,new_root_array__16585));
this__16582.shift = new_shift__16586;
this__16582.cnt = (this__16582.cnt + 1);
return tcoll;
} else
{var new_root__16587 = cljs.core.tv_push_tail.call(null,tcoll,this__16582.shift,this__16582.root,tail_node__16583);
this__16582.root = new_root__16587;
this__16582.cnt = (this__16582.cnt + 1);
return tcoll;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__16588 = this;
if(this__16588.root.edit)
{this__16588.root.edit = null;
var len__16589 = (this__16588.cnt - cljs.core.tail_off.call(null,tcoll));
var trimmed_tail__16590 = cljs.core.make_array.call(null,len__16589);
cljs.core.array_copy.call(null,this__16588.tail,0,trimmed_tail__16590,0,len__16589);
return (new cljs.core.PersistentVector(null,this__16588.cnt,this__16588.shift,this__16588.root,trimmed_tail__16590,null));
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
cljs.core.PersistentQueueSeq.cljs$lang$ctorPrSeq = (function (this__2459__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.cljs$lang$ctorPrWriter = (function (this__2459__auto__,writer__2460__auto__){
return cljs.core._write.call(null,writer__2460__auto__,"cljs.core/PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__16592 = this;
var h__2340__auto____16593 = this__16592.__hash;
if(!((h__2340__auto____16593 == null)))
{return h__2340__auto____16593;
} else
{var h__2340__auto____16594 = cljs.core.hash_coll.call(null,coll);
this__16592.__hash = h__2340__auto____16594;
return h__2340__auto____16594;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__16595 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var this__16596 = this;
var this__16597 = this;
return cljs.core.pr_str.call(null,this__16597);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__16598 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__16599 = this;
return cljs.core._first.call(null,this__16599.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__16600 = this;
var temp__3971__auto____16601 = cljs.core.next.call(null,this__16600.front);
if(temp__3971__auto____16601)
{var f1__16602 = temp__3971__auto____16601;
return (new cljs.core.PersistentQueueSeq(this__16600.meta,f1__16602,this__16600.rear,null));
} else
{if((this__16600.rear == null))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__16600.meta,this__16600.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__16603 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__16604 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__16604.front,this__16604.rear,this__16604.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__16605 = this;
return this__16605.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__16606 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__16606.meta);
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
cljs.core.PersistentQueue.cljs$lang$ctorPrSeq = (function (this__2459__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueue");
});
cljs.core.PersistentQueue.cljs$lang$ctorPrWriter = (function (this__2459__auto__,writer__2460__auto__){
return cljs.core._write.call(null,writer__2460__auto__,"cljs.core/PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__16607 = this;
var h__2340__auto____16608 = this__16607.__hash;
if(!((h__2340__auto____16608 == null)))
{return h__2340__auto____16608;
} else
{var h__2340__auto____16609 = cljs.core.hash_coll.call(null,coll);
this__16607.__hash = h__2340__auto____16609;
return h__2340__auto____16609;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__16610 = this;
if(cljs.core.truth_(this__16610.front))
{return (new cljs.core.PersistentQueue(this__16610.meta,(this__16610.count + 1),this__16610.front,cljs.core.conj.call(null,(function (){var or__3824__auto____16611 = this__16610.rear;
if(cljs.core.truth_(or__3824__auto____16611))
{return or__3824__auto____16611;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(this__16610.meta,(this__16610.count + 1),cljs.core.conj.call(null,this__16610.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});
cljs.core.PersistentQueue.prototype.toString = (function (){
var this__16612 = this;
var this__16613 = this;
return cljs.core.pr_str.call(null,this__16613);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__16614 = this;
var rear__16615 = cljs.core.seq.call(null,this__16614.rear);
if(cljs.core.truth_((function (){var or__3824__auto____16616 = this__16614.front;
if(cljs.core.truth_(or__3824__auto____16616))
{return or__3824__auto____16616;
} else
{return rear__16615;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__16614.front,cljs.core.seq.call(null,rear__16615),null));
} else
{return null;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__16617 = this;
return this__16617.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__16618 = this;
return cljs.core._first.call(null,this__16618.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__16619 = this;
if(cljs.core.truth_(this__16619.front))
{var temp__3971__auto____16620 = cljs.core.next.call(null,this__16619.front);
if(temp__3971__auto____16620)
{var f1__16621 = temp__3971__auto____16620;
return (new cljs.core.PersistentQueue(this__16619.meta,(this__16619.count - 1),f1__16621,this__16619.rear,null));
} else
{return (new cljs.core.PersistentQueue(this__16619.meta,(this__16619.count - 1),cljs.core.seq.call(null,this__16619.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__16622 = this;
return cljs.core.first.call(null,this__16622.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__16623 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__16624 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__16625 = this;
return (new cljs.core.PersistentQueue(meta,this__16625.count,this__16625.front,this__16625.rear,this__16625.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__16626 = this;
return this__16626.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__16627 = this;
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
cljs.core.NeverEquiv.cljs$lang$ctorPrSeq = (function (this__2459__auto__){
return cljs.core.list.call(null,"cljs.core/NeverEquiv");
});
cljs.core.NeverEquiv.cljs$lang$ctorPrWriter = (function (this__2459__auto__,writer__2460__auto__){
return cljs.core._write.call(null,writer__2460__auto__,"cljs.core/NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__16628 = this;
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
var len__16631 = array.length;
var i__16632 = 0;
while(true){
if((i__16632 < len__16631))
{if((k === (array[i__16632])))
{return i__16632;
} else
{{
var G__16633 = (i__16632 + incr);
i__16632 = G__16633;
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
var a__16636 = cljs.core.hash.call(null,a);
var b__16637 = cljs.core.hash.call(null,b);
if((a__16636 < b__16637))
{return -1;
} else
{if((a__16636 > b__16637))
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
var ks__16645 = m.keys;
var len__16646 = ks__16645.length;
var so__16647 = m.strobj;
var out__16648 = cljs.core.with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,cljs.core.meta.call(null,m));
var i__16649 = 0;
var out__16650 = cljs.core.transient$.call(null,out__16648);
while(true){
if((i__16649 < len__16646))
{var k__16651 = (ks__16645[i__16649]);
{
var G__16652 = (i__16649 + 1);
var G__16653 = cljs.core.assoc_BANG_.call(null,out__16650,k__16651,(so__16647[k__16651]));
i__16649 = G__16652;
out__16650 = G__16653;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,out__16650,k,v));
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){
var new_obj__16659 = {};
var l__16660 = ks.length;
var i__16661 = 0;
while(true){
if((i__16661 < l__16660))
{var k__16662 = (ks[i__16661]);
(new_obj__16659[k__16662] = (obj[k__16662]));
{
var G__16663 = (i__16661 + 1);
i__16661 = G__16663;
continue;
}
} else
{}
break;
}
return new_obj__16659;
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
cljs.core.ObjMap.cljs$lang$ctorPrSeq = (function (this__2459__auto__){
return cljs.core.list.call(null,"cljs.core/ObjMap");
});
cljs.core.ObjMap.cljs$lang$ctorPrWriter = (function (this__2459__auto__,writer__2460__auto__){
return cljs.core._write.call(null,writer__2460__auto__,"cljs.core/ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__16666 = this;
return cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null),coll));
});
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__16667 = this;
var h__2340__auto____16668 = this__16667.__hash;
if(!((h__2340__auto____16668 == null)))
{return h__2340__auto____16668;
} else
{var h__2340__auto____16669 = cljs.core.hash_imap.call(null,coll);
this__16667.__hash = h__2340__auto____16669;
return h__2340__auto____16669;
}
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__16670 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__16671 = this;
if((function (){var and__3822__auto____16672 = goog.isString(k);
if(and__3822__auto____16672)
{return !((cljs.core.scan_array.call(null,1,k,this__16671.keys) == null));
} else
{return and__3822__auto____16672;
}
})())
{return (this__16671.strobj[k]);
} else
{return not_found;
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__16673 = this;
if(goog.isString(k))
{if((function (){var or__3824__auto____16674 = (this__16673.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD);
if(or__3824__auto____16674)
{return or__3824__auto____16674;
} else
{return (this__16673.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD);
}
})())
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
} else
{if(!((cljs.core.scan_array.call(null,1,k,this__16673.keys) == null)))
{var new_strobj__16675 = cljs.core.obj_clone.call(null,this__16673.strobj,this__16673.keys);
(new_strobj__16675[k] = v);
return (new cljs.core.ObjMap(this__16673.meta,this__16673.keys,new_strobj__16675,(this__16673.update_count + 1),null));
} else
{var new_strobj__16676 = cljs.core.obj_clone.call(null,this__16673.strobj,this__16673.keys);
var new_keys__16677 = this__16673.keys.slice();
(new_strobj__16676[k] = v);
new_keys__16677.push(k);
return (new cljs.core.ObjMap(this__16673.meta,new_keys__16677,new_strobj__16676,(this__16673.update_count + 1),null));
}
}
} else
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__16678 = this;
if((function (){var and__3822__auto____16679 = goog.isString(k);
if(and__3822__auto____16679)
{return !((cljs.core.scan_array.call(null,1,k,this__16678.keys) == null));
} else
{return and__3822__auto____16679;
}
})())
{return true;
} else
{return false;
}
});
cljs.core.ObjMap.prototype.call = (function() {
var G__16701 = null;
var G__16701__2 = (function (this_sym16680,k){
var this__16682 = this;
var this_sym16680__16683 = this;
var coll__16684 = this_sym16680__16683;
return coll__16684.cljs$core$ILookup$_lookup$arity$2(coll__16684,k);
});
var G__16701__3 = (function (this_sym16681,k,not_found){
var this__16682 = this;
var this_sym16681__16685 = this;
var coll__16686 = this_sym16681__16685;
return coll__16686.cljs$core$ILookup$_lookup$arity$3(coll__16686,k,not_found);
});
G__16701 = function(this_sym16681,k,not_found){
switch(arguments.length){
case 2:
return G__16701__2.call(this,this_sym16681,k);
case 3:
return G__16701__3.call(this,this_sym16681,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16701;
})()
;
cljs.core.ObjMap.prototype.apply = (function (this_sym16664,args16665){
var this__16687 = this;
return this_sym16664.call.apply(this_sym16664,[this_sym16664].concat(args16665.slice()));
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__16688 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.toString = (function (){
var this__16689 = this;
var this__16690 = this;
return cljs.core.pr_str.call(null,this__16690);
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__16691 = this;
if((this__16691.keys.length > 0))
{return cljs.core.map.call(null,(function (p1__16654_SHARP_){
return cljs.core.vector.call(null,p1__16654_SHARP_,(this__16691.strobj[p1__16654_SHARP_]));
}),this__16691.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__16692 = this;
return this__16692.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__16693 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__16694 = this;
return (new cljs.core.ObjMap(meta,this__16694.keys,this__16694.strobj,this__16694.update_count,this__16694.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__16695 = this;
return this__16695.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__16696 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__16696.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__16697 = this;
if((function (){var and__3822__auto____16698 = goog.isString(k);
if(and__3822__auto____16698)
{return !((cljs.core.scan_array.call(null,1,k,this__16697.keys) == null));
} else
{return and__3822__auto____16698;
}
})())
{var new_keys__16699 = this__16697.keys.slice();
var new_strobj__16700 = cljs.core.obj_clone.call(null,this__16697.strobj,this__16697.keys);
new_keys__16699.splice(cljs.core.scan_array.call(null,1,k,new_keys__16699),1);
cljs.core.js_delete.call(null,new_strobj__16700,k);
return (new cljs.core.ObjMap(this__16697.meta,new_keys__16699,new_strobj__16700,(this__16697.update_count + 1),null));
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
cljs.core.HashMap.cljs$lang$ctorPrSeq = (function (this__2459__auto__){
return cljs.core.list.call(null,"cljs.core/HashMap");
});
cljs.core.HashMap.cljs$lang$ctorPrWriter = (function (this__2459__auto__,writer__2460__auto__){
return cljs.core._write.call(null,writer__2460__auto__,"cljs.core/HashMap");
});
cljs.core.HashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__16705 = this;
var h__2340__auto____16706 = this__16705.__hash;
if(!((h__2340__auto____16706 == null)))
{return h__2340__auto____16706;
} else
{var h__2340__auto____16707 = cljs.core.hash_imap.call(null,coll);
this__16705.__hash = h__2340__auto____16707;
return h__2340__auto____16707;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__16708 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__16709 = this;
var bucket__16710 = (this__16709.hashobj[cljs.core.hash.call(null,k)]);
var i__16711 = (cljs.core.truth_(bucket__16710)?cljs.core.scan_array.call(null,2,k,bucket__16710):null);
if(cljs.core.truth_(i__16711))
{return (bucket__16710[(i__16711 + 1)]);
} else
{return not_found;
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__16712 = this;
var h__16713 = cljs.core.hash.call(null,k);
var bucket__16714 = (this__16712.hashobj[h__16713]);
if(cljs.core.truth_(bucket__16714))
{var new_bucket__16715 = bucket__16714.slice();
var new_hashobj__16716 = goog.object.clone(this__16712.hashobj);
(new_hashobj__16716[h__16713] = new_bucket__16715);
var temp__3971__auto____16717 = cljs.core.scan_array.call(null,2,k,new_bucket__16715);
if(cljs.core.truth_(temp__3971__auto____16717))
{var i__16718 = temp__3971__auto____16717;
(new_bucket__16715[(i__16718 + 1)] = v);
return (new cljs.core.HashMap(this__16712.meta,this__16712.count,new_hashobj__16716,null));
} else
{new_bucket__16715.push(k,v);
return (new cljs.core.HashMap(this__16712.meta,(this__16712.count + 1),new_hashobj__16716,null));
}
} else
{var new_hashobj__16719 = goog.object.clone(this__16712.hashobj);
(new_hashobj__16719[h__16713] = [k,v]);
return (new cljs.core.HashMap(this__16712.meta,(this__16712.count + 1),new_hashobj__16719,null));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__16720 = this;
var bucket__16721 = (this__16720.hashobj[cljs.core.hash.call(null,k)]);
var i__16722 = (cljs.core.truth_(bucket__16721)?cljs.core.scan_array.call(null,2,k,bucket__16721):null);
if(cljs.core.truth_(i__16722))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__16747 = null;
var G__16747__2 = (function (this_sym16723,k){
var this__16725 = this;
var this_sym16723__16726 = this;
var coll__16727 = this_sym16723__16726;
return coll__16727.cljs$core$ILookup$_lookup$arity$2(coll__16727,k);
});
var G__16747__3 = (function (this_sym16724,k,not_found){
var this__16725 = this;
var this_sym16724__16728 = this;
var coll__16729 = this_sym16724__16728;
return coll__16729.cljs$core$ILookup$_lookup$arity$3(coll__16729,k,not_found);
});
G__16747 = function(this_sym16724,k,not_found){
switch(arguments.length){
case 2:
return G__16747__2.call(this,this_sym16724,k);
case 3:
return G__16747__3.call(this,this_sym16724,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16747;
})()
;
cljs.core.HashMap.prototype.apply = (function (this_sym16703,args16704){
var this__16730 = this;
return this_sym16703.call.apply(this_sym16703,[this_sym16703].concat(args16704.slice()));
});
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__16731 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.toString = (function (){
var this__16732 = this;
var this__16733 = this;
return cljs.core.pr_str.call(null,this__16733);
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__16734 = this;
if((this__16734.count > 0))
{var hashes__16735 = cljs.core.js_keys.call(null,this__16734.hashobj).sort();
return cljs.core.mapcat.call(null,(function (p1__16702_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__16734.hashobj[p1__16702_SHARP_])));
}),hashes__16735);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__16736 = this;
return this__16736.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__16737 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__16738 = this;
return (new cljs.core.HashMap(meta,this__16738.count,this__16738.hashobj,this__16738.__hash));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__16739 = this;
return this__16739.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__16740 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__16740.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__16741 = this;
var h__16742 = cljs.core.hash.call(null,k);
var bucket__16743 = (this__16741.hashobj[h__16742]);
var i__16744 = (cljs.core.truth_(bucket__16743)?cljs.core.scan_array.call(null,2,k,bucket__16743):null);
if(cljs.core.not.call(null,i__16744))
{return coll;
} else
{var new_hashobj__16745 = goog.object.clone(this__16741.hashobj);
if((3 > bucket__16743.length))
{cljs.core.js_delete.call(null,new_hashobj__16745,h__16742);
} else
{var new_bucket__16746 = bucket__16743.slice();
new_bucket__16746.splice(i__16744,2);
(new_hashobj__16745[h__16742] = new_bucket__16746);
}
return (new cljs.core.HashMap(this__16741.meta,(this__16741.count - 1),new_hashobj__16745,null));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,{},0));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__16748 = ks.length;
var i__16749 = 0;
var out__16750 = cljs.core.HashMap.EMPTY;
while(true){
if((i__16749 < len__16748))
{{
var G__16751 = (i__16749 + 1);
var G__16752 = cljs.core.assoc.call(null,out__16750,(ks[i__16749]),(vs[i__16749]));
i__16749 = G__16751;
out__16750 = G__16752;
continue;
}
} else
{return out__16750;
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr__16756 = m.arr;
var len__16757 = arr__16756.length;
var i__16758 = 0;
while(true){
if((len__16757 <= i__16758))
{return -1;
} else
{if(cljs.core._EQ_.call(null,(arr__16756[i__16758]),k))
{return i__16758;
} else
{if("\uFDD0'else")
{{
var G__16759 = (i__16758 + 2);
i__16758 = G__16759;
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
cljs.core.PersistentArrayMap.cljs$lang$ctorPrSeq = (function (this__2459__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentArrayMap");
});
cljs.core.PersistentArrayMap.cljs$lang$ctorPrWriter = (function (this__2459__auto__,writer__2460__auto__){
return cljs.core._write.call(null,writer__2460__auto__,"cljs.core/PersistentArrayMap");
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__16762 = this;
return (new cljs.core.TransientArrayMap({},this__16762.arr.length,this__16762.arr.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__16763 = this;
var h__2340__auto____16764 = this__16763.__hash;
if(!((h__2340__auto____16764 == null)))
{return h__2340__auto____16764;
} else
{var h__2340__auto____16765 = cljs.core.hash_imap.call(null,coll);
this__16763.__hash = h__2340__auto____16765;
return h__2340__auto____16765;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__16766 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__16767 = this;
var idx__16768 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__16768 === -1))
{return not_found;
} else
{return (this__16767.arr[(idx__16768 + 1)]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__16769 = this;
var idx__16770 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__16770 === -1))
{if((this__16769.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{return (new cljs.core.PersistentArrayMap(this__16769.meta,(this__16769.cnt + 1),(function (){var G__16771__16772 = this__16769.arr.slice();
G__16771__16772.push(k);
G__16771__16772.push(v);
return G__16771__16772;
})(),null));
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,coll)),k,v));
}
} else
{if((v === (this__16769.arr[(idx__16770 + 1)])))
{return coll;
} else
{if("\uFDD0'else")
{return (new cljs.core.PersistentArrayMap(this__16769.meta,this__16769.cnt,(function (){var G__16773__16774 = this__16769.arr.slice();
(G__16773__16774[(idx__16770 + 1)] = v);
return G__16773__16774;
})(),null));
} else
{return null;
}
}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__16775 = this;
return !((cljs.core.array_map_index_of.call(null,coll,k) === -1));
});
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__16807 = null;
var G__16807__2 = (function (this_sym16776,k){
var this__16778 = this;
var this_sym16776__16779 = this;
var coll__16780 = this_sym16776__16779;
return coll__16780.cljs$core$ILookup$_lookup$arity$2(coll__16780,k);
});
var G__16807__3 = (function (this_sym16777,k,not_found){
var this__16778 = this;
var this_sym16777__16781 = this;
var coll__16782 = this_sym16777__16781;
return coll__16782.cljs$core$ILookup$_lookup$arity$3(coll__16782,k,not_found);
});
G__16807 = function(this_sym16777,k,not_found){
switch(arguments.length){
case 2:
return G__16807__2.call(this,this_sym16777,k);
case 3:
return G__16807__3.call(this,this_sym16777,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16807;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (this_sym16760,args16761){
var this__16783 = this;
return this_sym16760.call.apply(this_sym16760,[this_sym16760].concat(args16761.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__16784 = this;
var len__16785 = this__16784.arr.length;
var i__16786 = 0;
var init__16787 = init;
while(true){
if((i__16786 < len__16785))
{var init__16788 = f.call(null,init__16787,(this__16784.arr[i__16786]),(this__16784.arr[(i__16786 + 1)]));
if(cljs.core.reduced_QMARK_.call(null,init__16788))
{return cljs.core.deref.call(null,init__16788);
} else
{{
var G__16808 = (i__16786 + 2);
var G__16809 = init__16788;
i__16786 = G__16808;
init__16787 = G__16809;
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
var this__16789 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var this__16790 = this;
var this__16791 = this;
return cljs.core.pr_str.call(null,this__16791);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__16792 = this;
if((this__16792.cnt > 0))
{var len__16793 = this__16792.arr.length;
var array_map_seq__16794 = (function array_map_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < len__16793))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([(this__16792.arr[i]),(this__16792.arr[(i + 1)])], true),array_map_seq.call(null,(i + 2)));
} else
{return null;
}
}),null));
});
return array_map_seq__16794.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__16795 = this;
return this__16795.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__16796 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__16797 = this;
return (new cljs.core.PersistentArrayMap(meta,this__16797.cnt,this__16797.arr,this__16797.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__16798 = this;
return this__16798.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__16799 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16799.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__16800 = this;
var idx__16801 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__16801 >= 0))
{var len__16802 = this__16800.arr.length;
var new_len__16803 = (len__16802 - 2);
if((new_len__16803 === 0))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var new_arr__16804 = cljs.core.make_array.call(null,new_len__16803);
var s__16805 = 0;
var d__16806 = 0;
while(true){
if((s__16805 >= len__16802))
{return (new cljs.core.PersistentArrayMap(this__16800.meta,(this__16800.cnt - 1),new_arr__16804,null));
} else
{if(cljs.core._EQ_.call(null,k,(this__16800.arr[s__16805])))
{{
var G__16810 = (s__16805 + 2);
var G__16811 = d__16806;
s__16805 = G__16810;
d__16806 = G__16811;
continue;
}
} else
{if("\uFDD0'else")
{(new_arr__16804[d__16806] = (this__16800.arr[s__16805]));
(new_arr__16804[(d__16806 + 1)] = (this__16800.arr[(s__16805 + 1)]));
{
var G__16812 = (s__16805 + 2);
var G__16813 = (d__16806 + 2);
s__16805 = G__16812;
d__16806 = G__16813;
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
var len__16814 = cljs.core.count.call(null,ks);
var i__16815 = 0;
var out__16816 = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i__16815 < len__16814))
{{
var G__16817 = (i__16815 + 1);
var G__16818 = cljs.core.assoc_BANG_.call(null,out__16816,(ks[i__16815]),(vs[i__16815]));
i__16815 = G__16817;
out__16816 = G__16818;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__16816);
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
cljs.core.TransientArrayMap.cljs$lang$ctorPrSeq = (function (this__2459__auto__){
return cljs.core.list.call(null,"cljs.core/TransientArrayMap");
});
cljs.core.TransientArrayMap.cljs$lang$ctorPrWriter = (function (this__2459__auto__,writer__2460__auto__){
return cljs.core._write.call(null,writer__2460__auto__,"cljs.core/TransientArrayMap");
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__16819 = this;
if(cljs.core.truth_(this__16819.editable_QMARK_))
{var idx__16820 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__16820 >= 0))
{(this__16819.arr[idx__16820] = (this__16819.arr[(this__16819.len - 2)]));
(this__16819.arr[(idx__16820 + 1)] = (this__16819.arr[(this__16819.len - 1)]));
var G__16821__16822 = this__16819.arr;
G__16821__16822.pop();
G__16821__16822.pop();
G__16821__16822;
this__16819.len = (this__16819.len - 2);
} else
{}
return tcoll;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__16823 = this;
if(cljs.core.truth_(this__16823.editable_QMARK_))
{var idx__16824 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__16824 === -1))
{if(((this__16823.len + 2) <= (2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{this__16823.len = (this__16823.len + 2);
this__16823.arr.push(key);
this__16823.arr.push(val);
return tcoll;
} else
{return cljs.core.assoc_BANG_.call(null,cljs.core.array__GT_transient_hash_map.call(null,this__16823.len,this__16823.arr),key,val);
}
} else
{if((val === (this__16823.arr[(idx__16824 + 1)])))
{return tcoll;
} else
{(this__16823.arr[(idx__16824 + 1)] = val);
return tcoll;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__16825 = this;
if(cljs.core.truth_(this__16825.editable_QMARK_))
{if((function (){var G__16826__16827 = o;
if(G__16826__16827)
{if((function (){var or__3824__auto____16828 = (G__16826__16827.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____16828)
{return or__3824__auto____16828;
} else
{return G__16826__16827.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__16826__16827.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__16826__16827);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__16826__16827);
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__16829 = cljs.core.seq.call(null,o);
var tcoll__16830 = tcoll;
while(true){
var temp__3971__auto____16831 = cljs.core.first.call(null,es__16829);
if(cljs.core.truth_(temp__3971__auto____16831))
{var e__16832 = temp__3971__auto____16831;
{
var G__16838 = cljs.core.next.call(null,es__16829);
var G__16839 = tcoll__16830.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll__16830,cljs.core.key.call(null,e__16832),cljs.core.val.call(null,e__16832));
es__16829 = G__16838;
tcoll__16830 = G__16839;
continue;
}
} else
{return tcoll__16830;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__16833 = this;
if(cljs.core.truth_(this__16833.editable_QMARK_))
{this__16833.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,this__16833.len,2),this__16833.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__16834 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__16835 = this;
if(cljs.core.truth_(this__16835.editable_QMARK_))
{var idx__16836 = cljs.core.array_map_index_of.call(null,tcoll,k);
if((idx__16836 === -1))
{return not_found;
} else
{return (this__16835.arr[(idx__16836 + 1)]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__16837 = this;
if(cljs.core.truth_(this__16837.editable_QMARK_))
{return cljs.core.quot.call(null,this__16837.len,2);
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientArrayMap;
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out__16842 = cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY);
var i__16843 = 0;
while(true){
if((i__16843 < len))
{{
var G__16844 = cljs.core.assoc_BANG_.call(null,out__16842,(arr[i__16843]),(arr[(i__16843 + 1)]));
var G__16845 = (i__16843 + 2);
out__16842 = G__16844;
i__16843 = G__16845;
continue;
}
} else
{return out__16842;
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
cljs.core.Box.cljs$lang$ctorPrSeq = (function (this__2461__auto__){
return cljs.core.list.call(null,"cljs.core/Box");
});
cljs.core.Box.cljs$lang$ctorPrWriter = (function (this__2461__auto__,writer__2462__auto__){
return cljs.core._write.call(null,writer__2462__auto__,"cljs.core/Box");
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
var G__16850__16851 = arr.slice();
(G__16850__16851[i] = a);
return G__16850__16851;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__16852__16853 = arr.slice();
(G__16852__16853[i] = a);
(G__16852__16853[j] = b);
return G__16852__16853;
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
var new_arr__16855 = cljs.core.make_array.call(null,(arr.length - 2));
cljs.core.array_copy.call(null,arr,0,new_arr__16855,0,(2 * i));
cljs.core.array_copy.call(null,arr,(2 * (i + 1)),new_arr__16855,(2 * i),(new_arr__16855.length - (2 * i)));
return new_arr__16855;
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
var editable__16858 = inode.ensure_editable(edit);
(editable__16858.arr[i] = a);
return editable__16858;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable__16859 = inode.ensure_editable(edit);
(editable__16859.arr[i] = a);
(editable__16859.arr[j] = b);
return editable__16859;
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
var len__16866 = arr.length;
var i__16867 = 0;
var init__16868 = init;
while(true){
if((i__16867 < len__16866))
{var init__16871 = (function (){var k__16869 = (arr[i__16867]);
if(!((k__16869 == null)))
{return f.call(null,init__16868,k__16869,(arr[(i__16867 + 1)]));
} else
{var node__16870 = (arr[(i__16867 + 1)]);
if(!((node__16870 == null)))
{return node__16870.kv_reduce(f,init__16868);
} else
{return init__16868;
}
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__16871))
{return cljs.core.deref.call(null,init__16871);
} else
{{
var G__16872 = (i__16867 + 2);
var G__16873 = init__16871;
i__16867 = G__16872;
init__16868 = G__16873;
continue;
}
}
} else
{return init__16868;
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
cljs.core.BitmapIndexedNode.cljs$lang$ctorPrSeq = (function (this__2459__auto__){
return cljs.core.list.call(null,"cljs.core/BitmapIndexedNode");
});
cljs.core.BitmapIndexedNode.cljs$lang$ctorPrWriter = (function (this__2459__auto__,writer__2460__auto__){
return cljs.core._write.call(null,writer__2460__auto__,"cljs.core/BitmapIndexedNode");
});
cljs.core.BitmapIndexedNode.prototype.edit_and_remove_pair = (function (e,bit,i){
var this__16874 = this;
var inode__16875 = this;
if((this__16874.bitmap === bit))
{return null;
} else
{var editable__16876 = inode__16875.ensure_editable(e);
var earr__16877 = editable__16876.arr;
var len__16878 = earr__16877.length;
editable__16876.bitmap = (bit ^ editable__16876.bitmap);
cljs.core.array_copy.call(null,earr__16877,(2 * (i + 1)),earr__16877,(2 * i),(len__16878 - (2 * (i + 1))));
(earr__16877[(len__16878 - 2)] = null);
(earr__16877[(len__16878 - 1)] = null);
return editable__16876;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__16879 = this;
var inode__16880 = this;
var bit__16881 = (1 << ((hash >>> shift) & 0x01f));
var idx__16882 = cljs.core.bitmap_indexed_node_index.call(null,this__16879.bitmap,bit__16881);
if(((this__16879.bitmap & bit__16881) === 0))
{var n__16883 = cljs.core.bit_count.call(null,this__16879.bitmap);
if(((2 * n__16883) < this__16879.arr.length))
{var editable__16884 = inode__16880.ensure_editable(edit);
var earr__16885 = editable__16884.arr;
added_leaf_QMARK_.val = true;
cljs.core.array_copy_downward.call(null,earr__16885,(2 * idx__16882),earr__16885,(2 * (idx__16882 + 1)),(2 * (n__16883 - idx__16882)));
(earr__16885[(2 * idx__16882)] = key);
(earr__16885[((2 * idx__16882) + 1)] = val);
editable__16884.bitmap = (editable__16884.bitmap | bit__16881);
return editable__16884;
} else
{if((n__16883 >= 16))
{var nodes__16886 = cljs.core.make_array.call(null,32);
var jdx__16887 = ((hash >>> shift) & 0x01f);
(nodes__16886[jdx__16887] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
var i__16888 = 0;
var j__16889 = 0;
while(true){
if((i__16888 < 32))
{if((((this__16879.bitmap >>> i__16888) & 1) === 0))
{{
var G__16942 = (i__16888 + 1);
var G__16943 = j__16889;
i__16888 = G__16942;
j__16889 = G__16943;
continue;
}
} else
{(nodes__16886[i__16888] = ((!(((this__16879.arr[j__16889]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),cljs.core.hash.call(null,(this__16879.arr[j__16889])),(this__16879.arr[j__16889]),(this__16879.arr[(j__16889 + 1)]),added_leaf_QMARK_):(this__16879.arr[(j__16889 + 1)])));
{
var G__16944 = (i__16888 + 1);
var G__16945 = (j__16889 + 2);
i__16888 = G__16944;
j__16889 = G__16945;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit,(n__16883 + 1),nodes__16886));
} else
{if("\uFDD0'else")
{var new_arr__16890 = cljs.core.make_array.call(null,(2 * (n__16883 + 4)));
cljs.core.array_copy.call(null,this__16879.arr,0,new_arr__16890,0,(2 * idx__16882));
(new_arr__16890[(2 * idx__16882)] = key);
(new_arr__16890[((2 * idx__16882) + 1)] = val);
cljs.core.array_copy.call(null,this__16879.arr,(2 * idx__16882),new_arr__16890,(2 * (idx__16882 + 1)),(2 * (n__16883 - idx__16882)));
added_leaf_QMARK_.val = true;
var editable__16891 = inode__16880.ensure_editable(edit);
editable__16891.arr = new_arr__16890;
editable__16891.bitmap = (editable__16891.bitmap | bit__16881);
return editable__16891;
} else
{return null;
}
}
}
} else
{var key_or_nil__16892 = (this__16879.arr[(2 * idx__16882)]);
var val_or_node__16893 = (this__16879.arr[((2 * idx__16882) + 1)]);
if((key_or_nil__16892 == null))
{var n__16894 = val_or_node__16893.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__16894 === val_or_node__16893))
{return inode__16880;
} else
{return cljs.core.edit_and_set.call(null,inode__16880,edit,((2 * idx__16882) + 1),n__16894);
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__16892))
{if((val === val_or_node__16893))
{return inode__16880;
} else
{return cljs.core.edit_and_set.call(null,inode__16880,edit,((2 * idx__16882) + 1),val);
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return cljs.core.edit_and_set.call(null,inode__16880,edit,(2 * idx__16882),null,((2 * idx__16882) + 1),cljs.core.create_node.call(null,edit,(shift + 5),key_or_nil__16892,val_or_node__16893,hash,key,val));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var this__16895 = this;
var inode__16896 = this;
return cljs.core.create_inode_seq.call(null,this__16895.arr);
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__16897 = this;
var inode__16898 = this;
var bit__16899 = (1 << ((hash >>> shift) & 0x01f));
if(((this__16897.bitmap & bit__16899) === 0))
{return inode__16898;
} else
{var idx__16900 = cljs.core.bitmap_indexed_node_index.call(null,this__16897.bitmap,bit__16899);
var key_or_nil__16901 = (this__16897.arr[(2 * idx__16900)]);
var val_or_node__16902 = (this__16897.arr[((2 * idx__16900) + 1)]);
if((key_or_nil__16901 == null))
{var n__16903 = val_or_node__16902.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__16903 === val_or_node__16902))
{return inode__16898;
} else
{if(!((n__16903 == null)))
{return cljs.core.edit_and_set.call(null,inode__16898,edit,((2 * idx__16900) + 1),n__16903);
} else
{if((this__16897.bitmap === bit__16899))
{return null;
} else
{if("\uFDD0'else")
{return inode__16898.edit_and_remove_pair(edit,bit__16899,idx__16900);
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__16901))
{(removed_leaf_QMARK_[0] = true);
return inode__16898.edit_and_remove_pair(edit,bit__16899,idx__16900);
} else
{if("\uFDD0'else")
{return inode__16898;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var this__16904 = this;
var inode__16905 = this;
if((e === this__16904.edit))
{return inode__16905;
} else
{var n__16906 = cljs.core.bit_count.call(null,this__16904.bitmap);
var new_arr__16907 = cljs.core.make_array.call(null,(((n__16906 < 0))?4:(2 * (n__16906 + 1))));
cljs.core.array_copy.call(null,this__16904.arr,0,new_arr__16907,0,(2 * n__16906));
return (new cljs.core.BitmapIndexedNode(e,this__16904.bitmap,new_arr__16907));
}
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var this__16908 = this;
var inode__16909 = this;
return cljs.core.inode_kv_reduce.call(null,this__16908.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__16910 = this;
var inode__16911 = this;
var bit__16912 = (1 << ((hash >>> shift) & 0x01f));
if(((this__16910.bitmap & bit__16912) === 0))
{return not_found;
} else
{var idx__16913 = cljs.core.bitmap_indexed_node_index.call(null,this__16910.bitmap,bit__16912);
var key_or_nil__16914 = (this__16910.arr[(2 * idx__16913)]);
var val_or_node__16915 = (this__16910.arr[((2 * idx__16913) + 1)]);
if((key_or_nil__16914 == null))
{return val_or_node__16915.inode_find((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__16914))
{return cljs.core.PersistentVector.fromArray([key_or_nil__16914,val_or_node__16915], true);
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
var this__16916 = this;
var inode__16917 = this;
var bit__16918 = (1 << ((hash >>> shift) & 0x01f));
if(((this__16916.bitmap & bit__16918) === 0))
{return inode__16917;
} else
{var idx__16919 = cljs.core.bitmap_indexed_node_index.call(null,this__16916.bitmap,bit__16918);
var key_or_nil__16920 = (this__16916.arr[(2 * idx__16919)]);
var val_or_node__16921 = (this__16916.arr[((2 * idx__16919) + 1)]);
if((key_or_nil__16920 == null))
{var n__16922 = val_or_node__16921.inode_without((shift + 5),hash,key);
if((n__16922 === val_or_node__16921))
{return inode__16917;
} else
{if(!((n__16922 == null)))
{return (new cljs.core.BitmapIndexedNode(null,this__16916.bitmap,cljs.core.clone_and_set.call(null,this__16916.arr,((2 * idx__16919) + 1),n__16922)));
} else
{if((this__16916.bitmap === bit__16918))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.BitmapIndexedNode(null,(this__16916.bitmap ^ bit__16918),cljs.core.remove_pair.call(null,this__16916.arr,idx__16919)));
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__16920))
{return (new cljs.core.BitmapIndexedNode(null,(this__16916.bitmap ^ bit__16918),cljs.core.remove_pair.call(null,this__16916.arr,idx__16919)));
} else
{if("\uFDD0'else")
{return inode__16917;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__16923 = this;
var inode__16924 = this;
var bit__16925 = (1 << ((hash >>> shift) & 0x01f));
var idx__16926 = cljs.core.bitmap_indexed_node_index.call(null,this__16923.bitmap,bit__16925);
if(((this__16923.bitmap & bit__16925) === 0))
{var n__16927 = cljs.core.bit_count.call(null,this__16923.bitmap);
if((n__16927 >= 16))
{var nodes__16928 = cljs.core.make_array.call(null,32);
var jdx__16929 = ((hash >>> shift) & 0x01f);
(nodes__16928[jdx__16929] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_));
var i__16930 = 0;
var j__16931 = 0;
while(true){
if((i__16930 < 32))
{if((((this__16923.bitmap >>> i__16930) & 1) === 0))
{{
var G__16946 = (i__16930 + 1);
var G__16947 = j__16931;
i__16930 = G__16946;
j__16931 = G__16947;
continue;
}
} else
{(nodes__16928[i__16930] = ((!(((this__16923.arr[j__16931]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),cljs.core.hash.call(null,(this__16923.arr[j__16931])),(this__16923.arr[j__16931]),(this__16923.arr[(j__16931 + 1)]),added_leaf_QMARK_):(this__16923.arr[(j__16931 + 1)])));
{
var G__16948 = (i__16930 + 1);
var G__16949 = (j__16931 + 2);
i__16930 = G__16948;
j__16931 = G__16949;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n__16927 + 1),nodes__16928));
} else
{var new_arr__16932 = cljs.core.make_array.call(null,(2 * (n__16927 + 1)));
cljs.core.array_copy.call(null,this__16923.arr,0,new_arr__16932,0,(2 * idx__16926));
(new_arr__16932[(2 * idx__16926)] = key);
(new_arr__16932[((2 * idx__16926) + 1)] = val);
cljs.core.array_copy.call(null,this__16923.arr,(2 * idx__16926),new_arr__16932,(2 * (idx__16926 + 1)),(2 * (n__16927 - idx__16926)));
added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,(this__16923.bitmap | bit__16925),new_arr__16932));
}
} else
{var key_or_nil__16933 = (this__16923.arr[(2 * idx__16926)]);
var val_or_node__16934 = (this__16923.arr[((2 * idx__16926) + 1)]);
if((key_or_nil__16933 == null))
{var n__16935 = val_or_node__16934.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__16935 === val_or_node__16934))
{return inode__16924;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__16923.bitmap,cljs.core.clone_and_set.call(null,this__16923.arr,((2 * idx__16926) + 1),n__16935)));
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__16933))
{if((val === val_or_node__16934))
{return inode__16924;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__16923.bitmap,cljs.core.clone_and_set.call(null,this__16923.arr,((2 * idx__16926) + 1),val)));
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,this__16923.bitmap,cljs.core.clone_and_set.call(null,this__16923.arr,(2 * idx__16926),null,((2 * idx__16926) + 1),cljs.core.create_node.call(null,(shift + 5),key_or_nil__16933,val_or_node__16934,hash,key,val))));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__16936 = this;
var inode__16937 = this;
var bit__16938 = (1 << ((hash >>> shift) & 0x01f));
if(((this__16936.bitmap & bit__16938) === 0))
{return not_found;
} else
{var idx__16939 = cljs.core.bitmap_indexed_node_index.call(null,this__16936.bitmap,bit__16938);
var key_or_nil__16940 = (this__16936.arr[(2 * idx__16939)]);
var val_or_node__16941 = (this__16936.arr[((2 * idx__16939) + 1)]);
if((key_or_nil__16940 == null))
{return val_or_node__16941.inode_lookup((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__16940))
{return val_or_node__16941;
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
var arr__16957 = array_node.arr;
var len__16958 = (2 * (array_node.cnt - 1));
var new_arr__16959 = cljs.core.make_array.call(null,len__16958);
var i__16960 = 0;
var j__16961 = 1;
var bitmap__16962 = 0;
while(true){
if((i__16960 < len__16958))
{if((function (){var and__3822__auto____16963 = !((i__16960 === idx));
if(and__3822__auto____16963)
{return !(((arr__16957[i__16960]) == null));
} else
{return and__3822__auto____16963;
}
})())
{(new_arr__16959[j__16961] = (arr__16957[i__16960]));
{
var G__16964 = (i__16960 + 1);
var G__16965 = (j__16961 + 2);
var G__16966 = (bitmap__16962 | (1 << i__16960));
i__16960 = G__16964;
j__16961 = G__16965;
bitmap__16962 = G__16966;
continue;
}
} else
{{
var G__16967 = (i__16960 + 1);
var G__16968 = j__16961;
var G__16969 = bitmap__16962;
i__16960 = G__16967;
j__16961 = G__16968;
bitmap__16962 = G__16969;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap__16962,new_arr__16959));
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
cljs.core.ArrayNode.cljs$lang$ctorPrSeq = (function (this__2459__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNode");
});
cljs.core.ArrayNode.cljs$lang$ctorPrWriter = (function (this__2459__auto__,writer__2460__auto__){
return cljs.core._write.call(null,writer__2460__auto__,"cljs.core/ArrayNode");
});
cljs.core.ArrayNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__16970 = this;
var inode__16971 = this;
var idx__16972 = ((hash >>> shift) & 0x01f);
var node__16973 = (this__16970.arr[idx__16972]);
if((node__16973 == null))
{var editable__16974 = cljs.core.edit_and_set.call(null,inode__16971,edit,idx__16972,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
editable__16974.cnt = (editable__16974.cnt + 1);
return editable__16974;
} else
{var n__16975 = node__16973.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__16975 === node__16973))
{return inode__16971;
} else
{return cljs.core.edit_and_set.call(null,inode__16971,edit,idx__16972,n__16975);
}
}
});
cljs.core.ArrayNode.prototype.inode_seq = (function (){
var this__16976 = this;
var inode__16977 = this;
return cljs.core.create_array_node_seq.call(null,this__16976.arr);
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__16978 = this;
var inode__16979 = this;
var idx__16980 = ((hash >>> shift) & 0x01f);
var node__16981 = (this__16978.arr[idx__16980]);
if((node__16981 == null))
{return inode__16979;
} else
{var n__16982 = node__16981.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__16982 === node__16981))
{return inode__16979;
} else
{if((n__16982 == null))
{if((this__16978.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__16979,edit,idx__16980);
} else
{var editable__16983 = cljs.core.edit_and_set.call(null,inode__16979,edit,idx__16980,n__16982);
editable__16983.cnt = (editable__16983.cnt - 1);
return editable__16983;
}
} else
{if("\uFDD0'else")
{return cljs.core.edit_and_set.call(null,inode__16979,edit,idx__16980,n__16982);
} else
{return null;
}
}
}
}
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var this__16984 = this;
var inode__16985 = this;
if((e === this__16984.edit))
{return inode__16985;
} else
{return (new cljs.core.ArrayNode(e,this__16984.cnt,this__16984.arr.slice()));
}
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var this__16986 = this;
var inode__16987 = this;
var len__16988 = this__16986.arr.length;
var i__16989 = 0;
var init__16990 = init;
while(true){
if((i__16989 < len__16988))
{var node__16991 = (this__16986.arr[i__16989]);
if(!((node__16991 == null)))
{var init__16992 = node__16991.kv_reduce(f,init__16990);
if(cljs.core.reduced_QMARK_.call(null,init__16992))
{return cljs.core.deref.call(null,init__16992);
} else
{{
var G__17011 = (i__16989 + 1);
var G__17012 = init__16992;
i__16989 = G__17011;
init__16990 = G__17012;
continue;
}
}
} else
{return null;
}
} else
{return init__16990;
}
break;
}
});
cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__16993 = this;
var inode__16994 = this;
var idx__16995 = ((hash >>> shift) & 0x01f);
var node__16996 = (this__16993.arr[idx__16995]);
if(!((node__16996 == null)))
{return node__16996.inode_find((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var this__16997 = this;
var inode__16998 = this;
var idx__16999 = ((hash >>> shift) & 0x01f);
var node__17000 = (this__16997.arr[idx__16999]);
if(!((node__17000 == null)))
{var n__17001 = node__17000.inode_without((shift + 5),hash,key);
if((n__17001 === node__17000))
{return inode__16998;
} else
{if((n__17001 == null))
{if((this__16997.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__16998,null,idx__16999);
} else
{return (new cljs.core.ArrayNode(null,(this__16997.cnt - 1),cljs.core.clone_and_set.call(null,this__16997.arr,idx__16999,n__17001)));
}
} else
{if("\uFDD0'else")
{return (new cljs.core.ArrayNode(null,this__16997.cnt,cljs.core.clone_and_set.call(null,this__16997.arr,idx__16999,n__17001)));
} else
{return null;
}
}
}
} else
{return inode__16998;
}
});
cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__17002 = this;
var inode__17003 = this;
var idx__17004 = ((hash >>> shift) & 0x01f);
var node__17005 = (this__17002.arr[idx__17004]);
if((node__17005 == null))
{return (new cljs.core.ArrayNode(null,(this__17002.cnt + 1),cljs.core.clone_and_set.call(null,this__17002.arr,idx__17004,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_))));
} else
{var n__17006 = node__17005.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__17006 === node__17005))
{return inode__17003;
} else
{return (new cljs.core.ArrayNode(null,this__17002.cnt,cljs.core.clone_and_set.call(null,this__17002.arr,idx__17004,n__17006)));
}
}
});
cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__17007 = this;
var inode__17008 = this;
var idx__17009 = ((hash >>> shift) & 0x01f);
var node__17010 = (this__17007.arr[idx__17009]);
if(!((node__17010 == null)))
{return node__17010.inode_lookup((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode;
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim__17015 = (2 * cnt);
var i__17016 = 0;
while(true){
if((i__17016 < lim__17015))
{if(cljs.core.key_test.call(null,key,(arr[i__17016])))
{return i__17016;
} else
{{
var G__17017 = (i__17016 + 2);
i__17016 = G__17017;
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
cljs.core.HashCollisionNode.cljs$lang$ctorPrSeq = (function (this__2459__auto__){
return cljs.core.list.call(null,"cljs.core/HashCollisionNode");
});
cljs.core.HashCollisionNode.cljs$lang$ctorPrWriter = (function (this__2459__auto__,writer__2460__auto__){
return cljs.core._write.call(null,writer__2460__auto__,"cljs.core/HashCollisionNode");
});
cljs.core.HashCollisionNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__17018 = this;
var inode__17019 = this;
if((hash === this__17018.collision_hash))
{var idx__17020 = cljs.core.hash_collision_node_find_index.call(null,this__17018.arr,this__17018.cnt,key);
if((idx__17020 === -1))
{if((this__17018.arr.length > (2 * this__17018.cnt)))
{var editable__17021 = cljs.core.edit_and_set.call(null,inode__17019,edit,(2 * this__17018.cnt),key,((2 * this__17018.cnt) + 1),val);
added_leaf_QMARK_.val = true;
editable__17021.cnt = (editable__17021.cnt + 1);
return editable__17021;
} else
{var len__17022 = this__17018.arr.length;
var new_arr__17023 = cljs.core.make_array.call(null,(len__17022 + 2));
cljs.core.array_copy.call(null,this__17018.arr,0,new_arr__17023,0,len__17022);
(new_arr__17023[len__17022] = key);
(new_arr__17023[(len__17022 + 1)] = val);
added_leaf_QMARK_.val = true;
return inode__17019.ensure_editable_array(edit,(this__17018.cnt + 1),new_arr__17023);
}
} else
{if(((this__17018.arr[(idx__17020 + 1)]) === val))
{return inode__17019;
} else
{return cljs.core.edit_and_set.call(null,inode__17019,edit,(idx__17020 + 1),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,(1 << ((this__17018.collision_hash >>> shift) & 0x01f)),[null,inode__17019,null,null])).inode_assoc_BANG_(edit,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var this__17024 = this;
var inode__17025 = this;
return cljs.core.create_inode_seq.call(null,this__17024.arr);
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__17026 = this;
var inode__17027 = this;
var idx__17028 = cljs.core.hash_collision_node_find_index.call(null,this__17026.arr,this__17026.cnt,key);
if((idx__17028 === -1))
{return inode__17027;
} else
{(removed_leaf_QMARK_[0] = true);
if((this__17026.cnt === 1))
{return null;
} else
{var editable__17029 = inode__17027.ensure_editable(edit);
var earr__17030 = editable__17029.arr;
(earr__17030[idx__17028] = (earr__17030[((2 * this__17026.cnt) - 2)]));
(earr__17030[(idx__17028 + 1)] = (earr__17030[((2 * this__17026.cnt) - 1)]));
(earr__17030[((2 * this__17026.cnt) - 1)] = null);
(earr__17030[((2 * this__17026.cnt) - 2)] = null);
editable__17029.cnt = (editable__17029.cnt - 1);
return editable__17029;
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){
var this__17031 = this;
var inode__17032 = this;
if((e === this__17031.edit))
{return inode__17032;
} else
{var new_arr__17033 = cljs.core.make_array.call(null,(2 * (this__17031.cnt + 1)));
cljs.core.array_copy.call(null,this__17031.arr,0,new_arr__17033,0,(2 * this__17031.cnt));
return (new cljs.core.HashCollisionNode(e,this__17031.collision_hash,this__17031.cnt,new_arr__17033));
}
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var this__17034 = this;
var inode__17035 = this;
return cljs.core.inode_kv_reduce.call(null,this__17034.arr,f,init);
});
cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__17036 = this;
var inode__17037 = this;
var idx__17038 = cljs.core.hash_collision_node_find_index.call(null,this__17036.arr,this__17036.cnt,key);
if((idx__17038 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__17036.arr[idx__17038])))
{return cljs.core.PersistentVector.fromArray([(this__17036.arr[idx__17038]),(this__17036.arr[(idx__17038 + 1)])], true);
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
var this__17039 = this;
var inode__17040 = this;
var idx__17041 = cljs.core.hash_collision_node_find_index.call(null,this__17039.arr,this__17039.cnt,key);
if((idx__17041 === -1))
{return inode__17040;
} else
{if((this__17039.cnt === 1))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.HashCollisionNode(null,this__17039.collision_hash,(this__17039.cnt - 1),cljs.core.remove_pair.call(null,this__17039.arr,cljs.core.quot.call(null,idx__17041,2))));
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__17042 = this;
var inode__17043 = this;
if((hash === this__17042.collision_hash))
{var idx__17044 = cljs.core.hash_collision_node_find_index.call(null,this__17042.arr,this__17042.cnt,key);
if((idx__17044 === -1))
{var len__17045 = this__17042.arr.length;
var new_arr__17046 = cljs.core.make_array.call(null,(len__17045 + 2));
cljs.core.array_copy.call(null,this__17042.arr,0,new_arr__17046,0,len__17045);
(new_arr__17046[len__17045] = key);
(new_arr__17046[(len__17045 + 1)] = val);
added_leaf_QMARK_.val = true;
return (new cljs.core.HashCollisionNode(null,this__17042.collision_hash,(this__17042.cnt + 1),new_arr__17046));
} else
{if(cljs.core._EQ_.call(null,(this__17042.arr[idx__17044]),val))
{return inode__17043;
} else
{return (new cljs.core.HashCollisionNode(null,this__17042.collision_hash,this__17042.cnt,cljs.core.clone_and_set.call(null,this__17042.arr,(idx__17044 + 1),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((this__17042.collision_hash >>> shift) & 0x01f)),[null,inode__17043])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__17047 = this;
var inode__17048 = this;
var idx__17049 = cljs.core.hash_collision_node_find_index.call(null,this__17047.arr,this__17047.cnt,key);
if((idx__17049 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__17047.arr[idx__17049])))
{return (this__17047.arr[(idx__17049 + 1)]);
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
var this__17050 = this;
var inode__17051 = this;
if((e === this__17050.edit))
{this__17050.arr = array;
this__17050.cnt = count;
return inode__17051;
} else
{return (new cljs.core.HashCollisionNode(this__17050.edit,this__17050.collision_hash,count,array));
}
});
cljs.core.HashCollisionNode;
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash__17056 = cljs.core.hash.call(null,key1);
if((key1hash__17056 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__17056,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___17057 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash__17056,key1,val1,added_leaf_QMARK___17057).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK___17057);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash__17058 = cljs.core.hash.call(null,key1);
if((key1hash__17058 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__17058,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___17059 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash__17058,key1,val1,added_leaf_QMARK___17059).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK___17059);
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
cljs.core.NodeSeq.cljs$lang$ctorPrSeq = (function (this__2459__auto__){
return cljs.core.list.call(null,"cljs.core/NodeSeq");
});
cljs.core.NodeSeq.cljs$lang$ctorPrWriter = (function (this__2459__auto__,writer__2460__auto__){
return cljs.core._write.call(null,writer__2460__auto__,"cljs.core/NodeSeq");
});
cljs.core.NodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__17060 = this;
var h__2340__auto____17061 = this__17060.__hash;
if(!((h__2340__auto____17061 == null)))
{return h__2340__auto____17061;
} else
{var h__2340__auto____17062 = cljs.core.hash_coll.call(null,coll);
this__17060.__hash = h__2340__auto____17062;
return h__2340__auto____17062;
}
});
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__17063 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.NodeSeq.prototype.toString = (function (){
var this__17064 = this;
var this__17065 = this;
return cljs.core.pr_str.call(null,this__17065);
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__17066 = this;
return this$;
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__17067 = this;
if((this__17067.s == null))
{return cljs.core.PersistentVector.fromArray([(this__17067.nodes[this__17067.i]),(this__17067.nodes[(this__17067.i + 1)])], true);
} else
{return cljs.core.first.call(null,this__17067.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__17068 = this;
if((this__17068.s == null))
{return cljs.core.create_inode_seq.call(null,this__17068.nodes,(this__17068.i + 2),null);
} else
{return cljs.core.create_inode_seq.call(null,this__17068.nodes,this__17068.i,cljs.core.next.call(null,this__17068.s));
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__17069 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__17070 = this;
return (new cljs.core.NodeSeq(meta,this__17070.nodes,this__17070.i,this__17070.s,this__17070.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__17071 = this;
return this__17071.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__17072 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__17072.meta);
});
cljs.core.NodeSeq;
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.call(null,nodes,0,null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null))
{var len__17079 = nodes.length;
var j__17080 = i;
while(true){
if((j__17080 < len__17079))
{if(!(((nodes[j__17080]) == null)))
{return (new cljs.core.NodeSeq(null,nodes,j__17080,null,null));
} else
{var temp__3971__auto____17081 = (nodes[(j__17080 + 1)]);
if(cljs.core.truth_(temp__3971__auto____17081))
{var node__17082 = temp__3971__auto____17081;
var temp__3971__auto____17083 = node__17082.inode_seq();
if(cljs.core.truth_(temp__3971__auto____17083))
{var node_seq__17084 = temp__3971__auto____17083;
return (new cljs.core.NodeSeq(null,nodes,(j__17080 + 2),node_seq__17084,null));
} else
{{
var G__17085 = (j__17080 + 2);
j__17080 = G__17085;
continue;
}
}
} else
{{
var G__17086 = (j__17080 + 2);
j__17080 = G__17086;
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
cljs.core.ArrayNodeSeq.cljs$lang$ctorPrSeq = (function (this__2459__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNodeSeq");
});
cljs.core.ArrayNodeSeq.cljs$lang$ctorPrWriter = (function (this__2459__auto__,writer__2460__auto__){
return cljs.core._write.call(null,writer__2460__auto__,"cljs.core/ArrayNodeSeq");
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__17087 = this;
var h__2340__auto____17088 = this__17087.__hash;
if(!((h__2340__auto____17088 == null)))
{return h__2340__auto____17088;
} else
{var h__2340__auto____17089 = cljs.core.hash_coll.call(null,coll);
this__17087.__hash = h__2340__auto____17089;
return h__2340__auto____17089;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__17090 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var this__17091 = this;
var this__17092 = this;
return cljs.core.pr_str.call(null,this__17092);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__17093 = this;
return this$;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__17094 = this;
return cljs.core.first.call(null,this__17094.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__17095 = this;
return cljs.core.create_array_node_seq.call(null,null,this__17095.nodes,this__17095.i,cljs.core.next.call(null,this__17095.s));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__17096 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__17097 = this;
return (new cljs.core.ArrayNodeSeq(meta,this__17097.nodes,this__17097.i,this__17097.s,this__17097.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__17098 = this;
return this__17098.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__17099 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__17099.meta);
});
cljs.core.ArrayNodeSeq;
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.call(null,null,nodes,0,null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null))
{var len__17106 = nodes.length;
var j__17107 = i;
while(true){
if((j__17107 < len__17106))
{var temp__3971__auto____17108 = (nodes[j__17107]);
if(cljs.core.truth_(temp__3971__auto____17108))
{var nj__17109 = temp__3971__auto____17108;
var temp__3971__auto____17110 = nj__17109.inode_seq();
if(cljs.core.truth_(temp__3971__auto____17110))
{var ns__17111 = temp__3971__auto____17110;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j__17107 + 1),ns__17111,null));
} else
{{
var G__17112 = (j__17107 + 1);
j__17107 = G__17112;
continue;
}
}
} else
{{
var G__17113 = (j__17107 + 1);
j__17107 = G__17113;
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
cljs.core.PersistentHashMap.cljs$lang$ctorPrSeq = (function (this__2459__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashMap");
});
cljs.core.PersistentHashMap.cljs$lang$ctorPrWriter = (function (this__2459__auto__,writer__2460__auto__){
return cljs.core._write.call(null,writer__2460__auto__,"cljs.core/PersistentHashMap");
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__17116 = this;
return (new cljs.core.TransientHashMap({},this__17116.root,this__17116.cnt,this__17116.has_nil_QMARK_,this__17116.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__17117 = this;
var h__2340__auto____17118 = this__17117.__hash;
if(!((h__2340__auto____17118 == null)))
{return h__2340__auto____17118;
} else
{var h__2340__auto____17119 = cljs.core.hash_imap.call(null,coll);
this__17117.__hash = h__2340__auto____17119;
return h__2340__auto____17119;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__17120 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__17121 = this;
if((k == null))
{if(this__17121.has_nil_QMARK_)
{return this__17121.nil_val;
} else
{return not_found;
}
} else
{if((this__17121.root == null))
{return not_found;
} else
{if("\uFDD0'else")
{return this__17121.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__17122 = this;
if((k == null))
{if((function (){var and__3822__auto____17123 = this__17122.has_nil_QMARK_;
if(and__3822__auto____17123)
{return (v === this__17122.nil_val);
} else
{return and__3822__auto____17123;
}
})())
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__17122.meta,((this__17122.has_nil_QMARK_)?this__17122.cnt:(this__17122.cnt + 1)),this__17122.root,true,v,null));
}
} else
{var added_leaf_QMARK___17124 = (new cljs.core.Box(false));
var new_root__17125 = (((this__17122.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__17122.root).inode_assoc(0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___17124);
if((new_root__17125 === this__17122.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__17122.meta,((added_leaf_QMARK___17124.val)?(this__17122.cnt + 1):this__17122.cnt),new_root__17125,this__17122.has_nil_QMARK_,this__17122.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__17126 = this;
if((k == null))
{return this__17126.has_nil_QMARK_;
} else
{if((this__17126.root == null))
{return false;
} else
{if("\uFDD0'else")
{return !((this__17126.root.inode_lookup(0,cljs.core.hash.call(null,k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__17149 = null;
var G__17149__2 = (function (this_sym17127,k){
var this__17129 = this;
var this_sym17127__17130 = this;
var coll__17131 = this_sym17127__17130;
return coll__17131.cljs$core$ILookup$_lookup$arity$2(coll__17131,k);
});
var G__17149__3 = (function (this_sym17128,k,not_found){
var this__17129 = this;
var this_sym17128__17132 = this;
var coll__17133 = this_sym17128__17132;
return coll__17133.cljs$core$ILookup$_lookup$arity$3(coll__17133,k,not_found);
});
G__17149 = function(this_sym17128,k,not_found){
switch(arguments.length){
case 2:
return G__17149__2.call(this,this_sym17128,k);
case 3:
return G__17149__3.call(this,this_sym17128,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__17149;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (this_sym17114,args17115){
var this__17134 = this;
return this_sym17114.call.apply(this_sym17114,[this_sym17114].concat(args17115.slice()));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__17135 = this;
var init__17136 = ((this__17135.has_nil_QMARK_)?f.call(null,init,null,this__17135.nil_val):init);
if(cljs.core.reduced_QMARK_.call(null,init__17136))
{return cljs.core.deref.call(null,init__17136);
} else
{if(!((this__17135.root == null)))
{return this__17135.root.kv_reduce(f,init__17136);
} else
{if("\uFDD0'else")
{return init__17136;
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__17137 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentHashMap.prototype.toString = (function (){
var this__17138 = this;
var this__17139 = this;
return cljs.core.pr_str.call(null,this__17139);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__17140 = this;
if((this__17140.cnt > 0))
{var s__17141 = ((!((this__17140.root == null)))?this__17140.root.inode_seq():null);
if(this__17140.has_nil_QMARK_)
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([null,this__17140.nil_val], true),s__17141);
} else
{return s__17141;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__17142 = this;
return this__17142.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__17143 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__17144 = this;
return (new cljs.core.PersistentHashMap(meta,this__17144.cnt,this__17144.root,this__17144.has_nil_QMARK_,this__17144.nil_val,this__17144.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__17145 = this;
return this__17145.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__17146 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,this__17146.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__17147 = this;
if((k == null))
{if(this__17147.has_nil_QMARK_)
{return (new cljs.core.PersistentHashMap(this__17147.meta,(this__17147.cnt - 1),this__17147.root,false,null,null));
} else
{return coll;
}
} else
{if((this__17147.root == null))
{return coll;
} else
{if("\uFDD0'else")
{var new_root__17148 = this__17147.root.inode_without(0,cljs.core.hash.call(null,k),k);
if((new_root__17148 === this__17147.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__17147.meta,(this__17147.cnt - 1),new_root__17148,this__17147.has_nil_QMARK_,this__17147.nil_val,null));
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
var len__17150 = ks.length;
var i__17151 = 0;
var out__17152 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i__17151 < len__17150))
{{
var G__17153 = (i__17151 + 1);
var G__17154 = cljs.core.assoc_BANG_.call(null,out__17152,(ks[i__17151]),(vs[i__17151]));
i__17151 = G__17153;
out__17152 = G__17154;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__17152);
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
cljs.core.TransientHashMap.cljs$lang$ctorPrSeq = (function (this__2459__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashMap");
});
cljs.core.TransientHashMap.cljs$lang$ctorPrWriter = (function (this__2459__auto__,writer__2460__auto__){
return cljs.core._write.call(null,writer__2460__auto__,"cljs.core/TransientHashMap");
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__17155 = this;
return tcoll.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__17156 = this;
return tcoll.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var this__17157 = this;
return tcoll.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__17158 = this;
return tcoll.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__17159 = this;
if((k == null))
{if(this__17159.has_nil_QMARK_)
{return this__17159.nil_val;
} else
{return null;
}
} else
{if((this__17159.root == null))
{return null;
} else
{return this__17159.root.inode_lookup(0,cljs.core.hash.call(null,k),k);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__17160 = this;
if((k == null))
{if(this__17160.has_nil_QMARK_)
{return this__17160.nil_val;
} else
{return not_found;
}
} else
{if((this__17160.root == null))
{return not_found;
} else
{return this__17160.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__17161 = this;
if(this__17161.edit)
{return this__17161.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var this__17162 = this;
var tcoll__17163 = this;
if(this__17162.edit)
{if((function (){var G__17164__17165 = o;
if(G__17164__17165)
{if((function (){var or__3824__auto____17166 = (G__17164__17165.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____17166)
{return or__3824__auto____17166;
} else
{return G__17164__17165.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__17164__17165.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__17164__17165);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__17164__17165);
}
})())
{return tcoll__17163.assoc_BANG_(cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__17167 = cljs.core.seq.call(null,o);
var tcoll__17168 = tcoll__17163;
while(true){
var temp__3971__auto____17169 = cljs.core.first.call(null,es__17167);
if(cljs.core.truth_(temp__3971__auto____17169))
{var e__17170 = temp__3971__auto____17169;
{
var G__17181 = cljs.core.next.call(null,es__17167);
var G__17182 = tcoll__17168.assoc_BANG_(cljs.core.key.call(null,e__17170),cljs.core.val.call(null,e__17170));
es__17167 = G__17181;
tcoll__17168 = G__17182;
continue;
}
} else
{return tcoll__17168;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var this__17171 = this;
var tcoll__17172 = this;
if(this__17171.edit)
{if((k == null))
{if((this__17171.nil_val === v))
{} else
{this__17171.nil_val = v;
}
if(this__17171.has_nil_QMARK_)
{} else
{this__17171.count = (this__17171.count + 1);
this__17171.has_nil_QMARK_ = true;
}
return tcoll__17172;
} else
{var added_leaf_QMARK___17173 = (new cljs.core.Box(false));
var node__17174 = (((this__17171.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__17171.root).inode_assoc_BANG_(this__17171.edit,0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___17173);
if((node__17174 === this__17171.root))
{} else
{this__17171.root = node__17174;
}
if(added_leaf_QMARK___17173.val)
{this__17171.count = (this__17171.count + 1);
} else
{}
return tcoll__17172;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var this__17175 = this;
var tcoll__17176 = this;
if(this__17175.edit)
{if((k == null))
{if(this__17175.has_nil_QMARK_)
{this__17175.has_nil_QMARK_ = false;
this__17175.nil_val = null;
this__17175.count = (this__17175.count - 1);
return tcoll__17176;
} else
{return tcoll__17176;
}
} else
{if((this__17175.root == null))
{return tcoll__17176;
} else
{var removed_leaf_QMARK___17177 = (new cljs.core.Box(false));
var node__17178 = this__17175.root.inode_without_BANG_(this__17175.edit,0,cljs.core.hash.call(null,k),k,removed_leaf_QMARK___17177);
if((node__17178 === this__17175.root))
{} else
{this__17175.root = node__17178;
}
if(cljs.core.truth_((removed_leaf_QMARK___17177[0])))
{this__17175.count = (this__17175.count - 1);
} else
{}
return tcoll__17176;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var this__17179 = this;
var tcoll__17180 = this;
if(this__17179.edit)
{this__17179.edit = null;
return (new cljs.core.PersistentHashMap(null,this__17179.count,this__17179.root,this__17179.has_nil_QMARK_,this__17179.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientHashMap;
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t__17185 = node;
var stack__17186 = stack;
while(true){
if(!((t__17185 == null)))
{{
var G__17187 = ((ascending_QMARK_)?t__17185.left:t__17185.right);
var G__17188 = cljs.core.conj.call(null,stack__17186,t__17185);
t__17185 = G__17187;
stack__17186 = G__17188;
continue;
}
} else
{return stack__17186;
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
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrSeq = (function (this__2459__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMapSeq");
});
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrWriter = (function (this__2459__auto__,writer__2460__auto__){
return cljs.core._write.call(null,writer__2460__auto__,"cljs.core/PersistentTreeMapSeq");
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__17189 = this;
var h__2340__auto____17190 = this__17189.__hash;
if(!((h__2340__auto____17190 == null)))
{return h__2340__auto____17190;
} else
{var h__2340__auto____17191 = cljs.core.hash_coll.call(null,coll);
this__17189.__hash = h__2340__auto____17191;
return h__2340__auto____17191;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__17192 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var this__17193 = this;
var this__17194 = this;
return cljs.core.pr_str.call(null,this__17194);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__17195 = this;
return this$;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__17196 = this;
if((this__17196.cnt < 0))
{return (cljs.core.count.call(null,cljs.core.next.call(null,coll)) + 1);
} else
{return this__17196.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this__17197 = this;
return cljs.core.peek.call(null,this__17197.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this__17198 = this;
var t__17199 = cljs.core.first.call(null,this__17198.stack);
var next_stack__17200 = cljs.core.tree_map_seq_push.call(null,((this__17198.ascending_QMARK_)?t__17199.right:t__17199.left),cljs.core.next.call(null,this__17198.stack),this__17198.ascending_QMARK_);
if(!((next_stack__17200 == null)))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack__17200,this__17198.ascending_QMARK_,(this__17198.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__17201 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__17202 = this;
return (new cljs.core.PersistentTreeMapSeq(meta,this__17202.stack,this__17202.ascending_QMARK_,this__17202.cnt,this__17202.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__17203 = this;
return this__17203.meta;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__17204 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__17204.meta);
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
{if((function (){var and__3822__auto____17206 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right);
if(and__3822__auto____17206)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right.left);
} else
{return and__3822__auto____17206;
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
{if((function (){var and__3822__auto____17208 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left);
if(and__3822__auto____17208)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left.right);
} else
{return and__3822__auto____17208;
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
var init__17212 = f.call(null,init,node.key,node.val);
if(cljs.core.reduced_QMARK_.call(null,init__17212))
{return cljs.core.deref.call(null,init__17212);
} else
{var init__17213 = ((!((node.left == null)))?tree_map_kv_reduce.call(null,node.left,f,init__17212):init__17212);
if(cljs.core.reduced_QMARK_.call(null,init__17213))
{return cljs.core.deref.call(null,init__17213);
} else
{var init__17214 = ((!((node.right == null)))?tree_map_kv_reduce.call(null,node.right,f,init__17213):init__17213);
if(cljs.core.reduced_QMARK_.call(null,init__17214))
{return cljs.core.deref.call(null,init__17214);
} else
{return init__17214;
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
cljs.core.BlackNode.cljs$lang$ctorPrSeq = (function (this__2459__auto__){
return cljs.core.list.call(null,"cljs.core/BlackNode");
});
cljs.core.BlackNode.cljs$lang$ctorPrWriter = (function (this__2459__auto__,writer__2460__auto__){
return cljs.core._write.call(null,writer__2460__auto__,"cljs.core/BlackNode");
});
cljs.core.BlackNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__17217 = this;
var h__2340__auto____17218 = this__17217.__hash;
if(!((h__2340__auto____17218 == null)))
{return h__2340__auto____17218;
} else
{var h__2340__auto____17219 = cljs.core.hash_coll.call(null,coll);
this__17217.__hash = h__2340__auto____17219;
return h__2340__auto____17219;
}
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__17220 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__17221 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__17222 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__17222.key,this__17222.val], true),k,v);
});
cljs.core.BlackNode.prototype.call = (function() {
var G__17270 = null;
var G__17270__2 = (function (this_sym17223,k){
var this__17225 = this;
var this_sym17223__17226 = this;
var node__17227 = this_sym17223__17226;
return node__17227.cljs$core$ILookup$_lookup$arity$2(node__17227,k);
});
var G__17270__3 = (function (this_sym17224,k,not_found){
var this__17225 = this;
var this_sym17224__17228 = this;
var node__17229 = this_sym17224__17228;
return node__17229.cljs$core$ILookup$_lookup$arity$3(node__17229,k,not_found);
});
G__17270 = function(this_sym17224,k,not_found){
switch(arguments.length){
case 2:
return G__17270__2.call(this,this_sym17224,k);
case 3:
return G__17270__3.call(this,this_sym17224,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__17270;
})()
;
cljs.core.BlackNode.prototype.apply = (function (this_sym17215,args17216){
var this__17230 = this;
return this_sym17215.call.apply(this_sym17215,[this_sym17215].concat(args17216.slice()));
});
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__17231 = this;
return cljs.core.PersistentVector.fromArray([this__17231.key,this__17231.val,o], true);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__17232 = this;
return this__17232.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__17233 = this;
return this__17233.val;
});
cljs.core.BlackNode.prototype.add_right = (function (ins){
var this__17234 = this;
var node__17235 = this;
return ins.balance_right(node__17235);
});
cljs.core.BlackNode.prototype.redden = (function (){
var this__17236 = this;
var node__17237 = this;
return (new cljs.core.RedNode(this__17236.key,this__17236.val,this__17236.left,this__17236.right,null));
});
cljs.core.BlackNode.prototype.remove_right = (function (del){
var this__17238 = this;
var node__17239 = this;
return cljs.core.balance_right_del.call(null,this__17238.key,this__17238.val,this__17238.left,del);
});
cljs.core.BlackNode.prototype.replace = (function (key,val,left,right){
var this__17240 = this;
var node__17241 = this;
return (new cljs.core.BlackNode(key,val,left,right,null));
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var this__17242 = this;
var node__17243 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__17243,f,init);
});
cljs.core.BlackNode.prototype.remove_left = (function (del){
var this__17244 = this;
var node__17245 = this;
return cljs.core.balance_left_del.call(null,this__17244.key,this__17244.val,del,this__17244.right);
});
cljs.core.BlackNode.prototype.add_left = (function (ins){
var this__17246 = this;
var node__17247 = this;
return ins.balance_left(node__17247);
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){
var this__17248 = this;
var node__17249 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node__17249,parent.right,null));
});
cljs.core.BlackNode.prototype.toString = (function() {
var G__17271 = null;
var G__17271__0 = (function (){
var this__17250 = this;
var this__17252 = this;
return cljs.core.pr_str.call(null,this__17252);
});
G__17271 = function(){
switch(arguments.length){
case 0:
return G__17271__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__17271;
})()
;
cljs.core.BlackNode.prototype.balance_right = (function (parent){
var this__17253 = this;
var node__17254 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__17254,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){
var this__17255 = this;
var node__17256 = this;
return node__17256;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__17257 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__17258 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__17259 = this;
return cljs.core.list.call(null,this__17259.key,this__17259.val);
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__17260 = this;
return 2;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__17261 = this;
return this__17261.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__17262 = this;
return cljs.core.PersistentVector.fromArray([this__17262.key], true);
});
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__17263 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__17263.key,this__17263.val], true),n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__17264 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__17265 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__17265.key,this__17265.val], true),meta);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__17266 = this;
return null;
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__17267 = this;
if((n === 0))
{return this__17267.key;
} else
{if((n === 1))
{return this__17267.val;
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
var this__17268 = this;
if((n === 0))
{return this__17268.key;
} else
{if((n === 1))
{return this__17268.val;
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
var this__17269 = this;
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
cljs.core.RedNode.cljs$lang$ctorPrSeq = (function (this__2459__auto__){
return cljs.core.list.call(null,"cljs.core/RedNode");
});
cljs.core.RedNode.cljs$lang$ctorPrWriter = (function (this__2459__auto__,writer__2460__auto__){
return cljs.core._write.call(null,writer__2460__auto__,"cljs.core/RedNode");
});
cljs.core.RedNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__17274 = this;
var h__2340__auto____17275 = this__17274.__hash;
if(!((h__2340__auto____17275 == null)))
{return h__2340__auto____17275;
} else
{var h__2340__auto____17276 = cljs.core.hash_coll.call(null,coll);
this__17274.__hash = h__2340__auto____17276;
return h__2340__auto____17276;
}
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__17277 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__17278 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__17279 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__17279.key,this__17279.val], true),k,v);
});
cljs.core.RedNode.prototype.call = (function() {
var G__17327 = null;
var G__17327__2 = (function (this_sym17280,k){
var this__17282 = this;
var this_sym17280__17283 = this;
var node__17284 = this_sym17280__17283;
return node__17284.cljs$core$ILookup$_lookup$arity$2(node__17284,k);
});
var G__17327__3 = (function (this_sym17281,k,not_found){
var this__17282 = this;
var this_sym17281__17285 = this;
var node__17286 = this_sym17281__17285;
return node__17286.cljs$core$ILookup$_lookup$arity$3(node__17286,k,not_found);
});
G__17327 = function(this_sym17281,k,not_found){
switch(arguments.length){
case 2:
return G__17327__2.call(this,this_sym17281,k);
case 3:
return G__17327__3.call(this,this_sym17281,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__17327;
})()
;
cljs.core.RedNode.prototype.apply = (function (this_sym17272,args17273){
var this__17287 = this;
return this_sym17272.call.apply(this_sym17272,[this_sym17272].concat(args17273.slice()));
});
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__17288 = this;
return cljs.core.PersistentVector.fromArray([this__17288.key,this__17288.val,o], true);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__17289 = this;
return this__17289.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__17290 = this;
return this__17290.val;
});
cljs.core.RedNode.prototype.add_right = (function (ins){
var this__17291 = this;
var node__17292 = this;
return (new cljs.core.RedNode(this__17291.key,this__17291.val,this__17291.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){
var this__17293 = this;
var node__17294 = this;
throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.remove_right = (function (del){
var this__17295 = this;
var node__17296 = this;
return (new cljs.core.RedNode(this__17295.key,this__17295.val,this__17295.left,del,null));
});
cljs.core.RedNode.prototype.replace = (function (key,val,left,right){
var this__17297 = this;
var node__17298 = this;
return (new cljs.core.RedNode(key,val,left,right,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var this__17299 = this;
var node__17300 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__17300,f,init);
});
cljs.core.RedNode.prototype.remove_left = (function (del){
var this__17301 = this;
var node__17302 = this;
return (new cljs.core.RedNode(this__17301.key,this__17301.val,del,this__17301.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){
var this__17303 = this;
var node__17304 = this;
return (new cljs.core.RedNode(this__17303.key,this__17303.val,ins,this__17303.right,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){
var this__17305 = this;
var node__17306 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__17305.left))
{return (new cljs.core.RedNode(this__17305.key,this__17305.val,this__17305.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,this__17305.right,parent.right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__17305.right))
{return (new cljs.core.RedNode(this__17305.right.key,this__17305.right.val,(new cljs.core.BlackNode(this__17305.key,this__17305.val,this__17305.left,this__17305.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,this__17305.right.right,parent.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,node__17306,parent.right,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.toString = (function() {
var G__17328 = null;
var G__17328__0 = (function (){
var this__17307 = this;
var this__17309 = this;
return cljs.core.pr_str.call(null,this__17309);
});
G__17328 = function(){
switch(arguments.length){
case 0:
return G__17328__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__17328;
})()
;
cljs.core.RedNode.prototype.balance_right = (function (parent){
var this__17310 = this;
var node__17311 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__17310.right))
{return (new cljs.core.RedNode(this__17310.key,this__17310.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__17310.left,null)),this__17310.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__17310.left))
{return (new cljs.core.RedNode(this__17310.left.key,this__17310.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__17310.left.left,null)),(new cljs.core.BlackNode(this__17310.key,this__17310.val,this__17310.left.right,this__17310.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__17311,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.blacken = (function (){
var this__17312 = this;
var node__17313 = this;
return (new cljs.core.BlackNode(this__17312.key,this__17312.val,this__17312.left,this__17312.right,null));
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__17314 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__17315 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__17316 = this;
return cljs.core.list.call(null,this__17316.key,this__17316.val);
});
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__17317 = this;
return 2;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__17318 = this;
return this__17318.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__17319 = this;
return cljs.core.PersistentVector.fromArray([this__17319.key], true);
});
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__17320 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__17320.key,this__17320.val], true),n,v);
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__17321 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__17322 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__17322.key,this__17322.val], true),meta);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__17323 = this;
return null;
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__17324 = this;
if((n === 0))
{return this__17324.key;
} else
{if((n === 1))
{return this__17324.val;
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
var this__17325 = this;
if((n === 0))
{return this__17325.key;
} else
{if((n === 1))
{return this__17325.val;
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
var this__17326 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.RedNode;
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c__17332 = comp.call(null,k,tree.key);
if((c__17332 === 0))
{(found[0] = tree);
return null;
} else
{if((c__17332 < 0))
{var ins__17333 = tree_map_add.call(null,comp,tree.left,k,v,found);
if(!((ins__17333 == null)))
{return tree.add_left(ins__17333);
} else
{return null;
}
} else
{if("\uFDD0'else")
{var ins__17334 = tree_map_add.call(null,comp,tree.right,k,v,found);
if(!((ins__17334 == null)))
{return tree.add_right(ins__17334);
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
{var app__17337 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__17337))
{return (new cljs.core.RedNode(app__17337.key,app__17337.val,(new cljs.core.RedNode(left.key,left.val,left.left,app__17337.left,null)),(new cljs.core.RedNode(right.key,right.val,app__17337.right,right.right,null)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app__17337,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append.call(null,left.right,right),null));
}
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append.call(null,left,right.left),right.right,null));
} else
{if("\uFDD0'else")
{var app__17338 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__17338))
{return (new cljs.core.RedNode(app__17338.key,app__17338.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app__17338.left,null)),(new cljs.core.BlackNode(right.key,right.val,app__17338.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del.call(null,left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app__17338,right.right,null)));
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
{var c__17344 = comp.call(null,k,tree.key);
if((c__17344 === 0))
{(found[0] = tree);
return cljs.core.tree_map_append.call(null,tree.left,tree.right);
} else
{if((c__17344 < 0))
{var del__17345 = tree_map_remove.call(null,comp,tree.left,k,found);
if((function (){var or__3824__auto____17346 = !((del__17345 == null));
if(or__3824__auto____17346)
{return or__3824__auto____17346;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.left))
{return cljs.core.balance_left_del.call(null,tree.key,tree.val,del__17345,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del__17345,tree.right,null));
}
} else
{return null;
}
} else
{if("\uFDD0'else")
{var del__17347 = tree_map_remove.call(null,comp,tree.right,k,found);
if((function (){var or__3824__auto____17348 = !((del__17347 == null));
if(or__3824__auto____17348)
{return or__3824__auto____17348;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.right))
{return cljs.core.balance_right_del.call(null,tree.key,tree.val,tree.left,del__17347);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del__17347,null));
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
var tk__17351 = tree.key;
var c__17352 = comp.call(null,k,tk__17351);
if((c__17352 === 0))
{return tree.replace(tk__17351,v,tree.left,tree.right);
} else
{if((c__17352 < 0))
{return tree.replace(tk__17351,tree.val,tree_map_replace.call(null,comp,tree.left,k,v),tree.right);
} else
{if("\uFDD0'else")
{return tree.replace(tk__17351,tree.val,tree.left,tree_map_replace.call(null,comp,tree.right,k,v));
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
cljs.core.PersistentTreeMap.cljs$lang$ctorPrSeq = (function (this__2459__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMap");
});
cljs.core.PersistentTreeMap.cljs$lang$ctorPrWriter = (function (this__2459__auto__,writer__2460__auto__){
return cljs.core._write.call(null,writer__2460__auto__,"cljs.core/PersistentTreeMap");
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__17355 = this;
var h__2340__auto____17356 = this__17355.__hash;
if(!((h__2340__auto____17356 == null)))
{return h__2340__auto____17356;
} else
{var h__2340__auto____17357 = cljs.core.hash_imap.call(null,coll);
this__17355.__hash = h__2340__auto____17357;
return h__2340__auto____17357;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__17358 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__17359 = this;
var n__17360 = coll.entry_at(k);
if(!((n__17360 == null)))
{return n__17360.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__17361 = this;
var found__17362 = [null];
var t__17363 = cljs.core.tree_map_add.call(null,this__17361.comp,this__17361.tree,k,v,found__17362);
if((t__17363 == null))
{var found_node__17364 = cljs.core.nth.call(null,found__17362,0);
if(cljs.core._EQ_.call(null,v,found_node__17364.val))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__17361.comp,cljs.core.tree_map_replace.call(null,this__17361.comp,this__17361.tree,k,v),this__17361.cnt,this__17361.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__17361.comp,t__17363.blacken(),(this__17361.cnt + 1),this__17361.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__17365 = this;
return !((coll.entry_at(k) == null));
});
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__17399 = null;
var G__17399__2 = (function (this_sym17366,k){
var this__17368 = this;
var this_sym17366__17369 = this;
var coll__17370 = this_sym17366__17369;
return coll__17370.cljs$core$ILookup$_lookup$arity$2(coll__17370,k);
});
var G__17399__3 = (function (this_sym17367,k,not_found){
var this__17368 = this;
var this_sym17367__17371 = this;
var coll__17372 = this_sym17367__17371;
return coll__17372.cljs$core$ILookup$_lookup$arity$3(coll__17372,k,not_found);
});
G__17399 = function(this_sym17367,k,not_found){
switch(arguments.length){
case 2:
return G__17399__2.call(this,this_sym17367,k);
case 3:
return G__17399__3.call(this,this_sym17367,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__17399;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (this_sym17353,args17354){
var this__17373 = this;
return this_sym17353.call.apply(this_sym17353,[this_sym17353].concat(args17354.slice()));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__17374 = this;
if(!((this__17374.tree == null)))
{return cljs.core.tree_map_kv_reduce.call(null,this__17374.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__17375 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__17376 = this;
if((this__17376.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__17376.tree,false,this__17376.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){
var this__17377 = this;
var this__17378 = this;
return cljs.core.pr_str.call(null,this__17378);
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var this__17379 = this;
var coll__17380 = this;
var t__17381 = this__17379.tree;
while(true){
if(!((t__17381 == null)))
{var c__17382 = this__17379.comp.call(null,k,t__17381.key);
if((c__17382 === 0))
{return t__17381;
} else
{if((c__17382 < 0))
{{
var G__17400 = t__17381.left;
t__17381 = G__17400;
continue;
}
} else
{if("\uFDD0'else")
{{
var G__17401 = t__17381.right;
t__17381 = G__17401;
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
var this__17383 = this;
if((this__17383.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__17383.tree,ascending_QMARK_,this__17383.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__17384 = this;
if((this__17384.cnt > 0))
{var stack__17385 = null;
var t__17386 = this__17384.tree;
while(true){
if(!((t__17386 == null)))
{var c__17387 = this__17384.comp.call(null,k,t__17386.key);
if((c__17387 === 0))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.call(null,stack__17385,t__17386),ascending_QMARK_,-1,null));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c__17387 < 0))
{{
var G__17402 = cljs.core.conj.call(null,stack__17385,t__17386);
var G__17403 = t__17386.left;
stack__17385 = G__17402;
t__17386 = G__17403;
continue;
}
} else
{{
var G__17404 = stack__17385;
var G__17405 = t__17386.right;
stack__17385 = G__17404;
t__17386 = G__17405;
continue;
}
}
} else
{if("\uFDD0'else")
{if((c__17387 > 0))
{{
var G__17406 = cljs.core.conj.call(null,stack__17385,t__17386);
var G__17407 = t__17386.right;
stack__17385 = G__17406;
t__17386 = G__17407;
continue;
}
} else
{{
var G__17408 = stack__17385;
var G__17409 = t__17386.left;
stack__17385 = G__17408;
t__17386 = G__17409;
continue;
}
}
} else
{return null;
}
}
}
} else
{if((stack__17385 == null))
{return (new cljs.core.PersistentTreeMapSeq(null,stack__17385,ascending_QMARK_,-1,null));
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
var this__17388 = this;
return cljs.core.key.call(null,entry);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__17389 = this;
return this__17389.comp;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__17390 = this;
if((this__17390.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__17390.tree,true,this__17390.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__17391 = this;
return this__17391.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__17392 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__17393 = this;
return (new cljs.core.PersistentTreeMap(this__17393.comp,this__17393.tree,this__17393.cnt,meta,this__17393.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__17394 = this;
return this__17394.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__17395 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeMap.EMPTY,this__17395.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__17396 = this;
var found__17397 = [null];
var t__17398 = cljs.core.tree_map_remove.call(null,this__17396.comp,this__17396.tree,k,found__17397);
if((t__17398 == null))
{if((cljs.core.nth.call(null,found__17397,0) == null))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__17396.comp,null,0,this__17396.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__17396.comp,t__17398.blacken(),(this__17396.cnt - 1),this__17396.meta,null));
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
var in__17412 = cljs.core.seq.call(null,keyvals);
var out__17413 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if(in__17412)
{{
var G__17414 = cljs.core.nnext.call(null,in__17412);
var G__17415 = cljs.core.assoc_BANG_.call(null,out__17413,cljs.core.first.call(null,in__17412),cljs.core.second.call(null,in__17412));
in__17412 = G__17414;
out__17413 = G__17415;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__17413);
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
hash_map.cljs$lang$applyTo = (function (arglist__17416){
var keyvals = cljs.core.seq(arglist__17416);;
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
array_map.cljs$lang$applyTo = (function (arglist__17417){
var keyvals = cljs.core.seq(arglist__17417);;
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
var ks__17421 = [];
var obj__17422 = {};
var kvs__17423 = cljs.core.seq.call(null,keyvals);
while(true){
if(kvs__17423)
{ks__17421.push(cljs.core.first.call(null,kvs__17423));
(obj__17422[cljs.core.first.call(null,kvs__17423)] = cljs.core.second.call(null,kvs__17423));
{
var G__17424 = cljs.core.nnext.call(null,kvs__17423);
kvs__17423 = G__17424;
continue;
}
} else
{return cljs.core.ObjMap.fromObject.call(null,ks__17421,obj__17422);
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
obj_map.cljs$lang$applyTo = (function (arglist__17425){
var keyvals = cljs.core.seq(arglist__17425);;
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
var in__17428 = cljs.core.seq.call(null,keyvals);
var out__17429 = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(in__17428)
{{
var G__17430 = cljs.core.nnext.call(null,in__17428);
var G__17431 = cljs.core.assoc.call(null,out__17429,cljs.core.first.call(null,in__17428),cljs.core.second.call(null,in__17428));
in__17428 = G__17430;
out__17429 = G__17431;
continue;
}
} else
{return out__17429;
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
sorted_map.cljs$lang$applyTo = (function (arglist__17432){
var keyvals = cljs.core.seq(arglist__17432);;
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
var in__17435 = cljs.core.seq.call(null,keyvals);
var out__17436 = (new cljs.core.PersistentTreeMap(comparator,null,0,null,0));
while(true){
if(in__17435)
{{
var G__17437 = cljs.core.nnext.call(null,in__17435);
var G__17438 = cljs.core.assoc.call(null,out__17436,cljs.core.first.call(null,in__17435),cljs.core.second.call(null,in__17435));
in__17435 = G__17437;
out__17436 = G__17438;
continue;
}
} else
{return out__17436;
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
sorted_map_by.cljs$lang$applyTo = (function (arglist__17439){
var comparator = cljs.core.first(arglist__17439);
var keyvals = cljs.core.rest(arglist__17439);
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
{return cljs.core.reduce.call(null,(function (p1__17440_SHARP_,p2__17441_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3824__auto____17443 = p1__17440_SHARP_;
if(cljs.core.truth_(or__3824__auto____17443))
{return or__3824__auto____17443;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),p2__17441_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__17444){
var maps = cljs.core.seq(arglist__17444);;
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
{var merge_entry__17452 = (function (m,e){
var k__17450 = cljs.core.first.call(null,e);
var v__17451 = cljs.core.second.call(null,e);
if(cljs.core.contains_QMARK_.call(null,m,k__17450))
{return cljs.core.assoc.call(null,m,k__17450,f.call(null,cljs.core._lookup.call(null,m,k__17450,null),v__17451));
} else
{return cljs.core.assoc.call(null,m,k__17450,v__17451);
}
});
var merge2__17454 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__17452,(function (){var or__3824__auto____17453 = m1;
if(cljs.core.truth_(or__3824__auto____17453))
{return or__3824__auto____17453;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge2__17454,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__17455){
var f = cljs.core.first(arglist__17455);
var maps = cljs.core.rest(arglist__17455);
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
var ret__17460 = cljs.core.ObjMap.EMPTY;
var keys__17461 = cljs.core.seq.call(null,keyseq);
while(true){
if(keys__17461)
{var key__17462 = cljs.core.first.call(null,keys__17461);
var entry__17463 = cljs.core._lookup.call(null,map,key__17462,"\uFDD0'cljs.core/not-found");
{
var G__17464 = ((cljs.core.not_EQ_.call(null,entry__17463,"\uFDD0'cljs.core/not-found"))?cljs.core.assoc.call(null,ret__17460,key__17462,entry__17463):ret__17460);
var G__17465 = cljs.core.next.call(null,keys__17461);
ret__17460 = G__17464;
keys__17461 = G__17465;
continue;
}
} else
{return ret__17460;
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
cljs.core.PersistentHashSet.cljs$lang$ctorPrSeq = (function (this__2459__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashSet");
});
cljs.core.PersistentHashSet.cljs$lang$ctorPrWriter = (function (this__2459__auto__,writer__2460__auto__){
return cljs.core._write.call(null,writer__2460__auto__,"cljs.core/PersistentHashSet");
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__17469 = this;
return (new cljs.core.TransientHashSet(cljs.core.transient$.call(null,this__17469.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__17470 = this;
var h__2340__auto____17471 = this__17470.__hash;
if(!((h__2340__auto____17471 == null)))
{return h__2340__auto____17471;
} else
{var h__2340__auto____17472 = cljs.core.hash_iset.call(null,coll);
this__17470.__hash = h__2340__auto____17472;
return h__2340__auto____17472;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__17473 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__17474 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__17474.hash_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__17495 = null;
var G__17495__2 = (function (this_sym17475,k){
var this__17477 = this;
var this_sym17475__17478 = this;
var coll__17479 = this_sym17475__17478;
return coll__17479.cljs$core$ILookup$_lookup$arity$2(coll__17479,k);
});
var G__17495__3 = (function (this_sym17476,k,not_found){
var this__17477 = this;
var this_sym17476__17480 = this;
var coll__17481 = this_sym17476__17480;
return coll__17481.cljs$core$ILookup$_lookup$arity$3(coll__17481,k,not_found);
});
G__17495 = function(this_sym17476,k,not_found){
switch(arguments.length){
case 2:
return G__17495__2.call(this,this_sym17476,k);
case 3:
return G__17495__3.call(this,this_sym17476,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__17495;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (this_sym17467,args17468){
var this__17482 = this;
return this_sym17467.call.apply(this_sym17467,[this_sym17467].concat(args17468.slice()));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__17483 = this;
return (new cljs.core.PersistentHashSet(this__17483.meta,cljs.core.assoc.call(null,this__17483.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.toString = (function (){
var this__17484 = this;
var this__17485 = this;
return cljs.core.pr_str.call(null,this__17485);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__17486 = this;
return cljs.core.keys.call(null,this__17486.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__17487 = this;
return (new cljs.core.PersistentHashSet(this__17487.meta,cljs.core.dissoc.call(null,this__17487.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__17488 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__17489 = this;
var and__3822__auto____17490 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____17490)
{var and__3822__auto____17491 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____17491)
{return cljs.core.every_QMARK_.call(null,(function (p1__17466_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__17466_SHARP_);
}),other);
} else
{return and__3822__auto____17491;
}
} else
{return and__3822__auto____17490;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__17492 = this;
return (new cljs.core.PersistentHashSet(meta,this__17492.hash_map,this__17492.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__17493 = this;
return this__17493.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__17494 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentHashSet.EMPTY,this__17494.meta);
});
cljs.core.PersistentHashSet;
cljs.core.PersistentHashSet.EMPTY = (new cljs.core.PersistentHashSet(null,cljs.core.hash_map.call(null),0));
cljs.core.PersistentHashSet.fromArray = (function (items){
var len__17496 = cljs.core.count.call(null,items);
var i__17497 = 0;
var out__17498 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if((i__17497 < len__17496))
{{
var G__17499 = (i__17497 + 1);
var G__17500 = cljs.core.conj_BANG_.call(null,out__17498,(items[i__17497]));
i__17497 = G__17499;
out__17498 = G__17500;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__17498);
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
cljs.core.TransientHashSet.cljs$lang$ctorPrSeq = (function (this__2459__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashSet");
});
cljs.core.TransientHashSet.cljs$lang$ctorPrWriter = (function (this__2459__auto__,writer__2460__auto__){
return cljs.core._write.call(null,writer__2460__auto__,"cljs.core/TransientHashSet");
});
cljs.core.TransientHashSet.prototype.call = (function() {
var G__17518 = null;
var G__17518__2 = (function (this_sym17504,k){
var this__17506 = this;
var this_sym17504__17507 = this;
var tcoll__17508 = this_sym17504__17507;
if((cljs.core._lookup.call(null,this__17506.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__17518__3 = (function (this_sym17505,k,not_found){
var this__17506 = this;
var this_sym17505__17509 = this;
var tcoll__17510 = this_sym17505__17509;
if((cljs.core._lookup.call(null,this__17506.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__17518 = function(this_sym17505,k,not_found){
switch(arguments.length){
case 2:
return G__17518__2.call(this,this_sym17505,k);
case 3:
return G__17518__3.call(this,this_sym17505,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__17518;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (this_sym17502,args17503){
var this__17511 = this;
return this_sym17502.call.apply(this_sym17502,[this_sym17502].concat(args17503.slice()));
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var this__17512 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var this__17513 = this;
if((cljs.core._lookup.call(null,this__17513.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__17514 = this;
return cljs.core.count.call(null,this__17514.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var this__17515 = this;
this__17515.transient_map = cljs.core.dissoc_BANG_.call(null,this__17515.transient_map,v);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__17516 = this;
this__17516.transient_map = cljs.core.assoc_BANG_.call(null,this__17516.transient_map,o,null);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__17517 = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_.call(null,this__17517.transient_map),null));
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
cljs.core.PersistentTreeSet.cljs$lang$ctorPrSeq = (function (this__2459__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeSet");
});
cljs.core.PersistentTreeSet.cljs$lang$ctorPrWriter = (function (this__2459__auto__,writer__2460__auto__){
return cljs.core._write.call(null,writer__2460__auto__,"cljs.core/PersistentTreeSet");
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__17521 = this;
var h__2340__auto____17522 = this__17521.__hash;
if(!((h__2340__auto____17522 == null)))
{return h__2340__auto____17522;
} else
{var h__2340__auto____17523 = cljs.core.hash_iset.call(null,coll);
this__17521.__hash = h__2340__auto____17523;
return h__2340__auto____17523;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__17524 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__17525 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__17525.tree_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__17551 = null;
var G__17551__2 = (function (this_sym17526,k){
var this__17528 = this;
var this_sym17526__17529 = this;
var coll__17530 = this_sym17526__17529;
return coll__17530.cljs$core$ILookup$_lookup$arity$2(coll__17530,k);
});
var G__17551__3 = (function (this_sym17527,k,not_found){
var this__17528 = this;
var this_sym17527__17531 = this;
var coll__17532 = this_sym17527__17531;
return coll__17532.cljs$core$ILookup$_lookup$arity$3(coll__17532,k,not_found);
});
G__17551 = function(this_sym17527,k,not_found){
switch(arguments.length){
case 2:
return G__17551__2.call(this,this_sym17527,k);
case 3:
return G__17551__3.call(this,this_sym17527,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__17551;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (this_sym17519,args17520){
var this__17533 = this;
return this_sym17519.call.apply(this_sym17519,[this_sym17519].concat(args17520.slice()));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__17534 = this;
return (new cljs.core.PersistentTreeSet(this__17534.meta,cljs.core.assoc.call(null,this__17534.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__17535 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core.rseq.call(null,this__17535.tree_map));
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var this__17536 = this;
var this__17537 = this;
return cljs.core.pr_str.call(null,this__17537);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__17538 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq.call(null,this__17538.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__17539 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq_from.call(null,this__17539.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__17540 = this;
return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__17541 = this;
return cljs.core._comparator.call(null,this__17541.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__17542 = this;
return cljs.core.keys.call(null,this__17542.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__17543 = this;
return (new cljs.core.PersistentTreeSet(this__17543.meta,cljs.core.dissoc.call(null,this__17543.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__17544 = this;
return cljs.core.count.call(null,this__17544.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__17545 = this;
var and__3822__auto____17546 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____17546)
{var and__3822__auto____17547 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____17547)
{return cljs.core.every_QMARK_.call(null,(function (p1__17501_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__17501_SHARP_);
}),other);
} else
{return and__3822__auto____17547;
}
} else
{return and__3822__auto____17546;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__17548 = this;
return (new cljs.core.PersistentTreeSet(meta,this__17548.tree_map,this__17548.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__17549 = this;
return this__17549.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__17550 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeSet.EMPTY,this__17550.meta);
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
var G__17556__delegate = function (keys){
var in__17554 = cljs.core.seq.call(null,keys);
var out__17555 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if(cljs.core.seq.call(null,in__17554))
{{
var G__17557 = cljs.core.next.call(null,in__17554);
var G__17558 = cljs.core.conj_BANG_.call(null,out__17555,cljs.core.first.call(null,in__17554));
in__17554 = G__17557;
out__17555 = G__17558;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__17555);
}
break;
}
};
var G__17556 = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__17556__delegate.call(this, keys);
};
G__17556.cljs$lang$maxFixedArity = 0;
G__17556.cljs$lang$applyTo = (function (arglist__17559){
var keys = cljs.core.seq(arglist__17559);;
return G__17556__delegate(keys);
});
G__17556.cljs$lang$arity$variadic = G__17556__delegate;
return G__17556;
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
sorted_set.cljs$lang$applyTo = (function (arglist__17560){
var keys = cljs.core.seq(arglist__17560);;
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
sorted_set_by.cljs$lang$applyTo = (function (arglist__17562){
var comparator = cljs.core.first(arglist__17562);
var keys = cljs.core.rest(arglist__17562);
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
{var n__17568 = cljs.core.count.call(null,coll);
return cljs.core.reduce.call(null,(function (v,i){
var temp__3971__auto____17569 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));
if(cljs.core.truth_(temp__3971__auto____17569))
{var e__17570 = temp__3971__auto____17569;
return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__17570));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__17568,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__17561_SHARP_){
var temp__3971__auto____17571 = cljs.core.find.call(null,smap,p1__17561_SHARP_);
if(cljs.core.truth_(temp__3971__auto____17571))
{var e__17572 = temp__3971__auto____17571;
return cljs.core.second.call(null,e__17572);
} else
{return p1__17561_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__17602 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__17595,seen){
while(true){
var vec__17596__17597 = p__17595;
var f__17598 = cljs.core.nth.call(null,vec__17596__17597,0,null);
var xs__17599 = vec__17596__17597;
var temp__3974__auto____17600 = cljs.core.seq.call(null,xs__17599);
if(temp__3974__auto____17600)
{var s__17601 = temp__3974__auto____17600;
if(cljs.core.contains_QMARK_.call(null,seen,f__17598))
{{
var G__17603 = cljs.core.rest.call(null,s__17601);
var G__17604 = seen;
p__17595 = G__17603;
seen = G__17604;
continue;
}
} else
{return cljs.core.cons.call(null,f__17598,step.call(null,cljs.core.rest.call(null,s__17601),cljs.core.conj.call(null,seen,f__17598)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
}),null));
});
return step__17602.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});
cljs.core.butlast = (function butlast(s){
var ret__17607 = cljs.core.PersistentVector.EMPTY;
var s__17608 = s;
while(true){
if(cljs.core.next.call(null,s__17608))
{{
var G__17609 = cljs.core.conj.call(null,ret__17607,cljs.core.first.call(null,s__17608));
var G__17610 = cljs.core.next.call(null,s__17608);
ret__17607 = G__17609;
s__17608 = G__17610;
continue;
}
} else
{return cljs.core.seq.call(null,ret__17607);
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
{if((function (){var or__3824__auto____17613 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____17613)
{return or__3824__auto____17613;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__17614 = x.lastIndexOf("/");
if((i__17614 < 0))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__17614 + 1));
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
if((function (){var or__3824__auto____17617 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____17617)
{return or__3824__auto____17617;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__17618 = x.lastIndexOf("/");
if((i__17618 > -1))
{return cljs.core.subs.call(null,x,2,i__17618);
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
var map__17625 = cljs.core.ObjMap.EMPTY;
var ks__17626 = cljs.core.seq.call(null,keys);
var vs__17627 = cljs.core.seq.call(null,vals);
while(true){
if((function (){var and__3822__auto____17628 = ks__17626;
if(and__3822__auto____17628)
{return vs__17627;
} else
{return and__3822__auto____17628;
}
})())
{{
var G__17629 = cljs.core.assoc.call(null,map__17625,cljs.core.first.call(null,ks__17626),cljs.core.first.call(null,vs__17627));
var G__17630 = cljs.core.next.call(null,ks__17626);
var G__17631 = cljs.core.next.call(null,vs__17627);
map__17625 = G__17629;
ks__17626 = G__17630;
vs__17627 = G__17631;
continue;
}
} else
{return map__17625;
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
var G__17634__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__17619_SHARP_,p2__17620_SHARP_){
return max_key.call(null,k,p1__17619_SHARP_,p2__17620_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__17634 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__17634__delegate.call(this, k, x, y, more);
};
G__17634.cljs$lang$maxFixedArity = 3;
G__17634.cljs$lang$applyTo = (function (arglist__17635){
var k = cljs.core.first(arglist__17635);
var x = cljs.core.first(cljs.core.next(arglist__17635));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__17635)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__17635)));
return G__17634__delegate(k, x, y, more);
});
G__17634.cljs$lang$arity$variadic = G__17634__delegate;
return G__17634;
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
var G__17636__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__17632_SHARP_,p2__17633_SHARP_){
return min_key.call(null,k,p1__17632_SHARP_,p2__17633_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__17636 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__17636__delegate.call(this, k, x, y, more);
};
G__17636.cljs$lang$maxFixedArity = 3;
G__17636.cljs$lang$applyTo = (function (arglist__17637){
var k = cljs.core.first(arglist__17637);
var x = cljs.core.first(cljs.core.next(arglist__17637));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__17637)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__17637)));
return G__17636__delegate(k, x, y, more);
});
G__17636.cljs$lang$arity$variadic = G__17636__delegate;
return G__17636;
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
var temp__3974__auto____17640 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____17640)
{var s__17641 = temp__3974__auto____17640;
return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__17641),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__17641)));
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
var temp__3974__auto____17644 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____17644)
{var s__17645 = temp__3974__auto____17644;
if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__17645))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__17645),take_while.call(null,pred,cljs.core.rest.call(null,s__17645)));
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
var comp__17647 = cljs.core._comparator.call(null,sc);
return test.call(null,comp__17647.call(null,cljs.core._entry_key.call(null,sc,e),key),0);
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
var include__17659 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._GT_,cljs.core._GT__EQ_]).call(null,test)))
{var temp__3974__auto____17660 = cljs.core._sorted_seq_from.call(null,sc,key,true);
if(cljs.core.truth_(temp__3974__auto____17660))
{var vec__17661__17662 = temp__3974__auto____17660;
var e__17663 = cljs.core.nth.call(null,vec__17661__17662,0,null);
var s__17664 = vec__17661__17662;
if(cljs.core.truth_(include__17659.call(null,e__17663)))
{return s__17664;
} else
{return cljs.core.next.call(null,s__17664);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__17659,cljs.core._sorted_seq.call(null,sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____17665 = cljs.core._sorted_seq_from.call(null,sc,start_key,true);
if(cljs.core.truth_(temp__3974__auto____17665))
{var vec__17666__17667 = temp__3974__auto____17665;
var e__17668 = cljs.core.nth.call(null,vec__17666__17667,0,null);
var s__17669 = vec__17666__17667;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,start_test,start_key).call(null,e__17668))?s__17669:cljs.core.next.call(null,s__17669)));
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
var include__17681 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._LT_,cljs.core._LT__EQ_]).call(null,test)))
{var temp__3974__auto____17682 = cljs.core._sorted_seq_from.call(null,sc,key,false);
if(cljs.core.truth_(temp__3974__auto____17682))
{var vec__17683__17684 = temp__3974__auto____17682;
var e__17685 = cljs.core.nth.call(null,vec__17683__17684,0,null);
var s__17686 = vec__17683__17684;
if(cljs.core.truth_(include__17681.call(null,e__17685)))
{return s__17686;
} else
{return cljs.core.next.call(null,s__17686);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__17681,cljs.core._sorted_seq.call(null,sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____17687 = cljs.core._sorted_seq_from.call(null,sc,end_key,false);
if(cljs.core.truth_(temp__3974__auto____17687))
{var vec__17688__17689 = temp__3974__auto____17687;
var e__17690 = cljs.core.nth.call(null,vec__17688__17689,0,null);
var s__17691 = vec__17688__17689;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,end_test,end_key).call(null,e__17690))?s__17691:cljs.core.next.call(null,s__17691)));
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
cljs.core.Range.cljs$lang$ctorPrSeq = (function (this__2459__auto__){
return cljs.core.list.call(null,"cljs.core/Range");
});
cljs.core.Range.cljs$lang$ctorPrWriter = (function (this__2459__auto__,writer__2460__auto__){
return cljs.core._write.call(null,writer__2460__auto__,"cljs.core/Range");
});
cljs.core.Range.prototype.cljs$core$IHash$_hash$arity$1 = (function (rng){
var this__17692 = this;
var h__2340__auto____17693 = this__17692.__hash;
if(!((h__2340__auto____17693 == null)))
{return h__2340__auto____17693;
} else
{var h__2340__auto____17694 = cljs.core.hash_coll.call(null,rng);
this__17692.__hash = h__2340__auto____17694;
return h__2340__auto____17694;
}
});
cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){
var this__17695 = this;
if((this__17695.step > 0))
{if(((this__17695.start + this__17695.step) < this__17695.end))
{return (new cljs.core.Range(this__17695.meta,(this__17695.start + this__17695.step),this__17695.end,this__17695.step,null));
} else
{return null;
}
} else
{if(((this__17695.start + this__17695.step) > this__17695.end))
{return (new cljs.core.Range(this__17695.meta,(this__17695.start + this__17695.step),this__17695.end,this__17695.step,null));
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var this__17696 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.toString = (function (){
var this__17697 = this;
var this__17698 = this;
return cljs.core.pr_str.call(null,this__17698);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var this__17699 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){
var this__17700 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var this__17701 = this;
if((this__17701.step > 0))
{if((this__17701.start < this__17701.end))
{return rng;
} else
{return null;
}
} else
{if((this__17701.start > this__17701.end))
{return rng;
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var this__17702 = this;
if(cljs.core.not.call(null,rng.cljs$core$ISeqable$_seq$arity$1(rng)))
{return 0;
} else
{return Math.ceil(((this__17702.end - this__17702.start) / this__17702.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var this__17703 = this;
return this__17703.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var this__17704 = this;
if(!((rng.cljs$core$ISeqable$_seq$arity$1(rng) == null)))
{return (new cljs.core.Range(this__17704.meta,(this__17704.start + this__17704.step),this__17704.end,this__17704.step,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var this__17705 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta){
var this__17706 = this;
return (new cljs.core.Range(meta,this__17706.start,this__17706.end,this__17706.step,this__17706.__hash));
});
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var this__17707 = this;
return this__17707.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var this__17708 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__17708.start + (n * this__17708.step));
} else
{if((function (){var and__3822__auto____17709 = (this__17708.start > this__17708.end);
if(and__3822__auto____17709)
{return (this__17708.step === 0);
} else
{return and__3822__auto____17709;
}
})())
{return this__17708.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var this__17710 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__17710.start + (n * this__17710.step));
} else
{if((function (){var and__3822__auto____17711 = (this__17710.start > this__17710.end);
if(and__3822__auto____17711)
{return (this__17710.step === 0);
} else
{return and__3822__auto____17711;
}
})())
{return this__17710.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var this__17712 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__17712.meta);
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
var temp__3974__auto____17715 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____17715)
{var s__17716 = temp__3974__auto____17715;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__17716),take_nth.call(null,n,cljs.core.drop.call(null,n,s__17716)));
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
var temp__3974__auto____17723 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____17723)
{var s__17724 = temp__3974__auto____17723;
var fst__17725 = cljs.core.first.call(null,s__17724);
var fv__17726 = f.call(null,fst__17725);
var run__17727 = cljs.core.cons.call(null,fst__17725,cljs.core.take_while.call(null,(function (p1__17717_SHARP_){
return cljs.core._EQ_.call(null,fv__17726,f.call(null,p1__17717_SHARP_));
}),cljs.core.next.call(null,s__17724)));
return cljs.core.cons.call(null,run__17727,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__17727),s__17724))));
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
var temp__3971__auto____17742 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____17742)
{var s__17743 = temp__3971__auto____17742;
return reductions.call(null,f,cljs.core.first.call(null,s__17743),cljs.core.rest.call(null,s__17743));
} else
{return cljs.core.list.call(null,f.call(null));
}
}),null));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____17744 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____17744)
{var s__17745 = temp__3974__auto____17744;
return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__17745)),cljs.core.rest.call(null,s__17745));
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
var G__17748 = null;
var G__17748__0 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__17748__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__17748__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__17748__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__17748__4 = (function() { 
var G__17749__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__17749 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__17749__delegate.call(this, x, y, z, args);
};
G__17749.cljs$lang$maxFixedArity = 3;
G__17749.cljs$lang$applyTo = (function (arglist__17750){
var x = cljs.core.first(arglist__17750);
var y = cljs.core.first(cljs.core.next(arglist__17750));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__17750)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__17750)));
return G__17749__delegate(x, y, z, args);
});
G__17749.cljs$lang$arity$variadic = G__17749__delegate;
return G__17749;
})()
;
G__17748 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__17748__0.call(this);
case 1:
return G__17748__1.call(this,x);
case 2:
return G__17748__2.call(this,x,y);
case 3:
return G__17748__3.call(this,x,y,z);
default:
return G__17748__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__17748.cljs$lang$maxFixedArity = 3;
G__17748.cljs$lang$applyTo = G__17748__4.cljs$lang$applyTo;
return G__17748;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__17751 = null;
var G__17751__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__17751__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__17751__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__17751__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__17751__4 = (function() { 
var G__17752__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__17752 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__17752__delegate.call(this, x, y, z, args);
};
G__17752.cljs$lang$maxFixedArity = 3;
G__17752.cljs$lang$applyTo = (function (arglist__17753){
var x = cljs.core.first(arglist__17753);
var y = cljs.core.first(cljs.core.next(arglist__17753));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__17753)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__17753)));
return G__17752__delegate(x, y, z, args);
});
G__17752.cljs$lang$arity$variadic = G__17752__delegate;
return G__17752;
})()
;
G__17751 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__17751__0.call(this);
case 1:
return G__17751__1.call(this,x);
case 2:
return G__17751__2.call(this,x,y);
case 3:
return G__17751__3.call(this,x,y,z);
default:
return G__17751__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__17751.cljs$lang$maxFixedArity = 3;
G__17751.cljs$lang$applyTo = G__17751__4.cljs$lang$applyTo;
return G__17751;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__17754 = null;
var G__17754__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__17754__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__17754__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__17754__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__17754__4 = (function() { 
var G__17755__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__17755 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__17755__delegate.call(this, x, y, z, args);
};
G__17755.cljs$lang$maxFixedArity = 3;
G__17755.cljs$lang$applyTo = (function (arglist__17756){
var x = cljs.core.first(arglist__17756);
var y = cljs.core.first(cljs.core.next(arglist__17756));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__17756)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__17756)));
return G__17755__delegate(x, y, z, args);
});
G__17755.cljs$lang$arity$variadic = G__17755__delegate;
return G__17755;
})()
;
G__17754 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__17754__0.call(this);
case 1:
return G__17754__1.call(this,x);
case 2:
return G__17754__2.call(this,x,y);
case 3:
return G__17754__3.call(this,x,y,z);
default:
return G__17754__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__17754.cljs$lang$maxFixedArity = 3;
G__17754.cljs$lang$applyTo = G__17754__4.cljs$lang$applyTo;
return G__17754;
})()
});
var juxt__4 = (function() { 
var G__17757__delegate = function (f,g,h,fs){
var fs__17747 = cljs.core.list_STAR_.call(null,f,g,h,fs);
return (function() {
var G__17758 = null;
var G__17758__0 = (function (){
return cljs.core.reduce.call(null,(function (p1__17728_SHARP_,p2__17729_SHARP_){
return cljs.core.conj.call(null,p1__17728_SHARP_,p2__17729_SHARP_.call(null));
}),cljs.core.PersistentVector.EMPTY,fs__17747);
});
var G__17758__1 = (function (x){
return cljs.core.reduce.call(null,(function (p1__17730_SHARP_,p2__17731_SHARP_){
return cljs.core.conj.call(null,p1__17730_SHARP_,p2__17731_SHARP_.call(null,x));
}),cljs.core.PersistentVector.EMPTY,fs__17747);
});
var G__17758__2 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__17732_SHARP_,p2__17733_SHARP_){
return cljs.core.conj.call(null,p1__17732_SHARP_,p2__17733_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.EMPTY,fs__17747);
});
var G__17758__3 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__17734_SHARP_,p2__17735_SHARP_){
return cljs.core.conj.call(null,p1__17734_SHARP_,p2__17735_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.EMPTY,fs__17747);
});
var G__17758__4 = (function() { 
var G__17759__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__17736_SHARP_,p2__17737_SHARP_){
return cljs.core.conj.call(null,p1__17736_SHARP_,cljs.core.apply.call(null,p2__17737_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.EMPTY,fs__17747);
};
var G__17759 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__17759__delegate.call(this, x, y, z, args);
};
G__17759.cljs$lang$maxFixedArity = 3;
G__17759.cljs$lang$applyTo = (function (arglist__17760){
var x = cljs.core.first(arglist__17760);
var y = cljs.core.first(cljs.core.next(arglist__17760));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__17760)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__17760)));
return G__17759__delegate(x, y, z, args);
});
G__17759.cljs$lang$arity$variadic = G__17759__delegate;
return G__17759;
})()
;
G__17758 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__17758__0.call(this);
case 1:
return G__17758__1.call(this,x);
case 2:
return G__17758__2.call(this,x,y);
case 3:
return G__17758__3.call(this,x,y,z);
default:
return G__17758__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__17758.cljs$lang$maxFixedArity = 3;
G__17758.cljs$lang$applyTo = G__17758__4.cljs$lang$applyTo;
return G__17758;
})()
};
var G__17757 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__17757__delegate.call(this, f, g, h, fs);
};
G__17757.cljs$lang$maxFixedArity = 3;
G__17757.cljs$lang$applyTo = (function (arglist__17761){
var f = cljs.core.first(arglist__17761);
var g = cljs.core.first(cljs.core.next(arglist__17761));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__17761)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__17761)));
return G__17757__delegate(f, g, h, fs);
});
G__17757.cljs$lang$arity$variadic = G__17757__delegate;
return G__17757;
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
var G__17764 = cljs.core.next.call(null,coll);
coll = G__17764;
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
if(cljs.core.truth_((function (){var and__3822__auto____17763 = cljs.core.seq.call(null,coll);
if(and__3822__auto____17763)
{return (n > 0);
} else
{return and__3822__auto____17763;
}
})()))
{{
var G__17765 = (n - 1);
var G__17766 = cljs.core.next.call(null,coll);
n = G__17765;
coll = G__17766;
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
var matches__17768 = re.exec(s);
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__17768),s))
{if((cljs.core.count.call(null,matches__17768) === 1))
{return cljs.core.first.call(null,matches__17768);
} else
{return cljs.core.vec.call(null,matches__17768);
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
var matches__17770 = re.exec(s);
if((matches__17770 == null))
{return null;
} else
{if((cljs.core.count.call(null,matches__17770) === 1))
{return cljs.core.first.call(null,matches__17770);
} else
{return cljs.core.vec.call(null,matches__17770);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__17775 = cljs.core.re_find.call(null,re,s);
var match_idx__17776 = s.search(re);
var match_str__17777 = ((cljs.core.coll_QMARK_.call(null,match_data__17775))?cljs.core.first.call(null,match_data__17775):match_data__17775);
var post_match__17778 = cljs.core.subs.call(null,s,(match_idx__17776 + cljs.core.count.call(null,match_str__17777)));
if(cljs.core.truth_(match_data__17775))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__17775,re_seq.call(null,re,post_match__17778));
}),null));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__17785__17786 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___17787 = cljs.core.nth.call(null,vec__17785__17786,0,null);
var flags__17788 = cljs.core.nth.call(null,vec__17785__17786,1,null);
var pattern__17789 = cljs.core.nth.call(null,vec__17785__17786,2,null);
return (new RegExp(pattern__17789,flags__17788));
});
/**
* Do not use this.  It is kept for backwards compatibility with the
* old IPrintable protocol.
*/
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin], true),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep], true),cljs.core.map.call(null,(function (p1__17779_SHARP_){
return print_one.call(null,p1__17779_SHARP_,opts);
}),coll))),cljs.core.PersistentVector.fromArray([end], true));
});
cljs.core.pr_sequential_writer = (function pr_sequential_writer(writer,print_one,begin,sep,end,opts,coll){
cljs.core._write.call(null,writer,begin);
if(cljs.core.seq.call(null,coll))
{print_one.call(null,cljs.core.first.call(null,coll),writer,opts);
} else
{}
var G__17793__17794 = cljs.core.seq.call(null,cljs.core.next.call(null,coll));
while(true){
if(G__17793__17794)
{var o__17795 = cljs.core.first.call(null,G__17793__17794);
cljs.core._write.call(null,writer,sep);
print_one.call(null,o__17795,writer,opts);
{
var G__17796 = cljs.core.next.call(null,G__17793__17794);
G__17793__17794 = G__17796;
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
var G__17800__17801 = cljs.core.seq.call(null,ss);
while(true){
if(G__17800__17801)
{var s__17802 = cljs.core.first.call(null,G__17800__17801);
cljs.core._write.call(null,writer,s__17802);
{
var G__17803 = cljs.core.next.call(null,G__17800__17801);
G__17800__17801 = G__17803;
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
write_all.cljs$lang$applyTo = (function (arglist__17804){
var writer = cljs.core.first(arglist__17804);
var ss = cljs.core.rest(arglist__17804);
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
cljs.core.StringBufferWriter.cljs$lang$ctorPrSeq = (function (this__2459__auto__){
return cljs.core.list.call(null,"cljs.core/StringBufferWriter");
});
cljs.core.StringBufferWriter.cljs$lang$ctorPrWriter = (function (this__2459__auto__,writer__2460__auto__){
return cljs.core._write.call(null,writer__2460__auto__,"cljs.core/StringBufferWriter");
});
cljs.core.StringBufferWriter.prototype.cljs$core$IWriter$_write$arity$2 = (function (_,s){
var this__17805 = this;
return this__17805.sb.append(s);
});
cljs.core.StringBufferWriter.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var this__17806 = this;
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3822__auto____17816 = cljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3822__auto____17816))
{var and__3822__auto____17820 = (function (){var G__17817__17818 = obj;
if(G__17817__17818)
{if((function (){var or__3824__auto____17819 = (G__17817__17818.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____17819)
{return or__3824__auto____17819;
} else
{return G__17817__17818.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__17817__17818.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__17817__17818);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__17817__17818);
}
})();
if(cljs.core.truth_(and__3822__auto____17820))
{return cljs.core.meta.call(null,obj);
} else
{return and__3822__auto____17820;
}
} else
{return and__3822__auto____17816;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"], true),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "], true)):null),(((function (){var and__3822__auto____17821 = !((obj == null));
if(and__3822__auto____17821)
{return obj.cljs$lang$type;
} else
{return and__3822__auto____17821;
}
})())?obj.cljs$lang$ctorPrSeq(obj):(((function (){var G__17822__17823 = obj;
if(G__17822__17823)
{if((function (){var or__3824__auto____17824 = (G__17822__17823.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3824__auto____17824)
{return or__3824__auto____17824;
} else
{return G__17822__17823.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__17822__17823.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__17822__17823);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__17822__17823);
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
{if(cljs.core.truth_((function (){var and__3822__auto____17837 = cljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3822__auto____17837))
{var and__3822__auto____17841 = (function (){var G__17838__17839 = obj;
if(G__17838__17839)
{if((function (){var or__3824__auto____17840 = (G__17838__17839.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____17840)
{return or__3824__auto____17840;
} else
{return G__17838__17839.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__17838__17839.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__17838__17839);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__17838__17839);
}
})();
if(cljs.core.truth_(and__3822__auto____17841))
{return cljs.core.meta.call(null,obj);
} else
{return and__3822__auto____17841;
}
} else
{return and__3822__auto____17837;
}
})()))
{cljs.core._write.call(null,writer,"^");
pr_writer.call(null,cljs.core.meta.call(null,obj),writer,opts);
cljs.core._write.call(null,writer," ");
} else
{}
if((function (){var and__3822__auto____17842 = !((obj == null));
if(and__3822__auto____17842)
{return obj.cljs$lang$type;
} else
{return and__3822__auto____17842;
}
})())
{return obj.cljs$lang$ctorPrWriter(writer,opts);
} else
{if((function (){var G__17843__17844 = obj;
if(G__17843__17844)
{if((function (){var or__3824__auto____17845 = (G__17843__17844.cljs$lang$protocol_mask$partition0$ & 2147483648);
if(or__3824__auto____17845)
{return or__3824__auto____17845;
} else
{return G__17843__17844.cljs$core$IPrintWithWriter$;
}
})())
{return true;
} else
{if((!G__17843__17844.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintWithWriter,G__17843__17844);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintWithWriter,G__17843__17844);
}
})())
{return cljs.core._pr_writer.call(null,obj,writer,opts);
} else
{if((function (){var G__17846__17847 = obj;
if(G__17846__17847)
{if((function (){var or__3824__auto____17848 = (G__17846__17847.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3824__auto____17848)
{return or__3824__auto____17848;
} else
{return G__17846__17847.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__17846__17847.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__17846__17847);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__17846__17847);
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
var G__17852__17853 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));
while(true){
if(G__17852__17853)
{var obj__17854 = cljs.core.first.call(null,G__17852__17853);
cljs.core._write.call(null,writer," ");
cljs.core.pr_writer.call(null,obj__17854,writer,opts);
{
var G__17855 = cljs.core.next.call(null,G__17852__17853);
G__17852__17853 = G__17855;
continue;
}
} else
{return null;
}
break;
}
});
cljs.core.pr_sb_with_opts = (function pr_sb_with_opts(objs,opts){
var sb__17858 = (new goog.string.StringBuffer());
var writer__17859 = (new cljs.core.StringBufferWriter(sb__17858));
cljs.core.pr_seq_writer.call(null,objs,writer__17859,opts);
cljs.core._flush.call(null,writer__17859);
return sb__17858;
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
{var sb__17861 = cljs.core.pr_sb_with_opts.call(null,objs,opts);
sb__17861.append("\n");
return [cljs.core.str(sb__17861)].join('');
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
pr_str.cljs$lang$applyTo = (function (arglist__17862){
var objs = cljs.core.seq(arglist__17862);;
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
prn_str.cljs$lang$applyTo = (function (arglist__17863){
var objs = cljs.core.seq(arglist__17863);;
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
pr.cljs$lang$applyTo = (function (arglist__17864){
var objs = cljs.core.seq(arglist__17864);;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__17865){
var objs = cljs.core.seq(arglist__17865);;
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
print_str.cljs$lang$applyTo = (function (arglist__17866){
var objs = cljs.core.seq(arglist__17866);;
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
println.cljs$lang$applyTo = (function (arglist__17867){
var objs = cljs.core.seq(arglist__17867);;
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
println_str.cljs$lang$applyTo = (function (arglist__17868){
var objs = cljs.core.seq(arglist__17868);;
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
prn.cljs$lang$applyTo = (function (arglist__17869){
var objs = cljs.core.seq(arglist__17869);;
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
printf.cljs$lang$applyTo = (function (arglist__17870){
var fmt = cljs.core.first(arglist__17870);
var args = cljs.core.rest(arglist__17870);
return printf__delegate(fmt, args);
});
printf.cljs$lang$arity$variadic = printf__delegate;
return printf;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__17871 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__17871,"{",", ","}",opts,coll);
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
var pr_pair__17872 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__17872,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__17873 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__17873,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,[cljs.core.str(":"),cljs.core.str((function (){var temp__3974__auto____17874 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____17874))
{var nspc__17875 = temp__3974__auto____17874;
return [cljs.core.str(nspc__17875),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str((function (){var temp__3974__auto____17876 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____17876))
{var nspc__17877 = temp__3974__auto____17876;
return [cljs.core.str(nspc__17877),cljs.core.str("/")].join('');
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
var pr_pair__17878 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__17878,"{",", ","}",opts,coll);
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
var normalize__17880 = (function (n,len){
var ns__17879 = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count.call(null,ns__17879) < len))
{{
var G__17882 = [cljs.core.str("0"),cljs.core.str(ns__17879)].join('');
ns__17879 = G__17882;
continue;
}
} else
{return ns__17879;
}
break;
}
});
return cljs.core.list.call(null,[cljs.core.str("#inst \""),cljs.core.str(d.getUTCFullYear()),cljs.core.str("-"),cljs.core.str(normalize__17880.call(null,(d.getUTCMonth() + 1),2)),cljs.core.str("-"),cljs.core.str(normalize__17880.call(null,d.getUTCDate(),2)),cljs.core.str("T"),cljs.core.str(normalize__17880.call(null,d.getUTCHours(),2)),cljs.core.str(":"),cljs.core.str(normalize__17880.call(null,d.getUTCMinutes(),2)),cljs.core.str(":"),cljs.core.str(normalize__17880.call(null,d.getUTCSeconds(),2)),cljs.core.str("."),cljs.core.str(normalize__17880.call(null,d.getUTCMilliseconds(),3)),cljs.core.str("-"),cljs.core.str("00:00\"")].join(''));
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
var pr_pair__17881 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__17881,"{",", ","}",opts,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.HashMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var pr_pair__17883 = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair__17883,"{",", ","}",opts,coll);
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
var pr_pair__17884 = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair__17884,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var pr_pair__17885 = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair__17885,"{",", ","}",opts,coll);
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
var temp__3974__auto____17886 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____17886))
{var nspc__17887 = temp__3974__auto____17886;
cljs.core.write_all.call(null,writer,[cljs.core.str(nspc__17887)].join(''),"/");
} else
{}
return cljs.core._write.call(null,writer,cljs.core.name.call(null,obj));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{var temp__3974__auto____17888 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____17888))
{var nspc__17889 = temp__3974__auto____17888;
cljs.core.write_all.call(null,writer,[cljs.core.str(nspc__17889)].join(''),"/");
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
var pr_pair__17890 = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair__17890,"{",", ","}",opts,coll);
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
var normalize__17892 = (function (n,len){
var ns__17891 = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count.call(null,ns__17891) < len))
{{
var G__17894 = [cljs.core.str("0"),cljs.core.str(ns__17891)].join('');
ns__17891 = G__17894;
continue;
}
} else
{return ns__17891;
}
break;
}
});
return cljs.core.write_all.call(null,writer,"#inst \"",[cljs.core.str(d.getUTCFullYear())].join(''),"-",normalize__17892.call(null,(d.getUTCMonth() + 1),2),"-",normalize__17892.call(null,d.getUTCDate(),2),"T",normalize__17892.call(null,d.getUTCHours(),2),":",normalize__17892.call(null,d.getUTCMinutes(),2),":",normalize__17892.call(null,d.getUTCSeconds(),2),".",normalize__17892.call(null,d.getUTCMilliseconds(),3),"-","00:00\"");
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
var pr_pair__17893 = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair__17893,"{",", ","}",opts,coll);
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
cljs.core.Atom.cljs$lang$ctorPrSeq = (function (this__2459__auto__){
return cljs.core.list.call(null,"cljs.core/Atom");
});
cljs.core.Atom.cljs$lang$ctorPrWriter = (function (this__2459__auto__,writer__2460__auto__){
return cljs.core._write.call(null,writer__2460__auto__,"cljs.core/Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__17895 = this;
return goog.getUid(this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var this__17896 = this;
var G__17897__17898 = cljs.core.seq.call(null,this__17896.watches);
while(true){
if(G__17897__17898)
{var vec__17899__17900 = cljs.core.first.call(null,G__17897__17898);
var key__17901 = cljs.core.nth.call(null,vec__17899__17900,0,null);
var f__17902 = cljs.core.nth.call(null,vec__17899__17900,1,null);
f__17902.call(null,key__17901,this$,oldval,newval);
{
var G__17910 = cljs.core.next.call(null,G__17897__17898);
G__17897__17898 = G__17910;
continue;
}
} else
{return null;
}
break;
}
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var this__17903 = this;
return this$.watches = cljs.core.assoc.call(null,this__17903.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var this__17904 = this;
return this$.watches = cljs.core.dissoc.call(null,this__17904.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var this__17905 = this;
cljs.core._write.call(null,writer,"#<Atom: ");
cljs.core._pr_writer.call(null,this__17905.state,writer,opts);
return cljs.core._write.call(null,writer,">");
});
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var this__17906 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "], true),cljs.core._pr_seq.call(null,this__17906.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var this__17907 = this;
return this__17907.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__17908 = this;
return this__17908.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__17909 = this;
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
var G__17922__delegate = function (x,p__17911){
var map__17917__17918 = p__17911;
var map__17917__17919 = ((cljs.core.seq_QMARK_.call(null,map__17917__17918))?cljs.core.apply.call(null,cljs.core.hash_map,map__17917__17918):map__17917__17918);
var validator__17920 = cljs.core._lookup.call(null,map__17917__17919,"\uFDD0'validator",null);
var meta__17921 = cljs.core._lookup.call(null,map__17917__17919,"\uFDD0'meta",null);
return (new cljs.core.Atom(x,meta__17921,validator__17920,null));
};
var G__17922 = function (x,var_args){
var p__17911 = null;
if (goog.isDef(var_args)) {
  p__17911 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__17922__delegate.call(this, x, p__17911);
};
G__17922.cljs$lang$maxFixedArity = 1;
G__17922.cljs$lang$applyTo = (function (arglist__17923){
var x = cljs.core.first(arglist__17923);
var p__17911 = cljs.core.rest(arglist__17923);
return G__17922__delegate(x, p__17911);
});
G__17922.cljs$lang$arity$variadic = G__17922__delegate;
return G__17922;
})()
;
atom = function(x,var_args){
var p__17911 = var_args;
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
var temp__3974__auto____17927 = a.validator;
if(cljs.core.truth_(temp__3974__auto____17927))
{var validate__17928 = temp__3974__auto____17927;
if(cljs.core.truth_(validate__17928.call(null,new_value)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",6683))))].join('')));
}
} else
{}
var old_value__17929 = a.state;
a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__17929,new_value);
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
var G__17930__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__17930 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__17930__delegate.call(this, a, f, x, y, z, more);
};
G__17930.cljs$lang$maxFixedArity = 5;
G__17930.cljs$lang$applyTo = (function (arglist__17931){
var a = cljs.core.first(arglist__17931);
var f = cljs.core.first(cljs.core.next(arglist__17931));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__17931)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__17931))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__17931)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__17931)))));
return G__17930__delegate(a, f, x, y, z, more);
});
G__17930.cljs$lang$arity$variadic = G__17930__delegate;
return G__17930;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__17932){
var iref = cljs.core.first(arglist__17932);
var f = cljs.core.first(cljs.core.next(arglist__17932));
var args = cljs.core.rest(cljs.core.next(arglist__17932));
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
cljs.core.Delay.cljs$lang$ctorPrSeq = (function (this__2459__auto__){
return cljs.core.list.call(null,"cljs.core/Delay");
});
cljs.core.Delay.cljs$lang$ctorPrWriter = (function (this__2459__auto__,writer__2460__auto__){
return cljs.core._write.call(null,writer__2460__auto__,"cljs.core/Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (d){
var this__17933 = this;
return (new cljs.core.Keyword("\uFDD0'done")).call(null,cljs.core.deref.call(null,this__17933.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__17934 = this;
return (new cljs.core.Keyword("\uFDD0'value")).call(null,cljs.core.swap_BANG_.call(null,this__17934.state,(function (p__17935){
var map__17936__17937 = p__17935;
var map__17936__17938 = ((cljs.core.seq_QMARK_.call(null,map__17936__17937))?cljs.core.apply.call(null,cljs.core.hash_map,map__17936__17937):map__17936__17937);
var curr_state__17939 = map__17936__17938;
var done__17940 = cljs.core._lookup.call(null,map__17936__17938,"\uFDD0'done",null);
if(cljs.core.truth_(done__17940))
{return curr_state__17939;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__17934.f.call(null)});
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
var map__17961__17962 = options;
var map__17961__17963 = ((cljs.core.seq_QMARK_.call(null,map__17961__17962))?cljs.core.apply.call(null,cljs.core.hash_map,map__17961__17962):map__17961__17962);
var keywordize_keys__17964 = cljs.core._lookup.call(null,map__17961__17963,"\uFDD0'keywordize-keys",null);
var keyfn__17965 = (cljs.core.truth_(keywordize_keys__17964)?cljs.core.keyword:cljs.core.str);
var f__17980 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,(function (){var iter__2621__auto____17979 = (function iter__17973(s__17974){
return (new cljs.core.LazySeq(null,false,(function (){
var s__17974__17977 = s__17974;
while(true){
if(cljs.core.seq.call(null,s__17974__17977))
{var k__17978 = cljs.core.first.call(null,s__17974__17977);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__17965.call(null,k__17978),thisfn.call(null,(x[k__17978]))], true),iter__17973.call(null,cljs.core.rest.call(null,s__17974__17977)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2621__auto____17979.call(null,cljs.core.js_keys.call(null,x));
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
return f__17980.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__17981){
var x = cljs.core.first(arglist__17981);
var options = cljs.core.rest(arglist__17981);
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
var mem__17986 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
return (function() { 
var G__17990__delegate = function (args){
var temp__3971__auto____17987 = cljs.core._lookup.call(null,cljs.core.deref.call(null,mem__17986),args,null);
if(cljs.core.truth_(temp__3971__auto____17987))
{var v__17988 = temp__3971__auto____17987;
return v__17988;
} else
{var ret__17989 = cljs.core.apply.call(null,f,args);
cljs.core.swap_BANG_.call(null,mem__17986,cljs.core.assoc,args,ret__17989);
return ret__17989;
}
};
var G__17990 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__17990__delegate.call(this, args);
};
G__17990.cljs$lang$maxFixedArity = 0;
G__17990.cljs$lang$applyTo = (function (arglist__17991){
var args = cljs.core.seq(arglist__17991);;
return G__17990__delegate(args);
});
G__17990.cljs$lang$arity$variadic = G__17990__delegate;
return G__17990;
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
var ret__17993 = f.call(null);
if(cljs.core.fn_QMARK_.call(null,ret__17993))
{{
var G__17994 = ret__17993;
f = G__17994;
continue;
}
} else
{return ret__17993;
}
break;
}
});
var trampoline__2 = (function() { 
var G__17995__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__17995 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__17995__delegate.call(this, f, args);
};
G__17995.cljs$lang$maxFixedArity = 1;
G__17995.cljs$lang$applyTo = (function (arglist__17996){
var f = cljs.core.first(arglist__17996);
var args = cljs.core.rest(arglist__17996);
return G__17995__delegate(f, args);
});
G__17995.cljs$lang$arity$variadic = G__17995__delegate;
return G__17995;
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
var k__17998 = f.call(null,x);
return cljs.core.assoc.call(null,ret,k__17998,cljs.core.conj.call(null,cljs.core._lookup.call(null,ret,k__17998,cljs.core.PersistentVector.EMPTY),x));
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
var or__3824__auto____18007 = cljs.core._EQ_.call(null,child,parent);
if(or__3824__auto____18007)
{return or__3824__auto____18007;
} else
{var or__3824__auto____18008 = cljs.core.contains_QMARK_.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h).call(null,child),parent);
if(or__3824__auto____18008)
{return or__3824__auto____18008;
} else
{var and__3822__auto____18009 = cljs.core.vector_QMARK_.call(null,parent);
if(and__3822__auto____18009)
{var and__3822__auto____18010 = cljs.core.vector_QMARK_.call(null,child);
if(and__3822__auto____18010)
{var and__3822__auto____18011 = (cljs.core.count.call(null,parent) === cljs.core.count.call(null,child));
if(and__3822__auto____18011)
{var ret__18012 = true;
var i__18013 = 0;
while(true){
if((function (){var or__3824__auto____18014 = cljs.core.not.call(null,ret__18012);
if(or__3824__auto____18014)
{return or__3824__auto____18014;
} else
{return (i__18013 === cljs.core.count.call(null,parent));
}
})())
{return ret__18012;
} else
{{
var G__18015 = isa_QMARK_.call(null,h,child.call(null,i__18013),parent.call(null,i__18013));
var G__18016 = (i__18013 + 1);
ret__18012 = G__18015;
i__18013 = G__18016;
continue;
}
}
break;
}
} else
{return and__3822__auto____18011;
}
} else
{return and__3822__auto____18010;
}
} else
{return and__3822__auto____18009;
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
var tp__18025 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var td__18026 = (new cljs.core.Keyword("\uFDD0'descendants")).call(null,h);
var ta__18027 = (new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h);
var tf__18028 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core._lookup.call(null,targets,k,cljs.core.PersistentHashSet.EMPTY),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});
var or__3824__auto____18029 = ((cljs.core.contains_QMARK_.call(null,tp__18025.call(null,tag),parent))?null:(function (){if(cljs.core.contains_QMARK_.call(null,ta__18027.call(null,tag),parent))
{throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else
{}
if(cljs.core.contains_QMARK_.call(null,ta__18027.call(null,parent),tag))
{throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,cljs.core.conj.call(null,cljs.core._lookup.call(null,tp__18025,tag,cljs.core.PersistentHashSet.EMPTY),parent)),"\uFDD0'ancestors":tf__18028.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,td__18026,parent,ta__18027),"\uFDD0'descendants":tf__18028.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),parent,ta__18027,tag,td__18026)});
})());
if(cljs.core.truth_(or__3824__auto____18029))
{return or__3824__auto____18029;
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
var parentMap__18034 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var childsParents__18035 = (cljs.core.truth_(parentMap__18034.call(null,tag))?cljs.core.disj.call(null,parentMap__18034.call(null,tag),parent):cljs.core.PersistentHashSet.EMPTY);
var newParents__18036 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__18035))?cljs.core.assoc.call(null,parentMap__18034,tag,childsParents__18035):cljs.core.dissoc.call(null,parentMap__18034,tag));
var deriv_seq__18037 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__18017_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__18017_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__18017_SHARP_),cljs.core.second.call(null,p1__18017_SHARP_)));
}),cljs.core.seq.call(null,newParents__18036)));
if(cljs.core.contains_QMARK_.call(null,parentMap__18034.call(null,tag),parent))
{return cljs.core.reduce.call(null,(function (p1__18018_SHARP_,p2__18019_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__18018_SHARP_,p2__18019_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__18037));
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
var xprefs__18045 = cljs.core.deref.call(null,prefer_table).call(null,x);
var or__3824__auto____18047 = (cljs.core.truth_((function (){var and__3822__auto____18046 = xprefs__18045;
if(cljs.core.truth_(and__3822__auto____18046))
{return xprefs__18045.call(null,y);
} else
{return and__3822__auto____18046;
}
})())?true:null);
if(cljs.core.truth_(or__3824__auto____18047))
{return or__3824__auto____18047;
} else
{var or__3824__auto____18049 = (function (){var ps__18048 = cljs.core.parents.call(null,y);
while(true){
if((cljs.core.count.call(null,ps__18048) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__18048),prefer_table)))
{} else
{}
{
var G__18052 = cljs.core.rest.call(null,ps__18048);
ps__18048 = G__18052;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____18049))
{return or__3824__auto____18049;
} else
{var or__3824__auto____18051 = (function (){var ps__18050 = cljs.core.parents.call(null,x);
while(true){
if((cljs.core.count.call(null,ps__18050) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__18050),y,prefer_table)))
{} else
{}
{
var G__18053 = cljs.core.rest.call(null,ps__18050);
ps__18050 = G__18053;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____18051))
{return or__3824__auto____18051;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3824__auto____18055 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);
if(cljs.core.truth_(or__3824__auto____18055))
{return or__3824__auto____18055;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__18073 = cljs.core.reduce.call(null,(function (be,p__18065){
var vec__18066__18067 = p__18065;
var k__18068 = cljs.core.nth.call(null,vec__18066__18067,0,null);
var ___18069 = cljs.core.nth.call(null,vec__18066__18067,1,null);
var e__18070 = vec__18066__18067;
if(cljs.core.isa_QMARK_.call(null,dispatch_val,k__18068))
{var be2__18072 = (cljs.core.truth_((function (){var or__3824__auto____18071 = (be == null);
if(or__3824__auto____18071)
{return or__3824__auto____18071;
} else
{return cljs.core.dominates.call(null,k__18068,cljs.core.first.call(null,be),prefer_table);
}
})())?e__18070:be);
if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__18072),k__18068,prefer_table)))
{} else
{throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k__18068),cljs.core.str(" and "),cljs.core.str(cljs.core.first.call(null,be2__18072)),cljs.core.str(", and neither is preferred")].join('')));
}
return be2__18072;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));
if(cljs.core.truth_(best_entry__18073))
{if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy)))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__18073));
return cljs.core.second.call(null,best_entry__18073);
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
if((function (){var and__3822__auto____18078 = mf;
if(and__3822__auto____18078)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3822__auto____18078;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{var x__2524__auto____18079 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____18080 = (cljs.core._reset[goog.typeOf(x__2524__auto____18079)]);
if(or__3824__auto____18080)
{return or__3824__auto____18080;
} else
{var or__3824__auto____18081 = (cljs.core._reset["_"]);
if(or__3824__auto____18081)
{return or__3824__auto____18081;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3822__auto____18086 = mf;
if(and__3822__auto____18086)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3822__auto____18086;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{var x__2524__auto____18087 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____18088 = (cljs.core._add_method[goog.typeOf(x__2524__auto____18087)]);
if(or__3824__auto____18088)
{return or__3824__auto____18088;
} else
{var or__3824__auto____18089 = (cljs.core._add_method["_"]);
if(or__3824__auto____18089)
{return or__3824__auto____18089;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3822__auto____18094 = mf;
if(and__3822__auto____18094)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3822__auto____18094;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{var x__2524__auto____18095 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____18096 = (cljs.core._remove_method[goog.typeOf(x__2524__auto____18095)]);
if(or__3824__auto____18096)
{return or__3824__auto____18096;
} else
{var or__3824__auto____18097 = (cljs.core._remove_method["_"]);
if(or__3824__auto____18097)
{return or__3824__auto____18097;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3822__auto____18102 = mf;
if(and__3822__auto____18102)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3822__auto____18102;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{var x__2524__auto____18103 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____18104 = (cljs.core._prefer_method[goog.typeOf(x__2524__auto____18103)]);
if(or__3824__auto____18104)
{return or__3824__auto____18104;
} else
{var or__3824__auto____18105 = (cljs.core._prefer_method["_"]);
if(or__3824__auto____18105)
{return or__3824__auto____18105;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3822__auto____18110 = mf;
if(and__3822__auto____18110)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3822__auto____18110;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{var x__2524__auto____18111 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____18112 = (cljs.core._get_method[goog.typeOf(x__2524__auto____18111)]);
if(or__3824__auto____18112)
{return or__3824__auto____18112;
} else
{var or__3824__auto____18113 = (cljs.core._get_method["_"]);
if(or__3824__auto____18113)
{return or__3824__auto____18113;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if((function (){var and__3822__auto____18118 = mf;
if(and__3822__auto____18118)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3822__auto____18118;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{var x__2524__auto____18119 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____18120 = (cljs.core._methods[goog.typeOf(x__2524__auto____18119)]);
if(or__3824__auto____18120)
{return or__3824__auto____18120;
} else
{var or__3824__auto____18121 = (cljs.core._methods["_"]);
if(or__3824__auto____18121)
{return or__3824__auto____18121;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3822__auto____18126 = mf;
if(and__3822__auto____18126)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3822__auto____18126;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{var x__2524__auto____18127 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____18128 = (cljs.core._prefers[goog.typeOf(x__2524__auto____18127)]);
if(or__3824__auto____18128)
{return or__3824__auto____18128;
} else
{var or__3824__auto____18129 = (cljs.core._prefers["_"]);
if(or__3824__auto____18129)
{return or__3824__auto____18129;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if((function (){var and__3822__auto____18134 = mf;
if(and__3822__auto____18134)
{return mf.cljs$core$IMultiFn$_dispatch$arity$2;
} else
{return and__3822__auto____18134;
}
})())
{return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf,args);
} else
{var x__2524__auto____18135 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____18136 = (cljs.core._dispatch[goog.typeOf(x__2524__auto____18135)]);
if(or__3824__auto____18136)
{return or__3824__auto____18136;
} else
{var or__3824__auto____18137 = (cljs.core._dispatch["_"]);
if(or__3824__auto____18137)
{return or__3824__auto____18137;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__18140 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__18141 = cljs.core._get_method.call(null,mf,dispatch_val__18140);
if(cljs.core.truth_(target_fn__18141))
{} else
{throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(cljs.core.name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val__18140)].join('')));
}
return cljs.core.apply.call(null,target_fn__18141,args);
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
cljs.core.MultiFn.cljs$lang$ctorPrSeq = (function (this__2459__auto__){
return cljs.core.list.call(null,"cljs.core/MultiFn");
});
cljs.core.MultiFn.cljs$lang$ctorPrWriter = (function (this__2459__auto__,writer__2460__auto__){
return cljs.core._write.call(null,writer__2460__auto__,"cljs.core/MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__18142 = this;
return goog.getUid(this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var this__18143 = this;
cljs.core.swap_BANG_.call(null,this__18143.method_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__18143.method_cache,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__18143.prefer_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__18143.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var this__18144 = this;
cljs.core.swap_BANG_.call(null,this__18144.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__18144.method_cache,this__18144.method_table,this__18144.cached_hierarchy,this__18144.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var this__18145 = this;
cljs.core.swap_BANG_.call(null,this__18145.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__18145.method_cache,this__18145.method_table,this__18145.cached_hierarchy,this__18145.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var this__18146 = this;
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__18146.cached_hierarchy),cljs.core.deref.call(null,this__18146.hierarchy)))
{} else
{cljs.core.reset_cache.call(null,this__18146.method_cache,this__18146.method_table,this__18146.cached_hierarchy,this__18146.hierarchy);
}
var temp__3971__auto____18147 = cljs.core.deref.call(null,this__18146.method_cache).call(null,dispatch_val);
if(cljs.core.truth_(temp__3971__auto____18147))
{var target_fn__18148 = temp__3971__auto____18147;
return target_fn__18148;
} else
{var temp__3971__auto____18149 = cljs.core.find_and_cache_best_method.call(null,this__18146.name,dispatch_val,this__18146.hierarchy,this__18146.method_table,this__18146.prefer_table,this__18146.method_cache,this__18146.cached_hierarchy);
if(cljs.core.truth_(temp__3971__auto____18149))
{var target_fn__18150 = temp__3971__auto____18149;
return target_fn__18150;
} else
{return cljs.core.deref.call(null,this__18146.method_table).call(null,this__18146.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var this__18151 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__18151.prefer_table)))
{throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(this__18151.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else
{}
cljs.core.swap_BANG_.call(null,this__18151.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core._lookup.call(null,old,dispatch_val_x,cljs.core.PersistentHashSet.EMPTY),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__18151.method_cache,this__18151.method_table,this__18151.cached_hierarchy,this__18151.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var this__18152 = this;
return cljs.core.deref.call(null,this__18152.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var this__18153 = this;
return cljs.core.deref.call(null,this__18153.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = (function (mf,args){
var this__18154 = this;
return cljs.core.do_dispatch.call(null,mf,this__18154.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__18156__delegate = function (_,args){
var self__18155 = this;
return cljs.core._dispatch.call(null,self__18155,args);
};
var G__18156 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__18156__delegate.call(this, _, args);
};
G__18156.cljs$lang$maxFixedArity = 1;
G__18156.cljs$lang$applyTo = (function (arglist__18157){
var _ = cljs.core.first(arglist__18157);
var args = cljs.core.rest(arglist__18157);
return G__18156__delegate(_, args);
});
G__18156.cljs$lang$arity$variadic = G__18156__delegate;
return G__18156;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
var self__18158 = this;
return cljs.core._dispatch.call(null,self__18158,args);
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
cljs.core.UUID.cljs$lang$ctorPrSeq = (function (this__2459__auto__){
return cljs.core.list.call(null,"cljs.core/UUID");
});
cljs.core.UUID.cljs$lang$ctorPrWriter = (function (this__2459__auto__,writer__2460__auto__){
return cljs.core._write.call(null,writer__2460__auto__,"cljs.core/UUID");
});
cljs.core.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__18159 = this;
return goog.string.hashCode(cljs.core.pr_str.call(null,this$));
});
cljs.core.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_18161,writer,_){
var this__18160 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(this__18160.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (_18163,_){
var this__18162 = this;
return cljs.core.list.call(null,[cljs.core.str("#uuid \""),cljs.core.str(this__18162.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var this__18164 = this;
var and__3822__auto____18165 = cljs.core.instance_QMARK_.call(null,cljs.core.UUID,other);
if(and__3822__auto____18165)
{return (this__18164.uuid === other.uuid);
} else
{return and__3822__auto____18165;
}
});
cljs.core.UUID.prototype.toString = (function (){
var this__18166 = this;
var this__18167 = this;
return cljs.core.pr_str.call(null,this__18167);
});
cljs.core.UUID;
