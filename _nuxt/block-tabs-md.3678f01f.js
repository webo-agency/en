import{_ as p}from"./nuxt-picture.9da09e74.js";import{k as _,b as e,c as a,e as r,F as d,G as b,n as m,C as u,f as x,t as f}from"./entry.accf8e16.js";import"./vue.f36acd1f.53099d08.js";const k={props:{tabNames:{type:Array}},data(){return{activeTabId:null}},methods:{setActiveTab(o){}}},v={class:"flex justify-between flex-wrap desktop:flex-nowrap gap-2.5 tablet:gap-5 mb-10 tablet:mb-[100px]"},g=["onClick"],h={class:"text-lg tablet:text-xl desktop:text-2xl font-semibold"},y=r("div",{class:"px-5 tablet:px-10 desktop:px-[50px]"},null,-1);function T(o,C,n,B,l,c){const i=p;return e(),a("div",null,[r("ul",v,[(e(!0),a(d,null,b(n.tabNames,(t,s)=>(e(),a("li",{key:s,class:m(["basis-full tablet:basis-[calc(50%_-_10px)] desktop:basis-[calc(33.3%_-_13.3px)] flex items-center p-5 desktop:p-7 border-2 transition duration-300 rounded-[5px] cursor-pointer",[l.activeTabId==s?"border-green-main hover:border-green-main":"border-gray-default hover:border-green-mainHover/40"]]),onClick:N=>c.setActiveTab(s)},[t.iconUrl?(e(),u(i,{key:0,src:t.iconUrl,class:"h-10 tablet:h-[60px] mr-3 tablet:mr-5","img-attrs":{class:"h-full object-contain "}},null,8,["src"])):x("",!0),r("span",h,f(t.name),1)],10,g))),128))]),y])}const j=_(k,[["render",T]]);export{j as default};
