import{_ as d}from"./nuxt-picture.9da09e74.js";import{_ as c}from"./custom-link.61187dcf.js";import{r as a}from"./slot.d82eb2b6.js";import{k as u,b as e,c as s,g as m,f as o,e as l,C as p,w as _,M as x,p as f,i as h}from"./entry.accf8e16.js";import"./vue.f36acd1f.53099d08.js";import"./nuxt-link.fa0b0e9d.js";import"./node.e4a9c3bc.js";const b={props:{logoUrl:String,maxWidth:{type:Number,default:920},link:String}},g=t=>(f("data-v-b7ff49a7"),t=t(),h(),t),k={key:0,class:"mb-5"},v={key:1,class:"text-3xl tablet:text-4xl desktop:text-5xl font-semibold pb-5"},w={key:2,class:"tags-list flex flex-row flex-wrap gap-x-5 gap-y-2 mb-10"},y={key:3,class:"text-xl desktop:text-2xl"},$={key:0,class:"mr-2.5"},L=g(()=>l("svg",{class:"inline text-current fill-current",width:"23",height:"16",viewBox:"0 0 23 16",xmlns:"http://www.w3.org/2000/svg"},[l("path",{d:"M15.0863 0.111816L13.7605 1.43762L19.3853 7.06244H0V8.9375H19.3852L13.7605 14.5621L15.0863 15.8879L22.9745 7.99988L15.0863 0.111816Z"})],-1));function S(t,C,n,B,H,I){const r=d,i=c;return e(),s("div",{class:"mt-[100px] tablet:mt-[200px]",style:x([{"max-width":n.maxWidth+"px"}])},[n.logoUrl?(e(),s("div",k,[m(r,{class:"max-w-[150px] h-[50px] object-contain",src:n.logoUrl},null,8,["src"])])):o("",!0),t.$slots.title?(e(),s("div",v,[a(t.$slots,"title",{},void 0,!0)])):o("",!0),t.$slots.tags?(e(),s("ul",w,[a(t.$slots,"tags",{unwrap:"ul"},void 0,!0)])):o("",!0),t.$slots.description?(e(),s("div",y,[a(t.$slots,"description",{},void 0,!0)])):o("",!0),l("div",null,[n.link&&t.$slots.buttontext?(e(),p(i,{key:0,class:"prose flex items-center w-max mt-10 text-base text-green-main hover:text-green-mainHover font-semibold transition duration-200","active-class":"",url:n.link},{default:_(()=>[t.$slots.buttontext?(e(),s("div",$,[a(t.$slots,"buttontext",{},void 0,!0)])):o("",!0),L]),_:3},8,["url"])):o("",!0)])],4)}const E=u(b,[["render",S],["__scopeId","data-v-b7ff49a7"]]);export{E as default};
