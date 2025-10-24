/**
 * Created by c-zouzhongxing1 on 2019/1/23. 
 */
import modelBanner from '../../model/banner/banner.vue';
export default{
  data(){
    return {
      menuId: this.$route.meta.menuId,
    }
  },
  created(){
    //console.log(this.menuId);
  },
  components: {
    [modelBanner.name]: modelBanner
  }
}
