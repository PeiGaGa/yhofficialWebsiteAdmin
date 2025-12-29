<template>
  <div class="uploadPic">
    <div class="btn">浏览</div>
    <div class="list clearfix" v-if="result.length>0">
      <ul :class="{'multiple': multiple, 'single': !multiple}">
        <li v-for="(item, index) in result">
          <a :href="item.url" target="_blank" v-if="!item.url.endsWith('.pdf')">
            <img :src="$baseUrl+(item.themeUrl || item.url)" class="pic" />
            <i class="iconfont icon-del" @click.stop.prevent="del(index)"></i>
          </a>
          <a v-else>
            {{item.url}}
            <i class="iconfont icon-del" @click.stop.prevent="del(index)"></i>
          </a>
        </li>
      </ul>
      <div class="process" v-if="process>0 && process<100" :style="{width: process + '%'}"></div>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import "uploadPic.less";
</style>
<script>
import Vue from "vue";
import WebUploader from "webuploader";
import "../../js/lib/webuploader/webuploader.css";
export default {
  name: "plugin-uploadPic",
  props: {
    //      autoUploader: true,//阿提添加
    multiple: false,
    fileName: {
      type: Array,
      default: () => {
        return ["gif", "jpg", "jpeg", "bmp", "png", "pdf"];
      },
    },
    useJcrop: false,
    options: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  data() {
    return {
      visible: false,
      result: [],
      uploader: null,
      process: 0,
      defaultCutOpts: {
        url: "", //裁剪上传的url
        allowSelect: true, //允许新选框
        allowMove: true, //允许选框移动
        allowResize: true, //允许选框缩放
        trackDocument: true, //拖动选框时，允许超出图像以外的地方时继续拖动
        aspectRatio: 1, //选框宽高比。说明：width/height
        keySupport: true, //支持键盘控制。按键列表：上下左右（移动选框）、Esc（取消选框）
        dragEdges: true, //允许拖动边框
        minSelect: [0, 0], //选框最小选择尺寸。说明：若选框小于该尺寸，则自动取消选择
        maxSize: [], //选框最大尺寸
        minSize: [100, 100], //选框最小尺寸
        onChange: null, //选框改变时的事件
        onSelect: null, //选框选定时的事件
        onDblClick: null, //在选框内双击时的事件
        onRelease: null, //取消选框时的事件
        width: 1920,
        height: 1920,
      },
      cutOpts: {},
    };
  },
  mounted() {
    //      require.ensure([], () => {
    //        const WebUploader = require('../../../admin/lib/webuploader/webuploader.js');
    //      require('../../../admin/lib/webuploader/webuploader.css');
    //      this.init(WebUploader);
    //    }, 'uploadPic');
    this.init(WebUploader);
  },
  created() {
    this.cutOpts = $.extend(true, {}, this.defaultCutOpts, this.options);
  },
  methods: {
    init(WebUploader) {
      const extensions = (this.fileName || [])
        .map((x) => String(x || "").trim().toLowerCase().replace(/^\./, ""))
        .filter(Boolean);
      const mimeTypes = Array.from(
        new Set(
          extensions
            .map((ext) => {
              switch (ext) {
                case "jpg":
                case "jpeg":
                  return "image/jpeg";
                case "png":
                  return "image/png";
                case "gif":
                  return "image/gif";
                case "bmp":
                  return "image/bmp";
                case "webp":
                  return "image/webp";
                case "svg":
                  return "image/svg+xml";
                case "pdf":
                  return "application/pdf";
                default:
                  return "";
              }
            })
            .filter(Boolean)
        )
      );
      const accept =
        extensions.length > 0
          ? {
              title: "files",
              extensions: extensions.join(","),
              // 兼容：部分浏览器/运行时拿不到 file.type 时仍可用 extensions 校验
              mimeTypes: mimeTypes.length > 0 ? mimeTypes.join(",") : undefined,
            }
          : undefined;

      //待上传文件的md5值（key为file id）
      //hook注册,参考https://github.com/fex-team/webuploader/issues/142
      WebUploader.Uploader.register(
        {
          "before-send-file": "preUpload",
        },
        {
          preUpload: function (file) {
            var me = this,
              owner = this.owner,
              //server = me.options.server,
              deferred = WebUploader.Deferred();
            console.log("pre upload");
            owner
              .md5File(file.source)
              // 如果读取出错了，则通过reject告诉webuploader文件上传出错。
              .fail(function () {
                deferred.reject();
              })
              // md5值计算完成
              .then(function (md5) {
                //携带md5参数发送
                _this.uploader.options.formData.md5 = md5;
                // 介绍此promise, webuploader接着往下走。
                deferred.resolve();
              });
            return deferred.promise();
          },
        }
      );
      this.uploader = new WebUploader.Uploader({
        pick: {
          id: this.$el.querySelector(".btn"),
          multiple: false,
        },
        swf: "../../../js/lib/webuploader/Uploader.swf",
        server: this.$baseUrl + "/admin/file/upload",
        auto: true,
        resize: false,
        compress: false,
        duplicate: true,
        accept,
        fileSingleSizeLimit: 20 * 1024 * 1024,
        width: 1920,
        height: 400,
      });
      var _this = this;

      this.uploader.on("uploadProgress", (file, percentage) => {
        this.process = percentage * 100;
      });
      this.uploader.on("uploadSuccess", (file, res) => {
        this.percentage = 100;
        const isGif = String(file && file.ext ? file.ext : "")
          .trim()
          .toLowerCase() === "gif";
        if (this.useJcrop && isGif) {
          // GIF 裁剪大概率会丢失动图效果，这里直接跳过裁剪保留原图
          this.$showWarning("GIF 不支持裁剪，将直接上传原图");
          this.setResult(res.data);
          this.$loader.hide();
        } else if (this.useJcrop) {
          this.loadPic(res.data);
        } else {
          this.setResult(res.data);
          this.$loader.hide();
        }
      });
      this.uploader.on("uploadError", (file) => {
        this.$showError("上传失败");
        // 避免失败后遮罩一直存在
        if (this.$loader && typeof this.$loader.hide === "function") {
          this.$loader.hide();
        } else if (Vue.$loader && typeof Vue.$loader.hide === "function") {
          Vue.$loader.hide();
        }
      });
      this.uploader.on("uploadComplete", (file) => {
        this.percentage = 0;
      });
      // 注意：这里不能用 function，否则 this 会指向 WebUploader 实例，导致 this.$loader / this.$showError 未定义
      this.uploader.on("error", (type) => {
        if (this.$loader && typeof this.$loader.hide === "function") {
          this.$loader.hide();
        } else if (Vue.$loader && typeof Vue.$loader.hide === "function") {
          Vue.$loader.hide();
        }
        if (type == "Q_TYPE_DENIED") {
          this.$showError("请上传正确的图片格式");
        } else if (type == "Q_EXCEED_SIZE_LIMIT" || type == "F_EXCEED_SIZE") {
          this.$showError("文件大小不能超过30M");
        } else {
          this.$showError("上传出错！请检查后重新上传！错误代码" + type);
        }
      });
    },
    loadPic(file) {
      var img = new Image();
      console.log(file); //
      img.src = this.$baseUrl + file.url;
      img.onload = () => {
        var w = img.width,
          h = img.height,
          maxW,
          maxH;
        if (w / h > 1920 / 400) {
          maxW = 1920;
          maxH = (1920 * h) / w;
        } else {
          maxH = 400;
          maxW = (400 * w) / h;
        }
        file.maxW = maxW;
        file.maxH = maxH;
        this.$loader.hide();
        console.log("loadPic");
        console.log(file);
        this.jcrop(file);
      };
    },
    loadPdf(file) {},
    jcrop(file) {
      console.log("start jcrop");
      console.log("file");
      const Jcrop = require("../../js/lib/Jcrop/js/jquery.Jcrop.min.js");
      require("../../js/lib/Jcrop/css/jquery.Jcrop.css");
      let cutBox;
      this.$showBox({
        width: file.maxW,
        height: file.maxH,
        content:
          '<img class="pic" src="' +
          this.$baseUrl +
          file.url +
          '" style="width: 100%;" />',
        onOpen: (self) => {
          const element = self.$el.querySelector(".pic");
          const size = [0, 0].concat(this.cutOpts.minSize);
          $(element).Jcrop(this.cutOpts, function () {
            cutBox = this;
            this.animateTo(size);
          });
        },
        onOk: (self) => {
          this.saveCut(file, cutBox, () => {
            self.visible = false;
          });
        },
      });
    },
    saveCut(file, cutBox, callback) {
      this.$loader.show();
      this.$ajax({
        type: "post",
        url: this.$baseUrl + "/admin/file/cut",
        data: {
          form: JSON.stringify({
            id: file.id,
            size: cutBox.getWidgetSize(),
            position: cutBox.tellScaled(),
          }),
          time: new Date().getTime(),
        },
        success: (res) => {
          this.setResult(res.data);
          callback();
        },
      });
    },
    setResult(data) {
      if (this.multiple) {
        this.result.push(data);
      } else {
        this.result = [].concat(data);
      }
    },
    del(index) {
      this.result.splice(index, 1);
    },
  },
};
</script>
