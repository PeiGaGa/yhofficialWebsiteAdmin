/**
 * Created by Administrator on 2017/11/17.
 */
export default {
    name: 'index',
    data() {
        return {
            article: {
                content: [],
            }
        }
    },
    beforeRouteEnter(to, from, next) {
        next(vm =>{
            vm.initData();
        });
    },
    watch: {
        '$route'(to, from) {
            // 当从子路由（如编辑页面）返回到列表页面时，刷新数据
            if (to.path === '/home/industry' && from.path === '/home/industry/edit') {
                this.initData();
            }
        }
    },
    created(){
    },
    methods: {
        initData(){
            this.$loader.show();
            this.$ajax({
                type: 'get',
                url: this.$baseUrl + '/admin/article/getByMenuId',
                data: {
                    page: -1,
                    size: 20,
                    menuId: this.$route.meta.menuId,
                    time: new Date().getTime()
                },
                success: (res)=>{
                    this.article = res.data;
                },
            })
        },
        del(item){
            this.$showConfirm({
                content: '确定删除' + item.name + '？',
                onOk: ()=>{
                    this.$loader.show();
                    this.$ajax({
                        type: 'post',
                        url: this.$baseUrl + '/admin/article/deleteById',
                        data: {
                            id: item.id
                        },
                        success: (res)=>{
                            this.$showSuccess('删除成功');
                        },
                        complete: ()=>{
                            this.initData();
                        }
                    })
                }
            });
        }
    }
}
