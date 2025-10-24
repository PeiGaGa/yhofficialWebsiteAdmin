/**
 * Created by Administrator on 2017/11/24.
 */
import Vue from 'vue';
import tmp from './loader.vue';

const vueConstructor = Vue.extend(tmp);

const defaultOpt = {
    width: 400,
    showBtn: true,
    showOk: true,
    showCancel: true,
    okBtnName: '确定',
    cancelBtnName: '取消'
};

function loader(){

    this.instance = new vueConstructor({
        el: document.createElement('div'),
        methods: {

        }
    });
    document.body.appendChild(this.instance.$el);

    return this;
}

loader.prototype.show = function(){
    this.instance.visible = true;
};

loader.prototype.hide = function(){
    this.instance.visible = false;
};

export default loader;
