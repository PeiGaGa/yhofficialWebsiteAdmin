/**
 * Created by Administrator on 2017/11/17.
 */
import edit from './edit';
export default {
    name: 'index',
    data() {
        return {
            list: [],
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
                url: '/admin/menu/list',
                data: {
                    parentId: 5,
                    time: new Date().getTime()
                },
                success: (res)=>{
                    this.list = res.data;
                },
            })
        },
        del(item){
            this.$showConfirm({
                content: '确定删除' + item.name + '？',
                onOk: (self)=>{
                    this.$loader.show();
                    this.$ajax({
                        type: 'post',
                        url: '/admin/menu/deleteById',
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