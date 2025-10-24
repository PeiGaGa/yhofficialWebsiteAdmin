<!--
 * @Author: 邹中兴
 * @Date: 2019-02-21 15:31:30
 * @LastEditors: 邹中兴
 * @LastEditTime: 2020-08-13 23:09:03
 * @Description: 
-->
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
          <th>图片</th>
          <th width="400">主文字</th>
          <th width="400">副文字</th>
          <th width="400">超链接</th>
          <th width="120">排序</th>
          <th width="120">操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in list">
          <td>{{index+1}}</td>
          <td>
            <a :href="item.fileUrl" target="_blank">
              <img :src="$baseUrl+item.fileUrl" class="pic" />
            </a>
          </td>
          <td>{{item.name}}</td>
          <td>{{item.nameEN}}</td>
          <td class="word-break">
            <a :href="item.link" target="_blank" class="link">{{item.link}}</a>
          </td>
          <td>{{item.weight}}</td>
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
import fn from "./banner.js";
export default fn;
</script>
<style lang="less" scoped>
@import "banner.less";
</style>
