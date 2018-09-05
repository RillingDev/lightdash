import { forEachMapper } from "../for/lib/forEachMapper";
import { isNil } from "../is/nil";

/**
 * Collects the values of an array in a map as arrays.
 * If the function returns a nil value, the element will be skipped,
 * otherwise the return value will be used as key.
 *
 * @function arrCollect
 * @memberof Array
 * @since 6.1.0
 * @param {any[]} arr
 * @param {function} fn fn(val: *, index: number, arr: any[])
 * @returns {Map<any, any[]>} Map<val: *, arr: any[]>
 * @example
 * arrCollect([1, 2, 3, 4, 5], val => val % 2)
 * // => Map<any, any[]>{0: [2, 4], 1: [1, 3, 5]}
 */
const arrCollect = <T, U = any>(
    arr: T[],
    fn: forEachMapper<T, U>
): Map<U, T[]> => {
    const result: Map<U, T[]> = new Map();

    arr.forEach((val, index) => {
        const key = fn(val, index, arr);

        if (!isNil(key)) {
            result.set(
                key,
                result.has(key) ? [...(<T[]>result.get(key)), val] : [val]
            );
        }
    });

    return result;
};

export { arrCollect };
