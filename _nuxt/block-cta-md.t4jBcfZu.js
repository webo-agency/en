import{_ as l}from"./button-main.fHyCgQDG.js";import c from"./block-header-md.msmabf62.js";import{k as r,L as m,b as p,c as f,g as s,M as u,w as o,E as n,e as i,n as x}from"./entry.pPzzoZnj.js";import"./custom-link.Tyrjqu3Z.js";import"./nuxt-link.icKZfnbH.js";import"./slot.4She4TD1.js";import"./node.uMQX-T_c.js";const k={name:"BlockCtaMdc",components:{BlockHeaderMdc:c,ButtonMain:l},props:{maxWidth:{type:Number,default:620},vertical:{type:Boolean,default:!1},button:{type:Object,required:!1,default:{link:"/",title:"Skontaktuj się",isWide:!1}}}},b={class:"title font-semibold text-center text-3xl mb-3"},_={class:"description mb-4 text-base desktop:text-xl font-normal text-center"};function v(t,B,e,y,h,M){const a=m("BlockHeaderMdc"),d=l;return p(),f("div",{class:x(["relative flex flex-col justify-between items-center px-5 desktop-wide:px-[120px] py-[40px] desktop:py-0 [&>div>div>div]:mb-2",{"tablet-wide:!flex-col [&_*]:text-center":e.vertical}])},[s(a,{class:"no-padding text-center tablet:text-left z-20",maxWidth:e.maxWidth,center:""},u({_:2},[t.$slots.subtitle?{name:"subtitle",fn:o(()=>[n(t.$slots,"subtitle")]),key:"0"}:void 0,t.$slots.title?{name:"title",fn:o(()=>[i("div",b,[n(t.$slots,"title")])]),key:"1"}:void 0,t.$slots.description?{name:"description",fn:o(()=>[i("div",_,[n(t.$slots,"description")])]),key:"2"}:void 0]),1032,["maxWidth"]),s(d,{class:"mt-5 mx-auto desktop:mx-0 text-black z-20",link:e.button.link,title:e.button.title,isWide:e.button.isWide},null,8,["link","title","isWide"])],2)}const N=r(k,[["render",v]]);export{N as default};
