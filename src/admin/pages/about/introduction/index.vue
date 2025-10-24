<template>
  <div class="page">
    <model-class-content :menuId="menuId"></model-class-content>
  </div>
</template>
<script>
  import classContent from '../../model/class/classContent.vue';
  export default{
    data(){
      return {
        menuId: this.$route.meta.menuId
      }
    },
    components: {
      [classContent.name]: classContent
    }
  }
</script>
