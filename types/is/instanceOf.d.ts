import { IGenericClass } from "../types";
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
 * // returns true
 * isInstanceOf({}, Object)
 * isInstanceOf([], Object)
 * isInstanceOf([], Array)
 *
 * @example
 * // returns false
 * isInstanceOf({}, Array)
 * isInstanceOf([], Map)
 */
declare const isInstanceOf: (val: any, target: IGenericClass) => boolean;
export default isInstanceOf;
