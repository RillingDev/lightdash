import { isInstanceOf } from "./instanceOf";
/**
 * Checks if a value is a weak map.
 *
 * @memberof Is
 * @since 9.1.0
 * @param {any} val Value to check.
 * @returns {boolean} If the value is a weak map.
 * @example
 * isMap(new WeakMap())
 * // => true
 *
 * isMap(new Map())
 * // => false
 */
const isWeakMap = (val) => isInstanceOf(val, WeakMap);
export { isWeakMap };
//# sourceMappingURL=weakMap.js.map