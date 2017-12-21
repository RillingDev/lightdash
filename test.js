const { fnCurry } = require("./dist/lightdash.common");

const foo = (a, b, c) => [a, b, c];
const fooCurried = fnCurry(foo);

console.log(fooCurried(1, 1, 3));
console.log(fooCurried(1)(1, 3));
