<template>
  <div class="home">
    <zhihu-header :month="month" :day="day" />
    <zhihu-banner :bannerData="bannerData" />
    <div class="news" v-for="item in newsData" :key="item.date">
      <zhihu-newsItem :news="item" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import zhihuHeader from "@/components/Header.vue";
import zhihuBanner from "@/components/Banner.vue";
import zhihuNewsItem from "@/components/NewsItem.vue";
import { onBeforeMount, reactive, toRefs, computed, watch } from "vue";
import API from "../api";
import utils from "../utils";

export default {
  name: "Home",
  components: {
    zhihuHeader,
    zhihuBanner,
    zhihuNewsItem
  },
  setup() {
    const state = reactive({
      date: new Date(),
      bannerData: [],
      newsData: []
    });
    let day = computed(() => utils.formatTime(state.date)[2]);
    let month = computed(() => utils.formatTime(state.date)[1]);

    onBeforeMount(async () => {
      const { date, stories, top_stories } = await API.zhihu.API_LATEST();
      state.date = utils.convertTime(date);
      state.newsData.push({
        date: state.date,
        stories
      });
      state.bannerData = top_stories;
    });
    return {
      ...toRefs(state),
      day,
      month
    };
  }
};
</script>
<style lang="less" scoped>
  .news{
    padding: 0.36rem;
    box-sizing: border-box;
  }
</style>
