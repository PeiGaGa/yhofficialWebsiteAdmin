<template>
    <div v-if="visible" class="tips row align-top justify-between animated"
         :class="{'success': options.type == 'success', 'error': options.type == 'error', 'warning': options.type == 'warning'}">
        <i class="iconfont" :class="{'icon-success': options.type == 'success', 'icon-error': options.type == 'error', 'icon-warning': options.type == 'warning'}"></i>
        <div class="c" v-html="options.content" :style="{width: options.width + 'px', height: options.height + 'px'}">

        </div>
    </div>
</template>
<style lang="less" scoped>
    @import 'tips.less';
</style>
<script>
    export default{
        name: 'plugin-tips',
        props: {
            options: {},
        },
        data() {
            return {
                visible: false,
            }
        },
        mounted(){

        },
        created(){

        },
        methods: {
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
