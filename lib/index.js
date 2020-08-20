/**
 * @fileoverview Fish ESLint rule
 * @author fish
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require('requireindex');
const output = {
  rules: requireIndex(__dirname + '/rules'), // 导出所有规则
  configs: {
    // 导出自定义规则 在项目中直接引用
    koroRule: {
      plugins: ['korolint'], // 引入插件
      rules: {
        // 开启规则
        'korolint/settimeout-no-number': 'error'
      }
    }
  }
};
module.exports = output;



