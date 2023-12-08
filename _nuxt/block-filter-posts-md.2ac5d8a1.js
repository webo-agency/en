import{_ as b}from"./filters-list.2947fe34.js";import v from"./block-filter-tile-posts-md.5846624d.js";import x from"./ContentList.af2cb1d2.js";import{r as m}from"./slot.8cad4e12.js";import{k as y,b as r,c as o,e as n,f as c,g as u,w as g,F as w,H as F,D as k}from"./entry.6a24e4f6.js";import"./post-tile-md.23ef7fc3.js";import"./nuxt-picture.785e1295.js";import"./vue.f36acd1f.7fac0cee.js";import"./custom-link.e8cf8a6d.js";import"./nuxt-link.69e61d36.js";import"./ContentQuery.ff4f9439.js";import"./query.2aa8a2bd.js";import"./preview.23764d96.js";import"./node.e4a9c3bc.js";const L={props:{allText:{type:String,default:"Wszystkie"},contentFolder:{type:String,required:!0},filters:Array},data(){return{activeFilters:this.$route.query.cat?[this.$route.query.cat]:[],shownCases:9}},watch:{shownCases(){this.updateVisible()},activeFilters(){this.updateVisible()}},mounted(){this.updateVisible()},methods:{increaseVisible(){this.shownCases+=6},updateVisible(){this.$router.push({query:{cat:this.activeFilters}}),this.$nextTick(()=>{const s=this.$refs.postsContainer;s.querySelectorAll(".case-tile").forEach(t=>{t.classList.remove("hidden")});const e=s.querySelectorAll(".case-tile:not(.case-tile-hidden)");if(e){for(let i=0;i<e.length;i++)i+1>this.shownCases?e[i].classList.add("hidden"):e[i].classList.remove("hidden");const t=this.$refs.increase_btn;e.length<=this.shownCases?t.classList.add("hidden"):t.classList.remove("hidden")}})}}},V={class:"flex flex-col tablet:flex-row tablet:items-center mb-10 border-b border-solid border-gray-default pb-5 tablet:pb-[30px]"},C={key:0,class:"text-sm font-medium mr-5 mb-2 tablet:mb-0"},$={key:0,ref:"postsContainer",class:"relative grid grid-cols-1 tablet:grid-cols-2 tablet-wide:grid-cols-3 gap-5 overflow-hidden"},q={key:1,class:"w-full flex justify-center items-center mt-10 tablet:mt-20"},T=n("svg",{class:"inline text-current fill-current rotate-90 ml-3",width:"23",height:"16",viewBox:"0 0 23 16",xmlns:"http://www.w3.org/2000/svg"},[n("path",{d:"M15.0863 0.111816L13.7605 1.43762L19.3853 7.06244H0V8.9375H19.3852L13.7605 14.5621L15.0863 15.8879L22.9745 7.99988L15.0863 0.111816Z"})],-1);function B(s,e,t,i,a,h){const f=b,_=v,p=x;return r(),o("div",null,[n("div",V,[s.$slots.filtersText?(r(),o("div",C,[m(s.$slots,"filtersText")])):c("",!0),u(f,{filters:t.filters,modelValue:a.activeFilters,"onUpdate:modelValue":e[0]||(e[0]=l=>a.activeFilters=l),clearText:t.allText},null,8,["filters","modelValue","clearText"])]),t.contentFolder?(r(),o("div",$,[u(p,{path:`/${t.contentFolder}/`,query:{path:`/${t.contentFolder}/`}},{default:g(({list:l})=>[(r(!0),o(w,null,F(l,d=>(r(),k(_,{key:d._path,data:d,activeFilters:a.activeFilters},null,8,["data","activeFilters"]))),128))]),_:1},8,["path","query"])],512)):c("",!0),s.$slots.loadMore?(r(),o("div",q,[n("div",{ref:"increase_btn",class:"flex items-center text-base text-green-main hover:text-green-mainHover font-semibold transition duration-200 cursor-pointer",onClick:e[1]||(e[1]=l=>h.increaseVisible())},[m(s.$slots,"loadMore"),T],512)])):c("",!0)])}const I=y(L,[["render",B]]);export{I as default};