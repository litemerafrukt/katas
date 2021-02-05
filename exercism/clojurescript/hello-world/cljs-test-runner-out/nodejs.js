// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
(cljs.core._STAR_print_newline_STAR_ = false);

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__3238__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__3238 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__3239__i = 0, G__3239__a = new Array(arguments.length -  0);
while (G__3239__i < G__3239__a.length) {G__3239__a[G__3239__i] = arguments[G__3239__i + 0]; ++G__3239__i;}
  args = new cljs.core.IndexedSeq(G__3239__a,0,null);
} 
return G__3238__delegate.call(this,args);};
G__3238.cljs$lang$maxFixedArity = 0;
G__3238.cljs$lang$applyTo = (function (arglist__3240){
var args = cljs.core.seq(arglist__3240);
return G__3238__delegate(args);
});
G__3238.cljs$core$IFn$_invoke$arity$variadic = G__3238__delegate;
return G__3238;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__3241__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__3241 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__3242__i = 0, G__3242__a = new Array(arguments.length -  0);
while (G__3242__i < G__3242__a.length) {G__3242__a[G__3242__i] = arguments[G__3242__i + 0]; ++G__3242__i;}
  args = new cljs.core.IndexedSeq(G__3242__a,0,null);
} 
return G__3241__delegate.call(this,args);};
G__3241.cljs$lang$maxFixedArity = 0;
G__3241.cljs$lang$applyTo = (function (arglist__3243){
var args = cljs.core.seq(arglist__3243);
return G__3241__delegate(args);
});
G__3241.cljs$core$IFn$_invoke$arity$variadic = G__3241__delegate;
return G__3241;
})()
);

return null;
});

//# sourceMappingURL=nodejs.js.map
