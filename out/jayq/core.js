// Compiled by ClojureScript 1.8.51 {}
goog.provide('jayq.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.reader');
jayq.core.crate_meta = (function jayq$core$crate_meta(func){
return func.prototype._crateGroup;
});
jayq.core.__GT_selector = (function jayq$core$__GT_selector(sel){
if(typeof sel === 'string'){
return sel;
} else {
if(cljs.core.fn_QMARK_.call(null,sel)){
var temp__4655__auto__ = jayq.core.crate_meta.call(null,sel);
if(cljs.core.truth_(temp__4655__auto__)){
var cm = temp__4655__auto__;
return [cljs.core.str("[crateGroup="),cljs.core.str(cm),cljs.core.str("]")].join('');
} else {
return sel;
}
} else {
if((sel instanceof cljs.core.Keyword)){
return cljs.core.name.call(null,sel);
} else {
return sel;

}
}
}
});
jayq.core.$ = (function jayq$core$$(var_args){
var args7344 = [];
var len__6934__auto___7347 = arguments.length;
var i__6935__auto___7348 = (0);
while(true){
if((i__6935__auto___7348 < len__6934__auto___7347)){
args7344.push((arguments[i__6935__auto___7348]));

var G__7349 = (i__6935__auto___7348 + (1));
i__6935__auto___7348 = G__7349;
continue;
} else {
}
break;
}

var G__7346 = args7344.length;
switch (G__7346) {
case 1:
return jayq.core.$.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7344.length)].join('')));

}
});

jayq.core.$.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return jQuery(jayq.core.__GT_selector.call(null,sel));
});

jayq.core.$.cljs$core$IFn$_invoke$arity$2 = (function (sel,context){
return jQuery(jayq.core.__GT_selector.call(null,sel),context);
});

jayq.core.$.cljs$lang$maxFixedArity = 2;
jQuery.prototype.cljs$core$ISeqable$ = true;

jQuery.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this$__$1 = this;
if(cljs.core.truth_(this$__$1.get((0)))){
return this$__$1;
} else {
return null;
}
});

jQuery.prototype.cljs$core$ISeq$ = true;

jQuery.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.get((0));
});

jQuery.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this$__$1 = this;
if((cljs.core.count.call(null,this$__$1) > (1))){
return this$__$1.slice((1));
} else {
return cljs.core.List.EMPTY;
}
});

jQuery.prototype.cljs$core$ICounted$ = true;

jQuery.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.length;
});

jQuery.prototype.cljs$core$IIndexed$ = true;

jQuery.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var this$__$1 = this;
if((n < cljs.core.count.call(null,this$__$1))){
return this$__$1.slice(n,(n + (1)));
} else {
return null;
}
});

jQuery.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var this$__$1 = this;
if((n < cljs.core.count.call(null,this$__$1))){
return this$__$1.slice(n,(n + (1)));
} else {
if((void 0 === not_found)){
return null;
} else {
return not_found;
}
}
});

jQuery.prototype.cljs$core$ISequential$ = true;

jQuery.prototype.cljs$core$ILookup$ = true;

jQuery.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var this$__$1 = this;
var or__5864__auto__ = this$__$1.slice(k,(k + (1)));
if(cljs.core.truth_(or__5864__auto__)){
return or__5864__auto__;
} else {
return null;
}
});

jQuery.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,k,not_found);
});

jQuery.prototype.cljs$core$IReduce$ = true;

jQuery.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f){
var this$__$1 = this;
return cljs.core.ci_reduce.call(null,this$__$1,f);
});

jQuery.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (this$,f,start){
var this$__$1 = this;
return cljs.core.ci_reduce.call(null,this$__$1,f,start);
});

jQuery.prototype.cljs$core$IFn$ = true;

jQuery.prototype.call = (function() {
var G__7352 = null;
var G__7352__2 = (function (self__,k){
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__7352__3 = (function (self__,k,not_found){
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__7352 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__7352__2.call(this,self__,k);
case 3:
return G__7352__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__7352.cljs$core$IFn$_invoke$arity$2 = G__7352__2;
G__7352.cljs$core$IFn$_invoke$arity$3 = G__7352__3;
return G__7352;
})()
;

jQuery.prototype.apply = (function (self__,args7351){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args7351)));
});

jQuery.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

jQuery.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});
jayq.core.anim = (function jayq$core$anim(var_args){
var args__6941__auto__ = [];
var len__6934__auto___7358 = arguments.length;
var i__6935__auto___7359 = (0);
while(true){
if((i__6935__auto___7359 < len__6934__auto___7358)){
args__6941__auto__.push((arguments[i__6935__auto___7359]));

var G__7360 = (i__6935__auto___7359 + (1));
i__6935__auto___7359 = G__7360;
continue;
} else {
}
break;
}

var argseq__6942__auto__ = ((((2) < args__6941__auto__.length))?(new cljs.core.IndexedSeq(args__6941__auto__.slice((2)),(0),null)):null);
return jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6942__auto__);
});

jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,props,p__7356){
var vec__7357 = p__7356;
var speed = cljs.core.nth.call(null,vec__7357,(0),null);
var on_finish = cljs.core.nth.call(null,vec__7357,(1),null);
return $elem.animate(cljs.core.clj__GT_js.call(null,props),speed,on_finish);
});

jayq.core.anim.cljs$lang$maxFixedArity = (2);

jayq.core.anim.cljs$lang$applyTo = (function (seq7353){
var G__7354 = cljs.core.first.call(null,seq7353);
var seq7353__$1 = cljs.core.next.call(null,seq7353);
var G__7355 = cljs.core.first.call(null,seq7353__$1);
var seq7353__$2 = cljs.core.next.call(null,seq7353__$1);
return jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic(G__7354,G__7355,seq7353__$2);
});
jayq.core.text = (function jayq$core$text(var_args){
var args7361 = [];
var len__6934__auto___7364 = arguments.length;
var i__6935__auto___7365 = (0);
while(true){
if((i__6935__auto___7365 < len__6934__auto___7364)){
args7361.push((arguments[i__6935__auto___7365]));

var G__7366 = (i__6935__auto___7365 + (1));
i__6935__auto___7365 = G__7366;
continue;
} else {
}
break;
}

var G__7363 = args7361.length;
switch (G__7363) {
case 1:
return jayq.core.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7361.length)].join('')));

}
});

jayq.core.text.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.text();
});

jayq.core.text.cljs$core$IFn$_invoke$arity$2 = (function ($elem,txt){
return $elem.text(txt);
});

jayq.core.text.cljs$lang$maxFixedArity = 2;
jayq.core.css = (function jayq$core$css(var_args){
var args7368 = [];
var len__6934__auto___7371 = arguments.length;
var i__6935__auto___7372 = (0);
while(true){
if((i__6935__auto___7372 < len__6934__auto___7371)){
args7368.push((arguments[i__6935__auto___7372]));

var G__7373 = (i__6935__auto___7372 + (1));
i__6935__auto___7372 = G__7373;
continue;
} else {
}
break;
}

var G__7370 = args7368.length;
switch (G__7370) {
case 2:
return jayq.core.css.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.css.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7368.length)].join('')));

}
});

jayq.core.css.cljs$core$IFn$_invoke$arity$2 = (function ($elem,opts){
return $elem.css(cljs.core.clj__GT_js.call(null,opts));
});

jayq.core.css.cljs$core$IFn$_invoke$arity$3 = (function ($elem,p,v){
return $elem.css(cljs.core.name.call(null,p),v);
});

jayq.core.css.cljs$lang$maxFixedArity = 3;
jayq.core.attr = (function jayq$core$attr(var_args){
var args7375 = [];
var len__6934__auto___7378 = arguments.length;
var i__6935__auto___7379 = (0);
while(true){
if((i__6935__auto___7379 < len__6934__auto___7378)){
args7375.push((arguments[i__6935__auto___7379]));

var G__7380 = (i__6935__auto___7379 + (1));
i__6935__auto___7379 = G__7380;
continue;
} else {
}
break;
}

var G__7377 = args7375.length;
switch (G__7377) {
case 3:
return jayq.core.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return jayq.core.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7375.length)].join('')));

}
});

