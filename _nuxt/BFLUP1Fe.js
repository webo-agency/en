import{_ as B}from"./qQo0OInv.js";import{S as y}from"./CvRYcpfn.js";import{N as H}from"./DBT4bwd9.js";import I from"./0YdyTCRF.js";import{l as N,K as z,b as u,c as x,f as _,e as n,n as E,D as P,g as Z,w as S,C as j,p as O,i as A,N as T}from"./Da7c7GoZ.js";import"./DOcT63_n.js";import"./4n4Dnxzi.js";function R({swiper:e,extendParams:b}){b({grid:{rows:1,fill:"column"}});let t,w,h;const k=o=>{const{slidesPerView:s}=e.params,{rows:i,fill:p}=e.params.grid;w=t/i,h=Math.floor(o/i),Math.floor(o/i)===o/i?t=o:t=Math.ceil(o/i)*i,s!=="auto"&&p==="row"&&(t=Math.max(t,s*i))},L=(o,s,i,p)=>{const{slidesPerGroup:d,spaceBetween:v}=e.params,{rows:r,fill:f}=e.params.grid;let c,a,l;if(f==="row"&&d>1){const m=Math.floor(o/(d*r)),M=o-r*d*m,C=m===0?d:Math.min(Math.ceil((i-m*r*d)/r),d);l=Math.floor(M/C),a=M-l*C+m*d,c=a+l*t/r,s.css({"-webkit-order":c,order:c})}else f==="column"?(a=Math.floor(o/r),l=o-a*r,(a>h||a===h&&l===r-1)&&(l+=1,l>=r&&(l=0,a+=1))):(l=Math.floor(o/w),a=o-l*w);s.css(p("margin-top"),l!==0?v&&`${v}px`:"")},g=(o,s,i)=>{const{spaceBetween:p,centeredSlides:d,roundLengths:v}=e.params,{rows:r}=e.params.grid;if(e.virtualSize=(o+p)*t,e.virtualSize=Math.ceil(e.virtualSize/r)-p,e.$wrapperEl.css({[i("width")]:`${e.virtualSize+p}px`}),d){s.splice(0,s.length);const f=[];for(let c=0;c<s.length;c+=1){let a=s[c];v&&(a=Math.floor(a)),s[c]<e.virtualSize+s[0]&&f.push(a)}s.push(...f)}};e.grid={initSlides:k,updateSlide:L,updateWrapperSize:g}}const q={name:"BlockProcess",props:{button:{type:Object,required:!1},decoration:{type:Boolean,default:!0},disableSwiper:{type:Boolean,default:!1},disableSwiperBreakpoint:{type:Boolean,default:!1},topNavigation:{type:Boolean,default:!1}},data(){return{swiper:null,swiperOptionsObject:{modules:[R,H],slidesPerView:"auto",slidesPerGroupAuto:!1,spaceBetween:0,direction:"horizontal",speed:600,preloadImages:!1,lazy:{loadPrevNext:!0},navigation:{nextEl:"[data-swiper-next]",prevEl:"[data-swiper-prev]"},breakpoints:this.disableSwiperBreakpoint?{}:{1248:{slidesPerView:3,grid:{fill:"row",rows:2}}}}}},mounted(){this.disableSwiper||(this.swiper=new y(this.$refs.swiper,this.swiperOptionsObject))},components:{EffectAppearMdc:I,CustomLink:B}},V=e=>(O("data-v-8fd63ea2"),e=e(),A(),e),D={class:"relative"},F={key:0,class:"absolute hidden desktop-wide:block left-0 right-0 top-[-110px] px-5 tablet:px-10 desktop:px-20"},G=T('<div class="mx-auto max-w-screen-desktop-wide" data-v-8fd63ea2><div class="flex gap-5 justify-end" data-v-8fd63ea2><div class="pointer-events-auto cursor-pointer desktop:flex items-center justify-center w-[50px] h-[50px] rounded-full bg-green-main hover:bg-green-mainHover transition duration-200" data-swiper-prev data-v-8fd63ea2><svg class="rotate-180 fill-white" width="24" height="16" viewBox="0 0 24 16" xmlns="http://www.w3.org/2000/svg" data-v-8fd63ea2><path d="M15.6 0.111816L14.2742 1.43762L19.899 7.06244H0.513672V8.9375H19.8988L14.2742 14.5621L15.6 15.8879L23.4882 7.99988L15.6 0.111816Z" data-v-8fd63ea2></path></svg></div><div class="pointer-events-auto cursor-pointer desktop:flex items-center justify-center w-[50px] h-[50px] rounded-full bg-green-main hover:bg-green-mainHover transition duration-200" data-swiper-next data-v-8fd63ea2><svg class="fill-white" width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-8fd63ea2><path d="M15.6 0.111816L14.2742 1.43762L19.899 7.06244H0.513672V8.9375H19.8988L14.2742 14.5621L15.6 15.8879L23.4882 7.99988L15.6 0.111816Z" data-v-8fd63ea2></path></svg></div></div></div>',1),K=[G],W={class:"px-5 tablet:px-10 desktop:px-20 overflow-hidden"},$={class:"relative w-full mx-auto max-w-screen-desktop-wide rounded-[5px]"},J={class:"relative desktop-wide:w-screen pr-5 tablet:pr-10 desktop:pr-20 -mr-5 tablet:-mr-10 desktop:-mr-20 desktop-wide:mr-0 h-full overflow-hidden"},Q={class:"max-w-screen-desktop-wide"},U={ref:"swiper",class:"swiper swiper-container process-swiper relative w-full h-full mb-6 !overflow-visible"},X={key:0,class:"hidden desktop:block absolute -bottom-6 right-0"},Y=V(()=>n("svg",{width:"96",height:"128",viewBox:"0 0 96 128",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M19.6677 0.0102295L19.659 0.0156311H19.6509L19.6412 0.0210328C19.5634 0.037241 19.4894 0.0750363 19.4256 0.134467L19.4181 0.139899L19.4078 0.150702L19.3976 0.156104L0.158325 19.4008L0.149124 19.4062L0.138336 19.4169L0.130219 19.4277L0.121582 19.4385L0.116699 19.4439C0.0718563 19.5034 0.039982 19.5629 0.0210724 19.6331L0.0189362 19.6385L0.0157013 19.6493L0.0146027 19.6601C0.0119013 19.6709 0.0097385 19.6762 0.00811768 19.687C0.00325519 19.7194 0 19.752 0 19.779V107.066C0 107.287 0.134017 107.482 0.338242 107.568L45.36 125.759C53.851 129.185 61.5386 128.256 67.1088 124.025C71.4418 120.74 74.4997 115.435 75.6343 108.584C87.1314 108.065 95.3598 98.4215 95.3598 83.229V30.86C95.3598 30.6385 95.2247 30.4385 95.0194 30.3575L19.9886 0.0426697C19.9664 0.0318642 19.9432 0.0264355 19.92 0.0210328L19.9086 0.0156311H19.9027L19.893 0.0102295C19.8184 -0.00597874 19.7417 -0.000575983 19.6677 0.0102295ZM19.484 28.0182L1.08057 20.584V106.704L45.7652 124.755C53.8407 128.018 61.1603 127.191 66.455 123.166C71.7767 119.13 75.04 111.901 75.04 102.468V50.4613L19.679 28.0938C19.6082 28.083 19.5424 28.056 19.484 28.0182ZM94.2792 32.1729L76.1206 50.3208V102.468C76.1206 104.219 76.0071 105.899 75.7964 107.498C86.6506 106.888 94.2792 97.6219 94.2792 83.229V32.1729ZM20.3203 27.1915L75.4506 49.4617L93.8686 31.0544L20.3203 1.33927V27.1915ZM1.49982 19.5844L19.2398 26.7539V1.84724L1.49982 19.5844Z",fill:"#07E7C4"})],-1)),ee=[Y],te=["innerHTML"],oe=V(()=>n("svg",{class:"inline text-current fill-current",width:"23",height:"16",viewBox:"0 0 23 16",xmlns:"http://www.w3.org/2000/svg"},[n("path",{d:"M15.0863 0.111816L13.7605 1.43762L19.3853 7.06244H0V8.9375H19.3852L13.7605 14.5621L15.0863 15.8879L22.9745 7.99988L15.0863 0.111816Z"})],-1));function se(e,b,t,w,h,k){const L=B,g=z("EffectAppearMdc");return u(),x("div",D,[t.topNavigation?(u(),x("div",F,K)):_("",!0),n("div",W,[n("div",$,[n("div",J,[n("div",Q,[n("div",U,[n("div",{class:E(["swiper-wrapper flex !w-full h-full",{"flex-wrap [&_.swiper-slide]:basis-full md:[&_.swiper-slide]:!basis-1/2 ":t.disableSwiper}])},[P(e.$slots,"default",{},void 0,!0)],2),t.decoration?(u(),x("div",X,ee)):_("",!0)],512),Z(g,null,{default:S(()=>[t.button?(u(),j(L,{key:0,class:"flex items-center w-max mx-auto text-base text-green-main hover:text-green-mainHover font-semibold transition duration-200","active-class":"",url:t.button.link?t.button.link:"/"},{default:S(()=>[t.button.title?(u(),x("span",{key:0,class:"prose mr-2.5",innerHTML:t.button.title},null,8,te)):_("",!0),oe]),_:1},8,["url"])):_("",!0)]),_:1})])])])])])}const pe=N(q,[["render",se],["__scopeId","data-v-8fd63ea2"]]);export{pe as default};
