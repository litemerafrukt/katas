// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('phone_number');
goog.require('cljs.core');
phone_number.number = (function phone_number$number(unclean_number){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.re_seq.call(null,/\d/,unclean_number));
});
phone_number.area_code = (function phone_number$area_code(){
return null;
});
phone_number.pretty_print = (function phone_number$pretty_print(){
return null;
});

//# sourceMappingURL=phone_number.js.map
