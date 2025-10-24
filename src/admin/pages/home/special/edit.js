/**
 * Created by Administrator on 2017/11/17.
 */
export default {
    name: 'index',
    data() {
        return {
            id: this.$route.params.id,
            form: {},
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
                url: this.$baseUrl + '/admin/article/getById',
                data: {
                    id: this.id,
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
                    if(res.data.picId && res.data.picUrl){
                        this.$refs.pic.setResult({
                            id: this.form.picId,
                            url: this.form.picUrl
                        });
                    }
                },
            })
        },
        changeFile(data){
            this.banner = data;
        },
        save(){
            let content = this.$refs.editor.content;
            if(!this.form.name){
                this.$showWarning('请填写中文名称');
                return;
            }
            if(!content){
                this.$showWarning('请填写文章内容');
                return;
            }
            this.form.content = content;
            if(this.$refs.file.result.length==0){
                this.$showWarning('请上传页面banner图');
                return;
            }
            this.form.fileId = this.$refs.file.result[0].id;
            this.form.fileUrl = this.$refs.file.result[0].url;
            if(this.$refs.pic.result.length==0){
                this.$showWarning('请上传首页展示图');
                return;
            }
            this.form.picId = this.$refs.pic.result[0].id;
            this.form.picUrl = this.$refs.pic.result[0].url;
            this.$loader.show();
            this.$ajax({
                type: 'post',
                url: this.$baseUrl + '/admin/article/update',
                data: {
                    form: JSON.stringify(this.form),
                    time: new Date().getTime()
                },
                success: (res)=>{
                    this.$showSuccess('新增成功');
                    history.go(-1);
                },
            });
        }
    }
}
