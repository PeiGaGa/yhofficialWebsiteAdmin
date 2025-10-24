<template>
  <div>
    <div class="page overflow-y" v-if="$route.path=='/product/menu'">
      <div class="task clearfix">
        <div class="fl">
        </div>
        <div class="fr">
          <!--<router-link tag="button" to="/product/menu/add" class="btn btn-ok">新增</router-link>-->
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
        <tbody v-for="(item, index) in list">
        <tr>
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
            <router-link tag="button" :to="{name: 'productMenuEdit', params: {id: item.id}}" type="button"
                         class="table-btn btn-ok">修改
            </router-link>
            <!--<button type="button" class="table-btn btn-cancel" @click="del(item)">删除</button>-->
          </td>
        </tr>
        <tr class="child" v-for="(v, vindex) in item.childMenus">
          <td>
            {{index+1}} - {{vindex+1}}
          </td>
          <td>
            {{v.name}}
          </td>
          <td>
            <a :href="v.picUrl" target="_blank">
              <img :src="v.picUrl" class="pic"/>
            </a>
          </td>
          <td>
            <a :href="v.fileUrl" target="_blank">
              <img :src="v.fileUrl" class="pic"/>
            </a>
          </td>
          <td>
            {{v.weight}}
          </td>
          <td>
            <router-link tag="button" :to="{name: 'productMenuEdit', params: {id: v.id}}" type="button"
                         class="table-btn btn-ok">修改
            </router-link>
            <button type="button" class="table-btn btn-cancel" @click="del(v)">删除</button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
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
