(function(){"use strict";var e={7604:function(e,t,o){var r=o(144),s=o(998),a=function(){var e=this,t=e._self._c;return t(s.Z,[t("router-view")],1)},n=[],i={name:"App"},l=i,c=o(1001),d=(0,c.Z)(l,a,n,!1,null,"3ad1f794",null),u=d.exports,m=o(8345),h=o(6190),f=o(9582),p=o(4886),v=o(2118),g=o(5495),b=o(3059),_=function(){var e=this,t=e._self._c;return t(s.Z,[t(b.Z,[t("navBarComp"),t(v.Z,{attrs:{fluid:""}},[t(g.Z,{staticClass:"img",attrs:{src:o(7885)}}),t("div",[t(f.Z,{attrs:{id:"title"}},[t("h1",{staticClass:"font-weight-bold"},[e._v(" Desafia las expectativas de los MOBA ")]),t("p",{staticClass:"subheading font-weight-regular",attrs:{id:"subtitle"}},[e._v(" Epicos heroes y accion sin cesar en multiples campos de batalla ")]),t("br"),t("br"),t("router-link",{attrs:{to:"/heroes"}},[t(h.Z,{staticClass:"btn",attrs:{target:"_blank",color:"orange darken-3"}},[t("span",{staticClass:"mr-2"},[e._v("VER HEROES")])])],1)],1),t(f.Z,{staticClass:"text",attrs:{color:"purple darken-1"}},[t(p.ZB,{attrs:{id:"texto"}},[e._v(" ¡Te damos la bienvenida al Nexo!¡En este reino entre reinos, todo es posible! Elige entre decenas de heroes legendarios de todo el panteon de Blizzard, personaliza sus talentos y habilidades en medio del combate y lucha en una infinidad de campos de batalla que redefinen el genero. ¡Esto no es un MOBA promedio, esto es Horoes of the Storm! ")])],1)],1)],1)],1),t("footerComp")],1)},Z=[],w=o(6843),y=o(4324),C=o(1713),k=function(){var e=this,t=e._self._c;return t("div",{staticClass:"nav"},[t(w.Z,{attrs:{color:"blue darken-4",dark:""}},[t(v.Z,[t(C.Z,{staticClass:"icon"},[t(h.Z,{attrs:{text:"",to:"/"}},[t(y.Z,{staticClass:"mr-1"},[e._v("mdi-home")]),e._v("Home")],1)],1)],1)],1)],1)},H=[],S={},x=(0,c.Z)(S,k,H,!1,null,"13c8c540",null),L=x.exports,$=o(266),E=o(8271),M=function(){var e=this,t=e._self._c;return t("div",{},[t(E.Z,{staticClass:"foot",attrs:{padless:"",color:"blue darken-4",dark:""}},[t($.Z,{staticClass:"text-center",attrs:{cols:"12"}},[t("strong",[e._v("Bienvenido a vuetify")]),e._v(" "+e._s((new Date).getFullYear())+" — ")])],1)],1)},D=[],P={name:"footerComp"},j=P,O=(0,c.Z)(j,M,D,!1,null,"4b7c679a",null),F=O.exports,A={name:"App",components:{navBarComp:L,footerComp:F}},T=A,U=(0,c.Z)(T,_,Z,!1,null,"378b702a",null),B=U.exports,I=o(3423),N=o(8299),z=function(){var e=this,t=e._self._c;return t(s.Z,[t(b.Z,[t("div",{staticClass:"nav"},[t(w.Z,{attrs:{color:"blue darken-4",dark:""}},[t(v.Z,[t(C.Z,{staticClass:"icon"},[t(h.Z,{attrs:{text:"",to:"/"},on:{click:e.goToHome}},[t(y.Z,{staticClass:"mr-1"},[e._v("mdi-home")]),e._v("Home")],1)],1)],1)],1)],1),t(v.Z,{attrs:{fluid:""}},[t("div",{staticClass:"title"},[t("span",[e._v("Héroes")])]),t(g.Z,{staticClass:"img",attrs:{src:o(4499)}}),t("div",[t("div",{staticClass:"simbolos"},[t(y.Z,{staticStyle:{color:"grey"}},[e._v("mdi-sword")]),e._v("  "),t(y.Z,{staticStyle:{color:"grey"}},[e._v("mdi mdi-crosshairs-gps")]),e._v("  "),t(y.Z,{staticStyle:{color:"grey"}},[e._v("mdi mdi-cross")]),e._v("  "),t(y.Z,{staticStyle:{color:"grey"}},[e._v("mdi mdi-shield-half-full")]),e._v("  "),t(y.Z,{staticStyle:{color:"grey"}},[e._v("mdi mdi-arch")]),e._v("  "),t(y.Z,{staticStyle:{color:"grey"}},[e._v("mdi mdi-hand-back-right")])],1),t("div",{staticClass:"table-container"},[t(N.Z,{staticStyle:{"background-color":"rgb(43, 42, 42)",color:"white"},attrs:{headers:e.headers,items:e.heroes,"fixed-header":"",height:"330","hide-default-header":""},scopedSlots:e._u([{key:"header",fn:function({props:o}){return[t("thead",[t("tr",e._l(o.headers,(function(o,r){return t("th",{key:r,class:{"grey--dark":0===r,"text-center":!0},style:{"background-color":"rgb(32, 30, 30)",color:"white"}},[e._v(" "+e._s(o.text)+" ")])})),0)])]}},{key:"item",fn:function({item:o}){return[t("tr",[t("td",[t(I.Z,{attrs:{size:"70"}},[t("img",{attrs:{src:o.imagen,alt:"Hero Image"}})]),t("div",[e._v(e._s(o.name))])],1),t("td",[t(h.Z,{staticStyle:{color:"white","background-color":"blue"},attrs:{text:""},on:{click:function(t){return e.verDetalles(o)}}},[e._v("Ver Detalles")])],1)])]}}])})],1)])],1)],1),t("footerComp"),e.showLoginModal?t("Login",{staticClass:"logue",on:{"cerrar-login":e.handleCerrarLogin}}):e._e()],1)},q=[],V=(o(560),o(8522),o(5121)),R=(o(7921),o(9930)),G=o(5005),K=o(3687),X=o(7808),Y=function(){var e=this,t=e._self._c;return t(R.Z,{model:{value:e.showLoginModal,callback:function(t){e.showLoginModal=t},expression:"showLoginModal"}},[t("div",{staticClass:"container"},[t("div",{staticClass:"titulo"},[t("h5",[e._v("Para ver los detalles del heroe inicia sesion")])]),t(f.Z,{staticClass:"mx-auto mt-5",attrs:{id:"login",width:"400px"}},[t("div",{staticClass:"datos_form"},[t(p.EB,{attrs:{"primary-title":""}},[t("h1",{staticClass:"mx-auto"},[e._v("Login")])]),t(p.ZB,[t(G.Z,[t(X.Z,{attrs:{name:"email",label:"Email","prepend-icon":"mdi-account-circle"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),t(X.Z,{attrs:{type:e.showPassword?"text":"password",label:"Password","prepend-icon":"mdi-lock","append-icon":e.showPassword?"mdi-eye":"mdi-eye-off"},on:{"click:append":function(t){e.showPassword=!e.showPassword}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1)],1),t(p.h7,[t(K.Z),t(h.Z,{attrs:{color:"purple"},on:{click:function(t){return t.preventDefault(),e.login.apply(null,arguments)}}},[e._v("Login")])],1)],1)]),t("div",[t(h.Z,{staticClass:"cerrar",attrs:{outlined:"",color:"black"},on:{click:e.cerrarModal}},[e._v(" Cerrar")])],1)],1)])},J=[],Q=o(1259),W={name:"LoginComp",data(){return{showLoginModal:!0,showPassword:!1,email:"",password:""}},methods:{async login(){const e=(0,Q.v0)();try{const t=await(0,Q.e5)(e,this.email,this.password),o=t.user;this.$store.commit("setCurrentUser",o),"/detalles"!==this.$route.path&&this.$router.push("/detalles")}catch(t){console.error("Error de autenticación:",t.message),alert("Usuario incorrecto")}},abrirModal(){this.showLoginModal=!0},cerrarModal(){this.showLoginModal=!1,this.$emit("cerrar-login")}},mounted(){this.showLoginModal&&this.abrirModal()},watch:{showModal(e){e&&this.abrirModal()}}},ee=W,te=(0,c.Z)(ee,Y,J,!1,null,"2527b1aa",null),oe=te.exports,re={name:"heroesView",components:{footerComp:F,Login:oe},data(){return{headers:[{text:"Héroes",value:"heroes"},{text:"Detalles",value:"detalles"}],heroes:[],showLoginModal:!1,activeHeroId:null}},computed:{currentUser(){return this.$store.state.currentUser}},methods:{goToHome(){this.$router.push("/")},loadDataFromDatabase(){V.Z.get("https://heroes-of-the-storm-vue-default-rtdb.firebaseio.com/heroes.json").then((e=>{this.heroes=Object.keys(e.data).map((t=>({id:t,...e.data[t]})))})).catch((e=>{console.error("Error al cargar datos:",e)}))},verDetalles(e){this.$store.commit("setSelectedHero",e),this.currentUser?this.$router.push("/detalles"):this.showLoginModal=!0},handleDetallesNavigation(e){console.log("Elemento seleccionado:",e),this.$store.commit("setSelectedHero",e),this.$router.push("/detalles")},handleCerrarLogin(){this.showLoginModal=!1},selectHero(e){this.$store.dispatch("selectHero",e)}},mounted(){this.loadDataFromDatabase(),console.log("Login component mounted"),this.$nextTick((()=>{this.loadDataFromDatabase()}))}},se=re,ae=(0,c.Z)(se,z,q,!1,null,"442113a5",null),ne=ae.exports,ie=function(){var e=this,t=e._self._c;return t("div",{staticClass:"about"},[t(h.Z,{on:{click:e.goToHome}},[e._v("Ir a Home")]),t("h1",[e._v('"NotFound"')])],1)},le=[],ce={name:"heroesView",methods:{goToHome(){this.$router.push("/")}}},de=ce,ue=(0,c.Z)(de,ie,le,!1,null,null,null),me=ue.exports,he=function(){var e=this,t=e._self._c;return t(s.Z,[t(b.Z,[t("div",{staticClass:"nav"},[t(w.Z,{attrs:{color:"blue darken-4",dark:""}},[t(v.Z,[t(C.Z,{staticClass:"icon"},[t(h.Z,{attrs:{text:""},on:{click:e.logout}},[t(y.Z,{staticClass:"mr-1"},[e._v("mdi-logout")]),e._v("Salir")],1)],1)],1)],1)],1),t(v.Z,{staticClass:"detalles",attrs:{fluid:""}},[t("div",[t("h1",{staticClass:"titulo"},[e._v("Bienvenido "+e._s(e.currentUserEmail))]),t("h2",{staticClass:"subtitulo"},[e._v("Aqui puedes ver el detalle del heroe")]),t("div",{staticClass:"datos"},[t("div",[t("h4",{staticClass:"nombre"},[e._v(e._s(e.selectedHero.name))])]),e.selectedHero?t("div",{staticClass:"img"},[t("img",{staticClass:"img",attrs:{src:e.selectedHero?e.selectedHero.imagen:"",alt:"heroe"}})]):e._e(),e.selectedHero?t("div",{staticClass:"datos_icon"},[t(y.Z,{staticStyle:{color:"rgb(68, 0, 128)","margin-left":"4%"}},[e._v("mdi-sword-cross")]),e._v("  "),t("div",[t("span",{staticStyle:{"margin-left":"30%"}},[e._v(e._s(e.selectedHero.ataque))]),t("h3",{staticStyle:{"margin-left":"30%"}},[e._v("Ataque")])])],1):e._e(),t("hr",{staticStyle:{width:"82%","margin-left":"18%"}}),e.selectedHero?t("div",{staticClass:"datos_icon"},[t(y.Z,{staticStyle:{color:"rgb(68, 0, 128)","margin-left":"4%"}},[e._v("mdi-decagram")]),e._v("  "),t("div",[t("span",{staticStyle:{"margin-left":"12%"}},[e._v(e._s(e.selectedHero.titulo))]),t("h3",{staticStyle:{"margin-left":"12%"}},[e._v("Titulo")])])],1):e._e(),t("hr",{staticStyle:{width:"82%","margin-left":"18%"}}),e.selectedHero?t("div",{staticClass:"datos_icon"},[t(y.Z,{staticStyle:{color:"rgb(68, 0, 128)","margin-left":"4%"}},[e._v("mdi-tools")]),e._v("  "),t("div",[t("span",{staticStyle:{"margin-left":"30%"}},[e._v(e._s(e.selectedHero.funcion))]),t("h3",{staticStyle:{"margin-left":"30%"}},[e._v("Funcion")])])],1):e._e()])])])],1)],1)},fe=[],pe={name:"DetallesView",data(){return{headers:[{text:"Héroes",value:"heroes"},{text:"Detalles",value:"detalles"}],showLoginForm:!1}},computed:{currentUser(){return this.$store.state.currentUser},currentUserEmail(){return this.currentUser?this.currentUser.email:""},selectedHero:{get(){return this.$store.state.selectedHero},set(e){this.$store.commit("setSelectedHero",e)}}},methods:{loadDataFromDatabase(){const e=this.$store.state.selectedHero;if(console.log("Selected Hero:",e),e){const t=`https://heroes-of-the-storm-vue-default-rtdb.firebaseio.com/heroes/${e.id}.json`;V.Z.get(t).then((e=>{this.$store.commit("setSelectedHero",e.data)})).catch((e=>{console.error("Error al cargar datos:",e)}))}},async logout(){try{await this.$store.dispatch("logoutAction")}catch(e){console.error("Error al cerrar sesión:",e)}this.$router.go(-1)},beforeRouteLeave(e,t,o){this.$store.commit("setSelectedHero",null),this.$store.commit("setShowLoginForm",!0),o()}},mounted(){this.selectedHero||this.loadDataFromDatabase()}},ve=pe,ge=(0,c.Z)(ve,he,fe,!1,null,"e59eb974",null),be=ge.exports;r.ZP.use(m.ZP);const _e=[{path:"/",name:"Home",component:B},{path:"/heroes",name:"Heroes",component:ne,meta:{Login:!0}},{path:"/login",name:"login",component:oe},{path:"/detalles",name:"detallesview",component:be},{path:"/:catchAll(.*)",name:"NotFound",component:me},{path:"/about",name:"about",component:()=>o.e(443).then(o.bind(o,5572))}],Ze=new m.ZP({mode:"history",base:"/animacion-japonesa/",routes:_e});Ze.beforeEach(((e,t,o)=>{o()}));var we=Ze,ye=o(629);r.ZP.use(ye.ZP);var Ce=new ye.ZP.Store({state:{currentUser:null,showLoginForm:!0,selectedHero:null},getters:{selectedHero(e){return e.selectedHero}},mutations:{setCurrentUser(e,t){e.currentUser=t},setShowLoginForm(e,t){e.selectedHero||(e.showLoginForm=t)},setSelectedHero(e,t){e.selectedHero=t}},actions:{logoutAction({commit:e}){e("setCurrentUser",null),e("setShowLoginForm",!0)},selectHero({commit:e},t){e("setSelectedHero",t)}},modules:{}}),ke=o(3977),He={apiKey:"AIzaSyCOCnD-pR9ISZZ_BXMjdzrd36thcmCGxO0",authDomain:"heroes-of-the-storm-vue.firebaseapp.com",projectId:"heroes-of-the-storm-vue",storageBucket:"heroes-of-the-storm-vue.appspot.com",messagingSenderId:"797876534946",appId:"1:797876534946:web:401b525e648c31233221fb"},Se=o(1705);o(8556);r.ZP.use(Se.Z);var xe=new Se.Z({});r.ZP.config.productionTip=!1;const Le=(0,ke.ZF)(He),$e=(0,Q.v0)(Le);let Ee;(0,Q.Aj)($e,(()=>{Ee||(Ee=new r.ZP({router:we,store:Ce,vuetify:xe,render:e=>e(u)}).$mount("#app"))}))},7885:function(e,t,o){e.exports=o.p+"img/fondo_1.b8822ac9.png"},4499:function(e,t,o){e.exports=o.p+"img/fondo_2.0796de0c.png"}},t={};function o(r){var s=t[r];if(void 0!==s)return s.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,o),a.exports}o.m=e,function(){var e=[];o.O=function(t,r,s,a){if(!r){var n=1/0;for(d=0;d<e.length;d++){r=e[d][0],s=e[d][1],a=e[d][2];for(var i=!0,l=0;l<r.length;l++)(!1&a||n>=a)&&Object.keys(o.O).every((function(e){return o.O[e](r[l])}))?r.splice(l--,1):(i=!1,a<n&&(n=a));if(i){e.splice(d--,1);var c=s();void 0!==c&&(t=c)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[r,s,a]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,r){return o.f[r](e,t),t}),[]))}}(),function(){o.u=function(e){return"js/about.c25543b3.js"}}(),function(){o.miniCssF=function(e){}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="web_implementada_con_firebase:";o.l=function(r,s,a,n){if(e[r])e[r].push(s);else{var i,l;if(void 0!==a)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==r||u.getAttribute("data-webpack")==t+a){i=u;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,o.nc&&i.setAttribute("nonce",o.nc),i.setAttribute("data-webpack",t+a),i.src=r),e[r]=[s];var m=function(t,o){i.onerror=i.onload=null,clearTimeout(h);var s=e[r];if(delete e[r],i.parentNode&&i.parentNode.removeChild(i),s&&s.forEach((function(e){return e(o)})),t)return t(o)},h=setTimeout(m.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=m.bind(null,i.onerror),i.onload=m.bind(null,i.onload),l&&document.head.appendChild(i)}}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.p="/animacion-japonesa/"}(),function(){var e={143:0};o.f.j=function(t,r){var s=o.o(e,t)?e[t]:void 0;if(0!==s)if(s)r.push(s[2]);else{var a=new Promise((function(o,r){s=e[t]=[o,r]}));r.push(s[2]=a);var n=o.p+o.u(t),i=new Error,l=function(r){if(o.o(e,t)&&(s=e[t],0!==s&&(e[t]=void 0),s)){var a=r&&("load"===r.type?"missing":r.type),n=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+a+": "+n+")",i.name="ChunkLoadError",i.type=a,i.request=n,s[1](i)}};o.l(n,l,"chunk-"+t,t)}},o.O.j=function(t){return 0===e[t]};var t=function(t,r){var s,a,n=r[0],i=r[1],l=r[2],c=0;if(n.some((function(t){return 0!==e[t]}))){for(s in i)o.o(i,s)&&(o.m[s]=i[s]);if(l)var d=l(o)}for(t&&t(r);c<n.length;c++)a=n[c],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(d)},r=self["webpackChunkweb_implementada_con_firebase"]=self["webpackChunkweb_implementada_con_firebase"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=o.O(void 0,[998],(function(){return o(7604)}));r=o.O(r)})();
//# sourceMappingURL=app.417b22a7.js.map