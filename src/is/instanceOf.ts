import {
    Class,
} from "../types";

/**
 * Checks if the value is instanceof the target
 *
 * @param {*} val
 * @param {Class} target
 * @returns {boolean}
 */
const isInstanceOf = (val: any, target: Class): boolean => val instanceof target;

export default isInstanceOf;
