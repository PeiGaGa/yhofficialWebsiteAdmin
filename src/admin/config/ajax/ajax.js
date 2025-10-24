/**
 * Created by Su on 2017/12/14.
 */
import Vue from 'vue';
import $ from 'jquery';
export default function ajax(opt) {
  $.ajax({
    type: opt.type,
    url: opt.url,
    data: opt.data,
    // dataType: opt.dataType,
    success: (res) => {
      if (res.code == -1000) {
        Vue.$showError('登录失效');
        location.href = '/admin/login';
        return;
      }
      if (!res.success) {
        Vue.$showError(res.msg || '登录失败');
        return;
      }
      opt.success && typeof opt.success == 'function' && opt.success(res);
    },
    error: (res) => {
      Vue.$showError(res.msg || '请求失败');
      opt.error && typeof opt.error == 'function' && opt.error(res);
    },
    complete: () => {
      Vue.$loader.hide();
      opt.complete && typeof opt.complete == 'function' && opt.complete();
    }
  })
}
