(function(t){function e(e){for(var s,i,c=e[0],r=e[1],l=e[2],d=0,p=[];d<c.length;d++)i=c[d],n[i]&&p.push(n[i][0]),n[i]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],s=!0,c=1;c<a.length;c++){var r=a[c];0!==n[r]&&(s=!1)}s&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},n={app:0},o=[];function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/1903-vue-shequ/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=r;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"1b9d":function(t,e,a){"use strict";var s=a("e4a2"),n=a.n(s);n.a},3607:function(t,e,a){"use strict";var s=a("979f"),n=a.n(s);n.a},4678:function(t,e,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(t){var e=o(t);return a(e)}function o(t){var e=s[t];if(!(e+1)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return e}n.keys=function(){return Object.keys(s)},n.resolve=o,t.exports=n,n.id="4678"},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Header"),a("router-view")],1)},o=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[a("div",{staticClass:"header-inner"},[a("router-link",{staticClass:"logo",attrs:{to:"/"}},[a("img",{attrs:{src:"https://www.vue-js.com/public/images/vue.png",alt:""}}),a("h1",[t._v("Vue.js")])]),a("router-link",{attrs:{to:"/topic/create"}},[t.userInfo?a("div",[t._v("发不话题")]):t._e()]),a("router-link",{attrs:{to:"/topic/create"}},[a("div",[a("span",[t._v(t._s(t.shuliang))]),t._v(" 未读消息\n      ")])]),t.userInfo?a("div",{staticClass:"logout"},[a("img",{attrs:{src:t.userInfo.avatar_url,alt:""}}),a("button",{on:{click:t.logout}},[t._v("退出")])]):a("div",{staticClass:"login"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{type:"text"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),a("button",{on:{click:t.login}},[t._v("登录")])])],1)])},c=[],r=(a("3022"),a("bc3a")),l=a.n(r),u={name:"tou",data:function(){return{text:"676de471-b66a-4ccb-a3e1-bb060d1b4e5c",userInfo:null,shuliang:0}},created:function(){var t=this;sessionStorage.getItem("token")&&l.a.post("https://www.vue-js.com/api/v1/accesstoken",{accesstoken:sessionStorage.getItem("token")}).then(function(e){t.userInfo=e.data})},watch:{"$route.fullPath":{immediate:!0,handler:function(){var t=this;l.a.get("https://www.vue-js.com/api/v1/message/count?accesstoken=".concat(sessionStorage.getItem("token"))).then(function(e){t.shuliang=e.data.data})}}},methods:{login:function(){var t=this;l.a.post("https://www.vue-js.com/api/v1/accesstoken",{accesstoken:this.text}).then(function(e){t.userInfo=e.data,sessionStorage.setItem("token",t.text),sessionStorage.setItem("user_id",e.data.id)})},logout:function(){sessionStorage.clear(),this.userInfo=null}}},d=u,p=(a("8baf"),a("2877")),f=Object(p["a"])(d,i,c,!1,null,null,null),v=f.exports,m={name:"app",components:{Header:v}},h=m,b=Object(p["a"])(h,n,o,!1,null,null,null),j=b.exports,g=a("8c4f"),_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("ul",{staticClass:"nav"},[a("li",[a("router-link",{class:"/"===t.$route.fullPath||"/?tab=all"===t.$route.fullPath?"active":"",attrs:{to:"/?tab=all"},nativeOn:{click:function(e){t.total=856}}},[t._v("全部")])],1),a("li",[a("router-link",{class:"/?tab=good"===t.$route.fullPath?"active":"",attrs:{to:"/?tab=good"},nativeOn:{click:function(e){t.total=15}}},[t._v("精华")])],1),a("li",[a("router-link",{class:"/?tab=weex"===t.$route.fullPath?"active":"",attrs:{to:"/?tab=weex"},nativeOn:{click:function(e){t.total=3}}},[t._v("weex")])],1),a("li",[a("router-link",{class:"/?tab=share"===t.$route.fullPath?"active":"",attrs:{to:"/?tab=share"},nativeOn:{click:function(e){t.total=247}}},[t._v("分享")])],1),a("li",[a("router-link",{class:"/?tab=ask"===t.$route.fullPath?"active":"",attrs:{to:"/?tab=ask"},nativeOn:{click:function(e){t.total=577}}},[t._v("问答")])],1),a("li",[a("router-link",{class:"/?tab=job"===t.$route.fullPath?"active":"",attrs:{to:"/?tab=job"},nativeOn:{click:function(e){t.total=30}}},[t._v("招聘")])],1)]),a("div",{staticClass:"content"},[t.topics.length?a("ul",t._l(t.topics,function(e){return a("li",{key:e.id},[a("router-link",{attrs:{to:"/user/"+e.author.loginname}},[a("img",{style:{width:"30px",hight:"30px"},attrs:{src:e.author.avatar_url,alt:""}})]),a("div",[a("span",[t._v(t._s(e.reply_count))]),t._v("/\n          "),a("span",[t._v(t._s(e.visit_count))])]),"/"===t.$route.fullPath||"/?tab=all"===t.$route.fullPath||(e.top||e.good)?a("span",{class:{tab:!0,active:e.top||e.good}},[t._v(t._s(e.top?"置顶":e.good?"精华":"share"===e.tab?"分享":"ask"===e.tab?"问答":"job"===e.tab?"招聘":"weex"))]):t._e(),a("router-link",{staticClass:"txt",attrs:{to:"/topic/"+e.id}},[t._v(t._s(e.title))]),a("span",{staticClass:"time"},[t._v(t._s(t.myMoment(e.last_reply_at)))])],1)}),0):a("img",{attrs:{src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562737238334&di=271f9c7ceb6b1853b0466a7ce7ceadd9&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01d0f55b8e0674a8012126cecf461b.gif",alt:""}})]),a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.total},on:{"current-change":t.changePage}})],1)},k=[],w=a("c1df"),y=a.n(w),x={name:"home",data:function(){return{topics:[],total:856}},watch:{"$route.fullPath":{immediate:!0,handler:function(){var t=this,e=this.$route.query.tab||"all",a=this.$route.query.num||1;this.topics=[],l.a.get("https://www.vue-js.com/api/v1/topics/?tab=".concat(e,"&page=").concat(a)).then(function(e){t.topics=e.data.data})}}},methods:{myMoment:function(t){return y.a.locale("zh-cn"),y()(t).fromNow()},changePage:function(t){var e=this.$route.query.tab||"all";this.$router.push("/?tab=".concat(e,"&page=").concat(t))}}},C=x,z=(a("8b71"),Object(p["a"])(C,_,k,!1,null,null,null)),O=z.exports,$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.topic?a("div",{staticClass:"topic"},[a("article",[a("div",{staticClass:"article-head"},[a("div",[t.topic.top||t.topic.good?a("span",{staticClass:"tab active"},[t._v(t._s(t.topic.top?"置顶":"精华"))]):t._e(),a("h2",[t._v(t._s(t.topic.title))]),t.isLogin?a("span",{staticClass:"collect",on:{click:t.changeCollect}},[t._v(t._s(t.is_collect?"取消收藏":"加入收藏"))]):t._e()]),a("p",{staticStyle:{"font-size":"12px"}},[a("span",[a("b",[t._v("·")]),t._v("\n          发布于"+t._s(t.myMoment(t.topic.create_at))+"\n        ")]),a("span",[a("b",[t._v("·")]),t._v("\n          作者 "+t._s(t.topic.author.loginname)+"\n        ")]),a("span",[a("b",[t._v("·")]),t._v("\n          "+t._s(t.topic.visit_count)+" 次浏览\n        ")]),a("span",[a("b",[t._v("·")]),t._v("\n          来自 "+t._s("share"===t.topic.tab?"分享":"ask"===t.topic.tab?"问答":"job"===t.topic.tab?"招聘":"weex")+"\n        ")])])]),a("div",{staticClass:"topic_content",domProps:{innerHTML:t._s(t.topic.content)}})]),a("div",{staticClass:"comment"},[a("p",[t._v(t._s(t.topic.replies.length)+"回复")]),a("ul",{staticClass:"pinglun"},t._l(t.topic.replies,function(e){return a("li",{key:e.id},[a("router-link",{staticClass:"tx",attrs:{to:"/user/"+t.topic.author.loginname}},[a("img",{staticStyle:{width:"'30px',hight:'30px'"},attrs:{src:e.author.avatar_url,alt:""}})]),a("span",{staticClass:"comment-pl",domProps:{innerHTML:t._s(e.content)}}),a("span",{staticClass:"dz",staticStyle:{"margin-right":"20px"}},[a("span",{on:{click:function(a){return t.up(e.id)}}},[t._v(t._s(t.isUped(e.id)?"👍":"赞"))]),t._v("\n          "+t._s(e.ups.length?e.ups.length:"")+"\n        ")]),a("span",{staticClass:"hf",on:{click:function(a){return t.addReply(e.author.loginname)}}},[t._v("回复")])],1)}),0),a("div",{staticClass:"comment-form"},[a("span",[t._v("添加回复")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"textarea",attrs:{cols:"30",rows:"10"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),a("button",{on:{click:t.addComment}},[t._v("回复")])])])]):t._e()},S=[],P=(a("7514"),{name:"topic",data:function(){return{topic:null,is_collect:!1,text:""}},computed:{isLogin:function(){return Boolean(sessionStorage.getItem("token"))}},created:function(){var t=this,e=this.$route.params.id;l.a.get("https://www.vue-js.com/api/v1/topic/".concat(e)).then(function(e){console.log(e.data.data),t.topic=e.data.data})},methods:{myMoment:function(t){return y.a.locale("zh-cn"),y()(t).fromNow()},changeCollect:function(){var t=this,e={topic_id:this.$route.params.id,accesstoken:sessionStorage.getItem("token")};this.is_collect?l.a.post("https://www.vue-js.com/api/v1/topic/de_collect",e).then(function(e){e.data.success&&(t.is_collect=!1)}):l.a.post("https://www.vue-js.com/api/v1/topic/collect",e).then(function(e){e.data.success&&(t.is_collect=!0)})},addComment:function(){var t=this;l.a.post("https://www.vue-js.com/api/v1/topic/".concat(this.topic.id,"/replies"),{accesstoken:sessionStorage.getItem("token"),content:this.text}).then(function(e){l.a.get("https://www.vue-js.com/api/v1/topic/".concat(t.topic.id)).then(function(e){t.topic=e.data.data})})},up:function(t){var e=this;sessionStorage.getItem("token")?l.a.post("https://www.vue-js.com/api/v1/reply/".concat(t,"/ups"),{accesstoken:sessionStorage.getItem("token")}).then(function(a){console.log(a.data),"up"===a.data.action?e.topic.replies.find(function(e){return e.id===t}).ups.push(sessionStorage.getItem("user_id")):e.topic.replies.find(function(e){return e.id===t}).ups=e.topic.replies.find(function(e){return e.id===t}).ups.filter(function(t){return t!=sessionStorage.getItem("user_id")})}):alert("请登录")},isUped:function(t){return-1!==this.topic.replies.find(function(e){return e.id===t}).ups.indexOf(sessionStorage.getItem("user_id"))},addReply:function(t){this.text="@".concat(t," "),document.querySelector("textarea").focus()}}}),I=P,E=(a("1b9d"),Object(p["a"])(I,$,S,!1,null,null,null)),M=E.exports,q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"top-user"},[t._m(0),a("div",{staticClass:"user-box"},[a("div",{staticClass:"top-content"},[a("img",{attrs:{src:t.user.avatar_url,alt:""}}),a("span",[t._v(t._s(t.user.loginname))])]),a("div",{staticClass:"jifen"},[a("span",[t._v(t._s(t.user.score)+" 积分")]),a("span",{staticClass:"sj"},[t._v("注册时间"+t._s(t.myMoment(t.user.create_at)))])])]),a("div",{staticClass:"user-box2"},[a("ul",t._l(t.user.recent_topics,function(e){return a("li",{key:e.id},[a("router-link",{attrs:{to:"/user/"+e.author.loginname}},[a("img",{style:{width:"30px",hight:"30px"},attrs:{src:e.author.avatar_url,alt:""}})]),a("router-link",{staticClass:"txt",attrs:{to:"/topic/"+e.id}},[t._v(t._s(e.title))]),a("span",{staticClass:"time"},[t._v(t._s(t.myMoment(e.last_reply_at)))])],1)}),0)]),a("div",{staticClass:"user-box3"},[a("ul",t._l(t.user.recent_replies,function(e){return a("li",{key:e.id},[a("router-link",{attrs:{to:"/user/"+e.author.loginname}},[a("img",{style:{width:"30px",hight:"30px"},attrs:{src:e.author.avatar_url,alt:""}})]),a("router-link",{staticClass:"txt",attrs:{to:"/topic/"+e.id}},[t._v(t._s(e.title))]),a("span",{staticClass:"time"},[t._v(t._s(t.myMoment(e.last_reply_at)))])],1)}),0)])])])},N=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"zhuye"},[a("span",[t._v("主页")])])}],F={name:"user",data:function(){return{user:{}}},methods:{myMoment:function(t){return y.a.locale("zh-cn"),y()(t).fromNow()}},watch:{"$route.fullPath":{immediate:!0,handler:function(){var t=this,e=this.$route.params.loginname;l.a.get("https://www.vue-js.com/api/v1/user/".concat(e)).then(function(e){console.log(e.data.data),t.user=e.data.data})}}}},T=F,L=(a("3607"),Object(p["a"])(T,q,N,!1,null,null,null)),H=L.exports,R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("select",{directives:[{name:"model",rawName:"v-model",value:t.tab,expression:"tab"}],on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.tab=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:""}},[t._v("请选择")]),a("option",{attrs:{value:"share"}},[t._v("分享")]),a("option",{attrs:{value:"ask"}},[t._v("问答")]),a("option",{attrs:{value:"jop"}},[t._v("招聘")])]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),a("quill-editor",{ref:"myQuillEditor",attrs:{options:t.editorOption},on:{blur:function(e){return t.onEditorBlur(e)},focus:function(e){return t.onEditorFocus(e)},ready:function(e){return t.onEditorReady(e)}},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}}),a("button",{on:{click:t.submit}},[t._v("提交")])],1)},U=[],B=(a("a753"),a("8096"),a("14e1"),a("953d")),A={name:"create",data:function(){return{tab:"",title:"",text:"",editorOption:{}}},components:{quillEditor:B["quillEditor"]},methods:{submit:function(){var t=this;l.a.post("https://www.vue-js.com/api/v1/topics",{title:this.title,tab:this.tab,content:this.text,accesstoken:sessionStorage.getItem("token")}).then(function(e){console.log(e.data),t.tab="",t.title="",t.content="",t.$router.push("/topic/".concat(e.data.topic_id))})},onEditorBlur:function(t){console.log("editor blur!",t)},onEditorFocus:function(t){console.log("editor focus!",t)},onEditorReady:function(t){console.log("editor ready!",t)},onEditorChange:function(t){var e=t.quill,a=t.html,s=t.text;console.log("editor change!",e,a,s),this.content=a}}},D=A,G=Object(p["a"])(D,R,U,!1,null,null,null),J=G.exports;s["default"].use(g["a"]);var Q=new g["a"]({routes:[{path:"/",component:O},{path:"/topic/create",component:J},{path:"/topic/:id",component:M},{path:"/user/:loginname",component:H}],mode:"history"}),V=(a("8a7b"),a("672e"),a("450d"),a("101e")),K=a.n(V);s["default"].use(K.a),s["default"].config.productionTip=!1,new s["default"]({render:function(t){return t(j)},router:Q}).$mount("#app")},"782e":function(t,e,a){},"8a7b":function(t,e,a){},"8b71":function(t,e,a){"use strict";var s=a("e3a2"),n=a.n(s);n.a},"8baf":function(t,e,a){"use strict";var s=a("782e"),n=a.n(s);n.a},"979f":function(t,e,a){},e3a2:function(t,e,a){},e4a2:function(t,e,a){}});
//# sourceMappingURL=app.3f714447.js.map