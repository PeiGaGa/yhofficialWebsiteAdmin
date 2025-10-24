<template>
  <div class="page" v-if="$route.path=='/oceaneering/marineRanch/edit'">
    <model-article-edit :id="this.$route.params.id"></model-article-edit>
  </div>
</template>
<script>
  import edit from '../../model/article/edit.vue';
  export default{
    data(){
      return {
        id: this.$route.params.id
      }
    },
    created(){
        console.log(this.$route.params.id);
    },
    components: {
      [edit.name]: edit
    }
  }
</script>
