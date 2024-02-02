import{k as w,b as a,c as n,e as o,f as r,n as i,a0 as x,E as c,g as m,w as u,Z as g,X as v,T as C,p as L,i as y}from"./entry.zydDV-Eq.js";import{_ as k}from"./button-main.gNdOmVVo.js";import{r as d}from"./slot.EJ7Jp1Kn.js";import"./custom-link.0FoJm6o2.js";import"./nuxt-link.0cel39JL.js";import"./node.uMQX-T_c.js";const _={name:"BlockFormMdc",data(){return{isOverDropZone:!1,mailSent:!1}},props:{privacyText:{type:String,default:"Twoje dane przetważamy zgodnie z naszą **<a>polityką prywatności.</a>**"},darkContainer:{type:Boolean,default:!1},decoration:Boolean},methods:{isEmailValid(e){return!!String(e).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)},sendForm(){var s;const e=new FormData(document.forms.contactForm);document.forms.contactForm.checkValidity();const t=(s=this.$refs.sendButton)==null?void 0:s.$el;if(e.get("mail")&&this.isEmailValid(e.get("mail"))){t==null||t.setAttribute("disabled","");const f=this;this.formRequest(e).then(l=>{console.log(l),f.mailSent=!0}).catch(l=>{console.error("Contact form could not be send",l),t==null||t.removeAttribute("disabled")})}},async formRequest(e){return await $fetch("/api/contact",{method:"POST",body:e})},onConfirmTransitionAfter(){this.$refs.svgPath.classList.add("svg-check-animation")}},components:{ButtonMain:k}},$=e=>(L("data-v-76ee2c44"),e=e(),y(),e),S={class:"flex flex-col tablet:flex-row"},V={key:0,class:"mb-5 tablet:mb-7"},M={key:0,class:"flex flex-wrap mb-8 desktop:mb-16"},B={key:1,class:"text-lg desktop:text-xl font-semibold mb-2.5"},T={class:"w-24 desktop:w-[175px] aspect-square flex justify-center items-center rounded-full border-4 border-green-main mb-7 desktop:mb-[50px]"},Z={class:"w-12 h-12 desktop:w-auto desktop:h-auto",width:"74",height:"51",viewBox:"0 0 74 51",fill:"none",xmlns:"http://www.w3.org/2000/svg"},F={ref:"svgPath",class:"svg-check",d:"M4 25.5L26 47L70 4",stroke:"#07E7C4","stroke-width":"8","stroke-linecap":"round","stroke-linejoin":"round"},z={key:0,class:"text-3xl tablet:text-4xl desktop:text-5xl mb-5 desktop:mb-10 text-center font-semibold"},A={key:1,class:"text-lg desktop:text-xl mb-7 desktop:mb-[50px] text-center font-semibold"},E={key:2},D={key:0,class:"hidden tablet:block absolute bottom-0 right-[-170px]"},I=$(()=>o("svg",{xmlns:"http://www.w3.org/2000/svg",width:"158",height:"200",viewBox:"0 0 158 200",fill:"none"},[o("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M32.4495 0.0160025L32.4353 0.0244524H32.4219L32.4059 0.0329024C32.2775 0.0582577 32.1554 0.117382 32.0502 0.210352L32.0378 0.218849L32.0208 0.235749L32.0039 0.244199L0.26122 30.3494L0.246039 30.3579L0.22824 30.3747L0.214846 30.3916L0.200597 30.4085L0.192541 30.417C0.118555 30.5099 0.0659661 30.603 0.0347672 30.7128L0.0312426 30.7213L0.0259054 30.7382L0.0240928 30.7551C0.0196358 30.772 0.0160675 30.7803 0.0133933 30.7972C0.00537072 30.8479 0 30.8988 0 30.941V167.488C0 167.834 0.221114 168.138 0.558062 168.274L74.8391 196.731C88.8483 202.089 101.532 200.635 110.722 194.018C117.871 188.879 122.917 180.579 124.788 169.862C143.757 169.051 157.333 153.965 157.333 130.198V48.2756C157.333 47.9291 157.111 47.6162 156.772 47.4895L32.979 0.06675C32.9425 0.0498465 32.9042 0.0413542 32.8659 0.0329024L32.8471 0.0244524H32.8373L32.8213 0.0160025C32.6982 -0.00935279 32.5716 -0.000901034 32.4495 0.0160025ZM32.1465 43.83L1.78282 32.2003V166.921L75.5076 195.159C88.8314 200.264 100.908 198.97 109.644 192.674C118.424 186.36 123.808 175.052 123.808 160.295V78.9386L32.4683 43.9482C32.3515 43.9313 32.2428 43.8891 32.1465 43.83ZM155.551 50.3293L125.591 78.7188V160.295C125.591 163.034 125.404 165.662 125.056 168.164C142.964 167.209 155.551 152.714 155.551 130.198V50.3293ZM33.5264 42.5368L124.485 77.375L154.873 48.5797L33.5264 2.09507V42.5368ZM2.47454 30.6367L31.7436 41.8522V2.8897L2.47454 30.6367Z",fill:"#07E7C4"})],-1)),j=[I];function q(e,t,s,f,l,h){const p=k;return a(),n("div",S,[o("div",{class:i(["relative max-w-[820px] basis-2/3 desktop-wide:shrink-0",[s.darkContainer?"text-white p-5 tablet:p-10 desktop:p-[60px] bg-gray-darkest":"text-gray-darker"]])},[e.$slots.header?(a(),n("div",V,[d(e.$slots,"header",{},void 0,!0)])):r("",!0),o("div",{class:i(["w-full relative",[s.darkContainer?"text-white [&_.textInput]:bg-gray-darker":"text-gray-darker"]])},[o("form",{name:"contactForm",method:"post",enctype:"multipart/form-data",class:"flex flex-col",onSubmit:t[0]||(t[0]=x(b=>h.sendForm(),["prevent"]))},[e.$slots.radio?(a(),n("ul",M,[c(e.$slots,"radio",{},void 0,!0)])):r("",!0),e.$slots.formtitle?(a(),n("legend",B,[d(e.$slots,"formtitle",{},void 0,!0)])):r("",!0),c(e.$slots,"fields",{},void 0,!0),o("div",{class:i(["flex flex-col mt-5 desktop:mt-10 transition",{"opacity-0":l.mailSent}])},[o("div",{class:i(["prose font-normal text-xs desktop:text-sm max-w-[250px] mb-6 desktop:mb-10",[s.darkContainer?"text-white":"text-gray-dark/50"]])},[d(e.$slots,"policytext",{},void 0,!0)],2),m(p,{tagButton:!0,isWide:!0,ref:"sendButton",class:i([s.darkContainer?"text-gray-darker":"text-white"])},{default:u(()=>[d(e.$slots,"buttontext",{},void 0,!0)]),_:3},8,["class"])],2)],32),m(C,{name:"confirmShow",onAfterEnter:t[1]||(t[1]=b=>h.onConfirmTransitionAfter())},{default:u(()=>[v(o("div",{class:i(["absolute inset-0 flex flex-col justify-center items-center",[s.darkContainer?"bg-gray-darkest":"bg-white"]])},[o("div",T,[(a(),n("svg",Z,[o("path",F,null,512)]))]),e.$slots.thanksMessage?(a(),n("div",z,[d(e.$slots,"thanksMessage",{},void 0,!0)])):r("",!0),e.$slots.thanksDescription?(a(),n("div",A,[d(e.$slots,"thanksDescription",{},void 0,!0)])):r("",!0),e.$slots.buttonBackText?(a(),n("div",E,[m(p,{class:i(["mb-2.5 desktop:mb-6 !w-auto",[s.darkContainer?"text-gray-darker":"text-white"]]),link:"https://www.webo.agency/"},{default:u(()=>[d(e.$slots,"buttonBackText",{},void 0,!0)]),_:3},8,["class","link"])])):r("",!0)],2),[[g,l.mailSent]])]),_:3}),s.decoration?(a(),n("div",D,j)):r("",!0)],2)],2),c(e.$slots,"side",{},void 0,!0)])}const X=w(_,[["render",q],["__scopeId","data-v-76ee2c44"]]);export{X as default};