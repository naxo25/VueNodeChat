(function(e){function t(t){for(var r,o,u=t[0],i=t[1],s=t[2],d=0,l=[];d<u.length;d++)o=u[d],a[o]&&l.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(l.length)l.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a={app:0},c=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"2d0c4e36":"ed4ec06b","2d20f965":"112ef901","2d22bd24":"c2f8d32c","5419ad36":"64e15baf",d8ee8932:"0259a347",f5d1289e:"51ca02f1"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"5419ad36":1,f5d1289e:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var r="css/"+({}[e]||e)+"."+{"2d0c4e36":"31d6cfe0","2d20f965":"31d6cfe0","2d22bd24":"31d6cfe0","5419ad36":"36dc4ba3",d8ee8932:"31d6cfe0",f5d1289e:"05e309b9"}[e]+".css",a=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=c[u],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===r||d===a))return t()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){s=l[u],d=s.getAttribute("data-href");if(d===r||d===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],f.parentNode.removeChild(f),n(c)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)}).then(function(){o[e]=0}));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise(function(t,n){r=a[e]=[t,n]});t.push(r[2]=c);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=u(e);var l=new Error;s=function(t){d.onerror=d.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,n[1](l)}a[e]=void 0}};var f=setTimeout(function(){s({type:"timeout",target:d})},12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var f=d;c.push([0,"vendor"]),n()})({0:function(e,t,n){e.exports=n("7d3e")},1:function(e,t){},"18d0":function(e,t,n){},"7d3e":function(e,t,n){"use strict";n.r(t);var r=n("52b5"),o=n.n(r),a=(n("c1c3"),n("549c")),c=n.n(a),u=(n("2233"),n("2f72"),n("9ce7"),n("18d0"),n("e832")),i=n("3090");u["a"].use(i["b"],{config:{}});var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},d=[],l=(n("d93a"),n("0012"),n("5b54"),n("2bf3"),n("b7dd"),n("ef92"),n("9289")),f=n.n(l),p=n("94ea");function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(n,!0).forEach(function(t){f()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var g={methods:m({},Object(p["b"])("store",["handleAuthStateChanged"])),mounted:function(){this.handleAuthStateChanged()}},v=g,b=n("a6c2"),y=Object(b["a"])(v,s,d,!1,null,null,null),w=y.exports,O={user:{},chats:{},users:{},arrNombres:{}},S=O,j={getusers:function(e,t){u["a"].set(e.users,t.id,t.details)},getchats:function(e,t){u["a"].set(e.chats,t.id,t.details)},add:function(e,t){u["a"].set(e.chats,t.id,t.datos)},update:function(e,t){console.log(t),e.chats[t.id].mensaje=t.mensaje},delete:function(e,t){u["a"].delete(e.chats,t)},imgUser:function(e,t){console.log(t)},activos:function(e,t){console.log(t)},user:function(e,t){e.user=t,localStorage.userImg=t.userImg,localStorage.Nombre=t.Nombre,console.log(t)},cant:function(e){},Logout:function(e,t){e.user={},e.users={},e.chats={},localStorage.removeItem("Nombre"),localStorage.removeItem("userImg"),localStorage.removeItem("users")}},x=j,k=(n("67c8"),n("4bea")),P=n.n(k),N=n("7338"),C=n.n(N),A="http://localhost:4000/",E=P()(A),_={add:function(){var e=c()(o.a.mark(function e(t,n){var r;return o.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.state,t.dispatch,t.commit,n.Nombre=r.user.Nombre,console.log(n),e.next=5,E.emit("add",n);case 5:case"end":return e.stop()}},e)}));function t(t,n){return e.apply(this,arguments)}return t}(),update:function(e,t){e.state,e.dispatch,e.commit;E.emit("update",t)},delete:function(e,t){e.state,e.dispatch,e.commit;E.emit("delete",t)},imgUser:function(){var e=c()(o.a.mark(function e(t,n){return o.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,e.next=3,E.emit("imgUser",{Nombre:state.user.Nombre,userImg:n});case 3:case"end":return e.stop()}},e)}));function t(t,n){return e.apply(this,arguments)}return t}(),getchats:function(e){var t=e.commit;C.a.get(A).then(function(e){var n,r,o=e.data;for(var a in o)n=a,r=o[a],console.log(o[a]),t("getchats",{id:n,details:r})})},getusers:function(e){var t=e.commit;C.a.get(A+"users").then(function(e){var n,r,o=e.data;for(var a in o)n=a,r=o[a],t("getusers",{id:n,details:r})})},noti:function(e,t){var n=e.state;Push.create(n.user.Nombre,{body:t,icon:n.user.userImg,timeout:3e3,onClick:function(){this.close()}})},handleAuthStateChanged:function(e){var t=e.commit,n=e.dispatch;e.state;localStorage.Nombre?(C.a.post(A,{Nombre:localStorage.Nombre}).then(function(e){t("user",e.data)}),this.$router.push("/"),n("getusers"),n("getchats"),E.on("dicant",function(e){t("dicant",e)}),E.on("add",function(e){t("add",e),n("noti",e.datos.mensaje)}),E.on("update",function(e){return t("update",e)}),E.on("delete",function(e){return t("delete",e)}),E.on("imgUser",function(e){console.log("en de io"),console.log(e),t("imgUser",e)}),E.on("activos",function(e){console.log("desp de io"),t("activos",e)}),Push.create("Bienvenido")):this.$router.push("/login")},Logout:function(e){var t=e.commit;t("Logout"),this.$router.replace("/login")},clearMessages:function(e){var t=e.state;t.chats={}},cant:function(){var e=c()(o.a.mark(function e(t,n){var r;return o.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:r=t.dispatch,t.commit,r("handleAuthStateChanged");case 2:case"end":return e.stop()}},e)}));function t(t,n){return e.apply(this,arguments)}return t}(),activos:function(e){e.state;E.emit("activos")},dicant:function(e){e.state;E.emit("dicant")}},L=_,I={chats:function(e){return e.chats},users:function(e){return e.users}},D={namespaced:!0,state:S,mutations:x,actions:L,getters:I},M={asd:"viene de otra store"},T={},U={handleAuthStateChanged:function(){console.log("asdadssd")}},$={},B={namespaced:!0,state:M,mutations:T,actions:U,getters:$};u["a"].use(p["a"]);var q=function(){var e=new p["a"].Store({modules:{store:D,store2:B},strict:!1});return e},V=n("4af9"),J=[{path:"/",component:function(){return n.e("2d20f965").then(n.bind(null,"b3ec"))},children:[{path:"/",component:function(){return n.e("2d0c4e36").then(n.bind(null,"3d6e"))}},{path:"Agregar",component:function(){return n.e("2d22bd24").then(n.bind(null,"f136"))}},{path:"login",component:function(){return n.e("f5d1289e").then(n.bind(null,"e8a4"))}},{path:"registro",component:function(){return n.e("5419ad36").then(n.bind(null,"4ad2"))}}]}];J.push({path:"*",component:function(){return n.e("d8ee8932").then(n.bind(null,"7cb4"))}});var F=J;u["a"].use(V["a"]);var H=function(){var e=new V["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:F,mode:"hash",base:""});return e},K=function(){var e="function"===typeof q?q({Vue:u["a"]}):q,t="function"===typeof H?H({Vue:u["a"],store:e}):H;e.$router=t;var n={el:"#q-app",router:t,store:e,render:function(e){return e(w)}};return{app:n,store:e,router:t}},Q=n("1740");Object(Q["a"])("service-worker.js",{ready:function(){console.log("App is being served from cache by a service worker.")},registered:function(e){console.log("Service worker has been registered.")},cached:function(e){console.log("Content has been cached for offline use.")},updatefound:function(e){console.log("New content is downloading.")},updated:function(e){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),u["a"].prototype.$axios=C.a;var z=n("94db"),G=n.n(z),R=K(),W=R.app,X=R.store,Y=R.router;function Z(){return ee.apply(this,arguments)}function ee(){return ee=c()(o.a.mark(function e(){var t,n;return o.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:t=[void 0],n=0;case 2:if(!(n<t.length)){e.next=20;break}if("function"===typeof t[n]){e.next=5;break}return e.abrupt("continue",17);case 5:return e.prev=5,e.next=8,t[n]({app:W,router:Y,store:X,Vue:u["a"],ssrContext:null});case 8:e.next=17;break;case 10:if(e.prev=10,e.t0=e["catch"](5),!e.t0||!e.t0.url){e.next=15;break}return window.location.href=e.t0.url,e.abrupt("return");case 15:return console.error("[Quasar] boot error:",e.t0),e.abrupt("return");case 17:n++,e.next=2;break;case 20:new u["a"](W);case 21:case"end":return e.stop()}},e,null,[[5,10]])})),ee.apply(this,arguments)}/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&window.navigator.standalone&&document.addEventListener("DOMContentLoaded",function(){G.a.attach(document.body)},!1),Z()}});