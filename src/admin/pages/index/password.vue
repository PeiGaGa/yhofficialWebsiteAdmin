<template>
    <div class="banner-edit">
        <table class="table-form-1">
            <tr>
                <th width="80"><span class="required">*</span>原密码：</th>
                <td>
                    <input type="text" class="input input-percent" v-model="form.password" />
                </td>
            </tr>
            <tr>
                <th><span class="required">*</span>旧密码：</th>
                <td>
                    <input type="text" class="input input-percent" v-model="form.newPassword" />
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
            }
        },
        created(){
        },
        methods: {
            changeType(item){
                this.type = item;
            },
            changeFile(){

            }
        }
    }
</script>
<style lang="less" scoped>
    @import 'password.less';
</style>