require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([6],[,,,,,,,,,,function(t,e,s){"use strict";var i=o(s(1)),a=o(s(11));function o(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(a.default))},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(13),a=s.n(i),o=s(14),r=!1;var n=function(t){r||s(12)},c=s(0)(a.a,o.a,n,"data-v-9cb60c7e",null);c.options.__file="Users/fanpengzheng/Downloads/uni-app/pages/tabbar/tabbar-1/tabbar-1.vue",c.esModule&&Object.keys(c.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),c.options.functional&&console.error("[vue-loader] tabbar-1.vue: functional components are not supported with templates, they should use render functions."),e.default=c.exports},function(t,e){},function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{categoryList:[],subCategoryList:[],height:0,categoryActive:0,scrollTop:0,scrollHeight:0}},methods:{scroll:function(t){this.scrollHeight=t.detail.scrollHeight},categoryClickMain:function(t,e){this.categoryActive=e,this.subCategoryList=t.subCategoryList,this.scrollTop=-this.scrollHeight*e},getCategory:function(){for(var t=0;t<20;t++){for(var e=[],s=0;s<30;s++)e.push({NAME:"分类"+t+":商品"+s,LOGO:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547449014672&di=067eacf00f54d64d56a53c44f1dfd81d&imgtype=0&src=http%3A%2F%2Fimg0.gjw.com%2Fproduct%2F2017%2F0705%2Faca786d98a9042c2b4eb4a883212ff1e.jpg"});this.categoryList.push({NAME:"分类"+t,subCategoryList:e})}this.subCategoryList=this.categoryList[0].subCategoryList}},onLoad:function(){var e=this;this.getCategory(),t.getSystemInfo({success:function(t){e.height=t.screenHeight}})}}}).call(e,s(2).default)},function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",[s("view",{staticClass:"content"},[s("view",{staticClass:"nav"},[s("view",{staticClass:"nav-left"},[s("scroll-view",{style:"height:"+t.height+"px",attrs:{"scroll-y":""}},t._l(t.categoryList,function(e,i){return s("view",{key:i,staticClass:"nav-left-item",class:i==t.categoryActive?"active":"",attrs:{eventid:"Jh7-0-"+i},on:{click:function(s){t.categoryClickMain(e,i)}}},[t._v("\n\t\t\t\t\t\t"+t._s(e.NAME)+"\n\t\t\t\t\t")])}))],1),s("view",{staticClass:"nav-right"},[s("scroll-view",{style:"height:"+t.height+"px",attrs:{"scroll-y":"","scroll-top":t.scrollTop,"scroll-with-animation":"",eventid:"xbJ-1"},on:{scroll:t.scroll}},t._l(t.subCategoryList,function(e,i){return s("view",{key:e.NAME,staticClass:"nav-right-item",attrs:{id:0==i?"first":""}},[s("image",{attrs:{src:e.LOGO}}),s("view",[t._v(t._s(e.NAME))])])}))],1)])])])};i._withStripped=!0;var a={render:i,staticRenderFns:[]};e.a=a}],[10]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/tabbar/tabbar-1/tabbar-1.js.map