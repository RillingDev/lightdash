/**
 * Checks if a value is a plain object.
 *
 * An object is considered plain of its direct constructor is the built-in object constructor.
 *
 * @since 2.9.0
 * @param {any} val Value to check.
 * @returns {boolean} If the value is a plain object.
 * @example
 * isObjectPlain({})
 * // => true
 *
 * isObjectPlain([])
 * // => false
 *
 * isObjectPlain(() => 1)
 * // => false
 *
 * isObjectPlain(1)
 * // => false
 */
declare const isObjectPlain: (val: any) => val is object;
export { isObjectPlain };
