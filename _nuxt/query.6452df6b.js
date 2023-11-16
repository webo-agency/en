import{R as N,r as D,S as K,U as I,V as W,a as C,W as q,j,J,X as Q,Y as V,Z as G,l as S,_ as X}from"./entry.3655a403.js";import{w as Y,a as Z,j as tt,b as et}from"./index.045f9874.js";import{u as $}from"./preview.c67f1c67.js";function vt(...n){var x;const s=typeof n[n.length-1]=="string"?n.pop():void 0;typeof n[0]!="string"&&n.unshift(s);let[r,e,t={}]=n;if(typeof r!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof e!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const i=j(),a=()=>null,u=()=>i.isHydrating?i.payload.data[r]:i.static.data[r];t.server=t.server??!0,t.default=t.default??a,t.getCachedData=t.getCachedData??u,t.lazy=t.lazy??!1,t.immediate=t.immediate??!0,t.deep=t.deep??N.deep;const c=()=>![null,void 0].includes(t.getCachedData(r));if(!i._asyncData[r]||!t.immediate){(x=i.payload._errors)[r]??(x[r]=null);const d=t.deep?D:K;i._asyncData[r]={data:d(t.getCachedData(r)??t.default()),pending:D(!c()),error:I(i.payload._errors,r),status:D("idle")}}const o={...i._asyncData[r]};o.refresh=o.execute=(d={})=>{if(i._asyncDataPromises[r]){if(d.dedupe===!1)return i._asyncDataPromises[r];i._asyncDataPromises[r].cancelled=!0}if((d._initial||i.isHydrating&&d._initial!==!1)&&c())return Promise.resolve(t.getCachedData(r));o.pending.value=!0,o.status.value="pending";const m=new Promise((f,y)=>{try{f(e(i))}catch(v){y(v)}}).then(f=>{if(m.cancelled)return i._asyncDataPromises[r];let y=f;t.transform&&(y=t.transform(f)),t.pick&&(y=rt(y,t.pick)),o.data.value=y,o.error.value=null,o.status.value="success"}).catch(f=>{if(m.cancelled)return i._asyncDataPromises[r];o.error.value=f,o.data.value=J(t.default()),o.status.value="error"}).finally(()=>{m.cancelled||(o.pending.value=!1,i.payload.data[r]=o.data.value,o.error.value&&(i.payload._errors[r]=Q(o.error.value)),delete i._asyncDataPromises[r])});return i._asyncDataPromises[r]=m,i._asyncDataPromises[r]};const h=()=>o.refresh({_initial:!0}),p=t.server!==!1&&i.payload.serverRendered;{const d=V();if(d&&!d._nuxtOnBeforeMountCbs){d._nuxtOnBeforeMountCbs=[];const f=d._nuxtOnBeforeMountCbs;d&&(W(()=>{f.forEach(y=>{y()}),f.splice(0,f.length)}),C(()=>f.splice(0,f.length)))}o.error.value||p&&i.isHydrating&&c()?(o.pending.value=!1,o.status.value=o.error.value?"error":"success"):d&&(i.payload.serverRendered&&i.isHydrating||t.lazy)&&t.immediate?d._nuxtOnBeforeMountCbs.push(h):t.immediate&&h(),t.watch&&q(t.watch,()=>o.refresh());const m=i.hook("app:data:refresh",async f=>{(!f||f.includes(r))&&await o.refresh()});d&&C(m)}const l=Promise.resolve(i._asyncDataPromises[r]).then(()=>o);return Object.assign(l,o),l}async function Dt(n){await new Promise(r=>G(r));const s=n?Array.isArray(n)?n:[n]:void 0;await j().hooks.callHookParallel("app:data:refresh",s)}function rt(n,s){const r={};for(const e of s)r[e]=n[e];return r}const k=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function nt(n,s){s?s={...k,...s}:s=k;const r=L(s);return r.dispatch(n),r.toString()}const st=Object.freeze(["prototype","__proto__","constructor"]);function L(n){let s="",r=new Map;const e=t=>{s+=t};return{toString(){return s},getContext(){return r},dispatch(t){return n.replacer&&(t=n.replacer(t)),this[t===null?"null":typeof t](t)},object(t){if(t&&typeof t.toJSON=="function")return this.object(t.toJSON());const i=Object.prototype.toString.call(t);let a="";const u=i.length;u<10?a="unknown:["+i+"]":a=i.slice(8,u-1),a=a.toLowerCase();let c=null;if((c=r.get(t))===void 0)r.set(t,r.size);else return this.dispatch("[CIRCULAR:"+c+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(t))return e("buffer:"),e(t.toString("utf8"));if(a!=="object"&&a!=="function"&&a!=="asyncfunction")this[a]?this[a](t):n.ignoreUnknown||this.unkown(t,a);else{let o=Object.keys(t);n.unorderedObjects&&(o=o.sort());let h=[];n.respectType!==!1&&!O(t)&&(h=st),n.excludeKeys&&(o=o.filter(l=>!n.excludeKeys(l)),h=h.filter(l=>!n.excludeKeys(l))),e("object:"+(o.length+h.length)+":");const p=l=>{this.dispatch(l),e(":"),n.excludeValues||this.dispatch(t[l]),e(",")};for(const l of o)p(l);for(const l of h)p(l)}},array(t,i){if(i=i===void 0?n.unorderedArrays!==!1:i,e("array:"+t.length+":"),!i||t.length<=1){for(const c of t)this.dispatch(c);return}const a=new Map,u=t.map(c=>{const o=L(n);o.dispatch(c);for(const[h,p]of o.getContext())a.set(h,p);return o.toString()});return r=a,u.sort(),this.array(u,!1)},date(t){return e("date:"+t.toJSON())},symbol(t){return e("symbol:"+t.toString())},unkown(t,i){if(e(i),!!t&&(e(":"),t&&typeof t.entries=="function"))return this.array(Array.from(t.entries()),!0)},error(t){return e("error:"+t.toString())},boolean(t){return e("bool:"+t)},string(t){e("string:"+t.length+":"),e(t)},function(t){e("fn:"),O(t)?this.dispatch("[native]"):this.dispatch(t.toString()),n.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(t.name)),n.respectFunctionProperties&&this.object(t)},number(t){return e("number:"+t)},xml(t){return e("xml:"+t.toString())},null(){return e("Null")},undefined(){return e("Undefined")},regexp(t){return e("regex:"+t.toString())},uint8array(t){return e("uint8array:"),this.dispatch(Array.prototype.slice.call(t))},uint8clampedarray(t){return e("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(t))},int8array(t){return e("int8array:"),this.dispatch(Array.prototype.slice.call(t))},uint16array(t){return e("uint16array:"),this.dispatch(Array.prototype.slice.call(t))},int16array(t){return e("int16array:"),this.dispatch(Array.prototype.slice.call(t))},uint32array(t){return e("uint32array:"),this.dispatch(Array.prototype.slice.call(t))},int32array(t){return e("int32array:"),this.dispatch(Array.prototype.slice.call(t))},float32array(t){return e("float32array:"),this.dispatch(Array.prototype.slice.call(t))},float64array(t){return e("float64array:"),this.dispatch(Array.prototype.slice.call(t))},arraybuffer(t){return e("arraybuffer:"),this.dispatch(new Uint8Array(t))},url(t){return e("url:"+t.toString())},map(t){e("map:");const i=[...t];return this.array(i,n.unorderedSets!==!1)},set(t){e("set:");const i=[...t];return this.array(i,n.unorderedSets!==!1)},file(t){return e("file:"),this.dispatch([t.name,t.size,t.type,t.lastModfied])},blob(){if(n.ignoreUnknown)return e("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return e("domwindow")},bigint(t){return e("bigint:"+t.toString())},process(){return e("process")},timer(){return e("timer")},pipe(){return e("pipe")},tcp(){return e("tcp")},udp(){return e("udp")},tty(){return e("tty")},statwatcher(){return e("statwatcher")},securecontext(){return e("securecontext")},connection(){return e("connection")},zlib(){return e("zlib")},context(){return e("context")},nodescript(){return e("nodescript")},httpparser(){return e("httpparser")},dataview(){return e("dataview")},signal(){return e("signal")},fsevent(){return e("fsevent")},tlswrap(){return e("tlswrap")}}}const F="[native code] }",at=F.length;function O(n){return typeof n!="function"?!1:Function.prototype.toString.call(n).slice(-at)===F}class w{constructor(s,r){s=this.words=s||[],this.sigBytes=r===void 0?s.length*4:r}toString(s){return(s||it).stringify(this)}concat(s){if(this.clamp(),this.sigBytes%4)for(let r=0;r<s.sigBytes;r++){const e=s.words[r>>>2]>>>24-r%4*8&255;this.words[this.sigBytes+r>>>2]|=e<<24-(this.sigBytes+r)%4*8}else for(let r=0;r<s.sigBytes;r+=4)this.words[this.sigBytes+r>>>2]=s.words[r>>>2];return this.sigBytes+=s.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new w([...this.words])}}const it={stringify(n){const s=[];for(let r=0;r<n.sigBytes;r++){const e=n.words[r>>>2]>>>24-r%4*8&255;s.push((e>>>4).toString(16),(e&15).toString(16))}return s.join("")}},ot={stringify(n){const s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=[];for(let e=0;e<n.sigBytes;e+=3){const t=n.words[e>>>2]>>>24-e%4*8&255,i=n.words[e+1>>>2]>>>24-(e+1)%4*8&255,a=n.words[e+2>>>2]>>>24-(e+2)%4*8&255,u=t<<16|i<<8|a;for(let c=0;c<4&&e*8+c*6<n.sigBytes*8;c++)r.push(s.charAt(u>>>6*(3-c)&63))}return r.join("")}},ct={parse(n){const s=n.length,r=[];for(let e=0;e<s;e++)r[e>>>2]|=(n.charCodeAt(e)&255)<<24-e%4*8;return new w(r,s)}},ut={parse(n){return ct.parse(unescape(encodeURIComponent(n)))}};class lt{constructor(){this._data=new w,this._nDataBytes=0,this._minBufferSize=0,this.blockSize=512/32}reset(){this._data=new w,this._nDataBytes=0}_append(s){typeof s=="string"&&(s=ut.parse(s)),this._data.concat(s),this._nDataBytes+=s.sigBytes}_doProcessBlock(s,r){}_process(s){let r,e=this._data.sigBytes/(this.blockSize*4);s?e=Math.ceil(e):e=Math.max((e|0)-this._minBufferSize,0);const t=e*this.blockSize,i=Math.min(t*4,this._data.sigBytes);if(t){for(let a=0;a<t;a+=this.blockSize)this._doProcessBlock(this._data.words,a);r=this._data.words.splice(0,t),this._data.sigBytes-=i}return new w(r,i)}}class ft extends lt{update(s){return this._append(s),this._process(),this}finalize(s){s&&this._append(s)}}const A=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],ht=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],_=[];class dt extends ft{constructor(){super(...arguments),this._hash=new w([...A])}reset(){super.reset(),this._hash=new w([...A])}_doProcessBlock(s,r){const e=this._hash.words;let t=e[0],i=e[1],a=e[2],u=e[3],c=e[4],o=e[5],h=e[6],p=e[7];for(let l=0;l<64;l++){if(l<16)_[l]=s[r+l]|0;else{const b=_[l-15],H=(b<<25|b>>>7)^(b<<14|b>>>18)^b>>>3,B=_[l-2],M=(B<<15|B>>>17)^(B<<13|B>>>19)^B>>>10;_[l]=H+_[l-7]+M+_[l-16]}const x=c&o^~c&h,d=t&i^t&a^i&a,m=(t<<30|t>>>2)^(t<<19|t>>>13)^(t<<10|t>>>22),f=(c<<26|c>>>6)^(c<<21|c>>>11)^(c<<7|c>>>25),y=p+f+x+ht[l]+_[l],v=m+d;p=h,h=o,o=c,c=u+y|0,u=a,a=i,i=t,t=y+v|0}e[0]=e[0]+t|0,e[1]=e[1]+i|0,e[2]=e[2]+a|0,e[3]=e[3]+u|0,e[4]=e[4]+c|0,e[5]=e[5]+o|0,e[6]=e[6]+h|0,e[7]=e[7]+p|0}finalize(s){super.finalize(s);const r=this._nDataBytes*8,e=this._data.sigBytes*8;return this._data.words[e>>>5]|=128<<24-e%32,this._data.words[(e+64>>>9<<4)+14]=Math.floor(r/4294967296),this._data.words[(e+64>>>9<<4)+15]=r,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function pt(n){return new dt().finalize(n).toString(ot)}function R(n,s={}){const r=typeof n=="string"?n:nt(n,s);return pt(r).slice(0,10)}const z=(n,s)=>s.split(".").reduce((r,e)=>r&&r[e],n),P=(n,s)=>Object.keys(n).filter(s).reduce((r,e)=>Object.assign(r,{[e]:n[e]}),{}),Pt=n=>s=>n&&n.length?P(s,r=>!n.includes(r)):s,Ct=n=>s=>Array.isArray(s)?s.map(r=>n(r)):n(s),T=n=>{const s=[],r=[];for(const e of n)["$","_"].includes(e)?s.push(e):r.push(e);return{prefixes:s,properties:r}},kt=(n=[])=>s=>{if(n.length===0||!s)return s;const{prefixes:r,properties:e}=T(n);return P(s,t=>!e.includes(t)&&!r.includes(t[0]))},Ot=(n=[])=>s=>{if(n.length===0||!s)return s;const{prefixes:r,properties:e}=T(n);return P(s,t=>e.includes(t)||r.includes(t[0]))},At=(n,s)=>{const r=new Intl.Collator(s.$locale,{numeric:s.$numeric,caseFirst:s.$caseFirst,sensitivity:s.$sensitivity}),e=Object.keys(s).filter(t=>!t.startsWith("$"));for(const t of e)n=n.sort((i,a)=>{const u=[z(i,t),z(a,t)].map(c=>{if(c!==null)return c instanceof Date?c.toISOString():c});return s[t]===-1&&u.reverse(),r.compare(u[0],u[1])});return n},Rt=(n,s="Expected an array")=>{if(!Array.isArray(n))throw new TypeError(s)},g=n=>Array.isArray(n)?n:[void 0,null].includes(n)?[]:[n],yt=["sort","where","only","without"];function gt(n,s={}){const r={};for(const a of Object.keys(s.initialParams||{}))r[a]=yt.includes(a)?g(s.initialParams[a]):s.initialParams[a];const e=(a,u=c=>c)=>(...c)=>(r[a]=u(...c),i),t=a=>{var u;return s.legacy?a!=null&&a.surround?a.surround:a&&(a!=null&&a.dirConfig&&(a.result={_path:(u=a.dirConfig)==null?void 0:u._path,...a.result,_dir:a.dirConfig}),a!=null&&a._path||Array.isArray(a)||!Object.prototype.hasOwnProperty.call(a,"result")?a:a==null?void 0:a.result):a},i={params:()=>({...r,...r.where?{where:[...g(r.where)]}:{},...r.sort?{sort:[...g(r.sort)]}:{}}),only:e("only",g),without:e("without",g),where:e("where",a=>[...g(r.where),...g(a)]),sort:e("sort",a=>[...g(r.sort),...g(a)]),limit:e("limit",a=>parseInt(String(a),10)),skip:e("skip",a=>parseInt(String(a),10)),find:()=>n(i).then(t),findOne:()=>n(e("first")(!0)).then(t),count:()=>n(e("count")(!0)).then(t),locale:a=>i.where({_locale:a}),withSurround:e("surround",(a,u)=>({query:a,...u})),withDirConfig:()=>e("dirConfig")(!0)};return s.legacy&&(i.findSurround=(a,u)=>i.withSurround(a,u).find().then(t)),i}function U(n){return JSON.stringify(n,mt)}function mt(n,s){return s instanceof RegExp?`--REGEX ${s.toString()}`:s}const wt=n=>{let s=U(n);return s=typeof Buffer<"u"?Buffer.from(s).toString("base64"):btoa(s),s=s.replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,""),(s.match(/.{1,100}/g)||[]).join("/")},E=n=>Y(n,S().public.content.api.baseURL),zt=()=>{throw console.warn("useContent is only accessible when you are using `documentDriven` mode."),console.warn("Learn more by visiting: https://content.nuxt.com/document-driven"),new Error("useContent is only accessible when you are using `documentDriven` mode.")},_t=()=>{const{experimental:n}=S().public.content;return n.clientDB?!0:$().isEnabled()},bt=()=>async n=>{const{content:s}=S().public,r=n.params(),e=s.experimental.stripQueryParameters?E(`/query/${`${R(r)}.${s.integrity}`}/${wt(r)}.json`):E(`/query/${R(r)}.${s.integrity}.json`);if(_t())return(await X(()=>import("./client-db.1de1449e.js"),["./client-db.1de1449e.js","./entry.3655a403.js","./index.045f9874.js","./preview.c67f1c67.js"],import.meta.url).then(a=>a.useContentDatabase())).fetch(n);const t=await $fetch(e,{method:"GET",responseType:"json",params:s.experimental.stripQueryParameters?void 0:{_params:U(r),previewToken:$().getPreviewToken()}});if(typeof t=="string"&&t.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return t};function Et(n,...s){const{content:r}=S().public,e=gt(bt(),{initialParams:typeof n!="string"?n:{},legacy:!0});let t;typeof n=="string"&&(t=Z(tt(n,...s)));const i=e.params;return e.params=()=>{var u,c,o;const a=i();return t&&(a.where=a.where||[],a.first&&(a.where||[]).length===0?a.where.push({_path:et(t)}):a.where.push({_path:new RegExp(`^${t.replace(/[-[\]{}()*+.,^$\s/]/g,"\\$&")}`)})),(u=a.sort)!=null&&u.length||(a.sort=[{_file:1,$numeric:!0}]),r.locales.length&&((o=(c=a.where)==null?void 0:c.find(p=>p._locale))!=null&&o._locale||(a.where=a.where||[],a.where.push({_locale:r.defaultLocale}))),a},e}export{vt as a,Rt as b,g as c,At as d,wt as e,Ct as f,z as g,R as h,kt as i,U as j,Ot as k,gt as l,Pt as o,Et as q,Dt as r,_t as s,zt as u,E as w};
