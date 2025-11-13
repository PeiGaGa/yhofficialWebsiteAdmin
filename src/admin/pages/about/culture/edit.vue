<template>
    <div class="page overflow-y">
        <form onsubmit="return false;">
            <table class="table-form-1">
                <tr>
                    <th width="120"><span class="required">*</span>标题：</th>
                    <td>
                        <input class="input" type="text" v-model="form.name" />
                    </td>
                </tr>
                <tr>
                    <th width="80"><span class="required">*</span>图片：</th>
                    <td>
                        <plugin-uploadPic ref="pic">选择文件</plugin-uploadPic>
                        <!-- <p>建议尺寸：550*370像素</p> -->
                    </td>
                    </td>
                </tr>
                <tr>
                    <th><span class="required">*</span>简介：</th>
                    <td>
                        <textarea class="textarea" v-model="form.brief"></textarea>
                    </td>
                </tr>
                <tr>
                    <th><span class="required">*</span>内容：</th>
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
                        <button type="button" class="btn btn-ok" @click="submit">保存</button>
                    </td>
                </tr>
            </table>
        </form>
    </div>
</template>
<script>
    import fn from './edit.js';
    export default fn;
</script>
<style lang="less" scoped>
    @import 'edit.less';
</style>