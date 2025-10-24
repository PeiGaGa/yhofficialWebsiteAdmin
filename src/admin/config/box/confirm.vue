<template>
    <div class="confirm-wrap" v-if="visible">
        <div class="confirm">
            <div class="t">
                <i class="iconfont icon-del" @click="onClose"></i>
            </div>
            <div class="c row align-center justify-center">
                <i class="iconfont icon-help"></i>
                <div class="content" v-html="options.content" :style="{width: options.width + 'px', height: options.height + 'px'}"></div>
            </div>
            <div class="b row align-center justify-center">
                <button type="button" class="btn btn-ok" @click="onOk">{{options.okBtnName}}</button>
                <button type="button" class="btn btn-cancel" @click="onCancel">{{options.cancelBtnName}}</button>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
    @import 'confirm.less';
</style>
<script>
    export default{
        name: 'plugin-confirm',
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
            onOk(){
                if(!this.options.onOk || typeof this.options.onOk != 'function'){
                    this.visible = false;
                    return;
                }
                this.options.onOk.call(this, this);
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
