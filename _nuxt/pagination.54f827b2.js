import{$ as k}from"./swiper-bundle.min.64e368ef.js";import{c as H}from"./create-element-if-not-defined.10c0035e.js";function $(a=""){return`.${a.trim().replace(/([\.:!\/])/g,"\\$1").replace(/ /g,".")}`}function E({swiper:a,extendParams:D,on:u,emit:v}){const o="swiper-pagination";D({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:l=>l,formatFractionTotal:l=>l,bulletClass:`${o}-bullet`,bulletActiveClass:`${o}-bullet-active`,modifierClass:`${o}-`,currentClass:`${o}-current`,totalClass:`${o}-total`,hiddenClass:`${o}-hidden`,progressbarFillClass:`${o}-progressbar-fill`,progressbarOppositeClass:`${o}-progressbar-opposite`,clickableClass:`${o}-clickable`,lockClass:`${o}-lock`,horizontalClass:`${o}-horizontal`,verticalClass:`${o}-vertical`,paginationDisabledClass:`${o}-disabled`}}),a.pagination={el:null,$el:null,bullets:[]};let y,C=0;function M(){return!a.params.pagination.el||!a.pagination.el||!a.pagination.$el||a.pagination.$el.length===0}function h(l,e){const{bulletActiveClass:i}=a.params.pagination;l[e]().addClass(`${i}-${e}`)[e]().addClass(`${i}-${e}-${e}`)}function f(){const l=a.rtl,e=a.params.pagination;if(M())return;const i=a.virtual&&a.params.virtual.enabled?a.virtual.slides.length:a.slides.length,t=a.pagination.$el;let n;const d=a.params.loop?Math.ceil((i-a.loopedSlides*2)/a.params.slidesPerGroup):a.snapGrid.length;if(a.params.loop?(n=Math.ceil((a.activeIndex-a.loopedSlides)/a.params.slidesPerGroup),n>i-1-a.loopedSlides*2&&(n-=i-a.loopedSlides*2),n>d-1&&(n-=d),n<0&&a.params.paginationType!=="bullets"&&(n=d+n)):typeof a.snapIndex<"u"?n=a.snapIndex:n=a.activeIndex||0,e.type==="bullets"&&a.pagination.bullets&&a.pagination.bullets.length>0){const s=a.pagination.bullets;let r,g,B;if(e.dynamicBullets&&(y=s.eq(0)[a.isHorizontal()?"outerWidth":"outerHeight"](!0),t.css(a.isHorizontal()?"width":"height",`${y*(e.dynamicMainBullets+4)}px`),e.dynamicMainBullets>1&&a.previousIndex!==void 0&&(C+=n-(a.previousIndex-a.loopedSlides||0),C>e.dynamicMainBullets-1?C=e.dynamicMainBullets-1:C<0&&(C=0)),r=Math.max(n-C,0),g=r+(Math.min(s.length,e.dynamicMainBullets)-1),B=(g+r)/2),s.removeClass(["","-next","-next-next","-prev","-prev-prev","-main"].map(p=>`${e.bulletActiveClass}${p}`).join(" ")),t.length>1)s.each(p=>{const m=k(p),c=m.index();c===n&&m.addClass(e.bulletActiveClass),e.dynamicBullets&&(c>=r&&c<=g&&m.addClass(`${e.bulletActiveClass}-main`),c===r&&h(m,"prev"),c===g&&h(m,"next"))});else{const p=s.eq(n),m=p.index();if(p.addClass(e.bulletActiveClass),e.dynamicBullets){const c=s.eq(r),P=s.eq(g);for(let b=r;b<=g;b+=1)s.eq(b).addClass(`${e.bulletActiveClass}-main`);if(a.params.loop)if(m>=s.length){for(let b=e.dynamicMainBullets;b>=0;b-=1)s.eq(s.length-b).addClass(`${e.bulletActiveClass}-main`);s.eq(s.length-e.dynamicMainBullets-1).addClass(`${e.bulletActiveClass}-prev`)}else h(c,"prev"),h(P,"next");else h(c,"prev"),h(P,"next")}}if(e.dynamicBullets){const p=Math.min(s.length,e.dynamicMainBullets+4),m=(y*p-y)/2-B*y,c=l?"right":"left";s.css(a.isHorizontal()?c:"top",`${m}px`)}}if(e.type==="fraction"&&(t.find($(e.currentClass)).text(e.formatFractionCurrent(n+1)),t.find($(e.totalClass)).text(e.formatFractionTotal(d))),e.type==="progressbar"){let s;e.progressbarOpposite?s=a.isHorizontal()?"vertical":"horizontal":s=a.isHorizontal()?"horizontal":"vertical";const r=(n+1)/d;let g=1,B=1;s==="horizontal"?g=r:B=r,t.find($(e.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${g}) scaleY(${B})`).transition(a.params.speed)}e.type==="custom"&&e.renderCustom?(t.html(e.renderCustom(a,n+1,d)),v("paginationRender",t[0])):v("paginationUpdate",t[0]),a.params.watchOverflow&&a.enabled&&t[a.isLocked?"addClass":"removeClass"](e.lockClass)}function x(){const l=a.params.pagination;if(M())return;const e=a.virtual&&a.params.virtual.enabled?a.virtual.slides.length:a.slides.length,i=a.pagination.$el;let t="";if(l.type==="bullets"){let n=a.params.loop?Math.ceil((e-a.loopedSlides*2)/a.params.slidesPerGroup):a.snapGrid.length;a.params.freeMode&&a.params.freeMode.enabled&&!a.params.loop&&n>e&&(n=e);for(let d=0;d<n;d+=1)l.renderBullet?t+=l.renderBullet.call(a,d,l.bulletClass):t+=`<${l.bulletElement} class="${l.bulletClass}"></${l.bulletElement}>`;i.html(t),a.pagination.bullets=i.find($(l.bulletClass))}l.type==="fraction"&&(l.renderFraction?t=l.renderFraction.call(a,l.currentClass,l.totalClass):t=`<span class="${l.currentClass}"></span> / <span class="${l.totalClass}"></span>`,i.html(t)),l.type==="progressbar"&&(l.renderProgressbar?t=l.renderProgressbar.call(a,l.progressbarFillClass):t=`<span class="${l.progressbarFillClass}"></span>`,i.html(t)),l.type!=="custom"&&v("paginationRender",a.pagination.$el[0])}function I(){a.params.pagination=H(a,a.originalParams.pagination,a.params.pagination,{el:"swiper-pagination"});const l=a.params.pagination;if(!l.el)return;let e=k(l.el);e.length!==0&&(a.params.uniqueNavElements&&typeof l.el=="string"&&e.length>1&&(e=a.$el.find(l.el),e.length>1&&(e=e.filter(i=>k(i).parents(".swiper")[0]===a.el))),l.type==="bullets"&&l.clickable&&e.addClass(l.clickableClass),e.addClass(l.modifierClass+l.type),e.addClass(a.isHorizontal()?l.horizontalClass:l.verticalClass),l.type==="bullets"&&l.dynamicBullets&&(e.addClass(`${l.modifierClass}${l.type}-dynamic`),C=0,l.dynamicMainBullets<1&&(l.dynamicMainBullets=1)),l.type==="progressbar"&&l.progressbarOpposite&&e.addClass(l.progressbarOppositeClass),l.clickable&&e.on("click",$(l.bulletClass),function(t){t.preventDefault();let n=k(this).index()*a.params.slidesPerGroup;a.params.loop&&(n+=a.loopedSlides),a.slideTo(n)}),Object.assign(a.pagination,{$el:e,el:e[0]}),a.enabled||e.addClass(l.lockClass))}function z(){const l=a.params.pagination;if(M())return;const e=a.pagination.$el;e.removeClass(l.hiddenClass),e.removeClass(l.modifierClass+l.type),e.removeClass(a.isHorizontal()?l.horizontalClass:l.verticalClass),a.pagination.bullets&&a.pagination.bullets.removeClass&&a.pagination.bullets.removeClass(l.bulletActiveClass),l.clickable&&e.off("click",$(l.bulletClass))}u("init",()=>{a.params.pagination.enabled===!1?O():(I(),x(),f())}),u("activeIndexChange",()=>{(a.params.loop||typeof a.snapIndex>"u")&&f()}),u("snapIndexChange",()=>{a.params.loop||f()}),u("slidesLengthChange",()=>{a.params.loop&&(x(),f())}),u("snapGridLengthChange",()=>{a.params.loop||(x(),f())}),u("destroy",()=>{z()}),u("enable disable",()=>{const{$el:l}=a.pagination;l&&l[a.enabled?"removeClass":"addClass"](a.params.pagination.lockClass)}),u("lock unlock",()=>{f()}),u("click",(l,e)=>{const i=e.target,{$el:t}=a.pagination;if(a.params.pagination.el&&a.params.pagination.hideOnClick&&t&&t.length>0&&!k(i).hasClass(a.params.pagination.bulletClass)){if(a.navigation&&(a.navigation.nextEl&&i===a.navigation.nextEl||a.navigation.prevEl&&i===a.navigation.prevEl))return;const n=t.hasClass(a.params.pagination.hiddenClass);v(n===!0?"paginationShow":"paginationHide"),t.toggleClass(a.params.pagination.hiddenClass)}});const F=()=>{a.$el.removeClass(a.params.pagination.paginationDisabledClass),a.pagination.$el&&a.pagination.$el.removeClass(a.params.pagination.paginationDisabledClass),I(),x(),f()},O=()=>{a.$el.addClass(a.params.pagination.paginationDisabledClass),a.pagination.$el&&a.pagination.$el.addClass(a.params.pagination.paginationDisabledClass),z()};Object.assign(a.pagination,{enable:F,disable:O,render:x,update:f,init:I,destroy:z})}export{E as P};
