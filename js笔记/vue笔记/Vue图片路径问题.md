# Vue图片路径问题

放置在 `public` 目录下或通过绝对路径被引用。这类资源将会直接被拷贝，而不会经过 webpack 的处理

```vue
<template>
  <div id="app">
   	<!-- 代表public里面的dom.jpg图片,最终会打包在根目录 -->
    <img src="/dom.jpg" width="100" height="100" alt />
    <!-- 代表public里面的dom.jpg图片,最终会打包在根目录下的img文件夹 -->
    <img src="/img/543.jpg" width="100" height="100" alt />
      
    <!-- 代表相对路径里assets里面的dom.jpg图片 -->
    <img src="./assets/dom.jpg" width="100" height="100" alt />
    <img :src="dom" width="100" height="100" alt />
      
    <!-- 代表public里面的dom.jpg图片 -->
    <img :src="`${srcc}dom.jpg`" width="100" height="100" alt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      // src: require("./assets/dom.jpg"),
      // src: require("../public/dom.jpg"),
      srcc: "/",
      dom: require("../public/dom.jpg")
    };
  }
};
</script>

```

# publicPath

配置文件中的publicPath，默认值:/，如果打包后直接访问，会报路径错误，需要改成publicPath:'./'才可直接访问，如果上传服务器后，可加可不加