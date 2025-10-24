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
                    menuId: 1,
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
