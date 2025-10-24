<template>
  <div>
    <div class="page" v-show="$route.path == routerPath">
      <ul>
        <li v-for="item in childRouter">
          <!--,query:{menuId:item.menuId}-->
          <router-link :to="{ path: item.path }" append class="box">
            <h4 class="row align-center justify-center">
              {{ item.meta.linkName }}
            </h4>
            <i class="iconfont icon-edit"></i>
          </router-link>
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import index from "./index.js";
export default index;
</script>
<style lang="less" scoped>
@import "./index.less";
</style>
