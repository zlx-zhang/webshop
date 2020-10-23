import {request} from './request'

// 密码登陆请求
export function apiLogin (data) {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}
// 注册
export function apiRegister (data) {
  return request({
    url: '/register',
    method: 'post',
    data
  })
}
// 判断账号是否可用
export function isPhone (phone) {
  return request({
    url: '/isphone',
    method: 'get',
    params: {
      phone
    }
  })
}

//发布商品
export function apiUpgoods (data) {
  return request({
    url:'/upgoods',
    method: 'post',
    data
  })
}
//查询商品
export function apiGetGoods () {
  return request({
    url:'/goods',
    method: 'get',
  })
}

// 修改用户信息请求
export function userInfoEdit (data,phone) {
  return request({
    url: '/userInfoEdit',
    method: 'post',
    data:{
      data,
      phone
    }
  },'instance')
}

//获取用户基本信息
export function apiGetUserInfo () {
  return request({
    url: '/apiGetUserInfo',
    method: 'get',
  },'instance')
}

