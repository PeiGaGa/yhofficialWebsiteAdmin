/**
 * Created by c-zouzhongxing1 on 2018/12/30. 
 */
import Vue from 'vue'
import Vuex from "vuex";//引入Vuex
Vue.use(Vuex);
//3.创建store
let store = new Vuex.Store({
  //4.配置store的的数据/存/取
  state: {
    authorized: false,
  },
  //取数据
  getters: {},
  //操作数据
  mutations: {
    set_authorized (state, arg) {
      state.authorized = arg
    }
  }
})
export default store;
