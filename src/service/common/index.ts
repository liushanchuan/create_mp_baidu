import { http } from '@/utils/http'

import {
  EditProfileData,
  GetSmsCodeParams,
  MobileLoginParams,
  BaiduMiniProgramLoginRequest,
  SiteLogoResult,
} from './types'

/**
 *  编辑资料
 **/
export const updateProfileApi = (data: EditProfileData) => {
  return http.post('/user/profile', data)
}

/**
 *  获取短信验证码
 **/
export const getSmsApi = (data: GetSmsCodeParams) => {
  return http.post('/send/sms', data)
}

/**
 *  手机登录
 **/
export const mobileloginApi = (data: MobileLoginParams) => {
  return http.post('/send/mobilelogin', data)
}

/**
 *  退出登录
 **/
export const logoutApi = () => {
  return http.post('/user/logout')
}

/**
 *  获取会员个人信息
 **/
export const getUserDetail = () => {
  return http.get('/user/getUserDetail')
}

/**
 *  图片上传
 **/
export const upload = (data) => {
  return http.post('/common/upload', data)
}

/**
    百度小程序登录
  **/
export const BaiduloginApi = (data: BaiduMiniProgramLoginRequest) => {
  return http.post('/Baidu/login', data)
}

/**
    获取站点LOGO
  **/
export const getSiteLogoApi = (data: SiteLogoResult) => {
  return http.post('/Baidu/login', data)
}
