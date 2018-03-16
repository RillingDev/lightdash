/**
 * Recursively flattens an array.
 *
 * @function arrFlattenDeep
 * @memberof Array
 * @since 1.0.0
 * @param {any[]} arr
 * @returns {any[]}
 * @example
 * arrFlattenDeep([1, 2, [3]])
 * // => [1, 2, 3]
 *
 * arrFlattenDeep([1, 2, [3, [[[5]]], [6, [6]]])
 * // => [1, 2, 3, 5, 6, 6]
 */
declare const arrFlattenDeep: <T>(arr: T[]) => T[];
export default arrFlattenDeep;
