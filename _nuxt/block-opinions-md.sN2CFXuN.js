import{$ as _,S as E}from"./swiper-bundle.min.7p87wQAz.js";import{c as D}from"./create-element-if-not-defined.qQLmdUny.js";import{A as F}from"./autoplay.RKLsh_Z6.js";import{k as H,b as q,c as G,e as x,E as L,p as T,i as j}from"./entry.ZNxZ-YR-.js";function y(a=""){return`.${a.trim().replace(/([\.:!\/])/g,"\\$1").replace(/ /g,".")}`}function N({swiper:a,extendParams:z,on:d,emit:h}){const o="swiper-pagination";z({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:l=>l,formatFractionTotal:l=>l,bulletClass:`${o}-bullet`,bulletActiveClass:`${o}-bullet-active`,modifierClass:`${o}-`,currentClass:`${o}-current`,totalClass:`${o}-total`,hiddenClass:`${o}-hidden`,progressbarFillClass:`${o}-progressbar-fill`,progressbarOppositeClass:`${o}-progressbar-opposite`,clickableClass:`${o}-clickable`,lockClass:`${o}-lock`,horizontalClass:`${o}-horizontal`,verticalClass:`${o}-vertical`,paginationDisabledClass:`${o}-disabled`}}),a.pagination={el:null,$el:null,bullets:[]};let v,b=0;function M(){return!a.params.pagination.el||!a.pagination.el||!a.pagination.$el||a.pagination.$el.length===0}function $(l,e){const{bulletActiveClass:i}=a.params.pagination;l[e]().addClass(`${i}-${e}`)[e]().addClass(`${i}-${e}-${e}`)}function p(){const l=a.rtl,e=a.params.pagination;if(M())return;const i=a.virtual&&a.params.virtual.enabled?a.virtual.slides.length:a.slides.length,t=a.pagination.$el;let s;const r=a.params.loop?Math.ceil((i-a.loopedSlides*2)/a.params.slidesPerGroup):a.snapGrid.length;if(a.params.loop?(s=Math.ceil((a.activeIndex-a.loopedSlides)/a.params.slidesPerGroup),s>i-1-a.loopedSlides*2&&(s-=i-a.loopedSlides*2),s>r-1&&(s-=r),s<0&&a.params.paginationType!=="bullets"&&(s=r+s)):typeof a.snapIndex<"u"?s=a.snapIndex:s=a.activeIndex||0,e.type==="bullets"&&a.pagination.bullets&&a.pagination.bullets.length>0){const n=a.pagination.bullets;let c,f,B;if(e.dynamicBullets&&(v=n.eq(0)[a.isHorizontal()?"outerWidth":"outerHeight"](!0),t.css(a.isHorizontal()?"width":"height",`${v*(e.dynamicMainBullets+4)}px`),e.dynamicMainBullets>1&&a.previousIndex!==void 0&&(b+=s-(a.previousIndex-a.loopedSlides||0),b>e.dynamicMainBullets-1?b=e.dynamicMainBullets-1:b<0&&(b=0)),c=Math.max(s-b,0),f=c+(Math.min(n.length,e.dynamicMainBullets)-1),B=(f+c)/2),n.removeClass(["","-next","-next-next","-prev","-prev-prev","-main"].map(g=>`${e.bulletActiveClass}${g}`).join(" ")),t.length>1)n.each(g=>{const m=_(g),u=m.index();u===s&&m.addClass(e.bulletActiveClass),e.dynamicBullets&&(u>=c&&u<=f&&m.addClass(`${e.bulletActiveClass}-main`),u===c&&$(m,"prev"),u===f&&$(m,"next"))});else{const g=n.eq(s),m=g.index();if(g.addClass(e.bulletActiveClass),e.dynamicBullets){const u=n.eq(c),P=n.eq(f);for(let C=c;C<=f;C+=1)n.eq(C).addClass(`${e.bulletActiveClass}-main`);if(a.params.loop)if(m>=n.length){for(let C=e.dynamicMainBullets;C>=0;C-=1)n.eq(n.length-C).addClass(`${e.bulletActiveClass}-main`);n.eq(n.length-e.dynamicMainBullets-1).addClass(`${e.bulletActiveClass}-prev`)}else $(u,"prev"),$(P,"next");else $(u,"prev"),$(P,"next")}}if(e.dynamicBullets){const g=Math.min(n.length,e.dynamicMainBullets+4),m=(v*g-v)/2-B*v,u=l?"right":"left";n.css(a.isHorizontal()?u:"top",`${m}px`)}}if(e.type==="fraction"&&(t.find(y(e.currentClass)).text(e.formatFractionCurrent(s+1)),t.find(y(e.totalClass)).text(e.formatFractionTotal(r))),e.type==="progressbar"){let n;e.progressbarOpposite?n=a.isHorizontal()?"vertical":"horizontal":n=a.isHorizontal()?"horizontal":"vertical";const c=(s+1)/r;let f=1,B=1;n==="horizontal"?f=c:B=c,t.find(y(e.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${f}) scaleY(${B})`).transition(a.params.speed)}e.type==="custom"&&e.renderCustom?(t.html(e.renderCustom(a,s+1,r)),h("paginationRender",t[0])):h("paginationUpdate",t[0]),a.params.watchOverflow&&a.enabled&&t[a.isLocked?"addClass":"removeClass"](e.lockClass)}function k(){const l=a.params.pagination;if(M())return;const e=a.virtual&&a.params.virtual.enabled?a.virtual.slides.length:a.slides.length,i=a.pagination.$el;let t="";if(l.type==="bullets"){let s=a.params.loop?Math.ceil((e-a.loopedSlides*2)/a.params.slidesPerGroup):a.snapGrid.length;a.params.freeMode&&a.params.freeMode.enabled&&!a.params.loop&&s>e&&(s=e);for(let r=0;r<s;r+=1)l.renderBullet?t+=l.renderBullet.call(a,r,l.bulletClass):t+=`<${l.bulletElement} class="${l.bulletClass}"></${l.bulletElement}>`;i.html(t),a.pagination.bullets=i.find(y(l.bulletClass))}l.type==="fraction"&&(l.renderFraction?t=l.renderFraction.call(a,l.currentClass,l.totalClass):t=`<span class="${l.currentClass}"></span> / <span class="${l.totalClass}"></span>`,i.html(t)),l.type==="progressbar"&&(l.renderProgressbar?t=l.renderProgressbar.call(a,l.progressbarFillClass):t=`<span class="${l.progressbarFillClass}"></span>`,i.html(t)),l.type!=="custom"&&h("paginationRender",a.pagination.$el[0])}function I(){a.params.pagination=D(a,a.originalParams.pagination,a.params.pagination,{el:"swiper-pagination"});const l=a.params.pagination;if(!l.el)return;let e=_(l.el);e.length!==0&&(a.params.uniqueNavElements&&typeof l.el=="string"&&e.length>1&&(e=a.$el.find(l.el),e.length>1&&(e=e.filter(i=>_(i).parents(".swiper")[0]===a.el))),l.type==="bullets"&&l.clickable&&e.addClass(l.clickableClass),e.addClass(l.modifierClass+l.type),e.addClass(a.isHorizontal()?l.horizontalClass:l.verticalClass),l.type==="bullets"&&l.dynamicBullets&&(e.addClass(`${l.modifierClass}${l.type}-dynamic`),b=0,l.dynamicMainBullets<1&&(l.dynamicMainBullets=1)),l.type==="progressbar"&&l.progressbarOpposite&&e.addClass(l.progressbarOppositeClass),l.clickable&&e.on("click",y(l.bulletClass),function(t){t.preventDefault();let s=_(this).index()*a.params.slidesPerGroup;a.params.loop&&(s+=a.loopedSlides),a.slideTo(s)}),Object.assign(a.pagination,{$el:e,el:e[0]}),a.enabled||e.addClass(l.lockClass))}function O(){const l=a.params.pagination;if(M())return;const e=a.pagination.$el;e.removeClass(l.hiddenClass),e.removeClass(l.modifierClass+l.type),e.removeClass(a.isHorizontal()?l.horizontalClass:l.verticalClass),a.pagination.bullets&&a.pagination.bullets.removeClass&&a.pagination.bullets.removeClass(l.bulletActiveClass),l.clickable&&e.off("click",y(l.bulletClass))}d("init",()=>{a.params.pagination.enabled===!1?S():(I(),k(),p())}),d("activeIndexChange",()=>{(a.params.loop||typeof a.snapIndex>"u")&&p()}),d("snapIndexChange",()=>{a.params.loop||p()}),d("slidesLengthChange",()=>{a.params.loop&&(k(),p())}),d("snapGridLengthChange",()=>{a.params.loop||(k(),p())}),d("destroy",()=>{O()}),d("enable disable",()=>{const{$el:l}=a.pagination;l&&l[a.enabled?"removeClass":"addClass"](a.params.pagination.lockClass)}),d("lock unlock",()=>{p()}),d("click",(l,e)=>{const i=e.target,{$el:t}=a.pagination;if(a.params.pagination.el&&a.params.pagination.hideOnClick&&t&&t.length>0&&!_(i).hasClass(a.params.pagination.bulletClass)){if(a.navigation&&(a.navigation.nextEl&&i===a.navigation.nextEl||a.navigation.prevEl&&i===a.navigation.prevEl))return;const s=t.hasClass(a.params.pagination.hiddenClass);h(s===!0?"paginationShow":"paginationHide"),t.toggleClass(a.params.pagination.hiddenClass)}});const A=()=>{a.$el.removeClass(a.params.pagination.paginationDisabledClass),a.pagination.$el&&a.pagination.$el.removeClass(a.params.pagination.paginationDisabledClass),I(),k(),p()},S=()=>{a.$el.addClass(a.params.pagination.paginationDisabledClass),a.pagination.$el&&a.pagination.$el.addClass(a.params.pagination.paginationDisabledClass),O()};Object.assign(a.pagination,{enable:A,disable:S,render:k,update:p,init:I,destroy:O})}const R={name:"BlockOpinionsMdc",data(){return{swiper:null,swiperOptionsObject:{modules:[F,N],slidesPerView:"auto",slidesPerGroupAuto:!1,spaceBetween:0,direction:"horizontal",loop:!0,pagination:{dynamicBullets:!0,el:".swiper-pagination",clickable:!0},speed:600,autoplay:{delay:3e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},preloadImages:!1,lazy:{loadPrevNext:!0}}}},mounted(){this.swiper=new E(this.$refs.swiper,this.swiperOptionsObject)}},V=a=>(T("data-v-c4c12c81"),a=a(),j(),a),X={class:"px-5 tablet:px-10 desktop:px-20 overflow-hidden"},Y={class:"relative w-full mx-auto max-w-screen-desktop-wide rounded-[5px]"},U={class:"relative desktop-wide:w-screen pr-5 tablet:pr-10 desktop:pr-20 -mr-5 tablet:-mr-10 desktop:-mr-20 desktop-wide:mr-0 h-full overflow-hidden"},W={class:"max-w-screen-desktop-wide"},J={ref:"swiper",class:"swiper swiper-container w-full h-full !overflow-visible"},K={class:"swiper-wrapper flex h-full"},Q=V(()=>x("div",{class:"swiper-pagination !relative mt-20"},null,-1));function Z(a,z,d,h,o,v){return q(),G("div",X,[x("div",Y,[x("div",U,[x("div",W,[x("div",J,[x("div",K,[L(a.$slots,"default",{},void 0,!0)]),Q],512)])])])])}const ta=H(R,[["render",Z],["__scopeId","data-v-c4c12c81"]]);export{ta as default};
