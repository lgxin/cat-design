# cat-design

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

```

├── dist                                        // 打包文件
├── node_modules                                // 安装包
├── public
│   ├── favicon.ico                             // 图标
│   ├── index.html                              // 入口html文件                
├── src                                         // 源码目录
│   ├── components                              // 组件                           
│   │   ├── Button                              // 按钮组件
│   │   │   ├── index.vue                       
│   │   ├── index.js                            // 组件汇总
│   ├── assets                                  // 基本配置
│   │   ├── css                                 // 样式库
│   │   │   ├── componentCss                    // 组件样式目录
│   │   │   │   └──cat-button.styl              // 按钮样式
│   │   │   ├── animation.styl                  // 动画
│   │   │   ├── base.styl                       // 默认样式覆盖
│   │   │   ├── index.styl                      // 组件样式汇总
│   │   │   ├── variables.styl                  // 样式变量汇总
│   │   ├── js                                  // 公共方法
│   │   ├─  └──mUtils.js                           // 常用的js方法
│   ├── App.vue                                 // 页面入口文件
│   ├── main.js                                 // 程序入口文件，加载各种公共组件

```