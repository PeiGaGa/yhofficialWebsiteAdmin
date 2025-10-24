<!--
 * @Author: 邹中兴
 * @Date: 2020-07-06 21:47:51
 * @LastEditors: 邹中兴
 * @LastEditTime: 2020-07-06 22:31:13
 * @Description: 
--> 
<template>
  <div>
    abc
    <model-basic :menuId="menuId"></model-basic>
  </div>
</template>
<script>
import basic from "../../model/basic/index.vue";
export default {
  data() {
    return {
      menuId: this.$route.meta.menuId
    };
  },
  components: {
    [basic.name]: basic
  }
};
</script>
