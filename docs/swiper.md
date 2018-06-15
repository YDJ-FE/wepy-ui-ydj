### toast

| 参数                 | 说明                                                                                      | 类型             | 可选值 | 默认值            |
| -------------------- | ----------------------------------------------------------------------------------------- | ---------------- | ------ | ----------------- |
| width                | 轮播宽度                                                                                  | string           | -      | 750rpx            |
| height               | 轮播高度                                                                                  | string           | -      | 300rpx            |
| dataList             | 轮播数据                                                                                  | array            | -      | -                 |
| autoplay             | 是否自动切换                                                                              | boolean          | -      | false             |
| interval             | 自动切换时间间隔                                                                          | [number, string] | -      | 5000              |
| duration             | 滑动动画时长                                                                              | [number, string] | -      | 500               |
| circular             | 是否采用衔接滑动                                                                          | boolean          | -      | false             |
| indicator            | 是否显示面板指示点                                                                        | boolean          | -      | false             |
| indicatorColor       | 指示点颜色                                                                                | string           | -      | rgba(0, 0, 0, .3) |
| indicatorActiveColor | 当前选中的指示点颜色                                                                      | string           | -      | #000              |
| marginPrev           | 前边距，用于露出前一项的一小部分                                                          | string           | -      | '0rpx'            |
| marginNext           | 后边距，用于露出后一项的一小部分                                                          | string           | -      | '0rpx'            |
| itemPadding          | 轮播 item 内边距                                                                          | string           | -      | '0rpx'            |
| @click               | 点击图片触发，获取目标数据                                                                | -                | -      | -                 |
| @change              | current 改变时触发，获取 {current: current, currentItemId: currentItemId, source: source} | -                | -      | -                 |
| @animationFinish     | 动画结束时触发，获取 {current: current, currentItemId: currentItemId, source: source}     | -                | -      | -                 |
