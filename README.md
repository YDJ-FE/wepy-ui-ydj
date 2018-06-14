### 伊的家公用组件库

- [ ] Button 组件
- [ ] Dialog 组件
- [x] ~~_[Message 组件](./docs/message.md)_~~ [2018-06-12]
- [x] ~~_[Input 组件](./docs/input.md)_~~ [2018-06-13]

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
import Button from 'wepy-ui-ydj/src/components/Button';

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

#### 注意

- 由于被引用的 utils 等其它资源不会被 babel 编译，所以需要我们自己预先编译

```node
npm run babel
```
