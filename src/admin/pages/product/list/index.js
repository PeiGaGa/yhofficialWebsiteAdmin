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
            typeList: [],
            type: 5,
        }
    },
    beforeRouteEnter(to, from, next) {
        next(vm =>{
            vm.initData();
            vm.getType();
        });
    },
    created(){
        this.$loader.hide();
    },
    watch: {
        type: 'initData'
    },
    methods: {
        getType(){
            this.$ajax({
                type: 'get',
                url: this.$baseUrl + '/admin/menu/list',
                data: {
                    parentId: 5,
                    time: new Date().getTime()
                },
                success: (res)=>{
                    if(!res.success){
                        return;
                    }
                    this.typeList = [].concat({
                        id: 5,
                        name: '全部',
                    });
                    for(let i=0;i<res.data.length;i++){
                        this.typeList.push({
                            id: res.data[i].id,
                            name: res.data[i].name
                        });
                    }
                }
            })
        },
        initData(){
            this.$loader.show();
            this.$ajax({
                type: 'get',
                url: this.$baseUrl + '/admin/product/getByMenuId',
                data: {
                    page: this.list.current,
                    size: 20,
                    menuId: this.type,
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
                        url: this.$baseUrl + '/admin/product/deleteById',
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
