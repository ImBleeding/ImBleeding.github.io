(()=>{var e={468:(e,t,a)=>{e.exports=a.p+"assets/facebook.svg"},639:(e,t,a)=>{e.exports=a.p+"assets/instagram.svg"},981:(e,t,a)=>{e.exports=a.p+"assets/pinterest.svg"},371:(e,t,a)=>{e.exports=a.p+"assets/telegram.svg"},509:(e,t,a)=>{e.exports=a.p+"assets/tiktok.svg"},876:(e,t,a)=>{e.exports=a.p+"assets/twitter.svg"},867:(e,t,a)=>{e.exports=a.p+"assets/whatsapp.svg"},559:(e,t,a)=>{e.exports=a.p+"assets/youtube.svg"},857:(e,t,a)=>{e.exports=a.p+"assets/contact-me.svg"},125:(e,t,a)=>{e.exports=a.p+"assets/privacy.svg"}},t={};function a(n){if(t[n])return t[n].exports;var r=t[n]={exports:{}};return e[n](r,r.exports,a),r.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.p="/gamebridge-web/",(()=>{"use strict";const e=React;var t=a.n(e);const n=ReactDOM;var r=a.n(n);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const c="/gamebridge/v1",l="gamebridge-uid",o="game-bridge-session-id";function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}const u=e=>e.replace(/^\?/,"").split("&").reduce(((e,t)=>{let[a,n=""]=t.split("=");return a?m(m({},e),{},{[a]:n}):e}),{});let d;const g=()=>{if(d)return d;const e=navigator.userAgent,t=/(?:Windows Phone)/.test(e),a=/(?:SymbianOS)/.test(e)||t,n=/(?:Android)/.test(e),r=/(?:Firefox)/.test(e),s=/(?:iPad|PlayBook)/.test(e)||n&&!/(?:Mobile)/.test(e)||r&&/(?:Tablet)/.test(e),c=/(?:iPhone)/.test(e)&&!s;return d={isTablet:s,isPhone:c,isAndroid:n,isPC:!(c||n||a||s)},d};let p;const f=()=>window.localStorage.getItem(l),h=()=>new Promise((e=>{let t=f();if(t)return e(t);const a=setInterval((()=>{t=f(),t&&(clearInterval(a),e(t))}),50)})),y=()=>window.localStorage.getItem("gamebridge-tid");function E(){return window.APP_PROPS.seoEnvMap}const v=e=>{try{const t=document.cookie.split("; "),a={};return t.forEach((e=>{const t=e.split("=");a[t[0]]=t[1]})),a[e]||""}catch(e){return console.error("cookie error",e),""}};const b=()=>{let e=Date.now();return"undefined"!=typeof performance&&"function"==typeof performance.now&&(e+=performance.now()),"xxxxxxxx-xxxx-4fun-xxxx-xxxxxxxxxxxx".replace(/[x]/g,(function(t){const a=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"===t?a:3&a|8).toString(16)}))},w=()=>{let e=window.sessionStorage.getItem(o);return e||(e=`${(new Date).getTime()}-${b()}`,window.sessionStorage.setItem(o,e),e)},O=(e,t,a)=>{let n;n=a?document.querySelector(".search-content-main"):window;setTimeout((()=>{let r=[],s=document.querySelectorAll(e);const c=()=>{if(r.length===s.length)return void n.removeEventListener("scroll",c);let e=[],l=a?n.offsetHeight:n.innerHeight,o=a?n.scrollTop:n.scrollY;s.forEach((t=>{const a=t.getAttribute("data-size")||"small",n=t.getAttribute("data-grid-mark"),s=t.getAttribute("data-id");if(-1!==r.indexOf(s))return;const c=t.offsetTop,i=c+t.offsetHeight;c>=o&&i<=o+l&&(r.push(s),e.push({id:s,size:a,index:n}))})),e.length&&t(e)};c(),n.addEventListener("scroll",c)}))},P=e=>{function t(e){return e<10?"0"+e:e}let a;return e.getFullYear()+"-"+t(e.getMonth()+1)+"-"+t(e.getDate())+" "+t(e.getHours())+":"+t(e.getMinutes())+":"+t(e.getSeconds())+"."+((a=e.getMilliseconds())<10?"00"+a:a<100?"0"+a:a)},N=e=>{const t=document.querySelector("body");e?t.setAttribute("no-scroll",""):t.removeAttribute("no-scroll")},S=e=>e.map((e=>({id:e.game_id,icon:e.base_icon,path:e.game_path,name:e.game_name,icon_video:e.icon_video,new:e.new})));let k;var j,x,_,$,C=a(125),A=a.n(C),D=a(857),T=a.n(D),z=a(559),I=a.n(z),M=a(639),L=a.n(M),q=a(876),G=a.n(q),H=a(509),R=a.n(H),F=a(468),J=a.n(F);function Y(a){const{envMap:n,language:r}=a,{languageList:s=[],imgDomain:c}=n,[l,o]=(0,e.useState)(!1),[i,m]=(0,e.useState)(null);(0,e.useEffect)((()=>(m(window.location.pathname),()=>{document.querySelector("body").removeAttribute("no-scroll")})),[]);const u=e=>{o(e),N(e)},d=e=>{const t=i.split("/");return t.some((e=>e===r))?(t[1]=e,t.join("/")):`/${e}${i}`};let g,p;return s.some((e=>{if(e.code===r)return g=e.icon,p=e.name,!0})),t().createElement("section",{className:"language-wrap"},t().createElement("div",{onClick:()=>u(!l),className:"language-icon"},t().createElement("img",{src:`${c}/image/36*36/${g}`}),t().createElement("p",null,p)),(e=>{if(!l||!i)return null;return t().createElement(t().Fragment,null,t().createElement("div",{className:"language-model"},t().createElement("div",{className:"language-title"},j||(j=t().createElement("h2",{className:"language-title"},"Select your language")),t().createElement(je,{type:"delete",className:"close-action",onClick:()=>(o(!1),void N(!1))})),t().createElement("div",{className:"language-list"},s.map((e=>t().createElement("a",{href:d(e.code)},t().createElement("img",{src:`${c}/image/36*36/${e.icon}`,alt:""}),t().createElement("h3",null,e.name)))))),t().createElement("div",{className:"close-mask",onClick:()=>o(!1)}))})())}function U(a){const{language:n,envMap:r}=a,[s,c]=(0,e.useState)(!1);return(0,e.useEffect)((()=>{window.addEventListener("scroll",(()=>{const e=document.body.offsetHeight,t=document.documentElement.scrollTop||document.body.scrollTop,a=window.innerHeight;c(a+t>e-40)}),!1)}),[]),t().createElement("section",{className:"footer","data-show":s},t().createElement("ul",{className:"footer-menu"},t().createElement("li",null,t().createElement("a",{href:`/${n}/policy.html`,className:"menu-privacy"},x||(x=t().createElement("img",{src:A(),loading:"lazy"})),"Privacy Policy")),t().createElement("li",null,t().createElement("a",{href:`/${n}/contact.html`,className:"menu-contact-me"},_||(_=t().createElement("img",{src:T(),loading:"lazy"})),"Contact Me")),t().createElement("li",null,t().createElement(Y,{language:n,envMap:r}))),$||($=t().createElement("div",{className:"footer-link"},t().createElement("div",{className:"link-bg"}),t().createElement("ul",null,t().createElement("li",null,t().createElement("a",{className:"youtube",target:"_blank",href:"https://www.youtube.com/channel/UCnKg8AQyd8WgsMevcmGvabA"},t().createElement("img",{src:I(),loading:"lazy"}))),t().createElement("li",null,t().createElement("a",{className:"instagram",target:"_blank",href:"https://www.instagram.com/enjoy4fun_official/"},t().createElement("img",{src:L(),loading:"lazy"}))),t().createElement("li",null,t().createElement("a",{className:"twitter",target:"_blank",href:"https://twitter.com/enjoy4fun1"},t().createElement("img",{src:G(),loading:"lazy"}))),t().createElement("li",null,t().createElement("a",{className:"tiktok",target:"_blank",href:"https://www.tiktok.com/@enjoy4fun.com"},t().createElement("img",{src:R(),loading:"lazy"}))),t().createElement("li",null,t().createElement("a",{className:"facebook",target:"_blank",href:"https://www.facebook.com/Enjoy4fun-105558892193507"},t().createElement("img",{src:J(),loading:"lazy"})))))))}const B=axios;var V=a.n(B);function W(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function K(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?W(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):W(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}const Q=V().create();Q.interceptors.request.use((e=>{const t=f(),a=y();return t&&(e.headers.uid=t),a&&(e.headers.tid=a),"/uid"===e.url?Promise.resolve(e):new Promise((t=>{h().then((a=>{e.headers.uid=a,t(e)}))}))})),Q.interceptors.response.use((e=>e.data),(e=>{if(V().isCancel(e))return;let t="";var a,n,r,s;e.response?t=(null===(a=e.response)||void 0===a||null===(n=a.data)||void 0===n?void 0:n.message)||(null===(r=e.response)||void 0===r||null===(s=r.data)||void 0===s?void 0:s.msg)||"服务器响应错误":t=e.request?e.request||"请求发生错误":e.message||"本地错误";throw Error(t)}));const X=new Proxy(Q,{get(e,t){const{apiDomain:a}=E();return Q.defaults.baseURL=`${a}${c}`,e[t]}});new Proxy(Q,{get(e,t){const{apiDomain:a}=E();return Q.defaults.baseURL=`${a}/gamebridge-user/v1`,e[t]}});function Z(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function ee(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Z(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}const te=e=>new Promise(((t,a)=>{X.get(`/site/${E().siteId}/games/new`,{params:e}).then((e=>{const{data:a=[]}=e||{};e.data=S(a),t(e)})).catch((e=>{a(e)}))})),ae=e=>new Promise(((t,a)=>{X.get(`/site/${E().siteId}/games`,{params:e}).then((e=>{const{data:a=[]}=e||{};e.data=S(a),t(e)})).catch((e=>{a(e)}))})),ne=(e,t,a)=>{let n;return n=window.top===window?window.location.href:document.referrer,{game_id:a,event_name:e,page_url:window.location.href,custom_data:ee({cid:(k||(k=u(window.location.search).utm_source||window.localStorage.getItem("sdk-cid")||"default"),k),sessionId:w(),version:"1.9.8",referrer:n,_fbp:v("_fbp"),_fbc:v("_fbc"),utm_source:window.localStorage.getItem("utm_source")||"3487216655"},t)}},re=(e,t,a)=>{((e,t)=>{const{apiDomain:a}=E();h().then((n=>{const r={},s=y();s&&(r.tid=s),r.uid=n,fetch(`${a}${c}${e}`,{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",keepalive:!0,headers:r,referrerPolicy:"no-referrer",body:JSON.stringify(t)})}))})("/track",ne(e,t,a))},se=(e,t)=>{((e,t)=>{const a=new Date;h().then((n=>{const r={"#app_id":"856",data:[{"#type":"track","#time":P(a),"#timestamp":a.getTime(),"#account_id":"enjoy4fun","#event_name":e,"#uuid":b(),properties:K(K({},t),{},{game_id:null===(c=window.APP_PROPS.seoGame)||void 0===c?void 0:c.game_id,game_name:null===(s=window.APP_PROPS.seoGame)||void 0===s?void 0:s.game_name,uid:n,"#zone_offset":0-(new Date).getTimezoneOffset()/60})}]};var s,c;fetch("https://deapi.gmoneygame.xyz/v1/wgt/report/json",{method:"POST",mode:"cors",cache:"no-cache",body:JSON.stringify(r)})}))})(e,ne(e,t))},ce=classNames;var le,oe=a.n(ce);function ie(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function me(a){var n;const{useSPA:r,language:c,game:l,style:o,campaign:i,size:m="small",index:u,type:d="",useVideo:g,system:f,callback:h}=a;if(!l)return t().createElement(Te,{useSPA:r,path:`/${c}`,className:"game-card card-wrap","data-size":m,"data-grid-mark":a.index});const{id:y,icon:v,path:b,name:w,icon_video:O}=l,[P,N]=(0,e.useState)(null),[S,k]=(0,e.useState)(null);(0,e.useEffect)((()=>{k(E().videoDomain),N("safari"!==(()=>{if(p)return p;try{let e=navigator.userAgent.toLowerCase().match(/(msie|firefox|chrome|opera|version|safari).*?([\d.]+)/)[1].replace(/version/,"safari");return-1!==navigator.userAgent.toLowerCase().indexOf("edg")&&(e="edge"),p=e,p}catch(e){return p="",p}})())}),[]);let j="";"topic"===d?j=v:null!==P&&(j=((e,t,a,n)=>{let r;if("number"==typeof t&&(r=t),"string"==typeof t)switch(t){case"small":r=130;break;case"large":default:r=280;break;case"oversized":r=430}a||n||(n=".jpeg"),n&&(e=e.replace(".webp",n));const{imgDomain:s}=E();return`${s}/image/${r}*${r}/${e}`})(v,m,P));const x={};j&&(x.backgroundImage=`url(${j})`);const _=()=>(j&&({}.backgroundImage=`url(${j})`),f.isAndroid||f.isPhone?null:O&&g&&S?t().createElement("video",{className:"icon-video",loop:!0,muted:!0,preload:"metadata"},t().createElement("source",{src:`${S}/${O}`,type:"video/mp4"})):n||(n=t().createElement("h3",null,t().createElement("span",null,w))));let $=b;i&&($=`${b}?utm_campaign=${i}`);let C=m;"search"!==d&&"search-big"!==d||(C=d);const A=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ie(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ie(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},o);return!l.new&&j&&(A.backgroundImage=`url(${j})`),t().createElement(Te,{useSPA:r,path:`/${c}/${b}`,style:A,className:oe()("game-card",l.new?"":"card-wrap"),"data-size":"small"===C?void 0:C,"data-grid-mark":u,"data-id":y,onClick:e=>((e,t)=>{const a={campaign:i,isFirstScreen:t.pageY<=window.innerHeight?"true":"false"};"function"==typeof h&&h(b),re("GameIconClick",a,l.id)})(0,e),onMouseLeave:e=>(e=>{const t=e.currentTarget.querySelector("video");t&&t.pause()})(e),onMouseEnter:e=>(e=>{const t=e.currentTarget.querySelector("video");t&&(t.currentTime=0,t.play())})(e)},l.new?t().createElement(t().Fragment,null,t().createElement("p",{className:"card-wrap",style:x},_()),le||(le=t().createElement("div",{className:"game-flag"}))):_())}const ue=t().memo(me,((e,t)=>Object.keys(e).every((a=>e[a]===t[a]))));var de,ge,pe,fe,he,ye,Ee,ve,be;let we,Oe;function Pe(a){const{useSPA:n,language:r}=a,[s,c]=(0,e.useState)(null),[o,i]=(0,e.useState)(null),[m,u]=(0,e.useState)(null),[d,p]=(0,e.useState)(!1),[h,y]=(0,e.useState)(!1),[v,b]=(0,e.useState)(!1),[w,P]=(0,e.useState)(null),[N,k]=(0,e.useState)(""),[j,x]=(0,e.useState)(null),_=(0,e.useRef)(null);if((0,e.useEffect)((()=>{var e;P(g()),f()?m||new Promise(((e,t)=>{X.get("/recentgames").then((t=>{const{data:a=[]}=t||{};t.data=S(a),e(t)})).catch((e=>{t(e)}))})).then((e=>{u(e.data)})):X.get("/uid").then((e=>{var t;t=e.data,window.localStorage.setItem(l,t)})),s||X.get(`/site/${E().siteId}/categorys`).then((e=>{c(e.data)})),o||(e={page_size:12},new Promise(((t,a)=>{X.get(`/site/${E().siteId}/weekgames`,{params:e}).then((e=>{const{data:a=[]}=e||{};e.data=S(a),t(e)})).catch((e=>{a(e)}))}))).then((e=>{i(e.data)}))}),[]),(0,e.useEffect)((()=>{d?(O(".search-content-main .popular-this-week .game-card",(e=>{re("GameImpression",{impressionGameList:JSON.stringify(e),campaign:"popular-this-week"})}),!0),O(".search-content-main .recently-played .game-card",(e=>{re("GameImpression",{impressionGameList:JSON.stringify(e),campaign:"recently-played"})}),!0)):(Oe="",k(""))}),[d]),!w)return null;const $=e=>{const t=!!e.trim()&&e.trim()===Oe;if(re("TriggerSearch",{searchValue:e,repeatedText:t.toString()}),t)return;Oe=e.trim(),y(!0);(Oe?ae:te)({term:Oe,page_size:24}).then((e=>{x(e.data),y(!1),document.querySelector(".search-content-main").scrollTo(0,0),O(".search-content-main .search-result .game-card",(e=>{re("GameImpression",{impressionGameList:JSON.stringify(e),campaign:"search-result"})}),!0)}))},C=e=>{const t=e.currentTarget.value;k(t),we&&clearTimeout(we),we=setTimeout((()=>{clearTimeout(we),$(t)}),500)};if(!w)return de||(de=t().createElement("div",{className:"game-search"},t().createElement("h1",{title:"Enjoy4fun"},"Enjoy4fun")));const A=e=>{v||b(!0),re(e?"OpenSearch":"CloseSearch"),p(e),e&&setTimeout((()=>{_.current&&_.current.focus()}),100),e||x(null)},D=()=>s?t().createElement("div",{className:"category"},s.map((e=>t().createElement("a",{key:e.id,href:`/${r}/games/${e.path}`,onClick:e=>(e=>{const t={campaign:"hot",isFirstScreen:e.pageY<=window.innerHeight?"true":"false"};re("CategoryIconClick",t)})(e)},e.name)))):null,T=()=>v?t().createElement(t().Fragment,null,h?he||(he=t().createElement($e,{className:"search-loading"})):null,t().createElement("div",{className:"search-content-main"},j?0===j.length?ge||(ge=t().createElement("div",{className:"search-result"},t().createElement("p",{className:"void-title"},"No search results yet"),t().createElement("p",{className:"void-text"},"Try searching for something else?"))):t().createElement("div",{className:"search-result"},t().createElement("p",{className:"result-title"},j.length," result:"),t().createElement("div",{className:"result-list"},j.map(((e,a)=>{const s=e.name.toLowerCase()===N.toLowerCase();return t().createElement(ue,{useSPA:n,style:(w.isPC||w.isTablet)&&s?{gridArea:"1/1/3/3"}:{},language:r,game:e,key:e.id,type:s?"search-big":"search",size:s?"large":"small",index:a,campaign:`search&value=${N}`,callback:()=>p(!1),system:w})})))):null,D(),o&&o.length?t().createElement("div",{className:"popular-this-week"},pe||(pe=t().createElement("h2",{className:"popular-this-week-title"},"Popular this week")),t().createElement("div",{className:"popular-this-week-list"},o.map(((e,a)=>t().createElement(ue,{useSPA:n,language:r,game:e,key:e.id,type:"search",index:a,campaign:"week-list",callback:()=>p(!1),system:w}))))):null,m&&m.length?t().createElement("div",{className:"recently-played"},fe||(fe=t().createElement("h2",{className:"recently-played-title"},"Recently played")),t().createElement("div",{className:"recently-played-list"},m.map(((e,a)=>t().createElement(ue,{useSPA:n,language:r,game:e,key:e.id,type:"search",index:a,campaign:"played-list",callback:()=>p(!1),system:w}))))):null)):null;return w.isAndroid||w.isPhone?t().createElement("div",{className:"game-search"},t().createElement("a",{className:"logo",href:`/${r}/`,onClick:()=>re("LogoClick")},ye||(ye=t().createElement("h1",{title:"Enjoy4fun"},"Enjoy4fun"))),t().createElement("div",{className:"home-and-search"},t().createElement("a",{href:`/${r}/`,className:"hs-ele-home",onClick:()=>re("HomeClick")},t().createElement(je,{type:"home",style:{fontSize:24}})),t().createElement("span",{className:"hs-ele-search",onMouseDown:()=>A(!0)},t().createElement(je,{type:"search",style:{fontSize:24}}))),d?t().createElement("div",{className:"search-content"},t().createElement("div",{className:"search-content-action"},t().createElement("div",{className:"search-go-back",onClick:()=>{A(!1)}},Ee||(Ee=t().createElement(je,{type:"left"}))),t().createElement("div",{className:"search-main"},t().createElement("input",{className:"search-input",placeholder:"Search",ref:_,value:N,onChange:C}),t().createElement("button",{className:"search-action",onClick:()=>$(N)},t().createElement(je,{type:"search",style:{fontSize:20,color:"#fff"}})))),T()):null):d?t().createElement("div",{className:"game-search pc-expand"},t().createElement("div",{className:"search-main"},t().createElement("input",{className:"search-input",placeholder:"Search",value:N,ref:_,onChange:C}),N?t().createElement(je,{className:"clear-search",type:"delete",onClick:()=>{k("")}}):null,t().createElement("button",{className:"search-action",onClick:()=>$(N)},t().createElement(je,{type:"search",style:{fontSize:32,color:"#fff"}}))),be||(be=t().createElement("div",{className:"search-bg"})),d?t().createElement("div",{className:"content-bg",onClick:()=>A(!1)}):null,t().createElement("div",{className:"search-content","data-show":d},T())):t().createElement("div",{className:"game-search pc-normal"},t().createElement("a",{className:"logo",href:`/${r}/`,onClick:()=>re("LogoClick")},ve||(ve=t().createElement("h1",{title:"Enjoy4fun"},"Enjoy4fun"))),t().createElement("div",{className:"home-and-search"},t().createElement("a",{href:`/${r}/`,className:"hs-ele-home",onClick:()=>re("HomeClick")},t().createElement(je,{type:"home",style:{fontSize:24}})),t().createElement("span",{className:"hs-ele-search",onMouseDown:()=>A(!0)},t().createElement(je,{type:"search",style:{fontSize:24}}))))}function Ne(){return Ne=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},Ne.apply(this,arguments)}function Se(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const ke=["type","style","className","onClick","id"];function je(e){const{type:a,style:n,className:r="",onClick:s=(()=>{}),id:c}=e,l=Se(e,ke);return t().createElement("i",Ne({id:c,className:oe()("iconfont",`icon-${a}`,r),style:n},l,{onClick:s}))}var xe,_e;function $e(e){const{style:a,className:n,jumpPage:r,disabledBG:s}=e;return t().createElement("section",{style:a,className:oe()("loading",n),"data-jump-page":r?"true":void 0},xe||(xe=t().createElement("div",{className:"loading-inner"})),s?null:_e||(_e=t().createElement("div",{className:"loading-bg"})))}function Ce(){return t().createElement($e,{jumpPage:!0,style:{display:"none"}})}function Ae(e){const{className:a,style:n,children:r}=e;return t().createElement("section",{className:oe()("text-info",a),style:n},r)}a(981),a(371),a(867);const De=["useSPA","path","children"];function Te(e){const{useSPA:a,path:n,children:r}=e,s=Se(e,De);return t().createElement("a",Ne({href:n},s),r)}var ze,Ie,Me,Le,qe;function Ge(a){const{seoLan:n,seoAbout:{body:r=""},seoEnvMap:s}=a;(0,e.useEffect)((()=>{(e=>{let t="";e.isPC&&(t="pc"),(e.isPhone||e.isAndroid)&&(t="mobile"),e.isTablet&&(t="pc"),document.querySelector("body").setAttribute("system",t)})(g()),se("heartbeat",{}),setInterval((()=>{document.hidden||se("heartbeat",{})}),1e4)}),[]);return t().createElement("div",{className:"contact-wrap"},ze||(ze=t().createElement("div",{className:"bg-left"})),Ie||(Ie=t().createElement("div",{className:"bg-right"})),Me||(Me=t().createElement("div",{className:"bg-bottom"})),Le||(Le=t().createElement(Ce,null)),t().createElement(Pe,{language:n}),t().createElement(Ae,null,qe||(qe=t().createElement("h2",null,"Contact Me")),t().createElement(t().Fragment,null,t().createElement("div",{dangerouslySetInnerHTML:{__html:r}}))),t().createElement(U,{language:n,envMap:s}))}let He=null;He=document.querySelector("#root"),He&&r().hydrate(t().createElement(Ge,window.APP_PROPS||{}),document.querySelector("#root"))})()})();