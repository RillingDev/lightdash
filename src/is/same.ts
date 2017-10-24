/**
 * Checks if two values are the same
 *
 * @function isSame
 * @memberof Is
 * @since 1.0.0
 * @param {any} a
 * @param {any} b
 * @returns {boolean}
 * @example
 * //returns true
 * const a = [];
 *
 * isSame(1,1)
 * isSame("foo","foo")
 * isSame(a,a)
 *
 * @example
 * //returns false
 * isSame({},{})
 * isSame([],[])
 */
const isSame = (a: any, b: any): boolean => a === b;

export default isSame;
