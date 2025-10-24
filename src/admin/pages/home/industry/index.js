export default {
  name: 'industry',
  data() {
    return {
      menuId: this.$route.meta.menuId,
      article: {
        content: []
      }
    };
  },
  created() {
    this.initData();
  },
  methods: {
    initData() {
      this.$ajax({
        type: 'get',
        url: this.$baseUrl + '/admin/home/industry/list',
        data: {
          menuId: this.menuId,
          time: new Date().getTime()
        },
        success: (res) => {
          this.article = res.data;
        }
      });
    },
    del(item) {
      this.$showConfirm('确定删除该产业布局吗？', () => {
        this.$ajax({
          type: 'post',
          url: this.$baseUrl + '/admin/home/industry/delete',
          data: {
            id: item.id,
            time: new Date().getTime()
          },
          success: (res) => {
            this.$showSuccess('删除成功');
            this.initData();
          }
        });
      });
    }
  }
};
