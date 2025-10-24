/**
 * Created by Administrator on 2017/11/24.
 */
import Vue from 'vue';
import tmp from './box.vue';

const vueConstructor = Vue.extend(tmp);

const defaultOpt = {
    width: 400,
    showBtn: true,
    showOk: true,
    showCancel: true,
    okBtnName: '确定',
    cancelBtnName: '取消'
};

function box(opt){
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
    });

    plugin.push({
        name: 'box',
        id: instance._uid,
        instance: instance
    });

    return instance;
}

export default box;