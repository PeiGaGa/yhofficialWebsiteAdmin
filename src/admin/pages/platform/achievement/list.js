/**
 * Created by Administrator on 2017/11/17.
 */
export default {
  name: 'platform-achievement-list',
  data(){
    return {
      menuId: this.$route.meta.menuId,
      article: {
        content: []
      }
    }
  },
  created(){
    this.initData()
  },
  methods: {
    initData(){
      this.$loader.show();
      this.$ajax({
        type: 'get',
        url: this.$baseUrl + '/admin/article/getByMenuId',
        data: {
          page: -1,
          size: 20,
          menuId: this.menuId,
          time: new Date().getTime()
        },
        success: (res) => {
          this.article = res.data;
        },
      })
    },
    del(item){
      this.$showConfirm({
        content: '确定删除' + item.name + '？',
        onOk: (self) => {
          this.$loader.show();
          this.$ajax({
            type: 'post',
            url: this.$baseUrl + '/admin/article/deleteById',
            data: {
              id: item.id
            },
            success: (res) => {
              this.$showSuccess('删除成功');
              self.visible = false;
            },
            complete: () => {
              this.initData();
            }
          })
        }
      });
    }
  }
}