jayq.core.attr.cljs$core$IFn$_invoke$arity$3 = (function ($elem,n,v){
return $elem.attr(cljs.core.name.call(null,n),v);
});

jayq.core.attr.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.attr(cljs.core.clj__GT_js.call(null,x));
});

jayq.core.attr.cljs$lang$maxFixedArity = 3;
jayq.core.prop = (function jayq$core$prop(var_args){
var args7382 = [];
var len__6934__auto___7385 = arguments.length;
var i__6935__auto___7386 = (0);
while(true){
if((i__6935__auto___7386 < len__6934__auto___7385)){
args7382.push((arguments[i__6935__auto___7386]));

var G__7387 = (i__6935__auto___7386 + (1));
i__6935__auto___7386 = G__7387;
continue;
} else {
}
break;
}

var G__7384 = args7382.length;
switch (G__7384) {
case 3:
return jayq.core.prop.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return jayq.core.prop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7382.length)].join('')));

}
});

jayq.core.prop.cljs$core$IFn$_invoke$arity$3 = (function ($elem,n,v){
return $elem.prop(cljs.core.name.call(null,n),v);
});

jayq.core.prop.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.prop(cljs.core.clj__GT_js.call(null,x));
});

jayq.core.prop.cljs$lang$maxFixedArity = 3;
jayq.core.remove_attr = (function jayq$core$remove_attr($elem,a){
return $elem.removeAttr(cljs.core.name.call(null,a));
});
jayq.core.remove_prop = (function jayq$core$remove_prop($elem,a){
return $elem.removeProp(cljs.core.name.call(null,a));
});
jayq.core.data = (function jayq$core$data(var_args){
var args7389 = [];
var len__6934__auto___7392 = arguments.length;
var i__6935__auto___7393 = (0);
while(true){
if((i__6935__auto___7393 < len__6934__auto___7392)){
args7389.push((arguments[i__6935__auto___7393]));

var G__7394 = (i__6935__auto___7393 + (1));
i__6935__auto___7393 = G__7394;
continue;
} else {
}
break;
}

var G__7391 = args7389.length;
switch (G__7391) {
case 1:
return jayq.core.data.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.data.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7389.length)].join('')));

}
});

jayq.core.data.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.data();
});

jayq.core.data.cljs$core$IFn$_invoke$arity$2 = (function ($elem,k){
return $elem.data(cljs.core.clj__GT_js.call(null,k));
});

jayq.core.data.cljs$core$IFn$_invoke$arity$3 = (function ($elem,k,v){
return $elem.data(cljs.core.name.call(null,k),cljs.core.clj__GT_js.call(null,v));
});

jayq.core.data.cljs$lang$maxFixedArity = 3;
jayq.core.add_class = (function jayq$core$add_class($elem,cl){
return $elem.addClass(cljs.core.name.call(null,cl));
});
jayq.core.remove_class = (function jayq$core$remove_class(var_args){
var args7396 = [];
var len__6934__auto___7399 = arguments.length;
var i__6935__auto___7400 = (0);
while(true){
if((i__6935__auto___7400 < len__6934__auto___7399)){
args7396.push((arguments[i__6935__auto___7400]));

var G__7401 = (i__6935__auto___7400 + (1));
i__6935__auto___7400 = G__7401;
continue;
} else {
}
break;
}

var G__7398 = args7396.length;
switch (G__7398) {
case 1:
return jayq.core.remove_class.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.remove_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7396.length)].join('')));

}
});

jayq.core.remove_class.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.removeClass();
});

jayq.core.remove_class.cljs$core$IFn$_invoke$arity$2 = (function ($elem,cl){
return $elem.removeClass(cljs.core.name.call(null,cl));
});

jayq.core.remove_class.cljs$lang$maxFixedArity = 2;
jayq.core.toggle_class = (function jayq$core$toggle_class(var_args){
var args7403 = [];
var len__6934__auto___7406 = arguments.length;
var i__6935__auto___7407 = (0);
while(true){
if((i__6935__auto___7407 < len__6934__auto___7406)){
args7403.push((arguments[i__6935__auto___7407]));

var G__7408 = (i__6935__auto___7407 + (1));
i__6935__auto___7407 = G__7408;
continue;
} else {
}
break;
}

var G__7405 = args7403.length;
switch (G__7405) {
case 2:
return jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7403.length)].join('')));

}
});

jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function ($elem,cl){
return $elem.toggleClass(cljs.core.name.call(null,cl));
});

jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function ($elem,cl,switch$){
return $elem.toggleClass(cljs.core.name.call(null,cl),cljs.core.boolean$.call(null,switch$));
});

jayq.core.toggle_class.cljs$lang$maxFixedArity = 3;
jayq.core.has_class = (function jayq$core$has_class($elem,cl){
return $elem.hasClass(cljs.core.name.call(null,cl));
});
jayq.core.is = (function jayq$core$is($elem,selector){
return $elem.is(jayq.core.__GT_selector.call(null,selector));
});
jayq.core.after = (function jayq$core$after($elem,content){
return $elem.after(content);
});
jayq.core.before = (function jayq$core$before($elem,content){
return $elem.before(content);
});
jayq.core.append = (function jayq$core$append($elem,content){
return $elem.append(content);
});
jayq.core.prepend = (function jayq$core$prepend($elem,content){
return $elem.prepend(content);
});
jayq.core.append_to = (function jayq$core$append_to($elem,target){
return $elem.appendTo(jayq.core.__GT_selector.call(null,target));
});
jayq.core.prepend_to = (function jayq$core$prepend_to($elem,target){
return $elem.prependTo(jayq.core.__GT_selector.call(null,target));
});
jayq.core.insert_before = (function jayq$core$insert_before($elem,target){
return $elem.insertBefore(jayq.core.__GT_selector.call(null,target));
});
jayq.core.insert_after = (function jayq$core$insert_after($elem,target){
return $elem.insertAfter(jayq.core.__GT_selector.call(null,target));
});
jayq.core.replace_with = (function jayq$core$replace_with($elem,content){
return $elem.replaceWith(content);
});
jayq.core.remove = (function jayq$core$remove($elem){
return $elem.remove();
});
jayq.core.hide = (function jayq$core$hide(var_args){
var args__6941__auto__ = [];
var len__6934__auto___7414 = arguments.length;
var i__6935__auto___7415 = (0);
while(true){
if((i__6935__auto___7415 < len__6934__auto___7414)){
args__6941__auto__.push((arguments[i__6935__auto___7415]));

var G__7416 = (i__6935__auto___7415 + (1));
i__6935__auto___7415 = G__7416;
continue;
} else {
}
break;
}

var argseq__6942__auto__ = ((((1) < args__6941__auto__.length))?(new cljs.core.IndexedSeq(args__6941__auto__.slice((1)),(0),null)):null);
return jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6942__auto__);
});

jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__7412){
var vec__7413 = p__7412;
var speed = cljs.core.nth.call(null,vec__7413,(0),null);
var on_finish = cljs.core.nth.call(null,vec__7413,(1),null);
return $elem.hide(speed,on_finish);
});

jayq.core.hide.cljs$lang$maxFixedArity = (1);

jayq.core.hide.cljs$lang$applyTo = (function (seq7410){
var G__7411 = cljs.core.first.call(null,seq7410);
var seq7410__$1 = cljs.core.next.call(null,seq7410);
return jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic(G__7411,seq7410__$1);
});
jayq.core.show = (function jayq$core$show(var_args){
var args__6941__auto__ = [];
var len__6934__auto___7421 = arguments.length;
var i__6935__auto___7422 = (0);
while(true){
if((i__6935__auto___7422 < len__6934__auto___7421)){
args__6941__auto__.push((arguments[i__6935__auto___7422]));

var G__7423 = (i__6935__auto___7422 + (1));
i__6935__auto___7422 = G__7423;
continue;
} else {
}
break;
}

var argseq__6942__auto__ = ((((1) < args__6941__auto__.length))?(new cljs.core.IndexedSeq(args__6941__auto__.slice((1)),(0),null)):null);
return jayq.core.show.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6942__auto__);
});

