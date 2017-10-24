/**
 * Creates a new object with the entries of the input object
 *
 * @function objClone
 * @memberof Object
 * @since 1.0.0
 * @param {object} obj
 * @returns {object}
 * @example
 * //returns a = {a:4, b:2}, b = {a:10, b:2}
 * const a = {a:4, b:2};
 * const b = objClone(a);
 *
 * b.a = 10;
 */
const objClone = (obj: object): object => Object.assign({}, obj);

export default objClone;
