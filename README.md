# 基于Vue3.0开发知乎日报实战

![vue](https://cdn.jsdelivr.net/gh/qqlcx5/figure-bed@1.0/img/20200723154936.jpg)

## 项目界面

一个简单的小项目，基于`Vue3.0` + `axios` + `swiper`实现。让大家对Vue3.0 API有一些新的认识。

![zhihu](https://cdn.jsdelivr.net/gh/qqlcx5/figure-bed@1.0/img/20200723161029.jpg)

## 前言

Vue3.0个人觉得学习挺容易的，Vue2.0水平怎么样，Vue3.0也就差不多那样，所以Vue2.0学的不太好的同学还是回去补一补，现阶段急于学习Vue3.0反而容易造成知识混淆。很多写法和Vue2.0相似，学习成本不高，但是很多底层东西进行的重构，所以目前不建议直接使用在公司项目上。

## 个人建议

目前Vue3.0开发版接近尾声，预计下个月就上线稳定版，存在以下问题，不建议在公司项目直接使用，估计还的等一段时间吧。

- `"vue-router": "^4.0.0-alpha.6"` 还在开发中。这个阶段还未定型，今天解决的BUG可能明天就是另外的Bug。
- 第三方库还未兼容到Vue3.0意想不到的兼容性等问题。
- Vue3.0 API部分功能还未完善，Vue2.0和Vue3.0去实现。
- 遇到技术难点，需要花大把时间去琢磨。一些问题涉及基础的东西，底子不牢，也能难查出问题所在。

综上所述，用在公司项目上，估计得折腾得够呛，或者未能按时间开发完成，产品问题多还会被扣奖金绩效等，吃力不讨好。

但是做为先行者去学习和开发项目，收益颇丰，更加能体会Vue开发者如何去架构和设计思想所在。

## 项目实战

Vue 3.0 在兼容 2.x 基础上做改进。且能使用Vue 3.0 新特性。

### 初始化项目

1、安装 vue-cli3

```
npm install -g @vue/cli
```
2、创建项目

```js
vue create zhihu

Vue CLI v4.4.6
? Please pick a preset:
  default (babel, eslint)
> Manually select features

babel：javascript转译器，将最新版的js语法（es6、es7）转换为现阶段浏览器可以兼容的js代码
typescript：使用 TypeScript 书写源码
PWA：渐进式WEB应用
Router：使用vue-router
Vuex：使用vuex
CSS Pre-processors：css预处理器
Linter / Formatter：代码规范标准
Unit Testing：单元测试
E2E Testing：e2e测试

? Please pick a preset: Manually select features
? Check the features needed for your project:
 (*) Babel
 ( ) TypeScript
 ( ) Progressive Web App (PWA) Support
 (*) Router
 ( ) Vuex
>(*) CSS Pre-processors
 ( ) Linter / Formatter
 ( ) Unit Testing
 ( ) E2E Testing
```

3、Vue版本升级

```
vue add vue-next
// 将Vue 2.6.x版本升级到
```

查看项目`package.json`

```
  "dependencies": {
     "vue": "^3.0.0-beta.1",
     "vue-router": "^4.0.0-alpha.6"
    },
    "devDependencies": {
    "@vue/cli-plugin-babel": "~4.4.0",
    "@vue/cli-plugin-eslint": "~4.4.0",
    "@vue/cli-plugin-router": "~4.4.0",
    "@vue/cli-service": "~4.4.0",
    "@vue/compiler-sfc": "^3.0.0-beta.1",
    "@vue/eslint-config-prettier": "^6.0.0",
    "babel-eslint": "^10.1.0",
    "eslint": "^6.7.2",
    "eslint-plugin-prettier": "^3.1.3",
    "eslint-plugin-vue": "^7.0.0-alpha.0",
    "less": "^3.0.4",
    "less-loader": "^5.0.0",
    "prettier": "^1.19.1",
    "vue-cli-plugin-vue-next": "~0.1.3"
  },
```
`vue-router` 还在开发中，`vue-cli-plugin-vue-next` 用来处理Vue3.0编译相关语法。

### 静态页面

项目布局，静态页面，略过

### 项目结构

```
.
├── src
│   ├── api
│   ├── assets
│   ├── components
│   ├── router
│   ├── utils
│   ├── views
│   ├── App.vue
│   └── main.js
├── public
├── vue.config.js
└── package.json
```

- `src/api`: 用于存放接口和管理。
- `src/assets`: 静态资源目录。
- `src/components`: 用于存放全局组件。
- `src/router`: 用于存放路由相关的文件。
- `src/utils`: 用于存放工具类相关的文件
- `src/views`: 用于存放视图相关组件。

### 项目 Vue3.0 API 知识点

#### setup

`setup` 函数是一个新的组件选项。作为在组件内使用 Composition API 的入口点。

**生命周期**

创建组件实例，然后初始化 props ，紧接着就调用setup 函数。从生命周期钩子的视角来看，它会在 beforeCreate 钩子之前被调用。

注意事项：

`this` 不能使用，了解Vue2.0的同学应该知道，在这生命周期之间。`data()`数据还未生成，所以 `this.xx`不能调用的。

#### 响应式数据

Vue2.0 存放在`data() {return {} }` 就可以直接调用，而Vue3.0则需要通过`ref`或者`reactive` 来声明响应式数据。

**ref**

接受一个参数值并返回一个响应式且可改变的 ref 对象。ref 对象拥有一个指向内部值的单一属性 .value。

```
const count = ref(0)
console.log(count.value) // 0

count.value++
console.log(count.value) // 1
```

如果传入 ref 的是一个对象，将调用 reactive 方法进行深层响应转换。

**reactive**

接收一个普通对象然后返回该普通对象的响应式代理。

```
const obj = reactive({ count: 0 })
```
#### 计算属性 `computed`

`computed` 传入一个 getter 函数，返回一个默认不可手动修改的 ref 对象。

```
const count = ref(1)
const plusOne = computed(() => count.value + 1)

console.log(plusOne.value) // 2
```

#### watch

watch 需要侦听特定的数据源，并在回调函数中执行副作用。

```
const count = ref(0)
watch(count, (count, prevCount) => {
  /* ... */
})
```

以上教程皆来自 [Vue 组合式 API](https://composition-api.vuejs.org/zh/api.html#setup)

## 实战
项目如果太抠细节的去讲，不知道从何说起，以下主要分为几个功能阐述这个项目。想了解项目更多细节，可以克隆我的项目，运行调试。

### 时间处理

`src/utils/index.js`

```
function formatTime(time) {
  let arr = [];
  time = time.toLocaleDateString();
  time.replace(/\d+/g, (val) => {
    val = val < 2 ? `0${val}` : val;
    arr.push(val);
  });
  return arr;
}
function convertTime(time) {
  time = time.replace(/^(\d{4})(\d{2})(\d{2})$/g,(_,g1,g2,g3)=>{
    return `${g1}/${g2}/${g3}`
  })
  return new Date(time);
}

export default {
  formatTime,
  convertTime,
};
```
`formatTime()`中的参数`time`为`new Date()`的标准日期格式，然后通过`toLocaleDateString()`转成`2020/7/21`，在依次添加到数组里面。

```
在不同环境下，输出不同结果。`toLocaleDateString`
 // 浏览器
["2020", "7", "21"]

// [Running] node
[ '7', '21', '2020']
```

`convertTime`方法：将格式`20200721`转成`2020/07/21`的正则表达式。

**应用**

```
import utils from "../utils";

const state = reactive({
  date: new Date(),
  bannerData: [],
  newsData: []
});

let day = computed(() => utils.formatTime(state.date)[2]);
let month = computed(() => utils.formatTime(state.date)[1]);
    
return {
 day,
 month
};
```
通过计算属性，计算出几月份和几日。写法不像Vue2.0直接包裹在`computed`里面。

### 请求接口

`src/api/`目录下的`axios.js` 对`axios`进行二次封装，`zhihu.js`相关的知乎日报接口。
`index.js`对多个接口进行整合。

```js
// zhihu.js
import axios from './axios'

function API_LATEST(){
  return axios.get('/news/latest')
}
function API_DETAIL(id){
  return axios.get(`/news/${id}`)
}

export default {
  API_LATEST,
  API_DETAIL
}

// index.js
import zhihu from './zhihu'
export default { zhihu }
```

**应用**

```js
import API from "../api";

export default {
  setup() {
    const state = reactive({
      bannerData: [],
      newsData: []
    });
     // 在渲染组件前，异步加载数据
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
      ...toRefs(state)
    };
  }
```

### 初始化轮播图

```js
import { watch } from "vue";
function initSwiper() {
  new Swiper(".swiper-container", {
    loop: true,
    pagination: {
      el: ".swiper-pagination"
    }
  });
}
setup(props) {
 watch(
   () => props.bannerData,
   () => initSwiper()
 );
}
```

注意点：当获取轮播图的数据赋值到`state`上，此时数据还未渲染到组件上。

解决方法：

- `Vue2.0`调用Vue.nextTick API（在下次 DOM 更新循环结束之后执行延迟回调。）去执行初始化。
- `Vue3.0` 通过`watch` 去监听数据改变，在执行初始化。

### 详情页的功能

点击列表详情页时候，需要携带一个文章的ID过去，去请求详情接口获取更多内容。
如果我上面说的`setup()`方法有印象的话，在`setup()`中不能调用`this`。
习惯了`Vue2.0`跳转方式`this.$router.push({name: 'detail',params:{id: xx}})`
Vue3.0突然不知如何下手，好在Vue2.0还提供组件式跳转。

```
<router-link :to="{path:`/detail/${item.id}`}" </router-link>
```

**获取路由的参数**

Vue3.0路由还在开发中，暂时还未能获取路由的参数API，只能先用Vue2.0写法先代替了。

难点：如何在Vue2.0中修改Vue3.0的值，且还能被`watch`监听到。

解决方法：

直接用Vue2.0中实现功能。（嗯，我这是Vue3.0教程当然得用Vue3.0去实现咯）

我在Vue3.0中，我先声明了响应式数据，通过Vue2.0获取路由参数后，尝试`this.id = xx`  打印下`log`，输出this对象如下，功能实现了。

![-w388](https://cdn.jsdelivr.net/gh/qqlcx5/figure-bed@1.0/img/20200723154931.jpg)

然而`reactive`的方式去声明响应式数据，其他不变，发现并能查到`id`。深入之后了解到`ref`和Vue2.0的`data( return {} )`底层原理都是基于`Object.definedproperty`实现，所以可以通过this去修改。`reactive`则式`Prxoy`实现的。还有ref中包裹是个对象话，也会通过`Prxoy`实现。

```js
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
```

## 完整的项目

[知乎日报](https://github.com/qqlcx5/zhihu)

### 总结

Vue3.0实现知乎日报个人感觉还是不错，新写法或多或少有些不习惯，比如有个`toRef`少写s，调试了半天也没报错，好在后面注意到了。多写几次后就会习惯，对比Vue3.0的各方面提升，一些写法的变化，无可厚非。所以还是尽快去熟悉Vue3.0的知识，等UI库等兼容Vue3.0版本上线就正式使用了。相信这一天很快来临。

## 订阅

![WeChat](https://cdn.jsdelivr.net/gh/qqlcx5/figure-bed@1.1/img/WeChat.png)

参考链接：

[珠峰架构课—需付费](http://www.javascriptpeixun.cn/course/1435/task/117818/show)