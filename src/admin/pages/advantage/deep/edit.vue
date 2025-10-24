<template>
  <div class="page"  v-if="$route.path=='/advantage/deep/edit'">
    <model-article-edit :menuId="menuId"></model-article-edit>
  </div>
</template>
<script>
  import edit from '../../model/article/edit.vue';
  export default{
    data(){
      return {
        menuId: this.$route.meta.menuId
      }
    },
    components: {
      [edit.name]: edit
    }
  }
</script>
