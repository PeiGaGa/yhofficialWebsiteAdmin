<template>
    <dl class="select-wrap" :class="{hover: isHover}" @click.stop="">
        <dt @click="clickDt">
            <span class="input input-precent" v-if="result && fieldKey">{{result[fieldKey]}}</span>
            <span class="input input-precent" v-if="!result || !fieldKey">{{result}}</span>
            <i class="iconfont icon-arrow-down"></i>
        </dt>
        <dd>
            <ul>
                <li v-for="item in list" @click="setText(item)">
                    <span v-if="!$scopedSlots.item && fieldKey">{{item[fieldKey]}}</span>
                    <span v-if="!$scopedSlots.item && !fieldKey">{{item}}</span>
                    <slot v-if="$scopedSlots.item" name="item" :item="item"></slot>
                </li>
                <li v-if="$scopedSlots.other">
                    <slot name="other"></slot>
                </li>
            </ul>
        </dd>
    </dl>
</template>
<style lang="less" scoped>
    @import 'select.less';
</style>
<script>
    export default{
        name: 'ui-select',
        props: {
            defaults: null,
            list: null,
            fieldKey: null,
            onChange: null,
        },
        data() {
            return {
                isHover: false,
                result: null,
                text: null
            }
        },
        created(){
            document.body.addEventListener('click', ()=>{
                this.isHover = false;
            });
        },
        methods: {
            clickDt(){
                this.isHover = !this.isHover;
            },
            setText(item){
                this.result = item;
                this.isHover = false;
                this.onChange && typeof this.onChange == 'function' && this.onChange(item);
            },
            addText(){

            }
        }
    }
</script>
