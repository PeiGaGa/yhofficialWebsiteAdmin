<template>
    <div class="page overflow-y">
        <div class="task clearfix">
            <div class="fl"></div>
            <div class="fr">
                <button class="btn btn-ok" @click="edit">新增</button>
            </div>
        </div>
        <table class="table-list-1">
            <thead>
                <tr>
                    <th width="60">序号</th>
                    <th>名称</th>
                    <th width="120">排序</th>
                    <th width="120">操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in list">
                    <td>
                        {{index+1}}
                    </td>
                    <td>
                        {{item.cName}}
                    </td>
                    <td>
                        {{item.cWeight}}
                    </td>
                    <td>
                        <button type="button" class="table-btn btn-ok" @click="edit(item)">修改</button>
                        <button type="button" class="table-btn btn-cancel" @click="del(item)">删除</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
    import fn from './index.js';
    export default fn;
</script>
<style lang="less" scoped>
    @import 'index.less';
</style>