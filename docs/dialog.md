### Dialog

```js
import Dialog from 'wepy-ui-ydj/Dialog';
```

| 参数                 | 说明                   | 类型    | 可选值                             | 默认值         |
| -------------------- | ---------------------- | ------- | ---------------------------------- | -------------- |
| show                 | 控制 显隐 的变量       | boolean | -                                  | false          |
| title                | 显示的消息弹框标题     | string  | -                                  | ''             |
| titleColor           | 标题的颜色             | string  | -                                  | '#333333'      |
| content              | 显示的消息弹框内容     | string  | -                                  | ''             |
| contentColor         | 展示内容的颜色         | string  | -                                  | '#9a9a9a'      |
| image                | 弹框内容带有图片       | string  | -                                  | ''             |
| cancelColor          | 取消按钮的颜色         | string  | -                                  | #666666        |
| cancelTxt            | 取消按钮的文本         | string  | -                                  | 取消           |
| cancelShow           | 取消按钮的显隐         | string  | -                                  | true           |
| successColor         | 确定按钮的颜色         | string  | -                                  | #fd7598        |
| successTxt           | 确定按钮的文本         | string  | -                                  | 确定           |
| successShow          | 确定按钮的显隐         | boolean | -                                  | true           |
| animated             | 弹出框开始动画样式名称 | string  | ''/jackInTheBox/flipInX/fadeInDown | ''             |
| inputShow            | 是否显示输入框         | boolean | -                                  | false          |
| inputValue           | 值                     | string  | -                                  | ''             |
| inputType            | 输入框格式             | string  | text/number/idcard/digit           | {}             |
| inputPassword        | 输入框是否是密码格式   | boolean | -                                  | false          |
| inputPlaceholder     | 输入框提示语           | string  | -                                  | '请输入内容'   |
| placeholderFontColor | 提示语字体颜色         | string  | -                                  | #bbbbbb        |
| inputBindconfirm     | 是否回车确定发送       | boolean | -                                  | false          |
| inputBorderR         | 输入框的圆角           | number  | -                                  | 50 单位 rpx）  |
| inputFontColor       | 输入框字体颜色         | string  | -                                  | #222222        |
| inputFontSize        | 输入框字体大小         | number  | -                                  | 50（单位 rpx） |
| inputLength          | 输入框最大输入长度     | number  | -                                  | 140            |

```
<Dialog>
  <view slot="dialog-btns">底部按钮区域可自定义</view>
</Dialog>

events= {
	dialogCallback(value) {
      // 返回n则取消操作，返回y则确定操作
      console.log('value', value)
    }
}
```
