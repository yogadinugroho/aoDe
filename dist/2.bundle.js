(window.webpackJsonp=window.webpackJsonp||[]).push([[2],[,,,,,,,function(n,r,e){"use strict";var t=e(8),a=e.n(t);function i(n,r,e,t,a,i,o){try{var c=n[i](o),s=c.value}catch(n){return void e(n)}c.done?r(s):Promise.resolve(s).then(t,a)}var o=function(){var n,r=(n=regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!("serviceWorker"in navigator)){n.next=4;break}return n.next=3,a.a.register();case 3:return n.abrupt("return");case 4:console.log("Service worker not supported in this browser");case 5:case"end":return n.stop()}}),n)})),function(){var r=this,e=arguments;return new Promise((function(t,a){var o=n.apply(r,e);function c(n){i(o,t,a,c,s,"next",n)}function s(n){i(o,t,a,c,s,"throw",n)}c(void 0)}))});return function(){return r.apply(this,arguments)}}();r.a=o},,function(n,r,e){"use strict";var t={parseActiveUrlWithCombiner:function(){var n=window.location.hash.slice(1).toLowerCase(),r=this._urlSplitter(n);return this._urlCombiner(r)},parseActiveUrlWithoutCombiner:function(){var n=window.location.hash.slice(1).toLowerCase();return this._urlSplitter(n)},_urlSplitter:function(n){var r=n.split("/");return{resource:r[1]||null,id:r[2]||null,verb:r[3]||null}},_urlCombiner:function(n){return(n.resource?"/".concat(n.resource):"/")+(n.id?"/{id_doa}":"")+(n.verb?"/".concat(n.verb):"")}},a=e(2),i=e(1),o=function(n){return'\n    <div class="doa-item">\n        <div class="img-item">\n            <img class="lazyload" data-src="'.concat(n.gambar,'" alt="').concat(n.nama,'">\n        </div>\n        <div class="content-item" id="content-item">\n            <div class="title-item">\n                <p class="title__doa"><a id="title-doa" href="',"/#/show/".concat(n.id),'">').concat(n.nama,"</a></p>\n            </div>\n        </div>\n    </div>\n")},c=function(n){return'\n    <div class="card mx-auto card-detail">\n    <h2 class="doa-name" tabindex="0" align="center">'.concat(n.nama.toUpperCase(),'</h2>\n    <img class="lazyload" data-src="').concat(n.gambar,'" class="card-img-top-center" alt="').concat(n.nama,'">\n        <div class="card-body">\n            <h3 tabindex="0" class="card-title">Lafal :</h3>\n            <p class="card-text" id="txt-lafal">').concat(n.ayat,'</p>\n        </div>\n        <div class="card-body">\n            <h3 tabindex="0" class="card-title">Latin :</h3>\n            <p class="card-text">').concat(n.latin,'</p>\n        </div>\n        <div class="card-body">\n            <h3 tabindex="0" class="card-title">Artinya :</h3>\n            <p class="card-text">').concat(n.artinya,'</p>\n        </div>\n        <div class="container-button">\n            <div class="d-grid gap-2 d-md-flex justify-content-md-end">\n                <button class="btn-voice" aria-label="dengarkan latin"><i class="fas fa-volume-up"></i></button>\n                <button class="btn-ingin" aria-label="ingin dihafal"><i class="fas fa-book-open"></i></button>\n                <button class="btn-sudah" aria-label="sudah dihafal"><i class="fas fa-check-circle"></i></button>\n            </div>\n        </div>\n    </div>\n')};function s(n,r,e,t,a,i,o){try{var c=n[i](o),s=c.value}catch(n){return void e(n)}c.done?r(s):Promise.resolve(s).then(t,a)}function u(n){return function(){var r=this,e=arguments;return new Promise((function(t,a){var i=n.apply(r,e);function o(n){s(i,t,a,o,c,"next",n)}function c(n){s(i,t,a,o,c,"throw",n)}o(void 0)}))}}var d={render:function(){return u(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return document.querySelector(".skip-link").addEventListener("click",(function(n){n.preventDefault(),document.getElementById("title-doa").focus()})),n.abrupt("return",'\n        <div class="top-banner"><div class="hero"><img width="100%" class="img-fluid" src="/images/aodeHero.jpg" alt="hero image"></div></div>\n        <h2 tabindex="0" class="title__doa" id="doa">Doa-Doa</h2>\n        <form id=\'searchForm\' class="d-flex search-bar">\n          <input id=\'inputDoa\' autocomplete="off" type="search" placeholder="masukan nama doa" aria-label="">\n          <button id=\'buttonSearch\' class="btn btn-outline-success" type="button">Cari</button>\n        </form>\n        <div class="doa-list"></div>\n        ');case 3:case"end":return n.stop()}}),n)})))()},afterRender:function(){return u(regeneratorRuntime.mark((function n(){var r,e,t,c,s;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r=document.querySelector(".doa-list"),i.a.forEach((function(n){r.innerHTML+=o(n)})),e=document.querySelector("#searchForm"),t=document.querySelector("#buttonSearch"),c=document.querySelector("#inputDoa"),t.addEventListener("click",u(regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(""!==c.value){n.next=5;break}r.innerHTML="",i.a.forEach((function(n){r.innerHTML+=o(n)})),n.next=10;break;case 5:return n.next=7,a.a.searchDoa(c.value);case 7:e=n.sent,r.innerHTML="",e.forEach((function(n){r.innerHTML+=o(n)}));case 10:case"end":return n.stop()}}),n)})))),e.addEventListener("submit",u(regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(""!==c.value){n.next=5;break}r.innerHTML="",i.a.forEach((function(n){r.innerHTML+=o(n)})),n.next=10;break;case 5:return n.next=7,a.a.searchDoa(c.value);case 7:e=n.sent,r.innerHTML="",e.forEach((function(n){r.innerHTML+=o(n)}));case 10:case"end":return n.stop()}}),n)})))),(s=document.querySelectorAll("#title-doa")).forEach((function(n){n.addEventListener("focus",(function(n){n.target.parentElement.parentElement.parentElement.style.top="-20%"}))})),s.forEach((function(n){n.addEventListener("blur",(function(n){n.target.parentElement.parentElement.parentElement.style.top="-50%"}))}));case 10:case"end":return n.stop()}}),n)})))()}},l=e(0);function p(n,r,e,t,a,i,o){try{var c=n[i](o),s=c.value}catch(n){return void e(n)}c.done?r(s):Promise.resolve(s).then(t,a)}function f(n){return function(){var r=this,e=arguments;return new Promise((function(t,a){var i=n.apply(r,e);function o(n){p(i,t,a,o,c,"next",n)}function c(n){p(i,t,a,o,c,"throw",n)}o(void 0)}))}}function m(n,r,e,t,a,i,o){try{var c=n[i](o),s=c.value}catch(n){return void e(n)}c.done?r(s):Promise.resolve(s).then(t,a)}function h(n){return function(){var r=this,e=arguments;return new Promise((function(t,a){var i=n.apply(r,e);function o(n){m(i,t,a,o,c,"next",n)}function c(n){m(i,t,a,o,c,"throw",n)}o(void 0)}))}}function v(n,r,e,t,a,i,o){try{var c=n[i](o),s=c.value}catch(n){return void e(n)}c.done?r(s):Promise.resolve(s).then(t,a)}function g(n){return function(){var r=this,e=arguments;return new Promise((function(t,a){var i=n.apply(r,e);function o(n){v(i,t,a,o,c,"next",n)}function c(n){v(i,t,a,o,c,"throw",n)}o(void 0)}))}}var b={"/":d,"/beranda":d,"/ingindihafal":{render:function(){return f(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return document.querySelector(".skip-link").addEventListener("click",(function(n){n.preventDefault(),document.getElementById("title-doa").focus()})),n.abrupt("return",'\n        <h2 tabindex="0" id="title-page">Ingin dihafal</h2>\n        <form id=\'searchForm\' class="d-flex search-bar">\n          <input id=\'inputDoa\' type="search" autocomplete="off" placeholder="masukkan nama doa" aria-label="">\n          <button id=\'buttonSearch\' class="btn btn-outline-success" type="button">Cari</button>\n        </form>\n        <div class="doa-list"></div>\n    ');case 3:case"end":return n.stop()}}),n)})))()},afterRender:function(){return f(regeneratorRuntime.mark((function n(){var r,e,t,a,i;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l.a.getAllIngindihafal();case 2:r=n.sent,e=document.querySelector(".doa-list"),r.forEach((function(n){e.innerHTML+=o(n)})),t=document.querySelector("#searchForm"),a=document.querySelector("#inputDoa"),document.querySelector("#buttonSearch").addEventListener("click",f(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=l.a.searchIngindihafal(a.value),e.innerHTML="",n.prev=2,n.next=5,r;case 5:n.sent.forEach((function(n){e.innerHTML+=o(n)})),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(2),alert(n.t0);case 11:case"end":return n.stop()}}),n,null,[[2,8]])})))),t.addEventListener("submit",f(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=l.a.searchIngindihafal(a.value),e.innerHTML="",n.prev=2,n.next=5,r;case 5:n.sent.forEach((function(n){e.innerHTML+=o(n)})),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(2),alert(n.t0);case 11:case"end":return n.stop()}}),n,null,[[2,8]])})))),(i=document.querySelectorAll("#title-doa")).forEach((function(n){n.addEventListener("focus",(function(n){n.target.parentElement.parentElement.parentElement.style.top="-20%"}))})),i.forEach((function(n){n.addEventListener("blur",(function(n){n.target.parentElement.parentElement.parentElement.style.top="-50%"}))}));case 13:case"end":return n.stop()}}),n)})))()}},"/sudahdihafal":{render:function(){return h(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return document.querySelector(".skip-link").addEventListener("click",(function(n){n.preventDefault(),document.getElementById("title-doa").focus()})),n.abrupt("return",'\n        <h2 tabindex="0" id="title-page">Sudah dihafal</h2>\n        <form id=\'searchForm\' class="d-flex search-bar">\n          <input id=\'inputDoa\' type="search" autocomplete="off" placeholder="masukkan nama doa" aria-label="">\n          <button id=\'buttonSearch\' class="btn btn-outline-success" type="button">Cari</button>\n        </form>\n        <div class="doa-list"></div>\n    ');case 3:case"end":return n.stop()}}),n)})))()},afterRender:function(){return h(regeneratorRuntime.mark((function n(){var r,e,t,a,i;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l.b.getAllSudahdihafal();case 2:r=n.sent,e=document.querySelector(".doa-list"),r.forEach((function(n){e.innerHTML+=o(n)})),t=document.querySelector("#searchForm"),a=document.querySelector("#inputDoa"),document.querySelector("#buttonSearch").addEventListener("click",h(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=l.b.searchSudahdihafal(a.value),e.innerHTML="",n.next=4,r;case 4:n.sent.forEach((function(n){e.innerHTML+=o(n)}));case 5:case"end":return n.stop()}}),n)})))),t.addEventListener("submit",h(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=l.b.searchSudahdihafal(a.value),e.innerHTML="",n.next=4,r;case 4:n.sent.forEach((function(n){e.innerHTML+=o(n)}));case 5:case"end":return n.stop()}}),n)})))),(i=document.querySelectorAll("#title-doa")).forEach((function(n){n.addEventListener("focus",(function(n){n.target.parentElement.parentElement.parentElement.style.top="-20%"}))})),i.forEach((function(n){n.addEventListener("blur",(function(n){n.target.parentElement.parentElement.parentElement.style.top="-50%"}))}));case 13:case"end":return n.stop()}}),n)})))()}},"/show/{id_doa}":{render:function(){return g(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return document.querySelector(".skip-link").addEventListener("click",(function(n){n.preventDefault(),document.getElementById("title-page").focus()})),n.abrupt("return",'\n        <div class="doa-list-detail" id="doa-list-detail"></div>\n    ');case 3:case"end":return n.stop()}}),n)})))()},afterRender:function(){return g(regeneratorRuntime.mark((function n(){var r,e,i,o,s,u;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.parseActiveUrlWithoutCombiner(),n.next=3,a.a.detailDoa(r.id);case 3:return e=n.sent,console.log(e),document.querySelector("#doa-list-detail").innerHTML=c(e),document.querySelector(".btn-voice").addEventListener("click",(function(){responsiveVoice.isPlaying()?responsiveVoice.cancel():responsiveVoice.speak(document.getElementById("txt-lafal").textContent,"Arabic Male")})),i=document.querySelector(".btn-ingin"),o=document.querySelector(".btn-sudah"),n.next=13,l.a.getIngindihafal(e.id);case 13:return void 0!==n.sent&&i.classList.add("btn-ingin-actived"),s=document.querySelector(".btn-ingin-actived"),i.addEventListener("click",g(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(null!==s){n.next=10;break}return swal("doa berhasil dimasukkan","jangan lupa dihafal ya!","success"),o.classList.remove("btn-sudah-actived"),n.next=5,l.b.deleteSudahdihafal(e.id);case 5:return n.next=7,l.a.putIngindihafal(e);case 7:i.classList.add("btn-ingin-actived"),n.next=14;break;case 10:return swal("doa berhasil dihapus","","success"),i.classList.remove("btn-ingin-actived"),n.next=14,l.a.deleteIngindihafal(e.id);case 14:case"end":return n.stop()}}),n)})))),n.next=19,l.b.getSudahdihafal(e.id);case 19:void 0!==n.sent&&o.classList.add("btn-sudah-actived"),u=document.querySelector(".btn-sudah-actived"),o.addEventListener("click",g(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(null!==u){n.next=10;break}return swal("pintar! kamu sudah menghafalnya","jangan lupa berdoa setiap hari ya!","success"),i.classList.remove("btn-ingin-actived"),n.next=5,l.b.putSudahdihafal(e);case 5:return n.next=7,l.a.deleteIngindihafal(e.id);case 7:o.classList.add("btn-sudah-actived"),n.next=14;break;case 10:return swal("doa berhasil dihapus","","success"),o.classList.remove("btn-sudah-actived"),n.next=14,l.b.deleteSudahdihafal(e.id);case 14:case"end":return n.stop()}}),n)}))));case 23:case"end":return n.stop()}}),n)})))()}}};function x(n,r,e,t,a,i,o){try{var c=n[i](o),s=c.value}catch(n){return void e(n)}c.done?r(s):Promise.resolve(s).then(t,a)}function w(n,r){for(var e=0;e<r.length;e++){var t=r[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}var y=function(){function n(){!function(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}(this,n)}var r,e,a,i,o;return r=n,(e=[{key:"renderPage",value:(i=regeneratorRuntime.mark((function n(){var r,e,a;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.parseActiveUrlWithCombiner(),e=b[r],a=document.querySelector("#maincontent"),n.next=5,e.render();case 5:return a.innerHTML=n.sent,n.next=8,e.afterRender();case 8:case"end":return n.stop()}}),n)})),o=function(){var n=this,r=arguments;return new Promise((function(e,t){var a=i.apply(n,r);function o(n){x(a,e,t,o,c,"next",n)}function c(n){x(a,e,t,o,c,"throw",n)}o(void 0)}))},function(){return o.apply(this,arguments)})}])&&w(r.prototype,e),a&&w(r,a),n}();r.a=y},,,function(n,r,e){var t=e(5),a=e(13);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[n.i,a,""]]);var i={insert:"head",singleton:!1};t(a,i);n.exports=a.locals||{}},function(n,r,e){(r=e(6)(!1)).push([n.i,"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap);"]),r.push([n.i,"@import url(https://fonts.googleapis.com/css2?family=Nunito:wght@500&display=swap);"]),r.push([n.i,"*,\r\n*:after,\r\n*:before {\r\n  -webkit-box-sizing: border-box;\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\na {\r\n  display: block;\r\n  min-height: 44px;\r\n  min-width: 44px;\r\n  text-decoration: none;\r\n}\r\nhtml {\r\n  scroll-behavior: smooth;\r\n}\r\n.skip-link {\r\n  position: absolute;\r\n  top: -140px;\r\n  left: 0;\r\n  background-color: #bf1722;\r\n  color: white;\r\n  padding: 8px;\r\n  z-index: 100;\r\n}\r\n\r\n.skip-link:focus {\r\n  top: 0;\r\n}\r\n\r\nbody {\r\n  background-color: #002366;\r\n}\r\n.navigation-wrap {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  z-index: 1000;\r\n  background-color: #002366;\r\n  box-shadow: 0 0.125rem 1.75rem 0 rgb(0, 0, 0, 0.5);\r\n  -webkit-transition: all 0.3s ease-out;\r\n  transition: all 0.3s ease-out;\r\n  justify-content: space-between;\r\n}\r\n.navigation-wrap i {\r\n  font-size: 27px;\r\n}\r\n.navbar-brand, .card-text, .title__doa {\r\n  font-family: 'Poppins', sans-serif;\r\n}\r\n.navbar h1 a {\r\n  font-size: 36px;\r\n}\r\n.navbar a {\r\n  font-size: 24px;\r\n  color: #fa8072;\r\n}\r\n.navigation-wrap .nav-item {\r\n  padding: 0 0.625rem;\r\n  transition: all 0.3s linear;\r\n}\r\n.navbar-toggler i {\r\n  color: #fa8072;\r\n}\r\n.navbar-toggler:focus {\r\n  outline: unset;\r\n  border: unset;\r\n  box-shadow: none;\r\n}\r\n.nav-item a {\r\n  font-family: 'Poppins', sans-serif;\r\n  font-size: 20px;\r\n}\r\n.nav-item a:after{\r\n    background: none repeat scroll 0 0 transparent;\r\n    bottom: 0;\r\n    content: \"\";\r\n    display: block;\r\n    height: 2px;\r\n    left: 50%;\r\n    background: #fff;\r\n    transition: width 0.3s ease 0s, left 0.3s ease 0s;\r\n    width: 0;\r\n}\r\n.nav-item a:hover:after {\r\n  margin-top: 2px; \r\n  width: 100%;  \r\n}\r\n.top-banner {\r\n  padding-top: 100px;\r\n}\r\n.hero {\r\n  background-color: grey; \r\n}\r\nh2 {\r\n  font-size: 31px;\r\n  padding-top: 20px;\r\n  text-align: center;\r\n}\r\n#title-page {\r\n  font-size: 36px;\r\n  color: #fa8072;\r\n  padding-top: 100px;\r\n}\r\n#doa {\r\n  color: #fa8072;\r\n}\r\n.doa-list-detail {\r\n  padding-top: 50px;\r\n  font-family: 'Nunito', sans-serif;\r\n}\r\n.fas {\r\n  font-size: 36px;\r\n}\r\n#searchForm {\r\n  justify-content: center;\r\n  padding-top: 20px;\r\n}\r\n#inputDoa {\r\n  font-size: 18px;\r\n  word-spacing: 4px;\r\n  text-align: center;\r\n  width: 50%;\r\n  height: 50px;\r\n  padding-left: 10px;\r\n  border-radius: 10px;\r\n}\r\n#buttonSearch {\r\n  margin-left: 10px;\r\n  font-size: 20px;\r\n  width: 20%;\r\n  height: 50px;\r\n  background-color: #fa8072;\r\n  border: 1px solid #fa8072;\r\n  color: #fff;\r\n  border-radius: 10px;\r\n\r\n  box-shadow: 0px 2px 10px -1px rgb(0, 0, 0, 19%);\r\n  -webkit-transition: all 0.4s ease-out 0s;\r\n  -o-transition: all 0.4s ease-out 0s;\r\n  -moz-transition: all 0.4s ease-out 0s;\r\n  transition: all 0.4s ease-out 0s;\r\n}\r\n#buttonSearch:hover,\r\n#buttonSearch:focus {\r\n  background-color: transparent;\r\n  color: #fa8072;\r\n}\r\n.doa-list {\r\n  position: relative;\r\n  padding: 20px;\r\n  display: grid;\r\n  grid-template-columns: 1fr;\r\n  gap: 10px;\r\n}\r\n\r\n.doa-item {\r\n  position: relative;\r\n  overflow: hidden;\r\n  width: 100%;\r\n  height: 100%;\r\n  border: none;\r\n  border-radius: 24px;\r\n  transition: 0.7s ease-in-out;\r\n}\r\n.doa-item .img-item {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 70%;\r\n  z-index: 1;\r\n}\r\n\r\n.doa-item .img-item img {\r\n  width: 100%;\r\n  max-height: 100%;\r\n  border-radius: 10px;\r\n  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);\r\n}\r\n.doa-item .content-item {\r\n  overflow: auto;\r\n  top: -20%;\r\n  left: 10%;\r\n  border-radius: 20px;\r\n  height: 40%;\r\n  background-color: #fff;\r\n  position: relative;\r\n  width: 80%;\r\n  text-align: center;\r\n  transition: 0.7 ease-in-out;\r\n}\r\n.doa-item:hover .content-item {\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);\r\n}\r\n.doa-item .title-item {\r\n  padding-left: 5px;\r\n  padding-right: 5px;\r\n  position: relative;\r\n  top: 60%;\r\n  font-size: 10px;\r\n}\r\n.doa-item .title-item a {\r\n  color: #002366;\r\n}\r\n.card-detail {\r\n  position: relative;\r\n  margin-top: 64px;\r\n  border-radius: 32px;\r\n  background-color: #99ddcc;\r\n  width: 80%;\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);\r\n}\r\n.card-detail img {\r\n  border-radius: 32px;\r\n  max-width: 60%;\r\n  max-height: 60%;\r\n  margin: 32px auto;\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.8);\r\n}\r\n.card-title {\r\n  font-weight: bold;\r\n}\r\n.card-text {\r\n  font-size: 27px;\r\n}\r\n.btn-card {\r\n  font-size: 55px;\r\n}\r\nbutton {\r\n  min-height: 44px;\r\n  min-width: 44px;\r\n  border: none;\r\n  background-color: transparent;\r\n}\r\n.btn-ingin-actived,\r\n.btn-sudah-actived {\r\n  color: #fa8072;\r\n}\r\n.card .container-button .d-grid button {\r\n  margin: 8px;\r\n  min-width: 44px;\r\n}\r\n.modal-header h5,\r\n.modal-body p {\r\n  color: black;\r\n}\r\nfooter {\r\n  margin-top: 50px;\r\n  background: #002366;\r\n  width: 100%;\r\n  color: #fa8072;\r\n}\r\n.about {\r\n  box-shadow: 0 0.125rem 1.75rem 0 rgb(0, 0, 0, 0.5);\r\n  padding: 20px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  text-align: center;\r\n}\r\n.about p {\r\n  max-width: 500px;\r\n  line-height: 28px;\r\n  font-size: 14px;\r\n  margin: 2px auto;\r\n}\r\n.socials {\r\n  list-style: none;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin: 1rem 0 3rem 0;\r\n}\r\n.socials li {\r\n  margin: 0 2px;\r\n}\r\n.socials a {\r\n  color: #fa8072;\r\n}\r\n.socials a i {\r\n  font-size: 1.1rem;\r\n}\r\n",""]),n.exports=r},function(n,r,e){var t=e(5),a=e(15);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[n.i,a,""]]);var i={insert:"head",singleton:!1};t(a,i);n.exports=a.locals||{}},function(n,r,e){(r=e(6)(!1)).push([n.i,"@media screen and (max-width: 669px) {\r\n  .doa-name {\r\n    margin-top: 10px;\r\n    font-size: 24px;\r\n  }\r\n  .card-body p {\r\n    font-size: 18px;\r\n  }\r\n  .doa-item .title-item a {\r\n    font-size: 24px;\r\n  }\r\n  .navbar-toggler {\r\n    margin-right: 16px;\r\n  }\r\n  .navbar-brand {\r\n    margin-left: 16px;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 670px) {\r\n  .doa-list {\r\n    grid-template-columns: 1fr 1fr;\r\n  }\r\n  .doa-item .title-item {\r\n    top: 65%;\r\n  }\r\n  .doa-item .title-item a {\r\n    font-size: 20px;\r\n  }\r\n}\r\n@media screen and (min-width: 1005px) {\r\n  .doa-item .title-item a {\r\n    font-size: 20px;\r\n  }\r\n}\r\n@media screen and (min-width: 1240px) {\r\n  .doa-list {\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n  }\r\n  .doa-item .title-item {\r\n    top: 60%;\r\n  }\r\n  .doa-item .title-item a {\r\n    font-size: 20px;\r\n  }\r\n}\r\n@media screen and (max-width: 991px) {\r\n  .navigation-wrap {\r\n    text-align: center;\r\n  }\r\n  .navigation-wrap .nav-link {\r\n    line-height: 30px;\r\n  }\r\n}\r\n",""]),n.exports=r}]]);