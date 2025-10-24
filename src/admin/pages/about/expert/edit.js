/*
 * @Author: 邹中兴
 * @Date: 2019-01-25 14:45:24
 * @LastEditors: 邹中兴
 * @LastEditTime: 2020-07-06 21:39:55
 * @Description: 
 */
/**
 * Created by Administrator on 2017/11/17.
 */
export default {
  name: 'index',
  data() {
    return {
      id: this.$route.query.id,
      form: {},
    }
  },
  // beforeRouteEnter(to, from, next) {
  //     next(vm =>{
  //         vm.initData();
  //     });
  // },
  created() {
    this.initData();
  },
  methods: {
    initData() {
      this.$loader.show();
      this.$ajax({
        type: 'get',
        url: this.$baseUrl + '/admin/expert/getById',
        data: {
          id: this.id,
          time: new Date().getTime()
        },
        success: (res) => {
          this.form = res.data;
          if (res.data.picId && res.data.picUrl) {
            this.$refs.pic.setResult({
              id: this.form.picId,
              url: this.form.picUrl
            });
          }
        },
      })
    },
    changeFile(data) {
      this.banner = data;
    },
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
