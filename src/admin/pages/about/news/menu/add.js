/**
 * Created by Administrator on 2017/11/17.
 */
export default {
    name: 'index',
    data() {
        return {
            form: {},
        }
    },
    created(){
        this.$loader.hide();
    },
    methods: {
        save(){
            if(!this.form.name){
                this.$showWarning('请填写名称');
                return;
            }
            if(this.$refs.file.result.length>0){
                this.form.fileId = this.$refs.file.result[0].id;
                this.form.fileUrl = this.$refs.file.result[0].url;
                return;
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
