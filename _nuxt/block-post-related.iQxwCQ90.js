import c from"./post-tile-md.Id5uA-Sp.js";import d from"./ContentList.Mir5qDZr.js";import{S as m}from"./swiper-bundle.min.7p87wQAz.js";import{A as h}from"./autoplay.RKLsh_Z6.js";import{k as _,b as e,c as r,e as i,g as f,w as u,F as w,D as k,H as P}from"./entry.SAlDxFNl.js";import"./nuxt-picture.9SFXeom-.js";import"./vue.f36acd1f.JC6lG0I6.js";import"./custom-link.51qT3Nui.js";import"./nuxt-link.lNbJQVkR.js";import"./ContentQuery.WwhH73C9.js";import"./query.SE8FOQmL.js";import"./preview.yB6gd2ux.js";const v={props:{archivePathWithTrailing:{type:String,default:"/blog/"},relatedPostsLinks:Array},data(){return{swiper:null,swiperOptionsObject:{modules:[h],slidesPerView:1.5,spaceBetween:20,direction:"horizontal",speed:1500,autoplay:{delay:2e3,disableOnInteraction:!1,pauseOnMouseEnter:!1},preloadImages:!1,lazy:{loadPrevNext:!0},breakpoints:{768:{slidesPerView:2},1024:{slidesPerView:3}}}}},computed:{postsLinksFormatted(){if(this.relatedPostsLinks)return this.relatedPostsLinks.map(t=>this.archivePathWithTrailing+t)}},mounted(){this.swiper=new m(this.$refs.swiper,this.swiperOptionsObject)}},y={class:"overflow-hidden mt-5"},b={ref:"swiper",class:"swiper swiper-container !overflow-visible"},g={class:"swiper-wrapper items-center"};function L(t,x,a,O,$,o){const n=c,p=d;return e(),r("div",y,[i("div",b,[i("div",g,[f(p,{path:a.archivePathWithTrailing,query:{where:{_path:{$in:o.postsLinksFormatted}}}},{default:u(({list:l})=>[(e(!0),r(w,null,P(l,s=>(e(),k(n,{key:s._path,data:s,class:"swiper-slide shrink-0 flex-grow-0"},null,8,["data"]))),128))]),_:1},8,["path","query"])])],512)])}const E=_(v,[["render",L]]);export{E as default};