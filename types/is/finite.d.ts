/**
 * Checks if a value is finite.
 *
 * `Number.isFinite` shorthand.
 *
 * @function isFinite
 * @memberof Is
 * @since 2.10.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * // returns true
 * isFinite(1);
 * isFinite(-2.123);
 *
 * @example
 * // returns false
 * isFinite(Infinity);
 * isFinite("foo")
 */
declare const isFinite: (number: number) => boolean;
export default isFinite;
