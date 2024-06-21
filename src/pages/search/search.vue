<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '',
    navigationStyle: 'custom',
  },
}
</route>

<template>
  <view class="serach">
    <!-- 搜索title -->
    <view class="h-264rpx bg-#FFDAA1">
      <view :style="style"></view>

      <view class="flex justify-center m-t-12rpx">
        <view class="w-630rpx h-60rpx flex justify-between items-center serarch-input">
          <view class="flex">
            <up-image
              src="/static/images/common/search-icon@2x.png"
              height="40rpx"
              width="40rpx"
              class="m-l-46rpx m-r-22rpx"
            />
            <text class="line m-r-18rpx">|</text>
            <text class="text">搜索您感兴趣的吧</text>
          </view>

          <!-- 右侧按钮 -->
          <up-button
            :customStyle="{
              height: '48rpx',
              width: '123rpx',
              background: `var(--uni-bg-primary-color)`,
              borderRadius: '74rpx 74rpx 74rpx 74rpx',
              marginRight: '46rpx',
            }"
          >
            <text class="right-text">搜索</text>
          </up-button>
        </view>
      </view>
    </view>

    <view class="m-t-22rpx h-1270rpx bg-#FFFFFF p-x-60rpx">
      <!-- 搜索历史 -->
      <view>
        <view class="flex justify-between items-center p-t-32rpx">
          <text class="title">搜索历史</text>
          <up-image src="/static/images/common/delete-icon@2x.png" height="28rpx" width="28rpx" />
        </view>

        <!-- items -->
        <veiw class="flex m-t-26rpx">
          <!-- item -->
          <view class="item m-r-24rpx" v-for="(item, index) in searchHistory" :key="index">
            <text class="p-x-34rpx p-y-4rpx item-text">{{ item.name }}</text>
          </view>
        </veiw>
      </view>

      <!-- 搜索推荐 -->
      <view>
        <view class="flex justify-between items-center">
          <text class="title m-t-92rpx">搜索推荐</text>
        </view>

        <!-- items -->
        <veiw class="flex m-t-26rpx">
          <!-- item -->
          <view class="item m-r-24rpx" v-for="(item, index) in searchHistory" :key="index">
            <viwe class="p-x-34rpx p-y-4rpx flex items-center">
              <up-image
                src="/static/images/common/hot@2x.png"
                height="24rpx"
                width="18rpx"
                class="m-r-6rpx"
              />

              <text class="item-text">{{ item.name }}</text>
            </viwe>
          </view>
        </veiw>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
//
import { getSearchHistory, getSearchHot } from '@/service/page'
const { height, top } = uni.getMenuButtonBoundingClientRect()
const style = reactive({
  paddingTop: top + 'px',
  height: height + 'px',
})

const serachValue = ref()

const searchHistory = ref()
const hotHistory = ref()
async function setSearchHistory() {
  const list = await getSearchHistory()
  searchHistory.value = list
}
async function seHotHistory() {
  const list = await getSearchHot()
  hotHistory.value = list
}

onLoad(async () => {
  searchHistory.value = [{ name: '112' }, { name: '112' }]
  hotHistory.value = [{ name: '112' }, { name: '112' }]
  // await setSearchHistory()
  // await seHotHistory()
})
</script>

<style lang="scss" scoped>
//
.u-page__tag-item {
  width: 630rpx;
  border-radius: 44rpx 44rpx 44rpx 44rpx;
}

.right-text {
  font-size: 28rpx;
  font-style: normal;
  color: #ffffff;
}

.serarch-input {
  background: #f6f6f6;
  border-radius: 44rpx 44rpx 44rpx 44rpx;
}

.line {
  width: 6rpx;
  height: 40rpx;
  font-size: 28rpx;
  font-weight: 600;
  color: #aaaaaa;
}

.text {
  font-size: 28rpx;
  font-weight: 400;
  color: #aaaaaa;
}

.title {
  height: 40rpx;
  font-size: 28rpx;
  font-style: normal;
  font-weight: 400;
  line-height: 33rpx;
  color: #333333;
}

.item {
  height: 48rpx;
  background: #f6f6f6;
  border-radius: 74rpx 74rpx 74rpx 74rpx;
}

.item-text {
  height: 40rpx;
  font-size: 28rpx;
  font-weight: 400;
  color: #333333;
}
</style>
