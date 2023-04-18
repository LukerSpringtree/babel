// return a||b,c; 是什么语法?

// let a = true;
// let b = "b";
let b = () => {
  console.log("b");
};
let c = "c";
const f = (a) => {
  return a || b(), c;
};

console.log("1", f(true));
console.log("2", f(false));
