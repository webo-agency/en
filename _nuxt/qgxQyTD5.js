import{an as C,r as y,ao as w,Q as b,ap as O,a as B,U as M,P as _,k as E,aq as H,I as R,ak as S,O as z}from"./Da7c7GoZ.js";const j=s=>s==="defer"||s===!1;function T(...s){var m;const o=typeof s[s.length-1]=="string"?s.pop():void 0;typeof s[0]!="string"&&s.unshift(o);let[t,u,a={}]=s;if(typeof t!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof u!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const e=E(),v=u,p=()=>null,g=()=>e.isHydrating?e.payload.data[t]:e.static.data[t];a.server=a.server??!0,a.default=a.default??p,a.getCachedData=a.getCachedData??g,a.lazy=a.lazy??!1,a.immediate=a.immediate??!0,a.deep=a.deep??C.deep,a.dedupe=a.dedupe??"cancel";const d=()=>a.getCachedData(t,e)!=null;if(!e._asyncData[t]||!a.immediate){(m=e.payload._errors)[t]??(m[t]=null);const i=a.deep?y:w;e._asyncData[t]={data:i(a.getCachedData(t,e)??a.default()),pending:y(!d()),error:b(e.payload._errors,t),status:y("idle")}}const r={...e._asyncData[t]};r.refresh=r.execute=(i={})=>{if(e._asyncDataPromises[t]){if(j(i.dedupe??a.dedupe))return e._asyncDataPromises[t];e._asyncDataPromises[t].cancelled=!0}if((i._initial||e.isHydrating&&i._initial!==!1)&&d())return Promise.resolve(a.getCachedData(t,e));r.pending.value=!0,r.status.value="pending";const l=new Promise((c,n)=>{try{c(v(e))}catch(f){n(f)}}).then(async c=>{if(l.cancelled)return e._asyncDataPromises[t];let n=c;a.transform&&(n=await a.transform(c)),a.pick&&(n=K(n,a.pick)),e.payload.data[t]=n,r.data.value=n,r.error.value=null,r.status.value="success"}).catch(c=>{if(l.cancelled)return e._asyncDataPromises[t];r.error.value=H(c),r.data.value=R(a.default()),r.status.value="error"}).finally(()=>{l.cancelled||(r.pending.value=!1,delete e._asyncDataPromises[t])});return e._asyncDataPromises[t]=l,e._asyncDataPromises[t]},r.clear=()=>I(e,t);const D=()=>r.refresh({_initial:!0}),P=a.server!==!1&&e.payload.serverRendered;{const i=S();if(i&&!i._nuxtOnBeforeMountCbs){i._nuxtOnBeforeMountCbs=[];const n=i._nuxtOnBeforeMountCbs;O(()=>{n.forEach(f=>{f()}),n.splice(0,n.length)}),B(()=>n.splice(0,n.length))}P&&e.isHydrating&&(r.error.value||d())?(r.pending.value=!1,r.status.value=r.error.value?"error":"success"):i&&(e.payload.serverRendered&&e.isHydrating||a.lazy)&&a.immediate?i._nuxtOnBeforeMountCbs.push(D):a.immediate&&D();const l=z();if(a.watch){const n=M(a.watch,()=>r.refresh());l&&_(n)}const c=e.hook("app:data:refresh",async n=>{(!n||n.includes(t))&&await r.refresh()});l&&_(c)}const h=Promise.resolve(e._asyncDataPromises[t]).then(()=>r);return Object.assign(h,r),h}function I(s,o){o in s.payload.data&&(s.payload.data[o]=void 0),o in s.payload._errors&&(s.payload._errors[o]=null),s._asyncData[o]&&(s._asyncData[o].data.value=void 0,s._asyncData[o].error.value=null,s._asyncData[o].pending.value=!1,s._asyncData[o].status.value="idle"),o in s._asyncDataPromises&&(s._asyncDataPromises[o].cancelled=!0,s._asyncDataPromises[o]=void 0)}function K(s,o){const t={};for(const u of o)t[u]=s[u];return t}export{T as u};
