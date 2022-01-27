import{S as E,i as j,s as y,e as d,F as V,k,c as g,a as p,G as D,d as f,m as w,b as u,H as F,g as v,I as b,J as $,K as A,L as J,M as K,w as B,x as L,y as O,N as P,O as T,P as U,q as M,o as x,B as S}from"../chunks/vendor-a0fddeae.js";import{p as Q}from"../chunks/stores-585f0c6b.js";import{b as q}from"../chunks/paths-4b3c6e7e.js";const C=[{name:"Home",path:`${q}/`,svg:[{src:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"}]},{name:"Sets",path:`${q}/setlist`,svg:[{src:"M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"}]}];function N(c,e,l){const t=c.slice();return t[2]=e[l],t}function R(c,e,l){const t=c.slice();return t[5]=e[l],t}function z(c){let e;return{c(){e=V("path"),this.h()},l(l){e=D(l,"path",{d:!0}),p(e).forEach(f),this.h()},h(){u(e,"d",c[5].src)},m(l,t){v(l,e,t)},p:$,d(l){l&&f(e)}}}function G(c){let e,l,t,a,o,h=c[2].svg,s=[];for(let n=0;n<h.length;n+=1)s[n]=z(R(c,h,n));return{c(){e=d("li"),l=d("a"),t=V("svg");for(let n=0;n<s.length;n+=1)s[n].c();o=k(),this.h()},l(n){e=g(n,"LI",{class:!0});var m=p(e);l=g(m,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var i=p(l);t=D(i,"svg",{class:!0,xmlns:!0,width:!0,height:!0,viewBox:!0,fill:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0});var r=p(t);for(let _=0;_<s.length;_+=1)s[_].l(r);r.forEach(f),i.forEach(f),o=w(m),m.forEach(f),this.h()},h(){u(t,"class","h-5 w-5"),u(t,"xmlns","http://www.w3.org/2000/svg"),u(t,"width","24"),u(t,"height","24"),u(t,"viewBox","0 0 24 24"),u(t,"fill","none"),u(t,"stroke","currentColor"),u(t,"stroke-width","2"),u(t,"stroke-linecap","round"),u(t,"stroke-linejoin","round"),u(l,"sveltekit:prefetch",""),u(l,"href",a=c[2].path),u(l,"class","h-16 flex flex justify-center items-center w-full"),u(e,"class","hover:bg-gray-100 dark:hover:bg-gray-900 w-16"),F(e,"active",c[0].url.pathname===c[2].path)},m(n,m){v(n,e,m),b(e,l),b(l,t);for(let i=0;i<s.length;i+=1)s[i].m(t,null);b(e,o)},p(n,m){if(m&0){h=n[2].svg;let i;for(i=0;i<h.length;i+=1){const r=R(n,h,i);s[i]?s[i].p(r,m):(s[i]=z(r),s[i].c(),s[i].m(t,null))}for(;i<s.length;i+=1)s[i].d(1);s.length=h.length}m&1&&F(e,"active",n[0].url.pathname===n[2].path)},d(n){n&&f(e),A(s,n)}}}function W(c){let e,l,t=C,a=[];for(let o=0;o<t.length;o+=1)a[o]=G(N(c,t,o));return{c(){e=d("div"),l=d("ul");for(let o=0;o<a.length;o+=1)a[o].c();this.h()},l(o){e=g(o,"DIV",{class:!0});var h=p(e);l=g(h,"UL",{});var s=p(l);for(let n=0;n<a.length;n+=1)a[n].l(s);s.forEach(f),h.forEach(f),this.h()},h(){u(e,"class","")},m(o,h){v(o,e,h),b(e,l);for(let s=0;s<a.length;s+=1)a[s].m(l,null)},p(o,[h]){if(h&1){t=C;let s;for(s=0;s<t.length;s+=1){const n=N(o,t,s);a[s]?a[s].p(n,h):(a[s]=G(n),a[s].c(),a[s].m(l,null))}for(;s<a.length;s+=1)a[s].d(1);a.length=t.length}},i:$,o:$,d(o){o&&f(e),A(a,o)}}}function X(c,e,l){let t;return J(c,Q,a=>l(0,t=a)),[t]}class Y extends E{constructor(e){super();j(this,e,X,W,y,{})}}function Z(c){let e,l,t;return{c(){e=d("div"),l=k(),t=d("div"),this.h()},l(a){e=g(a,"DIV",{class:!0}),p(e).forEach(f),l=w(a),t=g(a,"DIV",{class:!0}),p(t).forEach(f),this.h()},h(){u(e,"class","trapezoid svelte-jpsvv2"),u(t,"class","footer svelte-jpsvv2")},m(a,o){v(a,e,o),v(a,l,o),v(a,t,o)},p:$,i:$,o:$,d(a){a&&f(e),a&&f(l),a&&f(t)}}}class ee extends E{constructor(e){super();j(this,e,null,Z,y,{})}}function te(c){let e,l,t,a,o,h,s,n;l=new Y({});const m=c[1].default,i=K(m,c,c[0],null);return s=new ee({}),{c(){e=d("header"),B(l.$$.fragment),t=k(),a=d("main"),i&&i.c(),o=k(),h=d("footer"),B(s.$$.fragment)},l(r){e=g(r,"HEADER",{});var _=p(e);L(l.$$.fragment,_),_.forEach(f),t=w(r),a=g(r,"MAIN",{});var H=p(a);i&&i.l(H),H.forEach(f),o=w(r),h=g(r,"FOOTER",{});var I=p(h);L(s.$$.fragment,I),I.forEach(f)},m(r,_){v(r,e,_),O(l,e,null),v(r,t,_),v(r,a,_),i&&i.m(a,null),v(r,o,_),v(r,h,_),O(s,h,null),n=!0},p(r,[_]){i&&i.p&&(!n||_&1)&&P(i,m,r,r[0],n?U(m,r[0],_,null):T(r[0]),null)},i(r){n||(M(l.$$.fragment,r),M(i,r),M(s.$$.fragment,r),n=!0)},o(r){x(l.$$.fragment,r),x(i,r),x(s.$$.fragment,r),n=!1},d(r){r&&f(e),S(l),r&&f(t),r&&f(a),i&&i.d(r),r&&f(o),r&&f(h),S(s)}}}function se(c,e,l){let{$$slots:t={},$$scope:a}=e;return c.$$set=o=>{"$$scope"in o&&l(0,a=o.$$scope)},[a,t]}class ne extends E{constructor(e){super();j(this,e,se,te,y,{})}}export{ne as default};
