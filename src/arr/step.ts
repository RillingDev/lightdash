/**
 * Returns a new array with every n-th item
 *
 * @param {any[]} arr
 * @param {number} step
 * @returns {any[]}
 */
const arrStep = (arr: any[], step: number): any[] => arr.filter((val, index) => index % step === 0);

export default arrStep;
