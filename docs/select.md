### Select

```js
import Select from 'wepy-ui-ydj/Select'
```

| 参数              | 说明                                     | 类型     | 可选值                 | 默认值 | 备注                                 |
|-----------------|----------------------------------------|--------|---------------------|-----|------------------------------------|
| type            | 控制 选择框 类型的变量                           | string | 'check' 为多选框，否则为单选框 | -   | -                                  |
| dataList        | 数据对象数组, {title: '标题文字', value: '标识字段'} | object | -                   | -   | type 为'check'时, 增加 {checked: 是否选中} |
| checkedValue    | 选中标识值                                  | string | -                   | -   | type 为非'checked'                   |
| @checkboxChange | 多选框选中项发生改变时触发, 获取{value}               | -      | -                   | -   | type 为'checked'                    |
| @radioChange    | 单选框选中项发生改变时触发，获取{value}                | -      | -                   | -   | type 为非'checked'                   |
