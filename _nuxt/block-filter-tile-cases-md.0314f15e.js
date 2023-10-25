import{_ as v}from"./nuxt-picture.1aa6c2cd.js";import{_ as w}from"./custom-link.39be47fd.js";import{m as y,M as k,O as j,f as e,g as a,h as l,j as T,w as C,D as m,i as o,F as f,H as x,t as d,n as S}from"./entry.859eb832.js";import"./index.7572935c.js";import"./vue.f36acd1f.b9093b04.js";import"./nuxt-link.59505db0.js";import"./ready.26b97f42.js";const V={data(){return{techIcon:{TailwindCSS:"/img/logos/tailwind.png","Vue.js":"/img/logos/vue.png",Nuxt:"/img/logos/nuxt.png",PrestaShop:"/img/logos/presta.png","Wordpress CMS":"/img/logos/wp.png","Drupal CMS":"/img/logos/drupal.png",JavaScript:"/img/logos/js.png","Node.js":"/img/logos/node.png"}}},props:{data:Object,activeType:Array,activeTech:Array},computed:{isVisible(){var t,r;if(this.activeType.length==0&&this.activeTech.length==0)return!0;let n=this.activeTech.length==0?!0:(t=this.data.technologies)==null?void 0:t.some(i=>this.activeTech.includes(i));return this.activeType.length==0&&n?!0:((r=this.data.type)==null?void 0:r.some(i=>this.activeType.join().includes(i)))&&n}}},N={class:"group"},B={class:"flex items-end aspect-[4/3] desktop:h-[400px] w-full rounded-[5px] overflow-hidden"},D={class:"px-5 tablet:px-[30px]"},A={class:"flex flex-wrap my-5 tablet:my-[30px] gap-x-2.5 gap-y-1"},I={key:0,class:"mr-2.5 tablet:mr-5 desktop:mr-14 mb-5 text-xl leading-7 desktop:text-2xl font-semibold transition duration-300"},M={class:"px-5 tablet:px-[30px]"},z={key:0,class:"mr-2.5 tablet:mr-10 desktop:mr-[100px] text-sm leading-7 desktop:text-lg"},F={class:"flex gap-[5px] h-[30px] my-5 tablet:my-[30px]"},L=l("div",{class:"line relative w-[135px] tablet-wide:w-[300px] h-0.5 rounded-full bg-gray-light overflow-hidden after:content-[''] after:absolute after:-top-0.5 after:right-full after:w-full after:h-2 after:bg-green-main group-hover:after:translate-x-full after:transition after:duration-300"},null,-1);function O(n,_,t,r,i,u){var h;const g=v,p=w;return k((e(),a("div",{class:S(["case-tile relative w-full flex flex-col tablet:basis-[calc(50%_-_10px)] shrink-0 z-20 bg-white",{"case-tile-hidden":!u.isVisible}])},[l("div",N,[T(p,{class:"hover:text-green-main flex flex-col w-full",disabled:t.data.draft&&!t.data.fallback,activeClass:"none",url:t.data.fallback?t.data.fallback:t.data.url?t.data.url:"https://www.webo.agency"+t.data._path},{default:C(()=>{var s;return[l("div",B,[t.data.image&&t.data.image.url?(e(),m(g,{key:0,class:"h-full w-full object-cover group-hover:scale-[103%] transition-all duration-500",src:t.data.image.url,title:t.data.image.title?t.data.image.title:"",alt:t.data.image.alt?t.data.image.alt:"Case study data.image",imgAttrs:{class:"h-full w-full object-cover"}},null,8,["src","title","alt"])):o("",!0)]),l("div",D,[l("ul",A,[(e(!0),a(f,null,x(t.data.type,(c,b)=>(e(),a("li",{key:b,class:"rounded-[5px] text-gray-darker/25 bg-gray-light px-2 py-[2px] text-[10px] tablet:text-xs font-semibold"},d(c),1))),128))]),(s=t.data.introduction)!=null&&s.title?(e(),a("h4",I,d(t.data.introduction.title),1)):o("",!0)])]}),_:1},8,["disabled","url"]),l("div",M,[(h=t.data.introduction)!=null&&h.description?(e(),a("p",z,d(t.data.introduction.description),1)):o("",!0),l("ul",F,[(e(!0),a(f,null,x(t.data.technologies,(s,c)=>(e(),a("li",{key:c,class:"h-full w-[30px] rounded-full p-1 bg-white border border-gray-default overflow-hidden"},[i.techIcon[s]?(e(),m(g,{key:0,src:i.techIcon[s],class:"h-full w-full object-contain","img-attrs":{class:"h-full w-full object-contain"}},null,8,["src"])):o("",!0)]))),128))]),L])])],2)),[[j,u.isVisible]])}const K=y(V,[["render",O]]);export{K as default};
