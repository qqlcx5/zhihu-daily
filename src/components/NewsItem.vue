<template>
  <div>
    <div v-for="item in news.stories" :key="item">
      <router-link :to="{path:`/detail/${item.id}`}" class="newsItem">
        <div class="con">
          <h4>{{item.title}}</h4>
          <span>{{item.hint}}</span>
        </div>
        <div class="pic">
          <img :src="item.images[0]" alt />
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  props: ["news"],
};
</script>
<style lang="less">
.newsItem {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.3rem 0;
  .con {
    margin-right: 0.3rem;
    color: #000;

    h4 {
      font-size: 0.32rem;
      font-weight: normal;
      line-height: 0.5rem;
      overflow: hidden;
    }

    span {
      display: block;
      color: #999;
      line-height: 0.5rem;
    }
  }
  .pic {
    width: 1.8rem;
    height: 1.5rem;
    background: #eee;
    img {
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 0.1rem;
    }
  }
}
</style>