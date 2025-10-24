/**
 * Created by Administrator on 2017/11/24.
 */
import Vue from 'vue';
import select from './select.vue';
import multiselect from './multiselect.vue';
export default {
    install(Vue){
        Vue.component(select.name, select);
        Vue.component(multiselect.name, multiselect);
    }
}