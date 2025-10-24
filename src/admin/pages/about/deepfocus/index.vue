<!--
 * @Author: 邹中兴
 * @Date: 2019-02-27 17:39:44
 * @LastEditors: 邹中兴
 * @LastEditTime: 2020-07-08 00:00:23
 * @Description: 
--> 
<template>
  <div>
    <div class="page overflow-y" v-show="$route.path=='/about/deepfocus'">
      <div class="task clearfix">
        <div class="fl"></div>
        <div class="fr">
          <router-link
            tag="button"
            :to="{path:'basic',query:{menuId:menuId}}"
            class="btn btn-ok"
            append
          >基础设置</router-link>
          <button class="btn btn-ok" @click="edit">新增</button>
        </div>
      </div>
      <table class="table-list-1">
        <thead>
          <tr>
            <th width="10%">序号</th>
            <th width="30%">名称</th>
            <th width="30%">文件</th>
            <th width="10%">排序</th>
            <th width="20%">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in list.content">
            <td>{{index+1}}</td>
            <td>{{item.name}}</td>
            <td>
              <a :href="item.fileUrl" target="_blank">{{item.fileUrl}}</a>
            </td>
            <td>{{item.weight}}</td>
            <td>
              <button type="button" class="table-btn btn-ok" @click="edit(item)">修改</button>
              <button type="button" class="table-btn btn-cancel" @click="del(item)">删除</button>
            </td>
          </tr>
        </tbody>
      </table>
      <ui-page
        class="paging marginTop10"
        :total="list.total"
        :current="list.current"
        :onChange="onPageChange"
      ></ui-page>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import fn from "./index.js";
export default fn;
</script>
<style lang="less" scoped>
@import "index.less";
</style>
