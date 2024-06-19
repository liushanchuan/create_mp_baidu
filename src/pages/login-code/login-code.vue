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
  <view class="login-code px-60rpx h-full" :style="{ paddingTop: safeAreaInsets?.top + 'px' }">
    <text>欢迎来到母婴</text>
    <text>验证码登陆</text>
  </view>
</template>

<script lang="ts" setup>
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()
</script>

<style lang="scss" scoped>
//

.login-code {
  background: linear-gradient(180deg, rgba(255, 210, 178, 0.85) 0%, rgba(255, 231, 194, 0) 100%);
}
</style>
