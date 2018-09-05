import { IGenericClass } from "./lib/IAnyClass";

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
 * isInstanceOf([], Array)
 * // => true
 *
 * isInstanceOf({}, Array)
 * // => false
 */
declare const isInstanceOf: (val: any, target: IGenericClass) => boolean;
export { isInstanceOf, IGenericClass };
