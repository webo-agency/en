import w from"./case-tile-md.IHcLLj19.js";import S from"./effect-appear-md.yW1kUIfC.js";import{_ as C}from"./custom-link.OFrvxdE_.js";import{a as A,q as V}from"./query.JRF45pxM.js";import{k as $,H as I,I as f,b as s,c,e as h,F as M,N,D as P,w as l,J as i,g as d,t as q,B as D,f as _,p as E,i as T}from"./entry.OFycey9P.js";import{u as L}from"./index.5THR0E0Z.js";import"./nuxt-picture.MLNvP3F-.js";import"./composables.OM1iBtAS.js";import"./vue.f36acd1f.JHKKCg2M.js";import"./nuxt-link.PP4D8B3E.js";import"./preview.FajV3EkY.js";const j=r=>(E("data-v-a5f867f2"),r=r(),T(),r),z={key:0},H={class:"cases-container"},J={key:0,class:"!relative mt-10 desktop:mt-20"},O=j(()=>h("span",{class:"h-0.5 w-[14px] ml-3 mt-0.5 bg-gray-darker z-10 group-hover:translate-x-1 transition-transform duration-200"},null,-1)),G={__name:"block-cases-md",props:{contentFolder:{type:String,required:!0},moreBtn:{type:Object},techFilters:{type:Array,default:[]},selectedSlugs:{type:Array,default:[]}},async setup(r){let o,u;const t=r,y=L(),{data:k}=([o,u]=I(()=>A("cases",()=>V(t.contentFolder).where([{_path:{$ne:`/${t.contentFolder}`}},{tile_hidden:{$eq:!1}}]).sort({tile_order:1}).find())),o=await o,u(),o),b=f(()=>k.value.filter(e=>x(e)).slice(0,4)),g=f(()=>t.moreBtn&&t.moreBtn.url&&t.moreBtn.linktitle);function x(e){return B(e.technologies)&&v(e)}function v(e){return t.selectedSlugs.length==0?!0:t.selectedSlugs.map(a=>`/${e._dir}/${a}`).includes(e._path)}function B(e){return t.techFilters.length==0?!0:e===void 0?!1:e.some(n=>t.techFilters.includes(n))}return(e,n)=>{const a=w,m=S,F=C;return r.contentFolder?(s(),c("div",z,[h("div",H,[(s(!0),c(M,null,N(i(b),p=>(s(),P(m,{key:p._path},{default:l(()=>[d(a,{data:p,mousePos:i(y),showTech:!1},null,8,["data","mousePos"])]),_:2},1024))),128))]),d(m,null,{default:l(()=>[i(g)?(s(),c("div",J,[d(F,{url:r.moreBtn.url,activeClass:"none-temp",class:"group flex items-center w-fit mx-auto text-base font-semibold border-gray-darker border-solid border-2 text-gray-darker hover:bg-green-main hover:border-green-main px-5 tablet:px-8 py-2.5 tablet:py-3.5 rounded-full transition duration-200 uppercase overflow-hidden"},{default:l(()=>[D(q(r.moreBtn.linktitle)+" ",1),O]),_:1},8,["url"])])):_("",!0)]),_:1})])):_("",!0)}}},oe=$(G,[["__scopeId","data-v-a5f867f2"]]);export{oe as default};