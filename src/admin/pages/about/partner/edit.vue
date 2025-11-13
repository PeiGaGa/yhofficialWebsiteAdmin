<template>
    <div class="banner-edit overflow-y">
        <table class="table-form-1">
            <tr>
                <th width="80"><span class="required">*</span>图片：</th>
                <td>
                    <plugin-uploadPic ref="file">选择文件</plugin-uploadPic>
                    <!-- <p>建议尺寸：200*200像素</p> -->
                </td>
                </td>
            </tr>
            <tr>
                <th>名称：</th>
                <td>
                    <input type="text" class="input input-percent" v-model="form.name" />
                </td>
            </tr>
            <tr>
                <th>排序：</th>
                <td>
                    <input type="text" class="input input-percent" v-model="form.weight" />
                </td>
            </tr>
        </table>
    </div>
</template>
<script>
    export default {
        name: 'edit',
        props: {
            form: {
                type: Object,
                default: ()=>{
                    return {};
                }
            },
        },
        data() {
            return {
                picList: []
            }
        },
        created(){
            this.$nextTick(()=>{
                if(this.form.pic){
                    this.picList.push({
                        url: this.form.pic.url
                    })
                }
            });
        },
        methods: {
            changeFile(){

            }
        }
    }
</script>
<style lang="less" scoped>
    @import 'edit.less';
</style>