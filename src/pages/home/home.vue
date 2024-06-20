<!-- 使用 type="home" 属性设置首页，其他页面不需要设置，默认为page；推荐使用json5，更强大，且允许注释 -->
<route lang="json5" type="home">
{
  style: {
    navigationStyle: 'custom',
    navigationBarTitleText: '首页',
  },
}
</route>
<template>
  <view>
    <!-- 顶部内容 -->
    <view class="h-410rpx bg-[#FFDAA1] top relative">
      <view :style="style" class="u-page__tag-item m-l-60rpx">
        <up-search
          v-model="value"
          :show-action="false"
          height="60rpx"
          bgColor="#F3F3F3"
          placeholder="搜索您感兴趣的吧"
        ></up-search>
      </view>
      <view class="absolute top-214rpx w-full flex justify-center">
        <up-swiper
          :list="bannerList"
          indicator
          indicatorMode="dot"
          height="306rpx"
          radius="20rpx"
          class="w-630rpx"
        ></up-swiper>
      </view>
    </view>

    <!-- 主体 -->
    <view class="m-t-146rpx m-x-60rpx">
      <view class="flex justify-between items-center">
        <view v-for="item in categoryList" :key="item.name">
          <view class="flex flex-col justify-center">
            <up-image :src="item.imageUrl" height="70rpx" width="70rpx" class="m-b-8rpx" />
            <text>{{ item.name }}</text>
          </view>
        </view>
      </view>
      <view class="m-t-46rpx flex justify-between items-center">
        <text class="tuijian">为你推荐</text>
        <up-image
          src="/static/images/common/to-right@2x.png"
          height="32rpx"
          width="32rpx"
          mode="widthFix"
        />
      </view>

      <view class="m-t-38rpx">
        <list-item />
        <!-- <z-paging ref="paging" v-model="dataPage" @query="queryList">
          <view class="item" v-for="(item, index) in dataPage" :key="index">
            <view class="item-title">{{ item.title }}</view>
          </view>
        </z-paging> -->
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup name="Home">
const { height, top } = uni.getMenuButtonBoundingClientRect()

const style = reactive({
  paddingTop: top + 'px',
  height: height + 'px',
})

const inputStyle = reactive({
  width: '422rpx',
  height: '60rpx',
  background: ' #F3F3F3',
  borderRadius: '44rpx 44rpx 44rpx 44rpx',
})

const value = ref()

// 首页轮播
const bannerList = ref([
  'https://cdn.uviewui.com/uview/swiper/swiper3.png',
  'https://cdn.uviewui.com/uview/swiper/swiper2.png',
  'https://cdn.uviewui.com/uview/swiper/swiper1.png',
])

// 分类
const categoryList = ref([
  { imageUrl: '/static/images/variant/beixun@2x.png', name: '护理' },
  { imageUrl: '/static/images/variant/beixun@2x.png', name: '备孕' },
  { imageUrl: '/static/images/variant/beixun@2x.png', name: '备孕' },
  { imageUrl: '/static/images/variant/beixun@2x.png', name: '备孕' },
  { imageUrl: '/static/images/variant/beixun@2x.png', name: '备孕' },
])

// 列表分页数据
const dataPage = ref([])
function queryList(pageNo, pageSize) {
  // this.$request
  //   .queryList({ pageNo, pageSize })
  //   .then((res) => {
  //     // 请勿在网络请求回调中给dataList赋值！！只需要调用complete就可以了
  //     this.$refs.paging.complete(res.data.list)
  //   })
  //   .catch((res) => {
  //     // 在底层的网络请求抛出异常时，写uni.$emit('z-paging-error-emit');即可
  //     this.$refs.paging.complete(false)
  //   })
}
</script>

<style lang="scss">
.top {
  border-radius: 0rpx 0rpx 50rpx 50rpx;
}
.u-page__tag-item {
  width: 422rpx;
}

.tuijian {
  height: 32rpx;
  font-size: 32rpx;
  font-weight: 500;
  line-height: 38rpx;
  color: #333333;
}
</style>
