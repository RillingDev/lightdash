/**
 * Returns a curried function.
 *
 * A curried function can take between zero and n arguments,
 * where n is either the functions argument length or the provided arity.
 * As soon as n arguments are reached, the function is run with all arguments
 *
 * @function fnCurry
 * @memberof Fn
 * @since 3.2.0
 * @param {Function} fn
 * @param {number} [arity=fn.length]
 * @returns {Function}
 * @example
 * const foo = (a, b, c) => [a, b, c];
 * const fooCurried = fnCurry(foo);
 *
 * fooCurried(1)(2)(3) //=> [1, 2, 3]
 * fooCurried(1, 2)(3) //=> [1, 2, 3]
 * fooCurried(1, 2, 3) //=> [1, 2, 3]
 */
const fnCurry = (fn: (...args: any[]) => any, arity: number = fn.length) => {
    const resolver: (...args: any[]) => any = function() {
        const argsBase: IArguments = arguments;

        return function() {
            const args: any[] = [...argsBase, ...arguments];
            const result: () => any = args.length >= arity ? fn : resolver;

            return result(...args);
        };
    };

    return resolver();
};

export default fnCurry;
