# 服务器端设置

## 安装前准备

此安装过程在服务器端使用 Laravel，在客户端使用 Vue.js，在执行此部分之前，需要遵循以下条件：

- Node.js 10x 或更高版本、 Yarn / npm 5.2 或更高版本
- PHP >= 8.1, Composer 以及 Laravel
- 掌握 Vue 和 Laravel 基础

```bash
# 下载 Laravel 框架并命名为 laravel-inertia
composer create-project --prefer-dist laravel/laravel laravel-inertia

# 进入项目
cd laravel-inertia
```

## 安装依赖

首先，使用 Composer 包管理器安装 Inertia 服务器端包。

```bash
composer require inertiajs/inertia-laravel
```

## 添加根模版

设置将在访问应用程序时加载的根模板。

1. 删除 `resources/views/welcome.blade.php` 默认模版文件

2. 新增 `resources/views/app.blade.php` 根模版文件，内容如下： 
    ```html
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        @vite('resources/js/app.js')
        @inertiaHead
      </head>
      <body>
        @inertia
      </body>
    </html>
    ```

    > 将上面的内容替换到 `resources/views/app.blade.php`

    上面的内容包括了 vite 打包后的资源以及 `@inertia` 和 `@inertiaHead` 指令。

    默认情况下，Inertia 的 Laravel 适配器将假定根模板名为 `app.blade.php`。

    如果想使用不同的根模版的话可以使用 `Inertia::setRootView()` 方法进行更改。

## 中间件

通过将 HandleInertiaRequests 中间件发布到应用程序来完成此操作，可以使用以下 Artisan 命令来完成：

```bash
php artisan inertia:middleware
```

发布中间件后，在 `App\Http\Kernel.php` 中将 `HandleInertiaRequests` 中间件注册为 `web` 中间件组中的最后一项。

```php
'web' => [
    // ...
    \App\Http\Middleware\HandleInertiaRequests::class,
],
```

中间件提供了一个 `version()` 方法来设置前端css、js等资源的版本，以及一个 `share()` 方法来定义共享数据。

至此服务器端设置已经就绪。