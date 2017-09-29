import isUndefined from "./undefined";

/**
 * Checks if a value is either undefined or null
 *
 * @param {*} val
 * @returns {boolean}
 */
const isNil = (val: any): boolean => isUndefined(val) || val === null;

export default isNil;
