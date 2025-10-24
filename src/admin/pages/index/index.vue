<template>
  <div class="page">
    <div class="page-top">
      <div class="fl">
        <h4 class="title">{{$route.meta.title}}</h4>
      </div>
      <div class="fr">
        <div class="password fl" @click="password">修改密码</div>
        <div class="logout fl" @click="logout">退出</div>
      </div>
    </div>
    <div class="page-left">
      <div class="logo"></div>
      <div class="nav">
        <ul>
          <li v-for="item in childLink">
            <!--,query:{menuId:item.menuId}-->
            <router-link :to="{name:item.name}">{{item.meta.title}}</router-link>
          </li>
          <!--<li>-->
          <!--<router-link to="/home">首页</router-link>-->
          <!--</li>-->
          <!--<li>-->
          <!--<router-link to="/about">关于我们</router-link>-->
          <!--</li>-->
          <!--<li>-->
          <!--<router-link to="/advantage">核心优势领域</router-link>-->
          <!--</li>-->
          <!--<li>-->
          <!--<router-link to="/business">业务模块</router-link>-->
          <!--</li>-->
          <!--<li>-->
          <!--<router-link to="/product">产品栏目</router-link>-->
          <!--</li>-->
        </ul>
      </div>
    </div>
    <div class="page-center">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  import index from './index.js';
  export default index;
</script>
<style lang="less" scoped>
  @import 'index.less';
</style>
