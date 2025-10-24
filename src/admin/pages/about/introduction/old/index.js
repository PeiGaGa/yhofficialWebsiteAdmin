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
                url: this.$baseUrl + '/admin/article/getById',
                data: {
                    id: 4,
                    time: new Date().getTime()
                },
                success: (res)=>{
                    this.form = res.data;
                    if(res.data && res.data.fileId && res.data.fileUrl){
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
                this.$showWarning('请填写内容');
                return;
            }
            this.form.content = content;
            if(this.$refs.file.result.length>0){
                this.form.fileId = this.$refs.file.result[0].id;
                this.form.fileUrl = this.$refs.file.result[0].url;
            }
            this.form.menuId = 7;
            this.$loader.show();
            this.$ajax({
                type: 'post',
                url: this.$baseUrl + '/admin/article/update',
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
