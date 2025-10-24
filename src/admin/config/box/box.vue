<template>
    <transition @after-enter="afterEnter">
        <div class="box-wrap" v-if="visible">
            <div class="box">
                <div class="t">
                    <h4 class="title">{{options.title}}</h4>
                    <i class="iconfont icon-del" @click="onClose"></i>
                </div>
                <div class="c" v-html="options.content" :style="{width: options.width + 'px', height: options.height + 'px'}">
                </div>
                <div class="b row align-center justify-center" v-if="options.showBtn">
                    <button type="button" class="btn btn-ok" v-if="options.showOk" @click="onOk">{{options.okBtnName}}</button>
                    <button type="button" class="btn btn-cancel" v-if="options.showCancel" @click="onCancel">{{options.cancelBtnName}}</button>
                </div>
            </div>
        </div>
    </transition>
</template>
<style lang="less" scoped>
    @import 'box.less';
</style>
<script>
    export default{
        name: 'plugin-box',
        props: {
            options: {},
        },
        data() {
            return {
                visible: false,
            }
        },
        created(){
        },
        methods: {
            afterEnter(){
                if(this.options.onOpen && typeof this.options.onOpen){
                    this.options.onOpen.call(this, this);
                }
            },
            onOk(){
                if(!this.options.onOk || typeof this.options.onOk != 'function'){
                    this.visible = false;
                    return;
                }
                if(this.options.onOk.call(this, this)){
                    this.visible = false;
                }
            },
            onCancel(){
                if(!this.options.onCancel || typeof this.options.onCancel != 'function'){
                    this.visible = false;
                    return;
                }
                this.options.onCancel.call(this, this);
            },
            onClose(){
                if(!this.options.onClose || typeof this.options.onClose != 'function'){
                    this.visible = false;
                    return;
                }
                this.options.onClose.call(this, this);
            },
        }
    }
</script>
