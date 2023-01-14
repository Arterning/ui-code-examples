# vuejs-examples

使用 Vue 3 创建的项目示例合集

## Todo App

一个简单的、常规的入门示例：待办事项列表。使用了 Vue 3 的 Composition API，为最初级的使用方式。

# 使用 Vue Cli 创建 vue3 项目

```
npm install -g @vue/cli

vue create todo-app

vue ui 启动图形化的客户端
```

# todo app

观察设计稿
拆分组件
拆解复杂组件

减少嵌套层数 否则需要多层传递数据
复用组件和功能

Vue2 使用的是 Option API

```
export default {
   data: ..
   computed: ..
   methods: ..
   watch: ..
   mounted: ..
}

```

Vue3 使用的是 Composition API

```
export default {
    setup: (prps, context) {
        ref();
        computed();
        watchEffect();
        onMounted();
    }
}

```

ref 适合包装基本类型数据
reactive 适合包装复杂的对象数据
用 Ref 和 reactive 包装的数据改变的时候才会引起组件的刷新 相当于 react 的 useState()?
