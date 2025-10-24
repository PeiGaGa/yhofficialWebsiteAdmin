<template>
    <div class="page column align-center justify-center">
        <form class="container" onsubmit="return false;">
            <label class="account box">
                <input type="text" class="input" placeholder="用户名" v-model="account" />
            </label>
            <label class="password box">
                <input type="password" class="input" placeholder="密码" v-model="password" />
            </label>
            <button type="submit" class="submit" @click="login">登录</button>
            <div class="msg" v-if="errorMsg">{{errorMsg}}</div>
        </form>
    </div>
</template>
<style lang="less" scoped>
    @import 'login.less';
</style>
<script>
    import index from './login.js';
    export default index;
</script>
