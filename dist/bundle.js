!function(n){function r(r){for(var t,o,c=r[0],u=r[1],s=r[2],l=0,p=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(t in u)Object.prototype.hasOwnProperty.call(u,t)&&(n[t]=u[t]);for(d&&d(r);p.length;)p.shift()();return i.push.apply(i,s||[]),e()}function e(){for(var n,r=0;r<i.length;r++){for(var e=i[r],t=!0,c=1;c<e.length;c++){var u=e[c];0!==a[u]&&(t=!1)}t&&(i.splice(r--,1),n=o(o.s=e[0]))}return n}var t={},a={2:0},i=[];function o(r){if(t[r])return t[r].exports;var e=t[r]={i:r,l:!1,exports:{}};return n[r].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=n,o.c=t,o.d=function(n,r,e){o.o(n,r)||Object.defineProperty(n,r,{enumerable:!0,get:e})},o.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.t=function(n,r){if(1&r&&(n=o(n)),8&r)return n;if(4&r&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&r&&"string"!=typeof n)for(var t in n)o.d(e,t,function(r){return n[r]}.bind(null,t));return e},o.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(r,"a",r),r},o.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},o.p="";var c=window.webpackJsonp=window.webpackJsonp||[],u=c.push.bind(c);c.push=r,c=c.slice();for(var s=0;s<c.length;s++)r(c[s]);var d=u;i.push([11,1,0]),e()}([,,,,,function(n,r,e){var t=e(2),a=e(6);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[n.i,a,""]]);var i={insert:"head",singleton:!1};t(a,i);n.exports=a.locals||{}},function(n,r,e){(r=e(3)(!1)).push([n.i,"*,\r\n*:after,\r\n*:before {\r\n  -webkit-box-sizing: border-box;\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\n\r\n.skip-link {\r\n  position: absolute;\r\n  top: -40px;\r\n  left: 0;\r\n  background-color: #bf1722;\r\n  color: white;\r\n  padding: 8px;\r\n  z-index: 100;\r\n}\r\n\r\n.skip-link:focus {\r\n  z-index: 100;\r\n  top: 0;\r\n}\r\n\r\nbody {\r\n  background-color: #002366;\r\n}\r\n.navigation-wrap {\r\n  position: fixed;\r\n  left: 0;\r\n  width: 100%;\r\n  z-index: 1000;\r\n  background-color: #002366;\r\n  box-shadow: 0 0.125rem 1.75rem 0 rgb(0, 0, 0, 0.5);\r\n  -webkit-transition: all 0.3s ease-out;\r\n  transition: all 0.3s ease-out;\r\n  justify-content: space-between;\r\n}\r\n.navbar h1 a {\r\n  font-size: 36px;\r\n}\r\n.navbar a {\r\n  font-size: 24px;\r\n  color: #fa8072;\r\n}\r\n.navigation-wrap .nav-item {\r\n  padding: 0 0.625rem;\r\n  transition: all 0.3s linear;\r\n}\r\n.navbar-toggler i {\r\n  color: #fa8072;\r\n}\r\n.navbar-toggler:focus {\r\n  outline: unset;\r\n  border: unset;\r\n  box-shadow: none;\r\n}\r\n.skip {\r\n  width: 100%;\r\n  min-height: 50px;\r\n}\r\n#title-page {\r\n  padding-top: 90px;\r\n}\r\n.top-banner {\r\n  padding-top: 90px;\r\n}\r\n.hero {\r\n  background-image: url('/images/dummyHero.jpg');\r\n  width: 100%;\r\n  min-height: 350px;\r\n  background-color: grey;\r\n  padding-top: 50px;\r\n  background-size: cover;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n}\r\nh2 {\r\n  font-size: 31px;\r\n  padding-top: 20px;\r\n  color: #fa8072;\r\n  text-align: center;\r\n}\r\n.fas {\r\n  font-size: 36px;\r\n}\r\n#searchForm {\r\n  justify-content: center;\r\n  padding-top: 20px;\r\n}\r\n#inputDoa {\r\n  width: 50%;\r\n  height: 50px;\r\n  text-align: center;\r\n}\r\n#buttonSearch {\r\n  font-size: 20px;\r\n  width: 20%;\r\n  height: 50px;\r\n  background-color: #fa8072;\r\n  border: 1px solid #fa8072;\r\n  color: #fff;\r\n  \r\n  box-shadow: 0px 2px 10px -1px rgb(0, 0, 0, 19%);\r\n  -webkit-transition: all 0.4s ease-out 0s;\r\n  -o-transition: all 0.4s ease-out 0s;\r\n  -moz-transition: all 0.4s ease-out 0s;\r\n  transition: all 0.4s ease-out 0s;\r\n}\r\n#buttonSearch:hover {\r\n  background-color: transparent;\r\n  color: #fa8072;\r\n}\r\n.doa-list {\r\n  position: relative;\r\n  padding: 20px;\r\n  display: grid;\r\n  grid-template-columns: 1fr;\r\n  gap: 10px;\r\n}\r\n.doa-item {\r\n  position: relative;\r\n  overflow: hidden;\r\n  width: 100%;\r\n  height: 100%;\r\n  border: none;\r\n  border-radius: 10px;\r\n  transition: 0.7s ease-in-out;\r\n}\r\n.doa-item .img-item {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 70%;\r\n  z-index: 1;\r\n}\r\n\r\n.doa-item .img-item img {\r\n  width: 100%;\r\n  max-height: 100%;\r\n  border-radius: 10px;\r\n  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);\r\n}\r\n.doa-item .content-item {\r\n  overflow: auto;\r\n  top: -50%;\r\n  left: 10%;\r\n  border-radius: 10px;\r\n  height: 40%;\r\n  background-color: #fff;\r\n  position: relative;\r\n  width: 80%;\r\n  text-align: center;\r\n  transition: 0.7 ease-in-out;\r\n}\r\n.doa-item:hover .content-item {\r\n  top: -20%;\r\n}\r\n.doa-item .title-item {\r\n  padding-left: 5px;\r\n  padding-right: 5px;\r\n  position: relative;\r\n  top: 60%;\r\n}\r\n.doa-item .title-item a {\r\n  color: #002366;\r\n}\r\n.card-detail {\r\n  background-color: #99ddcc;\r\n  width: 80%;\r\n}\r\n.card-title {\r\n  font-weight: bold;\r\n}\r\n.card-text {\r\n  font-size: 27px;\r\n}\r\n.btn-card {\r\n  font-size: 55px;\r\n}\r\nbutton {\r\n  border: none;\r\n  background-color: transparent;\r\n}\r\n.btn-ingin-actived,\r\n.btn-sudah-actived {\r\n  color: #fa8072;\r\n}\r\n\r\n.card .container-button .d-grid button {\r\n  margin: 8px;\r\n  min-width: 44px;\r\n}",""]),n.exports=r},function(n,r,e){var t=e(2),a=e(8);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[n.i,a,""]]);var i={insert:"head",singleton:!1};t(a,i);n.exports=a.locals||{}},function(n,r,e){(r=e(3)(!1)).push([n.i,"@media screen and (max-width: 669px){\r\n  .app-bar .navbar .container .navbar-brand{\r\n    margin-left: 10px;\r\n  }\r\n  .hero {\r\n    background-image: url('/images/dummyHero-small.jpg');\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 670px) {\r\n  .app-bar .navbar .container h1 a{\r\n    font-size: 1em;\r\n  }\r\n\r\n  .hero {\r\n    background-image: url('/images/dummyHero-small.jpg');\r\n  }\r\n  \r\n  .app-bar .navbar .container .navbar-brand{\r\n    margin-left: -70px;\r\n  }\r\n\r\n  .app-bar .navbar .container .navbar-toggler{\r\n    margin-right: -70px;\r\n  }\r\n  .doa-list {\r\n    grid-template-columns: 1fr 1fr;\r\n  }\r\n  .doa-item .title-item {\r\n    top: 65%;\r\n  }\r\n  .doa-item:hover .content-item {\r\n    top: -25%;\r\n  }\r\n  .doa-item .title-item a {\r\n    font-size: 25px;\r\n  }\r\n}\r\n@media screen and (min-width: 1005px) {\r\n  .doa-item .title-item a {\r\n    font-size: 27px;\r\n  }\r\n  .hero {\r\n    background-image: url('/images/dummyHero-large.jpg');\r\n  }\r\n}\r\n@media screen and (min-width: 1240px) {\r\n  .doa-list {\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n  }\r\n  .doa-item .title-item {\r\n    top: 60%;\r\n  }\r\n  .doa-item:hover .content-item {\r\n    top: -20%;\r\n  }\r\n  .doa-item .title-item a {\r\n    font-size: 29px;\r\n  }\r\n}\r\n@media screen and (max-width: 991px) {\r\n  .navigation-wrap {\r\n    text-align: center;\r\n  }\r\n  .navigation-wrap .nav-link {\r\n    line-height: 30px;\r\n  }\r\n}\r\n",""]),n.exports=r},,,function(n,r,e){"use strict";e.r(r);e(5),e(7),e(9),e(1),e(10);var t={parseActiveUrlWithCombiner:function(){var n=window.location.hash.slice(1).toLowerCase(),r=this._urlSplitter(n);return this._urlCombiner(r)},parseActiveUrlWithoutCombiner:function(){var n=window.location.hash.slice(1).toLowerCase();return this._urlSplitter(n)},_urlSplitter:function(n){var r=n.split("/");return{resource:r[1]||null,id:r[2]||null,verb:r[3]||null}},_urlCombiner:function(n){return(n.resource?"/".concat(n.resource):"/")+(n.id?"/{id_doa}":"")+(n.verb?"/".concat(n.verb):"")}},a={BASE_URL:"https://tanyadoa-api.herokuapp.com",CACHE_NAME:"aoDe-V1",DATABASE_NAME:"aoDe-database",DATABASE_VERSION:1,OBJECT_STORE_NAME_1:"ingindihafal",OBJECT_STORE_NAME_2:"sudahdihafal"},i={LIST:"".concat(a.BASE_URL,"/all"),DETAIL:function(n){return"".concat(a.BASE_URL,"/show/").concat(n)},SEARCH:function(n){return"".concat(a.BASE_URL,"/search/").concat(n)}};function o(n,r,e,t,a,i,o){try{var c=n[i](o),u=c.value}catch(n){return void e(n)}c.done?r(u):Promise.resolve(u).then(t,a)}function c(n){return function(){var r=this,e=arguments;return new Promise((function(t,a){var i=n.apply(r,e);function c(n){o(i,t,a,c,u,"next",n)}function u(n){o(i,t,a,c,u,"throw",n)}c(void 0)}))}}function u(n,r){for(var e=0;e<r.length;e++){var t=r[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}var s=function(){function n(){!function(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}(this,n)}var r,e,t,a,o,s;return r=n,e=null,t=[{key:"allDoa",value:(s=c(regeneratorRuntime.mark((function n(){var r,e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch(i.LIST);case 3:return r=n.sent,n.next=6,r.json();case 6:return e=n.sent,n.abrupt("return",e.data);case 10:n.prev=10,n.t0=n.catch(0),alert(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])}))),function(){return s.apply(this,arguments)})},{key:"detailDoa",value:(o=c(regeneratorRuntime.mark((function n(r){var e,t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch(i.DETAIL(r));case 3:return e=n.sent,n.next=6,e.json();case 6:return t=n.sent,n.abrupt("return",t.data[0]);case 10:n.prev=10,n.t0=n.catch(0),alert(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])}))),function(n){return o.apply(this,arguments)})},{key:"searchDoa",value:(a=c(regeneratorRuntime.mark((function n(r){var e,t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch(i.SEARCH(r));case 3:return e=n.sent,n.next=6,e.json();case 6:return t=n.sent,n.abrupt("return",t.data);case 10:n.prev=10,n.t0=n.catch(0),alert(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])}))),function(n){return a.apply(this,arguments)})}],e&&u(r.prototype,e),t&&u(r,t),n}(),d=function(n){return'\n    <div class="doa-item">\n        <div class="img-item">\n            <img class="lazyload" data-src="https://png.pngtree.com/element_our/20190529/ourlarge/pngtree-cartoon-sleeping-day-character-illustration-image_1216735.jpg">\n        </div>\n        <div class="content-item">\n            <div class="title-item">\n                <h3><a id="title-doa" href="'.concat("/#/show/".concat(n.id_doa),'">',n.nama,"</a></h3>\n            </div>\n        </div>\n    </div>\n")},l=function(n){return'\n    <h2 align="center" id="title-page">'.concat(n.nama,'</h2>\n    <div class="card mx-auto card-detail">\n        <img class="lazyload" data-src="https://png.pngtree.com/element_our/20190529/ourlarge/pngtree-cartoon-sleeping-day-character-illustration-image_1216735.jpg" class="card-img-top" alt="...">\n        <div class="card-body">\n            <h3 class="card-title">Lafal :</h3>\n            <p class="card-text" id="txt-lafal" align="justify">').concat(n.lafal,'</p>\n        </div>\n        <div class="card-body">\n            <h3 class="card-title">Transliterasi :</h3>\n            <p class="card-text" align="justify">').concat(n.transliterasi,'</p>\n        </div>\n        <div class="card-body">\n            <h3 class="card-title">Artinya :</h3>\n            <p class="card-text" align="justify">').concat(n.arti,'</p>\n        </div>\n        <div class="card-body">\n            <h3 class="card-title">Sumber :</h3>\n            <p class="card-text" align="justify">').concat(n.riwayat,'</p>\n        </div>\n        <div class="container-button">\n            <div class="d-grid gap-2 d-md-flex justify-content-md-end">\n                <button class="btn-voice" ><i class="fas fa-volume-up"></i></button>\n                <button class="btn-ingin" ><i class="fas fa-book-open"></i></button>\n                <button class="btn-sudah" ><i class="fas fa-check-circle"></i></button>\n            </div>\n        </div>\n    </div>\n')};function p(n,r,e,t,a,i,o){try{var c=n[i](o),u=c.value}catch(n){return void e(n)}c.done?r(u):Promise.resolve(u).then(t,a)}function f(n){return function(){var r=this,e=arguments;return new Promise((function(t,a){var i=n.apply(r,e);function o(n){p(i,t,a,o,c,"next",n)}function c(n){p(i,t,a,o,c,"throw",n)}o(void 0)}))}}var h={render:function(){return f(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",'\n        <div class="top-banner"><div class="hero"></div></div>\n        <h2 tabindex="0">Doa-Doa</h2>\n        <form id=\'searchForm\' class="d-flex search-bar">\n          <input id=\'inputDoa\' type="search" placeholder="Masukan Doa" aria-label="Cari Doa">\n          <button id=\'buttonSearch\' class="btn btn-outline-success" type="button">Cari</button>\n        </form>\n        <div class="doa-list"></div>\n        ');case 1:case"end":return n.stop()}}),n)})))()},afterRender:function(){return f(regeneratorRuntime.mark((function n(){var r,e,t,a,i;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.allDoa();case 2:r=n.sent,e=document.querySelector(".doa-list"),r.forEach((function(n){e.innerHTML+=d(n)})),t=document.querySelector("#searchForm"),a=document.querySelector("#buttonSearch"),i=document.querySelector("#inputDoa"),a.addEventListener("click",f(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.searchDoa(i.value);case 2:r=n.sent,e.innerHTML="",r.forEach((function(n){e.innerHTML+=d(n)}));case 5:case"end":return n.stop()}}),n)})))),t.addEventListener("submit",f(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.searchDoa(i.value);case 2:r=n.sent,e.innerHTML="",r.forEach((function(n){e.innerHTML+=d(n)}));case 5:case"end":return n.stop()}}),n)}))));case 10:case"end":return n.stop()}}),n)})))()}},m=e(4);function v(n,r,e,t,a,i,o){try{var c=n[i](o),u=c.value}catch(n){return void e(n)}c.done?r(u):Promise.resolve(u).then(t,a)}function g(n){return function(){var r=this,e=arguments;return new Promise((function(t,a){var i=n.apply(r,e);function o(n){v(i,t,a,o,c,"next",n)}function c(n){v(i,t,a,o,c,"throw",n)}o(void 0)}))}}var b=a.DATABASE_NAME,x=a.DATABASE_VERSION,w=a.OBJECT_STORE_NAME_1,y=a.OBJECT_STORE_NAME_2,k=Object(m.a)(b,x,{upgrade:function(n){n.createObjectStore(w,{keyPath:"id_doa"}),n.createObjectStore(y,{keyPath:"id_doa"})}}),R={searchIngindihafal:function(n){var r=this;return g(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.getAllIngindihafal();case 2:return t=e.sent,e.abrupt("return",new Promise((function(r,e){var a=t.filter((function(r){return r.nama.toUpperCase().includes(n.toUpperCase())}));a.length?r(a):e("".concat(n," is not found"))})));case 4:case"end":return e.stop()}}),e)})))()},getIngindihafal:function(n){return g(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(n){r.next=2;break}return r.abrupt("return");case 2:return r.next=4,k;case 4:return r.abrupt("return",r.sent.get(w,n));case 5:case"end":return r.stop()}}),r)})))()},getAllIngindihafal:function(){return g(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,k;case 2:return n.abrupt("return",n.sent.getAll(w));case 3:case"end":return n.stop()}}),n)})))()},putIngindihafal:function(n){return g(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(n.hasOwnProperty("id_doa")){r.next=2;break}return r.abrupt("return");case 2:return r.next=4,k;case 4:return r.abrupt("return",r.sent.put(w,n));case 5:case"end":return r.stop()}}),r)})))()},deleteIngindihafal:function(n){return g(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,k;case 2:return r.abrupt("return",r.sent.delete(w,n));case 3:case"end":return r.stop()}}),r)})))()}},S={searchSudahdihafal:function(n){var r=this;return g(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.getAllSudahdihafal();case 2:return t=e.sent,e.abrupt("return",new Promise((function(r,e){var a=t.filter((function(r){return r.nama.toUpperCase().includes(n.toUpperCase())}));a.length?r(a):e("".concat(n," is not found"))})));case 4:case"end":return e.stop()}}),e)})))()},getSudahdihafal:function(n){return g(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(n){r.next=2;break}return r.abrupt("return");case 2:return r.next=4,k;case 4:return r.abrupt("return",r.sent.get(y,n));case 5:case"end":return r.stop()}}),r)})))()},getAllSudahdihafal:function(){return g(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,k;case 2:return n.abrupt("return",n.sent.getAll(y));case 3:case"end":return n.stop()}}),n)})))()},putSudahdihafal:function(n){return g(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(n.hasOwnProperty("id_doa")){r.next=2;break}return r.abrupt("return");case 2:return r.next=4,k;case 4:return r.abrupt("return",r.sent.put(y,n));case 5:case"end":return r.stop()}}),r)})))()},deleteSudahdihafal:function(n){return g(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,k;case 2:return r.abrupt("return",r.sent.delete(y,n));case 3:case"end":return r.stop()}}),r)})))()}};function E(n,r,e,t,a,i,o){try{var c=n[i](o),u=c.value}catch(n){return void e(n)}c.done?r(u):Promise.resolve(u).then(t,a)}function _(n){return function(){var r=this,e=arguments;return new Promise((function(t,a){var i=n.apply(r,e);function o(n){E(i,t,a,o,c,"next",n)}function c(n){E(i,t,a,o,c,"throw",n)}o(void 0)}))}}function L(n,r,e,t,a,i,o){try{var c=n[i](o),u=c.value}catch(n){return void e(n)}c.done?r(u):Promise.resolve(u).then(t,a)}function A(n){return function(){var r=this,e=arguments;return new Promise((function(t,a){var i=n.apply(r,e);function o(n){L(i,t,a,o,c,"next",n)}function c(n){L(i,t,a,o,c,"throw",n)}o(void 0)}))}}function T(n,r,e,t,a,i,o){try{var c=n[i](o),u=c.value}catch(n){return void e(n)}c.done?r(u):Promise.resolve(u).then(t,a)}function M(n){return function(){var r=this,e=arguments;return new Promise((function(t,a){var i=n.apply(r,e);function o(n){T(i,t,a,o,c,"next",n)}function c(n){T(i,t,a,o,c,"throw",n)}o(void 0)}))}}var P={"/":h,"/beranda":h,"/ingindihafal":{render:function(){return _(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",'\n        <h2 tabindex="0" id="title-page">Ingin dihafal</h2>\n        <form id=\'searchForm\' class="d-flex search-bar">\n          <input id=\'inputDoa\' type="search" placeholder="Masukan Doa" aria-label="Cari Doa">\n          <button id=\'buttonSearch\' class="btn btn-outline-success" type="button">Cari</button>\n        </form>\n        <div class="doa-list"></div>\n    ');case 1:case"end":return n.stop()}}),n)})))()},afterRender:function(){return _(regeneratorRuntime.mark((function n(){var r,e,t,a;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,R.getAllIngindihafal();case 2:r=n.sent,e=document.querySelector(".doa-list"),r.forEach((function(n){e.innerHTML+=d(n)})),t=document.querySelector("#searchForm"),a=document.querySelector("#inputDoa"),document.querySelector("#buttonSearch").addEventListener("click",_(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=R.searchIngindihafal(a.value),e.innerHTML="",n.prev=2,n.next=5,r;case 5:n.sent.forEach((function(n){e.innerHTML+=d(n)})),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(2),alert(n.t0);case 11:case"end":return n.stop()}}),n,null,[[2,8]])})))),t.addEventListener("submit",_(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=R.searchIngindihafal(a.value),e.innerHTML="",n.prev=2,n.next=5,r;case 5:n.sent.forEach((function(n){e.innerHTML+=d(n)})),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(2),alert(n.t0);case 11:case"end":return n.stop()}}),n,null,[[2,8]])}))));case 10:case"end":return n.stop()}}),n)})))()}},"/sudahdihafal":{render:function(){return A(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",'\n        <h2 tabindex="0" id="title-page">Sudah dihafal</h2>\n        <form id=\'searchForm\' class="d-flex search-bar">\n          <input id=\'inputDoa\' type="search" placeholder="Masukan Doa" aria-label="Cari Doa">\n          <button id=\'buttonSearch\' class="btn btn-outline-success" type="button">Cari</button>\n        </form>\n        <div class="doa-list"></div>\n    ');case 1:case"end":return n.stop()}}),n)})))()},afterRender:function(){return A(regeneratorRuntime.mark((function n(){var r,e,t,a;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,S.getAllSudahdihafal();case 2:r=n.sent,e=document.querySelector(".doa-list"),r.forEach((function(n){e.innerHTML+=d(n)})),t=document.querySelector("#searchForm"),a=document.querySelector("#inputDoa"),document.querySelector("#buttonSearch").addEventListener("click",A(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=S.searchSudahdihafal(a.value),e.innerHTML="",n.next=4,r;case 4:n.sent.forEach((function(n){e.innerHTML+=d(n)}));case 5:case"end":return n.stop()}}),n)})))),t.addEventListener("submit",A(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=S.searchSudahdihafal(a.value),e.innerHTML="",n.next=4,r;case 4:n.sent.forEach((function(n){e.innerHTML+=d(n)}));case 5:case"end":return n.stop()}}),n)}))));case 10:case"end":return n.stop()}}),n)})))()}},"/show/{id_doa}":{render:function(){return M(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",'\n        <div class="doa-list-detail" id="doa-list-detail"></div>\n    ');case 1:case"end":return n.stop()}}),n)})))()},afterRender:function(){return M(regeneratorRuntime.mark((function n(){var r,e,a,i,o,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.parseActiveUrlWithoutCombiner(),n.next=3,s.detailDoa(r.id);case 3:return e=n.sent,document.querySelector("#doa-list-detail").innerHTML=l(e),document.querySelector(".btn-voice").addEventListener("click",(function(){responsiveVoice.isPlaying()?responsiveVoice.cancel():responsiveVoice.speak(document.getElementById("txt-lafal").textContent,"Arabic Male")})),a=document.querySelector(".btn-ingin"),i=document.querySelector(".btn-sudah"),n.next=12,R.getIngindihafal(e.id_doa);case 12:return void 0!==n.sent&&a.classList.add("btn-ingin-actived"),o=document.querySelector(".btn-ingin-actived"),a.addEventListener("click",M(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(null!==o){n.next=9;break}return i.classList.remove("btn-sudah-actived"),n.next=4,S.deleteSudahdihafal(e.id_doa);case 4:return n.next=6,R.putIngindihafal(e);case 6:a.classList.add("btn-ingin-actived"),n.next=12;break;case 9:return a.classList.remove("btn-ingin-actived"),n.next=12,R.deleteIngindihafal(e.id_doa);case 12:case"end":return n.stop()}}),n)})))),n.next=18,S.getSudahdihafal(e.id_doa);case 18:void 0!==n.sent&&i.classList.add("btn-sudah-actived"),c=document.querySelector(".btn-sudah-actived"),i.addEventListener("click",M(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(null!==c){n.next=9;break}return a.classList.remove("btn-ingin-actived"),n.next=4,S.putSudahdihafal(e);case 4:return n.next=6,R.deleteIngindihafal(e.id_doa);case 6:i.classList.add("btn-sudah-actived"),n.next=12;break;case 9:return i.classList.remove("btn-sudah-actived"),n.next=12,S.deleteSudahdihafal(e.id_doa);case 12:case"end":return n.stop()}}),n)}))));case 22:case"end":return n.stop()}}),n)})))()}}};function j(n,r,e,t,a,i,o){try{var c=n[i](o),u=c.value}catch(n){return void e(n)}c.done?r(u):Promise.resolve(u).then(t,a)}function D(n,r){for(var e=0;e<r.length;e++){var t=r[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}var C=new(function(){function n(){!function(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}(this,n)}var r,e,a,i,o;return r=n,(e=[{key:"renderPage",value:(i=regeneratorRuntime.mark((function n(){var r,e,a;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.parseActiveUrlWithCombiner(),e=P[r],a=document.querySelector("#maincontent"),n.next=5,e.render();case 5:return a.innerHTML=n.sent,n.next=8,e.afterRender();case 8:case"end":return n.stop()}}),n)})),o=function(){var n=this,r=arguments;return new Promise((function(e,t){var a=i.apply(n,r);function o(n){j(a,e,t,o,c,"next",n)}function c(n){j(a,e,t,o,c,"throw",n)}o(void 0)}))},function(){return o.apply(this,arguments)})}])&&D(r.prototype,e),a&&D(r,a),n}());window.addEventListener("hashchange",(function(){C.renderPage()})),window.addEventListener("load",(function(){C.renderPage()})),console.log("halo")}]);