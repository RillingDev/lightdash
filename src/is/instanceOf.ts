import { IGenericClass } from "./lib/IAnyClass";

/**
 * Checks if the value is an instance of a target constructor.
 *
 * @memberof Is
 * @since 1.0.0
 * @param {any} val Value to check.
 * @param {Class} target Class to check if the value is an instance of it.
 * @returns {boolean} If the value is an instance of the class.
 * @example
 * isInstanceOf([], Array)
 * // => true
 *
 * isInstanceOf({}, Array)
 * // => false
 */
const isInstanceOf = (val: any, target: IGenericClass): boolean =>
    val instanceof target;

export { isInstanceOf, IGenericClass };
