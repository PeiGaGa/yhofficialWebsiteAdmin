/**
 * Created by Administrator on 2017/11/24.
 */
import Vue from 'vue';
import editor from './editor.vue';
export default {
    install(Vue){
        Vue.component(editor.name, editor);
    }
}