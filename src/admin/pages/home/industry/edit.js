export default {
  name: 'industry-edit',
  data() {
    return {
      form: {
        id: '',
        name: '',
        weight: 0,
        brief: '',
        content: '',
        title: '',
        keyword: '',
        description: ''
      }
    };
  },
  created() {
    this.initData();
  },
  methods: {
    initData() {
      const id = this.$route.query.id;
      if (id) {
        this.$ajax({
          type: 'get',
          url: this.$baseUrl + '/admin/home/industry/detail',
          data: {
            id: id,
            time: new Date().getTime()
          },
          success: (res) => {
            this.form = res.data;
            if (this.form.picId && this.form.picUrl) {
              this.$nextTick(() => {
                this.$refs.pic.setResult({
                  id: this.form.picId,
                  url: this.form.picUrl
                });
              });
            }
          }
        });
      }
    },
    save() {
      if (!this.form.name) {
        this.$showWarning('请输入名称');
        return;
      }
      
      if (this.$refs.pic.result.length === 0) {
        this.$showWarning('请上传首页展示图');
        return;
      }
      
      if (!this.$refs.editor.getContent()) {
        this.$showWarning('请输入内容');
        return;
      }
      
      const form = Object.assign({}, this.form);
      form.picId = this.$refs.pic.result[0].id;
      form.picUrl = this.$refs.pic.result[0].url;
      form.content = this.$refs.editor.getContent();
      form.menuId = this.$route.meta.menuId;
      
      this.$loader.show();
      this.$ajax({
        type: 'post',
        url: this.$baseUrl + '/admin/home/industry/save',
        data: {
          form: JSON.stringify(form),
          time: new Date().getTime()
        },
        success: (res) => {
          this.$loader.hide();
          this.$showSuccess('保存成功');
          this.$router.go(-1);
        }
      });
    }
  }
};
