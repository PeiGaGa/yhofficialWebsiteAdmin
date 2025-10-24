/**
 * Created by c-zouzhongxing1 on 2019/1/23. 
 */
/**
 * Created by Administrator on 2017/11/17.
 */
export default {
  name: 'model-basic',
  props: {
    menuId: 0
  },
  data() {
    return {
      form: {},
      banner: {},
      hiddenContent:false
    }
  },
  beforeRouteEnter(to, from, next) {
    // next(vm => {
    //   vm.initData();
    // });
  },
  created(){
    this.hiddenContent = this.$route.meta['hiddenContent'];
    this.initData();
  },
  methods: {
    initData(){
      this.$loader.show();
      this.$ajax({
        type: 'get',
        url: this.$baseUrl + '/admin/menu/getById',
        data: {
          id: this.menuId,
          time: new Date().getTime()
        },
        success: (res) => {
          this.form = res.data;
          if (res.data.fileId && res.data.fileUrl) {
            //去掉了file对象，这里注释掉。如果要上传栏目图，取消这里注释
            // this.$refs.file.setResult({
            //   id: this.form.fileId,
            //   url: this.form.fileUrl
            // });
          }
        },
      });
    },
    changeFile(data){
      this.banner = data;
    },
    save(){
      let content = this.$refs.editor.content;
      if (!content&&!this.hiddenContent) {
        this.$showWarning('请填写内容');
        return;
      }
      this.form.content = content;
      //阿提：如果恢复栏目图片上传，请取消以下注释
      // if (this.$refs.file.result.length == 0) {
      //   this.$showWarning('请上传页面banner图');
      //   return;
      // }
      // this.form.fileId = this.$refs.file.result[0].id;
      // this.form.fileUrl = this.$refs.file.result[0].url;
      if(!this.form.name){
        this.$showWarning('请填写栏目名称');
        return;
      }
      if (!this.form.title) {
        this.$showWarning('请填写页面标题');
        return;
      }
      if (!this.form.keyword) {
        this.$showWarning('请填写页面关键字');
        return;
      }
      if (!this.form.description) {
        this.$showWarning('请填写页面描述');
        return;
      }
      this.form.menuId = this.menuId;
      this.$loader.show();
      this.$ajax({
        type: 'post',
        url: this.$baseUrl +'/admin/menu/update',
        data: {
          form: JSON.stringify(this.form),
          time: new Date().getTime()
        },
        success: (res) => {
          this.$showSuccess('保存成功');
        }
      });
    }
  }
}
