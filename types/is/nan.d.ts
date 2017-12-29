/**
 * Checks if a value is NaN.
 *
 * Unlike the global `isNaN()`, this function returns false for `undefined`.
 * `Number.isNaN` shorthand.
 *
 * @function isNaN
 * @memberof Is
 * @since 3.3.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * // returns true
 * isNaN(NaN);
 *
 * @example
 * // returns false
 * isNaN(1);
 * isNaN(undefined);
 */
declare const isNaN: (number: number) => boolean;
export default isNaN;
