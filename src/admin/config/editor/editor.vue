<template>
  <div class="editor" :style="{height: contentHeight + 'px'}"></div>
</template>
<style lang="less" scoped>
@import "editor.less";
</style>
<script>
export default {
  name: "plugin-editor",
  props: {
    id: {
      type: String,
      default: () => {
        return (
          "editor-" +
          new Date().getTime() +
          "1" +
          Math.ceil(Math.random() * 1000)
        );
      },
    },
    height: {
      type: Number,
      default: () => {
        return 300;
      },
    },
    autoHeight: false,
    html: null,
    onChange: null,
  },
  data() {
    return {
      visible: false,
      editor: null,
      content: null,
      contentHeight: this.height,
      isInit: false,
    };
  },
  watch: {
    html() {
      //                if(!this.isInit && this.html && this.editor && this.editor.ready){
      if (this.html && this.editor && this.editor.ready) {
        this.content = this.html;
        this.editor.ready(() => {
          this.editor.setContent(this.html);
        });
        this.isInit = true;
      }
    },
  },
  mounted() {
    let _this = this;
    require.ensure(
      [],
      () => {
        require("../../js/lib/ueditor/ueditor.config.js");
        require("../../js/lib/ueditor/ueditor.all.min.js");
        require("../../js/lib/ueditor/lang/zh-cn/zh-cn.js");
        this.$el.setAttribute("id", this.id);
        this.editor = UE.getEditor(this.id, {
          //                  UEDITOR_HOME_URL: '../../../../../../scr/admin/js/lib/ueditor/',
          //                    UEDITOR_HOME_URL: '/static/admin/dist/js/lib/ueditor/',
          UEDITOR_HOME_URL: this.$editHomeUrl,
          serverUrl: this.$baseUrl + "/admin/file/ueditor/config",
          initialStyle:
            ".col-2_1v1,.col-2_1v1>div,.col-2_2v1,.col-2_2v1>div{overflow:hidden;clear:both}.col-2_1v1>div img,.col-2_2v1>div img{max-width:100%}.col-2_1v1{width:100%}.col-2_1v1>div:nth-child(even)>div,.col-2_1v1>div:nth-child(odd)>div{width:44%;padding:3%}.col-2_1v1.line>div:nth-child(2n){border-top:1px solid #ededed}.col-2_1v1>div:nth-child(odd)>div:nth-child(odd){float:left}.col-2_1v1>div:nth-child(even)>div:nth-child(odd),.col-2_1v1>div:nth-child(odd)>div:nth-child(even){float:right}.col-2_1v1>div:nth-child(even)>div:nth-child(even){float:left}.col-2_2v1{width:100%}.col-2_2v1>div:nth-child(odd)>div{padding:3%}.col-2_2v1>div:nth-child(odd)>div:nth-child(odd){width:60.66666667%;float:left}.col-2_2v1>div:nth-child(odd)>div:nth-child(even){width:27.33333333%;float:right}.col-2_2v1>div:nth-child(even){background:#f8f9fb}.col-2_2v1>div:nth-child(even)>div{padding:3%}.col-2_2v1>div:nth-child(even)>div:nth-child(odd){width:60.66666667%;float:right}.col-2_2v1>div:nth-child(even)>div:nth-child(even){width:27.33333333%;float:left}.product_list{font-size:16px}.product_list strong{margin:1em 0}.product_list p{text-indent:2em;margin:1em 0}.product_list .btn-more{margin-top:1em;display:inline-block;margin-right:10px;padding:.5em;text-align:center;border-radius:6px;border:1px solid #00b3dc;color:#00b3dc;transition:background .3s}.btn-buy {margin-top: 1em;display: inline-block;margin-right: 10px;padding: 0.5em 2em;text-align: center;border-radius: 6px;background: #0057a0;color: #fff;transition: background 0.3s;}",
          zIndex: 1,
          enterTag: false,
          allowDivTransToP: false,
          elementPathEnabled: false,
          enableAutoSave: false,
          initialFrameWidth: "100%",
          toolbars: [
            [
              "source", //源代码
              "removeformat", //清除格式
              "formatmatch", //格式刷
              "pasteplain", //纯文本粘贴模式
              "undo", //撤销
              "redo", //重做
              "anchor", //锚点
              "fontfamily", //字体
              "fontsize", //字号
              "paragraph", //段落格式
              "bold", //加粗
              "indent", //首行缩进
              "italic", //斜体
              "link", //超链接
              "unlink", //取消链接
              "underline", //下划线
              "strikethrough", //删除线
              "subscript", //下标
              "superscript", //上标
              "fontborder", //字符边框
              "blockquote", //引用
              "preview", //预览
              "horizontal", //分隔线
              "justifyleft", //居左对齐
              "justifyright", //居右对齐
              "justifycenter", //居中对齐
              "justifyjustify", //两端对齐
              "forecolor", //字体颜色
              "backcolor", //背景色
              "background", //背景
              "directionalityltr", //从左向右输入
              "directionalityrtl", //从右向左输入
              "rowspacingtop", //段前距
              "rowspacingbottom", //段后距
              "imagenone", //默认
              "imageleft", //左浮动
              "imageright", //右浮动
              "imagecenter", //居中
              "lineheight", //行间距
              "inserttable", //插入表格
              "edittable", //表格属性
              "edittd", //单元格属性
              "insertparagraphbeforetable", //"表格前插入行"
              "insertrow", //前插入行
              "insertcol", //前插入列
              "mergeright", //右合并单元格
              "mergedown", //下合并单元格
              "deleterow", //删除行
              "deletecol", //删除列
              "splittorows", //拆分成行
              "splittocols", //拆分成列
              "splittocells", //完全拆分单元格
              "deletecaption", //删除表格标题
              "inserttitle", //插入标题
              "mergecells", //合并多个单元格
              "deletetable", //删除表格
              //                            'simpleupload', //单图上传
              "insertimage", //多图上传
              "time", //时间
              "date", //日期
              "spechars", //特殊字符
              "searchreplace", //查询替换
              "map", //Baidu地图
              "edittip ", //编辑提示
              "autotypeset", //自动排版
            ],
          ],
        });
        this.editor.ready(() => {
          this.init();
        });
      },
      "editor"
    );
  },
  methods: {
    init() {
      if (this.html) {
        this.editor.ready(() => {
          this.editor.setContent(this.html);
        });
        this.content = this.html;
      }
      this.editor.addListener("contentChange", () => {
        const content = this.editor.getContent();
        this.content = content;
        if (this.onChange && typeof this.onChange == "function") {
          this.onChange(content);
        }
      });
    },
    setContent(content) {
      this.editor.ready(() => {
        this.editor.setContent(content);
      });
    },
  },
};
</script>
