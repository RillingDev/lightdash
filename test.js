/*  const {
     fnAttempt
 } = require("./dist/lightdash.common"); */

const fnCurry = (fn, arity = fn.length) => {
    const resolver = function() {
        const argsBase = arguments;

        return function() {
            const args = [...argsBase, ...arguments];
            const result = args.length >= arity ? fn : resolver;

            return result(...args);
        };
    };

    return resolver();
};

const foo = (a, b, c) => [a, b, c];
const fooCurried = fnCurry(foo);

console.log(fooCurried(1, 1, 3));
