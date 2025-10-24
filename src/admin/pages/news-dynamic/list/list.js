/**
 * Created by Administrator on 2017/11/17.
 */
export default {
  name: 'news-dynamic-list-index',
  data() {
    return {
      menuId: this.$route.meta.menuId,
      typeList: [
        {
          id: this.$route.meta.menuId,
          name: '全部',
        }
      ],
      type: this.$route.meta.menuId,
      article: {
        content: [],
      }
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.initData();
      vm.getType();
    });
  },
  created(){
  },
  watch:{
    'type':'initData'
  },
  methods: {
    getType(){
      this.$loader.show();
      this.$ajax({
        type: 'get',
        url: this.$baseUrl + '/admin/menu/list',
        data: {
          parentId: this.menuId,
          time: new Date().getTime()
        },
        success: (res) => {
          console.log(res);
          let arr = res.data;
          this.typeList = [{
            id: this.menuId,
            name: '全部',
          }].concat(res.data);
          console.log(this.typeList)

        }
      })
    },
    initData(){
      this.$loader.show();
      this.$ajax({
        type: 'get',
        url: this.$baseUrl + '/admin/article/getByMenuId',
        data: {
          page: -1,
          size: 20,
          menuId: this.type,
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
