<template>
  <div id="home">
    <van-nav-bar title="黑马头条" fixed />
    <div class="container">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh" :disabled="finished">
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
          <ArticleInfo v-for="item in artlist" :key="item.id" :artlist="item" />
        </van-list>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>
import { initArticleList } from '@/network/home.js'
import ArticleInfo from '@/components/article/ArticleInfo.vue'
export default {
  components: { ArticleInfo },
  name: 'Home',
  data() {
    return {
      page: 1,
      limit: 10,
      artlist: [],
      // true 不触发load事件
      loading: true,
      finished: false,
      isLoading: false
    }
  },
  created() {
    this.initArticleList()
  },
  methods: {
    async initArticleList(isRefresh) {
      const res = await initArticleList(this.page, this.limit)

      if (isRefresh) {
        this.artlist = [...res, ...this.artlist]
        this.isLoading = false
      } else {
        this.artlist = [...this.artlist, ...res]
        this.loading = false
      }

      if (res.length === 0) {
        this.finished = true
      }

      // initArticleList() {
      //   initArticleList(this.page, this.limit).then(res => {
      //     console.log(res)
      //   })
      // }
    },
    onLoad() {
      console.log(11)
      // 1.让页面值+1
      this.page++
      // 2.重新请求接口获取数据
      this.initArticleList()
    },
    onRefresh() {
      console.log(22)
      // 1.让页面值+1
      this.page++
      // 2.重新请求接口获取数据
      this.initArticleList(true)
    }
  }
}
</script>

<style lang="less" scoped>
.van-nav-bar {
  background: #007bff;
}
/deep/.van-nav-bar__title {
  color: #fff;
}
.container {
  padding-top: 46px;
  padding-bottom: 50px;
}
</style>
