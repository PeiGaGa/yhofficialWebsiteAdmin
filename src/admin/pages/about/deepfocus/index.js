/**
 * Created by Administrator on 2017/11/17.
 */
import edit from './edit';
export default {
  name: 'index',
  data() {
    return {
      menuId: this.$route.meta.menuId,
      list: {
        current: 1,
        content: [],
        total: 1,
      },
    }
  },
  // beforeRouteEnter(to, from, next) {
  //   next(vm => {
  //     vm.initData();
  //   });
  // },
  created() {
    this.initData();
  },
  methods: {
    initData() {
      this.$loader.show();
      this.$ajax({
        type: 'get',
        url: this.$baseUrl + '/admin/treatise/getByMenuId',
        data: {
          page: this.list.current,
          size: 20,
          menuId: this.menuId,
          time: new Date().getTime()
        },
        success: (res) => {
          this.list.content = res.data.content;
          this.list.current = res.data.number;
          this.list.total = res.data.totalPages;
        }
      })
    },
    onPageChange(page) {
      this.list.current = page;
      this.initData();
    },
    edit(item) {
      let instance = new edit(item);
      this.$showBox({
        width: 600,
        content: '<div id="book-edit"></div>',
        onOpen: (self) => {
          instance.$mount(self.$el.querySelector('#book-edit'));
          if (item.fileId && item.fileUrl) {
            instance.$refs.file.setResult({
              id: item.fileId,
              url: item.fileUrl
            });
          }
        },
        onOk: (self) => {
          if (instance.$refs.file.result.length == 0) {
            this.$showWarning('请上传图片');
            return;
          }
          if (!instance.form.name) {
            this.$showWarning('请填写名称');
            return;
          }
          let form = {};
          form.fileId = instance.$refs.file.result[0].id;
          form.fileUrl = instance.$refs.file.result[0].url;
          form.name = instance.form.name;
          form.weight = instance.form.weight;
          form.id = instance.form.id;
          form.href = instance.form.href;
          // form.menuId = 10;
          form.menuId = this.menuId;
          this.$loader.show();
          this.$ajax({
            type: 'post',
            url: this.$baseUrl + '/admin/treatise/update',
            data: {
              form: JSON.stringify(form),
              time: new Date().getTime()
            },
            success: (res) => {
              this.initData();
              self.visible = false;
            }
          });
          return true;
        }
      });
    },
    del(item) {
      this.$showConfirm({
        content: '确定删除？',
        onOk: (self) => {
          this.$loader.show();
          this.$ajax({
            type: 'post',
            url: this.$baseUrl + '/admin/treatise/deleteById',
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
    },
  }
}
