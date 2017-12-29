import { forTimesIterator } from "../types";
/**
 * Execute a function n times
 *
 * Wrapper around a simple for-loop to have a cleaner API and better minified code
 *
 * @function forTimes
 * @memberof For
 * @param {number} start
 * @param {number} max
 * @param {number} increase
 * @param {function} fn fn(val: number)
 * @example
 * // returns a = [2, 4, 6, 8, 10]
 * const a = [];
 *
 * forTimes(1, 6, 1, val => a.push(val * 2))
 */
declare const forTimes: (start: number, max: number, increase: number, fn: forTimesIterator) => void;
export default forTimes;
