/*! For license information please see chunk.6275da85286c6d16f48c.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{168:function(t,e,i){"use strict";i(188)},187:function(t,e,i){"use strict";var s={name:"ALink",props:{href:String,to:[String,Object]},computed:{isRouter(){return!!this.$router&&(!this.href||Boolean(this.$router.options.routes.find((({path:t})=>t===this.href))))}}},a=i(53),o=Object(a.a)(s,(function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.isRouter?"router-link":"a",{tag:"component",attrs:{href:t.isRouter?null:t.href,to:t.isRouter?t.to||t.href:null}},[t._t("default")],2)}),[],!1,null,null,null);e.a=o.exports},188:function(t,e,i){var s=i(214);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,i(167).default)("fd5c67d2",s,!0,{})},189:function(t,e,i){"use strict";i(13),i(5);var s=i(27),a=i(89),o=i(70);var n={name:"APicture",props:{src:[String,Object],fallbackSrc:String,alt:String,canCalcHeight:{type:Boolean,default:!0},placeholder:{type:String,default:"/assets/img-placeholder.png"},containerBreakpoints:{type:Object,default:()=>({zoom:null,big:800,[s.$ecomConfig.get("default_img_size")||"normal"]:400})},lozadOptions:{type:Object,default:()=>({rootMargin:"350px 0px",threshold:0})}},data:()=>({sources:[],height:null,opacity:null}),computed:{defaultImgObj(){return"object"==typeof this.src&&this.src?Object(a.a)(this.src)||this.src:{}},localFallbackSrc(){const{src:t,defaultImgObj:e,fallbackSrc:i}=this;if(i)return i;const s="object"==typeof t?t.zoom?t.zoom.url:e.url:t;return s?s.replace(/\.webp$/,""):this.placeholder},localAlt(){const{alt:t,src:e,defaultImgObj:i}=this;return t||(e?i.alt||"Product":"No image")}},methods:{updateSources(){const t=[];let e;if("object"==typeof this.src){const{clientWidth:t,clientHeight:i}=this.$el,s=((t,e,i,s)=>{let a,o;for(const n in s){const r=s[n];if(void 0!==r&&t[n]){if(void 0!==o)if(null===r){if(o>=e)continue}else if(r<e||r-50<=i||null!==o&&r>o)continue;a=n,o=r}}return a})(this.src,t,i,this.containerBreakpoints),a=this.src[s],{url:o,size:n}=a||this.defaultImgObj;if(e=o,t&&n&&this.canCalcHeight){const[e,i]=n.split("x").map((t=>parseInt(t,10)));i&&(this.height="".concat(t>=e?i:t*i/e,"px"))}}else e=this.src;e&&(e.endsWith(".webp")?t.push({srcset:e,type:"image/webp"},{srcset:/\/imgs\/[0-9]{3}px/.test(e)?e.replace(/\/imgs\/[0-9]{3}px/,""):e.replace(/\.webp$/,""),type:"image/".concat(".png"===e.substr(-9,4)?"png":"jpeg")}):t.push({srcset:e})),this.sources=t}},mounted(){this.updateSources(),this.$nextTick((()=>{const t=this.$el;Object(o.a)(t,{...this.lozadOptions,loaded:t=>{const{localFallbackSrc:e}=this,i="IMG"===t.tagName?t:t.lastChild;i.style.opacity=0,i.onerror=function(){console.error(new Error("Image load error"),this),t.style.display="none";const i=document.createElement("IMG");i.src=e,t.parentNode.insertBefore(i,t.nextSibling)},i.onload=()=>{this.opacity=0,t.classList.add("loaded"),this.$nextTick((()=>{this.opacity=i.style.opacity=null,this.$emit("load")}))}}}).observe()}))}},r=(i(168),i(53)),c=Object(r.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("picture",{staticClass:"picture",style:{height:t.height,opacity:t.opacity},attrs:{"data-iesrc":t.localFallbackSrc,"data-alt":t.localAlt}},[t.sources.length?t._l(t.sources,(function(t,e){var s=t.srcset,a=t.type;return i("source",{key:e,attrs:{srcset:s,type:a}})})):i("source",{attrs:{srcset:t.localFallbackSrc}})],2)}),[],!1,null,null,null);e.a=c.exports},190:function(t,e,i){"use strict";var s=i(28),a=i(40),o=i(41),n=i(42),r=i(80);const c=(t,e)=>{const{type:i,value:s}=e;if(s)return"percentage"===i?t*(100-s)/100:t-s};var l={name:"APrices",props:{product:{type:Object,required:!0},isLiteral:Boolean,isBig:Boolean,isAmountTotal:Boolean,installmentsOption:Object,discountOption:Object,discountText:{type:[String,Boolean],default:""}},data(){return{installmentsNumber:0,monthlyInterest:0,discount:{type:null,value:0},extraDiscount:{type:null,value:0},discountLabel:this.discountText}},computed:{i19asOf:()=>Object(a.a)(s.n),i19from:()=>Object(a.a)(s.tb),i19interestFree:()=>Object(a.a)(s.Fb),i19of:()=>Object(a.a)(s.kc),i19to:()=>Object(a.a)(s.xd),i19upTo:()=>Object(a.a)(s.Ed),price(){const t=Object(o.a)(this.product);return this.extraDiscount.value?c(t,this.extraDiscount):t},comparePrice(){return Object(n.a)(this.product)?this.product.base_price:this.extraDiscount.value?Object(o.a)(this.product):void 0},priceWithDiscount(){return c(this.price,this.discount)},installmentValue(){if(this.installmentsNumber>=2){if(this.monthlyInterest){const t=this.monthlyInterest/100;return this.price*t/(1-Math.pow(1+t,-this.installmentsNumber))}return this.price/this.installmentsNumber}return 0}},methods:{formatMoney:r.a,updateInstallments(t){if(t){this.monthlyInterest=t.monthly_interest;const e=t.min_installment||5,i=parseInt(this.price/e,10);this.installmentsNumber=Math.min(i,t.max_number)}},updateDiscount(t){!t||t.min_amount&&!(t.min_amount<=this.price)||this.isAmountTotal&&"total"!==t.apply_at||(this.discount=t,!this.discountText&&!1!==this.discountText&&t.label&&(this.discountLabel="via ".concat(t.label)))}},watch:{price:{handler(t){this.$emit("fix-price",t)},immediate:!0}},created(){const t="object"==typeof window&&window.storefront;if(this.discountOption)this.updateDiscount(this.discountOption);else if(t){const e=()=>{const e=t.info&&t.info.apply_discount;if(e){const t=e.available_extra_discount;return t&&(this.extraDiscount=t),Object.keys(e).length>0}return!1};e()||t.on("info:apply_discount",e)}if(this.installmentsOption)this.updateInstallments(this.installmentsOption);else if(t){const e=()=>{const e=t.info&&t.info.list_payments;return!!e&&(this.updateInstallments(e.installments_option),this.updateDiscount(e.discount_option),Object.keys(e).length>0)};e()||t.on("info:list_payments",e)}}},u=(i(168),i(53)),d=Object(u.a)(l,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"prices",class:{"prices--literal":t.isLiteral,"prices--big":t.isBig}},[t.comparePrice?i("span",{staticClass:"prices__compare"},[t.isLiteral?[i("small",[t._v(t._s(t.i19from))]),i("s",[t._v(t._s(t.formatMoney(t.comparePrice)))]),i("small",[t._v(t._s(t.i19to))])]:i("s",[t._v(t._s(t.formatMoney(t.comparePrice)))])],2):t._e(),i("strong",{staticClass:"prices__value"},[t._v(" "+t._s(t.formatMoney(t.price))+" ")]),i("transition-group",{attrs:{"enter-active-class":"animated slideInDown"}},[t.installmentsNumber>1?i("div",{key:"installments",staticClass:"prices__installments"},[t.isLiteral?i("small",[t._v(" "+t._s(t.i19upTo)+" ")]):t._e(),t._v(" "+t._s(t.installmentsNumber)+"x "),t.isLiteral?i("small",[t._v(" "+t._s(t.i19of)+" ")]):t._e(),i("span",[t._v(" "+t._s(t.formatMoney(t.installmentValue))+" ")]),!t.monthlyInterest&&t.isLiteral?i("small",[t._v(" "+t._s(t.i19interestFree)+" ")]):t._e()]):t._e(),"number"==typeof t.priceWithDiscount&&t.priceWithDiscount<t.price?i("div",{key:"discount",staticClass:"prices__discount"},["string"==typeof t.discountLabel&&t.discountLabel?[i("span",[t._v(" "+t._s(t.formatMoney(t.priceWithDiscount))+" ")]),i("small",[t._v(" "+t._s(t.discountLabel)+" ")])]:[i("small",[t._v(" "+t._s(t.i19asOf)+" ")]),i("span",[t._v(" "+t._s(t.formatMoney(t.priceWithDiscount))+" ")])]],2):t._e()])],1)}),[],!1,null,null,null);e.a=d.exports},191:function(t,e,i){"use strict";i(50);var s=i(28),a=i(40),o=i(22),n=i(82),r=i(42),c=i(41),l=i(31),u=i.n(l),d=i(4),p=i(9),h=i(187),m=i(189),f=i(190);const g=(t,e)=>{if("object"==typeof window){t="productCard".concat(t,"Html");const i="function"==typeof window[t]?window[t](e):window[t];if("string"==typeof i)return i}};var b={name:"ProductCard",components:{ALink:h.a,APicture:m.a,APrices:f.a},props:{product:Object,productId:String,isSmall:Boolean,headingTag:{type:String,default:"h3"},buyText:String,transitionClass:{type:String,default:"animated fadeIn"},canAddToCart:{type:Boolean,default:!0},isLoaded:Boolean,installmentsOption:Object,discountOption:Object},data:()=>({body:{},isLoading:!1,isWaitingBuy:!1,isHovered:!1,error:""}),computed:{i19outOfStock:()=>Object(a.a)(s.vc),i19unavailable:()=>Object(a.a)(s.Bd),ratingHtml(){return g("Rating",this.body)},buyHtml(){return g("Buy",this.body)},footerHtml(){return g("Footer",this.body)},name(){return Object(o.a)(this.body)},strBuy(){return this.buyText||"object"==typeof window&&window.productCardBuyText||Object(a.a)(s.s)},isInStock(){return Object(n.a)(this.body)},isActive(){return this.body.available&&this.body.visible&&this.isInStock},discount(){const{body:t}=this;return Object(r.a)(t)?Math.round(100*(t.base_price-Object(c.a)(t))/t.base_price):0}},methods:{setBody(t){this.body=Object.assign({},t),delete this.body.body_html,delete this.body.body_text,delete this.body.inventory_records,delete this.body.price_change_records},fetchItem(){this.productId&&(this.isLoading=!0,Object(d.g)({url:"/products/".concat(this.productId,".json")}).then((({data:t})=>{this.$emit("update:product",t),this.setBody(t),this.$emit("update:is-loaded",!0)})).catch((t=>{console.error(t),this.body.name&&this.body.slug&&this.body.pictures||(this.error=Object(a.a)(s.O))})).finally((()=>{this.isLoading=!1})))},buy(){const t=this.body;this.$emit("buy",{product:t}),this.canAddToCart&&(this.isWaitingBuy=!0,Object(d.g)({url:"/products/".concat(t._id,".json")}).then((({data:e})=>{const s=["variations","customizations","kit_composition"];for(let t=0;t<s.length;t++){const a=e[s[t]];if(a&&a.length)return Promise.all([i.e(0),i.e(2),i.e(6),i.e(19)]).then(i.bind(null,379)).then((t=>{new u.a({render:i=>i(t.default,{props:{product:e}})}).$mount(this.$refs.quickview)}))}const{quantity:a,price:o}=e;p.a.addProduct({...t,quantity:a,price:o})})).catch((e=>{console.error(e),window.location="/".concat(t.slug)})).finally((()=>{this.isWaitingBuy=!1})))}},created(){this.product&&(this.setBody(this.product),void 0===this.product.available&&(this.body.available=!0),void 0===this.product.visible&&(this.body.visible=!0)),this.isLoaded||this.fetchItem()}},_=(i(168),i(53)),v=Object(_.a)(b,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"product-card",class:{"product-card--inactive":t.body._id&&!t.isActive,"product-card--small":t.isSmall},attrs:{"data-product-id":t.body._id,"data-sku":t.body.sku},on:{mouseover:function(e){t.isHovered=!0}}},[i("transition",{attrs:{"enter-active-class":t.transitionClass}},[t.isLoading?t._e():i("section",[t._t("discount-tag",[t.isActive&&t.discount>0?i("span",{staticClass:"product-card__offer-stamp"},[i("i",{staticClass:"fas fa-arrow-down"}),t._v(" "),i("b",[t._v(t._s(t.discount))]),t._v("% ")]):t._e()],null,{discount:t.discount}),t._t("body",[i("a-link",{staticClass:"product-card__link",attrs:{href:"/"+t.body.slug,title:t.name}},[t._t("header"),i("div",{staticClass:"product-card__pictures"},[t.body.pictures&&t.body.pictures.length?t._l(t.body.pictures.slice(0,2).reverse(),(function(e,s){return 1===t.body.pictures.length||1===s||t.isHovered?i("a-picture",{key:s,staticClass:"product-card__picture",attrs:{src:e,"can-calc-height":!1}}):t._e()})):i("a-picture",{staticClass:"product-card__picture"})],2),t._t("title",[i(t.headingTag,{tag:"component",staticClass:"product-card__name"},[t._v(" "+t._s(t.name)+" ")])])],2)]),t._t("rating",[t._m(0)]),t.body.available&&t.body.visible?t.isInStock?[t._t("prices",[i("a-prices",{staticClass:"product-card__prices",attrs:{product:t.body,"installments-option":t.installmentsOption,"discount-option":t.discountOption}})]),i("div",{staticClass:"product-card__buy fade",on:{click:t.buy}},[t._t("buy",[t.buyHtml?i("div",{domProps:{innerHTML:t._s(t.buyHtml)}}):t._e(),i("button",{staticClass:"btn btn-primary",class:t.isSmall?"btn-sm":"btn-block",attrs:{type:"button",disabled:t.isWaitingBuy}},[t.isWaitingBuy?i("span",{staticClass:"product-card__buy-loading spinner-grow spinner-grow-sm",attrs:{role:"status"}},[i("span",{staticClass:"sr-only"},[t._v("Loading...")])]):t._e(),t._t("buy-button-content",[i("i",{staticClass:"fas fa-shopping-bag mr-1"}),t._v(" "+t._s(t.strBuy)+" ")])],2)])],2)]:t._t("out-of-stock",[i("p",{staticClass:"badge badge-dark"},[t._v(" "+t._s(t.i19outOfStock)+" ")])]):t._t("unavailable",[i("p",{staticClass:"badge badge-warning"},[t._v(" "+t._s(t.i19unavailable)+" ")])]),t._t("footer",[t.footerHtml?i("div",{domProps:{innerHTML:t._s(t.footerHtml)}}):t._e()])],2)]),t.isLoading?[t._t("default"),t.error?i("div",{staticClass:"alert alert-warning small",attrs:{role:"alert"}},[t._v(" "+t._s(t.error)+" ")]):t._e()]:t._e(),i("div",{ref:"quickview"})],2)}),[function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"product-card__rating",attrs:{"data-sku":t.body.sku},domProps:{innerHTML:t._s(t.ratingHtml)}})}],!1,null,null,null);e.a=v.exports},213:function(t,e,i){"use strict";var s=i(29),a=i(215).left,o=i(216),n=i(217),r=i(218),c=i(220),l=o("reduce"),u=n("reduce",{1:0});s({target:"Array",proto:!0,forced:!l||!u||!c&&r>79&&r<83},{reduce:function(t){return a(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},214:function(t,e,i){(e=i(166)(!1)).push([t.i,"",""]),t.exports=e},215:function(t,e,i){var s=i(56),a=i(51),o=i(71),n=i(55),r=function(t){return function(e,i,r,c){s(i);var l=a(e),u=o(l),d=n(l.length),p=t?d-1:0,h=t?-1:1;if(r<2)for(;;){if(p in u){c=u[p],p+=h;break}if(p+=h,t?p<0:d<=p)throw TypeError("Reduce of empty array with no initial value")}for(;t?p>=0:d>p;p+=h)p in u&&(c=i(c,u[p],p,l));return c}};t.exports={left:r(!1),right:r(!0)}},216:function(t,e,i){"use strict";var s=i(11);t.exports=function(t,e){var i=[][t];return!!i&&s((function(){i.call(null,e||function(){throw 1},1)}))}},217:function(t,e,i){var s=i(18),a=i(11),o=i(14),n=Object.defineProperty,r={},c=function(t){throw t};t.exports=function(t,e){if(o(r,t))return r[t];e||(e={});var i=[][t],l=!!o(e,"ACCESSORS")&&e.ACCESSORS,u=o(e,0)?e[0]:c,d=o(e,1)?e[1]:void 0;return r[t]=!!i&&!a((function(){if(l&&!s)return!0;var t={length:-1};l?n(t,1,{enumerable:!0,get:c}):t[1]=1,i.call(t,u,d)}))}},218:function(t,e,i){var s,a,o=i(7),n=i(219),r=o.process,c=r&&r.versions,l=c&&c.v8;l?a=(s=l.split("."))[0]+s[1]:n&&(!(s=n.match(/Edge\/(\d+)/))||s[1]>=74)&&(s=n.match(/Chrome\/(\d+)/))&&(a=s[1]),t.exports=a&&+a},219:function(t,e,i){var s=i(35);t.exports=s("navigator","userAgent")||""},220:function(t,e,i){var s=i(57),a=i(7);t.exports="process"==s(a.process)},248:function(t,e,i){var s=i(255);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,i(167).default)("089613ef",s,!0,{})},251:function(t,e,i){"use strict";e.a=(t,e)=>t.sort(((t,i)=>{if(t.app_id===i.app_id)return 0;const s=e.indexOf(t.app_id),a=e.indexOf(i.app_id);return s>-1?a>-1?s<a?-1:1:s>-1?-1:1:a>-1?1:0}))},252:function(t,e,i){"use strict";i(213),i(50),i(13);var s=i(28),a=i(27),o=i(40),n=i(80),r=i(41),c=i(4),l=i(251),u=i(240),d=i.n(u),p=i(245);const h="object"==typeof window&&window.localStorage,m="shipping-to-zip",f=t=>{const e={};return["product_id","variation_id","sku","name","quantity","currency_id","currency_symbol","price","final_price","dimensions","weight"].forEach((i=>{void 0!==t[i]&&(e[i]=t[i])})),e};var g={name:"ShippingCalculator",components:{CleaveInput:d.a,ShippingLine:p.a},props:{zipCode:String,canSelectServices:Boolean,canInputZip:{type:Boolean,default:!0},countryCode:{type:String,default:a.$ecomConfig.get("country_code")},shippedItems:{type:Array,default:()=>[]},shippingResult:{type:Array,default:()=>[]},shippingData:{type:Object,default:()=>({})},shippingAppsSort:{type:Array,default:()=>window.ecomShippingApps||[]}},data:()=>({localZipCode:null,localShippedItems:[],amountSubtotal:null,shippingServices:[],selectedService:null,hasFreeOption:!1,freeFromValue:null,isScheduled:!1,retryTimer:null,isWaiting:!1,hasCalculated:!1}),computed:{i19add$1ToEarn:()=>Object(o.a)(s.h),i19calculateShipping:()=>Object(o.a)(s.x),i19zipCode:()=>Object(o.a)(s.Ld),i19freeShipping:()=>Object(o.a)(s.pb).toLowerCase(),cleaveOptions(){return"BR"===this.countryCode?{blocks:[5,3],delimiter:"-"}:{blocks:[30]}},freeFromPercentage(){return!this.hasFreeOption&&this.amountSubtotal<this.freeFromValue?Math.round(100*this.amountSubtotal/this.freeFromValue):null}},methods:{formatMoney:n.a,updateZipCode(){this.$emit("update:zip-code",this.localZipCode)},parseShippingOptions(t=[],e=!1){this.shippingServices=[],t.length&&(t.forEach((t=>{const{validated:e,error:i,response:s}=t;if(e&&!i){s.shipping_services.forEach((e=>{this.shippingServices.push({app_id:t.app_id,...e})}));const e=s.free_shipping_from_value;e&&(!this.freeFromValue||this.freeFromValue>e)&&(this.freeFromValue=e)}})),this.shippingServices.length?(this.shippingServices=this.shippingServices.sort(((t,e)=>{const i=t.shipping_line.total_price-e.shipping_line.total_price;return i<0?-1:i>0?1:t.shipping_line.delivery_time&&e.shipping_line.delivery_time&&t.shipping_line.delivery_time.days<e.shipping_line.delivery_time.days?-1:1})),this.setSelectedService(0),this.hasFreeOption=Boolean(this.shippingServices.find((t=>!t.shipping_line.total_price&&!t.shipping_line.price))),Array.isArray(this.shippingAppsSort)&&this.shippingAppsSort.length&&(this.shippingServices=Object(l.a)(this.shippingServices,this.shippingAppsSort))):e?this.scheduleRetry():this.fetchShippingServices(!0))},scheduleRetry(t=1e4){clearTimeout(this.retryTimer),this.retryTimer=setTimeout((()=>{this.localZipCode&&!this.shippingServices.length&&this.fetchShippingServices(!0)}),t)},fetchShippingServices(t){this.isScheduled||(this.isScheduled=!0,setTimeout((()=>{this.isScheduled=!1;const{storeId:e}=this,i={...this.shippingData,to:{zip:this.localZipCode,...this.shippingData.to}};this.localShippedItems.length&&(i.items=this.localShippedItems,i.subtotal=this.amountSubtotal),this.isWaiting=!0,Object(c.c)({url:"/calculate_shipping.json",method:"POST",storeId:e,data:i}).then((({data:e})=>this.parseShippingOptions(e.result,t))).catch((e=>{t||this.scheduleRetry(4e3),console.error(e)})).finally((()=>{this.hasCalculated=!0,this.isWaiting=!1}))}),this.hasCalculated?150:50))},submitZipCode(){this.updateZipCode(),h&&h.setItem(m,this.localZipCode),this.fetchShippingServices()},setSelectedService(t){this.canSelectServices&&(this.$emit("select-service",this.shippingServices[t]),this.selectedService=t)}},watch:{shippedItems:{handler(){this.localShippedItems=this.shippedItems.map(f);const{amountSubtotal:t}=this;this.amountSubtotal=this.shippedItems.reduce(((t,e)=>t+Object(r.a)(e)*e.quantity),0),this.hasCalculated&&(this.canSelectServices||t!==this.amountSubtotal||!this.shippingServices.length&&!this.isWaiting)&&this.fetchShippingServices()},deep:!0,immediate:!0},localZipCode(t){"BR"===this.countryCode&&8===t.replace(/\D/g,"").length&&this.submitZipCode()},zipCode:{handler(t){t&&(this.localZipCode=t)},immediate:!0},shippingResult:{handler(t){t.length&&this.parseShippingOptions(t)},immediate:!0}},created(){if(!this.zipCode&&h){const t=h.getItem(m);t&&(this.localZipCode=t)}}},b=(i(254),i(53)),_=Object(b.a)(g,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"shipping-calculator"},[t.canInputZip?i("form",{staticClass:"shipping-calculator__form",on:{submit:function(e){return e.preventDefault(),t.submitZipCode(e)}}},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"shipping-calculator-zip"}},[t._v(" "+t._s(t.i19calculateShipping)+" ")]),i("div",{staticClass:"input-group"},[i("cleave-input",{staticClass:"form-control shipping-calculator__input",attrs:{type:"tel",id:"shipping-calculator-zip",placeholder:t.i19zipCode,"aria-label":t.i19zipCode,options:t.cleaveOptions},model:{value:t.localZipCode,callback:function(e){t.localZipCode=e},expression:"localZipCode"}}),t._m(0)],1)])]):t._e(),i("div",{staticClass:"shipping-calculator__services"},[i("transition-group",{attrs:{"enter-active-class":"animated fadeInDown","leave-active-class":"animated position-absolute fadeOutUp"}},[t.isWaiting?i("div",{key:"waiting",staticClass:"spinner-border spinner-border-sm",attrs:{role:"status"}},[i("span",{staticClass:"sr-only"},[t._v("Loading...")])]):i("div",{key:"services",staticClass:"list-group"},t._l(t.shippingServices,(function(e,s){return i(t.canSelectServices?"a":"div",{key:s,tag:"component",staticClass:"list-group-item",class:{"list-group-item-action":t.canSelectServices,active:t.canSelectServices&&t.selectedService===s},attrs:{href:t.canSelectServices&&"#"},on:{click:function(e){return e.preventDefault(),t.setSelectedService(s)}}},[i("span",{staticClass:"shipping-calculator__option"},[t._t("option",[i("shipping-line",{attrs:{"shipping-line":e.shipping_line}}),i("small",[t._v(t._s(e.label))])],null,{service:e})],2)])})),1)]),i("transition",{attrs:{"enter-active-class":"animated fadeInUp","leave-active-class":"animated fadeOutDown"}},[t.freeFromPercentage?i("div",{staticClass:"shipping-calculator__free-from-value"},[t._t("free-from-value",[i("span",[t._v(" "+t._s(t.i19add$1ToEarn.replace("$1",t.formatMoney(t.freeFromValue-t.amountSubtotal)))+" "),i("strong",[t._v(t._s(t.i19freeShipping))])]),t.freeFromPercentage>=33?i("div",{staticClass:"progress"},[i("div",{staticClass:"progress-bar progress-bar-striped",style:"width: "+t.freeFromPercentage+"%",attrs:{role:"progressbar","aria-valuenow":t.freeFromPercentage,"aria-valuemin":"0","aria-valuemax":"100"}},[i("span",[t._v(" "+t._s(t.i19freeShipping)+" "),i("i",{staticClass:"fas fa-truck mx-1"}),i("strong",[t._v(t._s(t.freeFromPercentage)+"%")])])])]):t._e()],null,{amountSubtotal:t.amountSubtotal,freeFromValue:t.freeFromValue,freeFromPercentage:t.freeFromPercentage})],2):t._e()])],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-group-append"},[e("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"submit"}},[e("i",{staticClass:"fas fa-shipping-fast"})])])}],!1,null,null,null);e.a=_.exports},253:function(t,e,i){"use strict";e.a=t=>{"object"==typeof window&&"function"==typeof window.requestIdleCallback?window.requestIdleCallback(t):setTimeout(t,500)}},254:function(t,e,i){"use strict";i(248)},255:function(t,e,i){(e=i(166)(!1)).push([t.i,".shipping-calculator__input{max-width:150px}.shipping-calculator__services{max-width:350px;font-size:var(--font-size-sm)}.shipping-calculator__services .active{cursor:auto}.shipping-calculator__option{display:flex;justify-content:space-between;width:100%}.shipping-calculator__free-from-value{margin-top:var(--spacer-2)}.shipping-calculator__free-from-value .progress{height:1.5rem;margin-top:var(--spacer-1)}.shipping-calculator__free-from-value .progress-bar{background-color:var(--info)}",""]),t.exports=e},260:function(t,e,i){"use strict";var s=i(29),a=i(56),o=i(114),n=i(261),r=i(262);s({target:"Promise",stat:!0},{allSettled:function(t){var e=this,i=o.f(e),s=i.resolve,c=i.reject,l=n((function(){var i=a(e.resolve),o=[],n=0,c=1;r(t,(function(t){var a=n++,r=!1;o.push(void 0),c++,i.call(e,t).then((function(t){r||(r=!0,o[a]={status:"fulfilled",value:t},--c||s(o))}),(function(t){r||(r=!0,o[a]={status:"rejected",reason:t},--c||s(o))}))})),--c||s(o)}));return l.error&&c(l.value),i.promise}})},261:function(t,e){t.exports=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}}},262:function(t,e,i){var s=i(10),a=i(170),o=i(55),n=i(115),r=i(105),c=i(169),l=function(t,e){this.stopped=t,this.result=e};t.exports=function(t,e,i){var u,d,p,h,m,f,g,b=i&&i.that,_=!(!i||!i.AS_ENTRIES),v=!(!i||!i.IS_ITERATOR),y=!(!i||!i.INTERRUPTED),C=n(e,b,1+_+y),S=function(t){return u&&c(u),new l(!0,t)},O=function(t){return _?(s(t),y?C(t[0],t[1],S):C(t[0],t[1])):y?C(t,S):C(t)};if(v)u=t;else{if("function"!=typeof(d=r(t)))throw TypeError("Target is not iterable");if(a(d)){for(p=0,h=o(t.length);h>p;p++)if((m=O(t[p]))&&m instanceof l)return m;return new l(!1)}u=d.call(t)}for(f=u.next;!(g=f.call(u)).done;){try{m=O(g.value)}catch(t){throw c(u),t}if("object"==typeof m&&m&&m instanceof l)return m}return new l(!1)}},281:function(t,e,i){var s=i(327);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,i(167).default)("46cd4665",s,!0,{})},282:function(t,e,i){var s=i(329);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,i(167).default)("38d0a376",s,!0,{})},300:function(t,e,i){"use strict";i(213),i(50);var s=i(28),a=i(40),o=i(4),n=i(9),r=i(54),c=i(244);var l={name:"DiscountApplier",components:{AAlert:c.a},props:{amount:Object,couponCode:String,hasCouponInput:{type:Boolean,default:!0},isFormAlwaysVisible:Boolean,isCouponApplied:Boolean,isAttentionWanted:Boolean,canAddFreebieItems:{type:Boolean,default:!0},modulesPayload:Object,ecomCart:{type:Object,default:()=>n.a},ecomPassport:{type:Object,default:()=>r.a}},data(){return{alertText:null,alertVariant:null,isFormVisible:this.isFormAlwaysVisible||this.couponCode,isLoading:!1,localCouponCode:this.couponCode,localAmountTotal:null,isUpdateSheduled:!1}},computed:{i19add:()=>Object(a.a)(s.g),i19addDiscountCoupon:()=>Object(a.a)(s.i),i19code:()=>Object(a.a)(s.J),i19couponAppliedMsg:()=>Object(a.a)(s.W),i19discountCoupon:()=>Object(a.a)(s.ab),i19hasCouponOrVoucherQn:()=>Object(a.a)(s.yb),i19invalidCouponMsg:()=>Object(a.a)(s.Ib),i19campaignAppliedMsg:()=>Object(a.a)(s.y),canAddCoupon(){return!this.couponCode||!this.isCouponApplied||this.couponCode!==this.localCouponCode}},methods:{fixAmount(){const t=this.amount||{subtotal:this.ecomCart.data.subtotal};this.localAmountTotal=(t.subtotal||0)+(t.freight||0)},parseDiscountOptions(t=[]){let e=0;if(t.length){let i,s;t.forEach((t=>{const{validated:a,error:n,response:r}=t;if(a&&!n){const a=r.discount_rule;if(a){const s=a.extra_discount.value;e>s||(e=s,i={app_id:t.app_id,...a})}else r.invalid_coupon_message&&(s=r.invalid_coupon_message);this.canAddFreebieItems&&(c=this.ecomCart,l=r.freebie_product_ids,Array.isArray(l)&&l.forEach((t=>{c.data.items.find((e=>e.product_id===t))||Object(o.g)({url:"/products/".concat(t,".json")}).then((({data:e})=>{c.addProduct({...e,flags:["freebie","__tmp"]},null,l.reduce(((e,i)=>i===t?e+1:e),0))})).catch(console.error)})))}var c,l})),e?(this.localCouponCode?(this.$emit("update:coupon-code",this.localCouponCode),this.alertText=this.i19couponAppliedMsg):this.alertText=this.i19campaignAppliedMsg,this.$emit("set-discount-rule",i),this.alertVariant="info"):(this.localCouponCode?(this.alertText=s||this.i19invalidCouponMsg,this.alertVariant="warning"):this.alertText=null,this.$emit("set-discount-rule",{}))}},fetchDiscountOptions(t={}){if(this.isLoading=!0,this.ecomPassport.checkLogin()){const e=this.ecomPassport.getCustomer();t.customer={_id:e._id},e.display_name&&(t.customer.display_name=e.display_name)}Object(o.c)({url:"/apply_discount.json",method:"POST",data:{...this.modulesPayload,amount:{subtotal:this.localAmountTotal,...this.amount,total:this.localAmountTotal,discount:0},items:this.ecomCart.data.items,...t}}).then((({data:t})=>this.parseDiscountOptions(t.result))).catch((t=>{console.error(t),this.alertVariant="danger",this.alertText=Object(a.a)(s.lb)})).finally((()=>{this.isLoading=!1}))},submitCoupon(t){if(t||this.canAddCoupon){const{localCouponCode:t}=this,e={discount_coupon:t};this.fetchDiscountOptions(e)}},updateDiscount(t=!0){this.couponCode?!t&&this.isCouponApplied||this.submitCoupon(t):(t||!this.isUpdateSheduled&&this.amount&&this.amount.total)&&this.fetchDiscountOptions()}},watch:{couponCode(t){t!==this.couponCode&&(this.localCouponCode=t,t&&!this.isFormVisible&&(this.isFormVisible=!0))},isFormAlwaysVisible(t){t&&(this.isFormVisible=!0)},isFormVisible(t){t&&this.$nextTick((()=>{this.$refs.input.focus()}))},localAmountTotal(t,e){null!==e&&Math.abs(t-e)>.01&&!this.isUpdateSheduled&&(this.isUpdateSheduled=!0,this.$nextTick((()=>{setTimeout((()=>{this.updateDiscount(),this.isUpdateSheduled=!1}),600)})))},amount:{handler(){this.fixAmount()},deep:!0}},mounted(){this.fixAmount(),this.updateDiscount(!1)}},u=(i(326),i(53)),d=Object(u.a)(l,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"discount-applier"},[t.hasCouponInput?[i("transition-group",{attrs:{"enter-active-class":"animated fadeInDown","leave-active-class":"animated position-absolute fadeOutUp"}},[t.isFormVisible?i("form",{key:"form",staticClass:"discount-applier__form",on:{submit:function(e){return e.preventDefault(),t.submitCoupon(e)}}},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"discount-applier-coupon"}},[t._v(" "+t._s(t.i19discountCoupon)+" ")]),i("div",{staticClass:"input-group"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.localCouponCode,expression:"localCouponCode"}],ref:"input",staticClass:"form-control discount-applier__input",attrs:{type:"text",id:"discount-applier-coupon",required:"",readonly:t.isLoading,placeholder:t.i19code,"aria-label":t.i19code},domProps:{value:t.localCouponCode},on:{input:function(e){e.target.composing||(t.localCouponCode=e.target.value)}}}),i("div",{staticClass:"input-group-append"},[t.isLoading?i("span",{staticClass:"input-group-text"},[i("span",{staticClass:"spinner-grow spinner-grow-sm",attrs:{role:"status"}}),i("span",{staticClass:"sr-only"},[t._v("Loading...")])]):t.canAddCoupon?i("button",{key:"add",staticClass:"btn btn-outline-secondary",attrs:{type:"submit"}},[t._v(" "+t._s(t.i19add)+" ")]):i("button",{key:"applied",staticClass:"btn btn-outline-success",attrs:{disabled:"",type:"button"}},[i("i",{staticClass:"fas fa-check-circle"})])])])])]):i("div",{key:"button"},[t.isAttentionWanted?i("h6",{staticClass:"discount-applier__intro"},[t._v(" "+t._s(t.i19hasCouponOrVoucherQn)+" ")]):t._e(),i("button",{staticClass:"discount-applier__coupon-btn btn btn-sm",class:"btn-"+(t.isAttentionWanted?"secondary":"light"),attrs:{type:"button"},on:{click:function(e){e.preventDefault(),t.isFormVisible=!t.isFormVisible}}},[i("i",{staticClass:"fas fa-tag mr-1"}),t._v(" "+t._s(t.i19addDiscountCoupon)+" ")])])])]:t._e(),i("a-alert",{key:"alert-"+t.alertVariant,attrs:{"can-show":!t.isLoading&&Boolean(t.alertText),variant:t.alertVariant},on:{dismiss:function(e){t.alertText=null}}},[t._v(" "+t._s(t.alertText)+" ")])],2)}),[],!1,null,null,null);e.a=d.exports},301:function(t,e,i){"use strict";i(260),i(5);var s=i(28),a=i(40),o=i(84),n=i(4),r=i(67),c=i(9),l=i(1),u=i(253),d={name:"RecommendedItems",components:{ProductCard:i(191).a},props:{pageSize:{type:Number,default:l.isMobile?2:4},sortOrder:{type:String,default:"sales"},canLoadMore:{type:Boolean,default:!0},rowClassName:{type:String,default:"row no-gutters"},colClassName:{type:String,default:"col-6 col-md-4 col-lg-3"},productCardProps:{type:Object,default:()=>({isSmall:!0,buyText:Object(a.a)(s.g),installmentsOption:{},discountOption:{}})},ecomCart:{type:Object,default:()=>c.a}},data:()=>({ecomSearch:(new r.a).mergeFilter({range:{quantity:{gt:0}}}).mergeFilter({term:{available:!0}}),pageNumber:1,items:[]}),computed:{i19seeMore:()=>Object(a.a)(s.gd),i19weRecommendToYou:()=>Object(a.a)(s.Id)},methods:{fetchItems(){delete this.ecomSearch.dsl.aggs,this.ecomSearch.setPageNumber(this.pageNumber).fetch().then((()=>{this.items=this.items.concat(this.ecomSearch.getItems()),this.totalCount=this.ecomSearch.getTotalCount(),this.totalCount&&this.$emit("recommend-items",{items:this.items,totalCount:this.totalCount})}))}},created(){const t=(e="recommended")=>{const i=[],s=this.ecomCart.data.items.sort(((t,e)=>t.quantity>e.quantity?-1:1));for(let t=0;t<s.length&&t<=4;t++)i.push(Object(n.b)({url:"/products/".concat(s[t]._id,"/").concat(e,".json")}));Promise.allSettled(i).then((i=>{const s=[];i.forEach((({status:t,value:e})=>{"fulfilled"===t&&Object(o.a)(e.data).forEach((t=>{s.includes(t)||this.ecomCart.data.items.find((e=>e.product_id===t))||s.push(t)}))})),s.length?(this.ecomSearch.setProductIds(s.slice(0,24)),this.fetchItems()):"recommended"===e&&t("related")}))};Object(u.a)((()=>{t()}))},watch:{pageSize:{handler(t){this.ecomSearch.setPageSize(t)},immediate:!0},sortOrder:{handler(t){this.ecomSearch.setSortOrder(t)},immediate:!0},pageNumber(){this.fetchItems()}}},p=(i(328),i(53)),h=Object(p.a)(d,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"recommended-items"},[i("transition",{attrs:{"enter-active-class":"animated fadeIn"}},[t.items.length?i("div",[i("div",{staticClass:"recommended-items__title"},[t._t("title",[i("p",{staticClass:"lead"},[t._v(" "+t._s(t.i19weRecommendToYou)+" ")])])],2),i("div",{class:t.rowClassName},t._l(t.items,(function(e){return i("div",{key:e._id,class:t.colClassName},[t._t("item",[i("product-card",t._b({attrs:{product:e,"is-loaded":!0}},"product-card",t.productCardProps,!1))],null,{item:e})],2)})),0),t.canLoadMore?i("div",{staticClass:"recommended-items__load-more"},[t.totalCount>=t.pageSize*(t.pageNumber+1)?i("button",{staticClass:"btn btn-sm btn-outline-secondary",on:{click:function(e){t.pageNumber++}}},[i("i",{staticClass:"fas fa-plus mr-1"}),t._v(" "+t._s(t.i19seeMore)+" ")]):t._e()]):t._e()]):t._e()])],1)}),[],!1,null,null,null);e.a=h.exports},326:function(t,e,i){"use strict";i(281)},327:function(t,e,i){(e=i(166)(!1)).push([t.i,".discount-applier{max-width:30rem}.discount-applier__intro{color:var(--secondary)}.discount-applier .alert,.discount-applier__form{margin-top:var(--spacer-3)}.discount-applier .alert{font-size:var(--font-size-sm)}.discount-applier__input{max-width:200px}",""]),t.exports=e},328:function(t,e,i){"use strict";i(282)},329:function(t,e,i){(e=i(166)(!1)).push([t.i,".recommended-items__title{text-align:center}.recommended-items__load-more{text-align:center;margin-bottom:var(--spacer-3)}.recommended-items .row{justify-content:space-around}.recommended-items .product-card{margin-bottom:var(--spacer-2)}.recommended-items .product-card__buy{opacity:1;position:static;display:block}",""]),t.exports=e},70:function(t,e,i){"use strict";const s="undefined"!=typeof document&&document.documentMode,a={rootMargin:"0px",threshold:0,load(t){if("picture"===t.nodeName.toLowerCase()){let e=t.querySelector("img"),i=!1;null===e&&(e=document.createElement("img"),i=!0),s&&t.getAttribute("data-iesrc")&&(e.src=t.getAttribute("data-iesrc")),t.getAttribute("data-alt")&&(e.alt=t.getAttribute("data-alt")),i&&t.append(e)}if("video"===t.nodeName.toLowerCase()&&!t.getAttribute("data-src")&&t.children){const e=t.children;let i;for(let t=0;t<=e.length-1;t++)i=e[t].getAttribute("data-src"),i&&(e[t].src=i);t.load()}t.getAttribute("data-poster")&&(t.poster=t.getAttribute("data-poster")),t.getAttribute("data-src")&&(t.src=t.getAttribute("data-src")),t.getAttribute("data-srcset")&&t.setAttribute("srcset",t.getAttribute("data-srcset"));let e=",";if(t.getAttribute("data-background-delimiter")&&(e=t.getAttribute("data-background-delimiter")),t.getAttribute("data-background-image"))t.style.backgroundImage=`url('${t.getAttribute("data-background-image").split(e).join("'),url('")}')`;else if(t.getAttribute("data-background-image-set")){const i=t.getAttribute("data-background-image-set").split(e);let s=i[0].substr(0,i[0].indexOf(" "))||i[0];s=-1===s.indexOf("url(")?`url(${s})`:s,1===i.length?t.style.backgroundImage=s:t.setAttribute("style",(t.getAttribute("style")||"")+`background-image: ${s}; background-image: -webkit-image-set(${i}); background-image: image-set(${i})`)}t.getAttribute("data-toggle-class")&&t.classList.toggle(t.getAttribute("data-toggle-class"))},loaded(){}};function o(t){t.setAttribute("data-loaded",!0)}const n=t=>"true"===t.getAttribute("data-loaded"),r=(t,e=document)=>t instanceof Element?[t]:t instanceof NodeList?t:e.querySelectorAll(t);e.a=function(t=".lozad",e={}){const{root:i,rootMargin:s,threshold:c,load:l,loaded:u}=Object.assign({},a,e);let d;"undefined"!=typeof window&&window.IntersectionObserver&&(d=new IntersectionObserver(((t,e)=>(i,s)=>{i.forEach((i=>{(i.intersectionRatio>0||i.isIntersecting)&&(s.unobserve(i.target),n(i.target)||(t(i.target),o(i.target),e(i.target)))}))})(l,u),{root:i,rootMargin:s,threshold:c}));const p=r(t,i);for(let t=0;t<p.length;t++)(h=p[t]).getAttribute("data-placeholder-background")&&(h.style.background=h.getAttribute("data-placeholder-background"));var h;return{observe(){const e=r(t,i);for(let t=0;t<e.length;t++)n(e[t])||(d?d.observe(e[t]):(l(e[t]),o(e[t]),u(e[t])))},triggerLoad(t){n(t)||(l(t),o(t),u(t))},observer:d}}}}]);
//# sourceMappingURL=chunk.6275da85286c6d16f48c.js.map