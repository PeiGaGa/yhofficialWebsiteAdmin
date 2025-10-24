<template>
    <div class="page overflow-y">
       <ul>
           <li>
               <router-link to="/job/basic" class="box">
                   <h4 class="row align-center justify-center">基础资料</h4>
                   <i class="iconfont icon-edit"></i>
               </router-link>
           </li>
           <li>
               <router-link to="/job/basic/1" class="box">
                   <h4 class="row align-center justify-center">社会招聘设置</h4>
                   <i class="iconfont icon-edit"></i>
               </router-link>
           </li>
           <li>
               <router-link to="/job/basic/2" class="box">
                   <h4 class="row align-center justify-center">校园招聘设置</h4>
                   <i class="iconfont icon-edit"></i>
               </router-link>
           </li>
           <li>
               <router-link to="/job/address" class="box">
                   <h4 class="row align-center justify-center">工作地点</h4>
                   <i class="iconfont icon-edit"></i>
               </router-link>
           </li>
           <li>
               <router-link to="/job/department" class="box">
                   <h4 class="row align-center justify-center">部门</h4>
                   <i class="iconfont icon-edit"></i>
               </router-link>
           </li>
           <li>
               <router-link to="/job/org" class="box">
                   <h4 class="row align-center justify-center">所属机构</h4>
                   <i class="iconfont icon-edit"></i>
               </router-link>
           </li>
           <li>
               <router-link to="/job/category" class="box">
                   <h4 class="row align-center justify-center">职位类别</h4>
                   <i class="iconfont icon-edit"></i>
               </router-link>
           </li>
           <li>
               <router-link to="/job/list" class="box">
                   <h4 class="row align-center justify-center">招聘列表</h4>
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
    @import './index.less';
</style>