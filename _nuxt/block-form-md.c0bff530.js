import{k as x,b as a,c as i,e as s,D as l,n as _,g as d,w as c,O as b,f as m,Q as w,T as v}from"./entry.accf8e16.js";import{_ as h}from"./button-main.7ad90e2a.js";import{r as n}from"./slot.d82eb2b6.js";import"./custom-link.61187dcf.js";import"./nuxt-link.fa0b0e9d.js";import"./node.e4a9c3bc.js";const g={name:"BlockFormMdc",data(){return{isOverDropZone:!1,mailSent:!1}},props:{privacyText:{type:String,default:"Twoje dane przetważamy zgodnie z naszą **<a>polityką prywatności.</a>**"}},methods:{isEmailValid(t){return!!String(t).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)},sendForm(){var r;const t=new FormData(document.forms.contactForm),e=(r=this.$refs.sendButton)==null?void 0:r.$el;if(t.get("mail")&&this.isEmailValid(t.get("mail"))){e==null||e.setAttribute("disabled","");const u=this;this.formRequest(t).then(o=>{console.log(o),u.mailSent=!0}).catch(o=>{console.error("Contact form could not be send",o),e==null||e.removeAttribute("disabled")})}},async formRequest(t){return await $fetch("/api/contact",{method:"POST",body:t})},onConfirmTransitionAfter(){this.$refs.svgPath.classList.add("svg-check-animation")}},components:{ButtonMain:h}},y={class:"flex flex-col tablet:flex-row"},$={class:"max-w-[820px] text-gray-darker mb-20 tablet:mb-0 basis-2/3 desktop-wide:basis-auto desktop-wide:shrink-0"},S={class:"w-full relative"},B={name:"contactForm",method:"post",enctype:"multipart/form-data",class:"flex flex-col"},C={class:"flex flex-wrap mb-8 desktop:mb-16"},T={class:"text-lg desktop:text-xl font-semibold mb-2.5"},F={class:"prose text-xs desktop:text-sm text-gray-dark/50 max-w-[250px]"},M={class:"absolute inset-0 flex flex-col justify-center items-center bg-white"},z={class:"w-24 desktop:w-[175px] aspect-square flex justify-center items-center rounded-full border-4 border-green-main mb-7 desktop:mb-[50px]"},A={class:"w-12 h-12 desktop:w-auto desktop:h-auto",width:"74",height:"51",viewBox:"0 0 74 51",fill:"none",xmlns:"http://www.w3.org/2000/svg"},D={ref:"svgPath",class:"svg-check",d:"M4 25.5L26 47L70 4",stroke:"#07E7C4","stroke-width":"8","stroke-linecap":"round","stroke-linejoin":"round"},E={key:0,class:"text-3xl tablet:text-4xl desktop:text-5xl mb-5 desktop:mb-10 text-center font-semibold"},V={key:1,class:"text-lg desktop:text-xl mb-7 desktop:mb-[50px] text-center font-semibold"},j={key:2};function L(t,e,r,u,o,f){const p=h;return a(),i("div",y,[s("div",$,[s("div",S,[s("form",B,[s("ul",C,[l(t.$slots,"radio",{},void 0,!0)]),s("legend",T,[n(t.$slots,"formtitle",{},void 0,!0)]),l(t.$slots,"fields",{},void 0,!0)]),s("div",{class:_(["flex flex-col mt-5 desktop:mt-10 transition",{"opacity-0":o.mailSent}])},[d(p,{tagButton:!0,class:"mb-2.5 desktop:mb-6 text-white",ref:"sendButton",onClick:e[0]||(e[0]=k=>f.sendForm())},{default:c(()=>[n(t.$slots,"buttontext",{},void 0,!0)]),_:3},512),s("div",F,[n(t.$slots,"policytext",{},void 0,!0)])],2),d(v,{name:"confirmShow",onAfterEnter:e[1]||(e[1]=k=>f.onConfirmTransitionAfter())},{default:c(()=>[b(s("div",M,[s("div",z,[(a(),i("svg",A,[s("path",D,null,512)]))]),t.$slots.thanksMessage?(a(),i("div",E,[n(t.$slots,"thanksMessage",{},void 0,!0)])):m("",!0),t.$slots.thanksDescription?(a(),i("div",V,[n(t.$slots,"thanksDescription",{},void 0,!0)])):m("",!0),t.$slots.buttonBackText?(a(),i("div",j,[d(p,{class:"mb-2.5 desktop:mb-6 text-white !w-auto",link:"https://www.webo.agency/"},{default:c(()=>[n(t.$slots,"buttonBackText",{},void 0,!0)]),_:3},8,["link"])])):m("",!0)],512),[[w,o.mailSent]])]),_:3})])]),l(t.$slots,"side",{},void 0,!0)])}const I=x(g,[["render",L],["__scopeId","data-v-088e7754"]]);export{I as default};
