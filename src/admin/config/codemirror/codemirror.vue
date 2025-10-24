<template>
    <div class="codemirror">
        <div class="content" :style="{height: contentHeight + 'px'}">
            <div class="source"></div>
            <div class="view editor-view" v-html="content"></div>
        </div>
    </div>
</template>
<style lang="less" scoped>
    @import 'codemirror.less';
</style>
<script>
    export default{
        name: 'plugin-code',
        props: {
            height: {
                type: Number,
                default: ()=>{
                    return 300
                }
            },
            autoHeight: false,
            html: null,
            onChange: null,
            readOnly: false
        },
        data() {
            return {
                editor: null,
                visible: false,
                content: null,
                contentHeight: this.height
            }
        },
        beforeMount(){
        },
        mounted(){
            require.ensure([], ()=>{
                const codemirror = require('codemirror');
                require('codemirror/lib/codemirror.css');
                require('codemirror/theme/rubyblue.css');
                /*mode*/
                require('codemirror/mode/xml/xml');
                require('codemirror/mode/css/css');
                require('codemirror/mode/javascript/javascript');
                require('codemirror/mode/htmlmixed/htmlmixed');
                /* hint */
                require('codemirror/addon/hint/show-hint');
                require('codemirror/addon/hint/show-hint.css');
                require('codemirror/addon/hint/html-hint');
                require('codemirror/addon/hint/css-hint');
                require('codemirror/addon/hint/javascript-hint');
                /* scroll */
                require('codemirror/addon/scroll/simplescrollbars');
                require('codemirror/addon/scroll/simplescrollbars.css');
                this.init(codemirror);
            }, 'codemirror');
        },
        created(){
        },
        methods: {
            init(codemirror, marked){
                const $source = this.$el.querySelector('.source');
                this.content = this.html;
                this.editor = codemirror($source, {
                    theme: 'rubyblue',
                    mode: {
                        name: 'htmlmixed'
                    },
                    lineNumbers: true,
                    indentUnit: 4,
                    scrollbarStyle: 'simple',
                    hintOptions: {
                        completeSingle: false
                    },
                });
                this.editor.setSize('100%', '100%');
                this.editor.on('inputRead', ()=> {
                    this.editor.showHint();
                });
                this.editor.on('change', ()=> {
                    this.content = this.editor.getValue();
                    this.onChange && typeof this.onChange == 'function' && this.onChange(this.content);
                    if(this.autoHeight){
                        let height = this.$el.querySelector('.CodeMirror-sizer').clientHeight,
                            scrollTop = this.$el.querySelector('.CodeMirror-sizer').scrollTop;
                        height = height + scrollTop + 40;
                        this.contentHeight = Math.max(height, this.height);
                    }
                });
            }
        }
    }
</script>