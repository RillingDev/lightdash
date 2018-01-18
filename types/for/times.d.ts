import { forTimesIterator } from "../types";
/**
 * Execute a function n times
 *
 * Wrapper around a simple for-loop to have better minified code
 *
 * @function forTimes
 * @memberof For
 * @param {number} n
 * @param {function} fn fn(index: number)
 * @example
 * // returns a = [2, 4, 6, 8, 10]
 * const a = [];
 *
 * forTimes(1, index => a.push(index * 2))
 */
declare const forTimes: (n: number, fn: forTimesIterator) => void;
export default forTimes;
