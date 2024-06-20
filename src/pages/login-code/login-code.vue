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
  <view
    class="login-code px-60rpx h-full flex flex-col"
    :style="{ paddingTop: safeAreaInsets?.top + 'px' }"
  >
    <text class="m-t-264rpx title">欢迎来到母婴</text>
    <text class="m-t-116rpx title1">验证码登陆</text>

    <view class="m-t-54rpx space-y-40rpx">
      <view class="item flex justify-between items-center p-l-36rpx">
        <up-input
          placeholder="手机号"
          border="none"
          v-model="phone"
          @change="phoneChange"
          fontSize="32rpx"
        ></up-input>
      </view>
      <view class="item flex justify-between items-center p-l-36rpx p-r-38rpx">
        <up-input
          placeholder="验证码"
          border="none"
          fontSize="32rpx"
          v-model="code"
          @change="codeChange"
        />
        <view class="u-demo-block__content">
          <up-code
            ref="uCodeRef"
            @change="codeChange1"
            keep-running
            start-text="发送验证码"
          ></up-code>
          <text @tap="getCode2" :text="tips" class="getCode">{{ tips }}</text>
        </view>
      </view>
      <view class="m-b-68rpx flex items-start">
        <u-checkbox-group v-model="checkboxValue" placement="column" class="m-r-14rpx m-t-4rpx">
          <u-checkbox size="24rpx" shape="circle"></u-checkbox>
        </u-checkbox-group>

        <view class="flex justify-between items-center w-full">
          <text class="footer">
            我已阅读
            <text class="text-#42ADFF p-r-6rpx">用户协议</text>
            和
            <text class="text-#42ADFF">隐私政策</text>
          </text>

          <text class="noCode">接收不到验证码</text>
        </view>
      </view>

      <up-button
        :customStyle="{
          height: '80rpx',
          marginTop: '92rpx',
          width: '592rpx',
          background: `var(--uni-bg-primary-color)`,
          borderRadius: '170rpx 170rpx 170rpx 170rpx',
          boxShadow: '0rpx 20rpx 60rpx 0rpx rgba(255, 188, 88, 0.2)',
        }"
      >
        <text class="phone-login-text">立即登录</text>
      </up-button>
    </view>
  </view>
</template>

<script lang="ts" setup name="LoginCode">
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()

const checkboxValue = ref()

const phone = ref('')

const phoneChange = (e) => {
  console.log('change', e)
}

// 验证码逻辑
const uCodeRef = ref()
const code = ref()

const codeChange = (e) => {
  console.log('change', e)
}

const tips = ref()
function codeChange1(text) {
  tips.value = text
}

function getCode2() {
  if (uCodeRef.value?.canGetCode) {
    // 模拟向后端请求验证码
    uni.showLoading({
      title: '正在获取验证码',
    })
    setTimeout(() => {
      uni.hideLoading()
      // 这里此提示会被this.start()方法中的提示覆盖
      // uni.$u.stoast('验证码已发送')
      // 通知验证码组件内部开始倒计时
      uCodeRef.value.start()
    }, 2000)
  } else {
    // uni.$u.toast('倒计时结束后再发送')
  }
}
</script>

<style lang="scss" scoped>
//

.login-code {
  background: linear-gradient(180deg, rgba(255, 210, 178, 0.85) 0%, rgba(255, 231, 194, 0) 100%);
}

.title {
  height: 68rpx;
  font-size: 48rpx;
  font-weight: 600;
  line-height: 56rpx;
  color: #333333;
}
.title1 {
  position: relative;
  height: 56rpx;
  font-size: 40rpx;
  font-weight: 500;
  line-height: 47rpx;
  color: #333333;

  &::after {
    left: 32rpx;
    z-index: -1;

    width: 128rpx;
    height: 20rpx;

    content: '';
    background: $uni-bg-primary-color;
    border-radius: 66rpx 66rpx 66rpx 66rpx;
  }
}

.item {
  height: 108rpx;
  background: #ffffff;
  border-radius: 16rpx 16rpx 16rpx 16rpx;
}

.footer {
  font-size: 24rpx;
  font-weight: 600;
  line-height: 28rpx;
  color: #777777;
}

.noCode {
  height: 34rpx;
  font-size: 24rpx;
  font-weight: 400;
  color: #777777;
}

.getCode {
  height: 44rpx;
  font-size: 32rpx;
  font-weight: 500;
  line-height: 38rpx;
  color: #42adff;
}

.phone-login-text {
  font-size: 40rpx;
  font-weight: 600;
  color: #ffffff;
}
</style>
