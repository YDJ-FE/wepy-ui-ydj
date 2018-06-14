### INPUT

| 参数         | 说明                                    | 类型           | 可选值                                   | 默认值     | 备注                |
| ------------ | --------------------------------------- | -------------- | ---------------------------------------- | ---------- | ------------------- |
| type         | 控制 输入框类型 的变量                  | string         | 'textarea' 文本域, 'number' 数字输入键盘 | 'text'     | -                   |
| sendCode     | 控制 验证码按钮显隐 的变量              | boolean        | -                                        | false      | type 值非'textarea' |
| title        | 输入框前面的标题                        | string         | -                                        | '输入标题' | type 值非'textarea' |
| value        | 输入框的初始内容                        | string         | -                                        | -          | -                   |
| placeholder  | 输入框为空时占位符                      | string         | -                                        | '输入提示' | -                   |
| maxlength    | 最大输入长度                            | number, string | -                                        | 140        | -                   |
| disabled     | 是否禁用                                | boolean        | -                                        | false】    | -                   |
| focus        | 获取焦点                                | boolean        | -                                        | false      | -                   |
| autoFocus    | 自动聚焦，拉起键盘                      | boolean        | -                                        | false      | type 值为'textarea' |
| password     | 是否密码类型                            | boolean        | -                                        | false      | type 值非'textarea' |
| borderBottom | 输入框底部边框是否显示                  | boolean        | -                                        | false      | type 值非'textarea' |
| @sendCode    | 发送验证码 按钮触发                     | -              | -                                        | -          | -                   |
| @input       | 键盘输入时触发, 获取{value, cursor}     | -              | -                                        | -          | -                   |
| @focus       | 输入框聚焦时触发, 获取{value, cursor}   | -              | -                                        | -          | -                   |
| @blur        | 输入框失去焦点触发, 获取{value, cursor} | -              | -                                        | -          | -                   |
