/**
 * Counts how many times an element appears in an array.
 *
 * @since 2.0.0
 * @param arr Array to count.
 * @returns  Map containing the counted result (`Map<val: *, count: number>`).
 * @example
 * arrCount([1, 1, 2, 2, 1, 3, 4, 1])
 * // => Map<any, number>{1: 4, 2: 2, 3: 1, 4: 1}
 */
declare const arrCount: <T>(arr: T[]) => Map<T, number>;
export { arrCount };
