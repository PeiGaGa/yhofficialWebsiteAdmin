<template>
    <div class="page overflow-y">
        <form onsubmit="return false;">
            <table class="table-form-1">
                <tr>
                    <th width="120"><span class="required">*</span>招聘类型：</th>
                    <td>
                        <select class="select" v-model="form.type">
                            <option v-for="item in typeList" :value="item.id">{{item.name}}</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <th><span class="required">*</span>标题：</th>
                    <td>
                        <input class="input" type="text" v-model="form.name" />
                    </td>
                </tr>
                <tr>
                    <th width="120"><span class="required">*</span>所属机构：</th>
                    <td>
                        <select class="select" v-model="form.company">
                            <option v-for="item in companyList" :value="item.id">{{item.cName}}</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <th width="120"><span class="required">*</span>工作地点：</th>
                    <td>
                        <select class="select" v-model="form.address">
                            <option v-for="item in addressList" :value="item.id">{{item.cName}}</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <th width="120"><span class="required">*</span>所属部门：</th>
                    <td>
                        <select class="select" v-model="form.department">
                            <option v-for="item in departmentList" :value="item.id">{{item.cName}}</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <th width="120"><span class="required">*</span>职位类别：</th>
                    <td>
                        <select class="select" v-model="form.category">
                            <option v-for="item in categoryList" :value="item.id">{{item.cName}}</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <th width="120"><span class="required">*</span>工作类型：</th>
                    <td>
                        <select class="select" v-model="form.work">
                            <option v-for="item in workList" :value="item.id">{{item.name}}</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <th width="120"><span class="required">*</span>学历：</th>
                    <td>
                        <input type="text" class="input" v-model="form.education" />
                    </td>
                </tr>
                <tr>
                    <th><span class="required">*</span>任职要求：</th>
                    <td>
                        <plugin-editor ref="duties" :html="form.duties"></plugin-editor>
                    </td>
                </tr>
                <tr>
                    <th><span class="required">*</span>岗位描述：</th>
                    <td>
                        <plugin-editor ref="jobDescription" :html="form.jobDescription"></plugin-editor>
                    </td>
                </tr>
            </table>
            <table class="table-form-1 marginTop10">
                <caption>SEO设置</caption>
                <tr>
                    <th width="120">页面标题：</th>
                    <td>
                        <input type="text" class="input" v-model="form.title" />
                    </td>
                </tr>
                <tr>
                    <th>页面关键字：</th>
                    <td>
                        <input type="text" class="input" v-model="form.keyword" />
                    </td>
                </tr>
                <tr>
                    <th>页面描述：</th>
                    <td>
                        <input type="text" class="input" v-model="form.description" />
                    </td>
                </tr>
                <tr>
                    <th></th>
                    <td>
                        <button type="button" class="btn btn-ok" @click="submit">保存</button>
                    </td>
                </tr>
            </table>
        </form>
    </div>
</template>
<script>
    import fn from './edit.js';
    export default fn;
</script>
<style lang="less" scoped>
    @import 'edit.less';
</style>