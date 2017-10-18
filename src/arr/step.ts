/**
 * Returns a new array with every n-th item from the input array
 *
 * @since 1.0.0
 * @param {any[]} arr
 * @param {number} step
 * @returns {any[]}
 * @example
 * //returns [2,4,6]
 * arrStep([1,2,3,4,5,6],2)
 */
const arrStep = (arr: any[], step: number): any[] => arr.filter((val, index) => index % step === 0);

export default arrStep;
