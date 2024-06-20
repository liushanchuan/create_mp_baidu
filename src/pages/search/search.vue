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
      <view class="u-page__tag-item m-l-62rpx m-t-12rpx">
        <up-search
          v-model="value"
          height="60rpx"
          bgColor="#f6f6f6"
          placeholder="搜索您感兴趣的吧"
        ></up-search>
      </view>

      <view class="flex justify-between w-full">
        <view class="w-630rpx h-60rpx flex items-center">
          <view class="flex">
            <up-image src="/static/images/common/search-icon@2x.png" height="40rpx" width="40rpx" />
            <text>|</text>
            <text>搜索您感兴趣的吧</text>
          </view>

          <!-- 右侧按钮 -->
          <up-button
            :customStyle="{
              height: '48rpx',
              width: '123rpx',
              background: `var(--uni-bg-primary-color)`,
              borderRadius: '74rpx 74rpx 74rpx 74rpx',
            }"
          >
            <text class="right-text">搜索</text>
          </up-button>
        </view>
      </view>
    </view>

    <!-- 搜索推荐 -->
    <view></view>
  </view>
</template>

<script lang="ts" setup>
//
const { height, top } = uni.getMenuButtonBoundingClientRect()

const style = reactive({
  paddingTop: top + 'px',
  height: height + 'px',
})

const value = ref()
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
</style>
