<!--
 * @Author: 邹中兴
 * @Date: 2019-02-22 16:43:41
 * @LastEditors: 邹中兴
 * @LastEditTime: 2020-10-09 07:45:29
 * @Description: 
-->
<template>
  <div class="page">
    <model-class routerPath="/pharmacy"></model-class>
  </div>
</template>
<script>
import ModelClass from "../model/class/index.vue";
export default {
  data() {
    return {
      menuId: this.$route.meta.menuId,
    };
  },
  components: {
    ModelClass,
  },
};
</script>
