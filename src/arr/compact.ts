import isEmpty from "../is/empty";
import isNil from "../is/nil";

/**
 * Filters every empty, undefined or null value out
 *
 * @since 1.0.0
 * @param {any[]} arr
 * @returns {any[]}
 * @example
 * //returns [1,2,3,4,5]
 * arrCompact([1,"","",2,3,null,4,undefined,5,""])
 */
const arrCompact = (arr: any[]): any[] => arr.filter((val) => !isNil(val) && !isEmpty(val));

export default arrCompact;
