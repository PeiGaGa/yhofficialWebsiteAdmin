/**
 * Created by c-zouzhongxing1 on 2019/1/22. 
 */
export default{
  name: 'model-class',
  props: {
    // menuId: {
    //   type: String
    // }
    routerPath: {
      type: String
    }
  },
  data(){
    return {
      // menuId: 0,//栏目menuId
      path: '',//取当前路由路径
      name: '',
      subLink: [],
      childRouter: []
    }
  },
  watch: {
    '$route' (to, from) {
      this.getClassNode();
    }
  },
  created(){
    this.getClassNode();
  },
  methods: {
    // 获取栏目节点：
    getClassNode(){
      this.menuId = this.$route.meta.menuId;
      this.path = this.$route.path;
      this.name = this.$route.name;
      this.subLink = this.$router.options.routes;
      this.getRouterNodeByName(this.$router.options.routes[0].children, this.$route.name);
    },
    getRouterNodeByName(routerNode, name){
      //console.log(name);
      for (let i = 0; i < routerNode.length; i++) {
        if (routerNode[i].name == name) {
          this.childRouter = routerNode[i].children;
        }
        //如果没有找到
        else {
          if (routerNode[i].hasOwnProperty('children')) {
            this.getRouterNodeByName(routerNode[i].children, name);
          }
        }
      }
    },
  }
}