jayq.core.show.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__7419){
var vec__7420 = p__7419;
var speed = cljs.core.nth.call(null,vec__7420,(0),null);
var on_finish = cljs.core.nth.call(null,vec__7420,(1),null);
return $elem.show(speed,on_finish);
});

jayq.core.show.cljs$lang$maxFixedArity = (1);

jayq.core.show.cljs$lang$applyTo = (function (seq7417){
var G__7418 = cljs.core.first.call(null,seq7417);
var seq7417__$1 = cljs.core.next.call(null,seq7417);
return jayq.core.show.cljs$core$IFn$_invoke$arity$variadic(G__7418,seq7417__$1);
});
jayq.core.toggle = (function jayq$core$toggle(var_args){
var args__6941__auto__ = [];
var len__6934__auto___7428 = arguments.length;
var i__6935__auto___7429 = (0);
while(true){
if((i__6935__auto___7429 < len__6934__auto___7428)){
args__6941__auto__.push((arguments[i__6935__auto___7429]));

var G__7430 = (i__6935__auto___7429 + (1));
i__6935__auto___7429 = G__7430;
continue;
} else {
}
break;
}

var argseq__6942__auto__ = ((((1) < args__6941__auto__.length))?(new cljs.core.IndexedSeq(args__6941__auto__.slice((1)),(0),null)):null);
return jayq.core.toggle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6942__auto__);
});

jayq.core.toggle.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__7426){
var vec__7427 = p__7426;
var speed = cljs.core.nth.call(null,vec__7427,(0),null);
var on_finish = cljs.core.nth.call(null,vec__7427,(1),null);
return $elem.toggle(speed,on_finish);
});

jayq.core.toggle.cljs$lang$maxFixedArity = (1);

jayq.core.toggle.cljs$lang$applyTo = (function (seq7424){
var G__7425 = cljs.core.first.call(null,seq7424);
var seq7424__$1 = cljs.core.next.call(null,seq7424);
return jayq.core.toggle.cljs$core$IFn$_invoke$arity$variadic(G__7425,seq7424__$1);
});
jayq.core.fade_out = (function jayq$core$fade_out(var_args){
var args__6941__auto__ = [];
var len__6934__auto___7435 = arguments.length;
var i__6935__auto___7436 = (0);
while(true){
if((i__6935__auto___7436 < len__6934__auto___7435)){
args__6941__auto__.push((arguments[i__6935__auto___7436]));

var G__7437 = (i__6935__auto___7436 + (1));
i__6935__auto___7436 = G__7437;
continue;
} else {
}
break;
}

var argseq__6942__auto__ = ((((1) < args__6941__auto__.length))?(new cljs.core.IndexedSeq(args__6941__auto__.slice((1)),(0),null)):null);
return jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6942__auto__);
});

jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__7433){
var vec__7434 = p__7433;
var speed = cljs.core.nth.call(null,vec__7434,(0),null);
var on_finish = cljs.core.nth.call(null,vec__7434,(1),null);
return $elem.fadeOut(speed,on_finish);
});

jayq.core.fade_out.cljs$lang$maxFixedArity = (1);

jayq.core.fade_out.cljs$lang$applyTo = (function (seq7431){
var G__7432 = cljs.core.first.call(null,seq7431);
var seq7431__$1 = cljs.core.next.call(null,seq7431);
return jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic(G__7432,seq7431__$1);
});
jayq.core.fade_in = (function jayq$core$fade_in(var_args){
var args__6941__auto__ = [];
var len__6934__auto___7442 = arguments.length;
var i__6935__auto___7443 = (0);
while(true){
if((i__6935__auto___7443 < len__6934__auto___7442)){
args__6941__auto__.push((arguments[i__6935__auto___7443]));

var G__7444 = (i__6935__auto___7443 + (1));
i__6935__auto___7443 = G__7444;
continue;
} else {
}
break;
}

var argseq__6942__auto__ = ((((1) < args__6941__auto__.length))?(new cljs.core.IndexedSeq(args__6941__auto__.slice((1)),(0),null)):null);
return jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6942__auto__);
});

jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__7440){
var vec__7441 = p__7440;
var speed = cljs.core.nth.call(null,vec__7441,(0),null);
var on_finish = cljs.core.nth.call(null,vec__7441,(1),null);
return $elem.fadeIn(speed,on_finish);
});

jayq.core.fade_in.cljs$lang$maxFixedArity = (1);

jayq.core.fade_in.cljs$lang$applyTo = (function (seq7438){
var G__7439 = cljs.core.first.call(null,seq7438);
var seq7438__$1 = cljs.core.next.call(null,seq7438);
return jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic(G__7439,seq7438__$1);
});
jayq.core.slide_up = (function jayq$core$slide_up(var_args){
var args__6941__auto__ = [];
var len__6934__auto___7449 = arguments.length;
var i__6935__auto___7450 = (0);
while(true){
if((i__6935__auto___7450 < len__6934__auto___7449)){
args__6941__auto__.push((arguments[i__6935__auto___7450]));

var G__7451 = (i__6935__auto___7450 + (1));
i__6935__auto___7450 = G__7451;
continue;
} else {
}
break;
}

var argseq__6942__auto__ = ((((1) < args__6941__auto__.length))?(new cljs.core.IndexedSeq(args__6941__auto__.slice((1)),(0),null)):null);
return jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6942__auto__);
});

jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__7447){
var vec__7448 = p__7447;
var speed = cljs.core.nth.call(null,vec__7448,(0),null);
var on_finish = cljs.core.nth.call(null,vec__7448,(1),null);
return $elem.slideUp(speed,on_finish);
});

jayq.core.slide_up.cljs$lang$maxFixedArity = (1);

jayq.core.slide_up.cljs$lang$applyTo = (function (seq7445){
var G__7446 = cljs.core.first.call(null,seq7445);
var seq7445__$1 = cljs.core.next.call(null,seq7445);
return jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic(G__7446,seq7445__$1);
});
jayq.core.slide_down = (function jayq$core$slide_down(var_args){
var args__6941__auto__ = [];
var len__6934__auto___7456 = arguments.length;
var i__6935__auto___7457 = (0);
while(true){
if((i__6935__auto___7457 < len__6934__auto___7456)){
args__6941__auto__.push((arguments[i__6935__auto___7457]));

var G__7458 = (i__6935__auto___7457 + (1));
i__6935__auto___7457 = G__7458;
continue;
} else {
}
break;
}

var argseq__6942__auto__ = ((((1) < args__6941__auto__.length))?(new cljs.core.IndexedSeq(args__6941__auto__.slice((1)),(0),null)):null);
return jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6942__auto__);
});

jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__7454){
var vec__7455 = p__7454;
var speed = cljs.core.nth.call(null,vec__7455,(0),null);
var on_finish = cljs.core.nth.call(null,vec__7455,(1),null);
return $elem.slideDown(speed,on_finish);
});

jayq.core.slide_down.cljs$lang$maxFixedArity = (1);

jayq.core.slide_down.cljs$lang$applyTo = (function (seq7452){
var G__7453 = cljs.core.first.call(null,seq7452);
var seq7452__$1 = cljs.core.next.call(null,seq7452);
return jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic(G__7453,seq7452__$1);
});
jayq.core.siblings = (function jayq$core$siblings(var_args){
var args7459 = [];
var len__6934__auto___7462 = arguments.length;
var i__6935__auto___7463 = (0);
while(true){
if((i__6935__auto___7463 < len__6934__auto___7462)){
args7459.push((arguments[i__6935__auto___7463]));

var G__7464 = (i__6935__auto___7463 + (1));
i__6935__auto___7463 = G__7464;
continue;
} else {
}
break;
}

var G__7461 = args7459.length;
switch (G__7461) {
case 1:
return jayq.core.siblings.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.siblings.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7459.length)].join('')));

}
});

