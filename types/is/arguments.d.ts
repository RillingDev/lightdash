/**
 * Checks if a value is an arguments array-like.
 *
 * @function isArguments
 * @memberof Is
 * @since 2.10.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * // returns true
 * const foo = function(){
 *   return arguments;
 * };
 *
 * isArguments(foo());
 *
 * @example
 * // returns false
 * isArguments([]);
 */
declare const isArguments: (val: any) => boolean;
export default isArguments;
