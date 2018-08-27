### Tab

```js
import Tab from 'wepy-ui-ydj/Tab';
```

| 参数          | 说明                              | 类型    | 可选值 | 默认值    | 备注           |
| ------------- | --------------------------------- | ------- | ------ | --------- | -------------- |
| dataList      | tab 对象数组, {title, isActive}         | array   | -      | -         | -              |
| type         | 是否可滚动                    | string | 'scroll':可滚动      | -     | -              |
| width        | 宽度                        | string | -      | -     | type为'scroll'生效              |
| height     | 每个 item 的高度                  | string  | -      | '92rpx'  | - |
| backgroundColor     | 背景颜色                  | string  | -      | '#ffffff'  | - |
| lineWidth | 选中时下横线的宽度                  | string  | -      | '32rpx' | -              |
| defaultColor | 字体默认颜色                  | string  | -      | '#9c9c9c' | -              |
| activeColor | 选中时字体颜色                  | string  | -      | '#fb3f7c' | -              |
| activeClass | 选中时的样式名                  | string  | -      | 'ydj-tab-active' | 默认样式:{font-weight: 600;color: #fb3f7c;}              |
| lineClass | 下横线样式名                  | string  | -      | 'ydj-tab-line' | 默认样式:{height: 6rpx;border-radius: 3rpx;}              |
| @change    | 选中 tab 触发, 返回选中的索引 | -       | -      | -         | -              |
