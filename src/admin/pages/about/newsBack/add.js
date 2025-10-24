/**
 * Created by Administrator on 2017/11/17.
 */
export default {
  name: 'index',
  data() {
    return {
      typeList: [],
      form: {}
    }
  },
  created(){
    this.$loader.hide();
    this.$nextTick(() => {
      require.ensure([], () => {
        require('../../../js/lib/laydate/theme/default/laydate.css');
        let laydate = require('../../../js/lib/laydate/laydate');
        laydate.path = '../../../js/lib/laydate/';
        laydate.render({
          elem: '#date',
          type: 'date',
          done: (value) => {
            this.form.publishTime = value;
          },
        });
      }, 'laydate');
    });
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
      if (!this.form.publishTime) {
        this.$showWarning('请填写发布时间');
        return;
      }
      if (!content) {
        this.$showWarning('请填写文章内容');
        return;
      }
      this.form.content = content;
      this.form.menuId = 9;
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
