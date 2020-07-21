<template>
  <div class="detailBox">
    <div class="headBox">
      <span class="back" @click="$router.push('/')">返回</span>
      <img :src="image" alt />
      <div class="info">
        <h3>{{title}}</h3>
        <span>{{ section }}</span>
      </div>
    </div>
    <div class="content" v-html="body"></div>
  </div>
</template>
<script>
import { watch, toRefs,ref,reactive } from "vue";
import API from "../api";
export default {
  setup() {
    let id = ref(0);
    let state = reactive({
      image: '',
      body: '',
      title: '',
      section: ''
    });
    watch(id, async () => {
      let { image, body, title,section } = await API.zhihu.API_DETAIL(id.value)
      state.image = image
      state.body = body
      state.title = title,
      state.section = section? section.name : '佚名'
    });
    return {
      id,
      ...toRefs(state)
    }
  },
  beforeMount(){
    let { id } = this.$route.params
    this.id = id
    
  }
};
</script>
<style lang="less" scoped>
.detailBox {
  .headBox {
    position: relative;
    height: 7.5rem;
    overflow: hidden;
    .back{
      position: absolute;
      left: .3rem;
      top: .3rem;
      color: #fff;
    }
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