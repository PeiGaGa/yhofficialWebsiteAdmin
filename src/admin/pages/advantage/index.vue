<template>
  <div class="page">
    <model-class routerPath="/advantage"></model-class>
  </div>
</template>
<script>
  import basic from '../model/class/index.vue';
  export default{
    data(){
      return {
        menuId: this.$route.meta.menuId
      }
    },
    components: {
      [basic.name]: basic
    }
  }
</script>
