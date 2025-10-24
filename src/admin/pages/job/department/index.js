/**
 * Created by Administrator on 2017/11/17.
 */
import edit from './edit';
export default {
    name: 'index',
    data() {
        return {
            list: []
        }
    },
    beforeRouteEnter(to, from, next) {
        next(vm =>{
            vm.initData();
        });
    },
    created(){
    },
    methods: {
        initData(){
            this.$loader.show();
            this.$ajax({
                type: 'get',
                url: this.$baseUrl+'/admin/cotion/getByCType',
                data: {
                    cType: 3,
                    page: -1,
                    time: new Date().getTime()
                },
                success: (res)=>{
                    this.list = res.data;
                }
            })
        },
        edit(item){
            let instance = new edit(item);
            this.$showBox({
                width: 600,
                content: '<div id="banner-edit"></div>',
                onOpen: (self)=>{
                    instance.$mount(self.$el.querySelector('#banner-edit'));
                },
                onOk: (self)=>{
                    this.$loader.show();
                    let form = {};
                    form.cName = instance.form.cName;
                    form.cType = 3;
                    form.cWeight = instance.form.cWeight;
                    form.id = instance.form.id;
                    this.$ajax({
                        type: 'post',
                        url: this.$baseUrl+'/admin/cotion/update',
                        data: {
                            form: JSON.stringify(form),
                            time: new Date().getTime()
                        },
                        success: (res)=>{
                            this.initData();
                            self.visible = false;
                        }
                    });
                    return true;
                }
            });
        },
        del(item){
            this.$showConfirm({
                content: '确定删除？',
                onOk: (self)=>{
                    this.$loader.show();
                    this.$ajax({
                        type: 'post',
                        url: this.$baseUrl+'/admin/cotion/deleteById',
                        data: {
                            id: item.id
                        },
                        success: (res)=>{
                            this.$showSuccess('删除成功');
                            self.visible = false;
                        },
                        complete: ()=>{
                            this.initData();
                        }
                    })
                }
            });
        },
    }
}
