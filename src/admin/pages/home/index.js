/**
 * Created by Administrator on 2017/11/17.
 */
export default {
  name: 'index',
  data() {
    return {
      menuId: this.$route.meta.menuId,
      childRouter: [],
      list: []
    }
  },
  created(){
    this.$loader.hide();
    //console.log(this.$router.options.routes[0].children);
    //console.log(this.$router.options);
    this.childRouter = this.$common.getRouterNodeByName(this.$router.options.routes[0].children, 'home');
    //console.log(this.$common.getRouterNodeByName(this.$router.options.routes[0].children, 'home'));
    //console.log(this.$router.options);
    //console.log(this.childRouter);
  },
  methods: {}
}
