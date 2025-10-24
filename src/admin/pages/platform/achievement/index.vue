<template>
  <div>
    <div class="page" v-if="$route.path=='/platform/achievement'">
      <platform-achievement-list :menuId="menuId"></platform-achievement-list>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
  import list from './list.vue';
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
