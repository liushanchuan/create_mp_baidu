import { http } from '@/utils/http'

import { CarouselItem, DetailQuery, AdItem, AgreementType, SearchListRequest } from './types'
/**
 * 轮播图
 * { 参数 flag:类型:index=首页,top=置顶,hot=热门,recommend=推荐,ad=广告,,default=默认,
 *   参数 tag:标签 index=首页
 * }
 */
export const getBanner = (query: CarouselItem) => {
  return http.get('/makeup/getBanner', { flag: 'default', ...query })
}

/**
 * 详情
 * @param {} query
 * integer
 *
 */
export const getDetails = (query: DetailQuery) => {
  return http.get('/makeup/getDetails', query)
}

/**
   搜索列表/内容列表
   **/
export const getList = (query: SearchListRequest) => {
  return http.get('/makeup/getList', query)
}

/**
 * 广告
 */
export const getAd = (query: AdItem) => {
  return http.get('/makeup/getAd', query)
}

/**
 * 分类
 */
export const getClasstype = (query) => {
  return http.get('/makeup/getClasstype', query)
}

/**
 * 收藏/取消收藏
 */
export const setUserCollect = (data: { id: number }) => {
  return http.post('/makeup/setUserCollect', data)
}

/**
 * 资讯列表
 */
export const getNews = (data: { tag: number }) => {
  return http.post('/makeup/getNews', data)
}

/**
 * 可能喜欢的内容列表
 */
export const getLikable = (query: { id: number }) => {
  return http.get('/makeup/getLikable', query)
}

/**
 * 收藏列表
 */
export const getUserCollectList = () => {
  return http.get('/makeup/getUserCollectList')
}

// /**
//  * 浏览历史列表
//  */
// export const getUserBrowseList = () => {
//   return http.get('/makeup/getUserBrowseList')
// }

/**
 * 协议详情
 */
export const getAgreement = (tag: AgreementType) => {
  return http.get(`/makeup/getAgreement?tag=${tag}`)
}

/**
 * 历史搜索
 */
export const getSearchHistory = () => {
  return http.get('/makeup/getSearchHistory')
}

/**
 * 推荐搜索
 */
export const getSearchHot = () => {
  return http.get('/makeup/getSearchHot')
}

/**
 * 删除历史搜索
 */
export const destroyUserSearch = () => {
  return http.delete('/makeup/destroyUserSearch')
}

// todo 删除
// /**
//  * 父级分类
//  */
// export const getClasstypeParent = (query) => {
//   return http.get('/makeup/getClasstypeParent', query)
// }

// /**
//  * 下级分类
//  *  pid: number
//  */
// export const getClasstypeSub = (query) => {
//   return http.get('/makeup/getClasstypeSub', query)
// }

// /**
//  * 分类下的热门菜品
//  */
// export const getPopularDishes = () => {
//   return http.get('/makeup/getPopularDishes')
// }
