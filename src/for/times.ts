import {
    ForTimesIterator,
} from "../types";

/**
 * Wrapper around a simple for-loop
 *
 * @function forTimes
 * @memberof For
 * @param {number} start
 * @param {number} max
 * @param {number} increase
 * @param {function} fn fn(val: number)
 * @example
 * //returns [2,4,6,8,10]
 * const a = [];
 *
 * forTimes(1,6,1,val=>a.push(val*2))
 */
const forTimes = (start: number, max: number, increase: number, fn: ForTimesIterator): void => {
    for (let index = start; index <= max; index += increase) {
        fn(index);
    }
};

export default forTimes;
