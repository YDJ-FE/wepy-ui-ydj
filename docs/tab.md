### Tab

```js
import Tab from 'wepy-ui-ydj/Tab';
```

| 参数          | 说明                              | 类型    | 可选值 | 默认值    | 备注           |
| ------------- | --------------------------------- | ------- | ------ | --------- | -------------- |
| dataList      | tab 对象数组, {id, title}         | array   | -      | -         | -              |
| fixed         | 是否固定在顶部                    | boolean | -      | false     | -              |
| scroll        | 是否可滚动                        | boolean | -      | false     | -              |
| itemWidth     | 每个 item 的宽度                  | string  | -      | '160rpx'  | scroll 为 true |
| selectedColor | 选中 tab 的颜色                   | string  | -      | '#FD7598' | -              |
| @tabChange    | 选中 tab 触发, 返回选中 item 数据 | -       | -      | -         | -              |
