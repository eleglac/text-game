// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__7745_7759 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__7746_7760 = null;
var count__7747_7761 = (0);
var i__7748_7762 = (0);
while(true){
if((i__7748_7762 < count__7747_7761)){
var f_7763 = cljs.core._nth.call(null,chunk__7746_7760,i__7748_7762);
cljs.core.println.call(null,"  ",f_7763);

var G__7764 = seq__7745_7759;
var G__7765 = chunk__7746_7760;
var G__7766 = count__7747_7761;
var G__7767 = (i__7748_7762 + (1));
seq__7745_7759 = G__7764;
chunk__7746_7760 = G__7765;
count__7747_7761 = G__7766;
i__7748_7762 = G__7767;
continue;
} else {
var temp__4657__auto___7768 = cljs.core.seq.call(null,seq__7745_7759);
if(temp__4657__auto___7768){
var seq__7745_7769__$1 = temp__4657__auto___7768;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7745_7769__$1)){
var c__6675__auto___7770 = cljs.core.chunk_first.call(null,seq__7745_7769__$1);
var G__7771 = cljs.core.chunk_rest.call(null,seq__7745_7769__$1);
var G__7772 = c__6675__auto___7770;
var G__7773 = cljs.core.count.call(null,c__6675__auto___7770);
var G__7774 = (0);
seq__7745_7759 = G__7771;
chunk__7746_7760 = G__7772;
count__7747_7761 = G__7773;
i__7748_7762 = G__7774;
continue;
} else {
var f_7775 = cljs.core.first.call(null,seq__7745_7769__$1);
cljs.core.println.call(null,"  ",f_7775);

var G__7776 = cljs.core.next.call(null,seq__7745_7769__$1);
var G__7777 = null;
var G__7778 = (0);
var G__7779 = (0);
seq__7745_7759 = G__7776;
chunk__7746_7760 = G__7777;
count__7747_7761 = G__7778;
i__7748_7762 = G__7779;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_7780 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5864__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5864__auto__)){
return or__5864__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_7780);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_7780)))?cljs.core.second.call(null,arglists_7780):arglists_7780));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__7749 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__7750 = null;
var count__7751 = (0);
var i__7752 = (0);
while(true){
if((i__7752 < count__7751)){
var vec__7753 = cljs.core._nth.call(null,chunk__7750,i__7752);
var name = cljs.core.nth.call(null,vec__7753,(0),null);
var map__7754 = cljs.core.nth.call(null,vec__7753,(1),null);
var map__7754__$1 = ((((!((map__7754 == null)))?((((map__7754.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7754.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7754):map__7754);
var doc = cljs.core.get.call(null,map__7754__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__7754__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__7781 = seq__7749;
var G__7782 = chunk__7750;
var G__7783 = count__7751;
var G__7784 = (i__7752 + (1));
seq__7749 = G__7781;
chunk__7750 = G__7782;
count__7751 = G__7783;
i__7752 = G__7784;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__7749);
if(temp__4657__auto__){
var seq__7749__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7749__$1)){
var c__6675__auto__ = cljs.core.chunk_first.call(null,seq__7749__$1);
var G__7785 = cljs.core.chunk_rest.call(null,seq__7749__$1);
var G__7786 = c__6675__auto__;
var G__7787 = cljs.core.count.call(null,c__6675__auto__);
var G__7788 = (0);
seq__7749 = G__7785;
chunk__7750 = G__7786;
count__7751 = G__7787;
i__7752 = G__7788;
continue;
} else {
var vec__7756 = cljs.core.first.call(null,seq__7749__$1);
var name = cljs.core.nth.call(null,vec__7756,(0),null);
var map__7757 = cljs.core.nth.call(null,vec__7756,(1),null);
var map__7757__$1 = ((((!((map__7757 == null)))?((((map__7757.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7757.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7757):map__7757);
var doc = cljs.core.get.call(null,map__7757__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__7757__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__7789 = cljs.core.next.call(null,seq__7749__$1);
var G__7790 = null;
var G__7791 = (0);
var G__7792 = (0);
seq__7749 = G__7789;
chunk__7750 = G__7790;
count__7751 = G__7791;
i__7752 = G__7792;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map