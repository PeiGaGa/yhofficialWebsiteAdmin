<template>
    <div class="page overflow-y">
        <form onsubmit="return false;">
            <table class="table-form-1">
              <caption>栏目设置</caption>
              <tr>
                <th width="120"><span class="required">*</span>栏目名称：</th>
                <td>
                  <input type="text" class="input" v-model="form.name" />
                </td>
              </tr>
                <!--<tr>-->
                    <!--<th width="120"><span class="required">*</span>首页banner：</th>-->
                    <!--<td>-->
                        <!--<plugin-uploadPic ref="file" :options="{aspectRatio: 1920/885}" :useJcrop="true">选择文件</plugin-uploadPic>-->
                        <!--<p>建议尺寸：1920*885像素</p>-->
                    <!--</td>-->
                <!--</tr>-->
                <tr>
                    <th width="120"><span class="required">*</span>封面图：</th>
                    <td>
                        <plugin-uploadPic ref="picUrl">选择文件</plugin-uploadPic>
                        <!-- <p>建议尺寸：520*360像素</p> -->
                    </td>
                </tr>
                <tr>
                    <th width="120"><span class="required">*</span>简历邮箱：</th>
                    <td>
                        <input type="text" class="input" v-model="form.content" />
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
    import fn from './basic-1.js';
    export default fn;
</script>
<style lang="less" scoped>
    @import 'basic.less';
</style>
