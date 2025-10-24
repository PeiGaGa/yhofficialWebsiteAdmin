<template>
    <div class="page overflow-y">
        <form onsubmit="return false;">
            <table class="table-form-1">
                <tr>
                    <th width="120"><span class="required">*</span>产品分类：</th>
                    <td>
                        <select class="select" v-model="form.menuId">
                            <option v-for="item in typeList" :value="item.id">{{item.name}}</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <th><span class="required">*</span>产品名称：</th>
                    <td>
                        <input class="input" type="text" maxlength="30" v-model="form.name" />
                    </td>
                </tr>
                <tr>
                    <th><span class="required">*</span>产品列表图片：</th>
                    <td>
                        <plugin-uploadPic ref="widePic" :options="{aspectRatio: 600/600}" :useJcrop="true">选择文件</plugin-uploadPic>
                        <p>建议尺寸：600*600像素</p>
                    </td>
                </tr>
                <tr>
                    <th><span class="required">*</span>产品详情图片：</th>
                    <td>
                        <plugin-uploadPic ref="pic" :options="{aspectRatio: 1}" :useJcrop="true">选择文件</plugin-uploadPic>
                        <p>建议尺寸：600*600像素</p>
                    </td>
                </tr>
                <!--<tr>-->
                    <!--<th>页面banner：</th>-->
                    <!--<td>-->
                        <!--<plugin-uploadPic ref="file" :options="{aspectRatio: 1920/1080}" :useJcrop="true">选择文件</plugin-uploadPic>-->
                        <!--<p>建议尺寸：1920*1080像素</p>-->
                    <!--</td>-->
                <!--</tr>-->
                <tr>
                    <th>购买链接：</th>
                    <td>
                        <input class="input" type="text" v-model="form.buyLink" />
                    </td>
                </tr>
                <tr>
                    <th>排序：</th>
                    <td>
                        <input class="input" type="text" maxlength="10" v-model="form.weight" />
                    </td>
                </tr>
                <tr>
                    <th>是否推荐：</th>
                    <td>
                        <input type="checkbox" v-model="form.recommend" />
                    </td>
                </tr>
                <tr>
                    <th><span class="required">*</span>产品简介：</th>
                    <td>
                        <textarea class="textarea" v-model="form.brief2"></textarea>
                    </td>
                </tr>
                <tr>
                    <th><span class="required">*</span>产品规格：</th>
                    <td>
                        <plugin-editor ref="brief" :html="form.brief"></plugin-editor>
                    </td>
                </tr>
                <tr>
                    <th><span class="required">*</span>产品描述：</th>
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
                        <button class="btn btn-ok marginRight20" type="submit" @click="submit">保存</button>
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
