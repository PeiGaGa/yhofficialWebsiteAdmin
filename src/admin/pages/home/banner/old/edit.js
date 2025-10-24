/**
 * Created by Administrator on 2017/11/17.
 */

import Vue from 'vue';
import tmp from './edit.vue';

const vueConstructor = Vue.extend(tmp);

function init(opt){
    let instance = new vueConstructor({
        methods: {

        }
    });
    instance.form = $.extend(true, {}, opt);
    return instance;
}

export default init;