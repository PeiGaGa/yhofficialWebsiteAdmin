<!--
 * @Author: 邹中兴
 * @Date: 2019-02-22 16:44:03
 * @LastEditors: 邹中兴
 * @LastEditTime: 2020-07-06 21:21:17
 * @Description: 
--> 
<template>
  <div class="page">
    <model-class routerPath="/joinus"></model-class>
  </div>
</template>
<script>
import index from "../model/class/index.vue";
export default {
  data() {
    return {
      menuId: this.$route.meta.menuId
    };
  },
  components: {
    [index.name]: index
  }
};
</script>
