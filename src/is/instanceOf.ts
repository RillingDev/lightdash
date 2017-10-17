import {
    Class,
} from "../types";

/**
 * Checks if the value is instanceof the target
 *
 * @since 1.0.0
 * @param {any} val
 * @param {Class} target
 * @returns {boolean}
 * @example
 * //returns true
 * isInstanceOf({},Object)
 * isInstanceOf([],Object)
 * isInstanceOf([],Array)
 *
 * @example
 * //returns false
 * isInstanceOf({},Array)
 * isInstanceOf([],Map)
 */
const isInstanceOf = (val: any, target: Class): boolean => val instanceof target;

export default isInstanceOf;
