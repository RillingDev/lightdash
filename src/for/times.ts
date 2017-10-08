import {
    ForTimesIterator,
} from "../types";

/**
 * wrapper around a simple for-loop
 *
 * @param {number} start
 * @param {number} max
 * @param {number} increase
 * @param {ForTimesIterator} fn
 */
const forTimes = (start: number, max: number, increase: number, fn: ForTimesIterator): void => {
    for (let index = start; index < max; index += increase) {
        fn(index);
    }
};

export default forTimes;
