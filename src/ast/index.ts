import * as esprima from "esprima";
import estraverse from "estraverse";
import escodegen from "escodegen";

console.dir(esprima);

let code = 'function ast(){}';

let ast = esprima.parseScript(code);
console.log('ast', ast)
let indent = 0;
function pad() {
  return ' '.repeat(indent);
}

estraverse.traverse(ast, {
  enter(node) {
    console.log(pad() + node.type);
    if (node.type == 'FunctionDeclaration') {
      // 在这个地方把  function的名字给改了, 从而生成了新的代码.
      node.id.name = 'ast_rename';
    }
    indent += 2;
  },
  leave(node) {
    indent -= 2;
    console.log(pad() + node.type);
  }
});

let generated = escodegen.generate(ast);

console.log(generated);
export default (() => { });