import{S as D,i as E,s as T,e as b,c as h,a as p,d as u,b as v,g as d,F as V,k,l as I,m as z,H as q,I as H,J as N,q as S,o as j}from"./vendor-df654c82.js";function y(n){let t;return{c(){t=b("div"),this.h()},l(l){t=h(l,"DIV",{class:!0}),p(t).forEach(u),this.h()},h(){v(t,"class","trapezoid-top svelte-1lf10tf")},m(l,_){d(l,t,_)},d(l){l&&u(t)}}}function g(n){let t;return{c(){t=b("div"),this.h()},l(l){t=h(l,"DIV",{class:!0}),p(t).forEach(u),this.h()},h(){v(t,"class","trapezoid-bottom svelte-1lf10tf")},m(l,_){d(l,t,_)},d(l){l&&u(t)}}}function C(n){let t,l,_,m,r,c,s=n[0]&&y();const o=n[4].default,f=V(o,n,n[3],null);let i=n[1]&&g();return{c(){s&&s.c(),t=k(),l=b("div"),f&&f.c(),m=k(),i&&i.c(),r=I(),this.h()},l(e){s&&s.l(e),t=z(e),l=h(e,"DIV",{class:!0});var a=p(l);f&&f.l(a),a.forEach(u),m=z(e),i&&i.l(e),r=I(),this.h()},h(){v(l,"class",_="trapezoid-content "+(n[2]?"background-image":"")+" svelte-1lf10tf")},m(e,a){s&&s.m(e,a),d(e,t,a),d(e,l,a),f&&f.m(l,null),d(e,m,a),i&&i.m(e,a),d(e,r,a),c=!0},p(e,[a]){e[0]?s||(s=y(),s.c(),s.m(t.parentNode,t)):s&&(s.d(1),s=null),f&&f.p&&(!c||a&8)&&q(f,o,e,e[3],c?N(o,e[3],a,null):H(e[3]),null),(!c||a&4&&_!==(_="trapezoid-content "+(e[2]?"background-image":"")+" svelte-1lf10tf"))&&v(l,"class",_),e[1]?i||(i=g(),i.c(),i.m(r.parentNode,r)):i&&(i.d(1),i=null)},i(e){c||(S(f,e),c=!0)},o(e){j(f,e),c=!1},d(e){s&&s.d(e),e&&u(t),e&&u(l),f&&f.d(e),e&&u(m),i&&i.d(e),e&&u(r)}}}function F(n,t,l){let{$$slots:_={},$$scope:m}=t,{top:r=!1}=t,{bottom:c=!1}=t,{srcImage:s=!1}=t;return n.$$set=o=>{"top"in o&&l(0,r=o.top),"bottom"in o&&l(1,c=o.bottom),"srcImage"in o&&l(2,s=o.srcImage),"$$scope"in o&&l(3,m=o.$$scope)},[r,c,s,m,_]}class w extends D{constructor(t){super();E(this,t,F,C,T,{top:0,bottom:1,srcImage:2})}}export{w as T};
