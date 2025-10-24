/**
 * Created by Administrator on 2017/11/17.
 */
export default {
    name: 'index',
    data() {
        return {
            form: {}
        }
    },
    created(){
        this.$loader.hide();
    },
    methods: {
        submit(){
            if(!this.form.name){
                this.$showWarning('请填写名称');
                return;
            }
            if(this.$refs.file.result.length>0){
                this.form.fileId = this.$refs.file.result[0].id;
                this.form.fileUrl = this.$refs.file.result[0].url;
            }
            if(this.$refs.ad.result.length>0){
                this.form.adId = this.$refs.ad.result[0].id;
                this.form.adUrl = this.$refs.ad.result[0].url;
            }
            if(this.$refs.pic.result.length>0){
                this.form.picId = this.$refs.pic.result[0].id;
                this.form.picUrl = this.$refs.pic.result[0].url;
            }
            this.form.parentId = 5;
            this.form.leaf = true;
            this.$loader.show();
            this.$ajax({
                type: 'post',
                url: '/admin/menu/update',
                data: {
                    form: JSON.stringify(this.form),
                    time: new Date().getTime()
                },
                success: (res)=>{
                    this.$showSuccess('新增成功');
                    history.go(-1);
                },
            });
        },
    }
}