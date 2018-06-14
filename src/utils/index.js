/**
 * @description 定时执行某些任务，场景如： 自动聊天，动画效果的分时替换
 * 如果是动画的话，需要自己减去动画 duration 时常
 * @param {Array<object>} steps
 * @returns {() => void}
 */

export const todoFn = steps => {
  let timer = 0
  const $steps = steps.slice()
  const first = $steps.shift()
  timer = setTimeout(() => {
    first.cb && first.cb()
    if ($steps.length) todoFn($steps)
  }, first.delay)

  const clearTime = () => {
    clearTimeout(timer)
    timer = 0
  }
  return clearTime
}
