<!--
 * @Author: 邹中兴
 * @Date: 2020-08-11 07:20:13
 * @LastEditors: 邹中兴
 * @LastEditTime: 2020-08-11 07:20:20
 * @Description: 
-->
<template>
  <div class="page">
    <model-basic :menuId="menuId"></model-basic>
  </div>
</template>
<script>
import basic from "../../../model/basic/index.vue";
export default {
  data() {
    return {
      menuId: this.$route.meta.menuId,
    };
  },
  components: {
    [basic.name]: basic,
  },
};
</script>
