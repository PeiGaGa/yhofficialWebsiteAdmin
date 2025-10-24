<template>
    <div class="banner-edit overflow-y">
        <table class="table-form-1">
            <tr>
                <th width="80"><span class="required">*</span>名称：</th>
                <td>
                    <input type="text" class="input input-percent" v-model="form.name" />
                </td>
            </tr>
            <tr>
                <th><span class="required">*</span>地址：</th>
                <td>
                    <input type="text" class="input input-percent" v-model="form.address" />
                </td>
            </tr>
            <tr>
                <th><span class="required">*</span>经度：</th>
                <td>
                    <input type="text" class="input input-percent" v-model="form.longitude" />
                </td>
            </tr>
            <tr>
                <th><span class="required">*</span>纬度：</th>
                <td>
                    <input type="text" class="input input-percent" v-model="form.latitude" />
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