jayq.core.siblings.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.siblings();
});

jayq.core.siblings.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.siblings(cljs.core.name.call(null,selector));
});

jayq.core.siblings.cljs$lang$maxFixedArity = 2;
jayq.core.parent = (function jayq$core$parent($elem){
return $elem.parent();
});
jayq.core.parents = (function jayq$core$parents(var_args){
var args7466 = [];
var len__6934__auto___7469 = arguments.length;
var i__6935__auto___7470 = (0);
while(true){
if((i__6935__auto___7470 < len__6934__auto___7469)){
args7466.push((arguments[i__6935__auto___7470]));

var G__7471 = (i__6935__auto___7470 + (1));
i__6935__auto___7470 = G__7471;
continue;
} else {
}
break;
}

var G__7468 = args7466.length;
switch (G__7468) {
case 1:
return jayq.core.parents.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.parents.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7466.length)].join('')));

}
});

jayq.core.parents.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.parents();
});

jayq.core.parents.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.parents(cljs.core.name.call(null,selector));
});

jayq.core.parents.cljs$lang$maxFixedArity = 2;
jayq.core.parents_until = (function jayq$core$parents_until(var_args){
var args7473 = [];
var len__6934__auto___7476 = arguments.length;
var i__6935__auto___7477 = (0);
while(true){
if((i__6935__auto___7477 < len__6934__auto___7476)){
args7473.push((arguments[i__6935__auto___7477]));

var G__7478 = (i__6935__auto___7477 + (1));
i__6935__auto___7477 = G__7478;
continue;
} else {
}
break;
}

var G__7475 = args7473.length;
switch (G__7475) {
case 1:
return jayq.core.parents_until.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.parents_until.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.parents_until.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7473.length)].join('')));

}
});

jayq.core.parents_until.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.parentsUntil();
});

jayq.core.parents_until.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.parentsUntil(jayq.core.__GT_selector.call(null,selector));
});

jayq.core.parents_until.cljs$core$IFn$_invoke$arity$3 = (function ($elem,selector,filtr){
return $elem.parentsUntil(jayq.core.__GT_selector.call(null,selector),cljs.core.name.call(null,filtr));
});

jayq.core.parents_until.cljs$lang$maxFixedArity = 3;
jayq.core.children = (function jayq$core$children(var_args){
var args7480 = [];
var len__6934__auto___7483 = arguments.length;
var i__6935__auto___7484 = (0);
while(true){
if((i__6935__auto___7484 < len__6934__auto___7483)){
args7480.push((arguments[i__6935__auto___7484]));

var G__7485 = (i__6935__auto___7484 + (1));
i__6935__auto___7484 = G__7485;
continue;
} else {
}
break;
}

var G__7482 = args7480.length;
switch (G__7482) {
case 2:
return jayq.core.children.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.children.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7480.length)].join('')));

}
});

jayq.core.children.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.children(cljs.core.name.call(null,selector));
});

jayq.core.children.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.children();
});

jayq.core.children.cljs$lang$maxFixedArity = 2;
jayq.core.next = (function jayq$core$next(var_args){
var args7487 = [];
var len__6934__auto___7490 = arguments.length;
var i__6935__auto___7491 = (0);
while(true){
if((i__6935__auto___7491 < len__6934__auto___7490)){
args7487.push((arguments[i__6935__auto___7491]));

var G__7492 = (i__6935__auto___7491 + (1));
i__6935__auto___7491 = G__7492;
continue;
} else {
}
break;
}

var G__7489 = args7487.length;
switch (G__7489) {
case 1:
return jayq.core.next.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.next.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7487.length)].join('')));

}
});

jayq.core.next.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.next();
});

jayq.core.next.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.next(cljs.core.name.call(null,selector));
});

jayq.core.next.cljs$lang$maxFixedArity = 2;
jayq.core.prev = (function jayq$core$prev(var_args){
var args7494 = [];
var len__6934__auto___7497 = arguments.length;
var i__6935__auto___7498 = (0);
while(true){
if((i__6935__auto___7498 < len__6934__auto___7497)){
args7494.push((arguments[i__6935__auto___7498]));

var G__7499 = (i__6935__auto___7498 + (1));
i__6935__auto___7498 = G__7499;
continue;
} else {
}
break;
}

var G__7496 = args7494.length;
switch (G__7496) {
case 1:
return jayq.core.prev.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.prev.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7494.length)].join('')));

}
});

jayq.core.prev.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.prev();
});

jayq.core.prev.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.prev(cljs.core.name.call(null,selector));
});

jayq.core.prev.cljs$lang$maxFixedArity = 2;
jayq.core.next_all = (function jayq$core$next_all(var_args){
var args7501 = [];
var len__6934__auto___7504 = arguments.length;
var i__6935__auto___7505 = (0);
while(true){
if((i__6935__auto___7505 < len__6934__auto___7504)){
args7501.push((arguments[i__6935__auto___7505]));

var G__7506 = (i__6935__auto___7505 + (1));
i__6935__auto___7505 = G__7506;
continue;
} else {
}
break;
}

var G__7503 = args7501.length;
switch (G__7503) {
case 1:
return jayq.core.next_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.next_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7501.length)].join('')));

}
});

jayq.core.next_all.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.nextAll();
});

jayq.core.next_all.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.nextAll(cljs.core.name.call(null,selector));
});

jayq.core.next_all.cljs$lang$maxFixedArity = 2;
jayq.core.prev_all = (function jayq$core$prev_all(var_args){
var args7508 = [];
var len__6934__auto___7511 = arguments.length;
var i__6935__auto___7512 = (0);
while(true){
if((i__6935__auto___7512 < len__6934__auto___7511)){
args7508.push((arguments[i__6935__auto___7512]));

var G__7513 = (i__6935__auto___7512 + (1));
i__6935__auto___7512 = G__7513;
continue;
} else {
}
break;
}

var G__7510 = args7508.length;
switch (G__7510) {
case 1:
return jayq.core.prev_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.prev_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7508.length)].join('')));

}
});

jayq.core.prev_all.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.prevAll();
});

jayq.core.prev_all.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.prevAll(cljs.core.name.call(null,selector));
});

jayq.core.prev_all.cljs$lang$maxFixedArity = 2;
jayq.core.next_until = (function jayq$core$next_until(var_args){
var args7515 = [];
var len__6934__auto___7518 = arguments.length;
var i__6935__auto___7519 = (0);
while(true){
if((i__6935__auto___7519 < len__6934__auto___7518)){
args7515.push((arguments[i__6935__auto___7519]));

var G__7520 = (i__6935__auto___7519 + (1));
i__6935__auto___7519 = G__7520;
continue;
} else {
}
break;
}

var G__7517 = args7515.length;
switch (G__7517) {
case 1:
return jayq.core.next_until.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.next_until.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.next_until.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7515.length)].join('')));

}
});

jayq.core.next_until.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.nextUntil();
});

jayq.core.next_until.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.nextUntil(jayq.core.__GT_selector.call(null,selector));
});

jayq.core.next_until.cljs$core$IFn$_invoke$arity$3 = (function ($elem,selector,filtr){
return $elem.nextUntil(jayq.core.__GT_selector.call(null,selector),cljs.core.name.call(null,filtr));
});

jayq.core.next_until.cljs$lang$maxFixedArity = 3;
jayq.core.prev_until = (function jayq$core$prev_until(var_args){
var args7522 = [];
var len__6934__auto___7525 = arguments.length;
var i__6935__auto___7526 = (0);
while(true){
if((i__6935__auto___7526 < len__6934__auto___7525)){
args7522.push((arguments[i__6935__auto___7526]));

var G__7527 = (i__6935__auto___7526 + (1));
i__6935__auto___7526 = G__7527;
continue;
} else {
}
break;
}

var G__7524 = args7522.length;
switch (G__7524) {
case 1:
return jayq.core.prev_until.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.prev_until.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.prev_until.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7522.length)].join('')));

}
});

