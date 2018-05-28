import { forEachMapper } from "../for/lib/iterators";

/**
 * Collects the values of an array in a Map as arrays.
 *
 * @function arrCollect
 * @memberof Array
 * @since 6.1.0
 * @param {any[]} arr
 * @param {function} fn fn(val: any, index: number, arr: any[])
 * @returns {Map<any, any[]>} Map<val: any, arr: any[]>
 * @example
 * arrCollect([1, 2, 3, 4, 5], val => val % 2)
 * // => Map<any, any[]>{0: [2, 4], 1: [1, 3, 5]}
 */
const arrCollect = <T>(arr: T[], fn: forEachMapper<T, any>): Map<any, T[]> => {
    const result: Map<any, T[]> = new Map();

    arr.forEach((val, index) => {
        const key = fn(val, index, arr);

        result.set(
            key,
            result.has(key) ? [...(<T[]>result.get(key)), val] : [val]
        );
    });

    return result;
};

export { arrCollect };
