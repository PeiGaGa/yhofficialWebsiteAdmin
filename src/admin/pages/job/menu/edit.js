/**
 * Created by Administrator on 2017/11/17.
 */
export default {
    name: 'index',
    data() {
        return {
            id: this.$route.params.id,
            form: {}
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
                url: '/admin/menu/getById',
                data: {
                    id: this.id,
                    time: new Date().getTime()
                },
                success: (res)=>{
                    this.form = res.data;
                    this.$refs.file.setResult({
                        id: res.data.fileId,
                        url: res.data.fileUrl
                    });
                    this.$refs.pic.setResult({
                        id: res.data.picId,
                        url: res.data.picUrl
                    });
                    this.$refs.ad.setResult({
                        id: res.data.adId,
                        url: res.data.adUrl
                    });
                },
            })
        },
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