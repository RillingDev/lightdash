import isUndefined from "./undefined";

/**
 * Checks if a value is not undefined
 *
 * @param {*} val
 * @returns {boolean}
 */
const isDefined = (val: any): boolean => !isUndefined(val);

export default isDefined;
