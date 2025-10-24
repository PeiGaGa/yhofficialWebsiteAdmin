<template>
    <div class="loader-wrap" v-if="visible">
        <svg viewBox="25 25 50 50" class="svg" :class="{active: visible}">
            <circle cx="50" cy="50" r="20" fill="none" class="path"></circle>
        </svg>
    </div>
</template>
<style lang="less" scoped>
    @import 'loader.less';
</style>
<script>
    export default{
        name: 'plugin-loader',
        props: {
            options: {},
        },
        data() {
            return {
                visible: true,
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
