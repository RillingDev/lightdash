import isArray from "../is/array";
import arrClone from "./clone";

/**
 * Deeply creates a new array with the values of the input array
 *
 * @param {any[]} arr
 * @returns {any[]}
 */
const arrCloneDeep = (arr: any[]): any[] => arrMapDeep(
    arrClone(arr), (val) => isArray(val) ? arrClone(val) : val);

export default arrCloneDeep;
