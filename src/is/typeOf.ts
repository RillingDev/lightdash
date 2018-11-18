/**
 * Checks if the value has a certain type-string.
 *
 * @memberof Is
 * @since 1.0.0
 * @param {any} val Value to check.
 * @param {string} type Type string to compare the value to.
 * @returns {boolean} If the value has the type provided.
 * @example
 * isTypeOf("foo", "string")
 * // => true
 *
 * isTypeOf("foo", "number")
 * // => false
 */
const isTypeOf = (val: any, type: string): val is typeof type =>
    typeof val === type;

export { isTypeOf };
