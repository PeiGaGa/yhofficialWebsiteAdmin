/**
 * Created by Administrator on 2017/11/24.
 */
import Vue from 'vue';
import tmp from './confirm.vue';

const vueConstructor = Vue.extend(tmp);

const defaultOpt = {
    showCancel: true,
    okBtnName: '确定',
    cancelBtnName: '取消'
};

function confirm(opt){
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
        name: 'confirm',
        id: instance._uid,
        instance: instance
    });

    return instance;
}
export default confirm;