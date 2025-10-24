<template>
    <div class="banner-edit overflow-y">
        <table class="table-form-1">
            <tr>
                <th>名称：</th>
                <td>
                    <input type="text" class="input input-percent" v-model="form.cName" />
                </td>
            </tr>
            <tr>
                <th>排序：</th>
                <td>
                    <input type="text" class="input input-percent" v-model="form.cWeight" />
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
        }
    }
</script>
<style lang="less" scoped>
    @import 'edit.less';
</style>