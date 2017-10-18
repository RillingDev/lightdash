import isArray from "../is/array";
import arrClone from "./clone";
import arrMapDeep from "./mapDeep";

/**
 * Deeply creates a new array with the values of the input iterable
 *
 * @since 2.0.0
 * @param {any} arr
 * @returns {any[]}
 * @example
 * //returns a = [1,2,3,[5,[6]]], b = [1,2,3,[5,[10]]]
 * const a = [1,2,3,[5,[6]]];
 * const b = arrCloneDeep(a);
 *
 * b[3][1][0] = 10;
 */
const arrCloneDeep = (arr: any): any[] => arrMapDeep(
    arrClone(arr), (val) => isArray(val) ? arrClone(val) : val);

export default arrCloneDeep;
