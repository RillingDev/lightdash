/**
 * Counts how many times an element appears in an array.
 *
 * @function arrCount
 * @memberof Array
 * @since 2.0.0
 * @param {any[]} arr
 * @returns {Map<any, number>} Map<element: any, count: number>
 * @example
 * // returns Map{1: 4, 2: 2, 3: 1, 4: 1}
 * arrCount([1, 1, 2, 2, 1, 3, 4, 1])
 */
declare const arrCount: <T>(arr: T[]) => Map<T, number>;
export default arrCount;
