/**
 * Created by Administrator on 2017/11/17.
 */
export default {
  name: 'index',
  data() {
    return {
      menuId: this.$route.meta.menuId,
      typeList: [],
      form: {}
    }
  },
  created(){
    this.$loader.hide();
  },
  methods: {
    submit(){
      let content = this.$refs.editor.content;
      if (!this.form.name) {
        this.$showWarning('请填写文章标题');
        return;
      }
      if (this.$refs.pic.result.length == 0) {
        this.$showWarning('请上传图片');
        return;
      }
      this.form.picId = this.$refs.pic.result[0].id;
      this.form.picUrl = this.$refs.pic.result[0].url;
      if (!this.form.brief) {
        this.$showWarning('请填写文章内容');
        return;
      }
      if (!content) {
        this.$showWarning('请填写文章内容');
        return;
      }
      this.form.content = content;
      this.form.menuId = this.id;
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
