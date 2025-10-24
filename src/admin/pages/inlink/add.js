/*
 * @Author: 邹中兴
 * @Date: 2020-08-12 22:30:22
 * @LastEditors: 邹中兴
 * @LastEditTime: 2020-08-13 07:02:16
 * @Description: 
 */
/**
 * Created by Administrator on 2017/11/17.
 */
export default {
    name: 'inlink-add',
    data() {
        return {
            // id: this.$route.query.id,
            form: {}
        }
    },
    beforeRouteEnter(to, from, next) {
        next(vm => {
            // vm.initData();
            // vm.getTypeList();
        });
    },
    created() {
        this.$loader.hide();
    },
    methods: {

        initData() {
            this.$ajax({
                type: 'get',
                url: this.$baseUrl + '/admin/flink/getById',
                data: {
                    // id: this.id,
                    time: new Date().getTime()
                },
                success: (res) => {
                    this.form = res.data;
                }
            })
        },
        submit() {
            if (!this.form.name) {
                this.$showWarning('请输入链接名称');
                return;
            }
            if (!this.form.href) {
                this.$showWarning('请输入链接地址');
                return;
            } if (!this.form.weight) {
                this.$showWarning('请输入排序号');
                return;
            }
            this.$loader.show();
            this.$ajax({
                type: 'post',
                url: this.$baseUrl + '/admin/flink/update',
                data: {
                    form: JSON.stringify(this.form),
                    time: new Date().getTime()
                },
                success: (res) => {
                    this.$showSuccess('修改成功');
                    this.$router.push({
                        name: "inlink"
                    })
                },
            });
        },
    }
}
