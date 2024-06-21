<route lang="json5" type="news">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '',
    navigationStyle: 'custom',
  },
}
</route>

<template>
  <view>
    <z-paging ref="paging" v-model="dataPage" @query="queryList">
      <template name="top">
        <up-navbar placeholder>
          <template #center>
            <view class="space-x-92rpx">
              <up-tabs
                :list="tabs"
                :border="false"
                :activeStyle="{
                  height: '48rpx',
                  fontSize: '34rpx',
                  fontWeight: '500',
                  lineHeight: '40rpx',
                  color: '#333333',
                }"
                lineWidth="44rpx"
                itemStyle="padding-left: 46rpx; padding-right: 46rpx; height: 42rpx;"
                :inactiveStyle="{
                  height: '42rpx',
                  fontSize: '30rpx',
                  fontWeight: '400',
                  lineHeight: '35rpx',
                  color: '#777777',
                }"
                lineColor="#FFE1B5"
                @click="click"
              ></up-tabs>
            </view>
          </template>
        </up-navbar>
      </template>

      <view class="p-x-60rpx">
        <view class="item w-304rpx flex flex-wrap" v-for="(item, index) in dataPage" :key="index">
          <up-image heigit="342rpx" width="304rpx" :src="useImagUrl(item.image)" />
          <view class="flex-1 flex justify-between items-center">
            <text>{{ item.name }}</text>
            <view class="flex">
              <up-image height="28rpx" width="28rpx" />
              <text class="m-l-2rpx title3">{{ item.like }}</text>
            </view>
          </view>
        </view>
      </view>
    </z-paging>
  </view>
</template>

<script lang="ts" setup>
import { useImagUrl } from '@/hooks/useImagUrl'
import { getList } from '@/service/page/index'
// import { ContentType } from '@/service/page/types'

const paging = ref(null)

const tabs = reactive([{ name: '推荐' }, { name: '热榜' }])

// 定义方法
function click(item) {
  console.log('item', item)
}

// 当前分类
const tag = ref('')
const data = ref([])
// 列表分页数据
const dataPage = ref([])

async function queryList(page?: number, limit?: number, payload?: Record<string, any>) {
  getList({ page, limit, ...payload })
    .then((res) => {
      paging.value.complete(res.data)
    })
    .catch((res) => {
      paging.value.complete(false)
    })
}
</script>

<style lang="scss" scoped>
//

.title {
  height: 42rpx;
  font-size: 30rpx;
  font-weight: 400;
  line-height: 35rpx;
  color: #777777;
}

.title-active {
  height: 48rpx;
  font-size: 34rpx;
  font-weight: 500;
  line-height: 40rpx;
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
  line-height: 28rpx;
  color: #333333;
}
</style>
