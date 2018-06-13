props:

- type {string}: 控制 输入框类型 的变量,【默认值: 'text'】 常规输入框; 【可选值: 'textarea' || 'number'】文本域 || 数字输入键盘

- sendCode {boolean}: 控制 验证码按钮显隐 的变量, 【默认值: false】

- title {string}: 输入框前面的标题, 【默认值: '输入标题'】

- value {string}: 输入框的初始内容

- placeholder {string}: 输入框为空时占位符, 【默认值: '输入提示'】

- maxlength {number, string}: 最大输入长度, 【默认值: 140】

- disabled {boolean}: 是否禁用, 【默认值: false】

- focus {boolean}: 获取焦点, 【默认值: false】

- autoFocus {boolean}: 自动聚焦，拉起键盘, 【默认值: false】

- password {boolean}: 是否密码类型, 【默认值: false】

- borderBottom {boolean}: 输入框底部边框是否显示, 【默认值: false】

事件:

- @sendCode: 发送验证码 按钮触发

- @input: 键盘输入时, 触发 input 事件, 获取{value, cursor}

- @focus: 输入框聚焦时触发, 获取{value, cursor}

- @blur: 输入框失去焦点  触发, 获取{value, cursor}
