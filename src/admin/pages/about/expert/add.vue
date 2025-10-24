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
          <th width="120">
            <span class="required">*</span>英文名称：
          </th>
          <td>
            <input type="text" class="input" v-model="form.ename" />
          </td>
        </tr>

        <!-- <tr>
                    <th width="120"><span class="required">*</span>性别：</th>
                    <td>
                        <label class="marginRight10">
                            <input type="radio" name="sex" value="1" v-model="form.sex" checked="checked" />
                            <span>男</span>
                        </label>
                        <label>
                            <input type="radio" name="sex" value="0" v-model="form.sex" />
                            <span>女</span>
                        </label>
                    </td>
        </tr>-->
        <tr>
          <th width="120">
            <span class="required">*</span>职位：
          </th>
          <td>
            <input type="text" class="input" v-model="form.position" />
          </td>
        </tr>
        <tr>
          <th>排序：</th>
          <td>
            <input type="text" class="input" v-model="form.weight" />
          </td>
        </tr>
        <tr>
          <th>
            <span class="required">*</span>头像：
          </th>
          <td>
            <plugin-uploadPic ref="pic" :options="{aspectRatio: 240/320}" :useJcrop="true">选择文件</plugin-uploadPic>
            <p>建议尺寸：480*640像素</p>
          </td>
        </tr>
        <tr>
          <th>
            <span class="required">*</span>简介：
          </th>
          <td>
            <textarea class="textarea" v-model="form.brief"></textarea>
          </td>
        </tr>
        <tr>
          <th>
            <span class="required">*</span>内容：
          </th>
          <td>
            <plugin-editor ref="editor"></plugin-editor>
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
import fn from "./add.js";
export default fn;
</script>
<style lang="less" scoped>
@import "add.less";
</style>
