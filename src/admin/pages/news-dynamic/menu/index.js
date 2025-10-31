/**
 * Created by Administrator on 2017/11/17.
 */
export default {
  name: 'news-dynamic-menu-index',
  data() {
    return {
      // 新闻动态的 menuId 是 6，获取其下的子栏目
      parentId: '6',
      list: []
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.initData();
    });
  },
  watch: {
    '$route'(to, from) {
      // 当从编辑页面返回到列表页面时，刷新数据
      if (to.name === 'news_dynamic_menu' && from.name === 'news_dynamic_menu_edit') {
        this.initData();
      }
    }
  },
  created() {
  },
  methods: {
    initData() {
      this.$loader.show();
      this.$ajax({
        type: 'get',
        url: this.$baseUrl + '/admin/menu/list',
        data: {
          parentId: this.parentId,
          time: new Date().getTime()
        },
        success: (res) => {
          this.list = res.data;
          this.$loader.hide();
        },
        error: () => {
          this.$loader.hide();
        }
      });
    }
  }
}
