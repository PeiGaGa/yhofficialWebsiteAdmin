/**
 * Created by Administrator on 2017/11/17.
 */
export default {
  name: 'news-dynamic-menu-edit',
  data() {
    return {
      id: this.$route.params.id,
      form: {}
    }
  },
  created() {
    this.getDetail();
  },
  methods: {
    getDetail() {
      this.$loader.show();
      this.$ajax({
        type: 'get',
        url: this.$baseUrl + '/admin/menu/getById',
        data: {
          id: this.id,
          time: new Date().getTime()
        },
        success: (res) => {
          this.form = res.data;
          if (res.data.picId && res.data.picUrl) {
            this.$refs.pic.setResult({
              id: res.data.picId,
              url: res.data.picUrl
            });
          }
        },
      })
    },
    save() {
      if (!this.form.name) {
        this.$showWarning('请填写中文名称');
        return;
      }
      if (this.$refs.pic.result.length == 0) {
        this.$showWarning('请上传分类图片');
        return;
      }
      this.form.picId = this.$refs.pic.result[0].id;
      this.form.picUrl = this.$refs.pic.result[0].url;
      this.$loader.show();
      this.$ajax({
        type: 'post',
        url: this.$baseUrl + '/admin/menu/update',
        data: {
          form: JSON.stringify(this.form),
          time: new Date().getTime()
        },
        success: (res) => {
          this.$showSuccess('保存成功');
          history.go(-1);
        },
      });
    }
  }
}
