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
  <view class="bg-white overflow-hidden pt-4rpx border border-red">
    <up-button text="测试" type="success" />
  </view>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'Home',
})
</script>

<style></style>
