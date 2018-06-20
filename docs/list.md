### toast

| 参数             | 说明                                             | 类型    | 可选值                                             | 默认值 | 备注 |
| ---------------- | ------------------------------------------------ | ------- | -------------------------------------------------- | ------ | ---- |
| type             | 列表类型                                         | string  | 'shop' 商品列表, 其它值或空则为常规列表            | -      |
| title            | 标题文字                                         | string  | -                                                  | -      |
| desc             | 描述/补充说明                                    | string  | -                                                  | -      |
| imgUrl           | 图片 url                                         | string  | -                                                  | -      |
| borderBottom     | 是否显示底部边框                                 | boolean | -                                                  | false  |
| isMulti          | 是否显示多行                                     | boolean | -                                                  | false  |
| isExpand         | 是否显示右侧内容                                 | boolean | -                                                  | false  |
| expandText       | 右侧内容文字                                     | string  | -                                                  | -      |
| expandImgUrl     | 右侧图片 url                                     | string  | -                                                  | -      |
| slot="customize" | 右侧自定义内容                                   | -       | -                                                  | -      |
| price            | 商品价格                                         | string  | -                                                  | -      |
| shopType         | 商品列表文字描述下方显示的类型                   | string  | 'text' 文字说明, 'button' 按钮, 其它值或空则不显示 | -      |
| shopBtnTitle     | 商品列表文字描述下方按钮的文字显示               | string  | -                                                  | -      |
| isShopImgLeft    | 商品列表图片的放置位置是否显示在左侧, 默认在右侧 | boolean | -                                                  | false  |
| @click           | 点击整行列表触发                                 | -       | -                                                  | -      |
| @go              | 点击右侧区域触发                                 | -       | -                                                  | -      |
| @buy             | 点击按钮触发                                     | -       | -                                                  | -      |
