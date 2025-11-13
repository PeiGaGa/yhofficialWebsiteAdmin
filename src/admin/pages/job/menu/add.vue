<template>
    <div class="page overflow-y">
        <form onsubmit="return false;">
            <table class="table-form-1">
                <tr>
                    <th width="120"><span class="required">*</span>名称：</th>
                    <td>
                        <input class="input" type="text" maxlength="30" v-model="form.name" />
                    </td>
                </tr>
                <tr>
                    <th>排序：</th>
                    <td>
                        <input class="input" type="text" maxlength="10" v-model="form.weight" />
                    </td>
                </tr>
                <tr>
                    <th><span class="required">*</span>分类图片：</th>
                    <td>
                        <plugin-uploadPic ref="pic"></plugin-uploadPic>
                        <!-- <p>建议尺寸：560*280像素</p> -->
                    </td>
                </tr>
                <tr>
                    <th><span class="required">*</span>分类横幅：</th>
                    <td>
                        <plugin-uploadPic ref="ad"></plugin-uploadPic>
                        <!-- <p>建议尺寸：1170*200像素</p> -->
                    </td>
                </tr>
                <tr>
                    <th><span class="required">*</span>页面banner：</th>
                    <td>
                        <plugin-uploadPic ref="file">选择文件</plugin-uploadPic>
                        <!-- <p>建议尺寸：1920*885像素</p> -->
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
    import fn from './add.js';
    export default fn;
</script>
<style lang="less" scoped>
    @import 'add.less';
</style>