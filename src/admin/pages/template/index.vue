<template>
  <div class="page">
    <div v-if="$route.path=='/templates'">
      <ul>
        <li>
          <router-link :to="{path:'detail/1'}" append class="box">
            <h4 class="row align-center justify-center">模板一</h4>
            <i class="iconfont icon-edit"></i>
          </router-link>
        </li>
        <li>
          <router-link :to="{path:'detail/2'}" append class="box">
            <h4 class="row align-center justify-center">模板二</h4>
            <i class="iconfont icon-edit"></i>
          </router-link>
        </li>
      </ul>
      <br>
      <div style="padding-right:1rem;width:100%;clear:both" v-show="editorVisible">
        <input type="text" class="input" placeholder="请输入模板名称" :value="form.name"/>
        <plugin-editor :height="300" :html="form.content" ref="editor"></plugin-editor>
        <button @click="saveTemplate" class="btn btn-ok">保存</button>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
  import index from './index.js'
  export default index;
</script>
<style lang="less" scoped>
  @import './index.less';
</style>
