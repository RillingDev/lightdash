import { forTimesIterator } from "../types";

/**
 * Execute a function n times
 *
 * Wrapper around a simple for-loop to have better minified code
 *
 * @function forTimes
 * @memberof For
 * @param {number} start
 * @param {number} max
 * @param {number} increase
 * @param {function} fn fn(index: number)
 * @example
 * // returns a = [2, 4, 6, 8, 10]
 * const a = [];
 *
 * forTimes(1, 6, 1, index => a.push(index * 2))
 */
const forTimes = (
    start: number,
    max: number,
    increase: number,
    fn: forTimesIterator
): void => {
    for (let index = start; index <= max; index += increase) {
        fn(index);
    }
};

export default forTimes;
