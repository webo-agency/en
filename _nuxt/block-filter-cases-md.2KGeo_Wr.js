import{P as G,Q as J,J as p,R as Q,S as K,U as ee,r as b,V as W,I as T,H as te,b as g,c as x,f as $,e as c,g as oe,W as P,X as M,t as B,n as F,F as I,N as H,Y as ne,D as se,Z as re}from"./entry.OFycey9P.js";import{_ as le}from"./filters-list.d2ubt2_J.js";import ie from"./case-tile-md.IHcLLj19.js";import{a as ae,q as ue}from"./query.JRF45pxM.js";import{r as j}from"./slot.-Ik2lcFO.js";import{u as ce}from"./index.5THR0E0Z.js";import"./nuxt-picture.MLNvP3F-.js";import"./composables.OM1iBtAS.js";import"./vue.f36acd1f.JHKKCg2M.js";import"./custom-link.OFrvxdE_.js";import"./nuxt-link.PP4D8B3E.js";import"./preview.FajV3EkY.js";import"./node.uMQX-T_c.js";function Y(e){return G()?(J(e),!0):!1}function L(e){return typeof e=="function"?e():p(e)}const z=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const de=Object.prototype.toString,fe=e=>de.call(e)==="[object Object]",C=()=>{},V=pe();function pe(){var e,t;return z&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&(/iP(ad|hone|od)/.test(window.navigator.userAgent)||((t=window==null?void 0:window.navigator)==null?void 0:t.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}const N={mounted:"mounted",updated:"updated",unmounted:"unmounted"};function me(...e){if(e.length!==1)return Q(...e);const t=e[0];return typeof t=="function"?K(ee(()=>({get:t,set:C}))):b(t)}function k(e){var t;const o=L(e);return(t=o==null?void 0:o.$el)!=null?t:o}const U=z?window:void 0;function A(...e){let t,o,n,d;if(typeof e[0]=="string"||Array.isArray(e[0])?([o,n,d]=e,t=U):[t,o,n,d]=e,!t)return C;Array.isArray(o)||(o=[o]),Array.isArray(n)||(n=[n]);const v=[],f=()=>{v.forEach(m=>m()),v.length=0},r=(m,y,s,a)=>(m.addEventListener(y,s,a),()=>m.removeEventListener(y,s,a)),i=W(()=>[k(t),L(d)],([m,y])=>{if(f(),!m)return;const s=fe(y)?{...y}:y;v.push(...o.flatMap(a=>n.map(l=>r(m,a,l,s))))},{immediate:!0,flush:"post"}),h=()=>{i(),f()};return Y(h),h}let R=!1;function q(e,t,o={}){const{window:n=U,ignore:d=[],capture:v=!0,detectIframe:f=!1}=o;if(!n)return C;V&&!R&&(R=!0,Array.from(n.document.body.children).forEach(s=>s.addEventListener("click",C)),n.document.documentElement.addEventListener("click",C));let r=!0;const i=s=>d.some(a=>{if(typeof a=="string")return Array.from(n.document.querySelectorAll(a)).some(l=>l===s.target||s.composedPath().includes(l));{const l=k(a);return l&&(s.target===l||s.composedPath().includes(l))}}),m=[A(n,"click",s=>{const a=k(e);if(!(!a||a===s.target||s.composedPath().includes(a))){if(s.detail===0&&(r=!i(s)),!r){r=!0;return}t(s)}},{passive:!0,capture:v}),A(n,"pointerdown",s=>{const a=k(e);r=!i(s)&&!!(a&&!s.composedPath().includes(a))},{passive:!0}),f&&A(n,"blur",s=>{setTimeout(()=>{var a;const l=k(e);((a=n.document.activeElement)==null?void 0:a.tagName)==="IFRAME"&&!(l!=null&&l.contains(n.document.activeElement))&&t(s)},0)})].filter(Boolean);return()=>m.forEach(s=>s())}const ve={[N.mounted](e,t){const o=!t.modifiers.bubble;if(typeof t.value=="function")e.__onClickOutside_stop=q(e,t.value,{capture:o});else{const[n,d]=t.value;e.__onClickOutside_stop=q(e,n,Object.assign({capture:o},d))}},[N.unmounted](e){e.__onClickOutside_stop()}};function D(e){return typeof Window<"u"&&e instanceof Window?e.document.documentElement:typeof Document<"u"&&e instanceof Document?e.documentElement:e}function X(e){const t=window.getComputedStyle(e);if(t.overflowX==="scroll"||t.overflowY==="scroll"||t.overflowX==="auto"&&e.clientWidth<e.scrollWidth||t.overflowY==="auto"&&e.clientHeight<e.scrollHeight)return!0;{const o=e.parentNode;return!o||o.tagName==="BODY"?!1:X(o)}}function he(e){const t=e||window.event,o=t.target;return X(o)?!1:t.touches.length>1?!0:(t.preventDefault&&t.preventDefault(),!1)}const E=new WeakMap;function we(e,t=!1){const o=b(t);let n=null,d;W(me(e),r=>{const i=D(L(r));if(i){const h=i;E.get(h)||E.set(h,d),o.value&&(h.style.overflow="hidden")}},{immediate:!0});const v=()=>{const r=D(L(e));!r||o.value||(V&&(n=A(r,"touchmove",i=>{he(i)},{passive:!1})),r.style.overflow="hidden",o.value=!0)},f=()=>{var r;const i=D(L(e));!i||!o.value||(V&&(n==null||n()),i.style.overflow=(r=E.get(i))!=null?r:"",E.delete(i),o.value=!1)};return Y(f),T({get(){return o.value},set(r){r?v():f()}})}function ge(){let e=!1;const t=b(!1);return(o,n)=>{if(t.value=n.value,e)return;e=!0;const d=we(o,n.value);W(t,v=>d.value=v)}}ge();const ye={key:0,class:"text-2xl tablet:text-3xl desktop:text-4xl font-semibold mb-10 tablet:mb-[60px]"},xe={class:"flex flex-col tablet:flex-row justify-between mb-10"},be={class:"shrink-0 relative flex flex-wrap justify-between"},_e={key:0,class:"block py-[7px] px-5 text-sm tablet:text-base text-gray-darker"},ke={class:"relative w-[200px] h-[34px] tablet:h-[42px]"},Le={class:"absolute top-0 right-0 w-full border border-solid border-gray-default bg-white z-30 rounded-[5px] overflow-hidden"},Ce={class:"relative overflow-hidden after:absolute after:content-[''] after:top-0 after:right-10 after:w-1/2 after:h-[34px] tablet:after:h-[42px] after:bg-gradient-to-l after:from-white after:pointer-events-none"},Se={class:"absolute top-0 right-0 w-10 h-[34px] tablet:h-[42px] flex justify-center items-center bg-white z-20 pointer-events-none"},Ee=c("path",{d:"M9.15962 -3.67343e-08L10 0.840384L5 5.84046L-3.67343e-08 0.840383L0.840383 -4.0038e-07L5 4.21488L9.15962 -3.67343e-08Z",fill:"#212121"},null,-1),Ae=[Ee],Oe=["id","value"],$e=["for"],Me={class:"cases-container overflow-hidden"},je={key:1,class:"w-full flex justify-center items-center mt-10 tablet:mt-20"},De=c("svg",{class:"inline text-current fill-current rotate-90 ml-3",width:"23",height:"16",viewBox:"0 0 23 16",xmlns:"http://www.w3.org/2000/svg"},[c("path",{d:"M15.0863 0.111816L13.7605 1.43762L19.3853 7.06244H0V8.9375H19.3852L13.7605 14.5621L15.0863 15.8879L22.9745 7.99988L15.0863 0.111816Z"})],-1),Ue={__name:"block-filter-cases-md",props:{contentFolder:{type:String,required:!0},filters:Array,technologies:Array,allTechText:{type:String,default:"All"}},async setup(e){let t,o;const n=e,d=ce(),{data:v}=([t,o]=te(()=>ae("cases-filter-page",()=>ue(n.contentFolder).where([{_path:{$and:[{$ne:`/${n.contentFolder}/isw`},{$ne:`/${n.contentFolder}`}]}},{tile_hidden:{$eq:!1}}]).sort({tile_order:1}).find())),t=await t,o(),t),f=b([]),r=b([]),i=b(!1),h=b(6),m=T(()=>v.value.filter(l=>{var S,u;const w=r.value.length===0||((S=l.technologies)==null?void 0:S.some(_=>r.value.join().includes(_))),O=f.value.length===0||((u=l.type)==null?void 0:u.some(_=>f.value.join().includes(_)));return w&&O})),y=T(()=>m.value.slice(0,h.value));function s(){i.value=!i.value}function a(){h.value+=4}return(l,w)=>{const O=le,S=ie;return g(),x("div",null,[l.$slots.title?(g(),x("div",ye,[j(l.$slots,"title")])):$("",!0),c("div",xe,[oe(O,{filters:e.filters,modelValue:p(f),"onUpdate:modelValue":w[0]||(w[0]=u=>P(f)?f.value=u:null)},null,8,["filters","modelValue"]),c("div",be,[l.$slots.select?(g(),x("div",_e,[j(l.$slots,"select")])):$("",!0),c("div",ke,[c("div",Le,[M((g(),x("div",Ce,[c("span",{class:"block py-[7px] px-5 text-sm tablet:text-base text-gray-darker min-h-[34px] tablet:min-h-[42px] whitespace-nowrap",onClick:w[1]||(w[1]=u=>s())},B(p(r).length>0?p(r).join():e.allTechText),1),c("div",Se,[(g(),x("svg",{width:"20",height:"10",viewBox:"0 0 10 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:F(["transition duration-300",{"rotate-180":p(i)}])},Ae,2))]),c("ul",{class:F(["transition-all duration-300 overflow-y-auto",[p(i)?"max-h-[200px]":"max-h-0"]])},[(g(!0),x(I,null,H(e.technologies,(u,_)=>(g(),x("li",{key:_,class:"py-[7px] px-5 text-sm tablet:text-base text-gray-darker"},[M(c("input",{class:"appearance-none peer",type:"checkbox",id:u,value:u,"onUpdate:modelValue":w[2]||(w[2]=Z=>P(r)?r.value=Z:null)},null,8,Oe),[[ne,p(r)]]),c("label",{class:"peer-checked:font-semibold transition-all",for:u},B(u),9,$e)]))),128))],2)])),[[p(ve),()=>p(i)&&s()]])])])])]),c("div",Me,[(g(!0),x(I,null,H(p(y),u=>(g(),se(S,{key:u._path,data:u,showTech:!0,mousePos:p(d),class:"animation-appear"},null,8,["data","mousePos"]))),128))]),l.$slots.loadMore?(g(),x("div",je,[M(c("div",{class:"flex items-center text-base text-green-main hover:text-green-mainHover font-semibold transition duration-200 cursor-pointer",onClick:w[3]||(w[3]=u=>a())},[j(l.$slots,"loadMore"),De],512),[[re,p(m).length>p(h)]])])):$("",!0)])}}};export{Ue as default};