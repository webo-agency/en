import{S as o}from"./swiper-bundle.min.64e368ef.js";import{A as s}from"./autoplay.33ae4041.js";import{f as r}from"./free-mode.502056b0.js";import{m as l,f as a,g as i,h as e,E as n}from"./entry.01340810.js";const p={name:"BlockCircularLogosSliderMdc",data(){return{swiper:null,swiperOptionsObject:{modules:[s,r],slidesPerView:"auto",spaceBetween:0,direction:"horizontal",speed:600,loop:!0,autoplay:{delay:3e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},preloadImages:!1,lazy:{loadPrevNext:!0},freeMode:{enabled:!0,momentumBounceRatio:.8,momentumVelocityRatio:.5}}}},mounted(){this.swiper=new o(this.$refs.swiper,this.swiperOptionsObject)}},c={class:"flex flex-col tablet:flex-row items-center justify-between w-full tablet:h-[100px]overflow-hidden"},d={ref:"swiper",class:"swiper swiper-container relative w-full h-full"},u={class:"swiper-wrapper flex items-center h-full py-5 tablet:py-0"};function f(t,m,w,h,_,b){return a(),i("div",null,[e("div",c,[e("div",d,[e("div",u,[n(t.$slots,"default")])],512)])])}const O=l(p,[["render",f]]);export{O as default};