/**
 * Created by Administrator on 2017/11/24.
 */
import Vue from 'vue';
import tmp from './tips.vue';

const vueConstructor = Vue.extend(tmp);

const defaultOpt = {
    width: 400,
    showBtn: true,
    showOk: true,
    showCancel: true,
    okBtnName: '确定',
    cancelBtnName: '取消',
    timer: 2500
};

function tips(opt){
    if(typeof opt == 'string'){
        opt = {
            content: opt
        };
    }
    let instance = new vueConstructor({
        el: document.createElement('div'),
        methods: {

        }
    });
    document.body.appendChild(instance.$el);

    instance.options = $.extend(true, {}, defaultOpt, opt);

    Vue.nextTick(()=>{
        instance.visible = true;
        setTimeout(()=>{
            instance.visible = false;
        }, instance.options.timer);
    });

    plugin.push({
        name: 'tips',
        id: instance._uid,
        instance: instance
    });

    return instance;
}

export function showSuccess(opt){
    if(typeof opt == 'string'){
        opt = {
            content: opt,
            type: 'success'
        };
    }
    tips(opt);
}

export function showError(opt){
    if(typeof opt == 'string'){
        opt = {
            content: opt,
            type: 'error'
        };
    }
    tips(opt);
}

export function showWarning(opt){
    if(typeof opt == 'string'){
        opt = {
            content: opt,
            type: 'warning'
        };
    }
    tips(opt);
}