jayq.core.prev_until.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.prevUntil();
});

jayq.core.prev_until.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.prevUntil(jayq.core.__GT_selector.call(null,selector));
});

jayq.core.prev_until.cljs$core$IFn$_invoke$arity$3 = (function ($elem,selector,filtr){
return $elem.prevUntil(jayq.core.__GT_selector.call(null,selector),cljs.core.name.call(null,filtr));
});

jayq.core.prev_until.cljs$lang$maxFixedArity = 3;
jayq.core.find = (function jayq$core$find($elem,selector){
return $elem.find(cljs.core.name.call(null,selector));
});
jayq.core.closest = (function jayq$core$closest(var_args){
var args__6941__auto__ = [];
var len__6934__auto___7534 = arguments.length;
var i__6935__auto___7535 = (0);
while(true){
if((i__6935__auto___7535 < len__6934__auto___7534)){
args__6941__auto__.push((arguments[i__6935__auto___7535]));

var G__7536 = (i__6935__auto___7535 + (1));
i__6935__auto___7535 = G__7536;
continue;
} else {
}
break;
}

var argseq__6942__auto__ = ((((2) < args__6941__auto__.length))?(new cljs.core.IndexedSeq(args__6941__auto__.slice((2)),(0),null)):null);
return jayq.core.closest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6942__auto__);
});

jayq.core.closest.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,selector,p__7532){
var vec__7533 = p__7532;
var context = cljs.core.nth.call(null,vec__7533,(0),null);
return $elem.closest(jayq.core.__GT_selector.call(null,selector),context);
});

jayq.core.closest.cljs$lang$maxFixedArity = (2);

jayq.core.closest.cljs$lang$applyTo = (function (seq7529){
var G__7530 = cljs.core.first.call(null,seq7529);
var seq7529__$1 = cljs.core.next.call(null,seq7529);
var G__7531 = cljs.core.first.call(null,seq7529__$1);
var seq7529__$2 = cljs.core.next.call(null,seq7529__$1);
return jayq.core.closest.cljs$core$IFn$_invoke$arity$variadic(G__7530,G__7531,seq7529__$2);
});
jayq.core.clone = (function jayq$core$clone($elem){
return $elem.clone();
});
jayq.core.html = (function jayq$core$html(var_args){
var args7537 = [];
var len__6934__auto___7540 = arguments.length;
var i__6935__auto___7541 = (0);
while(true){
if((i__6935__auto___7541 < len__6934__auto___7540)){
args7537.push((arguments[i__6935__auto___7541]));

var G__7542 = (i__6935__auto___7541 + (1));
i__6935__auto___7541 = G__7542;
continue;
} else {
}
break;
}

var G__7539 = args7537.length;
switch (G__7539) {
case 2:
return jayq.core.html.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.html.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7537.length)].join('')));

}
});

jayq.core.html.cljs$core$IFn$_invoke$arity$2 = (function ($elem,v){
return $elem.html(v);
});

jayq.core.html.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.html();
});

jayq.core.html.cljs$lang$maxFixedArity = 2;
jayq.core.inner = jayq.core.html;
jayq.core.empty = (function jayq$core$empty($elem){
return $elem.empty();
});
jayq.core.val = (function jayq$core$val(var_args){
var args7544 = [];
var len__6934__auto___7547 = arguments.length;
var i__6935__auto___7548 = (0);
while(true){
if((i__6935__auto___7548 < len__6934__auto___7547)){
args7544.push((arguments[i__6935__auto___7548]));

var G__7549 = (i__6935__auto___7548 + (1));
i__6935__auto___7548 = G__7549;
continue;
} else {
}
break;
}

var G__7546 = args7544.length;
switch (G__7546) {
case 2:
return jayq.core.val.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.val.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7544.length)].join('')));

}
});

jayq.core.val.cljs$core$IFn$_invoke$arity$2 = (function ($elem,v){
return $elem.val(v);
});

jayq.core.val.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.val();
});

jayq.core.val.cljs$lang$maxFixedArity = 2;
jayq.core.serialize = (function jayq$core$serialize($elem){
return $elem.serialize();
});
jayq.core.queue = (function jayq$core$queue(var_args){
var args7551 = [];
var len__6934__auto___7554 = arguments.length;
var i__6935__auto___7555 = (0);
while(true){
if((i__6935__auto___7555 < len__6934__auto___7554)){
args7551.push((arguments[i__6935__auto___7555]));

var G__7556 = (i__6935__auto___7555 + (1));
i__6935__auto___7555 = G__7556;
continue;
} else {
}
break;
}

var G__7553 = args7551.length;
switch (G__7553) {
case 3:
return jayq.core.queue.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return jayq.core.queue.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.queue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7551.length)].join('')));

}
});

jayq.core.queue.cljs$core$IFn$_invoke$arity$3 = (function ($elem,x,y){
return $elem.queue(x,y);
});

jayq.core.queue.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.queue(x);
});

jayq.core.queue.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.queue();
});

jayq.core.queue.cljs$lang$maxFixedArity = 3;
jayq.core.dequeue = (function jayq$core$dequeue(var_args){
var args7558 = [];
var len__6934__auto___7561 = arguments.length;
var i__6935__auto___7562 = (0);
while(true){
if((i__6935__auto___7562 < len__6934__auto___7561)){
args7558.push((arguments[i__6935__auto___7562]));

var G__7563 = (i__6935__auto___7562 + (1));
i__6935__auto___7562 = G__7563;
continue;
} else {
}
break;
}

var G__7560 = args7558.length;
switch (G__7560) {
case 2:
return jayq.core.dequeue.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.dequeue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7558.length)].join('')));

}
});

jayq.core.dequeue.cljs$core$IFn$_invoke$arity$2 = (function ($elem,queue_name){
return $elem.dequeue(queue_name);
});

jayq.core.dequeue.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.dequeue();
});

