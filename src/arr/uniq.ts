import arrClone from "./clone";

// tslint:disable

/**
 * Returns an array of all unique elements in an array
 *
 * @since 1.0.0
 * @param {any[]} arr
 * @returns {any[]}
 */
const arrUniq = (arr: any[]): any[] => arrClone(new Set(arr));


export default arrUniq;
