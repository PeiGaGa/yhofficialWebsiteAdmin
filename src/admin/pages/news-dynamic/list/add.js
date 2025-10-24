/**
 * Created by Administrator on 2017/11/17.
 */
import laydate from 'layui-laydate';
export default {
  name: 'news-dynamic-list-add',
  data() {
    return {
      typeList: [],
      form: {}
    }
  },
  created(){
    this.$loader.hide();
    this.initData();
  },
  mounted(){
    laydate.render({
            elem: '#date',
            type: 'date',
            done: (value) => {
              this.form.publishTime = value;
            },
    })
  },
  methods: {
    initData(){
      this.$loader.show();
      this.$ajax({
        type: 'get',
        url: this.$baseUrl+'/admin/menu/list',
        data: {
          parentId: this.$route.meta.menuId,
          time: Date.now()
        },
        success: (res)=>{
          this.typeList = res.data;
        },
      })
    },
    submit(){
      let content = this.$refs.editor.content;
      if(!this.form.menuId){
        this.$showWarning('请选择分类');
        return;
      }
      if (!this.form.name) {
        this.$showWarning('请填写文章标题');
        return;
      }
      if (this.form.picRecommend) {
        if (this.$refs.pic.result.length == 0) {
          this.$showWarning('请上传图片');
          return;
        }
        else {
          this.form.picId = this.$refs.pic.result[0].id;
          this.form.picUrl = this.$refs.pic.result[0].url;
        }
      }
      if (!this.form.publishTime) {
        this.$showWarning('请填写发布时间');
        return;
      }
      if (!content) {
        this.$showWarning('请填写文章内容');
        return;
      }
      this.form.content = content;
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
