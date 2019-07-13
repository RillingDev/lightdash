/**
 * Checks if the value has any of the given types.
 * If at least one type gives back true, true is returned.
 *
 * @since 1.0.0
 * @param val Value to check.
 * @param types Type strings to compare the value to.
 * @returns If the value has the type provided.
 * @example
 * isTypeOf("foo", "string")
 * // => true
 *
 * isTypeOf("foo", "number", "string")
 * // => true
 *
 * isTypeOf("foo", "number")
 * // => false
 */
declare const isTypeOf: (val: any, ...types: string[]) => boolean;
export { isTypeOf };
