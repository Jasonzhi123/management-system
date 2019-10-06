import JsonP from 'jsonp';
import { Modal } from 'antd';
import axios from './axios'

export const apiGetway = {
  oa: 'oa', // oa业务接口
  workflow: 'workflow', // 流程api
  portal: 'portal', // 平台api
  console: 'console' // 平台api
}
export default class Axios {

  static jsonp(options) {
    return new Promise((resolve, reject) => {
      JsonP(options.url, {
        param: 'callback'
      }, function (err, response) {
        if (response.status === 'success') {
          resolve(response)
        } else {
          reject(response.message)
        }
      })
    });
  }

  static ajax(options) {
    let loading;
    if (options.data && options.data.isShowLoading !== false) {
      loading = document.getElementById('ajaxLoading');
      loading.style.display = 'block';
    }
    return new Promise((resolve, reject) => {
      axios.get(options.url, {
        params: (options.data && options.data.params) || ''
      }).then(response => {
        if (options.data && options.data.isShowLoading !== false) {
          loading = document.getElementById('ajaxLoading');
          loading.style.display = 'none';
        }

        if (response && response.status === 200) {
          let res = response;
          if (res.code === '0') {
            resolve(res);
          } else {
            Modal.info({
              title: "提示",
              content: res.msg
            })
          }
        } else {
          // reject(response.data);
          Modal.info({
            title: "提示",
            content: '网络出错'
          })
        }
        // resolve(response)
      }, err => {
        reject(err)
      }).catch((error) => {
        reject(error)
      })

    })
  }

  static fetch(getway, action, get, params) {
    if (getway) {
      action = `${apiGetway[getway]}${action}`
    }
    return new Promise((resolve, reject) => {
      if (get === 'get') {
        axios.get(action).then(response => {
          console.log('--get请求成功啦--')
          resolve(response.data)
        }, err => {
          reject(err)
        })
          .catch((error) => {
            reject(error)
          })
      } else {
        axios.post(action, params).then(response => {
          resolve(response.data)
        }, err => {
          reject(err)
        })
          .catch((error) => {
            reject(error)
          })
      }
    })
  }
};
