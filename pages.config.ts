import { defineUniPages } from '@uni-helper/vite-plugin-uni-pages'

export default defineUniPages({
  globalStyle: {
    navigationStyle: 'default',
    navigationBarBackgroundColor: '#f8f8f8',
    navigationBarTextStyle: 'black',
    backgroundColor: '#FFFFFF',
  },
  easycom: {
    autoscan: true,
    custom: {
      '^u--(.*)': 'uview-plus/components/u-$1/u-$1.vue',
      '^up-(.*)': 'uview-plus/components/u-$1/u-$1.vue',
      '^u-([^-].*)': 'uview-plus/components/u-$1/u-$1.vue',
      '^(?!z-paging-refresh|z-paging-load-more)z-paging(.*)':
        'z-paging/components/z-paging$1/z-paging$1.vue',
    },
  },
  tabBar: {
    color: '#333333',
    selectedColor: '#FFBC58',
    backgroundColor: '#FFFFFF',
    borderStyle: 'white',
    height: '98rpx',
    fontSize: '20rpx',
    iconWidth: '48rpx',
    spacing: '4rpx',
    list: [
      {
        iconPath: 'static/images/common/home@2x.png',
        selectedIconPath: 'static/images/variant/home-select@2x.png',
        pagePath: 'pages/home/home',
        text: '首页',
      },
      {
        iconPath: 'static/images/common/news@2x.png',
        selectedIconPath: 'static/images/variant/news-select@2x.png',
        pagePath: 'pages/news/news',
        text: '资讯',
      },
      {
        iconPath: 'static/images/common/my@2x.png',
        selectedIconPath: 'static/images/variant/my-select@2x.png',
        pagePath: 'pages/my/my',
        text: '我的',
      },
    ],
  },
})
