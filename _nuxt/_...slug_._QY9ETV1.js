import C from"./ContentRenderer.3Suhjoy6.js";import{_ as S}from"./button-main.Ktz-cRiq.js";import{C as B,k as D,b as c,D as _,w as y,E as h,e as g,c as d,f as v,n as P,G as L,q as M,H as N,I as f,m as E,J as k,g as R}from"./entry.oghj7BIW.js";import{a as q,q as I}from"./query.6hQunS3P.js";import{u as O}from"./composables.m0qVsWew.js";import{u as w}from"./vue.f36acd1f.wctgimtq.js";import"./ContentRendererMarkdown.vue.YfvEf619.js";import"./index.LXYqXHhh.js";import"./preview.aaJN5eNP.js";import"./custom-link.gsUsvWJn.js";import"./nuxt-link.tV7wsN9L.js";import"./index.9ELg4rfW.js";function T(a,n){const{title:s,titleTemplate:i,...o}=a;return w({title:s,titleTemplate:i,_flatMeta:o},{...n,transform(e){const u=B({...e._flatMeta});return delete e._flatMeta,{...e,meta:u}}})}const V={name:"PageSection",props:{wrapper:{type:String,default:"section"},classes:{type:String}}},j={key:0,class:"px-5 tablet:px-10 desktop:px-20"},A={class:"mx-auto max-w-screen-desktop-wide"},G={key:1,class:"w-full"};function H(a,n,s,i,o,e){return c(),_(L(s.wrapper),{class:P("relative w-full "+s.classes)},{default:y(()=>[a.$slots.default?(c(),d("div",j,[g("div",A,[h(a.$slots,"default")])])):v("",!0),a.$slots.full?(c(),d("div",G,[h(a.$slots,"full")])):v("",!0)]),_:3},8,["class"])}const z=D(V,[["render",H]]),J={PL:"pl-PL",EN:"en-US"},U={PL:"https://webo.pl",EN:"https://webo.agency"};function F(a){if(!a)return[];let n=[];for(const[s,i]of Object.entries(a)){let o={lang:s,hreflang:J[s],href:U[s]+i};n.push(o)}return n}const K={class:"my-[150px]"},Q=g("h1",{class:"text-2xl mb-5"},"Document is empty",-1),ie={__name:"[...slug]",props:{globalSettings:Object},async setup(a){let n,s;const i=a,o=M(),{data:e}=([n,s]=N(()=>q("page-data-"+o.fullPath.split("#")[0].split("?")[0],()=>I(o.path).findOne(),"$g1CmaRBB6T")),n=await n,s(),n),u=f(()=>F(e.value.hreflangs));E("hrefLangs"+o.fullPath.split("#")[0],()=>u.value);const x=f(()=>u.value.map(t=>({rel:"alternate",href:t.href,hreflang:t.hreflang}))),$=O(),b=f(()=>{var p;if(!e.value)return;let t={};const m=i.globalSettings.head,l=e.value.introduction,r=e.value.meta;return t.title=(l==null?void 0:l.title)||(r==null?void 0:r.title)||m.title,t.ogTitle=t.title,t.description=(l==null?void 0:l.description)||(r==null?void 0:r.description)||m.description,t.ogDescription=t.description,(p=e.value.image)!=null&&p.url&&(t.ogImage=$(e.value.image.url)),t});return T(b.value),w({link:x}),(t,m)=>{const l=C,r=S,p=z;return c(),d("div",null,[k(e)?(c(),_(l,{key:0,value:k(e)},null,8,["value"])):(c(),_(p,{key:1},{default:y(()=>[g("div",K,[Q,R(r,{class:"text-white",link:"/",title:"Back to home"})])]),_:1}))])}}};export{ie as default};