jayq.core.dequeue.cljs$lang$maxFixedArity = 2;
jayq.core.document_ready = (function jayq$core$document_ready(func){
return jayq.core.$.call(null,document).ready(func);
});
jayq.core.mimetype_converter = (function jayq$core$mimetype_converter(s){
return cljs.reader.read_string.call(null,[cljs.core.str(s)].join(''));
});
jQuery.ajaxSetup(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"accepts","accepts",1429714104),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"edn","edn",1317840885),"application/edn, text/edn",new cljs.core.Keyword(null,"clojure","clojure",438975815),"application/clojure, text/clojure"], null),new cljs.core.Keyword(null,"contents","contents",-1567174023),new cljs.core.PersistentArrayMap(null, 1, ["clojure",/edn|clojure/], null),new cljs.core.Keyword(null,"converters","converters",195533259),new cljs.core.PersistentArrayMap(null, 2, ["text edn",jayq.core.mimetype_converter,"text clojure",jayq.core.mimetype_converter], null)], null)));
jayq.core.clj_content_type_QMARK_ = (function jayq$core$clj_content_type_QMARK_(x){
return cljs.core.re_find.call(null,/^(text|application)\/(clojure|edn)/,x);
});
jayq.core.__GT_content_type = (function jayq$core$__GT_content_type(ct){
if(typeof ct === 'string'){
return ct;
} else {
if((ct instanceof cljs.core.Keyword)){
return cljs.core.subs.call(null,[cljs.core.str(ct)].join(''),(1));
} else {
return null;
}
}
});
jayq.core.preprocess_request = (function jayq$core$preprocess_request(p__7567){
var map__7570 = p__7567;
var map__7570__$1 = ((((!((map__7570 == null)))?((((map__7570.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7570.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7570):map__7570);
var request = map__7570__$1;
var data = cljs.core.get.call(null,map__7570__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var contentType = cljs.core.get.call(null,map__7570__$1,new cljs.core.Keyword(null,"contentType","contentType",-1462509576));
var ct = jayq.core.__GT_content_type.call(null,contentType);
return ((function (ct,map__7570,map__7570__$1,request,data,contentType){
return (function (p1__7566_SHARP_){
if(cljs.core.truth_((function (){var and__5852__auto__ = ct;
if(cljs.core.truth_(and__5852__auto__)){
return jayq.core.clj_content_type_QMARK_.call(null,ct);
} else {
return and__5852__auto__;
}
})())){
return cljs.core.assoc.call(null,p1__7566_SHARP_,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.pr_str.call(null,data));
} else {
return p1__7566_SHARP_;
}
});})(ct,map__7570,map__7570__$1,request,data,contentType))
.call(null,((function (ct,map__7570,map__7570__$1,request,data,contentType){
return (function (p1__7565_SHARP_){
if(cljs.core.truth_(ct)){
return cljs.core.assoc.call(null,p1__7565_SHARP_,new cljs.core.Keyword(null,"contentType","contentType",-1462509576),ct);
} else {
return p1__7565_SHARP_;
}
});})(ct,map__7570,map__7570__$1,request,data,contentType))
.call(null,request));
});
jayq.core.__GT_ajax_settings = (function jayq$core$__GT_ajax_settings(request){
return cljs.core.clj__GT_js.call(null,jayq.core.preprocess_request.call(null,request));
});
jayq.core.ajax = (function jayq$core$ajax(var_args){
var args7572 = [];
var len__6934__auto___7575 = arguments.length;
var i__6935__auto___7576 = (0);
while(true){
if((i__6935__auto___7576 < len__6934__auto___7575)){
args7572.push((arguments[i__6935__auto___7576]));

var G__7577 = (i__6935__auto___7576 + (1));
i__6935__auto___7576 = G__7577;
continue;
} else {
}
break;
}

var G__7574 = args7572.length;
switch (G__7574) {
case 2:
return jayq.core.ajax.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.ajax.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7572.length)].join('')));

}
});

jayq.core.ajax.cljs$core$IFn$_invoke$arity$2 = (function (url,settings){
return jQuery.ajax(url,jayq.core.__GT_ajax_settings.call(null,settings));
});

jayq.core.ajax.cljs$core$IFn$_invoke$arity$1 = (function (settings){
return jQuery.ajax(jayq.core.__GT_ajax_settings.call(null,settings));
});

jayq.core.ajax.cljs$lang$maxFixedArity = 2;
jayq.core.xhr = (function jayq$core$xhr(p__7579,content,callback){
var vec__7581 = p__7579;
var method = cljs.core.nth.call(null,vec__7581,(0),null);
var uri = cljs.core.nth.call(null,vec__7581,(1),null);
var params = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),clojure.string.upper_case.call(null,cljs.core.name.call(null,method)),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.clj__GT_js.call(null,content),new cljs.core.Keyword(null,"success","success",1890645906),callback], null));
return jQuery.ajax(uri,params);
});
/**
 * Reads clojure data from element content (preferably a script tag with type=edn/clojure)
 */
jayq.core.read = (function jayq$core$read($elem){
return cljs.reader.read_string.call(null,jayq.core.html.call(null,$elem));
});
jayq.core.$contains = jQuery.contains;
jayq.core.bind = (function jayq$core$bind($elem,ev,func){
return $elem.bind(cljs.core.name.call(null,ev),func);
});
jayq.core.unbind = (function jayq$core$unbind(var_args){
var args__6941__auto__ = [];
var len__6934__auto___7587 = arguments.length;
var i__6935__auto___7588 = (0);
while(true){
if((i__6935__auto___7588 < len__6934__auto___7587)){
args__6941__auto__.push((arguments[i__6935__auto___7588]));

var G__7589 = (i__6935__auto___7588 + (1));
i__6935__auto___7588 = G__7589;
continue;
} else {
}
break;
}

var argseq__6942__auto__ = ((((2) < args__6941__auto__.length))?(new cljs.core.IndexedSeq(args__6941__auto__.slice((2)),(0),null)):null);
return jayq.core.unbind.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6942__auto__);
});

jayq.core.unbind.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,ev,p__7585){
var vec__7586 = p__7585;
var func = cljs.core.nth.call(null,vec__7586,(0),null);
return $elem.unbind(cljs.core.name.call(null,ev),func);
});

jayq.core.unbind.cljs$lang$maxFixedArity = (2);

jayq.core.unbind.cljs$lang$applyTo = (function (seq7582){
var G__7583 = cljs.core.first.call(null,seq7582);
var seq7582__$1 = cljs.core.next.call(null,seq7582);
var G__7584 = cljs.core.first.call(null,seq7582__$1);
var seq7582__$2 = cljs.core.next.call(null,seq7582__$1);
return jayq.core.unbind.cljs$core$IFn$_invoke$arity$variadic(G__7583,G__7584,seq7582__$2);
});
jayq.core.trigger = (function jayq$core$trigger($elem,ev){
return $elem.trigger(cljs.core.name.call(null,ev));
});
jayq.core.delegate = (function jayq$core$delegate($elem,sel,ev,func){
return $elem.delegate(jayq.core.__GT_selector.call(null,sel),cljs.core.name.call(null,ev),func);
});
jayq.core.__GT_event = (function jayq$core$__GT_event(e){
if(cljs.core.coll_QMARK_.call(null,e)){
return clojure.string.join.call(null," ",cljs.core.map.call(null,cljs.core.name,e));
} else {
return cljs.core.clj__GT_js.call(null,e);
}
});
jayq.core.on = (function jayq$core$on(var_args){
var args__6941__auto__ = [];
var len__6934__auto___7595 = arguments.length;
var i__6935__auto___7596 = (0);
while(true){
if((i__6935__auto___7596 < len__6934__auto___7595)){
args__6941__auto__.push((arguments[i__6935__auto___7596]));

var G__7597 = (i__6935__auto___7596 + (1));
i__6935__auto___7596 = G__7597;
continue;
} else {
}
break;
}

var argseq__6942__auto__ = ((((2) < args__6941__auto__.length))?(new cljs.core.IndexedSeq(args__6941__auto__.slice((2)),(0),null)):null);
return jayq.core.on.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6942__auto__);
});

jayq.core.on.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__7593){
var vec__7594 = p__7593;
var sel = cljs.core.nth.call(null,vec__7594,(0),null);
var data = cljs.core.nth.call(null,vec__7594,(1),null);
var handler = cljs.core.nth.call(null,vec__7594,(2),null);
return $elem.on(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),data,handler);
});

jayq.core.on.cljs$lang$maxFixedArity = (2);

jayq.core.on.cljs$lang$applyTo = (function (seq7590){
var G__7591 = cljs.core.first.call(null,seq7590);
var seq7590__$1 = cljs.core.next.call(null,seq7590);
var G__7592 = cljs.core.first.call(null,seq7590__$1);
var seq7590__$2 = cljs.core.next.call(null,seq7590__$1);
return jayq.core.on.cljs$core$IFn$_invoke$arity$variadic(G__7591,G__7592,seq7590__$2);
});
jayq.core.one = (function jayq$core$one(var_args){
var args__6941__auto__ = [];
var len__6934__auto___7603 = arguments.length;
var i__6935__auto___7604 = (0);
while(true){
if((i__6935__auto___7604 < len__6934__auto___7603)){
args__6941__auto__.push((arguments[i__6935__auto___7604]));

var G__7605 = (i__6935__auto___7604 + (1));
i__6935__auto___7604 = G__7605;
continue;
} else {
}
break;
}

var argseq__6942__auto__ = ((((2) < args__6941__auto__.length))?(new cljs.core.IndexedSeq(args__6941__auto__.slice((2)),(0),null)):null);
return jayq.core.one.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6942__auto__);
});

jayq.core.one.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__7601){
var vec__7602 = p__7601;
var sel = cljs.core.nth.call(null,vec__7602,(0),null);
var data = cljs.core.nth.call(null,vec__7602,(1),null);
var handler = cljs.core.nth.call(null,vec__7602,(2),null);
return $elem.one(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),data,handler);
});

jayq.core.one.cljs$lang$maxFixedArity = (2);

