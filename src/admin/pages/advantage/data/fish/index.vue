<!--
 * @Author: 邹中兴
 * @Date: 2020-08-11 07:28:26
 * @LastEditors: 邹中兴
 * @LastEditTime: 2020-08-11 07:28:48
 * @Description: 
-->
<template>
  <div class="page">
    <model-class-content :menuId="menuId"></model-class-content>
  </div>
</template>
<script>
import classContent from "../../../model/class/classContent.vue";
export default {
  data() {
    return {
      menuId: this.$route.meta.menuId,
    };
  },
  components: {
    [classContent.name]: classContent,
  },
};
</script>
