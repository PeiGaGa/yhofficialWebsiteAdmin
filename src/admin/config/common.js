/**
 * Created by c-zouzhongxing1 on 2019/1/24. 
 */
export default{
//  https://blog.csdn.net/qq_35170213/article/details/80868154 Js 递归遍历Json所有的key 和 value
  // 遍历解析Json
  parseJson: function (jsonObj) {
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
  getRouterNodeByName(routerNode, name){
    let _this = this;
    //console.log(name);
    for (let i = 0; i < routerNode.length; i++) {
      if (routerNode[i].name == name) {
        return routerNode[i].children;
      }
      //如果没有找到
      else {
        if (routerNode[i].hasOwnProperty('children')) {
          _this.getRouterNodeByName(routerNode[i].children, name);
        }
      }
    }
  },
  getRouteNodeByName2: function (jsonObj, name) {
    let _this = this;
    // 循环所有项
    for (var element of jsonObj.children) {
      // //console.log(element);
      if (element.name == name) {
        return element.children;
      }
      else {
        //console.log(element);
        if (element.hasOwnProperty('children')) {
          _this.getRouteNodeByName(element.children);
        }
      }
    }
  }
}
