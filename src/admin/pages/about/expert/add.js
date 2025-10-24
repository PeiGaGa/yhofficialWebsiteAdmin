/**
 * Created by Administrator on 2017/11/17.
 */
export default {
  name: 'index',
  data() {
    return {
      form: {
        sex: 1
      },
    }
  },
  created() {
    this.$loader.hide();
  },
  methods: {
    save() {
      let content = this.$refs.editor.content;
      if (!this.form.name) {
        this.$showWarning('请填写名称');
        return;
      }
      if (!this.form.ename) {
        this.$showWarning('请填写专家英文名');
        return;
      }
      if (!this.form.position) {
        this.$showWarning('请填写专家职位');
        return;
      }
      if (!this.form.brief) {
        this.$showWarning('请填写专家简介');
        return;
      }
      if (!content) {
        this.$showWarning('请填写专家介绍');
        return;
      }
      this.form.content = content;
      if (this.$refs.pic.result.length == 0) {
        this.$showWarning('请上传专家头像');
        return;
      }
      this.form.picId = this.$refs.pic.result[0].id;
      this.form.picUrl = this.$refs.pic.result[0].url;
      this.form.menuId = 11;
      this.$loader.show();
      this.$ajax({
        type: 'post',
        url: this.$baseUrl + '/admin/expert/update',
        data: {
          form: JSON.stringify(this.form),
          time: new Date().getTime()
        },
        success: (res) => {
          this.$showSuccess('新增成功');
          history.go(-1);
        },
      });
    }
  }
}
