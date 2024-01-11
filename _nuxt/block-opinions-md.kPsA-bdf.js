import{$ as _,S as P}from"./swiper-bundle.min.7p87wQAz.js";import{c as E,N as A}from"./navigation.ZXgLrHtn.js";import{A as D}from"./autoplay.RKLsh_Z6.js";import{k as F,b as j,c as q,e as y,E as G,O as N,p as V,i as T}from"./entry.GFRmWXYq.js";function x(a=""){return`.${a.trim().replace(/([\.:!\/])/g,"\\$1").replace(/ /g,".")}`}function R({swiper:a,extendParams:L,on:r,emit:C}){const o="swiper-pagination";L({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:e=>e,formatFractionTotal:e=>e,bulletClass:`${o}-bullet`,bulletActiveClass:`${o}-bullet-active`,modifierClass:`${o}-`,currentClass:`${o}-current`,totalClass:`${o}-total`,hiddenClass:`${o}-hidden`,progressbarFillClass:`${o}-progressbar-fill`,progressbarOppositeClass:`${o}-progressbar-opposite`,clickableClass:`${o}-clickable`,lockClass:`${o}-lock`,horizontalClass:`${o}-horizontal`,verticalClass:`${o}-vertical`,paginationDisabledClass:`${o}-disabled`}}),a.pagination={el:null,$el:null,bullets:[]};let h,b=0;function M(){return!a.params.pagination.el||!a.pagination.el||!a.pagination.$el||a.pagination.$el.length===0}function $(e,l){const{bulletActiveClass:i}=a.params.pagination;e[l]().addClass(`${i}-${l}`)[l]().addClass(`${i}-${l}-${l}`)}function u(){const e=a.rtl,l=a.params.pagination;if(M())return;const i=a.virtual&&a.params.virtual.enabled?a.virtual.slides.length:a.slides.length,t=a.pagination.$el;let s;const d=a.params.loop?Math.ceil((i-a.loopedSlides*2)/a.params.slidesPerGroup):a.snapGrid.length;if(a.params.loop?(s=Math.ceil((a.activeIndex-a.loopedSlides)/a.params.slidesPerGroup),s>i-1-a.loopedSlides*2&&(s-=i-a.loopedSlides*2),s>d-1&&(s-=d),s<0&&a.params.paginationType!=="bullets"&&(s=d+s)):typeof a.snapIndex<"u"?s=a.snapIndex:s=a.activeIndex||0,l.type==="bullets"&&a.pagination.bullets&&a.pagination.bullets.length>0){const n=a.pagination.bullets;let c,f,B;if(l.dynamicBullets&&(h=n.eq(0)[a.isHorizontal()?"outerWidth":"outerHeight"](!0),t.css(a.isHorizontal()?"width":"height",`${h*(l.dynamicMainBullets+4)}px`),l.dynamicMainBullets>1&&a.previousIndex!==void 0&&(b+=s-(a.previousIndex-a.loopedSlides||0),b>l.dynamicMainBullets-1?b=l.dynamicMainBullets-1:b<0&&(b=0)),c=Math.max(s-b,0),f=c+(Math.min(n.length,l.dynamicMainBullets)-1),B=(f+c)/2),n.removeClass(["","-next","-next-next","-prev","-prev-prev","-main"].map(m=>`${l.bulletActiveClass}${m}`).join(" ")),t.length>1)n.each(m=>{const g=_(m),p=g.index();p===s&&g.addClass(l.bulletActiveClass),l.dynamicBullets&&(p>=c&&p<=f&&g.addClass(`${l.bulletActiveClass}-main`),p===c&&$(g,"prev"),p===f&&$(g,"next"))});else{const m=n.eq(s),g=m.index();if(m.addClass(l.bulletActiveClass),l.dynamicBullets){const p=n.eq(c),S=n.eq(f);for(let v=c;v<=f;v+=1)n.eq(v).addClass(`${l.bulletActiveClass}-main`);if(a.params.loop)if(g>=n.length){for(let v=l.dynamicMainBullets;v>=0;v-=1)n.eq(n.length-v).addClass(`${l.bulletActiveClass}-main`);n.eq(n.length-l.dynamicMainBullets-1).addClass(`${l.bulletActiveClass}-prev`)}else $(p,"prev"),$(S,"next");else $(p,"prev"),$(S,"next")}}if(l.dynamicBullets){const m=Math.min(n.length,l.dynamicMainBullets+4),g=(h*m-h)/2-B*h,p=e?"right":"left";n.css(a.isHorizontal()?p:"top",`${g}px`)}}if(l.type==="fraction"&&(t.find(x(l.currentClass)).text(l.formatFractionCurrent(s+1)),t.find(x(l.totalClass)).text(l.formatFractionTotal(d))),l.type==="progressbar"){let n;l.progressbarOpposite?n=a.isHorizontal()?"vertical":"horizontal":n=a.isHorizontal()?"horizontal":"vertical";const c=(s+1)/d;let f=1,B=1;n==="horizontal"?f=c:B=c,t.find(x(l.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${f}) scaleY(${B})`).transition(a.params.speed)}l.type==="custom"&&l.renderCustom?(t.html(l.renderCustom(a,s+1,d)),C("paginationRender",t[0])):C("paginationUpdate",t[0]),a.params.watchOverflow&&a.enabled&&t[a.isLocked?"addClass":"removeClass"](l.lockClass)}function k(){const e=a.params.pagination;if(M())return;const l=a.virtual&&a.params.virtual.enabled?a.virtual.slides.length:a.slides.length,i=a.pagination.$el;let t="";if(e.type==="bullets"){let s=a.params.loop?Math.ceil((l-a.loopedSlides*2)/a.params.slidesPerGroup):a.snapGrid.length;a.params.freeMode&&a.params.freeMode.enabled&&!a.params.loop&&s>l&&(s=l);for(let d=0;d<s;d+=1)e.renderBullet?t+=e.renderBullet.call(a,d,e.bulletClass):t+=`<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`;i.html(t),a.pagination.bullets=i.find(x(e.bulletClass))}e.type==="fraction"&&(e.renderFraction?t=e.renderFraction.call(a,e.currentClass,e.totalClass):t=`<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`,i.html(t)),e.type==="progressbar"&&(e.renderProgressbar?t=e.renderProgressbar.call(a,e.progressbarFillClass):t=`<span class="${e.progressbarFillClass}"></span>`,i.html(t)),e.type!=="custom"&&C("paginationRender",a.pagination.$el[0])}function I(){a.params.pagination=E(a,a.originalParams.pagination,a.params.pagination,{el:"swiper-pagination"});const e=a.params.pagination;if(!e.el)return;let l=_(e.el);l.length!==0&&(a.params.uniqueNavElements&&typeof e.el=="string"&&l.length>1&&(l=a.$el.find(e.el),l.length>1&&(l=l.filter(i=>_(i).parents(".swiper")[0]===a.el))),e.type==="bullets"&&e.clickable&&l.addClass(e.clickableClass),l.addClass(e.modifierClass+e.type),l.addClass(a.isHorizontal()?e.horizontalClass:e.verticalClass),e.type==="bullets"&&e.dynamicBullets&&(l.addClass(`${e.modifierClass}${e.type}-dynamic`),b=0,e.dynamicMainBullets<1&&(e.dynamicMainBullets=1)),e.type==="progressbar"&&e.progressbarOpposite&&l.addClass(e.progressbarOppositeClass),e.clickable&&l.on("click",x(e.bulletClass),function(t){t.preventDefault();let s=_(this).index()*a.params.slidesPerGroup;a.params.loop&&(s+=a.loopedSlides),a.slideTo(s)}),Object.assign(a.pagination,{$el:l,el:l[0]}),a.enabled||l.addClass(e.lockClass))}function O(){const e=a.params.pagination;if(M())return;const l=a.pagination.$el;l.removeClass(e.hiddenClass),l.removeClass(e.modifierClass+e.type),l.removeClass(a.isHorizontal()?e.horizontalClass:e.verticalClass),a.pagination.bullets&&a.pagination.bullets.removeClass&&a.pagination.bullets.removeClass(e.bulletActiveClass),e.clickable&&l.off("click",x(e.bulletClass))}r("init",()=>{a.params.pagination.enabled===!1?z():(I(),k(),u())}),r("activeIndexChange",()=>{(a.params.loop||typeof a.snapIndex>"u")&&u()}),r("snapIndexChange",()=>{a.params.loop||u()}),r("slidesLengthChange",()=>{a.params.loop&&(k(),u())}),r("snapGridLengthChange",()=>{a.params.loop||(k(),u())}),r("destroy",()=>{O()}),r("enable disable",()=>{const{$el:e}=a.pagination;e&&e[a.enabled?"removeClass":"addClass"](a.params.pagination.lockClass)}),r("lock unlock",()=>{u()}),r("click",(e,l)=>{const i=l.target,{$el:t}=a.pagination;if(a.params.pagination.el&&a.params.pagination.hideOnClick&&t&&t.length>0&&!_(i).hasClass(a.params.pagination.bulletClass)){if(a.navigation&&(a.navigation.nextEl&&i===a.navigation.nextEl||a.navigation.prevEl&&i===a.navigation.prevEl))return;const s=t.hasClass(a.params.pagination.hiddenClass);C(s===!0?"paginationShow":"paginationHide"),t.toggleClass(a.params.pagination.hiddenClass)}});const H=()=>{a.$el.removeClass(a.params.pagination.paginationDisabledClass),a.pagination.$el&&a.pagination.$el.removeClass(a.params.pagination.paginationDisabledClass),I(),k(),u()},z=()=>{a.$el.addClass(a.params.pagination.paginationDisabledClass),a.pagination.$el&&a.pagination.$el.addClass(a.params.pagination.paginationDisabledClass),O()};Object.assign(a.pagination,{enable:H,disable:z,render:k,update:u,init:I,destroy:O})}const X={name:"BlockOpinionsMdc",data(){return{swiper:null,swiperOptionsObject:{modules:[R,A,D],slidesPerView:1,slidesPerGroupAuto:!1,spaceBetween:20,direction:"horizontal",loop:!1,grabCursor:!0,pagination:{dynamicBullets:!0,el:".swiper-pagination",clickable:!0},navigation:{nextEl:"[data-swiper-next-opinions]",prevEl:"[data-swiper-prev-opinions]"},speed:600,autoplay:{delay:3e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},preloadImages:!1,lazy:{loadPrevNext:!0},breakpoints:{768:{slidesPerView:1.5},1248:{slidesPerView:2.5}}}}},mounted(){this.swiper=new P(this.$refs.swiper,this.swiperOptionsObject)}},Y=a=>(V("data-v-047b7282"),a=a(),T(),a),Z={class:"px-5 tablet:px-10 desktop:px-20 overflow-hidden w-full"},U={class:"relative w-full mx-auto desktop:mx-auto max-w-screen-desktop-wide rounded-[5px]"},W={class:"relative desktop-wide:w-screen pr-5 tablet:pr-10 desktop:pr-20 -mr-5 tablet:-mr-10 desktop:-mr-20 desktop-wide:mr-0 h-full overflow-visible"},J={class:"max-w-screen-desktop-wide"},K={ref:"swiper",class:"swiper swiper-container w-full h-full !overflow-visible"},Q=N('<div class="swiper-navigation w-full hidden desktop:flex gap-5 justify-between absolute bottom-[240px] z-[2] pointer-events-none" data-v-047b7282><div class="hidden pointer-events-auto ml-12 cursor-pointer desktop:flex items-center justify-center w-[120px] h-[120px] rounded-full bg-green-main transition duration-200" data-swiper-prev-opinions data-v-047b7282><svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 16" fill="none" class="rotate-180" data-v-047b7282><path d="M15.6 0.111328L14.2742 1.43713L19.899 7.06195H0.513672V8.93701H19.8988L14.2742 14.5617L15.6 15.8875L23.4882 7.99939L15.6 0.111328Z" fill="#202020" data-v-047b7282></path></svg></div><div class="pointer-events-auto mr-24 cursor-pointer desktop:flex items-center justify-center w-[120px] h-[120px] rounded-full bg-green-main hover:bg-green-mainHover transition duration-200" data-swiper-next-opinions data-v-047b7282><svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 16" fill="none" data-v-047b7282><path d="M15.6 0.111328L14.2742 1.43713L19.899 7.06195H0.513672V8.93701H19.8988L14.2742 14.5617L15.6 15.8875L23.4882 7.99939L15.6 0.111328Z" fill="#202020" data-v-047b7282></path></svg></div></div>',1),w={class:"swiper-wrapper flex h-full"},aa=Y(()=>y("div",{class:"swiper-pagination !relative mt-20"},null,-1));function ea(a,L,r,C,o,h){return j(),q("div",Z,[y("div",U,[y("div",W,[y("div",J,[y("div",K,[Q,y("div",w,[G(a.$slots,"default",{},void 0,!0)]),aa],512)])])])])}const ia=F(X,[["render",ea],["__scopeId","data-v-047b7282"]]);export{ia as default};
