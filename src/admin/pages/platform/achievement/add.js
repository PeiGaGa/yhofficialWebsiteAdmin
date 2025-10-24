/**
 * Created by Administrator on 2017/11/17.
 */
export default {
  name: 'platform-achievement-add',
  data() {
    return {
      menuId: this.$route.meta.menuId,
      typeList: [],
      form: {}
    }
  },
  created(){
    this.$loader.hide();
    console.log(this.$route.meta.menuId);
  },
  methods: {
    submit(){
      let content = this.$refs.editor.content;
      if (!this.form.name) {
        this.$showWarning('请填写标题');
        return;
      }
      if (this.$refs.pic.result.length == 0) {
        this.$showWarning('请上传图片');
        return;
      }
      this.form.picId = this.$refs.pic.result[0].id;
      this.form.picUrl = this.$refs.pic.result[0].url;
      if (!content) {
        this.$showWarning('请填写内容');
        return;
      }
      this.form.content = content;
      this.form.menuId = this.$route.meta.menuId;
      this.$loader.show();
      this.$ajax({
        type: 'post',
        url: this.$baseUrl + '/admin/article/update',
        data: {
          form: JSON.stringify(this.form),
          time: new Date().getTime()
        },
        success: (res) => {
          this.$showSuccess('新增成功');
          history.go(-1);
        },
      });
    },
  }
}
