import{p as d,u as S,g as F}from"./CqTO-rh_.js";import{u as x}from"./hthz_cb7.js";import{H as r,d as j,r as N,o as O,aa as f,k as P}from"./Da7c7GoZ.js";function q(e){var i;(i=performance==null?void 0:performance.mark)==null||i.call(performance,"mark_feature_usage",{detail:{feature:e}})}const b={src:{type:String,default:void 0},format:{type:String,default:void 0},quality:{type:[Number,String],default:void 0},background:{type:String,default:void 0},fit:{type:String,default:void 0},modifiers:{type:Object,default:void 0},preset:{type:String,default:void 0},provider:{type:String,default:void 0},sizes:{type:[Object,String],default:void 0},densities:{type:String,default:void 0},preload:{type:[Boolean,Object],default:void 0},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0},alt:{type:String,default:void 0},referrerpolicy:{type:String,default:void 0},usemap:{type:String,default:void 0},longdesc:{type:String,default:void 0},ismap:{type:Boolean,default:void 0},loading:{type:String,default:void 0,validator:e=>["lazy","eager"].includes(e)},crossorigin:{type:[Boolean,String],default:void 0,validator:e=>["anonymous","use-credentials","",!0,!1].includes(e)},decoding:{type:String,default:void 0,validator:e=>["async","auto","sync"].includes(e)},nonce:{type:[String],default:void 0}},B=e=>{const i=r(()=>({provider:e.provider,preset:e.preset})),n=r(()=>({width:d(e.width),height:d(e.height),alt:e.alt,referrerpolicy:e.referrerpolicy,usemap:e.usemap,longdesc:e.longdesc,ismap:e.ismap,crossorigin:e.crossorigin===!0?"anonymous":e.crossorigin||void 0,loading:e.loading,decoding:e.decoding,nonce:e.nonce})),o=S(),l=r(()=>({...e.modifiers,width:d(e.width),height:d(e.height),format:e.format,quality:e.quality||o.options.quality,background:e.background,fit:e.fit}));return{options:i,attrs:n,modifiers:l}},E={...b,legacyFormat:{type:String,default:null},imgAttrs:{type:Object,default:null}},L=j({name:"NuxtPicture",props:E,emits:["load","error"],setup:(e,i)=>{var m,v;const n=S(),o=B(e),l=r(()=>F(e.src)),z=r(()=>["png","webp","gif","svg"].includes(l.value)),u=r(()=>e.legacyFormat?e.legacyFormat:z.value?"png":"jpeg"),a=r(()=>{var y,p;const t=((y=e.format)==null?void 0:y.split(","))||(l.value==="svg"?["svg"]:(p=n.options.format)!=null&&p.length?[...n.options.format]:["webp"]);return t[0]==="svg"?[{src:e.src}]:(t.includes(u.value)&&t.splice(t.indexOf(u.value),1),t.push(u.value),t.map(h=>{const{srcset:w,sizes:_,src:A}=n.getSizes(e.src,{...o.options.value,sizes:e.sizes||n.options.screens,densities:e.densities,modifiers:{...o.modifiers.value,format:h}});return{src:A,type:`image/${h}`,sizes:_,srcset:w}}))}),c=r(()=>a.value.length-1);if(e.preload){const t={rel:"preload",as:"image",imagesrcset:a.value[0].srcset,nonce:e.nonce,...typeof e.preload!="boolean"&&e.preload.fetchPriority?{fetchpriority:e.preload.fetchPriority}:{}};(v=(m=a.value)==null?void 0:m[0])!=null&&v.sizes&&(t.imagesizes=a.value[0].sizes),x({link:[t]})}const g={...e.imgAttrs,"data-nuxt-pic":""};for(const t in i.attrs)t in b&&!(t in g)&&(g[t]=i.attrs[t]);const s=N(),k=P().isHydrating;return O(()=>{s.value&&(s.value.complete&&k&&(s.value.getAttribute("data-error")?i.emit("error",new Event("error")):i.emit("load",new Event("load"))),s.value.onload=t=>{i.emit("load",t)},s.value.onerror=t=>{i.emit("error",t)},q("nuxt-picture"))}),()=>f("picture",null,[...a.value.slice(0,-1).map(t=>f("source",{type:t.type,sizes:t.sizes,srcset:t.srcset})),f("img",{ref:s,...o.attrs.value,...g,src:a.value[c.value].src,sizes:a.value[c.value].sizes,srcset:a.value[c.value].srcset})])}});export{L as _};
