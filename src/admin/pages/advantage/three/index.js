/**
 * Created by Administrator on 2017/11/17.
 */
import edit from './edit';
export default {
    name: 'index',
    data() {
        return {
            article: {
                content: [],
            }
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
                url: this.$baseUrl + '/admin/businessOther/getByMenuId',
                data: {
                    page: -1,
                    size: 20,
                    menuId: 14,
                    time: new Date().getTime()
                },
                success: (res)=>{
                    this.article = res.data;
                },
            })
        },
        del(item){
            this.$showConfirm({
                content: '确定删除' + item.name + '？',
                onOk: (self)=>{
                    this.$loader.show();
                    this.$ajax({
                        type: 'post',
                        url: this.$baseUrl + '/admin/businessOther/deleteById',
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
        edit(item){
            let instance = new edit(item);
            this.$showBox({
                width: 600,
                content: '<div id="banner-edit"></div>',
                onOpen: (self)=>{
                    instance.$mount(self.$el.querySelector('#banner-edit'));
                    if(item.fileId && item.fileUrl){
                        instance.$refs.file.setResult({
                            id: item.fileId,
                            url: item.fileUrl
                        });
                    }
                },
                onOk: (self)=>{
                    if(instance.$refs.file.result.length == 0){
                        this.$showWarning('请上传图片');
                        return;
                    }
                    let form = {};
                    form.fileId = instance.$refs.file.result[0].id;
                    form.fileUrl = instance.$refs.file.result[0].url;
                    form.name = instance.form.name;
                    form.brief = instance.form.brief;
                    if(!form.name){
                        this.$showWarning('请填写名称');
                        return;
                    }
                    if(!form.brief){
                        this.$showWarning('请填写描述');
                        return;
                    }
                    form.weight = instance.form.weight;
                    form.id = instance.form.id;
                    form.menuId = 14;
                    this.$loader.show();
                    this.$ajax({
                        type: 'post',
                        url: this.$baseUrl + '/admin/businessOther/update',
                        data: {
                            form: JSON.stringify(form),
                            time: new Date().getTime()
                        },
                        success: (res)=>{
                            this.initData();
                            self.visible = false;
                        }
                    });
                }
            });
        },
    }
}
