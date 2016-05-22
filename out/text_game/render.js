// Compiled by ClojureScript 1.8.51 {}
goog.provide('text_game.render');
goog.require('cljs.core');
goog.require('hiccups.runtime');
/**
 * Take in a region map, which contains the width and height of a region, its offset, and the contained text.
 *   Emit a sequence of maps for each character in the sequence, decorated with its x, y location in the console.
 */
text_game.render.render_region = (function text_game$render$render_region(p__7178){
var map__7187 = p__7178;
var map__7187__$1 = ((((!((map__7187 == null)))?((((map__7187.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7187.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7187):map__7187);
var width = cljs.core.get.call(null,map__7187__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__7187__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var x = cljs.core.get.call(null,map__7187__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__7187__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var text = cljs.core.get.call(null,map__7187__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var fill_char = cljs.core.get.call(null,map__7187__$1,new cljs.core.Keyword(null,"fill-char","fill-char",582111426));
var iter__6644__auto__ = ((function (map__7187,map__7187__$1,width,height,x,y,text,fill_char){
return (function text_game$render$render_region_$_iter__7189(s__7190){
return (new cljs.core.LazySeq(null,((function (map__7187,map__7187__$1,width,height,x,y,text,fill_char){
return (function (){
var s__7190__$1 = s__7190;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__7190__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var w = cljs.core.first.call(null,xs__5205__auto__);
var iterys__6640__auto__ = ((function (s__7190__$1,w,xs__5205__auto__,temp__4657__auto__,map__7187,map__7187__$1,width,height,x,y,text,fill_char){
return (function text_game$render$render_region_$_iter__7189_$_iter__7191(s__7192){
return (new cljs.core.LazySeq(null,((function (s__7190__$1,w,xs__5205__auto__,temp__4657__auto__,map__7187,map__7187__$1,width,height,x,y,text,fill_char){
return (function (){
var s__7192__$1 = s__7192;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__7192__$1);
if(temp__4657__auto____$1){
var s__7192__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7192__$2)){
var c__6642__auto__ = cljs.core.chunk_first.call(null,s__7192__$2);
var size__6643__auto__ = cljs.core.count.call(null,c__6642__auto__);
var b__7194 = cljs.core.chunk_buffer.call(null,size__6643__auto__);
if((function (){var i__7193 = (0);
while(true){
if((i__7193 < size__6643__auto__)){
var h = cljs.core._nth.call(null,c__6642__auto__,i__7193);
cljs.core.chunk_append.call(null,b__7194,(function (){var c = cljs.core.nth.call(null,text,(w + (width * h)));
var dx = (x + w);
var dy = (y + h);
if(cljs.core.truth_(c)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"char","char",-641587586),c,new cljs.core.Keyword(null,"x","x",2099068185),dx,new cljs.core.Keyword(null,"y","y",-1757859776),dy], null);
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"char","char",-641587586),fill_char,new cljs.core.Keyword(null,"x","x",2099068185),dx,new cljs.core.Keyword(null,"y","y",-1757859776),dy], null);
}
})());

var G__7195 = (i__7193 + (1));
i__7193 = G__7195;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7194),text_game$render$render_region_$_iter__7189_$_iter__7191.call(null,cljs.core.chunk_rest.call(null,s__7192__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7194),null);
}
} else {
var h = cljs.core.first.call(null,s__7192__$2);
return cljs.core.cons.call(null,(function (){var c = cljs.core.nth.call(null,text,(w + (width * h)));
var dx = (x + w);
var dy = (y + h);
if(cljs.core.truth_(c)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"char","char",-641587586),c,new cljs.core.Keyword(null,"x","x",2099068185),dx,new cljs.core.Keyword(null,"y","y",-1757859776),dy], null);
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"char","char",-641587586),fill_char,new cljs.core.Keyword(null,"x","x",2099068185),dx,new cljs.core.Keyword(null,"y","y",-1757859776),dy], null);
}
})(),text_game$render$render_region_$_iter__7189_$_iter__7191.call(null,cljs.core.rest.call(null,s__7192__$2)));
}
} else {
return null;
}
break;
}
});})(s__7190__$1,w,xs__5205__auto__,temp__4657__auto__,map__7187,map__7187__$1,width,height,x,y,text,fill_char))
,null,null));
});})(s__7190__$1,w,xs__5205__auto__,temp__4657__auto__,map__7187,map__7187__$1,width,height,x,y,text,fill_char))
;
var fs__6641__auto__ = cljs.core.seq.call(null,iterys__6640__auto__.call(null,cljs.core.range.call(null,height)));
if(fs__6641__auto__){
return cljs.core.concat.call(null,fs__6641__auto__,text_game$render$render_region_$_iter__7189.call(null,cljs.core.rest.call(null,s__7190__$1)));
} else {
var G__7196 = cljs.core.rest.call(null,s__7190__$1);
s__7190__$1 = G__7196;
continue;
}
} else {
return null;
}
break;
}
});})(map__7187,map__7187__$1,width,height,x,y,text,fill_char))
,null,null));
});})(map__7187,map__7187__$1,width,height,x,y,text,fill_char))
;
return iter__6644__auto__.call(null,cljs.core.range.call(null,width));
});
/**
 * Needs to have a full page of characters to render - 80 x 25.
 */
text_game.render.render_page = (function text_game$render$render_page(characters){
var sorted_chars = cljs.core.sort_by.call(null,cljs.core.juxt.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"x","x",2099068185)),characters);
return [cljs.core.str(hiccups.runtime.render_html.call(null,cljs.core.map.call(null,((function (sorted_chars){
return (function (c){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.char-box","div.char-box",-469354231),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(c),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(c)], null),new cljs.core.Keyword(null,"char","char",-641587586).cljs$core$IFn$_invoke$arity$1(c)], null);
});})(sorted_chars))
,sorted_chars)))].join('');
});

//# sourceMappingURL=render.js.map