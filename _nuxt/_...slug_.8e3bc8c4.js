import B from"./ContentRenderer.3f4af804.js";import{_ as C}from"./button-main.5577815a.js";import{k as v,b as t,C as u,w as d,c as i,e as a,D as w,f as g,n as S,E as U,F as P,G as L,g as m,q as O,H as j,I as k,m as A,J as x}from"./entry.d58bde94.js";import{_ as E}from"./nuxt-picture.a869b88d.js";import{_ as y}from"./custom-link.e59ccf4d.js";import{S as N}from"./swiper-bundle.min.64e368ef.js";import{A as z}from"./autoplay.33ae4041.js";import{a as D,q as V}from"./query.9b17ad3b.js";import{u as q}from"./vue.f36acd1f.16c01a7c.js";import"./ContentRendererMarkdown.vue.6f5363e4.js";import"./index.13aa9e49.js";import"./preview.4daf4e02.js";import"./nuxt-link.601a9176.js";const F={name:"PageSection",props:{wrapper:{type:String,default:"section"},classes:{type:String}}},I={key:0,class:"px-5 tablet:px-10 desktop:px-20"},M={class:"mx-auto max-w-screen-desktop-wide"},R={key:1,class:"w-full"};function G(s,o,e,r,l,c){return t(),u(U(e.wrapper),{class:S("relative w-full "+e.classes)},{default:d(()=>[s.$slots.default?(t(),i("div",I,[a("div",M,[w(s.$slots,"default")])])):g("",!0),s.$slots.full?(t(),i("div",R,[w(s.$slots,"full")])):g("",!0)]),_:3},8,["class"])}const H=v(F,[["render",G]]),J={name:"BlockBrandsSlider",props:{logos:Array},components:{CustomLink:y},data(){return{swiper:null,swiperOptionsObject:{modules:[z],slidesPerView:"auto",spaceBetween:0,direction:"horizontal",loop:!0,speed:1500,autoplay:{delay:2e3,disableOnInteraction:!1,pauseOnMouseEnter:!1},preloadImages:!1,lazy:{loadPrevNext:!0}}}},mounted(){this.swiper=new N(this.$refs.swiper,this.swiperOptionsObject)}},W={class:"px-5 tablet:px-10 desktop:px-20 overflow-hidden"},K={class:"relative w-full mx-auto max-w-screen-desktop-wide rounded-[5px]"},Q={class:"relative desktop-wide:w-screen pr-5 tablet:pr-10 desktop:pr-20 -mr-5 tablet:-mr-10 desktop:-mr-20 desktop-wide:mr-0 h-full overflow-hidden"},T={class:"max-w-screen-desktop-wide"},X={ref:"swiper",class:"swiper swiper-container !overflow-visible"},Y={class:"swiper-wrapper items-center"};function Z(s,o,e,r,l,c){const _=E,p=y;return t(),i("div",W,[a("div",K,[a("div",Q,[a("div",T,[a("div",X,[a("div",Y,[(t(!0),i(P,null,L(e.logos,(n,f)=>(t(),i("div",{key:f,class:"swiper-slide shrink-0 flex-grow-0 !w-1/2 phone-wide:!w-auto px-5 tablet:px-6 tablet-wide:px-10"},[m(p,{class:"group block h-10 phone:h-12 tablet:h-16 filter hover:filter-[opacity(1)]",url:n.link?n.link:""},{default:d(()=>[n.imgUrl?(t(),u(_,{key:0,class:"h-full flex justify-center opacity-30 group-hover:opacity-100 filter blur-0 brightness-100 contrast-100 grayscale-0 hue-rotate-0 invert-0 sepia-0 saturate-0 drop-shadow-none group-hover:saturate-100 object-contain transition-all duration-[400ms]",src:n.imgUrl,title:n.title?n.title:"",alt:n.alt?n.alt:"Brand logo",imgAttrs:{class:"w-full phone-wide:w-auto h-full object-contain custom-filter duration-300 max-w-[200px]"}},null,8,["src","title","alt"])):g("",!0)]),_:2},1032,["url"])]))),128))])],512)])])])])}const ee=v(J,[["render",Z]]),te={PL:"pl-PL",EN:"en-US"},se={PL:"https://webo.pl",EN:"https://webo.agency"};function oe(s){if(!s)return[];let o=[];for(const[e,r]of Object.entries(s)){let l={lang:e,hreflang:te[e],href:se[e]+r};o.push(l)}return o}const ne={class:"my-[150px]"},ae=a("h1",{class:"text-2xl mb-5"},"Document is empty",-1),ke={__name:"[...slug]",async setup(s){let o,e;const r=O(),{data:l}=([o,e]=j(()=>D("page-data-"+r.fullPath.split("#")[0].split("?")[0],()=>V(r.path).findOne(),{server:!0})),o=await o,e(),o),c=k(()=>oe(l.value.hreflangs));A("hrefLangs"+r.fullPath.split("#")[0],()=>c.value);const _=k(()=>c.value.map(p=>({rel:"alternate",href:p.href,hreflang:p.hreflang})));return q({link:_}),(p,n)=>{const f=B,b=C,h=H,$=ee;return t(),i("div",null,[x(l)?(t(),u(f,{key:0,value:x(l)},null,8,["value"])):(t(),u(h,{key:1},{default:d(()=>[a("div",ne,[ae,m(b,{class:"text-white",link:"/",title:"Back to home"})])]),_:1})),m(h,{classes:"mb-20 tablet:mb-[130px]"},{full:d(()=>[m($,{logos:[{link:"https://is-wireless.com/",imgUrl:"/img/logos/isw.png"},{link:"https://feeby.pl/",imgUrl:"/img/logos/Feeby.png"},{link:"https://5gmadetogether.com/",imgUrl:"/img/logos/5G.png"},{link:"https://www.swistak-krakow.pl/",imgUrl:"/img/logos/Swistak.png"},{link:"https://shop-mancraft.com/pl/",imgUrl:"/img/logos/Mancraft.png"},{link:"https://oravio.pl/",imgUrl:"/img/logos/Oravio.png"},{link:"https://eurostal-garage.it/",imgUrl:"/img/logos/Eurostal.png"},{link:"https://www.przemijanie.pl/",imgUrl:"/img/logos/Przemijanie.png"},{link:"https://www.caffewasyl.pl/",imgUrl:"/img/logos/CaffeWasyl.png"}]},null,8,["logos"])]),_:1})])}}};export{ke as default};
