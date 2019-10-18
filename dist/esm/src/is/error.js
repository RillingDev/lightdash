import { isInstanceOf } from "./instanceOf";
/**
 * Checks if a value is an error.
 *
 * @memberof Is
 * @since 2.10.0
 * @param {any} val Value to check.
 * @returns {boolean} If the value is an error.
 * @example
 * isError(new URIError())
 * // => true
 *
 * isError("foo")
 * // => false
 */
const isError = (val) => isInstanceOf(val, Error);
export { isError };
//# sourceMappingURL=error.js.map