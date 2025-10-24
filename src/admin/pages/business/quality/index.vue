<template>
  <div>
    <div class="page" v-if="$route.path=='/business/quality'">
      <model-list-index :menuId="menuId"></model-list-index>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
  import list from '../../model/list/index.vue';
  export default{
    data(){
      return {
        menuId: this.$route.meta.menuId
      }
    },
    components: {
      [list.name]: list
    }
  }
</script>
