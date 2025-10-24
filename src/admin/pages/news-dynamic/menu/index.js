/**
 * Created by Administrator on 2017/11/17.
 */
export default {
  name: 'news-dynamic-menu-index',
  data() {
    return {
      menuId: this.$route.meta.menuId,
      list: []
    }
  },
  created() {
    this.initData();
  },
  methods: {
    initData() {
      this.$loader.show();
      this.$ajax({
        type: 'get',
        url: this.$baseUrl + '/admin/menu/list',
        data: {
          parentId: this.menuId,
          time: new Date().getTime()
        },
        success: (res) => {
          this.list = res.data;
        },
      })
    }
  }
}
