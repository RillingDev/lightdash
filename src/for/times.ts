/**
 * wrapper around a simple for-loop
 *
 * @param {number} start
 * @param {number} max
 * @param {number} increase
 * @param {(val?: number) => void} fn
 */
const forTimes = (start: number, max: number, increase: number, fn: (index?: number) => void): void => {
    for (let index = start; index < max; index += increase) {
        fn(index);
    }
};

export default forTimes;
