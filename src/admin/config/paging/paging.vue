<template>
    <div class="paging clearfix">
        <div class="total fl">
            <span>当前页数：{{current}}</span>
            <span>总页数：{{total}}</span>
        </div>
        <div class="list fr">
            <span @click="first">首页</span>
            <span @click="prev">上一页</span>
            <span @click="next">下一页</span>
            <span @click="last">尾页</span>
        </div>
    </div>
</template>
<style lang="less" scoped>
    @import 'paging.less';
</style>
<script>
    export default{
        name: 'ui-page',
        props: {
            current: null,
            total: null,
            onChange: null
        },
        data() {
            return {
            }
        },
        created(){
        },
        methods: {
            first(){
                if(!this.onChange || typeof this.onChange != 'function'){
                    return;
                }
                this.onChange(1);
            },
            last(){
                if(!this.onChange || typeof this.onChange != 'function'){
                    return;
                }
                this.onChange(this.total);
            },
            prev(){
                if(!this.onChange || typeof this.onChange != 'function'){
                    return;
                }
                if(this.current > 1){
                    this.onChange(this.current-1);
                }
            },
            next(){
                if(!this.onChange || typeof this.onChange != 'function'){
                    return;
                }
                if(this.current < this.total){
                    this.onChange(this.current+1);
                }
            }

        }
    }
</script>
