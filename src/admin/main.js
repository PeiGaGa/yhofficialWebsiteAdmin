// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import css from './css/main.less';
import $ from 'jquery';
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import routes from './config/routes';
import App from './App.vue';
import filter from './config/filter';
import CodeMirror from './config/codemirror/codemirror';
import Editor from './config/editor/editor';
import UISelect from './config/select/select';
import UIPage from './config/paging/paging';
import UploadPic from './config/uploadPic/uploadPic';
import Box from './config/box/box';
import Confirm from './config/box/confirm';
import Loader from './config/loader/loader';
import ajax from './config/ajax/ajax';
import { showSuccess, showError, showWarning } from './config/box/tips';
import common from './config/common.js';
import store from './config/store.js';
Vue.use(VueRouter);
Vue.use(VueResource);
// Vue.use(Vuex);
Vue.use(filter);
Vue.use(CodeMirror);
Vue.use(Editor);
Vue.use(UISelect);
Vue.use(UIPage);
Vue.use(UploadPic);
Vue.$showBox = Vue.prototype.$showBox = Box;
Vue.$showConfirm = Vue.prototype.$showConfirm = Confirm;
Vue.$showSuccess = Vue.prototype.$showSuccess = showSuccess;
Vue.$showError = Vue.prototype.$showError = showError;
Vue.$showWarning = Vue.prototype.$showWarning = showWarning;
Vue.$ajax = Vue.prototype.$ajax = ajax;
Vue.$loader = Vue.prototype.$loader = new Loader();
Vue.$common = Vue.prototype.$common = common;

window.$ = window.jQuery = $;
//当前页面调用的plugin
window.plugin = [];

Vue.config.productionTip = false

let router = new VueRouter({
  routes: routes,
  linkActiveClass: 'active'
});
//正式发布注释掉本行
// Vue.prototype.$baseUrl = 'http://42.194.220.137:8080/';
Vue.prototype.$baseUrl = 'http://120.24.113.133:80/';
//正式发布启用下行
// Vue.prototype.$baseUrl = '';
//正式发布使用本行,需注释掉本地测试行
Vue.prototype.$editHomeUrl = '/static/admin/dist/js/lib/ueditor/';


//取消登录页集成，以下校验取消.20190215
// router.beforeEach(function (to, from, next) {
//   if (to.path != '/login' && store.state.authorized == false) {
//     router.push({path: '/login'});
//   } else {
//     document.title = to.meta.title;
//     next()
//   }
// })
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
});
new Vue({
  el: '#app',
  router,
  store,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  components: {
    App
  },
  template: '<app/>'
})
//
// //实例化
// let app = new Vue({
//   router: router,
//   data: {
//     cachePage: [],	//缓存页面
//   },
//   scrollBehavior (to, from, savedPosition) {
//     return { x: 0, y: 0 }
//   },
//   watch1: {
//     '$route' (to, from) {
//       document.title = to.meta.title;
//       this.$loader.show();
//       // this.$loader.hide();
//
//       while (plugin.length>0){
//         let instance = plugin.shift();
//         if(instance && instance.visible){
//           instance.visible = false;
//         }
//       }
//     }
//   },
//   created() {
//   },
//   methods: {
//
//   }
// }).$mount('#app');;
