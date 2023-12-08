import{_ as m}from"./nuxt-picture.785e1295.js";import{_ as a}from"./button-main.150e3e14.js";import{_ as d}from"./button-scroll-down.8a135404.js";import{r as s}from"./slot.8cad4e12.js";import{k as u,b as _,c as f,g as o,e}from"./entry.6a24e4f6.js";import"./vue.f36acd1f.7fac0cee.js";import"./custom-link.e8cf8a6d.js";import"./nuxt-link.69e61d36.js";import"./node.e4a9c3bc.js";const h={components:{ButtonMain:a},props:{subtitle:{type:String,required:!1},title:{type:String,required:!1,default:"Title"},description:{type:String,required:!1},button:{type:Object,required:!1,default:{link:"/",title:"Click here"}}},computed:{titleChange:function(){const t=this.title.match(/\*(.*)\*/);return t.length?(this.animateTitle=t.pop(),this.title.replace(this.animateTitle,"...")):this.title}},data(){return{visible:!1,animateTitle:"",staticTitle:""}},methods:{typeEffect(){if(this.$refs.titleContainer){const t=this.$refs.titleContainer.querySelector("em");t!==void 0&&(console.log(t),this.$refs.titleContainer.querySelector("h1").insertAdjacentHTML("afterend",'<span class="font-normal text-green-main animate-pulse !animate-[pulse_0.8s_cubic-bezier(0.4,_0,_0.6,_1)_infinite]">|</span>'),t.innerText,t.innerText="",setTimeout(()=>{this.insertLetters(t,this.animateTitle,0)},400))}},insertLetters(t,n,i){let r=Math.random()*200;setTimeout(()=>{i<n.length&&(t.insertAdjacentHTML("beforeend",n[i]),this.insertLetters(t,n,i+1))},r)}},mounted(){this.visible=!0}},b={ref:"container",class:"relative h-[90vh] min-h-[650px] desktop:h-[860px] px-5 tablet:px-10 desktop:px-20 bg-center bg-cover bg-no-repeat ultraHd:bg-contain bg-gray-darker -mt-[100px]"},x={class:"flex items-center h-full mx-auto max-w-screen-desktop-wide relative z-10"},g={class:"mt-10 desktop:mt-0 max-w-[850px] transition duration-300"},k={class:"text-lg text-white"},v=e("em",{class:"font-semibold text-green-main not-italic mr-1"},"-/",-1),w={ref:"titleContainer",class:"inline-block mb-10 text-4xl tablet:text-5xl desktop:text-[70px] desktop:leading-[85px] font-semibold text-white"},y={class:"max-w-sm mb-14 text-xl desktop:text-2xl font-normal text-white"},T={class:"absolute bottom-0 left-0 right-0 flex justify-center z-10 py-4 desktop:pt-0 desktop:pb-2"};function C(t,n,i,r,$,S){const l=m,c=a,p=d;return _(),f("div",b,[o(l,{src:"/img/banner_bg.webp",class:"absolute inset-0 z-0 w-full h-full object-cover max-h-[900px]",format:"webp",loading:"eager",imgAttrs:{class:"w-full h-full object-cover"}}),e("div",x,[e("div",g,[e("p",k,[v,s(t.$slots,"subtitle",{unwrap:"p"})]),e("div",w,[s(t.$slots,"title")],512),e("div",y,[s(t.$slots,"description")]),o(c,{class:"text-gray-darker",link:i.button.link,title:i.button.title,isWide:!0},null,8,["link","title"])])]),e("div",T,[o(p,{getContainerRef:()=>t.$refs.container},null,8,["getContainerRef"])])],512)}const N=u(h,[["render",C]]);export{N as default};