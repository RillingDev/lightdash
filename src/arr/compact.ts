import isEmpty from "../is/empty";
import isNil from "../is/nil";

/**
 * Filters every empty, undefined or null value from an array out
 *
 * @param {any[]} arr
 * @returns {any[]}
 */
const arrCompact = (arr: any[]): any[] => arr.filter((val) => !isNil(val) && !isEmpty(val));

export default arrCompact;
