import{S as M,i as O,s as Q,O as R,k as j,e as $,w,P as T,d as f,m as x,c as k,a as g,x as B,f as b,b as E,g as m,G as S,y as H,Q as U,q as p,R as z,o as v,T as F,B as I,v as J,t as V,h as D,L as y,U as K,V as q,n as N,p as X,W as Y,l as A}from"../../chunks/vendor-df654c82.js";import{S as Z}from"../../chunks/Book.svelte_svelte_type_style_lang-12460f86.js";import{H as ee,p as te,L as le}from"../../chunks/pokemon-a770bac3.js";import{b as ne}from"../../chunks/paths-4b3c6e7e.js";/* empty css                                                        */import"../../chunks/Headline.svelte_svelte_type_style_lang-47de378a.js";function L(r,t,n){const l=r.slice();return l[5]=t[n],l}function ae(r){let t;return{c(){t=V(W)},l(n){t=D(n,W)},m(n,l){m(n,t,l)},p:y,d(n){n&&f(t)}}}function se(r){let t,n=r[8].message+"",l;return{c(){t=$("p"),l=V(n),this.h()},l(e){t=k(e,"P",{style:!0});var a=g(t);l=D(a,n),a.forEach(f),this.h()},h(){b(t,"color","red")},m(e,a){m(e,t,a),S(t,l)},p:y,i:y,o:y,d(e){e&&f(t)}}}function oe(r){let t,n,l=r[4]&&re(r);return{c(){l&&l.c(),t=A()},l(e){l&&l.l(e),t=A()},m(e,a){l&&l.m(e,a),m(e,t,a),n=!0},p(e,a){e[4]&&l.p(e,a)},i(e){n||(p(l),n=!0)},o(e){v(l),n=!1},d(e){l&&l.d(e),e&&f(t)}}}function re(r){let t,n,l=r[4],e=[];for(let s=0;s<l.length;s+=1)e[s]=C(L(r,l,s));const a=s=>v(e[s],1,1,()=>{e[s]=null});return{c(){t=$("div");for(let s=0;s<e.length;s+=1)e[s].c();this.h()},l(s){t=k(s,"DIV",{class:!0});var i=g(t);for(let o=0;o<e.length;o+=1)e[o].l(i);i.forEach(f),this.h()},h(){E(t,"class","grid")},m(s,i){m(s,t,i);for(let o=0;o<e.length;o+=1)e[o].m(t,null);n=!0},p(s,i){if(i&0){l=s[4];let o;for(o=0;o<l.length;o+=1){const d=L(s,l,o);e[o]?(e[o].p(d,i),p(e[o],1)):(e[o]=C(d),e[o].c(),p(e[o],1),e[o].m(t,null))}for(N(),o=l.length;o<e.length;o+=1)a(o);X()}},i(s){if(!n){for(let i=0;i<l.length;i+=1)p(e[i]);n=!0}},o(s){e=e.filter(Boolean);for(let i=0;i<e.length;i+=1)v(e[i]);n=!1},d(s){s&&f(t),Y(e,s)}}}function C(r){let t,n,l,e;return n=new Z({props:{set:r[5]}}),{c(){t=$("a"),w(n.$$.fragment),l=j(),this.h()},l(a){t=k(a,"A",{href:!0});var s=g(t);B(n.$$.fragment,s),l=x(s),s.forEach(f),this.h()},h(){E(t,"href",""+(ne+"/set/"+r[5].id))},m(a,s){m(a,t,s),H(n,t,null),S(t,l),e=!0},p:y,i(a){e||(p(n.$$.fragment,a),e=!0)},o(a){v(n.$$.fragment,a),e=!1},d(a){a&&f(t),I(n)}}}function ie(r){let t,n,l;return t=new le({}),{c(){n=$("div"),w(t.$$.fragment),this.h()},l(e){n=k(e,"DIV",{style:!0});var a=g(n);B(t.$$.fragment,a),this.h()},h(){b(n,"display","contents"),b(n,"--height",`${r[0]}px`),b(n,"--width",`${r[1]}px`)},m(e,a){m(e,n,a),H(t,n,null),l=!0},p:y,i(e){l||(p(t.$$.fragment,e),l=!0)},o(e){v(t.$$.fragment,e),l=!1},d(e){e&&f(n),I(t,e)}}}function ce(r){let t,n,l,e,a,s,i,o,d;document.title=t=P,e=new ee({props:{$$slots:{default:[ae]},$$scope:{ctx:r}}});let u={ctx:r,current:null,token:null,hasCatch:!0,pending:ie,then:oe,catch:se,value:4,error:8,blocks:[,,,]};return R(te.getAllSets(),u),{c(){n=j(),l=$("div"),a=$("div"),w(e.$$.fragment),s=j(),u.block.c(),this.h()},l(c){T('[data-svelte="svelte-1uo06u1"]',document.head).forEach(f),n=x(c),l=k(c,"DIV",{class:!0});var h=g(l);a=k(h,"DIV",{style:!0});var G=g(a);B(e.$$.fragment,G),s=x(h),u.block.l(h),h.forEach(f),this.h()},h(){b(a,"display","contents"),b(a,"--hue","165"),E(l,"class","content svelte-1crnho6")},m(c,_){m(c,n,_),m(c,l,_),S(l,a),H(e,a,null),S(l,s),u.block.m(l,u.anchor=null),u.mount=()=>l,u.anchor=null,d=!0},p(c,[_]){r=c,(!d||_&0)&&t!==(t=P)&&(document.title=t);const h={};_&512&&(h.$$scope={dirty:_,ctx:r}),e.$set(h),U(u,r,_)},i(c){d||(p(e.$$.fragment,c),p(u.block),z(()=>{o&&o.end(1),i=K(l,q,{y:-500,duration:1e3}),i.start()}),d=!0)},o(c){v(e.$$.fragment,c);for(let _=0;_<3;_+=1){const h=u.blocks[_];v(h)}i&&i.invalidate(),o=F(l,q,{y:500,duration:1e3}),d=!1},d(c){c&&f(n),c&&f(l),I(e),u.block.d(),u.token=null,u=null,c&&o&&o.end()}}}let P="Home",W="All Sets";function ue(r){J(async()=>{});let t=400,n=t*(3/4);return[t,n]}class ve extends M{constructor(t){super();O(this,t,ue,ce,Q,{})}}export{ve as default};