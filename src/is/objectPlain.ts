import { isObject } from "./object";

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
 * isObjectPlain({})
 * // => true
 *
 * @example
 * isObjectPlain([])
 * // => false
 *
 * isObjectPlain(() => {})
 * // => false
 */
const isObjectPlain = (val: any): val is object =>
    isObject(val) && val.constructor === Object;

export { isObjectPlain };
