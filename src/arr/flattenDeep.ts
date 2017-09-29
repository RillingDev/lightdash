import forEach from "../for/each";
import isArray from "../is/array";

/**
 * Recursively flattens an array
 *
 * @param {any[]} arr
 * @returns {any[]}
 */
const arrFlattenDeep = (arr: any[]) => {
    const result: any[] = [];

    forEach(arr, (val) => {
        if (isArray(val)) {
            result.push(...arrFlattenDeep(val));
        } else {
            result.push(val);
        }
    });

    return result;
};

export default arrFlattenDeep;