jayq.core.one.cljs$lang$applyTo = (function (seq7598){
var G__7599 = cljs.core.first.call(null,seq7598);
var seq7598__$1 = cljs.core.next.call(null,seq7598);
var G__7600 = cljs.core.first.call(null,seq7598__$1);
var seq7598__$2 = cljs.core.next.call(null,seq7598__$1);
return jayq.core.one.cljs$core$IFn$_invoke$arity$variadic(G__7599,G__7600,seq7598__$2);
});
jayq.core.off = (function jayq$core$off(var_args){
var args__6941__auto__ = [];
var len__6934__auto___7611 = arguments.length;
var i__6935__auto___7612 = (0);
while(true){
if((i__6935__auto___7612 < len__6934__auto___7611)){
args__6941__auto__.push((arguments[i__6935__auto___7612]));

var G__7613 = (i__6935__auto___7612 + (1));
i__6935__auto___7612 = G__7613;
continue;
} else {
}
break;
}

var argseq__6942__auto__ = ((((2) < args__6941__auto__.length))?(new cljs.core.IndexedSeq(args__6941__auto__.slice((2)),(0),null)):null);
return jayq.core.off.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6942__auto__);
});

jayq.core.off.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__7609){
var vec__7610 = p__7609;
var sel = cljs.core.nth.call(null,vec__7610,(0),null);
var handler = cljs.core.nth.call(null,vec__7610,(1),null);
return $elem.off(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),handler);
});

jayq.core.off.cljs$lang$maxFixedArity = (2);

jayq.core.off.cljs$lang$applyTo = (function (seq7606){
var G__7607 = cljs.core.first.call(null,seq7606);
var seq7606__$1 = cljs.core.next.call(null,seq7606);
var G__7608 = cljs.core.first.call(null,seq7606__$1);
var seq7606__$2 = cljs.core.next.call(null,seq7606__$1);
return jayq.core.off.cljs$core$IFn$_invoke$arity$variadic(G__7607,G__7608,seq7606__$2);
});
jayq.core.prevent = (function jayq$core$prevent(e){
return e.preventDefault();
});
jayq.core.height = (function jayq$core$height(var_args){
var args7614 = [];
var len__6934__auto___7617 = arguments.length;
var i__6935__auto___7618 = (0);
while(true){
if((i__6935__auto___7618 < len__6934__auto___7617)){
args7614.push((arguments[i__6935__auto___7618]));

var G__7619 = (i__6935__auto___7618 + (1));
i__6935__auto___7618 = G__7619;
continue;
} else {
}
break;
}

var G__7616 = args7614.length;
switch (G__7616) {
case 2:
return jayq.core.height.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.height.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7614.length)].join('')));

}
});

jayq.core.height.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.height(x);
});

jayq.core.height.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.height();
});

jayq.core.height.cljs$lang$maxFixedArity = 2;
jayq.core.width = (function jayq$core$width(var_args){
var args7621 = [];
var len__6934__auto___7624 = arguments.length;
var i__6935__auto___7625 = (0);
while(true){
if((i__6935__auto___7625 < len__6934__auto___7624)){
args7621.push((arguments[i__6935__auto___7625]));

var G__7626 = (i__6935__auto___7625 + (1));
i__6935__auto___7625 = G__7626;
continue;
} else {
}
break;
}

var G__7623 = args7621.length;
switch (G__7623) {
case 2:
return jayq.core.width.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.width.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7621.length)].join('')));

}
});

jayq.core.width.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.width(x);
});

jayq.core.width.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.width();
});

jayq.core.width.cljs$lang$maxFixedArity = 2;
jayq.core.inner_height = (function jayq$core$inner_height($elem){
return $elem.innerHeight();
});
jayq.core.inner_width = (function jayq$core$inner_width($elem){
return $elem.innerWidth();
});
jayq.core.outer_height = (function jayq$core$outer_height($elem){
return $elem.outerHeight();
});
jayq.core.outer_width = (function jayq$core$outer_width($elem){
return $elem.outerWidth();
});
jayq.core.offset = (function jayq$core$offset(var_args){
var args7628 = [];
var len__6934__auto___7631 = arguments.length;
var i__6935__auto___7632 = (0);
while(true){
if((i__6935__auto___7632 < len__6934__auto___7631)){
args7628.push((arguments[i__6935__auto___7632]));

var G__7633 = (i__6935__auto___7632 + (1));
i__6935__auto___7632 = G__7633;
continue;
} else {
}
break;
}

var G__7630 = args7628.length;
switch (G__7630) {
case 2:
return jayq.core.offset.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.offset.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7628.length)].join('')));

}
});

jayq.core.offset.cljs$core$IFn$_invoke$arity$2 = (function ($elem,coords){
return cljs.core.clj__GT_js.call(null,coords).offset();
});

jayq.core.offset.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return cljs.core.js__GT_clj.call(null,$elem.offset(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});

jayq.core.offset.cljs$lang$maxFixedArity = 2;
jayq.core.offset_parent = (function jayq$core$offset_parent($elem){
return $elem.offsetParent();
});
jayq.core.position = (function jayq$core$position($elem){
return cljs.core.js__GT_clj.call(null,$elem.position(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});
jayq.core.scroll_left = (function jayq$core$scroll_left(var_args){
var args7635 = [];
var len__6934__auto___7638 = arguments.length;
var i__6935__auto___7639 = (0);
while(true){
if((i__6935__auto___7639 < len__6934__auto___7638)){
args7635.push((arguments[i__6935__auto___7639]));

var G__7640 = (i__6935__auto___7639 + (1));
i__6935__auto___7639 = G__7640;
continue;
} else {
}
break;
}

var G__7637 = args7635.length;
switch (G__7637) {
case 1:
return jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7635.length)].join('')));

}
});

jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.scrollLeft();
});

jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.scrollLeft(x);
});

jayq.core.scroll_left.cljs$lang$maxFixedArity = 2;
jayq.core.scroll_top = (function jayq$core$scroll_top(var_args){
var args7642 = [];
var len__6934__auto___7645 = arguments.length;
var i__6935__auto___7646 = (0);
while(true){
if((i__6935__auto___7646 < len__6934__auto___7645)){
args7642.push((arguments[i__6935__auto___7646]));

var G__7647 = (i__6935__auto___7646 + (1));
i__6935__auto___7646 = G__7647;
continue;
} else {
}
break;
}

var G__7644 = args7642.length;
switch (G__7644) {
case 1:
return jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7642.length)].join('')));

}
});

jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.scrollTop();
});

jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.scrollTop(x);
});

jayq.core.scroll_top.cljs$lang$maxFixedArity = 2;
jayq.core.$deferred = jQuery.Deferred;
jayq.core.$when = jQuery.when;
jayq.core.then = (function jayq$core$then(var_args){
var args7649 = [];
var len__6934__auto___7652 = arguments.length;
var i__6935__auto___7653 = (0);
while(true){
if((i__6935__auto___7653 < len__6934__auto___7652)){
args7649.push((arguments[i__6935__auto___7653]));

var G__7654 = (i__6935__auto___7653 + (1));
i__6935__auto___7653 = G__7654;
continue;
} else {
}
break;
}

var G__7651 = args7649.length;
switch (G__7651) {
case 3:
return jayq.core.then.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return jayq.core.then.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7649.length)].join('')));

}
});

jayq.core.then.cljs$core$IFn$_invoke$arity$3 = (function (deferred,done_fn,fail_fn){
return deferred.then(cljs.core.clj__GT_js.call(null,done_fn),cljs.core.clj__GT_js.call(null,fail_fn));
});

jayq.core.then.cljs$core$IFn$_invoke$arity$4 = (function (deferred,done_fn,fail_fn,progress_fn){
return deferred.then(cljs.core.clj__GT_js.call(null,done_fn),cljs.core.clj__GT_js.call(null,fail_fn),cljs.core.clj__GT_js.call(null,progress_fn));
});

