import{S as I,i as q,s as D,k as y,w as p,Q as L,d as i,m as j,x as _,g as u,y as $,q as f,o as h,B as d,v as V,R as C,e as k,l as b,c as v,a as w,f as g,T as P,t as T,h as z,L as S,b as x,G,n as M,p as N,U as Q}from"../../chunks/vendor-b03f454b.js";import{P as R,p as U,E as W,L as F}from"../../chunks/pokemon-0216b51c.js";import{b as J}from"../../chunks/paths-4b3c6e7e.js";import{S as K}from"../../chunks/SetBox-10d6f365.js";import{H as O}from"../../chunks/Headline-572806f9.js";import"../../chunks/Trapezoid-2e5e3870.js";function E(c,t,n){const l=c.slice();return l[3]=t[n],l}function X(c){let t;return{c(){t=T(H)},l(n){t=z(n,H)},m(n,l){u(n,t,l)},p:S,d(n){n&&i(t)}}}function Y(c){let t,n;return t=new W({props:{message:c[6].message}}),{c(){p(t.$$.fragment)},l(l){_(t.$$.fragment,l)},m(l,e){$(t,l,e),n=!0},p:S,i(l){n||(f(t.$$.fragment,l),n=!0)},o(l){h(t.$$.fragment,l),n=!1},d(l){d(t,l)}}}function Z(c){let t,n,l=c[2]&&ee(c);return{c(){l&&l.c(),t=b()},l(e){l&&l.l(e),t=b()},m(e,o){l&&l.m(e,o),u(e,t,o),n=!0},p(e,o){e[2]&&l.p(e,o)},i(e){n||(f(l),n=!0)},o(e){h(l),n=!1},d(e){l&&l.d(e),e&&i(t)}}}function ee(c){let t,n,l=c[2],e=[];for(let r=0;r<l.length;r+=1)e[r]=A(E(c,l,r));const o=r=>h(e[r],1,1,()=>{e[r]=null});return{c(){t=k("div");for(let r=0;r<e.length;r+=1)e[r].c();this.h()},l(r){t=v(r,"DIV",{class:!0});var a=w(t);for(let s=0;s<e.length;s+=1)e[s].l(a);a.forEach(i),this.h()},h(){x(t,"class","grid")},m(r,a){u(r,t,a);for(let s=0;s<e.length;s+=1)e[s].m(t,null);n=!0},p(r,a){if(a&0){l=r[2];let s;for(s=0;s<l.length;s+=1){const m=E(r,l,s);e[s]?(e[s].p(m,a),f(e[s],1)):(e[s]=A(m),e[s].c(),f(e[s],1),e[s].m(t,null))}for(M(),s=l.length;s<e.length;s+=1)o(s);N()}},i(r){if(!n){for(let a=0;a<l.length;a+=1)f(e[a]);n=!0}},o(r){e=e.filter(Boolean);for(let a=0;a<e.length;a+=1)h(e[a]);n=!1},d(r){r&&i(t),Q(e,r)}}}function A(c){let t,n,l,e;return n=new K({props:{set:c[3]}}),{c(){t=k("a"),p(n.$$.fragment),l=y(),this.h()},l(o){t=v(o,"A",{href:!0});var r=w(t);_(n.$$.fragment,r),l=j(r),r.forEach(i),this.h()},h(){x(t,"href",""+(J+"/set/"+c[3].id))},m(o,r){u(o,t,r),$(n,t,null),G(t,l),e=!0},p:S,i(o){e||(f(n.$$.fragment,o),e=!0)},o(o){h(n.$$.fragment,o),e=!1},d(o){o&&i(t),d(n)}}}function te(c){let t,n,l;return t=new F({}),{c(){n=k("div"),p(t.$$.fragment),this.h()},l(e){n=v(e,"DIV",{style:!0});var o=w(n);_(t.$$.fragment,o),this.h()},h(){g(n,"display","contents"),g(n,"--height",`${c[0]}px`),g(n,"--width",`${c[1]}px`)},m(e,o){u(e,n,o),$(t,n,null),l=!0},p:S,i(e){l||(f(t.$$.fragment,e),l=!0)},o(e){h(t.$$.fragment,e),l=!1},d(e){e&&i(n),d(t,e)}}}function le(c){let t,n,l,e,o;t=new O({props:{$$slots:{default:[X]},$$scope:{ctx:c}}});let r={ctx:c,current:null,token:null,hasCatch:!0,pending:te,then:Z,catch:Y,value:2,error:6,blocks:[,,,]};return C(U.getAllSets(),r),{c(){n=k("div"),p(t.$$.fragment),l=y(),e=b(),r.block.c(),this.h()},l(a){n=v(a,"DIV",{style:!0});var s=w(n);_(t.$$.fragment,s),l=j(a),e=b(),r.block.l(a),this.h()},h(){g(n,"display","contents"),g(n,"--hue","165")},m(a,s){u(a,n,s),$(t,n,null),u(a,l,s),u(a,e,s),r.block.m(a,r.anchor=s),r.mount=()=>e.parentNode,r.anchor=e,o=!0},p(a,s){c=a;const m={};s&128&&(m.$$scope={dirty:s,ctx:c}),t.$set(m),P(r,c,s)},i(a){o||(f(t.$$.fragment,a),f(r.block),o=!0)},o(a){h(t.$$.fragment,a);for(let s=0;s<3;s+=1){const m=r.blocks[s];h(m)}o=!1},d(a){a&&i(n),d(t,a),a&&i(l),a&&i(e),r.block.d(a),r.token=null,r=null}}}function ne(c){let t,n,l,e;return document.title=t=B,l=new R({props:{$$slots:{default:[le]},$$scope:{ctx:c}}}),{c(){n=y(),p(l.$$.fragment)},l(o){L('[data-svelte="svelte-1uo06u1"]',document.head).forEach(i),n=j(o),_(l.$$.fragment,o)},m(o,r){u(o,n,r),$(l,o,r),e=!0},p(o,[r]){(!e||r&0)&&t!==(t=B)&&(document.title=t);const a={};r&128&&(a.$$scope={dirty:r,ctx:o}),l.$set(a)},i(o){e||(f(l.$$.fragment,o),e=!0)},o(o){h(l.$$.fragment,o),e=!1},d(o){o&&i(n),d(l,o)}}}let B="All Sets",H="All Sets";function re(c){V(async()=>{});let t=400,n=t*(3/4);return[t,n]}class ue extends I{constructor(t){super();q(this,t,re,ne,D,{})}}export{ue as default};