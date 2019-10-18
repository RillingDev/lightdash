/**
 * Counts how many times an element appears in an array.
 *
 * @memberof Array
 * @since 2.0.0
 * @param {any[]} arr Array to count.
 * @returns {Map<any, number>}  Map containing the counted result (`Map<val: *, count: number>`).
 * @example
 * arrCount([1, 1, 2, 2, 1, 3, 4, 1])
 * // => Map<any, number>{1: 4, 2: 2, 3: 1, 4: 1}
 */
const arrCount = (arr) => {
    const counted = new Map();
    arr.forEach(val => counted.set(val, counted.has(val) ? counted.get(val) + 1 : 1));
    return counted;
};
export { arrCount };
//# sourceMappingURL=count.js.map