<template>
    <div class="page overflow-y">
        <div class="task clearfix">
            <div class="fl"></div>
            <div class="fr">
                <router-link tag="button" to="/advantage/three/basic" class="btn btn-ok marginRight10">基础设置</router-link>
                <button @click="edit" class="btn btn-ok">添加</button>
            </div>
        </div>
        <table class="table-list-1 marginTop10">
            <thead>
            <tr>
                <th width="60">序号</th>
                <th>名称</th>
                <th width="120">排序</th>
                <th width="120">操作</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item, index) in article.content">
                <td>
                    {{index+1}}
                </td>
                <td>
                    {{item.name}}
                </td>
                <td>
                    {{item.weight}}
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