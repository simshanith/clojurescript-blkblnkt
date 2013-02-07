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
var x__6423 = (((x == null))?null:x);
if((p[goog.typeOf(x__6423)]))
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
var G__6424__delegate = function (array,i,idxs){
return cljs.core.apply.call(null,aget,aget.call(null,array,i),idxs);
};
var G__6424 = function (array,i,var_args){
var idxs = null;
if (goog.isDef(var_args)) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6424__delegate.call(this, array, i, idxs);
};
G__6424.cljs$lang$maxFixedArity = 2;
G__6424.cljs$lang$applyTo = (function (arglist__6425){
var array = cljs.core.first(arglist__6425);
var i = cljs.core.first(cljs.core.next(arglist__6425));
var idxs = cljs.core.rest(cljs.core.next(arglist__6425));
return G__6424__delegate(array, i, idxs);
});
G__6424.cljs$lang$arity$variadic = G__6424__delegate;
return G__6424;
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
if((function (){var and__3822__auto____6510 = this$;
if(and__3822__auto____6510)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3822__auto____6510;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{var x__2524__auto____6511 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6512 = (cljs.core._invoke[goog.typeOf(x__2524__auto____6511)]);
if(or__3824__auto____6512)
{return or__3824__auto____6512;
} else
{var or__3824__auto____6513 = (cljs.core._invoke["_"]);
if(or__3824__auto____6513)
{return or__3824__auto____6513;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3822__auto____6514 = this$;
if(and__3822__auto____6514)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3822__auto____6514;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{var x__2524__auto____6515 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6516 = (cljs.core._invoke[goog.typeOf(x__2524__auto____6515)]);
if(or__3824__auto____6516)
{return or__3824__auto____6516;
} else
{var or__3824__auto____6517 = (cljs.core._invoke["_"]);
if(or__3824__auto____6517)
{return or__3824__auto____6517;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3822__auto____6518 = this$;
if(and__3822__auto____6518)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3822__auto____6518;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{var x__2524__auto____6519 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6520 = (cljs.core._invoke[goog.typeOf(x__2524__auto____6519)]);
if(or__3824__auto____6520)
{return or__3824__auto____6520;
} else
{var or__3824__auto____6521 = (cljs.core._invoke["_"]);
if(or__3824__auto____6521)
{return or__3824__auto____6521;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3822__auto____6522 = this$;
if(and__3822__auto____6522)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3822__auto____6522;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{var x__2524__auto____6523 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6524 = (cljs.core._invoke[goog.typeOf(x__2524__auto____6523)]);
if(or__3824__auto____6524)
{return or__3824__auto____6524;
} else
{var or__3824__auto____6525 = (cljs.core._invoke["_"]);
if(or__3824__auto____6525)
{return or__3824__auto____6525;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3822__auto____6526 = this$;
if(and__3822__auto____6526)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3822__auto____6526;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{var x__2524__auto____6527 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6528 = (cljs.core._invoke[goog.typeOf(x__2524__auto____6527)]);
if(or__3824__auto____6528)
{return or__3824__auto____6528;
} else
{var or__3824__auto____6529 = (cljs.core._invoke["_"]);
if(or__3824__auto____6529)
{return or__3824__auto____6529;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3822__auto____6530 = this$;
if(and__3822__auto____6530)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3822__auto____6530;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{var x__2524__auto____6531 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6532 = (cljs.core._invoke[goog.typeOf(x__2524__auto____6531)]);
if(or__3824__auto____6532)
{return or__3824__auto____6532;
} else
{var or__3824__auto____6533 = (cljs.core._invoke["_"]);
if(or__3824__auto____6533)
{return or__3824__auto____6533;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3822__auto____6534 = this$;
if(and__3822__auto____6534)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3822__auto____6534;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{var x__2524__auto____6535 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6536 = (cljs.core._invoke[goog.typeOf(x__2524__auto____6535)]);
if(or__3824__auto____6536)
{return or__3824__auto____6536;
} else
{var or__3824__auto____6537 = (cljs.core._invoke["_"]);
if(or__3824__auto____6537)
{return or__3824__auto____6537;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3822__auto____6538 = this$;
if(and__3822__auto____6538)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3822__auto____6538;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{var x__2524__auto____6539 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6540 = (cljs.core._invoke[goog.typeOf(x__2524__auto____6539)]);
if(or__3824__auto____6540)
{return or__3824__auto____6540;
} else
{var or__3824__auto____6541 = (cljs.core._invoke["_"]);
if(or__3824__auto____6541)
{return or__3824__auto____6541;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3822__auto____6542 = this$;
if(and__3822__auto____6542)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3822__auto____6542;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{var x__2524__auto____6543 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6544 = (cljs.core._invoke[goog.typeOf(x__2524__auto____6543)]);
if(or__3824__auto____6544)
{return or__3824__auto____6544;
} else
{var or__3824__auto____6545 = (cljs.core._invoke["_"]);
if(or__3824__auto____6545)
{return or__3824__auto____6545;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3822__auto____6546 = this$;
if(and__3822__auto____6546)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3822__auto____6546;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{var x__2524__auto____6547 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6548 = (cljs.core._invoke[goog.typeOf(x__2524__auto____6547)]);
if(or__3824__auto____6548)
{return or__3824__auto____6548;
} else
{var or__3824__auto____6549 = (cljs.core._invoke["_"]);
if(or__3824__auto____6549)
{return or__3824__auto____6549;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3822__auto____6550 = this$;
if(and__3822__auto____6550)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3822__auto____6550;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{var x__2524__auto____6551 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6552 = (cljs.core._invoke[goog.typeOf(x__2524__auto____6551)]);
if(or__3824__auto____6552)
{return or__3824__auto____6552;
} else
{var or__3824__auto____6553 = (cljs.core._invoke["_"]);
if(or__3824__auto____6553)
{return or__3824__auto____6553;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3822__auto____6554 = this$;
if(and__3822__auto____6554)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3822__auto____6554;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{var x__2524__auto____6555 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6556 = (cljs.core._invoke[goog.typeOf(x__2524__auto____6555)]);
if(or__3824__auto____6556)
{return or__3824__auto____6556;
} else
{var or__3824__auto____6557 = (cljs.core._invoke["_"]);
if(or__3824__auto____6557)
{return or__3824__auto____6557;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3822__auto____6558 = this$;
if(and__3822__auto____6558)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3822__auto____6558;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{var x__2524__auto____6559 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6560 = (cljs.core._invoke[goog.typeOf(x__2524__auto____6559)]);
if(or__3824__auto____6560)
{return or__3824__auto____6560;
} else
{var or__3824__auto____6561 = (cljs.core._invoke["_"]);
if(or__3824__auto____6561)
{return or__3824__auto____6561;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3822__auto____6562 = this$;
if(and__3822__auto____6562)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3822__auto____6562;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{var x__2524__auto____6563 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6564 = (cljs.core._invoke[goog.typeOf(x__2524__auto____6563)]);
if(or__3824__auto____6564)
{return or__3824__auto____6564;
} else
{var or__3824__auto____6565 = (cljs.core._invoke["_"]);
if(or__3824__auto____6565)
{return or__3824__auto____6565;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3822__auto____6566 = this$;
if(and__3822__auto____6566)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3822__auto____6566;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{var x__2524__auto____6567 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6568 = (cljs.core._invoke[goog.typeOf(x__2524__auto____6567)]);
if(or__3824__auto____6568)
{return or__3824__auto____6568;
} else
{var or__3824__auto____6569 = (cljs.core._invoke["_"]);
if(or__3824__auto____6569)
{return or__3824__auto____6569;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3822__auto____6570 = this$;
if(and__3822__auto____6570)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3822__auto____6570;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{var x__2524__auto____6571 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6572 = (cljs.core._invoke[goog.typeOf(x__2524__auto____6571)]);
if(or__3824__auto____6572)
{return or__3824__auto____6572;
} else
{var or__3824__auto____6573 = (cljs.core._invoke["_"]);
if(or__3824__auto____6573)
{return or__3824__auto____6573;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3822__auto____6574 = this$;
if(and__3822__auto____6574)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3822__auto____6574;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{var x__2524__auto____6575 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6576 = (cljs.core._invoke[goog.typeOf(x__2524__auto____6575)]);
if(or__3824__auto____6576)
{return or__3824__auto____6576;
} else
{var or__3824__auto____6577 = (cljs.core._invoke["_"]);
if(or__3824__auto____6577)
{return or__3824__auto____6577;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3822__auto____6578 = this$;
if(and__3822__auto____6578)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3822__auto____6578;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{var x__2524__auto____6579 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6580 = (cljs.core._invoke[goog.typeOf(x__2524__auto____6579)]);
if(or__3824__auto____6580)
{return or__3824__auto____6580;
} else
{var or__3824__auto____6581 = (cljs.core._invoke["_"]);
if(or__3824__auto____6581)
{return or__3824__auto____6581;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if((function (){var and__3822__auto____6582 = this$;
if(and__3822__auto____6582)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3822__auto____6582;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{var x__2524__auto____6583 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6584 = (cljs.core._invoke[goog.typeOf(x__2524__auto____6583)]);
if(or__3824__auto____6584)
{return or__3824__auto____6584;
} else
{var or__3824__auto____6585 = (cljs.core._invoke["_"]);
if(or__3824__auto____6585)
{return or__3824__auto____6585;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if((function (){var and__3822__auto____6586 = this$;
if(and__3822__auto____6586)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3822__auto____6586;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{var x__2524__auto____6587 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6588 = (cljs.core._invoke[goog.typeOf(x__2524__auto____6587)]);
if(or__3824__auto____6588)
{return or__3824__auto____6588;
} else
{var or__3824__auto____6589 = (cljs.core._invoke["_"]);
if(or__3824__auto____6589)
{return or__3824__auto____6589;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if((function (){var and__3822__auto____6590 = this$;
if(and__3822__auto____6590)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3822__auto____6590;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{var x__2524__auto____6591 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6592 = (cljs.core._invoke[goog.typeOf(x__2524__auto____6591)]);
if(or__3824__auto____6592)
{return or__3824__auto____6592;
} else
{var or__3824__auto____6593 = (cljs.core._invoke["_"]);
if(or__3824__auto____6593)
{return or__3824__auto____6593;
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
if((function (){var and__3822__auto____6598 = coll;
if(and__3822__auto____6598)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3822__auto____6598;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{var x__2524__auto____6599 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6600 = (cljs.core._count[goog.typeOf(x__2524__auto____6599)]);
if(or__3824__auto____6600)
{return or__3824__auto____6600;
} else
{var or__3824__auto____6601 = (cljs.core._count["_"]);
if(or__3824__auto____6601)
{return or__3824__auto____6601;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if((function (){var and__3822__auto____6606 = coll;
if(and__3822__auto____6606)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3822__auto____6606;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var x__2524__auto____6607 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6608 = (cljs.core._empty[goog.typeOf(x__2524__auto____6607)]);
if(or__3824__auto____6608)
{return or__3824__auto____6608;
} else
{var or__3824__auto____6609 = (cljs.core._empty["_"]);
if(or__3824__auto____6609)
{return or__3824__auto____6609;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3822__auto____6614 = coll;
if(and__3822__auto____6614)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3822__auto____6614;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{var x__2524__auto____6615 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6616 = (cljs.core._conj[goog.typeOf(x__2524__auto____6615)]);
if(or__3824__auto____6616)
{return or__3824__auto____6616;
} else
{var or__3824__auto____6617 = (cljs.core._conj["_"]);
if(or__3824__auto____6617)
{return or__3824__auto____6617;
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
if((function (){var and__3822__auto____6626 = coll;
if(and__3822__auto____6626)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3822__auto____6626;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{var x__2524__auto____6627 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6628 = (cljs.core._nth[goog.typeOf(x__2524__auto____6627)]);
if(or__3824__auto____6628)
{return or__3824__auto____6628;
} else
{var or__3824__auto____6629 = (cljs.core._nth["_"]);
if(or__3824__auto____6629)
{return or__3824__auto____6629;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3822__auto____6630 = coll;
if(and__3822__auto____6630)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3822__auto____6630;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{var x__2524__auto____6631 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6632 = (cljs.core._nth[goog.typeOf(x__2524__auto____6631)]);
if(or__3824__auto____6632)
{return or__3824__auto____6632;
} else
{var or__3824__auto____6633 = (cljs.core._nth["_"]);
if(or__3824__auto____6633)
{return or__3824__auto____6633;
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
if((function (){var and__3822__auto____6638 = coll;
if(and__3822__auto____6638)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3822__auto____6638;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{var x__2524__auto____6639 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6640 = (cljs.core._first[goog.typeOf(x__2524__auto____6639)]);
if(or__3824__auto____6640)
{return or__3824__auto____6640;
} else
{var or__3824__auto____6641 = (cljs.core._first["_"]);
if(or__3824__auto____6641)
{return or__3824__auto____6641;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if((function (){var and__3822__auto____6646 = coll;
if(and__3822__auto____6646)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3822__auto____6646;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{var x__2524__auto____6647 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6648 = (cljs.core._rest[goog.typeOf(x__2524__auto____6647)]);
if(or__3824__auto____6648)
{return or__3824__auto____6648;
} else
{var or__3824__auto____6649 = (cljs.core._rest["_"]);
if(or__3824__auto____6649)
{return or__3824__auto____6649;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.INext = {};
cljs.core._next = (function _next(coll){
if((function (){var and__3822__auto____6654 = coll;
if(and__3822__auto____6654)
{return coll.cljs$core$INext$_next$arity$1;
} else
{return and__3822__auto____6654;
}
})())
{return coll.cljs$core$INext$_next$arity$1(coll);
} else
{var x__2524__auto____6655 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6656 = (cljs.core._next[goog.typeOf(x__2524__auto____6655)]);
if(or__3824__auto____6656)
{return or__3824__auto____6656;
} else
{var or__3824__auto____6657 = (cljs.core._next["_"]);
if(or__3824__auto____6657)
{return or__3824__auto____6657;
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
if((function (){var and__3822__auto____6666 = o;
if(and__3822__auto____6666)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3822__auto____6666;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{var x__2524__auto____6667 = (((o == null))?null:o);
return (function (){var or__3824__auto____6668 = (cljs.core._lookup[goog.typeOf(x__2524__auto____6667)]);
if(or__3824__auto____6668)
{return or__3824__auto____6668;
} else
{var or__3824__auto____6669 = (cljs.core._lookup["_"]);
if(or__3824__auto____6669)
{return or__3824__auto____6669;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3822__auto____6670 = o;
if(and__3822__auto____6670)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3822__auto____6670;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{var x__2524__auto____6671 = (((o == null))?null:o);
return (function (){var or__3824__auto____6672 = (cljs.core._lookup[goog.typeOf(x__2524__auto____6671)]);
if(or__3824__auto____6672)
{return or__3824__auto____6672;
} else
{var or__3824__auto____6673 = (cljs.core._lookup["_"]);
if(or__3824__auto____6673)
{return or__3824__auto____6673;
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
if((function (){var and__3822__auto____6678 = coll;
if(and__3822__auto____6678)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3822__auto____6678;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{var x__2524__auto____6679 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6680 = (cljs.core._contains_key_QMARK_[goog.typeOf(x__2524__auto____6679)]);
if(or__3824__auto____6680)
{return or__3824__auto____6680;
} else
{var or__3824__auto____6681 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3824__auto____6681)
{return or__3824__auto____6681;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3822__auto____6686 = coll;
if(and__3822__auto____6686)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3822__auto____6686;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{var x__2524__auto____6687 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6688 = (cljs.core._assoc[goog.typeOf(x__2524__auto____6687)]);
if(or__3824__auto____6688)
{return or__3824__auto____6688;
} else
{var or__3824__auto____6689 = (cljs.core._assoc["_"]);
if(or__3824__auto____6689)
{return or__3824__auto____6689;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3822__auto____6694 = coll;
if(and__3822__auto____6694)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3822__auto____6694;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{var x__2524__auto____6695 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6696 = (cljs.core._dissoc[goog.typeOf(x__2524__auto____6695)]);
if(or__3824__auto____6696)
{return or__3824__auto____6696;
} else
{var or__3824__auto____6697 = (cljs.core._dissoc["_"]);
if(or__3824__auto____6697)
{return or__3824__auto____6697;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.IMapEntry = {};
cljs.core._key = (function _key(coll){
if((function (){var and__3822__auto____6702 = coll;
if(and__3822__auto____6702)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3822__auto____6702;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{var x__2524__auto____6703 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6704 = (cljs.core._key[goog.typeOf(x__2524__auto____6703)]);
if(or__3824__auto____6704)
{return or__3824__auto____6704;
} else
{var or__3824__auto____6705 = (cljs.core._key["_"]);
if(or__3824__auto____6705)
{return or__3824__auto____6705;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){
if((function (){var and__3822__auto____6710 = coll;
if(and__3822__auto____6710)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3822__auto____6710;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{var x__2524__auto____6711 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6712 = (cljs.core._val[goog.typeOf(x__2524__auto____6711)]);
if(or__3824__auto____6712)
{return or__3824__auto____6712;
} else
{var or__3824__auto____6713 = (cljs.core._val["_"]);
if(or__3824__auto____6713)
{return or__3824__auto____6713;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3822__auto____6718 = coll;
if(and__3822__auto____6718)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3822__auto____6718;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{var x__2524__auto____6719 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6720 = (cljs.core._disjoin[goog.typeOf(x__2524__auto____6719)]);
if(or__3824__auto____6720)
{return or__3824__auto____6720;
} else
{var or__3824__auto____6721 = (cljs.core._disjoin["_"]);
if(or__3824__auto____6721)
{return or__3824__auto____6721;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if((function (){var and__3822__auto____6726 = coll;
if(and__3822__auto____6726)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3822__auto____6726;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{var x__2524__auto____6727 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6728 = (cljs.core._peek[goog.typeOf(x__2524__auto____6727)]);
if(or__3824__auto____6728)
{return or__3824__auto____6728;
} else
{var or__3824__auto____6729 = (cljs.core._peek["_"]);
if(or__3824__auto____6729)
{return or__3824__auto____6729;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if((function (){var and__3822__auto____6734 = coll;
if(and__3822__auto____6734)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3822__auto____6734;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{var x__2524__auto____6735 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6736 = (cljs.core._pop[goog.typeOf(x__2524__auto____6735)]);
if(or__3824__auto____6736)
{return or__3824__auto____6736;
} else
{var or__3824__auto____6737 = (cljs.core._pop["_"]);
if(or__3824__auto____6737)
{return or__3824__auto____6737;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3822__auto____6742 = coll;
if(and__3822__auto____6742)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3822__auto____6742;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{var x__2524__auto____6743 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6744 = (cljs.core._assoc_n[goog.typeOf(x__2524__auto____6743)]);
if(or__3824__auto____6744)
{return or__3824__auto____6744;
} else
{var or__3824__auto____6745 = (cljs.core._assoc_n["_"]);
if(or__3824__auto____6745)
{return or__3824__auto____6745;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if((function (){var and__3822__auto____6750 = o;
if(and__3822__auto____6750)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3822__auto____6750;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{var x__2524__auto____6751 = (((o == null))?null:o);
return (function (){var or__3824__auto____6752 = (cljs.core._deref[goog.typeOf(x__2524__auto____6751)]);
if(or__3824__auto____6752)
{return or__3824__auto____6752;
} else
{var or__3824__auto____6753 = (cljs.core._deref["_"]);
if(or__3824__auto____6753)
{return or__3824__auto____6753;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3822__auto____6758 = o;
if(and__3822__auto____6758)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3822__auto____6758;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{var x__2524__auto____6759 = (((o == null))?null:o);
return (function (){var or__3824__auto____6760 = (cljs.core._deref_with_timeout[goog.typeOf(x__2524__auto____6759)]);
if(or__3824__auto____6760)
{return or__3824__auto____6760;
} else
{var or__3824__auto____6761 = (cljs.core._deref_with_timeout["_"]);
if(or__3824__auto____6761)
{return or__3824__auto____6761;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if((function (){var and__3822__auto____6766 = o;
if(and__3822__auto____6766)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3822__auto____6766;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{var x__2524__auto____6767 = (((o == null))?null:o);
return (function (){var or__3824__auto____6768 = (cljs.core._meta[goog.typeOf(x__2524__auto____6767)]);
if(or__3824__auto____6768)
{return or__3824__auto____6768;
} else
{var or__3824__auto____6769 = (cljs.core._meta["_"]);
if(or__3824__auto____6769)
{return or__3824__auto____6769;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3822__auto____6774 = o;
if(and__3822__auto____6774)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3822__auto____6774;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{var x__2524__auto____6775 = (((o == null))?null:o);
return (function (){var or__3824__auto____6776 = (cljs.core._with_meta[goog.typeOf(x__2524__auto____6775)]);
if(or__3824__auto____6776)
{return or__3824__auto____6776;
} else
{var or__3824__auto____6777 = (cljs.core._with_meta["_"]);
if(or__3824__auto____6777)
{return or__3824__auto____6777;
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
if((function (){var and__3822__auto____6786 = coll;
if(and__3822__auto____6786)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3822__auto____6786;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{var x__2524__auto____6787 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6788 = (cljs.core._reduce[goog.typeOf(x__2524__auto____6787)]);
if(or__3824__auto____6788)
{return or__3824__auto____6788;
} else
{var or__3824__auto____6789 = (cljs.core._reduce["_"]);
if(or__3824__auto____6789)
{return or__3824__auto____6789;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3822__auto____6790 = coll;
if(and__3822__auto____6790)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3822__auto____6790;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{var x__2524__auto____6791 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6792 = (cljs.core._reduce[goog.typeOf(x__2524__auto____6791)]);
if(or__3824__auto____6792)
{return or__3824__auto____6792;
} else
{var or__3824__auto____6793 = (cljs.core._reduce["_"]);
if(or__3824__auto____6793)
{return or__3824__auto____6793;
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
if((function (){var and__3822__auto____6798 = coll;
if(and__3822__auto____6798)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3822__auto____6798;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{var x__2524__auto____6799 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6800 = (cljs.core._kv_reduce[goog.typeOf(x__2524__auto____6799)]);
if(or__3824__auto____6800)
{return or__3824__auto____6800;
} else
{var or__3824__auto____6801 = (cljs.core._kv_reduce["_"]);
if(or__3824__auto____6801)
{return or__3824__auto____6801;
} else
{throw cljs.core.missing_protocol.call(null,"IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3822__auto____6806 = o;
if(and__3822__auto____6806)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3822__auto____6806;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{var x__2524__auto____6807 = (((o == null))?null:o);
return (function (){var or__3824__auto____6808 = (cljs.core._equiv[goog.typeOf(x__2524__auto____6807)]);
if(or__3824__auto____6808)
{return or__3824__auto____6808;
} else
{var or__3824__auto____6809 = (cljs.core._equiv["_"]);
if(or__3824__auto____6809)
{return or__3824__auto____6809;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if((function (){var and__3822__auto____6814 = o;
if(and__3822__auto____6814)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3822__auto____6814;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{var x__2524__auto____6815 = (((o == null))?null:o);
return (function (){var or__3824__auto____6816 = (cljs.core._hash[goog.typeOf(x__2524__auto____6815)]);
if(or__3824__auto____6816)
{return or__3824__auto____6816;
} else
{var or__3824__auto____6817 = (cljs.core._hash["_"]);
if(or__3824__auto____6817)
{return or__3824__auto____6817;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if((function (){var and__3822__auto____6822 = o;
if(and__3822__auto____6822)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3822__auto____6822;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{var x__2524__auto____6823 = (((o == null))?null:o);
return (function (){var or__3824__auto____6824 = (cljs.core._seq[goog.typeOf(x__2524__auto____6823)]);
if(or__3824__auto____6824)
{return or__3824__auto____6824;
} else
{var or__3824__auto____6825 = (cljs.core._seq["_"]);
if(or__3824__auto____6825)
{return or__3824__auto____6825;
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
if((function (){var and__3822__auto____6830 = coll;
if(and__3822__auto____6830)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3822__auto____6830;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{var x__2524__auto____6831 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6832 = (cljs.core._rseq[goog.typeOf(x__2524__auto____6831)]);
if(or__3824__auto____6832)
{return or__3824__auto____6832;
} else
{var or__3824__auto____6833 = (cljs.core._rseq["_"]);
if(or__3824__auto____6833)
{return or__3824__auto____6833;
} else
{throw cljs.core.missing_protocol.call(null,"IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISorted = {};
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3822__auto____6838 = coll;
if(and__3822__auto____6838)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3822__auto____6838;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{var x__2524__auto____6839 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6840 = (cljs.core._sorted_seq[goog.typeOf(x__2524__auto____6839)]);
if(or__3824__auto____6840)
{return or__3824__auto____6840;
} else
{var or__3824__auto____6841 = (cljs.core._sorted_seq["_"]);
if(or__3824__auto____6841)
{return or__3824__auto____6841;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3822__auto____6846 = coll;
if(and__3822__auto____6846)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3822__auto____6846;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{var x__2524__auto____6847 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6848 = (cljs.core._sorted_seq_from[goog.typeOf(x__2524__auto____6847)]);
if(or__3824__auto____6848)
{return or__3824__auto____6848;
} else
{var or__3824__auto____6849 = (cljs.core._sorted_seq_from["_"]);
if(or__3824__auto____6849)
{return or__3824__auto____6849;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3822__auto____6854 = coll;
if(and__3822__auto____6854)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3822__auto____6854;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{var x__2524__auto____6855 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6856 = (cljs.core._entry_key[goog.typeOf(x__2524__auto____6855)]);
if(or__3824__auto____6856)
{return or__3824__auto____6856;
} else
{var or__3824__auto____6857 = (cljs.core._entry_key["_"]);
if(or__3824__auto____6857)
{return or__3824__auto____6857;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3822__auto____6862 = coll;
if(and__3822__auto____6862)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3822__auto____6862;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{var x__2524__auto____6863 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6864 = (cljs.core._comparator[goog.typeOf(x__2524__auto____6863)]);
if(or__3824__auto____6864)
{return or__3824__auto____6864;
} else
{var or__3824__auto____6865 = (cljs.core._comparator["_"]);
if(or__3824__auto____6865)
{return or__3824__auto____6865;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if((function (){var and__3822__auto____6870 = o;
if(and__3822__auto____6870)
{return o.cljs$core$IPrintable$_pr_seq$arity$2;
} else
{return and__3822__auto____6870;
}
})())
{return o.cljs$core$IPrintable$_pr_seq$arity$2(o,opts);
} else
{var x__2524__auto____6871 = (((o == null))?null:o);
return (function (){var or__3824__auto____6872 = (cljs.core._pr_seq[goog.typeOf(x__2524__auto____6871)]);
if(or__3824__auto____6872)
{return or__3824__auto____6872;
} else
{var or__3824__auto____6873 = (cljs.core._pr_seq["_"]);
if(or__3824__auto____6873)
{return or__3824__auto____6873;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IWriter = {};
cljs.core._write = (function _write(writer,s){
if((function (){var and__3822__auto____6878 = writer;
if(and__3822__auto____6878)
{return writer.cljs$core$IWriter$_write$arity$2;
} else
{return and__3822__auto____6878;
}
})())
{return writer.cljs$core$IWriter$_write$arity$2(writer,s);
} else
{var x__2524__auto____6879 = (((writer == null))?null:writer);
return (function (){var or__3824__auto____6880 = (cljs.core._write[goog.typeOf(x__2524__auto____6879)]);
if(or__3824__auto____6880)
{return or__3824__auto____6880;
} else
{var or__3824__auto____6881 = (cljs.core._write["_"]);
if(or__3824__auto____6881)
{return or__3824__auto____6881;
} else
{throw cljs.core.missing_protocol.call(null,"IWriter.-write",writer);
}
}
})().call(null,writer,s);
}
});
cljs.core._flush = (function _flush(writer){
if((function (){var and__3822__auto____6886 = writer;
if(and__3822__auto____6886)
{return writer.cljs$core$IWriter$_flush$arity$1;
} else
{return and__3822__auto____6886;
}
})())
{return writer.cljs$core$IWriter$_flush$arity$1(writer);
} else
{var x__2524__auto____6887 = (((writer == null))?null:writer);
return (function (){var or__3824__auto____6888 = (cljs.core._flush[goog.typeOf(x__2524__auto____6887)]);
if(or__3824__auto____6888)
{return or__3824__auto____6888;
} else
{var or__3824__auto____6889 = (cljs.core._flush["_"]);
if(or__3824__auto____6889)
{return or__3824__auto____6889;
} else
{throw cljs.core.missing_protocol.call(null,"IWriter.-flush",writer);
}
}
})().call(null,writer);
}
});
cljs.core.IPrintWithWriter = {};
cljs.core._pr_writer = (function _pr_writer(o,writer,opts){
if((function (){var and__3822__auto____6894 = o;
if(and__3822__auto____6894)
{return o.cljs$core$IPrintWithWriter$_pr_writer$arity$3;
} else
{return and__3822__auto____6894;
}
})())
{return o.cljs$core$IPrintWithWriter$_pr_writer$arity$3(o,writer,opts);
} else
{var x__2524__auto____6895 = (((o == null))?null:o);
return (function (){var or__3824__auto____6896 = (cljs.core._pr_writer[goog.typeOf(x__2524__auto____6895)]);
if(or__3824__auto____6896)
{return or__3824__auto____6896;
} else
{var or__3824__auto____6897 = (cljs.core._pr_writer["_"]);
if(or__3824__auto____6897)
{return or__3824__auto____6897;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintWithWriter.-pr-writer",o);
}
}
})().call(null,o,writer,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3822__auto____6902 = d;
if(and__3822__auto____6902)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3822__auto____6902;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{var x__2524__auto____6903 = (((d == null))?null:d);
return (function (){var or__3824__auto____6904 = (cljs.core._realized_QMARK_[goog.typeOf(x__2524__auto____6903)]);
if(or__3824__auto____6904)
{return or__3824__auto____6904;
} else
{var or__3824__auto____6905 = (cljs.core._realized_QMARK_["_"]);
if(or__3824__auto____6905)
{return or__3824__auto____6905;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3822__auto____6910 = this$;
if(and__3822__auto____6910)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3822__auto____6910;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{var x__2524__auto____6911 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6912 = (cljs.core._notify_watches[goog.typeOf(x__2524__auto____6911)]);
if(or__3824__auto____6912)
{return or__3824__auto____6912;
} else
{var or__3824__auto____6913 = (cljs.core._notify_watches["_"]);
if(or__3824__auto____6913)
{return or__3824__auto____6913;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3822__auto____6918 = this$;
if(and__3822__auto____6918)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3822__auto____6918;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{var x__2524__auto____6919 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6920 = (cljs.core._add_watch[goog.typeOf(x__2524__auto____6919)]);
if(or__3824__auto____6920)
{return or__3824__auto____6920;
} else
{var or__3824__auto____6921 = (cljs.core._add_watch["_"]);
if(or__3824__auto____6921)
{return or__3824__auto____6921;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3822__auto____6926 = this$;
if(and__3822__auto____6926)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3822__auto____6926;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{var x__2524__auto____6927 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6928 = (cljs.core._remove_watch[goog.typeOf(x__2524__auto____6927)]);
if(or__3824__auto____6928)
{return or__3824__auto____6928;
} else
{var or__3824__auto____6929 = (cljs.core._remove_watch["_"]);
if(or__3824__auto____6929)
{return or__3824__auto____6929;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
cljs.core.IEditableCollection = {};
cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3822__auto____6934 = coll;
if(and__3822__auto____6934)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3822__auto____6934;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{var x__2524__auto____6935 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6936 = (cljs.core._as_transient[goog.typeOf(x__2524__auto____6935)]);
if(or__3824__auto____6936)
{return or__3824__auto____6936;
} else
{var or__3824__auto____6937 = (cljs.core._as_transient["_"]);
if(or__3824__auto____6937)
{return or__3824__auto____6937;
} else
{throw cljs.core.missing_protocol.call(null,"IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ITransientCollection = {};
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3822__auto____6942 = tcoll;
if(and__3822__auto____6942)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3822__auto____6942;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{var x__2524__auto____6943 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____6944 = (cljs.core._conj_BANG_[goog.typeOf(x__2524__auto____6943)]);
if(or__3824__auto____6944)
{return or__3824__auto____6944;
} else
{var or__3824__auto____6945 = (cljs.core._conj_BANG_["_"]);
if(or__3824__auto____6945)
{return or__3824__auto____6945;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3822__auto____6950 = tcoll;
if(and__3822__auto____6950)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3822__auto____6950;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{var x__2524__auto____6951 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____6952 = (cljs.core._persistent_BANG_[goog.typeOf(x__2524__auto____6951)]);
if(or__3824__auto____6952)
{return or__3824__auto____6952;
} else
{var or__3824__auto____6953 = (cljs.core._persistent_BANG_["_"]);
if(or__3824__auto____6953)
{return or__3824__auto____6953;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientAssociative = {};
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3822__auto____6958 = tcoll;
if(and__3822__auto____6958)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3822__auto____6958;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{var x__2524__auto____6959 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____6960 = (cljs.core._assoc_BANG_[goog.typeOf(x__2524__auto____6959)]);
if(or__3824__auto____6960)
{return or__3824__auto____6960;
} else
{var or__3824__auto____6961 = (cljs.core._assoc_BANG_["_"]);
if(or__3824__auto____6961)
{return or__3824__auto____6961;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
cljs.core.ITransientMap = {};
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3822__auto____6966 = tcoll;
if(and__3822__auto____6966)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3822__auto____6966;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{var x__2524__auto____6967 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____6968 = (cljs.core._dissoc_BANG_[goog.typeOf(x__2524__auto____6967)]);
if(or__3824__auto____6968)
{return or__3824__auto____6968;
} else
{var or__3824__auto____6969 = (cljs.core._dissoc_BANG_["_"]);
if(or__3824__auto____6969)
{return or__3824__auto____6969;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
cljs.core.ITransientVector = {};
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3822__auto____6974 = tcoll;
if(and__3822__auto____6974)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3822__auto____6974;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{var x__2524__auto____6975 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____6976 = (cljs.core._assoc_n_BANG_[goog.typeOf(x__2524__auto____6975)]);
if(or__3824__auto____6976)
{return or__3824__auto____6976;
} else
{var or__3824__auto____6977 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3824__auto____6977)
{return or__3824__auto____6977;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3822__auto____6982 = tcoll;
if(and__3822__auto____6982)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3822__auto____6982;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{var x__2524__auto____6983 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____6984 = (cljs.core._pop_BANG_[goog.typeOf(x__2524__auto____6983)]);
if(or__3824__auto____6984)
{return or__3824__auto____6984;
} else
{var or__3824__auto____6985 = (cljs.core._pop_BANG_["_"]);
if(or__3824__auto____6985)
{return or__3824__auto____6985;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientSet = {};
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3822__auto____6990 = tcoll;
if(and__3822__auto____6990)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3822__auto____6990;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{var x__2524__auto____6991 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____6992 = (cljs.core._disjoin_BANG_[goog.typeOf(x__2524__auto____6991)]);
if(or__3824__auto____6992)
{return or__3824__auto____6992;
} else
{var or__3824__auto____6993 = (cljs.core._disjoin_BANG_["_"]);
if(or__3824__auto____6993)
{return or__3824__auto____6993;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
cljs.core.IComparable = {};
cljs.core._compare = (function _compare(x,y){
if((function (){var and__3822__auto____6998 = x;
if(and__3822__auto____6998)
{return x.cljs$core$IComparable$_compare$arity$2;
} else
{return and__3822__auto____6998;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else
{var x__2524__auto____6999 = (((x == null))?null:x);
return (function (){var or__3824__auto____7000 = (cljs.core._compare[goog.typeOf(x__2524__auto____6999)]);
if(or__3824__auto____7000)
{return or__3824__auto____7000;
} else
{var or__3824__auto____7001 = (cljs.core._compare["_"]);
if(or__3824__auto____7001)
{return or__3824__auto____7001;
} else
{throw cljs.core.missing_protocol.call(null,"IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});
cljs.core.IChunk = {};
cljs.core._drop_first = (function _drop_first(coll){
if((function (){var and__3822__auto____7006 = coll;
if(and__3822__auto____7006)
{return coll.cljs$core$IChunk$_drop_first$arity$1;
} else
{return and__3822__auto____7006;
}
})())
{return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else
{var x__2524__auto____7007 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7008 = (cljs.core._drop_first[goog.typeOf(x__2524__auto____7007)]);
if(or__3824__auto____7008)
{return or__3824__auto____7008;
} else
{var or__3824__auto____7009 = (cljs.core._drop_first["_"]);
if(or__3824__auto____7009)
{return or__3824__auto____7009;
} else
{throw cljs.core.missing_protocol.call(null,"IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedSeq = {};
cljs.core._chunked_first = (function _chunked_first(coll){
if((function (){var and__3822__auto____7014 = coll;
if(and__3822__auto____7014)
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else
{return and__3822__auto____7014;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else
{var x__2524__auto____7015 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7016 = (cljs.core._chunked_first[goog.typeOf(x__2524__auto____7015)]);
if(or__3824__auto____7016)
{return or__3824__auto____7016;
} else
{var or__3824__auto____7017 = (cljs.core._chunked_first["_"]);
if(or__3824__auto____7017)
{return or__3824__auto____7017;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._chunked_rest = (function _chunked_rest(coll){
if((function (){var and__3822__auto____7022 = coll;
if(and__3822__auto____7022)
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else
{return and__3822__auto____7022;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else
{var x__2524__auto____7023 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7024 = (cljs.core._chunked_rest[goog.typeOf(x__2524__auto____7023)]);
if(or__3824__auto____7024)
{return or__3824__auto____7024;
} else
{var or__3824__auto____7025 = (cljs.core._chunked_rest["_"]);
if(or__3824__auto____7025)
{return or__3824__auto____7025;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedNext = {};
cljs.core._chunked_next = (function _chunked_next(coll){
if((function (){var and__3822__auto____7030 = coll;
if(and__3822__auto____7030)
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else
{return and__3822__auto____7030;
}
})())
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else
{var x__2524__auto____7031 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7032 = (cljs.core._chunked_next[goog.typeOf(x__2524__auto____7031)]);
if(or__3824__auto____7032)
{return or__3824__auto____7032;
} else
{var or__3824__auto____7033 = (cljs.core._chunked_next["_"]);
if(or__3824__auto____7033)
{return or__3824__auto____7033;
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
{if((function (){var G__7037__7038 = coll;
if(G__7037__7038)
{if((function (){var or__3824__auto____7039 = (G__7037__7038.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3824__auto____7039)
{return or__3824__auto____7039;
} else
{return G__7037__7038.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__7037__7038.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__7037__7038);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__7037__7038);
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
{if((function (){var G__7044__7045 = coll;
if(G__7044__7045)
{if((function (){var or__3824__auto____7046 = (G__7044__7045.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____7046)
{return or__3824__auto____7046;
} else
{return G__7044__7045.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7044__7045.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7044__7045);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7044__7045);
}
})())
{return cljs.core._first.call(null,coll);
} else
{var s__7047 = cljs.core.seq.call(null,coll);
if((s__7047 == null))
{return null;
} else
{return cljs.core._first.call(null,s__7047);
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
{if((function (){var G__7052__7053 = coll;
if(G__7052__7053)
{if((function (){var or__3824__auto____7054 = (G__7052__7053.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____7054)
{return or__3824__auto____7054;
} else
{return G__7052__7053.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7052__7053.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7052__7053);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7052__7053);
}
})())
{return cljs.core._rest.call(null,coll);
} else
{var s__7055 = cljs.core.seq.call(null,coll);
if(!((s__7055 == null)))
{return cljs.core._rest.call(null,s__7055);
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
{if((function (){var G__7059__7060 = coll;
if(G__7059__7060)
{if((function (){var or__3824__auto____7061 = (G__7059__7060.cljs$lang$protocol_mask$partition0$ & 128);
if(or__3824__auto____7061)
{return or__3824__auto____7061;
} else
{return G__7059__7060.cljs$core$INext$;
}
})())
{return true;
} else
{if((!G__7059__7060.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__7059__7060);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__7059__7060);
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
var or__3824__auto____7063 = (x === y);
if(or__3824__auto____7063)
{return or__3824__auto____7063;
} else
{return cljs.core._equiv.call(null,x,y);
}
});
var _EQ___3 = (function() { 
var G__7064__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__7065 = y;
var G__7066 = cljs.core.first.call(null,more);
var G__7067 = cljs.core.next.call(null,more);
x = G__7065;
y = G__7066;
more = G__7067;
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
var G__7064 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7064__delegate.call(this, x, y, more);
};
G__7064.cljs$lang$maxFixedArity = 2;
G__7064.cljs$lang$applyTo = (function (arglist__7068){
var x = cljs.core.first(arglist__7068);
var y = cljs.core.first(cljs.core.next(arglist__7068));
var more = cljs.core.rest(cljs.core.next(arglist__7068));
return G__7064__delegate(x, y, more);
});
G__7064.cljs$lang$arity$variadic = G__7064__delegate;
return G__7064;
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
var G__7069 = null;
var G__7069__2 = (function (o,k){
return null;
});
var G__7069__3 = (function (o,k,not_found){
return not_found;
});
G__7069 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__7069__2.call(this,o,k);
case 3:
return G__7069__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7069;
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
var G__7070 = null;
var G__7070__2 = (function (_,f){
return f.call(null);
});
var G__7070__3 = (function (_,f,start){
return start;
});
G__7070 = function(_,f,start){
switch(arguments.length){
case 2:
return G__7070__2.call(this,_,f);
case 3:
return G__7070__3.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7070;
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
var G__7071 = null;
var G__7071__2 = (function (_,n){
return null;
});
var G__7071__3 = (function (_,n,not_found){
return not_found;
});
G__7071 = function(_,n,not_found){
switch(arguments.length){
case 2:
return G__7071__2.call(this,_,n);
case 3:
return G__7071__3.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7071;
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
var and__3822__auto____7072 = cljs.core.instance_QMARK_.call(null,Date,other);
if(and__3822__auto____7072)
{return (o.toString() === other.toString());
} else
{return and__3822__auto____7072;
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
var this__7073 = this;
return this__7073.val;
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
var cnt__7086 = cljs.core._count.call(null,cicoll);
if((cnt__7086 === 0))
{return f.call(null);
} else
{var val__7087 = cljs.core._nth.call(null,cicoll,0);
var n__7088 = 1;
while(true){
if((n__7088 < cnt__7086))
{var nval__7089 = f.call(null,val__7087,cljs.core._nth.call(null,cicoll,n__7088));
if(cljs.core.reduced_QMARK_.call(null,nval__7089))
{return cljs.core.deref.call(null,nval__7089);
} else
{{
var G__7098 = nval__7089;
var G__7099 = (n__7088 + 1);
val__7087 = G__7098;
n__7088 = G__7099;
continue;
}
}
} else
{return val__7087;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var cnt__7090 = cljs.core._count.call(null,cicoll);
var val__7091 = val;
var n__7092 = 0;
while(true){
if((n__7092 < cnt__7090))
{var nval__7093 = f.call(null,val__7091,cljs.core._nth.call(null,cicoll,n__7092));
if(cljs.core.reduced_QMARK_.call(null,nval__7093))
{return cljs.core.deref.call(null,nval__7093);
} else
{{
var G__7100 = nval__7093;
var G__7101 = (n__7092 + 1);
val__7091 = G__7100;
n__7092 = G__7101;
continue;
}
}
} else
{return val__7091;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var cnt__7094 = cljs.core._count.call(null,cicoll);
var val__7095 = val;
var n__7096 = idx;
while(true){
if((n__7096 < cnt__7094))
{var nval__7097 = f.call(null,val__7095,cljs.core._nth.call(null,cicoll,n__7096));
if(cljs.core.reduced_QMARK_.call(null,nval__7097))
{return cljs.core.deref.call(null,nval__7097);
} else
{{
var G__7102 = nval__7097;
var G__7103 = (n__7096 + 1);
val__7095 = G__7102;
n__7096 = G__7103;
continue;
}
}
} else
{return val__7095;
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
var cnt__7116 = arr.length;
if((arr.length === 0))
{return f.call(null);
} else
{var val__7117 = (arr[0]);
var n__7118 = 1;
while(true){
if((n__7118 < cnt__7116))
{var nval__7119 = f.call(null,val__7117,(arr[n__7118]));
if(cljs.core.reduced_QMARK_.call(null,nval__7119))
{return cljs.core.deref.call(null,nval__7119);
} else
{{
var G__7128 = nval__7119;
var G__7129 = (n__7118 + 1);
val__7117 = G__7128;
n__7118 = G__7129;
continue;
}
}
} else
{return val__7117;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){
var cnt__7120 = arr.length;
var val__7121 = val;
var n__7122 = 0;
while(true){
if((n__7122 < cnt__7120))
{var nval__7123 = f.call(null,val__7121,(arr[n__7122]));
if(cljs.core.reduced_QMARK_.call(null,nval__7123))
{return cljs.core.deref.call(null,nval__7123);
} else
{{
var G__7130 = nval__7123;
var G__7131 = (n__7122 + 1);
val__7121 = G__7130;
n__7122 = G__7131;
continue;
}
}
} else
{return val__7121;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){
var cnt__7124 = arr.length;
var val__7125 = val;
var n__7126 = idx;
while(true){
if((n__7126 < cnt__7124))
{var nval__7127 = f.call(null,val__7125,(arr[n__7126]));
if(cljs.core.reduced_QMARK_.call(null,nval__7127))
{return cljs.core.deref.call(null,nval__7127);
} else
{{
var G__7132 = nval__7127;
var G__7133 = (n__7126 + 1);
val__7125 = G__7132;
n__7126 = G__7133;
continue;
}
}
} else
{return val__7125;
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
var G__7137__7138 = x;
if(G__7137__7138)
{if((function (){var or__3824__auto____7139 = (G__7137__7138.cljs$lang$protocol_mask$partition0$ & 2);
if(or__3824__auto____7139)
{return or__3824__auto____7139;
} else
{return G__7137__7138.cljs$core$ICounted$;
}
})())
{return true;
} else
{if((!G__7137__7138.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__7137__7138);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__7137__7138);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__7143__7144 = x;
if(G__7143__7144)
{if((function (){var or__3824__auto____7145 = (G__7143__7144.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____7145)
{return or__3824__auto____7145;
} else
{return G__7143__7144.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__7143__7144.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7143__7144);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7143__7144);
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
var this__7146 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var this__7147 = this;
if(((this__7147.i + 1) < this__7147.a.length))
{return (new cljs.core.IndexedSeq(this__7147.a,(this__7147.i + 1)));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7148 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__7149 = this;
var c__7150 = coll.cljs$core$ICounted$_count$arity$1(coll);
if((c__7150 > 0))
{return (new cljs.core.RSeq(coll,(c__7150 - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.IndexedSeq.prototype.toString = (function (){
var this__7151 = this;
var this__7152 = this;
return cljs.core.pr_str.call(null,this__7152);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__7153 = this;
if(cljs.core.counted_QMARK_.call(null,this__7153.a))
{return cljs.core.ci_reduce.call(null,this__7153.a,f,(this__7153.a[this__7153.i]),(this__7153.i + 1));
} else
{return cljs.core.ci_reduce.call(null,coll,f,(this__7153.a[this__7153.i]),0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__7154 = this;
if(cljs.core.counted_QMARK_.call(null,this__7154.a))
{return cljs.core.ci_reduce.call(null,this__7154.a,f,start,this__7154.i);
} else
{return cljs.core.ci_reduce.call(null,coll,f,start,0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__7155 = this;
return this$;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__7156 = this;
return (this__7156.a.length - this__7156.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__7157 = this;
return (this__7157.a[this__7157.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__7158 = this;
if(((this__7158.i + 1) < this__7158.a.length))
{return (new cljs.core.IndexedSeq(this__7158.a,(this__7158.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7159 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__7160 = this;
var i__7161 = (n + this__7160.i);
if((i__7161 < this__7160.a.length))
{return (this__7160.a[i__7161]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__7162 = this;
var i__7163 = (n + this__7162.i);
if((i__7163 < this__7162.a.length))
{return (this__7162.a[i__7163]);
} else
{return not_found;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7164 = this;
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
var G__7165 = null;
var G__7165__2 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__7165__3 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__7165 = function(array,f,start){
switch(arguments.length){
case 2:
return G__7165__2.call(this,array,f);
case 3:
return G__7165__3.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7165;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__7166 = null;
var G__7166__2 = (function (array,k){
return (array[k]);
});
var G__7166__3 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__7166 = function(array,k,not_found){
switch(arguments.length){
case 2:
return G__7166__2.call(this,array,k);
case 3:
return G__7166__3.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7166;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__7167 = null;
var G__7167__2 = (function (array,n){
if((n < array.length))
{return (array[n]);
} else
{return null;
}
});
var G__7167__3 = (function (array,n,not_found){
if((n < array.length))
{return (array[n]);
} else
{return not_found;
}
});
G__7167 = function(array,n,not_found){
switch(arguments.length){
case 2:
return G__7167__2.call(this,array,n);
case 3:
return G__7167__3.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7167;
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
var this__7168 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7169 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.RSeq.prototype.toString = (function (){
var this__7170 = this;
var this__7171 = this;
return cljs.core.pr_str.call(null,this__7171);
});
cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7172 = this;
return coll;
});
cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7173 = this;
return (this__7173.i + 1);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7174 = this;
return cljs.core._nth.call(null,this__7174.ci,this__7174.i);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7175 = this;
if((this__7175.i > 0))
{return (new cljs.core.RSeq(this__7175.ci,(this__7175.i - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7176 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var this__7177 = this;
return (new cljs.core.RSeq(this__7177.ci,this__7177.i,new_meta));
});
cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7178 = this;
return this__7178.meta;
});
cljs.core.RSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7179 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__7179.meta);
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
var sn__7181 = cljs.core.next.call(null,s);
if(!((sn__7181 == null)))
{{
var G__7182 = sn__7181;
s = G__7182;
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
var G__7183__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__7184 = conj.call(null,coll,x);
var G__7185 = cljs.core.first.call(null,xs);
var G__7186 = cljs.core.next.call(null,xs);
coll = G__7184;
x = G__7185;
xs = G__7186;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__7183 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7183__delegate.call(this, coll, x, xs);
};
G__7183.cljs$lang$maxFixedArity = 2;
G__7183.cljs$lang$applyTo = (function (arglist__7187){
var coll = cljs.core.first(arglist__7187);
var x = cljs.core.first(cljs.core.next(arglist__7187));
var xs = cljs.core.rest(cljs.core.next(arglist__7187));
return G__7183__delegate(coll, x, xs);
});
G__7183.cljs$lang$arity$variadic = G__7183__delegate;
return G__7183;
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
var s__7190 = cljs.core.seq.call(null,coll);
var acc__7191 = 0;
while(true){
if(cljs.core.counted_QMARK_.call(null,s__7190))
{return (acc__7191 + cljs.core._count.call(null,s__7190));
} else
{{
var G__7192 = cljs.core.next.call(null,s__7190);
var G__7193 = (acc__7191 + 1);
s__7190 = G__7192;
acc__7191 = G__7193;
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
var G__7194 = cljs.core.next.call(null,coll);
var G__7195 = (n - 1);
coll = G__7194;
n = G__7195;
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
var G__7196 = cljs.core.next.call(null,coll);
var G__7197 = (n - 1);
var G__7198 = not_found;
coll = G__7196;
n = G__7197;
not_found = G__7198;
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
{if((function (){var G__7205__7206 = coll;
if(G__7205__7206)
{if((function (){var or__3824__auto____7207 = (G__7205__7206.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____7207)
{return or__3824__auto____7207;
} else
{return G__7205__7206.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__7205__7206.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7205__7206);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7205__7206);
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
{if((function (){var G__7208__7209 = coll;
if(G__7208__7209)
{if((function (){var or__3824__auto____7210 = (G__7208__7209.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____7210)
{return or__3824__auto____7210;
} else
{return G__7208__7209.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__7208__7209.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7208__7209);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7208__7209);
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
var G__7213__delegate = function (coll,k,v,kvs){
while(true){
var ret__7212 = assoc.call(null,coll,k,v);
if(cljs.core.truth_(kvs))
{{
var G__7214 = ret__7212;
var G__7215 = cljs.core.first.call(null,kvs);
var G__7216 = cljs.core.second.call(null,kvs);
var G__7217 = cljs.core.nnext.call(null,kvs);
coll = G__7214;
k = G__7215;
v = G__7216;
kvs = G__7217;
continue;
}
} else
{return ret__7212;
}
break;
}
};
var G__7213 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7213__delegate.call(this, coll, k, v, kvs);
};
G__7213.cljs$lang$maxFixedArity = 3;
G__7213.cljs$lang$applyTo = (function (arglist__7218){
var coll = cljs.core.first(arglist__7218);
var k = cljs.core.first(cljs.core.next(arglist__7218));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7218)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7218)));
return G__7213__delegate(coll, k, v, kvs);
});
G__7213.cljs$lang$arity$variadic = G__7213__delegate;
return G__7213;
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
var G__7221__delegate = function (coll,k,ks){
while(true){
var ret__7220 = dissoc.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__7222 = ret__7220;
var G__7223 = cljs.core.first.call(null,ks);
var G__7224 = cljs.core.next.call(null,ks);
coll = G__7222;
k = G__7223;
ks = G__7224;
continue;
}
} else
{return ret__7220;
}
break;
}
};
var G__7221 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7221__delegate.call(this, coll, k, ks);
};
G__7221.cljs$lang$maxFixedArity = 2;
G__7221.cljs$lang$applyTo = (function (arglist__7225){
var coll = cljs.core.first(arglist__7225);
var k = cljs.core.first(cljs.core.next(arglist__7225));
var ks = cljs.core.rest(cljs.core.next(arglist__7225));
return G__7221__delegate(coll, k, ks);
});
G__7221.cljs$lang$arity$variadic = G__7221__delegate;
return G__7221;
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
if((function (){var G__7229__7230 = o;
if(G__7229__7230)
{if((function (){var or__3824__auto____7231 = (G__7229__7230.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____7231)
{return or__3824__auto____7231;
} else
{return G__7229__7230.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__7229__7230.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__7229__7230);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__7229__7230);
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
var G__7234__delegate = function (coll,k,ks){
while(true){
var ret__7233 = disj.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__7235 = ret__7233;
var G__7236 = cljs.core.first.call(null,ks);
var G__7237 = cljs.core.next.call(null,ks);
coll = G__7235;
k = G__7236;
ks = G__7237;
continue;
}
} else
{return ret__7233;
}
break;
}
};
var G__7234 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7234__delegate.call(this, coll, k, ks);
};
G__7234.cljs$lang$maxFixedArity = 2;
G__7234.cljs$lang$applyTo = (function (arglist__7238){
var coll = cljs.core.first(arglist__7238);
var k = cljs.core.first(cljs.core.next(arglist__7238));
var ks = cljs.core.rest(cljs.core.next(arglist__7238));
return G__7234__delegate(coll, k, ks);
});
G__7234.cljs$lang$arity$variadic = G__7234__delegate;
return G__7234;
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
var h__7240 = goog.string.hashCode(k);
(cljs.core.string_hash_cache[k] = h__7240);
cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + 1);
return h__7240;
});
cljs.core.check_string_hash_cache = (function check_string_hash_cache(k){
if((cljs.core.string_hash_cache_count > 255))
{cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
} else
{}
var h__7242 = (cljs.core.string_hash_cache[k]);
if(!((h__7242 == null)))
{return h__7242;
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
if((function (){var and__3822__auto____7244 = goog.isString(o);
if(and__3822__auto____7244)
{return check_cache;
} else
{return and__3822__auto____7244;
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
{var G__7248__7249 = x;
if(G__7248__7249)
{if((function (){var or__3824__auto____7250 = (G__7248__7249.cljs$lang$protocol_mask$partition0$ & 8);
if(or__3824__auto____7250)
{return or__3824__auto____7250;
} else
{return G__7248__7249.cljs$core$ICollection$;
}
})())
{return true;
} else
{if((!G__7248__7249.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__7248__7249);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__7248__7249);
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
{var G__7254__7255 = x;
if(G__7254__7255)
{if((function (){var or__3824__auto____7256 = (G__7254__7255.cljs$lang$protocol_mask$partition0$ & 4096);
if(or__3824__auto____7256)
{return or__3824__auto____7256;
} else
{return G__7254__7255.cljs$core$ISet$;
}
})())
{return true;
} else
{if((!G__7254__7255.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__7254__7255);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__7254__7255);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__7260__7261 = x;
if(G__7260__7261)
{if((function (){var or__3824__auto____7262 = (G__7260__7261.cljs$lang$protocol_mask$partition0$ & 512);
if(or__3824__auto____7262)
{return or__3824__auto____7262;
} else
{return G__7260__7261.cljs$core$IAssociative$;
}
})())
{return true;
} else
{if((!G__7260__7261.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__7260__7261);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__7260__7261);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__7266__7267 = x;
if(G__7266__7267)
{if((function (){var or__3824__auto____7268 = (G__7266__7267.cljs$lang$protocol_mask$partition0$ & 16777216);
if(or__3824__auto____7268)
{return or__3824__auto____7268;
} else
{return G__7266__7267.cljs$core$ISequential$;
}
})())
{return true;
} else
{if((!G__7266__7267.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__7266__7267);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__7266__7267);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__7272__7273 = x;
if(G__7272__7273)
{if((function (){var or__3824__auto____7274 = (G__7272__7273.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____7274)
{return or__3824__auto____7274;
} else
{return G__7272__7273.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__7272__7273.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7272__7273);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7272__7273);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null))
{return false;
} else
{var G__7278__7279 = x;
if(G__7278__7279)
{if((function (){var or__3824__auto____7280 = (G__7278__7279.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3824__auto____7280)
{return or__3824__auto____7280;
} else
{return G__7278__7279.cljs$core$IMap$;
}
})())
{return true;
} else
{if((!G__7278__7279.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__7278__7279);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__7278__7279);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__7284__7285 = x;
if(G__7284__7285)
{if((function (){var or__3824__auto____7286 = (G__7284__7285.cljs$lang$protocol_mask$partition0$ & 16384);
if(or__3824__auto____7286)
{return or__3824__auto____7286;
} else
{return G__7284__7285.cljs$core$IVector$;
}
})())
{return true;
} else
{if((!G__7284__7285.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__7284__7285);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__7284__7285);
}
});
cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){
var G__7290__7291 = x;
if(G__7290__7291)
{if((function (){var or__3824__auto____7292 = (G__7290__7291.cljs$lang$protocol_mask$partition1$ & 512);
if(or__3824__auto____7292)
{return or__3824__auto____7292;
} else
{return G__7290__7291.cljs$core$IChunkedSeq$;
}
})())
{return true;
} else
{if((!G__7290__7291.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__7290__7291);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__7290__7291);
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
var G__7293__delegate = function (keyvals){
return cljs.core.apply.call(null,goog.object.create,keyvals);
};
var G__7293 = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7293__delegate.call(this, keyvals);
};
G__7293.cljs$lang$maxFixedArity = 0;
G__7293.cljs$lang$applyTo = (function (arglist__7294){
var keyvals = cljs.core.seq(arglist__7294);;
return G__7293__delegate(keyvals);
});
G__7293.cljs$lang$arity$variadic = G__7293__delegate;
return G__7293;
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
var keys__7296 = [];
goog.object.forEach(obj,(function (val,key,obj){
return keys__7296.push(key);
}));
return keys__7296;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__7300 = i;
var j__7301 = j;
var len__7302 = len;
while(true){
if((len__7302 === 0))
{return to;
} else
{(to[j__7301] = (from[i__7300]));
{
var G__7303 = (i__7300 + 1);
var G__7304 = (j__7301 + 1);
var G__7305 = (len__7302 - 1);
i__7300 = G__7303;
j__7301 = G__7304;
len__7302 = G__7305;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__7309 = (i + (len - 1));
var j__7310 = (j + (len - 1));
var len__7311 = len;
while(true){
if((len__7311 === 0))
{return to;
} else
{(to[j__7310] = (from[i__7309]));
{
var G__7312 = (i__7309 - 1);
var G__7313 = (j__7310 - 1);
var G__7314 = (len__7311 - 1);
i__7309 = G__7312;
j__7310 = G__7313;
len__7311 = G__7314;
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
{var G__7318__7319 = s;
if(G__7318__7319)
{if((function (){var or__3824__auto____7320 = (G__7318__7319.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____7320)
{return or__3824__auto____7320;
} else
{return G__7318__7319.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7318__7319.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7318__7319);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7318__7319);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__7324__7325 = s;
if(G__7324__7325)
{if((function (){var or__3824__auto____7326 = (G__7324__7325.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____7326)
{return or__3824__auto____7326;
} else
{return G__7324__7325.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__7324__7325.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__7324__7325);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__7324__7325);
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
var and__3822__auto____7329 = goog.isString(x);
if(and__3822__auto____7329)
{return !((function (){var or__3824__auto____7330 = (x.charAt(0) === "\uFDD0");
if(or__3824__auto____7330)
{return or__3824__auto____7330;
} else
{return (x.charAt(0) === "\uFDD1");
}
})());
} else
{return and__3822__auto____7329;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3822__auto____7332 = goog.isString(x);
if(and__3822__auto____7332)
{return (x.charAt(0) === "\uFDD0");
} else
{return and__3822__auto____7332;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3822__auto____7334 = goog.isString(x);
if(and__3822__auto____7334)
{return (x.charAt(0) === "\uFDD1");
} else
{return and__3822__auto____7334;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber(n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction(f);
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3824__auto____7339 = cljs.core.fn_QMARK_.call(null,f);
if(or__3824__auto____7339)
{return or__3824__auto____7339;
} else
{var G__7340__7341 = f;
if(G__7340__7341)
{if((function (){var or__3824__auto____7342 = (G__7340__7341.cljs$lang$protocol_mask$partition0$ & 1);
if(or__3824__auto____7342)
{return or__3824__auto____7342;
} else
{return G__7340__7341.cljs$core$IFn$;
}
})())
{return true;
} else
{if((!G__7340__7341.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__7340__7341);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__7340__7341);
}
}
});
/**
* Returns true if n is an integer.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3822__auto____7346 = cljs.core.number_QMARK_.call(null,n);
if(and__3822__auto____7346)
{var and__3822__auto____7347 = !(isNaN(n));
if(and__3822__auto____7347)
{var and__3822__auto____7348 = !((n === Infinity));
if(and__3822__auto____7348)
{return (parseFloat(n) === parseInt(n,10));
} else
{return and__3822__auto____7348;
}
} else
{return and__3822__auto____7347;
}
} else
{return and__3822__auto____7346;
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
if((function (){var and__3822__auto____7351 = !((coll == null));
if(and__3822__auto____7351)
{var and__3822__auto____7352 = cljs.core.associative_QMARK_.call(null,coll);
if(and__3822__auto____7352)
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3822__auto____7352;
}
} else
{return and__3822__auto____7351;
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
var G__7361__delegate = function (x,y,more){
if(!(cljs.core._EQ_.call(null,x,y)))
{var s__7357 = cljs.core.PersistentHashSet.fromArray([y,x]);
var xs__7358 = more;
while(true){
var x__7359 = cljs.core.first.call(null,xs__7358);
var etc__7360 = cljs.core.next.call(null,xs__7358);
if(cljs.core.truth_(xs__7358))
{if(cljs.core.contains_QMARK_.call(null,s__7357,x__7359))
{return false;
} else
{{
var G__7362 = cljs.core.conj.call(null,s__7357,x__7359);
var G__7363 = etc__7360;
s__7357 = G__7362;
xs__7358 = G__7363;
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
var G__7361 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7361__delegate.call(this, x, y, more);
};
G__7361.cljs$lang$maxFixedArity = 2;
G__7361.cljs$lang$applyTo = (function (arglist__7364){
var x = cljs.core.first(arglist__7364);
var y = cljs.core.first(cljs.core.next(arglist__7364));
var more = cljs.core.rest(cljs.core.next(arglist__7364));
return G__7361__delegate(x, y, more);
});
G__7361.cljs$lang$arity$variadic = G__7361__delegate;
return G__7361;
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
{if((function (){var G__7368__7369 = x;
if(G__7368__7369)
{if((function (){var or__3824__auto____7370 = (G__7368__7369.cljs$lang$protocol_mask$partition1$ & 2048);
if(or__3824__auto____7370)
{return or__3824__auto____7370;
} else
{return G__7368__7369.cljs$core$IComparable$;
}
})())
{return true;
} else
{if((!G__7368__7369.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__7368__7369);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__7368__7369);
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
var xl__7375 = cljs.core.count.call(null,xs);
var yl__7376 = cljs.core.count.call(null,ys);
if((xl__7375 < yl__7376))
{return -1;
} else
{if((xl__7375 > yl__7376))
{return 1;
} else
{if("\uFDD0'else")
{return compare_indexed.call(null,xs,ys,xl__7375,0);
} else
{return null;
}
}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){
while(true){
var d__7377 = cljs.core.compare.call(null,cljs.core.nth.call(null,xs,n),cljs.core.nth.call(null,ys,n));
if((function (){var and__3822__auto____7378 = (d__7377 === 0);
if(and__3822__auto____7378)
{return ((n + 1) < len);
} else
{return and__3822__auto____7378;
}
})())
{{
var G__7379 = xs;
var G__7380 = ys;
var G__7381 = len;
var G__7382 = (n + 1);
xs = G__7379;
ys = G__7380;
len = G__7381;
n = G__7382;
continue;
}
} else
{return d__7377;
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
var r__7384 = f.call(null,x,y);
if(cljs.core.number_QMARK_.call(null,r__7384))
{return r__7384;
} else
{if(cljs.core.truth_(r__7384))
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
{var a__7386 = cljs.core.to_array.call(null,coll);
goog.array.stableSort(a__7386,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__7386);
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
var temp__3971__auto____7392 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____7392)
{var s__7393 = temp__3971__auto____7392;
return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__7393),cljs.core.next.call(null,s__7393));
} else
{return f.call(null);
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__7394 = val;
var coll__7395 = cljs.core.seq.call(null,coll);
while(true){
if(coll__7395)
{var nval__7396 = f.call(null,val__7394,cljs.core.first.call(null,coll__7395));
if(cljs.core.reduced_QMARK_.call(null,nval__7396))
{return cljs.core.deref.call(null,nval__7396);
} else
{{
var G__7397 = nval__7396;
var G__7398 = cljs.core.next.call(null,coll__7395);
val__7394 = G__7397;
coll__7395 = G__7398;
continue;
}
}
} else
{return val__7394;
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
var a__7400 = cljs.core.to_array.call(null,coll);
goog.array.shuffle(a__7400);
return cljs.core.vec.call(null,a__7400);
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
if((function (){var G__7407__7408 = coll;
if(G__7407__7408)
{if((function (){var or__3824__auto____7409 = (G__7407__7408.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____7409)
{return or__3824__auto____7409;
} else
{return G__7407__7408.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__7407__7408.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7407__7408);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7407__7408);
}
})())
{return cljs.core._reduce.call(null,coll,f);
} else
{return cljs.core.seq_reduce.call(null,f,coll);
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__7410__7411 = coll;
if(G__7410__7411)
{if((function (){var or__3824__auto____7412 = (G__7410__7411.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____7412)
{return or__3824__auto____7412;
} else
{return G__7410__7411.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__7410__7411.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7410__7411);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7410__7411);
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
var G__7413__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__7413 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7413__delegate.call(this, x, y, more);
};
G__7413.cljs$lang$maxFixedArity = 2;
G__7413.cljs$lang$applyTo = (function (arglist__7414){
var x = cljs.core.first(arglist__7414);
var y = cljs.core.first(cljs.core.next(arglist__7414));
var more = cljs.core.rest(cljs.core.next(arglist__7414));
return G__7413__delegate(x, y, more);
});
G__7413.cljs$lang$arity$variadic = G__7413__delegate;
return G__7413;
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
var G__7415__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__7415 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7415__delegate.call(this, x, y, more);
};
G__7415.cljs$lang$maxFixedArity = 2;
G__7415.cljs$lang$applyTo = (function (arglist__7416){
var x = cljs.core.first(arglist__7416);
var y = cljs.core.first(cljs.core.next(arglist__7416));
var more = cljs.core.rest(cljs.core.next(arglist__7416));
return G__7415__delegate(x, y, more);
});
G__7415.cljs$lang$arity$variadic = G__7415__delegate;
return G__7415;
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
var G__7417__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__7417 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7417__delegate.call(this, x, y, more);
};
G__7417.cljs$lang$maxFixedArity = 2;
G__7417.cljs$lang$applyTo = (function (arglist__7418){
var x = cljs.core.first(arglist__7418);
var y = cljs.core.first(cljs.core.next(arglist__7418));
var more = cljs.core.rest(cljs.core.next(arglist__7418));
return G__7417__delegate(x, y, more);
});
G__7417.cljs$lang$arity$variadic = G__7417__delegate;
return G__7417;
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
var G__7419__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__7419 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7419__delegate.call(this, x, y, more);
};
G__7419.cljs$lang$maxFixedArity = 2;
G__7419.cljs$lang$applyTo = (function (arglist__7420){
var x = cljs.core.first(arglist__7420);
var y = cljs.core.first(cljs.core.next(arglist__7420));
var more = cljs.core.rest(cljs.core.next(arglist__7420));
return G__7419__delegate(x, y, more);
});
G__7419.cljs$lang$arity$variadic = G__7419__delegate;
return G__7419;
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
var G__7421__delegate = function (x,y,more){
while(true){
if((x < y))
{if(cljs.core.next.call(null,more))
{{
var G__7422 = y;
var G__7423 = cljs.core.first.call(null,more);
var G__7424 = cljs.core.next.call(null,more);
x = G__7422;
y = G__7423;
more = G__7424;
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
var G__7421 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7421__delegate.call(this, x, y, more);
};
G__7421.cljs$lang$maxFixedArity = 2;
G__7421.cljs$lang$applyTo = (function (arglist__7425){
var x = cljs.core.first(arglist__7425);
var y = cljs.core.first(cljs.core.next(arglist__7425));
var more = cljs.core.rest(cljs.core.next(arglist__7425));
return G__7421__delegate(x, y, more);
});
G__7421.cljs$lang$arity$variadic = G__7421__delegate;
return G__7421;
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
var G__7426__delegate = function (x,y,more){
while(true){
if((x <= y))
{if(cljs.core.next.call(null,more))
{{
var G__7427 = y;
var G__7428 = cljs.core.first.call(null,more);
var G__7429 = cljs.core.next.call(null,more);
x = G__7427;
y = G__7428;
more = G__7429;
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
var G__7426 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7426__delegate.call(this, x, y, more);
};
G__7426.cljs$lang$maxFixedArity = 2;
G__7426.cljs$lang$applyTo = (function (arglist__7430){
var x = cljs.core.first(arglist__7430);
var y = cljs.core.first(cljs.core.next(arglist__7430));
var more = cljs.core.rest(cljs.core.next(arglist__7430));
return G__7426__delegate(x, y, more);
});
G__7426.cljs$lang$arity$variadic = G__7426__delegate;
return G__7426;
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
var G__7431__delegate = function (x,y,more){
while(true){
if((x > y))
{if(cljs.core.next.call(null,more))
{{
var G__7432 = y;
var G__7433 = cljs.core.first.call(null,more);
var G__7434 = cljs.core.next.call(null,more);
x = G__7432;
y = G__7433;
more = G__7434;
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
var G__7431 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7431__delegate.call(this, x, y, more);
};
G__7431.cljs$lang$maxFixedArity = 2;
G__7431.cljs$lang$applyTo = (function (arglist__7435){
var x = cljs.core.first(arglist__7435);
var y = cljs.core.first(cljs.core.next(arglist__7435));
var more = cljs.core.rest(cljs.core.next(arglist__7435));
return G__7431__delegate(x, y, more);
});
G__7431.cljs$lang$arity$variadic = G__7431__delegate;
return G__7431;
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
var G__7436__delegate = function (x,y,more){
while(true){
if((x >= y))
{if(cljs.core.next.call(null,more))
{{
var G__7437 = y;
var G__7438 = cljs.core.first.call(null,more);
var G__7439 = cljs.core.next.call(null,more);
x = G__7437;
y = G__7438;
more = G__7439;
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
var G__7436 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7436__delegate.call(this, x, y, more);
};
G__7436.cljs$lang$maxFixedArity = 2;
G__7436.cljs$lang$applyTo = (function (arglist__7440){
var x = cljs.core.first(arglist__7440);
var y = cljs.core.first(cljs.core.next(arglist__7440));
var more = cljs.core.rest(cljs.core.next(arglist__7440));
return G__7436__delegate(x, y, more);
});
G__7436.cljs$lang$arity$variadic = G__7436__delegate;
return G__7436;
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
var G__7441__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__7441 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7441__delegate.call(this, x, y, more);
};
G__7441.cljs$lang$maxFixedArity = 2;
G__7441.cljs$lang$applyTo = (function (arglist__7442){
var x = cljs.core.first(arglist__7442);
var y = cljs.core.first(cljs.core.next(arglist__7442));
var more = cljs.core.rest(cljs.core.next(arglist__7442));
return G__7441__delegate(x, y, more);
});
G__7441.cljs$lang$arity$variadic = G__7441__delegate;
return G__7441;
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
var G__7443__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__7443 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7443__delegate.call(this, x, y, more);
};
G__7443.cljs$lang$maxFixedArity = 2;
G__7443.cljs$lang$applyTo = (function (arglist__7444){
var x = cljs.core.first(arglist__7444);
var y = cljs.core.first(cljs.core.next(arglist__7444));
var more = cljs.core.rest(cljs.core.next(arglist__7444));
return G__7443__delegate(x, y, more);
});
G__7443.cljs$lang$arity$variadic = G__7443__delegate;
return G__7443;
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
var rem__7446 = (n % d);
return cljs.core.fix.call(null,((n - rem__7446) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__7448 = cljs.core.quot.call(null,n,d);
return (n - (d * q__7448));
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
var v__7451 = (v - ((v >> 1) & 1431655765));
var v__7452 = ((v__7451 & 858993459) + ((v__7451 >> 2) & 858993459));
return ((((v__7452 + (v__7452 >> 4)) & 252645135) * 16843009) >> 24);
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
var G__7453__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__7454 = y;
var G__7455 = cljs.core.first.call(null,more);
var G__7456 = cljs.core.next.call(null,more);
x = G__7454;
y = G__7455;
more = G__7456;
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
var G__7453 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7453__delegate.call(this, x, y, more);
};
G__7453.cljs$lang$maxFixedArity = 2;
G__7453.cljs$lang$applyTo = (function (arglist__7457){
var x = cljs.core.first(arglist__7457);
var y = cljs.core.first(cljs.core.next(arglist__7457));
var more = cljs.core.rest(cljs.core.next(arglist__7457));
return G__7453__delegate(x, y, more);
});
G__7453.cljs$lang$arity$variadic = G__7453__delegate;
return G__7453;
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
var n__7461 = n;
var xs__7462 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7463 = xs__7462;
if(and__3822__auto____7463)
{return (n__7461 > 0);
} else
{return and__3822__auto____7463;
}
})()))
{{
var G__7464 = (n__7461 - 1);
var G__7465 = cljs.core.next.call(null,xs__7462);
n__7461 = G__7464;
xs__7462 = G__7465;
continue;
}
} else
{return xs__7462;
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
var G__7466__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__7467 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__7468 = cljs.core.next.call(null,more);
sb = G__7467;
more = G__7468;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__7466 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__7466__delegate.call(this, x, ys);
};
G__7466.cljs$lang$maxFixedArity = 1;
G__7466.cljs$lang$applyTo = (function (arglist__7469){
var x = cljs.core.first(arglist__7469);
var ys = cljs.core.rest(arglist__7469);
return G__7466__delegate(x, ys);
});
G__7466.cljs$lang$arity$variadic = G__7466__delegate;
return G__7466;
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
var G__7470__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__7471 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__7472 = cljs.core.next.call(null,more);
sb = G__7471;
more = G__7472;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__7470 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__7470__delegate.call(this, x, ys);
};
G__7470.cljs$lang$maxFixedArity = 1;
G__7470.cljs$lang$applyTo = (function (arglist__7473){
var x = cljs.core.first(arglist__7473);
var ys = cljs.core.rest(arglist__7473);
return G__7470__delegate(x, ys);
});
G__7470.cljs$lang$arity$variadic = G__7470__delegate;
return G__7470;
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
var args__7477 = cljs.core.map.call(null,(function (x){
if((function (){var or__3824__auto____7476 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____7476)
{return or__3824__auto____7476;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{return [cljs.core.str(x)].join('');
} else
{return x;
}
}),args);
return cljs.core.apply.call(null,goog.string.format,fmt,args__7477);
};
var format = function (fmt,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return format__delegate.call(this, fmt, args);
};
format.cljs$lang$maxFixedArity = 1;
format.cljs$lang$applyTo = (function (arglist__7478){
var fmt = cljs.core.first(arglist__7478);
var args = cljs.core.rest(arglist__7478);
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
return cljs.core.boolean$.call(null,((cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__7481 = cljs.core.seq.call(null,x);
var ys__7482 = cljs.core.seq.call(null,y);
while(true){
if((xs__7481 == null))
{return (ys__7482 == null);
} else
{if((ys__7482 == null))
{return false;
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__7481),cljs.core.first.call(null,ys__7482)))
{{
var G__7483 = cljs.core.next.call(null,xs__7481);
var G__7484 = cljs.core.next.call(null,ys__7482);
xs__7481 = G__7483;
ys__7482 = G__7484;
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
return cljs.core.reduce.call(null,(function (p1__7485_SHARP_,p2__7486_SHARP_){
return cljs.core.hash_combine.call(null,p1__7485_SHARP_,cljs.core.hash.call(null,p2__7486_SHARP_,false));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll),false),cljs.core.next.call(null,coll));
});
cljs.core.hash_imap = (function hash_imap(m){
var h__7490 = 0;
var s__7491 = cljs.core.seq.call(null,m);
while(true){
if(s__7491)
{var e__7492 = cljs.core.first.call(null,s__7491);
{
var G__7493 = ((h__7490 + (cljs.core.hash.call(null,cljs.core.key.call(null,e__7492)) ^ cljs.core.hash.call(null,cljs.core.val.call(null,e__7492)))) % 4503599627370496);
var G__7494 = cljs.core.next.call(null,s__7491);
h__7490 = G__7493;
s__7491 = G__7494;
continue;
}
} else
{return h__7490;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h__7498 = 0;
var s__7499 = cljs.core.seq.call(null,s);
while(true){
if(s__7499)
{var e__7500 = cljs.core.first.call(null,s__7499);
{
var G__7501 = ((h__7498 + cljs.core.hash.call(null,e__7500)) % 4503599627370496);
var G__7502 = cljs.core.next.call(null,s__7499);
h__7498 = G__7501;
s__7499 = G__7502;
continue;
}
} else
{return h__7498;
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
var G__7510__7511 = cljs.core.seq.call(null,fn_map);
while(true){
if(G__7510__7511)
{var vec__7512__7513 = cljs.core.first.call(null,G__7510__7511);
var key_name__7514 = cljs.core.nth.call(null,vec__7512__7513,0,null);
var f__7515 = cljs.core.nth.call(null,vec__7512__7513,1,null);
var str_name__7516 = cljs.core.name.call(null,key_name__7514);
(obj[str_name__7516] = f__7515);
{
var G__7517 = cljs.core.next.call(null,G__7510__7511);
G__7510__7511 = G__7517;
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
var this__7518 = this;
var h__2340__auto____7519 = this__7518.__hash;
if(!((h__2340__auto____7519 == null)))
{return h__2340__auto____7519;
} else
{var h__2340__auto____7520 = cljs.core.hash_coll.call(null,coll);
this__7518.__hash = h__2340__auto____7520;
return h__2340__auto____7520;
}
});
cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7521 = this;
if((this__7521.count === 1))
{return null;
} else
{return this__7521.rest;
}
});
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7522 = this;
return (new cljs.core.List(this__7522.meta,o,coll,(this__7522.count + 1),null));
});
cljs.core.List.prototype.toString = (function (){
var this__7523 = this;
var this__7524 = this;
return cljs.core.pr_str.call(null,this__7524);
});
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7525 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7526 = this;
return this__7526.count;
});
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__7527 = this;
return this__7527.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__7528 = this;
return coll.cljs$core$ISeq$_rest$arity$1(coll);
});
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7529 = this;
return this__7529.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7530 = this;
if((this__7530.count === 1))
{return cljs.core.List.EMPTY;
} else
{return this__7530.rest;
}
});
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7531 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7532 = this;
return (new cljs.core.List(meta,this__7532.first,this__7532.rest,this__7532.count,this__7532.__hash));
});
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7533 = this;
return this__7533.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7534 = this;
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
var this__7535 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7536 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7537 = this;
return (new cljs.core.List(this__7537.meta,o,null,1,null));
});
cljs.core.EmptyList.prototype.toString = (function (){
var this__7538 = this;
var this__7539 = this;
return cljs.core.pr_str.call(null,this__7539);
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7540 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7541 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__7542 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__7543 = this;
throw (new Error("Can't pop empty list"));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7544 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7545 = this;
return cljs.core.List.EMPTY;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7546 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7547 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7548 = this;
return this__7548.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7549 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__7553__7554 = coll;
if(G__7553__7554)
{if((function (){var or__3824__auto____7555 = (G__7553__7554.cljs$lang$protocol_mask$partition0$ & 134217728);
if(or__3824__auto____7555)
{return or__3824__auto____7555;
} else
{return G__7553__7554.cljs$core$IReversible$;
}
})())
{return true;
} else
{if((!G__7553__7554.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__7553__7554);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__7553__7554);
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
var G__7556__delegate = function (x,y,z,items){
return cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items)),z),y),x);
};
var G__7556 = function (x,y,z,var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7556__delegate.call(this, x, y, z, items);
};
G__7556.cljs$lang$maxFixedArity = 3;
G__7556.cljs$lang$applyTo = (function (arglist__7557){
var x = cljs.core.first(arglist__7557);
var y = cljs.core.first(cljs.core.next(arglist__7557));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7557)));
var items = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7557)));
return G__7556__delegate(x, y, z, items);
});
G__7556.cljs$lang$arity$variadic = G__7556__delegate;
return G__7556;
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
var this__7558 = this;
var h__2340__auto____7559 = this__7558.__hash;
if(!((h__2340__auto____7559 == null)))
{return h__2340__auto____7559;
} else
{var h__2340__auto____7560 = cljs.core.hash_coll.call(null,coll);
this__7558.__hash = h__2340__auto____7560;
return h__2340__auto____7560;
}
});
cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7561 = this;
if((this__7561.rest == null))
{return null;
} else
{return cljs.core._seq.call(null,this__7561.rest);
}
});
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7562 = this;
return (new cljs.core.Cons(null,o,coll,this__7562.__hash));
});
cljs.core.Cons.prototype.toString = (function (){
var this__7563 = this;
var this__7564 = this;
return cljs.core.pr_str.call(null,this__7564);
});
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7565 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7566 = this;
return this__7566.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7567 = this;
if((this__7567.rest == null))
{return cljs.core.List.EMPTY;
} else
{return this__7567.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7568 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7569 = this;
return (new cljs.core.Cons(meta,this__7569.first,this__7569.rest,this__7569.__hash));
});
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7570 = this;
return this__7570.meta;
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7571 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__7571.meta);
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3824__auto____7576 = (coll == null);
if(or__3824__auto____7576)
{return or__3824__auto____7576;
} else
{var G__7577__7578 = coll;
if(G__7577__7578)
{if((function (){var or__3824__auto____7579 = (G__7577__7578.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____7579)
{return or__3824__auto____7579;
} else
{return G__7577__7578.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7577__7578.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7577__7578);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7577__7578);
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq.call(null,coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__7583__7584 = x;
if(G__7583__7584)
{if((function (){var or__3824__auto____7585 = (G__7583__7584.cljs$lang$protocol_mask$partition0$ & 33554432);
if(or__3824__auto____7585)
{return or__3824__auto____7585;
} else
{return G__7583__7584.cljs$core$IList$;
}
})())
{return true;
} else
{if((!G__7583__7584.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__7583__7584);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__7583__7584);
}
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__7586 = null;
var G__7586__2 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__7586__3 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__7586 = function(string,f,start){
switch(arguments.length){
case 2:
return G__7586__2.call(this,string,f);
case 3:
return G__7586__3.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7586;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__7587 = null;
var G__7587__2 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__7587__3 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__7587 = function(string,k,not_found){
switch(arguments.length){
case 2:
return G__7587__2.call(this,string,k);
case 3:
return G__7587__3.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7587;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__7588 = null;
var G__7588__2 = (function (string,n){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return null;
}
});
var G__7588__3 = (function (string,n,not_found){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return not_found;
}
});
G__7588 = function(string,n,not_found){
switch(arguments.length){
case 2:
return G__7588__2.call(this,string,n);
case 3:
return G__7588__3.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7588;
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
var G__7600 = null;
var G__7600__2 = (function (this_sym7591,coll){
var this__7593 = this;
var this_sym7591__7594 = this;
var ___7595 = this_sym7591__7594;
if((coll == null))
{return null;
} else
{var strobj__7596 = coll.strobj;
if((strobj__7596 == null))
{return cljs.core._lookup.call(null,coll,this__7593.k,null);
} else
{return (strobj__7596[this__7593.k]);
}
}
});
var G__7600__3 = (function (this_sym7592,coll,not_found){
var this__7593 = this;
var this_sym7592__7597 = this;
var ___7598 = this_sym7592__7597;
if((coll == null))
{return not_found;
} else
{return cljs.core._lookup.call(null,coll,this__7593.k,not_found);
}
});
G__7600 = function(this_sym7592,coll,not_found){
switch(arguments.length){
case 2:
return G__7600__2.call(this,this_sym7592,coll);
case 3:
return G__7600__3.call(this,this_sym7592,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7600;
})()
;
cljs.core.Keyword.prototype.apply = (function (this_sym7589,args7590){
var this__7599 = this;
return this_sym7589.call.apply(this_sym7589,[this_sym7589].concat(args7590.slice()));
});
cljs.core.Keyword;
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__7609 = null;
var G__7609__2 = (function (this_sym7603,coll){
var this_sym7603__7605 = this;
var this__7606 = this_sym7603__7605;
return cljs.core._lookup.call(null,coll,this__7606.toString(),null);
});
var G__7609__3 = (function (this_sym7604,coll,not_found){
var this_sym7604__7607 = this;
var this__7608 = this_sym7604__7607;
return cljs.core._lookup.call(null,coll,this__7608.toString(),not_found);
});
G__7609 = function(this_sym7604,coll,not_found){
switch(arguments.length){
case 2:
return G__7609__2.call(this,this_sym7604,coll);
case 3:
return G__7609__3.call(this,this_sym7604,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7609;
})()
;
String.prototype.apply = (function (this_sym7601,args7602){
return this_sym7601.call.apply(this_sym7601,[this_sym7601].concat(args7602.slice()));
});
String.prototype.apply = (function (s,args){
if((cljs.core.count.call(null,args) < 2))
{return cljs.core._lookup.call(null,(args[0]),s,null);
} else
{return cljs.core._lookup.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__7611 = lazy_seq.x;
if(lazy_seq.realized)
{return x__7611;
} else
{lazy_seq.x = x__7611.call(null);
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
var this__7612 = this;
var h__2340__auto____7613 = this__7612.__hash;
if(!((h__2340__auto____7613 == null)))
{return h__2340__auto____7613;
} else
{var h__2340__auto____7614 = cljs.core.hash_coll.call(null,coll);
this__7612.__hash = h__2340__auto____7614;
return h__2340__auto____7614;
}
});
cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7615 = this;
return cljs.core._seq.call(null,coll.cljs$core$ISeq$_rest$arity$1(coll));
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7616 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.toString = (function (){
var this__7617 = this;
var this__7618 = this;
return cljs.core.pr_str.call(null,this__7618);
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7619 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7620 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7621 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7622 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7623 = this;
return (new cljs.core.LazySeq(meta,this__7623.realized,this__7623.x,this__7623.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7624 = this;
return this__7624.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7625 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__7625.meta);
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
var this__7626 = this;
return this__7626.end;
});
cljs.core.ChunkBuffer.prototype.add = (function (o){
var this__7627 = this;
var ___7628 = this;
(this__7627.buf[this__7627.end] = o);
return this__7627.end = (this__7627.end + 1);
});
cljs.core.ChunkBuffer.prototype.chunk = (function (o){
var this__7629 = this;
var ___7630 = this;
var ret__7631 = (new cljs.core.ArrayChunk(this__7629.buf,0,this__7629.end));
this__7629.buf = null;
return ret__7631;
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
var this__7632 = this;
return cljs.core.array_reduce.call(null,this__7632.arr,f,(this__7632.arr[this__7632.off]),(this__7632.off + 1));
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__7633 = this;
return cljs.core.array_reduce.call(null,this__7633.arr,f,start,this__7633.off);
});
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){
var this__7634 = this;
if((this__7634.off === this__7634.end))
{throw (new Error("-drop-first of empty chunk"));
} else
{return (new cljs.core.ArrayChunk(this__7634.arr,(this__7634.off + 1),this__7634.end));
}
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){
var this__7635 = this;
return (this__7635.arr[(this__7635.off + i)]);
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){
var this__7636 = this;
if((function (){var and__3822__auto____7637 = (i >= 0);
if(and__3822__auto____7637)
{return (i < (this__7636.end - this__7636.off));
} else
{return and__3822__auto____7637;
}
})())
{return (this__7636.arr[(this__7636.off + i)]);
} else
{return not_found;
}
});
cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__7638 = this;
return (this__7638.end - this__7638.off);
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
var this__7639 = this;
var h__2340__auto____7640 = this__7639.__hash;
if(!((h__2340__auto____7640 == null)))
{return h__2340__auto____7640;
} else
{var h__2340__auto____7641 = cljs.core.hash_coll.call(null,coll);
this__7639.__hash = h__2340__auto____7641;
return h__2340__auto____7641;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){
var this__7642 = this;
return cljs.core.cons.call(null,o,this$);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7643 = this;
return coll;
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7644 = this;
return cljs.core._nth.call(null,this__7644.chunk,0);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7645 = this;
if((cljs.core._count.call(null,this__7645.chunk) > 1))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first.call(null,this__7645.chunk),this__7645.more,this__7645.meta,null));
} else
{if((this__7645.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__7645.more;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__7646 = this;
if((this__7646.more == null))
{return null;
} else
{return this__7646.more;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7647 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__7648 = this;
return (new cljs.core.ChunkedCons(this__7648.chunk,this__7648.more,m,this__7648.__hash));
});
cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7649 = this;
return this__7649.meta;
});
cljs.core.ChunkedCons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7650 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__7650.meta);
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__7651 = this;
return this__7651.chunk;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__7652 = this;
if((this__7652.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__7652.more;
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
if((function (){var G__7656__7657 = s;
if(G__7656__7657)
{if((function (){var or__3824__auto____7658 = (G__7656__7657.cljs$lang$protocol_mask$partition1$ & 1024);
if(or__3824__auto____7658)
{return or__3824__auto____7658;
} else
{return G__7656__7657.cljs$core$IChunkedNext$;
}
})())
{return true;
} else
{if((!G__7656__7657.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__7656__7657);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__7656__7657);
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
var ary__7661 = [];
var s__7662 = s;
while(true){
if(cljs.core.seq.call(null,s__7662))
{ary__7661.push(cljs.core.first.call(null,s__7662));
{
var G__7663 = cljs.core.next.call(null,s__7662);
s__7662 = G__7663;
continue;
}
} else
{return ary__7661;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret__7667 = cljs.core.make_array.call(null,cljs.core.count.call(null,coll));
var i__7668 = 0;
var xs__7669 = cljs.core.seq.call(null,coll);
while(true){
if(xs__7669)
{(ret__7667[i__7668] = cljs.core.to_array.call(null,cljs.core.first.call(null,xs__7669)));
{
var G__7670 = (i__7668 + 1);
var G__7671 = cljs.core.next.call(null,xs__7669);
i__7668 = G__7670;
xs__7669 = G__7671;
continue;
}
} else
{}
break;
}
return ret__7667;
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
var a__7679 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__7680 = cljs.core.seq.call(null,init_val_or_seq);
var i__7681 = 0;
var s__7682 = s__7680;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7683 = s__7682;
if(and__3822__auto____7683)
{return (i__7681 < size);
} else
{return and__3822__auto____7683;
}
})()))
{(a__7679[i__7681] = cljs.core.first.call(null,s__7682));
{
var G__7686 = (i__7681 + 1);
var G__7687 = cljs.core.next.call(null,s__7682);
i__7681 = G__7686;
s__7682 = G__7687;
continue;
}
} else
{return a__7679;
}
break;
}
} else
{var n__2686__auto____7684 = size;
var i__7685 = 0;
while(true){
if((i__7685 < n__2686__auto____7684))
{(a__7679[i__7685] = init_val_or_seq);
{
var G__7688 = (i__7685 + 1);
i__7685 = G__7688;
continue;
}
} else
{}
break;
}
return a__7679;
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
var a__7696 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__7697 = cljs.core.seq.call(null,init_val_or_seq);
var i__7698 = 0;
var s__7699 = s__7697;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7700 = s__7699;
if(and__3822__auto____7700)
{return (i__7698 < size);
} else
{return and__3822__auto____7700;
}
})()))
{(a__7696[i__7698] = cljs.core.first.call(null,s__7699));
{
var G__7703 = (i__7698 + 1);
var G__7704 = cljs.core.next.call(null,s__7699);
i__7698 = G__7703;
s__7699 = G__7704;
continue;
}
} else
{return a__7696;
}
break;
}
} else
{var n__2686__auto____7701 = size;
var i__7702 = 0;
while(true){
if((i__7702 < n__2686__auto____7701))
{(a__7696[i__7702] = init_val_or_seq);
{
var G__7705 = (i__7702 + 1);
i__7702 = G__7705;
continue;
}
} else
{}
break;
}
return a__7696;
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
var a__7713 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__7714 = cljs.core.seq.call(null,init_val_or_seq);
var i__7715 = 0;
var s__7716 = s__7714;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7717 = s__7716;
if(and__3822__auto____7717)
{return (i__7715 < size);
} else
{return and__3822__auto____7717;
}
})()))
{(a__7713[i__7715] = cljs.core.first.call(null,s__7716));
{
var G__7720 = (i__7715 + 1);
var G__7721 = cljs.core.next.call(null,s__7716);
i__7715 = G__7720;
s__7716 = G__7721;
continue;
}
} else
{return a__7713;
}
break;
}
} else
{var n__2686__auto____7718 = size;
var i__7719 = 0;
while(true){
if((i__7719 < n__2686__auto____7718))
{(a__7713[i__7719] = init_val_or_seq);
{
var G__7722 = (i__7719 + 1);
i__7719 = G__7722;
continue;
}
} else
{}
break;
}
return a__7713;
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
{var s__7727 = s;
var i__7728 = n;
var sum__7729 = 0;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7730 = (i__7728 > 0);
if(and__3822__auto____7730)
{return cljs.core.seq.call(null,s__7727);
} else
{return and__3822__auto____7730;
}
})()))
{{
var G__7731 = cljs.core.next.call(null,s__7727);
var G__7732 = (i__7728 - 1);
var G__7733 = (sum__7729 + 1);
s__7727 = G__7731;
i__7728 = G__7732;
sum__7729 = G__7733;
continue;
}
} else
{return sum__7729;
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
var s__7738 = cljs.core.seq.call(null,x);
if(s__7738)
{if(cljs.core.chunked_seq_QMARK_.call(null,s__7738))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,s__7738),concat.call(null,cljs.core.chunk_rest.call(null,s__7738),y));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__7738),concat.call(null,cljs.core.rest.call(null,s__7738),y));
}
} else
{return y;
}
}),null));
});
var concat__3 = (function() { 
var G__7742__delegate = function (x,y,zs){
var cat__7741 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__7740 = cljs.core.seq.call(null,xys);
if(xys__7740)
{if(cljs.core.chunked_seq_QMARK_.call(null,xys__7740))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,xys__7740),cat.call(null,cljs.core.chunk_rest.call(null,xys__7740),zs));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__7740),cat.call(null,cljs.core.rest.call(null,xys__7740),zs));
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
return cat__7741.call(null,concat.call(null,x,y),zs);
};
var G__7742 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7742__delegate.call(this, x, y, zs);
};
G__7742.cljs$lang$maxFixedArity = 2;
G__7742.cljs$lang$applyTo = (function (arglist__7743){
var x = cljs.core.first(arglist__7743);
var y = cljs.core.first(cljs.core.next(arglist__7743));
var zs = cljs.core.rest(cljs.core.next(arglist__7743));
return G__7742__delegate(x, y, zs);
});
G__7742.cljs$lang$arity$variadic = G__7742__delegate;
return G__7742;
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
var G__7744__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__7744 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7744__delegate.call(this, a, b, c, d, more);
};
G__7744.cljs$lang$maxFixedArity = 4;
G__7744.cljs$lang$applyTo = (function (arglist__7745){
var a = cljs.core.first(arglist__7745);
var b = cljs.core.first(cljs.core.next(arglist__7745));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7745)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7745))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7745))));
return G__7744__delegate(a, b, c, d, more);
});
G__7744.cljs$lang$arity$variadic = G__7744__delegate;
return G__7744;
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
var args__7787 = cljs.core.seq.call(null,args);
if((argc === 0))
{return f.call(null);
} else
{var a__7788 = cljs.core._first.call(null,args__7787);
var args__7789 = cljs.core._rest.call(null,args__7787);
if((argc === 1))
{if(f.cljs$lang$arity$1)
{return f.cljs$lang$arity$1(a__7788);
} else
{return f.call(null,a__7788);
}
} else
{var b__7790 = cljs.core._first.call(null,args__7789);
var args__7791 = cljs.core._rest.call(null,args__7789);
if((argc === 2))
{if(f.cljs$lang$arity$2)
{return f.cljs$lang$arity$2(a__7788,b__7790);
} else
{return f.call(null,a__7788,b__7790);
}
} else
{var c__7792 = cljs.core._first.call(null,args__7791);
var args__7793 = cljs.core._rest.call(null,args__7791);
if((argc === 3))
{if(f.cljs$lang$arity$3)
{return f.cljs$lang$arity$3(a__7788,b__7790,c__7792);
} else
{return f.call(null,a__7788,b__7790,c__7792);
}
} else
{var d__7794 = cljs.core._first.call(null,args__7793);
var args__7795 = cljs.core._rest.call(null,args__7793);
if((argc === 4))
{if(f.cljs$lang$arity$4)
{return f.cljs$lang$arity$4(a__7788,b__7790,c__7792,d__7794);
} else
{return f.call(null,a__7788,b__7790,c__7792,d__7794);
}
} else
{var e__7796 = cljs.core._first.call(null,args__7795);
var args__7797 = cljs.core._rest.call(null,args__7795);
if((argc === 5))
{if(f.cljs$lang$arity$5)
{return f.cljs$lang$arity$5(a__7788,b__7790,c__7792,d__7794,e__7796);
} else
{return f.call(null,a__7788,b__7790,c__7792,d__7794,e__7796);
}
} else
{var f__7798 = cljs.core._first.call(null,args__7797);
var args__7799 = cljs.core._rest.call(null,args__7797);
if((argc === 6))
{if(f__7798.cljs$lang$arity$6)
{return f__7798.cljs$lang$arity$6(a__7788,b__7790,c__7792,d__7794,e__7796,f__7798);
} else
{return f__7798.call(null,a__7788,b__7790,c__7792,d__7794,e__7796,f__7798);
}
} else
{var g__7800 = cljs.core._first.call(null,args__7799);
var args__7801 = cljs.core._rest.call(null,args__7799);
if((argc === 7))
{if(f__7798.cljs$lang$arity$7)
{return f__7798.cljs$lang$arity$7(a__7788,b__7790,c__7792,d__7794,e__7796,f__7798,g__7800);
} else
{return f__7798.call(null,a__7788,b__7790,c__7792,d__7794,e__7796,f__7798,g__7800);
}
} else
{var h__7802 = cljs.core._first.call(null,args__7801);
var args__7803 = cljs.core._rest.call(null,args__7801);
if((argc === 8))
{if(f__7798.cljs$lang$arity$8)
{return f__7798.cljs$lang$arity$8(a__7788,b__7790,c__7792,d__7794,e__7796,f__7798,g__7800,h__7802);
} else
{return f__7798.call(null,a__7788,b__7790,c__7792,d__7794,e__7796,f__7798,g__7800,h__7802);
}
} else
{var i__7804 = cljs.core._first.call(null,args__7803);
var args__7805 = cljs.core._rest.call(null,args__7803);
if((argc === 9))
{if(f__7798.cljs$lang$arity$9)
{return f__7798.cljs$lang$arity$9(a__7788,b__7790,c__7792,d__7794,e__7796,f__7798,g__7800,h__7802,i__7804);
} else
{return f__7798.call(null,a__7788,b__7790,c__7792,d__7794,e__7796,f__7798,g__7800,h__7802,i__7804);
}
} else
{var j__7806 = cljs.core._first.call(null,args__7805);
var args__7807 = cljs.core._rest.call(null,args__7805);
if((argc === 10))
{if(f__7798.cljs$lang$arity$10)
{return f__7798.cljs$lang$arity$10(a__7788,b__7790,c__7792,d__7794,e__7796,f__7798,g__7800,h__7802,i__7804,j__7806);
} else
{return f__7798.call(null,a__7788,b__7790,c__7792,d__7794,e__7796,f__7798,g__7800,h__7802,i__7804,j__7806);
}
} else
{var k__7808 = cljs.core._first.call(null,args__7807);
var args__7809 = cljs.core._rest.call(null,args__7807);
if((argc === 11))
{if(f__7798.cljs$lang$arity$11)
{return f__7798.cljs$lang$arity$11(a__7788,b__7790,c__7792,d__7794,e__7796,f__7798,g__7800,h__7802,i__7804,j__7806,k__7808);
} else
{return f__7798.call(null,a__7788,b__7790,c__7792,d__7794,e__7796,f__7798,g__7800,h__7802,i__7804,j__7806,k__7808);
}
} else
{var l__7810 = cljs.core._first.call(null,args__7809);
var args__7811 = cljs.core._rest.call(null,args__7809);
if((argc === 12))
{if(f__7798.cljs$lang$arity$12)
{return f__7798.cljs$lang$arity$12(a__7788,b__7790,c__7792,d__7794,e__7796,f__7798,g__7800,h__7802,i__7804,j__7806,k__7808,l__7810);
} else
{return f__7798.call(null,a__7788,b__7790,c__7792,d__7794,e__7796,f__7798,g__7800,h__7802,i__7804,j__7806,k__7808,l__7810);
}
} else
{var m__7812 = cljs.core._first.call(null,args__7811);
var args__7813 = cljs.core._rest.call(null,args__7811);
if((argc === 13))
{if(f__7798.cljs$lang$arity$13)
{return f__7798.cljs$lang$arity$13(a__7788,b__7790,c__7792,d__7794,e__7796,f__7798,g__7800,h__7802,i__7804,j__7806,k__7808,l__7810,m__7812);
} else
{return f__7798.call(null,a__7788,b__7790,c__7792,d__7794,e__7796,f__7798,g__7800,h__7802,i__7804,j__7806,k__7808,l__7810,m__7812);
}
} else
{var n__7814 = cljs.core._first.call(null,args__7813);
var args__7815 = cljs.core._rest.call(null,args__7813);
if((argc === 14))
{if(f__7798.cljs$lang$arity$14)
{return f__7798.cljs$lang$arity$14(a__7788,b__7790,c__7792,d__7794,e__7796,f__7798,g__7800,h__7802,i__7804,j__7806,k__7808,l__7810,m__7812,n__7814);
} else
{return f__7798.call(null,a__7788,b__7790,c__7792,d__7794,e__7796,f__7798,g__7800,h__7802,i__7804,j__7806,k__7808,l__7810,m__7812,n__7814);
}
} else
{var o__7816 = cljs.core._first.call(null,args__7815);
var args__7817 = cljs.core._rest.call(null,args__7815);
if((argc === 15))
{if(f__7798.cljs$lang$arity$15)
{return f__7798.cljs$lang$arity$15(a__7788,b__7790,c__7792,d__7794,e__7796,f__7798,g__7800,h__7802,i__7804,j__7806,k__7808,l__7810,m__7812,n__7814,o__7816);
} else
{return f__7798.call(null,a__7788,b__7790,c__7792,d__7794,e__7796,f__7798,g__7800,h__7802,i__7804,j__7806,k__7808,l__7810,m__7812,n__7814,o__7816);
}
} else
{var p__7818 = cljs.core._first.call(null,args__7817);
var args__7819 = cljs.core._rest.call(null,args__7817);
if((argc === 16))
{if(f__7798.cljs$lang$arity$16)
{return f__7798.cljs$lang$arity$16(a__7788,b__7790,c__7792,d__7794,e__7796,f__7798,g__7800,h__7802,i__7804,j__7806,k__7808,l__7810,m__7812,n__7814,o__7816,p__7818);
} else
{return f__7798.call(null,a__7788,b__7790,c__7792,d__7794,e__7796,f__7798,g__7800,h__7802,i__7804,j__7806,k__7808,l__7810,m__7812,n__7814,o__7816,p__7818);
}
} else
{var q__7820 = cljs.core._first.call(null,args__7819);
var args__7821 = cljs.core._rest.call(null,args__7819);
if((argc === 17))
{if(f__7798.cljs$lang$arity$17)
{return f__7798.cljs$lang$arity$17(a__7788,b__7790,c__7792,d__7794,e__7796,f__7798,g__7800,h__7802,i__7804,j__7806,k__7808,l__7810,m__7812,n__7814,o__7816,p__7818,q__7820);
} else
{return f__7798.call(null,a__7788,b__7790,c__7792,d__7794,e__7796,f__7798,g__7800,h__7802,i__7804,j__7806,k__7808,l__7810,m__7812,n__7814,o__7816,p__7818,q__7820);
}
} else
{var r__7822 = cljs.core._first.call(null,args__7821);
var args__7823 = cljs.core._rest.call(null,args__7821);
if((argc === 18))
{if(f__7798.cljs$lang$arity$18)
{return f__7798.cljs$lang$arity$18(a__7788,b__7790,c__7792,d__7794,e__7796,f__7798,g__7800,h__7802,i__7804,j__7806,k__7808,l__7810,m__7812,n__7814,o__7816,p__7818,q__7820,r__7822);
} else
{return f__7798.call(null,a__7788,b__7790,c__7792,d__7794,e__7796,f__7798,g__7800,h__7802,i__7804,j__7806,k__7808,l__7810,m__7812,n__7814,o__7816,p__7818,q__7820,r__7822);
}
} else
{var s__7824 = cljs.core._first.call(null,args__7823);
var args__7825 = cljs.core._rest.call(null,args__7823);
if((argc === 19))
{if(f__7798.cljs$lang$arity$19)
{return f__7798.cljs$lang$arity$19(a__7788,b__7790,c__7792,d__7794,e__7796,f__7798,g__7800,h__7802,i__7804,j__7806,k__7808,l__7810,m__7812,n__7814,o__7816,p__7818,q__7820,r__7822,s__7824);
} else
{return f__7798.call(null,a__7788,b__7790,c__7792,d__7794,e__7796,f__7798,g__7800,h__7802,i__7804,j__7806,k__7808,l__7810,m__7812,n__7814,o__7816,p__7818,q__7820,r__7822,s__7824);
}
} else
{var t__7826 = cljs.core._first.call(null,args__7825);
var args__7827 = cljs.core._rest.call(null,args__7825);
if((argc === 20))
{if(f__7798.cljs$lang$arity$20)
{return f__7798.cljs$lang$arity$20(a__7788,b__7790,c__7792,d__7794,e__7796,f__7798,g__7800,h__7802,i__7804,j__7806,k__7808,l__7810,m__7812,n__7814,o__7816,p__7818,q__7820,r__7822,s__7824,t__7826);
} else
{return f__7798.call(null,a__7788,b__7790,c__7792,d__7794,e__7796,f__7798,g__7800,h__7802,i__7804,j__7806,k__7808,l__7810,m__7812,n__7814,o__7816,p__7818,q__7820,r__7822,s__7824,t__7826);
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
var fixed_arity__7842 = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc__7843 = cljs.core.bounded_count.call(null,args,(fixed_arity__7842 + 1));
if((bc__7843 <= fixed_arity__7842))
{return cljs.core.apply_to.call(null,f,bc__7843,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3 = (function (f,x,args){
var arglist__7844 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__7845 = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc__7846 = cljs.core.bounded_count.call(null,arglist__7844,(fixed_arity__7845 + 1));
if((bc__7846 <= fixed_arity__7845))
{return cljs.core.apply_to.call(null,f,bc__7846,arglist__7844);
} else
{return f.cljs$lang$applyTo(arglist__7844);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7844));
}
});
var apply__4 = (function (f,x,y,args){
var arglist__7847 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__7848 = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc__7849 = cljs.core.bounded_count.call(null,arglist__7847,(fixed_arity__7848 + 1));
if((bc__7849 <= fixed_arity__7848))
{return cljs.core.apply_to.call(null,f,bc__7849,arglist__7847);
} else
{return f.cljs$lang$applyTo(arglist__7847);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7847));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist__7850 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__7851 = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc__7852 = cljs.core.bounded_count.call(null,arglist__7850,(fixed_arity__7851 + 1));
if((bc__7852 <= fixed_arity__7851))
{return cljs.core.apply_to.call(null,f,bc__7852,arglist__7850);
} else
{return f.cljs$lang$applyTo(arglist__7850);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7850));
}
});
var apply__6 = (function() { 
var G__7856__delegate = function (f,a,b,c,d,args){
var arglist__7853 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__7854 = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc__7855 = cljs.core.bounded_count.call(null,arglist__7853,(fixed_arity__7854 + 1));
if((bc__7855 <= fixed_arity__7854))
{return cljs.core.apply_to.call(null,f,bc__7855,arglist__7853);
} else
{return f.cljs$lang$applyTo(arglist__7853);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7853));
}
};
var G__7856 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__7856__delegate.call(this, f, a, b, c, d, args);
};
G__7856.cljs$lang$maxFixedArity = 5;
G__7856.cljs$lang$applyTo = (function (arglist__7857){
var f = cljs.core.first(arglist__7857);
var a = cljs.core.first(cljs.core.next(arglist__7857));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7857)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7857))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7857)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7857)))));
return G__7856__delegate(f, a, b, c, d, args);
});
G__7856.cljs$lang$arity$variadic = G__7856__delegate;
return G__7856;
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
vary_meta.cljs$lang$applyTo = (function (arglist__7858){
var obj = cljs.core.first(arglist__7858);
var f = cljs.core.first(cljs.core.next(arglist__7858));
var args = cljs.core.rest(cljs.core.next(arglist__7858));
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
var G__7859__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__7859 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7859__delegate.call(this, x, y, more);
};
G__7859.cljs$lang$maxFixedArity = 2;
G__7859.cljs$lang$applyTo = (function (arglist__7860){
var x = cljs.core.first(arglist__7860);
var y = cljs.core.first(cljs.core.next(arglist__7860));
var more = cljs.core.rest(cljs.core.next(arglist__7860));
return G__7859__delegate(x, y, more);
});
G__7859.cljs$lang$arity$variadic = G__7859__delegate;
return G__7859;
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
var G__7861 = pred;
var G__7862 = cljs.core.next.call(null,coll);
pred = G__7861;
coll = G__7862;
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
{var or__3824__auto____7864 = pred.call(null,cljs.core.first.call(null,coll));
if(cljs.core.truth_(or__3824__auto____7864))
{return or__3824__auto____7864;
} else
{{
var G__7865 = pred;
var G__7866 = cljs.core.next.call(null,coll);
pred = G__7865;
coll = G__7866;
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
var G__7867 = null;
var G__7867__0 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__7867__1 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__7867__2 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__7867__3 = (function() { 
var G__7868__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__7868 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7868__delegate.call(this, x, y, zs);
};
G__7868.cljs$lang$maxFixedArity = 2;
G__7868.cljs$lang$applyTo = (function (arglist__7869){
var x = cljs.core.first(arglist__7869);
var y = cljs.core.first(cljs.core.next(arglist__7869));
var zs = cljs.core.rest(cljs.core.next(arglist__7869));
return G__7868__delegate(x, y, zs);
});
G__7868.cljs$lang$arity$variadic = G__7868__delegate;
return G__7868;
})()
;
G__7867 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__7867__0.call(this);
case 1:
return G__7867__1.call(this,x);
case 2:
return G__7867__2.call(this,x,y);
default:
return G__7867__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
G__7867.cljs$lang$maxFixedArity = 2;
G__7867.cljs$lang$applyTo = G__7867__3.cljs$lang$applyTo;
return G__7867;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__7870__delegate = function (args){
return x;
};
var G__7870 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7870__delegate.call(this, args);
};
G__7870.cljs$lang$maxFixedArity = 0;
G__7870.cljs$lang$applyTo = (function (arglist__7871){
var args = cljs.core.seq(arglist__7871);;
return G__7870__delegate(args);
});
G__7870.cljs$lang$arity$variadic = G__7870__delegate;
return G__7870;
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
var G__7878 = null;
var G__7878__0 = (function (){
return f.call(null,g.call(null));
});
var G__7878__1 = (function (x){
return f.call(null,g.call(null,x));
});
var G__7878__2 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__7878__3 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__7878__4 = (function() { 
var G__7879__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__7879 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7879__delegate.call(this, x, y, z, args);
};
G__7879.cljs$lang$maxFixedArity = 3;
G__7879.cljs$lang$applyTo = (function (arglist__7880){
var x = cljs.core.first(arglist__7880);
var y = cljs.core.first(cljs.core.next(arglist__7880));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7880)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7880)));
return G__7879__delegate(x, y, z, args);
});
G__7879.cljs$lang$arity$variadic = G__7879__delegate;
return G__7879;
})()
;
G__7878 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__7878__0.call(this);
case 1:
return G__7878__1.call(this,x);
case 2:
return G__7878__2.call(this,x,y);
case 3:
return G__7878__3.call(this,x,y,z);
default:
return G__7878__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7878.cljs$lang$maxFixedArity = 3;
G__7878.cljs$lang$applyTo = G__7878__4.cljs$lang$applyTo;
return G__7878;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__7881 = null;
var G__7881__0 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__7881__1 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__7881__2 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__7881__3 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__7881__4 = (function() { 
var G__7882__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__7882 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7882__delegate.call(this, x, y, z, args);
};
G__7882.cljs$lang$maxFixedArity = 3;
G__7882.cljs$lang$applyTo = (function (arglist__7883){
var x = cljs.core.first(arglist__7883);
var y = cljs.core.first(cljs.core.next(arglist__7883));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7883)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7883)));
return G__7882__delegate(x, y, z, args);
});
G__7882.cljs$lang$arity$variadic = G__7882__delegate;
return G__7882;
})()
;
G__7881 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__7881__0.call(this);
case 1:
return G__7881__1.call(this,x);
case 2:
return G__7881__2.call(this,x,y);
case 3:
return G__7881__3.call(this,x,y,z);
default:
return G__7881__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7881.cljs$lang$maxFixedArity = 3;
G__7881.cljs$lang$applyTo = G__7881__4.cljs$lang$applyTo;
return G__7881;
})()
});
var comp__4 = (function() { 
var G__7884__delegate = function (f1,f2,f3,fs){
var fs__7875 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));
return (function() { 
var G__7885__delegate = function (args){
var ret__7876 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__7875),args);
var fs__7877 = cljs.core.next.call(null,fs__7875);
while(true){
if(fs__7877)
{{
var G__7886 = cljs.core.first.call(null,fs__7877).call(null,ret__7876);
var G__7887 = cljs.core.next.call(null,fs__7877);
ret__7876 = G__7886;
fs__7877 = G__7887;
continue;
}
} else
{return ret__7876;
}
break;
}
};
var G__7885 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7885__delegate.call(this, args);
};
G__7885.cljs$lang$maxFixedArity = 0;
G__7885.cljs$lang$applyTo = (function (arglist__7888){
var args = cljs.core.seq(arglist__7888);;
return G__7885__delegate(args);
});
G__7885.cljs$lang$arity$variadic = G__7885__delegate;
return G__7885;
})()
;
};
var G__7884 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7884__delegate.call(this, f1, f2, f3, fs);
};
G__7884.cljs$lang$maxFixedArity = 3;
G__7884.cljs$lang$applyTo = (function (arglist__7889){
var f1 = cljs.core.first(arglist__7889);
var f2 = cljs.core.first(cljs.core.next(arglist__7889));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7889)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7889)));
return G__7884__delegate(f1, f2, f3, fs);
});
G__7884.cljs$lang$arity$variadic = G__7884__delegate;
return G__7884;
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
var G__7890__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__7890 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7890__delegate.call(this, args);
};
G__7890.cljs$lang$maxFixedArity = 0;
G__7890.cljs$lang$applyTo = (function (arglist__7891){
var args = cljs.core.seq(arglist__7891);;
return G__7890__delegate(args);
});
G__7890.cljs$lang$arity$variadic = G__7890__delegate;
return G__7890;
})()
;
});
var partial__3 = (function (f,arg1,arg2){
return (function() { 
var G__7892__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__7892 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7892__delegate.call(this, args);
};
G__7892.cljs$lang$maxFixedArity = 0;
G__7892.cljs$lang$applyTo = (function (arglist__7893){
var args = cljs.core.seq(arglist__7893);;
return G__7892__delegate(args);
});
G__7892.cljs$lang$arity$variadic = G__7892__delegate;
return G__7892;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__7894__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__7894 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7894__delegate.call(this, args);
};
G__7894.cljs$lang$maxFixedArity = 0;
G__7894.cljs$lang$applyTo = (function (arglist__7895){
var args = cljs.core.seq(arglist__7895);;
return G__7894__delegate(args);
});
G__7894.cljs$lang$arity$variadic = G__7894__delegate;
return G__7894;
})()
;
});
var partial__5 = (function() { 
var G__7896__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__7897__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__7897 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7897__delegate.call(this, args);
};
G__7897.cljs$lang$maxFixedArity = 0;
G__7897.cljs$lang$applyTo = (function (arglist__7898){
var args = cljs.core.seq(arglist__7898);;
return G__7897__delegate(args);
});
G__7897.cljs$lang$arity$variadic = G__7897__delegate;
return G__7897;
})()
;
};
var G__7896 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7896__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__7896.cljs$lang$maxFixedArity = 4;
G__7896.cljs$lang$applyTo = (function (arglist__7899){
var f = cljs.core.first(arglist__7899);
var arg1 = cljs.core.first(cljs.core.next(arglist__7899));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7899)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7899))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7899))));
return G__7896__delegate(f, arg1, arg2, arg3, more);
});
G__7896.cljs$lang$arity$variadic = G__7896__delegate;
return G__7896;
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
var G__7900 = null;
var G__7900__1 = (function (a){
return f.call(null,(((a == null))?x:a));
});
var G__7900__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),b);
});
var G__7900__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),b,c);
});
var G__7900__4 = (function() { 
var G__7901__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),b,c,ds);
};
var G__7901 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7901__delegate.call(this, a, b, c, ds);
};
G__7901.cljs$lang$maxFixedArity = 3;
G__7901.cljs$lang$applyTo = (function (arglist__7902){
var a = cljs.core.first(arglist__7902);
var b = cljs.core.first(cljs.core.next(arglist__7902));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7902)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7902)));
return G__7901__delegate(a, b, c, ds);
});
G__7901.cljs$lang$arity$variadic = G__7901__delegate;
return G__7901;
})()
;
G__7900 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__7900__1.call(this,a);
case 2:
return G__7900__2.call(this,a,b);
case 3:
return G__7900__3.call(this,a,b,c);
default:
return G__7900__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7900.cljs$lang$maxFixedArity = 3;
G__7900.cljs$lang$applyTo = G__7900__4.cljs$lang$applyTo;
return G__7900;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__7903 = null;
var G__7903__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__7903__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),c);
});
var G__7903__4 = (function() { 
var G__7904__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__7904 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7904__delegate.call(this, a, b, c, ds);
};
G__7904.cljs$lang$maxFixedArity = 3;
G__7904.cljs$lang$applyTo = (function (arglist__7905){
var a = cljs.core.first(arglist__7905);
var b = cljs.core.first(cljs.core.next(arglist__7905));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7905)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7905)));
return G__7904__delegate(a, b, c, ds);
});
G__7904.cljs$lang$arity$variadic = G__7904__delegate;
return G__7904;
})()
;
G__7903 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__7903__2.call(this,a,b);
case 3:
return G__7903__3.call(this,a,b,c);
default:
return G__7903__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7903.cljs$lang$maxFixedArity = 3;
G__7903.cljs$lang$applyTo = G__7903__4.cljs$lang$applyTo;
return G__7903;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__7906 = null;
var G__7906__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__7906__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c));
});
var G__7906__4 = (function() { 
var G__7907__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__7907 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7907__delegate.call(this, a, b, c, ds);
};
G__7907.cljs$lang$maxFixedArity = 3;
G__7907.cljs$lang$applyTo = (function (arglist__7908){
var a = cljs.core.first(arglist__7908);
var b = cljs.core.first(cljs.core.next(arglist__7908));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7908)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7908)));
return G__7907__delegate(a, b, c, ds);
});
G__7907.cljs$lang$arity$variadic = G__7907__delegate;
return G__7907;
})()
;
G__7906 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__7906__2.call(this,a,b);
case 3:
return G__7906__3.call(this,a,b,c);
default:
return G__7906__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7906.cljs$lang$maxFixedArity = 3;
G__7906.cljs$lang$applyTo = G__7906__4.cljs$lang$applyTo;
return G__7906;
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
var mapi__7924 = (function mapi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7932 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7932)
{var s__7933 = temp__3974__auto____7932;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7933))
{var c__7934 = cljs.core.chunk_first.call(null,s__7933);
var size__7935 = cljs.core.count.call(null,c__7934);
var b__7936 = cljs.core.chunk_buffer.call(null,size__7935);
var n__2686__auto____7937 = size__7935;
var i__7938 = 0;
while(true){
if((i__7938 < n__2686__auto____7937))
{cljs.core.chunk_append.call(null,b__7936,f.call(null,(idx + i__7938),cljs.core._nth.call(null,c__7934,i__7938)));
{
var G__7939 = (i__7938 + 1);
i__7938 = G__7939;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7936),mapi.call(null,(idx + size__7935),cljs.core.chunk_rest.call(null,s__7933)));
} else
{return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__7933)),mapi.call(null,(idx + 1),cljs.core.rest.call(null,s__7933)));
}
} else
{return null;
}
}),null));
});
return mapi__7924.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7949 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7949)
{var s__7950 = temp__3974__auto____7949;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7950))
{var c__7951 = cljs.core.chunk_first.call(null,s__7950);
var size__7952 = cljs.core.count.call(null,c__7951);
var b__7953 = cljs.core.chunk_buffer.call(null,size__7952);
var n__2686__auto____7954 = size__7952;
var i__7955 = 0;
while(true){
if((i__7955 < n__2686__auto____7954))
{var x__7956 = f.call(null,cljs.core._nth.call(null,c__7951,i__7955));
if((x__7956 == null))
{} else
{cljs.core.chunk_append.call(null,b__7953,x__7956);
}
{
var G__7958 = (i__7955 + 1);
i__7955 = G__7958;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7953),keep.call(null,f,cljs.core.chunk_rest.call(null,s__7950)));
} else
{var x__7957 = f.call(null,cljs.core.first.call(null,s__7950));
if((x__7957 == null))
{return keep.call(null,f,cljs.core.rest.call(null,s__7950));
} else
{return cljs.core.cons.call(null,x__7957,keep.call(null,f,cljs.core.rest.call(null,s__7950)));
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
var keepi__7984 = (function keepi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7994 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7994)
{var s__7995 = temp__3974__auto____7994;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7995))
{var c__7996 = cljs.core.chunk_first.call(null,s__7995);
var size__7997 = cljs.core.count.call(null,c__7996);
var b__7998 = cljs.core.chunk_buffer.call(null,size__7997);
var n__2686__auto____7999 = size__7997;
var i__8000 = 0;
while(true){
if((i__8000 < n__2686__auto____7999))
{var x__8001 = f.call(null,(idx + i__8000),cljs.core._nth.call(null,c__7996,i__8000));
if((x__8001 == null))
{} else
{cljs.core.chunk_append.call(null,b__7998,x__8001);
}
{
var G__8003 = (i__8000 + 1);
i__8000 = G__8003;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7998),keepi.call(null,(idx + size__7997),cljs.core.chunk_rest.call(null,s__7995)));
} else
{var x__8002 = f.call(null,idx,cljs.core.first.call(null,s__7995));
if((x__8002 == null))
{return keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__7995));
} else
{return cljs.core.cons.call(null,x__8002,keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__7995)));
}
}
} else
{return null;
}
}),null));
});
return keepi__7984.call(null,0,coll);
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8089 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____8089))
{return p.call(null,y);
} else
{return and__3822__auto____8089;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8090 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____8090))
{var and__3822__auto____8091 = p.call(null,y);
if(cljs.core.truth_(and__3822__auto____8091))
{return p.call(null,z);
} else
{return and__3822__auto____8091;
}
} else
{return and__3822__auto____8090;
}
})());
});
var ep1__4 = (function() { 
var G__8160__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8092 = ep1.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____8092))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3822__auto____8092;
}
})());
};
var G__8160 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8160__delegate.call(this, x, y, z, args);
};
G__8160.cljs$lang$maxFixedArity = 3;
G__8160.cljs$lang$applyTo = (function (arglist__8161){
var x = cljs.core.first(arglist__8161);
var y = cljs.core.first(cljs.core.next(arglist__8161));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8161)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8161)));
return G__8160__delegate(x, y, z, args);
});
G__8160.cljs$lang$arity$variadic = G__8160__delegate;
return G__8160;
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8104 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8104))
{return p2.call(null,x);
} else
{return and__3822__auto____8104;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8105 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8105))
{var and__3822__auto____8106 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____8106))
{var and__3822__auto____8107 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____8107))
{return p2.call(null,y);
} else
{return and__3822__auto____8107;
}
} else
{return and__3822__auto____8106;
}
} else
{return and__3822__auto____8105;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8108 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8108))
{var and__3822__auto____8109 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____8109))
{var and__3822__auto____8110 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____8110))
{var and__3822__auto____8111 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____8111))
{var and__3822__auto____8112 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____8112))
{return p2.call(null,z);
} else
{return and__3822__auto____8112;
}
} else
{return and__3822__auto____8111;
}
} else
{return and__3822__auto____8110;
}
} else
{return and__3822__auto____8109;
}
} else
{return and__3822__auto____8108;
}
})());
});
var ep2__4 = (function() { 
var G__8162__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8113 = ep2.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____8113))
{return cljs.core.every_QMARK_.call(null,(function (p1__7959_SHARP_){
var and__3822__auto____8114 = p1.call(null,p1__7959_SHARP_);
if(cljs.core.truth_(and__3822__auto____8114))
{return p2.call(null,p1__7959_SHARP_);
} else
{return and__3822__auto____8114;
}
}),args);
} else
{return and__3822__auto____8113;
}
})());
};
var G__8162 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8162__delegate.call(this, x, y, z, args);
};
G__8162.cljs$lang$maxFixedArity = 3;
G__8162.cljs$lang$applyTo = (function (arglist__8163){
var x = cljs.core.first(arglist__8163);
var y = cljs.core.first(cljs.core.next(arglist__8163));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8163)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8163)));
return G__8162__delegate(x, y, z, args);
});
G__8162.cljs$lang$arity$variadic = G__8162__delegate;
return G__8162;
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8133 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8133))
{var and__3822__auto____8134 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____8134))
{return p3.call(null,x);
} else
{return and__3822__auto____8134;
}
} else
{return and__3822__auto____8133;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8135 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8135))
{var and__3822__auto____8136 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____8136))
{var and__3822__auto____8137 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____8137))
{var and__3822__auto____8138 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____8138))
{var and__3822__auto____8139 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____8139))
{return p3.call(null,y);
} else
{return and__3822__auto____8139;
}
} else
{return and__3822__auto____8138;
}
} else
{return and__3822__auto____8137;
}
} else
{return and__3822__auto____8136;
}
} else
{return and__3822__auto____8135;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8140 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8140))
{var and__3822__auto____8141 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____8141))
{var and__3822__auto____8142 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____8142))
{var and__3822__auto____8143 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____8143))
{var and__3822__auto____8144 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____8144))
{var and__3822__auto____8145 = p3.call(null,y);
if(cljs.core.truth_(and__3822__auto____8145))
{var and__3822__auto____8146 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____8146))
{var and__3822__auto____8147 = p2.call(null,z);
if(cljs.core.truth_(and__3822__auto____8147))
{return p3.call(null,z);
} else
{return and__3822__auto____8147;
}
} else
{return and__3822__auto____8146;
}
} else
{return and__3822__auto____8145;
}
} else
{return and__3822__auto____8144;
}
} else
{return and__3822__auto____8143;
}
} else
{return and__3822__auto____8142;
}
} else
{return and__3822__auto____8141;
}
} else
{return and__3822__auto____8140;
}
})());
});
var ep3__4 = (function() { 
var G__8164__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8148 = ep3.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____8148))
{return cljs.core.every_QMARK_.call(null,(function (p1__7960_SHARP_){
var and__3822__auto____8149 = p1.call(null,p1__7960_SHARP_);
if(cljs.core.truth_(and__3822__auto____8149))
{var and__3822__auto____8150 = p2.call(null,p1__7960_SHARP_);
if(cljs.core.truth_(and__3822__auto____8150))
{return p3.call(null,p1__7960_SHARP_);
} else
{return and__3822__auto____8150;
}
} else
{return and__3822__auto____8149;
}
}),args);
} else
{return and__3822__auto____8148;
}
})());
};
var G__8164 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8164__delegate.call(this, x, y, z, args);
};
G__8164.cljs$lang$maxFixedArity = 3;
G__8164.cljs$lang$applyTo = (function (arglist__8165){
var x = cljs.core.first(arglist__8165);
var y = cljs.core.first(cljs.core.next(arglist__8165));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8165)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8165)));
return G__8164__delegate(x, y, z, args);
});
G__8164.cljs$lang$arity$variadic = G__8164__delegate;
return G__8164;
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
var G__8166__delegate = function (p1,p2,p3,ps){
var ps__8151 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__7961_SHARP_){
return p1__7961_SHARP_.call(null,x);
}),ps__8151);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__7962_SHARP_){
var and__3822__auto____8156 = p1__7962_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____8156))
{return p1__7962_SHARP_.call(null,y);
} else
{return and__3822__auto____8156;
}
}),ps__8151);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__7963_SHARP_){
var and__3822__auto____8157 = p1__7963_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____8157))
{var and__3822__auto____8158 = p1__7963_SHARP_.call(null,y);
if(cljs.core.truth_(and__3822__auto____8158))
{return p1__7963_SHARP_.call(null,z);
} else
{return and__3822__auto____8158;
}
} else
{return and__3822__auto____8157;
}
}),ps__8151);
});
var epn__4 = (function() { 
var G__8167__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8159 = epn.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____8159))
{return cljs.core.every_QMARK_.call(null,(function (p1__7964_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__7964_SHARP_,args);
}),ps__8151);
} else
{return and__3822__auto____8159;
}
})());
};
var G__8167 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8167__delegate.call(this, x, y, z, args);
};
G__8167.cljs$lang$maxFixedArity = 3;
G__8167.cljs$lang$applyTo = (function (arglist__8168){
var x = cljs.core.first(arglist__8168);
var y = cljs.core.first(cljs.core.next(arglist__8168));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8168)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8168)));
return G__8167__delegate(x, y, z, args);
});
G__8167.cljs$lang$arity$variadic = G__8167__delegate;
return G__8167;
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
var G__8166 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8166__delegate.call(this, p1, p2, p3, ps);
};
G__8166.cljs$lang$maxFixedArity = 3;
G__8166.cljs$lang$applyTo = (function (arglist__8169){
var p1 = cljs.core.first(arglist__8169);
var p2 = cljs.core.first(cljs.core.next(arglist__8169));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8169)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8169)));
return G__8166__delegate(p1, p2, p3, ps);
});
G__8166.cljs$lang$arity$variadic = G__8166__delegate;
return G__8166;
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
var or__3824__auto____8250 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____8250))
{return or__3824__auto____8250;
} else
{return p.call(null,y);
}
});
var sp1__3 = (function (x,y,z){
var or__3824__auto____8251 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____8251))
{return or__3824__auto____8251;
} else
{var or__3824__auto____8252 = p.call(null,y);
if(cljs.core.truth_(or__3824__auto____8252))
{return or__3824__auto____8252;
} else
{return p.call(null,z);
}
}
});
var sp1__4 = (function() { 
var G__8321__delegate = function (x,y,z,args){
var or__3824__auto____8253 = sp1.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____8253))
{return or__3824__auto____8253;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__8321 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8321__delegate.call(this, x, y, z, args);
};
G__8321.cljs$lang$maxFixedArity = 3;
G__8321.cljs$lang$applyTo = (function (arglist__8322){
var x = cljs.core.first(arglist__8322);
var y = cljs.core.first(cljs.core.next(arglist__8322));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8322)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8322)));
return G__8321__delegate(x, y, z, args);
});
G__8321.cljs$lang$arity$variadic = G__8321__delegate;
return G__8321;
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
var or__3824__auto____8265 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8265))
{return or__3824__auto____8265;
} else
{return p2.call(null,x);
}
});
var sp2__2 = (function (x,y){
var or__3824__auto____8266 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8266))
{return or__3824__auto____8266;
} else
{var or__3824__auto____8267 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____8267))
{return or__3824__auto____8267;
} else
{var or__3824__auto____8268 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____8268))
{return or__3824__auto____8268;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3824__auto____8269 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8269))
{return or__3824__auto____8269;
} else
{var or__3824__auto____8270 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____8270))
{return or__3824__auto____8270;
} else
{var or__3824__auto____8271 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____8271))
{return or__3824__auto____8271;
} else
{var or__3824__auto____8272 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____8272))
{return or__3824__auto____8272;
} else
{var or__3824__auto____8273 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____8273))
{return or__3824__auto____8273;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__8323__delegate = function (x,y,z,args){
var or__3824__auto____8274 = sp2.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____8274))
{return or__3824__auto____8274;
} else
{return cljs.core.some.call(null,(function (p1__8004_SHARP_){
var or__3824__auto____8275 = p1.call(null,p1__8004_SHARP_);
if(cljs.core.truth_(or__3824__auto____8275))
{return or__3824__auto____8275;
} else
{return p2.call(null,p1__8004_SHARP_);
}
}),args);
}
};
var G__8323 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8323__delegate.call(this, x, y, z, args);
};
G__8323.cljs$lang$maxFixedArity = 3;
G__8323.cljs$lang$applyTo = (function (arglist__8324){
var x = cljs.core.first(arglist__8324);
var y = cljs.core.first(cljs.core.next(arglist__8324));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8324)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8324)));
return G__8323__delegate(x, y, z, args);
});
G__8323.cljs$lang$arity$variadic = G__8323__delegate;
return G__8323;
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
var or__3824__auto____8294 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8294))
{return or__3824__auto____8294;
} else
{var or__3824__auto____8295 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____8295))
{return or__3824__auto____8295;
} else
{return p3.call(null,x);
}
}
});
var sp3__2 = (function (x,y){
var or__3824__auto____8296 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8296))
{return or__3824__auto____8296;
} else
{var or__3824__auto____8297 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____8297))
{return or__3824__auto____8297;
} else
{var or__3824__auto____8298 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____8298))
{return or__3824__auto____8298;
} else
{var or__3824__auto____8299 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____8299))
{return or__3824__auto____8299;
} else
{var or__3824__auto____8300 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____8300))
{return or__3824__auto____8300;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3824__auto____8301 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8301))
{return or__3824__auto____8301;
} else
{var or__3824__auto____8302 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____8302))
{return or__3824__auto____8302;
} else
{var or__3824__auto____8303 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____8303))
{return or__3824__auto____8303;
} else
{var or__3824__auto____8304 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____8304))
{return or__3824__auto____8304;
} else
{var or__3824__auto____8305 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____8305))
{return or__3824__auto____8305;
} else
{var or__3824__auto____8306 = p3.call(null,y);
if(cljs.core.truth_(or__3824__auto____8306))
{return or__3824__auto____8306;
} else
{var or__3824__auto____8307 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____8307))
{return or__3824__auto____8307;
} else
{var or__3824__auto____8308 = p2.call(null,z);
if(cljs.core.truth_(or__3824__auto____8308))
{return or__3824__auto____8308;
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
var G__8325__delegate = function (x,y,z,args){
var or__3824__auto____8309 = sp3.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____8309))
{return or__3824__auto____8309;
} else
{return cljs.core.some.call(null,(function (p1__8005_SHARP_){
var or__3824__auto____8310 = p1.call(null,p1__8005_SHARP_);
if(cljs.core.truth_(or__3824__auto____8310))
{return or__3824__auto____8310;
} else
{var or__3824__auto____8311 = p2.call(null,p1__8005_SHARP_);
if(cljs.core.truth_(or__3824__auto____8311))
{return or__3824__auto____8311;
} else
{return p3.call(null,p1__8005_SHARP_);
}
}
}),args);
}
};
var G__8325 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8325__delegate.call(this, x, y, z, args);
};
G__8325.cljs$lang$maxFixedArity = 3;
G__8325.cljs$lang$applyTo = (function (arglist__8326){
var x = cljs.core.first(arglist__8326);
var y = cljs.core.first(cljs.core.next(arglist__8326));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8326)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8326)));
return G__8325__delegate(x, y, z, args);
});
G__8325.cljs$lang$arity$variadic = G__8325__delegate;
return G__8325;
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
var G__8327__delegate = function (p1,p2,p3,ps){
var ps__8312 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some.call(null,(function (p1__8006_SHARP_){
return p1__8006_SHARP_.call(null,x);
}),ps__8312);
});
var spn__2 = (function (x,y){
return cljs.core.some.call(null,(function (p1__8007_SHARP_){
var or__3824__auto____8317 = p1__8007_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____8317))
{return or__3824__auto____8317;
} else
{return p1__8007_SHARP_.call(null,y);
}
}),ps__8312);
});
var spn__3 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__8008_SHARP_){
var or__3824__auto____8318 = p1__8008_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____8318))
{return or__3824__auto____8318;
} else
{var or__3824__auto____8319 = p1__8008_SHARP_.call(null,y);
if(cljs.core.truth_(or__3824__auto____8319))
{return or__3824__auto____8319;
} else
{return p1__8008_SHARP_.call(null,z);
}
}
}),ps__8312);
});
var spn__4 = (function() { 
var G__8328__delegate = function (x,y,z,args){
var or__3824__auto____8320 = spn.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____8320))
{return or__3824__auto____8320;
} else
{return cljs.core.some.call(null,(function (p1__8009_SHARP_){
return cljs.core.some.call(null,p1__8009_SHARP_,args);
}),ps__8312);
}
};
var G__8328 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8328__delegate.call(this, x, y, z, args);
};
G__8328.cljs$lang$maxFixedArity = 3;
G__8328.cljs$lang$applyTo = (function (arglist__8329){
var x = cljs.core.first(arglist__8329);
var y = cljs.core.first(cljs.core.next(arglist__8329));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8329)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8329)));
return G__8328__delegate(x, y, z, args);
});
G__8328.cljs$lang$arity$variadic = G__8328__delegate;
return G__8328;
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
var G__8327 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8327__delegate.call(this, p1, p2, p3, ps);
};
G__8327.cljs$lang$maxFixedArity = 3;
G__8327.cljs$lang$applyTo = (function (arglist__8330){
var p1 = cljs.core.first(arglist__8330);
var p2 = cljs.core.first(cljs.core.next(arglist__8330));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8330)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8330)));
return G__8327__delegate(p1, p2, p3, ps);
});
G__8327.cljs$lang$arity$variadic = G__8327__delegate;
return G__8327;
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
var temp__3974__auto____8349 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8349)
{var s__8350 = temp__3974__auto____8349;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8350))
{var c__8351 = cljs.core.chunk_first.call(null,s__8350);
var size__8352 = cljs.core.count.call(null,c__8351);
var b__8353 = cljs.core.chunk_buffer.call(null,size__8352);
var n__2686__auto____8354 = size__8352;
var i__8355 = 0;
while(true){
if((i__8355 < n__2686__auto____8354))
{cljs.core.chunk_append.call(null,b__8353,f.call(null,cljs.core._nth.call(null,c__8351,i__8355)));
{
var G__8367 = (i__8355 + 1);
i__8355 = G__8367;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8353),map.call(null,f,cljs.core.chunk_rest.call(null,s__8350)));
} else
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__8350)),map.call(null,f,cljs.core.rest.call(null,s__8350)));
}
} else
{return null;
}
}),null));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8356 = cljs.core.seq.call(null,c1);
var s2__8357 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____8358 = s1__8356;
if(and__3822__auto____8358)
{return s2__8357;
} else
{return and__3822__auto____8358;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__8356),cljs.core.first.call(null,s2__8357)),map.call(null,f,cljs.core.rest.call(null,s1__8356),cljs.core.rest.call(null,s2__8357)));
} else
{return null;
}
}),null));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8359 = cljs.core.seq.call(null,c1);
var s2__8360 = cljs.core.seq.call(null,c2);
var s3__8361 = cljs.core.seq.call(null,c3);
if((function (){var and__3822__auto____8362 = s1__8359;
if(and__3822__auto____8362)
{var and__3822__auto____8363 = s2__8360;
if(and__3822__auto____8363)
{return s3__8361;
} else
{return and__3822__auto____8363;
}
} else
{return and__3822__auto____8362;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__8359),cljs.core.first.call(null,s2__8360),cljs.core.first.call(null,s3__8361)),map.call(null,f,cljs.core.rest.call(null,s1__8359),cljs.core.rest.call(null,s2__8360),cljs.core.rest.call(null,s3__8361)));
} else
{return null;
}
}),null));
});
var map__5 = (function() { 
var G__8368__delegate = function (f,c1,c2,c3,colls){
var step__8366 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__8365 = map.call(null,cljs.core.seq,cs);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__8365))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__8365),step.call(null,map.call(null,cljs.core.rest,ss__8365)));
} else
{return null;
}
}),null));
});
return map.call(null,(function (p1__8170_SHARP_){
return cljs.core.apply.call(null,f,p1__8170_SHARP_);
}),step__8366.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__8368 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8368__delegate.call(this, f, c1, c2, c3, colls);
};
G__8368.cljs$lang$maxFixedArity = 4;
G__8368.cljs$lang$applyTo = (function (arglist__8369){
var f = cljs.core.first(arglist__8369);
var c1 = cljs.core.first(cljs.core.next(arglist__8369));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8369)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8369))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8369))));
return G__8368__delegate(f, c1, c2, c3, colls);
});
G__8368.cljs$lang$arity$variadic = G__8368__delegate;
return G__8368;
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
{var temp__3974__auto____8372 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8372)
{var s__8373 = temp__3974__auto____8372;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__8373),take.call(null,(n - 1),cljs.core.rest.call(null,s__8373)));
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
var step__8379 = (function (n,coll){
while(true){
var s__8377 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____8378 = (n > 0);
if(and__3822__auto____8378)
{return s__8377;
} else
{return and__3822__auto____8378;
}
})()))
{{
var G__8380 = (n - 1);
var G__8381 = cljs.core.rest.call(null,s__8377);
n = G__8380;
coll = G__8381;
continue;
}
} else
{return s__8377;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__8379.call(null,n,coll);
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
var s__8384 = cljs.core.seq.call(null,coll);
var lead__8385 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));
while(true){
if(lead__8385)
{{
var G__8386 = cljs.core.next.call(null,s__8384);
var G__8387 = cljs.core.next.call(null,lead__8385);
s__8384 = G__8386;
lead__8385 = G__8387;
continue;
}
} else
{return s__8384;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__8393 = (function (pred,coll){
while(true){
var s__8391 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____8392 = s__8391;
if(and__3822__auto____8392)
{return pred.call(null,cljs.core.first.call(null,s__8391));
} else
{return and__3822__auto____8392;
}
})()))
{{
var G__8394 = pred;
var G__8395 = cljs.core.rest.call(null,s__8391);
pred = G__8394;
coll = G__8395;
continue;
}
} else
{return s__8391;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__8393.call(null,pred,coll);
}),null));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8398 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8398)
{var s__8399 = temp__3974__auto____8398;
return cljs.core.concat.call(null,s__8399,cycle.call(null,s__8399));
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
var s1__8404 = cljs.core.seq.call(null,c1);
var s2__8405 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____8406 = s1__8404;
if(and__3822__auto____8406)
{return s2__8405;
} else
{return and__3822__auto____8406;
}
})())
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__8404),cljs.core.cons.call(null,cljs.core.first.call(null,s2__8405),interleave.call(null,cljs.core.rest.call(null,s1__8404),cljs.core.rest.call(null,s2__8405))));
} else
{return null;
}
}),null));
});
var interleave__3 = (function() { 
var G__8408__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__8407 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__8407))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__8407),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__8407)));
} else
{return null;
}
}),null));
};
var G__8408 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8408__delegate.call(this, c1, c2, colls);
};
G__8408.cljs$lang$maxFixedArity = 2;
G__8408.cljs$lang$applyTo = (function (arglist__8409){
var c1 = cljs.core.first(arglist__8409);
var c2 = cljs.core.first(cljs.core.next(arglist__8409));
var colls = cljs.core.rest(cljs.core.next(arglist__8409));
return G__8408__delegate(c1, c2, colls);
});
G__8408.cljs$lang$arity$variadic = G__8408__delegate;
return G__8408;
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
var cat__8419 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____8417 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____8417)
{var coll__8418 = temp__3971__auto____8417;
return cljs.core.cons.call(null,cljs.core.first.call(null,coll__8418),cat.call(null,cljs.core.rest.call(null,coll__8418),colls));
} else
{if(cljs.core.seq.call(null,colls))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
}),null));
});
return cat__8419.call(null,null,colls);
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
var G__8420__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__8420 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8420__delegate.call(this, f, coll, colls);
};
G__8420.cljs$lang$maxFixedArity = 2;
G__8420.cljs$lang$applyTo = (function (arglist__8421){
var f = cljs.core.first(arglist__8421);
var coll = cljs.core.first(cljs.core.next(arglist__8421));
var colls = cljs.core.rest(cljs.core.next(arglist__8421));
return G__8420__delegate(f, coll, colls);
});
G__8420.cljs$lang$arity$variadic = G__8420__delegate;
return G__8420;
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
var temp__3974__auto____8431 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8431)
{var s__8432 = temp__3974__auto____8431;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8432))
{var c__8433 = cljs.core.chunk_first.call(null,s__8432);
var size__8434 = cljs.core.count.call(null,c__8433);
var b__8435 = cljs.core.chunk_buffer.call(null,size__8434);
var n__2686__auto____8436 = size__8434;
var i__8437 = 0;
while(true){
if((i__8437 < n__2686__auto____8436))
{if(cljs.core.truth_(pred.call(null,cljs.core._nth.call(null,c__8433,i__8437))))
{cljs.core.chunk_append.call(null,b__8435,cljs.core._nth.call(null,c__8433,i__8437));
} else
{}
{
var G__8440 = (i__8437 + 1);
i__8437 = G__8440;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8435),filter.call(null,pred,cljs.core.chunk_rest.call(null,s__8432)));
} else
{var f__8438 = cljs.core.first.call(null,s__8432);
var r__8439 = cljs.core.rest.call(null,s__8432);
if(cljs.core.truth_(pred.call(null,f__8438)))
{return cljs.core.cons.call(null,f__8438,filter.call(null,pred,r__8439));
} else
{return filter.call(null,pred,r__8439);
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
var walk__8443 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
}),null));
});
return walk__8443.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__8441_SHARP_){
return !(cljs.core.sequential_QMARK_.call(null,p1__8441_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
if((function (){var G__8447__8448 = to;
if(G__8447__8448)
{if((function (){var or__3824__auto____8449 = (G__8447__8448.cljs$lang$protocol_mask$partition1$ & 4);
if(or__3824__auto____8449)
{return or__3824__auto____8449;
} else
{return G__8447__8448.cljs$core$IEditableCollection$;
}
})())
{return true;
} else
{if((!G__8447__8448.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__8447__8448);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__8447__8448);
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
var G__8450__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.apply.call(null,cljs.core.map,f,c1,c2,c3,colls));
};
var G__8450 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8450__delegate.call(this, f, c1, c2, c3, colls);
};
G__8450.cljs$lang$maxFixedArity = 4;
G__8450.cljs$lang$applyTo = (function (arglist__8451){
var f = cljs.core.first(arglist__8451);
var c1 = cljs.core.first(cljs.core.next(arglist__8451));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8451)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8451))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8451))));
return G__8450__delegate(f, c1, c2, c3, colls);
});
G__8450.cljs$lang$arity$variadic = G__8450__delegate;
return G__8450;
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
var temp__3974__auto____8458 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8458)
{var s__8459 = temp__3974__auto____8458;
var p__8460 = cljs.core.take.call(null,n,s__8459);
if((n === cljs.core.count.call(null,p__8460)))
{return cljs.core.cons.call(null,p__8460,partition.call(null,n,step,cljs.core.drop.call(null,step,s__8459)));
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
var temp__3974__auto____8461 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8461)
{var s__8462 = temp__3974__auto____8461;
var p__8463 = cljs.core.take.call(null,n,s__8462);
if((n === cljs.core.count.call(null,p__8463)))
{return cljs.core.cons.call(null,p__8463,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__8462)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__8463,pad)));
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
var sentinel__8468 = cljs.core.lookup_sentinel;
var m__8469 = m;
var ks__8470 = cljs.core.seq.call(null,ks);
while(true){
if(ks__8470)
{var m__8471 = cljs.core._lookup.call(null,m__8469,cljs.core.first.call(null,ks__8470),sentinel__8468);
if((sentinel__8468 === m__8471))
{return not_found;
} else
{{
var G__8472 = sentinel__8468;
var G__8473 = m__8471;
var G__8474 = cljs.core.next.call(null,ks__8470);
sentinel__8468 = G__8472;
m__8469 = G__8473;
ks__8470 = G__8474;
continue;
}
}
} else
{return m__8469;
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
cljs.core.assoc_in = (function assoc_in(m,p__8475,v){
var vec__8480__8481 = p__8475;
var k__8482 = cljs.core.nth.call(null,vec__8480__8481,0,null);
var ks__8483 = cljs.core.nthnext.call(null,vec__8480__8481,1);
if(cljs.core.truth_(ks__8483))
{return cljs.core.assoc.call(null,m,k__8482,assoc_in.call(null,cljs.core._lookup.call(null,m,k__8482,null),ks__8483,v));
} else
{return cljs.core.assoc.call(null,m,k__8482,v);
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
var update_in__delegate = function (m,p__8484,f,args){
var vec__8489__8490 = p__8484;
var k__8491 = cljs.core.nth.call(null,vec__8489__8490,0,null);
var ks__8492 = cljs.core.nthnext.call(null,vec__8489__8490,1);
if(cljs.core.truth_(ks__8492))
{return cljs.core.assoc.call(null,m,k__8491,cljs.core.apply.call(null,update_in,cljs.core._lookup.call(null,m,k__8491,null),ks__8492,f,args));
} else
{return cljs.core.assoc.call(null,m,k__8491,cljs.core.apply.call(null,f,cljs.core._lookup.call(null,m,k__8491,null),args));
}
};
var update_in = function (m,p__8484,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__8484, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__8493){
var m = cljs.core.first(arglist__8493);
var p__8484 = cljs.core.first(cljs.core.next(arglist__8493));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8493)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8493)));
return update_in__delegate(m, p__8484, f, args);
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
var this__8496 = this;
var h__2340__auto____8497 = this__8496.__hash;
if(!((h__2340__auto____8497 == null)))
{return h__2340__auto____8497;
} else
{var h__2340__auto____8498 = cljs.core.hash_coll.call(null,coll);
this__8496.__hash = h__2340__auto____8498;
return h__2340__auto____8498;
}
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8499 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8500 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8501 = this;
var new_array__8502 = this__8501.array.slice();
(new_array__8502[k] = v);
return (new cljs.core.Vector(this__8501.meta,new_array__8502,null));
});
cljs.core.Vector.prototype.call = (function() {
var G__8533 = null;
var G__8533__2 = (function (this_sym8503,k){
var this__8505 = this;
var this_sym8503__8506 = this;
var coll__8507 = this_sym8503__8506;
return coll__8507.cljs$core$ILookup$_lookup$arity$2(coll__8507,k);
});
var G__8533__3 = (function (this_sym8504,k,not_found){
var this__8505 = this;
var this_sym8504__8508 = this;
var coll__8509 = this_sym8504__8508;
return coll__8509.cljs$core$ILookup$_lookup$arity$3(coll__8509,k,not_found);
});
G__8533 = function(this_sym8504,k,not_found){
switch(arguments.length){
case 2:
return G__8533__2.call(this,this_sym8504,k);
case 3:
return G__8533__3.call(this,this_sym8504,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8533;
})()
;
cljs.core.Vector.prototype.apply = (function (this_sym8494,args8495){
var this__8510 = this;
return this_sym8494.call.apply(this_sym8494,[this_sym8494].concat(args8495.slice()));
});
cljs.core.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8511 = this;
var new_array__8512 = this__8511.array.slice();
new_array__8512.push(o);
return (new cljs.core.Vector(this__8511.meta,new_array__8512,null));
});
cljs.core.Vector.prototype.toString = (function (){
var this__8513 = this;
var this__8514 = this;
return cljs.core.pr_str.call(null,this__8514);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__8515 = this;
return cljs.core.ci_reduce.call(null,this__8515.array,f);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__8516 = this;
return cljs.core.ci_reduce.call(null,this__8516.array,f,start);
});
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8517 = this;
if((this__8517.array.length > 0))
{var vector_seq__8518 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < this__8517.array.length))
{return cljs.core.cons.call(null,(this__8517.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
}),null));
});
return vector_seq__8518.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8519 = this;
return this__8519.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8520 = this;
var count__8521 = this__8520.array.length;
if((count__8521 > 0))
{return (this__8520.array[(count__8521 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8522 = this;
if((this__8522.array.length > 0))
{var new_array__8523 = this__8522.array.slice();
new_array__8523.pop();
return (new cljs.core.Vector(this__8522.meta,new_array__8523,null));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__8524 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8525 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8526 = this;
return (new cljs.core.Vector(meta,this__8526.array,this__8526.__hash));
});
cljs.core.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8527 = this;
return this__8527.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8528 = this;
if((function (){var and__3822__auto____8529 = (0 <= n);
if(and__3822__auto____8529)
{return (n < this__8528.array.length);
} else
{return and__3822__auto____8529;
}
})())
{return (this__8528.array[n]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8530 = this;
if((function (){var and__3822__auto____8531 = (0 <= n);
if(and__3822__auto____8531)
{return (n < this__8530.array.length);
} else
{return and__3822__auto____8531;
}
})())
{return (this__8530.array[n]);
} else
{return not_found;
}
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8532 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__8532.meta);
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
var cnt__8535 = pv.cnt;
if((cnt__8535 < 32))
{return 0;
} else
{return (((cnt__8535 - 1) >>> 5) << 5);
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll__8541 = level;
var ret__8542 = node;
while(true){
if((ll__8541 === 0))
{return ret__8542;
} else
{var embed__8543 = ret__8542;
var r__8544 = cljs.core.pv_fresh_node.call(null,edit);
var ___8545 = cljs.core.pv_aset.call(null,r__8544,0,embed__8543);
{
var G__8546 = (ll__8541 - 5);
var G__8547 = r__8544;
ll__8541 = G__8546;
ret__8542 = G__8547;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__8553 = cljs.core.pv_clone_node.call(null,parent);
var subidx__8554 = (((pv.cnt - 1) >>> level) & 31);
if((5 === level))
{cljs.core.pv_aset.call(null,ret__8553,subidx__8554,tailnode);
return ret__8553;
} else
{var child__8555 = cljs.core.pv_aget.call(null,parent,subidx__8554);
if(!((child__8555 == null)))
{var node_to_insert__8556 = push_tail.call(null,pv,(level - 5),child__8555,tailnode);
cljs.core.pv_aset.call(null,ret__8553,subidx__8554,node_to_insert__8556);
return ret__8553;
} else
{var node_to_insert__8557 = cljs.core.new_path.call(null,null,(level - 5),tailnode);
cljs.core.pv_aset.call(null,ret__8553,subidx__8554,node_to_insert__8557);
return ret__8553;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((function (){var and__3822__auto____8561 = (0 <= i);
if(and__3822__auto____8561)
{return (i < pv.cnt);
} else
{return and__3822__auto____8561;
}
})())
{if((i >= cljs.core.tail_off.call(null,pv)))
{return pv.tail;
} else
{var node__8562 = pv.root;
var level__8563 = pv.shift;
while(true){
if((level__8563 > 0))
{{
var G__8564 = cljs.core.pv_aget.call(null,node__8562,((i >>> level__8563) & 31));
var G__8565 = (level__8563 - 5);
node__8562 = G__8564;
level__8563 = G__8565;
continue;
}
} else
{return node__8562.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(pv.cnt)].join('')));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__8568 = cljs.core.pv_clone_node.call(null,node);
if((level === 0))
{cljs.core.pv_aset.call(null,ret__8568,(i & 31),val);
return ret__8568;
} else
{var subidx__8569 = ((i >>> level) & 31);
cljs.core.pv_aset.call(null,ret__8568,subidx__8569,do_assoc.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__8569),i,val));
return ret__8568;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__8575 = (((pv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__8576 = pop_tail.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__8575));
if((function (){var and__3822__auto____8577 = (new_child__8576 == null);
if(and__3822__auto____8577)
{return (subidx__8575 === 0);
} else
{return and__3822__auto____8577;
}
})())
{return null;
} else
{var ret__8578 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__8578,subidx__8575,new_child__8576);
return ret__8578;
}
} else
{if((subidx__8575 === 0))
{return null;
} else
{if("\uFDD0'else")
{var ret__8579 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__8579,subidx__8575,null);
return ret__8579;
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
var this__8582 = this;
return (new cljs.core.TransientVector(this__8582.cnt,this__8582.shift,cljs.core.tv_editable_root.call(null,this__8582.root),cljs.core.tv_editable_tail.call(null,this__8582.tail)));
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8583 = this;
var h__2340__auto____8584 = this__8583.__hash;
if(!((h__2340__auto____8584 == null)))
{return h__2340__auto____8584;
} else
{var h__2340__auto____8585 = cljs.core.hash_coll.call(null,coll);
this__8583.__hash = h__2340__auto____8585;
return h__2340__auto____8585;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8586 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8587 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8588 = this;
if((function (){var and__3822__auto____8589 = (0 <= k);
if(and__3822__auto____8589)
{return (k < this__8588.cnt);
} else
{return and__3822__auto____8589;
}
})())
{if((cljs.core.tail_off.call(null,coll) <= k))
{var new_tail__8590 = this__8588.tail.slice();
(new_tail__8590[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__8588.meta,this__8588.cnt,this__8588.shift,this__8588.root,new_tail__8590,null));
} else
{return (new cljs.core.PersistentVector(this__8588.meta,this__8588.cnt,this__8588.shift,cljs.core.do_assoc.call(null,coll,this__8588.shift,this__8588.root,k,v),this__8588.tail,null));
}
} else
{if((k === this__8588.cnt))
{return coll.cljs$core$ICollection$_conj$arity$2(coll,v);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(k),cljs.core.str(" out of bounds  [0,"),cljs.core.str(this__8588.cnt),cljs.core.str("]")].join('')));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.call = (function() {
var G__8638 = null;
var G__8638__2 = (function (this_sym8591,k){
var this__8593 = this;
var this_sym8591__8594 = this;
var coll__8595 = this_sym8591__8594;
return coll__8595.cljs$core$ILookup$_lookup$arity$2(coll__8595,k);
});
var G__8638__3 = (function (this_sym8592,k,not_found){
var this__8593 = this;
var this_sym8592__8596 = this;
var coll__8597 = this_sym8592__8596;
return coll__8597.cljs$core$ILookup$_lookup$arity$3(coll__8597,k,not_found);
});
G__8638 = function(this_sym8592,k,not_found){
switch(arguments.length){
case 2:
return G__8638__2.call(this,this_sym8592,k);
case 3:
return G__8638__3.call(this,this_sym8592,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8638;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (this_sym8580,args8581){
var this__8598 = this;
return this_sym8580.call.apply(this_sym8580,[this_sym8580].concat(args8581.slice()));
});
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var this__8599 = this;
var step_init__8600 = [0,init];
var i__8601 = 0;
while(true){
if((i__8601 < this__8599.cnt))
{var arr__8602 = cljs.core.array_for.call(null,v,i__8601);
var len__8603 = arr__8602.length;
var init__8607 = (function (){var j__8604 = 0;
var init__8605 = (step_init__8600[1]);
while(true){
if((j__8604 < len__8603))
{var init__8606 = f.call(null,init__8605,(j__8604 + i__8601),(arr__8602[j__8604]));
if(cljs.core.reduced_QMARK_.call(null,init__8606))
{return init__8606;
} else
{{
var G__8639 = (j__8604 + 1);
var G__8640 = init__8606;
j__8604 = G__8639;
init__8605 = G__8640;
continue;
}
}
} else
{(step_init__8600[0] = len__8603);
(step_init__8600[1] = init__8605);
return init__8605;
}
break;
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__8607))
{return cljs.core.deref.call(null,init__8607);
} else
{{
var G__8641 = (i__8601 + (step_init__8600[0]));
i__8601 = G__8641;
continue;
}
}
} else
{return (step_init__8600[1]);
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8608 = this;
if(((this__8608.cnt - cljs.core.tail_off.call(null,coll)) < 32))
{var new_tail__8609 = this__8608.tail.slice();
new_tail__8609.push(o);
return (new cljs.core.PersistentVector(this__8608.meta,(this__8608.cnt + 1),this__8608.shift,this__8608.root,new_tail__8609,null));
} else
{var root_overflow_QMARK___8610 = ((this__8608.cnt >>> 5) > (1 << this__8608.shift));
var new_shift__8611 = ((root_overflow_QMARK___8610)?(this__8608.shift + 5):this__8608.shift);
var new_root__8613 = ((root_overflow_QMARK___8610)?(function (){var n_r__8612 = cljs.core.pv_fresh_node.call(null,null);
cljs.core.pv_aset.call(null,n_r__8612,0,this__8608.root);
cljs.core.pv_aset.call(null,n_r__8612,1,cljs.core.new_path.call(null,null,this__8608.shift,(new cljs.core.VectorNode(null,this__8608.tail))));
return n_r__8612;
})():cljs.core.push_tail.call(null,coll,this__8608.shift,this__8608.root,(new cljs.core.VectorNode(null,this__8608.tail))));
return (new cljs.core.PersistentVector(this__8608.meta,(this__8608.cnt + 1),new_shift__8611,new_root__8613,[o],null));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__8614 = this;
if((this__8614.cnt > 0))
{return (new cljs.core.RSeq(coll,(this__8614.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var this__8615 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var this__8616 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,1);
});
cljs.core.PersistentVector.prototype.toString = (function (){
var this__8617 = this;
var this__8618 = this;
return cljs.core.pr_str.call(null,this__8618);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__8619 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__8620 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8621 = this;
if((this__8621.cnt === 0))
{return null;
} else
{return cljs.core.chunked_seq.call(null,coll,0,0);
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8622 = this;
return this__8622.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8623 = this;
if((this__8623.cnt > 0))
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,(this__8623.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8624 = this;
if((this__8624.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__8624.cnt))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__8624.meta);
} else
{if((1 < (this__8624.cnt - cljs.core.tail_off.call(null,coll))))
{return (new cljs.core.PersistentVector(this__8624.meta,(this__8624.cnt - 1),this__8624.shift,this__8624.root,this__8624.tail.slice(0,-1),null));
} else
{if("\uFDD0'else")
{var new_tail__8625 = cljs.core.array_for.call(null,coll,(this__8624.cnt - 2));
var nr__8626 = cljs.core.pop_tail.call(null,coll,this__8624.shift,this__8624.root);
var new_root__8627 = (((nr__8626 == null))?cljs.core.PersistentVector.EMPTY_NODE:nr__8626);
var cnt_1__8628 = (this__8624.cnt - 1);
if((function (){var and__3822__auto____8629 = (5 < this__8624.shift);
if(and__3822__auto____8629)
{return (cljs.core.pv_aget.call(null,new_root__8627,1) == null);
} else
{return and__3822__auto____8629;
}
})())
{return (new cljs.core.PersistentVector(this__8624.meta,cnt_1__8628,(this__8624.shift - 5),cljs.core.pv_aget.call(null,new_root__8627,0),new_tail__8625,null));
} else
{return (new cljs.core.PersistentVector(this__8624.meta,cnt_1__8628,this__8624.shift,new_root__8627,new_tail__8625,null));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__8630 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8631 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8632 = this;
return (new cljs.core.PersistentVector(meta,this__8632.cnt,this__8632.shift,this__8632.root,this__8632.tail,this__8632.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8633 = this;
return this__8633.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8634 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8635 = this;
if((function (){var and__3822__auto____8636 = (0 <= n);
if(and__3822__auto____8636)
{return (n < this__8635.cnt);
} else
{return and__3822__auto____8636;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8637 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__8637.meta);
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.pv_fresh_node.call(null,null);
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[],0));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){
var l__8642 = xs.length;
var xs__8643 = (((no_clone === true))?xs:xs.slice());
if((l__8642 < 32))
{return (new cljs.core.PersistentVector(null,l__8642,5,cljs.core.PersistentVector.EMPTY_NODE,xs__8643,null));
} else
{var node__8644 = xs__8643.slice(0,32);
var v__8645 = (new cljs.core.PersistentVector(null,32,5,cljs.core.PersistentVector.EMPTY_NODE,node__8644,null));
var i__8646 = 32;
var out__8647 = cljs.core._as_transient.call(null,v__8645);
while(true){
if((i__8646 < l__8642))
{{
var G__8648 = (i__8646 + 1);
var G__8649 = cljs.core.conj_BANG_.call(null,out__8647,(xs__8643[i__8646]));
i__8646 = G__8648;
out__8647 = G__8649;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__8647);
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
vector.cljs$lang$applyTo = (function (arglist__8650){
var args = cljs.core.seq(arglist__8650);;
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
var this__8651 = this;
var h__2340__auto____8652 = this__8651.__hash;
if(!((h__2340__auto____8652 == null)))
{return h__2340__auto____8652;
} else
{var h__2340__auto____8653 = cljs.core.hash_coll.call(null,coll);
this__8651.__hash = h__2340__auto____8653;
return h__2340__auto____8653;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__8654 = this;
if(((this__8654.off + 1) < this__8654.node.length))
{var s__8655 = cljs.core.chunked_seq.call(null,this__8654.vec,this__8654.node,this__8654.i,(this__8654.off + 1));
if((s__8655 == null))
{return null;
} else
{return s__8655;
}
} else
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8656 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8657 = this;
return coll;
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8658 = this;
return (this__8658.node[this__8658.off]);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8659 = this;
if(((this__8659.off + 1) < this__8659.node.length))
{var s__8660 = cljs.core.chunked_seq.call(null,this__8659.vec,this__8659.node,this__8659.i,(this__8659.off + 1));
if((s__8660 == null))
{return cljs.core.List.EMPTY;
} else
{return s__8660;
}
} else
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__8661 = this;
var l__8662 = this__8661.node.length;
var s__8663 = ((((this__8661.i + l__8662) < cljs.core._count.call(null,this__8661.vec)))?cljs.core.chunked_seq.call(null,this__8661.vec,(this__8661.i + l__8662),0):null);
if((s__8663 == null))
{return null;
} else
{return s__8663;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8664 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__8665 = this;
return cljs.core.chunked_seq.call(null,this__8665.vec,this__8665.node,this__8665.i,this__8665.off,m);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_meta$arity$1 = (function (coll){
var this__8666 = this;
return this__8666.meta;
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8667 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__8667.meta);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__8668 = this;
return cljs.core.array_chunk.call(null,this__8668.node,this__8668.off);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__8669 = this;
var l__8670 = this__8669.node.length;
var s__8671 = ((((this__8669.i + l__8670) < cljs.core._count.call(null,this__8669.vec)))?cljs.core.chunked_seq.call(null,this__8669.vec,(this__8669.i + l__8670),0):null);
if((s__8671 == null))
{return cljs.core.List.EMPTY;
} else
{return s__8671;
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
var this__8674 = this;
var h__2340__auto____8675 = this__8674.__hash;
if(!((h__2340__auto____8675 == null)))
{return h__2340__auto____8675;
} else
{var h__2340__auto____8676 = cljs.core.hash_coll.call(null,coll);
this__8674.__hash = h__2340__auto____8676;
return h__2340__auto____8676;
}
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8677 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8678 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var this__8679 = this;
var v_pos__8680 = (this__8679.start + key);
return (new cljs.core.Subvec(this__8679.meta,cljs.core._assoc.call(null,this__8679.v,v_pos__8680,val),this__8679.start,((this__8679.end > (v_pos__8680 + 1)) ? this__8679.end : (v_pos__8680 + 1)),null));
});
cljs.core.Subvec.prototype.call = (function() {
var G__8706 = null;
var G__8706__2 = (function (this_sym8681,k){
var this__8683 = this;
var this_sym8681__8684 = this;
var coll__8685 = this_sym8681__8684;
return coll__8685.cljs$core$ILookup$_lookup$arity$2(coll__8685,k);
});
var G__8706__3 = (function (this_sym8682,k,not_found){
var this__8683 = this;
var this_sym8682__8686 = this;
var coll__8687 = this_sym8682__8686;
return coll__8687.cljs$core$ILookup$_lookup$arity$3(coll__8687,k,not_found);
});
G__8706 = function(this_sym8682,k,not_found){
switch(arguments.length){
case 2:
return G__8706__2.call(this,this_sym8682,k);
case 3:
return G__8706__3.call(this,this_sym8682,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8706;
})()
;
cljs.core.Subvec.prototype.apply = (function (this_sym8672,args8673){
var this__8688 = this;
return this_sym8672.call.apply(this_sym8672,[this_sym8672].concat(args8673.slice()));
});
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8689 = this;
return (new cljs.core.Subvec(this__8689.meta,cljs.core._assoc_n.call(null,this__8689.v,this__8689.end,o),this__8689.start,(this__8689.end + 1),null));
});
cljs.core.Subvec.prototype.toString = (function (){
var this__8690 = this;
var this__8691 = this;
return cljs.core.pr_str.call(null,this__8691);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__8692 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__8693 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8694 = this;
var subvec_seq__8695 = (function subvec_seq(i){
if((i === this__8694.end))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__8694.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}),null)));
}
});
return subvec_seq__8695.call(null,this__8694.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8696 = this;
return (this__8696.end - this__8696.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8697 = this;
return cljs.core._nth.call(null,this__8697.v,(this__8697.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8698 = this;
if((this__8698.start === this__8698.end))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__8698.meta,this__8698.v,this__8698.start,(this__8698.end - 1),null));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__8699 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8700 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8701 = this;
return (new cljs.core.Subvec(meta,this__8701.v,this__8701.start,this__8701.end,this__8701.__hash));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8702 = this;
return this__8702.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8703 = this;
return cljs.core._nth.call(null,this__8703.v,(this__8703.start + n));
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8704 = this;
return cljs.core._nth.call(null,this__8704.v,(this__8704.start + n),not_found);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8705 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__8705.meta);
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
var ret__8708 = cljs.core.make_array.call(null,32);
cljs.core.array_copy.call(null,tl,0,ret__8708,0,tl.length);
return ret__8708;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret__8712 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,parent);
var subidx__8713 = (((tv.cnt - 1) >>> level) & 31);
cljs.core.pv_aset.call(null,ret__8712,subidx__8713,(((level === 5))?tail_node:(function (){var child__8714 = cljs.core.pv_aget.call(null,ret__8712,subidx__8713);
if(!((child__8714 == null)))
{return tv_push_tail.call(null,tv,(level - 5),child__8714,tail_node);
} else
{return cljs.core.new_path.call(null,tv.root.edit,(level - 5),tail_node);
}
})()));
return ret__8712;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__8719 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,node);
var subidx__8720 = (((tv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__8721 = tv_pop_tail.call(null,tv,(level - 5),cljs.core.pv_aget.call(null,node__8719,subidx__8720));
if((function (){var and__3822__auto____8722 = (new_child__8721 == null);
if(and__3822__auto____8722)
{return (subidx__8720 === 0);
} else
{return and__3822__auto____8722;
}
})())
{return null;
} else
{cljs.core.pv_aset.call(null,node__8719,subidx__8720,new_child__8721);
return node__8719;
}
} else
{if((subidx__8720 === 0))
{return null;
} else
{if("\uFDD0'else")
{cljs.core.pv_aset.call(null,node__8719,subidx__8720,null);
return node__8719;
} else
{return null;
}
}
}
});
cljs.core.editable_array_for = (function editable_array_for(tv,i){
if((function (){var and__3822__auto____8727 = (0 <= i);
if(and__3822__auto____8727)
{return (i < tv.cnt);
} else
{return and__3822__auto____8727;
}
})())
{if((i >= cljs.core.tail_off.call(null,tv)))
{return tv.tail;
} else
{var root__8728 = tv.root;
var node__8729 = root__8728;
var level__8730 = tv.shift;
while(true){
if((level__8730 > 0))
{{
var G__8731 = cljs.core.tv_ensure_editable.call(null,root__8728.edit,cljs.core.pv_aget.call(null,node__8729,((i >>> level__8730) & 31)));
var G__8732 = (level__8730 - 5);
node__8729 = G__8731;
level__8730 = G__8732;
continue;
}
} else
{return node__8729.arr;
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
var G__8772 = null;
var G__8772__2 = (function (this_sym8735,k){
var this__8737 = this;
var this_sym8735__8738 = this;
var coll__8739 = this_sym8735__8738;
return coll__8739.cljs$core$ILookup$_lookup$arity$2(coll__8739,k);
});
var G__8772__3 = (function (this_sym8736,k,not_found){
var this__8737 = this;
var this_sym8736__8740 = this;
var coll__8741 = this_sym8736__8740;
return coll__8741.cljs$core$ILookup$_lookup$arity$3(coll__8741,k,not_found);
});
G__8772 = function(this_sym8736,k,not_found){
switch(arguments.length){
case 2:
return G__8772__2.call(this,this_sym8736,k);
case 3:
return G__8772__3.call(this,this_sym8736,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8772;
})()
;
cljs.core.TransientVector.prototype.apply = (function (this_sym8733,args8734){
var this__8742 = this;
return this_sym8733.call.apply(this_sym8733,[this_sym8733].concat(args8734.slice()));
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8743 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8744 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8745 = this;
if(this__8745.root.edit)
{return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8746 = this;
if((function (){var and__3822__auto____8747 = (0 <= n);
if(and__3822__auto____8747)
{return (n < this__8746.cnt);
} else
{return and__3822__auto____8747;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8748 = this;
if(this__8748.root.edit)
{return this__8748.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var this__8749 = this;
if(this__8749.root.edit)
{if((function (){var and__3822__auto____8750 = (0 <= n);
if(and__3822__auto____8750)
{return (n < this__8749.cnt);
} else
{return and__3822__auto____8750;
}
})())
{if((cljs.core.tail_off.call(null,tcoll) <= n))
{(this__8749.tail[(n & 31)] = val);
return tcoll;
} else
{var new_root__8755 = (function go(level,node){
var node__8753 = cljs.core.tv_ensure_editable.call(null,this__8749.root.edit,node);
if((level === 0))
{cljs.core.pv_aset.call(null,node__8753,(n & 31),val);
return node__8753;
} else
{var subidx__8754 = ((n >>> level) & 31);
cljs.core.pv_aset.call(null,node__8753,subidx__8754,go.call(null,(level - 5),cljs.core.pv_aget.call(null,node__8753,subidx__8754)));
return node__8753;
}
}).call(null,this__8749.shift,this__8749.root);
this__8749.root = new_root__8755;
return tcoll;
}
} else
{if((n === this__8749.cnt))
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(this__8749.cnt)].join('')));
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
var this__8756 = this;
if(this__8756.root.edit)
{if((this__8756.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__8756.cnt))
{this__8756.cnt = 0;
return tcoll;
} else
{if((((this__8756.cnt - 1) & 31) > 0))
{this__8756.cnt = (this__8756.cnt - 1);
return tcoll;
} else
{if("\uFDD0'else")
{var new_tail__8757 = cljs.core.editable_array_for.call(null,tcoll,(this__8756.cnt - 2));
var new_root__8759 = (function (){var nr__8758 = cljs.core.tv_pop_tail.call(null,tcoll,this__8756.shift,this__8756.root);
if(!((nr__8758 == null)))
{return nr__8758;
} else
{return (new cljs.core.VectorNode(this__8756.root.edit,cljs.core.make_array.call(null,32)));
}
})();
if((function (){var and__3822__auto____8760 = (5 < this__8756.shift);
if(and__3822__auto____8760)
{return (cljs.core.pv_aget.call(null,new_root__8759,1) == null);
} else
{return and__3822__auto____8760;
}
})())
{var new_root__8761 = cljs.core.tv_ensure_editable.call(null,this__8756.root.edit,cljs.core.pv_aget.call(null,new_root__8759,0));
this__8756.root = new_root__8761;
this__8756.shift = (this__8756.shift - 5);
this__8756.cnt = (this__8756.cnt - 1);
this__8756.tail = new_tail__8757;
return tcoll;
} else
{this__8756.root = new_root__8759;
this__8756.cnt = (this__8756.cnt - 1);
this__8756.tail = new_tail__8757;
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
var this__8762 = this;
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,key,val);
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__8763 = this;
if(this__8763.root.edit)
{if(((this__8763.cnt - cljs.core.tail_off.call(null,tcoll)) < 32))
{(this__8763.tail[(this__8763.cnt & 31)] = o);
this__8763.cnt = (this__8763.cnt + 1);
return tcoll;
} else
{var tail_node__8764 = (new cljs.core.VectorNode(this__8763.root.edit,this__8763.tail));
var new_tail__8765 = cljs.core.make_array.call(null,32);
(new_tail__8765[0] = o);
this__8763.tail = new_tail__8765;
if(((this__8763.cnt >>> 5) > (1 << this__8763.shift)))
{var new_root_array__8766 = cljs.core.make_array.call(null,32);
var new_shift__8767 = (this__8763.shift + 5);
(new_root_array__8766[0] = this__8763.root);
(new_root_array__8766[1] = cljs.core.new_path.call(null,this__8763.root.edit,this__8763.shift,tail_node__8764));
this__8763.root = (new cljs.core.VectorNode(this__8763.root.edit,new_root_array__8766));
this__8763.shift = new_shift__8767;
this__8763.cnt = (this__8763.cnt + 1);
return tcoll;
} else
{var new_root__8768 = cljs.core.tv_push_tail.call(null,tcoll,this__8763.shift,this__8763.root,tail_node__8764);
this__8763.root = new_root__8768;
this__8763.cnt = (this__8763.cnt + 1);
return tcoll;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__8769 = this;
if(this__8769.root.edit)
{this__8769.root.edit = null;
var len__8770 = (this__8769.cnt - cljs.core.tail_off.call(null,tcoll));
var trimmed_tail__8771 = cljs.core.make_array.call(null,len__8770);
cljs.core.array_copy.call(null,this__8769.tail,0,trimmed_tail__8771,0,len__8770);
return (new cljs.core.PersistentVector(null,this__8769.cnt,this__8769.shift,this__8769.root,trimmed_tail__8771,null));
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
var this__8773 = this;
var h__2340__auto____8774 = this__8773.__hash;
if(!((h__2340__auto____8774 == null)))
{return h__2340__auto____8774;
} else
{var h__2340__auto____8775 = cljs.core.hash_coll.call(null,coll);
this__8773.__hash = h__2340__auto____8775;
return h__2340__auto____8775;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8776 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var this__8777 = this;
var this__8778 = this;
return cljs.core.pr_str.call(null,this__8778);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8779 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8780 = this;
return cljs.core._first.call(null,this__8780.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8781 = this;
var temp__3971__auto____8782 = cljs.core.next.call(null,this__8781.front);
if(temp__3971__auto____8782)
{var f1__8783 = temp__3971__auto____8782;
return (new cljs.core.PersistentQueueSeq(this__8781.meta,f1__8783,this__8781.rear,null));
} else
{if((this__8781.rear == null))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__8781.meta,this__8781.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8784 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8785 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__8785.front,this__8785.rear,this__8785.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8786 = this;
return this__8786.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8787 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8787.meta);
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
var this__8788 = this;
var h__2340__auto____8789 = this__8788.__hash;
if(!((h__2340__auto____8789 == null)))
{return h__2340__auto____8789;
} else
{var h__2340__auto____8790 = cljs.core.hash_coll.call(null,coll);
this__8788.__hash = h__2340__auto____8790;
return h__2340__auto____8790;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8791 = this;
if(cljs.core.truth_(this__8791.front))
{return (new cljs.core.PersistentQueue(this__8791.meta,(this__8791.count + 1),this__8791.front,cljs.core.conj.call(null,(function (){var or__3824__auto____8792 = this__8791.rear;
if(cljs.core.truth_(or__3824__auto____8792))
{return or__3824__auto____8792;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(this__8791.meta,(this__8791.count + 1),cljs.core.conj.call(null,this__8791.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});
cljs.core.PersistentQueue.prototype.toString = (function (){
var this__8793 = this;
var this__8794 = this;
return cljs.core.pr_str.call(null,this__8794);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8795 = this;
var rear__8796 = cljs.core.seq.call(null,this__8795.rear);
if(cljs.core.truth_((function (){var or__3824__auto____8797 = this__8795.front;
if(cljs.core.truth_(or__3824__auto____8797))
{return or__3824__auto____8797;
} else
{return rear__8796;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__8795.front,cljs.core.seq.call(null,rear__8796),null));
} else
{return null;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8798 = this;
return this__8798.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8799 = this;
return cljs.core._first.call(null,this__8799.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8800 = this;
if(cljs.core.truth_(this__8800.front))
{var temp__3971__auto____8801 = cljs.core.next.call(null,this__8800.front);
if(temp__3971__auto____8801)
{var f1__8802 = temp__3971__auto____8801;
return (new cljs.core.PersistentQueue(this__8800.meta,(this__8800.count - 1),f1__8802,this__8800.rear,null));
} else
{return (new cljs.core.PersistentQueue(this__8800.meta,(this__8800.count - 1),cljs.core.seq.call(null,this__8800.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8803 = this;
return cljs.core.first.call(null,this__8803.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8804 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8805 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8806 = this;
return (new cljs.core.PersistentQueue(meta,this__8806.count,this__8806.front,this__8806.rear,this__8806.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8807 = this;
return this__8807.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8808 = this;
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
var this__8809 = this;
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
var len__8812 = array.length;
var i__8813 = 0;
while(true){
if((i__8813 < len__8812))
{if((k === (array[i__8813])))
{return i__8813;
} else
{{
var G__8814 = (i__8813 + incr);
i__8813 = G__8814;
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
var a__8817 = cljs.core.hash.call(null,a);
var b__8818 = cljs.core.hash.call(null,b);
if((a__8817 < b__8818))
{return -1;
} else
{if((a__8817 > b__8818))
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
var ks__8826 = m.keys;
var len__8827 = ks__8826.length;
var so__8828 = m.strobj;
var out__8829 = cljs.core.with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,cljs.core.meta.call(null,m));
var i__8830 = 0;
var out__8831 = cljs.core.transient$.call(null,out__8829);
while(true){
if((i__8830 < len__8827))
{var k__8832 = (ks__8826[i__8830]);
{
var G__8833 = (i__8830 + 1);
var G__8834 = cljs.core.assoc_BANG_.call(null,out__8831,k__8832,(so__8828[k__8832]));
i__8830 = G__8833;
out__8831 = G__8834;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,out__8831,k,v));
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){
var new_obj__8840 = {};
var l__8841 = ks.length;
var i__8842 = 0;
while(true){
if((i__8842 < l__8841))
{var k__8843 = (ks[i__8842]);
(new_obj__8840[k__8843] = (obj[k__8843]));
{
var G__8844 = (i__8842 + 1);
i__8842 = G__8844;
continue;
}
} else
{}
break;
}
return new_obj__8840;
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
var this__8847 = this;
return cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null),coll));
});
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8848 = this;
var h__2340__auto____8849 = this__8848.__hash;
if(!((h__2340__auto____8849 == null)))
{return h__2340__auto____8849;
} else
{var h__2340__auto____8850 = cljs.core.hash_imap.call(null,coll);
this__8848.__hash = h__2340__auto____8850;
return h__2340__auto____8850;
}
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8851 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8852 = this;
if((function (){var and__3822__auto____8853 = goog.isString(k);
if(and__3822__auto____8853)
{return !((cljs.core.scan_array.call(null,1,k,this__8852.keys) == null));
} else
{return and__3822__auto____8853;
}
})())
{return (this__8852.strobj[k]);
} else
{return not_found;
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8854 = this;
if(goog.isString(k))
{if((function (){var or__3824__auto____8855 = (this__8854.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD);
if(or__3824__auto____8855)
{return or__3824__auto____8855;
} else
{return (this__8854.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD);
}
})())
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
} else
{if(!((cljs.core.scan_array.call(null,1,k,this__8854.keys) == null)))
{var new_strobj__8856 = cljs.core.obj_clone.call(null,this__8854.strobj,this__8854.keys);
(new_strobj__8856[k] = v);
return (new cljs.core.ObjMap(this__8854.meta,this__8854.keys,new_strobj__8856,(this__8854.update_count + 1),null));
} else
{var new_strobj__8857 = cljs.core.obj_clone.call(null,this__8854.strobj,this__8854.keys);
var new_keys__8858 = this__8854.keys.slice();
(new_strobj__8857[k] = v);
new_keys__8858.push(k);
return (new cljs.core.ObjMap(this__8854.meta,new_keys__8858,new_strobj__8857,(this__8854.update_count + 1),null));
}
}
} else
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8859 = this;
if((function (){var and__3822__auto____8860 = goog.isString(k);
if(and__3822__auto____8860)
{return !((cljs.core.scan_array.call(null,1,k,this__8859.keys) == null));
} else
{return and__3822__auto____8860;
}
})())
{return true;
} else
{return false;
}
});
cljs.core.ObjMap.prototype.call = (function() {
var G__8882 = null;
var G__8882__2 = (function (this_sym8861,k){
var this__8863 = this;
var this_sym8861__8864 = this;
var coll__8865 = this_sym8861__8864;
return coll__8865.cljs$core$ILookup$_lookup$arity$2(coll__8865,k);
});
var G__8882__3 = (function (this_sym8862,k,not_found){
var this__8863 = this;
var this_sym8862__8866 = this;
var coll__8867 = this_sym8862__8866;
return coll__8867.cljs$core$ILookup$_lookup$arity$3(coll__8867,k,not_found);
});
G__8882 = function(this_sym8862,k,not_found){
switch(arguments.length){
case 2:
return G__8882__2.call(this,this_sym8862,k);
case 3:
return G__8882__3.call(this,this_sym8862,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8882;
})()
;
cljs.core.ObjMap.prototype.apply = (function (this_sym8845,args8846){
var this__8868 = this;
return this_sym8845.call.apply(this_sym8845,[this_sym8845].concat(args8846.slice()));
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__8869 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.toString = (function (){
var this__8870 = this;
var this__8871 = this;
return cljs.core.pr_str.call(null,this__8871);
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8872 = this;
if((this__8872.keys.length > 0))
{return cljs.core.map.call(null,(function (p1__8835_SHARP_){
return cljs.core.vector.call(null,p1__8835_SHARP_,(this__8872.strobj[p1__8835_SHARP_]));
}),this__8872.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8873 = this;
return this__8873.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8874 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8875 = this;
return (new cljs.core.ObjMap(meta,this__8875.keys,this__8875.strobj,this__8875.update_count,this__8875.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8876 = this;
return this__8876.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8877 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__8877.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8878 = this;
if((function (){var and__3822__auto____8879 = goog.isString(k);
if(and__3822__auto____8879)
{return !((cljs.core.scan_array.call(null,1,k,this__8878.keys) == null));
} else
{return and__3822__auto____8879;
}
})())
{var new_keys__8880 = this__8878.keys.slice();
var new_strobj__8881 = cljs.core.obj_clone.call(null,this__8878.strobj,this__8878.keys);
new_keys__8880.splice(cljs.core.scan_array.call(null,1,k,new_keys__8880),1);
cljs.core.js_delete.call(null,new_strobj__8881,k);
return (new cljs.core.ObjMap(this__8878.meta,new_keys__8880,new_strobj__8881,(this__8878.update_count + 1),null));
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
var this__8886 = this;
var h__2340__auto____8887 = this__8886.__hash;
if(!((h__2340__auto____8887 == null)))
{return h__2340__auto____8887;
} else
{var h__2340__auto____8888 = cljs.core.hash_imap.call(null,coll);
this__8886.__hash = h__2340__auto____8888;
return h__2340__auto____8888;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8889 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8890 = this;
var bucket__8891 = (this__8890.hashobj[cljs.core.hash.call(null,k)]);
var i__8892 = (cljs.core.truth_(bucket__8891)?cljs.core.scan_array.call(null,2,k,bucket__8891):null);
if(cljs.core.truth_(i__8892))
{return (bucket__8891[(i__8892 + 1)]);
} else
{return not_found;
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8893 = this;
var h__8894 = cljs.core.hash.call(null,k);
var bucket__8895 = (this__8893.hashobj[h__8894]);
if(cljs.core.truth_(bucket__8895))
{var new_bucket__8896 = bucket__8895.slice();
var new_hashobj__8897 = goog.object.clone(this__8893.hashobj);
(new_hashobj__8897[h__8894] = new_bucket__8896);
var temp__3971__auto____8898 = cljs.core.scan_array.call(null,2,k,new_bucket__8896);
if(cljs.core.truth_(temp__3971__auto____8898))
{var i__8899 = temp__3971__auto____8898;
(new_bucket__8896[(i__8899 + 1)] = v);
return (new cljs.core.HashMap(this__8893.meta,this__8893.count,new_hashobj__8897,null));
} else
{new_bucket__8896.push(k,v);
return (new cljs.core.HashMap(this__8893.meta,(this__8893.count + 1),new_hashobj__8897,null));
}
} else
{var new_hashobj__8900 = goog.object.clone(this__8893.hashobj);
(new_hashobj__8900[h__8894] = [k,v]);
return (new cljs.core.HashMap(this__8893.meta,(this__8893.count + 1),new_hashobj__8900,null));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8901 = this;
var bucket__8902 = (this__8901.hashobj[cljs.core.hash.call(null,k)]);
var i__8903 = (cljs.core.truth_(bucket__8902)?cljs.core.scan_array.call(null,2,k,bucket__8902):null);
if(cljs.core.truth_(i__8903))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__8928 = null;
var G__8928__2 = (function (this_sym8904,k){
var this__8906 = this;
var this_sym8904__8907 = this;
var coll__8908 = this_sym8904__8907;
return coll__8908.cljs$core$ILookup$_lookup$arity$2(coll__8908,k);
});
var G__8928__3 = (function (this_sym8905,k,not_found){
var this__8906 = this;
var this_sym8905__8909 = this;
var coll__8910 = this_sym8905__8909;
return coll__8910.cljs$core$ILookup$_lookup$arity$3(coll__8910,k,not_found);
});
G__8928 = function(this_sym8905,k,not_found){
switch(arguments.length){
case 2:
return G__8928__2.call(this,this_sym8905,k);
case 3:
return G__8928__3.call(this,this_sym8905,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8928;
})()
;
cljs.core.HashMap.prototype.apply = (function (this_sym8884,args8885){
var this__8911 = this;
return this_sym8884.call.apply(this_sym8884,[this_sym8884].concat(args8885.slice()));
});
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__8912 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.toString = (function (){
var this__8913 = this;
var this__8914 = this;
return cljs.core.pr_str.call(null,this__8914);
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8915 = this;
if((this__8915.count > 0))
{var hashes__8916 = cljs.core.js_keys.call(null,this__8915.hashobj).sort();
return cljs.core.mapcat.call(null,(function (p1__8883_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__8915.hashobj[p1__8883_SHARP_])));
}),hashes__8916);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8917 = this;
return this__8917.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8918 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8919 = this;
return (new cljs.core.HashMap(meta,this__8919.count,this__8919.hashobj,this__8919.__hash));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8920 = this;
return this__8920.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8921 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__8921.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8922 = this;
var h__8923 = cljs.core.hash.call(null,k);
var bucket__8924 = (this__8922.hashobj[h__8923]);
var i__8925 = (cljs.core.truth_(bucket__8924)?cljs.core.scan_array.call(null,2,k,bucket__8924):null);
if(cljs.core.not.call(null,i__8925))
{return coll;
} else
{var new_hashobj__8926 = goog.object.clone(this__8922.hashobj);
if((3 > bucket__8924.length))
{cljs.core.js_delete.call(null,new_hashobj__8926,h__8923);
} else
{var new_bucket__8927 = bucket__8924.slice();
new_bucket__8927.splice(i__8925,2);
(new_hashobj__8926[h__8923] = new_bucket__8927);
}
return (new cljs.core.HashMap(this__8922.meta,(this__8922.count - 1),new_hashobj__8926,null));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,{},0));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__8929 = ks.length;
var i__8930 = 0;
var out__8931 = cljs.core.HashMap.EMPTY;
while(true){
if((i__8930 < len__8929))
{{
var G__8932 = (i__8930 + 1);
var G__8933 = cljs.core.assoc.call(null,out__8931,(ks[i__8930]),(vs[i__8930]));
i__8930 = G__8932;
out__8931 = G__8933;
continue;
}
} else
{return out__8931;
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr__8937 = m.arr;
var len__8938 = arr__8937.length;
var i__8939 = 0;
while(true){
if((len__8938 <= i__8939))
{return -1;
} else
{if(cljs.core._EQ_.call(null,(arr__8937[i__8939]),k))
{return i__8939;
} else
{if("\uFDD0'else")
{{
var G__8940 = (i__8939 + 2);
i__8939 = G__8940;
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
var this__8943 = this;
return (new cljs.core.TransientArrayMap({},this__8943.arr.length,this__8943.arr.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8944 = this;
var h__2340__auto____8945 = this__8944.__hash;
if(!((h__2340__auto____8945 == null)))
{return h__2340__auto____8945;
} else
{var h__2340__auto____8946 = cljs.core.hash_imap.call(null,coll);
this__8944.__hash = h__2340__auto____8946;
return h__2340__auto____8946;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8947 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8948 = this;
var idx__8949 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__8949 === -1))
{return not_found;
} else
{return (this__8948.arr[(idx__8949 + 1)]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8950 = this;
var idx__8951 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__8951 === -1))
{if((this__8950.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{return (new cljs.core.PersistentArrayMap(this__8950.meta,(this__8950.cnt + 1),(function (){var G__8952__8953 = this__8950.arr.slice();
G__8952__8953.push(k);
G__8952__8953.push(v);
return G__8952__8953;
})(),null));
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,coll)),k,v));
}
} else
{if((v === (this__8950.arr[(idx__8951 + 1)])))
{return coll;
} else
{if("\uFDD0'else")
{return (new cljs.core.PersistentArrayMap(this__8950.meta,this__8950.cnt,(function (){var G__8954__8955 = this__8950.arr.slice();
(G__8954__8955[(idx__8951 + 1)] = v);
return G__8954__8955;
})(),null));
} else
{return null;
}
}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8956 = this;
return !((cljs.core.array_map_index_of.call(null,coll,k) === -1));
});
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__8988 = null;
var G__8988__2 = (function (this_sym8957,k){
var this__8959 = this;
var this_sym8957__8960 = this;
var coll__8961 = this_sym8957__8960;
return coll__8961.cljs$core$ILookup$_lookup$arity$2(coll__8961,k);
});
var G__8988__3 = (function (this_sym8958,k,not_found){
var this__8959 = this;
var this_sym8958__8962 = this;
var coll__8963 = this_sym8958__8962;
return coll__8963.cljs$core$ILookup$_lookup$arity$3(coll__8963,k,not_found);
});
G__8988 = function(this_sym8958,k,not_found){
switch(arguments.length){
case 2:
return G__8988__2.call(this,this_sym8958,k);
case 3:
return G__8988__3.call(this,this_sym8958,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8988;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (this_sym8941,args8942){
var this__8964 = this;
return this_sym8941.call.apply(this_sym8941,[this_sym8941].concat(args8942.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__8965 = this;
var len__8966 = this__8965.arr.length;
var i__8967 = 0;
var init__8968 = init;
while(true){
if((i__8967 < len__8966))
{var init__8969 = f.call(null,init__8968,(this__8965.arr[i__8967]),(this__8965.arr[(i__8967 + 1)]));
if(cljs.core.reduced_QMARK_.call(null,init__8969))
{return cljs.core.deref.call(null,init__8969);
} else
{{
var G__8989 = (i__8967 + 2);
var G__8990 = init__8969;
i__8967 = G__8989;
init__8968 = G__8990;
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
var this__8970 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var this__8971 = this;
var this__8972 = this;
return cljs.core.pr_str.call(null,this__8972);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8973 = this;
if((this__8973.cnt > 0))
{var len__8974 = this__8973.arr.length;
var array_map_seq__8975 = (function array_map_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < len__8974))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([(this__8973.arr[i]),(this__8973.arr[(i + 1)])], true),array_map_seq.call(null,(i + 2)));
} else
{return null;
}
}),null));
});
return array_map_seq__8975.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8976 = this;
return this__8976.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8977 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8978 = this;
return (new cljs.core.PersistentArrayMap(meta,this__8978.cnt,this__8978.arr,this__8978.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8979 = this;
return this__8979.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8980 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8980.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8981 = this;
var idx__8982 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__8982 >= 0))
{var len__8983 = this__8981.arr.length;
var new_len__8984 = (len__8983 - 2);
if((new_len__8984 === 0))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var new_arr__8985 = cljs.core.make_array.call(null,new_len__8984);
var s__8986 = 0;
var d__8987 = 0;
while(true){
if((s__8986 >= len__8983))
{return (new cljs.core.PersistentArrayMap(this__8981.meta,(this__8981.cnt - 1),new_arr__8985,null));
} else
{if(cljs.core._EQ_.call(null,k,(this__8981.arr[s__8986])))
{{
var G__8991 = (s__8986 + 2);
var G__8992 = d__8987;
s__8986 = G__8991;
d__8987 = G__8992;
continue;
}
} else
{if("\uFDD0'else")
{(new_arr__8985[d__8987] = (this__8981.arr[s__8986]));
(new_arr__8985[(d__8987 + 1)] = (this__8981.arr[(s__8986 + 1)]));
{
var G__8993 = (s__8986 + 2);
var G__8994 = (d__8987 + 2);
s__8986 = G__8993;
d__8987 = G__8994;
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
var len__8995 = cljs.core.count.call(null,ks);
var i__8996 = 0;
var out__8997 = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i__8996 < len__8995))
{{
var G__8998 = (i__8996 + 1);
var G__8999 = cljs.core.assoc_BANG_.call(null,out__8997,(ks[i__8996]),(vs[i__8996]));
i__8996 = G__8998;
out__8997 = G__8999;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__8997);
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
var this__9000 = this;
if(cljs.core.truth_(this__9000.editable_QMARK_))
{var idx__9001 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__9001 >= 0))
{(this__9000.arr[idx__9001] = (this__9000.arr[(this__9000.len - 2)]));
(this__9000.arr[(idx__9001 + 1)] = (this__9000.arr[(this__9000.len - 1)]));
var G__9002__9003 = this__9000.arr;
G__9002__9003.pop();
G__9002__9003.pop();
G__9002__9003;
this__9000.len = (this__9000.len - 2);
} else
{}
return tcoll;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__9004 = this;
if(cljs.core.truth_(this__9004.editable_QMARK_))
{var idx__9005 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__9005 === -1))
{if(((this__9004.len + 2) <= (2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{this__9004.len = (this__9004.len + 2);
this__9004.arr.push(key);
this__9004.arr.push(val);
return tcoll;
} else
{return cljs.core.assoc_BANG_.call(null,cljs.core.array__GT_transient_hash_map.call(null,this__9004.len,this__9004.arr),key,val);
}
} else
{if((val === (this__9004.arr[(idx__9005 + 1)])))
{return tcoll;
} else
{(this__9004.arr[(idx__9005 + 1)] = val);
return tcoll;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__9006 = this;
if(cljs.core.truth_(this__9006.editable_QMARK_))
{if((function (){var G__9007__9008 = o;
if(G__9007__9008)
{if((function (){var or__3824__auto____9009 = (G__9007__9008.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____9009)
{return or__3824__auto____9009;
} else
{return G__9007__9008.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__9007__9008.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__9007__9008);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__9007__9008);
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__9010 = cljs.core.seq.call(null,o);
var tcoll__9011 = tcoll;
while(true){
var temp__3971__auto____9012 = cljs.core.first.call(null,es__9010);
if(cljs.core.truth_(temp__3971__auto____9012))
{var e__9013 = temp__3971__auto____9012;
{
var G__9019 = cljs.core.next.call(null,es__9010);
var G__9020 = tcoll__9011.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll__9011,cljs.core.key.call(null,e__9013),cljs.core.val.call(null,e__9013));
es__9010 = G__9019;
tcoll__9011 = G__9020;
continue;
}
} else
{return tcoll__9011;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__9014 = this;
if(cljs.core.truth_(this__9014.editable_QMARK_))
{this__9014.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,this__9014.len,2),this__9014.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__9015 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__9016 = this;
if(cljs.core.truth_(this__9016.editable_QMARK_))
{var idx__9017 = cljs.core.array_map_index_of.call(null,tcoll,k);
if((idx__9017 === -1))
{return not_found;
} else
{return (this__9016.arr[(idx__9017 + 1)]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__9018 = this;
if(cljs.core.truth_(this__9018.editable_QMARK_))
{return cljs.core.quot.call(null,this__9018.len,2);
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientArrayMap;
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out__9023 = cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY);
var i__9024 = 0;
while(true){
if((i__9024 < len))
{{
var G__9025 = cljs.core.assoc_BANG_.call(null,out__9023,(arr[i__9024]),(arr[(i__9024 + 1)]));
var G__9026 = (i__9024 + 2);
out__9023 = G__9025;
i__9024 = G__9026;
continue;
}
} else
{return out__9023;
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
var G__9031__9032 = arr.slice();
(G__9031__9032[i] = a);
return G__9031__9032;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__9033__9034 = arr.slice();
(G__9033__9034[i] = a);
(G__9033__9034[j] = b);
return G__9033__9034;
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
var new_arr__9036 = cljs.core.make_array.call(null,(arr.length - 2));
cljs.core.array_copy.call(null,arr,0,new_arr__9036,0,(2 * i));
cljs.core.array_copy.call(null,arr,(2 * (i + 1)),new_arr__9036,(2 * i),(new_arr__9036.length - (2 * i)));
return new_arr__9036;
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
var editable__9039 = inode.ensure_editable(edit);
(editable__9039.arr[i] = a);
return editable__9039;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable__9040 = inode.ensure_editable(edit);
(editable__9040.arr[i] = a);
(editable__9040.arr[j] = b);
return editable__9040;
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
var len__9047 = arr.length;
var i__9048 = 0;
var init__9049 = init;
while(true){
if((i__9048 < len__9047))
{var init__9052 = (function (){var k__9050 = (arr[i__9048]);
if(!((k__9050 == null)))
{return f.call(null,init__9049,k__9050,(arr[(i__9048 + 1)]));
} else
{var node__9051 = (arr[(i__9048 + 1)]);
if(!((node__9051 == null)))
{return node__9051.kv_reduce(f,init__9049);
} else
{return init__9049;
}
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__9052))
{return cljs.core.deref.call(null,init__9052);
} else
{{
var G__9053 = (i__9048 + 2);
var G__9054 = init__9052;
i__9048 = G__9053;
init__9049 = G__9054;
continue;
}
}
} else
{return init__9049;
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
var this__9055 = this;
var inode__9056 = this;
if((this__9055.bitmap === bit))
{return null;
} else
{var editable__9057 = inode__9056.ensure_editable(e);
var earr__9058 = editable__9057.arr;
var len__9059 = earr__9058.length;
editable__9057.bitmap = (bit ^ editable__9057.bitmap);
cljs.core.array_copy.call(null,earr__9058,(2 * (i + 1)),earr__9058,(2 * i),(len__9059 - (2 * (i + 1))));
(earr__9058[(len__9059 - 2)] = null);
(earr__9058[(len__9059 - 1)] = null);
return editable__9057;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__9060 = this;
var inode__9061 = this;
var bit__9062 = (1 << ((hash >>> shift) & 0x01f));
var idx__9063 = cljs.core.bitmap_indexed_node_index.call(null,this__9060.bitmap,bit__9062);
if(((this__9060.bitmap & bit__9062) === 0))
{var n__9064 = cljs.core.bit_count.call(null,this__9060.bitmap);
if(((2 * n__9064) < this__9060.arr.length))
{var editable__9065 = inode__9061.ensure_editable(edit);
var earr__9066 = editable__9065.arr;
added_leaf_QMARK_.val = true;
cljs.core.array_copy_downward.call(null,earr__9066,(2 * idx__9063),earr__9066,(2 * (idx__9063 + 1)),(2 * (n__9064 - idx__9063)));
(earr__9066[(2 * idx__9063)] = key);
(earr__9066[((2 * idx__9063) + 1)] = val);
editable__9065.bitmap = (editable__9065.bitmap | bit__9062);
return editable__9065;
} else
{if((n__9064 >= 16))
{var nodes__9067 = cljs.core.make_array.call(null,32);
var jdx__9068 = ((hash >>> shift) & 0x01f);
(nodes__9067[jdx__9068] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
var i__9069 = 0;
var j__9070 = 0;
while(true){
if((i__9069 < 32))
{if((((this__9060.bitmap >>> i__9069) & 1) === 0))
{{
var G__9123 = (i__9069 + 1);
var G__9124 = j__9070;
i__9069 = G__9123;
j__9070 = G__9124;
continue;
}
} else
{(nodes__9067[i__9069] = ((!(((this__9060.arr[j__9070]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),cljs.core.hash.call(null,(this__9060.arr[j__9070])),(this__9060.arr[j__9070]),(this__9060.arr[(j__9070 + 1)]),added_leaf_QMARK_):(this__9060.arr[(j__9070 + 1)])));
{
var G__9125 = (i__9069 + 1);
var G__9126 = (j__9070 + 2);
i__9069 = G__9125;
j__9070 = G__9126;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit,(n__9064 + 1),nodes__9067));
} else
{if("\uFDD0'else")
{var new_arr__9071 = cljs.core.make_array.call(null,(2 * (n__9064 + 4)));
cljs.core.array_copy.call(null,this__9060.arr,0,new_arr__9071,0,(2 * idx__9063));
(new_arr__9071[(2 * idx__9063)] = key);
(new_arr__9071[((2 * idx__9063) + 1)] = val);
cljs.core.array_copy.call(null,this__9060.arr,(2 * idx__9063),new_arr__9071,(2 * (idx__9063 + 1)),(2 * (n__9064 - idx__9063)));
added_leaf_QMARK_.val = true;
var editable__9072 = inode__9061.ensure_editable(edit);
editable__9072.arr = new_arr__9071;
editable__9072.bitmap = (editable__9072.bitmap | bit__9062);
return editable__9072;
} else
{return null;
}
}
}
} else
{var key_or_nil__9073 = (this__9060.arr[(2 * idx__9063)]);
var val_or_node__9074 = (this__9060.arr[((2 * idx__9063) + 1)]);
if((key_or_nil__9073 == null))
{var n__9075 = val_or_node__9074.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__9075 === val_or_node__9074))
{return inode__9061;
} else
{return cljs.core.edit_and_set.call(null,inode__9061,edit,((2 * idx__9063) + 1),n__9075);
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9073))
{if((val === val_or_node__9074))
{return inode__9061;
} else
{return cljs.core.edit_and_set.call(null,inode__9061,edit,((2 * idx__9063) + 1),val);
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return cljs.core.edit_and_set.call(null,inode__9061,edit,(2 * idx__9063),null,((2 * idx__9063) + 1),cljs.core.create_node.call(null,edit,(shift + 5),key_or_nil__9073,val_or_node__9074,hash,key,val));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var this__9076 = this;
var inode__9077 = this;
return cljs.core.create_inode_seq.call(null,this__9076.arr);
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__9078 = this;
var inode__9079 = this;
var bit__9080 = (1 << ((hash >>> shift) & 0x01f));
if(((this__9078.bitmap & bit__9080) === 0))
{return inode__9079;
} else
{var idx__9081 = cljs.core.bitmap_indexed_node_index.call(null,this__9078.bitmap,bit__9080);
var key_or_nil__9082 = (this__9078.arr[(2 * idx__9081)]);
var val_or_node__9083 = (this__9078.arr[((2 * idx__9081) + 1)]);
if((key_or_nil__9082 == null))
{var n__9084 = val_or_node__9083.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__9084 === val_or_node__9083))
{return inode__9079;
} else
{if(!((n__9084 == null)))
{return cljs.core.edit_and_set.call(null,inode__9079,edit,((2 * idx__9081) + 1),n__9084);
} else
{if((this__9078.bitmap === bit__9080))
{return null;
} else
{if("\uFDD0'else")
{return inode__9079.edit_and_remove_pair(edit,bit__9080,idx__9081);
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9082))
{(removed_leaf_QMARK_[0] = true);
return inode__9079.edit_and_remove_pair(edit,bit__9080,idx__9081);
} else
{if("\uFDD0'else")
{return inode__9079;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var this__9085 = this;
var inode__9086 = this;
if((e === this__9085.edit))
{return inode__9086;
} else
{var n__9087 = cljs.core.bit_count.call(null,this__9085.bitmap);
var new_arr__9088 = cljs.core.make_array.call(null,(((n__9087 < 0))?4:(2 * (n__9087 + 1))));
cljs.core.array_copy.call(null,this__9085.arr,0,new_arr__9088,0,(2 * n__9087));
return (new cljs.core.BitmapIndexedNode(e,this__9085.bitmap,new_arr__9088));
}
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var this__9089 = this;
var inode__9090 = this;
return cljs.core.inode_kv_reduce.call(null,this__9089.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__9091 = this;
var inode__9092 = this;
var bit__9093 = (1 << ((hash >>> shift) & 0x01f));
if(((this__9091.bitmap & bit__9093) === 0))
{return not_found;
} else
{var idx__9094 = cljs.core.bitmap_indexed_node_index.call(null,this__9091.bitmap,bit__9093);
var key_or_nil__9095 = (this__9091.arr[(2 * idx__9094)]);
var val_or_node__9096 = (this__9091.arr[((2 * idx__9094) + 1)]);
if((key_or_nil__9095 == null))
{return val_or_node__9096.inode_find((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9095))
{return cljs.core.PersistentVector.fromArray([key_or_nil__9095,val_or_node__9096], true);
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
var this__9097 = this;
var inode__9098 = this;
var bit__9099 = (1 << ((hash >>> shift) & 0x01f));
if(((this__9097.bitmap & bit__9099) === 0))
{return inode__9098;
} else
{var idx__9100 = cljs.core.bitmap_indexed_node_index.call(null,this__9097.bitmap,bit__9099);
var key_or_nil__9101 = (this__9097.arr[(2 * idx__9100)]);
var val_or_node__9102 = (this__9097.arr[((2 * idx__9100) + 1)]);
if((key_or_nil__9101 == null))
{var n__9103 = val_or_node__9102.inode_without((shift + 5),hash,key);
if((n__9103 === val_or_node__9102))
{return inode__9098;
} else
{if(!((n__9103 == null)))
{return (new cljs.core.BitmapIndexedNode(null,this__9097.bitmap,cljs.core.clone_and_set.call(null,this__9097.arr,((2 * idx__9100) + 1),n__9103)));
} else
{if((this__9097.bitmap === bit__9099))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.BitmapIndexedNode(null,(this__9097.bitmap ^ bit__9099),cljs.core.remove_pair.call(null,this__9097.arr,idx__9100)));
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9101))
{return (new cljs.core.BitmapIndexedNode(null,(this__9097.bitmap ^ bit__9099),cljs.core.remove_pair.call(null,this__9097.arr,idx__9100)));
} else
{if("\uFDD0'else")
{return inode__9098;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__9104 = this;
var inode__9105 = this;
var bit__9106 = (1 << ((hash >>> shift) & 0x01f));
var idx__9107 = cljs.core.bitmap_indexed_node_index.call(null,this__9104.bitmap,bit__9106);
if(((this__9104.bitmap & bit__9106) === 0))
{var n__9108 = cljs.core.bit_count.call(null,this__9104.bitmap);
if((n__9108 >= 16))
{var nodes__9109 = cljs.core.make_array.call(null,32);
var jdx__9110 = ((hash >>> shift) & 0x01f);
(nodes__9109[jdx__9110] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_));
var i__9111 = 0;
var j__9112 = 0;
while(true){
if((i__9111 < 32))
{if((((this__9104.bitmap >>> i__9111) & 1) === 0))
{{
var G__9127 = (i__9111 + 1);
var G__9128 = j__9112;
i__9111 = G__9127;
j__9112 = G__9128;
continue;
}
} else
{(nodes__9109[i__9111] = ((!(((this__9104.arr[j__9112]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),cljs.core.hash.call(null,(this__9104.arr[j__9112])),(this__9104.arr[j__9112]),(this__9104.arr[(j__9112 + 1)]),added_leaf_QMARK_):(this__9104.arr[(j__9112 + 1)])));
{
var G__9129 = (i__9111 + 1);
var G__9130 = (j__9112 + 2);
i__9111 = G__9129;
j__9112 = G__9130;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n__9108 + 1),nodes__9109));
} else
{var new_arr__9113 = cljs.core.make_array.call(null,(2 * (n__9108 + 1)));
cljs.core.array_copy.call(null,this__9104.arr,0,new_arr__9113,0,(2 * idx__9107));
(new_arr__9113[(2 * idx__9107)] = key);
(new_arr__9113[((2 * idx__9107) + 1)] = val);
cljs.core.array_copy.call(null,this__9104.arr,(2 * idx__9107),new_arr__9113,(2 * (idx__9107 + 1)),(2 * (n__9108 - idx__9107)));
added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,(this__9104.bitmap | bit__9106),new_arr__9113));
}
} else
{var key_or_nil__9114 = (this__9104.arr[(2 * idx__9107)]);
var val_or_node__9115 = (this__9104.arr[((2 * idx__9107) + 1)]);
if((key_or_nil__9114 == null))
{var n__9116 = val_or_node__9115.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__9116 === val_or_node__9115))
{return inode__9105;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__9104.bitmap,cljs.core.clone_and_set.call(null,this__9104.arr,((2 * idx__9107) + 1),n__9116)));
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9114))
{if((val === val_or_node__9115))
{return inode__9105;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__9104.bitmap,cljs.core.clone_and_set.call(null,this__9104.arr,((2 * idx__9107) + 1),val)));
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,this__9104.bitmap,cljs.core.clone_and_set.call(null,this__9104.arr,(2 * idx__9107),null,((2 * idx__9107) + 1),cljs.core.create_node.call(null,(shift + 5),key_or_nil__9114,val_or_node__9115,hash,key,val))));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__9117 = this;
var inode__9118 = this;
var bit__9119 = (1 << ((hash >>> shift) & 0x01f));
if(((this__9117.bitmap & bit__9119) === 0))
{return not_found;
} else
{var idx__9120 = cljs.core.bitmap_indexed_node_index.call(null,this__9117.bitmap,bit__9119);
var key_or_nil__9121 = (this__9117.arr[(2 * idx__9120)]);
var val_or_node__9122 = (this__9117.arr[((2 * idx__9120) + 1)]);
if((key_or_nil__9121 == null))
{return val_or_node__9122.inode_lookup((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9121))
{return val_or_node__9122;
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
var arr__9138 = array_node.arr;
var len__9139 = (2 * (array_node.cnt - 1));
var new_arr__9140 = cljs.core.make_array.call(null,len__9139);
var i__9141 = 0;
var j__9142 = 1;
var bitmap__9143 = 0;
while(true){
if((i__9141 < len__9139))
{if((function (){var and__3822__auto____9144 = !((i__9141 === idx));
if(and__3822__auto____9144)
{return !(((arr__9138[i__9141]) == null));
} else
{return and__3822__auto____9144;
}
})())
{(new_arr__9140[j__9142] = (arr__9138[i__9141]));
{
var G__9145 = (i__9141 + 1);
var G__9146 = (j__9142 + 2);
var G__9147 = (bitmap__9143 | (1 << i__9141));
i__9141 = G__9145;
j__9142 = G__9146;
bitmap__9143 = G__9147;
continue;
}
} else
{{
var G__9148 = (i__9141 + 1);
var G__9149 = j__9142;
var G__9150 = bitmap__9143;
i__9141 = G__9148;
j__9142 = G__9149;
bitmap__9143 = G__9150;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap__9143,new_arr__9140));
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
var this__9151 = this;
var inode__9152 = this;
var idx__9153 = ((hash >>> shift) & 0x01f);
var node__9154 = (this__9151.arr[idx__9153]);
if((node__9154 == null))
{var editable__9155 = cljs.core.edit_and_set.call(null,inode__9152,edit,idx__9153,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
editable__9155.cnt = (editable__9155.cnt + 1);
return editable__9155;
} else
{var n__9156 = node__9154.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__9156 === node__9154))
{return inode__9152;
} else
{return cljs.core.edit_and_set.call(null,inode__9152,edit,idx__9153,n__9156);
}
}
});
cljs.core.ArrayNode.prototype.inode_seq = (function (){
var this__9157 = this;
var inode__9158 = this;
return cljs.core.create_array_node_seq.call(null,this__9157.arr);
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__9159 = this;
var inode__9160 = this;
var idx__9161 = ((hash >>> shift) & 0x01f);
var node__9162 = (this__9159.arr[idx__9161]);
if((node__9162 == null))
{return inode__9160;
} else
{var n__9163 = node__9162.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__9163 === node__9162))
{return inode__9160;
} else
{if((n__9163 == null))
{if((this__9159.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__9160,edit,idx__9161);
} else
{var editable__9164 = cljs.core.edit_and_set.call(null,inode__9160,edit,idx__9161,n__9163);
editable__9164.cnt = (editable__9164.cnt - 1);
return editable__9164;
}
} else
{if("\uFDD0'else")
{return cljs.core.edit_and_set.call(null,inode__9160,edit,idx__9161,n__9163);
} else
{return null;
}
}
}
}
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var this__9165 = this;
var inode__9166 = this;
if((e === this__9165.edit))
{return inode__9166;
} else
{return (new cljs.core.ArrayNode(e,this__9165.cnt,this__9165.arr.slice()));
}
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var this__9167 = this;
var inode__9168 = this;
var len__9169 = this__9167.arr.length;
var i__9170 = 0;
var init__9171 = init;
while(true){
if((i__9170 < len__9169))
{var node__9172 = (this__9167.arr[i__9170]);
if(!((node__9172 == null)))
{var init__9173 = node__9172.kv_reduce(f,init__9171);
if(cljs.core.reduced_QMARK_.call(null,init__9173))
{return cljs.core.deref.call(null,init__9173);
} else
{{
var G__9192 = (i__9170 + 1);
var G__9193 = init__9173;
i__9170 = G__9192;
init__9171 = G__9193;
continue;
}
}
} else
{return null;
}
} else
{return init__9171;
}
break;
}
});
cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__9174 = this;
var inode__9175 = this;
var idx__9176 = ((hash >>> shift) & 0x01f);
var node__9177 = (this__9174.arr[idx__9176]);
if(!((node__9177 == null)))
{return node__9177.inode_find((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var this__9178 = this;
var inode__9179 = this;
var idx__9180 = ((hash >>> shift) & 0x01f);
var node__9181 = (this__9178.arr[idx__9180]);
if(!((node__9181 == null)))
{var n__9182 = node__9181.inode_without((shift + 5),hash,key);
if((n__9182 === node__9181))
{return inode__9179;
} else
{if((n__9182 == null))
{if((this__9178.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__9179,null,idx__9180);
} else
{return (new cljs.core.ArrayNode(null,(this__9178.cnt - 1),cljs.core.clone_and_set.call(null,this__9178.arr,idx__9180,n__9182)));
}
} else
{if("\uFDD0'else")
{return (new cljs.core.ArrayNode(null,this__9178.cnt,cljs.core.clone_and_set.call(null,this__9178.arr,idx__9180,n__9182)));
} else
{return null;
}
}
}
} else
{return inode__9179;
}
});
cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__9183 = this;
var inode__9184 = this;
var idx__9185 = ((hash >>> shift) & 0x01f);
var node__9186 = (this__9183.arr[idx__9185]);
if((node__9186 == null))
{return (new cljs.core.ArrayNode(null,(this__9183.cnt + 1),cljs.core.clone_and_set.call(null,this__9183.arr,idx__9185,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_))));
} else
{var n__9187 = node__9186.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__9187 === node__9186))
{return inode__9184;
} else
{return (new cljs.core.ArrayNode(null,this__9183.cnt,cljs.core.clone_and_set.call(null,this__9183.arr,idx__9185,n__9187)));
}
}
});
cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__9188 = this;
var inode__9189 = this;
var idx__9190 = ((hash >>> shift) & 0x01f);
var node__9191 = (this__9188.arr[idx__9190]);
if(!((node__9191 == null)))
{return node__9191.inode_lookup((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode;
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim__9196 = (2 * cnt);
var i__9197 = 0;
while(true){
if((i__9197 < lim__9196))
{if(cljs.core.key_test.call(null,key,(arr[i__9197])))
{return i__9197;
} else
{{
var G__9198 = (i__9197 + 2);
i__9197 = G__9198;
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
var this__9199 = this;
var inode__9200 = this;
if((hash === this__9199.collision_hash))
{var idx__9201 = cljs.core.hash_collision_node_find_index.call(null,this__9199.arr,this__9199.cnt,key);
if((idx__9201 === -1))
{if((this__9199.arr.length > (2 * this__9199.cnt)))
{var editable__9202 = cljs.core.edit_and_set.call(null,inode__9200,edit,(2 * this__9199.cnt),key,((2 * this__9199.cnt) + 1),val);
added_leaf_QMARK_.val = true;
editable__9202.cnt = (editable__9202.cnt + 1);
return editable__9202;
} else
{var len__9203 = this__9199.arr.length;
var new_arr__9204 = cljs.core.make_array.call(null,(len__9203 + 2));
cljs.core.array_copy.call(null,this__9199.arr,0,new_arr__9204,0,len__9203);
(new_arr__9204[len__9203] = key);
(new_arr__9204[(len__9203 + 1)] = val);
added_leaf_QMARK_.val = true;
return inode__9200.ensure_editable_array(edit,(this__9199.cnt + 1),new_arr__9204);
}
} else
{if(((this__9199.arr[(idx__9201 + 1)]) === val))
{return inode__9200;
} else
{return cljs.core.edit_and_set.call(null,inode__9200,edit,(idx__9201 + 1),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,(1 << ((this__9199.collision_hash >>> shift) & 0x01f)),[null,inode__9200,null,null])).inode_assoc_BANG_(edit,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var this__9205 = this;
var inode__9206 = this;
return cljs.core.create_inode_seq.call(null,this__9205.arr);
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__9207 = this;
var inode__9208 = this;
var idx__9209 = cljs.core.hash_collision_node_find_index.call(null,this__9207.arr,this__9207.cnt,key);
if((idx__9209 === -1))
{return inode__9208;
} else
{(removed_leaf_QMARK_[0] = true);
if((this__9207.cnt === 1))
{return null;
} else
{var editable__9210 = inode__9208.ensure_editable(edit);
var earr__9211 = editable__9210.arr;
(earr__9211[idx__9209] = (earr__9211[((2 * this__9207.cnt) - 2)]));
(earr__9211[(idx__9209 + 1)] = (earr__9211[((2 * this__9207.cnt) - 1)]));
(earr__9211[((2 * this__9207.cnt) - 1)] = null);
(earr__9211[((2 * this__9207.cnt) - 2)] = null);
editable__9210.cnt = (editable__9210.cnt - 1);
return editable__9210;
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){
var this__9212 = this;
var inode__9213 = this;
if((e === this__9212.edit))
{return inode__9213;
} else
{var new_arr__9214 = cljs.core.make_array.call(null,(2 * (this__9212.cnt + 1)));
cljs.core.array_copy.call(null,this__9212.arr,0,new_arr__9214,0,(2 * this__9212.cnt));
return (new cljs.core.HashCollisionNode(e,this__9212.collision_hash,this__9212.cnt,new_arr__9214));
}
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var this__9215 = this;
var inode__9216 = this;
return cljs.core.inode_kv_reduce.call(null,this__9215.arr,f,init);
});
cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__9217 = this;
var inode__9218 = this;
var idx__9219 = cljs.core.hash_collision_node_find_index.call(null,this__9217.arr,this__9217.cnt,key);
if((idx__9219 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__9217.arr[idx__9219])))
{return cljs.core.PersistentVector.fromArray([(this__9217.arr[idx__9219]),(this__9217.arr[(idx__9219 + 1)])], true);
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
var this__9220 = this;
var inode__9221 = this;
var idx__9222 = cljs.core.hash_collision_node_find_index.call(null,this__9220.arr,this__9220.cnt,key);
if((idx__9222 === -1))
{return inode__9221;
} else
{if((this__9220.cnt === 1))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.HashCollisionNode(null,this__9220.collision_hash,(this__9220.cnt - 1),cljs.core.remove_pair.call(null,this__9220.arr,cljs.core.quot.call(null,idx__9222,2))));
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__9223 = this;
var inode__9224 = this;
if((hash === this__9223.collision_hash))
{var idx__9225 = cljs.core.hash_collision_node_find_index.call(null,this__9223.arr,this__9223.cnt,key);
if((idx__9225 === -1))
{var len__9226 = this__9223.arr.length;
var new_arr__9227 = cljs.core.make_array.call(null,(len__9226 + 2));
cljs.core.array_copy.call(null,this__9223.arr,0,new_arr__9227,0,len__9226);
(new_arr__9227[len__9226] = key);
(new_arr__9227[(len__9226 + 1)] = val);
added_leaf_QMARK_.val = true;
return (new cljs.core.HashCollisionNode(null,this__9223.collision_hash,(this__9223.cnt + 1),new_arr__9227));
} else
{if(cljs.core._EQ_.call(null,(this__9223.arr[idx__9225]),val))
{return inode__9224;
} else
{return (new cljs.core.HashCollisionNode(null,this__9223.collision_hash,this__9223.cnt,cljs.core.clone_and_set.call(null,this__9223.arr,(idx__9225 + 1),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((this__9223.collision_hash >>> shift) & 0x01f)),[null,inode__9224])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__9228 = this;
var inode__9229 = this;
var idx__9230 = cljs.core.hash_collision_node_find_index.call(null,this__9228.arr,this__9228.cnt,key);
if((idx__9230 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__9228.arr[idx__9230])))
{return (this__9228.arr[(idx__9230 + 1)]);
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
var this__9231 = this;
var inode__9232 = this;
if((e === this__9231.edit))
{this__9231.arr = array;
this__9231.cnt = count;
return inode__9232;
} else
{return (new cljs.core.HashCollisionNode(this__9231.edit,this__9231.collision_hash,count,array));
}
});
cljs.core.HashCollisionNode;
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash__9237 = cljs.core.hash.call(null,key1);
if((key1hash__9237 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__9237,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___9238 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash__9237,key1,val1,added_leaf_QMARK___9238).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK___9238);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash__9239 = cljs.core.hash.call(null,key1);
if((key1hash__9239 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__9239,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___9240 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash__9239,key1,val1,added_leaf_QMARK___9240).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK___9240);
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
var this__9241 = this;
var h__2340__auto____9242 = this__9241.__hash;
if(!((h__2340__auto____9242 == null)))
{return h__2340__auto____9242;
} else
{var h__2340__auto____9243 = cljs.core.hash_coll.call(null,coll);
this__9241.__hash = h__2340__auto____9243;
return h__2340__auto____9243;
}
});
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9244 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.NodeSeq.prototype.toString = (function (){
var this__9245 = this;
var this__9246 = this;
return cljs.core.pr_str.call(null,this__9246);
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__9247 = this;
return this$;
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9248 = this;
if((this__9248.s == null))
{return cljs.core.PersistentVector.fromArray([(this__9248.nodes[this__9248.i]),(this__9248.nodes[(this__9248.i + 1)])], true);
} else
{return cljs.core.first.call(null,this__9248.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9249 = this;
if((this__9249.s == null))
{return cljs.core.create_inode_seq.call(null,this__9249.nodes,(this__9249.i + 2),null);
} else
{return cljs.core.create_inode_seq.call(null,this__9249.nodes,this__9249.i,cljs.core.next.call(null,this__9249.s));
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9250 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9251 = this;
return (new cljs.core.NodeSeq(meta,this__9251.nodes,this__9251.i,this__9251.s,this__9251.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9252 = this;
return this__9252.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9253 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9253.meta);
});
cljs.core.NodeSeq;
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.call(null,nodes,0,null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null))
{var len__9260 = nodes.length;
var j__9261 = i;
while(true){
if((j__9261 < len__9260))
{if(!(((nodes[j__9261]) == null)))
{return (new cljs.core.NodeSeq(null,nodes,j__9261,null,null));
} else
{var temp__3971__auto____9262 = (nodes[(j__9261 + 1)]);
if(cljs.core.truth_(temp__3971__auto____9262))
{var node__9263 = temp__3971__auto____9262;
var temp__3971__auto____9264 = node__9263.inode_seq();
if(cljs.core.truth_(temp__3971__auto____9264))
{var node_seq__9265 = temp__3971__auto____9264;
return (new cljs.core.NodeSeq(null,nodes,(j__9261 + 2),node_seq__9265,null));
} else
{{
var G__9266 = (j__9261 + 2);
j__9261 = G__9266;
continue;
}
}
} else
{{
var G__9267 = (j__9261 + 2);
j__9261 = G__9267;
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
var this__9268 = this;
var h__2340__auto____9269 = this__9268.__hash;
if(!((h__2340__auto____9269 == null)))
{return h__2340__auto____9269;
} else
{var h__2340__auto____9270 = cljs.core.hash_coll.call(null,coll);
this__9268.__hash = h__2340__auto____9270;
return h__2340__auto____9270;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9271 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var this__9272 = this;
var this__9273 = this;
return cljs.core.pr_str.call(null,this__9273);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__9274 = this;
return this$;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9275 = this;
return cljs.core.first.call(null,this__9275.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9276 = this;
return cljs.core.create_array_node_seq.call(null,null,this__9276.nodes,this__9276.i,cljs.core.next.call(null,this__9276.s));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9277 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9278 = this;
return (new cljs.core.ArrayNodeSeq(meta,this__9278.nodes,this__9278.i,this__9278.s,this__9278.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9279 = this;
return this__9279.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9280 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9280.meta);
});
cljs.core.ArrayNodeSeq;
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.call(null,null,nodes,0,null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null))
{var len__9287 = nodes.length;
var j__9288 = i;
while(true){
if((j__9288 < len__9287))
{var temp__3971__auto____9289 = (nodes[j__9288]);
if(cljs.core.truth_(temp__3971__auto____9289))
{var nj__9290 = temp__3971__auto____9289;
var temp__3971__auto____9291 = nj__9290.inode_seq();
if(cljs.core.truth_(temp__3971__auto____9291))
{var ns__9292 = temp__3971__auto____9291;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j__9288 + 1),ns__9292,null));
} else
{{
var G__9293 = (j__9288 + 1);
j__9288 = G__9293;
continue;
}
}
} else
{{
var G__9294 = (j__9288 + 1);
j__9288 = G__9294;
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
var this__9297 = this;
return (new cljs.core.TransientHashMap({},this__9297.root,this__9297.cnt,this__9297.has_nil_QMARK_,this__9297.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9298 = this;
var h__2340__auto____9299 = this__9298.__hash;
if(!((h__2340__auto____9299 == null)))
{return h__2340__auto____9299;
} else
{var h__2340__auto____9300 = cljs.core.hash_imap.call(null,coll);
this__9298.__hash = h__2340__auto____9300;
return h__2340__auto____9300;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9301 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9302 = this;
if((k == null))
{if(this__9302.has_nil_QMARK_)
{return this__9302.nil_val;
} else
{return not_found;
}
} else
{if((this__9302.root == null))
{return not_found;
} else
{if("\uFDD0'else")
{return this__9302.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9303 = this;
if((k == null))
{if((function (){var and__3822__auto____9304 = this__9303.has_nil_QMARK_;
if(and__3822__auto____9304)
{return (v === this__9303.nil_val);
} else
{return and__3822__auto____9304;
}
})())
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__9303.meta,((this__9303.has_nil_QMARK_)?this__9303.cnt:(this__9303.cnt + 1)),this__9303.root,true,v,null));
}
} else
{var added_leaf_QMARK___9305 = (new cljs.core.Box(false));
var new_root__9306 = (((this__9303.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__9303.root).inode_assoc(0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___9305);
if((new_root__9306 === this__9303.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__9303.meta,((added_leaf_QMARK___9305.val)?(this__9303.cnt + 1):this__9303.cnt),new_root__9306,this__9303.has_nil_QMARK_,this__9303.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__9307 = this;
if((k == null))
{return this__9307.has_nil_QMARK_;
} else
{if((this__9307.root == null))
{return false;
} else
{if("\uFDD0'else")
{return !((this__9307.root.inode_lookup(0,cljs.core.hash.call(null,k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__9330 = null;
var G__9330__2 = (function (this_sym9308,k){
var this__9310 = this;
var this_sym9308__9311 = this;
var coll__9312 = this_sym9308__9311;
return coll__9312.cljs$core$ILookup$_lookup$arity$2(coll__9312,k);
});
var G__9330__3 = (function (this_sym9309,k,not_found){
var this__9310 = this;
var this_sym9309__9313 = this;
var coll__9314 = this_sym9309__9313;
return coll__9314.cljs$core$ILookup$_lookup$arity$3(coll__9314,k,not_found);
});
G__9330 = function(this_sym9309,k,not_found){
switch(arguments.length){
case 2:
return G__9330__2.call(this,this_sym9309,k);
case 3:
return G__9330__3.call(this,this_sym9309,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9330;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (this_sym9295,args9296){
var this__9315 = this;
return this_sym9295.call.apply(this_sym9295,[this_sym9295].concat(args9296.slice()));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__9316 = this;
var init__9317 = ((this__9316.has_nil_QMARK_)?f.call(null,init,null,this__9316.nil_val):init);
if(cljs.core.reduced_QMARK_.call(null,init__9317))
{return cljs.core.deref.call(null,init__9317);
} else
{if(!((this__9316.root == null)))
{return this__9316.root.kv_reduce(f,init__9317);
} else
{if("\uFDD0'else")
{return init__9317;
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__9318 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentHashMap.prototype.toString = (function (){
var this__9319 = this;
var this__9320 = this;
return cljs.core.pr_str.call(null,this__9320);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9321 = this;
if((this__9321.cnt > 0))
{var s__9322 = ((!((this__9321.root == null)))?this__9321.root.inode_seq():null);
if(this__9321.has_nil_QMARK_)
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([null,this__9321.nil_val], true),s__9322);
} else
{return s__9322;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9323 = this;
return this__9323.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9324 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9325 = this;
return (new cljs.core.PersistentHashMap(meta,this__9325.cnt,this__9325.root,this__9325.has_nil_QMARK_,this__9325.nil_val,this__9325.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9326 = this;
return this__9326.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9327 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,this__9327.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__9328 = this;
if((k == null))
{if(this__9328.has_nil_QMARK_)
{return (new cljs.core.PersistentHashMap(this__9328.meta,(this__9328.cnt - 1),this__9328.root,false,null,null));
} else
{return coll;
}
} else
{if((this__9328.root == null))
{return coll;
} else
{if("\uFDD0'else")
{var new_root__9329 = this__9328.root.inode_without(0,cljs.core.hash.call(null,k),k);
if((new_root__9329 === this__9328.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__9328.meta,(this__9328.cnt - 1),new_root__9329,this__9328.has_nil_QMARK_,this__9328.nil_val,null));
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
var len__9331 = ks.length;
var i__9332 = 0;
var out__9333 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i__9332 < len__9331))
{{
var G__9334 = (i__9332 + 1);
var G__9335 = cljs.core.assoc_BANG_.call(null,out__9333,(ks[i__9332]),(vs[i__9332]));
i__9332 = G__9334;
out__9333 = G__9335;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9333);
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
var this__9336 = this;
return tcoll.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__9337 = this;
return tcoll.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var this__9338 = this;
return tcoll.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__9339 = this;
return tcoll.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__9340 = this;
if((k == null))
{if(this__9340.has_nil_QMARK_)
{return this__9340.nil_val;
} else
{return null;
}
} else
{if((this__9340.root == null))
{return null;
} else
{return this__9340.root.inode_lookup(0,cljs.core.hash.call(null,k),k);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__9341 = this;
if((k == null))
{if(this__9341.has_nil_QMARK_)
{return this__9341.nil_val;
} else
{return not_found;
}
} else
{if((this__9341.root == null))
{return not_found;
} else
{return this__9341.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9342 = this;
if(this__9342.edit)
{return this__9342.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var this__9343 = this;
var tcoll__9344 = this;
if(this__9343.edit)
{if((function (){var G__9345__9346 = o;
if(G__9345__9346)
{if((function (){var or__3824__auto____9347 = (G__9345__9346.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____9347)
{return or__3824__auto____9347;
} else
{return G__9345__9346.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__9345__9346.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__9345__9346);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__9345__9346);
}
})())
{return tcoll__9344.assoc_BANG_(cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__9348 = cljs.core.seq.call(null,o);
var tcoll__9349 = tcoll__9344;
while(true){
var temp__3971__auto____9350 = cljs.core.first.call(null,es__9348);
if(cljs.core.truth_(temp__3971__auto____9350))
{var e__9351 = temp__3971__auto____9350;
{
var G__9362 = cljs.core.next.call(null,es__9348);
var G__9363 = tcoll__9349.assoc_BANG_(cljs.core.key.call(null,e__9351),cljs.core.val.call(null,e__9351));
es__9348 = G__9362;
tcoll__9349 = G__9363;
continue;
}
} else
{return tcoll__9349;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var this__9352 = this;
var tcoll__9353 = this;
if(this__9352.edit)
{if((k == null))
{if((this__9352.nil_val === v))
{} else
{this__9352.nil_val = v;
}
if(this__9352.has_nil_QMARK_)
{} else
{this__9352.count = (this__9352.count + 1);
this__9352.has_nil_QMARK_ = true;
}
return tcoll__9353;
} else
{var added_leaf_QMARK___9354 = (new cljs.core.Box(false));
var node__9355 = (((this__9352.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__9352.root).inode_assoc_BANG_(this__9352.edit,0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___9354);
if((node__9355 === this__9352.root))
{} else
{this__9352.root = node__9355;
}
if(added_leaf_QMARK___9354.val)
{this__9352.count = (this__9352.count + 1);
} else
{}
return tcoll__9353;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var this__9356 = this;
var tcoll__9357 = this;
if(this__9356.edit)
{if((k == null))
{if(this__9356.has_nil_QMARK_)
{this__9356.has_nil_QMARK_ = false;
this__9356.nil_val = null;
this__9356.count = (this__9356.count - 1);
return tcoll__9357;
} else
{return tcoll__9357;
}
} else
{if((this__9356.root == null))
{return tcoll__9357;
} else
{var removed_leaf_QMARK___9358 = (new cljs.core.Box(false));
var node__9359 = this__9356.root.inode_without_BANG_(this__9356.edit,0,cljs.core.hash.call(null,k),k,removed_leaf_QMARK___9358);
if((node__9359 === this__9356.root))
{} else
{this__9356.root = node__9359;
}
if(cljs.core.truth_((removed_leaf_QMARK___9358[0])))
{this__9356.count = (this__9356.count - 1);
} else
{}
return tcoll__9357;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var this__9360 = this;
var tcoll__9361 = this;
if(this__9360.edit)
{this__9360.edit = null;
return (new cljs.core.PersistentHashMap(null,this__9360.count,this__9360.root,this__9360.has_nil_QMARK_,this__9360.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientHashMap;
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t__9366 = node;
var stack__9367 = stack;
while(true){
if(!((t__9366 == null)))
{{
var G__9368 = ((ascending_QMARK_)?t__9366.left:t__9366.right);
var G__9369 = cljs.core.conj.call(null,stack__9367,t__9366);
t__9366 = G__9368;
stack__9367 = G__9369;
continue;
}
} else
{return stack__9367;
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
var this__9370 = this;
var h__2340__auto____9371 = this__9370.__hash;
if(!((h__2340__auto____9371 == null)))
{return h__2340__auto____9371;
} else
{var h__2340__auto____9372 = cljs.core.hash_coll.call(null,coll);
this__9370.__hash = h__2340__auto____9372;
return h__2340__auto____9372;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9373 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var this__9374 = this;
var this__9375 = this;
return cljs.core.pr_str.call(null,this__9375);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__9376 = this;
return this$;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9377 = this;
if((this__9377.cnt < 0))
{return (cljs.core.count.call(null,cljs.core.next.call(null,coll)) + 1);
} else
{return this__9377.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this__9378 = this;
return cljs.core.peek.call(null,this__9378.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this__9379 = this;
var t__9380 = cljs.core.first.call(null,this__9379.stack);
var next_stack__9381 = cljs.core.tree_map_seq_push.call(null,((this__9379.ascending_QMARK_)?t__9380.right:t__9380.left),cljs.core.next.call(null,this__9379.stack),this__9379.ascending_QMARK_);
if(!((next_stack__9381 == null)))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack__9381,this__9379.ascending_QMARK_,(this__9379.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9382 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9383 = this;
return (new cljs.core.PersistentTreeMapSeq(meta,this__9383.stack,this__9383.ascending_QMARK_,this__9383.cnt,this__9383.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9384 = this;
return this__9384.meta;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9385 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9385.meta);
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
{if((function (){var and__3822__auto____9387 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right);
if(and__3822__auto____9387)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right.left);
} else
{return and__3822__auto____9387;
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
{if((function (){var and__3822__auto____9389 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left);
if(and__3822__auto____9389)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left.right);
} else
{return and__3822__auto____9389;
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
var init__9393 = f.call(null,init,node.key,node.val);
if(cljs.core.reduced_QMARK_.call(null,init__9393))
{return cljs.core.deref.call(null,init__9393);
} else
{var init__9394 = ((!((node.left == null)))?tree_map_kv_reduce.call(null,node.left,f,init__9393):init__9393);
if(cljs.core.reduced_QMARK_.call(null,init__9394))
{return cljs.core.deref.call(null,init__9394);
} else
{var init__9395 = ((!((node.right == null)))?tree_map_kv_reduce.call(null,node.right,f,init__9394):init__9394);
if(cljs.core.reduced_QMARK_.call(null,init__9395))
{return cljs.core.deref.call(null,init__9395);
} else
{return init__9395;
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
var this__9398 = this;
var h__2340__auto____9399 = this__9398.__hash;
if(!((h__2340__auto____9399 == null)))
{return h__2340__auto____9399;
} else
{var h__2340__auto____9400 = cljs.core.hash_coll.call(null,coll);
this__9398.__hash = h__2340__auto____9400;
return h__2340__auto____9400;
}
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__9401 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__9402 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__9403 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__9403.key,this__9403.val], true),k,v);
});
cljs.core.BlackNode.prototype.call = (function() {
var G__9451 = null;
var G__9451__2 = (function (this_sym9404,k){
var this__9406 = this;
var this_sym9404__9407 = this;
var node__9408 = this_sym9404__9407;
return node__9408.cljs$core$ILookup$_lookup$arity$2(node__9408,k);
});
var G__9451__3 = (function (this_sym9405,k,not_found){
var this__9406 = this;
var this_sym9405__9409 = this;
var node__9410 = this_sym9405__9409;
return node__9410.cljs$core$ILookup$_lookup$arity$3(node__9410,k,not_found);
});
G__9451 = function(this_sym9405,k,not_found){
switch(arguments.length){
case 2:
return G__9451__2.call(this,this_sym9405,k);
case 3:
return G__9451__3.call(this,this_sym9405,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9451;
})()
;
cljs.core.BlackNode.prototype.apply = (function (this_sym9396,args9397){
var this__9411 = this;
return this_sym9396.call.apply(this_sym9396,[this_sym9396].concat(args9397.slice()));
});
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__9412 = this;
return cljs.core.PersistentVector.fromArray([this__9412.key,this__9412.val,o], true);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__9413 = this;
return this__9413.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__9414 = this;
return this__9414.val;
});
cljs.core.BlackNode.prototype.add_right = (function (ins){
var this__9415 = this;
var node__9416 = this;
return ins.balance_right(node__9416);
});
cljs.core.BlackNode.prototype.redden = (function (){
var this__9417 = this;
var node__9418 = this;
return (new cljs.core.RedNode(this__9417.key,this__9417.val,this__9417.left,this__9417.right,null));
});
cljs.core.BlackNode.prototype.remove_right = (function (del){
var this__9419 = this;
var node__9420 = this;
return cljs.core.balance_right_del.call(null,this__9419.key,this__9419.val,this__9419.left,del);
});
cljs.core.BlackNode.prototype.replace = (function (key,val,left,right){
var this__9421 = this;
var node__9422 = this;
return (new cljs.core.BlackNode(key,val,left,right,null));
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var this__9423 = this;
var node__9424 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__9424,f,init);
});
cljs.core.BlackNode.prototype.remove_left = (function (del){
var this__9425 = this;
var node__9426 = this;
return cljs.core.balance_left_del.call(null,this__9425.key,this__9425.val,del,this__9425.right);
});
cljs.core.BlackNode.prototype.add_left = (function (ins){
var this__9427 = this;
var node__9428 = this;
return ins.balance_left(node__9428);
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){
var this__9429 = this;
var node__9430 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node__9430,parent.right,null));
});
cljs.core.BlackNode.prototype.toString = (function() {
var G__9452 = null;
var G__9452__0 = (function (){
var this__9431 = this;
var this__9433 = this;
return cljs.core.pr_str.call(null,this__9433);
});
G__9452 = function(){
switch(arguments.length){
case 0:
return G__9452__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9452;
})()
;
cljs.core.BlackNode.prototype.balance_right = (function (parent){
var this__9434 = this;
var node__9435 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__9435,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){
var this__9436 = this;
var node__9437 = this;
return node__9437;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__9438 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__9439 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__9440 = this;
return cljs.core.list.call(null,this__9440.key,this__9440.val);
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__9441 = this;
return 2;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__9442 = this;
return this__9442.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__9443 = this;
return cljs.core.PersistentVector.fromArray([this__9443.key], true);
});
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__9444 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__9444.key,this__9444.val], true),n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9445 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__9446 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__9446.key,this__9446.val], true),meta);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__9447 = this;
return null;
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__9448 = this;
if((n === 0))
{return this__9448.key;
} else
{if((n === 1))
{return this__9448.val;
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
var this__9449 = this;
if((n === 0))
{return this__9449.key;
} else
{if((n === 1))
{return this__9449.val;
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
var this__9450 = this;
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
var this__9455 = this;
var h__2340__auto____9456 = this__9455.__hash;
if(!((h__2340__auto____9456 == null)))
{return h__2340__auto____9456;
} else
{var h__2340__auto____9457 = cljs.core.hash_coll.call(null,coll);
this__9455.__hash = h__2340__auto____9457;
return h__2340__auto____9457;
}
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__9458 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__9459 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__9460 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__9460.key,this__9460.val], true),k,v);
});
cljs.core.RedNode.prototype.call = (function() {
var G__9508 = null;
var G__9508__2 = (function (this_sym9461,k){
var this__9463 = this;
var this_sym9461__9464 = this;
var node__9465 = this_sym9461__9464;
return node__9465.cljs$core$ILookup$_lookup$arity$2(node__9465,k);
});
var G__9508__3 = (function (this_sym9462,k,not_found){
var this__9463 = this;
var this_sym9462__9466 = this;
var node__9467 = this_sym9462__9466;
return node__9467.cljs$core$ILookup$_lookup$arity$3(node__9467,k,not_found);
});
G__9508 = function(this_sym9462,k,not_found){
switch(arguments.length){
case 2:
return G__9508__2.call(this,this_sym9462,k);
case 3:
return G__9508__3.call(this,this_sym9462,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9508;
})()
;
cljs.core.RedNode.prototype.apply = (function (this_sym9453,args9454){
var this__9468 = this;
return this_sym9453.call.apply(this_sym9453,[this_sym9453].concat(args9454.slice()));
});
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__9469 = this;
return cljs.core.PersistentVector.fromArray([this__9469.key,this__9469.val,o], true);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__9470 = this;
return this__9470.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__9471 = this;
return this__9471.val;
});
cljs.core.RedNode.prototype.add_right = (function (ins){
var this__9472 = this;
var node__9473 = this;
return (new cljs.core.RedNode(this__9472.key,this__9472.val,this__9472.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){
var this__9474 = this;
var node__9475 = this;
throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.remove_right = (function (del){
var this__9476 = this;
var node__9477 = this;
return (new cljs.core.RedNode(this__9476.key,this__9476.val,this__9476.left,del,null));
});
cljs.core.RedNode.prototype.replace = (function (key,val,left,right){
var this__9478 = this;
var node__9479 = this;
return (new cljs.core.RedNode(key,val,left,right,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var this__9480 = this;
var node__9481 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__9481,f,init);
});
cljs.core.RedNode.prototype.remove_left = (function (del){
var this__9482 = this;
var node__9483 = this;
return (new cljs.core.RedNode(this__9482.key,this__9482.val,del,this__9482.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){
var this__9484 = this;
var node__9485 = this;
return (new cljs.core.RedNode(this__9484.key,this__9484.val,ins,this__9484.right,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){
var this__9486 = this;
var node__9487 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__9486.left))
{return (new cljs.core.RedNode(this__9486.key,this__9486.val,this__9486.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,this__9486.right,parent.right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__9486.right))
{return (new cljs.core.RedNode(this__9486.right.key,this__9486.right.val,(new cljs.core.BlackNode(this__9486.key,this__9486.val,this__9486.left,this__9486.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,this__9486.right.right,parent.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,node__9487,parent.right,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.toString = (function() {
var G__9509 = null;
var G__9509__0 = (function (){
var this__9488 = this;
var this__9490 = this;
return cljs.core.pr_str.call(null,this__9490);
});
G__9509 = function(){
switch(arguments.length){
case 0:
return G__9509__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9509;
})()
;
cljs.core.RedNode.prototype.balance_right = (function (parent){
var this__9491 = this;
var node__9492 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__9491.right))
{return (new cljs.core.RedNode(this__9491.key,this__9491.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__9491.left,null)),this__9491.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__9491.left))
{return (new cljs.core.RedNode(this__9491.left.key,this__9491.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__9491.left.left,null)),(new cljs.core.BlackNode(this__9491.key,this__9491.val,this__9491.left.right,this__9491.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__9492,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.blacken = (function (){
var this__9493 = this;
var node__9494 = this;
return (new cljs.core.BlackNode(this__9493.key,this__9493.val,this__9493.left,this__9493.right,null));
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__9495 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__9496 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__9497 = this;
return cljs.core.list.call(null,this__9497.key,this__9497.val);
});
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__9498 = this;
return 2;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__9499 = this;
return this__9499.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__9500 = this;
return cljs.core.PersistentVector.fromArray([this__9500.key], true);
});
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__9501 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__9501.key,this__9501.val], true),n,v);
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9502 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__9503 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__9503.key,this__9503.val], true),meta);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__9504 = this;
return null;
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__9505 = this;
if((n === 0))
{return this__9505.key;
} else
{if((n === 1))
{return this__9505.val;
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
var this__9506 = this;
if((n === 0))
{return this__9506.key;
} else
{if((n === 1))
{return this__9506.val;
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
var this__9507 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.RedNode;
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c__9513 = comp.call(null,k,tree.key);
if((c__9513 === 0))
{(found[0] = tree);
return null;
} else
{if((c__9513 < 0))
{var ins__9514 = tree_map_add.call(null,comp,tree.left,k,v,found);
if(!((ins__9514 == null)))
{return tree.add_left(ins__9514);
} else
{return null;
}
} else
{if("\uFDD0'else")
{var ins__9515 = tree_map_add.call(null,comp,tree.right,k,v,found);
if(!((ins__9515 == null)))
{return tree.add_right(ins__9515);
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
{var app__9518 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__9518))
{return (new cljs.core.RedNode(app__9518.key,app__9518.val,(new cljs.core.RedNode(left.key,left.val,left.left,app__9518.left,null)),(new cljs.core.RedNode(right.key,right.val,app__9518.right,right.right,null)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app__9518,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append.call(null,left.right,right),null));
}
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append.call(null,left,right.left),right.right,null));
} else
{if("\uFDD0'else")
{var app__9519 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__9519))
{return (new cljs.core.RedNode(app__9519.key,app__9519.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app__9519.left,null)),(new cljs.core.BlackNode(right.key,right.val,app__9519.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del.call(null,left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app__9519,right.right,null)));
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
{var c__9525 = comp.call(null,k,tree.key);
if((c__9525 === 0))
{(found[0] = tree);
return cljs.core.tree_map_append.call(null,tree.left,tree.right);
} else
{if((c__9525 < 0))
{var del__9526 = tree_map_remove.call(null,comp,tree.left,k,found);
if((function (){var or__3824__auto____9527 = !((del__9526 == null));
if(or__3824__auto____9527)
{return or__3824__auto____9527;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.left))
{return cljs.core.balance_left_del.call(null,tree.key,tree.val,del__9526,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del__9526,tree.right,null));
}
} else
{return null;
}
} else
{if("\uFDD0'else")
{var del__9528 = tree_map_remove.call(null,comp,tree.right,k,found);
if((function (){var or__3824__auto____9529 = !((del__9528 == null));
if(or__3824__auto____9529)
{return or__3824__auto____9529;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.right))
{return cljs.core.balance_right_del.call(null,tree.key,tree.val,tree.left,del__9528);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del__9528,null));
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
var tk__9532 = tree.key;
var c__9533 = comp.call(null,k,tk__9532);
if((c__9533 === 0))
{return tree.replace(tk__9532,v,tree.left,tree.right);
} else
{if((c__9533 < 0))
{return tree.replace(tk__9532,tree.val,tree_map_replace.call(null,comp,tree.left,k,v),tree.right);
} else
{if("\uFDD0'else")
{return tree.replace(tk__9532,tree.val,tree.left,tree_map_replace.call(null,comp,tree.right,k,v));
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
var this__9536 = this;
var h__2340__auto____9537 = this__9536.__hash;
if(!((h__2340__auto____9537 == null)))
{return h__2340__auto____9537;
} else
{var h__2340__auto____9538 = cljs.core.hash_imap.call(null,coll);
this__9536.__hash = h__2340__auto____9538;
return h__2340__auto____9538;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9539 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9540 = this;
var n__9541 = coll.entry_at(k);
if(!((n__9541 == null)))
{return n__9541.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9542 = this;
var found__9543 = [null];
var t__9544 = cljs.core.tree_map_add.call(null,this__9542.comp,this__9542.tree,k,v,found__9543);
if((t__9544 == null))
{var found_node__9545 = cljs.core.nth.call(null,found__9543,0);
if(cljs.core._EQ_.call(null,v,found_node__9545.val))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__9542.comp,cljs.core.tree_map_replace.call(null,this__9542.comp,this__9542.tree,k,v),this__9542.cnt,this__9542.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__9542.comp,t__9544.blacken(),(this__9542.cnt + 1),this__9542.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__9546 = this;
return !((coll.entry_at(k) == null));
});
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__9580 = null;
var G__9580__2 = (function (this_sym9547,k){
var this__9549 = this;
var this_sym9547__9550 = this;
var coll__9551 = this_sym9547__9550;
return coll__9551.cljs$core$ILookup$_lookup$arity$2(coll__9551,k);
});
var G__9580__3 = (function (this_sym9548,k,not_found){
var this__9549 = this;
var this_sym9548__9552 = this;
var coll__9553 = this_sym9548__9552;
return coll__9553.cljs$core$ILookup$_lookup$arity$3(coll__9553,k,not_found);
});
G__9580 = function(this_sym9548,k,not_found){
switch(arguments.length){
case 2:
return G__9580__2.call(this,this_sym9548,k);
case 3:
return G__9580__3.call(this,this_sym9548,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9580;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (this_sym9534,args9535){
var this__9554 = this;
return this_sym9534.call.apply(this_sym9534,[this_sym9534].concat(args9535.slice()));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__9555 = this;
if(!((this__9555.tree == null)))
{return cljs.core.tree_map_kv_reduce.call(null,this__9555.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__9556 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__9557 = this;
if((this__9557.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__9557.tree,false,this__9557.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){
var this__9558 = this;
var this__9559 = this;
return cljs.core.pr_str.call(null,this__9559);
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var this__9560 = this;
var coll__9561 = this;
var t__9562 = this__9560.tree;
while(true){
if(!((t__9562 == null)))
{var c__9563 = this__9560.comp.call(null,k,t__9562.key);
if((c__9563 === 0))
{return t__9562;
} else
{if((c__9563 < 0))
{{
var G__9581 = t__9562.left;
t__9562 = G__9581;
continue;
}
} else
{if("\uFDD0'else")
{{
var G__9582 = t__9562.right;
t__9562 = G__9582;
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
var this__9564 = this;
if((this__9564.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__9564.tree,ascending_QMARK_,this__9564.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__9565 = this;
if((this__9565.cnt > 0))
{var stack__9566 = null;
var t__9567 = this__9565.tree;
while(true){
if(!((t__9567 == null)))
{var c__9568 = this__9565.comp.call(null,k,t__9567.key);
if((c__9568 === 0))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.call(null,stack__9566,t__9567),ascending_QMARK_,-1,null));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c__9568 < 0))
{{
var G__9583 = cljs.core.conj.call(null,stack__9566,t__9567);
var G__9584 = t__9567.left;
stack__9566 = G__9583;
t__9567 = G__9584;
continue;
}
} else
{{
var G__9585 = stack__9566;
var G__9586 = t__9567.right;
stack__9566 = G__9585;
t__9567 = G__9586;
continue;
}
}
} else
{if("\uFDD0'else")
{if((c__9568 > 0))
{{
var G__9587 = cljs.core.conj.call(null,stack__9566,t__9567);
var G__9588 = t__9567.right;
stack__9566 = G__9587;
t__9567 = G__9588;
continue;
}
} else
{{
var G__9589 = stack__9566;
var G__9590 = t__9567.left;
stack__9566 = G__9589;
t__9567 = G__9590;
continue;
}
}
} else
{return null;
}
}
}
} else
{if((stack__9566 == null))
{return (new cljs.core.PersistentTreeMapSeq(null,stack__9566,ascending_QMARK_,-1,null));
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
var this__9569 = this;
return cljs.core.key.call(null,entry);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__9570 = this;
return this__9570.comp;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9571 = this;
if((this__9571.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__9571.tree,true,this__9571.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9572 = this;
return this__9572.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9573 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9574 = this;
return (new cljs.core.PersistentTreeMap(this__9574.comp,this__9574.tree,this__9574.cnt,meta,this__9574.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9575 = this;
return this__9575.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9576 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeMap.EMPTY,this__9576.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__9577 = this;
var found__9578 = [null];
var t__9579 = cljs.core.tree_map_remove.call(null,this__9577.comp,this__9577.tree,k,found__9578);
if((t__9579 == null))
{if((cljs.core.nth.call(null,found__9578,0) == null))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__9577.comp,null,0,this__9577.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__9577.comp,t__9579.blacken(),(this__9577.cnt - 1),this__9577.meta,null));
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
var in__9593 = cljs.core.seq.call(null,keyvals);
var out__9594 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if(in__9593)
{{
var G__9595 = cljs.core.nnext.call(null,in__9593);
var G__9596 = cljs.core.assoc_BANG_.call(null,out__9594,cljs.core.first.call(null,in__9593),cljs.core.second.call(null,in__9593));
in__9593 = G__9595;
out__9594 = G__9596;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9594);
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
hash_map.cljs$lang$applyTo = (function (arglist__9597){
var keyvals = cljs.core.seq(arglist__9597);;
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
array_map.cljs$lang$applyTo = (function (arglist__9598){
var keyvals = cljs.core.seq(arglist__9598);;
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
var ks__9602 = [];
var obj__9603 = {};
var kvs__9604 = cljs.core.seq.call(null,keyvals);
while(true){
if(kvs__9604)
{ks__9602.push(cljs.core.first.call(null,kvs__9604));
(obj__9603[cljs.core.first.call(null,kvs__9604)] = cljs.core.second.call(null,kvs__9604));
{
var G__9605 = cljs.core.nnext.call(null,kvs__9604);
kvs__9604 = G__9605;
continue;
}
} else
{return cljs.core.ObjMap.fromObject.call(null,ks__9602,obj__9603);
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
obj_map.cljs$lang$applyTo = (function (arglist__9606){
var keyvals = cljs.core.seq(arglist__9606);;
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
var in__9609 = cljs.core.seq.call(null,keyvals);
var out__9610 = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(in__9609)
{{
var G__9611 = cljs.core.nnext.call(null,in__9609);
var G__9612 = cljs.core.assoc.call(null,out__9610,cljs.core.first.call(null,in__9609),cljs.core.second.call(null,in__9609));
in__9609 = G__9611;
out__9610 = G__9612;
continue;
}
} else
{return out__9610;
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
sorted_map.cljs$lang$applyTo = (function (arglist__9613){
var keyvals = cljs.core.seq(arglist__9613);;
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
var in__9616 = cljs.core.seq.call(null,keyvals);
var out__9617 = (new cljs.core.PersistentTreeMap(comparator,null,0,null,0));
while(true){
if(in__9616)
{{
var G__9618 = cljs.core.nnext.call(null,in__9616);
var G__9619 = cljs.core.assoc.call(null,out__9617,cljs.core.first.call(null,in__9616),cljs.core.second.call(null,in__9616));
in__9616 = G__9618;
out__9617 = G__9619;
continue;
}
} else
{return out__9617;
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
sorted_map_by.cljs$lang$applyTo = (function (arglist__9620){
var comparator = cljs.core.first(arglist__9620);
var keyvals = cljs.core.rest(arglist__9620);
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
{return cljs.core.reduce.call(null,(function (p1__9621_SHARP_,p2__9622_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3824__auto____9624 = p1__9621_SHARP_;
if(cljs.core.truth_(or__3824__auto____9624))
{return or__3824__auto____9624;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),p2__9622_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__9625){
var maps = cljs.core.seq(arglist__9625);;
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
{var merge_entry__9633 = (function (m,e){
var k__9631 = cljs.core.first.call(null,e);
var v__9632 = cljs.core.second.call(null,e);
if(cljs.core.contains_QMARK_.call(null,m,k__9631))
{return cljs.core.assoc.call(null,m,k__9631,f.call(null,cljs.core._lookup.call(null,m,k__9631,null),v__9632));
} else
{return cljs.core.assoc.call(null,m,k__9631,v__9632);
}
});
var merge2__9635 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__9633,(function (){var or__3824__auto____9634 = m1;
if(cljs.core.truth_(or__3824__auto____9634))
{return or__3824__auto____9634;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge2__9635,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__9636){
var f = cljs.core.first(arglist__9636);
var maps = cljs.core.rest(arglist__9636);
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
var ret__9641 = cljs.core.ObjMap.EMPTY;
var keys__9642 = cljs.core.seq.call(null,keyseq);
while(true){
if(keys__9642)
{var key__9643 = cljs.core.first.call(null,keys__9642);
var entry__9644 = cljs.core._lookup.call(null,map,key__9643,"\uFDD0'cljs.core/not-found");
{
var G__9645 = ((cljs.core.not_EQ_.call(null,entry__9644,"\uFDD0'cljs.core/not-found"))?cljs.core.assoc.call(null,ret__9641,key__9643,entry__9644):ret__9641);
var G__9646 = cljs.core.next.call(null,keys__9642);
ret__9641 = G__9645;
keys__9642 = G__9646;
continue;
}
} else
{return ret__9641;
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
var this__9650 = this;
return (new cljs.core.TransientHashSet(cljs.core.transient$.call(null,this__9650.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9651 = this;
var h__2340__auto____9652 = this__9651.__hash;
if(!((h__2340__auto____9652 == null)))
{return h__2340__auto____9652;
} else
{var h__2340__auto____9653 = cljs.core.hash_iset.call(null,coll);
this__9651.__hash = h__2340__auto____9653;
return h__2340__auto____9653;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__9654 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__9655 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__9655.hash_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__9676 = null;
var G__9676__2 = (function (this_sym9656,k){
var this__9658 = this;
var this_sym9656__9659 = this;
var coll__9660 = this_sym9656__9659;
return coll__9660.cljs$core$ILookup$_lookup$arity$2(coll__9660,k);
});
var G__9676__3 = (function (this_sym9657,k,not_found){
var this__9658 = this;
var this_sym9657__9661 = this;
var coll__9662 = this_sym9657__9661;
return coll__9662.cljs$core$ILookup$_lookup$arity$3(coll__9662,k,not_found);
});
G__9676 = function(this_sym9657,k,not_found){
switch(arguments.length){
case 2:
return G__9676__2.call(this,this_sym9657,k);
case 3:
return G__9676__3.call(this,this_sym9657,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9676;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (this_sym9648,args9649){
var this__9663 = this;
return this_sym9648.call.apply(this_sym9648,[this_sym9648].concat(args9649.slice()));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9664 = this;
return (new cljs.core.PersistentHashSet(this__9664.meta,cljs.core.assoc.call(null,this__9664.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.toString = (function (){
var this__9665 = this;
var this__9666 = this;
return cljs.core.pr_str.call(null,this__9666);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9667 = this;
return cljs.core.keys.call(null,this__9667.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__9668 = this;
return (new cljs.core.PersistentHashSet(this__9668.meta,cljs.core.dissoc.call(null,this__9668.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9669 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9670 = this;
var and__3822__auto____9671 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____9671)
{var and__3822__auto____9672 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____9672)
{return cljs.core.every_QMARK_.call(null,(function (p1__9647_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__9647_SHARP_);
}),other);
} else
{return and__3822__auto____9672;
}
} else
{return and__3822__auto____9671;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9673 = this;
return (new cljs.core.PersistentHashSet(meta,this__9673.hash_map,this__9673.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9674 = this;
return this__9674.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9675 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentHashSet.EMPTY,this__9675.meta);
});
cljs.core.PersistentHashSet;
cljs.core.PersistentHashSet.EMPTY = (new cljs.core.PersistentHashSet(null,cljs.core.hash_map.call(null),0));
cljs.core.PersistentHashSet.fromArray = (function (items){
var len__9677 = cljs.core.count.call(null,items);
var i__9678 = 0;
var out__9679 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if((i__9678 < len__9677))
{{
var G__9680 = (i__9678 + 1);
var G__9681 = cljs.core.conj_BANG_.call(null,out__9679,(items[i__9678]));
i__9678 = G__9680;
out__9679 = G__9681;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9679);
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
var G__9699 = null;
var G__9699__2 = (function (this_sym9685,k){
var this__9687 = this;
var this_sym9685__9688 = this;
var tcoll__9689 = this_sym9685__9688;
if((cljs.core._lookup.call(null,this__9687.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__9699__3 = (function (this_sym9686,k,not_found){
var this__9687 = this;
var this_sym9686__9690 = this;
var tcoll__9691 = this_sym9686__9690;
if((cljs.core._lookup.call(null,this__9687.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__9699 = function(this_sym9686,k,not_found){
switch(arguments.length){
case 2:
return G__9699__2.call(this,this_sym9686,k);
case 3:
return G__9699__3.call(this,this_sym9686,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9699;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (this_sym9683,args9684){
var this__9692 = this;
return this_sym9683.call.apply(this_sym9683,[this_sym9683].concat(args9684.slice()));
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var this__9693 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var this__9694 = this;
if((cljs.core._lookup.call(null,this__9694.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__9695 = this;
return cljs.core.count.call(null,this__9695.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var this__9696 = this;
this__9696.transient_map = cljs.core.dissoc_BANG_.call(null,this__9696.transient_map,v);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__9697 = this;
this__9697.transient_map = cljs.core.assoc_BANG_.call(null,this__9697.transient_map,o,null);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__9698 = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_.call(null,this__9698.transient_map),null));
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
var this__9702 = this;
var h__2340__auto____9703 = this__9702.__hash;
if(!((h__2340__auto____9703 == null)))
{return h__2340__auto____9703;
} else
{var h__2340__auto____9704 = cljs.core.hash_iset.call(null,coll);
this__9702.__hash = h__2340__auto____9704;
return h__2340__auto____9704;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__9705 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__9706 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__9706.tree_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__9732 = null;
var G__9732__2 = (function (this_sym9707,k){
var this__9709 = this;
var this_sym9707__9710 = this;
var coll__9711 = this_sym9707__9710;
return coll__9711.cljs$core$ILookup$_lookup$arity$2(coll__9711,k);
});
var G__9732__3 = (function (this_sym9708,k,not_found){
var this__9709 = this;
var this_sym9708__9712 = this;
var coll__9713 = this_sym9708__9712;
return coll__9713.cljs$core$ILookup$_lookup$arity$3(coll__9713,k,not_found);
});
G__9732 = function(this_sym9708,k,not_found){
switch(arguments.length){
case 2:
return G__9732__2.call(this,this_sym9708,k);
case 3:
return G__9732__3.call(this,this_sym9708,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9732;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (this_sym9700,args9701){
var this__9714 = this;
return this_sym9700.call.apply(this_sym9700,[this_sym9700].concat(args9701.slice()));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9715 = this;
return (new cljs.core.PersistentTreeSet(this__9715.meta,cljs.core.assoc.call(null,this__9715.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__9716 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core.rseq.call(null,this__9716.tree_map));
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var this__9717 = this;
var this__9718 = this;
return cljs.core.pr_str.call(null,this__9718);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__9719 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq.call(null,this__9719.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__9720 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq_from.call(null,this__9720.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__9721 = this;
return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__9722 = this;
return cljs.core._comparator.call(null,this__9722.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9723 = this;
return cljs.core.keys.call(null,this__9723.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__9724 = this;
return (new cljs.core.PersistentTreeSet(this__9724.meta,cljs.core.dissoc.call(null,this__9724.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9725 = this;
return cljs.core.count.call(null,this__9725.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9726 = this;
var and__3822__auto____9727 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____9727)
{var and__3822__auto____9728 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____9728)
{return cljs.core.every_QMARK_.call(null,(function (p1__9682_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__9682_SHARP_);
}),other);
} else
{return and__3822__auto____9728;
}
} else
{return and__3822__auto____9727;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9729 = this;
return (new cljs.core.PersistentTreeSet(meta,this__9729.tree_map,this__9729.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9730 = this;
return this__9730.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9731 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeSet.EMPTY,this__9731.meta);
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
var G__9737__delegate = function (keys){
var in__9735 = cljs.core.seq.call(null,keys);
var out__9736 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if(cljs.core.seq.call(null,in__9735))
{{
var G__9738 = cljs.core.next.call(null,in__9735);
var G__9739 = cljs.core.conj_BANG_.call(null,out__9736,cljs.core.first.call(null,in__9735));
in__9735 = G__9738;
out__9736 = G__9739;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9736);
}
break;
}
};
var G__9737 = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9737__delegate.call(this, keys);
};
G__9737.cljs$lang$maxFixedArity = 0;
G__9737.cljs$lang$applyTo = (function (arglist__9740){
var keys = cljs.core.seq(arglist__9740);;
return G__9737__delegate(keys);
});
G__9737.cljs$lang$arity$variadic = G__9737__delegate;
return G__9737;
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
sorted_set.cljs$lang$applyTo = (function (arglist__9741){
var keys = cljs.core.seq(arglist__9741);;
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
sorted_set_by.cljs$lang$applyTo = (function (arglist__9743){
var comparator = cljs.core.first(arglist__9743);
var keys = cljs.core.rest(arglist__9743);
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
{var n__9749 = cljs.core.count.call(null,coll);
return cljs.core.reduce.call(null,(function (v,i){
var temp__3971__auto____9750 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));
if(cljs.core.truth_(temp__3971__auto____9750))
{var e__9751 = temp__3971__auto____9750;
return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__9751));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__9749,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__9742_SHARP_){
var temp__3971__auto____9752 = cljs.core.find.call(null,smap,p1__9742_SHARP_);
if(cljs.core.truth_(temp__3971__auto____9752))
{var e__9753 = temp__3971__auto____9752;
return cljs.core.second.call(null,e__9753);
} else
{return p1__9742_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__9783 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__9776,seen){
while(true){
var vec__9777__9778 = p__9776;
var f__9779 = cljs.core.nth.call(null,vec__9777__9778,0,null);
var xs__9780 = vec__9777__9778;
var temp__3974__auto____9781 = cljs.core.seq.call(null,xs__9780);
if(temp__3974__auto____9781)
{var s__9782 = temp__3974__auto____9781;
if(cljs.core.contains_QMARK_.call(null,seen,f__9779))
{{
var G__9784 = cljs.core.rest.call(null,s__9782);
var G__9785 = seen;
p__9776 = G__9784;
seen = G__9785;
continue;
}
} else
{return cljs.core.cons.call(null,f__9779,step.call(null,cljs.core.rest.call(null,s__9782),cljs.core.conj.call(null,seen,f__9779)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
}),null));
});
return step__9783.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});
cljs.core.butlast = (function butlast(s){
var ret__9788 = cljs.core.PersistentVector.EMPTY;
var s__9789 = s;
while(true){
if(cljs.core.next.call(null,s__9789))
{{
var G__9790 = cljs.core.conj.call(null,ret__9788,cljs.core.first.call(null,s__9789));
var G__9791 = cljs.core.next.call(null,s__9789);
ret__9788 = G__9790;
s__9789 = G__9791;
continue;
}
} else
{return cljs.core.seq.call(null,ret__9788);
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
{if((function (){var or__3824__auto____9794 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____9794)
{return or__3824__auto____9794;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__9795 = x.lastIndexOf("/");
if((i__9795 < 0))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__9795 + 1));
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
if((function (){var or__3824__auto____9798 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____9798)
{return or__3824__auto____9798;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__9799 = x.lastIndexOf("/");
if((i__9799 > -1))
{return cljs.core.subs.call(null,x,2,i__9799);
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
var map__9806 = cljs.core.ObjMap.EMPTY;
var ks__9807 = cljs.core.seq.call(null,keys);
var vs__9808 = cljs.core.seq.call(null,vals);
while(true){
if((function (){var and__3822__auto____9809 = ks__9807;
if(and__3822__auto____9809)
{return vs__9808;
} else
{return and__3822__auto____9809;
}
})())
{{
var G__9810 = cljs.core.assoc.call(null,map__9806,cljs.core.first.call(null,ks__9807),cljs.core.first.call(null,vs__9808));
var G__9811 = cljs.core.next.call(null,ks__9807);
var G__9812 = cljs.core.next.call(null,vs__9808);
map__9806 = G__9810;
ks__9807 = G__9811;
vs__9808 = G__9812;
continue;
}
} else
{return map__9806;
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
var G__9815__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__9800_SHARP_,p2__9801_SHARP_){
return max_key.call(null,k,p1__9800_SHARP_,p2__9801_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__9815 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9815__delegate.call(this, k, x, y, more);
};
G__9815.cljs$lang$maxFixedArity = 3;
G__9815.cljs$lang$applyTo = (function (arglist__9816){
var k = cljs.core.first(arglist__9816);
var x = cljs.core.first(cljs.core.next(arglist__9816));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9816)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9816)));
return G__9815__delegate(k, x, y, more);
});
G__9815.cljs$lang$arity$variadic = G__9815__delegate;
return G__9815;
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
var G__9817__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__9813_SHARP_,p2__9814_SHARP_){
return min_key.call(null,k,p1__9813_SHARP_,p2__9814_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__9817 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9817__delegate.call(this, k, x, y, more);
};
G__9817.cljs$lang$maxFixedArity = 3;
G__9817.cljs$lang$applyTo = (function (arglist__9818){
var k = cljs.core.first(arglist__9818);
var x = cljs.core.first(cljs.core.next(arglist__9818));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9818)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9818)));
return G__9817__delegate(k, x, y, more);
});
G__9817.cljs$lang$arity$variadic = G__9817__delegate;
return G__9817;
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
var temp__3974__auto____9821 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9821)
{var s__9822 = temp__3974__auto____9821;
return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__9822),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__9822)));
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
var temp__3974__auto____9825 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9825)
{var s__9826 = temp__3974__auto____9825;
if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__9826))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__9826),take_while.call(null,pred,cljs.core.rest.call(null,s__9826)));
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
var comp__9828 = cljs.core._comparator.call(null,sc);
return test.call(null,comp__9828.call(null,cljs.core._entry_key.call(null,sc,e),key),0);
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
var include__9840 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._GT_,cljs.core._GT__EQ_]).call(null,test)))
{var temp__3974__auto____9841 = cljs.core._sorted_seq_from.call(null,sc,key,true);
if(cljs.core.truth_(temp__3974__auto____9841))
{var vec__9842__9843 = temp__3974__auto____9841;
var e__9844 = cljs.core.nth.call(null,vec__9842__9843,0,null);
var s__9845 = vec__9842__9843;
if(cljs.core.truth_(include__9840.call(null,e__9844)))
{return s__9845;
} else
{return cljs.core.next.call(null,s__9845);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__9840,cljs.core._sorted_seq.call(null,sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____9846 = cljs.core._sorted_seq_from.call(null,sc,start_key,true);
if(cljs.core.truth_(temp__3974__auto____9846))
{var vec__9847__9848 = temp__3974__auto____9846;
var e__9849 = cljs.core.nth.call(null,vec__9847__9848,0,null);
var s__9850 = vec__9847__9848;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,start_test,start_key).call(null,e__9849))?s__9850:cljs.core.next.call(null,s__9850)));
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
var include__9862 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._LT_,cljs.core._LT__EQ_]).call(null,test)))
{var temp__3974__auto____9863 = cljs.core._sorted_seq_from.call(null,sc,key,false);
if(cljs.core.truth_(temp__3974__auto____9863))
{var vec__9864__9865 = temp__3974__auto____9863;
var e__9866 = cljs.core.nth.call(null,vec__9864__9865,0,null);
var s__9867 = vec__9864__9865;
if(cljs.core.truth_(include__9862.call(null,e__9866)))
{return s__9867;
} else
{return cljs.core.next.call(null,s__9867);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__9862,cljs.core._sorted_seq.call(null,sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____9868 = cljs.core._sorted_seq_from.call(null,sc,end_key,false);
if(cljs.core.truth_(temp__3974__auto____9868))
{var vec__9869__9870 = temp__3974__auto____9868;
var e__9871 = cljs.core.nth.call(null,vec__9869__9870,0,null);
var s__9872 = vec__9869__9870;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,end_test,end_key).call(null,e__9871))?s__9872:cljs.core.next.call(null,s__9872)));
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
var this__9873 = this;
var h__2340__auto____9874 = this__9873.__hash;
if(!((h__2340__auto____9874 == null)))
{return h__2340__auto____9874;
} else
{var h__2340__auto____9875 = cljs.core.hash_coll.call(null,rng);
this__9873.__hash = h__2340__auto____9875;
return h__2340__auto____9875;
}
});
cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){
var this__9876 = this;
if((this__9876.step > 0))
{if(((this__9876.start + this__9876.step) < this__9876.end))
{return (new cljs.core.Range(this__9876.meta,(this__9876.start + this__9876.step),this__9876.end,this__9876.step,null));
} else
{return null;
}
} else
{if(((this__9876.start + this__9876.step) > this__9876.end))
{return (new cljs.core.Range(this__9876.meta,(this__9876.start + this__9876.step),this__9876.end,this__9876.step,null));
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var this__9877 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.toString = (function (){
var this__9878 = this;
var this__9879 = this;
return cljs.core.pr_str.call(null,this__9879);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var this__9880 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){
var this__9881 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var this__9882 = this;
if((this__9882.step > 0))
{if((this__9882.start < this__9882.end))
{return rng;
} else
{return null;
}
} else
{if((this__9882.start > this__9882.end))
{return rng;
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var this__9883 = this;
if(cljs.core.not.call(null,rng.cljs$core$ISeqable$_seq$arity$1(rng)))
{return 0;
} else
{return Math.ceil(((this__9883.end - this__9883.start) / this__9883.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var this__9884 = this;
return this__9884.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var this__9885 = this;
if(!((rng.cljs$core$ISeqable$_seq$arity$1(rng) == null)))
{return (new cljs.core.Range(this__9885.meta,(this__9885.start + this__9885.step),this__9885.end,this__9885.step,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var this__9886 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta){
var this__9887 = this;
return (new cljs.core.Range(meta,this__9887.start,this__9887.end,this__9887.step,this__9887.__hash));
});
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var this__9888 = this;
return this__9888.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var this__9889 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__9889.start + (n * this__9889.step));
} else
{if((function (){var and__3822__auto____9890 = (this__9889.start > this__9889.end);
if(and__3822__auto____9890)
{return (this__9889.step === 0);
} else
{return and__3822__auto____9890;
}
})())
{return this__9889.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var this__9891 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__9891.start + (n * this__9891.step));
} else
{if((function (){var and__3822__auto____9892 = (this__9891.start > this__9891.end);
if(and__3822__auto____9892)
{return (this__9891.step === 0);
} else
{return and__3822__auto____9892;
}
})())
{return this__9891.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var this__9893 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9893.meta);
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
var temp__3974__auto____9896 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9896)
{var s__9897 = temp__3974__auto____9896;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__9897),take_nth.call(null,n,cljs.core.drop.call(null,n,s__9897)));
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
var temp__3974__auto____9904 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9904)
{var s__9905 = temp__3974__auto____9904;
var fst__9906 = cljs.core.first.call(null,s__9905);
var fv__9907 = f.call(null,fst__9906);
var run__9908 = cljs.core.cons.call(null,fst__9906,cljs.core.take_while.call(null,(function (p1__9898_SHARP_){
return cljs.core._EQ_.call(null,fv__9907,f.call(null,p1__9898_SHARP_));
}),cljs.core.next.call(null,s__9905)));
return cljs.core.cons.call(null,run__9908,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__9908),s__9905))));
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
var temp__3971__auto____9923 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____9923)
{var s__9924 = temp__3971__auto____9923;
return reductions.call(null,f,cljs.core.first.call(null,s__9924),cljs.core.rest.call(null,s__9924));
} else
{return cljs.core.list.call(null,f.call(null));
}
}),null));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9925 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9925)
{var s__9926 = temp__3974__auto____9925;
return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__9926)),cljs.core.rest.call(null,s__9926));
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
var G__9929 = null;
var G__9929__0 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__9929__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__9929__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__9929__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__9929__4 = (function() { 
var G__9930__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__9930 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9930__delegate.call(this, x, y, z, args);
};
G__9930.cljs$lang$maxFixedArity = 3;
G__9930.cljs$lang$applyTo = (function (arglist__9931){
var x = cljs.core.first(arglist__9931);
var y = cljs.core.first(cljs.core.next(arglist__9931));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9931)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9931)));
return G__9930__delegate(x, y, z, args);
});
G__9930.cljs$lang$arity$variadic = G__9930__delegate;
return G__9930;
})()
;
G__9929 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9929__0.call(this);
case 1:
return G__9929__1.call(this,x);
case 2:
return G__9929__2.call(this,x,y);
case 3:
return G__9929__3.call(this,x,y,z);
default:
return G__9929__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9929.cljs$lang$maxFixedArity = 3;
G__9929.cljs$lang$applyTo = G__9929__4.cljs$lang$applyTo;
return G__9929;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__9932 = null;
var G__9932__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__9932__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__9932__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__9932__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__9932__4 = (function() { 
var G__9933__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__9933 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9933__delegate.call(this, x, y, z, args);
};
G__9933.cljs$lang$maxFixedArity = 3;
G__9933.cljs$lang$applyTo = (function (arglist__9934){
var x = cljs.core.first(arglist__9934);
var y = cljs.core.first(cljs.core.next(arglist__9934));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9934)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9934)));
return G__9933__delegate(x, y, z, args);
});
G__9933.cljs$lang$arity$variadic = G__9933__delegate;
return G__9933;
})()
;
G__9932 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9932__0.call(this);
case 1:
return G__9932__1.call(this,x);
case 2:
return G__9932__2.call(this,x,y);
case 3:
return G__9932__3.call(this,x,y,z);
default:
return G__9932__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9932.cljs$lang$maxFixedArity = 3;
G__9932.cljs$lang$applyTo = G__9932__4.cljs$lang$applyTo;
return G__9932;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__9935 = null;
var G__9935__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__9935__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__9935__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__9935__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__9935__4 = (function() { 
var G__9936__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__9936 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9936__delegate.call(this, x, y, z, args);
};
G__9936.cljs$lang$maxFixedArity = 3;
G__9936.cljs$lang$applyTo = (function (arglist__9937){
var x = cljs.core.first(arglist__9937);
var y = cljs.core.first(cljs.core.next(arglist__9937));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9937)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9937)));
return G__9936__delegate(x, y, z, args);
});
G__9936.cljs$lang$arity$variadic = G__9936__delegate;
return G__9936;
})()
;
G__9935 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9935__0.call(this);
case 1:
return G__9935__1.call(this,x);
case 2:
return G__9935__2.call(this,x,y);
case 3:
return G__9935__3.call(this,x,y,z);
default:
return G__9935__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9935.cljs$lang$maxFixedArity = 3;
G__9935.cljs$lang$applyTo = G__9935__4.cljs$lang$applyTo;
return G__9935;
})()
});
var juxt__4 = (function() { 
var G__9938__delegate = function (f,g,h,fs){
var fs__9928 = cljs.core.list_STAR_.call(null,f,g,h,fs);
return (function() {
var G__9939 = null;
var G__9939__0 = (function (){
return cljs.core.reduce.call(null,(function (p1__9909_SHARP_,p2__9910_SHARP_){
return cljs.core.conj.call(null,p1__9909_SHARP_,p2__9910_SHARP_.call(null));
}),cljs.core.PersistentVector.EMPTY,fs__9928);
});
var G__9939__1 = (function (x){
return cljs.core.reduce.call(null,(function (p1__9911_SHARP_,p2__9912_SHARP_){
return cljs.core.conj.call(null,p1__9911_SHARP_,p2__9912_SHARP_.call(null,x));
}),cljs.core.PersistentVector.EMPTY,fs__9928);
});
var G__9939__2 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__9913_SHARP_,p2__9914_SHARP_){
return cljs.core.conj.call(null,p1__9913_SHARP_,p2__9914_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.EMPTY,fs__9928);
});
var G__9939__3 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__9915_SHARP_,p2__9916_SHARP_){
return cljs.core.conj.call(null,p1__9915_SHARP_,p2__9916_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.EMPTY,fs__9928);
});
var G__9939__4 = (function() { 
var G__9940__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__9917_SHARP_,p2__9918_SHARP_){
return cljs.core.conj.call(null,p1__9917_SHARP_,cljs.core.apply.call(null,p2__9918_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.EMPTY,fs__9928);
};
var G__9940 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9940__delegate.call(this, x, y, z, args);
};
G__9940.cljs$lang$maxFixedArity = 3;
G__9940.cljs$lang$applyTo = (function (arglist__9941){
var x = cljs.core.first(arglist__9941);
var y = cljs.core.first(cljs.core.next(arglist__9941));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9941)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9941)));
return G__9940__delegate(x, y, z, args);
});
G__9940.cljs$lang$arity$variadic = G__9940__delegate;
return G__9940;
})()
;
G__9939 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9939__0.call(this);
case 1:
return G__9939__1.call(this,x);
case 2:
return G__9939__2.call(this,x,y);
case 3:
return G__9939__3.call(this,x,y,z);
default:
return G__9939__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9939.cljs$lang$maxFixedArity = 3;
G__9939.cljs$lang$applyTo = G__9939__4.cljs$lang$applyTo;
return G__9939;
})()
};
var G__9938 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9938__delegate.call(this, f, g, h, fs);
};
G__9938.cljs$lang$maxFixedArity = 3;
G__9938.cljs$lang$applyTo = (function (arglist__9942){
var f = cljs.core.first(arglist__9942);
var g = cljs.core.first(cljs.core.next(arglist__9942));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9942)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9942)));
return G__9938__delegate(f, g, h, fs);
});
G__9938.cljs$lang$arity$variadic = G__9938__delegate;
return G__9938;
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
var G__9945 = cljs.core.next.call(null,coll);
coll = G__9945;
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
if(cljs.core.truth_((function (){var and__3822__auto____9944 = cljs.core.seq.call(null,coll);
if(and__3822__auto____9944)
{return (n > 0);
} else
{return and__3822__auto____9944;
}
})()))
{{
var G__9946 = (n - 1);
var G__9947 = cljs.core.next.call(null,coll);
n = G__9946;
coll = G__9947;
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
var matches__9949 = re.exec(s);
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__9949),s))
{if((cljs.core.count.call(null,matches__9949) === 1))
{return cljs.core.first.call(null,matches__9949);
} else
{return cljs.core.vec.call(null,matches__9949);
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
var matches__9951 = re.exec(s);
if((matches__9951 == null))
{return null;
} else
{if((cljs.core.count.call(null,matches__9951) === 1))
{return cljs.core.first.call(null,matches__9951);
} else
{return cljs.core.vec.call(null,matches__9951);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__9956 = cljs.core.re_find.call(null,re,s);
var match_idx__9957 = s.search(re);
var match_str__9958 = ((cljs.core.coll_QMARK_.call(null,match_data__9956))?cljs.core.first.call(null,match_data__9956):match_data__9956);
var post_match__9959 = cljs.core.subs.call(null,s,(match_idx__9957 + cljs.core.count.call(null,match_str__9958)));
if(cljs.core.truth_(match_data__9956))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__9956,re_seq.call(null,re,post_match__9959));
}),null));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__9966__9967 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___9968 = cljs.core.nth.call(null,vec__9966__9967,0,null);
var flags__9969 = cljs.core.nth.call(null,vec__9966__9967,1,null);
var pattern__9970 = cljs.core.nth.call(null,vec__9966__9967,2,null);
return (new RegExp(pattern__9970,flags__9969));
});
/**
* Do not use this.  It is kept for backwards compatibility with the
* old IPrintable protocol.
*/
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin], true),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep], true),cljs.core.map.call(null,(function (p1__9960_SHARP_){
return print_one.call(null,p1__9960_SHARP_,opts);
}),coll))),cljs.core.PersistentVector.fromArray([end], true));
});
cljs.core.pr_sequential_writer = (function pr_sequential_writer(writer,print_one,begin,sep,end,opts,coll){
cljs.core._write.call(null,writer,begin);
if(cljs.core.seq.call(null,coll))
{print_one.call(null,cljs.core.first.call(null,coll),writer,opts);
} else
{}
var G__9974__9975 = cljs.core.seq.call(null,cljs.core.next.call(null,coll));
while(true){
if(G__9974__9975)
{var o__9976 = cljs.core.first.call(null,G__9974__9975);
cljs.core._write.call(null,writer,sep);
print_one.call(null,o__9976,writer,opts);
{
var G__9977 = cljs.core.next.call(null,G__9974__9975);
G__9974__9975 = G__9977;
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
var G__9981__9982 = cljs.core.seq.call(null,ss);
while(true){
if(G__9981__9982)
{var s__9983 = cljs.core.first.call(null,G__9981__9982);
cljs.core._write.call(null,writer,s__9983);
{
var G__9984 = cljs.core.next.call(null,G__9981__9982);
G__9981__9982 = G__9984;
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
write_all.cljs$lang$applyTo = (function (arglist__9985){
var writer = cljs.core.first(arglist__9985);
var ss = cljs.core.rest(arglist__9985);
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
var this__9986 = this;
return this__9986.sb.append(s);
});
cljs.core.StringBufferWriter.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var this__9987 = this;
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3822__auto____9997 = cljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3822__auto____9997))
{var and__3822__auto____10001 = (function (){var G__9998__9999 = obj;
if(G__9998__9999)
{if((function (){var or__3824__auto____10000 = (G__9998__9999.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____10000)
{return or__3824__auto____10000;
} else
{return G__9998__9999.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__9998__9999.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__9998__9999);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__9998__9999);
}
})();
if(cljs.core.truth_(and__3822__auto____10001))
{return cljs.core.meta.call(null,obj);
} else
{return and__3822__auto____10001;
}
} else
{return and__3822__auto____9997;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"], true),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "], true)):null),(((function (){var and__3822__auto____10002 = !((obj == null));
if(and__3822__auto____10002)
{return obj.cljs$lang$type;
} else
{return and__3822__auto____10002;
}
})())?obj.cljs$lang$ctorPrSeq(obj):(((function (){var G__10003__10004 = obj;
if(G__10003__10004)
{if((function (){var or__3824__auto____10005 = (G__10003__10004.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3824__auto____10005)
{return or__3824__auto____10005;
} else
{return G__10003__10004.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__10003__10004.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__10003__10004);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__10003__10004);
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
{if(cljs.core.truth_((function (){var and__3822__auto____10018 = cljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3822__auto____10018))
{var and__3822__auto____10022 = (function (){var G__10019__10020 = obj;
if(G__10019__10020)
{if((function (){var or__3824__auto____10021 = (G__10019__10020.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____10021)
{return or__3824__auto____10021;
} else
{return G__10019__10020.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__10019__10020.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__10019__10020);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__10019__10020);
}
})();
if(cljs.core.truth_(and__3822__auto____10022))
{return cljs.core.meta.call(null,obj);
} else
{return and__3822__auto____10022;
}
} else
{return and__3822__auto____10018;
}
})()))
{cljs.core._write.call(null,writer,"^");
pr_writer.call(null,cljs.core.meta.call(null,obj),writer,opts);
cljs.core._write.call(null,writer," ");
} else
{}
if((function (){var and__3822__auto____10023 = !((obj == null));
if(and__3822__auto____10023)
{return obj.cljs$lang$type;
} else
{return and__3822__auto____10023;
}
})())
{return obj.cljs$lang$ctorPrWriter(writer,opts);
} else
{if((function (){var G__10024__10025 = obj;
if(G__10024__10025)
{if((function (){var or__3824__auto____10026 = (G__10024__10025.cljs$lang$protocol_mask$partition0$ & 2147483648);
if(or__3824__auto____10026)
{return or__3824__auto____10026;
} else
{return G__10024__10025.cljs$core$IPrintWithWriter$;
}
})())
{return true;
} else
{if((!G__10024__10025.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintWithWriter,G__10024__10025);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintWithWriter,G__10024__10025);
}
})())
{return cljs.core._pr_writer.call(null,obj,writer,opts);
} else
{if((function (){var G__10027__10028 = obj;
if(G__10027__10028)
{if((function (){var or__3824__auto____10029 = (G__10027__10028.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3824__auto____10029)
{return or__3824__auto____10029;
} else
{return G__10027__10028.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__10027__10028.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__10027__10028);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__10027__10028);
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
var G__10033__10034 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));
while(true){
if(G__10033__10034)
{var obj__10035 = cljs.core.first.call(null,G__10033__10034);
cljs.core._write.call(null,writer," ");
cljs.core.pr_writer.call(null,obj__10035,writer,opts);
{
var G__10036 = cljs.core.next.call(null,G__10033__10034);
G__10033__10034 = G__10036;
continue;
}
} else
{return null;
}
break;
}
});
cljs.core.pr_sb_with_opts = (function pr_sb_with_opts(objs,opts){
var sb__10039 = (new goog.string.StringBuffer());
var writer__10040 = (new cljs.core.StringBufferWriter(sb__10039));
cljs.core.pr_seq_writer.call(null,objs,writer__10040,opts);
cljs.core._flush.call(null,writer__10040);
return sb__10039;
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
{var sb__10042 = cljs.core.pr_sb_with_opts.call(null,objs,opts);
sb__10042.append("\n");
return [cljs.core.str(sb__10042)].join('');
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
pr_str.cljs$lang$applyTo = (function (arglist__10043){
var objs = cljs.core.seq(arglist__10043);;
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
prn_str.cljs$lang$applyTo = (function (arglist__10044){
var objs = cljs.core.seq(arglist__10044);;
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
pr.cljs$lang$applyTo = (function (arglist__10045){
var objs = cljs.core.seq(arglist__10045);;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__10046){
var objs = cljs.core.seq(arglist__10046);;
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
print_str.cljs$lang$applyTo = (function (arglist__10047){
var objs = cljs.core.seq(arglist__10047);;
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
println.cljs$lang$applyTo = (function (arglist__10048){
var objs = cljs.core.seq(arglist__10048);;
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
println_str.cljs$lang$applyTo = (function (arglist__10049){
var objs = cljs.core.seq(arglist__10049);;
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
prn.cljs$lang$applyTo = (function (arglist__10050){
var objs = cljs.core.seq(arglist__10050);;
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
printf.cljs$lang$applyTo = (function (arglist__10051){
var fmt = cljs.core.first(arglist__10051);
var args = cljs.core.rest(arglist__10051);
return printf__delegate(fmt, args);
});
printf.cljs$lang$arity$variadic = printf__delegate;
return printf;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__10052 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10052,"{",", ","}",opts,coll);
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
var pr_pair__10053 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10053,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__10054 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10054,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,[cljs.core.str(":"),cljs.core.str((function (){var temp__3974__auto____10055 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____10055))
{var nspc__10056 = temp__3974__auto____10055;
return [cljs.core.str(nspc__10056),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str((function (){var temp__3974__auto____10057 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____10057))
{var nspc__10058 = temp__3974__auto____10057;
return [cljs.core.str(nspc__10058),cljs.core.str("/")].join('');
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
var pr_pair__10059 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10059,"{",", ","}",opts,coll);
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
var normalize__10061 = (function (n,len){
var ns__10060 = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count.call(null,ns__10060) < len))
{{
var G__10063 = [cljs.core.str("0"),cljs.core.str(ns__10060)].join('');
ns__10060 = G__10063;
continue;
}
} else
{return ns__10060;
}
break;
}
});
return cljs.core.list.call(null,[cljs.core.str("#inst \""),cljs.core.str(d.getUTCFullYear()),cljs.core.str("-"),cljs.core.str(normalize__10061.call(null,(d.getUTCMonth() + 1),2)),cljs.core.str("-"),cljs.core.str(normalize__10061.call(null,d.getUTCDate(),2)),cljs.core.str("T"),cljs.core.str(normalize__10061.call(null,d.getUTCHours(),2)),cljs.core.str(":"),cljs.core.str(normalize__10061.call(null,d.getUTCMinutes(),2)),cljs.core.str(":"),cljs.core.str(normalize__10061.call(null,d.getUTCSeconds(),2)),cljs.core.str("."),cljs.core.str(normalize__10061.call(null,d.getUTCMilliseconds(),3)),cljs.core.str("-"),cljs.core.str("00:00\"")].join(''));
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
var pr_pair__10062 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10062,"{",", ","}",opts,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.HashMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var pr_pair__10064 = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair__10064,"{",", ","}",opts,coll);
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
var pr_pair__10065 = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair__10065,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var pr_pair__10066 = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair__10066,"{",", ","}",opts,coll);
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
var temp__3974__auto____10067 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____10067))
{var nspc__10068 = temp__3974__auto____10067;
cljs.core.write_all.call(null,writer,[cljs.core.str(nspc__10068)].join(''),"/");
} else
{}
return cljs.core._write.call(null,writer,cljs.core.name.call(null,obj));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{var temp__3974__auto____10069 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____10069))
{var nspc__10070 = temp__3974__auto____10069;
cljs.core.write_all.call(null,writer,[cljs.core.str(nspc__10070)].join(''),"/");
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
var pr_pair__10071 = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair__10071,"{",", ","}",opts,coll);
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
var normalize__10073 = (function (n,len){
var ns__10072 = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count.call(null,ns__10072) < len))
{{
var G__10075 = [cljs.core.str("0"),cljs.core.str(ns__10072)].join('');
ns__10072 = G__10075;
continue;
}
} else
{return ns__10072;
}
break;
}
});
return cljs.core.write_all.call(null,writer,"#inst \"",[cljs.core.str(d.getUTCFullYear())].join(''),"-",normalize__10073.call(null,(d.getUTCMonth() + 1),2),"-",normalize__10073.call(null,d.getUTCDate(),2),"T",normalize__10073.call(null,d.getUTCHours(),2),":",normalize__10073.call(null,d.getUTCMinutes(),2),":",normalize__10073.call(null,d.getUTCSeconds(),2),".",normalize__10073.call(null,d.getUTCMilliseconds(),3),"-","00:00\"");
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
var pr_pair__10074 = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair__10074,"{",", ","}",opts,coll);
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
var this__10076 = this;
return goog.getUid(this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var this__10077 = this;
var G__10078__10079 = cljs.core.seq.call(null,this__10077.watches);
while(true){
if(G__10078__10079)
{var vec__10080__10081 = cljs.core.first.call(null,G__10078__10079);
var key__10082 = cljs.core.nth.call(null,vec__10080__10081,0,null);
var f__10083 = cljs.core.nth.call(null,vec__10080__10081,1,null);
f__10083.call(null,key__10082,this$,oldval,newval);
{
var G__10091 = cljs.core.next.call(null,G__10078__10079);
G__10078__10079 = G__10091;
continue;
}
} else
{return null;
}
break;
}
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var this__10084 = this;
return this$.watches = cljs.core.assoc.call(null,this__10084.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var this__10085 = this;
return this$.watches = cljs.core.dissoc.call(null,this__10085.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var this__10086 = this;
cljs.core._write.call(null,writer,"#<Atom: ");
cljs.core._pr_writer.call(null,this__10086.state,writer,opts);
return cljs.core._write.call(null,writer,">");
});
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var this__10087 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "], true),cljs.core._pr_seq.call(null,this__10087.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var this__10088 = this;
return this__10088.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__10089 = this;
return this__10089.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__10090 = this;
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
var G__10103__delegate = function (x,p__10092){
var map__10098__10099 = p__10092;
var map__10098__10100 = ((cljs.core.seq_QMARK_.call(null,map__10098__10099))?cljs.core.apply.call(null,cljs.core.hash_map,map__10098__10099):map__10098__10099);
var validator__10101 = cljs.core._lookup.call(null,map__10098__10100,"\uFDD0'validator",null);
var meta__10102 = cljs.core._lookup.call(null,map__10098__10100,"\uFDD0'meta",null);
return (new cljs.core.Atom(x,meta__10102,validator__10101,null));
};
var G__10103 = function (x,var_args){
var p__10092 = null;
if (goog.isDef(var_args)) {
  p__10092 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__10103__delegate.call(this, x, p__10092);
};
G__10103.cljs$lang$maxFixedArity = 1;
G__10103.cljs$lang$applyTo = (function (arglist__10104){
var x = cljs.core.first(arglist__10104);
var p__10092 = cljs.core.rest(arglist__10104);
return G__10103__delegate(x, p__10092);
});
G__10103.cljs$lang$arity$variadic = G__10103__delegate;
return G__10103;
})()
;
atom = function(x,var_args){
var p__10092 = var_args;
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
var temp__3974__auto____10108 = a.validator;
if(cljs.core.truth_(temp__3974__auto____10108))
{var validate__10109 = temp__3974__auto____10108;
if(cljs.core.truth_(validate__10109.call(null,new_value)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",6683))))].join('')));
}
} else
{}
var old_value__10110 = a.state;
a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__10110,new_value);
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
var G__10111__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__10111 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10111__delegate.call(this, a, f, x, y, z, more);
};
G__10111.cljs$lang$maxFixedArity = 5;
G__10111.cljs$lang$applyTo = (function (arglist__10112){
var a = cljs.core.first(arglist__10112);
var f = cljs.core.first(cljs.core.next(arglist__10112));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10112)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10112))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10112)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10112)))));
return G__10111__delegate(a, f, x, y, z, more);
});
G__10111.cljs$lang$arity$variadic = G__10111__delegate;
return G__10111;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__10113){
var iref = cljs.core.first(arglist__10113);
var f = cljs.core.first(cljs.core.next(arglist__10113));
var args = cljs.core.rest(cljs.core.next(arglist__10113));
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
var this__10114 = this;
return (new cljs.core.Keyword("\uFDD0'done")).call(null,cljs.core.deref.call(null,this__10114.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__10115 = this;
return (new cljs.core.Keyword("\uFDD0'value")).call(null,cljs.core.swap_BANG_.call(null,this__10115.state,(function (p__10116){
var map__10117__10118 = p__10116;
var map__10117__10119 = ((cljs.core.seq_QMARK_.call(null,map__10117__10118))?cljs.core.apply.call(null,cljs.core.hash_map,map__10117__10118):map__10117__10118);
var curr_state__10120 = map__10117__10119;
var done__10121 = cljs.core._lookup.call(null,map__10117__10119,"\uFDD0'done",null);
if(cljs.core.truth_(done__10121))
{return curr_state__10120;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__10115.f.call(null)});
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
var map__10142__10143 = options;
var map__10142__10144 = ((cljs.core.seq_QMARK_.call(null,map__10142__10143))?cljs.core.apply.call(null,cljs.core.hash_map,map__10142__10143):map__10142__10143);
var keywordize_keys__10145 = cljs.core._lookup.call(null,map__10142__10144,"\uFDD0'keywordize-keys",null);
var keyfn__10146 = (cljs.core.truth_(keywordize_keys__10145)?cljs.core.keyword:cljs.core.str);
var f__10161 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,(function (){var iter__2621__auto____10160 = (function iter__10154(s__10155){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10155__10158 = s__10155;
while(true){
if(cljs.core.seq.call(null,s__10155__10158))
{var k__10159 = cljs.core.first.call(null,s__10155__10158);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__10146.call(null,k__10159),thisfn.call(null,(x[k__10159]))], true),iter__10154.call(null,cljs.core.rest.call(null,s__10155__10158)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2621__auto____10160.call(null,cljs.core.js_keys.call(null,x));
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
return f__10161.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__10162){
var x = cljs.core.first(arglist__10162);
var options = cljs.core.rest(arglist__10162);
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
var mem__10167 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
return (function() { 
var G__10171__delegate = function (args){
var temp__3971__auto____10168 = cljs.core._lookup.call(null,cljs.core.deref.call(null,mem__10167),args,null);
if(cljs.core.truth_(temp__3971__auto____10168))
{var v__10169 = temp__3971__auto____10168;
return v__10169;
} else
{var ret__10170 = cljs.core.apply.call(null,f,args);
cljs.core.swap_BANG_.call(null,mem__10167,cljs.core.assoc,args,ret__10170);
return ret__10170;
}
};
var G__10171 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10171__delegate.call(this, args);
};
G__10171.cljs$lang$maxFixedArity = 0;
G__10171.cljs$lang$applyTo = (function (arglist__10172){
var args = cljs.core.seq(arglist__10172);;
return G__10171__delegate(args);
});
G__10171.cljs$lang$arity$variadic = G__10171__delegate;
return G__10171;
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
var ret__10174 = f.call(null);
if(cljs.core.fn_QMARK_.call(null,ret__10174))
{{
var G__10175 = ret__10174;
f = G__10175;
continue;
}
} else
{return ret__10174;
}
break;
}
});
var trampoline__2 = (function() { 
var G__10176__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__10176 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__10176__delegate.call(this, f, args);
};
G__10176.cljs$lang$maxFixedArity = 1;
G__10176.cljs$lang$applyTo = (function (arglist__10177){
var f = cljs.core.first(arglist__10177);
var args = cljs.core.rest(arglist__10177);
return G__10176__delegate(f, args);
});
G__10176.cljs$lang$arity$variadic = G__10176__delegate;
return G__10176;
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
var k__10179 = f.call(null,x);
return cljs.core.assoc.call(null,ret,k__10179,cljs.core.conj.call(null,cljs.core._lookup.call(null,ret,k__10179,cljs.core.PersistentVector.EMPTY),x));
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
var or__3824__auto____10188 = cljs.core._EQ_.call(null,child,parent);
if(or__3824__auto____10188)
{return or__3824__auto____10188;
} else
{var or__3824__auto____10189 = cljs.core.contains_QMARK_.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h).call(null,child),parent);
if(or__3824__auto____10189)
{return or__3824__auto____10189;
} else
{var and__3822__auto____10190 = cljs.core.vector_QMARK_.call(null,parent);
if(and__3822__auto____10190)
{var and__3822__auto____10191 = cljs.core.vector_QMARK_.call(null,child);
if(and__3822__auto____10191)
{var and__3822__auto____10192 = (cljs.core.count.call(null,parent) === cljs.core.count.call(null,child));
if(and__3822__auto____10192)
{var ret__10193 = true;
var i__10194 = 0;
while(true){
if((function (){var or__3824__auto____10195 = cljs.core.not.call(null,ret__10193);
if(or__3824__auto____10195)
{return or__3824__auto____10195;
} else
{return (i__10194 === cljs.core.count.call(null,parent));
}
})())
{return ret__10193;
} else
{{
var G__10196 = isa_QMARK_.call(null,h,child.call(null,i__10194),parent.call(null,i__10194));
var G__10197 = (i__10194 + 1);
ret__10193 = G__10196;
i__10194 = G__10197;
continue;
}
}
break;
}
} else
{return and__3822__auto____10192;
}
} else
{return and__3822__auto____10191;
}
} else
{return and__3822__auto____10190;
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
var tp__10206 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var td__10207 = (new cljs.core.Keyword("\uFDD0'descendants")).call(null,h);
var ta__10208 = (new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h);
var tf__10209 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core._lookup.call(null,targets,k,cljs.core.PersistentHashSet.EMPTY),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});
var or__3824__auto____10210 = ((cljs.core.contains_QMARK_.call(null,tp__10206.call(null,tag),parent))?null:(function (){if(cljs.core.contains_QMARK_.call(null,ta__10208.call(null,tag),parent))
{throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else
{}
if(cljs.core.contains_QMARK_.call(null,ta__10208.call(null,parent),tag))
{throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,cljs.core.conj.call(null,cljs.core._lookup.call(null,tp__10206,tag,cljs.core.PersistentHashSet.EMPTY),parent)),"\uFDD0'ancestors":tf__10209.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,td__10207,parent,ta__10208),"\uFDD0'descendants":tf__10209.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),parent,ta__10208,tag,td__10207)});
})());
if(cljs.core.truth_(or__3824__auto____10210))
{return or__3824__auto____10210;
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
var parentMap__10215 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var childsParents__10216 = (cljs.core.truth_(parentMap__10215.call(null,tag))?cljs.core.disj.call(null,parentMap__10215.call(null,tag),parent):cljs.core.PersistentHashSet.EMPTY);
var newParents__10217 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__10216))?cljs.core.assoc.call(null,parentMap__10215,tag,childsParents__10216):cljs.core.dissoc.call(null,parentMap__10215,tag));
var deriv_seq__10218 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__10198_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__10198_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__10198_SHARP_),cljs.core.second.call(null,p1__10198_SHARP_)));
}),cljs.core.seq.call(null,newParents__10217)));
if(cljs.core.contains_QMARK_.call(null,parentMap__10215.call(null,tag),parent))
{return cljs.core.reduce.call(null,(function (p1__10199_SHARP_,p2__10200_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__10199_SHARP_,p2__10200_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__10218));
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
var xprefs__10226 = cljs.core.deref.call(null,prefer_table).call(null,x);
var or__3824__auto____10228 = (cljs.core.truth_((function (){var and__3822__auto____10227 = xprefs__10226;
if(cljs.core.truth_(and__3822__auto____10227))
{return xprefs__10226.call(null,y);
} else
{return and__3822__auto____10227;
}
})())?true:null);
if(cljs.core.truth_(or__3824__auto____10228))
{return or__3824__auto____10228;
} else
{var or__3824__auto____10230 = (function (){var ps__10229 = cljs.core.parents.call(null,y);
while(true){
if((cljs.core.count.call(null,ps__10229) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__10229),prefer_table)))
{} else
{}
{
var G__10233 = cljs.core.rest.call(null,ps__10229);
ps__10229 = G__10233;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____10230))
{return or__3824__auto____10230;
} else
{var or__3824__auto____10232 = (function (){var ps__10231 = cljs.core.parents.call(null,x);
while(true){
if((cljs.core.count.call(null,ps__10231) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__10231),y,prefer_table)))
{} else
{}
{
var G__10234 = cljs.core.rest.call(null,ps__10231);
ps__10231 = G__10234;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____10232))
{return or__3824__auto____10232;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3824__auto____10236 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);
if(cljs.core.truth_(or__3824__auto____10236))
{return or__3824__auto____10236;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__10254 = cljs.core.reduce.call(null,(function (be,p__10246){
var vec__10247__10248 = p__10246;
var k__10249 = cljs.core.nth.call(null,vec__10247__10248,0,null);
var ___10250 = cljs.core.nth.call(null,vec__10247__10248,1,null);
var e__10251 = vec__10247__10248;
if(cljs.core.isa_QMARK_.call(null,dispatch_val,k__10249))
{var be2__10253 = (cljs.core.truth_((function (){var or__3824__auto____10252 = (be == null);
if(or__3824__auto____10252)
{return or__3824__auto____10252;
} else
{return cljs.core.dominates.call(null,k__10249,cljs.core.first.call(null,be),prefer_table);
}
})())?e__10251:be);
if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__10253),k__10249,prefer_table)))
{} else
{throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k__10249),cljs.core.str(" and "),cljs.core.str(cljs.core.first.call(null,be2__10253)),cljs.core.str(", and neither is preferred")].join('')));
}
return be2__10253;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));
if(cljs.core.truth_(best_entry__10254))
{if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy)))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__10254));
return cljs.core.second.call(null,best_entry__10254);
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
if((function (){var and__3822__auto____10259 = mf;
if(and__3822__auto____10259)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3822__auto____10259;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{var x__2524__auto____10260 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10261 = (cljs.core._reset[goog.typeOf(x__2524__auto____10260)]);
if(or__3824__auto____10261)
{return or__3824__auto____10261;
} else
{var or__3824__auto____10262 = (cljs.core._reset["_"]);
if(or__3824__auto____10262)
{return or__3824__auto____10262;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3822__auto____10267 = mf;
if(and__3822__auto____10267)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3822__auto____10267;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{var x__2524__auto____10268 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10269 = (cljs.core._add_method[goog.typeOf(x__2524__auto____10268)]);
if(or__3824__auto____10269)
{return or__3824__auto____10269;
} else
{var or__3824__auto____10270 = (cljs.core._add_method["_"]);
if(or__3824__auto____10270)
{return or__3824__auto____10270;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3822__auto____10275 = mf;
if(and__3822__auto____10275)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3822__auto____10275;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{var x__2524__auto____10276 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10277 = (cljs.core._remove_method[goog.typeOf(x__2524__auto____10276)]);
if(or__3824__auto____10277)
{return or__3824__auto____10277;
} else
{var or__3824__auto____10278 = (cljs.core._remove_method["_"]);
if(or__3824__auto____10278)
{return or__3824__auto____10278;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3822__auto____10283 = mf;
if(and__3822__auto____10283)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3822__auto____10283;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{var x__2524__auto____10284 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10285 = (cljs.core._prefer_method[goog.typeOf(x__2524__auto____10284)]);
if(or__3824__auto____10285)
{return or__3824__auto____10285;
} else
{var or__3824__auto____10286 = (cljs.core._prefer_method["_"]);
if(or__3824__auto____10286)
{return or__3824__auto____10286;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3822__auto____10291 = mf;
if(and__3822__auto____10291)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3822__auto____10291;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{var x__2524__auto____10292 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10293 = (cljs.core._get_method[goog.typeOf(x__2524__auto____10292)]);
if(or__3824__auto____10293)
{return or__3824__auto____10293;
} else
{var or__3824__auto____10294 = (cljs.core._get_method["_"]);
if(or__3824__auto____10294)
{return or__3824__auto____10294;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if((function (){var and__3822__auto____10299 = mf;
if(and__3822__auto____10299)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3822__auto____10299;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{var x__2524__auto____10300 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10301 = (cljs.core._methods[goog.typeOf(x__2524__auto____10300)]);
if(or__3824__auto____10301)
{return or__3824__auto____10301;
} else
{var or__3824__auto____10302 = (cljs.core._methods["_"]);
if(or__3824__auto____10302)
{return or__3824__auto____10302;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3822__auto____10307 = mf;
if(and__3822__auto____10307)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3822__auto____10307;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{var x__2524__auto____10308 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10309 = (cljs.core._prefers[goog.typeOf(x__2524__auto____10308)]);
if(or__3824__auto____10309)
{return or__3824__auto____10309;
} else
{var or__3824__auto____10310 = (cljs.core._prefers["_"]);
if(or__3824__auto____10310)
{return or__3824__auto____10310;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if((function (){var and__3822__auto____10315 = mf;
if(and__3822__auto____10315)
{return mf.cljs$core$IMultiFn$_dispatch$arity$2;
} else
{return and__3822__auto____10315;
}
})())
{return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf,args);
} else
{var x__2524__auto____10316 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10317 = (cljs.core._dispatch[goog.typeOf(x__2524__auto____10316)]);
if(or__3824__auto____10317)
{return or__3824__auto____10317;
} else
{var or__3824__auto____10318 = (cljs.core._dispatch["_"]);
if(or__3824__auto____10318)
{return or__3824__auto____10318;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__10321 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__10322 = cljs.core._get_method.call(null,mf,dispatch_val__10321);
if(cljs.core.truth_(target_fn__10322))
{} else
{throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(cljs.core.name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val__10321)].join('')));
}
return cljs.core.apply.call(null,target_fn__10322,args);
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
var this__10323 = this;
return goog.getUid(this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var this__10324 = this;
cljs.core.swap_BANG_.call(null,this__10324.method_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__10324.method_cache,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__10324.prefer_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__10324.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var this__10325 = this;
cljs.core.swap_BANG_.call(null,this__10325.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__10325.method_cache,this__10325.method_table,this__10325.cached_hierarchy,this__10325.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var this__10326 = this;
cljs.core.swap_BANG_.call(null,this__10326.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__10326.method_cache,this__10326.method_table,this__10326.cached_hierarchy,this__10326.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var this__10327 = this;
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__10327.cached_hierarchy),cljs.core.deref.call(null,this__10327.hierarchy)))
{} else
{cljs.core.reset_cache.call(null,this__10327.method_cache,this__10327.method_table,this__10327.cached_hierarchy,this__10327.hierarchy);
}
var temp__3971__auto____10328 = cljs.core.deref.call(null,this__10327.method_cache).call(null,dispatch_val);
if(cljs.core.truth_(temp__3971__auto____10328))
{var target_fn__10329 = temp__3971__auto____10328;
return target_fn__10329;
} else
{var temp__3971__auto____10330 = cljs.core.find_and_cache_best_method.call(null,this__10327.name,dispatch_val,this__10327.hierarchy,this__10327.method_table,this__10327.prefer_table,this__10327.method_cache,this__10327.cached_hierarchy);
if(cljs.core.truth_(temp__3971__auto____10330))
{var target_fn__10331 = temp__3971__auto____10330;
return target_fn__10331;
} else
{return cljs.core.deref.call(null,this__10327.method_table).call(null,this__10327.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var this__10332 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__10332.prefer_table)))
{throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(this__10332.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else
{}
cljs.core.swap_BANG_.call(null,this__10332.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core._lookup.call(null,old,dispatch_val_x,cljs.core.PersistentHashSet.EMPTY),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__10332.method_cache,this__10332.method_table,this__10332.cached_hierarchy,this__10332.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var this__10333 = this;
return cljs.core.deref.call(null,this__10333.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var this__10334 = this;
return cljs.core.deref.call(null,this__10334.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = (function (mf,args){
var this__10335 = this;
return cljs.core.do_dispatch.call(null,mf,this__10335.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__10337__delegate = function (_,args){
var self__10336 = this;
return cljs.core._dispatch.call(null,self__10336,args);
};
var G__10337 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__10337__delegate.call(this, _, args);
};
G__10337.cljs$lang$maxFixedArity = 1;
G__10337.cljs$lang$applyTo = (function (arglist__10338){
var _ = cljs.core.first(arglist__10338);
var args = cljs.core.rest(arglist__10338);
return G__10337__delegate(_, args);
});
G__10337.cljs$lang$arity$variadic = G__10337__delegate;
return G__10337;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
var self__10339 = this;
return cljs.core._dispatch.call(null,self__10339,args);
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
var this__10340 = this;
return goog.string.hashCode(cljs.core.pr_str.call(null,this$));
});
cljs.core.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_10342,writer,_){
var this__10341 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(this__10341.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (_10344,_){
var this__10343 = this;
return cljs.core.list.call(null,[cljs.core.str("#uuid \""),cljs.core.str(this__10343.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var this__10345 = this;
var and__3822__auto____10346 = cljs.core.instance_QMARK_.call(null,cljs.core.UUID,other);
if(and__3822__auto____10346)
{return (this__10345.uuid === other.uuid);
} else
{return and__3822__auto____10346;
}
});
cljs.core.UUID.prototype.toString = (function (){
var this__10347 = this;
var this__10348 = this;
return cljs.core.pr_str.call(null,this__10348);
});
cljs.core.UUID;
