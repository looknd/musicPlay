webpackJsonp([1,2],{21:function(a,t,e){"use strict";var i=e(2),n=e.n(i),s=e(77),l=e.n(s),o=e(70),r=e.n(o),u=e(71),c=e.n(u),d=e(72),p=e.n(d);n.a.use(l.a),t.a=new l.a({routes:[{path:"/",name:"Hello",component:r.a},{path:"/mv/mvid=:id",name:"Mv",component:c.a},{path:"/update",name:"Update",component:p.a}]})},23:function(a,t){},24:function(a,t,e){e(69);var i=e(6)(e(47),e(75),null,null);a.exports=i.exports},47:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app"}},48:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"hello",data:function(){return{playLoading:!1,search:[],searchMusicVal:"",search_show:!1,radio_show:!1,dialogTableVisible:!1,mp3:[],album:[],albumName:"",albumBg:"",playlist:[],playlistName:"",playlistId:"",hidden:!1,win:{height:""}}},created:function(){this.playlistajax(),this.win.height=window.innerHeight+"px"},watch:{searchMusicVal:function(a){var t=this;return""!==a&&void setTimeout(function(){t.$http.jsonp("http://www.bechina.org/e/publics/data/musicapi.php",{params:{search:a,limit:100}}).then(function(a){t.search=a.data.result.songs,t.search_show=!0})},500)}},methods:{playMusic:function(a){var t=this;this.playLoading=!0,this.$http.jsonp("http://www.bechina.org/e/publics/data/play.php",{params:{id:a}}).then(function(a){t.playLoading=!1,t.radio_show=!0,t.mp3=a.data})},searchAlbum:function(a,t){var e=this;this.albumName=t,this.$http.jsonp("http://www.bechina.org/e/publics/data/album.php",{params:{id:a}}).then(function(a){e.album=a.data.result,e.albumBg=a.data.result[0].album.blurPicUrl})},playlistajax:function(){var a=this;this.hidden=!0,this.$http.jsonp("http://www.bechina.org/e/publics/data/playlist.php",{params:{id:320201522}}).then(function(t){a.playlist=t.data.result,a.playlistName=t.data.name,a.playlistId=t.data.id,a.hidden=!1})}}}},49:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"mv",data:function(){return{mvid:""}},beforeCreate:function(){console.log("loading")},created:function(){this.Load()},methods:{Load:function(){this.mvid=this.$route.path.split("=")[1],console.log(this.mvid)}}}},50:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"update"}},68:function(a,t){},69:function(a,t){},70:function(a,t,e){e(68);var i=e(6)(e(48),e(73),"data-v-3f10c9f4",null);a.exports=i.exports},71:function(a,t,e){var i=e(6)(e(49),e(74),null,null);a.exports=i.exports},72:function(a,t,e){var i=e(6)(e(50),e(76),null,null);a.exports=i.exports},73:function(a,t){a.exports={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"search-box",style:a.win},[e("el-input",{directives:[{name:"model",rawName:"v-model",value:a.searchMusicVal,expression:"searchMusicVal"}],attrs:{placeholder:"输入歌手/歌名/歌词",icon:"search"},domProps:{value:a.searchMusicVal},on:{input:function(t){a.searchMusicVal=t}}}),a._v(" "),a.search_show?e("ul",{directives:[{name:"loading",rawName:"v-loading.body",value:a.playLoading,expression:"playLoading",modifiers:{body:!0}}],staticClass:"search-box-list"},a._l(a.search,function(t){return e("li",{attrs:{id:t.id}},[e("div",{staticClass:"name"},[a._v(a._s(t.name))]),a._v(" "),e("div",{staticClass:"artists"},[a._v("\n         歌手："+a._s(t.artists[0].name)+" "),e("span",{on:{click:[function(e){e.stopPropagation(),a.searchAlbum(t.album.id,t.album.name)},function(t){a.dialogTableVisible=!0}]}},[a._v("专辑："+a._s(t.album.name)+" "),e("i",{staticClass:"el-icon-menu"})])]),a._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:function(e){e.stopPropagation(),a.playMusic(t.id)}}},[a._v("播放")]),a._v(" "),e("a",{attrs:{href:"http://music.163.com/#/mv?id="+t.mvid}},[e("el-button",[a._v("Mv")])],1)],1)})):a._e(),a._v(" "),e("div",{directives:[{name:"loading",rawName:"v-loading.body",value:a.hidden,expression:"hidden",modifiers:{body:!0}}],staticClass:"playlist"},[e("h4",{attrs:{id:a.playlistId}},[a._v(a._s(a.playlistName))]),a._v(" "),e("ul",a._l(a.playlist,function(t){return e("li",[e("div",{staticClass:"name"},[a._v(a._s(t.name))]),a._v(" "),e("div",{staticClass:"artists"},[a._v("\n           歌手："+a._s(t.album.artists[0].name)+" "),e("span",{on:{click:[function(t){a.dialogTableVisible=!0},function(e){e.stopPropagation(),a.searchAlbum(t.album.id,t.album.name)}]}},[a._v("专辑："+a._s(t.album.name)+" "),e("i",{staticClass:"el-icon-menu"})])]),a._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:function(e){e.stopPropagation(),a.playMusic(t.id)}}},[a._v("播放")]),a._v(" "),e("a",{attrs:{href:"http://music.163.com/#/mv?id="+t.mvid}},[e("el-button",[a._v("Mv")])],1)],1)}))]),a._v(" "),a.radio_show?e("div",{staticClass:"play-box"},[e("div",{staticClass:"play-info"},[e("img",{attrs:{src:a.mp3.mp3bg}}),e("el-button",{attrs:{type:"primary"}},[a._v(a._s(a.mp3.mp3name))])],1),a._v(" "),e("audio",{attrs:{controls:"controls",src:a.mp3.mp3url,autoplay:"autoplay"}})]):a._e(),a._v(" "),e("el-dialog",{directives:[{name:"model",rawName:"v-model",value:a.dialogTableVisible,expression:"dialogTableVisible"},{name:"loading",rawName:"v-loading.body",value:a.playLoading,expression:"playLoading",modifiers:{body:!0}}],staticClass:"album-dialog",attrs:{size:"large",title:a.albumName},domProps:{value:a.dialogTableVisible},on:{input:function(t){a.dialogTableVisible=t}}},[e("div",{staticClass:"album-info"},[e("div",{staticClass:"album-bg"},[e("img",{attrs:{src:a.albumBg}})]),a._v(" "),e("ul",a._l(a.album,function(t){return e("li",[e("el-button",{on:{click:function(e){e.stopPropagation(),a.playMusic(t.id)}}},[a._v(a._s(t.name))])],1)}))])])],1)},staticRenderFns:[]}},74:function(a,t){a.exports={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"mv-box"},[a._v("\n   当前Mvid为："+a._s(0==a.mvid?"这个音乐没有mv":a.mvid)+"\n")])},staticRenderFns:[]}},75:function(a,t){a.exports={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]}},76:function(a,t){a.exports={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"update"},[a._v("下拉刷新")])},staticRenderFns:[]}},80:function(a,t){},81:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e(2),n=e.n(i),s=e(24),l=e.n(s),o=e(21),r=e(25),u=e.n(r),c=e(22),d=e.n(c),p=e(23);e.n(p);n.a.use(u.a),n.a.use(d.a),new n.a({el:"#app",router:o.a,template:"<App/>",components:{App:l.a}})}},[81]);
//# sourceMappingURL=app.fe97ece1aee90757b89f.js.map