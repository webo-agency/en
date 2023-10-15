import{_ as c}from"./custom-link.e0162454.js";import u from"./block-header-md.a6d53451.js";import{m as _,I as f,f as s,g as a,D as l,J as k,w as o,E as n,i,C as b,t as r,p as h,l as w,h as d}from"./entry.b8a43932.js";import"./nuxt-link.5cdab687.js";import"./ready.aa9c00cf.js";import"./slot.92cf4ff5.js";import"./node.4f78770b.js";const g={name:"BlockHeaderLink",props:{center:Boolean,maxWidth:Number,url:String,linktitle:String},components:{BlockHeaderMdc:u,CustomLink:c}},v=e=>(h("data-v-b0a7629d"),e=e(),w(),e),x={class:"flex flex-col tablet-wide:flex-row justify-between tablet-wide:items-end pb-5 desktop:pb-10"},L={key:0,class:"mr-2.5"},y=v(()=>d("svg",{class:"inline text-current fill-current",width:"23",height:"16",viewBox:"0 0 23 16",xmlns:"http://www.w3.org/2000/svg"},[d("path",{d:"M15.0863 0.111816L13.7605 1.43762L19.3853 7.06244H0V8.9375H19.3852L13.7605 14.5621L15.0863 15.8879L22.9745 7.99988L15.0863 0.111816Z"})],-1));function B(e,$,t,H,S,C){const m=f("BlockHeaderMdc"),p=c;return s(),a("div",x,[e.$slots.subtitle||e.$slots.title||e.$slots.description?(s(),l(m,{key:0,class:"no-padding header-small tablet-wide:max-w-[460px]"},k({_:2},[e.$slots.subtitle?{name:"subtitle",fn:o(()=>[n(e.$slots,"subtitle",{},void 0,!0)]),key:"0"}:void 0,e.$slots.title?{name:"title",fn:o(()=>[n(e.$slots,"title",{},void 0,!0)]),key:"1"}:void 0,e.$slots.description?{name:"description",fn:o(()=>[n(e.$slots,"description",{},void 0,!0)]),key:"2"}:void 0]),1024)):i("",!0),b(" "+r(e.$slots.linktitle)+" ",1),t.url?(s(),l(p,{key:1,class:"prose flex items-center w-max mt-10 text-base text-green-main hover:text-green-mainHover font-semibold transition duration-200","active-class":"",url:t.url},{default:o(()=>[t.linktitle?(s(),a("span",L,r(t.linktitle),1)):i("",!0),y]),_:1},8,["url"])):i("",!0)])}const J=_(g,[["render",B],["__scopeId","data-v-b0a7629d"]]);export{J as default};