jayq.core.then.cljs$lang$maxFixedArity = 4;
jayq.core.done = (function jayq$core$done(var_args){
var args__6941__auto__ = [];
var len__6934__auto___7658 = arguments.length;
var i__6935__auto___7659 = (0);
while(true){
if((i__6935__auto___7659 < len__6934__auto___7658)){
args__6941__auto__.push((arguments[i__6935__auto___7659]));

var G__7660 = (i__6935__auto___7659 + (1));
i__6935__auto___7659 = G__7660;
continue;
} else {
}
break;
}

var argseq__6942__auto__ = ((((1) < args__6941__auto__.length))?(new cljs.core.IndexedSeq(args__6941__auto__.slice((1)),(0),null)):null);
return jayq.core.done.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6942__auto__);
});

jayq.core.done.cljs$core$IFn$_invoke$arity$variadic = (function (deferred,fns_args){
return deferred.done.apply(deferred,cljs.core.clj__GT_js.call(null,fns_args));
});

jayq.core.done.cljs$lang$maxFixedArity = (1);

jayq.core.done.cljs$lang$applyTo = (function (seq7656){
var G__7657 = cljs.core.first.call(null,seq7656);
var seq7656__$1 = cljs.core.next.call(null,seq7656);
return jayq.core.done.cljs$core$IFn$_invoke$arity$variadic(G__7657,seq7656__$1);
});
jayq.core.fail = (function jayq$core$fail(var_args){
var args__6941__auto__ = [];
var len__6934__auto___7663 = arguments.length;
var i__6935__auto___7664 = (0);
while(true){
if((i__6935__auto___7664 < len__6934__auto___7663)){
args__6941__auto__.push((arguments[i__6935__auto___7664]));

var G__7665 = (i__6935__auto___7664 + (1));
i__6935__auto___7664 = G__7665;
continue;
} else {
}
break;
}

var argseq__6942__auto__ = ((((1) < args__6941__auto__.length))?(new cljs.core.IndexedSeq(args__6941__auto__.slice((1)),(0),null)):null);
return jayq.core.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6942__auto__);
});

jayq.core.fail.cljs$core$IFn$_invoke$arity$variadic = (function (deferred,fns_args){
return deferred.fail.apply(deferred,cljs.core.clj__GT_js.call(null,fns_args));
});

jayq.core.fail.cljs$lang$maxFixedArity = (1);

jayq.core.fail.cljs$lang$applyTo = (function (seq7661){
var G__7662 = cljs.core.first.call(null,seq7661);
var seq7661__$1 = cljs.core.next.call(null,seq7661);
return jayq.core.fail.cljs$core$IFn$_invoke$arity$variadic(G__7662,seq7661__$1);
});
jayq.core.progress = (function jayq$core$progress(deferred,fns_args){
return deferred.progress(cljs.core.clj__GT_js.call(null,fns_args));
});
jayq.core.promise = (function jayq$core$promise(var_args){
var args7666 = [];
var len__6934__auto___7669 = arguments.length;
var i__6935__auto___7670 = (0);
while(true){
if((i__6935__auto___7670 < len__6934__auto___7669)){
args7666.push((arguments[i__6935__auto___7670]));

var G__7671 = (i__6935__auto___7670 + (1));
i__6935__auto___7670 = G__7671;
continue;
} else {
}
break;
}

var G__7668 = args7666.length;
switch (G__7668) {
case 1:
return jayq.core.promise.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.promise.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.promise.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7666.length)].join('')));

}
});

jayq.core.promise.cljs$core$IFn$_invoke$arity$1 = (function (deferred){
return deferred.promise();
});

jayq.core.promise.cljs$core$IFn$_invoke$arity$2 = (function (deferred,type){
return deferred.promise(type);
});

jayq.core.promise.cljs$core$IFn$_invoke$arity$3 = (function (deferred,type,target){
return deferred.promise(type,target);
});

jayq.core.promise.cljs$lang$maxFixedArity = 3;
jayq.core.always = (function jayq$core$always(var_args){
var args__6941__auto__ = [];
var len__6934__auto___7675 = arguments.length;
var i__6935__auto___7676 = (0);
while(true){
if((i__6935__auto___7676 < len__6934__auto___7675)){
args__6941__auto__.push((arguments[i__6935__auto___7676]));

var G__7677 = (i__6935__auto___7676 + (1));
i__6935__auto___7676 = G__7677;
continue;
} else {
}
break;
}

var argseq__6942__auto__ = ((((1) < args__6941__auto__.length))?(new cljs.core.IndexedSeq(args__6941__auto__.slice((1)),(0),null)):null);
return jayq.core.always.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6942__auto__);
});

jayq.core.always.cljs$core$IFn$_invoke$arity$variadic = (function (deferred,fns_args){
return deferred.always.apply(deferred,cljs.core.clj__GT_js.call(null,fns_args));
});

jayq.core.always.cljs$lang$maxFixedArity = (1);

jayq.core.always.cljs$lang$applyTo = (function (seq7673){
var G__7674 = cljs.core.first.call(null,seq7673);
var seq7673__$1 = cljs.core.next.call(null,seq7673);
return jayq.core.always.cljs$core$IFn$_invoke$arity$variadic(G__7674,seq7673__$1);
});
jayq.core.reject = (function jayq$core$reject(deferred,args){
return deferred.reject(args);
});
jayq.core.reject_with = (function jayq$core$reject_with(deferred,context,args){
return deferred.rejectWith(context,args);
});
jayq.core.notify = (function jayq$core$notify(deferred,args){
return deferred.notify(args);
});
jayq.core.notify_with = (function jayq$core$notify_with(deferred,context,args){
return deferred.notifyWith(context,args);
});
jayq.core.resolve = (function jayq$core$resolve(deferred,args){
return deferred.resolve(args);
});
jayq.core.resolve_with = (function jayq$core$resolve_with(deferred,context,args){
return deferred.resolveWith(context,args);
});
jayq.core.pipe = (function jayq$core$pipe(var_args){
var args7678 = [];
var len__6934__auto___7681 = arguments.length;
var i__6935__auto___7682 = (0);
while(true){
if((i__6935__auto___7682 < len__6934__auto___7681)){
args7678.push((arguments[i__6935__auto___7682]));

var G__7683 = (i__6935__auto___7682 + (1));
i__6935__auto___7682 = G__7683;
continue;
} else {
}
break;
}

var G__7680 = args7678.length;
switch (G__7680) {
case 2:
return jayq.core.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return jayq.core.pipe.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7678.length)].join('')));

}
});

jayq.core.pipe.cljs$core$IFn$_invoke$arity$2 = (function (deferred,done_filter){
return deferred.pipe(done_filter);
});

jayq.core.pipe.cljs$core$IFn$_invoke$arity$3 = (function (deferred,done_filter,fail_filter){
return deferred.pipe(done_filter,fail_filter);
});

jayq.core.pipe.cljs$core$IFn$_invoke$arity$4 = (function (deferred,done_filter,fail_filter,progress_filter){
return deferred.pipe(done_filter,fail_filter,progress_filter);
});

jayq.core.pipe.cljs$lang$maxFixedArity = 4;
jayq.core.state = (function jayq$core$state(deferred){
return cljs.core.keyword.call(null,deferred.state());
});
jayq.core.deferred_m = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"return","return",-1891502105),jayq.core.$when,new cljs.core.Keyword(null,"bind","bind",-113428417),(function (x,f){
var dfd = jayq.core.$deferred.call(null);
jayq.core.done.call(null,x,((function (dfd){
return (function (v){
return jayq.core.done.call(null,f.call(null,v),cljs.core.partial.call(null,jayq.core.resolve,dfd));
});})(dfd))
);

return jayq.core.promise.call(null,dfd);
}),new cljs.core.Keyword(null,"zero","zero",-858964576),cljs.core.identity], null);
jayq.core.ajax_m = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"return","return",-1891502105),cljs.core.identity,new cljs.core.Keyword(null,"bind","bind",-113428417),(function (x,f){
return jayq.core.done.call(null,jayq.core.ajax.call(null,x),f);
}),new cljs.core.Keyword(null,"zero","zero",-858964576),cljs.core.identity], null);

//# sourceMappingURL=core.js.map