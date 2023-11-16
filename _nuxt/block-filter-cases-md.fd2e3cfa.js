import{k as _,b as i,c as o,f as d,e as t,F as p,G as x,n as f,t as u,O as y,P as w,D as k,g as C,w as L,C as T}from"./entry.d58bde94.js";import V from"./block-filter-tile-cases-md.f6d4c085.js";import F from"./ContentList.0462047d.js";import{r as v}from"./slot.0b9caa11.js";import"./nuxt-picture.a869b88d.js";import"./vue.f36acd1f.16c01a7c.js";import"./custom-link.e59ccf4d.js";import"./nuxt-link.601a9176.js";import"./ContentQuery.ee168697.js";import"./query.9b17ad3b.js";import"./preview.4daf4e02.js";import"./node.e4a9c3bc.js";const E={props:{contentFolder:{type:String,required:!0},filters:Array,technologies:Array},data(){return{activeType:[],activeTech:[],selectExpanded:!1,shownCases:4}},watch:{shownCases(){this.updateVisible()},activeTech(){this.updateVisible()}},mounted(){this.updateVisible()},methods:{toggleFilter(s){let e=this.activeType.indexOf(s);e>-1?this.activeType.splice(e,1):this.activeType.push(s),this.updateVisible()},toggleExpand(){this.selectExpanded=!this.selectExpanded},increaseVisible(){this.shownCases+=4},updateVisible(){this.$nextTick(()=>{const s=this.$refs.casesContainer;s.querySelectorAll(".case-tile").forEach(a=>{a.classList.remove("hidden")});const e=s.querySelectorAll(".case-tile:not(.case-tile-hidden)");if(e){for(let r=0;r<e.length;r++)r+1>this.shownCases?e[r].classList.add("hidden"):e[r].classList.remove("hidden");const a=this.$refs.increase_btn;e.length<=this.shownCases?a.classList.add("hidden"):a.classList.remove("hidden")}})}}},B={key:0,class:"text-2xl tablet:text-3xl desktop:text-4xl font-semibold mb-10 tablet:mb-[60px]"},M={class:"flex flex-col tablet:flex-row justify-between mb-10"},S={class:"flex flex-wrap gap-x-5 gap-y-2.5 mb-5 tablet:mb-0"},$=["onClick"],j={class:"shrink-0 relative flex flex-wrap justify-between"},q={key:0,class:"block py-[7px] px-5 text-sm tablet:text-base text-gray-darker"},H={class:"relative w-[200px] h-[34px] tablet:h-[42px]"},z={class:"absolute top-0 right-0 w-full border border-solid border-gray-default bg-white z-30 rounded-[5px] overflow-hidden"},A={class:"relative overflow-hidden after:absolute after:content-[''] after:top-0 after:right-10 after:w-1/2 after:h-[34px] tablet:after:h-[42px] after:bg-gradient-to-l after:from-white after:pointer-events-none"},D={class:"absolute top-0 right-0 w-10 h-[34px] tablet:h-[42px] flex justify-center items-center bg-white z-20 pointer-events-none"},N=t("path",{d:"M9.15962 -3.67343e-08L10 0.840384L5 5.84046L-3.67343e-08 0.840383L0.840383 -4.0038e-07L5 4.21488L9.15962 -3.67343e-08Z",fill:"#212121"},null,-1),O=[N],Z=["id","value"],G=["for"],I={key:1,ref:"casesContainer",class:"relative flex flex-wrap gap-5 gap-y-10 tablet:gap-y-20 overflow-hidden"},P={key:2,ref:"casesContainer",class:"relative flex flex-wrap gap-5 gap-y-10 tablet:gap-y-20 overflow-hidden"},U={key:3,class:"w-full flex justify-center items-center mt-10 tablet:mt-20"},W=t("svg",{class:"inline text-current fill-current rotate-90 ml-3",width:"23",height:"16",viewBox:"0 0 23 16",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M15.0863 0.111816L13.7605 1.43762L19.3853 7.06244H0V8.9375H19.3852L13.7605 14.5621L15.0863 15.8879L22.9745 7.99988L15.0863 0.111816Z"})],-1);function J(s,e,a,r,n,h){const b=V,g=F;return i(),o("div",null,[s.$slots.title?(i(),o("div",B,[v(s.$slots,"title")])):d("",!0),t("div",M,[t("ul",S,[(i(!0),o(p,null,x(a.filters,(l,c)=>(i(),o("li",{key:c,class:f(["py-[7px] px-5 text-sm tablet:text-base rounded-[5px] transition duration-200 cursor-pointer",[n.activeType.includes(l)?"bg-green-main hover:bg-green-mainHover text-white":"bg-green-light hover:bg-green-mainHover/10 text-gray-darker"]]),onClick:m=>h.toggleFilter(l)},u(l),11,$))),128))]),t("div",j,[s.$slots.select?(i(),o("div",q,[v(s.$slots,"select")])):d("",!0),t("div",H,[t("div",z,[t("div",A,[t("span",{class:"block py-[7px] px-5 text-sm tablet:text-base text-gray-darker min-h-[34px] tablet:min-h-[42px] whitespace-nowrap",onClick:e[0]||(e[0]=l=>h.toggleExpand())},u(n.activeTech.length>0?n.activeTech.join():"Wszystkie"),1),t("div",D,[(i(),o("svg",{width:"20",height:"10",viewBox:"0 0 10 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:f(["transition duration-300",{"rotate-180":n.selectExpanded}])},O,2))]),t("ul",{class:f(["transition-all duration-300 overflow-y-auto",[n.selectExpanded?"max-h-[200px]":"max-h-0"]])},[(i(!0),o(p,null,x(a.technologies,(l,c)=>(i(),o("li",{key:c,class:"py-[7px] px-5 text-sm tablet:text-base text-gray-darker"},[y(t("input",{class:"appearance-none peer",type:"checkbox",id:l,value:l,"onUpdate:modelValue":e[1]||(e[1]=m=>n.activeTech=m)},null,8,Z),[[w,n.activeTech]]),t("label",{class:"peer-checked:font-semibold transition-all",for:l},u(l),9,G)]))),128))],2)])])])])]),s.$slots.cases?(i(),o("div",I,[k(s.$slots,"cases")],512)):d("",!0),a.contentFolder?(i(),o("div",P,[C(g,{path:`/${a.contentFolder}/`,query:{path:`/${a.contentFolder}/`,where:{_path:{$ne:`/${a.contentFolder}/isw`}},sort:{homepage_hidden:!1}}},{default:L(({list:l})=>[(i(!0),o(p,null,x(l,c=>(i(),T(b,{key:c._path,data:c,activeType:n.activeType,activeTech:n.activeTech},null,8,["data","activeType","activeTech"]))),128))]),_:1},8,["path","query"])],512)):d("",!0),s.$slots.loadMore?(i(),o("div",U,[t("div",{ref:"increase_btn",class:"flex items-center text-base text-green-main hover:text-green-mainHover font-semibold transition duration-200 cursor-pointer",onClick:e[2]||(e[2]=l=>h.increaseVisible())},[v(s.$slots,"loadMore"),W],512)])):d("",!0)])}const ne=_(E,[["render",J]]);export{ne as default};
