import babel from "@babel/core";
import t from "babel-types";

// const code = `import {a as b} from "component";`;
const code = `import b from "component/a";`;

let transformArrowFunctions = {
  visitor: {
    ImportDeclaration: (path) => {
      debugger;
      // console.log("path", path);
      console.log("path", path.node.source.value);

      // path.source.value = `${path.source.value}/a`;
      path.node.source.value = `${path.node.source.value}/a`;
    },
  },
};

const result = babel.transform(code, {
  plugins: [transformArrowFunctions],
});

console.log(result.code);
