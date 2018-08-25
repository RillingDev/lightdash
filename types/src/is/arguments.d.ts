/**
 * Checks if a value is an arguments array-like.
 *
 * @function isArguments
 * @memberof Is
 * @since 2.10.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * const foo = function(){
 *   return arguments;
 * };
 *
 * isArguments(foo());
 * // => true
 *
 * @example
 * isArguments([]);
 * // => false
 */
declare const isArguments: (val: any) => val is IArguments;
export { isArguments };
