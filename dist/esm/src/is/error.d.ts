/**
 * Checks if a value is an error.
 *
 * @memberof Is
 * @since 2.10.0
 * @param {any} val Value to check.
 * @returns {boolean} If the value is an error.
 * @example
 * isError(new URIError())
 * // => true
 *
 * isError("foo")
 * // => false
 */
declare const isError: (val: any) => val is Error;
export { isError };
//# sourceMappingURL=error.d.ts.map