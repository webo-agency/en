import{_ as u}from"./nuxt-picture.9da09e74.js";import{_ as f}from"./button-scroll-down.50d7f20f.js";import i from"./page-section-md.3bc7582f.js";import _ from"./block-header-md.3bf89a65.js";import{r as b}from"./slot.d82eb2b6.js";import{k as h,K as x,b as n,c as l,e as r,g as o,w as s,L as k,D as a,M as g,f as w}from"./entry.accf8e16.js";import"./vue.f36acd1f.53099d08.js";import"./node.e4a9c3bc.js";const v={props:{bgUrl:String,headerWidth:Number,descriptionWidth:{type:Number,default:520}},components:{PageSectionMd:i,BlockHeaderMdc:_}},y={ref:"container",class:"relative w-full h-[550px] tablet-wide:h-[600px] -mt-[100px] desktop:h-[620px] mb-[50px] tablet:mb-[100px] desktop:mb-[150px]"},$={class:"absolute z-0 w-full h-full"},W={class:"py-4 desktop:pt-0 desktop:pb-2 flex justify-center"};function B(e,M,t,S,j,H){const c=u,d=x("BlockHeaderMdc"),p=f,m=i;return n(),l("div",y,[r("div",$,[o(c,{class:"w-full h-full object-cover ultraHd:object-contain",src:t.bgUrl,imgAttrs:{class:"w-full h-full object-cover ultraHd:object-contain"},width:"1920",height:"650"},null,8,["src"])]),o(m,{class:"relative h-full z-10 bg-center bg-cover bg-no-repeat ultraHd:bg-contain flex flex-col justify-end"},{default:s(()=>[o(d,{class:"pt-[100px] pb-5 desktop:pb-10 pr-10",textWhite:!0,maxWidth:t.headerWidth?t.headerWidth:520},k({_:2},[e.$slots.subtitle?{name:"subtitle",fn:s(()=>[a(e.$slots,"subtitle")]),key:"0"}:void 0,e.$slots.title?{name:"title",fn:s(()=>[a(e.$slots,"title")]),key:"1"}:void 0]),1032,["maxWidth"]),e.$slots.description?(n(),l("div",{key:0,class:"pb-2 desktop:pb-4 font-medium text-white text-lg desktop:text-xl",style:g([{"max-width":t.descriptionWidth+"px"}])},[b(e.$slots,"description")],4)):w("",!0),r("div",W,[o(p,{getContainerRef:()=>e.$refs.container},null,8,["getContainerRef"])])]),_:3})],512)}const D=h(v,[["render",B]]);export{D as default};
