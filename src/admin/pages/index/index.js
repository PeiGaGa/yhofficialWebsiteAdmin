/**
 * Created by Administrator on 2017/11/17.
 */
import password from './password';
import md5 from '../../js/lib/md5/md5.min';
export default {
  name: 'index',
  data() {
    return {
      childLink: {}
    }
  },
  // beforeRouteEnter(to, from, next) {
  //   next();
  // },
  created(){
    this.$loader.hide();
    this.childLink = (this.$router.options.routes[0].children);
    if (this.$route.path == '/') {
      this.$router.push('/home');
    }
    // //console.log('topLink:'+this.$route.matched)
    // //console.log(this.$router.options)
    // //console.log(this.$common.getRouteNodeByName(this.$router.options.routes, 'index'));
  },
  methods: {
    password(){
      let instance = new password();
      this.$showBox({
        title: '修改密码',
        width: 400,
        content: '<div id="password-edit"></div>',
        onOpen: (self) => {
          self.$el.querySelector('#password-edit').appendChild(instance.$el);
        },
        onOk: (self) => {
          this.savePassword(instance.form, () => {
            self.visible = false;
          });
        }
      });
    },
    savePassword(form, callback){
      this.$loader.show();
      this.$ajax({
        type: 'post',
        url: this.$baseUrl + '/admin/updatePassword',
        data: {
          password: md5(form.password),
          newPassword: md5(form.newPassword),
          time: new Date().getTime()
        },
        success: (res) => {
          callback();
        },
      });
    },
    logout(){
      this.$ajax({
        type: 'post',
        url: this.$baseUrl + '/admin/logout',
        data: {
          time: new Date().getTime()
        },
        success: (res) => {
          location.href = '/admin/login';
        }
      });
    },
    parseJson(jsonObj) {
      let _this = this;
      // 循环所有键
      for (var key in jsonObj) {
        //如果对象类型为object类型且数组长度大于0 或者 是对象 ，继续递归解析
        var element = jsonObj[key];
        if (element.length > 0 && typeof(element) == "object" || typeof(element) == "object") {
          _this.parseJson(element);
        } else { //不是对象或数组、直接输出
          //console.log("----elements -->  " + key + ":" + element + " ");
        }
      }
    },
    parseJson(jsonObj) {
      let _this = this;
      // 循环所有键
      for (var key in jsonObj) {
        //如果对象类型为object类型且数组长度大于0 或者 是对象 ，继续递归解析
        var element = jsonObj[key];
        if (element.length > 0 && typeof(element) == "object" || typeof(element) == "object") {
          _this.parseJson(element);
        } else { //不是对象或数组、直接输出
          //console.log("----elements -->  " + key + ":" + element + " ");
        }
      }
    }
  }
}
