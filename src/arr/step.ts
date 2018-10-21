/**
 * Returns an array with every n-th item from the input array.
 *
 * @memberof Array
 * @since 1.0.0
 * @param {any[]} arr
 * @param {number} step
 * @returns {any[]}
 * @example
 * arrStep([1, 2, 3, 4, 5, 6], 2)
 * // => [1, 3, 5]
 */
const arrStep = <T>(arr: T[], step: number): T[] =>
    arr.filter((val, index) => index % step === 0);

export { arrStep };
