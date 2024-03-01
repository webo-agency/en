import{l as H,j as T}from"./entry.iyzyEdT-.js";import{h as v,a as F,j as y,p as L,e as W,c as q}from"./index.9ELg4rfW.js";function w(e){if(e===null||typeof e!="object")return!1;const t=Object.getPrototypeOf(e);return t!==null&&t!==Object.prototype&&Object.getPrototypeOf(t)!==null||Symbol.iterator in e?!1:Symbol.toStringTag in e?Object.prototype.toString.call(e)==="[object Module]":!0}function _(e,t,r=".",i){if(!w(t))return _(e,{},r,i);const o=Object.assign({},t);for(const n in e){if(n==="__proto__"||n==="constructor")continue;const s=e[n];s!=null&&(i&&i(o,n,s,r)||(Array.isArray(s)&&Array.isArray(o[n])?o[n]=[...s,...o[n]]:w(s)&&w(o[n])?o[n]=_(s,o[n],(r?`${r}.`:"")+n.toString(),i):o[n]=s))}return o}function G(e){return(...t)=>t.reduce((r,i)=>_(r,i,"",e),{})}const P=G();async function N(e,t){return await B(t).catch(i=>(console.error("Failed to get image meta for "+t,i+""),{width:0,height:0,ratio:0}))}async function B(e){if(typeof Image>"u")throw new TypeError("Image not supported");return new Promise((t,r)=>{const i=new Image;i.onload=()=>{const o={width:i.width,height:i.height,ratio:i.width/i.height};t(o)},i.onerror=o=>r(o),i.src=e})}function ct(e=""){return e.split(/[?#]/).shift().split("/").pop().split(".").pop()}function M(e){return t=>t?e[t]||t:e.missingValue}function C({formatter:e,keyMap:t,joinWith:r="/",valueMap:i}={}){e||(e=(n,s)=>`${n}=${s}`),t&&typeof t!="function"&&(t=M(t));const o=i||{};return Object.keys(o).forEach(n=>{typeof o[n]!="function"&&(o[n]=M(o[n]))}),(n={})=>Object.entries(n).filter(([c,f])=>typeof f<"u").map(([c,f])=>{const a=o[c];return typeof a=="function"&&(f=a(n[c])),c=typeof t=="function"?t(c):c,e(c,f)}).join(r)}function p(e=""){if(typeof e=="number")return e;if(typeof e=="string"&&e.replace("px","").match(/^\d+$/g))return parseInt(e,10)}function J(e=""){if(e===void 0||!e.length)return[];const t=new Set;for(const r of e.split(" ")){const i=parseInt(r.replace("x",""));i&&t.add(i)}return Array.from(t)}function V(e){if(e.length===0)throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)")}function X(e){const t={};if(typeof e=="string")for(const r of e.split(/[\s,]+/).filter(i=>i)){const i=r.split(":");i.length!==2?t["1px"]=i[0].trim():t[i[0].trim()]=i[1].trim()}else Object.assign(t,e);return t}function Q(e){const t={options:e},r=(o,n={})=>z(t,o,n),i=(o,n={},s={})=>r(o,{...s,modifiers:P(n,s.modifiers||{})}).url;for(const o in e.presets)i[o]=(n,s,c)=>i(n,s,{...e.presets[o],...c});return i.options=e,i.getImage=r,i.getMeta=(o,n)=>Y(t,o,n),i.getSizes=(o,n)=>K(t,o,n),t.$img=i,i}async function Y(e,t,r){const i=z(e,t,{...r});return typeof i.getMeta=="function"?await i.getMeta():await N(e,i.url)}function z(e,t,r){var a,g;if(typeof t!="string"||t==="")throw new TypeError(`input must be a string (received ${typeof t}: ${JSON.stringify(t)})`);if(t.startsWith("data:"))return{url:t};const{provider:i,defaults:o}=Z(e,r.provider||e.options.provider),n=k(e,r.preset);if(t=v(t)?t:F(t),!i.supportsAlias)for(const u in e.options.alias)t.startsWith(u)&&(t=y(e.options.alias[u],t.substr(u.length)));if(i.validateDomains&&v(t)){const u=L(t).host;if(!e.options.domains.find(m=>m===u))return{url:t}}const s=P(r,n,o);s.modifiers={...s.modifiers};const c=s.modifiers.format;(a=s.modifiers)!=null&&a.width&&(s.modifiers.width=p(s.modifiers.width)),(g=s.modifiers)!=null&&g.height&&(s.modifiers.height=p(s.modifiers.height));const f=i.getImage(t,s,e);return f.format=f.format||c||"",f}function Z(e,t){const r=e.options.providers[t];if(!r)throw new Error("Unknown provider: "+t);return r}function k(e,t){if(!t)return{};if(!e.options.presets[t])throw new Error("Unknown preset: "+t);return e.options.presets[t]}function K(e,t,r){var x,b,S,j,$;const i=p((x=r.modifiers)==null?void 0:x.width),o=p((b=r.modifiers)==null?void 0:b.height),n=X(r.sizes),s=(S=r.densities)!=null&&S.trim()?J(r.densities.trim()):e.options.densities;V(s);const c=i&&o?o/i:0,f=[],a=[];if(Object.keys(n).length>=1){for(const d in n){const h=I(d,String(n[d]),o,c,e);if(h!==void 0){f.push({size:h.size,screenMaxWidth:h.screenMaxWidth,media:`(max-width: ${h.screenMaxWidth}px)`});for(const l of s)a.push({width:h._cWidth*l,src:O(e,t,r,h,l)})}}tt(f)}else for(const d of s){const h=Object.keys(n)[0];let l=I(h,String(n[h]),o,c,e);l===void 0&&(l={size:"",screenMaxWidth:0,_cWidth:(j=r.modifiers)==null?void 0:j.width,_cHeight:($=r.modifiers)==null?void 0:$.height}),a.push({width:d,src:O(e,t,r,l,d)})}et(a);const g=a[a.length-1],u=f.length?f.map(d=>`${d.media?d.media+" ":""}${d.size}`).join(", "):void 0,m=u?"w":"x",U=a.map(d=>`${d.src} ${d.width}${m}`).join(", ");return{sizes:u,srcset:U,src:g==null?void 0:g.src}}function I(e,t,r,i,o){const n=o.options.screens&&o.options.screens[e]||parseInt(e),s=t.endsWith("vw");if(!s&&/^\d+$/.test(t)&&(t=t+"px"),!s&&!t.endsWith("px"))return;let c=parseInt(t);if(!n||!c)return;s&&(c=Math.round(c/100*n));const f=i?Math.round(c*i):r;return{size:t,screenMaxWidth:n,_cWidth:c,_cHeight:f}}function O(e,t,r,i,o){return e.$img(t,{...r.modifiers,width:i._cWidth?i._cWidth*o:void 0,height:i._cHeight?i._cHeight*o:void 0},r)}function tt(e){var r;e.sort((i,o)=>i.screenMaxWidth-o.screenMaxWidth);let t=null;for(let i=e.length-1;i>=0;i--){const o=e[i];o.media===t&&e.splice(i,1),t=o.media}for(let i=0;i<e.length;i++)e[i].media=((r=e[i+1])==null?void 0:r.media)||""}function et(e){e.sort((r,i)=>r.width-i.width);let t=null;for(let r=e.length-1;r>=0;r--){const i=e[r];i.width===t&&e.splice(r,1),t=i.width}}const it=C({keyMap:{format:"f",fit:"fit",width:"w",height:"h",resize:"s",quality:"q",background:"b"},joinWith:"&",formatter:(e,t)=>W(e)+"_"+W(t)}),A=(e,{modifiers:t={},baseURL:r}={},i)=>{t.width&&t.height&&(t.resize=`${t.width}x${t.height}`,delete t.width,delete t.height);const o=it(t)||"_";return r||(r=y(i.options.nuxt.baseURL,"/_ipx")),{url:y(r,o,q(e))}},E=!0,R=!0,rt=Object.freeze(Object.defineProperty({__proto__:null,getImage:A,supportsAlias:R,validateDomains:E},Symbol.toStringTag,{value:"Module"})),ot=Object.freeze(Object.defineProperty({__proto__:null,getImage:A,supportsAlias:R,validateDomains:E},Symbol.toStringTag,{value:"Module"})),D={screens:{xs:320,sm:640,md:768,lg:1024,xl:1280,xxl:1536,"2xl":1536},presets:{},provider:"ipxStatic",domains:[],alias:{},densities:[1,2],format:["webp"]};D.providers={ipx:{provider:rt,defaults:{modifiers:{quality:"95",format:"webp"}}},ipxStatic:{provider:ot,defaults:{}}};const ft=()=>{const e=H(),t=T();return t.$img||t._img||(t._img=Q({...D,nuxt:{baseURL:e.app.baseURL}}))};export{ct as g,p,ft as u};
