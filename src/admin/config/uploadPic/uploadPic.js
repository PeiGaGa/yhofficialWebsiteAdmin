/**
 * Created by Administrator on 2017/11/24.
 */
import Vue from 'vue';
import uploadPic from './uploadPic.vue';
export default {
    install(Vue){
        Vue.component(uploadPic.name, uploadPic);
    }
}