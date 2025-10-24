/**
 * Created by Administrator on 2017/11/17.
 */
import edit from './edit';
export default {
    name: 'index',
    data() {
        return {
            list: [],
            typeList: [],
            parentId: this.$route.meta.menuId,
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
    watch: {
        'parentId': 'initData'
    },
    methods: {
        initData(){
            this.$ajax({
                type: 'get',
                url: this.$baseUrl + '/admin/menu/list',
                data: {
                    parentId: this.parentId,
                    time: new Date().getTime()
                },
                success: (res)=>{
                    this.list = res.data;
                    if(this.typeList.length == 0){
                        this.typeList = [{
                            id: 4,
                            name: '全部'
                        }].concat(this.list);
                    }
                }
            })
        },
        del(item){
            this.$showConfirm({
                content: '确定删除' + item.name + '？',
                onOk: (self)=>{
                    this.$loader.show();
                    this.$ajax({
                        type: 'post',
                        url: this.$baseUrl + '/admin/menu/deleteById',
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
