/**
 * Creates a new array with the values of the input iterable.
 *
 * `Array.from` shorthand.
 *
 * @function arrFrom
 * @memberof Array
 * @since 1.0.0
 * @param {any} arr
 * @returns {any[]}
 * @example
 * // returns a = [1, 2, 3], b = [1, 10, 3]
 * const a = [1, 2, 3];
 * const b = arrFrom(a);
 *
 * b[1] = 10;
 */
declare const arrFrom: {
    <T, U = T>(iterable: Iterable<T>, mapfn?: ((v: T, k: number) => U) | undefined, thisArg?: any): U[];
    <T, U = T>(arrayLike: ArrayLike<T>, mapfn?: ((v: T, k: number) => U) | undefined, thisArg?: any): U[];
};
export default arrFrom;
