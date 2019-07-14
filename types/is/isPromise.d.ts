/**
 * Checks if a value is a promise.
 *
 * @since 3.0.0
 * @param value Value to check.
 * @returns If the value is a promise.
 * @example
 * isPromise(new Promise((resolve, reject) => resolve("foo")));
 * // => true
 *
 * isPromise(() => "foo");
 * // => false
 */
declare const isPromise: (value: any) => value is Promise<any>;
export { isPromise };
