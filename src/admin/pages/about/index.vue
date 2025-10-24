<!--
 * @Author: 邹中兴
 * @Date: 2019-02-22 17:16:25
 * @LastEditors: 邹中兴
 * @LastEditTime: 2020-07-05 15:27:41
 * @Description: 
--> 
<template>
  <div class="page">
    <model-class routerPath="/about"></model-class>
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
