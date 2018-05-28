import { IGenericClass } from "../interfaces";
/**
 * Checks if the value is an instance of a target constructor.
 *
 * @function isInstanceOf
 * @memberof Is
 * @since 1.0.0
 * @param {any} val
 * @param {Class} target
 * @returns {boolean}
 * @example
 * isInstanceOf({}, Object)
 * // => true
 *
 * isInstanceOf([], Object)
 * // => true
 *
 * isInstanceOf([], Array)
 * // => true
 *
 * @example
 * isInstanceOf({}, Array)
 * // => false
 *
 * isInstanceOf([], Map)
 * // => false
 */
declare const isInstanceOf: (val: any, target: IGenericClass) => boolean;
export { isInstanceOf };
