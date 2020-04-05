var app=function(){"use strict";function t(){}const n=t=>t;function e(t,n){for(const e in n)t[e]=n[e];return t}function o(t){return t()}function r(){return Object.create(null)}function i(t){t.forEach(o)}function s(t){return"function"==typeof t}function l(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function a(t,n,o,r){return t[1]&&r?e(o.ctx.slice(),t[1](r(n))):o.ctx}const c="undefined"!=typeof window;let u=c?()=>window.performance.now():()=>Date.now(),f=c?t=>requestAnimationFrame(t):t;const d=new Set;function p(t){d.forEach(n=>{n.c(t)||(d.delete(n),n.f())}),0!==d.size&&f(p)}function m(t){let n;return 0===d.size&&f(p),{promise:new Promise(e=>{d.add(n={c:t,f:e})}),abort(){d.delete(n)}}}function $(t,n){t.appendChild(n)}function g(t,n,e){t.insertBefore(n,e||null)}function h(t){t.parentNode.removeChild(t)}function y(t){return document.createElement(t)}function x(t){return document.createTextNode(t)}function b(){return x(" ")}function v(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function w(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function _(t,n){n=""+n,t.data!==n&&(t.data=n)}function E(t,n){(null!=n||t.value)&&(t.value=n)}function k(t,n,e){t.classList[e?"add":"remove"](n)}const C=new Set;let F,S=0;function M(t,n,e,o,r,i,s,l=0){const a=16.666/o;let c="{\n";for(let t=0;t<=1;t+=a){const o=n+(e-n)*i(t);c+=100*t+`%{${s(o,1-o)}}\n`}const u=c+`100% {${s(e,1-e)}}\n}`,f=`__svelte_${function(t){let n=5381,e=t.length;for(;e--;)n=(n<<5)-n^t.charCodeAt(e);return n>>>0}(u)}_${l}`,d=t.ownerDocument;C.add(d);const p=d.__svelte_stylesheet||(d.__svelte_stylesheet=d.head.appendChild(y("style")).sheet),m=d.__svelte_rules||(d.__svelte_rules={});m[f]||(m[f]=!0,p.insertRule(`@keyframes ${f} ${u}`,p.cssRules.length));const $=t.style.animation||"";return t.style.animation=`${$?`${$}, `:""}${f} ${o}ms linear ${r}ms 1 both`,S+=1,f}function T(t,n){const e=(t.style.animation||"").split(", "),o=e.filter(n?t=>t.indexOf(n)<0:t=>-1===t.indexOf("__svelte")),r=e.length-o.length;r&&(t.style.animation=o.join(", "),S-=r,S||f(()=>{S||(C.forEach(t=>{const n=t.__svelte_stylesheet;let e=n.cssRules.length;for(;e--;)n.deleteRule(e);t.__svelte_rules={}}),C.clear())}))}function B(t,n){const e=t.getBoundingClientRect();if(n.left!==e.left||n.top!==e.top){const o=getComputedStyle(t),r="none"===o.transform?"":o.transform;t.style.transform=`${r} translate(${n.left-e.left}px, ${n.top-e.top}px)`}}function L(t){F=t}function R(){if(!F)throw new Error("Function called outside component initialization");return F}function A(t,n){R().$$.context.set(t,n)}function H(t){return R().$$.context.get(t)}const O=[],j=[],q=[],N=[],D=Promise.resolve();let P=!1;function z(t){q.push(t)}let I=!1;const W=new Set;function J(){if(!I){I=!0;do{for(let t=0;t<O.length;t+=1){const n=O[t];L(n),G(n.$$)}for(O.length=0;j.length;)j.pop()();for(let t=0;t<q.length;t+=1){const n=q[t];W.has(n)||(W.add(n),n())}q.length=0}while(O.length);for(;N.length;)N.pop()();P=!1,I=!1,W.clear()}}function G(t){if(null!==t.fragment){t.update(),i(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(z)}}let K;function Q(){return K||(K=Promise.resolve(),K.then(()=>{K=null})),K}function U(t,n,e){t.dispatchEvent(function(t,n){const e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,n),e}(`${n?"intro":"outro"}${e}`))}const V=new Set;let X;function Y(){X={r:0,c:[],p:X}}function Z(){X.r||i(X.c),X=X.p}function tt(t,n){t&&t.i&&(V.delete(t),t.i(n))}function nt(t,n,e,o){if(t&&t.o){if(V.has(t))return;V.add(t),X.c.push(()=>{V.delete(t),o&&(e&&t.d(1),o())}),t.o(n)}}const et={duration:0};function ot(e,o,r){let i,l,a=o(e,r),c=!1,f=0;function d(){i&&T(e,i)}function p(){const{delay:o=0,duration:r=300,easing:s=n,tick:p=t,css:$}=a||et;$&&(i=M(e,0,1,r,o,s,$,f++)),p(0,1);const g=u()+o,h=g+r;l&&l.abort(),c=!0,z(()=>U(e,!0,"start")),l=m(t=>{if(c){if(t>=h)return p(1,0),U(e,!0,"end"),d(),c=!1;if(t>=g){const n=s((t-g)/r);p(n,1-n)}}return c})}let $=!1;return{start(){$||(T(e),s(a)?(a=a(),Q().then(p)):p())},invalidate(){$=!1},end(){c&&(d(),c=!1)}}}function rt(e,o,r){let l,a=o(e,r),c=!0;const f=X;function d(){const{delay:o=0,duration:r=300,easing:s=n,tick:d=t,css:p}=a||et;p&&(l=M(e,1,0,r,o,s,p));const $=u()+o,g=$+r;z(()=>U(e,!1,"start")),m(t=>{if(c){if(t>=g)return d(0,1),U(e,!1,"end"),--f.r||i(f.c),!1;if(t>=$){const n=s((t-$)/r);d(1-n,n)}}return c})}return f.r+=1,s(a)?Q().then(()=>{a=a(),d()}):d(),{end(t){t&&a.tick&&a.tick(1,0),c&&(l&&T(e,l),c=!1)}}}function it(e,o,r,l){let a=o(e,r),c=l?0:1,f=null,d=null,p=null;function $(){p&&T(e,p)}function g(t,n){const e=t.b-c;return n*=Math.abs(e),{a:c,b:t.b,d:e,duration:n,start:t.start,end:t.start+n,group:t.group}}function h(o){const{delay:r=0,duration:s=300,easing:l=n,tick:h=t,css:y}=a||et,x={start:u()+r,b:o};o||(x.group=X,X.r+=1),f?d=x:(y&&($(),p=M(e,c,o,s,r,l,y)),o&&h(0,1),f=g(x,s),z(()=>U(e,o,"start")),m(t=>{if(d&&t>d.start&&(f=g(d,s),d=null,U(e,f.b,"start"),y&&($(),p=M(e,c,f.b,f.duration,0,l,a.css))),f)if(t>=f.end)h(c=f.b,1-c),U(e,f.b,"end"),d||(f.b?$():--f.group.r||i(f.group.c)),f=null;else if(t>=f.start){const n=t-f.start;c=f.a+f.d*l(n/f.duration),h(c,1-c)}return!(!f&&!d)}))}return{run(t){s(a)?Q().then(()=>{a=a(),h(t)}):h(t)},end(){$(),f=d=null}}}function st(t,n){t.f(),function(t,n){nt(t,1,1,()=>{n.delete(t.key)})}(t,n)}function lt(t){t&&t.c()}function at(t,n,e){const{fragment:r,on_mount:l,on_destroy:a,after_update:c}=t.$$;r&&r.m(n,e),z(()=>{const n=l.map(o).filter(s);a?a.push(...n):i(n),t.$$.on_mount=[]}),c.forEach(z)}function ct(t,n){const e=t.$$;null!==e.fragment&&(i(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ut(t,n){-1===t.$$.dirty[0]&&(O.push(t),P||(P=!0,D.then(J)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function ft(n,e,o,s,l,a,c=[-1]){const u=F;L(n);const f=e.props||{},d=n.$$={fragment:null,ctx:null,props:a,update:t,not_equal:l,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:c};let p=!1;if(d.ctx=o?o(n,f,(t,e,...o)=>{const r=o.length?o[0]:e;return d.ctx&&l(d.ctx[t],d.ctx[t]=r)&&(d.bound[t]&&d.bound[t](r),p&&ut(n,t)),e}):[],d.update(),p=!0,i(d.before_update),d.fragment=!!s&&s(d.ctx),e.target){if(e.hydrate){const t=function(t){return Array.from(t.childNodes)}(e.target);d.fragment&&d.fragment.l(t),t.forEach(h)}else d.fragment&&d.fragment.c();e.intro&&tt(n.$$.fragment),at(n,e.target,e.anchor),J()}L(u)}class dt{$destroy(){ct(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}function pt(n){let e,o,r,i,l,a;return{c(){e=y("nav"),o=y("div"),r=y("h1"),r.textContent="budget calculator",i=b(),l=y("button"),l.innerHTML='<i class="far fa-plus-square"></i>\n\t\t  Add item\n    ',w(r,"class","nav-title"),w(l,"type","button"),w(l,"class","nav-btn"),w(o,"class","nav-center"),w(e,"class","nav")},m(t,c,u){g(t,e,c),$(e,o),$(o,r),$(o,i),$(o,l),u&&a(),a=v(l,"click",(function(){s(n[0])&&n[0].apply(this,arguments)}))},p(t,[e]){n=t},i:t,o:t,d(t){t&&h(e),a()}}}function mt(t,n,e){let{showForm:o}=n;return t.$set=t=>{"showForm"in t&&e(0,o=t.showForm)},[o]}class $t extends dt{constructor(t){super(),ft(this,t,mt,pt,l,{showForm:0})}}function gt(n){let e,o,r;return{c(){e=y("div"),o=y("h2"),r=x(n[0]),w(e,"class","main-title")},m(t,n){g(t,e,n),$(e,o),$(o,r)},p(t,[n]){1&n&&_(r,t[0])},i:t,o:t,d(t){t&&h(e)}}}function ht(t,n,e){let{title:o="default title"}=n;return t.$set=t=>{"title"in t&&e(0,o=t.title)},[o]}class yt extends dt{constructor(t){super(),ft(this,t,ht,gt,l,{title:0})}}function xt(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1}function bt(t){const n=t-1;return n*n*n+1}function vt(t,{delay:n=0,duration:e=400,easing:o=xt,amount:r=5,opacity:i=0}){const s=getComputedStyle(t),l=+s.opacity,a="none"===s.filter?"":s.filter,c=l*(1-i);return{delay:n,duration:e,easing:o,css:(t,n)=>`opacity: ${l-c*n}; filter: ${a} blur(${n*r}px);`}}function wt(t,{delay:e=0,duration:o=400,easing:r=n}){const i=+getComputedStyle(t).opacity;return{delay:e,duration:o,easing:r,css:t=>`opacity: ${t*i}`}}function _t(t,{delay:n=0,duration:e=400,easing:o=bt,x:r=0,y:i=0,opacity:s=0}){const l=getComputedStyle(t),a=+l.opacity,c="none"===l.transform?"":l.transform,u=a*(1-s);return{delay:n,duration:e,easing:o,css:(t,n)=>`\n\t\t\ttransform: ${c} translate(${(1-t)*r}px, ${(1-t)*i}px);\n\t\t\topacity: ${a-u*n}`}}function Et(t,{delay:n=0,duration:e=400,easing:o=bt}){const r=getComputedStyle(t),i=+r.opacity,s=parseFloat(r.height),l=parseFloat(r.paddingTop),a=parseFloat(r.paddingBottom),c=parseFloat(r.marginTop),u=parseFloat(r.marginBottom),f=parseFloat(r.borderTopWidth),d=parseFloat(r.borderBottomWidth);return{delay:n,duration:e,easing:o,css:t=>"overflow: hidden;"+`opacity: ${Math.min(20*t,1)*i};`+`height: ${t*s}px;`+`padding-top: ${t*l}px;`+`padding-bottom: ${t*a}px;`+`margin-top: ${t*c}px;`+`margin-bottom: ${t*u}px;`+`border-top-width: ${t*f}px;`+`border-bottom-width: ${t*d}px;`}}function kt(t){let n,e,o,r,i;return{c(){n=y("h4"),e=x("amount : $"),o=x(t[2])},m(t,r){g(t,n,r),$(n,e),$(n,o),i=!0},p(t,n){(!i||4&n)&&_(o,t[2])},i(t){i||(z(()=>{r||(r=it(n,Et,{},!0)),r.run(1)}),i=!0)},o(t){r||(r=it(n,Et,{},!1)),r.run(0),i=!1},d(t){t&&h(n),t&&r&&r.end()}}}function Ct(t){let n,e,o,r,s,l,a,c,u,f,d,p,m,E,k=t[3]&&kt(t);return{c(){n=y("article"),e=y("div"),o=y("h2"),r=x(t[1]),s=b(),l=y("button"),l.innerHTML='<i class="fas fa-caret-down"></i>',a=b(),k&&k.c(),c=b(),u=y("div"),f=y("button"),f.innerHTML='<i class="fas fa-pen"></i>',d=b(),p=y("button"),p.innerHTML='<i class="fas fa-trash"></i>',w(l,"class","amount-btn"),w(e,"class","expense-info"),w(f,"class","expense-btn edit-btn"),w(p,"class","expense-btn delete-btn"),w(u,"class","expense-buttons"),w(n,"class","single-expense")},m(h,y,x){g(h,n,y),$(n,e),$(e,o),$(o,r),$(o,s),$(o,l),$(e,a),k&&k.m(e,null),$(n,c),$(n,u),$(u,f),$(u,d),$(u,p),m=!0,x&&i(E),E=[v(l,"click",t[4]),v(f,"click",t[7]),v(p,"click",t[8])]},p(t,[n]){(!m||2&n)&&_(r,t[1]),t[3]?k?(k.p(t,n),tt(k,1)):(k=kt(t),k.c(),tt(k,1),k.m(e,null)):k&&(Y(),nt(k,1,1,()=>{k=null}),Z())},i(t){m||(tt(k),m=!0)},o(t){nt(k),m=!1},d(t){t&&h(n),k&&k.d(),i(E)}}}function Ft(t,n,e){let{id:o}=n,{name:r=""}=n,{amount:i=0}=n,s=!1;const l=H("remove"),a=H("modify");return t.$set=t=>{"id"in t&&e(0,o=t.id),"name"in t&&e(1,r=t.name),"amount"in t&&e(2,i=t.amount)},[o,r,i,s,function(){e(3,s=!s)},l,a,()=>a(o),()=>l(o)]}class St extends dt{constructor(t){super(),ft(this,t,Ft,Ct,l,{id:0,name:1,amount:2})}}function Mt(t,n,e){const o=getComputedStyle(t),r="none"===o.transform?"":o.transform,i=n.from.width/t.clientWidth,l=n.from.height/t.clientHeight,a=(n.from.left-n.to.left)/i,c=(n.from.top-n.to.top)/l,u=Math.sqrt(a*a+c*c),{delay:f=0,duration:d=(t=>120*Math.sqrt(t)),easing:p=bt}=e;return{delay:f,duration:s(d)?d(u):d,easing:p,css:(t,n)=>`transform: ${r} translate(${n*a}px, ${n*c}px);`}}function Tt(t,n,e){const o=t.slice();return o[1]=n[e],o[3]=e,o}function Bt(t){let n;return{c(){n=y("h2"),n.textContent="no expenses added to the list",w(n,"class","svelte-1vw5eac")},m(t,e){g(t,n,e)},d(t){t&&h(n)}}}function Lt(o,r){let i,s,l,a,c,f,d=t;const p=[r[1]];let x={};for(let t=0;t<p.length;t+=1)x=e(x,p[t]);const v=new St({props:x});return{key:o,first:null,c(){i=y("div"),lt(v.$$.fragment),s=b(),this.first=i},m(t,n){g(t,i,n),at(v,i,null),$(i,s),f=!0},p(t,n){const e=1&n?function(t,n){const e={},o={},r={$$scope:1};let i=t.length;for(;i--;){const s=t[i],l=n[i];if(l){for(const t in s)t in l||(o[t]=1);for(const t in l)r[t]||(e[t]=l[t],r[t]=1);t[i]=l}else for(const t in s)r[t]=1}for(const t in o)t in e||(e[t]=void 0);return e}(p,[(o=t[1],"object"==typeof o&&null!==o?o:{})]):{};var o;v.$set(e)},r(){c=i.getBoundingClientRect()},f(){!function(t){const n=getComputedStyle(t);if("absolute"!==n.position&&"fixed"!==n.position){const{width:e,height:o}=n,r=t.getBoundingClientRect();t.style.position="absolute",t.style.width=e,t.style.height=o,B(t,r)}}(i),d(),B(i,c)},a(){d(),d=function(e,o,r,i){if(!o)return t;const s=e.getBoundingClientRect();if(o.left===s.left&&o.right===s.right&&o.top===s.top&&o.bottom===s.bottom)return t;const{delay:l=0,duration:a=300,easing:c=n,start:f=u()+l,end:d=f+a,tick:p=t,css:$}=r(e,{from:o,to:s},i);let g,h=!0,y=!1;function x(){$&&T(e,g),h=!1}return m(t=>{if(!y&&t>=f&&(y=!0),y&&t>=d&&(p(1,0),x()),!h)return!1;if(y){const n=0+1*c((t-f)/a);p(n,1-n)}return!0}),$&&(g=M(e,0,1,a,l,c,$)),l||(y=!0),p(0,1),x}(i,c,Mt,{})},i(t){f||(tt(v.$$.fragment,t),z(()=>{a&&a.end(1),l||(l=ot(i,_t,{x:200,delay:700*(r[3]+1)})),l.start()}),f=!0)},o(t){nt(v.$$.fragment,t),l&&l.invalidate(),a=rt(i,_t,{x:-200}),f=!1},d(t){t&&h(i),ct(v),t&&a&&a.end()}}}function Rt(t){let n,e,o,r,i=[],s=new Map;const l=new yt({props:{title:"expense list"}});let a=t[0];const c=t=>t[1].id;for(let n=0;n<a.length;n+=1){let e=Tt(t,a,n),o=c(e);s.set(o,i[n]=Lt(o,e))}let u=null;return a.length||(u=Bt()),{c(){n=y("section"),lt(l.$$.fragment),e=b(),o=y("ul");for(let t=0;t<i.length;t+=1)i[t].c();u&&u.c()},m(t,s){g(t,n,s),at(l,n,null),$(n,e),$(n,o);for(let t=0;t<i.length;t+=1)i[t].m(o,null);u&&u.m(o,null),r=!0},p(t,[n]){if(1&n){const e=t[0];Y();for(let t=0;t<i.length;t+=1)i[t].r();i=function(t,n,e,o,r,i,s,l,a,c,u,f){let d=t.length,p=i.length,m=d;const $={};for(;m--;)$[t[m].key]=m;const g=[],h=new Map,y=new Map;for(m=p;m--;){const t=f(r,i,m),l=e(t);let a=s.get(l);a?o&&a.p(t,n):(a=c(l,t),a.c()),h.set(l,g[m]=a),l in $&&y.set(l,Math.abs(m-$[l]))}const x=new Set,b=new Set;function v(t){tt(t,1),t.m(l,u,s.has(t.key)),s.set(t.key,t),u=t.first,p--}for(;d&&p;){const n=g[p-1],e=t[d-1],o=n.key,r=e.key;n===e?(u=n.first,d--,p--):h.has(r)?!s.has(o)||x.has(o)?v(n):b.has(r)?d--:y.get(o)>y.get(r)?(b.add(o),v(n)):(x.add(r),d--):(a(e,s),d--)}for(;d--;){const n=t[d];h.has(n.key)||a(n,s)}for(;p;)v(g[p-1]);return g}(i,n,c,1,t,e,s,o,st,Lt,null,Tt);for(let t=0;t<i.length;t+=1)i[t].a();Z(),e.length?u&&(u.d(1),u=null):u||(u=Bt(),u.c(),u.m(o,null))}},i(t){if(!r){tt(l.$$.fragment,t);for(let t=0;t<a.length;t+=1)tt(i[t]);r=!0}},o(t){nt(l.$$.fragment,t);for(let t=0;t<i.length;t+=1)nt(i[t]);r=!1},d(t){t&&h(n),ct(l);for(let t=0;t<i.length;t+=1)i[t].d();u&&u.d()}}}function At(t,n,e){let{expenses:o=[]}=n;return t.$set=t=>{"expenses"in t&&e(0,o=t.expenses)},[o]}class Ht extends dt{constructor(t){super(),ft(this,t,At,Rt,l,{expenses:0})}}function Ot(n){let e,o,r,i,s;return{c(){e=y("section"),o=y("h1"),r=x(n[0]),i=x(" : $"),s=x(n[1]),w(e,"class","main-title")},m(t,n){g(t,e,n),$(e,o),$(o,r),$(o,i),$(o,s)},p(t,[n]){1&n&&_(r,t[0]),2&n&&_(s,t[1])},i:t,o:t,d(t){t&&h(e)}}}function jt(t,n,e){let{title:o="default title"}=n,{total:r=0}=n;return t.$set=t=>{"title"in t&&e(0,o=t.title),"total"in t&&e(1,r=t.total)},[o,r]}class qt extends dt{constructor(t){super(),ft(this,t,jt,Ot,l,{title:0,total:1})}}function Nt(t){let n;return{c(){n=y("p"),n.textContent="Please, fill out all form fields",w(n,"class","form-empty")},m(t,e){g(t,n,e)},d(t){t&&h(n)}}}function Dt(t){let n;return{c(){n=x("add expense")},m(t,e){g(t,n,e)},d(t){t&&h(n)}}}function Pt(t){let n;return{c(){n=x("edit expense")},m(t,e){g(t,n,e)},d(t){t&&h(n)}}}function zt(t){let n,e,o,r,l,a,c,u,f,d,p,m,x,_,C,F,S,M,T,B=!1;const L=new yt({props:{title:"add expense"}});function R(){B=!0,t[9].call(m)}let A=t[4]&&Nt();function H(t,n){return t[2]?Pt:Dt}let O=H(t),j=O(t);return{c(){n=y("section"),lt(L.$$.fragment),e=b(),o=y("form"),r=y("div"),l=y("label"),l.textContent="name",a=b(),c=y("input"),u=b(),f=y("div"),d=y("label"),d.textContent="amount",p=b(),m=y("input"),x=b(),A&&A.c(),_=b(),C=y("button"),j.c(),F=b(),S=y("button"),S.innerHTML='<i class="fas fa-times"></i>\n   close\n  ',w(l,"for","name"),w(c,"type","text"),w(c,"id","name"),w(r,"class","form-control"),w(d,"for","amount"),w(m,"type","number"),w(m,"id","amount"),w(f,"class","form-control"),w(C,"type","submit"),w(C,"class","btn btn-block"),C.disabled=t[4],k(C,"disabled",t[4]),w(S,"type","button"),w(S,"class","close-btn"),w(o,"class","expense-form"),w(n,"class","form")},m(h,y,b){var w;g(h,n,y),at(L,n,null),$(n,e),$(n,o),$(o,r),$(r,l),$(r,a),$(r,c),E(c,t[0]),$(o,u),$(o,f),$(f,d),$(f,p),$(f,m),E(m,t[1]),$(o,x),A&&A.m(o,null),$(o,_),$(o,C),j.m(C,null),$(o,F),$(o,S),M=!0,b&&i(T),T=[v(c,"input",t[8]),v(m,"input",R),v(S,"click",(function(){s(t[3])&&t[3].apply(this,arguments)})),v(o,"submit",(w=t[5],function(t){return t.preventDefault(),w.call(this,t)}))]},p(n,[e]){t=n,1&e&&c.value!==t[0]&&E(c,t[0]),!B&&2&e&&E(m,t[1]),B=!1,t[4]?A||(A=Nt(),A.c(),A.m(o,_)):A&&(A.d(1),A=null),O!==(O=H(t))&&(j.d(1),j=O(t),j&&(j.c(),j.m(C,null))),(!M||16&e)&&(C.disabled=t[4]),16&e&&k(C,"disabled",t[4])},i(t){M||(tt(L.$$.fragment,t),M=!0)},o(t){nt(L.$$.fragment,t),M=!1},d(t){t&&h(n),ct(L),A&&A.d(),j.d(),i(T)}}}function It(t,n,e){let o,{name:r=""}=n,{amount:i=null}=n,{addExpense:s}=n,{isEditing:l}=n,{editExpense:a}=n,{hideForm:c}=n;return t.$set=t=>{"name"in t&&e(0,r=t.name),"amount"in t&&e(1,i=t.amount),"addExpense"in t&&e(6,s=t.addExpense),"isEditing"in t&&e(2,l=t.isEditing),"editExpense"in t&&e(7,a=t.editExpense),"hideForm"in t&&e(3,c=t.hideForm)},t.$$.update=()=>{3&t.$$.dirty&&e(4,o=!r||!i)},[r,i,l,c,o,function(){l?a({amount:i,name:r}):s({name:r,amount:i}),e(0,r=""),e(1,i=null),c()},s,a,function(){r=this.value,e(0,r)},function(){var t;t=this.value,i=""===t?void 0:+t,e(1,i)}]}class Wt extends dt{constructor(t){super(),ft(this,t,It,zt,l,{name:0,amount:1,addExpense:6,isEditing:2,editExpense:7,hideForm:3})}}function Jt(t){let n,e,o,r,i,s;const l=t[1].default,c=function(t,n,e,o){if(t){const r=a(t,n,e,o);return t[0](r)}}(l,t,t[0],null);return{c(){n=y("div"),e=y("div"),c&&c.c(),w(e,"class","modal-content"),w(n,"class","modal-container")},m(t,o){g(t,n,o),$(n,e),c&&c.m(e,null),s=!0},p(t,[n]){c&&c.p&&1&n&&c.p(a(l,t,t[0],null),function(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}(l,t[0],n,null))},i(t){s||(tt(c,t),z(()=>{o||(o=it(e,_t,{y:200},!0)),o.run(1)}),z(()=>{i&&i.end(1),r||(r=ot(n,vt,{})),r.start()}),s=!0)},o(t){nt(c,t),o||(o=it(e,_t,{y:200},!1)),o.run(0),r&&r.invalidate(),i=rt(n,wt,{}),s=!1},d(t){t&&h(n),c&&c.d(t),t&&o&&o.end(),t&&i&&i.end()}}}function Gt(t,n,e){let{$$slots:o={},$$scope:r}=n;return t.$set=t=>{"$$scope"in t&&e(0,r=t.$$scope)},[r,o]}class Kt extends dt{constructor(t){super(),ft(this,t,Gt,Jt,l,{})}}function Qt(t){let n;const e=new Kt({props:{$$slots:{default:[Ut]},$$scope:{ctx:t}}});return{c(){lt(e.$$.fragment)},m(t,o){at(e,t,o),n=!0},p(t,n){const o={};32790&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(tt(e.$$.fragment,t),n=!0)},o(t){nt(e.$$.fragment,t),n=!1},d(t){ct(e,t)}}}function Ut(t){let n;const e=new Wt({props:{addExpense:t[9],name:t[1],amount:t[2],isEditing:t[4],editExpense:t[10],hideForm:t[7]}});return{c(){lt(e.$$.fragment)},m(t,o){at(e,t,o),n=!0},p(t,n){const o={};2&n&&(o.name=t[1]),4&n&&(o.amount=t[2]),16&n&&(o.isEditing=t[4]),e.$set(o)},i(t){n||(tt(e.$$.fragment,t),n=!0)},o(t){nt(e.$$.fragment,t),n=!1},d(t){ct(e,t)}}}function Vt(t){let n,e,o,r,i,s,l,a;const c=new $t({props:{showForm:t[6]}});let u=t[3]&&Qt(t);const f=new qt({props:{title:"total expenses",total:t[5]}}),d=new Ht({props:{expenses:t[0]}});return{c(){lt(c.$$.fragment),n=b(),e=y("main"),u&&u.c(),o=b(),lt(f.$$.fragment),r=b(),lt(d.$$.fragment),i=b(),s=y("button"),s.textContent="clear expenses",w(s,"class","btn btn-primary btn-block"),w(e,"class","content")},m(p,m,h){at(c,p,m),g(p,n,m),g(p,e,m),u&&u.m(e,null),$(e,o),at(f,e,null),$(e,r),at(d,e,null),$(e,i),$(e,s),l=!0,h&&a(),a=v(s,"click",t[8])},p(t,[n]){t[3]?u?(u.p(t,n),tt(u,1)):(u=Qt(t),u.c(),tt(u,1),u.m(e,o)):u&&(Y(),nt(u,1,1,()=>{u=null}),Z());const r={};32&n&&(r.total=t[5]),f.$set(r);const i={};1&n&&(i.expenses=t[0]),d.$set(i)},i(t){l||(tt(c.$$.fragment,t),tt(u),tt(f.$$.fragment,t),tt(d.$$.fragment,t),l=!0)},o(t){nt(c.$$.fragment,t),nt(u),nt(f.$$.fragment,t),nt(d.$$.fragment,t),l=!1},d(t){ct(c,t),t&&h(n),t&&h(e),u&&u.d(),ct(f),ct(d),a()}}}function Xt(t,n,e){let o=[],r="",i=null,s=null,l=!1;function a(){e(3,l=!0)}var c;let u,f;return A("remove",(function(t){e(0,o=o.filter(n=>n.id!==t))})),A("modify",(function(t){let n=o.find(n=>n.id===t);e(11,s=n.id),e(1,r=n.name),e(2,i=n.amount),a()})),c=()=>{e(0,o=localStorage.getItem("expenses")?JSON.parse(localStorage.getItem("expenses")):[])},R().$$.on_mount.push(c),function(t){R().$$.after_update.push(t)}(()=>{console.log("after update"),localStorage.setItem("expenses",JSON.stringify(o))}),t.$$.update=()=>{2048&t.$$.dirty&&e(4,u=!!s),1&t.$$.dirty&&e(5,f=o.reduce((t,n)=>t+n.amount,0))},[o,r,i,l,u,f,a,function(){e(3,l=!1),e(1,r=""),e(2,i=null),e(11,s=null)},function(){e(0,o=[])},function({name:t,amount:n}){let r={id:Math.random()*Date.now(),name:t,amount:n};e(0,o=[r,...o])},function({name:t,amount:n}){e(0,o=o.map(e=>e.id===s?{...e,name:t,amount:n}:{...e})),e(11,s=null),e(2,i=null),e(1,r="")}]}return new class extends dt{constructor(t){super(),ft(this,t,Xt,Vt,l,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
