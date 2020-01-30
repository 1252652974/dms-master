import request from '@/utils/request'
import qs from 'qs'

export function login(data) {
  return request({
    url: '/manager/login',
    method: 'post',
    data: qs.stringify(data)
  })
}

export function getInfo(token) {
  return request({
    url: '/manager/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/manager/logout',
    method: 'post'
  })
}
