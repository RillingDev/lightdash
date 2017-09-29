import isObject from "../is/object";
import objClone from "./clone";
import objMapDeep from "./mapDeep";

/**
 * Deeply creates a new object with the entries of the input object
 *
 * @param {Object} obj
 * @returns {Object}
 */
const objCloneDeep = (obj: object): object => objMapDeep(objClone(obj), (val) => isObject(val) ? objClone(val) : val);

export default objCloneDeep;
