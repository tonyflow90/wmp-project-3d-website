import{S as D,i as E,s as T,e as h,c as b,a as p,d as m,b as v,g as d,F as V,k,l as I,m as y,H as q,I as H,J as N,q as S,o as j}from"./vendor-9e81697b.js";function z(_){let t;return{c(){t=h("div"),this.h()},l(l){t=b(l,"DIV",{class:!0}),p(t).forEach(m),this.h()},h(){v(t,"class","trapezoid-top svelte-15tm7ah")},m(l,n){d(l,t,n)},d(l){l&&m(t)}}}function g(_){let t;return{c(){t=h("div"),this.h()},l(l){t=b(l,"DIV",{class:!0}),p(t).forEach(m),this.h()},h(){v(t,"class","trapezoid-bottom svelte-15tm7ah")},m(l,n){d(l,t,n)},d(l){l&&m(t)}}}function C(_){let t,l,n,u,r,c,s=_[0]&&z();const o=_[4].default,a=V(o,_,_[3],null);let i=_[1]&&g();return{c(){s&&s.c(),t=k(),l=h("div"),a&&a.c(),u=k(),i&&i.c(),r=I(),this.h()},l(e){s&&s.l(e),t=y(e),l=b(e,"DIV",{class:!0});var f=p(l);a&&a.l(f),f.forEach(m),u=y(e),i&&i.l(e),r=I(),this.h()},h(){v(l,"class",n="trapezoid-content "+(_[2]?"background-image":"")+" svelte-15tm7ah")},m(e,f){s&&s.m(e,f),d(e,t,f),d(e,l,f),a&&a.m(l,null),d(e,u,f),i&&i.m(e,f),d(e,r,f),c=!0},p(e,[f]){e[0]?s||(s=z(),s.c(),s.m(t.parentNode,t)):s&&(s.d(1),s=null),a&&a.p&&(!c||f&8)&&q(a,o,e,e[3],c?N(o,e[3],f,null):H(e[3]),null),(!c||f&4&&n!==(n="trapezoid-content "+(e[2]?"background-image":"")+" svelte-15tm7ah"))&&v(l,"class",n),e[1]?i||(i=g(),i.c(),i.m(r.parentNode,r)):i&&(i.d(1),i=null)},i(e){c||(S(a,e),c=!0)},o(e){j(a,e),c=!1},d(e){s&&s.d(e),e&&m(t),e&&m(l),a&&a.d(e),e&&m(u),i&&i.d(e),e&&m(r)}}}function F(_,t,l){let{$$slots:n={},$$scope:u}=t,{top:r=!1}=t,{bottom:c=!1}=t,{srcImage:s}=t;return _.$$set=o=>{"top"in o&&l(0,r=o.top),"bottom"in o&&l(1,c=o.bottom),"srcImage"in o&&l(2,s=o.srcImage),"$$scope"in o&&l(3,u=o.$$scope)},[r,c,s,u,n]}class P extends D{constructor(t){super();E(this,t,F,C,T,{top:0,bottom:1,srcImage:2})}}export{P as T};
