/**
 * Created by Administrator on 2017/11/17.
 */
import edit from './edit';
export default {
  name: 'model-banner',
  props: {
    menuId: {
      type: String
    }
  },
  data() {
    return {
      list: []
    }
  },
  // beforeRouteEnter(to, from, next) {
  //   next(vm => {
  //     vm.initData();
  //   });
  // },
  created() {
    //console.log(this.menuId);
    this.initData();
  },
  methods: {
    initData() {
      this.$loader.show();
      //console.log(this.menuId);
      this.$ajax({
        type: 'get',
        url: this.$baseUrl + '/admin/home/banner/list',
        data: {
          page: -1,
          time: new Date().getTime(),
          menuId: this.menuId
        },
        success: (res) => {
          this.list = res.data.content;
        }
      })
    },
    edit(item) {
      let instance = new edit(item);
      this.$showBox({
        width: 600,
        content: '<div id="banner-edit"></div>',
        onOpen: (self) => {
          instance.$mount(self.$el.querySelector('#banner-edit'));
          if (item.fileId && item.fileUrl) {
            instance.$refs.file.setResult({
              id: item.fileId,
              url: item.fileUrl
            });
          }
        },
        onOk: (self) => {
          // todo
          if (instance.$refs.file.result.length == 0) {
            this.$showWarning('请上传图片');
            return;
          }
          // let form = {};
          let form = item;
          form.fileId = instance.$refs.file.result[0].id;
          form.fileUrl = instance.$refs.file.result[0].url;
          form.link = instance.form.link;
          form.name = instance.form.name;
          form.nameEN = instance.form.nameEN;
          if (!form.name || !form.nameEN) {
            this.$showWarning('请填写banner文字');
            return;
          }
          form.weight = instance.form.weight;
          form.id = instance.form.id;
          form.menuId = this.menuId;
          // return;//测试menuId，测试完成取消
          this.$loader.show();
          // alert(JSON.stringify(form))
          this.$ajax({
            type: 'post',
            url: this.$baseUrl + '/admin/home/banner/update',
            // dataType: 'json',
            data: {
              form: JSON.stringify(form),
              time: new Date().getTime()
            },
            success: (res) => {
              this.initData();
              self.visible = false;
            }
          });
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
            url: this.$baseUrl + '/admin/home/banner/deleteById',
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
