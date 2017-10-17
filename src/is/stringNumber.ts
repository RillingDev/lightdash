/**
 * Checks if a value is a number as a string
 *
 * @since 1.0.0
 * @param {string} val
 * @returns {boolean}
 * @example
 * //returns true
 * isStringNumber("123")
 * isStringNumber("0b010")
 *
 * @example
 * //returns false
 * isStringNumber("foo")
 */
const isStringNumber = (val: string): boolean => !isNaN(Number(val));

export default isStringNumber;
