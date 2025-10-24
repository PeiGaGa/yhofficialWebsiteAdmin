/**
 * Created by Administrator on 2017/11/17.
 */
export default {
  name: 'model-article-edit',
  props: {
    // id: String,
  },
  data() {
    return {
      id: this.$route.query.id,
      form: {}
    }
  },
  // beforeRouteEnter(to, from, next) {
  //   next(vm => {
  //     vm.getDetail();
  //   });
  // },
  created(){

    this.getDetail();
    console.log(this.$route.meta.menuId)
  },
  methods: {
    getDetail(){
      this.$loader.show();
      this.$ajax({
        type: 'get',
        url: this.$baseUrl + '/admin/article/getById',
        data: {
          id: this.id,
          time: new Date().getTime()
        },
        success: (res) => {
          this.form = res.data;
          // if (res.data.picId && res.data.picUrl) {
          //   this.$refs.pic.setResult({
          //     id: res.data.picId,
          //     url: res.data.picUrl
          //   });
          // }
        },
      })
    },
    submit(){
      let content = this.$refs.editor.content;
      if (!this.form.name) {
        this.$showWarning('请填写文章标题');
        return;
      }
      // if (this.$refs.pic.result.length == 0) {
      //   this.$showWarning('请上传图片');
      //   return;
      // }
      // this.form.picId = this.$refs.pic.result[0].id;
      // this.form.picUrl = this.$refs.pic.result[0].url;
      // if (!this.form.brief) {
      //   this.$showWarning('请填写文章简介');
      //   return;
      // }
      if (!content) {
        this.$showWarning('请填写文章内容');
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
