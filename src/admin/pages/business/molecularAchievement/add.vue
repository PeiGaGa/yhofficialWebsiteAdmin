<template>
  <div class="page"  v-if="$route.path=='/business/molecularAchievement/add'">
   <model-article-add :menuId="menuId"></model-article-add>
  </div>
</template>
<script>
  import add from '../../model/article/add.vue';
  export default{
    data(){
      return {
        menuId: this.$route.meta.menuId
      }
    },
    components: {
      [add.name]: add
    },
    created(){
        console.log('add')
    }
  }
</script>
