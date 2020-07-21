import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/basic.less";
import "./assets/content.css";
import "./assets/reset.min.css";

createApp(App)
  .use(router)
  .mount("#app");
