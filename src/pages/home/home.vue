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
  <z-paging ref="paging" v-model="dataPage" @query="queryList" :auto="false">
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
          keyName="image"
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

      <view class="m-t-38rpx"></view>
    </view>

    <view class="p-x-60rpx">
      <view class="item" v-for="(item, index) in dataPage" :key="index">
        <!-- item -->

        <view class="flex justify-between items-center m-b-30rpx">
          <up-image height="180rpx" width="222rpx" :src="useImagUrl(item.image)" />
          <view class="w-372rpx h-150rpx py-14rpx flex flex-col justify-between">
            <view class="title1">{{ item.name }}</view>
            <view class="flex justify-between items-center">
              <text class="title2">13.73w人读过</text>
              <view class="flex">
                <up-image height="28rpx" width="28rpx" class="m-r-8rpx" />
                <!-- 点赞数量 -->
                <text class="m-l-2rpx title3">{{ item.like }}</text>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
  </z-paging>
</template>

<script lang="ts" setup name="Home">
import { getBanner, getList } from '@/service/page/index'
import { SlideTag } from '@/service/page/types'
import { useImagUrl } from '@/hooks/useImagUrl'

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
const bannerList = ref([])

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

const paging = ref()
async function queryList(page?: number, limit?: number, payload?: Record<string, any>) {
  getList({ page, limit, ...payload })
    .then((res) => {
      paging.value.complete(res.data)
    })
    .catch((res) => {
      paging.value.complete(false)
    })
}

async function getBannerApi() {
  const list = await getBanner({ tag: SlideTag.Index })
  bannerList.value = list as any
}

onLoad(async () => {
  // await getBannerApi()
  await queryList()
})
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

.title1 {
  height: 80rpx;
  font-size: 28rpx;
  font-weight: 500;
  line-height: 33rpx;
  color: #333333;
}
.title2 {
  height: 34rpx;
  font-size: 24rpx;
  font-weight: 400;
  line-height: 28rpx;
  color: #777777;
}
.title3 {
  height: 34rpx;
  font-size: 24rpx;
  font-style: normal;
  font-weight: 400;
  color: #333333;
}
</style>
