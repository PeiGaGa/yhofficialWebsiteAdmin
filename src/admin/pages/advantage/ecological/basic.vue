<template>
  <div class="page"  v-if="$route.path=='/advantage/ecological/basic'">
    <model-basic :menuId="menuId"></model-basic>
  </div>
</template>
<script>
  import basic from '../../model/basic/index.vue';
  export default{
    data(){
      return {
        menuId: this.$route.meta.menuId
      }
    },
    components: {
      [basic.name]: basic
    },
    created(){
//      console.log('basic')
    }
  }
</script>
