import forEach from "../for/each";

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
const arrCount = <T>(arr: T[]): Map<T, number> => {
    const result: Map<T, number> = new Map();

    forEach(arr, (val: any) =>
        // @ts-ignore: .get() value will always be defined, as we check with .has() beforehand
        result.set(val, result.has(val) ? result.get(val) + 1 : 1)
    );

    return result;
};

export default arrCount;
