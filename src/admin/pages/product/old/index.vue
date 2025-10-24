<template>
    <div class="page">
       <ul>
           <li>
               <router-link to="/product/basic" class="box">
                   <h4 class="row align-center justify-center">基础资料</h4>
                   <i class="iconfont icon-edit"></i>
               </router-link>
           </li>
           <li>
               <router-link to="/product/menu" class="box">
                   <h4 class="row align-center justify-center">栏目分类</h4>
                   <i class="iconfont icon-edit"></i>
               </router-link>
           </li>
           <li>
               <router-link to="/product/list" class="box">
                   <h4 class="row align-center justify-center">产品列表</h4>
                   <i class="iconfont icon-edit"></i>
               </router-link>
           </li>
       </ul>
    </div>
</template>
<script>
    import index from './index.js';
    export default index;
</script>
<style lang="less" scoped>
    @import 'index.less';
</style>
