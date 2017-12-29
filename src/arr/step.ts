/**
 * Returns a new array with every n-th item from the input array.
 *
 * @function arrStep
 * @memberof Array
 * @since 1.0.0
 * @param {any[]} arr
 * @param {number} step
 * @returns {any[]}
 * @example
 * // returns [1, 3, 5]
 * arrStep([1, 2, 3, 4, 5, 6], 2)
 */
const arrStep = <T>(arr: T[], step: number): T[] =>
    arr.filter((val: any, index: number) => index % step === 0);

export default arrStep;
