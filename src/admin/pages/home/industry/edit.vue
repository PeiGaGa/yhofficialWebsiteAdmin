<!--
 * @Author: 邹中兴
 * @Date: 2019-01-21 10:24:32
 * @LastEditors: 邹中兴
 * @LastEditTime: 2020-07-07 23:16:54
 * @Description: 
--> 
<template>
  <div class="page overflow-y">
    <form onsubmit="return false;">
      <table class="table-form-1">
        <tr>
          <th width="120">
            <span class="required">*</span>名称：
          </th>
          <td>
            <input type="text" class="input" v-model="form.name" />
          </td>
        </tr>
        <tr>
          <th>排序：</th>
          <td>
            <input type="text" class="input" v-model="form.weight" />
          </td>
        </tr>
        <tr>
          <th>简介：</th>
          <td>
            <input type="text" class="input" v-model="form.brief" />
          </td>
        </tr>
        <tr>
          <th>
            <span class="required">*</span>首页展示图：
          </th>
          <td>
            <plugin-uploadPic ref="pic" :options="{aspectRatio: 1/1}" :useJcrop="true">选择文件</plugin-uploadPic>
            <p>建议尺寸：500*500像素</p>
          </td>
        </tr>
        <tr>
          <th>
            <span class="required">*</span>内容：
          </th>
          <td>
            <plugin-editor ref="editor" :html="form.content"></plugin-editor>
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
            <button type="button" class="btn btn-ok" @click="save">保存</button>
          </td>
        </tr>
      </table>
    </form>
  </div>
</template>
<script>
import fn from "./edit.js";
export default fn;
</script>
<style lang="less" scoped>
@import "edit.less";
</style>