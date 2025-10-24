/**
 * Created by Administrator on 2017/11/17.
 */
export default {
  name: 'index',
  data() {
    return {
      account: null,
      password: null,
      errorMsg: null
    }
  },
  beforeRouteEnter(to, from, next) {
    next();
  },
  created(){
    this.$loader.hide();
  },
  watch: {
    'account': 'change',
    'password': 'change',
  },
  methods: {
    change(){
      this.errorMsg = null;
    },
    login(){
      if (!this.account || !this.password) {
        this.errorMsg = '用户名和密码不能为空';
        return;
      }
      $.ajax({
        type: 'post',
        url: this.$baseUrl + '/admin/login',
        data: {
          account: this.account,
          password: this.password,
          time: new Date().getTime()
        },
        success: (res) => {
          if (res.success) {
            this.$store.commit('set_authorized', true);
            this.$router.replace('/');
          } else {
            this.errorMsg = res.msg;
          }
        }
      });
    }
  }
}
