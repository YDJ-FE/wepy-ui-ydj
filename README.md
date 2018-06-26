### 伊的家公用组件库

- [ ] Button 组件
- [x] ~~_[Dialog 组件](./docs/dialog.md)_~~ [2018-06-21]
- [x] ~~_[Message 组件](./docs/message.md)_~~ [2018-06-12]
- [x] ~~_[Input 组件](./docs/input.md)_~~ [2018-06-13]
- [x] ~~[_Toast 组件_](./docs/toast.md)~~ [2018-06-14]
- [x] ~~[_Swiper 组件_](./docs/swiper.md)~~ [2018-06-16]
- [x] ~~[_List 组件_](./docs/list.md)~~ [2018-06-20]
- [x] ~~[_Select 组件_](./docs/select.md)~~ [2018-06-21]
- [x] ~~[_Card 组件_](./docs/card.md)~~ [2018-06-22]
- [x] ~~[Icon 组件\_](./docs/icon.md)~~ [2018-06-22]
- [x] ~~[Tab 组件\_](./docs/tab.md)~~ [2018-06-25]

#### 线上二维码

![aklsjdl](./docs/code.jpg)

#### 使用方法

- 基于 `wepy` 框架
- 使用 `scss` 预处理语言

1.  全局安装 wepy 编译脚本

```
// 自己选择包的地址源
npm i wepy-cli@alpha -g
```

2.  app.wpy 引入组件公共样式

```scss
@import '../node_modules/wepy-ui-ydj/src/styles/all';
```

```js
// 直接引入组件内部库
import Button from 'wepy-ui-ydj/Button';

// 按照wepy文档分配组件别名
components = {
  buttonDefault: Button,
  buttonPlain: Button
};

<template>
  <buttonDefault>默认</buttonDefault>
  <buttonPlain shape="plain">中空默认</buttonPlain>
</template>;
```

#### 开发注意

- utils 文件夹 等其它 js 资源在被 wepb-cli 追踪依赖时不会被 babel 编译，所以需要我们自己预先编译

```node
npm run babel
```
