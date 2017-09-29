import isInstanceOf from "./instanceOf";

/**
 * Checks if a value is an map
 *
 * @param {*} val
 * @returns {boolean}
 */
const isMap = (val: any): boolean => isInstanceOf(val, Map);

export default isMap;
