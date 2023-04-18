/* 预计算 babel 即: 源代码写的是2+2 经过 babel之后变为  4, 还支持嵌套 */
let babel = require("@babel/core");
let t = require("babel-types");

let preCalculator = {
  visitor: {
    BinaryExpression(path) {
      let node = path.node;
      let left = node.left;
      let operator = node.operator;
      let right = node.right;

      if (!isNaN(left.value) && !isNaN(right.value)) {
        let result = eval(left.value + operator + right.value);
        path.replaceWith(t.numericLiteral(result));

        // 递归调用, 这样就可以继续处理 1+2+3了
        if (path.parent && path.parent.type == "BinaryExpression") {
          preCalculator.visitor.BinaryExpression.call(null, path.parentPath);
        }
      }
    },
  },
};

const result = babel.transform("const sum = 1+2+3", {
  plugins: [preCalculator],
});

console.log(result.code);
