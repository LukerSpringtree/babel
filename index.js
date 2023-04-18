import babel from "@babel/core";
import t from "babel-types";
const code = `const sum = (a,b)=>a+b`;

let transformArrowFunctions = {
  visitor: {
    ArrowFunctionExpression: (path) => {
      debugger;
      let node = path.node;
      let id = path.parent.id;
      let params = node.params;

      let body = t.blockStatement([t.returnStatement(node.body)]);

      let functionExpression = t.functionExpression(
        id,
        params,
        body,
        false,
        false
      );

      path.replaceWith(functionExpression);
    },
  },
};

const result = babel.transform(code, {
  plugins: [transformArrowFunctions],
});

console.log(result.code);
