/**
 * Created by Administrator on 2017/11/17.
 */
export default {
    name: 'index',
    data() {
        return {
            form: {},
            banner: {}
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
                url: this.$baseUrl + '/admin/menu/getById',
                data: {
                    id: 10,
                    time: new Date().getTime()
                },
                success: (res)=>{
                    this.form = res.data;
                    if(res.data.fileId && res.data.fileUrl){
                        this.$refs.file.setResult({
                            id: this.form.fileId,
                            url: this.form.fileUrl
                        });
                    }
                },
            });
        },
        save(){
            let content = this.$refs.editor.content;
            if(!content){
                this.$showWarning('请填写简介');
                return;
            }
            if(this.$refs.file.result.length>0){
                this.form.fileId = this.$refs.file.result[0].id;
                this.form.fileUrl = this.$refs.file.result[0].url;
            }
            if(!this.form.title){
                this.$showWarning('请填写页面标题');
                return;
            }
            if(!this.form.keyword){
                this.$showWarning('请填写页面关键字');
                return;
            }
            if(!this.form.description){
                this.$showWarning('请填写页面描述');
                return;
            }
            this.form.content = content;
            this.form.menuId = 10;
            this.$loader.show();
            this.$ajax({
                type: 'post',
                url: this.$baseUrl + '/admin/menu/update',
                data: {
                    form: JSON.stringify(this.form),
                    time: new Date().getTime()
                },
                success: (res)=>{
                    this.$showSuccess('保存成功');
                }
            });
        }
    }
}
