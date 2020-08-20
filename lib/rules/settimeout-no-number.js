/**
 * @fileoverview setTime 第二个参数禁止是数字
 * @author fish
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: "setTimeout 第二个参数禁止是数字",
    },
    fixable: null,  // 修复函数
  },
  //  rule核心(监听选择器)
  create: function (context) {

    //  公共变量和函数应该在此定义

    debugger

    return {

      // 返回事件钩子
      'CallExpression': (node) => {
        //  node是选中的内容,使我们监听的部分,它的值参考AST

        debugger

        if (node.callee.name !== 'setTimeout') return //  不是定时器即过滤
        const timeNode = node.arguments && node.arguments[1]  //  获取第二个参数
        if (!timeNode) return  //  没有第二个参数

        //  检测报错第二个参数是数字 报错
        if (timeNode.type === 'Literal' && typeof timeNode.value === 'number') {
          //  report方法通知这段代码警告或报错
          context.report({
            node,
            message: 'setTimeout第二个参数禁止是数字'
          })
        }
      }

    };
  }
};
