<template>
  <div class="page1">
    <table class="table-form-1">
      <tr>
        <th width="120"><span class="required">*</span>上传图片：</th>
        <td>
          <plugin-uploadPic ref="file">选择文件</plugin-uploadPic>
          <!-- <p>建议尺寸：1920*1080像素</p> -->
        </td>
      </tr>
      <tr>
        <th></th>
        <td>
          <button type="button" class="btn btn-ok" @click="save">保存</button>
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
  import index from './global.js';
  export default index;
</script>
<style lang="less">
@import './global.less';
</style>
