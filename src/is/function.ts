import isTypeOf from "./typeOf";

/**
 * Checks if a value is a function
 *
 * @function isFunction
 * @memberof Is
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * //returns true
 * isFunction(function a(){})
 * isFunction(()=>{})
 *
 * @example
 * //returns false
 * isFunction(null)
 */
const isFunction = (val: any): boolean => isTypeOf(val, "function");

export default isFunction;
