import{S as B,i as J,s as R,e as h,k as M,l as D,c as k,a as b,d,m as G,b as f,Y as V,g as v,I as w,_ as U,R as L,U as Y,q as I,o as P,n as $,p as A,v as F,$ as H,t as K,h as O,f as Q,j as T,J as y,w as W,x as X,y as Z,B as x}from"./vendor-532580da.js";import{L as ee}from"./pokemon-17df5e2e.js";function N(s){let e,l,a,t,r,_,z,u,p,m,g,C,j,c={ctx:s,current:null,token:null,hasCatch:!0,pending:le,then:te,catch:ae,value:5,error:6,blocks:[,,,]};L(a=s[3](s[1].images.large),c);let o=s[0]&&S();return{c(){e=h("div"),l=h("div"),c.block.c(),t=M(),r=h("div"),_=h("img"),p=M(),o&&o.c(),m=D(),this.h()},l(i){e=k(i,"DIV",{id:!0,class:!0});var n=b(e);l=k(n,"DIV",{class:!0});var E=b(l);c.block.l(E),E.forEach(d),t=G(n),r=k(n,"DIV",{class:!0});var q=b(r);_=k(q,"IMG",{src:!0,alt:!0,class:!0}),q.forEach(d),n.forEach(d),p=G(i),o&&o.l(i),m=D(),this.h()},h(){f(l,"class","card__face card--front svelte-1tkx64z"),V(_.src,z="/images/cards/base1_back.png")||f(_,"src",z),f(_,"alt",u=s[1].name),f(_,"class","svelte-1tkx64z"),f(r,"class","card__face card--back svelte-1tkx64z"),f(e,"id","card"),f(e,"class","card no-drag svelte-1tkx64z")},m(i,n){v(i,e,n),w(e,l),c.block.m(l,c.anchor=null),c.mount=()=>l,c.anchor=null,w(e,t),w(e,r),w(r,_),v(i,p,n),o&&o.m(i,n),v(i,m,n),g=!0,C||(j=U(e,"click",s[2]),C=!0)},p(i,n){s=i,c.ctx=s,n&2&&a!==(a=s[3](s[1].images.large))&&L(a,c)||Y(c,s,n),(!g||n&2&&u!==(u=s[1].name))&&f(_,"alt",u),s[0]?o||(o=S(),o.c(),o.m(m.parentNode,m)):o&&(o.d(1),o=null)},i(i){g||(I(c.block),g=!0)},o(i){for(let n=0;n<3;n+=1){const E=c.blocks[n];P(E)}g=!1},d(i){i&&d(e),c.block.d(),c.token=null,c=null,i&&d(p),o&&o.d(i),i&&d(m),C=!1,j()}}}function ae(s){let e,l=s[6].message+"",a;return{c(){e=h("p"),a=K(l),this.h()},l(t){e=k(t,"P",{style:!0});var r=b(e);a=O(r,l),r.forEach(d),this.h()},h(){Q(e,"color","red")},m(t,r){v(t,e,r),w(e,a)},p(t,r){r&2&&l!==(l=t[6].message+"")&&T(a,l)},i:y,o:y,d(t){t&&d(e)}}}function te(s){let e,l,a;return{c(){e=h("img"),this.h()},l(t){e=k(t,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){V(e.src,l=s[1].images.large)||f(e,"src",l),f(e,"alt",a=s[1].name),f(e,"class","svelte-1tkx64z")},m(t,r){v(t,e,r)},p(t,r){r&2&&!V(e.src,l=t[1].images.large)&&f(e,"src",l),r&2&&a!==(a=t[1].name)&&f(e,"alt",a)},i:y,o:y,d(t){t&&d(e)}}}function le(s){let e,l;return e=new ee({}),{c(){W(e.$$.fragment)},l(a){X(e.$$.fragment,a)},m(a,t){Z(e,a,t),l=!0},p:y,i(a){l||(I(e.$$.fragment,a),l=!0)},o(a){P(e.$$.fragment,a),l=!1},d(a){x(e,a)}}}function S(s){let e;return{c(){e=h("div"),this.h()},l(l){e=k(l,"DIV",{id:!0,class:!0}),b(e).forEach(d),this.h()},h(){f(e,"id","shadow"),f(e,"class","svelte-1tkx64z")},m(l,a){v(l,e,a)},d(l){l&&d(e)}}}function se(s){let e,l,a=s[1]&&N(s);return{c(){a&&a.c(),e=D()},l(t){a&&a.l(t),e=D()},m(t,r){a&&a.m(t,r),v(t,e,r),l=!0},p(t,[r]){t[1]?a?(a.p(t,r),r&2&&I(a,1)):(a=N(t),a.c(),I(a,1),a.m(e.parentNode,e)):a&&($(),P(a,1,1,()=>{a=null}),A())},i(t){l||(I(a),l=!0)},o(t){P(a),l=!1},d(t){a&&a.d(t),t&&d(e)}}}function re(s,e,l){F(()=>{});let{shadow:a=!1}=e,{data:t=void 0}=e;const r=H();let _=async u=>{r("click",u)},z=u=>new Promise(function(p){let m=new Image;m.onload=p,m.src=u});return s.$$set=u=>{"shadow"in u&&l(0,a=u.shadow),"data"in u&&l(1,t=u.data)},[a,t,_,z]}class ce extends B{constructor(e){super();J(this,e,re,se,R,{shadow:0,data:1})}}export{ce as P};