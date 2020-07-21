<template>
  <div class="home">
    <zhihu-header />
    <zhihu-banner />
  </div>
</template>

<script>
// @ is an alias to /src
import zhihuHeader from "@/components/Header.vue";
import zhihuBanner from "@/components/Banner.vue";
import { onBeforeMount,reactive } from 'vue';
import { zhihu } from '../api/index';

export default {
  name: "Home",
  components: {
    zhihuHeader,
    zhihuBanner
  },
  setup(){
    const state = reactive({
      date: new Date(),
      bannerList: [],

    })
     onBeforeMount(() => {
      const data = zhihu.API_LATEST
    });
  }
};
</script>
