console.log("pure");

// const lodashEs = import("lodash-es");
// const lodash = import("lodash");
// console.log("1", lodashEs);
// console.log("2", lodash);

import { get } from "lodash-es";
import { get as __get } from "lodash";
import nGet from "lodash/get";

const a = { b: "c" };
console.log("1", get(a, "b"));
console.log("2", __get(a, "b"));
console.log("3", nGet(a, "b"));
