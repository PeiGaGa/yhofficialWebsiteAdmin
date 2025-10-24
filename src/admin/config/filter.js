/**
 * Created by Administrator on 2017/11/17.
 */
export default {
    install(Vue, options){

        //设置小数位
        Vue.filter('point', function (val, num) {
            if(val){
                return parseFloat(val).toFixed(num);
            }else{
                return val;
            }
        });
    }
}