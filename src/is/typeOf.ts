/**
 * Checks if the value has a certain type-string.
 *
 * @memberof Is
 * @since 1.0.0
 * @param {any} val
 * @param {string} type
 * @returns {boolean}
 * @example
 * isTypeOf("foo", "string")
 * // => true
 *
 * isTypeOf("foo", "number")
 * // => false
 */
const isTypeOf = (val: any, type: string): boolean => typeof val === type;

export { isTypeOf };
