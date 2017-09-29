/**
 * Checks if a value is a number as a string
 *
 * @param {*} val
 * @returns {boolean}
 */
const isStringNumber = (val: any): boolean => !isNaN(Number(val));

export default isStringNumber;
