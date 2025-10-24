<!--
 * @Author: 邹中兴
 * @Date: 2020-08-12 22:30:22
 * @LastEditors: 邹中兴
 * @LastEditTime: 2020-08-13 06:58:19
 * @Description: 
-->
<template>
  <div class="page overflow-y">
    <form onsubmit="return false;">
      <table class="table-form-1">
        <tr>
          <th width="120">
            <span class="required">*</span>链接名称：
          </th>
          <td>
            <input v-model="form.name" class="input" />
          </td>
        </tr>

        <tr>
          <th width="120">
            <span class="required">*</span>排序：
          </th>
          <td>
            <input v-model="form.weight" class="input" />
          </td>
        </tr>
        <tr>
          <th width="120">
            <span class="required">*</span>链接地址：
          </th>
          <td>
            <input v-model="form.href" class="input" />
          </td>
        </tr>
        <tr>
          <th></th>
          <td>
            <button type="button" class="btn btn-ok" @click="submit">保存</button>
          </td>
        </tr>
      </table>
    </form>
  </div>
</template>
<script>
import fn from "./add.js";
export default fn;
</script>
<style lang="less" scoped>
@import "add.less";
</style>
