# 客户端设置

[配置服务器端框架](server-side.md)后，需要设置客户端框架。

Inertia 目前提供对 React、Vue 和 Svelte 的支持。

## 安装依赖

安装与您选择的框架相对应的 Inertia 客户端适配器。

::: code-group

```bash [vue3]
yarn add vue vue-loader @vitejs/plugin-vue
yarn add @inertiajs/vue3
```

```bash [vue2]
yarn add vue vue-loader @vitejs/plugin-vue
yarn add @inertiajs/vue2
```

```react [react]
yarn add @inertiajs/react
```
:::


## 初始化应用程序

使用基础 Inertia 组件初始化客户端框架在主要的 JavaScript 文件以启动您的 Inertia 应用程序：

```bash
rm -f resource/js/bootstrap.js
```

:::code-group
```javascript [vue3]
import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
    return pages[`./Pages/${name}.vue`]
  },
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .mount(el)
  },
})
```

```javascript [vue2]
import Vue from 'vue'
import { createInertiaApp } from '@inertiajs/vue2'

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
    return pages[`./Pages/${name}.vue`]
  },
  setup({ el, App, props, plugin }) {
    Vue.use(plugin)

    new Vue({
      render: h => h(App, props),
    }).$mount(el)
  },
})
```

```javascript [react]
import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
    return pages[`./Pages/${name}.jsx`]
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)
  },
})
```
:::

## 配置 vite

```javascript {3,7}
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [
        vue(),
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
});
```