/**
 * 编辑资料接口
 */
export interface EditProfileData {
  /**
   * 昵称
   */
  nickname: string

  /**
   * 头像路径
   * 示例值：'/assets/img/avatar.png'
   */
  avatar: string
}

/**
 * 事件类型枚举
 */
export enum EventType {
  /**
   * 手机号登录
   */
  Login = 'login',

  /**
   * 注册
   */
  Register = 'register',

  /**
   * 重置密码
   */
  ResetPwd = 'resetpwd',

  /**
   * 修改手机号
   */
  ChangeMobile = 'changemobile',
}

/**
 * 获取短信验证码接口参数
 */
export interface GetSmsCodeParams {
  /**
   * 手机号
   * 示例值: '17705575715'
   */
  mobile: string

  /**
   * 事件类型
   * 可选，默认可不传，或从EventType中选择
   */
  event?: EventType
}

/**
 * 是否阅读协议的类型别名
 */
export type ReadingProtocolStatus = 0 | 1

/**
 * 手机登录接口参数
 */
export interface MobileLoginParams {
  /**
   * 手机号
   */
  mobile: string

  /**
   * 验证码
   */
  captcha: string

  /**
   * 是否阅读协议
   * 0: 否, 1: 是
   */
  is_reading_protocol: ReadingProtocolStatus
}

/**
 * 百度小程序登录的数据结构接口
 */
export interface BaiduMiniProgramLoginRequest {
  /**
   * 百度头像URL
   */
  avatar?: string

  /**
   * Authorization Code
   * 若包含 '@' 符号，需按特殊流程处理
   */
  code?: string

  /**
   * 性别
   */
  gender?: string

  /**
   * 昵称
   */
  nickname?: string
}

export interface SiteLogoResult {
  id: number
  logo_image: string
}
