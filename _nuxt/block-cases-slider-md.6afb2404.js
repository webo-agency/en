import p from"./case-tile-md.472278e0.js";import u from"./ContentList.1b3f66d8.js";import{S as h}from"./swiper-bundle.min.64e368ef.js";import{P as m}from"./pagination.54f827b2.js";import{A as _}from"./autoplay.33ae4041.js";import{k as f,b as i,c as l,e as s,g as w,w as k,F as y,G as b,C as v,f as S,p as g,i as x}from"./entry.3655a403.js";import"./nuxt-picture.e81bf6f4.js";import"./index.045f9874.js";import"./vue.f36acd1f.40d279c0.js";import"./custom-link.73836193.js";import"./nuxt-link.3016daf2.js";import"./ContentQuery.0f674cf2.js";import"./query.6452df6b.js";import"./preview.c67f1c67.js";import"./create-element-if-not-defined.10c0035e.js";const F={name:"BlockCasesSliderMed",data(){return{swiper:null,swiperOptionsObject:{modules:[_,m],slidesPerView:"auto",spaceBetween:0,direction:"horizontal",loop:!0,pagination:{dynamicBullets:!0,el:".swiper-pagination",clickable:!0},speed:600,autoplay:{delay:3e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},preloadImages:!1,lazy:{loadPrevNext:!0}}}},props:{contentFolder:{type:String,required:!0},techFilters:{type:Array,default:[]},selectedSlugs:{type:Array,default:[]}},methods:{checkCaseVisibility(e){return this.checkHomepageVisibility(e.homepage_hidden)&&this.checkTechFilters(e.technologies)&&this.checkSelectedSlugs(e)},checkSelectedSlugs(e){return this.selectedSlugs.length==0?!0:this.selectedSlugs.map(t=>`/${e._dir}/${t}`).includes(e._path)},checkTechFilters(e){return this.techFilters.length==0?!0:e===void 0?!1:e.some(o=>this.techFilters.includes(o))},checkHomepageVisibility(e){return!(e&&this.$route.fullPath=="/")}},mounted(){this.swiper=new h(this.$refs.swiper,this.swiperOptionsObject)}},C=e=>(g("data-v-b933ea5f"),e=e(),x(),e),V={class:"px-5 tablet:px-10 desktop:px-20 overflow-hidden"},B={class:"relative w-full mx-auto max-w-screen-desktop-wide rounded-[5px]"},P={class:"relative desktop-wide:w-screen pr-5 tablet:pr-10 desktop:pr-20 -mr-5 tablet:-mr-10 desktop:-mr-20 desktop-wide:mr-0 h-full overflow-hidden"},$={class:"max-w-screen-desktop-wide"},I={key:0,ref:"swiper",class:"swiper swiper-container case-swiper w-full h-full !overflow-visible"},O={class:"swiper-wrapper flex h-full"},A=C(()=>s("div",{class:"block swiper-pagination !relative mt-10 desktop:mt-20"},null,-1));function M(e,o,t,N,q,a){const n=p,c=u;return i(),l("div",V,[s("div",B,[s("div",P,[s("div",$,[t.contentFolder?(i(),l("div",I,[s("div",O,[w(c,{path:`/${t.contentFolder}/`,query:{path:`/${t.contentFolder}/`}},{default:k(({list:d})=>[(i(!0),l(y,null,b(d.filter(r=>a.checkCaseVisibility(r)),r=>(i(),v(n,{key:r._path,data:r},null,8,["data"]))),128))]),_:1},8,["path","query"])]),A],512)):S("",!0)])])])])}const Y=f(F,[["render",M],["__scopeId","data-v-b933ea5f"]]);export{Y as default};
