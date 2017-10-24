import isInstanceOf from "./instanceOf";

/**
 * Checks if a value is an object
 *
 * @function isObject
 * @memberof Is
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * //returns true
 * isObject({})
 * isObject([])
 *
 * @example
 * //returns false
 * isObject(1)
 */
const isObject = (val: any): boolean => isInstanceOf(val, Object);

export default isObject;
