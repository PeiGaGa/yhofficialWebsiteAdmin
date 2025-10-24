<template>
  <div>
    <model-banner :menuId="this.menuId"></model-banner>
  </div>
</template>
<script>
  import modelBanner from '../../model/banner/banner.vue';
  export default{
    data(){
      return {
        menuId: this.$route.meta.menuId,
      }
    },
    created(){
      //console.log(this.menuId);
    },
    components: {
      [modelBanner.name]: modelBanner
    }
  }
</script>
