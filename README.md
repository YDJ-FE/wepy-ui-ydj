### 伊的家公用组件库

#### 使用方法

```js
// 引入所需组件
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
