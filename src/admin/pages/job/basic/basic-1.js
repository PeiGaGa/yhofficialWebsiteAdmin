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
                url: this.$baseUrl+'/admin/menu/getById',
                data: {
                    id: this.$route.meta.menuId,
                    time: new Date().getTime()
                },
                success: (res)=>{
                    this.form = res.data;
                    // if(this.form.fileId && this.form.fileUrl){
                    //     this.$refs.file.setResult({
                    //         id: this.form.fileId,
                    //         url: this.form.fileUrl
                    //     });
                    // }
                    if(this.form.picUrl && this.form.picId){
                        this.$refs.picUrl.setResult({
                            id: this.form.picId,
                            url: this.form.picUrl
                        });
                    }
                },
            });
        },
        changeFile(data){
            this.banner = data;
        },
        save(){
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
            // if(this.$refs.file.result.length>0){
            //     this.form.fileId = this.$refs.file.result[0].id;
            //     this.form.fileUrl = this.$refs.file.result[0].url;
            // }
            if(this.$refs.picUrl.result.length>0){
                this.form.picId = this.$refs.picUrl.result[0].id;
                this.form.picUrl = this.$refs.picUrl.result[0].url;
            }
            this.$loader.show();
            this.$ajax({
                type: 'post',
                url: this.$baseUrl+'/admin/menu/update',
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
