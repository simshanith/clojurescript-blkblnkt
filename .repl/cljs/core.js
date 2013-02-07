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
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
var x__9727 = (((x == null))?null:x);
if((p[goog.typeOf(x__9727)]))
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
var G__9815__delegate = function (array,i,idxs){
return cljs.core.apply.call(null,aget,aget.call(null,array,i),idxs);
};
var G__9815 = function (array,i,var_args){
var idxs = null;
if (goog.isDef(var_args)) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9815__delegate.call(this, array, i, idxs);
};
G__9815.cljs$lang$maxFixedArity = 2;
G__9815.cljs$lang$applyTo = (function (arglist__9831){
var array = cljs.core.first(arglist__9831);
var i = cljs.core.first(cljs.core.next(arglist__9831));
var idxs = cljs.core.rest(cljs.core.next(arglist__9831));
return G__9815__delegate(array, i, idxs);
});
G__9815.cljs$lang$arity$variadic = G__9815__delegate;
return G__9815;
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
if((function (){var and__3822__auto____10040 = this$;
if(and__3822__auto____10040)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3822__auto____10040;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{var x__3913__auto____10045 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____10047 = (cljs.core._invoke[goog.typeOf(x__3913__auto____10045)]);
if(or__3824__auto____10047)
{return or__3824__auto____10047;
} else
{var or__3824__auto____10048 = (cljs.core._invoke["_"]);
if(or__3824__auto____10048)
{return or__3824__auto____10048;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3822__auto____10050 = this$;
if(and__3822__auto____10050)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3822__auto____10050;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{var x__3913__auto____10054 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____10057 = (cljs.core._invoke[goog.typeOf(x__3913__auto____10054)]);
if(or__3824__auto____10057)
{return or__3824__auto____10057;
} else
{var or__3824__auto____10058 = (cljs.core._invoke["_"]);
if(or__3824__auto____10058)
{return or__3824__auto____10058;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3822__auto____10064 = this$;
if(and__3822__auto____10064)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3822__auto____10064;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{var x__3913__auto____10065 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____10066 = (cljs.core._invoke[goog.typeOf(x__3913__auto____10065)]);
if(or__3824__auto____10066)
{return or__3824__auto____10066;
} else
{var or__3824__auto____10067 = (cljs.core._invoke["_"]);
if(or__3824__auto____10067)
{return or__3824__auto____10067;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3822__auto____10068 = this$;
if(and__3822__auto____10068)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3822__auto____10068;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{var x__3913__auto____10069 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____10070 = (cljs.core._invoke[goog.typeOf(x__3913__auto____10069)]);
if(or__3824__auto____10070)
{return or__3824__auto____10070;
} else
{var or__3824__auto____10071 = (cljs.core._invoke["_"]);
if(or__3824__auto____10071)
{return or__3824__auto____10071;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3822__auto____10072 = this$;
if(and__3822__auto____10072)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3822__auto____10072;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{var x__3913__auto____10073 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____10074 = (cljs.core._invoke[goog.typeOf(x__3913__auto____10073)]);
if(or__3824__auto____10074)
{return or__3824__auto____10074;
} else
{var or__3824__auto____10075 = (cljs.core._invoke["_"]);
if(or__3824__auto____10075)
{return or__3824__auto____10075;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3822__auto____10076 = this$;
if(and__3822__auto____10076)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3822__auto____10076;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{var x__3913__auto____10077 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____10078 = (cljs.core._invoke[goog.typeOf(x__3913__auto____10077)]);
if(or__3824__auto____10078)
{return or__3824__auto____10078;
} else
{var or__3824__auto____10079 = (cljs.core._invoke["_"]);
if(or__3824__auto____10079)
{return or__3824__auto____10079;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3822__auto____10082 = this$;
if(and__3822__auto____10082)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3822__auto____10082;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{var x__3913__auto____10084 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____10086 = (cljs.core._invoke[goog.typeOf(x__3913__auto____10084)]);
if(or__3824__auto____10086)
{return or__3824__auto____10086;
} else
{var or__3824__auto____10087 = (cljs.core._invoke["_"]);
if(or__3824__auto____10087)
{return or__3824__auto____10087;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3822__auto____10088 = this$;
if(and__3822__auto____10088)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3822__auto____10088;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{var x__3913__auto____10090 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____10093 = (cljs.core._invoke[goog.typeOf(x__3913__auto____10090)]);
if(or__3824__auto____10093)
{return or__3824__auto____10093;
} else
{var or__3824__auto____10094 = (cljs.core._invoke["_"]);
if(or__3824__auto____10094)
{return or__3824__auto____10094;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3822__auto____10096 = this$;
if(and__3822__auto____10096)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3822__auto____10096;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{var x__3913__auto____10098 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____10100 = (cljs.core._invoke[goog.typeOf(x__3913__auto____10098)]);
if(or__3824__auto____10100)
{return or__3824__auto____10100;
} else
{var or__3824__auto____10101 = (cljs.core._invoke["_"]);
if(or__3824__auto____10101)
{return or__3824__auto____10101;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3822__auto____10103 = this$;
if(and__3822__auto____10103)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3822__auto____10103;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{var x__3913__auto____10105 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____10106 = (cljs.core._invoke[goog.typeOf(x__3913__auto____10105)]);
if(or__3824__auto____10106)
{return or__3824__auto____10106;
} else
{var or__3824__auto____10108 = (cljs.core._invoke["_"]);
if(or__3824__auto____10108)
{return or__3824__auto____10108;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3822__auto____10109 = this$;
if(and__3822__auto____10109)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3822__auto____10109;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{var x__3913__auto____10111 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____10112 = (cljs.core._invoke[goog.typeOf(x__3913__auto____10111)]);
if(or__3824__auto____10112)
{return or__3824__auto____10112;
} else
{var or__3824__auto____10114 = (cljs.core._invoke["_"]);
if(or__3824__auto____10114)
{return or__3824__auto____10114;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3822__auto____10116 = this$;
if(and__3822__auto____10116)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3822__auto____10116;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{var x__3913__auto____10118 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____10119 = (cljs.core._invoke[goog.typeOf(x__3913__auto____10118)]);
if(or__3824__auto____10119)
{return or__3824__auto____10119;
} else
{var or__3824__auto____10121 = (cljs.core._invoke["_"]);
if(or__3824__auto____10121)
{return or__3824__auto____10121;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3822__auto____10123 = this$;
if(and__3822__auto____10123)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3822__auto____10123;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{var x__3913__auto____10125 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____10127 = (cljs.core._invoke[goog.typeOf(x__3913__auto____10125)]);
if(or__3824__auto____10127)
{return or__3824__auto____10127;
} else
{var or__3824__auto____10128 = (cljs.core._invoke["_"]);
if(or__3824__auto____10128)
{return or__3824__auto____10128;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3822__auto____10129 = this$;
if(and__3822__auto____10129)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3822__auto____10129;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{var x__3913__auto____10130 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____10131 = (cljs.core._invoke[goog.typeOf(x__3913__auto____10130)]);
if(or__3824__auto____10131)
{return or__3824__auto____10131;
} else
{var or__3824__auto____10132 = (cljs.core._invoke["_"]);
if(or__3824__auto____10132)
{return or__3824__auto____10132;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3822__auto____10133 = this$;
if(and__3822__auto____10133)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3822__auto____10133;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{var x__3913__auto____10136 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____10137 = (cljs.core._invoke[goog.typeOf(x__3913__auto____10136)]);
if(or__3824__auto____10137)
{return or__3824__auto____10137;
} else
{var or__3824__auto____10138 = (cljs.core._invoke["_"]);
if(or__3824__auto____10138)
{return or__3824__auto____10138;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3822__auto____10141 = this$;
if(and__3822__auto____10141)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3822__auto____10141;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{var x__3913__auto____10142 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____10143 = (cljs.core._invoke[goog.typeOf(x__3913__auto____10142)]);
if(or__3824__auto____10143)
{return or__3824__auto____10143;
} else
{var or__3824__auto____10144 = (cljs.core._invoke["_"]);
if(or__3824__auto____10144)
{return or__3824__auto____10144;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3822__auto____10146 = this$;
if(and__3822__auto____10146)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3822__auto____10146;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{var x__3913__auto____10148 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____10150 = (cljs.core._invoke[goog.typeOf(x__3913__auto____10148)]);
if(or__3824__auto____10150)
{return or__3824__auto____10150;
} else
{var or__3824__auto____10153 = (cljs.core._invoke["_"]);
if(or__3824__auto____10153)
{return or__3824__auto____10153;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3822__auto____10155 = this$;
if(and__3822__auto____10155)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3822__auto____10155;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{var x__3913__auto____10157 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____10159 = (cljs.core._invoke[goog.typeOf(x__3913__auto____10157)]);
if(or__3824__auto____10159)
{return or__3824__auto____10159;
} else
{var or__3824__auto____10162 = (cljs.core._invoke["_"]);
if(or__3824__auto____10162)
{return or__3824__auto____10162;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if((function (){var and__3822__auto____10164 = this$;
if(and__3822__auto____10164)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3822__auto____10164;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{var x__3913__auto____10165 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____10166 = (cljs.core._invoke[goog.typeOf(x__3913__auto____10165)]);
if(or__3824__auto____10166)
{return or__3824__auto____10166;
} else
{var or__3824__auto____10167 = (cljs.core._invoke["_"]);
if(or__3824__auto____10167)
{return or__3824__auto____10167;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if((function (){var and__3822__auto____10168 = this$;
if(and__3822__auto____10168)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3822__auto____10168;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{var x__3913__auto____10169 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____10172 = (cljs.core._invoke[goog.typeOf(x__3913__auto____10169)]);
if(or__3824__auto____10172)
{return or__3824__auto____10172;
} else
{var or__3824__auto____10173 = (cljs.core._invoke["_"]);
if(or__3824__auto____10173)
{return or__3824__auto____10173;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if((function (){var and__3822__auto____10176 = this$;
if(and__3822__auto____10176)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3822__auto____10176;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{var x__3913__auto____10177 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____10179 = (cljs.core._invoke[goog.typeOf(x__3913__auto____10177)]);
if(or__3824__auto____10179)
{return or__3824__auto____10179;
} else
{var or__3824__auto____10181 = (cljs.core._invoke["_"]);
if(or__3824__auto____10181)
{return or__3824__auto____10181;
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
if((function (){var and__3822__auto____10505 = coll;
if(and__3822__auto____10505)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3822__auto____10505;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{var x__3913__auto____10506 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10507 = (cljs.core._count[goog.typeOf(x__3913__auto____10506)]);
if(or__3824__auto____10507)
{return or__3824__auto____10507;
} else
{var or__3824__auto____10508 = (cljs.core._count["_"]);
if(or__3824__auto____10508)
{return or__3824__auto____10508;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if((function (){var and__3822__auto____10526 = coll;
if(and__3822__auto____10526)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3822__auto____10526;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var x__3913__auto____10528 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10530 = (cljs.core._empty[goog.typeOf(x__3913__auto____10528)]);
if(or__3824__auto____10530)
{return or__3824__auto____10530;
} else
{var or__3824__auto____10531 = (cljs.core._empty["_"]);
if(or__3824__auto____10531)
{return or__3824__auto____10531;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3822__auto____10549 = coll;
if(and__3822__auto____10549)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3822__auto____10549;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{var x__3913__auto____10551 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10552 = (cljs.core._conj[goog.typeOf(x__3913__auto____10551)]);
if(or__3824__auto____10552)
{return or__3824__auto____10552;
} else
{var or__3824__auto____10554 = (cljs.core._conj["_"]);
if(or__3824__auto____10554)
{return or__3824__auto____10554;
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
if((function (){var and__3822__auto____10584 = coll;
if(and__3822__auto____10584)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3822__auto____10584;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{var x__3913__auto____10586 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10588 = (cljs.core._nth[goog.typeOf(x__3913__auto____10586)]);
if(or__3824__auto____10588)
{return or__3824__auto____10588;
} else
{var or__3824__auto____10590 = (cljs.core._nth["_"]);
if(or__3824__auto____10590)
{return or__3824__auto____10590;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3822__auto____10592 = coll;
if(and__3822__auto____10592)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3822__auto____10592;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{var x__3913__auto____10594 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10595 = (cljs.core._nth[goog.typeOf(x__3913__auto____10594)]);
if(or__3824__auto____10595)
{return or__3824__auto____10595;
} else
{var or__3824__auto____10597 = (cljs.core._nth["_"]);
if(or__3824__auto____10597)
{return or__3824__auto____10597;
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
if((function (){var and__3822__auto____10635 = coll;
if(and__3822__auto____10635)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3822__auto____10635;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{var x__3913__auto____10636 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10637 = (cljs.core._first[goog.typeOf(x__3913__auto____10636)]);
if(or__3824__auto____10637)
{return or__3824__auto____10637;
} else
{var or__3824__auto____10638 = (cljs.core._first["_"]);
if(or__3824__auto____10638)
{return or__3824__auto____10638;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if((function (){var and__3822__auto____10643 = coll;
if(and__3822__auto____10643)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3822__auto____10643;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{var x__3913__auto____10644 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10645 = (cljs.core._rest[goog.typeOf(x__3913__auto____10644)]);
if(or__3824__auto____10645)
{return or__3824__auto____10645;
} else
{var or__3824__auto____10646 = (cljs.core._rest["_"]);
if(or__3824__auto____10646)
{return or__3824__auto____10646;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.INext = {};
cljs.core._next = (function _next(coll){
if((function (){var and__3822__auto____10651 = coll;
if(and__3822__auto____10651)
{return coll.cljs$core$INext$_next$arity$1;
} else
{return and__3822__auto____10651;
}
})())
{return coll.cljs$core$INext$_next$arity$1(coll);
} else
{var x__3913__auto____10652 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10653 = (cljs.core._next[goog.typeOf(x__3913__auto____10652)]);
if(or__3824__auto____10653)
{return or__3824__auto____10653;
} else
{var or__3824__auto____10654 = (cljs.core._next["_"]);
if(or__3824__auto____10654)
{return or__3824__auto____10654;
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
if((function (){var and__3822__auto____10663 = o;
if(and__3822__auto____10663)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3822__auto____10663;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{var x__3913__auto____10664 = (((o == null))?null:o);
return (function (){var or__3824__auto____10665 = (cljs.core._lookup[goog.typeOf(x__3913__auto____10664)]);
if(or__3824__auto____10665)
{return or__3824__auto____10665;
} else
{var or__3824__auto____10666 = (cljs.core._lookup["_"]);
if(or__3824__auto____10666)
{return or__3824__auto____10666;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3822__auto____10667 = o;
if(and__3822__auto____10667)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3822__auto____10667;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{var x__3913__auto____10668 = (((o == null))?null:o);
return (function (){var or__3824__auto____10669 = (cljs.core._lookup[goog.typeOf(x__3913__auto____10668)]);
if(or__3824__auto____10669)
{return or__3824__auto____10669;
} else
{var or__3824__auto____10670 = (cljs.core._lookup["_"]);
if(or__3824__auto____10670)
{return or__3824__auto____10670;
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
if((function (){var and__3822__auto____10675 = coll;
if(and__3822__auto____10675)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3822__auto____10675;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{var x__3913__auto____10676 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10677 = (cljs.core._contains_key_QMARK_[goog.typeOf(x__3913__auto____10676)]);
if(or__3824__auto____10677)
{return or__3824__auto____10677;
} else
{var or__3824__auto____10678 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3824__auto____10678)
{return or__3824__auto____10678;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3822__auto____10683 = coll;
if(and__3822__auto____10683)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3822__auto____10683;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{var x__3913__auto____10684 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10685 = (cljs.core._assoc[goog.typeOf(x__3913__auto____10684)]);
if(or__3824__auto____10685)
{return or__3824__auto____10685;
} else
{var or__3824__auto____10686 = (cljs.core._assoc["_"]);
if(or__3824__auto____10686)
{return or__3824__auto____10686;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3822__auto____10691 = coll;
if(and__3822__auto____10691)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3822__auto____10691;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{var x__3913__auto____10692 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10693 = (cljs.core._dissoc[goog.typeOf(x__3913__auto____10692)]);
if(or__3824__auto____10693)
{return or__3824__auto____10693;
} else
{var or__3824__auto____10694 = (cljs.core._dissoc["_"]);
if(or__3824__auto____10694)
{return or__3824__auto____10694;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.IMapEntry = {};
cljs.core._key = (function _key(coll){
if((function (){var and__3822__auto____10699 = coll;
if(and__3822__auto____10699)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3822__auto____10699;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{var x__3913__auto____10700 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10701 = (cljs.core._key[goog.typeOf(x__3913__auto____10700)]);
if(or__3824__auto____10701)
{return or__3824__auto____10701;
} else
{var or__3824__auto____10702 = (cljs.core._key["_"]);
if(or__3824__auto____10702)
{return or__3824__auto____10702;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){
if((function (){var and__3822__auto____10707 = coll;
if(and__3822__auto____10707)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3822__auto____10707;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{var x__3913__auto____10708 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10709 = (cljs.core._val[goog.typeOf(x__3913__auto____10708)]);
if(or__3824__auto____10709)
{return or__3824__auto____10709;
} else
{var or__3824__auto____10710 = (cljs.core._val["_"]);
if(or__3824__auto____10710)
{return or__3824__auto____10710;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3822__auto____10715 = coll;
if(and__3822__auto____10715)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3822__auto____10715;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{var x__3913__auto____10716 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10717 = (cljs.core._disjoin[goog.typeOf(x__3913__auto____10716)]);
if(or__3824__auto____10717)
{return or__3824__auto____10717;
} else
{var or__3824__auto____10718 = (cljs.core._disjoin["_"]);
if(or__3824__auto____10718)
{return or__3824__auto____10718;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if((function (){var and__3822__auto____10723 = coll;
if(and__3822__auto____10723)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3822__auto____10723;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{var x__3913__auto____10724 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10725 = (cljs.core._peek[goog.typeOf(x__3913__auto____10724)]);
if(or__3824__auto____10725)
{return or__3824__auto____10725;
} else
{var or__3824__auto____10726 = (cljs.core._peek["_"]);
if(or__3824__auto____10726)
{return or__3824__auto____10726;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if((function (){var and__3822__auto____10731 = coll;
if(and__3822__auto____10731)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3822__auto____10731;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{var x__3913__auto____10732 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10733 = (cljs.core._pop[goog.typeOf(x__3913__auto____10732)]);
if(or__3824__auto____10733)
{return or__3824__auto____10733;
} else
{var or__3824__auto____10734 = (cljs.core._pop["_"]);
if(or__3824__auto____10734)
{return or__3824__auto____10734;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3822__auto____10739 = coll;
if(and__3822__auto____10739)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3822__auto____10739;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{var x__3913__auto____10740 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10741 = (cljs.core._assoc_n[goog.typeOf(x__3913__auto____10740)]);
if(or__3824__auto____10741)
{return or__3824__auto____10741;
} else
{var or__3824__auto____10742 = (cljs.core._assoc_n["_"]);
if(or__3824__auto____10742)
{return or__3824__auto____10742;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if((function (){var and__3822__auto____10747 = o;
if(and__3822__auto____10747)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3822__auto____10747;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{var x__3913__auto____10748 = (((o == null))?null:o);
return (function (){var or__3824__auto____10749 = (cljs.core._deref[goog.typeOf(x__3913__auto____10748)]);
if(or__3824__auto____10749)
{return or__3824__auto____10749;
} else
{var or__3824__auto____10750 = (cljs.core._deref["_"]);
if(or__3824__auto____10750)
{return or__3824__auto____10750;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3822__auto____10755 = o;
if(and__3822__auto____10755)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3822__auto____10755;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{var x__3913__auto____10756 = (((o == null))?null:o);
return (function (){var or__3824__auto____10757 = (cljs.core._deref_with_timeout[goog.typeOf(x__3913__auto____10756)]);
if(or__3824__auto____10757)
{return or__3824__auto____10757;
} else
{var or__3824__auto____10758 = (cljs.core._deref_with_timeout["_"]);
if(or__3824__auto____10758)
{return or__3824__auto____10758;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if((function (){var and__3822__auto____10763 = o;
if(and__3822__auto____10763)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3822__auto____10763;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{var x__3913__auto____10764 = (((o == null))?null:o);
return (function (){var or__3824__auto____10765 = (cljs.core._meta[goog.typeOf(x__3913__auto____10764)]);
if(or__3824__auto____10765)
{return or__3824__auto____10765;
} else
{var or__3824__auto____10766 = (cljs.core._meta["_"]);
if(or__3824__auto____10766)
{return or__3824__auto____10766;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3822__auto____10771 = o;
if(and__3822__auto____10771)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3822__auto____10771;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{var x__3913__auto____10772 = (((o == null))?null:o);
return (function (){var or__3824__auto____10773 = (cljs.core._with_meta[goog.typeOf(x__3913__auto____10772)]);
if(or__3824__auto____10773)
{return or__3824__auto____10773;
} else
{var or__3824__auto____10774 = (cljs.core._with_meta["_"]);
if(or__3824__auto____10774)
{return or__3824__auto____10774;
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
if((function (){var and__3822__auto____10783 = coll;
if(and__3822__auto____10783)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3822__auto____10783;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{var x__3913__auto____10784 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10785 = (cljs.core._reduce[goog.typeOf(x__3913__auto____10784)]);
if(or__3824__auto____10785)
{return or__3824__auto____10785;
} else
{var or__3824__auto____10786 = (cljs.core._reduce["_"]);
if(or__3824__auto____10786)
{return or__3824__auto____10786;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3822__auto____10787 = coll;
if(and__3822__auto____10787)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3822__auto____10787;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{var x__3913__auto____10788 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10789 = (cljs.core._reduce[goog.typeOf(x__3913__auto____10788)]);
if(or__3824__auto____10789)
{return or__3824__auto____10789;
} else
{var or__3824__auto____10790 = (cljs.core._reduce["_"]);
if(or__3824__auto____10790)
{return or__3824__auto____10790;
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
if((function (){var and__3822__auto____10795 = coll;
if(and__3822__auto____10795)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3822__auto____10795;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{var x__3913__auto____10796 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10797 = (cljs.core._kv_reduce[goog.typeOf(x__3913__auto____10796)]);
if(or__3824__auto____10797)
{return or__3824__auto____10797;
} else
{var or__3824__auto____10798 = (cljs.core._kv_reduce["_"]);
if(or__3824__auto____10798)
{return or__3824__auto____10798;
} else
{throw cljs.core.missing_protocol.call(null,"IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3822__auto____10803 = o;
if(and__3822__auto____10803)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3822__auto____10803;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{var x__3913__auto____10804 = (((o == null))?null:o);
return (function (){var or__3824__auto____10805 = (cljs.core._equiv[goog.typeOf(x__3913__auto____10804)]);
if(or__3824__auto____10805)
{return or__3824__auto____10805;
} else
{var or__3824__auto____10806 = (cljs.core._equiv["_"]);
if(or__3824__auto____10806)
{return or__3824__auto____10806;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if((function (){var and__3822__auto____10811 = o;
if(and__3822__auto____10811)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3822__auto____10811;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{var x__3913__auto____10812 = (((o == null))?null:o);
return (function (){var or__3824__auto____10813 = (cljs.core._hash[goog.typeOf(x__3913__auto____10812)]);
if(or__3824__auto____10813)
{return or__3824__auto____10813;
} else
{var or__3824__auto____10814 = (cljs.core._hash["_"]);
if(or__3824__auto____10814)
{return or__3824__auto____10814;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if((function (){var and__3822__auto____10819 = o;
if(and__3822__auto____10819)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3822__auto____10819;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{var x__3913__auto____10820 = (((o == null))?null:o);
return (function (){var or__3824__auto____10821 = (cljs.core._seq[goog.typeOf(x__3913__auto____10820)]);
if(or__3824__auto____10821)
{return or__3824__auto____10821;
} else
{var or__3824__auto____10822 = (cljs.core._seq["_"]);
if(or__3824__auto____10822)
{return or__3824__auto____10822;
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
if((function (){var and__3822__auto____10827 = coll;
if(and__3822__auto____10827)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3822__auto____10827;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{var x__3913__auto____10828 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10829 = (cljs.core._rseq[goog.typeOf(x__3913__auto____10828)]);
if(or__3824__auto____10829)
{return or__3824__auto____10829;
} else
{var or__3824__auto____10830 = (cljs.core._rseq["_"]);
if(or__3824__auto____10830)
{return or__3824__auto____10830;
} else
{throw cljs.core.missing_protocol.call(null,"IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISorted = {};
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3822__auto____10835 = coll;
if(and__3822__auto____10835)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3822__auto____10835;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{var x__3913__auto____10836 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10837 = (cljs.core._sorted_seq[goog.typeOf(x__3913__auto____10836)]);
if(or__3824__auto____10837)
{return or__3824__auto____10837;
} else
{var or__3824__auto____10838 = (cljs.core._sorted_seq["_"]);
if(or__3824__auto____10838)
{return or__3824__auto____10838;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3822__auto____10843 = coll;
if(and__3822__auto____10843)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3822__auto____10843;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{var x__3913__auto____10844 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10845 = (cljs.core._sorted_seq_from[goog.typeOf(x__3913__auto____10844)]);
if(or__3824__auto____10845)
{return or__3824__auto____10845;
} else
{var or__3824__auto____10846 = (cljs.core._sorted_seq_from["_"]);
if(or__3824__auto____10846)
{return or__3824__auto____10846;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3822__auto____10851 = coll;
if(and__3822__auto____10851)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3822__auto____10851;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{var x__3913__auto____10852 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10853 = (cljs.core._entry_key[goog.typeOf(x__3913__auto____10852)]);
if(or__3824__auto____10853)
{return or__3824__auto____10853;
} else
{var or__3824__auto____10854 = (cljs.core._entry_key["_"]);
if(or__3824__auto____10854)
{return or__3824__auto____10854;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3822__auto____10859 = coll;
if(and__3822__auto____10859)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3822__auto____10859;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{var x__3913__auto____10860 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10861 = (cljs.core._comparator[goog.typeOf(x__3913__auto____10860)]);
if(or__3824__auto____10861)
{return or__3824__auto____10861;
} else
{var or__3824__auto____10862 = (cljs.core._comparator["_"]);
if(or__3824__auto____10862)
{return or__3824__auto____10862;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if((function (){var and__3822__auto____10867 = o;
if(and__3822__auto____10867)
{return o.cljs$core$IPrintable$_pr_seq$arity$2;
} else
{return and__3822__auto____10867;
}
})())
{return o.cljs$core$IPrintable$_pr_seq$arity$2(o,opts);
} else
{var x__3913__auto____10868 = (((o == null))?null:o);
return (function (){var or__3824__auto____10869 = (cljs.core._pr_seq[goog.typeOf(x__3913__auto____10868)]);
if(or__3824__auto____10869)
{return or__3824__auto____10869;
} else
{var or__3824__auto____10870 = (cljs.core._pr_seq["_"]);
if(or__3824__auto____10870)
{return or__3824__auto____10870;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3822__auto____10875 = d;
if(and__3822__auto____10875)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3822__auto____10875;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{var x__3913__auto____10876 = (((d == null))?null:d);
return (function (){var or__3824__auto____10877 = (cljs.core._realized_QMARK_[goog.typeOf(x__3913__auto____10876)]);
if(or__3824__auto____10877)
{return or__3824__auto____10877;
} else
{var or__3824__auto____10878 = (cljs.core._realized_QMARK_["_"]);
if(or__3824__auto____10878)
{return or__3824__auto____10878;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3822__auto____10883 = this$;
if(and__3822__auto____10883)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3822__auto____10883;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{var x__3913__auto____10884 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____10885 = (cljs.core._notify_watches[goog.typeOf(x__3913__auto____10884)]);
if(or__3824__auto____10885)
{return or__3824__auto____10885;
} else
{var or__3824__auto____10886 = (cljs.core._notify_watches["_"]);
if(or__3824__auto____10886)
{return or__3824__auto____10886;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3822__auto____10891 = this$;
if(and__3822__auto____10891)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3822__auto____10891;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{var x__3913__auto____10892 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____10893 = (cljs.core._add_watch[goog.typeOf(x__3913__auto____10892)]);
if(or__3824__auto____10893)
{return or__3824__auto____10893;
} else
{var or__3824__auto____10894 = (cljs.core._add_watch["_"]);
if(or__3824__auto____10894)
{return or__3824__auto____10894;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3822__auto____10899 = this$;
if(and__3822__auto____10899)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3822__auto____10899;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{var x__3913__auto____10900 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____10901 = (cljs.core._remove_watch[goog.typeOf(x__3913__auto____10900)]);
if(or__3824__auto____10901)
{return or__3824__auto____10901;
} else
{var or__3824__auto____10902 = (cljs.core._remove_watch["_"]);
if(or__3824__auto____10902)
{return or__3824__auto____10902;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
cljs.core.IEditableCollection = {};
cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3822__auto____10907 = coll;
if(and__3822__auto____10907)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3822__auto____10907;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{var x__3913__auto____10908 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10909 = (cljs.core._as_transient[goog.typeOf(x__3913__auto____10908)]);
if(or__3824__auto____10909)
{return or__3824__auto____10909;
} else
{var or__3824__auto____10910 = (cljs.core._as_transient["_"]);
if(or__3824__auto____10910)
{return or__3824__auto____10910;
} else
{throw cljs.core.missing_protocol.call(null,"IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ITransientCollection = {};
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3822__auto____10915 = tcoll;
if(and__3822__auto____10915)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3822__auto____10915;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{var x__3913__auto____10916 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____10917 = (cljs.core._conj_BANG_[goog.typeOf(x__3913__auto____10916)]);
if(or__3824__auto____10917)
{return or__3824__auto____10917;
} else
{var or__3824__auto____10918 = (cljs.core._conj_BANG_["_"]);
if(or__3824__auto____10918)
{return or__3824__auto____10918;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3822__auto____10923 = tcoll;
if(and__3822__auto____10923)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3822__auto____10923;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{var x__3913__auto____10924 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____10925 = (cljs.core._persistent_BANG_[goog.typeOf(x__3913__auto____10924)]);
if(or__3824__auto____10925)
{return or__3824__auto____10925;
} else
{var or__3824__auto____10926 = (cljs.core._persistent_BANG_["_"]);
if(or__3824__auto____10926)
{return or__3824__auto____10926;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientAssociative = {};
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3822__auto____10931 = tcoll;
if(and__3822__auto____10931)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3822__auto____10931;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{var x__3913__auto____10932 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____10933 = (cljs.core._assoc_BANG_[goog.typeOf(x__3913__auto____10932)]);
if(or__3824__auto____10933)
{return or__3824__auto____10933;
} else
{var or__3824__auto____10934 = (cljs.core._assoc_BANG_["_"]);
if(or__3824__auto____10934)
{return or__3824__auto____10934;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
cljs.core.ITransientMap = {};
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3822__auto____10939 = tcoll;
if(and__3822__auto____10939)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3822__auto____10939;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{var x__3913__auto____10940 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____10941 = (cljs.core._dissoc_BANG_[goog.typeOf(x__3913__auto____10940)]);
if(or__3824__auto____10941)
{return or__3824__auto____10941;
} else
{var or__3824__auto____10942 = (cljs.core._dissoc_BANG_["_"]);
if(or__3824__auto____10942)
{return or__3824__auto____10942;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
cljs.core.ITransientVector = {};
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3822__auto____10947 = tcoll;
if(and__3822__auto____10947)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3822__auto____10947;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{var x__3913__auto____10948 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____10949 = (cljs.core._assoc_n_BANG_[goog.typeOf(x__3913__auto____10948)]);
if(or__3824__auto____10949)
{return or__3824__auto____10949;
} else
{var or__3824__auto____10950 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3824__auto____10950)
{return or__3824__auto____10950;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3822__auto____10955 = tcoll;
if(and__3822__auto____10955)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3822__auto____10955;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{var x__3913__auto____10956 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____10957 = (cljs.core._pop_BANG_[goog.typeOf(x__3913__auto____10956)]);
if(or__3824__auto____10957)
{return or__3824__auto____10957;
} else
{var or__3824__auto____10958 = (cljs.core._pop_BANG_["_"]);
if(or__3824__auto____10958)
{return or__3824__auto____10958;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientSet = {};
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3822__auto____10963 = tcoll;
if(and__3822__auto____10963)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3822__auto____10963;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{var x__3913__auto____10964 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____10965 = (cljs.core._disjoin_BANG_[goog.typeOf(x__3913__auto____10964)]);
if(or__3824__auto____10965)
{return or__3824__auto____10965;
} else
{var or__3824__auto____10966 = (cljs.core._disjoin_BANG_["_"]);
if(or__3824__auto____10966)
{return or__3824__auto____10966;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
cljs.core.IComparable = {};
cljs.core._compare = (function _compare(x,y){
if((function (){var and__3822__auto____10971 = x;
if(and__3822__auto____10971)
{return x.cljs$core$IComparable$_compare$arity$2;
} else
{return and__3822__auto____10971;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else
{var x__3913__auto____10972 = (((x == null))?null:x);
return (function (){var or__3824__auto____10973 = (cljs.core._compare[goog.typeOf(x__3913__auto____10972)]);
if(or__3824__auto____10973)
{return or__3824__auto____10973;
} else
{var or__3824__auto____10974 = (cljs.core._compare["_"]);
if(or__3824__auto____10974)
{return or__3824__auto____10974;
} else
{throw cljs.core.missing_protocol.call(null,"IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});
cljs.core.IChunk = {};
cljs.core._drop_first = (function _drop_first(coll){
if((function (){var and__3822__auto____10979 = coll;
if(and__3822__auto____10979)
{return coll.cljs$core$IChunk$_drop_first$arity$1;
} else
{return and__3822__auto____10979;
}
})())
{return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else
{var x__3913__auto____10980 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10981 = (cljs.core._drop_first[goog.typeOf(x__3913__auto____10980)]);
if(or__3824__auto____10981)
{return or__3824__auto____10981;
} else
{var or__3824__auto____10982 = (cljs.core._drop_first["_"]);
if(or__3824__auto____10982)
{return or__3824__auto____10982;
} else
{throw cljs.core.missing_protocol.call(null,"IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedSeq = {};
cljs.core._chunked_first = (function _chunked_first(coll){
if((function (){var and__3822__auto____10987 = coll;
if(and__3822__auto____10987)
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else
{return and__3822__auto____10987;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else
{var x__3913__auto____10988 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10989 = (cljs.core._chunked_first[goog.typeOf(x__3913__auto____10988)]);
if(or__3824__auto____10989)
{return or__3824__auto____10989;
} else
{var or__3824__auto____10990 = (cljs.core._chunked_first["_"]);
if(or__3824__auto____10990)
{return or__3824__auto____10990;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._chunked_rest = (function _chunked_rest(coll){
if((function (){var and__3822__auto____10995 = coll;
if(and__3822__auto____10995)
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else
{return and__3822__auto____10995;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else
{var x__3913__auto____10996 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10997 = (cljs.core._chunked_rest[goog.typeOf(x__3913__auto____10996)]);
if(or__3824__auto____10997)
{return or__3824__auto____10997;
} else
{var or__3824__auto____10998 = (cljs.core._chunked_rest["_"]);
if(or__3824__auto____10998)
{return or__3824__auto____10998;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedNext = {};
cljs.core._chunked_next = (function _chunked_next(coll){
if((function (){var and__3822__auto____11003 = coll;
if(and__3822__auto____11003)
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else
{return and__3822__auto____11003;
}
})())
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else
{var x__3913__auto____11004 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____11005 = (cljs.core._chunked_next[goog.typeOf(x__3913__auto____11004)]);
if(or__3824__auto____11005)
{return or__3824__auto____11005;
} else
{var or__3824__auto____11006 = (cljs.core._chunked_next["_"]);
if(or__3824__auto____11006)
{return or__3824__auto____11006;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedNext.-chunked-next",coll);
}
}
})().call(null,coll);
}
});
/**
* Tests if 2 arguments are the same object
*/
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
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
var or__3824__auto____11008 = (x === y);
if(or__3824__auto____11008)
{return or__3824__auto____11008;
} else
{return cljs.core._equiv.call(null,x,y);
}
});
var _EQ___3 = (function() { 
var G__11009__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__11010 = y;
var G__11011 = cljs.core.first.call(null,more);
var G__11012 = cljs.core.next.call(null,more);
x = G__11010;
y = G__11011;
more = G__11012;
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
var G__11009 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11009__delegate.call(this, x, y, more);
};
G__11009.cljs$lang$maxFixedArity = 2;
G__11009.cljs$lang$applyTo = (function (arglist__11013){
var x = cljs.core.first(arglist__11013);
var y = cljs.core.first(cljs.core.next(arglist__11013));
var more = cljs.core.rest(cljs.core.next(arglist__11013));
return G__11009__delegate(x, y, more);
});
G__11009.cljs$lang$arity$variadic = G__11009__delegate;
return G__11009;
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
/**
* Returns true if x is nil, false otherwise.
*/
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return (x == null);
});
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
var G__11014 = null;
var G__11014__2 = (function (o,k){
return null;
});
var G__11014__3 = (function (o,k,not_found){
return not_found;
});
G__11014 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__11014__2.call(this,o,k);
case 3:
return G__11014__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11014;
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
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__11015 = null;
var G__11015__2 = (function (_,f){
return f.call(null);
});
var G__11015__3 = (function (_,f,start){
return start;
});
G__11015 = function(_,f,start){
switch(arguments.length){
case 2:
return G__11015__2.call(this,_,f);
case 3:
return G__11015__3.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11015;
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
var G__11016 = null;
var G__11016__2 = (function (_,n){
return null;
});
var G__11016__3 = (function (_,n,not_found){
return not_found;
});
G__11016 = function(_,n,not_found){
switch(arguments.length){
case 2:
return G__11016__2.call(this,_,n);
case 3:
return G__11016__3.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11016;
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
var and__3822__auto____11017 = cljs.core.instance_QMARK_.call(null,Date,other);
if(and__3822__auto____11017)
{return (o.toString() === other.toString());
} else
{return and__3822__auto____11017;
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
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__2 = (function (cicoll,f){
var cnt__11030 = cljs.core._count.call(null,cicoll);
if((cnt__11030 === 0))
{return f.call(null);
} else
{var val__11031 = cljs.core._nth.call(null,cicoll,0);
var n__11032 = 1;
while(true){
if((n__11032 < cnt__11030))
{var nval__11033 = f.call(null,val__11031,cljs.core._nth.call(null,cicoll,n__11032));
if(cljs.core.reduced_QMARK_.call(null,nval__11033))
{return cljs.core.deref.call(null,nval__11033);
} else
{{
var G__11042 = nval__11033;
var G__11043 = (n__11032 + 1);
val__11031 = G__11042;
n__11032 = G__11043;
continue;
}
}
} else
{return val__11031;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var cnt__11034 = cljs.core._count.call(null,cicoll);
var val__11035 = val;
var n__11036 = 0;
while(true){
if((n__11036 < cnt__11034))
{var nval__11037 = f.call(null,val__11035,cljs.core._nth.call(null,cicoll,n__11036));
if(cljs.core.reduced_QMARK_.call(null,nval__11037))
{return cljs.core.deref.call(null,nval__11037);
} else
{{
var G__11044 = nval__11037;
var G__11045 = (n__11036 + 1);
val__11035 = G__11044;
n__11036 = G__11045;
continue;
}
}
} else
{return val__11035;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var cnt__11038 = cljs.core._count.call(null,cicoll);
var val__11039 = val;
var n__11040 = idx;
while(true){
if((n__11040 < cnt__11038))
{var nval__11041 = f.call(null,val__11039,cljs.core._nth.call(null,cicoll,n__11040));
if(cljs.core.reduced_QMARK_.call(null,nval__11041))
{return cljs.core.deref.call(null,nval__11041);
} else
{{
var G__11046 = nval__11041;
var G__11047 = (n__11040 + 1);
val__11039 = G__11046;
n__11040 = G__11047;
continue;
}
}
} else
{return val__11039;
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
var cnt__11060 = arr.length;
if((arr.length === 0))
{return f.call(null);
} else
{var val__11061 = (arr[0]);
var n__11062 = 1;
while(true){
if((n__11062 < cnt__11060))
{var nval__11063 = f.call(null,val__11061,(arr[n__11062]));
if(cljs.core.reduced_QMARK_.call(null,nval__11063))
{return cljs.core.deref.call(null,nval__11063);
} else
{{
var G__11072 = nval__11063;
var G__11073 = (n__11062 + 1);
val__11061 = G__11072;
n__11062 = G__11073;
continue;
}
}
} else
{return val__11061;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){
var cnt__11064 = arr.length;
var val__11065 = val;
var n__11066 = 0;
while(true){
if((n__11066 < cnt__11064))
{var nval__11067 = f.call(null,val__11065,(arr[n__11066]));
if(cljs.core.reduced_QMARK_.call(null,nval__11067))
{return cljs.core.deref.call(null,nval__11067);
} else
{{
var G__11074 = nval__11067;
var G__11075 = (n__11066 + 1);
val__11065 = G__11074;
n__11066 = G__11075;
continue;
}
}
} else
{return val__11065;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){
var cnt__11068 = arr.length;
var val__11069 = val;
var n__11070 = idx;
while(true){
if((n__11070 < cnt__11068))
{var nval__11071 = f.call(null,val__11069,(arr[n__11070]));
if(cljs.core.reduced_QMARK_.call(null,nval__11071))
{return cljs.core.deref.call(null,nval__11071);
} else
{{
var G__11076 = nval__11071;
var G__11077 = (n__11070 + 1);
val__11069 = G__11076;
n__11070 = G__11077;
continue;
}
}
} else
{return val__11069;
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
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 166199546;
})
cljs.core.IndexedSeq.cljs$lang$type = true;
cljs.core.IndexedSeq.cljs$lang$ctorPrSeq = (function (this__3834__auto__){
return cljs.core.list.call(null,"cljs.core/IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__11078 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var this__11079 = this;
if(((this__11079.i + 1) < this__11079.a.length))
{return (new cljs.core.IndexedSeq(this__11079.a,(this__11079.i + 1)));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__11080 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__11081 = this;
var c__11082 = coll.cljs$core$ICounted$_count$arity$1(coll);
if((c__11082 > 0))
{return (new cljs.core.RSeq(coll,(c__11082 - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.IndexedSeq.prototype.toString = (function (){
var this__11083 = this;
var this__11084 = this;
return cljs.core.pr_str.call(null,this__11084);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__11085 = this;
if(cljs.core.counted_QMARK_.call(null,this__11085.a))
{return cljs.core.ci_reduce.call(null,this__11085.a,f,(this__11085.a[this__11085.i]),(this__11085.i + 1));
} else
{return cljs.core.ci_reduce.call(null,coll,f,(this__11085.a[this__11085.i]),0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__11086 = this;
if(cljs.core.counted_QMARK_.call(null,this__11086.a))
{return cljs.core.ci_reduce.call(null,this__11086.a,f,start,this__11086.i);
} else
{return cljs.core.ci_reduce.call(null,coll,f,start,0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__11087 = this;
return this$;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__11088 = this;
return (this__11088.a.length - this__11088.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__11089 = this;
return (this__11089.a[this__11089.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__11090 = this;
if(((this__11090.i + 1) < this__11090.a.length))
{return (new cljs.core.IndexedSeq(this__11090.a,(this__11090.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11091 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__11092 = this;
var i__11093 = (n + this__11092.i);
if((i__11093 < this__11092.a.length))
{return (this__11092.a[i__11093]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__11094 = this;
var i__11095 = (n + this__11094.i);
if((i__11095 < this__11094.a.length))
{return (this__11094.a[i__11095]);
} else
{return not_found;
}
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
var G__11096 = null;
var G__11096__2 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__11096__3 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__11096 = function(array,f,start){
switch(arguments.length){
case 2:
return G__11096__2.call(this,array,f);
case 3:
return G__11096__3.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11096;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__11097 = null;
var G__11097__2 = (function (array,k){
return (array[k]);
});
var G__11097__3 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__11097 = function(array,k,not_found){
switch(arguments.length){
case 2:
return G__11097__2.call(this,array,k);
case 3:
return G__11097__3.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11097;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__11098 = null;
var G__11098__2 = (function (array,n){
if((n < array.length))
{return (array[n]);
} else
{return null;
}
});
var G__11098__3 = (function (array,n,not_found){
if((n < array.length))
{return (array[n]);
} else
{return not_found;
}
});
G__11098 = function(array,n,not_found){
switch(arguments.length){
case 2:
return G__11098__2.call(this,array,n);
case 3:
return G__11098__3.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11098;
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

/**
* @constructor
*/
cljs.core.RSeq = (function (ci,i,meta){
this.ci = ci;
this.i = i;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850570;
})
cljs.core.RSeq.cljs$lang$type = true;
cljs.core.RSeq.cljs$lang$ctorPrSeq = (function (this__3834__auto__){
return cljs.core.list.call(null,"cljs.core/RSeq");
});
cljs.core.RSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__11099 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__11100 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.RSeq.prototype.toString = (function (){
var this__11101 = this;
var this__11102 = this;
return cljs.core.pr_str.call(null,this__11102);
});
cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11103 = this;
return coll;
});
cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11104 = this;
return (this__11104.i + 1);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__11105 = this;
return cljs.core._nth.call(null,this__11105.ci,this__11105.i);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__11106 = this;
if((this__11106.i > 0))
{return (new cljs.core.RSeq(this__11106.ci,(this__11106.i - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11107 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var this__11108 = this;
return (new cljs.core.RSeq(this__11108.ci,this__11108.i,new_meta));
});
cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11109 = this;
return this__11109.meta;
});
cljs.core.RSeq;
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__11113__11114 = coll;
if(G__11113__11114)
{if((function (){var or__3824__auto____11115 = (G__11113__11114.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3824__auto____11115)
{return or__3824__auto____11115;
} else
{return G__11113__11114.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__11113__11114.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__11113__11114);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__11113__11114);
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
{if((function (){var G__11120__11121 = coll;
if(G__11120__11121)
{if((function (){var or__3824__auto____11122 = (G__11120__11121.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____11122)
{return or__3824__auto____11122;
} else
{return G__11120__11121.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__11120__11121.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__11120__11121);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__11120__11121);
}
})())
{return cljs.core._first.call(null,coll);
} else
{var s__11123 = cljs.core.seq.call(null,coll);
if((s__11123 == null))
{return null;
} else
{return cljs.core._first.call(null,s__11123);
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
{if((function (){var G__11128__11129 = coll;
if(G__11128__11129)
{if((function (){var or__3824__auto____11130 = (G__11128__11129.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____11130)
{return or__3824__auto____11130;
} else
{return G__11128__11129.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__11128__11129.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__11128__11129);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__11128__11129);
}
})())
{return cljs.core._rest.call(null,coll);
} else
{var s__11131 = cljs.core.seq.call(null,coll);
if(!((s__11131 == null)))
{return cljs.core._rest.call(null,s__11131);
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
{if((function (){var G__11135__11136 = coll;
if(G__11135__11136)
{if((function (){var or__3824__auto____11137 = (G__11135__11136.cljs$lang$protocol_mask$partition0$ & 128);
if(or__3824__auto____11137)
{return or__3824__auto____11137;
} else
{return G__11135__11136.cljs$core$INext$;
}
})())
{return true;
} else
{if((!G__11135__11136.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__11135__11136);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__11135__11136);
}
})())
{return cljs.core._next.call(null,coll);
} else
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
}
}
});
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
var sn__11139 = cljs.core.next.call(null,s);
if(!((sn__11139 == null)))
{{
var G__11140 = sn__11139;
s = G__11140;
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
var G__11141__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__11142 = conj.call(null,coll,x);
var G__11143 = cljs.core.first.call(null,xs);
var G__11144 = cljs.core.next.call(null,xs);
coll = G__11142;
x = G__11143;
xs = G__11144;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__11141 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11141__delegate.call(this, coll, x, xs);
};
G__11141.cljs$lang$maxFixedArity = 2;
G__11141.cljs$lang$applyTo = (function (arglist__11145){
var coll = cljs.core.first(arglist__11145);
var x = cljs.core.first(cljs.core.next(arglist__11145));
var xs = cljs.core.rest(cljs.core.next(arglist__11145));
return G__11141__delegate(coll, x, xs);
});
G__11141.cljs$lang$arity$variadic = G__11141__delegate;
return G__11141;
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
var s__11148 = cljs.core.seq.call(null,coll);
var acc__11149 = 0;
while(true){
if(cljs.core.counted_QMARK_.call(null,s__11148))
{return (acc__11149 + cljs.core._count.call(null,s__11148));
} else
{{
var G__11150 = cljs.core.next.call(null,s__11148);
var G__11151 = (acc__11149 + 1);
s__11148 = G__11150;
acc__11149 = G__11151;
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
{return linear_traversal_nth.call(null,cljs.core.next.call(null,coll),(n - 1));
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
});
var linear_traversal_nth__3 = (function (coll,n,not_found){
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
{return linear_traversal_nth.call(null,cljs.core.next.call(null,coll),(n - 1),not_found);
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
{if((function (){var G__11158__11159 = coll;
if(G__11158__11159)
{if((function (){var or__3824__auto____11160 = (G__11158__11159.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____11160)
{return or__3824__auto____11160;
} else
{return G__11158__11159.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__11158__11159.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__11158__11159);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__11158__11159);
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
{if((function (){var G__11161__11162 = coll;
if(G__11161__11162)
{if((function (){var or__3824__auto____11163 = (G__11161__11162.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____11163)
{return or__3824__auto____11163;
} else
{return G__11161__11162.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__11161__11162.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__11161__11162);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__11161__11162);
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
var G__11166__delegate = function (coll,k,v,kvs){
while(true){
var ret__11165 = assoc.call(null,coll,k,v);
if(cljs.core.truth_(kvs))
{{
var G__11167 = ret__11165;
var G__11168 = cljs.core.first.call(null,kvs);
var G__11169 = cljs.core.second.call(null,kvs);
var G__11170 = cljs.core.nnext.call(null,kvs);
coll = G__11167;
k = G__11168;
v = G__11169;
kvs = G__11170;
continue;
}
} else
{return ret__11165;
}
break;
}
};
var G__11166 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11166__delegate.call(this, coll, k, v, kvs);
};
G__11166.cljs$lang$maxFixedArity = 3;
G__11166.cljs$lang$applyTo = (function (arglist__11171){
var coll = cljs.core.first(arglist__11171);
var k = cljs.core.first(cljs.core.next(arglist__11171));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11171)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11171)));
return G__11166__delegate(coll, k, v, kvs);
});
G__11166.cljs$lang$arity$variadic = G__11166__delegate;
return G__11166;
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
var G__11174__delegate = function (coll,k,ks){
while(true){
var ret__11173 = dissoc.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__11175 = ret__11173;
var G__11176 = cljs.core.first.call(null,ks);
var G__11177 = cljs.core.next.call(null,ks);
coll = G__11175;
k = G__11176;
ks = G__11177;
continue;
}
} else
{return ret__11173;
}
break;
}
};
var G__11174 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11174__delegate.call(this, coll, k, ks);
};
G__11174.cljs$lang$maxFixedArity = 2;
G__11174.cljs$lang$applyTo = (function (arglist__11178){
var coll = cljs.core.first(arglist__11178);
var k = cljs.core.first(cljs.core.next(arglist__11178));
var ks = cljs.core.rest(cljs.core.next(arglist__11178));
return G__11174__delegate(coll, k, ks);
});
G__11174.cljs$lang$arity$variadic = G__11174__delegate;
return G__11174;
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
if((function (){var G__11182__11183 = o;
if(G__11182__11183)
{if((function (){var or__3824__auto____11184 = (G__11182__11183.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____11184)
{return or__3824__auto____11184;
} else
{return G__11182__11183.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__11182__11183.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__11182__11183);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__11182__11183);
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
var G__11187__delegate = function (coll,k,ks){
while(true){
var ret__11186 = disj.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__11188 = ret__11186;
var G__11189 = cljs.core.first.call(null,ks);
var G__11190 = cljs.core.next.call(null,ks);
coll = G__11188;
k = G__11189;
ks = G__11190;
continue;
}
} else
{return ret__11186;
}
break;
}
};
var G__11187 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11187__delegate.call(this, coll, k, ks);
};
G__11187.cljs$lang$maxFixedArity = 2;
G__11187.cljs$lang$applyTo = (function (arglist__11191){
var coll = cljs.core.first(arglist__11191);
var k = cljs.core.first(cljs.core.next(arglist__11191));
var ks = cljs.core.rest(cljs.core.next(arglist__11191));
return G__11187__delegate(coll, k, ks);
});
G__11187.cljs$lang$arity$variadic = G__11187__delegate;
return G__11187;
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
var h__11193 = goog.string.hashCode(k);
(cljs.core.string_hash_cache[k] = h__11193);
cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + 1);
return h__11193;
});
cljs.core.check_string_hash_cache = (function check_string_hash_cache(k){
if((cljs.core.string_hash_cache_count > 255))
{cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
} else
{}
var h__11195 = (cljs.core.string_hash_cache[k]);
if(!((h__11195 == null)))
{return h__11195;
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
if((function (){var and__3822__auto____11197 = goog.isString(o);
if(and__3822__auto____11197)
{return check_cache;
} else
{return and__3822__auto____11197;
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
{var G__11201__11202 = x;
if(G__11201__11202)
{if((function (){var or__3824__auto____11203 = (G__11201__11202.cljs$lang$protocol_mask$partition0$ & 8);
if(or__3824__auto____11203)
{return or__3824__auto____11203;
} else
{return G__11201__11202.cljs$core$ICollection$;
}
})())
{return true;
} else
{if((!G__11201__11202.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__11201__11202);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__11201__11202);
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
{var G__11207__11208 = x;
if(G__11207__11208)
{if((function (){var or__3824__auto____11209 = (G__11207__11208.cljs$lang$protocol_mask$partition0$ & 4096);
if(or__3824__auto____11209)
{return or__3824__auto____11209;
} else
{return G__11207__11208.cljs$core$ISet$;
}
})())
{return true;
} else
{if((!G__11207__11208.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__11207__11208);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__11207__11208);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__11213__11214 = x;
if(G__11213__11214)
{if((function (){var or__3824__auto____11215 = (G__11213__11214.cljs$lang$protocol_mask$partition0$ & 512);
if(or__3824__auto____11215)
{return or__3824__auto____11215;
} else
{return G__11213__11214.cljs$core$IAssociative$;
}
})())
{return true;
} else
{if((!G__11213__11214.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__11213__11214);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__11213__11214);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__11219__11220 = x;
if(G__11219__11220)
{if((function (){var or__3824__auto____11221 = (G__11219__11220.cljs$lang$protocol_mask$partition0$ & 16777216);
if(or__3824__auto____11221)
{return or__3824__auto____11221;
} else
{return G__11219__11220.cljs$core$ISequential$;
}
})())
{return true;
} else
{if((!G__11219__11220.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__11219__11220);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__11219__11220);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var G__11225__11226 = x;
if(G__11225__11226)
{if((function (){var or__3824__auto____11227 = (G__11225__11226.cljs$lang$protocol_mask$partition0$ & 2);
if(or__3824__auto____11227)
{return or__3824__auto____11227;
} else
{return G__11225__11226.cljs$core$ICounted$;
}
})())
{return true;
} else
{if((!G__11225__11226.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__11225__11226);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__11225__11226);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__11231__11232 = x;
if(G__11231__11232)
{if((function (){var or__3824__auto____11233 = (G__11231__11232.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____11233)
{return or__3824__auto____11233;
} else
{return G__11231__11232.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__11231__11232.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__11231__11232);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__11231__11232);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__11237__11238 = x;
if(G__11237__11238)
{if((function (){var or__3824__auto____11239 = (G__11237__11238.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____11239)
{return or__3824__auto____11239;
} else
{return G__11237__11238.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__11237__11238.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__11237__11238);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__11237__11238);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null))
{return false;
} else
{var G__11243__11244 = x;
if(G__11243__11244)
{if((function (){var or__3824__auto____11245 = (G__11243__11244.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3824__auto____11245)
{return or__3824__auto____11245;
} else
{return G__11243__11244.cljs$core$IMap$;
}
})())
{return true;
} else
{if((!G__11243__11244.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__11243__11244);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__11243__11244);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__11249__11250 = x;
if(G__11249__11250)
{if((function (){var or__3824__auto____11251 = (G__11249__11250.cljs$lang$protocol_mask$partition0$ & 16384);
if(or__3824__auto____11251)
{return or__3824__auto____11251;
} else
{return G__11249__11250.cljs$core$IVector$;
}
})())
{return true;
} else
{if((!G__11249__11250.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__11249__11250);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__11249__11250);
}
});
cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){
var G__11255__11256 = x;
if(G__11255__11256)
{if(cljs.core.truth_((function (){var or__3824__auto____11257 = null;
if(cljs.core.truth_(or__3824__auto____11257))
{return or__3824__auto____11257;
} else
{return G__11255__11256.cljs$core$IChunkedSeq$;
}
})()))
{return true;
} else
{if((!G__11255__11256.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__11255__11256);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__11255__11256);
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
var G__11258__delegate = function (keyvals){
return cljs.core.apply.call(null,goog.object.create,keyvals);
};
var G__11258 = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__11258__delegate.call(this, keyvals);
};
G__11258.cljs$lang$maxFixedArity = 0;
G__11258.cljs$lang$applyTo = (function (arglist__11259){
var keyvals = cljs.core.seq(arglist__11259);;
return G__11258__delegate(keyvals);
});
G__11258.cljs$lang$arity$variadic = G__11258__delegate;
return G__11258;
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
var keys__11261 = [];
goog.object.forEach(obj,(function (val,key,obj){
return keys__11261.push(key);
}));
return keys__11261;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__11265 = i;
var j__11266 = j;
var len__11267 = len;
while(true){
if((len__11267 === 0))
{return to;
} else
{(to[j__11266] = (from[i__11265]));
{
var G__11268 = (i__11265 + 1);
var G__11269 = (j__11266 + 1);
var G__11270 = (len__11267 - 1);
i__11265 = G__11268;
j__11266 = G__11269;
len__11267 = G__11270;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__11274 = (i + (len - 1));
var j__11275 = (j + (len - 1));
var len__11276 = len;
while(true){
if((len__11276 === 0))
{return to;
} else
{(to[j__11275] = (from[i__11274]));
{
var G__11277 = (i__11274 - 1);
var G__11278 = (j__11275 - 1);
var G__11279 = (len__11276 - 1);
i__11274 = G__11277;
j__11275 = G__11278;
len__11276 = G__11279;
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
{var G__11283__11284 = s;
if(G__11283__11284)
{if((function (){var or__3824__auto____11285 = (G__11283__11284.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____11285)
{return or__3824__auto____11285;
} else
{return G__11283__11284.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__11283__11284.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__11283__11284);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__11283__11284);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__11289__11290 = s;
if(G__11289__11290)
{if((function (){var or__3824__auto____11291 = (G__11289__11290.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____11291)
{return or__3824__auto____11291;
} else
{return G__11289__11290.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__11289__11290.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__11289__11290);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__11289__11290);
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
var and__3822__auto____11294 = goog.isString(x);
if(and__3822__auto____11294)
{return !((function (){var or__3824__auto____11295 = (x.charAt(0) === "\uFDD0");
if(or__3824__auto____11295)
{return or__3824__auto____11295;
} else
{return (x.charAt(0) === "\uFDD1");
}
})());
} else
{return and__3822__auto____11294;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3822__auto____11297 = goog.isString(x);
if(and__3822__auto____11297)
{return (x.charAt(0) === "\uFDD0");
} else
{return and__3822__auto____11297;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3822__auto____11299 = goog.isString(x);
if(and__3822__auto____11299)
{return (x.charAt(0) === "\uFDD1");
} else
{return and__3822__auto____11299;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber(n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction(f);
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3824__auto____11304 = cljs.core.fn_QMARK_.call(null,f);
if(or__3824__auto____11304)
{return or__3824__auto____11304;
} else
{var G__11305__11306 = f;
if(G__11305__11306)
{if((function (){var or__3824__auto____11307 = (G__11305__11306.cljs$lang$protocol_mask$partition0$ & 1);
if(or__3824__auto____11307)
{return or__3824__auto____11307;
} else
{return G__11305__11306.cljs$core$IFn$;
}
})())
{return true;
} else
{if((!G__11305__11306.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__11305__11306);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__11305__11306);
}
}
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3822__auto____11309 = cljs.core.number_QMARK_.call(null,n);
if(and__3822__auto____11309)
{return (n == n.toFixed());
} else
{return and__3822__auto____11309;
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
if(cljs.core.truth_((function (){var and__3822__auto____11312 = coll;
if(cljs.core.truth_(and__3822__auto____11312))
{var and__3822__auto____11313 = cljs.core.associative_QMARK_.call(null,coll);
if(and__3822__auto____11313)
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3822__auto____11313;
}
} else
{return and__3822__auto____11312;
}
})()))
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
var G__11322__delegate = function (x,y,more){
if(!(cljs.core._EQ_.call(null,x,y)))
{var s__11318 = cljs.core.PersistentHashSet.fromArray([y,x]);
var xs__11319 = more;
while(true){
var x__11320 = cljs.core.first.call(null,xs__11319);
var etc__11321 = cljs.core.next.call(null,xs__11319);
if(cljs.core.truth_(xs__11319))
{if(cljs.core.contains_QMARK_.call(null,s__11318,x__11320))
{return false;
} else
{{
var G__11323 = cljs.core.conj.call(null,s__11318,x__11320);
var G__11324 = etc__11321;
s__11318 = G__11323;
xs__11319 = G__11324;
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
var G__11322 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11322__delegate.call(this, x, y, more);
};
G__11322.cljs$lang$maxFixedArity = 2;
G__11322.cljs$lang$applyTo = (function (arglist__11325){
var x = cljs.core.first(arglist__11325);
var y = cljs.core.first(cljs.core.next(arglist__11325));
var more = cljs.core.rest(cljs.core.next(arglist__11325));
return G__11322__delegate(x, y, more);
});
G__11322.cljs$lang$arity$variadic = G__11322__delegate;
return G__11322;
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
{if((function (){var G__11329__11330 = x;
if(G__11329__11330)
{if(cljs.core.truth_((function (){var or__3824__auto____11331 = null;
if(cljs.core.truth_(or__3824__auto____11331))
{return or__3824__auto____11331;
} else
{return G__11329__11330.cljs$core$IComparable$;
}
})()))
{return true;
} else
{if((!G__11329__11330.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__11329__11330);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__11329__11330);
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
var xl__11336 = cljs.core.count.call(null,xs);
var yl__11337 = cljs.core.count.call(null,ys);
if((xl__11336 < yl__11337))
{return -1;
} else
{if((xl__11336 > yl__11337))
{return 1;
} else
{if("\uFDD0'else")
{return compare_indexed.call(null,xs,ys,xl__11336,0);
} else
{return null;
}
}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){
while(true){
var d__11338 = cljs.core.compare.call(null,cljs.core.nth.call(null,xs,n),cljs.core.nth.call(null,ys,n));
if((function (){var and__3822__auto____11339 = (d__11338 === 0);
if(and__3822__auto____11339)
{return ((n + 1) < len);
} else
{return and__3822__auto____11339;
}
})())
{{
var G__11340 = xs;
var G__11341 = ys;
var G__11342 = len;
var G__11343 = (n + 1);
xs = G__11340;
ys = G__11341;
len = G__11342;
n = G__11343;
continue;
}
} else
{return d__11338;
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
var r__11345 = f.call(null,x,y);
if(cljs.core.number_QMARK_.call(null,r__11345))
{return r__11345;
} else
{if(cljs.core.truth_(r__11345))
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
{var a__11347 = cljs.core.to_array.call(null,coll);
goog.array.stableSort(a__11347,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__11347);
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
var temp__3971__auto____11353 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____11353)
{var s__11354 = temp__3971__auto____11353;
return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__11354),cljs.core.next.call(null,s__11354));
} else
{return f.call(null);
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__11355 = val;
var coll__11356 = cljs.core.seq.call(null,coll);
while(true){
if(coll__11356)
{var nval__11357 = f.call(null,val__11355,cljs.core.first.call(null,coll__11356));
if(cljs.core.reduced_QMARK_.call(null,nval__11357))
{return cljs.core.deref.call(null,nval__11357);
} else
{{
var G__11358 = nval__11357;
var G__11359 = cljs.core.next.call(null,coll__11356);
val__11355 = G__11358;
coll__11356 = G__11359;
continue;
}
}
} else
{return val__11355;
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
var a__11361 = cljs.core.to_array.call(null,coll);
goog.array.shuffle(a__11361);
return cljs.core.vec.call(null,a__11361);
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
if((function (){var G__11368__11369 = coll;
if(G__11368__11369)
{if((function (){var or__3824__auto____11370 = (G__11368__11369.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____11370)
{return or__3824__auto____11370;
} else
{return G__11368__11369.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__11368__11369.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__11368__11369);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__11368__11369);
}
})())
{return cljs.core._reduce.call(null,coll,f);
} else
{return cljs.core.seq_reduce.call(null,f,coll);
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__11371__11372 = coll;
if(G__11371__11372)
{if((function (){var or__3824__auto____11373 = (G__11371__11372.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____11373)
{return or__3824__auto____11373;
} else
{return G__11371__11372.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__11371__11372.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__11371__11372);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__11371__11372);
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
* @constructor
*/
cljs.core.Reduced = (function (val){
this.val = val;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32768;
})
cljs.core.Reduced.cljs$lang$type = true;
cljs.core.Reduced.cljs$lang$ctorPrSeq = (function (this__3834__auto__){
return cljs.core.list.call(null,"cljs.core/Reduced");
});
cljs.core.Reduced.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var this__11374 = this;
return this__11374.val;
});
cljs.core.Reduced;
/**
* Returns true if x is the result of a call to reduced
*/
cljs.core.reduced_QMARK_ = (function reduced_QMARK_(r){
return cljs.core.instance_QMARK_.call(null,cljs.core.Reduced,r);
});
/**
* Wraps x in a way such that a reduce will terminate with the value x
*/
cljs.core.reduced = (function reduced(x){
return (new cljs.core.Reduced(x));
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
var G__11375__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__11375 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11375__delegate.call(this, x, y, more);
};
G__11375.cljs$lang$maxFixedArity = 2;
G__11375.cljs$lang$applyTo = (function (arglist__11376){
var x = cljs.core.first(arglist__11376);
var y = cljs.core.first(cljs.core.next(arglist__11376));
var more = cljs.core.rest(cljs.core.next(arglist__11376));
return G__11375__delegate(x, y, more);
});
G__11375.cljs$lang$arity$variadic = G__11375__delegate;
return G__11375;
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
var G__11377__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__11377 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11377__delegate.call(this, x, y, more);
};
G__11377.cljs$lang$maxFixedArity = 2;
G__11377.cljs$lang$applyTo = (function (arglist__11378){
var x = cljs.core.first(arglist__11378);
var y = cljs.core.first(cljs.core.next(arglist__11378));
var more = cljs.core.rest(cljs.core.next(arglist__11378));
return G__11377__delegate(x, y, more);
});
G__11377.cljs$lang$arity$variadic = G__11377__delegate;
return G__11377;
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
var G__11379__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__11379 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11379__delegate.call(this, x, y, more);
};
G__11379.cljs$lang$maxFixedArity = 2;
G__11379.cljs$lang$applyTo = (function (arglist__11380){
var x = cljs.core.first(arglist__11380);
var y = cljs.core.first(cljs.core.next(arglist__11380));
var more = cljs.core.rest(cljs.core.next(arglist__11380));
return G__11379__delegate(x, y, more);
});
G__11379.cljs$lang$arity$variadic = G__11379__delegate;
return G__11379;
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
var G__11381__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__11381 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11381__delegate.call(this, x, y, more);
};
G__11381.cljs$lang$maxFixedArity = 2;
G__11381.cljs$lang$applyTo = (function (arglist__11382){
var x = cljs.core.first(arglist__11382);
var y = cljs.core.first(cljs.core.next(arglist__11382));
var more = cljs.core.rest(cljs.core.next(arglist__11382));
return G__11381__delegate(x, y, more);
});
G__11381.cljs$lang$arity$variadic = G__11381__delegate;
return G__11381;
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
var G__11383__delegate = function (x,y,more){
while(true){
if((x < y))
{if(cljs.core.next.call(null,more))
{{
var G__11384 = y;
var G__11385 = cljs.core.first.call(null,more);
var G__11386 = cljs.core.next.call(null,more);
x = G__11384;
y = G__11385;
more = G__11386;
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
var G__11383 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11383__delegate.call(this, x, y, more);
};
G__11383.cljs$lang$maxFixedArity = 2;
G__11383.cljs$lang$applyTo = (function (arglist__11387){
var x = cljs.core.first(arglist__11387);
var y = cljs.core.first(cljs.core.next(arglist__11387));
var more = cljs.core.rest(cljs.core.next(arglist__11387));
return G__11383__delegate(x, y, more);
});
G__11383.cljs$lang$arity$variadic = G__11383__delegate;
return G__11383;
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
var G__11388__delegate = function (x,y,more){
while(true){
if((x <= y))
{if(cljs.core.next.call(null,more))
{{
var G__11389 = y;
var G__11390 = cljs.core.first.call(null,more);
var G__11391 = cljs.core.next.call(null,more);
x = G__11389;
y = G__11390;
more = G__11391;
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
var G__11388 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11388__delegate.call(this, x, y, more);
};
G__11388.cljs$lang$maxFixedArity = 2;
G__11388.cljs$lang$applyTo = (function (arglist__11392){
var x = cljs.core.first(arglist__11392);
var y = cljs.core.first(cljs.core.next(arglist__11392));
var more = cljs.core.rest(cljs.core.next(arglist__11392));
return G__11388__delegate(x, y, more);
});
G__11388.cljs$lang$arity$variadic = G__11388__delegate;
return G__11388;
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
var G__11393__delegate = function (x,y,more){
while(true){
if((x > y))
{if(cljs.core.next.call(null,more))
{{
var G__11394 = y;
var G__11395 = cljs.core.first.call(null,more);
var G__11396 = cljs.core.next.call(null,more);
x = G__11394;
y = G__11395;
more = G__11396;
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
var G__11393 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11393__delegate.call(this, x, y, more);
};
G__11393.cljs$lang$maxFixedArity = 2;
G__11393.cljs$lang$applyTo = (function (arglist__11397){
var x = cljs.core.first(arglist__11397);
var y = cljs.core.first(cljs.core.next(arglist__11397));
var more = cljs.core.rest(cljs.core.next(arglist__11397));
return G__11393__delegate(x, y, more);
});
G__11393.cljs$lang$arity$variadic = G__11393__delegate;
return G__11393;
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
var G__11398__delegate = function (x,y,more){
while(true){
if((x >= y))
{if(cljs.core.next.call(null,more))
{{
var G__11399 = y;
var G__11400 = cljs.core.first.call(null,more);
var G__11401 = cljs.core.next.call(null,more);
x = G__11399;
y = G__11400;
more = G__11401;
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
var G__11398 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11398__delegate.call(this, x, y, more);
};
G__11398.cljs$lang$maxFixedArity = 2;
G__11398.cljs$lang$applyTo = (function (arglist__11402){
var x = cljs.core.first(arglist__11402);
var y = cljs.core.first(cljs.core.next(arglist__11402));
var more = cljs.core.rest(cljs.core.next(arglist__11402));
return G__11398__delegate(x, y, more);
});
G__11398.cljs$lang$arity$variadic = G__11398__delegate;
return G__11398;
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
var G__11403__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__11403 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11403__delegate.call(this, x, y, more);
};
G__11403.cljs$lang$maxFixedArity = 2;
G__11403.cljs$lang$applyTo = (function (arglist__11404){
var x = cljs.core.first(arglist__11404);
var y = cljs.core.first(cljs.core.next(arglist__11404));
var more = cljs.core.rest(cljs.core.next(arglist__11404));
return G__11403__delegate(x, y, more);
});
G__11403.cljs$lang$arity$variadic = G__11403__delegate;
return G__11403;
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
var G__11405__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__11405 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11405__delegate.call(this, x, y, more);
};
G__11405.cljs$lang$maxFixedArity = 2;
G__11405.cljs$lang$applyTo = (function (arglist__11406){
var x = cljs.core.first(arglist__11406);
var y = cljs.core.first(cljs.core.next(arglist__11406));
var more = cljs.core.rest(cljs.core.next(arglist__11406));
return G__11405__delegate(x, y, more);
});
G__11405.cljs$lang$arity$variadic = G__11405__delegate;
return G__11405;
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
var rem__11408 = (n % d);
return cljs.core.fix.call(null,((n - rem__11408) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__11410 = cljs.core.quot.call(null,n,d);
return (n - (d * q__11410));
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
var v__11413 = (v - ((v >> 1) & 1431655765));
var v__11414 = ((v__11413 & 858993459) + ((v__11413 >> 2) & 858993459));
return ((((v__11414 + (v__11414 >> 4)) & 252645135) * 16843009) >> 24);
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
var G__11415__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__11416 = y;
var G__11417 = cljs.core.first.call(null,more);
var G__11418 = cljs.core.next.call(null,more);
x = G__11416;
y = G__11417;
more = G__11418;
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
var G__11415 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11415__delegate.call(this, x, y, more);
};
G__11415.cljs$lang$maxFixedArity = 2;
G__11415.cljs$lang$applyTo = (function (arglist__11419){
var x = cljs.core.first(arglist__11419);
var y = cljs.core.first(cljs.core.next(arglist__11419));
var more = cljs.core.rest(cljs.core.next(arglist__11419));
return G__11415__delegate(x, y, more);
});
G__11415.cljs$lang$arity$variadic = G__11415__delegate;
return G__11415;
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
var n__11423 = n;
var xs__11424 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____11425 = xs__11424;
if(and__3822__auto____11425)
{return (n__11423 > 0);
} else
{return and__3822__auto____11425;
}
})()))
{{
var G__11426 = (n__11423 - 1);
var G__11427 = cljs.core.next.call(null,xs__11424);
n__11423 = G__11426;
xs__11424 = G__11427;
continue;
}
} else
{return xs__11424;
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
var G__11428__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__11429 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__11430 = cljs.core.next.call(null,more);
sb = G__11429;
more = G__11430;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__11428 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__11428__delegate.call(this, x, ys);
};
G__11428.cljs$lang$maxFixedArity = 1;
G__11428.cljs$lang$applyTo = (function (arglist__11431){
var x = cljs.core.first(arglist__11431);
var ys = cljs.core.rest(arglist__11431);
return G__11428__delegate(x, ys);
});
G__11428.cljs$lang$arity$variadic = G__11428__delegate;
return G__11428;
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
var G__11432__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__11433 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__11434 = cljs.core.next.call(null,more);
sb = G__11433;
more = G__11434;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__11432 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__11432__delegate.call(this, x, ys);
};
G__11432.cljs$lang$maxFixedArity = 1;
G__11432.cljs$lang$applyTo = (function (arglist__11435){
var x = cljs.core.first(arglist__11435);
var ys = cljs.core.rest(arglist__11435);
return G__11432__delegate(x, ys);
});
G__11432.cljs$lang$arity$variadic = G__11432__delegate;
return G__11432;
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
return cljs.core.apply.call(null,goog.string.format,fmt,args);
};
var format = function (fmt,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return format__delegate.call(this, fmt, args);
};
format.cljs$lang$maxFixedArity = 1;
format.cljs$lang$applyTo = (function (arglist__11436){
var fmt = cljs.core.first(arglist__11436);
var args = cljs.core.rest(arglist__11436);
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
{name;
} else
{if(cljs.core.keyword_QMARK_.call(null,name))
{cljs.core.str_STAR_.call(null,"\uFDD1","'",cljs.core.subs.call(null,name,2));
} else
{}
}
return cljs.core.str_STAR_.call(null,"\uFDD1","'",name);
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
return cljs.core.boolean$.call(null,((cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__11439 = cljs.core.seq.call(null,x);
var ys__11440 = cljs.core.seq.call(null,y);
while(true){
if((xs__11439 == null))
{return (ys__11440 == null);
} else
{if((ys__11440 == null))
{return false;
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__11439),cljs.core.first.call(null,ys__11440)))
{{
var G__11441 = cljs.core.next.call(null,xs__11439);
var G__11442 = cljs.core.next.call(null,ys__11440);
xs__11439 = G__11441;
ys__11440 = G__11442;
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
return cljs.core.reduce.call(null,(function (p1__11443_SHARP_,p2__11444_SHARP_){
return cljs.core.hash_combine.call(null,p1__11443_SHARP_,cljs.core.hash.call(null,p2__11444_SHARP_,false));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll),false),cljs.core.next.call(null,coll));
});
cljs.core.hash_imap = (function hash_imap(m){
var h__11448 = 0;
var s__11449 = cljs.core.seq.call(null,m);
while(true){
if(s__11449)
{var e__11450 = cljs.core.first.call(null,s__11449);
{
var G__11451 = ((h__11448 + (cljs.core.hash.call(null,cljs.core.key.call(null,e__11450)) ^ cljs.core.hash.call(null,cljs.core.val.call(null,e__11450)))) % 4503599627370496);
var G__11452 = cljs.core.next.call(null,s__11449);
h__11448 = G__11451;
s__11449 = G__11452;
continue;
}
} else
{return h__11448;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h__11456 = 0;
var s__11457 = cljs.core.seq.call(null,s);
while(true){
if(s__11457)
{var e__11458 = cljs.core.first.call(null,s__11457);
{
var G__11459 = ((h__11456 + cljs.core.hash.call(null,e__11458)) % 4503599627370496);
var G__11460 = cljs.core.next.call(null,s__11457);
h__11456 = G__11459;
s__11457 = G__11460;
continue;
}
} else
{return h__11456;
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
var G__11481__11482 = cljs.core.seq.call(null,fn_map);
if(G__11481__11482)
{var G__11484__11486 = cljs.core.first.call(null,G__11481__11482);
var vec__11485__11487 = G__11484__11486;
var key_name__11488 = cljs.core.nth.call(null,vec__11485__11487,0,null);
var f__11489 = cljs.core.nth.call(null,vec__11485__11487,1,null);
var G__11481__11490 = G__11481__11482;
var G__11484__11491 = G__11484__11486;
var G__11481__11492 = G__11481__11490;
while(true){
var vec__11493__11494 = G__11484__11491;
var key_name__11495 = cljs.core.nth.call(null,vec__11493__11494,0,null);
var f__11496 = cljs.core.nth.call(null,vec__11493__11494,1,null);
var G__11481__11497 = G__11481__11492;
var str_name__11498 = cljs.core.name.call(null,key_name__11495);
(obj[str_name__11498] = f__11496);
var temp__3974__auto____11499 = cljs.core.next.call(null,G__11481__11497);
if(temp__3974__auto____11499)
{var G__11481__11500 = temp__3974__auto____11499;
{
var G__11501 = cljs.core.first.call(null,G__11481__11500);
var G__11502 = G__11481__11500;
G__11484__11491 = G__11501;
G__11481__11492 = G__11502;
continue;
}
} else
{}
break;
}
} else
{}
return obj;
});

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
cljs.core.List.cljs$lang$ctorPrSeq = (function (this__3834__auto__){
return cljs.core.list.call(null,"cljs.core/List");
});
cljs.core.List.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__11503 = this;
var h__3675__auto____11504 = this__11503.__hash;
if(!((h__3675__auto____11504 == null)))
{return h__3675__auto____11504;
} else
{var h__3675__auto____11505 = cljs.core.hash_coll.call(null,coll);
this__11503.__hash = h__3675__auto____11505;
return h__3675__auto____11505;
}
});
cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__11506 = this;
if((this__11506.count === 1))
{return null;
} else
{return this__11506.rest;
}
});
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__11507 = this;
return (new cljs.core.List(this__11507.meta,o,coll,(this__11507.count + 1),null));
});
cljs.core.List.prototype.toString = (function (){
var this__11508 = this;
var this__11509 = this;
return cljs.core.pr_str.call(null,this__11509);
});
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11510 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11511 = this;
return this__11511.count;
});
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__11512 = this;
return this__11512.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__11513 = this;
return coll.cljs$core$ISeq$_rest$arity$1(coll);
});
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__11514 = this;
return this__11514.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__11515 = this;
if((this__11515.count === 1))
{return cljs.core.List.EMPTY;
} else
{return this__11515.rest;
}
});
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11516 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11517 = this;
return (new cljs.core.List(meta,this__11517.first,this__11517.rest,this__11517.count,this__11517.__hash));
});
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11518 = this;
return this__11518.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11519 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List;

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65413326;
})
cljs.core.EmptyList.cljs$lang$type = true;
cljs.core.EmptyList.cljs$lang$ctorPrSeq = (function (this__3834__auto__){
return cljs.core.list.call(null,"cljs.core/EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__11520 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__11521 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__11522 = this;
return (new cljs.core.List(this__11522.meta,o,null,1,null));
});
cljs.core.EmptyList.prototype.toString = (function (){
var this__11523 = this;
var this__11524 = this;
return cljs.core.pr_str.call(null,this__11524);
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11525 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11526 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__11527 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__11528 = this;
throw (new Error("Can't pop empty list"));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__11529 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__11530 = this;
return cljs.core.List.EMPTY;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11531 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11532 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11533 = this;
return this__11533.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11534 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__11538__11539 = coll;
if(G__11538__11539)
{if((function (){var or__3824__auto____11540 = (G__11538__11539.cljs$lang$protocol_mask$partition0$ & 134217728);
if(or__3824__auto____11540)
{return or__3824__auto____11540;
} else
{return G__11538__11539.cljs$core$IReversible$;
}
})())
{return true;
} else
{if((!G__11538__11539.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__11538__11539);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__11538__11539);
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
var G__11541__delegate = function (x,y,z,items){
return cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items)),z),y),x);
};
var G__11541 = function (x,y,z,var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11541__delegate.call(this, x, y, z, items);
};
G__11541.cljs$lang$maxFixedArity = 3;
G__11541.cljs$lang$applyTo = (function (arglist__11542){
var x = cljs.core.first(arglist__11542);
var y = cljs.core.first(cljs.core.next(arglist__11542));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11542)));
var items = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11542)));
return G__11541__delegate(x, y, z, items);
});
G__11541.cljs$lang$arity$variadic = G__11541__delegate;
return G__11541;
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
cljs.core.Cons.cljs$lang$ctorPrSeq = (function (this__3834__auto__){
return cljs.core.list.call(null,"cljs.core/Cons");
});
cljs.core.Cons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__11543 = this;
var h__3675__auto____11544 = this__11543.__hash;
if(!((h__3675__auto____11544 == null)))
{return h__3675__auto____11544;
} else
{var h__3675__auto____11545 = cljs.core.hash_coll.call(null,coll);
this__11543.__hash = h__3675__auto____11545;
return h__3675__auto____11545;
}
});
cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__11546 = this;
if((this__11546.rest == null))
{return null;
} else
{return cljs.core._seq.call(null,this__11546.rest);
}
});
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__11547 = this;
return (new cljs.core.Cons(null,o,coll,this__11547.__hash));
});
cljs.core.Cons.prototype.toString = (function (){
var this__11548 = this;
var this__11549 = this;
return cljs.core.pr_str.call(null,this__11549);
});
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11550 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__11551 = this;
return this__11551.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__11552 = this;
if((this__11552.rest == null))
{return cljs.core.List.EMPTY;
} else
{return this__11552.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11553 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11554 = this;
return (new cljs.core.Cons(meta,this__11554.first,this__11554.rest,this__11554.__hash));
});
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11555 = this;
return this__11555.meta;
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11556 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__11556.meta);
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3824__auto____11561 = (coll == null);
if(or__3824__auto____11561)
{return or__3824__auto____11561;
} else
{var G__11562__11563 = coll;
if(G__11562__11563)
{if((function (){var or__3824__auto____11564 = (G__11562__11563.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____11564)
{return or__3824__auto____11564;
} else
{return G__11562__11563.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__11562__11563.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__11562__11563);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__11562__11563);
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq.call(null,coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__11568__11569 = x;
if(G__11568__11569)
{if((function (){var or__3824__auto____11570 = (G__11568__11569.cljs$lang$protocol_mask$partition0$ & 33554432);
if(or__3824__auto____11570)
{return or__3824__auto____11570;
} else
{return G__11568__11569.cljs$core$IList$;
}
})())
{return true;
} else
{if((!G__11568__11569.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__11568__11569);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__11568__11569);
}
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__11571 = null;
var G__11571__2 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__11571__3 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__11571 = function(string,f,start){
switch(arguments.length){
case 2:
return G__11571__2.call(this,string,f);
case 3:
return G__11571__3.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11571;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__11572 = null;
var G__11572__2 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__11572__3 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__11572 = function(string,k,not_found){
switch(arguments.length){
case 2:
return G__11572__2.call(this,string,k);
case 3:
return G__11572__3.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11572;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__11573 = null;
var G__11573__2 = (function (string,n){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return null;
}
});
var G__11573__3 = (function (string,n,not_found){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return not_found;
}
});
G__11573 = function(string,n,not_found){
switch(arguments.length){
case 2:
return G__11573__2.call(this,string,n);
case 3:
return G__11573__3.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11573;
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

/**
* @constructor
*/
cljs.core.Keyword = (function (k){
this.k = k;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1;
})
cljs.core.Keyword.cljs$lang$type = true;
cljs.core.Keyword.cljs$lang$ctorPrSeq = (function (this__3834__auto__){
return cljs.core.list.call(null,"cljs.core/Keyword");
});
cljs.core.Keyword.prototype.call = (function() {
var G__11585 = null;
var G__11585__2 = (function (this_sym11576,coll){
var this__11578 = this;
var this_sym11576__11579 = this;
var ___11580 = this_sym11576__11579;
if((coll == null))
{return null;
} else
{var strobj__11581 = coll.strobj;
if((strobj__11581 == null))
{return cljs.core._lookup.call(null,coll,this__11578.k,null);
} else
{return (strobj__11581[this__11578.k]);
}
}
});
var G__11585__3 = (function (this_sym11577,coll,not_found){
var this__11578 = this;
var this_sym11577__11582 = this;
var ___11583 = this_sym11577__11582;
if((coll == null))
{return not_found;
} else
{return cljs.core._lookup.call(null,coll,this__11578.k,not_found);
}
});
G__11585 = function(this_sym11577,coll,not_found){
switch(arguments.length){
case 2:
return G__11585__2.call(this,this_sym11577,coll);
case 3:
return G__11585__3.call(this,this_sym11577,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11585;
})()
;
cljs.core.Keyword.prototype.apply = (function (this_sym11574,args11575){
var this__11584 = this;
return this_sym11574.call.apply(this_sym11574,[this_sym11574].concat(args11575.slice()));
});
cljs.core.Keyword;
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__11594 = null;
var G__11594__2 = (function (this_sym11588,coll){
var this_sym11588__11590 = this;
var this__11591 = this_sym11588__11590;
return cljs.core._lookup.call(null,coll,this__11591.toString(),null);
});
var G__11594__3 = (function (this_sym11589,coll,not_found){
var this_sym11589__11592 = this;
var this__11593 = this_sym11589__11592;
return cljs.core._lookup.call(null,coll,this__11593.toString(),not_found);
});
G__11594 = function(this_sym11589,coll,not_found){
switch(arguments.length){
case 2:
return G__11594__2.call(this,this_sym11589,coll);
case 3:
return G__11594__3.call(this,this_sym11589,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11594;
})()
;
String.prototype.apply = (function (this_sym11586,args11587){
return this_sym11586.call.apply(this_sym11586,[this_sym11586].concat(args11587.slice()));
});
String.prototype.apply = (function (s,args){
if((cljs.core.count.call(null,args) < 2))
{return cljs.core._lookup.call(null,(args[0]),s,null);
} else
{return cljs.core._lookup.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__11596 = lazy_seq.x;
if(lazy_seq.realized)
{return x__11596;
} else
{lazy_seq.x = x__11596.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});

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
cljs.core.LazySeq.cljs$lang$ctorPrSeq = (function (this__3834__auto__){
return cljs.core.list.call(null,"cljs.core/LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__11597 = this;
var h__3675__auto____11598 = this__11597.__hash;
if(!((h__3675__auto____11598 == null)))
{return h__3675__auto____11598;
} else
{var h__3675__auto____11599 = cljs.core.hash_coll.call(null,coll);
this__11597.__hash = h__3675__auto____11599;
return h__3675__auto____11599;
}
});
cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__11600 = this;
return cljs.core._seq.call(null,coll.cljs$core$ISeq$_rest$arity$1(coll));
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__11601 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.toString = (function (){
var this__11602 = this;
var this__11603 = this;
return cljs.core.pr_str.call(null,this__11603);
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11604 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__11605 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__11606 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11607 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11608 = this;
return (new cljs.core.LazySeq(meta,this__11608.realized,this__11608.x,this__11608.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11609 = this;
return this__11609.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11610 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__11610.meta);
});
cljs.core.LazySeq;

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
cljs.core.ChunkBuffer.cljs$lang$ctorPrSeq = (function (this__3834__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkBuffer");
});
cljs.core.ChunkBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__11611 = this;
return this__11611.end;
});
cljs.core.ChunkBuffer.prototype.add = (function (o){
var this__11612 = this;
var ___11613 = this;
(this__11612.buf[this__11612.end] = o);
return this__11612.end = (this__11612.end + 1);
});
cljs.core.ChunkBuffer.prototype.chunk = (function (o){
var this__11614 = this;
var ___11615 = this;
var ret__11616 = (new cljs.core.ArrayChunk(this__11614.buf,0,this__11614.end));
this__11614.buf = null;
return ret__11616;
});
cljs.core.ChunkBuffer;
cljs.core.chunk_buffer = (function chunk_buffer(capacity){
return (new cljs.core.ChunkBuffer(cljs.core.make_array.call(null,capacity),0));
});

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
cljs.core.ArrayChunk.cljs$lang$ctorPrSeq = (function (this__3834__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayChunk");
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__11617 = this;
return cljs.core.ci_reduce.call(null,coll,f,(this__11617.arr[this__11617.off]),(this__11617.off + 1));
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__11618 = this;
return cljs.core.ci_reduce.call(null,coll,f,start,this__11618.off);
});
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){
var this__11619 = this;
if((this__11619.off === this__11619.end))
{throw (new Error("-drop-first of empty chunk"));
} else
{return (new cljs.core.ArrayChunk(this__11619.arr,(this__11619.off + 1),this__11619.end));
}
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){
var this__11620 = this;
return (this__11620.arr[(this__11620.off + i)]);
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){
var this__11621 = this;
if((function (){var and__3822__auto____11622 = (i >= 0);
if(and__3822__auto____11622)
{return (i < (this__11621.end - this__11621.off));
} else
{return and__3822__auto____11622;
}
})())
{return (this__11621.arr[(this__11621.off + i)]);
} else
{return not_found;
}
});
cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__11623 = this;
return (this__11623.end - this__11623.off);
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

/**
* @constructor
*/
cljs.core.ChunkedCons = (function (chunk,more,meta){
this.chunk = chunk;
this.more = more;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 27656296;
})
cljs.core.ChunkedCons.cljs$lang$type = true;
cljs.core.ChunkedCons.cljs$lang$ctorPrSeq = (function (this__3834__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedCons");
});
cljs.core.ChunkedCons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){
var this__11624 = this;
return cljs.core.cons.call(null,o,this$);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11625 = this;
return coll;
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__11626 = this;
return cljs.core._nth.call(null,this__11626.chunk,0);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__11627 = this;
if((cljs.core._count.call(null,this__11627.chunk) > 1))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first.call(null,this__11627.chunk),this__11627.more,this__11627.meta));
} else
{if((this__11627.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__11627.more;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__11628 = this;
if((this__11628.more == null))
{return null;
} else
{return this__11628.more;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11629 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__11630 = this;
return (new cljs.core.ChunkedCons(this__11630.chunk,this__11630.more,m));
});
cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11631 = this;
return this__11631.meta;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__11632 = this;
return this__11632.chunk;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__11633 = this;
if((this__11633.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__11633.more;
}
});
cljs.core.ChunkedCons;
cljs.core.chunk_cons = (function chunk_cons(chunk,rest){
if((cljs.core._count.call(null,chunk) === 0))
{return rest;
} else
{return (new cljs.core.ChunkedCons(chunk,rest,null));
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
if((function (){var G__11637__11638 = s;
if(G__11637__11638)
{if(cljs.core.truth_((function (){var or__3824__auto____11639 = null;
if(cljs.core.truth_(or__3824__auto____11639))
{return or__3824__auto____11639;
} else
{return G__11637__11638.cljs$core$IChunkedNext$;
}
})()))
{return true;
} else
{if((!G__11637__11638.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__11637__11638);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__11637__11638);
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
var ary__11642 = [];
var s__11643 = s;
while(true){
if(cljs.core.seq.call(null,s__11643))
{ary__11642.push(cljs.core.first.call(null,s__11643));
{
var G__11644 = cljs.core.next.call(null,s__11643);
s__11643 = G__11644;
continue;
}
} else
{return ary__11642;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret__11648 = cljs.core.make_array.call(null,cljs.core.count.call(null,coll));
var i__11649 = 0;
var xs__11650 = cljs.core.seq.call(null,coll);
while(true){
if(xs__11650)
{(ret__11648[i__11649] = cljs.core.to_array.call(null,cljs.core.first.call(null,xs__11650)));
{
var G__11651 = (i__11649 + 1);
var G__11652 = cljs.core.next.call(null,xs__11650);
i__11649 = G__11651;
xs__11650 = G__11652;
continue;
}
} else
{}
break;
}
return ret__11648;
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
var a__11660 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__11661 = cljs.core.seq.call(null,init_val_or_seq);
var i__11662 = 0;
var s__11663 = s__11661;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____11664 = s__11663;
if(and__3822__auto____11664)
{return (i__11662 < size);
} else
{return and__3822__auto____11664;
}
})()))
{(a__11660[i__11662] = cljs.core.first.call(null,s__11663));
{
var G__11667 = (i__11662 + 1);
var G__11668 = cljs.core.next.call(null,s__11663);
i__11662 = G__11667;
s__11663 = G__11668;
continue;
}
} else
{return a__11660;
}
break;
}
} else
{var n__4149__auto____11665 = size;
var i__11666 = 0;
while(true){
if((i__11666 < n__4149__auto____11665))
{(a__11660[i__11666] = init_val_or_seq);
{
var G__11669 = (i__11666 + 1);
i__11666 = G__11669;
continue;
}
} else
{}
break;
}
return a__11660;
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
var a__11677 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__11678 = cljs.core.seq.call(null,init_val_or_seq);
var i__11679 = 0;
var s__11680 = s__11678;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____11681 = s__11680;
if(and__3822__auto____11681)
{return (i__11679 < size);
} else
{return and__3822__auto____11681;
}
})()))
{(a__11677[i__11679] = cljs.core.first.call(null,s__11680));
{
var G__11684 = (i__11679 + 1);
var G__11685 = cljs.core.next.call(null,s__11680);
i__11679 = G__11684;
s__11680 = G__11685;
continue;
}
} else
{return a__11677;
}
break;
}
} else
{var n__4149__auto____11682 = size;
var i__11683 = 0;
while(true){
if((i__11683 < n__4149__auto____11682))
{(a__11677[i__11683] = init_val_or_seq);
{
var G__11686 = (i__11683 + 1);
i__11683 = G__11686;
continue;
}
} else
{}
break;
}
return a__11677;
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
var a__11694 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__11695 = cljs.core.seq.call(null,init_val_or_seq);
var i__11696 = 0;
var s__11697 = s__11695;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____11698 = s__11697;
if(and__3822__auto____11698)
{return (i__11696 < size);
} else
{return and__3822__auto____11698;
}
})()))
{(a__11694[i__11696] = cljs.core.first.call(null,s__11697));
{
var G__11701 = (i__11696 + 1);
var G__11702 = cljs.core.next.call(null,s__11697);
i__11696 = G__11701;
s__11697 = G__11702;
continue;
}
} else
{return a__11694;
}
break;
}
} else
{var n__4149__auto____11699 = size;
var i__11700 = 0;
while(true){
if((i__11700 < n__4149__auto____11699))
{(a__11694[i__11700] = init_val_or_seq);
{
var G__11703 = (i__11700 + 1);
i__11700 = G__11703;
continue;
}
} else
{}
break;
}
return a__11694;
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
{var s__11708 = s;
var i__11709 = n;
var sum__11710 = 0;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____11711 = (i__11709 > 0);
if(and__3822__auto____11711)
{return cljs.core.seq.call(null,s__11708);
} else
{return and__3822__auto____11711;
}
})()))
{{
var G__11712 = cljs.core.next.call(null,s__11708);
var G__11713 = (i__11709 - 1);
var G__11714 = (sum__11710 + 1);
s__11708 = G__11712;
i__11709 = G__11713;
sum__11710 = G__11714;
continue;
}
} else
{return sum__11710;
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
var s__11719 = cljs.core.seq.call(null,x);
if(s__11719)
{if(cljs.core.chunked_seq_QMARK_.call(null,s__11719))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,s__11719),concat.call(null,cljs.core.chunk_rest.call(null,s__11719),y));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__11719),concat.call(null,cljs.core.rest.call(null,s__11719),y));
}
} else
{return y;
}
}),null));
});
var concat__3 = (function() { 
var G__11723__delegate = function (x,y,zs){
var cat__11722 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__11721 = cljs.core.seq.call(null,xys);
if(xys__11721)
{if(cljs.core.chunked_seq_QMARK_.call(null,xys__11721))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,xys__11721),cat.call(null,cljs.core.chunk_rest.call(null,xys__11721),zs));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__11721),cat.call(null,cljs.core.rest.call(null,xys__11721),zs));
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
return cat__11722.call(null,concat.call(null,x,y),zs);
};
var G__11723 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11723__delegate.call(this, x, y, zs);
};
G__11723.cljs$lang$maxFixedArity = 2;
G__11723.cljs$lang$applyTo = (function (arglist__11724){
var x = cljs.core.first(arglist__11724);
var y = cljs.core.first(cljs.core.next(arglist__11724));
var zs = cljs.core.rest(cljs.core.next(arglist__11724));
return G__11723__delegate(x, y, zs);
});
G__11723.cljs$lang$arity$variadic = G__11723__delegate;
return G__11723;
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
var G__11725__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__11725 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__11725__delegate.call(this, a, b, c, d, more);
};
G__11725.cljs$lang$maxFixedArity = 4;
G__11725.cljs$lang$applyTo = (function (arglist__11726){
var a = cljs.core.first(arglist__11726);
var b = cljs.core.first(cljs.core.next(arglist__11726));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11726)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11726))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11726))));
return G__11725__delegate(a, b, c, d, more);
});
G__11725.cljs$lang$arity$variadic = G__11725__delegate;
return G__11725;
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
var args__11768 = cljs.core.seq.call(null,args);
if((argc === 0))
{return f.call(null);
} else
{var a__11769 = cljs.core._first.call(null,args__11768);
var args__11770 = cljs.core._rest.call(null,args__11768);
if((argc === 1))
{if(f.cljs$lang$arity$1)
{return f.cljs$lang$arity$1(a__11769);
} else
{return f.call(null,a__11769);
}
} else
{var b__11771 = cljs.core._first.call(null,args__11770);
var args__11772 = cljs.core._rest.call(null,args__11770);
if((argc === 2))
{if(f.cljs$lang$arity$2)
{return f.cljs$lang$arity$2(a__11769,b__11771);
} else
{return f.call(null,a__11769,b__11771);
}
} else
{var c__11773 = cljs.core._first.call(null,args__11772);
var args__11774 = cljs.core._rest.call(null,args__11772);
if((argc === 3))
{if(f.cljs$lang$arity$3)
{return f.cljs$lang$arity$3(a__11769,b__11771,c__11773);
} else
{return f.call(null,a__11769,b__11771,c__11773);
}
} else
{var d__11775 = cljs.core._first.call(null,args__11774);
var args__11776 = cljs.core._rest.call(null,args__11774);
if((argc === 4))
{if(f.cljs$lang$arity$4)
{return f.cljs$lang$arity$4(a__11769,b__11771,c__11773,d__11775);
} else
{return f.call(null,a__11769,b__11771,c__11773,d__11775);
}
} else
{var e__11777 = cljs.core._first.call(null,args__11776);
var args__11778 = cljs.core._rest.call(null,args__11776);
if((argc === 5))
{if(f.cljs$lang$arity$5)
{return f.cljs$lang$arity$5(a__11769,b__11771,c__11773,d__11775,e__11777);
} else
{return f.call(null,a__11769,b__11771,c__11773,d__11775,e__11777);
}
} else
{var f__11779 = cljs.core._first.call(null,args__11778);
var args__11780 = cljs.core._rest.call(null,args__11778);
if((argc === 6))
{if(f__11779.cljs$lang$arity$6)
{return f__11779.cljs$lang$arity$6(a__11769,b__11771,c__11773,d__11775,e__11777,f__11779);
} else
{return f__11779.call(null,a__11769,b__11771,c__11773,d__11775,e__11777,f__11779);
}
} else
{var g__11781 = cljs.core._first.call(null,args__11780);
var args__11782 = cljs.core._rest.call(null,args__11780);
if((argc === 7))
{if(f__11779.cljs$lang$arity$7)
{return f__11779.cljs$lang$arity$7(a__11769,b__11771,c__11773,d__11775,e__11777,f__11779,g__11781);
} else
{return f__11779.call(null,a__11769,b__11771,c__11773,d__11775,e__11777,f__11779,g__11781);
}
} else
{var h__11783 = cljs.core._first.call(null,args__11782);
var args__11784 = cljs.core._rest.call(null,args__11782);
if((argc === 8))
{if(f__11779.cljs$lang$arity$8)
{return f__11779.cljs$lang$arity$8(a__11769,b__11771,c__11773,d__11775,e__11777,f__11779,g__11781,h__11783);
} else
{return f__11779.call(null,a__11769,b__11771,c__11773,d__11775,e__11777,f__11779,g__11781,h__11783);
}
} else
{var i__11785 = cljs.core._first.call(null,args__11784);
var args__11786 = cljs.core._rest.call(null,args__11784);
if((argc === 9))
{if(f__11779.cljs$lang$arity$9)
{return f__11779.cljs$lang$arity$9(a__11769,b__11771,c__11773,d__11775,e__11777,f__11779,g__11781,h__11783,i__11785);
} else
{return f__11779.call(null,a__11769,b__11771,c__11773,d__11775,e__11777,f__11779,g__11781,h__11783,i__11785);
}
} else
{var j__11787 = cljs.core._first.call(null,args__11786);
var args__11788 = cljs.core._rest.call(null,args__11786);
if((argc === 10))
{if(f__11779.cljs$lang$arity$10)
{return f__11779.cljs$lang$arity$10(a__11769,b__11771,c__11773,d__11775,e__11777,f__11779,g__11781,h__11783,i__11785,j__11787);
} else
{return f__11779.call(null,a__11769,b__11771,c__11773,d__11775,e__11777,f__11779,g__11781,h__11783,i__11785,j__11787);
}
} else
{var k__11789 = cljs.core._first.call(null,args__11788);
var args__11790 = cljs.core._rest.call(null,args__11788);
if((argc === 11))
{if(f__11779.cljs$lang$arity$11)
{return f__11779.cljs$lang$arity$11(a__11769,b__11771,c__11773,d__11775,e__11777,f__11779,g__11781,h__11783,i__11785,j__11787,k__11789);
} else
{return f__11779.call(null,a__11769,b__11771,c__11773,d__11775,e__11777,f__11779,g__11781,h__11783,i__11785,j__11787,k__11789);
}
} else
{var l__11791 = cljs.core._first.call(null,args__11790);
var args__11792 = cljs.core._rest.call(null,args__11790);
if((argc === 12))
{if(f__11779.cljs$lang$arity$12)
{return f__11779.cljs$lang$arity$12(a__11769,b__11771,c__11773,d__11775,e__11777,f__11779,g__11781,h__11783,i__11785,j__11787,k__11789,l__11791);
} else
{return f__11779.call(null,a__11769,b__11771,c__11773,d__11775,e__11777,f__11779,g__11781,h__11783,i__11785,j__11787,k__11789,l__11791);
}
} else
{var m__11793 = cljs.core._first.call(null,args__11792);
var args__11794 = cljs.core._rest.call(null,args__11792);
if((argc === 13))
{if(f__11779.cljs$lang$arity$13)
{return f__11779.cljs$lang$arity$13(a__11769,b__11771,c__11773,d__11775,e__11777,f__11779,g__11781,h__11783,i__11785,j__11787,k__11789,l__11791,m__11793);
} else
{return f__11779.call(null,a__11769,b__11771,c__11773,d__11775,e__11777,f__11779,g__11781,h__11783,i__11785,j__11787,k__11789,l__11791,m__11793);
}
} else
{var n__11795 = cljs.core._first.call(null,args__11794);
var args__11796 = cljs.core._rest.call(null,args__11794);
if((argc === 14))
{if(f__11779.cljs$lang$arity$14)
{return f__11779.cljs$lang$arity$14(a__11769,b__11771,c__11773,d__11775,e__11777,f__11779,g__11781,h__11783,i__11785,j__11787,k__11789,l__11791,m__11793,n__11795);
} else
{return f__11779.call(null,a__11769,b__11771,c__11773,d__11775,e__11777,f__11779,g__11781,h__11783,i__11785,j__11787,k__11789,l__11791,m__11793,n__11795);
}
} else
{var o__11797 = cljs.core._first.call(null,args__11796);
var args__11798 = cljs.core._rest.call(null,args__11796);
if((argc === 15))
{if(f__11779.cljs$lang$arity$15)
{return f__11779.cljs$lang$arity$15(a__11769,b__11771,c__11773,d__11775,e__11777,f__11779,g__11781,h__11783,i__11785,j__11787,k__11789,l__11791,m__11793,n__11795,o__11797);
} else
{return f__11779.call(null,a__11769,b__11771,c__11773,d__11775,e__11777,f__11779,g__11781,h__11783,i__11785,j__11787,k__11789,l__11791,m__11793,n__11795,o__11797);
}
} else
{var p__11799 = cljs.core._first.call(null,args__11798);
var args__11800 = cljs.core._rest.call(null,args__11798);
if((argc === 16))
{if(f__11779.cljs$lang$arity$16)
{return f__11779.cljs$lang$arity$16(a__11769,b__11771,c__11773,d__11775,e__11777,f__11779,g__11781,h__11783,i__11785,j__11787,k__11789,l__11791,m__11793,n__11795,o__11797,p__11799);
} else
{return f__11779.call(null,a__11769,b__11771,c__11773,d__11775,e__11777,f__11779,g__11781,h__11783,i__11785,j__11787,k__11789,l__11791,m__11793,n__11795,o__11797,p__11799);
}
} else
{var q__11801 = cljs.core._first.call(null,args__11800);
var args__11802 = cljs.core._rest.call(null,args__11800);
if((argc === 17))
{if(f__11779.cljs$lang$arity$17)
{return f__11779.cljs$lang$arity$17(a__11769,b__11771,c__11773,d__11775,e__11777,f__11779,g__11781,h__11783,i__11785,j__11787,k__11789,l__11791,m__11793,n__11795,o__11797,p__11799,q__11801);
} else
{return f__11779.call(null,a__11769,b__11771,c__11773,d__11775,e__11777,f__11779,g__11781,h__11783,i__11785,j__11787,k__11789,l__11791,m__11793,n__11795,o__11797,p__11799,q__11801);
}
} else
{var r__11803 = cljs.core._first.call(null,args__11802);
var args__11804 = cljs.core._rest.call(null,args__11802);
if((argc === 18))
{if(f__11779.cljs$lang$arity$18)
{return f__11779.cljs$lang$arity$18(a__11769,b__11771,c__11773,d__11775,e__11777,f__11779,g__11781,h__11783,i__11785,j__11787,k__11789,l__11791,m__11793,n__11795,o__11797,p__11799,q__11801,r__11803);
} else
{return f__11779.call(null,a__11769,b__11771,c__11773,d__11775,e__11777,f__11779,g__11781,h__11783,i__11785,j__11787,k__11789,l__11791,m__11793,n__11795,o__11797,p__11799,q__11801,r__11803);
}
} else
{var s__11805 = cljs.core._first.call(null,args__11804);
var args__11806 = cljs.core._rest.call(null,args__11804);
if((argc === 19))
{if(f__11779.cljs$lang$arity$19)
{return f__11779.cljs$lang$arity$19(a__11769,b__11771,c__11773,d__11775,e__11777,f__11779,g__11781,h__11783,i__11785,j__11787,k__11789,l__11791,m__11793,n__11795,o__11797,p__11799,q__11801,r__11803,s__11805);
} else
{return f__11779.call(null,a__11769,b__11771,c__11773,d__11775,e__11777,f__11779,g__11781,h__11783,i__11785,j__11787,k__11789,l__11791,m__11793,n__11795,o__11797,p__11799,q__11801,r__11803,s__11805);
}
} else
{var t__11807 = cljs.core._first.call(null,args__11806);
var args__11808 = cljs.core._rest.call(null,args__11806);
if((argc === 20))
{if(f__11779.cljs$lang$arity$20)
{return f__11779.cljs$lang$arity$20(a__11769,b__11771,c__11773,d__11775,e__11777,f__11779,g__11781,h__11783,i__11785,j__11787,k__11789,l__11791,m__11793,n__11795,o__11797,p__11799,q__11801,r__11803,s__11805,t__11807);
} else
{return f__11779.call(null,a__11769,b__11771,c__11773,d__11775,e__11777,f__11779,g__11781,h__11783,i__11785,j__11787,k__11789,l__11791,m__11793,n__11795,o__11797,p__11799,q__11801,r__11803,s__11805,t__11807);
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
var fixed_arity__11823 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__11824 = cljs.core.bounded_count.call(null,args,(fixed_arity__11823 + 1));
if((bc__11824 <= fixed_arity__11823))
{return cljs.core.apply_to.call(null,f,bc__11824,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3 = (function (f,x,args){
var arglist__11825 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__11826 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__11827 = cljs.core.bounded_count.call(null,arglist__11825,(fixed_arity__11826 + 1));
if((bc__11827 <= fixed_arity__11826))
{return cljs.core.apply_to.call(null,f,bc__11827,arglist__11825);
} else
{return f.cljs$lang$applyTo(arglist__11825);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__11825));
}
});
var apply__4 = (function (f,x,y,args){
var arglist__11828 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__11829 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__11830 = cljs.core.bounded_count.call(null,arglist__11828,(fixed_arity__11829 + 1));
if((bc__11830 <= fixed_arity__11829))
{return cljs.core.apply_to.call(null,f,bc__11830,arglist__11828);
} else
{return f.cljs$lang$applyTo(arglist__11828);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__11828));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist__11831 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__11832 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__11833 = cljs.core.bounded_count.call(null,arglist__11831,(fixed_arity__11832 + 1));
if((bc__11833 <= fixed_arity__11832))
{return cljs.core.apply_to.call(null,f,bc__11833,arglist__11831);
} else
{return f.cljs$lang$applyTo(arglist__11831);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__11831));
}
});
var apply__6 = (function() { 
var G__11837__delegate = function (f,a,b,c,d,args){
var arglist__11834 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__11835 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__11836 = cljs.core.bounded_count.call(null,arglist__11834,(fixed_arity__11835 + 1));
if((bc__11836 <= fixed_arity__11835))
{return cljs.core.apply_to.call(null,f,bc__11836,arglist__11834);
} else
{return f.cljs$lang$applyTo(arglist__11834);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__11834));
}
};
var G__11837 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__11837__delegate.call(this, f, a, b, c, d, args);
};
G__11837.cljs$lang$maxFixedArity = 5;
G__11837.cljs$lang$applyTo = (function (arglist__11838){
var f = cljs.core.first(arglist__11838);
var a = cljs.core.first(cljs.core.next(arglist__11838));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11838)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11838))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11838)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11838)))));
return G__11837__delegate(f, a, b, c, d, args);
});
G__11837.cljs$lang$arity$variadic = G__11837__delegate;
return G__11837;
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
vary_meta.cljs$lang$applyTo = (function (arglist__11839){
var obj = cljs.core.first(arglist__11839);
var f = cljs.core.first(cljs.core.next(arglist__11839));
var args = cljs.core.rest(cljs.core.next(arglist__11839));
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
var G__11840__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__11840 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11840__delegate.call(this, x, y, more);
};
G__11840.cljs$lang$maxFixedArity = 2;
G__11840.cljs$lang$applyTo = (function (arglist__11841){
var x = cljs.core.first(arglist__11841);
var y = cljs.core.first(cljs.core.next(arglist__11841));
var more = cljs.core.rest(cljs.core.next(arglist__11841));
return G__11840__delegate(x, y, more);
});
G__11840.cljs$lang$arity$variadic = G__11840__delegate;
return G__11840;
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
var G__11842 = pred;
var G__11843 = cljs.core.next.call(null,coll);
pred = G__11842;
coll = G__11843;
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
{var or__3824__auto____11845 = pred.call(null,cljs.core.first.call(null,coll));
if(cljs.core.truth_(or__3824__auto____11845))
{return or__3824__auto____11845;
} else
{{
var G__11846 = pred;
var G__11847 = cljs.core.next.call(null,coll);
pred = G__11846;
coll = G__11847;
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
var G__11848 = null;
var G__11848__0 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__11848__1 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__11848__2 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__11848__3 = (function() { 
var G__11849__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__11849 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11849__delegate.call(this, x, y, zs);
};
G__11849.cljs$lang$maxFixedArity = 2;
G__11849.cljs$lang$applyTo = (function (arglist__11850){
var x = cljs.core.first(arglist__11850);
var y = cljs.core.first(cljs.core.next(arglist__11850));
var zs = cljs.core.rest(cljs.core.next(arglist__11850));
return G__11849__delegate(x, y, zs);
});
G__11849.cljs$lang$arity$variadic = G__11849__delegate;
return G__11849;
})()
;
G__11848 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__11848__0.call(this);
case 1:
return G__11848__1.call(this,x);
case 2:
return G__11848__2.call(this,x,y);
default:
return G__11848__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
G__11848.cljs$lang$maxFixedArity = 2;
G__11848.cljs$lang$applyTo = G__11848__3.cljs$lang$applyTo;
return G__11848;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__11851__delegate = function (args){
return x;
};
var G__11851 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__11851__delegate.call(this, args);
};
G__11851.cljs$lang$maxFixedArity = 0;
G__11851.cljs$lang$applyTo = (function (arglist__11852){
var args = cljs.core.seq(arglist__11852);;
return G__11851__delegate(args);
});
G__11851.cljs$lang$arity$variadic = G__11851__delegate;
return G__11851;
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
var G__11859 = null;
var G__11859__0 = (function (){
return f.call(null,g.call(null));
});
var G__11859__1 = (function (x){
return f.call(null,g.call(null,x));
});
var G__11859__2 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__11859__3 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__11859__4 = (function() { 
var G__11860__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__11860 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11860__delegate.call(this, x, y, z, args);
};
G__11860.cljs$lang$maxFixedArity = 3;
G__11860.cljs$lang$applyTo = (function (arglist__11861){
var x = cljs.core.first(arglist__11861);
var y = cljs.core.first(cljs.core.next(arglist__11861));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11861)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11861)));
return G__11860__delegate(x, y, z, args);
});
G__11860.cljs$lang$arity$variadic = G__11860__delegate;
return G__11860;
})()
;
G__11859 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__11859__0.call(this);
case 1:
return G__11859__1.call(this,x);
case 2:
return G__11859__2.call(this,x,y);
case 3:
return G__11859__3.call(this,x,y,z);
default:
return G__11859__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__11859.cljs$lang$maxFixedArity = 3;
G__11859.cljs$lang$applyTo = G__11859__4.cljs$lang$applyTo;
return G__11859;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__11862 = null;
var G__11862__0 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__11862__1 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__11862__2 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__11862__3 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__11862__4 = (function() { 
var G__11863__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__11863 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11863__delegate.call(this, x, y, z, args);
};
G__11863.cljs$lang$maxFixedArity = 3;
G__11863.cljs$lang$applyTo = (function (arglist__11864){
var x = cljs.core.first(arglist__11864);
var y = cljs.core.first(cljs.core.next(arglist__11864));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11864)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11864)));
return G__11863__delegate(x, y, z, args);
});
G__11863.cljs$lang$arity$variadic = G__11863__delegate;
return G__11863;
})()
;
G__11862 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__11862__0.call(this);
case 1:
return G__11862__1.call(this,x);
case 2:
return G__11862__2.call(this,x,y);
case 3:
return G__11862__3.call(this,x,y,z);
default:
return G__11862__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__11862.cljs$lang$maxFixedArity = 3;
G__11862.cljs$lang$applyTo = G__11862__4.cljs$lang$applyTo;
return G__11862;
})()
});
var comp__4 = (function() { 
var G__11865__delegate = function (f1,f2,f3,fs){
var fs__11856 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));
return (function() { 
var G__11866__delegate = function (args){
var ret__11857 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__11856),args);
var fs__11858 = cljs.core.next.call(null,fs__11856);
while(true){
if(fs__11858)
{{
var G__11867 = cljs.core.first.call(null,fs__11858).call(null,ret__11857);
var G__11868 = cljs.core.next.call(null,fs__11858);
ret__11857 = G__11867;
fs__11858 = G__11868;
continue;
}
} else
{return ret__11857;
}
break;
}
};
var G__11866 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__11866__delegate.call(this, args);
};
G__11866.cljs$lang$maxFixedArity = 0;
G__11866.cljs$lang$applyTo = (function (arglist__11869){
var args = cljs.core.seq(arglist__11869);;
return G__11866__delegate(args);
});
G__11866.cljs$lang$arity$variadic = G__11866__delegate;
return G__11866;
})()
;
};
var G__11865 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11865__delegate.call(this, f1, f2, f3, fs);
};
G__11865.cljs$lang$maxFixedArity = 3;
G__11865.cljs$lang$applyTo = (function (arglist__11870){
var f1 = cljs.core.first(arglist__11870);
var f2 = cljs.core.first(cljs.core.next(arglist__11870));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11870)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11870)));
return G__11865__delegate(f1, f2, f3, fs);
});
G__11865.cljs$lang$arity$variadic = G__11865__delegate;
return G__11865;
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
var G__11871__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__11871 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__11871__delegate.call(this, args);
};
G__11871.cljs$lang$maxFixedArity = 0;
G__11871.cljs$lang$applyTo = (function (arglist__11872){
var args = cljs.core.seq(arglist__11872);;
return G__11871__delegate(args);
});
G__11871.cljs$lang$arity$variadic = G__11871__delegate;
return G__11871;
})()
;
});
var partial__3 = (function (f,arg1,arg2){
return (function() { 
var G__11873__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__11873 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__11873__delegate.call(this, args);
};
G__11873.cljs$lang$maxFixedArity = 0;
G__11873.cljs$lang$applyTo = (function (arglist__11874){
var args = cljs.core.seq(arglist__11874);;
return G__11873__delegate(args);
});
G__11873.cljs$lang$arity$variadic = G__11873__delegate;
return G__11873;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__11875__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__11875 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__11875__delegate.call(this, args);
};
G__11875.cljs$lang$maxFixedArity = 0;
G__11875.cljs$lang$applyTo = (function (arglist__11876){
var args = cljs.core.seq(arglist__11876);;
return G__11875__delegate(args);
});
G__11875.cljs$lang$arity$variadic = G__11875__delegate;
return G__11875;
})()
;
});
var partial__5 = (function() { 
var G__11877__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__11878__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__11878 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__11878__delegate.call(this, args);
};
G__11878.cljs$lang$maxFixedArity = 0;
G__11878.cljs$lang$applyTo = (function (arglist__11879){
var args = cljs.core.seq(arglist__11879);;
return G__11878__delegate(args);
});
G__11878.cljs$lang$arity$variadic = G__11878__delegate;
return G__11878;
})()
;
};
var G__11877 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__11877__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__11877.cljs$lang$maxFixedArity = 4;
G__11877.cljs$lang$applyTo = (function (arglist__11880){
var f = cljs.core.first(arglist__11880);
var arg1 = cljs.core.first(cljs.core.next(arglist__11880));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11880)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11880))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11880))));
return G__11877__delegate(f, arg1, arg2, arg3, more);
});
G__11877.cljs$lang$arity$variadic = G__11877__delegate;
return G__11877;
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
var G__11881 = null;
var G__11881__1 = (function (a){
return f.call(null,(((a == null))?x:a));
});
var G__11881__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),b);
});
var G__11881__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),b,c);
});
var G__11881__4 = (function() { 
var G__11882__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),b,c,ds);
};
var G__11882 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11882__delegate.call(this, a, b, c, ds);
};
G__11882.cljs$lang$maxFixedArity = 3;
G__11882.cljs$lang$applyTo = (function (arglist__11883){
var a = cljs.core.first(arglist__11883);
var b = cljs.core.first(cljs.core.next(arglist__11883));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11883)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11883)));
return G__11882__delegate(a, b, c, ds);
});
G__11882.cljs$lang$arity$variadic = G__11882__delegate;
return G__11882;
})()
;
G__11881 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__11881__1.call(this,a);
case 2:
return G__11881__2.call(this,a,b);
case 3:
return G__11881__3.call(this,a,b,c);
default:
return G__11881__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__11881.cljs$lang$maxFixedArity = 3;
G__11881.cljs$lang$applyTo = G__11881__4.cljs$lang$applyTo;
return G__11881;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__11884 = null;
var G__11884__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__11884__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),c);
});
var G__11884__4 = (function() { 
var G__11885__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__11885 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11885__delegate.call(this, a, b, c, ds);
};
G__11885.cljs$lang$maxFixedArity = 3;
G__11885.cljs$lang$applyTo = (function (arglist__11886){
var a = cljs.core.first(arglist__11886);
var b = cljs.core.first(cljs.core.next(arglist__11886));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11886)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11886)));
return G__11885__delegate(a, b, c, ds);
});
G__11885.cljs$lang$arity$variadic = G__11885__delegate;
return G__11885;
})()
;
G__11884 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__11884__2.call(this,a,b);
case 3:
return G__11884__3.call(this,a,b,c);
default:
return G__11884__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__11884.cljs$lang$maxFixedArity = 3;
G__11884.cljs$lang$applyTo = G__11884__4.cljs$lang$applyTo;
return G__11884;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__11887 = null;
var G__11887__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__11887__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c));
});
var G__11887__4 = (function() { 
var G__11888__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__11888 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11888__delegate.call(this, a, b, c, ds);
};
G__11888.cljs$lang$maxFixedArity = 3;
G__11888.cljs$lang$applyTo = (function (arglist__11889){
var a = cljs.core.first(arglist__11889);
var b = cljs.core.first(cljs.core.next(arglist__11889));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11889)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11889)));
return G__11888__delegate(a, b, c, ds);
});
G__11888.cljs$lang$arity$variadic = G__11888__delegate;
return G__11888;
})()
;
G__11887 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__11887__2.call(this,a,b);
case 3:
return G__11887__3.call(this,a,b,c);
default:
return G__11887__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__11887.cljs$lang$maxFixedArity = 3;
G__11887.cljs$lang$applyTo = G__11887__4.cljs$lang$applyTo;
return G__11887;
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
var mapi__11905 = (function mapi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____11913 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____11913)
{var s__11914 = temp__3974__auto____11913;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11914))
{var c__11915 = cljs.core.chunk_first.call(null,s__11914);
var size__11916 = cljs.core.count.call(null,c__11915);
var b__11917 = cljs.core.chunk_buffer.call(null,size__11916);
var n__4149__auto____11918 = size__11916;
var i__11919 = 0;
while(true){
if((i__11919 < n__4149__auto____11918))
{cljs.core.chunk_append.call(null,b__11917,f.call(null,(idx + i__11919),cljs.core._nth.call(null,c__11915,i__11919)));
{
var G__11920 = (i__11919 + 1);
i__11919 = G__11920;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11917),mapi.call(null,(idx + size__11916),cljs.core.chunk_rest.call(null,s__11914)));
} else
{return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__11914)),mapi.call(null,(idx + 1),cljs.core.rest.call(null,s__11914)));
}
} else
{return null;
}
}),null));
});
return mapi__11905.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____11930 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____11930)
{var s__11931 = temp__3974__auto____11930;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11931))
{var c__11932 = cljs.core.chunk_first.call(null,s__11931);
var size__11933 = cljs.core.count.call(null,c__11932);
var b__11934 = cljs.core.chunk_buffer.call(null,size__11933);
var n__4149__auto____11935 = size__11933;
var i__11936 = 0;
while(true){
if((i__11936 < n__4149__auto____11935))
{var x__11937 = f.call(null,cljs.core._nth.call(null,c__11932,i__11936));
if((x__11937 == null))
{} else
{cljs.core.chunk_append.call(null,b__11934,x__11937);
}
{
var G__11939 = (i__11936 + 1);
i__11936 = G__11939;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11934),keep.call(null,f,cljs.core.chunk_rest.call(null,s__11931)));
} else
{var x__11938 = f.call(null,cljs.core.first.call(null,s__11931));
if((x__11938 == null))
{return keep.call(null,f,cljs.core.rest.call(null,s__11931));
} else
{return cljs.core.cons.call(null,x__11938,keep.call(null,f,cljs.core.rest.call(null,s__11931)));
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
var keepi__11965 = (function keepi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____11975 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____11975)
{var s__11976 = temp__3974__auto____11975;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11976))
{var c__11977 = cljs.core.chunk_first.call(null,s__11976);
var size__11978 = cljs.core.count.call(null,c__11977);
var b__11979 = cljs.core.chunk_buffer.call(null,size__11978);
var n__4149__auto____11980 = size__11978;
var i__11981 = 0;
while(true){
if((i__11981 < n__4149__auto____11980))
{var x__11982 = f.call(null,(idx + i__11981),cljs.core._nth.call(null,c__11977,i__11981));
if((x__11982 == null))
{} else
{cljs.core.chunk_append.call(null,b__11979,x__11982);
}
{
var G__11984 = (i__11981 + 1);
i__11981 = G__11984;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11979),keepi.call(null,(idx + size__11978),cljs.core.chunk_rest.call(null,s__11976)));
} else
{var x__11983 = f.call(null,idx,cljs.core.first.call(null,s__11976));
if((x__11983 == null))
{return keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__11976));
} else
{return cljs.core.cons.call(null,x__11983,keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__11976)));
}
}
} else
{return null;
}
}),null));
});
return keepi__11965.call(null,0,coll);
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____12070 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____12070))
{return p.call(null,y);
} else
{return and__3822__auto____12070;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____12071 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____12071))
{var and__3822__auto____12072 = p.call(null,y);
if(cljs.core.truth_(and__3822__auto____12072))
{return p.call(null,z);
} else
{return and__3822__auto____12072;
}
} else
{return and__3822__auto____12071;
}
})());
});
var ep1__4 = (function() { 
var G__12141__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____12073 = ep1.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____12073))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3822__auto____12073;
}
})());
};
var G__12141 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12141__delegate.call(this, x, y, z, args);
};
G__12141.cljs$lang$maxFixedArity = 3;
G__12141.cljs$lang$applyTo = (function (arglist__12142){
var x = cljs.core.first(arglist__12142);
var y = cljs.core.first(cljs.core.next(arglist__12142));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12142)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12142)));
return G__12141__delegate(x, y, z, args);
});
G__12141.cljs$lang$arity$variadic = G__12141__delegate;
return G__12141;
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____12085 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____12085))
{return p2.call(null,x);
} else
{return and__3822__auto____12085;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____12086 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____12086))
{var and__3822__auto____12087 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____12087))
{var and__3822__auto____12088 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____12088))
{return p2.call(null,y);
} else
{return and__3822__auto____12088;
}
} else
{return and__3822__auto____12087;
}
} else
{return and__3822__auto____12086;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____12089 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____12089))
{var and__3822__auto____12090 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____12090))
{var and__3822__auto____12091 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____12091))
{var and__3822__auto____12092 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____12092))
{var and__3822__auto____12093 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____12093))
{return p2.call(null,z);
} else
{return and__3822__auto____12093;
}
} else
{return and__3822__auto____12092;
}
} else
{return and__3822__auto____12091;
}
} else
{return and__3822__auto____12090;
}
} else
{return and__3822__auto____12089;
}
})());
});
var ep2__4 = (function() { 
var G__12143__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____12094 = ep2.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____12094))
{return cljs.core.every_QMARK_.call(null,(function (p1__11940_SHARP_){
var and__3822__auto____12095 = p1.call(null,p1__11940_SHARP_);
if(cljs.core.truth_(and__3822__auto____12095))
{return p2.call(null,p1__11940_SHARP_);
} else
{return and__3822__auto____12095;
}
}),args);
} else
{return and__3822__auto____12094;
}
})());
};
var G__12143 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12143__delegate.call(this, x, y, z, args);
};
G__12143.cljs$lang$maxFixedArity = 3;
G__12143.cljs$lang$applyTo = (function (arglist__12144){
var x = cljs.core.first(arglist__12144);
var y = cljs.core.first(cljs.core.next(arglist__12144));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12144)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12144)));
return G__12143__delegate(x, y, z, args);
});
G__12143.cljs$lang$arity$variadic = G__12143__delegate;
return G__12143;
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____12114 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____12114))
{var and__3822__auto____12115 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____12115))
{return p3.call(null,x);
} else
{return and__3822__auto____12115;
}
} else
{return and__3822__auto____12114;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____12116 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____12116))
{var and__3822__auto____12117 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____12117))
{var and__3822__auto____12118 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____12118))
{var and__3822__auto____12119 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____12119))
{var and__3822__auto____12120 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____12120))
{return p3.call(null,y);
} else
{return and__3822__auto____12120;
}
} else
{return and__3822__auto____12119;
}
} else
{return and__3822__auto____12118;
}
} else
{return and__3822__auto____12117;
}
} else
{return and__3822__auto____12116;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____12121 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____12121))
{var and__3822__auto____12122 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____12122))
{var and__3822__auto____12123 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____12123))
{var and__3822__auto____12124 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____12124))
{var and__3822__auto____12125 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____12125))
{var and__3822__auto____12126 = p3.call(null,y);
if(cljs.core.truth_(and__3822__auto____12126))
{var and__3822__auto____12127 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____12127))
{var and__3822__auto____12128 = p2.call(null,z);
if(cljs.core.truth_(and__3822__auto____12128))
{return p3.call(null,z);
} else
{return and__3822__auto____12128;
}
} else
{return and__3822__auto____12127;
}
} else
{return and__3822__auto____12126;
}
} else
{return and__3822__auto____12125;
}
} else
{return and__3822__auto____12124;
}
} else
{return and__3822__auto____12123;
}
} else
{return and__3822__auto____12122;
}
} else
{return and__3822__auto____12121;
}
})());
});
var ep3__4 = (function() { 
var G__12145__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____12129 = ep3.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____12129))
{return cljs.core.every_QMARK_.call(null,(function (p1__11941_SHARP_){
var and__3822__auto____12130 = p1.call(null,p1__11941_SHARP_);
if(cljs.core.truth_(and__3822__auto____12130))
{var and__3822__auto____12131 = p2.call(null,p1__11941_SHARP_);
if(cljs.core.truth_(and__3822__auto____12131))
{return p3.call(null,p1__11941_SHARP_);
} else
{return and__3822__auto____12131;
}
} else
{return and__3822__auto____12130;
}
}),args);
} else
{return and__3822__auto____12129;
}
})());
};
var G__12145 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12145__delegate.call(this, x, y, z, args);
};
G__12145.cljs$lang$maxFixedArity = 3;
G__12145.cljs$lang$applyTo = (function (arglist__12146){
var x = cljs.core.first(arglist__12146);
var y = cljs.core.first(cljs.core.next(arglist__12146));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12146)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12146)));
return G__12145__delegate(x, y, z, args);
});
G__12145.cljs$lang$arity$variadic = G__12145__delegate;
return G__12145;
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
var G__12147__delegate = function (p1,p2,p3,ps){
var ps__12132 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__11942_SHARP_){
return p1__11942_SHARP_.call(null,x);
}),ps__12132);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__11943_SHARP_){
var and__3822__auto____12137 = p1__11943_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____12137))
{return p1__11943_SHARP_.call(null,y);
} else
{return and__3822__auto____12137;
}
}),ps__12132);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__11944_SHARP_){
var and__3822__auto____12138 = p1__11944_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____12138))
{var and__3822__auto____12139 = p1__11944_SHARP_.call(null,y);
if(cljs.core.truth_(and__3822__auto____12139))
{return p1__11944_SHARP_.call(null,z);
} else
{return and__3822__auto____12139;
}
} else
{return and__3822__auto____12138;
}
}),ps__12132);
});
var epn__4 = (function() { 
var G__12148__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____12140 = epn.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____12140))
{return cljs.core.every_QMARK_.call(null,(function (p1__11945_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__11945_SHARP_,args);
}),ps__12132);
} else
{return and__3822__auto____12140;
}
})());
};
var G__12148 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12148__delegate.call(this, x, y, z, args);
};
G__12148.cljs$lang$maxFixedArity = 3;
G__12148.cljs$lang$applyTo = (function (arglist__12149){
var x = cljs.core.first(arglist__12149);
var y = cljs.core.first(cljs.core.next(arglist__12149));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12149)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12149)));
return G__12148__delegate(x, y, z, args);
});
G__12148.cljs$lang$arity$variadic = G__12148__delegate;
return G__12148;
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
var G__12147 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12147__delegate.call(this, p1, p2, p3, ps);
};
G__12147.cljs$lang$maxFixedArity = 3;
G__12147.cljs$lang$applyTo = (function (arglist__12150){
var p1 = cljs.core.first(arglist__12150);
var p2 = cljs.core.first(cljs.core.next(arglist__12150));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12150)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12150)));
return G__12147__delegate(p1, p2, p3, ps);
});
G__12147.cljs$lang$arity$variadic = G__12147__delegate;
return G__12147;
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
var or__3824__auto____12231 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____12231))
{return or__3824__auto____12231;
} else
{return p.call(null,y);
}
});
var sp1__3 = (function (x,y,z){
var or__3824__auto____12232 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____12232))
{return or__3824__auto____12232;
} else
{var or__3824__auto____12233 = p.call(null,y);
if(cljs.core.truth_(or__3824__auto____12233))
{return or__3824__auto____12233;
} else
{return p.call(null,z);
}
}
});
var sp1__4 = (function() { 
var G__12302__delegate = function (x,y,z,args){
var or__3824__auto____12234 = sp1.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____12234))
{return or__3824__auto____12234;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__12302 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12302__delegate.call(this, x, y, z, args);
};
G__12302.cljs$lang$maxFixedArity = 3;
G__12302.cljs$lang$applyTo = (function (arglist__12303){
var x = cljs.core.first(arglist__12303);
var y = cljs.core.first(cljs.core.next(arglist__12303));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12303)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12303)));
return G__12302__delegate(x, y, z, args);
});
G__12302.cljs$lang$arity$variadic = G__12302__delegate;
return G__12302;
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
var or__3824__auto____12246 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____12246))
{return or__3824__auto____12246;
} else
{return p2.call(null,x);
}
});
var sp2__2 = (function (x,y){
var or__3824__auto____12247 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____12247))
{return or__3824__auto____12247;
} else
{var or__3824__auto____12248 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____12248))
{return or__3824__auto____12248;
} else
{var or__3824__auto____12249 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____12249))
{return or__3824__auto____12249;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3824__auto____12250 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____12250))
{return or__3824__auto____12250;
} else
{var or__3824__auto____12251 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____12251))
{return or__3824__auto____12251;
} else
{var or__3824__auto____12252 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____12252))
{return or__3824__auto____12252;
} else
{var or__3824__auto____12253 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____12253))
{return or__3824__auto____12253;
} else
{var or__3824__auto____12254 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____12254))
{return or__3824__auto____12254;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__12304__delegate = function (x,y,z,args){
var or__3824__auto____12255 = sp2.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____12255))
{return or__3824__auto____12255;
} else
{return cljs.core.some.call(null,(function (p1__11985_SHARP_){
var or__3824__auto____12256 = p1.call(null,p1__11985_SHARP_);
if(cljs.core.truth_(or__3824__auto____12256))
{return or__3824__auto____12256;
} else
{return p2.call(null,p1__11985_SHARP_);
}
}),args);
}
};
var G__12304 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12304__delegate.call(this, x, y, z, args);
};
G__12304.cljs$lang$maxFixedArity = 3;
G__12304.cljs$lang$applyTo = (function (arglist__12305){
var x = cljs.core.first(arglist__12305);
var y = cljs.core.first(cljs.core.next(arglist__12305));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12305)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12305)));
return G__12304__delegate(x, y, z, args);
});
G__12304.cljs$lang$arity$variadic = G__12304__delegate;
return G__12304;
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
var or__3824__auto____12275 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____12275))
{return or__3824__auto____12275;
} else
{var or__3824__auto____12276 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____12276))
{return or__3824__auto____12276;
} else
{return p3.call(null,x);
}
}
});
var sp3__2 = (function (x,y){
var or__3824__auto____12277 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____12277))
{return or__3824__auto____12277;
} else
{var or__3824__auto____12278 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____12278))
{return or__3824__auto____12278;
} else
{var or__3824__auto____12279 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____12279))
{return or__3824__auto____12279;
} else
{var or__3824__auto____12280 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____12280))
{return or__3824__auto____12280;
} else
{var or__3824__auto____12281 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____12281))
{return or__3824__auto____12281;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3824__auto____12282 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____12282))
{return or__3824__auto____12282;
} else
{var or__3824__auto____12283 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____12283))
{return or__3824__auto____12283;
} else
{var or__3824__auto____12284 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____12284))
{return or__3824__auto____12284;
} else
{var or__3824__auto____12285 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____12285))
{return or__3824__auto____12285;
} else
{var or__3824__auto____12286 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____12286))
{return or__3824__auto____12286;
} else
{var or__3824__auto____12287 = p3.call(null,y);
if(cljs.core.truth_(or__3824__auto____12287))
{return or__3824__auto____12287;
} else
{var or__3824__auto____12288 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____12288))
{return or__3824__auto____12288;
} else
{var or__3824__auto____12289 = p2.call(null,z);
if(cljs.core.truth_(or__3824__auto____12289))
{return or__3824__auto____12289;
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
var G__12306__delegate = function (x,y,z,args){
var or__3824__auto____12290 = sp3.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____12290))
{return or__3824__auto____12290;
} else
{return cljs.core.some.call(null,(function (p1__11986_SHARP_){
var or__3824__auto____12291 = p1.call(null,p1__11986_SHARP_);
if(cljs.core.truth_(or__3824__auto____12291))
{return or__3824__auto____12291;
} else
{var or__3824__auto____12292 = p2.call(null,p1__11986_SHARP_);
if(cljs.core.truth_(or__3824__auto____12292))
{return or__3824__auto____12292;
} else
{return p3.call(null,p1__11986_SHARP_);
}
}
}),args);
}
};
var G__12306 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12306__delegate.call(this, x, y, z, args);
};
G__12306.cljs$lang$maxFixedArity = 3;
G__12306.cljs$lang$applyTo = (function (arglist__12307){
var x = cljs.core.first(arglist__12307);
var y = cljs.core.first(cljs.core.next(arglist__12307));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12307)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12307)));
return G__12306__delegate(x, y, z, args);
});
G__12306.cljs$lang$arity$variadic = G__12306__delegate;
return G__12306;
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
var G__12308__delegate = function (p1,p2,p3,ps){
var ps__12293 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some.call(null,(function (p1__11987_SHARP_){
return p1__11987_SHARP_.call(null,x);
}),ps__12293);
});
var spn__2 = (function (x,y){
return cljs.core.some.call(null,(function (p1__11988_SHARP_){
var or__3824__auto____12298 = p1__11988_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____12298))
{return or__3824__auto____12298;
} else
{return p1__11988_SHARP_.call(null,y);
}
}),ps__12293);
});
var spn__3 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__11989_SHARP_){
var or__3824__auto____12299 = p1__11989_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____12299))
{return or__3824__auto____12299;
} else
{var or__3824__auto____12300 = p1__11989_SHARP_.call(null,y);
if(cljs.core.truth_(or__3824__auto____12300))
{return or__3824__auto____12300;
} else
{return p1__11989_SHARP_.call(null,z);
}
}
}),ps__12293);
});
var spn__4 = (function() { 
var G__12309__delegate = function (x,y,z,args){
var or__3824__auto____12301 = spn.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____12301))
{return or__3824__auto____12301;
} else
{return cljs.core.some.call(null,(function (p1__11990_SHARP_){
return cljs.core.some.call(null,p1__11990_SHARP_,args);
}),ps__12293);
}
};
var G__12309 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12309__delegate.call(this, x, y, z, args);
};
G__12309.cljs$lang$maxFixedArity = 3;
G__12309.cljs$lang$applyTo = (function (arglist__12310){
var x = cljs.core.first(arglist__12310);
var y = cljs.core.first(cljs.core.next(arglist__12310));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12310)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12310)));
return G__12309__delegate(x, y, z, args);
});
G__12309.cljs$lang$arity$variadic = G__12309__delegate;
return G__12309;
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
var G__12308 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12308__delegate.call(this, p1, p2, p3, ps);
};
G__12308.cljs$lang$maxFixedArity = 3;
G__12308.cljs$lang$applyTo = (function (arglist__12311){
var p1 = cljs.core.first(arglist__12311);
var p2 = cljs.core.first(cljs.core.next(arglist__12311));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12311)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12311)));
return G__12308__delegate(p1, p2, p3, ps);
});
G__12308.cljs$lang$arity$variadic = G__12308__delegate;
return G__12308;
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
var temp__3974__auto____12330 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____12330)
{var s__12331 = temp__3974__auto____12330;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12331))
{var c__12332 = cljs.core.chunk_first.call(null,s__12331);
var size__12333 = cljs.core.count.call(null,c__12332);
var b__12334 = cljs.core.chunk_buffer.call(null,size__12333);
var n__4149__auto____12335 = size__12333;
var i__12336 = 0;
while(true){
if((i__12336 < n__4149__auto____12335))
{cljs.core.chunk_append.call(null,b__12334,f.call(null,cljs.core._nth.call(null,c__12332,i__12336)));
{
var G__12348 = (i__12336 + 1);
i__12336 = G__12348;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12334),map.call(null,f,cljs.core.chunk_rest.call(null,s__12331)));
} else
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__12331)),map.call(null,f,cljs.core.rest.call(null,s__12331)));
}
} else
{return null;
}
}),null));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__12337 = cljs.core.seq.call(null,c1);
var s2__12338 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____12339 = s1__12337;
if(and__3822__auto____12339)
{return s2__12338;
} else
{return and__3822__auto____12339;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__12337),cljs.core.first.call(null,s2__12338)),map.call(null,f,cljs.core.rest.call(null,s1__12337),cljs.core.rest.call(null,s2__12338)));
} else
{return null;
}
}),null));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__12340 = cljs.core.seq.call(null,c1);
var s2__12341 = cljs.core.seq.call(null,c2);
var s3__12342 = cljs.core.seq.call(null,c3);
if((function (){var and__3822__auto____12343 = s1__12340;
if(and__3822__auto____12343)
{var and__3822__auto____12344 = s2__12341;
if(and__3822__auto____12344)
{return s3__12342;
} else
{return and__3822__auto____12344;
}
} else
{return and__3822__auto____12343;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__12340),cljs.core.first.call(null,s2__12341),cljs.core.first.call(null,s3__12342)),map.call(null,f,cljs.core.rest.call(null,s1__12340),cljs.core.rest.call(null,s2__12341),cljs.core.rest.call(null,s3__12342)));
} else
{return null;
}
}),null));
});
var map__5 = (function() { 
var G__12349__delegate = function (f,c1,c2,c3,colls){
var step__12347 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__12346 = map.call(null,cljs.core.seq,cs);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__12346))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__12346),step.call(null,map.call(null,cljs.core.rest,ss__12346)));
} else
{return null;
}
}),null));
});
return map.call(null,(function (p1__12151_SHARP_){
return cljs.core.apply.call(null,f,p1__12151_SHARP_);
}),step__12347.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__12349 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__12349__delegate.call(this, f, c1, c2, c3, colls);
};
G__12349.cljs$lang$maxFixedArity = 4;
G__12349.cljs$lang$applyTo = (function (arglist__12350){
var f = cljs.core.first(arglist__12350);
var c1 = cljs.core.first(cljs.core.next(arglist__12350));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12350)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12350))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12350))));
return G__12349__delegate(f, c1, c2, c3, colls);
});
G__12349.cljs$lang$arity$variadic = G__12349__delegate;
return G__12349;
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
{var temp__3974__auto____12353 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____12353)
{var s__12354 = temp__3974__auto____12353;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__12354),take.call(null,(n - 1),cljs.core.rest.call(null,s__12354)));
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
var step__12360 = (function (n,coll){
while(true){
var s__12358 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____12359 = (n > 0);
if(and__3822__auto____12359)
{return s__12358;
} else
{return and__3822__auto____12359;
}
})()))
{{
var G__12361 = (n - 1);
var G__12362 = cljs.core.rest.call(null,s__12358);
n = G__12361;
coll = G__12362;
continue;
}
} else
{return s__12358;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__12360.call(null,n,coll);
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
var s__12365 = cljs.core.seq.call(null,coll);
var lead__12366 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));
while(true){
if(lead__12366)
{{
var G__12367 = cljs.core.next.call(null,s__12365);
var G__12368 = cljs.core.next.call(null,lead__12366);
s__12365 = G__12367;
lead__12366 = G__12368;
continue;
}
} else
{return s__12365;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__12374 = (function (pred,coll){
while(true){
var s__12372 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____12373 = s__12372;
if(and__3822__auto____12373)
{return pred.call(null,cljs.core.first.call(null,s__12372));
} else
{return and__3822__auto____12373;
}
})()))
{{
var G__12375 = pred;
var G__12376 = cljs.core.rest.call(null,s__12372);
pred = G__12375;
coll = G__12376;
continue;
}
} else
{return s__12372;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__12374.call(null,pred,coll);
}),null));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____12379 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____12379)
{var s__12380 = temp__3974__auto____12379;
return cljs.core.concat.call(null,s__12380,cycle.call(null,s__12380));
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
var s1__12385 = cljs.core.seq.call(null,c1);
var s2__12386 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____12387 = s1__12385;
if(and__3822__auto____12387)
{return s2__12386;
} else
{return and__3822__auto____12387;
}
})())
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__12385),cljs.core.cons.call(null,cljs.core.first.call(null,s2__12386),interleave.call(null,cljs.core.rest.call(null,s1__12385),cljs.core.rest.call(null,s2__12386))));
} else
{return null;
}
}),null));
});
var interleave__3 = (function() { 
var G__12389__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__12388 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__12388))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__12388),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__12388)));
} else
{return null;
}
}),null));
};
var G__12389 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12389__delegate.call(this, c1, c2, colls);
};
G__12389.cljs$lang$maxFixedArity = 2;
G__12389.cljs$lang$applyTo = (function (arglist__12390){
var c1 = cljs.core.first(arglist__12390);
var c2 = cljs.core.first(cljs.core.next(arglist__12390));
var colls = cljs.core.rest(cljs.core.next(arglist__12390));
return G__12389__delegate(c1, c2, colls);
});
G__12389.cljs$lang$arity$variadic = G__12389__delegate;
return G__12389;
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
var cat__12400 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____12398 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____12398)
{var coll__12399 = temp__3971__auto____12398;
return cljs.core.cons.call(null,cljs.core.first.call(null,coll__12399),cat.call(null,cljs.core.rest.call(null,coll__12399),colls));
} else
{if(cljs.core.seq.call(null,colls))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
}),null));
});
return cat__12400.call(null,null,colls);
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
var G__12401__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__12401 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12401__delegate.call(this, f, coll, colls);
};
G__12401.cljs$lang$maxFixedArity = 2;
G__12401.cljs$lang$applyTo = (function (arglist__12402){
var f = cljs.core.first(arglist__12402);
var coll = cljs.core.first(cljs.core.next(arglist__12402));
var colls = cljs.core.rest(cljs.core.next(arglist__12402));
return G__12401__delegate(f, coll, colls);
});
G__12401.cljs$lang$arity$variadic = G__12401__delegate;
return G__12401;
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
var temp__3974__auto____12412 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____12412)
{var s__12413 = temp__3974__auto____12412;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12413))
{var c__12414 = cljs.core.chunk_first.call(null,s__12413);
var size__12415 = cljs.core.count.call(null,c__12414);
var b__12416 = cljs.core.chunk_buffer.call(null,size__12415);
var n__4149__auto____12417 = size__12415;
var i__12418 = 0;
while(true){
if((i__12418 < n__4149__auto____12417))
{if(cljs.core.truth_(pred.call(null,cljs.core._nth.call(null,c__12414,i__12418))))
{cljs.core.chunk_append.call(null,b__12416,cljs.core._nth.call(null,c__12414,i__12418));
} else
{}
{
var G__12421 = (i__12418 + 1);
i__12418 = G__12421;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12416),filter.call(null,pred,cljs.core.chunk_rest.call(null,s__12413)));
} else
{var f__12419 = cljs.core.first.call(null,s__12413);
var r__12420 = cljs.core.rest.call(null,s__12413);
if(cljs.core.truth_(pred.call(null,f__12419)))
{return cljs.core.cons.call(null,f__12419,filter.call(null,pred,r__12420));
} else
{return filter.call(null,pred,r__12420);
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
var walk__12424 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
}),null));
});
return walk__12424.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__12422_SHARP_){
return !(cljs.core.sequential_QMARK_.call(null,p1__12422_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
if((function (){var G__12428__12429 = to;
if(G__12428__12429)
{if((function (){var or__3824__auto____12430 = (G__12428__12429.cljs$lang$protocol_mask$partition1$ & 1);
if(or__3824__auto____12430)
{return or__3824__auto____12430;
} else
{return G__12428__12429.cljs$core$IEditableCollection$;
}
})())
{return true;
} else
{if((!G__12428__12429.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__12428__12429);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__12428__12429);
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
var G__12431__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.apply.call(null,cljs.core.map,f,c1,c2,c3,colls));
};
var G__12431 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__12431__delegate.call(this, f, c1, c2, c3, colls);
};
G__12431.cljs$lang$maxFixedArity = 4;
G__12431.cljs$lang$applyTo = (function (arglist__12432){
var f = cljs.core.first(arglist__12432);
var c1 = cljs.core.first(cljs.core.next(arglist__12432));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12432)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12432))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12432))));
return G__12431__delegate(f, c1, c2, c3, colls);
});
G__12431.cljs$lang$arity$variadic = G__12431__delegate;
return G__12431;
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
var temp__3974__auto____12439 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____12439)
{var s__12440 = temp__3974__auto____12439;
var p__12441 = cljs.core.take.call(null,n,s__12440);
if((n === cljs.core.count.call(null,p__12441)))
{return cljs.core.cons.call(null,p__12441,partition.call(null,n,step,cljs.core.drop.call(null,step,s__12440)));
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
var temp__3974__auto____12442 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____12442)
{var s__12443 = temp__3974__auto____12442;
var p__12444 = cljs.core.take.call(null,n,s__12443);
if((n === cljs.core.count.call(null,p__12444)))
{return cljs.core.cons.call(null,p__12444,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__12443)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__12444,pad)));
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
var sentinel__12449 = cljs.core.lookup_sentinel;
var m__12450 = m;
var ks__12451 = cljs.core.seq.call(null,ks);
while(true){
if(ks__12451)
{var m__12452 = cljs.core._lookup.call(null,m__12450,cljs.core.first.call(null,ks__12451),sentinel__12449);
if((sentinel__12449 === m__12452))
{return not_found;
} else
{{
var G__12453 = sentinel__12449;
var G__12454 = m__12452;
var G__12455 = cljs.core.next.call(null,ks__12451);
sentinel__12449 = G__12453;
m__12450 = G__12454;
ks__12451 = G__12455;
continue;
}
}
} else
{return m__12450;
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
cljs.core.assoc_in = (function assoc_in(m,p__12456,v){
var vec__12461__12462 = p__12456;
var k__12463 = cljs.core.nth.call(null,vec__12461__12462,0,null);
var ks__12464 = cljs.core.nthnext.call(null,vec__12461__12462,1);
if(cljs.core.truth_(ks__12464))
{return cljs.core.assoc.call(null,m,k__12463,assoc_in.call(null,cljs.core._lookup.call(null,m,k__12463,null),ks__12464,v));
} else
{return cljs.core.assoc.call(null,m,k__12463,v);
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
var update_in__delegate = function (m,p__12465,f,args){
var vec__12470__12471 = p__12465;
var k__12472 = cljs.core.nth.call(null,vec__12470__12471,0,null);
var ks__12473 = cljs.core.nthnext.call(null,vec__12470__12471,1);
if(cljs.core.truth_(ks__12473))
{return cljs.core.assoc.call(null,m,k__12472,cljs.core.apply.call(null,update_in,cljs.core._lookup.call(null,m,k__12472,null),ks__12473,f,args));
} else
{return cljs.core.assoc.call(null,m,k__12472,cljs.core.apply.call(null,f,cljs.core._lookup.call(null,m,k__12472,null),args));
}
};
var update_in = function (m,p__12465,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__12465, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__12474){
var m = cljs.core.first(arglist__12474);
var p__12465 = cljs.core.first(cljs.core.next(arglist__12474));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12474)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12474)));
return update_in__delegate(m, p__12465, f, args);
});
update_in.cljs$lang$arity$variadic = update_in__delegate;
return update_in;
})()
;

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
cljs.core.Vector.cljs$lang$ctorPrSeq = (function (this__3834__auto__){
return cljs.core.list.call(null,"cljs.core/Vector");
});
cljs.core.Vector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__12477 = this;
var h__3675__auto____12478 = this__12477.__hash;
if(!((h__3675__auto____12478 == null)))
{return h__3675__auto____12478;
} else
{var h__3675__auto____12479 = cljs.core.hash_coll.call(null,coll);
this__12477.__hash = h__3675__auto____12479;
return h__3675__auto____12479;
}
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__12480 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__12481 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__12482 = this;
var new_array__12483 = this__12482.array.slice();
(new_array__12483[k] = v);
return (new cljs.core.Vector(this__12482.meta,new_array__12483,null));
});
cljs.core.Vector.prototype.call = (function() {
var G__12514 = null;
var G__12514__2 = (function (this_sym12484,k){
var this__12486 = this;
var this_sym12484__12487 = this;
var coll__12488 = this_sym12484__12487;
return coll__12488.cljs$core$ILookup$_lookup$arity$2(coll__12488,k);
});
var G__12514__3 = (function (this_sym12485,k,not_found){
var this__12486 = this;
var this_sym12485__12489 = this;
var coll__12490 = this_sym12485__12489;
return coll__12490.cljs$core$ILookup$_lookup$arity$3(coll__12490,k,not_found);
});
G__12514 = function(this_sym12485,k,not_found){
switch(arguments.length){
case 2:
return G__12514__2.call(this,this_sym12485,k);
case 3:
return G__12514__3.call(this,this_sym12485,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12514;
})()
;
cljs.core.Vector.prototype.apply = (function (this_sym12475,args12476){
var this__12491 = this;
return this_sym12475.call.apply(this_sym12475,[this_sym12475].concat(args12476.slice()));
});
cljs.core.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__12492 = this;
var new_array__12493 = this__12492.array.slice();
new_array__12493.push(o);
return (new cljs.core.Vector(this__12492.meta,new_array__12493,null));
});
cljs.core.Vector.prototype.toString = (function (){
var this__12494 = this;
var this__12495 = this;
return cljs.core.pr_str.call(null,this__12495);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__12496 = this;
return cljs.core.ci_reduce.call(null,this__12496.array,f);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__12497 = this;
return cljs.core.ci_reduce.call(null,this__12497.array,f,start);
});
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__12498 = this;
if((this__12498.array.length > 0))
{var vector_seq__12499 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < this__12498.array.length))
{return cljs.core.cons.call(null,(this__12498.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
}),null));
});
return vector_seq__12499.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__12500 = this;
return this__12500.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__12501 = this;
var count__12502 = this__12501.array.length;
if((count__12502 > 0))
{return (this__12501.array[(count__12502 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__12503 = this;
if((this__12503.array.length > 0))
{var new_array__12504 = this__12503.array.slice();
new_array__12504.pop();
return (new cljs.core.Vector(this__12503.meta,new_array__12504,null));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__12505 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__12506 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__12507 = this;
return (new cljs.core.Vector(meta,this__12507.array,this__12507.__hash));
});
cljs.core.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__12508 = this;
return this__12508.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__12509 = this;
if((function (){var and__3822__auto____12510 = (0 <= n);
if(and__3822__auto____12510)
{return (n < this__12509.array.length);
} else
{return and__3822__auto____12510;
}
})())
{return (this__12509.array[n]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__12511 = this;
if((function (){var and__3822__auto____12512 = (0 <= n);
if(and__3822__auto____12512)
{return (n < this__12511.array.length);
} else
{return and__3822__auto____12512;
}
})())
{return (this__12511.array[n]);
} else
{return not_found;
}
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__12513 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12513.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,[],0));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs,null));
});

/**
* @constructor
*/
cljs.core.VectorNode = (function (edit,arr){
this.edit = edit;
this.arr = arr;
})
cljs.core.VectorNode.cljs$lang$type = true;
cljs.core.VectorNode.cljs$lang$ctorPrSeq = (function (this__3835__auto__){
return cljs.core.list.call(null,"cljs.core/VectorNode");
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
var cnt__12516 = pv.cnt;
if((cnt__12516 < 32))
{return 0;
} else
{return (((cnt__12516 - 1) >>> 5) << 5);
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll__12522 = level;
var ret__12523 = node;
while(true){
if((ll__12522 === 0))
{return ret__12523;
} else
{var embed__12524 = ret__12523;
var r__12525 = cljs.core.pv_fresh_node.call(null,edit);
var ___12526 = cljs.core.pv_aset.call(null,r__12525,0,embed__12524);
{
var G__12527 = (ll__12522 - 5);
var G__12528 = r__12525;
ll__12522 = G__12527;
ret__12523 = G__12528;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__12534 = cljs.core.pv_clone_node.call(null,parent);
var subidx__12535 = (((pv.cnt - 1) >>> level) & 31);
if((5 === level))
{cljs.core.pv_aset.call(null,ret__12534,subidx__12535,tailnode);
return ret__12534;
} else
{var child__12536 = cljs.core.pv_aget.call(null,parent,subidx__12535);
if(!((child__12536 == null)))
{var node_to_insert__12537 = push_tail.call(null,pv,(level - 5),child__12536,tailnode);
cljs.core.pv_aset.call(null,ret__12534,subidx__12535,node_to_insert__12537);
return ret__12534;
} else
{var node_to_insert__12538 = cljs.core.new_path.call(null,null,(level - 5),tailnode);
cljs.core.pv_aset.call(null,ret__12534,subidx__12535,node_to_insert__12538);
return ret__12534;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((function (){var and__3822__auto____12542 = (0 <= i);
if(and__3822__auto____12542)
{return (i < pv.cnt);
} else
{return and__3822__auto____12542;
}
})())
{if((i >= cljs.core.tail_off.call(null,pv)))
{return pv.tail;
} else
{var node__12543 = pv.root;
var level__12544 = pv.shift;
while(true){
if((level__12544 > 0))
{{
var G__12545 = cljs.core.pv_aget.call(null,node__12543,((i >>> level__12544) & 31));
var G__12546 = (level__12544 - 5);
node__12543 = G__12545;
level__12544 = G__12546;
continue;
}
} else
{return node__12543.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(pv.cnt)].join('')));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__12549 = cljs.core.pv_clone_node.call(null,node);
if((level === 0))
{cljs.core.pv_aset.call(null,ret__12549,(i & 31),val);
return ret__12549;
} else
{var subidx__12550 = ((i >>> level) & 31);
cljs.core.pv_aset.call(null,ret__12549,subidx__12550,do_assoc.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__12550),i,val));
return ret__12549;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__12556 = (((pv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__12557 = pop_tail.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__12556));
if((function (){var and__3822__auto____12558 = (new_child__12557 == null);
if(and__3822__auto____12558)
{return (subidx__12556 === 0);
} else
{return and__3822__auto____12558;
}
})())
{return null;
} else
{var ret__12559 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__12559,subidx__12556,new_child__12557);
return ret__12559;
}
} else
{if((subidx__12556 === 0))
{return null;
} else
{if("\uFDD0'else")
{var ret__12560 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__12560,subidx__12556,null);
return ret__12560;
} else
{return null;
}
}
}
});

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
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 167668511;
})
cljs.core.PersistentVector.cljs$lang$type = true;
cljs.core.PersistentVector.cljs$lang$ctorPrSeq = (function (this__3834__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentVector");
});
cljs.core.PersistentVector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__12563 = this;
return (new cljs.core.TransientVector(this__12563.cnt,this__12563.shift,cljs.core.tv_editable_root.call(null,this__12563.root),cljs.core.tv_editable_tail.call(null,this__12563.tail)));
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__12564 = this;
var h__3675__auto____12565 = this__12564.__hash;
if(!((h__3675__auto____12565 == null)))
{return h__3675__auto____12565;
} else
{var h__3675__auto____12566 = cljs.core.hash_coll.call(null,coll);
this__12564.__hash = h__3675__auto____12566;
return h__3675__auto____12566;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__12567 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__12568 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__12569 = this;
if((function (){var and__3822__auto____12570 = (0 <= k);
if(and__3822__auto____12570)
{return (k < this__12569.cnt);
} else
{return and__3822__auto____12570;
}
})())
{if((cljs.core.tail_off.call(null,coll) <= k))
{var new_tail__12571 = this__12569.tail.slice();
(new_tail__12571[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__12569.meta,this__12569.cnt,this__12569.shift,this__12569.root,new_tail__12571,null));
} else
{return (new cljs.core.PersistentVector(this__12569.meta,this__12569.cnt,this__12569.shift,cljs.core.do_assoc.call(null,coll,this__12569.shift,this__12569.root,k,v),this__12569.tail,null));
}
} else
{if((k === this__12569.cnt))
{return coll.cljs$core$ICollection$_conj$arity$2(coll,v);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(k),cljs.core.str(" out of bounds  [0,"),cljs.core.str(this__12569.cnt),cljs.core.str("]")].join('')));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.call = (function() {
var G__12619 = null;
var G__12619__2 = (function (this_sym12572,k){
var this__12574 = this;
var this_sym12572__12575 = this;
var coll__12576 = this_sym12572__12575;
return coll__12576.cljs$core$ILookup$_lookup$arity$2(coll__12576,k);
});
var G__12619__3 = (function (this_sym12573,k,not_found){
var this__12574 = this;
var this_sym12573__12577 = this;
var coll__12578 = this_sym12573__12577;
return coll__12578.cljs$core$ILookup$_lookup$arity$3(coll__12578,k,not_found);
});
G__12619 = function(this_sym12573,k,not_found){
switch(arguments.length){
case 2:
return G__12619__2.call(this,this_sym12573,k);
case 3:
return G__12619__3.call(this,this_sym12573,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12619;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (this_sym12561,args12562){
var this__12579 = this;
return this_sym12561.call.apply(this_sym12561,[this_sym12561].concat(args12562.slice()));
});
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var this__12580 = this;
var step_init__12581 = [0,init];
var i__12582 = 0;
while(true){
if((i__12582 < this__12580.cnt))
{var arr__12583 = cljs.core.array_for.call(null,v,i__12582);
var len__12584 = arr__12583.length;
var init__12588 = (function (){var j__12585 = 0;
var init__12586 = (step_init__12581[1]);
while(true){
if((j__12585 < len__12584))
{var init__12587 = f.call(null,init__12586,(j__12585 + i__12582),(arr__12583[j__12585]));
if(cljs.core.reduced_QMARK_.call(null,init__12587))
{return init__12587;
} else
{{
var G__12620 = (j__12585 + 1);
var G__12621 = init__12587;
j__12585 = G__12620;
init__12586 = G__12621;
continue;
}
}
} else
{(step_init__12581[0] = len__12584);
(step_init__12581[1] = init__12586);
return init__12586;
}
break;
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__12588))
{return cljs.core.deref.call(null,init__12588);
} else
{{
var G__12622 = (i__12582 + (step_init__12581[0]));
i__12582 = G__12622;
continue;
}
}
} else
{return (step_init__12581[1]);
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__12589 = this;
if(((this__12589.cnt - cljs.core.tail_off.call(null,coll)) < 32))
{var new_tail__12590 = this__12589.tail.slice();
new_tail__12590.push(o);
return (new cljs.core.PersistentVector(this__12589.meta,(this__12589.cnt + 1),this__12589.shift,this__12589.root,new_tail__12590,null));
} else
{var root_overflow_QMARK___12591 = ((this__12589.cnt >>> 5) > (1 << this__12589.shift));
var new_shift__12592 = ((root_overflow_QMARK___12591)?(this__12589.shift + 5):this__12589.shift);
var new_root__12594 = ((root_overflow_QMARK___12591)?(function (){var n_r__12593 = cljs.core.pv_fresh_node.call(null,null);
cljs.core.pv_aset.call(null,n_r__12593,0,this__12589.root);
cljs.core.pv_aset.call(null,n_r__12593,1,cljs.core.new_path.call(null,null,this__12589.shift,(new cljs.core.VectorNode(null,this__12589.tail))));
return n_r__12593;
})():cljs.core.push_tail.call(null,coll,this__12589.shift,this__12589.root,(new cljs.core.VectorNode(null,this__12589.tail))));
return (new cljs.core.PersistentVector(this__12589.meta,(this__12589.cnt + 1),new_shift__12592,new_root__12594,[o],null));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__12595 = this;
if((this__12595.cnt > 0))
{return (new cljs.core.RSeq(coll,(this__12595.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var this__12596 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var this__12597 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,1);
});
cljs.core.PersistentVector.prototype.toString = (function (){
var this__12598 = this;
var this__12599 = this;
return cljs.core.pr_str.call(null,this__12599);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__12600 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__12601 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__12602 = this;
if((this__12602.cnt === 0))
{return null;
} else
{return cljs.core.chunked_seq.call(null,coll,0,0);
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__12603 = this;
return this__12603.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__12604 = this;
if((this__12604.cnt > 0))
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,(this__12604.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__12605 = this;
if((this__12605.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__12605.cnt))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__12605.meta);
} else
{if((1 < (this__12605.cnt - cljs.core.tail_off.call(null,coll))))
{return (new cljs.core.PersistentVector(this__12605.meta,(this__12605.cnt - 1),this__12605.shift,this__12605.root,this__12605.tail.slice(0,-1),null));
} else
{if("\uFDD0'else")
{var new_tail__12606 = cljs.core.array_for.call(null,coll,(this__12605.cnt - 2));
var nr__12607 = cljs.core.pop_tail.call(null,coll,this__12605.shift,this__12605.root);
var new_root__12608 = (((nr__12607 == null))?cljs.core.PersistentVector.EMPTY_NODE:nr__12607);
var cnt_1__12609 = (this__12605.cnt - 1);
if((function (){var and__3822__auto____12610 = (5 < this__12605.shift);
if(and__3822__auto____12610)
{return (cljs.core.pv_aget.call(null,new_root__12608,1) == null);
} else
{return and__3822__auto____12610;
}
})())
{return (new cljs.core.PersistentVector(this__12605.meta,cnt_1__12609,(this__12605.shift - 5),cljs.core.pv_aget.call(null,new_root__12608,0),new_tail__12606,null));
} else
{return (new cljs.core.PersistentVector(this__12605.meta,cnt_1__12609,this__12605.shift,new_root__12608,new_tail__12606,null));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__12611 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__12612 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__12613 = this;
return (new cljs.core.PersistentVector(meta,this__12613.cnt,this__12613.shift,this__12613.root,this__12613.tail,this__12613.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__12614 = this;
return this__12614.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__12615 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__12616 = this;
if((function (){var and__3822__auto____12617 = (0 <= n);
if(and__3822__auto____12617)
{return (n < this__12616.cnt);
} else
{return and__3822__auto____12617;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__12618 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__12618.meta);
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.pv_fresh_node.call(null,null);
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[],0));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){
var l__12623 = xs.length;
var xs__12624 = (((no_clone === true))?xs:xs.slice());
if((l__12623 < 32))
{return (new cljs.core.PersistentVector(null,l__12623,5,cljs.core.PersistentVector.EMPTY_NODE,xs__12624,null));
} else
{var node__12625 = xs__12624.slice(0,32);
var v__12626 = (new cljs.core.PersistentVector(null,32,5,cljs.core.PersistentVector.EMPTY_NODE,node__12625,null));
var i__12627 = 32;
var out__12628 = cljs.core._as_transient.call(null,v__12626);
while(true){
if((i__12627 < l__12623))
{{
var G__12629 = (i__12627 + 1);
var G__12630 = cljs.core.conj_BANG_.call(null,out__12628,(xs__12624[i__12627]));
i__12627 = G__12629;
out__12628 = G__12630;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__12628);
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
vector.cljs$lang$applyTo = (function (arglist__12631){
var args = cljs.core.seq(arglist__12631);;
return vector__delegate(args);
});
vector.cljs$lang$arity$variadic = vector__delegate;
return vector;
})()
;

/**
* @constructor
*/
cljs.core.ChunkedSeq = (function (vec,node,i,off,meta){
this.vec = vec;
this.node = node;
this.i = i;
this.off = off;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 27525356;
})
cljs.core.ChunkedSeq.cljs$lang$type = true;
cljs.core.ChunkedSeq.cljs$lang$ctorPrSeq = (function (this__3834__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedSeq");
});
cljs.core.ChunkedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__12632 = this;
if(((this__12632.off + 1) < this__12632.node.length))
{var s__12633 = cljs.core.chunked_seq.call(null,this__12632.vec,this__12632.node,this__12632.i,(this__12632.off + 1));
if((s__12633 == null))
{return null;
} else
{return s__12633;
}
} else
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__12634 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__12635 = this;
return coll;
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__12636 = this;
return (this__12636.node[this__12636.off]);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__12637 = this;
if(((this__12637.off + 1) < this__12637.node.length))
{var s__12638 = cljs.core.chunked_seq.call(null,this__12637.vec,this__12637.node,this__12637.i,(this__12637.off + 1));
if((s__12638 == null))
{return cljs.core.List.EMPTY;
} else
{return s__12638;
}
} else
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__12639 = this;
var l__12640 = this__12639.node.length;
var s__12641 = ((((this__12639.i + l__12640) < cljs.core._count.call(null,this__12639.vec)))?cljs.core.chunked_seq.call(null,this__12639.vec,(this__12639.i + l__12640),0):null);
if((s__12641 == null))
{return null;
} else
{return s__12641;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__12642 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__12643 = this;
return cljs.core.chunked_seq.call(null,this__12643.vec,this__12643.node,this__12643.i,this__12643.off,m);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_meta$arity$1 = (function (coll){
var this__12644 = this;
return this__12644.meta;
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__12645 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__12645.meta);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__12646 = this;
return cljs.core.array_chunk.call(null,this__12646.node,this__12646.off);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__12647 = this;
var l__12648 = this__12647.node.length;
var s__12649 = ((((this__12647.i + l__12648) < cljs.core._count.call(null,this__12647.vec)))?cljs.core.chunked_seq.call(null,this__12647.vec,(this__12647.i + l__12648),0):null);
if((s__12649 == null))
{return cljs.core.List.EMPTY;
} else
{return s__12649;
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
return (new cljs.core.ChunkedSeq(vec,node,i,off,meta));
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
cljs.core.Subvec.cljs$lang$ctorPrSeq = (function (this__3834__auto__){
return cljs.core.list.call(null,"cljs.core/Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__12652 = this;
var h__3675__auto____12653 = this__12652.__hash;
if(!((h__3675__auto____12653 == null)))
{return h__3675__auto____12653;
} else
{var h__3675__auto____12654 = cljs.core.hash_coll.call(null,coll);
this__12652.__hash = h__3675__auto____12654;
return h__3675__auto____12654;
}
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__12655 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__12656 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var this__12657 = this;
var v_pos__12658 = (this__12657.start + key);
return (new cljs.core.Subvec(this__12657.meta,cljs.core._assoc.call(null,this__12657.v,v_pos__12658,val),this__12657.start,((this__12657.end > (v_pos__12658 + 1)) ? this__12657.end : (v_pos__12658 + 1)),null));
});
cljs.core.Subvec.prototype.call = (function() {
var G__12684 = null;
var G__12684__2 = (function (this_sym12659,k){
var this__12661 = this;
var this_sym12659__12662 = this;
var coll__12663 = this_sym12659__12662;
return coll__12663.cljs$core$ILookup$_lookup$arity$2(coll__12663,k);
});
var G__12684__3 = (function (this_sym12660,k,not_found){
var this__12661 = this;
var this_sym12660__12664 = this;
var coll__12665 = this_sym12660__12664;
return coll__12665.cljs$core$ILookup$_lookup$arity$3(coll__12665,k,not_found);
});
G__12684 = function(this_sym12660,k,not_found){
switch(arguments.length){
case 2:
return G__12684__2.call(this,this_sym12660,k);
case 3:
return G__12684__3.call(this,this_sym12660,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12684;
})()
;
cljs.core.Subvec.prototype.apply = (function (this_sym12650,args12651){
var this__12666 = this;
return this_sym12650.call.apply(this_sym12650,[this_sym12650].concat(args12651.slice()));
});
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__12667 = this;
return (new cljs.core.Subvec(this__12667.meta,cljs.core._assoc_n.call(null,this__12667.v,this__12667.end,o),this__12667.start,(this__12667.end + 1),null));
});
cljs.core.Subvec.prototype.toString = (function (){
var this__12668 = this;
var this__12669 = this;
return cljs.core.pr_str.call(null,this__12669);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__12670 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__12671 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__12672 = this;
var subvec_seq__12673 = (function subvec_seq(i){
if((i === this__12672.end))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__12672.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}),null)));
}
});
return subvec_seq__12673.call(null,this__12672.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__12674 = this;
return (this__12674.end - this__12674.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__12675 = this;
return cljs.core._nth.call(null,this__12675.v,(this__12675.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__12676 = this;
if((this__12676.start === this__12676.end))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__12676.meta,this__12676.v,this__12676.start,(this__12676.end - 1),null));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__12677 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__12678 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__12679 = this;
return (new cljs.core.Subvec(meta,this__12679.v,this__12679.start,this__12679.end,this__12679.__hash));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__12680 = this;
return this__12680.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__12681 = this;
return cljs.core._nth.call(null,this__12681.v,(this__12681.start + n));
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__12682 = this;
return cljs.core._nth.call(null,this__12682.v,(this__12682.start + n),not_found);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__12683 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12683.meta);
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
var ret__12686 = cljs.core.make_array.call(null,32);
cljs.core.array_copy.call(null,tl,0,ret__12686,0,tl.length);
return ret__12686;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret__12690 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,parent);
var subidx__12691 = (((tv.cnt - 1) >>> level) & 31);
cljs.core.pv_aset.call(null,ret__12690,subidx__12691,(((level === 5))?tail_node:(function (){var child__12692 = cljs.core.pv_aget.call(null,ret__12690,subidx__12691);
if(!((child__12692 == null)))
{return tv_push_tail.call(null,tv,(level - 5),child__12692,tail_node);
} else
{return cljs.core.new_path.call(null,tv.root.edit,(level - 5),tail_node);
}
})()));
return ret__12690;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__12697 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,node);
var subidx__12698 = (((tv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__12699 = tv_pop_tail.call(null,tv,(level - 5),cljs.core.pv_aget.call(null,node__12697,subidx__12698));
if((function (){var and__3822__auto____12700 = (new_child__12699 == null);
if(and__3822__auto____12700)
{return (subidx__12698 === 0);
} else
{return and__3822__auto____12700;
}
})())
{return null;
} else
{cljs.core.pv_aset.call(null,node__12697,subidx__12698,new_child__12699);
return node__12697;
}
} else
{if((subidx__12698 === 0))
{return null;
} else
{if("\uFDD0'else")
{cljs.core.pv_aset.call(null,node__12697,subidx__12698,null);
return node__12697;
} else
{return null;
}
}
}
});
cljs.core.editable_array_for = (function editable_array_for(tv,i){
if((function (){var and__3822__auto____12705 = (0 <= i);
if(and__3822__auto____12705)
{return (i < tv.cnt);
} else
{return and__3822__auto____12705;
}
})())
{if((i >= cljs.core.tail_off.call(null,tv)))
{return tv.tail;
} else
{var root__12706 = tv.root;
var node__12707 = root__12706;
var level__12708 = tv.shift;
while(true){
if((level__12708 > 0))
{{
var G__12709 = cljs.core.tv_ensure_editable.call(null,root__12706.edit,cljs.core.pv_aget.call(null,node__12707,((i >>> level__12708) & 31)));
var G__12710 = (level__12708 - 5);
node__12707 = G__12709;
level__12708 = G__12710;
continue;
}
} else
{return node__12707.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in transient vector of length "),cljs.core.str(tv.cnt)].join('')));
}
});

/**
* @constructor
*/
cljs.core.TransientVector = (function (cnt,shift,root,tail){
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.cljs$lang$protocol_mask$partition0$ = 275;
this.cljs$lang$protocol_mask$partition1$ = 22;
})
cljs.core.TransientVector.cljs$lang$type = true;
cljs.core.TransientVector.cljs$lang$ctorPrSeq = (function (this__3834__auto__){
return cljs.core.list.call(null,"cljs.core/TransientVector");
});
cljs.core.TransientVector.prototype.call = (function() {
var G__12750 = null;
var G__12750__2 = (function (this_sym12713,k){
var this__12715 = this;
var this_sym12713__12716 = this;
var coll__12717 = this_sym12713__12716;
return coll__12717.cljs$core$ILookup$_lookup$arity$2(coll__12717,k);
});
var G__12750__3 = (function (this_sym12714,k,not_found){
var this__12715 = this;
var this_sym12714__12718 = this;
var coll__12719 = this_sym12714__12718;
return coll__12719.cljs$core$ILookup$_lookup$arity$3(coll__12719,k,not_found);
});
G__12750 = function(this_sym12714,k,not_found){
switch(arguments.length){
case 2:
return G__12750__2.call(this,this_sym12714,k);
case 3:
return G__12750__3.call(this,this_sym12714,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12750;
})()
;
cljs.core.TransientVector.prototype.apply = (function (this_sym12711,args12712){
var this__12720 = this;
return this_sym12711.call.apply(this_sym12711,[this_sym12711].concat(args12712.slice()));
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__12721 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__12722 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__12723 = this;
if(this__12723.root.edit)
{return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__12724 = this;
if((function (){var and__3822__auto____12725 = (0 <= n);
if(and__3822__auto____12725)
{return (n < this__12724.cnt);
} else
{return and__3822__auto____12725;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__12726 = this;
if(this__12726.root.edit)
{return this__12726.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var this__12727 = this;
if(this__12727.root.edit)
{if((function (){var and__3822__auto____12728 = (0 <= n);
if(and__3822__auto____12728)
{return (n < this__12727.cnt);
} else
{return and__3822__auto____12728;
}
})())
{if((cljs.core.tail_off.call(null,tcoll) <= n))
{(this__12727.tail[(n & 31)] = val);
return tcoll;
} else
{var new_root__12733 = (function go(level,node){
var node__12731 = cljs.core.tv_ensure_editable.call(null,this__12727.root.edit,node);
if((level === 0))
{cljs.core.pv_aset.call(null,node__12731,(n & 31),val);
return node__12731;
} else
{var subidx__12732 = ((n >>> level) & 31);
cljs.core.pv_aset.call(null,node__12731,subidx__12732,go.call(null,(level - 5),cljs.core.pv_aget.call(null,node__12731,subidx__12732)));
return node__12731;
}
}).call(null,this__12727.shift,this__12727.root);
this__12727.root = new_root__12733;
return tcoll;
}
} else
{if((n === this__12727.cnt))
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(this__12727.cnt)].join('')));
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
var this__12734 = this;
if(this__12734.root.edit)
{if((this__12734.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__12734.cnt))
{this__12734.cnt = 0;
return tcoll;
} else
{if((((this__12734.cnt - 1) & 31) > 0))
{this__12734.cnt = (this__12734.cnt - 1);
return tcoll;
} else
{if("\uFDD0'else")
{var new_tail__12735 = cljs.core.editable_array_for.call(null,tcoll,(this__12734.cnt - 2));
var new_root__12737 = (function (){var nr__12736 = cljs.core.tv_pop_tail.call(null,tcoll,this__12734.shift,this__12734.root);
if(!((nr__12736 == null)))
{return nr__12736;
} else
{return (new cljs.core.VectorNode(this__12734.root.edit,cljs.core.make_array.call(null,32)));
}
})();
if((function (){var and__3822__auto____12738 = (5 < this__12734.shift);
if(and__3822__auto____12738)
{return (cljs.core.pv_aget.call(null,new_root__12737,1) == null);
} else
{return and__3822__auto____12738;
}
})())
{var new_root__12739 = cljs.core.tv_ensure_editable.call(null,this__12734.root.edit,cljs.core.pv_aget.call(null,new_root__12737,0));
this__12734.root = new_root__12739;
this__12734.shift = (this__12734.shift - 5);
this__12734.cnt = (this__12734.cnt - 1);
this__12734.tail = new_tail__12735;
return tcoll;
} else
{this__12734.root = new_root__12737;
this__12734.cnt = (this__12734.cnt - 1);
this__12734.tail = new_tail__12735;
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
var this__12740 = this;
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,key,val);
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__12741 = this;
if(this__12741.root.edit)
{if(((this__12741.cnt - cljs.core.tail_off.call(null,tcoll)) < 32))
{(this__12741.tail[(this__12741.cnt & 31)] = o);
this__12741.cnt = (this__12741.cnt + 1);
return tcoll;
} else
{var tail_node__12742 = (new cljs.core.VectorNode(this__12741.root.edit,this__12741.tail));
var new_tail__12743 = cljs.core.make_array.call(null,32);
(new_tail__12743[0] = o);
this__12741.tail = new_tail__12743;
if(((this__12741.cnt >>> 5) > (1 << this__12741.shift)))
{var new_root_array__12744 = cljs.core.make_array.call(null,32);
var new_shift__12745 = (this__12741.shift + 5);
(new_root_array__12744[0] = this__12741.root);
(new_root_array__12744[1] = cljs.core.new_path.call(null,this__12741.root.edit,this__12741.shift,tail_node__12742));
this__12741.root = (new cljs.core.VectorNode(this__12741.root.edit,new_root_array__12744));
this__12741.shift = new_shift__12745;
this__12741.cnt = (this__12741.cnt + 1);
return tcoll;
} else
{var new_root__12746 = cljs.core.tv_push_tail.call(null,tcoll,this__12741.shift,this__12741.root,tail_node__12742);
this__12741.root = new_root__12746;
this__12741.cnt = (this__12741.cnt + 1);
return tcoll;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__12747 = this;
if(this__12747.root.edit)
{this__12747.root.edit = null;
var len__12748 = (this__12747.cnt - cljs.core.tail_off.call(null,tcoll));
var trimmed_tail__12749 = cljs.core.make_array.call(null,len__12748);
cljs.core.array_copy.call(null,this__12747.tail,0,trimmed_tail__12749,0,len__12748);
return (new cljs.core.PersistentVector(null,this__12747.cnt,this__12747.shift,this__12747.root,trimmed_tail__12749,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientVector;

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
cljs.core.PersistentQueueSeq.cljs$lang$ctorPrSeq = (function (this__3834__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__12751 = this;
var h__3675__auto____12752 = this__12751.__hash;
if(!((h__3675__auto____12752 == null)))
{return h__3675__auto____12752;
} else
{var h__3675__auto____12753 = cljs.core.hash_coll.call(null,coll);
this__12751.__hash = h__3675__auto____12753;
return h__3675__auto____12753;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__12754 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var this__12755 = this;
var this__12756 = this;
return cljs.core.pr_str.call(null,this__12756);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__12757 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__12758 = this;
return cljs.core._first.call(null,this__12758.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__12759 = this;
var temp__3971__auto____12760 = cljs.core.next.call(null,this__12759.front);
if(temp__3971__auto____12760)
{var f1__12761 = temp__3971__auto____12760;
return (new cljs.core.PersistentQueueSeq(this__12759.meta,f1__12761,this__12759.rear,null));
} else
{if((this__12759.rear == null))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__12759.meta,this__12759.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__12762 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__12763 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__12763.front,this__12763.rear,this__12763.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__12764 = this;
return this__12764.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__12765 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12765.meta);
});
cljs.core.PersistentQueueSeq;

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
cljs.core.PersistentQueue.cljs$lang$ctorPrSeq = (function (this__3834__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__12766 = this;
var h__3675__auto____12767 = this__12766.__hash;
if(!((h__3675__auto____12767 == null)))
{return h__3675__auto____12767;
} else
{var h__3675__auto____12768 = cljs.core.hash_coll.call(null,coll);
this__12766.__hash = h__3675__auto____12768;
return h__3675__auto____12768;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__12769 = this;
if(cljs.core.truth_(this__12769.front))
{return (new cljs.core.PersistentQueue(this__12769.meta,(this__12769.count + 1),this__12769.front,cljs.core.conj.call(null,(function (){var or__3824__auto____12770 = this__12769.rear;
if(cljs.core.truth_(or__3824__auto____12770))
{return or__3824__auto____12770;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(this__12769.meta,(this__12769.count + 1),cljs.core.conj.call(null,this__12769.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});
cljs.core.PersistentQueue.prototype.toString = (function (){
var this__12771 = this;
var this__12772 = this;
return cljs.core.pr_str.call(null,this__12772);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__12773 = this;
var rear__12774 = cljs.core.seq.call(null,this__12773.rear);
if(cljs.core.truth_((function (){var or__3824__auto____12775 = this__12773.front;
if(cljs.core.truth_(or__3824__auto____12775))
{return or__3824__auto____12775;
} else
{return rear__12774;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__12773.front,cljs.core.seq.call(null,rear__12774),null));
} else
{return null;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__12776 = this;
return this__12776.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__12777 = this;
return cljs.core._first.call(null,this__12777.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__12778 = this;
if(cljs.core.truth_(this__12778.front))
{var temp__3971__auto____12779 = cljs.core.next.call(null,this__12778.front);
if(temp__3971__auto____12779)
{var f1__12780 = temp__3971__auto____12779;
return (new cljs.core.PersistentQueue(this__12778.meta,(this__12778.count - 1),f1__12780,this__12778.rear,null));
} else
{return (new cljs.core.PersistentQueue(this__12778.meta,(this__12778.count - 1),cljs.core.seq.call(null,this__12778.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__12781 = this;
return cljs.core.first.call(null,this__12781.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__12782 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__12783 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__12784 = this;
return (new cljs.core.PersistentQueue(meta,this__12784.count,this__12784.front,this__12784.rear,this__12784.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__12785 = this;
return this__12785.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__12786 = this;
return cljs.core.PersistentQueue.EMPTY;
});
cljs.core.PersistentQueue;
cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,0,null,cljs.core.PersistentVector.EMPTY,0));

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2097152;
})
cljs.core.NeverEquiv.cljs$lang$type = true;
cljs.core.NeverEquiv.cljs$lang$ctorPrSeq = (function (this__3834__auto__){
return cljs.core.list.call(null,"cljs.core/NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__12787 = this;
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
var len__12790 = array.length;
var i__12791 = 0;
while(true){
if((i__12791 < len__12790))
{if((k === (array[i__12791])))
{return i__12791;
} else
{{
var G__12792 = (i__12791 + incr);
i__12791 = G__12792;
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
var a__12795 = cljs.core.hash.call(null,a);
var b__12796 = cljs.core.hash.call(null,b);
if((a__12795 < b__12796))
{return -1;
} else
{if((a__12795 > b__12796))
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
var ks__12804 = m.keys;
var len__12805 = ks__12804.length;
var so__12806 = m.strobj;
var out__12807 = cljs.core.with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,cljs.core.meta.call(null,m));
var i__12808 = 0;
var out__12809 = cljs.core.transient$.call(null,out__12807);
while(true){
if((i__12808 < len__12805))
{var k__12810 = (ks__12804[i__12808]);
{
var G__12811 = (i__12808 + 1);
var G__12812 = cljs.core.assoc_BANG_.call(null,out__12809,k__12810,(so__12806[k__12810]));
i__12808 = G__12811;
out__12809 = G__12812;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,out__12809,k,v));
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){
var new_obj__12818 = {};
var l__12819 = ks.length;
var i__12820 = 0;
while(true){
if((i__12820 < l__12819))
{var k__12821 = (ks[i__12820]);
(new_obj__12818[k__12821] = (obj[k__12821]));
{
var G__12822 = (i__12820 + 1);
i__12820 = G__12822;
continue;
}
} else
{}
break;
}
return new_obj__12818;
});

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj,update_count,__hash){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
this.update_count = update_count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 15075087;
})
cljs.core.ObjMap.cljs$lang$type = true;
cljs.core.ObjMap.cljs$lang$ctorPrSeq = (function (this__3834__auto__){
return cljs.core.list.call(null,"cljs.core/ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__12825 = this;
return cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null),coll));
});
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__12826 = this;
var h__3675__auto____12827 = this__12826.__hash;
if(!((h__3675__auto____12827 == null)))
{return h__3675__auto____12827;
} else
{var h__3675__auto____12828 = cljs.core.hash_imap.call(null,coll);
this__12826.__hash = h__3675__auto____12828;
return h__3675__auto____12828;
}
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__12829 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__12830 = this;
if((function (){var and__3822__auto____12831 = goog.isString(k);
if(and__3822__auto____12831)
{return !((cljs.core.scan_array.call(null,1,k,this__12830.keys) == null));
} else
{return and__3822__auto____12831;
}
})())
{return (this__12830.strobj[k]);
} else
{return not_found;
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__12832 = this;
if(goog.isString(k))
{if((function (){var or__3824__auto____12833 = (this__12832.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD);
if(or__3824__auto____12833)
{return or__3824__auto____12833;
} else
{return (this__12832.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD);
}
})())
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
} else
{if(!((cljs.core.scan_array.call(null,1,k,this__12832.keys) == null)))
{var new_strobj__12834 = cljs.core.obj_clone.call(null,this__12832.strobj,this__12832.keys);
(new_strobj__12834[k] = v);
return (new cljs.core.ObjMap(this__12832.meta,this__12832.keys,new_strobj__12834,(this__12832.update_count + 1),null));
} else
{var new_strobj__12835 = cljs.core.obj_clone.call(null,this__12832.strobj,this__12832.keys);
var new_keys__12836 = this__12832.keys.slice();
(new_strobj__12835[k] = v);
new_keys__12836.push(k);
return (new cljs.core.ObjMap(this__12832.meta,new_keys__12836,new_strobj__12835,(this__12832.update_count + 1),null));
}
}
} else
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__12837 = this;
if((function (){var and__3822__auto____12838 = goog.isString(k);
if(and__3822__auto____12838)
{return !((cljs.core.scan_array.call(null,1,k,this__12837.keys) == null));
} else
{return and__3822__auto____12838;
}
})())
{return true;
} else
{return false;
}
});
cljs.core.ObjMap.prototype.call = (function() {
var G__12860 = null;
var G__12860__2 = (function (this_sym12839,k){
var this__12841 = this;
var this_sym12839__12842 = this;
var coll__12843 = this_sym12839__12842;
return coll__12843.cljs$core$ILookup$_lookup$arity$2(coll__12843,k);
});
var G__12860__3 = (function (this_sym12840,k,not_found){
var this__12841 = this;
var this_sym12840__12844 = this;
var coll__12845 = this_sym12840__12844;
return coll__12845.cljs$core$ILookup$_lookup$arity$3(coll__12845,k,not_found);
});
G__12860 = function(this_sym12840,k,not_found){
switch(arguments.length){
case 2:
return G__12860__2.call(this,this_sym12840,k);
case 3:
return G__12860__3.call(this,this_sym12840,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12860;
})()
;
cljs.core.ObjMap.prototype.apply = (function (this_sym12823,args12824){
var this__12846 = this;
return this_sym12823.call.apply(this_sym12823,[this_sym12823].concat(args12824.slice()));
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__12847 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.toString = (function (){
var this__12848 = this;
var this__12849 = this;
return cljs.core.pr_str.call(null,this__12849);
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__12850 = this;
if((this__12850.keys.length > 0))
{return cljs.core.map.call(null,(function (p1__12813_SHARP_){
return cljs.core.vector.call(null,p1__12813_SHARP_,(this__12850.strobj[p1__12813_SHARP_]));
}),this__12850.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__12851 = this;
return this__12851.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__12852 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__12853 = this;
return (new cljs.core.ObjMap(meta,this__12853.keys,this__12853.strobj,this__12853.update_count,this__12853.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__12854 = this;
return this__12854.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__12855 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__12855.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__12856 = this;
if((function (){var and__3822__auto____12857 = goog.isString(k);
if(and__3822__auto____12857)
{return !((cljs.core.scan_array.call(null,1,k,this__12856.keys) == null));
} else
{return and__3822__auto____12857;
}
})())
{var new_keys__12858 = this__12856.keys.slice();
var new_strobj__12859 = cljs.core.obj_clone.call(null,this__12856.strobj,this__12856.keys);
new_keys__12858.splice(cljs.core.scan_array.call(null,1,k,new_keys__12858),1);
cljs.core.js_delete.call(null,new_strobj__12859,k);
return (new cljs.core.ObjMap(this__12856.meta,new_keys__12858,new_strobj__12859,(this__12856.update_count + 1),null));
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
cljs.core.HashMap.cljs$lang$ctorPrSeq = (function (this__3834__auto__){
return cljs.core.list.call(null,"cljs.core/HashMap");
});
cljs.core.HashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__12864 = this;
var h__3675__auto____12865 = this__12864.__hash;
if(!((h__3675__auto____12865 == null)))
{return h__3675__auto____12865;
} else
{var h__3675__auto____12866 = cljs.core.hash_imap.call(null,coll);
this__12864.__hash = h__3675__auto____12866;
return h__3675__auto____12866;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__12867 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__12868 = this;
var bucket__12869 = (this__12868.hashobj[cljs.core.hash.call(null,k)]);
var i__12870 = (cljs.core.truth_(bucket__12869)?cljs.core.scan_array.call(null,2,k,bucket__12869):null);
if(cljs.core.truth_(i__12870))
{return (bucket__12869[(i__12870 + 1)]);
} else
{return not_found;
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__12871 = this;
var h__12872 = cljs.core.hash.call(null,k);
var bucket__12873 = (this__12871.hashobj[h__12872]);
if(cljs.core.truth_(bucket__12873))
{var new_bucket__12874 = bucket__12873.slice();
var new_hashobj__12875 = goog.object.clone(this__12871.hashobj);
(new_hashobj__12875[h__12872] = new_bucket__12874);
var temp__3971__auto____12876 = cljs.core.scan_array.call(null,2,k,new_bucket__12874);
if(cljs.core.truth_(temp__3971__auto____12876))
{var i__12877 = temp__3971__auto____12876;
(new_bucket__12874[(i__12877 + 1)] = v);
return (new cljs.core.HashMap(this__12871.meta,this__12871.count,new_hashobj__12875,null));
} else
{new_bucket__12874.push(k,v);
return (new cljs.core.HashMap(this__12871.meta,(this__12871.count + 1),new_hashobj__12875,null));
}
} else
{var new_hashobj__12878 = goog.object.clone(this__12871.hashobj);
(new_hashobj__12878[h__12872] = [k,v]);
return (new cljs.core.HashMap(this__12871.meta,(this__12871.count + 1),new_hashobj__12878,null));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__12879 = this;
var bucket__12880 = (this__12879.hashobj[cljs.core.hash.call(null,k)]);
var i__12881 = (cljs.core.truth_(bucket__12880)?cljs.core.scan_array.call(null,2,k,bucket__12880):null);
if(cljs.core.truth_(i__12881))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__12906 = null;
var G__12906__2 = (function (this_sym12882,k){
var this__12884 = this;
var this_sym12882__12885 = this;
var coll__12886 = this_sym12882__12885;
return coll__12886.cljs$core$ILookup$_lookup$arity$2(coll__12886,k);
});
var G__12906__3 = (function (this_sym12883,k,not_found){
var this__12884 = this;
var this_sym12883__12887 = this;
var coll__12888 = this_sym12883__12887;
return coll__12888.cljs$core$ILookup$_lookup$arity$3(coll__12888,k,not_found);
});
G__12906 = function(this_sym12883,k,not_found){
switch(arguments.length){
case 2:
return G__12906__2.call(this,this_sym12883,k);
case 3:
return G__12906__3.call(this,this_sym12883,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12906;
})()
;
cljs.core.HashMap.prototype.apply = (function (this_sym12862,args12863){
var this__12889 = this;
return this_sym12862.call.apply(this_sym12862,[this_sym12862].concat(args12863.slice()));
});
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__12890 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.toString = (function (){
var this__12891 = this;
var this__12892 = this;
return cljs.core.pr_str.call(null,this__12892);
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__12893 = this;
if((this__12893.count > 0))
{var hashes__12894 = cljs.core.js_keys.call(null,this__12893.hashobj).sort();
return cljs.core.mapcat.call(null,(function (p1__12861_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__12893.hashobj[p1__12861_SHARP_])));
}),hashes__12894);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__12895 = this;
return this__12895.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__12896 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__12897 = this;
return (new cljs.core.HashMap(meta,this__12897.count,this__12897.hashobj,this__12897.__hash));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__12898 = this;
return this__12898.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__12899 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__12899.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__12900 = this;
var h__12901 = cljs.core.hash.call(null,k);
var bucket__12902 = (this__12900.hashobj[h__12901]);
var i__12903 = (cljs.core.truth_(bucket__12902)?cljs.core.scan_array.call(null,2,k,bucket__12902):null);
if(cljs.core.not.call(null,i__12903))
{return coll;
} else
{var new_hashobj__12904 = goog.object.clone(this__12900.hashobj);
if((3 > bucket__12902.length))
{cljs.core.js_delete.call(null,new_hashobj__12904,h__12901);
} else
{var new_bucket__12905 = bucket__12902.slice();
new_bucket__12905.splice(i__12903,2);
(new_hashobj__12904[h__12901] = new_bucket__12905);
}
return (new cljs.core.HashMap(this__12900.meta,(this__12900.count - 1),new_hashobj__12904,null));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,{},0));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__12907 = ks.length;
var i__12908 = 0;
var out__12909 = cljs.core.HashMap.EMPTY;
while(true){
if((i__12908 < len__12907))
{{
var G__12910 = (i__12908 + 1);
var G__12911 = cljs.core.assoc.call(null,out__12909,(ks[i__12908]),(vs[i__12908]));
i__12908 = G__12910;
out__12909 = G__12911;
continue;
}
} else
{return out__12909;
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr__12915 = m.arr;
var len__12916 = arr__12915.length;
var i__12917 = 0;
while(true){
if((len__12916 <= i__12917))
{return -1;
} else
{if(cljs.core._EQ_.call(null,(arr__12915[i__12917]),k))
{return i__12917;
} else
{if("\uFDD0'else")
{{
var G__12918 = (i__12917 + 2);
i__12917 = G__12918;
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

/**
* @constructor
*/
cljs.core.PersistentArrayMap = (function (meta,cnt,arr,__hash){
this.meta = meta;
this.cnt = cnt;
this.arr = arr;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
})
cljs.core.PersistentArrayMap.cljs$lang$type = true;
cljs.core.PersistentArrayMap.cljs$lang$ctorPrSeq = (function (this__3834__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentArrayMap");
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__12921 = this;
return (new cljs.core.TransientArrayMap({},this__12921.arr.length,this__12921.arr.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__12922 = this;
var h__3675__auto____12923 = this__12922.__hash;
if(!((h__3675__auto____12923 == null)))
{return h__3675__auto____12923;
} else
{var h__3675__auto____12924 = cljs.core.hash_imap.call(null,coll);
this__12922.__hash = h__3675__auto____12924;
return h__3675__auto____12924;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__12925 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__12926 = this;
var idx__12927 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__12927 === -1))
{return not_found;
} else
{return (this__12926.arr[(idx__12927 + 1)]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__12928 = this;
var idx__12929 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__12929 === -1))
{if((this__12928.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{return (new cljs.core.PersistentArrayMap(this__12928.meta,(this__12928.cnt + 1),(function (){var G__12930__12931 = this__12928.arr.slice();
G__12930__12931.push(k);
G__12930__12931.push(v);
return G__12930__12931;
})(),null));
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,coll)),k,v));
}
} else
{if((v === (this__12928.arr[(idx__12929 + 1)])))
{return coll;
} else
{if("\uFDD0'else")
{return (new cljs.core.PersistentArrayMap(this__12928.meta,this__12928.cnt,(function (){var G__12932__12933 = this__12928.arr.slice();
(G__12932__12933[(idx__12929 + 1)] = v);
return G__12932__12933;
})(),null));
} else
{return null;
}
}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__12934 = this;
return !((cljs.core.array_map_index_of.call(null,coll,k) === -1));
});
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__12966 = null;
var G__12966__2 = (function (this_sym12935,k){
var this__12937 = this;
var this_sym12935__12938 = this;
var coll__12939 = this_sym12935__12938;
return coll__12939.cljs$core$ILookup$_lookup$arity$2(coll__12939,k);
});
var G__12966__3 = (function (this_sym12936,k,not_found){
var this__12937 = this;
var this_sym12936__12940 = this;
var coll__12941 = this_sym12936__12940;
return coll__12941.cljs$core$ILookup$_lookup$arity$3(coll__12941,k,not_found);
});
G__12966 = function(this_sym12936,k,not_found){
switch(arguments.length){
case 2:
return G__12966__2.call(this,this_sym12936,k);
case 3:
return G__12966__3.call(this,this_sym12936,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12966;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (this_sym12919,args12920){
var this__12942 = this;
return this_sym12919.call.apply(this_sym12919,[this_sym12919].concat(args12920.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__12943 = this;
var len__12944 = this__12943.arr.length;
var i__12945 = 0;
var init__12946 = init;
while(true){
if((i__12945 < len__12944))
{var init__12947 = f.call(null,init__12946,(this__12943.arr[i__12945]),(this__12943.arr[(i__12945 + 1)]));
if(cljs.core.reduced_QMARK_.call(null,init__12947))
{return cljs.core.deref.call(null,init__12947);
} else
{{
var G__12967 = (i__12945 + 2);
var G__12968 = init__12947;
i__12945 = G__12967;
init__12946 = G__12968;
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
var this__12948 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var this__12949 = this;
var this__12950 = this;
return cljs.core.pr_str.call(null,this__12950);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__12951 = this;
if((this__12951.cnt > 0))
{var len__12952 = this__12951.arr.length;
var array_map_seq__12953 = (function array_map_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < len__12952))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([(this__12951.arr[i]),(this__12951.arr[(i + 1)])], true),array_map_seq.call(null,(i + 2)));
} else
{return null;
}
}),null));
});
return array_map_seq__12953.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__12954 = this;
return this__12954.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__12955 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__12956 = this;
return (new cljs.core.PersistentArrayMap(meta,this__12956.cnt,this__12956.arr,this__12956.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__12957 = this;
return this__12957.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__12958 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,this__12958.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__12959 = this;
var idx__12960 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__12960 >= 0))
{var len__12961 = this__12959.arr.length;
var new_len__12962 = (len__12961 - 2);
if((new_len__12962 === 0))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var new_arr__12963 = cljs.core.make_array.call(null,new_len__12962);
var s__12964 = 0;
var d__12965 = 0;
while(true){
if((s__12964 >= len__12961))
{return (new cljs.core.PersistentArrayMap(this__12959.meta,(this__12959.cnt - 1),new_arr__12963,null));
} else
{if(cljs.core._EQ_.call(null,k,(this__12959.arr[s__12964])))
{{
var G__12969 = (s__12964 + 2);
var G__12970 = d__12965;
s__12964 = G__12969;
d__12965 = G__12970;
continue;
}
} else
{if("\uFDD0'else")
{(new_arr__12963[d__12965] = (this__12959.arr[s__12964]));
(new_arr__12963[(d__12965 + 1)] = (this__12959.arr[(s__12964 + 1)]));
{
var G__12971 = (s__12964 + 2);
var G__12972 = (d__12965 + 2);
s__12964 = G__12971;
d__12965 = G__12972;
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
var len__12973 = cljs.core.count.call(null,ks);
var i__12974 = 0;
var out__12975 = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i__12974 < len__12973))
{{
var G__12976 = (i__12974 + 1);
var G__12977 = cljs.core.assoc_BANG_.call(null,out__12975,(ks[i__12974]),(vs[i__12974]));
i__12974 = G__12976;
out__12975 = G__12977;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__12975);
}
break;
}
});

/**
* @constructor
*/
cljs.core.TransientArrayMap = (function (editable_QMARK_,len,arr){
this.editable_QMARK_ = editable_QMARK_;
this.len = len;
this.arr = arr;
this.cljs$lang$protocol_mask$partition1$ = 14;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientArrayMap.cljs$lang$type = true;
cljs.core.TransientArrayMap.cljs$lang$ctorPrSeq = (function (this__3834__auto__){
return cljs.core.list.call(null,"cljs.core/TransientArrayMap");
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__12978 = this;
if(cljs.core.truth_(this__12978.editable_QMARK_))
{var idx__12979 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__12979 >= 0))
{(this__12978.arr[idx__12979] = (this__12978.arr[(this__12978.len - 2)]));
(this__12978.arr[(idx__12979 + 1)] = (this__12978.arr[(this__12978.len - 1)]));
var G__12980__12981 = this__12978.arr;
G__12980__12981.pop();
G__12980__12981.pop();
G__12980__12981;
this__12978.len = (this__12978.len - 2);
} else
{}
return tcoll;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__12982 = this;
if(cljs.core.truth_(this__12982.editable_QMARK_))
{var idx__12983 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__12983 === -1))
{if(((this__12982.len + 2) <= (2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{this__12982.len = (this__12982.len + 2);
this__12982.arr.push(key);
this__12982.arr.push(val);
return tcoll;
} else
{return cljs.core.assoc_BANG_.call(null,cljs.core.array__GT_transient_hash_map.call(null,this__12982.len,this__12982.arr),key,val);
}
} else
{if((val === (this__12982.arr[(idx__12983 + 1)])))
{return tcoll;
} else
{(this__12982.arr[(idx__12983 + 1)] = val);
return tcoll;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__12984 = this;
if(cljs.core.truth_(this__12984.editable_QMARK_))
{if((function (){var G__12985__12986 = o;
if(G__12985__12986)
{if((function (){var or__3824__auto____12987 = (G__12985__12986.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____12987)
{return or__3824__auto____12987;
} else
{return G__12985__12986.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__12985__12986.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__12985__12986);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__12985__12986);
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__12988 = cljs.core.seq.call(null,o);
var tcoll__12989 = tcoll;
while(true){
var temp__3971__auto____12990 = cljs.core.first.call(null,es__12988);
if(cljs.core.truth_(temp__3971__auto____12990))
{var e__12991 = temp__3971__auto____12990;
{
var G__12997 = cljs.core.next.call(null,es__12988);
var G__12998 = tcoll__12989.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll__12989,cljs.core.key.call(null,e__12991),cljs.core.val.call(null,e__12991));
es__12988 = G__12997;
tcoll__12989 = G__12998;
continue;
}
} else
{return tcoll__12989;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__12992 = this;
if(cljs.core.truth_(this__12992.editable_QMARK_))
{this__12992.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,this__12992.len,2),this__12992.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__12993 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__12994 = this;
if(cljs.core.truth_(this__12994.editable_QMARK_))
{var idx__12995 = cljs.core.array_map_index_of.call(null,tcoll,k);
if((idx__12995 === -1))
{return not_found;
} else
{return (this__12994.arr[(idx__12995 + 1)]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__12996 = this;
if(cljs.core.truth_(this__12996.editable_QMARK_))
{return cljs.core.quot.call(null,this__12996.len,2);
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientArrayMap;
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out__13001 = cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY);
var i__13002 = 0;
while(true){
if((i__13002 < len))
{{
var G__13003 = cljs.core.assoc_BANG_.call(null,out__13001,(arr[i__13002]),(arr[(i__13002 + 1)]));
var G__13004 = (i__13002 + 2);
out__13001 = G__13003;
i__13002 = G__13004;
continue;
}
} else
{return out__13001;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Box = (function (val){
this.val = val;
})
cljs.core.Box.cljs$lang$type = true;
cljs.core.Box.cljs$lang$ctorPrSeq = (function (this__3835__auto__){
return cljs.core.list.call(null,"cljs.core/Box");
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
var G__13009__13010 = arr.slice();
(G__13009__13010[i] = a);
return G__13009__13010;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__13011__13012 = arr.slice();
(G__13011__13012[i] = a);
(G__13011__13012[j] = b);
return G__13011__13012;
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
var new_arr__13014 = cljs.core.make_array.call(null,(arr.length - 2));
cljs.core.array_copy.call(null,arr,0,new_arr__13014,0,(2 * i));
cljs.core.array_copy.call(null,arr,(2 * (i + 1)),new_arr__13014,(2 * i),(new_arr__13014.length - (2 * i)));
return new_arr__13014;
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
var editable__13017 = inode.ensure_editable(edit);
(editable__13017.arr[i] = a);
return editable__13017;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable__13018 = inode.ensure_editable(edit);
(editable__13018.arr[i] = a);
(editable__13018.arr[j] = b);
return editable__13018;
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
var len__13025 = arr.length;
var i__13026 = 0;
var init__13027 = init;
while(true){
if((i__13026 < len__13025))
{var init__13030 = (function (){var k__13028 = (arr[i__13026]);
if(!((k__13028 == null)))
{return f.call(null,init__13027,k__13028,(arr[(i__13026 + 1)]));
} else
{var node__13029 = (arr[(i__13026 + 1)]);
if(!((node__13029 == null)))
{return node__13029.kv_reduce(f,init__13027);
} else
{return init__13027;
}
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__13030))
{return cljs.core.deref.call(null,init__13030);
} else
{{
var G__13031 = (i__13026 + 2);
var G__13032 = init__13030;
i__13026 = G__13031;
init__13027 = G__13032;
continue;
}
}
} else
{return init__13027;
}
break;
}
});

/**
* @constructor
*/
cljs.core.BitmapIndexedNode = (function (edit,bitmap,arr){
this.edit = edit;
this.bitmap = bitmap;
this.arr = arr;
})
cljs.core.BitmapIndexedNode.cljs$lang$type = true;
cljs.core.BitmapIndexedNode.cljs$lang$ctorPrSeq = (function (this__3834__auto__){
return cljs.core.list.call(null,"cljs.core/BitmapIndexedNode");
});
cljs.core.BitmapIndexedNode.prototype.edit_and_remove_pair = (function (e,bit,i){
var this__13033 = this;
var inode__13034 = this;
if((this__13033.bitmap === bit))
{return null;
} else
{var editable__13035 = inode__13034.ensure_editable(e);
var earr__13036 = editable__13035.arr;
var len__13037 = earr__13036.length;
editable__13035.bitmap = (bit ^ editable__13035.bitmap);
cljs.core.array_copy.call(null,earr__13036,(2 * (i + 1)),earr__13036,(2 * i),(len__13037 - (2 * (i + 1))));
(earr__13036[(len__13037 - 2)] = null);
(earr__13036[(len__13037 - 1)] = null);
return editable__13035;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__13038 = this;
var inode__13039 = this;
var bit__13040 = (1 << ((hash >>> shift) & 0x01f));
var idx__13041 = cljs.core.bitmap_indexed_node_index.call(null,this__13038.bitmap,bit__13040);
if(((this__13038.bitmap & bit__13040) === 0))
{var n__13042 = cljs.core.bit_count.call(null,this__13038.bitmap);
if(((2 * n__13042) < this__13038.arr.length))
{var editable__13043 = inode__13039.ensure_editable(edit);
var earr__13044 = editable__13043.arr;
added_leaf_QMARK_.val = true;
cljs.core.array_copy_downward.call(null,earr__13044,(2 * idx__13041),earr__13044,(2 * (idx__13041 + 1)),(2 * (n__13042 - idx__13041)));
(earr__13044[(2 * idx__13041)] = key);
(earr__13044[((2 * idx__13041) + 1)] = val);
editable__13043.bitmap = (editable__13043.bitmap | bit__13040);
return editable__13043;
} else
{if((n__13042 >= 16))
{var nodes__13045 = cljs.core.make_array.call(null,32);
var jdx__13046 = ((hash >>> shift) & 0x01f);
(nodes__13045[jdx__13046] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
var i__13047 = 0;
var j__13048 = 0;
while(true){
if((i__13047 < 32))
{if((((this__13038.bitmap >>> i__13047) & 1) === 0))
{{
var G__13101 = (i__13047 + 1);
var G__13102 = j__13048;
i__13047 = G__13101;
j__13048 = G__13102;
continue;
}
} else
{(nodes__13045[i__13047] = ((!(((this__13038.arr[j__13048]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),cljs.core.hash.call(null,(this__13038.arr[j__13048])),(this__13038.arr[j__13048]),(this__13038.arr[(j__13048 + 1)]),added_leaf_QMARK_):(this__13038.arr[(j__13048 + 1)])));
{
var G__13103 = (i__13047 + 1);
var G__13104 = (j__13048 + 2);
i__13047 = G__13103;
j__13048 = G__13104;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit,(n__13042 + 1),nodes__13045));
} else
{if("\uFDD0'else")
{var new_arr__13049 = cljs.core.make_array.call(null,(2 * (n__13042 + 4)));
cljs.core.array_copy.call(null,this__13038.arr,0,new_arr__13049,0,(2 * idx__13041));
(new_arr__13049[(2 * idx__13041)] = key);
(new_arr__13049[((2 * idx__13041) + 1)] = val);
cljs.core.array_copy.call(null,this__13038.arr,(2 * idx__13041),new_arr__13049,(2 * (idx__13041 + 1)),(2 * (n__13042 - idx__13041)));
added_leaf_QMARK_.val = true;
var editable__13050 = inode__13039.ensure_editable(edit);
editable__13050.arr = new_arr__13049;
editable__13050.bitmap = (editable__13050.bitmap | bit__13040);
return editable__13050;
} else
{return null;
}
}
}
} else
{var key_or_nil__13051 = (this__13038.arr[(2 * idx__13041)]);
var val_or_node__13052 = (this__13038.arr[((2 * idx__13041) + 1)]);
if((key_or_nil__13051 == null))
{var n__13053 = val_or_node__13052.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__13053 === val_or_node__13052))
{return inode__13039;
} else
{return cljs.core.edit_and_set.call(null,inode__13039,edit,((2 * idx__13041) + 1),n__13053);
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__13051))
{if((val === val_or_node__13052))
{return inode__13039;
} else
{return cljs.core.edit_and_set.call(null,inode__13039,edit,((2 * idx__13041) + 1),val);
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return cljs.core.edit_and_set.call(null,inode__13039,edit,(2 * idx__13041),null,((2 * idx__13041) + 1),cljs.core.create_node.call(null,edit,(shift + 5),key_or_nil__13051,val_or_node__13052,hash,key,val));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var this__13054 = this;
var inode__13055 = this;
return cljs.core.create_inode_seq.call(null,this__13054.arr);
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__13056 = this;
var inode__13057 = this;
var bit__13058 = (1 << ((hash >>> shift) & 0x01f));
if(((this__13056.bitmap & bit__13058) === 0))
{return inode__13057;
} else
{var idx__13059 = cljs.core.bitmap_indexed_node_index.call(null,this__13056.bitmap,bit__13058);
var key_or_nil__13060 = (this__13056.arr[(2 * idx__13059)]);
var val_or_node__13061 = (this__13056.arr[((2 * idx__13059) + 1)]);
if((key_or_nil__13060 == null))
{var n__13062 = val_or_node__13061.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__13062 === val_or_node__13061))
{return inode__13057;
} else
{if(!((n__13062 == null)))
{return cljs.core.edit_and_set.call(null,inode__13057,edit,((2 * idx__13059) + 1),n__13062);
} else
{if((this__13056.bitmap === bit__13058))
{return null;
} else
{if("\uFDD0'else")
{return inode__13057.edit_and_remove_pair(edit,bit__13058,idx__13059);
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__13060))
{(removed_leaf_QMARK_[0] = true);
return inode__13057.edit_and_remove_pair(edit,bit__13058,idx__13059);
} else
{if("\uFDD0'else")
{return inode__13057;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var this__13063 = this;
var inode__13064 = this;
if((e === this__13063.edit))
{return inode__13064;
} else
{var n__13065 = cljs.core.bit_count.call(null,this__13063.bitmap);
var new_arr__13066 = cljs.core.make_array.call(null,(((n__13065 < 0))?4:(2 * (n__13065 + 1))));
cljs.core.array_copy.call(null,this__13063.arr,0,new_arr__13066,0,(2 * n__13065));
return (new cljs.core.BitmapIndexedNode(e,this__13063.bitmap,new_arr__13066));
}
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var this__13067 = this;
var inode__13068 = this;
return cljs.core.inode_kv_reduce.call(null,this__13067.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__13069 = this;
var inode__13070 = this;
var bit__13071 = (1 << ((hash >>> shift) & 0x01f));
if(((this__13069.bitmap & bit__13071) === 0))
{return not_found;
} else
{var idx__13072 = cljs.core.bitmap_indexed_node_index.call(null,this__13069.bitmap,bit__13071);
var key_or_nil__13073 = (this__13069.arr[(2 * idx__13072)]);
var val_or_node__13074 = (this__13069.arr[((2 * idx__13072) + 1)]);
if((key_or_nil__13073 == null))
{return val_or_node__13074.inode_find((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__13073))
{return cljs.core.PersistentVector.fromArray([key_or_nil__13073,val_or_node__13074], true);
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
var this__13075 = this;
var inode__13076 = this;
var bit__13077 = (1 << ((hash >>> shift) & 0x01f));
if(((this__13075.bitmap & bit__13077) === 0))
{return inode__13076;
} else
{var idx__13078 = cljs.core.bitmap_indexed_node_index.call(null,this__13075.bitmap,bit__13077);
var key_or_nil__13079 = (this__13075.arr[(2 * idx__13078)]);
var val_or_node__13080 = (this__13075.arr[((2 * idx__13078) + 1)]);
if((key_or_nil__13079 == null))
{var n__13081 = val_or_node__13080.inode_without((shift + 5),hash,key);
if((n__13081 === val_or_node__13080))
{return inode__13076;
} else
{if(!((n__13081 == null)))
{return (new cljs.core.BitmapIndexedNode(null,this__13075.bitmap,cljs.core.clone_and_set.call(null,this__13075.arr,((2 * idx__13078) + 1),n__13081)));
} else
{if((this__13075.bitmap === bit__13077))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.BitmapIndexedNode(null,(this__13075.bitmap ^ bit__13077),cljs.core.remove_pair.call(null,this__13075.arr,idx__13078)));
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__13079))
{return (new cljs.core.BitmapIndexedNode(null,(this__13075.bitmap ^ bit__13077),cljs.core.remove_pair.call(null,this__13075.arr,idx__13078)));
} else
{if("\uFDD0'else")
{return inode__13076;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__13082 = this;
var inode__13083 = this;
var bit__13084 = (1 << ((hash >>> shift) & 0x01f));
var idx__13085 = cljs.core.bitmap_indexed_node_index.call(null,this__13082.bitmap,bit__13084);
if(((this__13082.bitmap & bit__13084) === 0))
{var n__13086 = cljs.core.bit_count.call(null,this__13082.bitmap);
if((n__13086 >= 16))
{var nodes__13087 = cljs.core.make_array.call(null,32);
var jdx__13088 = ((hash >>> shift) & 0x01f);
(nodes__13087[jdx__13088] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_));
var i__13089 = 0;
var j__13090 = 0;
while(true){
if((i__13089 < 32))
{if((((this__13082.bitmap >>> i__13089) & 1) === 0))
{{
var G__13105 = (i__13089 + 1);
var G__13106 = j__13090;
i__13089 = G__13105;
j__13090 = G__13106;
continue;
}
} else
{(nodes__13087[i__13089] = ((!(((this__13082.arr[j__13090]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),cljs.core.hash.call(null,(this__13082.arr[j__13090])),(this__13082.arr[j__13090]),(this__13082.arr[(j__13090 + 1)]),added_leaf_QMARK_):(this__13082.arr[(j__13090 + 1)])));
{
var G__13107 = (i__13089 + 1);
var G__13108 = (j__13090 + 2);
i__13089 = G__13107;
j__13090 = G__13108;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n__13086 + 1),nodes__13087));
} else
{var new_arr__13091 = cljs.core.make_array.call(null,(2 * (n__13086 + 1)));
cljs.core.array_copy.call(null,this__13082.arr,0,new_arr__13091,0,(2 * idx__13085));
(new_arr__13091[(2 * idx__13085)] = key);
(new_arr__13091[((2 * idx__13085) + 1)] = val);
cljs.core.array_copy.call(null,this__13082.arr,(2 * idx__13085),new_arr__13091,(2 * (idx__13085 + 1)),(2 * (n__13086 - idx__13085)));
added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,(this__13082.bitmap | bit__13084),new_arr__13091));
}
} else
{var key_or_nil__13092 = (this__13082.arr[(2 * idx__13085)]);
var val_or_node__13093 = (this__13082.arr[((2 * idx__13085) + 1)]);
if((key_or_nil__13092 == null))
{var n__13094 = val_or_node__13093.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__13094 === val_or_node__13093))
{return inode__13083;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__13082.bitmap,cljs.core.clone_and_set.call(null,this__13082.arr,((2 * idx__13085) + 1),n__13094)));
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__13092))
{if((val === val_or_node__13093))
{return inode__13083;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__13082.bitmap,cljs.core.clone_and_set.call(null,this__13082.arr,((2 * idx__13085) + 1),val)));
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,this__13082.bitmap,cljs.core.clone_and_set.call(null,this__13082.arr,(2 * idx__13085),null,((2 * idx__13085) + 1),cljs.core.create_node.call(null,(shift + 5),key_or_nil__13092,val_or_node__13093,hash,key,val))));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__13095 = this;
var inode__13096 = this;
var bit__13097 = (1 << ((hash >>> shift) & 0x01f));
if(((this__13095.bitmap & bit__13097) === 0))
{return not_found;
} else
{var idx__13098 = cljs.core.bitmap_indexed_node_index.call(null,this__13095.bitmap,bit__13097);
var key_or_nil__13099 = (this__13095.arr[(2 * idx__13098)]);
var val_or_node__13100 = (this__13095.arr[((2 * idx__13098) + 1)]);
if((key_or_nil__13099 == null))
{return val_or_node__13100.inode_lookup((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__13099))
{return val_or_node__13100;
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
var arr__13116 = array_node.arr;
var len__13117 = (2 * (array_node.cnt - 1));
var new_arr__13118 = cljs.core.make_array.call(null,len__13117);
var i__13119 = 0;
var j__13120 = 1;
var bitmap__13121 = 0;
while(true){
if((i__13119 < len__13117))
{if((function (){var and__3822__auto____13122 = !((i__13119 === idx));
if(and__3822__auto____13122)
{return !(((arr__13116[i__13119]) == null));
} else
{return and__3822__auto____13122;
}
})())
{(new_arr__13118[j__13120] = (arr__13116[i__13119]));
{
var G__13123 = (i__13119 + 1);
var G__13124 = (j__13120 + 2);
var G__13125 = (bitmap__13121 | (1 << i__13119));
i__13119 = G__13123;
j__13120 = G__13124;
bitmap__13121 = G__13125;
continue;
}
} else
{{
var G__13126 = (i__13119 + 1);
var G__13127 = j__13120;
var G__13128 = bitmap__13121;
i__13119 = G__13126;
j__13120 = G__13127;
bitmap__13121 = G__13128;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap__13121,new_arr__13118));
}
break;
}
});

/**
* @constructor
*/
cljs.core.ArrayNode = (function (edit,cnt,arr){
this.edit = edit;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.ArrayNode.cljs$lang$type = true;
cljs.core.ArrayNode.cljs$lang$ctorPrSeq = (function (this__3834__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNode");
});
cljs.core.ArrayNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__13129 = this;
var inode__13130 = this;
var idx__13131 = ((hash >>> shift) & 0x01f);
var node__13132 = (this__13129.arr[idx__13131]);
if((node__13132 == null))
{var editable__13133 = cljs.core.edit_and_set.call(null,inode__13130,edit,idx__13131,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
editable__13133.cnt = (editable__13133.cnt + 1);
return editable__13133;
} else
{var n__13134 = node__13132.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__13134 === node__13132))
{return inode__13130;
} else
{return cljs.core.edit_and_set.call(null,inode__13130,edit,idx__13131,n__13134);
}
}
});
cljs.core.ArrayNode.prototype.inode_seq = (function (){
var this__13135 = this;
var inode__13136 = this;
return cljs.core.create_array_node_seq.call(null,this__13135.arr);
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__13137 = this;
var inode__13138 = this;
var idx__13139 = ((hash >>> shift) & 0x01f);
var node__13140 = (this__13137.arr[idx__13139]);
if((node__13140 == null))
{return inode__13138;
} else
{var n__13141 = node__13140.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__13141 === node__13140))
{return inode__13138;
} else
{if((n__13141 == null))
{if((this__13137.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__13138,edit,idx__13139);
} else
{var editable__13142 = cljs.core.edit_and_set.call(null,inode__13138,edit,idx__13139,n__13141);
editable__13142.cnt = (editable__13142.cnt - 1);
return editable__13142;
}
} else
{if("\uFDD0'else")
{return cljs.core.edit_and_set.call(null,inode__13138,edit,idx__13139,n__13141);
} else
{return null;
}
}
}
}
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var this__13143 = this;
var inode__13144 = this;
if((e === this__13143.edit))
{return inode__13144;
} else
{return (new cljs.core.ArrayNode(e,this__13143.cnt,this__13143.arr.slice()));
}
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var this__13145 = this;
var inode__13146 = this;
var len__13147 = this__13145.arr.length;
var i__13148 = 0;
var init__13149 = init;
while(true){
if((i__13148 < len__13147))
{var node__13150 = (this__13145.arr[i__13148]);
if(!((node__13150 == null)))
{var init__13151 = node__13150.kv_reduce(f,init__13149);
if(cljs.core.reduced_QMARK_.call(null,init__13151))
{return cljs.core.deref.call(null,init__13151);
} else
{{
var G__13170 = (i__13148 + 1);
var G__13171 = init__13151;
i__13148 = G__13170;
init__13149 = G__13171;
continue;
}
}
} else
{return null;
}
} else
{return init__13149;
}
break;
}
});
cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__13152 = this;
var inode__13153 = this;
var idx__13154 = ((hash >>> shift) & 0x01f);
var node__13155 = (this__13152.arr[idx__13154]);
if(!((node__13155 == null)))
{return node__13155.inode_find((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var this__13156 = this;
var inode__13157 = this;
var idx__13158 = ((hash >>> shift) & 0x01f);
var node__13159 = (this__13156.arr[idx__13158]);
if(!((node__13159 == null)))
{var n__13160 = node__13159.inode_without((shift + 5),hash,key);
if((n__13160 === node__13159))
{return inode__13157;
} else
{if((n__13160 == null))
{if((this__13156.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__13157,null,idx__13158);
} else
{return (new cljs.core.ArrayNode(null,(this__13156.cnt - 1),cljs.core.clone_and_set.call(null,this__13156.arr,idx__13158,n__13160)));
}
} else
{if("\uFDD0'else")
{return (new cljs.core.ArrayNode(null,this__13156.cnt,cljs.core.clone_and_set.call(null,this__13156.arr,idx__13158,n__13160)));
} else
{return null;
}
}
}
} else
{return inode__13157;
}
});
cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__13161 = this;
var inode__13162 = this;
var idx__13163 = ((hash >>> shift) & 0x01f);
var node__13164 = (this__13161.arr[idx__13163]);
if((node__13164 == null))
{return (new cljs.core.ArrayNode(null,(this__13161.cnt + 1),cljs.core.clone_and_set.call(null,this__13161.arr,idx__13163,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_))));
} else
{var n__13165 = node__13164.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__13165 === node__13164))
{return inode__13162;
} else
{return (new cljs.core.ArrayNode(null,this__13161.cnt,cljs.core.clone_and_set.call(null,this__13161.arr,idx__13163,n__13165)));
}
}
});
cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__13166 = this;
var inode__13167 = this;
var idx__13168 = ((hash >>> shift) & 0x01f);
var node__13169 = (this__13166.arr[idx__13168]);
if(!((node__13169 == null)))
{return node__13169.inode_lookup((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode;
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim__13174 = (2 * cnt);
var i__13175 = 0;
while(true){
if((i__13175 < lim__13174))
{if(cljs.core.key_test.call(null,key,(arr[i__13175])))
{return i__13175;
} else
{{
var G__13176 = (i__13175 + 2);
i__13175 = G__13176;
continue;
}
}
} else
{return -1;
}
break;
}
});

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
cljs.core.HashCollisionNode.cljs$lang$ctorPrSeq = (function (this__3834__auto__){
return cljs.core.list.call(null,"cljs.core/HashCollisionNode");
});
cljs.core.HashCollisionNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__13177 = this;
var inode__13178 = this;
if((hash === this__13177.collision_hash))
{var idx__13179 = cljs.core.hash_collision_node_find_index.call(null,this__13177.arr,this__13177.cnt,key);
if((idx__13179 === -1))
{if((this__13177.arr.length > (2 * this__13177.cnt)))
{var editable__13180 = cljs.core.edit_and_set.call(null,inode__13178,edit,(2 * this__13177.cnt),key,((2 * this__13177.cnt) + 1),val);
added_leaf_QMARK_.val = true;
editable__13180.cnt = (editable__13180.cnt + 1);
return editable__13180;
} else
{var len__13181 = this__13177.arr.length;
var new_arr__13182 = cljs.core.make_array.call(null,(len__13181 + 2));
cljs.core.array_copy.call(null,this__13177.arr,0,new_arr__13182,0,len__13181);
(new_arr__13182[len__13181] = key);
(new_arr__13182[(len__13181 + 1)] = val);
added_leaf_QMARK_.val = true;
return inode__13178.ensure_editable_array(edit,(this__13177.cnt + 1),new_arr__13182);
}
} else
{if(((this__13177.arr[(idx__13179 + 1)]) === val))
{return inode__13178;
} else
{return cljs.core.edit_and_set.call(null,inode__13178,edit,(idx__13179 + 1),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,(1 << ((this__13177.collision_hash >>> shift) & 0x01f)),[null,inode__13178,null,null])).inode_assoc_BANG_(edit,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var this__13183 = this;
var inode__13184 = this;
return cljs.core.create_inode_seq.call(null,this__13183.arr);
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__13185 = this;
var inode__13186 = this;
var idx__13187 = cljs.core.hash_collision_node_find_index.call(null,this__13185.arr,this__13185.cnt,key);
if((idx__13187 === -1))
{return inode__13186;
} else
{(removed_leaf_QMARK_[0] = true);
if((this__13185.cnt === 1))
{return null;
} else
{var editable__13188 = inode__13186.ensure_editable(edit);
var earr__13189 = editable__13188.arr;
(earr__13189[idx__13187] = (earr__13189[((2 * this__13185.cnt) - 2)]));
(earr__13189[(idx__13187 + 1)] = (earr__13189[((2 * this__13185.cnt) - 1)]));
(earr__13189[((2 * this__13185.cnt) - 1)] = null);
(earr__13189[((2 * this__13185.cnt) - 2)] = null);
editable__13188.cnt = (editable__13188.cnt - 1);
return editable__13188;
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){
var this__13190 = this;
var inode__13191 = this;
if((e === this__13190.edit))
{return inode__13191;
} else
{var new_arr__13192 = cljs.core.make_array.call(null,(2 * (this__13190.cnt + 1)));
cljs.core.array_copy.call(null,this__13190.arr,0,new_arr__13192,0,(2 * this__13190.cnt));
return (new cljs.core.HashCollisionNode(e,this__13190.collision_hash,this__13190.cnt,new_arr__13192));
}
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var this__13193 = this;
var inode__13194 = this;
return cljs.core.inode_kv_reduce.call(null,this__13193.arr,f,init);
});
cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__13195 = this;
var inode__13196 = this;
var idx__13197 = cljs.core.hash_collision_node_find_index.call(null,this__13195.arr,this__13195.cnt,key);
if((idx__13197 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__13195.arr[idx__13197])))
{return cljs.core.PersistentVector.fromArray([(this__13195.arr[idx__13197]),(this__13195.arr[(idx__13197 + 1)])], true);
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
var this__13198 = this;
var inode__13199 = this;
var idx__13200 = cljs.core.hash_collision_node_find_index.call(null,this__13198.arr,this__13198.cnt,key);
if((idx__13200 === -1))
{return inode__13199;
} else
{if((this__13198.cnt === 1))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.HashCollisionNode(null,this__13198.collision_hash,(this__13198.cnt - 1),cljs.core.remove_pair.call(null,this__13198.arr,cljs.core.quot.call(null,idx__13200,2))));
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__13201 = this;
var inode__13202 = this;
if((hash === this__13201.collision_hash))
{var idx__13203 = cljs.core.hash_collision_node_find_index.call(null,this__13201.arr,this__13201.cnt,key);
if((idx__13203 === -1))
{var len__13204 = this__13201.arr.length;
var new_arr__13205 = cljs.core.make_array.call(null,(len__13204 + 2));
cljs.core.array_copy.call(null,this__13201.arr,0,new_arr__13205,0,len__13204);
(new_arr__13205[len__13204] = key);
(new_arr__13205[(len__13204 + 1)] = val);
added_leaf_QMARK_.val = true;
return (new cljs.core.HashCollisionNode(null,this__13201.collision_hash,(this__13201.cnt + 1),new_arr__13205));
} else
{if(cljs.core._EQ_.call(null,(this__13201.arr[idx__13203]),val))
{return inode__13202;
} else
{return (new cljs.core.HashCollisionNode(null,this__13201.collision_hash,this__13201.cnt,cljs.core.clone_and_set.call(null,this__13201.arr,(idx__13203 + 1),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((this__13201.collision_hash >>> shift) & 0x01f)),[null,inode__13202])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__13206 = this;
var inode__13207 = this;
var idx__13208 = cljs.core.hash_collision_node_find_index.call(null,this__13206.arr,this__13206.cnt,key);
if((idx__13208 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__13206.arr[idx__13208])))
{return (this__13206.arr[(idx__13208 + 1)]);
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
var this__13209 = this;
var inode__13210 = this;
if((e === this__13209.edit))
{this__13209.arr = array;
this__13209.cnt = count;
return inode__13210;
} else
{return (new cljs.core.HashCollisionNode(this__13209.edit,this__13209.collision_hash,count,array));
}
});
cljs.core.HashCollisionNode;
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash__13215 = cljs.core.hash.call(null,key1);
if((key1hash__13215 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__13215,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___13216 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash__13215,key1,val1,added_leaf_QMARK___13216).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK___13216);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash__13217 = cljs.core.hash.call(null,key1);
if((key1hash__13217 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__13217,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___13218 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash__13217,key1,val1,added_leaf_QMARK___13218).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK___13218);
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
cljs.core.NodeSeq.cljs$lang$ctorPrSeq = (function (this__3834__auto__){
return cljs.core.list.call(null,"cljs.core/NodeSeq");
});
cljs.core.NodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__13219 = this;
var h__3675__auto____13220 = this__13219.__hash;
if(!((h__3675__auto____13220 == null)))
{return h__3675__auto____13220;
} else
{var h__3675__auto____13221 = cljs.core.hash_coll.call(null,coll);
this__13219.__hash = h__3675__auto____13221;
return h__3675__auto____13221;
}
});
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__13222 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.NodeSeq.prototype.toString = (function (){
var this__13223 = this;
var this__13224 = this;
return cljs.core.pr_str.call(null,this__13224);
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__13225 = this;
return this$;
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__13226 = this;
if((this__13226.s == null))
{return cljs.core.PersistentVector.fromArray([(this__13226.nodes[this__13226.i]),(this__13226.nodes[(this__13226.i + 1)])], true);
} else
{return cljs.core.first.call(null,this__13226.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__13227 = this;
if((this__13227.s == null))
{return cljs.core.create_inode_seq.call(null,this__13227.nodes,(this__13227.i + 2),null);
} else
{return cljs.core.create_inode_seq.call(null,this__13227.nodes,this__13227.i,cljs.core.next.call(null,this__13227.s));
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__13228 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__13229 = this;
return (new cljs.core.NodeSeq(meta,this__13229.nodes,this__13229.i,this__13229.s,this__13229.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__13230 = this;
return this__13230.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__13231 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13231.meta);
});
cljs.core.NodeSeq;
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.call(null,nodes,0,null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null))
{var len__13238 = nodes.length;
var j__13239 = i;
while(true){
if((j__13239 < len__13238))
{if(!(((nodes[j__13239]) == null)))
{return (new cljs.core.NodeSeq(null,nodes,j__13239,null,null));
} else
{var temp__3971__auto____13240 = (nodes[(j__13239 + 1)]);
if(cljs.core.truth_(temp__3971__auto____13240))
{var node__13241 = temp__3971__auto____13240;
var temp__3971__auto____13242 = node__13241.inode_seq();
if(cljs.core.truth_(temp__3971__auto____13242))
{var node_seq__13243 = temp__3971__auto____13242;
return (new cljs.core.NodeSeq(null,nodes,(j__13239 + 2),node_seq__13243,null));
} else
{{
var G__13244 = (j__13239 + 2);
j__13239 = G__13244;
continue;
}
}
} else
{{
var G__13245 = (j__13239 + 2);
j__13239 = G__13245;
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
cljs.core.ArrayNodeSeq.cljs$lang$ctorPrSeq = (function (this__3834__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNodeSeq");
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__13246 = this;
var h__3675__auto____13247 = this__13246.__hash;
if(!((h__3675__auto____13247 == null)))
{return h__3675__auto____13247;
} else
{var h__3675__auto____13248 = cljs.core.hash_coll.call(null,coll);
this__13246.__hash = h__3675__auto____13248;
return h__3675__auto____13248;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__13249 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var this__13250 = this;
var this__13251 = this;
return cljs.core.pr_str.call(null,this__13251);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__13252 = this;
return this$;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__13253 = this;
return cljs.core.first.call(null,this__13253.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__13254 = this;
return cljs.core.create_array_node_seq.call(null,null,this__13254.nodes,this__13254.i,cljs.core.next.call(null,this__13254.s));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__13255 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__13256 = this;
return (new cljs.core.ArrayNodeSeq(meta,this__13256.nodes,this__13256.i,this__13256.s,this__13256.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__13257 = this;
return this__13257.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__13258 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13258.meta);
});
cljs.core.ArrayNodeSeq;
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.call(null,null,nodes,0,null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null))
{var len__13265 = nodes.length;
var j__13266 = i;
while(true){
if((j__13266 < len__13265))
{var temp__3971__auto____13267 = (nodes[j__13266]);
if(cljs.core.truth_(temp__3971__auto____13267))
{var nj__13268 = temp__3971__auto____13267;
var temp__3971__auto____13269 = nj__13268.inode_seq();
if(cljs.core.truth_(temp__3971__auto____13269))
{var ns__13270 = temp__3971__auto____13269;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j__13266 + 1),ns__13270,null));
} else
{{
var G__13271 = (j__13266 + 1);
j__13266 = G__13271;
continue;
}
}
} else
{{
var G__13272 = (j__13266 + 1);
j__13266 = G__13272;
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
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
})
cljs.core.PersistentHashMap.cljs$lang$type = true;
cljs.core.PersistentHashMap.cljs$lang$ctorPrSeq = (function (this__3834__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashMap");
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__13275 = this;
return (new cljs.core.TransientHashMap({},this__13275.root,this__13275.cnt,this__13275.has_nil_QMARK_,this__13275.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__13276 = this;
var h__3675__auto____13277 = this__13276.__hash;
if(!((h__3675__auto____13277 == null)))
{return h__3675__auto____13277;
} else
{var h__3675__auto____13278 = cljs.core.hash_imap.call(null,coll);
this__13276.__hash = h__3675__auto____13278;
return h__3675__auto____13278;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__13279 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__13280 = this;
if((k == null))
{if(this__13280.has_nil_QMARK_)
{return this__13280.nil_val;
} else
{return not_found;
}
} else
{if((this__13280.root == null))
{return not_found;
} else
{if("\uFDD0'else")
{return this__13280.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__13281 = this;
if((k == null))
{if((function (){var and__3822__auto____13282 = this__13281.has_nil_QMARK_;
if(and__3822__auto____13282)
{return (v === this__13281.nil_val);
} else
{return and__3822__auto____13282;
}
})())
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__13281.meta,((this__13281.has_nil_QMARK_)?this__13281.cnt:(this__13281.cnt + 1)),this__13281.root,true,v,null));
}
} else
{var added_leaf_QMARK___13283 = (new cljs.core.Box(false));
var new_root__13284 = (((this__13281.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__13281.root).inode_assoc(0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___13283);
if((new_root__13284 === this__13281.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__13281.meta,((added_leaf_QMARK___13283.val)?(this__13281.cnt + 1):this__13281.cnt),new_root__13284,this__13281.has_nil_QMARK_,this__13281.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__13285 = this;
if((k == null))
{return this__13285.has_nil_QMARK_;
} else
{if((this__13285.root == null))
{return false;
} else
{if("\uFDD0'else")
{return !((this__13285.root.inode_lookup(0,cljs.core.hash.call(null,k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__13308 = null;
var G__13308__2 = (function (this_sym13286,k){
var this__13288 = this;
var this_sym13286__13289 = this;
var coll__13290 = this_sym13286__13289;
return coll__13290.cljs$core$ILookup$_lookup$arity$2(coll__13290,k);
});
var G__13308__3 = (function (this_sym13287,k,not_found){
var this__13288 = this;
var this_sym13287__13291 = this;
var coll__13292 = this_sym13287__13291;
return coll__13292.cljs$core$ILookup$_lookup$arity$3(coll__13292,k,not_found);
});
G__13308 = function(this_sym13287,k,not_found){
switch(arguments.length){
case 2:
return G__13308__2.call(this,this_sym13287,k);
case 3:
return G__13308__3.call(this,this_sym13287,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13308;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (this_sym13273,args13274){
var this__13293 = this;
return this_sym13273.call.apply(this_sym13273,[this_sym13273].concat(args13274.slice()));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__13294 = this;
var init__13295 = ((this__13294.has_nil_QMARK_)?f.call(null,init,null,this__13294.nil_val):init);
if(cljs.core.reduced_QMARK_.call(null,init__13295))
{return cljs.core.deref.call(null,init__13295);
} else
{if(!((this__13294.root == null)))
{return this__13294.root.kv_reduce(f,init__13295);
} else
{if("\uFDD0'else")
{return init__13295;
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__13296 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentHashMap.prototype.toString = (function (){
var this__13297 = this;
var this__13298 = this;
return cljs.core.pr_str.call(null,this__13298);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__13299 = this;
if((this__13299.cnt > 0))
{var s__13300 = ((!((this__13299.root == null)))?this__13299.root.inode_seq():null);
if(this__13299.has_nil_QMARK_)
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([null,this__13299.nil_val], true),s__13300);
} else
{return s__13300;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__13301 = this;
return this__13301.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__13302 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__13303 = this;
return (new cljs.core.PersistentHashMap(meta,this__13303.cnt,this__13303.root,this__13303.has_nil_QMARK_,this__13303.nil_val,this__13303.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__13304 = this;
return this__13304.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__13305 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,this__13305.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__13306 = this;
if((k == null))
{if(this__13306.has_nil_QMARK_)
{return (new cljs.core.PersistentHashMap(this__13306.meta,(this__13306.cnt - 1),this__13306.root,false,null,null));
} else
{return coll;
}
} else
{if((this__13306.root == null))
{return coll;
} else
{if("\uFDD0'else")
{var new_root__13307 = this__13306.root.inode_without(0,cljs.core.hash.call(null,k),k);
if((new_root__13307 === this__13306.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__13306.meta,(this__13306.cnt - 1),new_root__13307,this__13306.has_nil_QMARK_,this__13306.nil_val,null));
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
var len__13309 = ks.length;
var i__13310 = 0;
var out__13311 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i__13310 < len__13309))
{{
var G__13312 = (i__13310 + 1);
var G__13313 = cljs.core.assoc_BANG_.call(null,out__13311,(ks[i__13310]),(vs[i__13310]));
i__13310 = G__13312;
out__13311 = G__13313;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__13311);
}
break;
}
});

/**
* @constructor
*/
cljs.core.TransientHashMap = (function (edit,root,count,has_nil_QMARK_,nil_val){
this.edit = edit;
this.root = root;
this.count = count;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.cljs$lang$protocol_mask$partition1$ = 14;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientHashMap.cljs$lang$type = true;
cljs.core.TransientHashMap.cljs$lang$ctorPrSeq = (function (this__3834__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashMap");
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__13314 = this;
return tcoll.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__13315 = this;
return tcoll.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var this__13316 = this;
return tcoll.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__13317 = this;
return tcoll.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__13318 = this;
if((k == null))
{if(this__13318.has_nil_QMARK_)
{return this__13318.nil_val;
} else
{return null;
}
} else
{if((this__13318.root == null))
{return null;
} else
{return this__13318.root.inode_lookup(0,cljs.core.hash.call(null,k),k);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__13319 = this;
if((k == null))
{if(this__13319.has_nil_QMARK_)
{return this__13319.nil_val;
} else
{return not_found;
}
} else
{if((this__13319.root == null))
{return not_found;
} else
{return this__13319.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__13320 = this;
if(this__13320.edit)
{return this__13320.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var this__13321 = this;
var tcoll__13322 = this;
if(this__13321.edit)
{if((function (){var G__13323__13324 = o;
if(G__13323__13324)
{if((function (){var or__3824__auto____13325 = (G__13323__13324.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____13325)
{return or__3824__auto____13325;
} else
{return G__13323__13324.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__13323__13324.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__13323__13324);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__13323__13324);
}
})())
{return tcoll__13322.assoc_BANG_(cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__13326 = cljs.core.seq.call(null,o);
var tcoll__13327 = tcoll__13322;
while(true){
var temp__3971__auto____13328 = cljs.core.first.call(null,es__13326);
if(cljs.core.truth_(temp__3971__auto____13328))
{var e__13329 = temp__3971__auto____13328;
{
var G__13340 = cljs.core.next.call(null,es__13326);
var G__13341 = tcoll__13327.assoc_BANG_(cljs.core.key.call(null,e__13329),cljs.core.val.call(null,e__13329));
es__13326 = G__13340;
tcoll__13327 = G__13341;
continue;
}
} else
{return tcoll__13327;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var this__13330 = this;
var tcoll__13331 = this;
if(this__13330.edit)
{if((k == null))
{if((this__13330.nil_val === v))
{} else
{this__13330.nil_val = v;
}
if(this__13330.has_nil_QMARK_)
{} else
{this__13330.count = (this__13330.count + 1);
this__13330.has_nil_QMARK_ = true;
}
return tcoll__13331;
} else
{var added_leaf_QMARK___13332 = (new cljs.core.Box(false));
var node__13333 = (((this__13330.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__13330.root).inode_assoc_BANG_(this__13330.edit,0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___13332);
if((node__13333 === this__13330.root))
{} else
{this__13330.root = node__13333;
}
if(added_leaf_QMARK___13332.val)
{this__13330.count = (this__13330.count + 1);
} else
{}
return tcoll__13331;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var this__13334 = this;
var tcoll__13335 = this;
if(this__13334.edit)
{if((k == null))
{if(this__13334.has_nil_QMARK_)
{this__13334.has_nil_QMARK_ = false;
this__13334.nil_val = null;
this__13334.count = (this__13334.count - 1);
return tcoll__13335;
} else
{return tcoll__13335;
}
} else
{if((this__13334.root == null))
{return tcoll__13335;
} else
{var removed_leaf_QMARK___13336 = (new cljs.core.Box(false));
var node__13337 = this__13334.root.inode_without_BANG_(this__13334.edit,0,cljs.core.hash.call(null,k),k,removed_leaf_QMARK___13336);
if((node__13337 === this__13334.root))
{} else
{this__13334.root = node__13337;
}
if(cljs.core.truth_((removed_leaf_QMARK___13336[0])))
{this__13334.count = (this__13334.count - 1);
} else
{}
return tcoll__13335;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var this__13338 = this;
var tcoll__13339 = this;
if(this__13338.edit)
{this__13338.edit = null;
return (new cljs.core.PersistentHashMap(null,this__13338.count,this__13338.root,this__13338.has_nil_QMARK_,this__13338.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientHashMap;
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t__13344 = node;
var stack__13345 = stack;
while(true){
if(!((t__13344 == null)))
{{
var G__13346 = ((ascending_QMARK_)?t__13344.left:t__13344.right);
var G__13347 = cljs.core.conj.call(null,stack__13345,t__13344);
t__13344 = G__13346;
stack__13345 = G__13347;
continue;
}
} else
{return stack__13345;
}
break;
}
});

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
this.cljs$lang$protocol_mask$partition0$ = 31850570;
})
cljs.core.PersistentTreeMapSeq.cljs$lang$type = true;
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrSeq = (function (this__3834__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMapSeq");
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__13348 = this;
var h__3675__auto____13349 = this__13348.__hash;
if(!((h__3675__auto____13349 == null)))
{return h__3675__auto____13349;
} else
{var h__3675__auto____13350 = cljs.core.hash_coll.call(null,coll);
this__13348.__hash = h__3675__auto____13350;
return h__3675__auto____13350;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__13351 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var this__13352 = this;
var this__13353 = this;
return cljs.core.pr_str.call(null,this__13353);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__13354 = this;
return this$;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__13355 = this;
if((this__13355.cnt < 0))
{return (cljs.core.count.call(null,cljs.core.next.call(null,coll)) + 1);
} else
{return this__13355.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this__13356 = this;
return cljs.core.peek.call(null,this__13356.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this__13357 = this;
var t__13358 = cljs.core.first.call(null,this__13357.stack);
var next_stack__13359 = cljs.core.tree_map_seq_push.call(null,((this__13357.ascending_QMARK_)?t__13358.right:t__13358.left),cljs.core.next.call(null,this__13357.stack),this__13357.ascending_QMARK_);
if(!((next_stack__13359 == null)))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack__13359,this__13357.ascending_QMARK_,(this__13357.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__13360 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__13361 = this;
return (new cljs.core.PersistentTreeMapSeq(meta,this__13361.stack,this__13361.ascending_QMARK_,this__13361.cnt,this__13361.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__13362 = this;
return this__13362.meta;
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
{if((function (){var and__3822__auto____13364 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right);
if(and__3822__auto____13364)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right.left);
} else
{return and__3822__auto____13364;
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
{if((function (){var and__3822__auto____13366 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left);
if(and__3822__auto____13366)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left.right);
} else
{return and__3822__auto____13366;
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
var init__13370 = f.call(null,init,node.key,node.val);
if(cljs.core.reduced_QMARK_.call(null,init__13370))
{return cljs.core.deref.call(null,init__13370);
} else
{var init__13371 = ((!((node.left == null)))?tree_map_kv_reduce.call(null,node.left,f,init__13370):init__13370);
if(cljs.core.reduced_QMARK_.call(null,init__13371))
{return cljs.core.deref.call(null,init__13371);
} else
{var init__13372 = ((!((node.right == null)))?tree_map_kv_reduce.call(null,node.right,f,init__13371):init__13371);
if(cljs.core.reduced_QMARK_.call(null,init__13372))
{return cljs.core.deref.call(null,init__13372);
} else
{return init__13372;
}
}
}
});

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
cljs.core.BlackNode.cljs$lang$ctorPrSeq = (function (this__3834__auto__){
return cljs.core.list.call(null,"cljs.core/BlackNode");
});
cljs.core.BlackNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__13375 = this;
var h__3675__auto____13376 = this__13375.__hash;
if(!((h__3675__auto____13376 == null)))
{return h__3675__auto____13376;
} else
{var h__3675__auto____13377 = cljs.core.hash_coll.call(null,coll);
this__13375.__hash = h__3675__auto____13377;
return h__3675__auto____13377;
}
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__13378 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__13379 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__13380 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__13380.key,this__13380.val], true),k,v);
});
cljs.core.BlackNode.prototype.call = (function() {
var G__13428 = null;
var G__13428__2 = (function (this_sym13381,k){
var this__13383 = this;
var this_sym13381__13384 = this;
var node__13385 = this_sym13381__13384;
return node__13385.cljs$core$ILookup$_lookup$arity$2(node__13385,k);
});
var G__13428__3 = (function (this_sym13382,k,not_found){
var this__13383 = this;
var this_sym13382__13386 = this;
var node__13387 = this_sym13382__13386;
return node__13387.cljs$core$ILookup$_lookup$arity$3(node__13387,k,not_found);
});
G__13428 = function(this_sym13382,k,not_found){
switch(arguments.length){
case 2:
return G__13428__2.call(this,this_sym13382,k);
case 3:
return G__13428__3.call(this,this_sym13382,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13428;
})()
;
cljs.core.BlackNode.prototype.apply = (function (this_sym13373,args13374){
var this__13388 = this;
return this_sym13373.call.apply(this_sym13373,[this_sym13373].concat(args13374.slice()));
});
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__13389 = this;
return cljs.core.PersistentVector.fromArray([this__13389.key,this__13389.val,o], true);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__13390 = this;
return this__13390.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__13391 = this;
return this__13391.val;
});
cljs.core.BlackNode.prototype.add_right = (function (ins){
var this__13392 = this;
var node__13393 = this;
return ins.balance_right(node__13393);
});
cljs.core.BlackNode.prototype.redden = (function (){
var this__13394 = this;
var node__13395 = this;
return (new cljs.core.RedNode(this__13394.key,this__13394.val,this__13394.left,this__13394.right,null));
});
cljs.core.BlackNode.prototype.remove_right = (function (del){
var this__13396 = this;
var node__13397 = this;
return cljs.core.balance_right_del.call(null,this__13396.key,this__13396.val,this__13396.left,del);
});
cljs.core.BlackNode.prototype.replace = (function (key,val,left,right){
var this__13398 = this;
var node__13399 = this;
return (new cljs.core.BlackNode(key,val,left,right,null));
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var this__13400 = this;
var node__13401 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__13401,f,init);
});
cljs.core.BlackNode.prototype.remove_left = (function (del){
var this__13402 = this;
var node__13403 = this;
return cljs.core.balance_left_del.call(null,this__13402.key,this__13402.val,del,this__13402.right);
});
cljs.core.BlackNode.prototype.add_left = (function (ins){
var this__13404 = this;
var node__13405 = this;
return ins.balance_left(node__13405);
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){
var this__13406 = this;
var node__13407 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node__13407,parent.right,null));
});
cljs.core.BlackNode.prototype.toString = (function() {
var G__13429 = null;
var G__13429__0 = (function (){
var this__13408 = this;
var this__13410 = this;
return cljs.core.pr_str.call(null,this__13410);
});
G__13429 = function(){
switch(arguments.length){
case 0:
return G__13429__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13429;
})()
;
cljs.core.BlackNode.prototype.balance_right = (function (parent){
var this__13411 = this;
var node__13412 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__13412,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){
var this__13413 = this;
var node__13414 = this;
return node__13414;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__13415 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__13416 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__13417 = this;
return cljs.core.list.call(null,this__13417.key,this__13417.val);
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__13418 = this;
return 2;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__13419 = this;
return this__13419.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__13420 = this;
return cljs.core.PersistentVector.fromArray([this__13420.key], true);
});
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__13421 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__13421.key,this__13421.val], true),n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__13422 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__13423 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__13423.key,this__13423.val], true),meta);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__13424 = this;
return null;
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__13425 = this;
if((n === 0))
{return this__13425.key;
} else
{if((n === 1))
{return this__13425.val;
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
var this__13426 = this;
if((n === 0))
{return this__13426.key;
} else
{if((n === 1))
{return this__13426.val;
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
var this__13427 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.BlackNode;

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
cljs.core.RedNode.cljs$lang$ctorPrSeq = (function (this__3834__auto__){
return cljs.core.list.call(null,"cljs.core/RedNode");
});
cljs.core.RedNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__13432 = this;
var h__3675__auto____13433 = this__13432.__hash;
if(!((h__3675__auto____13433 == null)))
{return h__3675__auto____13433;
} else
{var h__3675__auto____13434 = cljs.core.hash_coll.call(null,coll);
this__13432.__hash = h__3675__auto____13434;
return h__3675__auto____13434;
}
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__13435 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__13436 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__13437 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__13437.key,this__13437.val], true),k,v);
});
cljs.core.RedNode.prototype.call = (function() {
var G__13485 = null;
var G__13485__2 = (function (this_sym13438,k){
var this__13440 = this;
var this_sym13438__13441 = this;
var node__13442 = this_sym13438__13441;
return node__13442.cljs$core$ILookup$_lookup$arity$2(node__13442,k);
});
var G__13485__3 = (function (this_sym13439,k,not_found){
var this__13440 = this;
var this_sym13439__13443 = this;
var node__13444 = this_sym13439__13443;
return node__13444.cljs$core$ILookup$_lookup$arity$3(node__13444,k,not_found);
});
G__13485 = function(this_sym13439,k,not_found){
switch(arguments.length){
case 2:
return G__13485__2.call(this,this_sym13439,k);
case 3:
return G__13485__3.call(this,this_sym13439,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13485;
})()
;
cljs.core.RedNode.prototype.apply = (function (this_sym13430,args13431){
var this__13445 = this;
return this_sym13430.call.apply(this_sym13430,[this_sym13430].concat(args13431.slice()));
});
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__13446 = this;
return cljs.core.PersistentVector.fromArray([this__13446.key,this__13446.val,o], true);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__13447 = this;
return this__13447.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__13448 = this;
return this__13448.val;
});
cljs.core.RedNode.prototype.add_right = (function (ins){
var this__13449 = this;
var node__13450 = this;
return (new cljs.core.RedNode(this__13449.key,this__13449.val,this__13449.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){
var this__13451 = this;
var node__13452 = this;
throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.remove_right = (function (del){
var this__13453 = this;
var node__13454 = this;
return (new cljs.core.RedNode(this__13453.key,this__13453.val,this__13453.left,del,null));
});
cljs.core.RedNode.prototype.replace = (function (key,val,left,right){
var this__13455 = this;
var node__13456 = this;
return (new cljs.core.RedNode(key,val,left,right,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var this__13457 = this;
var node__13458 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__13458,f,init);
});
cljs.core.RedNode.prototype.remove_left = (function (del){
var this__13459 = this;
var node__13460 = this;
return (new cljs.core.RedNode(this__13459.key,this__13459.val,del,this__13459.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){
var this__13461 = this;
var node__13462 = this;
return (new cljs.core.RedNode(this__13461.key,this__13461.val,ins,this__13461.right,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){
var this__13463 = this;
var node__13464 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__13463.left))
{return (new cljs.core.RedNode(this__13463.key,this__13463.val,this__13463.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,this__13463.right,parent.right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__13463.right))
{return (new cljs.core.RedNode(this__13463.right.key,this__13463.right.val,(new cljs.core.BlackNode(this__13463.key,this__13463.val,this__13463.left,this__13463.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,this__13463.right.right,parent.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,node__13464,parent.right,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.toString = (function() {
var G__13486 = null;
var G__13486__0 = (function (){
var this__13465 = this;
var this__13467 = this;
return cljs.core.pr_str.call(null,this__13467);
});
G__13486 = function(){
switch(arguments.length){
case 0:
return G__13486__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13486;
})()
;
cljs.core.RedNode.prototype.balance_right = (function (parent){
var this__13468 = this;
var node__13469 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__13468.right))
{return (new cljs.core.RedNode(this__13468.key,this__13468.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__13468.left,null)),this__13468.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__13468.left))
{return (new cljs.core.RedNode(this__13468.left.key,this__13468.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__13468.left.left,null)),(new cljs.core.BlackNode(this__13468.key,this__13468.val,this__13468.left.right,this__13468.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__13469,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.blacken = (function (){
var this__13470 = this;
var node__13471 = this;
return (new cljs.core.BlackNode(this__13470.key,this__13470.val,this__13470.left,this__13470.right,null));
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__13472 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__13473 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__13474 = this;
return cljs.core.list.call(null,this__13474.key,this__13474.val);
});
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__13475 = this;
return 2;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__13476 = this;
return this__13476.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__13477 = this;
return cljs.core.PersistentVector.fromArray([this__13477.key], true);
});
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__13478 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__13478.key,this__13478.val], true),n,v);
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__13479 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__13480 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__13480.key,this__13480.val], true),meta);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__13481 = this;
return null;
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__13482 = this;
if((n === 0))
{return this__13482.key;
} else
{if((n === 1))
{return this__13482.val;
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
var this__13483 = this;
if((n === 0))
{return this__13483.key;
} else
{if((n === 1))
{return this__13483.val;
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
var this__13484 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.RedNode;
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c__13490 = comp.call(null,k,tree.key);
if((c__13490 === 0))
{(found[0] = tree);
return null;
} else
{if((c__13490 < 0))
{var ins__13491 = tree_map_add.call(null,comp,tree.left,k,v,found);
if(!((ins__13491 == null)))
{return tree.add_left(ins__13491);
} else
{return null;
}
} else
{if("\uFDD0'else")
{var ins__13492 = tree_map_add.call(null,comp,tree.right,k,v,found);
if(!((ins__13492 == null)))
{return tree.add_right(ins__13492);
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
{var app__13495 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__13495))
{return (new cljs.core.RedNode(app__13495.key,app__13495.val,(new cljs.core.RedNode(left.key,left.val,left.left,app__13495.left,null)),(new cljs.core.RedNode(right.key,right.val,app__13495.right,right.right,null)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app__13495,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append.call(null,left.right,right),null));
}
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append.call(null,left,right.left),right.right,null));
} else
{if("\uFDD0'else")
{var app__13496 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__13496))
{return (new cljs.core.RedNode(app__13496.key,app__13496.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app__13496.left,null)),(new cljs.core.BlackNode(right.key,right.val,app__13496.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del.call(null,left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app__13496,right.right,null)));
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
{var c__13502 = comp.call(null,k,tree.key);
if((c__13502 === 0))
{(found[0] = tree);
return cljs.core.tree_map_append.call(null,tree.left,tree.right);
} else
{if((c__13502 < 0))
{var del__13503 = tree_map_remove.call(null,comp,tree.left,k,found);
if((function (){var or__3824__auto____13504 = !((del__13503 == null));
if(or__3824__auto____13504)
{return or__3824__auto____13504;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.left))
{return cljs.core.balance_left_del.call(null,tree.key,tree.val,del__13503,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del__13503,tree.right,null));
}
} else
{return null;
}
} else
{if("\uFDD0'else")
{var del__13505 = tree_map_remove.call(null,comp,tree.right,k,found);
if((function (){var or__3824__auto____13506 = !((del__13505 == null));
if(or__3824__auto____13506)
{return or__3824__auto____13506;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.right))
{return cljs.core.balance_right_del.call(null,tree.key,tree.val,tree.left,del__13505);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del__13505,null));
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
var tk__13509 = tree.key;
var c__13510 = comp.call(null,k,tk__13509);
if((c__13510 === 0))
{return tree.replace(tk__13509,v,tree.left,tree.right);
} else
{if((c__13510 < 0))
{return tree.replace(tk__13509,tree.val,tree_map_replace.call(null,comp,tree.left,k,v),tree.right);
} else
{if("\uFDD0'else")
{return tree.replace(tk__13509,tree.val,tree.left,tree_map_replace.call(null,comp,tree.right,k,v));
} else
{return null;
}
}
}
});

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
cljs.core.PersistentTreeMap.cljs$lang$ctorPrSeq = (function (this__3834__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMap");
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__13513 = this;
var h__3675__auto____13514 = this__13513.__hash;
if(!((h__3675__auto____13514 == null)))
{return h__3675__auto____13514;
} else
{var h__3675__auto____13515 = cljs.core.hash_imap.call(null,coll);
this__13513.__hash = h__3675__auto____13515;
return h__3675__auto____13515;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__13516 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__13517 = this;
var n__13518 = coll.entry_at(k);
if(!((n__13518 == null)))
{return n__13518.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__13519 = this;
var found__13520 = [null];
var t__13521 = cljs.core.tree_map_add.call(null,this__13519.comp,this__13519.tree,k,v,found__13520);
if((t__13521 == null))
{var found_node__13522 = cljs.core.nth.call(null,found__13520,0);
if(cljs.core._EQ_.call(null,v,found_node__13522.val))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__13519.comp,cljs.core.tree_map_replace.call(null,this__13519.comp,this__13519.tree,k,v),this__13519.cnt,this__13519.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__13519.comp,t__13521.blacken(),(this__13519.cnt + 1),this__13519.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__13523 = this;
return !((coll.entry_at(k) == null));
});
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__13557 = null;
var G__13557__2 = (function (this_sym13524,k){
var this__13526 = this;
var this_sym13524__13527 = this;
var coll__13528 = this_sym13524__13527;
return coll__13528.cljs$core$ILookup$_lookup$arity$2(coll__13528,k);
});
var G__13557__3 = (function (this_sym13525,k,not_found){
var this__13526 = this;
var this_sym13525__13529 = this;
var coll__13530 = this_sym13525__13529;
return coll__13530.cljs$core$ILookup$_lookup$arity$3(coll__13530,k,not_found);
});
G__13557 = function(this_sym13525,k,not_found){
switch(arguments.length){
case 2:
return G__13557__2.call(this,this_sym13525,k);
case 3:
return G__13557__3.call(this,this_sym13525,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13557;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (this_sym13511,args13512){
var this__13531 = this;
return this_sym13511.call.apply(this_sym13511,[this_sym13511].concat(args13512.slice()));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__13532 = this;
if(!((this__13532.tree == null)))
{return cljs.core.tree_map_kv_reduce.call(null,this__13532.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__13533 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__13534 = this;
if((this__13534.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__13534.tree,false,this__13534.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){
var this__13535 = this;
var this__13536 = this;
return cljs.core.pr_str.call(null,this__13536);
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var this__13537 = this;
var coll__13538 = this;
var t__13539 = this__13537.tree;
while(true){
if(!((t__13539 == null)))
{var c__13540 = this__13537.comp.call(null,k,t__13539.key);
if((c__13540 === 0))
{return t__13539;
} else
{if((c__13540 < 0))
{{
var G__13558 = t__13539.left;
t__13539 = G__13558;
continue;
}
} else
{if("\uFDD0'else")
{{
var G__13559 = t__13539.right;
t__13539 = G__13559;
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
var this__13541 = this;
if((this__13541.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__13541.tree,ascending_QMARK_,this__13541.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__13542 = this;
if((this__13542.cnt > 0))
{var stack__13543 = null;
var t__13544 = this__13542.tree;
while(true){
if(!((t__13544 == null)))
{var c__13545 = this__13542.comp.call(null,k,t__13544.key);
if((c__13545 === 0))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.call(null,stack__13543,t__13544),ascending_QMARK_,-1,null));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c__13545 < 0))
{{
var G__13560 = cljs.core.conj.call(null,stack__13543,t__13544);
var G__13561 = t__13544.left;
stack__13543 = G__13560;
t__13544 = G__13561;
continue;
}
} else
{{
var G__13562 = stack__13543;
var G__13563 = t__13544.right;
stack__13543 = G__13562;
t__13544 = G__13563;
continue;
}
}
} else
{if("\uFDD0'else")
{if((c__13545 > 0))
{{
var G__13564 = cljs.core.conj.call(null,stack__13543,t__13544);
var G__13565 = t__13544.right;
stack__13543 = G__13564;
t__13544 = G__13565;
continue;
}
} else
{{
var G__13566 = stack__13543;
var G__13567 = t__13544.left;
stack__13543 = G__13566;
t__13544 = G__13567;
continue;
}
}
} else
{return null;
}
}
}
} else
{if((stack__13543 == null))
{return (new cljs.core.PersistentTreeMapSeq(null,stack__13543,ascending_QMARK_,-1,null));
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
var this__13546 = this;
return cljs.core.key.call(null,entry);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__13547 = this;
return this__13547.comp;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__13548 = this;
if((this__13548.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__13548.tree,true,this__13548.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__13549 = this;
return this__13549.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__13550 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__13551 = this;
return (new cljs.core.PersistentTreeMap(this__13551.comp,this__13551.tree,this__13551.cnt,meta,this__13551.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__13552 = this;
return this__13552.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__13553 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeMap.EMPTY,this__13553.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__13554 = this;
var found__13555 = [null];
var t__13556 = cljs.core.tree_map_remove.call(null,this__13554.comp,this__13554.tree,k,found__13555);
if((t__13556 == null))
{if((cljs.core.nth.call(null,found__13555,0) == null))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__13554.comp,null,0,this__13554.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__13554.comp,t__13556.blacken(),(this__13554.cnt - 1),this__13554.meta,null));
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
var in__13570 = cljs.core.seq.call(null,keyvals);
var out__13571 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if(in__13570)
{{
var G__13572 = cljs.core.nnext.call(null,in__13570);
var G__13573 = cljs.core.assoc_BANG_.call(null,out__13571,cljs.core.first.call(null,in__13570),cljs.core.second.call(null,in__13570));
in__13570 = G__13572;
out__13571 = G__13573;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__13571);
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
hash_map.cljs$lang$applyTo = (function (arglist__13574){
var keyvals = cljs.core.seq(arglist__13574);;
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
array_map.cljs$lang$applyTo = (function (arglist__13575){
var keyvals = cljs.core.seq(arglist__13575);;
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
var ks__13579 = [];
var obj__13580 = {};
var kvs__13581 = cljs.core.seq.call(null,keyvals);
while(true){
if(kvs__13581)
{ks__13579.push(cljs.core.first.call(null,kvs__13581));
(obj__13580[cljs.core.first.call(null,kvs__13581)] = cljs.core.second.call(null,kvs__13581));
{
var G__13582 = cljs.core.nnext.call(null,kvs__13581);
kvs__13581 = G__13582;
continue;
}
} else
{return cljs.core.ObjMap.fromObject.call(null,ks__13579,obj__13580);
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
obj_map.cljs$lang$applyTo = (function (arglist__13583){
var keyvals = cljs.core.seq(arglist__13583);;
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
var in__13586 = cljs.core.seq.call(null,keyvals);
var out__13587 = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(in__13586)
{{
var G__13588 = cljs.core.nnext.call(null,in__13586);
var G__13589 = cljs.core.assoc.call(null,out__13587,cljs.core.first.call(null,in__13586),cljs.core.second.call(null,in__13586));
in__13586 = G__13588;
out__13587 = G__13589;
continue;
}
} else
{return out__13587;
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
sorted_map.cljs$lang$applyTo = (function (arglist__13590){
var keyvals = cljs.core.seq(arglist__13590);;
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
var in__13593 = cljs.core.seq.call(null,keyvals);
var out__13594 = (new cljs.core.PersistentTreeMap(comparator,null,0,null,0));
while(true){
if(in__13593)
{{
var G__13595 = cljs.core.nnext.call(null,in__13593);
var G__13596 = cljs.core.assoc.call(null,out__13594,cljs.core.first.call(null,in__13593),cljs.core.second.call(null,in__13593));
in__13593 = G__13595;
out__13594 = G__13596;
continue;
}
} else
{return out__13594;
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
sorted_map_by.cljs$lang$applyTo = (function (arglist__13597){
var comparator = cljs.core.first(arglist__13597);
var keyvals = cljs.core.rest(arglist__13597);
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
{return cljs.core.reduce.call(null,(function (p1__13598_SHARP_,p2__13599_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3824__auto____13601 = p1__13598_SHARP_;
if(cljs.core.truth_(or__3824__auto____13601))
{return or__3824__auto____13601;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),p2__13599_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__13602){
var maps = cljs.core.seq(arglist__13602);;
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
{var merge_entry__13610 = (function (m,e){
var k__13608 = cljs.core.first.call(null,e);
var v__13609 = cljs.core.second.call(null,e);
if(cljs.core.contains_QMARK_.call(null,m,k__13608))
{return cljs.core.assoc.call(null,m,k__13608,f.call(null,cljs.core._lookup.call(null,m,k__13608,null),v__13609));
} else
{return cljs.core.assoc.call(null,m,k__13608,v__13609);
}
});
var merge2__13612 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__13610,(function (){var or__3824__auto____13611 = m1;
if(cljs.core.truth_(or__3824__auto____13611))
{return or__3824__auto____13611;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge2__13612,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__13613){
var f = cljs.core.first(arglist__13613);
var maps = cljs.core.rest(arglist__13613);
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
var ret__13618 = cljs.core.ObjMap.EMPTY;
var keys__13619 = cljs.core.seq.call(null,keyseq);
while(true){
if(keys__13619)
{var key__13620 = cljs.core.first.call(null,keys__13619);
var entry__13621 = cljs.core._lookup.call(null,map,key__13620,"\uFDD0'cljs.core/not-found");
{
var G__13622 = ((cljs.core.not_EQ_.call(null,entry__13621,"\uFDD0'cljs.core/not-found"))?cljs.core.assoc.call(null,ret__13618,key__13620,entry__13621):ret__13618);
var G__13623 = cljs.core.next.call(null,keys__13619);
ret__13618 = G__13622;
keys__13619 = G__13623;
continue;
}
} else
{return ret__13618;
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentHashSet = (function (meta,hash_map,__hash){
this.meta = meta;
this.hash_map = hash_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 15077647;
})
cljs.core.PersistentHashSet.cljs$lang$type = true;
cljs.core.PersistentHashSet.cljs$lang$ctorPrSeq = (function (this__3834__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashSet");
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__13627 = this;
return (new cljs.core.TransientHashSet(cljs.core.transient$.call(null,this__13627.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__13628 = this;
var h__3675__auto____13629 = this__13628.__hash;
if(!((h__3675__auto____13629 == null)))
{return h__3675__auto____13629;
} else
{var h__3675__auto____13630 = cljs.core.hash_iset.call(null,coll);
this__13628.__hash = h__3675__auto____13630;
return h__3675__auto____13630;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__13631 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__13632 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__13632.hash_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__13653 = null;
var G__13653__2 = (function (this_sym13633,k){
var this__13635 = this;
var this_sym13633__13636 = this;
var coll__13637 = this_sym13633__13636;
return coll__13637.cljs$core$ILookup$_lookup$arity$2(coll__13637,k);
});
var G__13653__3 = (function (this_sym13634,k,not_found){
var this__13635 = this;
var this_sym13634__13638 = this;
var coll__13639 = this_sym13634__13638;
return coll__13639.cljs$core$ILookup$_lookup$arity$3(coll__13639,k,not_found);
});
G__13653 = function(this_sym13634,k,not_found){
switch(arguments.length){
case 2:
return G__13653__2.call(this,this_sym13634,k);
case 3:
return G__13653__3.call(this,this_sym13634,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13653;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (this_sym13625,args13626){
var this__13640 = this;
return this_sym13625.call.apply(this_sym13625,[this_sym13625].concat(args13626.slice()));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__13641 = this;
return (new cljs.core.PersistentHashSet(this__13641.meta,cljs.core.assoc.call(null,this__13641.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.toString = (function (){
var this__13642 = this;
var this__13643 = this;
return cljs.core.pr_str.call(null,this__13643);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__13644 = this;
return cljs.core.keys.call(null,this__13644.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__13645 = this;
return (new cljs.core.PersistentHashSet(this__13645.meta,cljs.core.dissoc.call(null,this__13645.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__13646 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__13647 = this;
var and__3822__auto____13648 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____13648)
{var and__3822__auto____13649 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____13649)
{return cljs.core.every_QMARK_.call(null,(function (p1__13624_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__13624_SHARP_);
}),other);
} else
{return and__3822__auto____13649;
}
} else
{return and__3822__auto____13648;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__13650 = this;
return (new cljs.core.PersistentHashSet(meta,this__13650.hash_map,this__13650.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__13651 = this;
return this__13651.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__13652 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentHashSet.EMPTY,this__13652.meta);
});
cljs.core.PersistentHashSet;
cljs.core.PersistentHashSet.EMPTY = (new cljs.core.PersistentHashSet(null,cljs.core.hash_map.call(null),0));
cljs.core.PersistentHashSet.fromArray = (function (items){
var len__13654 = cljs.core.count.call(null,items);
var i__13655 = 0;
var out__13656 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if((i__13655 < len__13654))
{{
var G__13657 = (i__13655 + 1);
var G__13658 = cljs.core.conj_BANG_.call(null,out__13656,(items[i__13655]));
i__13655 = G__13657;
out__13656 = G__13658;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__13656);
}
break;
}
});

/**
* @constructor
*/
cljs.core.TransientHashSet = (function (transient_map){
this.transient_map = transient_map;
this.cljs$lang$protocol_mask$partition0$ = 259;
this.cljs$lang$protocol_mask$partition1$ = 34;
})
cljs.core.TransientHashSet.cljs$lang$type = true;
cljs.core.TransientHashSet.cljs$lang$ctorPrSeq = (function (this__3834__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashSet");
});
cljs.core.TransientHashSet.prototype.call = (function() {
var G__13676 = null;
var G__13676__2 = (function (this_sym13662,k){
var this__13664 = this;
var this_sym13662__13665 = this;
var tcoll__13666 = this_sym13662__13665;
if((cljs.core._lookup.call(null,this__13664.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__13676__3 = (function (this_sym13663,k,not_found){
var this__13664 = this;
var this_sym13663__13667 = this;
var tcoll__13668 = this_sym13663__13667;
if((cljs.core._lookup.call(null,this__13664.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__13676 = function(this_sym13663,k,not_found){
switch(arguments.length){
case 2:
return G__13676__2.call(this,this_sym13663,k);
case 3:
return G__13676__3.call(this,this_sym13663,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13676;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (this_sym13660,args13661){
var this__13669 = this;
return this_sym13660.call.apply(this_sym13660,[this_sym13660].concat(args13661.slice()));
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var this__13670 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var this__13671 = this;
if((cljs.core._lookup.call(null,this__13671.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__13672 = this;
return cljs.core.count.call(null,this__13672.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var this__13673 = this;
this__13673.transient_map = cljs.core.dissoc_BANG_.call(null,this__13673.transient_map,v);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__13674 = this;
this__13674.transient_map = cljs.core.assoc_BANG_.call(null,this__13674.transient_map,o,null);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__13675 = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_.call(null,this__13675.transient_map),null));
});
cljs.core.TransientHashSet;

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
cljs.core.PersistentTreeSet.cljs$lang$ctorPrSeq = (function (this__3834__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeSet");
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__13679 = this;
var h__3675__auto____13680 = this__13679.__hash;
if(!((h__3675__auto____13680 == null)))
{return h__3675__auto____13680;
} else
{var h__3675__auto____13681 = cljs.core.hash_iset.call(null,coll);
this__13679.__hash = h__3675__auto____13681;
return h__3675__auto____13681;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__13682 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__13683 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__13683.tree_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__13709 = null;
var G__13709__2 = (function (this_sym13684,k){
var this__13686 = this;
var this_sym13684__13687 = this;
var coll__13688 = this_sym13684__13687;
return coll__13688.cljs$core$ILookup$_lookup$arity$2(coll__13688,k);
});
var G__13709__3 = (function (this_sym13685,k,not_found){
var this__13686 = this;
var this_sym13685__13689 = this;
var coll__13690 = this_sym13685__13689;
return coll__13690.cljs$core$ILookup$_lookup$arity$3(coll__13690,k,not_found);
});
G__13709 = function(this_sym13685,k,not_found){
switch(arguments.length){
case 2:
return G__13709__2.call(this,this_sym13685,k);
case 3:
return G__13709__3.call(this,this_sym13685,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13709;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (this_sym13677,args13678){
var this__13691 = this;
return this_sym13677.call.apply(this_sym13677,[this_sym13677].concat(args13678.slice()));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__13692 = this;
return (new cljs.core.PersistentTreeSet(this__13692.meta,cljs.core.assoc.call(null,this__13692.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__13693 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core.rseq.call(null,this__13693.tree_map));
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var this__13694 = this;
var this__13695 = this;
return cljs.core.pr_str.call(null,this__13695);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__13696 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq.call(null,this__13696.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__13697 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq_from.call(null,this__13697.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__13698 = this;
return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__13699 = this;
return cljs.core._comparator.call(null,this__13699.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__13700 = this;
return cljs.core.keys.call(null,this__13700.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__13701 = this;
return (new cljs.core.PersistentTreeSet(this__13701.meta,cljs.core.dissoc.call(null,this__13701.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__13702 = this;
return cljs.core.count.call(null,this__13702.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__13703 = this;
var and__3822__auto____13704 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____13704)
{var and__3822__auto____13705 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____13705)
{return cljs.core.every_QMARK_.call(null,(function (p1__13659_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__13659_SHARP_);
}),other);
} else
{return and__3822__auto____13705;
}
} else
{return and__3822__auto____13704;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__13706 = this;
return (new cljs.core.PersistentTreeSet(meta,this__13706.tree_map,this__13706.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__13707 = this;
return this__13707.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__13708 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeSet.EMPTY,this__13708.meta);
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
var G__13714__delegate = function (keys){
var in__13712 = cljs.core.seq.call(null,keys);
var out__13713 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if(cljs.core.seq.call(null,in__13712))
{{
var G__13715 = cljs.core.next.call(null,in__13712);
var G__13716 = cljs.core.conj_BANG_.call(null,out__13713,cljs.core.first.call(null,in__13712));
in__13712 = G__13715;
out__13713 = G__13716;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__13713);
}
break;
}
};
var G__13714 = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__13714__delegate.call(this, keys);
};
G__13714.cljs$lang$maxFixedArity = 0;
G__13714.cljs$lang$applyTo = (function (arglist__13717){
var keys = cljs.core.seq(arglist__13717);;
return G__13714__delegate(keys);
});
G__13714.cljs$lang$arity$variadic = G__13714__delegate;
return G__13714;
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
sorted_set.cljs$lang$applyTo = (function (arglist__13718){
var keys = cljs.core.seq(arglist__13718);;
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
sorted_set_by.cljs$lang$applyTo = (function (arglist__13720){
var comparator = cljs.core.first(arglist__13720);
var keys = cljs.core.rest(arglist__13720);
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
{var n__13726 = cljs.core.count.call(null,coll);
return cljs.core.reduce.call(null,(function (v,i){
var temp__3971__auto____13727 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));
if(cljs.core.truth_(temp__3971__auto____13727))
{var e__13728 = temp__3971__auto____13727;
return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__13728));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__13726,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__13719_SHARP_){
var temp__3971__auto____13729 = cljs.core.find.call(null,smap,p1__13719_SHARP_);
if(cljs.core.truth_(temp__3971__auto____13729))
{var e__13730 = temp__3971__auto____13729;
return cljs.core.second.call(null,e__13730);
} else
{return p1__13719_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__13760 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__13753,seen){
while(true){
var vec__13754__13755 = p__13753;
var f__13756 = cljs.core.nth.call(null,vec__13754__13755,0,null);
var xs__13757 = vec__13754__13755;
var temp__3974__auto____13758 = cljs.core.seq.call(null,xs__13757);
if(temp__3974__auto____13758)
{var s__13759 = temp__3974__auto____13758;
if(cljs.core.contains_QMARK_.call(null,seen,f__13756))
{{
var G__13761 = cljs.core.rest.call(null,s__13759);
var G__13762 = seen;
p__13753 = G__13761;
seen = G__13762;
continue;
}
} else
{return cljs.core.cons.call(null,f__13756,step.call(null,cljs.core.rest.call(null,s__13759),cljs.core.conj.call(null,seen,f__13756)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
}),null));
});
return step__13760.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});
cljs.core.butlast = (function butlast(s){
var ret__13765 = cljs.core.PersistentVector.EMPTY;
var s__13766 = s;
while(true){
if(cljs.core.next.call(null,s__13766))
{{
var G__13767 = cljs.core.conj.call(null,ret__13765,cljs.core.first.call(null,s__13766));
var G__13768 = cljs.core.next.call(null,s__13766);
ret__13765 = G__13767;
s__13766 = G__13768;
continue;
}
} else
{return cljs.core.seq.call(null,ret__13765);
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
{if((function (){var or__3824__auto____13771 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____13771)
{return or__3824__auto____13771;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__13772 = x.lastIndexOf("/");
if((i__13772 < 0))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__13772 + 1));
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
if((function (){var or__3824__auto____13775 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____13775)
{return or__3824__auto____13775;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__13776 = x.lastIndexOf("/");
if((i__13776 > -1))
{return cljs.core.subs.call(null,x,2,i__13776);
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
var map__13783 = cljs.core.ObjMap.EMPTY;
var ks__13784 = cljs.core.seq.call(null,keys);
var vs__13785 = cljs.core.seq.call(null,vals);
while(true){
if((function (){var and__3822__auto____13786 = ks__13784;
if(and__3822__auto____13786)
{return vs__13785;
} else
{return and__3822__auto____13786;
}
})())
{{
var G__13787 = cljs.core.assoc.call(null,map__13783,cljs.core.first.call(null,ks__13784),cljs.core.first.call(null,vs__13785));
var G__13788 = cljs.core.next.call(null,ks__13784);
var G__13789 = cljs.core.next.call(null,vs__13785);
map__13783 = G__13787;
ks__13784 = G__13788;
vs__13785 = G__13789;
continue;
}
} else
{return map__13783;
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
var G__13792__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13777_SHARP_,p2__13778_SHARP_){
return max_key.call(null,k,p1__13777_SHARP_,p2__13778_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__13792 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13792__delegate.call(this, k, x, y, more);
};
G__13792.cljs$lang$maxFixedArity = 3;
G__13792.cljs$lang$applyTo = (function (arglist__13793){
var k = cljs.core.first(arglist__13793);
var x = cljs.core.first(cljs.core.next(arglist__13793));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13793)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13793)));
return G__13792__delegate(k, x, y, more);
});
G__13792.cljs$lang$arity$variadic = G__13792__delegate;
return G__13792;
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
var G__13794__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13790_SHARP_,p2__13791_SHARP_){
return min_key.call(null,k,p1__13790_SHARP_,p2__13791_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__13794 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13794__delegate.call(this, k, x, y, more);
};
G__13794.cljs$lang$maxFixedArity = 3;
G__13794.cljs$lang$applyTo = (function (arglist__13795){
var k = cljs.core.first(arglist__13795);
var x = cljs.core.first(cljs.core.next(arglist__13795));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13795)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13795)));
return G__13794__delegate(k, x, y, more);
});
G__13794.cljs$lang$arity$variadic = G__13794__delegate;
return G__13794;
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
var temp__3974__auto____13798 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____13798)
{var s__13799 = temp__3974__auto____13798;
return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__13799),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__13799)));
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
var temp__3974__auto____13802 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____13802)
{var s__13803 = temp__3974__auto____13802;
if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__13803))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__13803),take_while.call(null,pred,cljs.core.rest.call(null,s__13803)));
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
var comp__13805 = cljs.core._comparator.call(null,sc);
return test.call(null,comp__13805.call(null,cljs.core._entry_key.call(null,sc,e),key),0);
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
var include__13817 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._GT_,cljs.core._GT__EQ_]).call(null,test)))
{var temp__3974__auto____13818 = cljs.core._sorted_seq_from.call(null,sc,key,true);
if(cljs.core.truth_(temp__3974__auto____13818))
{var vec__13819__13820 = temp__3974__auto____13818;
var e__13821 = cljs.core.nth.call(null,vec__13819__13820,0,null);
var s__13822 = vec__13819__13820;
if(cljs.core.truth_(include__13817.call(null,e__13821)))
{return s__13822;
} else
{return cljs.core.next.call(null,s__13822);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__13817,cljs.core._sorted_seq.call(null,sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____13823 = cljs.core._sorted_seq_from.call(null,sc,start_key,true);
if(cljs.core.truth_(temp__3974__auto____13823))
{var vec__13824__13825 = temp__3974__auto____13823;
var e__13826 = cljs.core.nth.call(null,vec__13824__13825,0,null);
var s__13827 = vec__13824__13825;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,start_test,start_key).call(null,e__13826))?s__13827:cljs.core.next.call(null,s__13827)));
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
var include__13839 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._LT_,cljs.core._LT__EQ_]).call(null,test)))
{var temp__3974__auto____13840 = cljs.core._sorted_seq_from.call(null,sc,key,false);
if(cljs.core.truth_(temp__3974__auto____13840))
{var vec__13841__13842 = temp__3974__auto____13840;
var e__13843 = cljs.core.nth.call(null,vec__13841__13842,0,null);
var s__13844 = vec__13841__13842;
if(cljs.core.truth_(include__13839.call(null,e__13843)))
{return s__13844;
} else
{return cljs.core.next.call(null,s__13844);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__13839,cljs.core._sorted_seq.call(null,sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____13845 = cljs.core._sorted_seq_from.call(null,sc,end_key,false);
if(cljs.core.truth_(temp__3974__auto____13845))
{var vec__13846__13847 = temp__3974__auto____13845;
var e__13848 = cljs.core.nth.call(null,vec__13846__13847,0,null);
var s__13849 = vec__13846__13847;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,end_test,end_key).call(null,e__13848))?s__13849:cljs.core.next.call(null,s__13849)));
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
cljs.core.Range.cljs$lang$ctorPrSeq = (function (this__3834__auto__){
return cljs.core.list.call(null,"cljs.core/Range");
});
cljs.core.Range.prototype.cljs$core$IHash$_hash$arity$1 = (function (rng){
var this__13850 = this;
var h__3675__auto____13851 = this__13850.__hash;
if(!((h__3675__auto____13851 == null)))
{return h__3675__auto____13851;
} else
{var h__3675__auto____13852 = cljs.core.hash_coll.call(null,rng);
this__13850.__hash = h__3675__auto____13852;
return h__3675__auto____13852;
}
});
cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){
var this__13853 = this;
if((this__13853.step > 0))
{if(((this__13853.start + this__13853.step) < this__13853.end))
{return (new cljs.core.Range(this__13853.meta,(this__13853.start + this__13853.step),this__13853.end,this__13853.step,null));
} else
{return null;
}
} else
{if(((this__13853.start + this__13853.step) > this__13853.end))
{return (new cljs.core.Range(this__13853.meta,(this__13853.start + this__13853.step),this__13853.end,this__13853.step,null));
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var this__13854 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.toString = (function (){
var this__13855 = this;
var this__13856 = this;
return cljs.core.pr_str.call(null,this__13856);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var this__13857 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){
var this__13858 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var this__13859 = this;
if((this__13859.step > 0))
{if((this__13859.start < this__13859.end))
{return rng;
} else
{return null;
}
} else
{if((this__13859.start > this__13859.end))
{return rng;
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var this__13860 = this;
if(cljs.core.not.call(null,rng.cljs$core$ISeqable$_seq$arity$1(rng)))
{return 0;
} else
{return Math.ceil(((this__13860.end - this__13860.start) / this__13860.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var this__13861 = this;
return this__13861.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var this__13862 = this;
if(!((rng.cljs$core$ISeqable$_seq$arity$1(rng) == null)))
{return (new cljs.core.Range(this__13862.meta,(this__13862.start + this__13862.step),this__13862.end,this__13862.step,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var this__13863 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta){
var this__13864 = this;
return (new cljs.core.Range(meta,this__13864.start,this__13864.end,this__13864.step,this__13864.__hash));
});
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var this__13865 = this;
return this__13865.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var this__13866 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__13866.start + (n * this__13866.step));
} else
{if((function (){var and__3822__auto____13867 = (this__13866.start > this__13866.end);
if(and__3822__auto____13867)
{return (this__13866.step === 0);
} else
{return and__3822__auto____13867;
}
})())
{return this__13866.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var this__13868 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__13868.start + (n * this__13868.step));
} else
{if((function (){var and__3822__auto____13869 = (this__13868.start > this__13868.end);
if(and__3822__auto____13869)
{return (this__13868.step === 0);
} else
{return and__3822__auto____13869;
}
})())
{return this__13868.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var this__13870 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13870.meta);
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
var temp__3974__auto____13873 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____13873)
{var s__13874 = temp__3974__auto____13873;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__13874),take_nth.call(null,n,cljs.core.drop.call(null,n,s__13874)));
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
var temp__3974__auto____13881 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____13881)
{var s__13882 = temp__3974__auto____13881;
var fst__13883 = cljs.core.first.call(null,s__13882);
var fv__13884 = f.call(null,fst__13883);
var run__13885 = cljs.core.cons.call(null,fst__13883,cljs.core.take_while.call(null,(function (p1__13875_SHARP_){
return cljs.core._EQ_.call(null,fv__13884,f.call(null,p1__13875_SHARP_));
}),cljs.core.next.call(null,s__13882)));
return cljs.core.cons.call(null,run__13885,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__13885),s__13882))));
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
var temp__3971__auto____13900 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____13900)
{var s__13901 = temp__3971__auto____13900;
return reductions.call(null,f,cljs.core.first.call(null,s__13901),cljs.core.rest.call(null,s__13901));
} else
{return cljs.core.list.call(null,f.call(null));
}
}),null));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____13902 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____13902)
{var s__13903 = temp__3974__auto____13902;
return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__13903)),cljs.core.rest.call(null,s__13903));
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
var G__13906 = null;
var G__13906__0 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__13906__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__13906__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__13906__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__13906__4 = (function() { 
var G__13907__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__13907 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13907__delegate.call(this, x, y, z, args);
};
G__13907.cljs$lang$maxFixedArity = 3;
G__13907.cljs$lang$applyTo = (function (arglist__13908){
var x = cljs.core.first(arglist__13908);
var y = cljs.core.first(cljs.core.next(arglist__13908));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13908)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13908)));
return G__13907__delegate(x, y, z, args);
});
G__13907.cljs$lang$arity$variadic = G__13907__delegate;
return G__13907;
})()
;
G__13906 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__13906__0.call(this);
case 1:
return G__13906__1.call(this,x);
case 2:
return G__13906__2.call(this,x,y);
case 3:
return G__13906__3.call(this,x,y,z);
default:
return G__13906__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__13906.cljs$lang$maxFixedArity = 3;
G__13906.cljs$lang$applyTo = G__13906__4.cljs$lang$applyTo;
return G__13906;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__13909 = null;
var G__13909__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__13909__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__13909__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__13909__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__13909__4 = (function() { 
var G__13910__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__13910 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13910__delegate.call(this, x, y, z, args);
};
G__13910.cljs$lang$maxFixedArity = 3;
G__13910.cljs$lang$applyTo = (function (arglist__13911){
var x = cljs.core.first(arglist__13911);
var y = cljs.core.first(cljs.core.next(arglist__13911));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13911)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13911)));
return G__13910__delegate(x, y, z, args);
});
G__13910.cljs$lang$arity$variadic = G__13910__delegate;
return G__13910;
})()
;
G__13909 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__13909__0.call(this);
case 1:
return G__13909__1.call(this,x);
case 2:
return G__13909__2.call(this,x,y);
case 3:
return G__13909__3.call(this,x,y,z);
default:
return G__13909__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__13909.cljs$lang$maxFixedArity = 3;
G__13909.cljs$lang$applyTo = G__13909__4.cljs$lang$applyTo;
return G__13909;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__13912 = null;
var G__13912__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__13912__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__13912__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__13912__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__13912__4 = (function() { 
var G__13913__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__13913 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13913__delegate.call(this, x, y, z, args);
};
G__13913.cljs$lang$maxFixedArity = 3;
G__13913.cljs$lang$applyTo = (function (arglist__13914){
var x = cljs.core.first(arglist__13914);
var y = cljs.core.first(cljs.core.next(arglist__13914));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13914)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13914)));
return G__13913__delegate(x, y, z, args);
});
G__13913.cljs$lang$arity$variadic = G__13913__delegate;
return G__13913;
})()
;
G__13912 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__13912__0.call(this);
case 1:
return G__13912__1.call(this,x);
case 2:
return G__13912__2.call(this,x,y);
case 3:
return G__13912__3.call(this,x,y,z);
default:
return G__13912__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__13912.cljs$lang$maxFixedArity = 3;
G__13912.cljs$lang$applyTo = G__13912__4.cljs$lang$applyTo;
return G__13912;
})()
});
var juxt__4 = (function() { 
var G__13915__delegate = function (f,g,h,fs){
var fs__13905 = cljs.core.list_STAR_.call(null,f,g,h,fs);
return (function() {
var G__13916 = null;
var G__13916__0 = (function (){
return cljs.core.reduce.call(null,(function (p1__13886_SHARP_,p2__13887_SHARP_){
return cljs.core.conj.call(null,p1__13886_SHARP_,p2__13887_SHARP_.call(null));
}),cljs.core.PersistentVector.EMPTY,fs__13905);
});
var G__13916__1 = (function (x){
return cljs.core.reduce.call(null,(function (p1__13888_SHARP_,p2__13889_SHARP_){
return cljs.core.conj.call(null,p1__13888_SHARP_,p2__13889_SHARP_.call(null,x));
}),cljs.core.PersistentVector.EMPTY,fs__13905);
});
var G__13916__2 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__13890_SHARP_,p2__13891_SHARP_){
return cljs.core.conj.call(null,p1__13890_SHARP_,p2__13891_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.EMPTY,fs__13905);
});
var G__13916__3 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__13892_SHARP_,p2__13893_SHARP_){
return cljs.core.conj.call(null,p1__13892_SHARP_,p2__13893_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.EMPTY,fs__13905);
});
var G__13916__4 = (function() { 
var G__13917__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__13894_SHARP_,p2__13895_SHARP_){
return cljs.core.conj.call(null,p1__13894_SHARP_,cljs.core.apply.call(null,p2__13895_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.EMPTY,fs__13905);
};
var G__13917 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13917__delegate.call(this, x, y, z, args);
};
G__13917.cljs$lang$maxFixedArity = 3;
G__13917.cljs$lang$applyTo = (function (arglist__13918){
var x = cljs.core.first(arglist__13918);
var y = cljs.core.first(cljs.core.next(arglist__13918));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13918)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13918)));
return G__13917__delegate(x, y, z, args);
});
G__13917.cljs$lang$arity$variadic = G__13917__delegate;
return G__13917;
})()
;
G__13916 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__13916__0.call(this);
case 1:
return G__13916__1.call(this,x);
case 2:
return G__13916__2.call(this,x,y);
case 3:
return G__13916__3.call(this,x,y,z);
default:
return G__13916__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__13916.cljs$lang$maxFixedArity = 3;
G__13916.cljs$lang$applyTo = G__13916__4.cljs$lang$applyTo;
return G__13916;
})()
};
var G__13915 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13915__delegate.call(this, f, g, h, fs);
};
G__13915.cljs$lang$maxFixedArity = 3;
G__13915.cljs$lang$applyTo = (function (arglist__13919){
var f = cljs.core.first(arglist__13919);
var g = cljs.core.first(cljs.core.next(arglist__13919));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13919)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13919)));
return G__13915__delegate(f, g, h, fs);
});
G__13915.cljs$lang$arity$variadic = G__13915__delegate;
return G__13915;
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
var G__13922 = cljs.core.next.call(null,coll);
coll = G__13922;
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
if(cljs.core.truth_((function (){var and__3822__auto____13921 = cljs.core.seq.call(null,coll);
if(and__3822__auto____13921)
{return (n > 0);
} else
{return and__3822__auto____13921;
}
})()))
{{
var G__13923 = (n - 1);
var G__13924 = cljs.core.next.call(null,coll);
n = G__13923;
coll = G__13924;
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
var matches__13926 = re.exec(s);
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__13926),s))
{if((cljs.core.count.call(null,matches__13926) === 1))
{return cljs.core.first.call(null,matches__13926);
} else
{return cljs.core.vec.call(null,matches__13926);
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
var matches__13928 = re.exec(s);
if((matches__13928 == null))
{return null;
} else
{if((cljs.core.count.call(null,matches__13928) === 1))
{return cljs.core.first.call(null,matches__13928);
} else
{return cljs.core.vec.call(null,matches__13928);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__13933 = cljs.core.re_find.call(null,re,s);
var match_idx__13934 = s.search(re);
var match_str__13935 = ((cljs.core.coll_QMARK_.call(null,match_data__13933))?cljs.core.first.call(null,match_data__13933):match_data__13933);
var post_match__13936 = cljs.core.subs.call(null,s,(match_idx__13934 + cljs.core.count.call(null,match_str__13935)));
if(cljs.core.truth_(match_data__13933))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__13933,re_seq.call(null,re,post_match__13936));
}),null));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__13943__13944 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___13945 = cljs.core.nth.call(null,vec__13943__13944,0,null);
var flags__13946 = cljs.core.nth.call(null,vec__13943__13944,1,null);
var pattern__13947 = cljs.core.nth.call(null,vec__13943__13944,2,null);
return (new RegExp(pattern__13947,flags__13946));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin], true),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep], true),cljs.core.map.call(null,(function (p1__13937_SHARP_){
return print_one.call(null,p1__13937_SHARP_,opts);
}),coll))),cljs.core.PersistentVector.fromArray([end], true));
});
cljs.core.string_print = (function string_print(x){
cljs.core._STAR_print_fn_STAR_.call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if((obj == null))
{return cljs.core.list.call(null,"nil");
} else
{if((void 0 === obj))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if("\uFDD0'else")
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3822__auto____13957 = cljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3822__auto____13957))
{var and__3822__auto____13961 = (function (){var G__13958__13959 = obj;
if(G__13958__13959)
{if((function (){var or__3824__auto____13960 = (G__13958__13959.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____13960)
{return or__3824__auto____13960;
} else
{return G__13958__13959.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__13958__13959.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__13958__13959);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__13958__13959);
}
})();
if(cljs.core.truth_(and__3822__auto____13961))
{return cljs.core.meta.call(null,obj);
} else
{return and__3822__auto____13961;
}
} else
{return and__3822__auto____13957;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"], true),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "], true)):null),(((function (){var and__3822__auto____13962 = !((obj == null));
if(and__3822__auto____13962)
{return obj.cljs$lang$type;
} else
{return and__3822__auto____13962;
}
})())?obj.cljs$lang$ctorPrSeq(obj):(((function (){var G__13963__13964 = obj;
if(G__13963__13964)
{if((function (){var or__3824__auto____13965 = (G__13963__13964.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3824__auto____13965)
{return or__3824__auto____13965;
} else
{return G__13963__13964.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__13963__13964.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__13963__13964);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__13963__13964);
}
})())?cljs.core._pr_seq.call(null,obj,opts):(cljs.core.truth_(cljs.core.regexp_QMARK_.call(null,obj))?cljs.core.list.call(null,"#\"",obj.source,"\""):(("\uFDD0'else")?cljs.core.list.call(null,"#<",[cljs.core.str(obj)].join(''),">"):null)))));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var sb__13985 = (new goog.string.StringBuffer());
var G__13986__13987 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,cljs.core.first.call(null,objs),opts));
if(G__13986__13987)
{var string__13988 = cljs.core.first.call(null,G__13986__13987);
var G__13986__13989 = G__13986__13987;
while(true){
sb__13985.append(string__13988);
var temp__3974__auto____13990 = cljs.core.next.call(null,G__13986__13989);
if(temp__3974__auto____13990)
{var G__13986__13991 = temp__3974__auto____13990;
{
var G__14004 = cljs.core.first.call(null,G__13986__13991);
var G__14005 = G__13986__13991;
string__13988 = G__14004;
G__13986__13989 = G__14005;
continue;
}
} else
{}
break;
}
} else
{}
var G__13992__13993 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));
if(G__13992__13993)
{var obj__13994 = cljs.core.first.call(null,G__13992__13993);
var G__13992__13995 = G__13992__13993;
while(true){
sb__13985.append(" ");
var G__13996__13997 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__13994,opts));
if(G__13996__13997)
{var string__13998 = cljs.core.first.call(null,G__13996__13997);
var G__13996__13999 = G__13996__13997;
while(true){
sb__13985.append(string__13998);
var temp__3974__auto____14000 = cljs.core.next.call(null,G__13996__13999);
if(temp__3974__auto____14000)
{var G__13996__14001 = temp__3974__auto____14000;
{
var G__14006 = cljs.core.first.call(null,G__13996__14001);
var G__14007 = G__13996__14001;
string__13998 = G__14006;
G__13996__13999 = G__14007;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____14002 = cljs.core.next.call(null,G__13992__13995);
if(temp__3974__auto____14002)
{var G__13992__14003 = temp__3974__auto____14002;
{
var G__14008 = cljs.core.first.call(null,G__13992__14003);
var G__14009 = G__13992__14003;
obj__13994 = G__14008;
G__13992__13995 = G__14009;
continue;
}
} else
{}
break;
}
} else
{}
return sb__13985;
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
return [cljs.core.str(cljs.core.pr_sb.call(null,objs,opts))].join('');
});
/**
* Same as pr-str-with-opts followed by (newline)
*/
cljs.core.prn_str_with_opts = (function prn_str_with_opts(objs,opts){
var sb__14011 = cljs.core.pr_sb.call(null,objs,opts);
sb__14011.append("\n");
return [cljs.core.str(sb__14011)].join('');
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var G__14030__14031 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,cljs.core.first.call(null,objs),opts));
if(G__14030__14031)
{var string__14032 = cljs.core.first.call(null,G__14030__14031);
var G__14030__14033 = G__14030__14031;
while(true){
cljs.core.string_print.call(null,string__14032);
var temp__3974__auto____14034 = cljs.core.next.call(null,G__14030__14033);
if(temp__3974__auto____14034)
{var G__14030__14035 = temp__3974__auto____14034;
{
var G__14048 = cljs.core.first.call(null,G__14030__14035);
var G__14049 = G__14030__14035;
string__14032 = G__14048;
G__14030__14033 = G__14049;
continue;
}
} else
{}
break;
}
} else
{}
var G__14036__14037 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));
if(G__14036__14037)
{var obj__14038 = cljs.core.first.call(null,G__14036__14037);
var G__14036__14039 = G__14036__14037;
while(true){
cljs.core.string_print.call(null," ");
var G__14040__14041 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14038,opts));
if(G__14040__14041)
{var string__14042 = cljs.core.first.call(null,G__14040__14041);
var G__14040__14043 = G__14040__14041;
while(true){
cljs.core.string_print.call(null,string__14042);
var temp__3974__auto____14044 = cljs.core.next.call(null,G__14040__14043);
if(temp__3974__auto____14044)
{var G__14040__14045 = temp__3974__auto____14044;
{
var G__14050 = cljs.core.first.call(null,G__14040__14045);
var G__14051 = G__14040__14045;
string__14042 = G__14050;
G__14040__14043 = G__14051;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____14046 = cljs.core.next.call(null,G__14036__14039);
if(temp__3974__auto____14046)
{var G__14036__14047 = temp__3974__auto____14046;
{
var G__14052 = cljs.core.first.call(null,G__14036__14047);
var G__14053 = G__14036__14047;
obj__14038 = G__14052;
G__14036__14039 = G__14053;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
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
pr_str.cljs$lang$applyTo = (function (arglist__14054){
var objs = cljs.core.seq(arglist__14054);;
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
prn_str.cljs$lang$applyTo = (function (arglist__14055){
var objs = cljs.core.seq(arglist__14055);;
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
pr.cljs$lang$applyTo = (function (arglist__14056){
var objs = cljs.core.seq(arglist__14056);;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__14057){
var objs = cljs.core.seq(arglist__14057);;
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
print_str.cljs$lang$applyTo = (function (arglist__14058){
var objs = cljs.core.seq(arglist__14058);;
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
println.cljs$lang$applyTo = (function (arglist__14059){
var objs = cljs.core.seq(arglist__14059);;
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
println_str.cljs$lang$applyTo = (function (arglist__14060){
var objs = cljs.core.seq(arglist__14060);;
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
prn.cljs$lang$applyTo = (function (arglist__14061){
var objs = cljs.core.seq(arglist__14061);;
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
printf.cljs$lang$applyTo = (function (arglist__14062){
var fmt = cljs.core.first(arglist__14062);
var args = cljs.core.rest(arglist__14062);
return printf__delegate(fmt, args);
});
printf.cljs$lang$arity$variadic = printf__delegate;
return printf;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__14063 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__14063,"{",", ","}",opts,coll);
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
var pr_pair__14064 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__14064,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__14065 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__14065,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,[cljs.core.str(":"),cljs.core.str((function (){var temp__3974__auto____14066 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____14066))
{var nspc__14067 = temp__3974__auto____14066;
return [cljs.core.str(nspc__14067),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str((function (){var temp__3974__auto____14068 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____14068))
{var nspc__14069 = temp__3974__auto____14068;
return [cljs.core.str(nspc__14069),cljs.core.str("/")].join('');
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
var pr_pair__14070 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__14070,"{",", ","}",opts,coll);
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
var normalize__14072 = (function (n,len){
var ns__14071 = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count.call(null,ns__14071) < len))
{{
var G__14074 = [cljs.core.str("0"),cljs.core.str(ns__14071)].join('');
ns__14071 = G__14074;
continue;
}
} else
{return ns__14071;
}
break;
}
});
return cljs.core.list.call(null,[cljs.core.str("#inst \""),cljs.core.str(d.getUTCFullYear()),cljs.core.str("-"),cljs.core.str(normalize__14072.call(null,(d.getUTCMonth() + 1),2)),cljs.core.str("-"),cljs.core.str(normalize__14072.call(null,d.getUTCDate(),2)),cljs.core.str("T"),cljs.core.str(normalize__14072.call(null,d.getUTCHours(),2)),cljs.core.str(":"),cljs.core.str(normalize__14072.call(null,d.getUTCMinutes(),2)),cljs.core.str(":"),cljs.core.str(normalize__14072.call(null,d.getUTCSeconds(),2)),cljs.core.str("."),cljs.core.str(normalize__14072.call(null,d.getUTCMilliseconds(),3)),cljs.core.str("-"),cljs.core.str("00:00\"")].join(''));
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
var pr_pair__14073 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__14073,"{",", ","}",opts,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IComparable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){
return cljs.core.compare_indexed.call(null,x,y);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2690809856;
})
cljs.core.Atom.cljs$lang$type = true;
cljs.core.Atom.cljs$lang$ctorPrSeq = (function (this__3834__auto__){
return cljs.core.list.call(null,"cljs.core/Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__14075 = this;
return goog.getUid(this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var this__14076 = this;
var G__14077__14078 = cljs.core.seq.call(null,this__14076.watches);
if(G__14077__14078)
{var G__14080__14082 = cljs.core.first.call(null,G__14077__14078);
var vec__14081__14083 = G__14080__14082;
var key__14084 = cljs.core.nth.call(null,vec__14081__14083,0,null);
var f__14085 = cljs.core.nth.call(null,vec__14081__14083,1,null);
var G__14077__14086 = G__14077__14078;
var G__14080__14087 = G__14080__14082;
var G__14077__14088 = G__14077__14086;
while(true){
var vec__14089__14090 = G__14080__14087;
var key__14091 = cljs.core.nth.call(null,vec__14089__14090,0,null);
var f__14092 = cljs.core.nth.call(null,vec__14089__14090,1,null);
var G__14077__14093 = G__14077__14088;
f__14092.call(null,key__14091,this$,oldval,newval);
var temp__3974__auto____14094 = cljs.core.next.call(null,G__14077__14093);
if(temp__3974__auto____14094)
{var G__14077__14095 = temp__3974__auto____14094;
{
var G__14102 = cljs.core.first.call(null,G__14077__14095);
var G__14103 = G__14077__14095;
G__14080__14087 = G__14102;
G__14077__14088 = G__14103;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var this__14096 = this;
return this$.watches = cljs.core.assoc.call(null,this__14096.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var this__14097 = this;
return this$.watches = cljs.core.dissoc.call(null,this__14097.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var this__14098 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "], true),cljs.core._pr_seq.call(null,this__14098.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var this__14099 = this;
return this__14099.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__14100 = this;
return this__14100.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__14101 = this;
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
var G__14115__delegate = function (x,p__14104){
var map__14110__14111 = p__14104;
var map__14110__14112 = ((cljs.core.seq_QMARK_.call(null,map__14110__14111))?cljs.core.apply.call(null,cljs.core.hash_map,map__14110__14111):map__14110__14111);
var validator__14113 = cljs.core._lookup.call(null,map__14110__14112,"\uFDD0'validator",null);
var meta__14114 = cljs.core._lookup.call(null,map__14110__14112,"\uFDD0'meta",null);
return (new cljs.core.Atom(x,meta__14114,validator__14113,null));
};
var G__14115 = function (x,var_args){
var p__14104 = null;
if (goog.isDef(var_args)) {
  p__14104 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14115__delegate.call(this, x, p__14104);
};
G__14115.cljs$lang$maxFixedArity = 1;
G__14115.cljs$lang$applyTo = (function (arglist__14116){
var x = cljs.core.first(arglist__14116);
var p__14104 = cljs.core.rest(arglist__14116);
return G__14115__delegate(x, p__14104);
});
G__14115.cljs$lang$arity$variadic = G__14115__delegate;
return G__14115;
})()
;
atom = function(x,var_args){
var p__14104 = var_args;
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
var temp__3974__auto____14120 = a.validator;
if(cljs.core.truth_(temp__3974__auto____14120))
{var validate__14121 = temp__3974__auto____14120;
if(cljs.core.truth_(validate__14121.call(null,new_value)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",6440))))].join('')));
}
} else
{}
var old_value__14122 = a.state;
a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__14122,new_value);
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
var G__14123__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__14123 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__14123__delegate.call(this, a, f, x, y, z, more);
};
G__14123.cljs$lang$maxFixedArity = 5;
G__14123.cljs$lang$applyTo = (function (arglist__14124){
var a = cljs.core.first(arglist__14124);
var f = cljs.core.first(cljs.core.next(arglist__14124));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14124)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14124))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14124)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14124)))));
return G__14123__delegate(a, f, x, y, z, more);
});
G__14123.cljs$lang$arity$variadic = G__14123__delegate;
return G__14123;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__14125){
var iref = cljs.core.first(arglist__14125);
var f = cljs.core.first(cljs.core.next(arglist__14125));
var args = cljs.core.rest(cljs.core.next(arglist__14125));
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

/**
* @constructor
*/
cljs.core.Delay = (function (state,f){
this.state = state;
this.f = f;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1073774592;
})
cljs.core.Delay.cljs$lang$type = true;
cljs.core.Delay.cljs$lang$ctorPrSeq = (function (this__3834__auto__){
return cljs.core.list.call(null,"cljs.core/Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (d){
var this__14126 = this;
return (new cljs.core.Keyword("\uFDD0'done")).call(null,cljs.core.deref.call(null,this__14126.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__14127 = this;
return (new cljs.core.Keyword("\uFDD0'value")).call(null,cljs.core.swap_BANG_.call(null,this__14127.state,(function (p__14128){
var map__14129__14130 = p__14128;
var map__14129__14131 = ((cljs.core.seq_QMARK_.call(null,map__14129__14130))?cljs.core.apply.call(null,cljs.core.hash_map,map__14129__14130):map__14129__14130);
var curr_state__14132 = map__14129__14131;
var done__14133 = cljs.core._lookup.call(null,map__14129__14131,"\uFDD0'done",null);
if(cljs.core.truth_(done__14133))
{return curr_state__14132;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__14127.f.call(null)});
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
var map__14154__14155 = options;
var map__14154__14156 = ((cljs.core.seq_QMARK_.call(null,map__14154__14155))?cljs.core.apply.call(null,cljs.core.hash_map,map__14154__14155):map__14154__14155);
var keywordize_keys__14157 = cljs.core._lookup.call(null,map__14154__14156,"\uFDD0'keywordize-keys",null);
var keyfn__14158 = (cljs.core.truth_(keywordize_keys__14157)?cljs.core.keyword:cljs.core.str);
var f__14173 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,(function (){var iter__4030__auto____14172 = (function iter__14166(s__14167){
return (new cljs.core.LazySeq(null,false,(function (){
var s__14167__14170 = s__14167;
while(true){
if(cljs.core.seq.call(null,s__14167__14170))
{var k__14171 = cljs.core.first.call(null,s__14167__14170);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__14158.call(null,k__14171),thisfn.call(null,(x[k__14171]))], true),iter__14166.call(null,cljs.core.rest.call(null,s__14167__14170)));
} else
{return null;
}
break;
}
}),null));
});
return iter__4030__auto____14172.call(null,cljs.core.js_keys.call(null,x));
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
return f__14173.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__14174){
var x = cljs.core.first(arglist__14174);
var options = cljs.core.rest(arglist__14174);
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
var mem__14179 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
return (function() { 
var G__14183__delegate = function (args){
var temp__3971__auto____14180 = cljs.core._lookup.call(null,cljs.core.deref.call(null,mem__14179),args,null);
if(cljs.core.truth_(temp__3971__auto____14180))
{var v__14181 = temp__3971__auto____14180;
return v__14181;
} else
{var ret__14182 = cljs.core.apply.call(null,f,args);
cljs.core.swap_BANG_.call(null,mem__14179,cljs.core.assoc,args,ret__14182);
return ret__14182;
}
};
var G__14183 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__14183__delegate.call(this, args);
};
G__14183.cljs$lang$maxFixedArity = 0;
G__14183.cljs$lang$applyTo = (function (arglist__14184){
var args = cljs.core.seq(arglist__14184);;
return G__14183__delegate(args);
});
G__14183.cljs$lang$arity$variadic = G__14183__delegate;
return G__14183;
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
var ret__14186 = f.call(null);
if(cljs.core.fn_QMARK_.call(null,ret__14186))
{{
var G__14187 = ret__14186;
f = G__14187;
continue;
}
} else
{return ret__14186;
}
break;
}
});
var trampoline__2 = (function() { 
var G__14188__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__14188 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14188__delegate.call(this, f, args);
};
G__14188.cljs$lang$maxFixedArity = 1;
G__14188.cljs$lang$applyTo = (function (arglist__14189){
var f = cljs.core.first(arglist__14189);
var args = cljs.core.rest(arglist__14189);
return G__14188__delegate(f, args);
});
G__14188.cljs$lang$arity$variadic = G__14188__delegate;
return G__14188;
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
var k__14191 = f.call(null,x);
return cljs.core.assoc.call(null,ret,k__14191,cljs.core.conj.call(null,cljs.core._lookup.call(null,ret,k__14191,cljs.core.PersistentVector.EMPTY),x));
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
var or__3824__auto____14200 = cljs.core._EQ_.call(null,child,parent);
if(or__3824__auto____14200)
{return or__3824__auto____14200;
} else
{var or__3824__auto____14201 = cljs.core.contains_QMARK_.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h).call(null,child),parent);
if(or__3824__auto____14201)
{return or__3824__auto____14201;
} else
{var and__3822__auto____14202 = cljs.core.vector_QMARK_.call(null,parent);
if(and__3822__auto____14202)
{var and__3822__auto____14203 = cljs.core.vector_QMARK_.call(null,child);
if(and__3822__auto____14203)
{var and__3822__auto____14204 = (cljs.core.count.call(null,parent) === cljs.core.count.call(null,child));
if(and__3822__auto____14204)
{var ret__14205 = true;
var i__14206 = 0;
while(true){
if((function (){var or__3824__auto____14207 = cljs.core.not.call(null,ret__14205);
if(or__3824__auto____14207)
{return or__3824__auto____14207;
} else
{return (i__14206 === cljs.core.count.call(null,parent));
}
})())
{return ret__14205;
} else
{{
var G__14208 = isa_QMARK_.call(null,h,child.call(null,i__14206),parent.call(null,i__14206));
var G__14209 = (i__14206 + 1);
ret__14205 = G__14208;
i__14206 = G__14209;
continue;
}
}
break;
}
} else
{return and__3822__auto____14204;
}
} else
{return and__3822__auto____14203;
}
} else
{return and__3822__auto____14202;
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
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",6724))))].join('')));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__3 = (function (h,tag,parent){
if(cljs.core.not_EQ_.call(null,tag,parent))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",6728))))].join('')));
}
var tp__14218 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var td__14219 = (new cljs.core.Keyword("\uFDD0'descendants")).call(null,h);
var ta__14220 = (new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h);
var tf__14221 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core._lookup.call(null,targets,k,cljs.core.PersistentHashSet.EMPTY),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});
var or__3824__auto____14222 = ((cljs.core.contains_QMARK_.call(null,tp__14218.call(null,tag),parent))?null:(function (){if(cljs.core.contains_QMARK_.call(null,ta__14220.call(null,tag),parent))
{throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else
{}
if(cljs.core.contains_QMARK_.call(null,ta__14220.call(null,parent),tag))
{throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,cljs.core.conj.call(null,cljs.core._lookup.call(null,tp__14218,tag,cljs.core.PersistentHashSet.EMPTY),parent)),"\uFDD0'ancestors":tf__14221.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,td__14219,parent,ta__14220),"\uFDD0'descendants":tf__14221.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),parent,ta__14220,tag,td__14219)});
})());
if(cljs.core.truth_(or__3824__auto____14222))
{return or__3824__auto____14222;
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
var parentMap__14227 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var childsParents__14228 = (cljs.core.truth_(parentMap__14227.call(null,tag))?cljs.core.disj.call(null,parentMap__14227.call(null,tag),parent):cljs.core.PersistentHashSet.EMPTY);
var newParents__14229 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__14228))?cljs.core.assoc.call(null,parentMap__14227,tag,childsParents__14228):cljs.core.dissoc.call(null,parentMap__14227,tag));
var deriv_seq__14230 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__14210_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__14210_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__14210_SHARP_),cljs.core.second.call(null,p1__14210_SHARP_)));
}),cljs.core.seq.call(null,newParents__14229)));
if(cljs.core.contains_QMARK_.call(null,parentMap__14227.call(null,tag),parent))
{return cljs.core.reduce.call(null,(function (p1__14211_SHARP_,p2__14212_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__14211_SHARP_,p2__14212_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__14230));
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
var xprefs__14238 = cljs.core.deref.call(null,prefer_table).call(null,x);
var or__3824__auto____14240 = (cljs.core.truth_((function (){var and__3822__auto____14239 = xprefs__14238;
if(cljs.core.truth_(and__3822__auto____14239))
{return xprefs__14238.call(null,y);
} else
{return and__3822__auto____14239;
}
})())?true:null);
if(cljs.core.truth_(or__3824__auto____14240))
{return or__3824__auto____14240;
} else
{var or__3824__auto____14242 = (function (){var ps__14241 = cljs.core.parents.call(null,y);
while(true){
if((cljs.core.count.call(null,ps__14241) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__14241),prefer_table)))
{} else
{}
{
var G__14245 = cljs.core.rest.call(null,ps__14241);
ps__14241 = G__14245;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____14242))
{return or__3824__auto____14242;
} else
{var or__3824__auto____14244 = (function (){var ps__14243 = cljs.core.parents.call(null,x);
while(true){
if((cljs.core.count.call(null,ps__14243) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__14243),y,prefer_table)))
{} else
{}
{
var G__14246 = cljs.core.rest.call(null,ps__14243);
ps__14243 = G__14246;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____14244))
{return or__3824__auto____14244;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3824__auto____14248 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);
if(cljs.core.truth_(or__3824__auto____14248))
{return or__3824__auto____14248;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__14266 = cljs.core.reduce.call(null,(function (be,p__14258){
var vec__14259__14260 = p__14258;
var k__14261 = cljs.core.nth.call(null,vec__14259__14260,0,null);
var ___14262 = cljs.core.nth.call(null,vec__14259__14260,1,null);
var e__14263 = vec__14259__14260;
if(cljs.core.isa_QMARK_.call(null,dispatch_val,k__14261))
{var be2__14265 = (cljs.core.truth_((function (){var or__3824__auto____14264 = (be == null);
if(or__3824__auto____14264)
{return or__3824__auto____14264;
} else
{return cljs.core.dominates.call(null,k__14261,cljs.core.first.call(null,be),prefer_table);
}
})())?e__14263:be);
if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__14265),k__14261,prefer_table)))
{} else
{throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k__14261),cljs.core.str(" and "),cljs.core.str(cljs.core.first.call(null,be2__14265)),cljs.core.str(", and neither is preferred")].join('')));
}
return be2__14265;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));
if(cljs.core.truth_(best_entry__14266))
{if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy)))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__14266));
return cljs.core.second.call(null,best_entry__14266);
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
if((function (){var and__3822__auto____14271 = mf;
if(and__3822__auto____14271)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3822__auto____14271;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{var x__3913__auto____14272 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____14273 = (cljs.core._reset[goog.typeOf(x__3913__auto____14272)]);
if(or__3824__auto____14273)
{return or__3824__auto____14273;
} else
{var or__3824__auto____14274 = (cljs.core._reset["_"]);
if(or__3824__auto____14274)
{return or__3824__auto____14274;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3822__auto____14279 = mf;
if(and__3822__auto____14279)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3822__auto____14279;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{var x__3913__auto____14280 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____14281 = (cljs.core._add_method[goog.typeOf(x__3913__auto____14280)]);
if(or__3824__auto____14281)
{return or__3824__auto____14281;
} else
{var or__3824__auto____14282 = (cljs.core._add_method["_"]);
if(or__3824__auto____14282)
{return or__3824__auto____14282;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3822__auto____14287 = mf;
if(and__3822__auto____14287)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3822__auto____14287;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{var x__3913__auto____14288 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____14289 = (cljs.core._remove_method[goog.typeOf(x__3913__auto____14288)]);
if(or__3824__auto____14289)
{return or__3824__auto____14289;
} else
{var or__3824__auto____14290 = (cljs.core._remove_method["_"]);
if(or__3824__auto____14290)
{return or__3824__auto____14290;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3822__auto____14295 = mf;
if(and__3822__auto____14295)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3822__auto____14295;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{var x__3913__auto____14296 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____14297 = (cljs.core._prefer_method[goog.typeOf(x__3913__auto____14296)]);
if(or__3824__auto____14297)
{return or__3824__auto____14297;
} else
{var or__3824__auto____14298 = (cljs.core._prefer_method["_"]);
if(or__3824__auto____14298)
{return or__3824__auto____14298;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3822__auto____14303 = mf;
if(and__3822__auto____14303)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3822__auto____14303;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{var x__3913__auto____14304 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____14305 = (cljs.core._get_method[goog.typeOf(x__3913__auto____14304)]);
if(or__3824__auto____14305)
{return or__3824__auto____14305;
} else
{var or__3824__auto____14306 = (cljs.core._get_method["_"]);
if(or__3824__auto____14306)
{return or__3824__auto____14306;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if((function (){var and__3822__auto____14311 = mf;
if(and__3822__auto____14311)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3822__auto____14311;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{var x__3913__auto____14312 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____14313 = (cljs.core._methods[goog.typeOf(x__3913__auto____14312)]);
if(or__3824__auto____14313)
{return or__3824__auto____14313;
} else
{var or__3824__auto____14314 = (cljs.core._methods["_"]);
if(or__3824__auto____14314)
{return or__3824__auto____14314;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3822__auto____14319 = mf;
if(and__3822__auto____14319)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3822__auto____14319;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{var x__3913__auto____14320 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____14321 = (cljs.core._prefers[goog.typeOf(x__3913__auto____14320)]);
if(or__3824__auto____14321)
{return or__3824__auto____14321;
} else
{var or__3824__auto____14322 = (cljs.core._prefers["_"]);
if(or__3824__auto____14322)
{return or__3824__auto____14322;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if((function (){var and__3822__auto____14327 = mf;
if(and__3822__auto____14327)
{return mf.cljs$core$IMultiFn$_dispatch$arity$2;
} else
{return and__3822__auto____14327;
}
})())
{return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf,args);
} else
{var x__3913__auto____14328 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____14329 = (cljs.core._dispatch[goog.typeOf(x__3913__auto____14328)]);
if(or__3824__auto____14329)
{return or__3824__auto____14329;
} else
{var or__3824__auto____14330 = (cljs.core._dispatch["_"]);
if(or__3824__auto____14330)
{return or__3824__auto____14330;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__14333 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__14334 = cljs.core._get_method.call(null,mf,dispatch_val__14333);
if(cljs.core.truth_(target_fn__14334))
{} else
{throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(cljs.core.name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val__14333)].join('')));
}
return cljs.core.apply.call(null,target_fn__14334,args);
});

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
this.cljs$lang$protocol_mask$partition1$ = 64;
})
cljs.core.MultiFn.cljs$lang$type = true;
cljs.core.MultiFn.cljs$lang$ctorPrSeq = (function (this__3834__auto__){
return cljs.core.list.call(null,"cljs.core/MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__14335 = this;
return goog.getUid(this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var this__14336 = this;
cljs.core.swap_BANG_.call(null,this__14336.method_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__14336.method_cache,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__14336.prefer_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__14336.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var this__14337 = this;
cljs.core.swap_BANG_.call(null,this__14337.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__14337.method_cache,this__14337.method_table,this__14337.cached_hierarchy,this__14337.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var this__14338 = this;
cljs.core.swap_BANG_.call(null,this__14338.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__14338.method_cache,this__14338.method_table,this__14338.cached_hierarchy,this__14338.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var this__14339 = this;
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__14339.cached_hierarchy),cljs.core.deref.call(null,this__14339.hierarchy)))
{} else
{cljs.core.reset_cache.call(null,this__14339.method_cache,this__14339.method_table,this__14339.cached_hierarchy,this__14339.hierarchy);
}
var temp__3971__auto____14340 = cljs.core.deref.call(null,this__14339.method_cache).call(null,dispatch_val);
if(cljs.core.truth_(temp__3971__auto____14340))
{var target_fn__14341 = temp__3971__auto____14340;
return target_fn__14341;
} else
{var temp__3971__auto____14342 = cljs.core.find_and_cache_best_method.call(null,this__14339.name,dispatch_val,this__14339.hierarchy,this__14339.method_table,this__14339.prefer_table,this__14339.method_cache,this__14339.cached_hierarchy);
if(cljs.core.truth_(temp__3971__auto____14342))
{var target_fn__14343 = temp__3971__auto____14342;
return target_fn__14343;
} else
{return cljs.core.deref.call(null,this__14339.method_table).call(null,this__14339.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var this__14344 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__14344.prefer_table)))
{throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(this__14344.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else
{}
cljs.core.swap_BANG_.call(null,this__14344.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core._lookup.call(null,old,dispatch_val_x,cljs.core.PersistentHashSet.EMPTY),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__14344.method_cache,this__14344.method_table,this__14344.cached_hierarchy,this__14344.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var this__14345 = this;
return cljs.core.deref.call(null,this__14345.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var this__14346 = this;
return cljs.core.deref.call(null,this__14346.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = (function (mf,args){
var this__14347 = this;
return cljs.core.do_dispatch.call(null,mf,this__14347.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__14349__delegate = function (_,args){
var self__14348 = this;
return cljs.core._dispatch.call(null,self__14348,args);
};
var G__14349 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14349__delegate.call(this, _, args);
};
G__14349.cljs$lang$maxFixedArity = 1;
G__14349.cljs$lang$applyTo = (function (arglist__14350){
var _ = cljs.core.first(arglist__14350);
var args = cljs.core.rest(arglist__14350);
return G__14349__delegate(_, args);
});
G__14349.cljs$lang$arity$variadic = G__14349__delegate;
return G__14349;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
var self__14351 = this;
return cljs.core._dispatch.call(null,self__14351,args);
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

/**
* @constructor
*/
cljs.core.UUID = (function (uuid){
this.uuid = uuid;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 543162368;
})
cljs.core.UUID.cljs$lang$type = true;
cljs.core.UUID.cljs$lang$ctorPrSeq = (function (this__3834__auto__){
return cljs.core.list.call(null,"cljs.core/UUID");
});
cljs.core.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__14352 = this;
return goog.string.hashCode(cljs.core.pr_str.call(null,this$));
});
cljs.core.UUID.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (_14354,_){
var this__14353 = this;
return cljs.core.list.call(null,[cljs.core.str("#uuid \""),cljs.core.str(this__14353.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var this__14355 = this;
var and__3822__auto____14356 = cljs.core.instance_QMARK_.call(null,cljs.core.UUID,other);
if(and__3822__auto____14356)
{return (this__14355.uuid === other.uuid);
} else
{return and__3822__auto____14356;
}
});
cljs.core.UUID.prototype.toString = (function (){
var this__14357 = this;
var this__14358 = this;
return cljs.core.pr_str.call(null,this__14358);
});
cljs.core.UUID;
