/**
 * Returns an array of the objects values
 *
 * @since 1.0.0
 * @param {Object} obj
 * @returns {any[]}
 * @example
 * //returns [1,2,3]
 * objValues({a:1,b:2,c:3})
 */
const objValues = (obj: object): any[] => Object.values(obj);

export default objValues;
