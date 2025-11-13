<!--
 * @Author: 邹中兴
 * @Date: 2019-02-12 16:10:02
 * @LastEditors: 邹中兴
 * @LastEditTime: 2020-08-13 23:04:55
 * @Description: 
-->
<template>
    <div class="banner-edit overflow-y">
        <table class="table-form-1">
            <tr>
                <th width="80"><span class="required">*</span>图片：</th>
                <td>
                    <plugin-uploadPic ref="file">选择文件</plugin-uploadPic>
                    <!-- <p>建议尺寸：2200*1360像素</p> -->
                </td>
                </td>
            </tr>   
            <tr>
                <th><span class="required">*</span>主文字：</th>
                <td>
                    <input type="text" class="input input-percent" v-model="form.name" />
                </td>
            </tr>
            <tr>
                <th><span class="required">*</span>副文字：</th>
                <td>
                    <input type="text" class="input input-percent" v-model="form.nameEN" />
                </td>
            </tr>
            <tr>
                <th>超链接：</th>
                <td>
                    <input type="text" class="input input-percent" v-model="form.link" />
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