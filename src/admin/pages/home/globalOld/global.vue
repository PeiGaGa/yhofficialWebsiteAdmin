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
                    <th width="400">名称</th>
                    <th width="400">地址</th>
                    <th width="400">经度</th>
                    <th width="400">纬度</th>
                    <th width="120">排序</th>
                    <th width="180">操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in list">
                    <td>
                        {{index+1}}
                    </td>
                    <td class="word-break">
                        {{item.name}}
                    </td>
                    <td class="word-break">
                        {{item.address}}
                    </td>
                    <td class="word-break">
                        {{item.longitude}}
                    </td>
                    <td class="word-break">
                        {{item.latitude}}
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
    import fn from './global.js';
    export default fn;
</script>
<style lang="less" scoped>
    @import 'global.less';
</style>