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
                url: this.$baseUrl + '/admin/menu/getById',
                data: {
                    id: this.id,
                    time: new Date().getTime()
                },
                success: (res)=>{
                    this.form = res.data;
                    if(res.data.fileId && res.data.fileUrl){
                        this.$refs.file.setResult({
                            id: res.data.fileId,
                            url: res.data.fileUrl
                        });
                    }
                },
            })
        },
        save(){
            if(!this.form.name){
                this.$showWarning('请填写名称');
                return;
            }
            if(this.$refs.file.result.length>0){
                this.form.fileId = this.$refs.file.result[0].id;
                this.form.fileUrl = this.$refs.file.result[0].url;
            }
            this.form.leaf = true;
            this.form.parentId = 5;
            this.$loader.show();
            this.$ajax({
                type: 'post',
                url: this.$baseUrl + '/admin/menu/update',
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
