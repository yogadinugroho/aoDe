!function(a){function n(n){for(var t,u,l=n[0],o=n[1],m=n[2],s=0,d=[];s<l.length;s++)u=l[s],Object.prototype.hasOwnProperty.call(e,u)&&e[u]&&d.push(e[u][0]),e[u]=0;for(t in o)Object.prototype.hasOwnProperty.call(o,t)&&(a[t]=o[t]);for(h&&h(n);d.length;)d.shift()();return r.push.apply(r,m||[]),i()}function i(){for(var a,n=0;n<r.length;n++){for(var i=r[n],t=!0,l=1;l<i.length;l++){var o=i[l];0!==e[o]&&(t=!1)}t&&(r.splice(n--,1),a=u(u.s=i[0]))}return a}var t={},e={3:0},r=[];function u(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return a[n].call(i.exports,i,i.exports,u),i.l=!0,i.exports}u.m=a,u.c=t,u.d=function(a,n,i){u.o(a,n)||Object.defineProperty(a,n,{enumerable:!0,get:i})},u.r=function(a){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},u.t=function(a,n){if(1&n&&(a=u(a)),8&n)return a;if(4&n&&"object"==typeof a&&a&&a.__esModule)return a;var i=Object.create(null);if(u.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:a}),2&n&&"string"!=typeof a)for(var t in a)u.d(i,t,function(n){return a[n]}.bind(null,t));return i},u.n=function(a){var n=a&&a.__esModule?function(){return a.default}:function(){return a};return u.d(n,"a",n),n},u.o=function(a,n){return Object.prototype.hasOwnProperty.call(a,n)},u.p="";var l=window.webpackJsonp=window.webpackJsonp||[],o=l.push.bind(l);l.push=n,l=l.slice();for(var m=0;m<l.length;m++)n(l[m]);var h=o;r.push([11,1,0,2]),i()}([function(a,n,i){"use strict";i.d(n,"a",(function(){return d})),i.d(n,"b",(function(){return k}));var t=i(10),e={BASE_URL:"https://tanyadoa-api.herokuapp.com",CACHE_NAME:"aoDe-V1",DATABASE_NAME:"aoDe-database",DATABASE_VERSION:1,OBJECT_STORE_NAME_1:"ingindihafal",OBJECT_STORE_NAME_2:"sudahdihafal"};function r(a,n,i,t,e,r,u){try{var l=a[r](u),o=l.value}catch(a){return void i(a)}l.done?n(o):Promise.resolve(o).then(t,e)}function u(a){return function(){var n=this,i=arguments;return new Promise((function(t,e){var u=a.apply(n,i);function l(a){r(u,t,e,l,o,"next",a)}function o(a){r(u,t,e,l,o,"throw",a)}l(void 0)}))}}var l=e.DATABASE_NAME,o=e.DATABASE_VERSION,m=e.OBJECT_STORE_NAME_1,h=e.OBJECT_STORE_NAME_2,s=Object(t.a)(l,o,{upgrade:function(a){a.createObjectStore(m,{keyPath:"id"}),a.createObjectStore(h,{keyPath:"id"})}}),d={searchIngindihafal:function(a){var n=this;return u(regeneratorRuntime.mark((function i(){var t;return regeneratorRuntime.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,n.getAllIngindihafal();case 2:return t=i.sent,i.abrupt("return",new Promise((function(n,i){var e=t.filter((function(n){return n.nama.toUpperCase().includes(a.toUpperCase())}));e.length?n(e):i("".concat(a," is not found"))})));case 4:case"end":return i.stop()}}),i)})))()},getIngindihafal:function(a){return u(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a){n.next=2;break}return n.abrupt("return");case 2:return n.next=4,s;case 4:return n.abrupt("return",n.sent.get(m,a));case 5:case"end":return n.stop()}}),n)})))()},getAllIngindihafal:function(){return u(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,s;case 2:return a.abrupt("return",a.sent.getAll(m));case 3:case"end":return a.stop()}}),a)})))()},putIngindihafal:function(a){return u(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a.hasOwnProperty("id")){n.next=2;break}return n.abrupt("return");case 2:return n.next=4,s;case 4:return n.abrupt("return",n.sent.put(m,a));case 5:case"end":return n.stop()}}),n)})))()},deleteIngindihafal:function(a){return u(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s;case 2:return n.abrupt("return",n.sent.delete(m,a));case 3:case"end":return n.stop()}}),n)})))()}},k={searchSudahdihafal:function(a){var n=this;return u(regeneratorRuntime.mark((function i(){var t;return regeneratorRuntime.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,n.getAllSudahdihafal();case 2:return t=i.sent,i.abrupt("return",new Promise((function(n,i){var e=t.filter((function(n){return n.nama.toUpperCase().includes(a.toUpperCase())}));e.length?n(e):i("".concat(a," is not found"))})));case 4:case"end":return i.stop()}}),i)})))()},getSudahdihafal:function(a){return u(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a){n.next=2;break}return n.abrupt("return");case 2:return n.next=4,s;case 4:return n.abrupt("return",n.sent.get(h,a));case 5:case"end":return n.stop()}}),n)})))()},getAllSudahdihafal:function(){return u(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,s;case 2:return a.abrupt("return",a.sent.getAll(h));case 3:case"end":return a.stop()}}),a)})))()},putSudahdihafal:function(a){return u(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a.hasOwnProperty("id")){n.next=2;break}return n.abrupt("return");case 2:return n.next=4,s;case 4:return n.abrupt("return",n.sent.put(h,a));case 5:case"end":return n.stop()}}),n)})))()},deleteSudahdihafal:function(a){return u(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s;case 2:return n.abrupt("return",n.sent.delete(h,a));case 3:case"end":return n.stop()}}),n)})))()}}},function(a,n,i){"use strict";n.a=[{id:"1",gambar:"https://media.istockphoto.com/vectors/woman-sleep-at-night-vector-id977762830?k=20&m=977762830&s=612x612&w=0&h=t33FZEFjsiiZ1jhGslcipk-e0Xw4IpcnXuPs0Mejl5Y=",nama:"doa sebelum tidur",ayat:"بِسْمِكَ االلّٰهُمَّ اَحْيَا وَبِاسْمِكَ اَمُوْتُ",latin:"Bismikallaahumma ahyaa wa ammuut",artinya:"Dengan menyebut nama Allah, aku hidup dan aku mati"},{id:"2",gambar:"https://media.istockphoto.com/vectors/boy-waking-up-in-morning-vector-id1258605821?k=20&m=1258605821&s=612x612&w=0&h=1pffTKi2lOi75aeGs5SbebFw-6p_twKsw22FkJ1EKH8=",nama:"doa bangun tidur",ayat:"اَلْحَمْدُ ِللهِ الَّذِىْ اَحْيَانَا بَعْدَمَآ اَمَاتَنَا وَاِلَيْهِ النُّشُوْرُ",latin:"Alhamdu lillahil ladzii ahyaanaa ba’da maa amaa tanaa wa ilahin nusyuuru",artinya:"Segala puji bagi Allah yang telah menghidupkan kami sesudah kami mati (membangunkan dari tidur) dan hanya kepada-Nya kami dikembalikan"},{id:"3",gambar:"https://media.istockphoto.com/vectors/the-man-felt-a-stomach-ache-vector-id1157717017?k=20&m=1157717017&s=612x612&w=0&h=UrDoruFp_k6zbSCDCmCEAiQaidOUuQGPScjlT9F1ZBo=",nama:"doa masuk kamar mandi",ayat:"اَللّٰهُمَّ اِنّىْ اَعُوْذُبِكَ مِنَ الْخُبُثِ وَالْخَبَآئِثِ",latin:"Allahumma Innii a'uudzubika minal khubutsi wal khoaaitsi",artinya:"Ya Allah, aku berlindung pada-Mu dari godaan setan laki-laki dan setan perempuan"},{id:"4",gambar:"https://media.istockphoto.com/vectors/cartoon-businessman-loves-to-look-at-his-reflection-in-mirror-person-vector-id941663994?k=20&m=941663994&s=612x612&w=0&h=zCI9O2NbYNcNEvBAZBXavIjpSYn3pzHRpd3-fFOMPbo=",nama:"doa ketika bercermin",ayat:"اَلْحَمْدُ ِللهِ كَمَا حَسَّنْتَ خَلْقِىْ فَحَسِّـنْ خُلُقِىْ",latin:"Alhamdulillaahi kamaa hassanta kholqii fahassin khuluqii",artinya:"Segala puji bagi Allah, baguskanlah budi pekertiku sebagaimana Engkau telah membaguskan rupa wajahku"},{id:"5",nama:"doa keluar rumah",gambar:"https://media.istockphoto.com/vectors/people-running-door-isolated-on-background-vector-illustration-vector-id1183790333?k=20&m=1183790333&s=612x612&w=0&h=lKVNuM69RjG-2U2snUUVwt8fMVFCSfm3GSuGZ8AKvJg=",ayat:"بِسْمِ اللهِ تَوَكَّلْتُ عَلَى اللهِ لاَحَوْلَ وَلاَقُوَّةَ اِلاَّ بِالله",latin:"Bismillaahi tawakkaltu 'alalloohi laa hawlaa walaa quwwata illaa bilaahi",artinya:"Dengan menyebut nama Allah aku bertawakal kepada Allah, tiada daya kekuatan melainkan dengan pertolongan Allah."},{id:"6",nama:"doa masuk rumah",gambar:"https://media.istockphoto.com/vectors/child-peek-in-the-door-opened-the-entrance-funny-girl-kid-view-from-vector-id1331764957?k=20&m=1331764957&s=612x612&w=0&h=Ry8TiA9vdWkAhADgNoTfKi5fEvennwX3biRtebdF9rI=",ayat:"اَللّٰهُمَّ اِنّىْ اَسْأَلُكَ خَيْرَالْمَوْلِجِ وَخَيْرَالْمَخْرَجِ بِسْمِ اللهِ وَلَجْنَا وَبِسْمِ اللهِ خَرَجْنَا وَعَلَى اللهِ رَبّنَا تَوَكَّلْنَا",latin:"Allahumma innii as-aluka khoirol mauliji wa khoirol makhroji bismillaahi wa lajnaa wa bismillaahi khorojnaa wa'alallohi robbina tawakkalnaa",artinya:"Ya Allah, sesungguhnya aku mohon kepada-Mu baiknya tempat masuk dan baiknya tempat keluar dengan menyebut nama Allah kami masuk, dan dengan menyebut nama Allah kami keluar dan kepada Allah Tuhan kami, kami bertawakkal"},{id:"7",nama:"doa memohon ilmu yang bermanfaat",gambar:"https://media.istockphoto.com/vectors/chemistry-lab-science-boy-and-girls-teenager-learning-research-vector-id1208559359?k=20&m=1208559359&s=612x612&w=0&h=fjnCV6VCBUuJh9qridhUYRbDf7DAnel3WKeCEYKsz0o=",ayat:"اَللّٰهُمَّ اِنِّى اَسْأَلُكَ عِلْمًا نَافِعًا وَرِزْقًا طَيِّبًا وَعَمَلاً مُتَقَبَّلاً",latin:"Allahumma innii as-aluka 'ilmaan naafi'aan wa rizqoon thoyyibaan wa 'amalaan mutaqobbalaan",artinya:"Ya Allah, sesungguhnya aku mohon kepada-Mu ilmu yang berguna, rezki yang baik dan amal yang baik Diterima. (H.R. Ibnu Majah)"},{id:"8",nama:"doa sebelum belajar",gambar:"https://media.istockphoto.com/vectors/kids-in-front-of-blackboard-vector-id148320746?k=20&m=148320746&s=612x612&w=0&h=HMSjDuXXtxwjKUJm2-zYdwACnoTwboDUgrMHlfgJbtA=",ayat:"يَارَبِّ زِدْنِىْ عِلْمًا وَارْزُقْنِىْ فَهْمًا",latin:"Yaa robbi zidnii 'ilman warzuqnii fahmaa",artinya:"Ya Allah, tambahkanlah aku ilmu dan berikanlah aku rizqi akan kepahaman"},{id:"9",nama:"doa sesudah belajar",gambar:"https://media.istockphoto.com/vectors/flying-to-school-vector-id1159394306?k=20&m=1159394306&s=612x612&w=0&h=eHeFde1MxvVsLaft_oE8QqwH7UzNkZt7DdwDAAypRmc=",ayat:"اَللّٰهُمَّ اِنِّى اِسْتَوْدِعُكَ مَاعَلَّمْتَنِيْهِ فَارْدُدْهُ اِلَىَّ عِنْدَ حَاجَتِىْ وَلاَ تَنْسَنِيْهِ يَارَبَّ الْعَالَمِيْنَ",latin:"Allaahumma innii astaudi'uka maa 'allamtaniihi fardud-hu ilayya 'inda haajatii wa laa tansaniihi yaa robbal 'alamiin",artinya:"Ya Allah, sesungguhnya aku menitipkan kepada Engkau ilmu-ilmu yang telah Engkau ajarkan kepadaku, dan kembalikanlah kepadaku sewaktu aku butuh kembali dan janganlah Engkau lupakan aku kepada ilmu itu wahai Tuhan seru sekalian alam."},{id:"10",nama:"doa sebelum wudhu",gambar:"https://media.istockphoto.com/vectors/muslim-man-doing-ablution-boy-take-water-to-washing-hand-cartoon-flat-vector-id1208118434?k=20&m=1208118434&s=612x612&w=0&h=ldp20bZiZQzggaIWBhZEZJKly6MwkUvXxyrWqCLXGhM=",ayat:"نَوَيْتُ الْوُضُوْءَ لِرَفْعِ الْحَدَثِ اْلاَصْغَرِ فَرْضًا لِلّٰهِ تَعَالَى",latin:"Nawaitul whudu-a lirof'il hadatsii ashghori fardhon lillaahi ta'aalaa",artinya:"Saya niat berwudhu untuk menghilangkan hadast kecil fardu (wajib) karena Allah ta'ala"},{id:"11",nama:"doa setelah wudhu",gambar:"https://media.istockphoto.com/vectors/muslim-boy-perform-ablution-steps-vector-vector-id1125816818?k=20&m=1125816818&s=612x612&w=0&h=fTnzmOe5UGCUkfTzjnrpTJjo2GAG1l4XHybkk__K3Kg=",ayat:"اَشْهَدُ اَنْ لاَّاِلَهَ اِلاَّاللهُ وَحْدَهُ لاَشَرِيْكَ لَهُ وَاَشْهَدُ اَنَّ مُحَمَّدًاعَبْدُهُ وَرَسُوْلُهُ. اَللّٰهُمَّ اجْعَلْنِىْ مِنَ التَّوَّابِيْنَ وَاجْعَلْنِىْ مِنَ الْمُتَطَهِّرِيْنَ، وَجْعَلْنِيْ مِنْ عِبَادِكَ الصَّالِحِيْنَ",latin:"Asyhadu allaa ilaaha illalloohu wahdahuu laa syariika lahu wa asyhadu anna muhammadan ‘abduhuuwa rosuuluhuu, alloohummaj’alnii minat tawwaabiina waj’alnii minal mutathohhiriina, waj'alnii min 'ibadikash shaalihiina.",artinya:"Aku bersaksi, tidak ada Tuhan selain Allah Yang Maha Esa, tidak ada sekutu bagi-Nya, dan aku mengaku bahwa Nabi Muhammad itu adalah hamba dan Utusan Allah. Ya Allah, jadikanlah aku dari golongan orang-orang yang bertaubat dan jadikanlah aku dari golongan orang-orang yang suci dan jadikanlah aku dari golongan hamba-hamba Mu yang shaleh"},{id:"12",nama:"doa sebelum membaca al-qur'an",gambar:"https://media.istockphoto.com/vectors/muslim-man-reading-holy-quran-vector-id1304614875?k=20&m=1304614875&s=612x612&w=0&h=pa94rcZ3zd3Jrn1F0KbgUB0HXJAXO5FzyB7qHzjJqFA=",ayat:"اَللّٰهُمَّ افْتَحْ عَلَىَّ حِكْمَتَكَ وَانْشُرْ عَلَىَّ رَحْمَتَكَ وَذَكِّرْنِىْ مَانَسِيْتُ يَاذَاالْجَلاَلِ وَاْلاِكْرَامِ",latin:"Allahummaftah 'alayya hikmataka wansyur 'alayya rohmataka wa dzakkirnii maanasiitu yaa dzal jalaali wal ikhroomi",artinya:"Ya Allah bukakanlah hikmahMu padaku, bentangkanlah rahmatMu padaku dan ingatkanlah aku terhadap apa yang aku lupa, wahai Dzat yang memiliki keagungan dan kemuliaan"},{id:"13",nama:"doa setelah membaca al-qur'an",gambar:"https://media.istockphoto.com/vectors/muslim-man-and-his-students-reading-holy-quran-in-mosque-vector-id1304814097?k=20&m=1304814097&s=612x612&w=0&h=q_VLo5jAB9Vd4AYZb5Z2dsxCauquiAI3Qfh2vmVEVCM=",ayat:"اَللّٰهُمَّ ارْحَمْنِىْ بِالْقُرْآنِ. وَاجْعَلْهُ لِىْ اِمَامًا وَنُوْرًا وَّهُدًى وَّرَحْمَةً. اَللّٰهُمَّ ذَكِّرْنِىْ مِنْهُ مَانَسِيْتُ وَعَلِّمْنِىْ مِنْهُ مَاجَهِلْتُ. وَارْزُقْنِىْ تِلاَ وَتَهُ آنَآءَ اللَّيْلِ وَاَطْرَافَ النَّهَارٍ. وَاجْعَلْهُ لِىْ حُجَّةً يَارَبَّ الْعَالَمِيْنَ",latin:"Allahummarhamnii bil qur'aani. waj'alhu lii imaaman wa nuuran wa hudan wa rohman. Allahumma dzakkirnii minhu maa nasiitu wa'allimnii minhu maa jahiltu. wazuqnii tilaa watahu aanaa-al laili wa athroofan nahaari. waj'alhu lii hujjatan yaa robbal 'aalamiina.",artinya:"Ya Allah, rahmatilah aku dengan Al-Quran yang agung, jadikanlah ia bagiku ikutan cahaya petunjuk rahmat. Ya Allah, ingatkanlah apa yang telah aku lupa dan ajarkan kepadaku apa yang tidak aku ketahui darinya, anugerahkanlah padaku kesempatan membacanya pada sebagian malam dan siang, jadikanlah ia hujjah yang kuat bagiku, wahai Tuhan seru sekalian alam."},{id:"14",nama:"doa sebelum mandi",gambar:"https://media.istockphoto.com/vectors/funny-little-kid-having-bath-vector-id1194514616?k=20&m=1194514616&s=612x612&w=0&h=agixECbfiQe6dzXTCpTl45v9iYoKlendNMpNqbk5Z8U=",ayat:"اَللّٰهُمَّ اغْفِرْلِى ذَنْبِى وَوَسِّعْ لِى فِىْ دَارِىْ وَبَارِكْ لِىْ فِىْ رِزْقِىْ",latin:"Allahummaghfirlii dzambii wa wassi'lii fii daarii wa baarik lii fii rizqii",artinya:"Ya Allah ampunilah dosa kesalahanku dan berilah keluasaan di rumahku serta berkahilah pada rezekiku"},{id:"15",nama:"doa hendak berpergian",gambar:"https://media.istockphoto.com/vectors/traveling-people-vector-id947185360?k=20&m=947185360&s=612x612&w=0&h=7IkxEBAm1r9PZwILRk4q5thTjOM58r3UdhWvzqE2vAA=",ayat:"اَللّٰهُمَّ هَوِّنْ عَلَيْنَا سَفَرَنَا هَذَا وَاطْوِعَنَّابُعْدَهُ اَللّٰهُمَّ اَنْتَ الصَّاحِبُ فِى السَّفَرِوَالْخَلِيْفَةُفِى الْاَهْلِ",latin:"Allahumma hawwin 'alainaa safaranaa hadzaa waatwi 'annaa bu'dahu. Alloohumma antashookhibu fiissafari walkholiifatu fiil ahli",artinya:"Ya Allah, mudahkanlah kami berpergian ini, dan dekatkanlah kejauhannya. Ya Allah yang menemani dalam berpergian, dan Engkau pula yang melindungi keluarga."},{id:"16",nama:"doa ketika sampai di tempat tujuan",gambar:"https://media.istockphoto.com/vectors/beach-landscape-with-umbrella-bag-sunglasses-and-cocktail-vector-id472290149?k=20&m=472290149&s=612x612&w=0&h=vqU56NnnCc9WoTR3xZmGmXLQMbLQV4swosFjeaNqKZI=",ayat:"اَلْحَمْدُ ِللهِ الَّذِى سَلَمَنِى وَالَّذِى اَوَنِى وَالَّذِى جَمَعَ الشَّمْلَ بِ",latin:"Alhamdulillahil ladzi sallamani wal ladzi awani wal ladzi jama’asy syamla bi",artinya:"Segala puji bagi Allah, yang telah menyelamatkan akau dan yang telah melindungiku dan yang mengumpulkanku dengan keluargaku."},{id:"17",nama:"doa memakai pakaian",gambar:"https://media.istockphoto.com/vectors/man-putting-on-his-shirt-illustration-vector-id1058479888?k=20&m=1058479888&s=612x612&w=0&h=mUIEDjNrzo4pcvqIC90ivqNS3FWFINWqB6uG2YWleWo=",ayat:"بِسْمِ اللهِ اَللّٰهُمَّ اِنِّى اَسْأَلُكَ مِنْ خَيْرِهِ وَخَيْرِ مَاهُوَ لَهُ وَاَعُوْذُبِكَ مِنْ شَرِّهِ وَشَرِّمَا هُوَلَهُ",latin:"Bismillaahi, Alloohumma innii as-aluka min khoirihi wa khoiri maa huwa lahuu wa'a'uu dzubika min syarrihi wa syarri maa huwa lahuu",artinya:"Dengan nama-Mu yaa Allah akku minta kepada Engkau kebaikan pakaian ini dan kebaikan apa yang ada padanya, dan aku berlindung kepada Engkau dari kejahatan pakaian ini dan kejahatan yang ada padanya"},{id:"18",nama:"doa memakai pakaian baru",gambar:"https://media.istockphoto.com/vectors/happy-arab-family-is-shopping-vector-id1004746798?k=20&m=1004746798&s=612x612&w=0&h=Dui7YyZ5yNm2n_Buhn5XoGjm9-IXQYmanMpuvHDsIGc=",ayat:" اَلْحَمْدُ لِلّٰهِ الَّذِىْ كَسَانِىْ هَذَا وَرَزَقَنِيْهِ مِنْ غَيْرِ حَوْلٍ مِنِّىْ وَلاَقُوَّةٍ",latin:"Alhamdu lillaahil ladzii kasaanii haadzaa wa rozaqoniihi min ghoiri hawlim minni wa laa quwwatin",artinya:"Segala puji bagi Allah yang memberi aku pakaian ini dan memberi rizeki dengan tiada upaya dan kekuatan dariku"},{id:"19",nama:"doa melepas pakaian",gambar:"https://media.istockphoto.com/vectors/businessman-undress-his-suit-and-going-to-relax-on-vacation-vector-id531012279?k=20&m=531012279&s=612x612&w=0&h=-T3hWEnaWWpHqrhXumtx8I4FLkbhBnJNVfsxtP9iWPA=",ayat:"بِسْمِ اللهِ الَّذِيْ لاَ إِلَهَ إِلَّا هُوَ",latin:"Bismillaahil ladzii laa ilaaha illaa huwa",artinya:"Dengan nama Allah yang tiada Tuhan selain-Nya"},{id:"20",nama:"doa menjelang sholat subuh",gambar:"https://media.istockphoto.com/vectors/-vector-id1294585974?k=20&m=1294585974&s=612x612&w=0&h=FUdIsN1pT-IkAIMdRHkOTAZfUpzc0kMJNr3J-Bs6VBc=",ayat:"اَللّٰهُمَّ اِنِّى اَعُوْذُ بِكَ مِنْ ضِيْقِ الدُّنْيَا وَضِيْقِ يَوْمِ الْقِيَامَةِ",latin:"Allaahumma inni a'udzubika min dzhiiqid-dunyaa wa dzhiiqi yaumal-qiyaamati",artinya:"Ya Allah! Sesungguhnya aku berlindung kepada-Mu dari kesempitan dunia dan kesempitan hari kiamat. (HR. Abu Daud)"},{id:"21",nama:"doa menyambut pagi hari",gambar:"https://media.istockphoto.com/vectors/spring-or-summer-seasons-rural-background-vector-id164455144?k=20&m=164455144&s=612x612&w=0&h=AM9AhsyNTtNpEHzAmASl73fAIpg_Y7ISsXj_NAKa15c=",ayat:"اَللّٰهُمَّ بِكَ اَصْبَحْنَا وَبِكَ اَمْسَيْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوْتُ وَاِلَيْكَ النُّشُوْرُ",latin:"Alloohumma bika ashbahnaa wa bika amsainaa wa bika nahyaa wa bika namuutu wa ilaikan nusyuuru",artinya:"Ya Allah, karena Engkau kami mengalami waktu pagi dan waktu petang, dan karena Engkau kami hidup dan mati dan kepada-Mu juga kami akan kembali."},{id:"22",nama:"doa menyambut sore hari",gambar:"https://media.istockphoto.com/vectors/tropical-summer-sunset-vector-cartoon-island-landscape-illustration-vector-id1020253114?k=20&m=1020253114&s=612x612&w=0&h=sz6XlAIJMj8UYIwX1IkKEZiAnhsN3C-WHswhDCYKiuQ=",ayat:"اَللّٰهُمَّ بِكَ اَمْسَيْنَا وَبِكَ اَصْبَحْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوْتُ وَاِلَيْكَ الْمَصِيْرُ",latin:"Allahumma bika amsainaa wa bika ashbahnaa wa bika nahyaa wa bika namuutu wa ilaikal mashiir",artinya:"Ya Allah, karena Engkau kami mengalami waktu petang dan waktu pagi, karena Engkau kami hidup dan mati dan kepada-Mu juga kami akan kembali."},{id:"23",nama:"doa bercermin",gambar:"https://media.istockphoto.com/vectors/businesswoman-looking-at-mirror-and-imagine-herself-successful-vector-id966411814?k=20&m=966411814&s=612x612&w=0&h=x_nm1LyYy5pkOyHDYxrius14GhFBsqnWO-0yDpdND3U=",ayat:"اللَّهُمَّ كَمَا حَسَّنْتَ خَلْقِي فَحَسِّنْ خُلُقِي",latin:"Alloohumma kamaa hassanta kholqii fahassin khuluqi",artinya:"Ya Allah, sebagaimana Engkau baguskan tubuhku, maka baguskanlah akhlaqku"},{id:"24",nama:"doa pergi ke masjid",gambar:"https://media.istockphoto.com/vectors/muslim-go-to-mosque-together-in-the-night-day-for-shalat-praying-to-vector-id1214888752?k=20&m=1214888752&s=612x612&w=0&h=_ABbES1VLB8WjMV2qhRz6PXm3rQT5y5o7Npm3K1kxPg=",ayat:"اللَّهُمَّ اجْعَلْ فِى قَلْبِى نُورًا . وَفِى بَصَرِى نُورًا . وَفِى سَمْعِى نُورًا . وَعَنْ يَمِينِى نُورًا . وَعَنْ يَسَارِى نُورًا . وَفَوْقِى نُورًا . وَتَحْتِى نُورًا . وَأَمَامِى نُورًا . وَخَلْفِى نُورًا . وَاجْعَلْ لِى نُورًا",latin:"Alloohummaj’al fii qolbi nuuron. Wa fii bashori nuuron. Wa fii sam’i nuuron. Wa ‘an yamiinii nuuron. Wa ‘ay yasaarii nuuron. Wa fauqi nuuron. Wa tahti nuuron. Wa amaamii nuuron. Wakholqi nuuron. Waj’al lii nuuron",artinya:"Ya Allah, jadikanlah di dalam hatiku cahaya. Dalam penglihatanku cahaya. Pada pendengaranku cahaya. Sebelah kananku cahaya. Sebelah kiriku cahaya. Atasku cahaya. Bawahku cahaya. Depanku cahaya. Belakangku cahaya. Dan berikanlah cahaya kepadaku."},{id:"25",nama:"doa masuk masjid",gambar:"https://media.istockphoto.com/vectors/happy-children-to-enter-the-mosque-vector-id1148757241?k=20&m=1148757241&s=612x612&w=0&h=RZPupe9odIXniSqHHJuYkT1rsVCTq38IP64f1V-waFo=",ayat:"اللَّهُمَّ افْتَحْ لِى أَبْوَابَ رَحْمَتِكَ",latin:"Alloohummaf tahlii abwaaba rohmatik",artinya:"Ya Allah, bukakanlah pintu-pintu rahmatMu untukku"},{id:"26",nama:"doa keluar masjid",gambar:"https://media.istockphoto.com/vectors/couples-muslim-entering-the-mosque-entrance-for-praying-vector-id1148757196?k=20&m=1148757196&s=612x612&w=0&h=RbLQHjDERSV0pZyDwJXtcKHSneK6lTHhoxjGHlYYXAA=",ayat:"اللَّهُمَّ إِنِّى أَسْأَلُكَ مِنْ فَضْلِكَ",latin:"Alloohumma innii as-aluka min fadllik",artinya:"Ya Allah, sesungguhnya aku memohon keutamaan kepadaMu"},{id:"27",nama:"doa setelah adzan",gambar:"https://media.istockphoto.com/vectors/cartoon-muslim-boy-call-adhan-vector-id1303957562?k=20&m=1303957562&s=612x612&w=0&h=4XNLQzEBxfCC1qK-u1C62FIk6PgyxKgxj4p8dsaBC5U=",ayat:"اللَّهُمَّ رَبَّ هَذِهِ الدَّعْوَةِ التَّامَّةِ وَالصَّلاَةِ الْقَائِمَةِ آتِ مُحَمَّدًا الْوَسِيلَةَ وَالْفَضِيلَةَ وَابْعَثْهُ مَقَامًا مَحْمُودًا الَّذِى وَعَدْتَهُ",latin:"Alloohumma robba haadzihid da’watit taammah washsholaatil qoo-imah. Aati Muhammadanil wasiilata wal fadliilah. Wab’atshu maqooman mahmuudanil ladzii wa ‘adtah",artinya:"Ya Allah, Tuhan panggilan yang sempurna dan shalat yang akan didirikan ini. Berikanlah wasilah dan keutamaan kepada Muhammad. Bangkitkanlah dia pada kedudukan yang terpuji seperti yang Engkau janjikan kepadanya."},{id:"28",nama:"doa naik kendaraan",gambar:"https://media.istockphoto.com/vectors/family-road-trip-travel-by-car-with-kids-vector-illustration-vector-id961202858?k=20&m=961202858&s=612x612&w=0&h=wulrH7u3UX5K4lAyxC94AvV0-FHU4cxRoEvvWrzXxq0=",ayat:"سُبْحَانَ الَّذِى سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُونَ",latin:"Subhaanal ladzii sakhkhoro lanaa haadzaa wamaa kunnaa lahuu muqriniin. Wa innaa ilaa robbinaa lamunqolibuun",artinya:"Mahasuci Dia yang telah menundukkan semua ini bagi kami padahal sebelumnya kami tidak mampu menguasainya. Dan sesungguhnya kami akan kembali kepada Tuhan kami."},{id:"29",nama:"doa masuk pasar",gambar:"https://media.istockphoto.com/vectors/market2-vector-id1332615316?k=20&m=1332615316&s=612x612&w=0&h=yk8b6VFRpPCQAwqfo3dG_yuxmhjoBvzjrPJa4_GgZX4=",ayat:"لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكُ لَهُ لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ يُحْيِى وَيُمِيتُ وَهُوَ حَىٌّ لاَ يَمُوتُ بِيَدِهِ الْخَيْرُ وَهُوَ عَلَى كُلِّ شَىْءٍ قَدِيرٌ",latin:"Laa ilaaha illalloohu wahdahu laa syariikalah. Lahul mulku walahul hamdu. Yuhyii wa yumiitu wahuwa hayyun laa yamuut. Biyadihil khoir wahuwa ‘alaa kulli syai-in qodiir",artinya:"Tiada tuhan selain Allah Yang Maha Esa, tiada sekutu bagiNya. Dia yang mempunyai kerajaan dan segala pujian. Dialah yang menghidupkan dan mematikan, dan Dia Mahahidup yang tidak mati. Di tangan-Nya segala kebaikan dan Dia Mahakuasa atas segala sesuatu."},{id:"30",nama:"doa sebelum makan",gambar:"https://media.istockphoto.com/vectors/muslim-family-praying-before-having-iftar-vector-id1304710913?k=20&m=1304710913&s=612x612&w=0&h=negJYTCAkJQz2bFMSDYbt1ecMemSVCNNS2cE3DrnMzg=",ayat:"اَللّٰهُمَّ بَارِكْ لَنَا فِيْمَا رَزَقْتَنَا وَقِنَا عَذَابَ النَّارِ",latin:"Allahumma baarik lanaa fiimaa rozaqtanaa wa qinaa 'adzaa bannaar.",artinya:"Ya Allah, berkahilah kami dalam rezeki yang telah Engkau berikan kepada kami dan peliharalah kami dari siksa api neraka"},{id:"31",nama:"doa sesudah makan",gambar:"https://media.istockphoto.com/vectors/man-table-full-vector-id831256970?k=20&m=831256970&s=612x612&w=0&h=fo3li8YpkUKbrNhNihSeqYb9w1ofdESKMC7hJ87tAN4=",ayat:"اَلْحَمْدُ ِللهِ الَّذِىْ اَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مُسْلِمِيْنَ",latin:"Alhamdulillahilladzi ath-amanaa wa saqoonaa wa ja'alanaa minal muslimiin.",artinya:"Segala puji bagi Allah yang telah memberi kami makan dan minum serta menjadikan kami termasuk dari kaum muslimin."},{id:"32",nama:"doa ketika turun hujan",gambar:"https://media.istockphoto.com/vectors/rain-on-city-background-rainy-and-windy-day-vector-illustration-in-vector-id1273543113?k=20&m=1273543113&s=612x612&w=0&h=4ew-wrqklFCwboZCCK7RG9c2VMXCgSxK-2_bQiQqlKw=",ayat:"اللَّهُمَّ صَيِّبًا نَافِعًا",latin:"Allahumma shayyiban nafi’an.",artinya:"Ya Allah, curahkanlah air hujan yang bermanfaat. (HR Bukhar dari Aisyah RA)"},{id:"33",nama:"doa ketika takut bahaya hujan lebat",gambar:"https://media.istockphoto.com/vectors/thunderstorm-in-the-valley-vector-id896045466?k=20&m=896045466&s=612x612&w=0&h=Q1RuCd_vuARwyfv3ejM7Pa2H_RXsIXjaj8TSJAxUApg=",ayat:"اللَّهُمَّ حَوَالَيْنَا وَلاَ عَلَيْنَا ، اللَّهُمَّ عَلَى الآكَامِ وَالظِّرَابِ ، وَبُطُونِ الأَوْدِيَةِ ، وَمَنَابِتِ الشَّجَرِ",latin:"Allahumma hawalaina wala ‘alaina. Allahumma ‘alal akami wa adhirabi, wa buthunil auwdiyati, wamanabitisyajari.",artinya:"Ya Allah turunkan hujan ini di sekitar kami jangan di atas kami. Ya Allah curahkanlah hujan ini di atas bukit-bukit, di hutan-hutan lebat, di gunung-gunung kecil, di lembah-lembah, dan tempat-tempat tumbuhnya pepohonan. (HR Bukhari Muslim)"},{id:"34",nama:"doa setelah turun hujan",gambar:"https://media.istockphoto.com/vectors/sun-after-rain-vector-id546019814?k=20&m=546019814&s=612x612&w=0&h=jJQuGqKSXln8YThN2yRWxDPVXszGx1eJJLqJZ4-wyJs=",ayat:"مُطِرْنَا بِفَضْلِ اللـهِ ورَحْمَتِهِ",latin:"Muthirnaa bifadhlillahi wa rahmatihi.",artinya:"Diturunkan kepada kami hujan berkat anugerah Allah dan rahmat-Nya. (HR Bukhari)"},{id:"35",nama:"doa bertemu binatang buas",gambar:"https://media.istockphoto.com/vectors/animal-in-the-jungle-vector-id121584576?k=20&m=121584576&s=612x612&w=0&h=p53B9MBSGe0LXr8zSE38nVfHHeJZqNx9hn_nqDhBC4Q=",ayat:"إِنَّهُۥ مِن سُلَيْمَٰنَ وَإِنَّهُۥ بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",latin:"Innahụ min sulaimāna wa innahụ bismillāhir-raḥmānir-raḥīm",artinya:"Sesungguhnya surat itu, dari SuIaiman dan sesungguhnya (isi)nya: Dengan menyebut nama Allah Yang Maha Pemurah lagi Maha Penyayang. (Qs. An Naml: 30 )"},{id:"36",nama:"doa agar selalu dicukupkan rezeki",gambar:"https://media.istockphoto.com/vectors/piggy-bank-financial-analysis-and-investment-vector-id1139010278?k=20&m=1139010278&s=612x612&w=0&h=TseKOCKDMwCCs8HWYtCayQbDGEWN4-_lwEjZ8hCYvRo=",ayat:"اَللّٰهُمَّ اَكْفِنِيْ بِحَلَالِكَ عَنْ حَرَامِكَ، وَأَغْنِنِيْ بِفَضْلِكَ عَمَّنْ سِوَاكَ",latin:"Allahummakfini bihalalika ‘an haramik wa aghnini bifadhlika amman siwak",artinya:"Ya Allah, berilah aku kecukupan dengan rezeki yang halal, sehingga aku tidak memerlukan yang haram, dan berilah aku kekayaan dengan karuniamu, sehingga aku tidak memerlukan bantuan orang lain, selain diri-mu. (HR. Ahmad)"},{id:"37",nama:"doa ketika menyisir rambut",gambar:"https://media.istockphoto.com/vectors/girl-combing-hair-vector-id863887250?k=20&m=863887250&s=612x612&w=0&h=cv3VPLS2-suYNUVtEJsEyrNU-WCcoIotlJ5AN7JZb6A=",ayat:"اَللّهُمَّ حَرِّمْ شَعْرِى وَبَشَرِى عَلىَ النَّار",latin:"ALLAHUMMA HARRIM SYA'RII WA BASYARII 'ALAN NAAR",artinya:"Ya Allah, halangilah rambut dan kulitku dari api neraka"}]},function(a,n,i){"use strict";var t=i(1);function e(a,n,i,t,e,r,u){try{var l=a[r](u),o=l.value}catch(a){return void i(a)}l.done?n(o):Promise.resolve(o).then(t,e)}function r(a,n){for(var i=0;i<n.length;i++){var t=n[i];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(a,t.key,t)}}var u=function(){function a(){!function(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function")}(this,a)}var n,i,u,l,o;return n=a,i=null,u=[{key:"searchDoa",value:function(a){return new Promise((function(n,i){var e=t.a.filter((function(n){return n.nama.toUpperCase().includes(a.toUpperCase())}));e.length?n(e):i("".concat(a," is not found"))}))}},{key:"detailDoa",value:(l=regeneratorRuntime.mark((function a(n){return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",new Promise((function(a,i){var e=t.a.filter((function(a){return a.id===n}));e.length?a(e[0]):i("".concat(n," is not found"))})));case 1:case"end":return a.stop()}}),a)})),o=function(){var a=this,n=arguments;return new Promise((function(i,t){var r=l.apply(a,n);function u(a){e(r,i,t,u,o,"next",a)}function o(a){e(r,i,t,u,o,"throw",a)}u(void 0)}))},function(a){return o.apply(this,arguments)})}],i&&r(n.prototype,i),u&&r(n,u),a}();n.a=u},,,,,,,,,function(a,n,i){"use strict";i.r(n);i(12),i(14),i(16),i(4),i(17);var t=i(9),e=i(7),r=new t.a;window.addEventListener("hashchange",(function(){r.renderPage()})),window.addEventListener("load",(function(){r.renderPage(),Object(e.a)()})),console.log("halo")}]);