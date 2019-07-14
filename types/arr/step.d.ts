/**
 * Returns an array with every n-th item from the input array.
 *
 * @since 1.0.0
 * @param collection Array to use.
 * @param n Step to use.
 * @returns Stepped array.
 * @example
 * step([1, 2, 3, 4, 5, 6], 2)
 * // => [1, 3, 5]
 */
declare const step: <T>(collection: ArrayLike<T>, n: number) => ArrayLike<T>;
export { step };
