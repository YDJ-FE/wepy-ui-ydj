"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @description 定时执行某些任务，场景如： 自动聊天，动画效果的分时替换
 * 如果是动画的话，需要自己减去动画 duration 时常
 * @param {Array<object>} steps
 * @returns {() => void}
 */

var todoFn = exports.todoFn = function () {
  var timer = 0;
  return function (steps) {
    var $steps = steps.slice();
    var first = $steps.shift();
    timer = setTimeout(function () {
      first.cb && first.cb();
      if ($steps.length) todoFn($steps);
    }, first.delay);

    var clearTime = function clearTime() {
      clearTimeout(timer);
      timer = 0;
    };
    return clearTime;
  };
}();
