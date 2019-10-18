import { isInstanceOf } from "./instanceOf";
/**
 * Checks if a value is a promise.
 *
 * @memberof Is
 * @since 3.0.0
 * @param {any} val Value to check.
 * @returns {boolean} If the value is a promise.
 * @example
 * isPromise(new Promise((resolve, reject) => resolve("foo")));
 * // => true
 *
 * isPromise(() => "foo");
 * // => false
 */
const isPromise = (val) => isInstanceOf(val, Promise);
export { isPromise };
//# sourceMappingURL=promise.js.map