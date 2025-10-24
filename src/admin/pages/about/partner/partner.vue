<!--
 * @Author: 邹中兴
 * @Date: 2019-01-21 10:24:32
 * @LastEditors: 邹中兴
 * @LastEditTime: 2020-07-07 06:04:05
 * @Description: 
--> 
<template>
  <div>
    <div class="page overflow-y">
      <div class="task clearfix" v-if="$route.path=='/about/partner'">
        <div class="fl"></div>
        <div class="fr">
          <router-link
            tag="button"
            :to="{path:'basic',query:{menuId:$route.meta.menuId}}"
            class="btn btn-ok"
            append
          >基础设置</router-link>
          <button class="btn btn-ok" @click="edit">新增</button>
        </div>
      </div>
      <table class="table-list-1">
        <thead>
          <tr>
            <th width="60">序号</th>
            <th>图片</th>
            <th width="400">名称</th>
            <th width="120">排序</th>
            <th width="120">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in list">
            <td>{{index+1}}</td>
            <td>
              <a :href="item.fileUrl" target="_blank">
                <img :src="item.fileUrl" class="pic" />
              </a>
            </td>
            <td class="word-break">{{item.name}}</td>
            <td>{{item.weight}}</td>
            <td>
              <button type="button" class="table-btn btn-ok" @click="edit(item)">修改</button>
              <button type="button" class="table-btn btn-cancel" @click="del(item)">删除</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import fn from "./partner.js";
export default fn;
</script>
<style lang="less" scoped>
@import "partner.less";
</style>