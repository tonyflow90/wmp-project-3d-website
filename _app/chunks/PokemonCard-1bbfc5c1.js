import{S as O,i as Q,s as U,e as h,k,l as G,c as v,a as g,d as u,m as I,b as c,K as B,g as w,G as _,Z as Y,R as T,T as x,q as E,o as C,n as ee,p as ae,v as te,a0 as se,w as W,x as X,y as Z,B as A,V as le,W as re,X as ie,L as F}from"./vendor-b03f454b.js";import{b as ce}from"./paths-4b3c6e7e.js";import{E as ne,L as oe}from"./pokemon-02328fb4.js";function H(r){let e,t,a,s,l,o,P,m,z,p,L,D,M,V,N,$,j,b,y,S,K,d={ctx:r,current:null,token:null,hasCatch:!0,pending:ue,then:fe,catch:de,value:5,error:6,blocks:[,,,]};T(a=r[3](r[1].images.small),d);let f=r[0]&&J();return{c(){e=h("div"),t=h("div"),d.block.c(),s=k(),l=h("div"),o=h("img"),z=k(),p=h("div"),L=k(),D=h("div"),M=k(),V=h("div"),N=k(),$=h("div"),j=k(),f&&f.c(),b=G(),this.h()},l(n){e=v(n,"DIV",{id:!0,class:!0});var i=g(e);t=v(i,"DIV",{class:!0});var q=g(t);d.block.l(q),q.forEach(u),s=I(i),l=v(i,"DIV",{class:!0});var R=g(l);o=v(R,"IMG",{src:!0,alt:!0,class:!0}),R.forEach(u),z=I(i),p=v(i,"DIV",{class:!0}),g(p).forEach(u),L=I(i),D=v(i,"DIV",{class:!0}),g(D).forEach(u),M=I(i),V=v(i,"DIV",{class:!0}),g(V).forEach(u),N=I(i),$=v(i,"DIV",{class:!0}),g($).forEach(u),i.forEach(u),j=I(n),f&&f.l(n),b=G(),this.h()},h(){c(t,"class","card__face card--front svelte-varhdz"),B(o.src,P=""+(ce+"/images/cards/base1_back.png"))||c(o,"src",P),c(o,"alt",m=r[1].name),c(o,"class","svelte-varhdz"),c(l,"class","card__face card--back svelte-varhdz"),c(p,"class","card__side card--right svelte-varhdz"),c(D,"class","card__side card--left svelte-varhdz"),c(V,"class","card__side card--top svelte-varhdz"),c($,"class","card__side card--bottom  svelte-varhdz"),c(e,"id","card"),c(e,"class","card no-drag svelte-varhdz")},m(n,i){w(n,e,i),_(e,t),d.block.m(t,d.anchor=null),d.mount=()=>t,d.anchor=null,_(e,s),_(e,l),_(l,o),_(e,z),_(e,p),_(e,L),_(e,D),_(e,M),_(e,V),_(e,N),_(e,$),w(n,j,i),f&&f.m(n,i),w(n,b,i),y=!0,S||(K=Y(e,"click",r[2]),S=!0)},p(n,i){r=n,d.ctx=r,i&2&&a!==(a=r[3](r[1].images.small))&&T(a,d)||x(d,r,i),(!y||i&2&&m!==(m=r[1].name))&&c(o,"alt",m),r[0]?f||(f=J(),f.c(),f.m(b.parentNode,b)):f&&(f.d(1),f=null)},i(n){y||(E(d.block),y=!0)},o(n){for(let i=0;i<3;i+=1){const q=d.blocks[i];C(q)}y=!1},d(n){n&&u(e),d.block.d(),d.token=null,d=null,n&&u(j),f&&f.d(n),n&&u(b),S=!1,K()}}}function de(r){let e,t;return e=new ne({props:{message:r[6].message}}),{c(){W(e.$$.fragment)},l(a){X(e.$$.fragment,a)},m(a,s){Z(e,a,s),t=!0},p(a,s){const l={};s&2&&(l.message=a[6].message),e.$set(l)},i(a){t||(E(e.$$.fragment,a),t=!0)},o(a){C(e.$$.fragment,a),t=!1},d(a){A(e,a)}}}function fe(r){let e,t,a,s;return{c(){e=h("img"),this.h()},l(l){e=v(l,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){B(e.src,t=r[1].images.small)||c(e,"src",t),c(e,"alt",a=r[1].name),c(e,"class","svelte-varhdz")},m(l,o){w(l,e,o)},p(l,o){o&2&&!B(e.src,t=l[1].images.small)&&c(e,"src",t),o&2&&a!==(a=l[1].name)&&c(e,"alt",a)},i(l){s||le(()=>{s=re(e,ie,{duration:500}),s.start()})},o:F,d(l){l&&u(e)}}}function ue(r){let e,t;return e=new oe({}),{c(){W(e.$$.fragment)},l(a){X(e.$$.fragment,a)},m(a,s){Z(e,a,s),t=!0},p:F,i(a){t||(E(e.$$.fragment,a),t=!0)},o(a){C(e.$$.fragment,a),t=!1},d(a){A(e,a)}}}function J(r){let e;return{c(){e=h("div"),this.h()},l(t){e=v(t,"DIV",{id:!0}),g(e).forEach(u),this.h()},h(){c(e,"id","shadow")},m(t,a){w(t,e,a)},d(t){t&&u(e)}}}function me(r){let e,t,a=r[1]&&H(r);return{c(){a&&a.c(),e=G()},l(s){a&&a.l(s),e=G()},m(s,l){a&&a.m(s,l),w(s,e,l),t=!0},p(s,[l]){s[1]?a?(a.p(s,l),l&2&&E(a,1)):(a=H(s),a.c(),E(a,1),a.m(e.parentNode,e)):a&&(ee(),C(a,1,1,()=>{a=null}),ae())},i(s){t||(E(a),t=!0)},o(s){C(a),t=!1},d(s){a&&a.d(s),s&&u(e)}}}function _e(r,e,t){te(()=>{});let{shadow:a=!1}=e,{data:s=void 0}=e;const l=se();let o=async m=>{l("click",m)},P=m=>new Promise(function(z){let p=new Image;p.onload=z,p.src=m});return r.$$set=m=>{"shadow"in m&&t(0,a=m.shadow),"data"in m&&t(1,s=m.data)},[a,s,o,P]}class ge extends O{constructor(e){super();Q(this,e,_e,me,U,{shadow:0,data:1})}}export{ge as P};
