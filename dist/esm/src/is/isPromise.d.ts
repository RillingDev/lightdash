/**
 * Checks if a value is a promise.
 *
 * @since 3.0.0
 * @category Is
 * @param value Value to check.
 * @returns If the value is a promise.
 * @example
 * isPromise(new Promise((resolve, reject) => resolve("foo")));
 * // => true
 *
 * isPromise(() => "foo");
 * // => false
 */
declare const isPromise: (value: unknown) => value is Promise<unknown>;
export { isPromise };
//# sourceMappingURL=isPromise.d.ts.map