/**
 * Created by Administrator on 2017/11/17.
 */
export default {
    name: 'index',
    data() {
        return {
            list: {
                current: 1,
                content: [],
                total: 1,
            },
            current: 1,
            total: 1,
            typeList: [
                {
                    id: 1,
                    name: '社会招聘',
                },
                {
                    id: 2,
                    name: '校园招聘',
                }
            ],
            type: 1,
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
    watch:{
        'type': 'initData'
    },
    methods: {
        initData(){
            this.$loader.show();
            this.$ajax({
                type: 'get',
                url: this.$baseUrl+'/admin/recruit/getByType',
                data: {
                    page: this.list.current,
                    size: 20,
                    type: this.type,
                    time: new Date().getTime()
                },
                success: (res)=>{
                    this.list.content = res.data.content;
                    this.list.current = res.data.number;
                    this.list.total = res.data.totalPages;
                },
            })
        },
        onPageChange(page){
            this.list.current = page;
            this.initData();
        },
        del(item){
            this.$showConfirm({
                content: '确定删除' + item.name + '？',
                onOk: (self)=>{
                    this.$loader.show();
                    this.$ajax({
                        type: 'post',
                        url: this.$baseUrl+'/admin/recruit/deleteById',
                        data: {
                            id: item.id
                        },
                        success: (res)=>{
                            this.$showSuccess('删除成功');
                            self.visible = false;
                        },
                        complete: ()=>{
                            this.initData();
                        }
                    })
                }
            });
        },
    }
}
