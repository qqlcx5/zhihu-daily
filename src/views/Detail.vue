<template>
  <div class="detailBox">
    <div class="headBox">
      <img src="https://pic1.zhimg.com/v2-e3c42ca02015342159f0f787a918bb5c_fhd.jpg" alt />
      <div class="info">
        <h3>《精灵宝可梦》中的水系口袋妖怪分淡水和咸水吗？</h3>
        <span>疯癫的A兵者 / 知乎</span>
      </div>
    </div>
    <div class="content"></div>
  </div>
</template>
<script>
import "../assets/content.css";
export default {};
</script>
<style lang="less" scoped>
.detailBox {
  .headBox {
    position: relative;
    height: 7.5rem;
    overflow: hidden;

    img {
      display: block;
      width: 100%;
      height: 100%;
    }

    .info {
      position: absolute;
      left: 0;
      bottom: 0;
      box-sizing: border-box;
      padding: 0.2rem;
      width: 100%;
      background: linear-gradient(
        0,
        rgba(55, 86, 103, 0.5),
        rgba(55, 86, 103, 0)
      );
      color: #fff;
      line-height: 0.6rem;

      h3 {
        font-size: 0.38rem;
      }

      span {
        display: block;
        font-size: 0.28rem;
        text-align: right;
      }
    }
  }
}
</style>