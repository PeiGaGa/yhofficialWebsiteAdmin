/**
 * Created by Administrator on 2017/11/17.
 */
export default {
    name: 'index',
    data() {
        return {
            id: this.$route.params.id,
            type: {},
            typeList: [],
            form: {}
        }
    },
    beforeRouteEnter(to, from, next) {
        next(vm =>{
            vm.initData();
            vm.getTypeList();
        });
    },
    created(){
        this.$loader.hide();
    },
    methods: {
        getTypeList(){
            this.$ajax({
                type: 'get',
                url: this.$baseUrl + '/admin/menu/list',
                data: {
                    parentId: 5,
                    time: new Date().getTime()
                },
                success: (res)=>{
                    this.typeList = res.data;
                }
            })
        },
        initData(){
            this.$ajax({
                type: 'get',
                url: this.$baseUrl + '/admin/product/getById',
                data: {
                    id: this.id,
                    time: new Date().getTime()
                },
                success: (res)=>{
                    this.form = res.data;
                    if(res.data.picId && res.data.picUrl){
                        this.$refs.pic.setResult({
                            id: res.data.picId,
                            url: res.data.picUrl
                        });
                    }
                    if(res.data.widePicId && res.data.widePicUrl){
                        this.$refs.widePic.setResult({
                            id: res.data.widePicId,
                            url: res.data.widePicUrl
                        });
                    }
                    // if(res.data.fileId && res.data.fileUrl){
                    //     this.$refs.file.setResult({
                    //         id: res.data.fileId,
                    //         url: res.data.fileUrl
                    //     });
                    // }
                }
            })
        },
        submit(){
            let brief = this.$refs.brief.content;
            let content = this.$refs.editor.content;
            if(!this.form.menuId){
                this.$showWarning('请选择产品分类');
                return;
            }
            if(!this.form.name){
                this.$showWarning('请填写产品名称');
                return;
            }
            if(!this.form.brief2){
                this.$showWarning('请填写产品简介');
                return;
            }
            if(!brief){
                this.$showWarning('请填写产品规格');
                return;
            }
            if(!content){
                this.$showWarning('请填写产品描述');
                return;
            }
            // if(this.$refs.file.result.length>0){
            //     this.form.fileId = this.$refs.file.result[0].id;
            //     this.form.fileUrl = this.$refs.file.result[0].url;
            // }
            if(this.$refs.widePic.result.length==0){
                this.$showWarning('请上传产品列表图片');
                return;
            }
            if(this.$refs.pic.result.length==0){
                this.$showWarning('请上传产品详情图片');
                return;
            }
            this.form.picId = this.$refs.pic.result[0].id;
            this.form.picUrl = this.$refs.pic.result[0].url;
            this.form.widePicId = this.$refs.widePic.result[0].id;
            this.form.widePicUrl = this.$refs.widePic.result[0].url;
            if(!this.form.recommend){
                this.form.recommend = false;
            }
            this.form.brief = brief;
            this.form.content = content;
            this.$loader.show();
            this.$ajax({
                type: 'post',
                url: this.$baseUrl + '/admin/product/update',
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
