/**
 * Creates a new object with the entries of the input object
 *
 * @param {object} obj
 * @returns {object}
 */
const objClone = (obj: object): object => Object.assign({}, obj);

export default objClone;
