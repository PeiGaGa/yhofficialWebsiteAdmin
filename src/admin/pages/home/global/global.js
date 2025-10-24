/**
 * Created by c-zouzhongxing1 on 2019/3/12. 
 */
export default{
  data(){
    return {
      menuId: this.$route.meta.menuId
    }
  },
  created(){
    //初始化数据
    this.initData()

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
          console.log(res);
          if (res.data.fileId && res.data.fileUrl) {
            // 去掉了file对象，这里注释掉。如果要上传栏目图，取消这里注释
            this.$refs.file.setResult({
              id: this.form.fileId,
              url: this.form.fileUrl
            });
          }
        }
      });
    },
    save(){
      console.log(this.$refs.file.result);
      if (this.$refs.file.result.length == 0) {
        this.$showWarning('请上传图片');
        return;
      }
      this.form.fileId = this.$refs.file.result[0].id;
      this.form.fileUrl = this.$refs.file.result[0].url;
      this.form.menuId = this.menuId;
      this.$loader.show();
      // return;
      this.$ajax({
        type: 'post',
        url: this.$baseUrl + '/admin/menu/update',
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
