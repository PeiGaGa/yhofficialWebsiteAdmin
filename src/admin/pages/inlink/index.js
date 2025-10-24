/*
 * @Author: 邹中兴
 * @Date: 2020-08-12 22:11:59
 * @LastEditors: 邹中兴
 * @LastEditTime: 2020-08-13 07:04:05
 * @Description: 
 */
/**
 * Created by c-zouzhongxing1 on 2019/4/8. 
 */
export default {
  name: 'inlink-index',
  data() {
    return {
      article: {
        content: []
      }
    }
  },
  created() {
    this.initData()
  },
  watch: {
    $route() {
      this.initData();
    }
  },
  methods: {
    initData() {
      this.$loader.show();
      this.$ajax({
        type: 'get',
        url: this.$baseUrl + '/admin/flink/list',
        data: {
          page: -1,
          size: 20,
          time: new Date().getTime()
        },
        success: (res) => {
          this.article = res.data;
        },
      })
    },
    del(item) {
      this.$showConfirm({
        content: '确定删除' + item.name + '？',
        onOk: (self) => {
          this.$loader.show();
          this.$ajax({
            type: 'post',
            url: this.$baseUrl + '/admin/flink/deleteById',
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
