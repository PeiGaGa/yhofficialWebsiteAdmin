<template>
  <div class="page">
    <model-class routerPath="/business"></model-class>
  </div>
</template>
<script>
  import index from '../model/class/index.vue';
  export default{
    data(){
      return {
        menuId: this.$route.meta.menuId
      }
    },
    components: {
      [index.name]: index
    }
  }
</script>
