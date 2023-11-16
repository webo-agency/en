import{_ as m}from"./nuxt-picture.e81bf6f4.js";import{_ as l}from"./button-main.4c4af428.js";import{_ as d}from"./button-scroll-down.95b3f731.js";import{r as s}from"./slot.3d416d4c.js";import{k as u,K as _,b as f,c as h,g as o,e}from"./entry.3655a403.js";import"./index.045f9874.js";import"./vue.f36acd1f.40d279c0.js";import"./custom-link.73836193.js";import"./nuxt-link.3016daf2.js";const b={components:{ButtonMain:l},props:{subtitle:{type:String,required:!1},title:{type:String,required:!1,default:"Title"},description:{type:String,required:!1},button:{type:Object,required:!1,default:{link:"/",title:"Click here"}}},computed:{titleChange:function(){const t=this.title.match(/\*(.*)\*/);return t.length?(this.animateTitle=t.pop(),this.title.replace(this.animateTitle,"...")):this.title}},data(){return{visible:!1,animateTitle:"",staticTitle:""}},methods:{typeEffect(){if(this.$refs.titleContainer){const t=this.$refs.titleContainer.querySelector("em");t!==void 0&&(console.log(t),this.$refs.titleContainer.querySelector("h1").insertAdjacentHTML("afterend",'<span class="font-normal text-green-main animate-pulse !animate-[pulse_0.8s_cubic-bezier(0.4,_0,_0.6,_1)_infinite]">|</span>'),t.innerText,t.innerText="",setTimeout(()=>{this.insertLetters(t,this.animateTitle,0)},400))}},insertLetters(t,i,n){let r=Math.random()*200;setTimeout(()=>{n<i.length&&(t.insertAdjacentHTML("beforeend",i[n]),this.insertLetters(t,i,n+1))},r)}},mounted(){this.visible=!0}},x={ref:"container",class:"relative h-[90vh] min-h-[650px] desktop:h-[860px] px-5 tablet:px-10 desktop:px-20 bg-center bg-cover bg-no-repeat ultraHd:bg-contain bg-gray-darker -mt-[100px]"},g={class:"flex items-center h-full mx-auto max-w-screen-desktop-wide relative z-10"},k={class:"mt-10 desktop:mt-0 max-w-[850px] transition duration-300"},v={class:"text-lg text-white"},y=e("em",{class:"font-semibold text-green-main not-italic mr-1"},"-/",-1),C={ref:"titleContainer",class:"inline-block mb-10 text-4xl tablet:text-5xl desktop:text-[70px] desktop:leading-[85px] font-semibold text-white"},T={class:"max-w-sm mb-14 text-xl desktop:text-2xl font-normal text-white"},w={class:"absolute bottom-0 left-0 right-0 flex justify-center z-10 py-4 desktop:pt-0 desktop:pb-2"};function $(t,i,n,r,S,M){const a=m;_("MDCSlot");const c=l,p=d;return f(),h("div",x,[o(a,{src:"/img/banner_bg.png",class:"absolute inset-0 z-0 w-full h-full object-cover",imgAttrs:{class:"w-full h-full object-cover"}}),e("div",g,[e("div",k,[e("p",v,[y,s(t.$slots,"subtitle",{unwrap:"p"})]),e("div",C,[s(t.$slots,"title")],512),e("div",T,[s(t.$slots,"description")]),o(c,{class:"text-gray-darker",link:n.button.link,title:n.button.title,isWide:!0},null,8,["link","title"])])]),e("div",w,[o(p,{getContainerRef:()=>t.$refs.container},null,8,["getContainerRef"])])],512)}const R=u(b,[["render",$]]);export{R as default};
