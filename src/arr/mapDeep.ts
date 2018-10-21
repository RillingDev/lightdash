import { forEachMapper } from "../for/lib/forEachMapper";
import { isArray } from "../is/array";

// TODO: Figure out a way to properly use generics here.
/**
 * Recursively maps the values of the input array with the iterator function and return the result.
 *
 * @memberof Array
 * @since 1.0.0
 * @param {any[]} arr
 * @param {function} fn fn(val: *, index: number, arr: any[])
 * @returns {any[]}
 * @example
 * arrMapDeep([2, 4, [1, 1, [16], 4]], val => val * 2)
 * // => [4, 8, [2, 2, [32], 8]]
 */
const arrMapDeep = (arr: any[], fn: forEachMapper<any, any>): any[] =>
    arr.map(
        (val, index) =>
            isArray(val) ? arrMapDeep(val, fn) : fn(val, index, arr)
    );

export { arrMapDeep };
