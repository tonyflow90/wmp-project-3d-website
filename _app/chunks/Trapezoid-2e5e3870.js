import{S as D,i as E,s as T,e as d,c as h,a as b,d as u,b as p,g as m,F as V,k as v,l as k,m as z,H as q,I as N,J as S,q as j,o as C}from"./vendor-b03f454b.js";function y(o){let e;return{c(){e=d("div"),this.h()},l(l){e=h(l,"DIV",{class:!0}),b(e).forEach(u),this.h()},h(){p(e,"class","trapezoid-top svelte-15tm7ah")},m(l,n){m(l,e,n)},d(l){l&&u(e)}}}function I(o){let e;return{c(){e=d("div"),this.h()},l(l){e=h(l,"DIV",{class:!0}),b(e).forEach(u),this.h()},h(){p(e,"class","trapezoid-bottom svelte-15tm7ah")},m(l,n){m(l,e,n)},d(l){l&&u(e)}}}function F(o){let e,l,n,c,r,s=o[0]&&y();const _=o[3].default,f=V(_,o,o[2],null);let i=o[1]&&I();return{c(){s&&s.c(),e=v(),l=d("div"),f&&f.c(),n=v(),i&&i.c(),c=k(),this.h()},l(t){s&&s.l(t),e=z(t),l=h(t,"DIV",{class:!0});var a=b(l);f&&f.l(a),a.forEach(u),n=z(t),i&&i.l(t),c=k(),this.h()},h(){p(l,"class","trapezoid-content svelte-15tm7ah")},m(t,a){s&&s.m(t,a),m(t,e,a),m(t,l,a),f&&f.m(l,null),m(t,n,a),i&&i.m(t,a),m(t,c,a),r=!0},p(t,[a]){t[0]?s||(s=y(),s.c(),s.m(e.parentNode,e)):s&&(s.d(1),s=null),f&&f.p&&(!r||a&4)&&q(f,_,t,t[2],r?S(_,t[2],a,null):N(t[2]),null),t[1]?i||(i=I(),i.c(),i.m(c.parentNode,c)):i&&(i.d(1),i=null)},i(t){r||(j(f,t),r=!0)},o(t){C(f,t),r=!1},d(t){s&&s.d(t),t&&u(e),t&&u(l),f&&f.d(t),t&&u(n),i&&i.d(t),t&&u(c)}}}function H(o,e,l){let{$$slots:n={},$$scope:c}=e,{top:r=!1}=e,{bottom:s=!1}=e;return o.$$set=_=>{"top"in _&&l(0,r=_.top),"bottom"in _&&l(1,s=_.bottom),"$$scope"in _&&l(2,c=_.$$scope)},[r,s,c,n]}class w extends D{constructor(e){super();E(this,e,H,F,T,{top:0,bottom:1})}}export{w as T};