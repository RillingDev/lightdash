import isObject from "./object";

/**
 * Checks if a value is a plain object.
 *
 * An object is considered plain of its direct constructor is the built-in object constructor.
 *
 * @function isObjectPlain
 * @memberof Is
 * @since 2.9.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * // returns true
 * isObjectPlain({})
 *
 * @example
 * // returns false
 * isObjectPlain([])
 * isObjectPlain(()=>{})
 */
const isObjectPlain = (val: any): boolean =>
    isObject(val) && val.constructor === Object;

export default isObjectPlain;
