/**
 * Returns a new array with every n-th item
 *
 * @since 1.0.0
 * @param {any[]} arr
 * @param {number} step
 * @returns {any[]}
 */
const arrStep = (arr: any[], step: number): any[] => arr.filter((val, index) => index % step === 0);

export default arrStep;
