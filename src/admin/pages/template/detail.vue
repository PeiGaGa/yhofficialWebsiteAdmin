<template>
  <div class="page overflow-y">
    <table class="table-form-1">
      <!--<tr>-->
      <!--<th width="120">页面banner：</th>-->
      <!--<td>-->
      <!--<plugin-uploadPic ref="file" :options="{aspectRatio: 1920/1080}" :useJcrop="true">选择文件</plugin-uploadPic>-->
      <!--<p>建议尺寸：1920*1080像素</p>-->
      <!--</td>-->
      <!--</tr>-->
      <tr>
        <th width="100"><span class="required">*</span>模板名称：</th>
        <td>
          <input type="text" class="input" v-model="form.name"/>
        </td>
      </tr>
      <tr>
        <th width="100">模板内容：</th>
        <td></td>
      </tr>
    </table>
    <table class="table-form-1 marginTop10">
      <tr>
        <td>
          <plugin-editor :height="300" :html="form.content" ref="editor"></plugin-editor>
        </td>
      </tr>
    </table>
    <table class="table-form-1 marginTop10">
      <tr>
        <th></th>
        <td>
          <button type="button" class="btn btn-ok" @click="saveTemplate">保存</button>
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
  import detail from './detail.js'
  export default detail;
</script>
<style lang="less" scoped>
  @import './detail.less';
</style>
