/**
 * Created by Administrator on 2017/11/17.
 */

import Vue from 'vue';
import tmp from './password.vue';

const vueConstructor = Vue.extend(tmp);

function init(opt){
    let instance = new vueConstructor({
        el: document.createElement('div'),
        methods: {

        }
    });
    instance.form = $.extend(true, {}, opt);
    return instance;
}

export default init;