import{_ as c}from"./custom-link.73836193.js";import p from"./block-header-md.907ad51c.js";import{k as _,K as f,b as s,c as l,C as a,L as k,w as o,D as n,f as i,B as b,t as r,p as w,i as h,e as d}from"./entry.3655a403.js";import"./nuxt-link.3016daf2.js";import"./slot.3d416d4c.js";const v={name:"BlockHeaderLink",props:{center:Boolean,maxWidth:Number,url:String,linktitle:String},components:{BlockHeaderMdc:p,CustomLink:c}},L=e=>(w("data-v-740b97d7"),e=e(),h(),e),g={class:"flex flex-col tablet-wide:flex-row justify-between tablet-wide:items-end pb-5 desktop:pb-10"},x={key:0,class:"mr-2.5"},B=L(()=>d("svg",{class:"inline text-current fill-current",width:"23",height:"16",viewBox:"0 0 23 16",xmlns:"http://www.w3.org/2000/svg"},[d("path",{d:"M15.0863 0.111816L13.7605 1.43762L19.3853 7.06244H0V8.9375H19.3852L13.7605 14.5621L15.0863 15.8879L22.9745 7.99988L15.0863 0.111816Z"})],-1));function y(e,$,t,H,S,C){const u=f("BlockHeaderMdc"),m=c;return s(),l("div",g,[e.$slots.subtitle||e.$slots.title||e.$slots.description?(s(),a(u,{key:0,class:"no-padding header-small tablet-wide:max-w-[460px]"},k({_:2},[e.$slots.subtitle?{name:"subtitle",fn:o(()=>[n(e.$slots,"subtitle",{},void 0,!0)]),key:"0"}:void 0,e.$slots.title?{name:"title",fn:o(()=>[n(e.$slots,"title",{},void 0,!0)]),key:"1"}:void 0,e.$slots.description?{name:"description",fn:o(()=>[n(e.$slots,"description",{},void 0,!0)]),key:"2"}:void 0]),1024)):i("",!0),b(" "+r(e.$slots.linktitle)+" ",1),t.url?(s(),a(m,{key:1,class:"prose flex items-center w-max mt-10 text-base text-green-main hover:text-green-mainHover font-semibold transition duration-200","active-class":"",url:t.url},{default:o(()=>[t.linktitle?(s(),l("span",x,r(t.linktitle),1)):i("",!0),B]),_:1},8,["url"])):i("",!0)])}const j=_(v,[["render",y],["__scopeId","data-v-740b97d7"]]);export{j as default};
