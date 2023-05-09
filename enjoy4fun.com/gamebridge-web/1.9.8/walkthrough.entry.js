(()=>{var e={468:(e,t,a)=>{e.exports=a.p+"assets/facebook.svg"},639:(e,t,a)=>{e.exports=a.p+"assets/instagram.svg"},981:(e,t,a)=>{e.exports=a.p+"assets/pinterest.svg"},371:(e,t,a)=>{e.exports=a.p+"assets/telegram.svg"},509:(e,t,a)=>{e.exports=a.p+"assets/tiktok.svg"},876:(e,t,a)=>{e.exports=a.p+"assets/twitter.svg"},867:(e,t,a)=>{e.exports=a.p+"assets/whatsapp.svg"},559:(e,t,a)=>{e.exports=a.p+"assets/youtube.svg"},857:(e,t,a)=>{e.exports=a.p+"assets/contact-me.svg"},125:(e,t,a)=>{e.exports=a.p+"assets/privacy.svg"}},t={};function a(n){if(t[n])return t[n].exports;var r=t[n]={exports:{}};return e[n](r,r.exports,a),r.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.p="/gamebridge-web/",(()=>{"use strict";const e=React;var t=a.n(e);const n=ReactDOM;var r=a.n(n);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const o="/gamebridge/v1",c="gamebridge-uid",l="utm_source",i="game-bridge-session-id",m="ads-tag-sdk";function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}const g=e=>e.replace(/^\?/,"").split("&").reduce(((e,t)=>{let[a,n=""]=t.split("=");return a?d(d({},e),{},{[a]:n}):e}),{});let p;const h=()=>{if(p)return p;const e=navigator.userAgent,t=/(?:Windows Phone)/.test(e),a=/(?:SymbianOS)/.test(e)||t,n=/(?:Android)/.test(e),r=/(?:Firefox)/.test(e),s=/(?:iPad|PlayBook)/.test(e)||n&&!/(?:Mobile)/.test(e)||r&&/(?:Tablet)/.test(e),o=/(?:iPhone)/.test(e)&&!s;return p={isTablet:s,isPhone:o,isAndroid:n,isPC:!(o||n||a||s)},p};let f;const y=()=>{if(f)return f;try{let e=navigator.userAgent.toLowerCase().match(/(msie|firefox|chrome|opera|version|safari).*?([\d.]+)/)[1].replace(/version/,"safari");return-1!==navigator.userAgent.toLowerCase().indexOf("edg")&&(e="edge"),f=e,f}catch(e){return f="",f}},w=()=>window.localStorage.getItem(c),E=()=>new Promise((e=>{let t=w();if(t)return e(t);const a=setInterval((()=>{t=w(),t&&(clearInterval(a),e(t))}),50)})),v=()=>window.localStorage.getItem("gamebridge-tid"),b=(e,t,a,n)=>{let r;if("number"==typeof t&&(r=t),"string"==typeof t)switch(t){case"small":r=130;break;case"large":default:r=280;break;case"oversized":r=430}a||n||(n=".jpeg"),n&&(e=e.replace(".webp",n));const{imgDomain:s}=k();return`${s}/image/${r}*${r}/${e}`},P=()=>{const e=g(window.location.search);e[l]&&window.localStorage.setItem(l,e[l])},O=()=>{const e=h(),t=e.isPhone||e.isAndroid;return new Promise(((e,a)=>{let n=document.querySelector("#ads-tag-sdk");if(n)return e(null);const{siteId:r,zoneMap:s}=k();n=document.createElement("script"),n.src="https://sdk.enjoy4fun.com/v1/ads-tag.js",n.id=m,n.setAttribute("data-site-id",r),n.onload=function(){window.addEventListener("beforeunload",(e=>{h().isPC&&(document.querySelector("[data-jump-page]").style.display="block",window.usePageshowEvent||(window.usePageshowEvent=!0,window.addEventListener("pageshow",(function(e){e.persisted&&(document.querySelector("[data-jump-page]").style.display="none")}))))})),window.adsTag.renderInterstitial(t?s.interstitial_mobile:s.interstitial_pc),s.anchor_mobile_bottom&&window.adsTag.renderAnchor(s.anchor_mobile_bottom),e(null)},n.onerror=()=>{a()},window.document.querySelector("head").appendChild(n)}))};function k(){return window.APP_PROPS.seoEnvMap}const S=e=>{try{const t=document.cookie.split("; "),a={};return t.forEach((e=>{const t=e.split("=");a[t[0]]=t[1]})),a[e]||""}catch(e){return console.error("cookie error",e),""}};const N=e=>{if(!e)return"";return`//video.enjoy4fun.com/${e.split(".")[0]}/game.m3u8`},j=()=>{let e=Date.now();return"undefined"!=typeof performance&&"function"==typeof performance.now&&(e+=performance.now()),"xxxxxxxx-xxxx-4fun-xxxx-xxxxxxxxxxxx".replace(/[x]/g,(function(t){const a=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"===t?a:3&a|8).toString(16)}))},x=()=>{let e=window.sessionStorage.getItem(i);return e||(e=`${(new Date).getTime()}-${j()}`,window.sessionStorage.setItem(i,e),e)},$=(e,t,a)=>{let n;n=a?document.querySelector(".search-content-main"):window;setTimeout((()=>{let r=[],s=document.querySelectorAll(e);const o=()=>{if(r.length===s.length)return void n.removeEventListener("scroll",o);let e=[],c=a?n.offsetHeight:n.innerHeight,l=a?n.scrollTop:n.scrollY;s.forEach((t=>{const a=t.getAttribute("data-size")||"small",n=t.getAttribute("data-grid-mark"),s=t.getAttribute("data-id");if(-1!==r.indexOf(s))return;const o=t.offsetTop,i=o+t.offsetHeight;o>=l&&i<=l+c&&(r.push(s),e.push({id:s,size:a,index:n}))})),e.length&&t(e)};o(),n.addEventListener("scroll",o)}))},_=e=>{function t(e){return e<10?"0"+e:e}let a;return e.getFullYear()+"-"+t(e.getMonth()+1)+"-"+t(e.getDate())+" "+t(e.getHours())+":"+t(e.getMinutes())+":"+t(e.getSeconds())+"."+((a=e.getMilliseconds())<10?"00"+a:a<100?"0"+a:a)},C=e=>{const t=document.querySelector("body");e?t.setAttribute("no-scroll",""):t.removeAttribute("no-scroll")},A=e=>e.map((e=>({id:e.game_id,icon:e.base_icon,path:e.game_path,name:e.game_name,icon_video:e.icon_video,new:e.new})));let I;var T,M,z,D,L=a(125),q=a.n(L),H=a(857),F=a.n(H),R=a(559),G=a.n(R),W=a(639),Y=a.n(W),J=a(876),U=a.n(J),V=a(509),B=a.n(V),K=a(468),Q=a.n(K);function X(a){const{envMap:n,language:r}=a,{languageList:s=[],imgDomain:o}=n,[c,l]=(0,e.useState)(!1),[i,m]=(0,e.useState)(null);(0,e.useEffect)((()=>(m(window.location.pathname),()=>{document.querySelector("body").removeAttribute("no-scroll")})),[]);const u=e=>{l(e),C(e)},d=e=>{const t=i.split("/");return t.some((e=>e===r))?(t[1]=e,t.join("/")):`/${e}${i}`};let g,p;return s.some((e=>{if(e.code===r)return g=e.icon,p=e.name,!0})),t().createElement("section",{className:"language-wrap"},t().createElement("div",{onClick:()=>u(!c),className:"language-icon"},t().createElement("img",{src:`${o}/image/36*36/${g}`}),t().createElement("p",null,p)),(e=>{if(!c||!i)return null;return t().createElement(t().Fragment,null,t().createElement("div",{className:"language-model"},t().createElement("div",{className:"language-title"},T||(T=t().createElement("h2",{className:"language-title"},"Select your language")),t().createElement(Me,{type:"delete",className:"close-action",onClick:()=>(l(!1),void C(!1))})),t().createElement("div",{className:"language-list"},s.map((e=>t().createElement("a",{href:d(e.code)},t().createElement("img",{src:`${o}/image/36*36/${e.icon}`,alt:""}),t().createElement("h3",null,e.name)))))),t().createElement("div",{className:"close-mask",onClick:()=>l(!1)}))})())}function Z(a){const{language:n,envMap:r}=a,[s,o]=(0,e.useState)(!1);return(0,e.useEffect)((()=>{window.addEventListener("scroll",(()=>{const e=document.body.offsetHeight,t=document.documentElement.scrollTop||document.body.scrollTop,a=window.innerHeight;o(a+t>e-40)}),!1)}),[]),t().createElement("section",{className:"footer","data-show":s},t().createElement("ul",{className:"footer-menu"},t().createElement("li",null,t().createElement("a",{href:`/${n}/policy.html`,className:"menu-privacy"},M||(M=t().createElement("img",{src:q(),loading:"lazy"})),"Privacy Policy")),t().createElement("li",null,t().createElement("a",{href:`/${n}/contact.html`,className:"menu-contact-me"},z||(z=t().createElement("img",{src:F(),loading:"lazy"})),"Contact Me")),t().createElement("li",null,t().createElement(X,{language:n,envMap:r}))),D||(D=t().createElement("div",{className:"footer-link"},t().createElement("div",{className:"link-bg"}),t().createElement("ul",null,t().createElement("li",null,t().createElement("a",{className:"youtube",target:"_blank",href:"https://www.youtube.com/channel/UCnKg8AQyd8WgsMevcmGvabA"},t().createElement("img",{src:G(),loading:"lazy"}))),t().createElement("li",null,t().createElement("a",{className:"instagram",target:"_blank",href:"https://www.instagram.com/enjoy4fun_official/"},t().createElement("img",{src:Y(),loading:"lazy"}))),t().createElement("li",null,t().createElement("a",{className:"twitter",target:"_blank",href:"https://twitter.com/enjoy4fun1"},t().createElement("img",{src:U(),loading:"lazy"}))),t().createElement("li",null,t().createElement("a",{className:"tiktok",target:"_blank",href:"https://www.tiktok.com/@enjoy4fun.com"},t().createElement("img",{src:B(),loading:"lazy"}))),t().createElement("li",null,t().createElement("a",{className:"facebook",target:"_blank",href:"https://www.facebook.com/Enjoy4fun-105558892193507"},t().createElement("img",{src:Q(),loading:"lazy"})))))))}const ee=axios;var te=a.n(ee);function ae(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function ne(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ae(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ae(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}const re=te().create();re.interceptors.request.use((e=>{const t=w(),a=v();return t&&(e.headers.uid=t),a&&(e.headers.tid=a),"/uid"===e.url?Promise.resolve(e):new Promise((t=>{E().then((a=>{e.headers.uid=a,t(e)}))}))})),re.interceptors.response.use((e=>e.data),(e=>{if(te().isCancel(e))return;let t="";var a,n,r,s;e.response?t=(null===(a=e.response)||void 0===a||null===(n=a.data)||void 0===n?void 0:n.message)||(null===(r=e.response)||void 0===r||null===(s=r.data)||void 0===s?void 0:s.msg)||"服务器响应错误":t=e.request?e.request||"请求发生错误":e.message||"本地错误";throw Error(t)}));const se=new Proxy(re,{get(e,t){const{apiDomain:a}=k();return re.defaults.baseURL=`${a}${o}`,e[t]}});new Proxy(re,{get(e,t){const{apiDomain:a}=k();return re.defaults.baseURL=`${a}/gamebridge-user/v1`,e[t]}});function oe(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function ce(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?oe(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):oe(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}const le=e=>new Promise(((t,a)=>{se.get(`/site/${k().siteId}/games/new`,{params:e}).then((e=>{const{data:a=[]}=e||{};e.data=A(a),t(e)})).catch((e=>{a(e)}))})),ie=e=>new Promise(((t,a)=>{se.get(`/site/${k().siteId}/games`,{params:e}).then((e=>{const{data:a=[]}=e||{};e.data=A(a),t(e)})).catch((e=>{a(e)}))})),me=(e,t,a)=>{let n;return n=window.top===window?window.location.href:document.referrer,{game_id:a,event_name:e,page_url:window.location.href,custom_data:ce({cid:(I||(I=g(window.location.search).utm_source||window.localStorage.getItem("sdk-cid")||"default"),I),sessionId:x(),version:"1.9.8",referrer:n,_fbp:S("_fbp"),_fbc:S("_fbc"),utm_source:window.localStorage.getItem(l)||"3487216655"},t)}},ue=(e,t,a)=>{((e,t)=>{const{apiDomain:a}=k();E().then((n=>{const r={},s=v();s&&(r.tid=s),r.uid=n,fetch(`${a}${o}${e}`,{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",keepalive:!0,headers:r,referrerPolicy:"no-referrer",body:JSON.stringify(t)})}))})("/track",me(e,t,a))},de=(e,t)=>{((e,t)=>{const a=new Date;E().then((n=>{const r={"#app_id":"856",data:[{"#type":"track","#time":_(a),"#timestamp":a.getTime(),"#account_id":"enjoy4fun","#event_name":e,"#uuid":j(),properties:ne(ne({},t),{},{game_id:null===(o=window.APP_PROPS.seoGame)||void 0===o?void 0:o.game_id,game_name:null===(s=window.APP_PROPS.seoGame)||void 0===s?void 0:s.game_name,uid:n,"#zone_offset":0-(new Date).getTimezoneOffset()/60})}]};var s,o;fetch("https://deapi.gmoneygame.xyz/v1/wgt/report/json",{method:"POST",mode:"cors",cache:"no-cache",body:JSON.stringify(r)})}))})(e,me(e,t))},ge=classNames;var pe,he=a.n(ge);function fe(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function ye(a){var n;const{useSPA:r,language:o,game:c,style:l,campaign:i,size:m="small",index:u,type:d="",useVideo:g,system:p,callback:h}=a;if(!c)return t().createElement(Je,{useSPA:r,path:`/${o}`,className:"game-card card-wrap","data-size":m,"data-grid-mark":a.index});const{id:f,icon:w,path:E,name:v,icon_video:P}=c,[O,S]=(0,e.useState)(null),[N,j]=(0,e.useState)(null);(0,e.useEffect)((()=>{j(k().videoDomain),S("safari"!==y())}),[]);let x="";"topic"===d?x=w:null!==O&&(x=b(w,m,O));const $={};x&&($.backgroundImage=`url(${x})`);const _=()=>(x&&({}.backgroundImage=`url(${x})`),p.isAndroid||p.isPhone?null:P&&g&&N?t().createElement("video",{className:"icon-video",loop:!0,muted:!0,preload:"metadata"},t().createElement("source",{src:`${N}/${P}`,type:"video/mp4"})):n||(n=t().createElement("h3",null,t().createElement("span",null,v))));let C=E;i&&(C=`${E}?utm_campaign=${i}`);let A=m;"search"!==d&&"search-big"!==d||(A=d);const I=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?fe(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):fe(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},l);return!c.new&&x&&(I.backgroundImage=`url(${x})`),t().createElement(Je,{useSPA:r,path:`/${o}/${E}`,style:I,className:he()("game-card",c.new?"":"card-wrap"),"data-size":"small"===A?void 0:A,"data-grid-mark":u,"data-id":f,onClick:e=>((e,t)=>{const a={campaign:i,isFirstScreen:t.pageY<=window.innerHeight?"true":"false"};"function"==typeof h&&h(E),ue("GameIconClick",a,c.id)})(0,e),onMouseLeave:e=>(e=>{const t=e.currentTarget.querySelector("video");t&&t.pause()})(e),onMouseEnter:e=>(e=>{const t=e.currentTarget.querySelector("video");t&&(t.currentTime=0,t.play())})(e)},c.new?t().createElement(t().Fragment,null,t().createElement("p",{className:"card-wrap",style:$},_()),pe||(pe=t().createElement("div",{className:"game-flag"}))):_())}const we=t().memo(ye,((e,t)=>Object.keys(e).every((a=>e[a]===t[a]))));var Ee,ve,be,Pe,Oe,ke,Se,Ne,je;let xe,$e;function _e(a){const{useSPA:n,language:r}=a,[s,o]=(0,e.useState)(null),[l,i]=(0,e.useState)(null),[m,u]=(0,e.useState)(null),[d,g]=(0,e.useState)(!1),[p,f]=(0,e.useState)(!1),[y,E]=(0,e.useState)(!1),[v,b]=(0,e.useState)(null),[P,O]=(0,e.useState)(""),[S,N]=(0,e.useState)(null),j=(0,e.useRef)(null);if((0,e.useEffect)((()=>{var e;b(h()),w()?m||new Promise(((e,t)=>{se.get("/recentgames").then((t=>{const{data:a=[]}=t||{};t.data=A(a),e(t)})).catch((e=>{t(e)}))})).then((e=>{u(e.data)})):se.get("/uid").then((e=>{var t;t=e.data,window.localStorage.setItem(c,t)})),s||se.get(`/site/${k().siteId}/categorys`).then((e=>{o(e.data)})),l||(e={page_size:12},new Promise(((t,a)=>{se.get(`/site/${k().siteId}/weekgames`,{params:e}).then((e=>{const{data:a=[]}=e||{};e.data=A(a),t(e)})).catch((e=>{a(e)}))}))).then((e=>{i(e.data)}))}),[]),(0,e.useEffect)((()=>{d?($(".search-content-main .popular-this-week .game-card",(e=>{ue("GameImpression",{impressionGameList:JSON.stringify(e),campaign:"popular-this-week"})}),!0),$(".search-content-main .recently-played .game-card",(e=>{ue("GameImpression",{impressionGameList:JSON.stringify(e),campaign:"recently-played"})}),!0)):($e="",O(""))}),[d]),!v)return null;const x=e=>{const t=!!e.trim()&&e.trim()===$e;if(ue("TriggerSearch",{searchValue:e,repeatedText:t.toString()}),t)return;$e=e.trim(),f(!0);($e?ie:le)({term:$e,page_size:24}).then((e=>{N(e.data),f(!1),document.querySelector(".search-content-main").scrollTo(0,0),$(".search-content-main .search-result .game-card",(e=>{ue("GameImpression",{impressionGameList:JSON.stringify(e),campaign:"search-result"})}),!0)}))},_=e=>{const t=e.currentTarget.value;O(t),xe&&clearTimeout(xe),xe=setTimeout((()=>{clearTimeout(xe),x(t)}),500)};if(!v)return Ee||(Ee=t().createElement("div",{className:"game-search"},t().createElement("h1",{title:"Enjoy4fun"},"Enjoy4fun")));const C=e=>{y||E(!0),ue(e?"OpenSearch":"CloseSearch"),g(e),e&&setTimeout((()=>{j.current&&j.current.focus()}),100),e||N(null)},I=()=>s?t().createElement("div",{className:"category"},s.map((e=>t().createElement("a",{key:e.id,href:`/${r}/games/${e.path}`,onClick:e=>(e=>{const t={campaign:"hot",isFirstScreen:e.pageY<=window.innerHeight?"true":"false"};ue("CategoryIconClick",t)})(e)},e.name)))):null,T=()=>y?t().createElement(t().Fragment,null,p?Oe||(Oe=t().createElement(Re,{className:"search-loading"})):null,t().createElement("div",{className:"search-content-main"},S?0===S.length?ve||(ve=t().createElement("div",{className:"search-result"},t().createElement("p",{className:"void-title"},"No search results yet"),t().createElement("p",{className:"void-text"},"Try searching for something else?"))):t().createElement("div",{className:"search-result"},t().createElement("p",{className:"result-title"},S.length," result:"),t().createElement("div",{className:"result-list"},S.map(((e,a)=>{const s=e.name.toLowerCase()===P.toLowerCase();return t().createElement(we,{useSPA:n,style:(v.isPC||v.isTablet)&&s?{gridArea:"1/1/3/3"}:{},language:r,game:e,key:e.id,type:s?"search-big":"search",size:s?"large":"small",index:a,campaign:`search&value=${P}`,callback:()=>g(!1),system:v})})))):null,I(),l&&l.length?t().createElement("div",{className:"popular-this-week"},be||(be=t().createElement("h2",{className:"popular-this-week-title"},"Popular this week")),t().createElement("div",{className:"popular-this-week-list"},l.map(((e,a)=>t().createElement(we,{useSPA:n,language:r,game:e,key:e.id,type:"search",index:a,campaign:"week-list",callback:()=>g(!1),system:v}))))):null,m&&m.length?t().createElement("div",{className:"recently-played"},Pe||(Pe=t().createElement("h2",{className:"recently-played-title"},"Recently played")),t().createElement("div",{className:"recently-played-list"},m.map(((e,a)=>t().createElement(we,{useSPA:n,language:r,game:e,key:e.id,type:"search",index:a,campaign:"played-list",callback:()=>g(!1),system:v}))))):null)):null;return v.isAndroid||v.isPhone?t().createElement("div",{className:"game-search"},t().createElement("a",{className:"logo",href:`/${r}/`,onClick:()=>ue("LogoClick")},ke||(ke=t().createElement("h1",{title:"Enjoy4fun"},"Enjoy4fun"))),t().createElement("div",{className:"home-and-search"},t().createElement("a",{href:`/${r}/`,className:"hs-ele-home",onClick:()=>ue("HomeClick")},t().createElement(Me,{type:"home",style:{fontSize:24}})),t().createElement("span",{className:"hs-ele-search",onMouseDown:()=>C(!0)},t().createElement(Me,{type:"search",style:{fontSize:24}}))),d?t().createElement("div",{className:"search-content"},t().createElement("div",{className:"search-content-action"},t().createElement("div",{className:"search-go-back",onClick:()=>{C(!1)}},Se||(Se=t().createElement(Me,{type:"left"}))),t().createElement("div",{className:"search-main"},t().createElement("input",{className:"search-input",placeholder:"Search",ref:j,value:P,onChange:_}),t().createElement("button",{className:"search-action",onClick:()=>x(P)},t().createElement(Me,{type:"search",style:{fontSize:20,color:"#fff"}})))),T()):null):d?t().createElement("div",{className:"game-search pc-expand"},t().createElement("div",{className:"search-main"},t().createElement("input",{className:"search-input",placeholder:"Search",value:P,ref:j,onChange:_}),P?t().createElement(Me,{className:"clear-search",type:"delete",onClick:()=>{O("")}}):null,t().createElement("button",{className:"search-action",onClick:()=>x(P)},t().createElement(Me,{type:"search",style:{fontSize:32,color:"#fff"}}))),je||(je=t().createElement("div",{className:"search-bg"})),d?t().createElement("div",{className:"content-bg",onClick:()=>C(!1)}):null,t().createElement("div",{className:"search-content","data-show":d},T())):t().createElement("div",{className:"game-search pc-normal"},t().createElement("a",{className:"logo",href:`/${r}/`,onClick:()=>ue("LogoClick")},Ne||(Ne=t().createElement("h1",{title:"Enjoy4fun"},"Enjoy4fun"))),t().createElement("div",{className:"home-and-search"},t().createElement("a",{href:`/${r}/`,className:"hs-ele-home",onClick:()=>ue("HomeClick")},t().createElement(Me,{type:"home",style:{fontSize:24}})),t().createElement("span",{className:"hs-ele-search",onMouseDown:()=>C(!0)},t().createElement(Me,{type:"search",style:{fontSize:24}}))))}function Ce(a){const{language:n,walkThrough:r,system:s}=a,{game_name:o,thumbnail:c,video_id:l,duration:i,game_path:m}=r,[u,d]=(0,e.useState)(null),[g,p]=(0,e.useState)(!1);(0,e.useEffect)((()=>{d("safari"!==y())}),[]);return t().createElement("a",{className:"walk-through-card",href:`/${n}/${m}`,onClick:()=>(e=>{window.sessionStorage.setItem("play_video_flag",e)})(m),onMouseLeave:e=>{s.isPC&&p(!1)},onMouseEnter:e=>{s.isPC&&p(!0)}},t().createElement("p",null,t().createElement("img",{src:b(c,320,u),alt:o,loading:"lazy"}),g?t().createElement(We,{className:"video-preview",url:N(l),system:s,muted:!0}):null,t().createElement("span",{className:"duration"},function(e){if(!e||e<=0)return"00:00";const t=Math.floor(e/60/60);e-=60*t*60;const a=Math.floor(e/60),n=e-60*a,r=a<10?`0${a}`:`${a}`,s=n<10?`0${n}`:`${n}`;return 0===t?`${r}:${s}`:`${t<10?`0${t}`:`${t}`}:${r}:${s}`}(i))),t().createElement("h3",null,o))}function Ae(){return Ae=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},Ae.apply(this,arguments)}function Ie(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const Te=["type","style","className","onClick","id"];function Me(e){const{type:a,style:n,className:r="",onClick:s=(()=>{}),id:o}=e,c=Ie(e,Te);return t().createElement("i",Ae({id:o,className:he()("iconfont",`icon-${a}`,r),style:n},c,{onClick:s}))}function ze(e){const{language:a,children:n,module:r,showMore:s,eventName:o,campaign:c}=e;let l=e.url;return c&&(l=`${l}?utm_campaign=${c}`),t().createElement("div",{className:"module-wrap"},t().createElement("h2",{className:"module-header","data-module":r},t().createElement("span",null,n)),s&&t().createElement("a",{className:"more",href:`/${a}/${l}`,onClick:()=>ue(o)},"More"))}var De;function Le(e){var a,n,r,s,o;const{language:c,game_name:l="",description:i="",game_play:m="",categorys:u=[],seoAbout:d}=e;return t().createElement("section",{className:"about-area"},De||(De=t().createElement(ze,{module:"blue"},"About Enjoy4fun")),t().createElement("div",{className:"about-content"},l?t().createElement(t().Fragment,null,a||(a=t().createElement("h2",null,l)),n||(n=t().createElement("h3",null,"About ",l)),r||(r=t().createElement("p",null,i)),s||(s=t().createElement("h3",null,"How to play ",l," online?")),o||(o=t().createElement("p",null,m)),t().createElement("div",{className:"category-list"},u.map(((e,a)=>t().createElement("a",{key:a,href:`/${c}/games/${e.path}`,onClick:e=>{(e=>{const t={campaign:"game",isFirstScreen:e.pageY<=window.innerHeight?"true":"false"};ue("CategoryIconClick",t)})(e)}},e.name))))):t().createElement(t().Fragment,null,t().createElement("div",{dangerouslySetInnerHTML:{__html:d.body}}))))}const qe=t().memo(Le,((e,t)=>Object.keys(e).every((a=>e[a]===t[a]))));var He,Fe;function Re(e){const{style:a,className:n,jumpPage:r,disabledBG:s}=e;return t().createElement("section",{style:a,className:he()("loading",n),"data-jump-page":r?"true":void 0},He||(He=t().createElement("div",{className:"loading-inner"})),s?null:Fe||(Fe=t().createElement("div",{className:"loading-bg"})))}function Ge(){return t().createElement(Re,{jumpPage:!0,style:{display:"none"}})}function We(a){const{className:n,url:r,system:s,muted:o}=a,[c,l]=(0,e.useState)(!1);if((0,e.useEffect)((()=>(function(){const e="react-player-id",t="hls-id";return new Promise(((a,n)=>{let r=document.querySelector("#react-player-id"),s=document.querySelector("#hls-id");if(r&&s){const e=setInterval((()=>{window.ReactPlayer&&(clearInterval(e),a(null))}),100);return}let o=!1,c=!1;const l=window.document.querySelector("body");r=document.createElement("script"),r.src="https://sdk.enjoy4fun.com/cdn/react-player/2.10.1/ReactPlayer.js",r.id=e,r.onload=function(){o=!0,o&&c&&a(null)},r.onerror=()=>{n()},l.appendChild(r),s=document.createElement("script"),s.src="https://sdk.enjoy4fun.com/cdn/hls/1.1.4/hls.min.js",s.id=t,s.onload=function(){c=!0,o&&c&&a(null)},s.onerror=()=>{n()},l.appendChild(s)}))}().then((()=>{l(!0)})),()=>{window.ReactPlayer&&window.ReactPlayer.removeCustomPlayers()})),[]),!c)return null;const i=window.ReactPlayer;return t().createElement(i,{url:r,playing:!0,width:"100%",muted:o,controls:!o,className:n,config:{file:{forceHLS:!s.isPhone}}})}a(981),a(371),a(867);const Ye=["useSPA","path","children"];function Je(e){const{useSPA:a,path:n,children:r}=e,s=Ie(e,Ye);return t().createElement("a",Ae({href:n},s),r)}const Ue={};function Ve(a){const{width:n,system:r,envMap:s}=a,{zoneMap:o}=s;if(!n)return t().createElement(t().Fragment,null);(0,e.useEffect)((()=>{O().then((()=>{const{adsTag:e}=window;window.adsTag.init({refreshAfter:e=>{de("adImpressions",e)}}),Object.keys(Ue).forEach(((t,a)=>{const{width:n,height:r,zoneId:s,videoFirst:o}=Ue[t],c=document.querySelector(`[data-ads-id="${t}"]`);e.renderAds(c,n,r,s,o)}))}))}),[]);const c=r.isPhone||r.isAndroid;return t().createElement(t().Fragment,null,c?t().createElement(t().Fragment,null):t().createElement("div",{className:"ads-area","data-ads-flag":"pc-336-280"},((e,a,n,r)=>{const s=`ads-dom-${e}`;return Ue[s]||(Ue[s]={width:a,height:n,zoneId:o[e],videoFirst:r}),t().createElement("div",{"data-ads-id":s})})("pc_pad_walkthrough_336_280",336,280)),t().createElement(t().Fragment,null))}const Be=t().memo(Ve,((e,t)=>Object.keys(e).every((a=>e[a]===t[a]))));var Ke,Qe,Xe,Ze,et;let tt=!1;function at(a){const{seoLan:n,seoWalkThroughList:r=[],seoAbout:s,seoEnvMap:o}=a,c=(0,e.useRef)(null),[l,i]=(0,e.useState)(null),[m,u]=(0,e.useState)(null);return(0,e.useEffect)((()=>{const e=h();u(e),(e=>{let t="";e.isPC&&(t="pc"),(e.isPhone||e.isAndroid)&&(t="mobile"),e.isTablet&&(t="pc"),document.querySelector("body").setAttribute("system",t)})(e),setTimeout((()=>{document.documentElement.style.setProperty("--innerHeight",`${window.innerHeight}px`)})),P(),i(c.current.offsetWidth),window.addEventListener("resize",(function(){l!==c.current.offsetWidth&&i(c.current.offsetWidth)}))}),[]),(0,e.useEffect)((()=>{l&&(tt||(de("heartbeat",{}),setInterval((()=>{document.hidden||de("heartbeat",{})}),1e4),ue("PageView",{form:navigator.standalone||window.matchMedia("(display-mode: standalone)").matches?"app":"web"}),(e=>{const t=[];window.addEventListener("scroll",(function(){let a=Math.ceil(document.body.offsetHeight/window.innerHeight),n=Math.ceil(window.scrollY/window.innerHeight)+1;1!==n&&-1===t.indexOf(n)&&window.scrollY<=document.body.offsetHeight&&(t.push(n),e(n,a))}))})(((e,t)=>{ue("PageSlip",{screen_current:e.toString(),screen_totals:t.toString()})})),tt=!0))}),[l]),t().createElement("div",{className:"walkthrough-wrap",ref:c},Ke||(Ke=t().createElement("div",{className:"bg-left"})),Qe||(Qe=t().createElement("div",{className:"bg-right"})),Xe||(Xe=t().createElement("div",{className:"bg-bottom"})),Ze||(Ze=t().createElement(Ge,null)),t().createElement("section",{className:"walkthrough-area"},t().createElement(_e,{language:n}),t().createElement(Be,{width:l,system:m,envMap:o}),et||(et=t().createElement("div",{className:"walkthrough-title"},"Walkthrough")),m&&r?r.map((e=>t().createElement(Ce,{language:n,walkThrough:e,system:m,key:e.video_id}))):null),t().createElement(qe,{seoAbout:s,language:n}),t().createElement(Z,{language:n,envMap:o}))}let nt=null;nt=document.querySelector("#root"),nt&&r().hydrate(t().createElement(at,window.APP_PROPS||{}),document.querySelector("#root"))})()})();