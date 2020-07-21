<template>
  <!-- <van-swipe :autoplay="3000">
    <van-swipe-item v-for="item in bannerData" :key="item.id" @click="handle(item.id)">
      <img :src="item.image" alt />
      <div class="info">
        <h3>{{item.title}}</h3>
        <span>{{item.hint}}</span>
      </div>
    </van-swipe-item>
  </van-swipe> -->
  <div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
</div>
</template>
<script>
export default {
  props: ["bannerData"],
  methods: {
    handle(id) {
      this.$router.push(`/detail/${id}`);
    }
  }
};
</script>
<style lang="less" scoped>
.swiper-container {
  height: 6rem;
  overflow: hidden;
  background: #eee;

  .swiper-slide {
    position: relative;

    img {
      display: block;
      width: 100%;
    }

    .info {
      box-sizing: border-box;
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 10;
      padding: 0.2rem;
      width: 100%;
      color: #fff;
      background: linear-gradient(
        0,
        rgba(55, 86, 103, 0.5),
        rgba(55, 86, 103, 0)
      );

      h3 {
        font-size: 0.36rem;
        line-height: 0.6rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }

      span {
        font-size: 0.28rem;
        line-height: 0.6rem;
      }
    }
  }
}
</style>