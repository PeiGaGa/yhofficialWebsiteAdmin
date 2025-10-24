<!--
 * @Author: 邹中兴
 * @Date: 2020-07-05 20:09:42
 * @LastEditors: 邹中兴
 * @LastEditTime: 2020-08-11 07:22:54
 * @Description: 
-->
<template>
  <div class="page">
    <model-class :menuId="menuId" routerPath="/advantage/data" />
  </div>
</template>
<script>
import ModelClass from "../../model/class/index.vue";
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
