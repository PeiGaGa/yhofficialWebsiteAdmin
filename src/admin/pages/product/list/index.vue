<template>
  <div>
    <div class="page overflow-y" v-if="$route.path=='/product/list'">
        <div class="task clearfix">
            <div class="fl">
                <select class="select select-200" v-model="type">
                    <option v-for="item in typeList" :value="item.id">{{item.name}}</option>
                </select>
            </div>
            <div class="fr">
                <router-link tag="button" class="btn btn-ok" to="/product/list/add">新增</router-link>
            </div>
        </div>
        <table class="table-list-1">
            <thead>
            <tr>
                <th width="60">序号</th>
                <th width="200">所属分类</th>
                <th width="200">名称</th>
                <th>列表图</th>
                <th>详情图</th>
                <th width="80">是否推荐</th>
                <th width="120">排序</th>
                <th width="120">操作</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item, index) in list.content">
                <td>
                    {{index+1}}
                </td>
                <td>
                    {{item.menu.name}}
                </td>
                <td>
                    {{item.name}}
                </td>
                <td>
                    <a :href="item.widePicUrl" target="_blank">
                        <img :src="item.widePicUrl" class="pic" />
                    </a>
                </td>
                <td>
                    <a :href="item.picUrl" target="_blank">
                        <img :src="item.picUrl" class="pic" />
                    </a>
                </td>
                <td>
                    <span v-if="item.recommend">√</span>
                </td>
                <td>
                    {{item.weight}}
                </td>
                <td>
                    <router-link tag="button" :to="{name: 'productListEdit', params: {id: item.id}}" type="button" class="table-btn btn-ok">修改</router-link>
                    <button type="button" class="table-btn btn-cancel" @click="del(item)">删除</button>
                </td>
            </tr>
            </tbody>
        </table>
        <ui-page class="paging" :total="list.total" :current="list.current" :onChange="onPageChange"></ui-page>
    </div><router-view></router-view>
    </div>
</template>
<script>
    import fn from './index.js';
    export default fn;
</script>
<style lang="less" scoped>
    @import 'index.less';
</style>
