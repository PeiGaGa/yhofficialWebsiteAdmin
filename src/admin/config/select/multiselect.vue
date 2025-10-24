<template>
    <dl class="select-wrap multiselect" :class="{hover: isHover}" @click.stop="">
        <dt @click="clickDt">
            <span class="input input-precent">{{resultWord}}</span>
            <i class="iconfont icon-arrow-down"></i>
        </dt>
        <dd>
            <ul>
                <li class="item" v-for="item in list" @click="setText(item)">
                    <i class="iconfont icon-checkbox" :class="{
                    'icon-checkbox-normal': (fieldKey && !item.checked) || (!fieldKey && result.indexOf(item) == -1),
                    'icon-checkbox-checked': (fieldKey && item.checked) || (!fieldKey && result.indexOf(item) != -1)}"></i>
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
        name: 'ui-multiselect',
        props: {
            defaults: null,     //默认值
            list: null,         //列表
            fieldKey: null,     //显示文字所对应的key，比如name
            onlyKey: null,      //唯一key，比如id
            onChange: null,     //切换事件
            max: {              //多选最多显示几个，超出显示：已选几个
                type: Number,
                default: ()=>{
                    return 3;
                }
            }
        },
        data() {
            return {
                isHover: false,
                result: [],
                text: null,
                resultWord: null,
                onlyMark: null
            }
        },
        created(){
            if(this.onlyKey){
                this.onlyMark = this.onlyKey;
            }else{
                this.onlyMark = this.fieldKey;
            }
            if(this.defaults){
                this.result = [].concat(this.defaults);
            }
            this.setResultWord();
            document.body.addEventListener('click', ()=>{
                this.isHover = false;
            });
        },
        methods: {
            setResultWord(){
                const length = this.result.length;
                if(length == 0){
                    this.resultWord = null;
                    return;
                }
                if(length>this.max){
                    this.resultWord = '已选择' + length + '个';
                    return;
                }
                let arr = [];
                for(let i=0;i<length;i++){
                    let obj = this.result[i],
                        name;
                    if(this.fieldKey){
                        name = obj[this.fieldKey];
                    }else{
                        name = obj;
                    }
                    arr.push(name);
                }
                this.resultWord = arr.join();
            },
            clickDt(){
                this.isHover = !this.isHover;
            },
            setText(item){
                if(this.fieldKey){
                    this.$set(item, 'checked', !item.checked);
                    if(item.checked){
                        this.result.push(item);
                    }else{
                        let index;
                        for(let i=0;i<this.result.length;i++){
                            if(this.result[i][this.onlyMark] == item[this.onlyMark]){
                                index = i;
                                break;
                            }
                        }
                        if(index>=0){
                            this.result.splice(index, 1);
                        }
                    }
                }else{
                    let index = this.result.indexOf(item);
                    if(index == -1){
                        this.result.push(item);
                    }else{
                        this.result.splice(index, 1);
                    }
                }
                this.setResultWord();
                this.onChange && typeof this.onChange == 'function' && this.onChange(item);
            },
            addText(){

            }
        }
    }
</script>
