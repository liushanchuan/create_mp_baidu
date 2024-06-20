<route lang="json5" type="page">
{
  style: {
    navigationBarTitleText: '',
    navigationStyle: 'custom',
  },
}
</route>

<template>
  <view class="flex content-center flex-col h-full">
    <view class="flex-1 login flex-col px-60rpx flex justify-end items-center">
      <u-image
        src="/src/static/tabbar/home@2x.png"
        width="172rpx"
        height="172rpx"
        class="m-b-72rpx"
      ></u-image>
    </view>
    <view class="flex-1 px-60rpx flex flex-col justify-between items-center">
      <view class="flex flex-col items-center">
        <up-button
          class="m-t-4rpx w-full h-80rpx login-button"
          :customStyle="{
            height: '80rpx',
            width: '592rpx',
            background: `var(--uni-bg-primary-color)`,
            borderRadius: '170rpx 170rpx 170rpx 170rpx',
            boxShadow: '0rpx 20rpx 60rpx 0rpx rgba(255, 188, 88, 0.2)',
          }"
        >
          <text class="phone-login-text">手机号快捷登录</text>
        </up-button>

        <text class="m-t-42rpx code-login">短信验证码登录</text>
      </view>

      <view class="m-b-68rpx flex items-start">
        <u-checkbox-group v-model="checkboxValue1" placement="column" class="m-r-14rpx m-t-2rpx">
          <u-checkbox size="24rpx" shape="circle"></u-checkbox>
        </u-checkbox-group>

        <text class="footer">
          使用本机号码一键登录即代表已同意
          <text class="text-#42ADFF">《用户协议》</text>
          和
          <text class="text-#42ADFF">《用户政策》</text>
          并使用本机号码登录
        </text>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup name="Login">
//
const checkboxValue1 = ref()
</script>

<style lang="scss" scoped>
//
.login {
  background: linear-gradient(180deg, rgba(255, 210, 178, 0.85) 0%, rgba(255, 231, 194, 0) 100%);
}

.code-login {
  font-size: 32rpx;
  font-weight: 400;
  line-height: 38rpx;
  color: #333333;
}

.phone-login-text {
  font-size: 40rpx;
  font-weight: 600;
  color: #ffffff;
}

.footer {
  font-size: 24rpx;
  font-weight: 600;
  line-height: 28rpx;
  color: #777777;
}
</style>
