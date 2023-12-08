import{_ as Re}from"./nuxt-link.69e61d36.js";import{d as $e,aa as se,r as ze,l as Ve,b as v,c as k,g as Ie,K as T,f as H,n as qe,N as He,k as Qe,F as ie,H as ce,w as Ke,B as Ge,t as ae,e as le,D as Je}from"./entry.6a24e4f6.js";function We(){return new URL(window.location.href)}const P=/^[a-z0-9]+(-[a-z0-9]+)*$/,R=(e,t,n,r="")=>{const o=e.split(":");if(e.slice(0,1)==="@"){if(o.length<2||o.length>3)return null;r=o.shift().slice(1)}if(o.length>3||!o.length)return null;if(o.length>1){const c=o.pop(),a=o.pop(),l={provider:o.length>0?o[0]:r,prefix:a,name:c};return t&&!O(l)?null:l}const s=o[0],i=s.split("-");if(i.length>1){const c={provider:r,prefix:i.shift(),name:i.join("-")};return t&&!O(c)?null:c}if(n&&r===""){const c={provider:r,prefix:"",name:s};return t&&!O(c,n)?null:c}return null},O=(e,t)=>e?!!((e.provider===""||e.provider.match(P))&&(t&&e.prefix===""||e.prefix.match(P))&&e.name.match(P)):!1,_e=Object.freeze({left:0,top:0,width:16,height:16}),B=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),$=Object.freeze({..._e,...B}),Q=Object.freeze({...$,body:"",hidden:!1});function Xe(e,t){const n={};!e.hFlip!=!t.hFlip&&(n.hFlip=!0),!e.vFlip!=!t.vFlip&&(n.vFlip=!0);const r=((e.rotate||0)+(t.rotate||0))%4;return r&&(n.rotate=r),n}function ue(e,t){const n=Xe(e,t);for(const r in Q)r in B?r in e&&!(r in n)&&(n[r]=B[r]):r in t?n[r]=t[r]:r in e&&(n[r]=e[r]);return n}function Ye(e,t){const n=e.icons,r=e.aliases||Object.create(null),o=Object.create(null);function s(i){if(n[i])return o[i]=[];if(!(i in o)){o[i]=null;const c=r[i]&&r[i].parent,a=c&&s(c);a&&(o[i]=[c].concat(a))}return o[i]}return(t||Object.keys(n).concat(Object.keys(r))).forEach(s),o}function Ze(e,t,n){const r=e.icons,o=e.aliases||Object.create(null);let s={};function i(c){s=ue(r[c]||o[c],s)}return i(t),n.forEach(i),ue(e,s)}function Ce(e,t){const n=[];if(typeof e!="object"||typeof e.icons!="object")return n;e.not_found instanceof Array&&e.not_found.forEach(o=>{t(o,null),n.push(o)});const r=Ye(e);for(const o in r){const s=r[o];s&&(t(o,Ze(e,o,s)),n.push(o))}return n}const et={provider:"",aliases:{},not_found:{},..._e};function V(e,t){for(const n in t)if(n in e&&typeof e[n]!=typeof t[n])return!1;return!0}function Te(e){if(typeof e!="object"||e===null)return null;const t=e;if(typeof t.prefix!="string"||!e.icons||typeof e.icons!="object"||!V(e,et))return null;const n=t.icons;for(const o in n){const s=n[o];if(!o.match(P)||typeof s.body!="string"||!V(s,Q))return null}const r=t.aliases||Object.create(null);for(const o in r){const s=r[o],i=s.parent;if(!o.match(P)||typeof i!="string"||!n[i]&&!r[i]||!V(s,Q))return null}return t}const fe=Object.create(null);function tt(e,t){return{provider:e,prefix:t,icons:Object.create(null),missing:new Set}}function _(e,t){const n=fe[e]||(fe[e]=Object.create(null));return n[t]||(n[t]=tt(e,t))}function Z(e,t){return Te(t)?Ce(t,(n,r)=>{r?e.icons[n]=r:e.missing.add(n)}):[]}function nt(e,t,n){try{if(typeof n.body=="string")return e.icons[t]={...n},!0}catch{}return!1}let E=!1;function je(e){return typeof e=="boolean"&&(E=e),E}function ot(e){const t=typeof e=="string"?R(e,!0,E):e;if(t){const n=_(t.provider,t.prefix),r=t.name;return n.icons[r]||(n.missing.has(r)?null:void 0)}}function rt(e,t){const n=R(e,!0,E);if(!n)return!1;const r=_(n.provider,n.prefix);return nt(r,n.name,t)}function st(e,t){if(typeof e!="object")return!1;if(typeof t!="string"&&(t=e.provider||""),E&&!t&&!e.prefix){let o=!1;return Te(e)&&(e.prefix="",Ce(e,(s,i)=>{i&&rt(s,i)&&(o=!0)})),o}const n=e.prefix;if(!O({provider:t,prefix:n,name:"a"}))return!1;const r=_(t,n);return!!Z(r,e)}const Fe=Object.freeze({width:null,height:null}),Pe=Object.freeze({...Fe,...B}),it=/(-?[0-9.]*[0-9]+[0-9.]*)/g,ct=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function de(e,t,n){if(t===1)return e;if(n=n||100,typeof e=="number")return Math.ceil(e*t*n)/n;if(typeof e!="string")return e;const r=e.split(it);if(r===null||!r.length)return e;const o=[];let s=r.shift(),i=ct.test(s);for(;;){if(i){const c=parseFloat(s);isNaN(c)?o.push(s):o.push(Math.ceil(c*t*n)/n)}else o.push(s);if(s=r.shift(),s===void 0)return o.join("");i=!i}}const at=e=>e==="unset"||e==="undefined"||e==="none";function lt(e,t){const n={...$,...e},r={...Pe,...t},o={left:n.left,top:n.top,width:n.width,height:n.height};let s=n.body;[n,r].forEach(m=>{const d=[],f=m.hFlip,S=m.vFlip;let y=m.rotate;f?S?y+=2:(d.push("translate("+(o.width+o.left).toString()+" "+(0-o.top).toString()+")"),d.push("scale(-1 1)"),o.top=o.left=0):S&&(d.push("translate("+(0-o.left).toString()+" "+(o.height+o.top).toString()+")"),d.push("scale(1 -1)"),o.top=o.left=0);let b;switch(y<0&&(y-=Math.floor(y/4)*4),y=y%4,y){case 1:b=o.height/2+o.top,d.unshift("rotate(90 "+b.toString()+" "+b.toString()+")");break;case 2:d.unshift("rotate(180 "+(o.width/2+o.left).toString()+" "+(o.height/2+o.top).toString()+")");break;case 3:b=o.width/2+o.left,d.unshift("rotate(-90 "+b.toString()+" "+b.toString()+")");break}y%2===1&&(o.left!==o.top&&(b=o.left,o.left=o.top,o.top=b),o.width!==o.height&&(b=o.width,o.width=o.height,o.height=b)),d.length&&(s='<g transform="'+d.join(" ")+'">'+s+"</g>")});const i=r.width,c=r.height,a=o.width,l=o.height;let u,p;i===null?(p=c===null?"1em":c==="auto"?l:c,u=de(p,a/l)):(u=i==="auto"?a:i,p=c===null?de(u,l/a):c==="auto"?l:c);const g={},w=(m,d)=>{at(d)||(g[m]=d.toString())};return w("width",u),w("height",p),g.viewBox=o.left.toString()+" "+o.top.toString()+" "+a.toString()+" "+l.toString(),{attributes:g,body:s}}const ut=/\sid="(\S+)"/g,ft="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let dt=0;function ht(e,t=ft){const n=[];let r;for(;r=ut.exec(e);)n.push(r[1]);if(!n.length)return e;const o="suffix"+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(s=>{const i=typeof t=="function"?t(s):t+(dt++).toString(),c=s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+c+')([")]|\\.[a-z])',"g"),"$1"+i+o+"$3")}),e=e.replace(new RegExp(o,"g"),""),e}const K=Object.create(null);function pt(e,t){K[e]=t}function G(e){return K[e]||K[""]}function ee(e){let t;if(typeof e.resources=="string")t=[e.resources];else if(t=e.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:e.random===!0,index:e.index||0,dataAfterTimeout:e.dataAfterTimeout!==!1}}const te=Object.create(null),F=["https://api.simplesvg.com","https://api.unisvg.com"],U=[];for(;F.length>0;)F.length===1||Math.random()>.5?U.push(F.shift()):U.push(F.pop());te[""]=ee({resources:["https://api.iconify.design"].concat(U)});function gt(e,t){const n=ee(t);return n===null?!1:(te[e]=n,!0)}function ne(e){return te[e]}const mt=()=>{let e;try{if(e=fetch,typeof e=="function")return e}catch{}};let he=mt();function yt(e,t){const n=ne(e);if(!n)return 0;let r;if(!n.maxURL)r=0;else{let o=0;n.resources.forEach(i=>{o=Math.max(o,i.length)});const s=t+".json?icons=";r=n.maxURL-o-n.path.length-s.length}return r}function bt(e){return e===404}const wt=(e,t,n)=>{const r=[],o=yt(e,t),s="icons";let i={type:s,provider:e,prefix:t,icons:[]},c=0;return n.forEach((a,l)=>{c+=a.length+1,c>=o&&l>0&&(r.push(i),i={type:s,provider:e,prefix:t,icons:[]},c=a.length),i.icons.push(a)}),r.push(i),r};function xt(e){if(typeof e=="string"){const t=ne(e);if(t)return t.path}return"/"}const St=(e,t,n)=>{if(!he){n("abort",424);return}let r=xt(t.provider);switch(t.type){case"icons":{const s=t.prefix,c=t.icons.join(","),a=new URLSearchParams({icons:c});r+=s+".json?"+a.toString();break}case"custom":{const s=t.uri;r+=s.slice(0,1)==="/"?s.slice(1):s;break}default:n("abort",400);return}let o=503;he(e+r).then(s=>{const i=s.status;if(i!==200){setTimeout(()=>{n(bt(i)?"abort":"next",i)});return}return o=501,s.json()}).then(s=>{if(typeof s!="object"||s===null){setTimeout(()=>{s===404?n("abort",s):n("next",o)});return}setTimeout(()=>{n("success",s)})}).catch(()=>{n("next",o)})},vt={prepare:wt,send:St};function kt(e){const t={loaded:[],missing:[],pending:[]},n=Object.create(null);e.sort((o,s)=>o.provider!==s.provider?o.provider.localeCompare(s.provider):o.prefix!==s.prefix?o.prefix.localeCompare(s.prefix):o.name.localeCompare(s.name));let r={provider:"",prefix:"",name:""};return e.forEach(o=>{if(r.name===o.name&&r.prefix===o.prefix&&r.provider===o.provider)return;r=o;const s=o.provider,i=o.prefix,c=o.name,a=n[s]||(n[s]=Object.create(null)),l=a[i]||(a[i]=_(s,i));let u;c in l.icons?u=t.loaded:i===""||l.missing.has(c)?u=t.missing:u=t.pending;const p={provider:s,prefix:i,name:c};u.push(p)}),t}function Ee(e,t){e.forEach(n=>{const r=n.loaderCallbacks;r&&(n.loaderCallbacks=r.filter(o=>o.id!==t))})}function It(e){e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout(()=>{e.pendingCallbacksFlag=!1;const t=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!t.length)return;let n=!1;const r=e.provider,o=e.prefix;t.forEach(s=>{const i=s.icons,c=i.pending.length;i.pending=i.pending.filter(a=>{if(a.prefix!==o)return!0;const l=a.name;if(e.icons[l])i.loaded.push({provider:r,prefix:o,name:l});else if(e.missing.has(l))i.missing.push({provider:r,prefix:o,name:l});else return n=!0,!0;return!1}),i.pending.length!==c&&(n||Ee([e],s.id),s.callback(i.loaded.slice(0),i.missing.slice(0),i.pending.slice(0),s.abort))})}))}let _t=0;function Ct(e,t,n){const r=_t++,o=Ee.bind(null,n,r);if(!t.pending.length)return o;const s={id:r,icons:t,callback:e,abort:o};return n.forEach(i=>{(i.loaderCallbacks||(i.loaderCallbacks=[])).push(s)}),o}function Tt(e,t=!0,n=!1){const r=[];return e.forEach(o=>{const s=typeof o=="string"?R(o,t,n):o;s&&r.push(s)}),r}var jt={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function Ft(e,t,n,r){const o=e.resources.length,s=e.random?Math.floor(Math.random()*o):e.index;let i;if(e.random){let h=e.resources.slice(0);for(i=[];h.length>1;){const x=Math.floor(Math.random()*h.length);i.push(h[x]),h=h.slice(0,x).concat(h.slice(x+1))}i=i.concat(h)}else i=e.resources.slice(s).concat(e.resources.slice(0,s));const c=Date.now();let a="pending",l=0,u,p=null,g=[],w=[];typeof r=="function"&&w.push(r);function m(){p&&(clearTimeout(p),p=null)}function d(){a==="pending"&&(a="aborted"),m(),g.forEach(h=>{h.status==="pending"&&(h.status="aborted")}),g=[]}function f(h,x){x&&(w=[]),typeof h=="function"&&w.push(h)}function S(){return{startTime:c,payload:t,status:a,queriesSent:l,queriesPending:g.length,subscribe:f,abort:d}}function y(){a="failed",w.forEach(h=>{h(void 0,u)})}function b(){g.forEach(h=>{h.status==="pending"&&(h.status="aborted")}),g=[]}function N(h,x,j){const M=x!=="success";switch(g=g.filter(I=>I!==h),a){case"pending":break;case"failed":if(M||!e.dataAfterTimeout)return;break;default:return}if(x==="abort"){u=j,y();return}if(M){u=j,g.length||(i.length?C():y());return}if(m(),b(),!e.random){const I=e.resources.indexOf(h.resource);I!==-1&&I!==e.index&&(e.index=I)}a="completed",w.forEach(I=>{I(j)})}function C(){if(a!=="pending")return;m();const h=i.shift();if(h===void 0){if(g.length){p=setTimeout(()=>{m(),a==="pending"&&(b(),y())},e.timeout);return}y();return}const x={status:"pending",resource:h,callback:(j,M)=>{N(x,j,M)}};g.push(x),l++,p=setTimeout(C,e.rotate),n(h,t,x.callback)}return setTimeout(C),S}function Le(e){const t={...jt,...e};let n=[];function r(){n=n.filter(c=>c().status==="pending")}function o(c,a,l){const u=Ft(t,c,a,(p,g)=>{r(),l&&l(p,g)});return n.push(u),u}function s(c){return n.find(a=>c(a))||null}return{query:o,find:s,setIndex:c=>{t.index=c},getIndex:()=>t.index,cleanup:r}}function pe(){}const q=Object.create(null);function Pt(e){if(!q[e]){const t=ne(e);if(!t)return;const n=Le(t),r={config:t,redundancy:n};q[e]=r}return q[e]}function Et(e,t,n){let r,o;if(typeof e=="string"){const s=G(e);if(!s)return n(void 0,424),pe;o=s.send;const i=Pt(e);i&&(r=i.redundancy)}else{const s=ee(e);if(s){r=Le(s);const i=e.resources?e.resources[0]:"",c=G(i);c&&(o=c.send)}}return!r||!o?(n(void 0,424),pe):r.query(t,o,n)().abort}const ge="iconify2",L="iconify",Ne=L+"-count",me=L+"-version",Me=36e5,Lt=168;function J(e,t){try{return e.getItem(t)}catch{}}function oe(e,t,n){try{return e.setItem(t,n),!0}catch{}}function ye(e,t){try{e.removeItem(t)}catch{}}function W(e,t){return oe(e,Ne,t.toString())}function X(e){return parseInt(J(e,Ne))||0}const z={local:!0,session:!0},Ae={local:new Set,session:new Set};let re=!1;function Nt(e){re=e}let A=typeof window>"u"?{}:window;function Oe(e){const t=e+"Storage";try{if(A&&A[t]&&typeof A[t].length=="number")return A[t]}catch{}z[e]=!1}function Ue(e,t){const n=Oe(e);if(!n)return;const r=J(n,me);if(r!==ge){if(r){const c=X(n);for(let a=0;a<c;a++)ye(n,L+a.toString())}oe(n,me,ge),W(n,0);return}const o=Math.floor(Date.now()/Me)-Lt,s=c=>{const a=L+c.toString(),l=J(n,a);if(typeof l=="string"){try{const u=JSON.parse(l);if(typeof u=="object"&&typeof u.cached=="number"&&u.cached>o&&typeof u.provider=="string"&&typeof u.data=="object"&&typeof u.data.prefix=="string"&&t(u,c))return!0}catch{}ye(n,a)}};let i=X(n);for(let c=i-1;c>=0;c--)s(c)||(c===i-1?(i--,W(n,i)):Ae[e].add(c))}function De(){if(!re){Nt(!0);for(const e in z)Ue(e,t=>{const n=t.data,r=t.provider,o=n.prefix,s=_(r,o);if(!Z(s,n).length)return!1;const i=n.lastModified||-1;return s.lastModifiedCached=s.lastModifiedCached?Math.min(s.lastModifiedCached,i):i,!0})}}function Mt(e,t){const n=e.lastModifiedCached;if(n&&n>=t)return n===t;if(e.lastModifiedCached=t,n)for(const r in z)Ue(r,o=>{const s=o.data;return o.provider!==e.provider||s.prefix!==e.prefix||s.lastModified===t});return!0}function At(e,t){re||De();function n(r){let o;if(!z[r]||!(o=Oe(r)))return;const s=Ae[r];let i;if(s.size)s.delete(i=Array.from(s).shift());else if(i=X(o),!W(o,i+1))return;const c={cached:Math.floor(Date.now()/Me),provider:e.provider,data:t};return oe(o,L+i.toString(),JSON.stringify(c))}t.lastModified&&!Mt(e,t.lastModified)||Object.keys(t.icons).length&&(t.not_found&&(t=Object.assign({},t),delete t.not_found),n("local")||n("session"))}function be(){}function Ot(e){e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout(()=>{e.iconsLoaderFlag=!1,It(e)}))}function Ut(e,t){e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(t).sort():e.iconsToLoad=t,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout(()=>{e.iconsQueueFlag=!1;const{provider:n,prefix:r}=e,o=e.iconsToLoad;delete e.iconsToLoad;let s;if(!o||!(s=G(n)))return;s.prepare(n,r,o).forEach(c=>{Et(n,c,a=>{if(typeof a!="object")c.icons.forEach(l=>{e.missing.add(l)});else try{const l=Z(e,a);if(!l.length)return;const u=e.pendingIcons;u&&l.forEach(p=>{u.delete(p)}),At(e,a)}catch(l){console.error(l)}Ot(e)})})}))}const Dt=(e,t)=>{const n=Tt(e,!0,je()),r=kt(n);if(!r.pending.length){let a=!0;return t&&setTimeout(()=>{a&&t(r.loaded,r.missing,r.pending,be)}),()=>{a=!1}}const o=Object.create(null),s=[];let i,c;return r.pending.forEach(a=>{const{provider:l,prefix:u}=a;if(u===c&&l===i)return;i=l,c=u,s.push(_(l,u));const p=o[l]||(o[l]=Object.create(null));p[u]||(p[u]=[])}),r.pending.forEach(a=>{const{provider:l,prefix:u,name:p}=a,g=_(l,u),w=g.pendingIcons||(g.pendingIcons=new Set);w.has(p)||(w.add(p),o[l][u].push(p))}),s.forEach(a=>{const{provider:l,prefix:u}=a;o[l][u].length&&Ut(a,o[l][u])}),t?Ct(t,r,s):be};function Bt(e,t){const n={...e};for(const r in t){const o=t[r],s=typeof o;r in Fe?(o===null||o&&(s==="string"||s==="number"))&&(n[r]=o):s===typeof n[r]&&(n[r]=r==="rotate"?o%4:o)}return n}const Rt=/[\s,]+/;function $t(e,t){t.split(Rt).forEach(n=>{switch(n.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0;break}})}function zt(e,t=0){const n=e.replace(/^-?[0-9.]*/,"");function r(o){for(;o<0;)o+=4;return o%4}if(n===""){const o=parseInt(e);return isNaN(o)?0:r(o)}else if(n!==e){let o=0;switch(n){case"%":o=25;break;case"deg":o=90}if(o){let s=parseFloat(e.slice(0,e.length-n.length));return isNaN(s)?0:(s=s/o,s%1===0?r(s):0)}}return t}function Vt(e,t){let n=e.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const r in t)n+=" "+r+'="'+t[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+e+"</svg>"}function qt(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function Ht(e){return"data:image/svg+xml,"+qt(e)}function Qt(e){return'url("'+Ht(e)+'")'}const we={...Pe,inline:!1},Kt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},Gt={display:"inline-block"},Y={backgroundColor:"currentColor"},Be={backgroundColor:"transparent"},xe={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},Se={webkitMask:Y,mask:Y,background:Be};for(const e in Se){const t=Se[e];for(const n in xe)t[e+n]=xe[n]}const D={};["horizontal","vertical"].forEach(e=>{const t=e.slice(0,1)+"Flip";D[e+"-flip"]=t,D[e.slice(0,1)+"-flip"]=t,D[e+"Flip"]=t});function ve(e){return e+(e.match(/^[-0-9.]+$/)?"px":"")}const ke=(e,t)=>{const n=Bt(we,t),r={...Kt},o=t.mode||"svg",s={},i=t.style,c=typeof i=="object"&&!(i instanceof Array)?i:{};for(let d in t){const f=t[d];if(f!==void 0)switch(d){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":n[d]=f===!0||f==="true"||f===1;break;case"flip":typeof f=="string"&&$t(n,f);break;case"color":s.color=f;break;case"rotate":typeof f=="string"?n[d]=zt(f):typeof f=="number"&&(n[d]=f);break;case"ariaHidden":case"aria-hidden":f!==!0&&f!=="true"&&delete r["aria-hidden"];break;default:{const S=D[d];S?(f===!0||f==="true"||f===1)&&(n[S]=!0):we[d]===void 0&&(r[d]=f)}}}const a=lt(e,n),l=a.attributes;if(n.inline&&(s.verticalAlign="-0.125em"),o==="svg"){r.style={...s,...c},Object.assign(r,l);let d=0,f=t.id;return typeof f=="string"&&(f=f.replace(/-/g,"_")),r.innerHTML=ht(a.body,f?()=>f+"ID"+d++:"iconifyVue"),se("svg",r)}const{body:u,width:p,height:g}=e,w=o==="mask"||(o==="bg"?!1:u.indexOf("currentColor")!==-1),m=Vt(u,{...l,width:p+"",height:g+""});return r.style={...s,"--svg":Qt(m),width:ve(l.width),height:ve(l.height),...Gt,...w?Y:Be,...c},se("span",r)};je(!0);pt("",vt);if(typeof document<"u"&&typeof window<"u"){De();const e=window;if(e.IconifyPreload!==void 0){const t=e.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof t=="object"&&t!==null&&(t instanceof Array?t:[t]).forEach(r=>{try{(typeof r!="object"||r===null||r instanceof Array||typeof r.icons!="object"||typeof r.prefix!="string"||!st(r))&&console.error(n)}catch{console.error(n)}})}if(e.IconifyProviders!==void 0){const t=e.IconifyProviders;if(typeof t=="object"&&t!==null)for(let n in t){const r="IconifyProviders["+n+"] is invalid.";try{const o=t[n];if(typeof o!="object"||!o||o.resources===void 0)continue;gt(n,o)||console.error(r)}catch{console.error(r)}}}}const Jt={...$,body:""},Wt=$e({inheritAttrs:!1,data(){return{iconMounted:!1,counter:0}},mounted(){this._name="",this._loadingIcon=null,this.iconMounted=!0},unmounted(){this.abortLoading()},methods:{abortLoading(){this._loadingIcon&&(this._loadingIcon.abort(),this._loadingIcon=null)},getIcon(e,t){if(typeof e=="object"&&e!==null&&typeof e.body=="string")return this._name="",this.abortLoading(),{data:e};let n;if(typeof e!="string"||(n=R(e,!1,!0))===null)return this.abortLoading(),null;const r=ot(n);if(!r)return(!this._loadingIcon||this._loadingIcon.name!==e)&&(this.abortLoading(),this._name="",r!==null&&(this._loadingIcon={name:e,abort:Dt([n],()=>{this.counter++})})),null;this.abortLoading(),this._name!==e&&(this._name=e,t&&t(e));const o=["iconify"];return n.prefix!==""&&o.push("iconify--"+n.prefix),n.provider!==""&&o.push("iconify--"+n.provider),{data:r,classes:o}}},render(){this.counter;const e=this.$attrs,t=this.iconMounted?this.getIcon(e.icon,e.onLoad):null;if(!t)return ke(Jt,e);let n=e;return t.classes&&(n={...e,class:(typeof e.class=="string"?e.class+" ":"")+t.classes.join(" ")}),ke({...$,...t.data},n)}}),Xt={name:"facebook",shareUrl:"https://www.facebook.com/sharer/sharer.php?u=[u]",iconName:"ri:facebook-fill",color:"#0866FF"},Yt={name:"twitter",shareUrl:"https://twitter.com/intent/tweet?url=[u]",args:{title:"&text=[t]",user:"&via=[uid]",hashtags:"&hashtags=[h]"},iconName:"ri:twitter-x-fill",color:"#000000"},Zt={name:"linkedin",shareUrl:"https://www.linkedin.com/sharing/share-offsite/?url=[u]",iconName:"ri:linkedin-fill",color:"#0A66C2"},en={name:"pinterest",shareUrl:"https://pinterest.com/pin/create/button/?url=[u]",args:{title:"&description=[t]",image:"&media=[i]"},iconName:"jam:pinterest",color:"#BD081C"},tn={name:"reddit",shareUrl:"https://www.reddit.com/submit?url=[u]",args:{title:"&title=[t]"},iconName:"ri:reddit-line",color:"#FF4500"},nn={name:"pocket",shareUrl:"https://getpocket.com/edit?url=[u]",iconName:"fe:pocket",color:"#EF3F56"},on={name:"whatsapp",shareUrl:"https://api.whatsapp.com/send?text=[u]",args:{title:"%20[t]"},iconName:"ri:whatsapp-line",color:"#25D366"},rn={name:"telegram",shareUrl:"https://t.me/share/url?url=[u]",args:{title:"&text=[t]"},iconName:"mingcute:telegram-fill",color:"#26A5E4"},sn={name:"skype",shareUrl:"https://web.skype.com/share?url=[u]",args:{title:"&text=[t]"},iconName:"ri:skype-fill",color:"#00AFF0"},cn={name:"email",shareUrl:"mailto:?body=[u]",args:{title:"&subject=[t]"},iconName:"ic:round-mail",color:"#7e7e7e"},an={facebook:Xt,twitter:Yt,linkedin:Zt,pinterest:en,reddit:tn,pocket:nn,whatsapp:on,telegram:rn,skype:sn,email:cn},ln={network:"",url:void 0,title:void 0,user:void 0,hashtags:void 0,image:void 0};function un(e=ln){var d,f,S,y,b,N,C,h;const{network:t,url:n,title:r,user:o,hashtags:s,image:i}=e,c=ze({...an[t]}),a=n!==void 0?n:We().href,l=c.value.shareUrl,u=(d=c.value.args)!=null&&d.title&&r?(f=c.value.args)==null?void 0:f.title:"",p=(S=c.value.args)!=null&&S.user&&o?(y=c.value.args)==null?void 0:y.user:"",g=(b=c.value.args)!=null&&b.hashtags&&s?(N=c.value.args)==null?void 0:N.hashtags:"",w=(C=c.value.args)!=null&&C.image&&i?(h=c.value.args)==null?void 0:h.image:"";let m=l+u+p+g+w;return m=m.replace(/\[u\]/i,a).replace(/\[t\]/i,r||"").replace(/\[uid\]/i,o||"").replace(/\[h\]/i,s||"").replace(/\[i\]/i,i||""),c.value.shareUrl=m,delete c.value.args,c}const fn=["href","aria-label"],dn={key:0,class:"social-share-button__label"},hn={__name:"SocialShare",props:{network:{type:String,required:!0},styled:{type:Boolean,default:void 0},label:{type:Boolean,default:void 0},url:{type:String,default:void 0},title:{type:String,default:void 0},user:{type:String,default:void 0},hashtags:{type:String,default:void 0},image:{type:String,default:void 0}},setup(e){const t=e,n=Ve().public.socialShare,r=t.styled!==void 0?t.styled:n.styled,o=t.label!==void 0?t.label:n.label,s=un({network:t.network,url:t.url,title:t.title,user:t.user,hashtags:t.hashtags,image:t.image}),i=t.network.charAt(0).toUpperCase()+t.network.slice(1);return(c,a)=>(v(),k("a",{class:qe(["social-share-button",[`social-share-button--${e.network}`,{"social-share-button--styled":T(r)}]]),href:T(s).shareUrl,style:He(`--color-brand:${T(s).color}`),"aria-label":`Share with ${i}`,target:"_blank"},[Ie(T(Wt),{class:"social-share-button__icon",icon:T(s).iconName},null,8,["icon"]),T(o)?(v(),k("span",dn,"Share")):H("",!0)],14,fn))}},pn=hn;const gn={class:"mx-blog flex flex-col tablet:flex-row justify-between tablet:items-center"},mn={key:0,class:"tags-list flex flex-row flex-wrap gap-x-5 gap-y-2 mb-5"},yn={class:"flex flex-wrap items-center"},bn={key:0,class:"text-gray-darker text-base font-semibold mr-5"},wn={class:"flex flex-wrap gap-5"},xn={__name:"block-post-share",props:{shareText:{type:String,default:"Share"},tags:{type:Array},archivePath:{type:String,default:"/blog"},socials:{type:Array,default:["facebook","linkedin"]}},setup(e){return(t,n)=>{const r=Re,o=pn;return v(),k("div",gn,[e.tags?(v(),k("ul",mn,[(v(!0),k(ie,null,ce(e.tags,(s,i)=>(v(),k("li",{key:i},[Ie(r,{to:{path:e.archivePath,query:{cat:s}}},{default:Ke(()=>[Ge(ae(s),1)]),_:2},1032,["to"])]))),128))])):H("",!0),le("div",yn,[e.shareText?(v(),k("p",bn,ae(e.shareText),1)):H("",!0),le("ul",wn,[(v(!0),k(ie,null,ce(e.socials,s=>(v(),Je(o,{network:s,styled:!0,label:!1,class:"rounded-[5px] bg-gray-dark w-[30px] h-[30px] p-1 [&_svg_*]:!fill-white"},null,8,["network"]))),256))])])])}}},kn=Qe(xn,[["__scopeId","data-v-d57ab006"]]);export{kn as default};