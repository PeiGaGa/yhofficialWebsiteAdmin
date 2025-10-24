<template>
    <div class="page overflow-y">
        <div class="task clearfix">
            <div class="fl"></div>
            <div class="fr"></div>
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
                    <router-link tag="button" :to="{name: 'homeIndustryEdit', params: {id: item.id}}" type="button" class="table-btn btn-ok">修改</router-link>
                </td>
            </tr>
            </tbody>
        </table>
      <router-view></router-view>
    </div>
</template>
<script>
    import fn from './index.js';
    export default fn;
</script>
<style lang="less" scoped>
    @import 'index.less';
</style>
