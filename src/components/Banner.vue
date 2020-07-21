<template>
  <div class="swiperDiv">
    <div class="swiper-container" v-if="bannerData &&bannerData.length>0">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in bannerData" :key="item.id">
          <img :src="item.image" alt />
          <div class="info">
            <h3>{{item.title}}</h3>
            <span>{{item.hint}}</span>
          </div>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/swiper.less";
import { watch } from "vue";
function initSwiper() {
  new Swiper(".swiper-container", {
    loop: true,
    pagination: {
      el: ".swiper-pagination"
    }
  });
}
export default {
  props: {
    bannerData: {
      type: Array
    }
  },
  methods: {
    handle(id) {
      this.$router.push(`/detail/${id}`);
    }
  },

  setup(props) {
    watch(
      () => props.bannerData,
      () => initSwiper()
    );
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