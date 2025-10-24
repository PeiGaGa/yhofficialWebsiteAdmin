/*
 * @Author: 邹中兴
 * @Date: 2020-07-06 21:35:17
 * @LastEditors: 邹中兴
 * @LastEditTime: 2020-07-06 22:06:03
 * @Description: 
 */
/**
 * Created by Administrator on 2017/11/17.
 */
import edit from './edit';
export default {
    name: 'about-honor',
    data() {
        return {
            list: []
        }
    },
    beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.initData();
        });
    },
    created() {
    },
    methods: {
        initData() {
            this.$loader.show();
            this.$ajax({
                type: 'get',
                url: this.$baseUrl + '/admin/honor/list',
                data: {
                    page: -1,
                    time: new Date().getTime()
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
                content: '<div id="partner-edit"></div>',
                onOpen: (self) => {
                    instance.$mount(self.$el.querySelector('#partner-edit'));
                    if (item.fileId && item.fileUrl) {
                        instance.$refs.file.setResult({
                            id: item.fileId,
                            url: item.fileUrl
                        });
                    }
                },
                onOk: (self) => {
                    this.$loader.show();
                    if (instance.$refs.file.result.length == 0) {
                        return;
                    }
                    let form = {};
                    form.fileId = instance.$refs.file.result[0].id;
                    form.fileUrl = instance.$refs.file.result[0].url;
                    form.name = instance.form.name;
                    form.weight = instance.form.weight;
                    form.id = instance.form.id;
                    this.$ajax({
                        type: 'post',
                        url: this.$baseUrl + '/admin/honor/update',
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
                        url: this.$baseUrl + '/admin/honor/deleteById',
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
