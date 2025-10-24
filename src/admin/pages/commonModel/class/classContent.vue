<template>
  <div class="page overflow-y">
    <form onsubmit="return false;">
      <table class="table-form-1">
        <!--<tr>-->
          <!--<th width="120">页面banner：</th>-->
          <!--<td>-->
            <!--<plugin-uploadPic ref="file" :options="{aspectRatio: 1920/1080}" :useJcrop="true">选择文件</plugin-uploadPic>-->
            <!--<p>建议尺寸：1920*1080像素</p>-->
          <!--</td>-->
        <!--</tr>-->
        <tr>
          <th><span class="required">*</span>栏目名称：</th>
          <td>
            <input type="text" class="input" v-model="form.name" />
          </td>
        </tr>
        <tr>
          <th><span class="required">*</span>内容：</th>
          <td>
            <plugin-editor :height="100" :html="form.content" ref="editor"></plugin-editor>
          </td>
        </tr>
      </table>
      <table class="table-form-1 marginTop10">
        <caption>SEO设置</caption>
        <tr>
          <th width="120"><span class="required">*</span>页面标题：</th>
          <td>
            <input type="text" class="input" v-model="form.title" />
          </td>
        </tr>
        <tr>
          <th><span class="required">*</span>页面关键字：</th>
          <td>
            <input type="text" class="input" v-model="form.keyword" />
          </td>
        </tr>
        <tr>
          <th><span class="required">*</span>页面描述：</th>
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
  import fn from './classContent.js';
  export default fn;
</script>
<style lang="less" scoped>
  @import 'classContent.less';
</style>
