/**
 * Created by Administrator on 2017/11/17.
 */
export default {
    name: 'index',
    data() {
        return {
            id: this.$route.params.id,
            typeList: [{
                id: 1,
                name: '社会招聘'
            },{
                id: 2,
                name: '校园招聘'
            }],
            workList: [{
                id: 1,
                name: '全职'
            },{
                id: 2,
                name: '兼职'
            }],
            companyList: [],
            addressList: [],
            categoryList: [],
            departmentList: [],
            form: {
                type: 1,
            },
        }
    },
    beforeRouteEnter(to, from, next) {
        next(vm =>{
            vm.initData();
        });
    },
    created(){
        this.$loader.hide();
    },
    methods: {
        initData(){
            this.$loader.show();
            this.$ajax({
                type: 'get',
                url: this.$baseUrl+'/admin/recruit/getById',
                data: {
                    id: this.id,
                    time: new Date().getTime()
                },
                success: (res)=>{
                    this.form = {
                        id: res.data.id,
                        type: res.data.type,
                        name: res.data.name,
                        company: res.data.company,
                        address: res.data.address,
                        department: res.data.department,
                        category: res.data.category,
                        work: res.data.work,
                        education: res.data.education,
                        jobDescription: res.data.jobDescription,
                        duties: res.data.duties,
                        title: res.data.title,
                        keyword: res.data.keyword,
                        description: res.data.description
                    };
                },
            });
            this.$ajax({
                type: 'get',
                url: this.$baseUrl+'/admin/cotion/getByCType',
                data: {
                    cType: 1,
                    page: -1,
                    time: new Date().getTime()
                },
                success: (res)=>{
                    this.companyList = [{cName:'请选择'}].concat(res.data);
                },
            });
            this.$ajax({
                type: 'get',
                url: this.$baseUrl+'/admin/cotion/getByCType',
                data: {
                    cType: 2,
                    page: -1,
                    time: new Date().getTime()
                },
                success: (res)=>{
                    this.addressList = [{cName:'请选择'}].concat(res.data);
                },
            });
            this.$ajax({
                type: 'get',
                url: this.$baseUrl+'/admin/cotion/getByCType',
                data: {
                    cType: 3,
                    page: -1,
                    time: new Date().getTime()
                },
                success: (res)=>{
                    this.departmentList = [{cName:'请选择'}].concat(res.data);
                },
            });
            this.$ajax({
                type: 'get',
                url: this.$baseUrl+'/admin/cotion/getByCType',
                data: {
                    cType: 4,
                    page: -1,
                    time: new Date().getTime()
                },
                success: (res)=>{
                    this.categoryList = [{cName:'请选择'}].concat(res.data);
                },
            });
        },
        chooseAddress(id){
            let index = this.address.indexOf(id);
            if(index == -1){
                this.address.push(id);
            }else{
                this.address.splice(index, 1);
            }
        },
        submit(){
            let duties = this.$refs.duties.content,
                jobDescription = this.$refs.jobDescription.content;
            if(!this.form.type){
                this.$showWarning('请选择招聘类型');
                return;
            }
            if(!this.form.name){
                this.$showWarning('请填写标题');
                return;
            }
            if(!this.form.company){
                this.$showWarning('请选择所属机构');
                return;
            }
            if(!this.form.address){
                this.$showWarning('请选择工作地点');
                return;
            }
            if(!this.form.department){
                this.$showWarning('请选择所属部门');
                return;
            }
            if(!this.form.category){
                this.$showWarning('请选择职位类别');
                return;
            }
            if(!this.form.work){
                this.$showWarning('请选择工作类型');
                return;
            }
            if(!this.form.education){
                this.$showWarning('请填写学历');
                return;
            }
            if(!duties){
                this.$showWarning('请填写任职要求');
                return;
            }
            if(!jobDescription){
                this.$showWarning('请填写岗位描述');
                return;
            }
            this.form.duties = duties;
            this.form.jobDescription = jobDescription;
            this.$loader.show();
            this.$ajax({
                type: 'post',
                url: this.$baseUrl+'/admin/recruit/update',
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
