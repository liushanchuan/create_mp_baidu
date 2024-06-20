<route lang="json5" type="home">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '',
    navigationStyle: 'custom',
  },
}
</route>

<template>
  <view class="">
    <!-- 用户信息 -->
    <view class="h-306rpx bg-#FFFFFF flex items-end">
      <view class="p-l-60rpx p-b-40rpx">
        <view class="flex items-center">
          <!-- 头像 -->
          <u-image
            src="/src/static/tabbar/home@2x.png"
            shape="circle"
            height="108rpx"
            width="108rpx"
          ></u-image>
          <!-- 姓名 -->

          <text class="m-l-20rpx text">抓不住的欢喜</text>
        </view>
      </view>
    </view>

    <view class="m-t-40rpx m-x-60rpx">
      <!-- 基础资料 -->
      <view></view>

      <!-- 关于 -->
      <view class="m-t-40rpx item">
        <view>123</view>
        <up-image
          src="/static/images/common/to-right@2x.png"
          height="32rpx"
          width="32rpx"
          mode="widthFix"
        />
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
//
</script>

<style lang="scss" scoped>
//
.text {
  height: 44rpx;
  font-size: 32rpx;
  font-weight: 500;
  line-height: 38rpx;
  color: #333333;
}

.item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 84rpx;
  padding-right: 42rpx;
  padding-left: 36rpx;
  background: #ffffff;
  border-radius: 12rpx 12rpx 12rpx 12rpx;
}
</style>
