<!--
 * @Author: 邹中兴
 * @Date: 2020-07-05 15:04:34
 * @LastEditors: 邹中兴
 * @LastEditTime: 2020-07-05 15:29:18
 * @Description: 荣誉资质
--> 
<template>
  <div class="page">
    <model-class-content :menuId="menuId"></model-class-content>
  </div>
</template>
<script>
import classContent from "../../model/class/classContent.vue";
export default {
  data() {
    return {
      menuId: this.$route.meta.menuId
    };
  },
  components: {
    [classContent.name]: classContent
  }
};
</script>
