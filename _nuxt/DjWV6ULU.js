import{_ as p}from"./C6wHviET.js";import{_ as b}from"./DgG4DFvg.js";import h from"./CCSImTOo.js";import d from"./Bxxwncy9.js";import k from"./BWqo2yX0.js";import{r as x}from"./C0MC3ylS.js";import{q as v,L as y,f as n,g as c,j as l,i,w as o,h as a,M as S,n as s,E as r,K as B,D as w}from"./CgsqtpGp.js";import"./DlmxwjVi.js";import"./CGOQ53qn.js";import"./Dnd51l0P.js";const I={props:{bgImg:{type:Boolean,default:!0},bgUrl:String,headerWidth:Number,descriptionWidth:{type:Number,default:520},isSecondSvg:{type:Boolean,default:!1}},components:{PageSectionMd:d,BlockHeaderMdc:k}},j={key:0,class:"absolute w-full h-full"},M={class:"h-full flex flex-col justify-center"},W={class:"py-4 desktop:pt-0 desktop:pb-2"};function C(e,H,t,N,V,z){const m=p,u=y("BlockHeaderMdc"),f=b,_=h,g=d;return n(),c("div",{ref:"container",class:s(["relative w-full h-[550px] desktop:h-[550px] flex flex-col justify-start desktop:justify-start mb-24",{"bg-green-gray":!t.bgImg}])},[t.bgImg?(n(),c("div",j,[l(m,{class:"w-full h-full object-cover ultraHd:object-contain",src:t.bgUrl,imgAttrs:{class:"w-full h-full object-cover ultraHd:object-contain"},width:"1920",height:"650"},null,8,["src"])])):i("",!0),l(g,{class:s(["",[{"pt-20 desktop:pt-24":t.bgImg},{"pt-14 desktop:pt-0":!t.bgImg}]])},{default:o(()=>[l(_,null,{left:o(()=>[a("div",M,[l(u,{class:"",textWhite:!0,maxWidth:t.headerWidth?t.headerWidth:520},S({_:2},[e.$slots.subtitle?{name:"subtitle",fn:o(()=>[a("div",{class:s({"text-black":!t.bgImg})},[r(e.$slots,"subtitle")],2)]),key:"0"}:void 0,e.$slots.title?{name:"title",fn:o(()=>[a("div",{class:s({"text-black":!t.bgImg})},[r(e.$slots,"title")],2)]),key:"1"}:void 0]),1032,["maxWidth"]),e.$slots.description?(n(),c("div",{key:0,class:s(["pb-2 desktop:pb-4 font-medium text-white text-lg desktop:text-xl",{"!text-black":!t.bgImg}]),style:B([{"max-width":t.descriptionWidth+"px"}])},[x(e.$slots,"description")],6)):i("",!0),a("div",W,[t.bgImg?i("",!0):(n(),w(f,{key:0,getContainerRef:()=>e.$refs.container,isSecondSvg:t.isSecondSvg,class:"mt-6"},null,8,["getContainerRef","isSecondSvg"]))])])]),right:o(()=>[r(e.$slots,"right")]),_:3})]),_:3},8,["class"])],2)}const F=v(I,[["render",C]]);export{F as default};
