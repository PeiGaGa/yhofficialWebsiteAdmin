/**
 * Created by Administrator on 2017/11/24.
 */
import Vue from 'vue';
import paging from './paging.vue';
export default {
    install(Vue){
        Vue.component(paging.name, paging);
    }
}