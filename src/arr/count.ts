import forEach from "../for/each";

/**
 * Counts how many times an element appears in an array and returns a Map<element: any, count: number>
 *
 * @function arrCount
 * @memberof Array
 * @since 2.0.0
 * @param {any[]} arr
 * @returns {Map<any, number>} Map<element: any, count: number>
 * @example
 * //returns Map{1:4, 2:2, 3:1, 4:1}
 * arrCount([1,1,2,2,1,3,4,1])
 */
const arrCount = (arr: any[]): Map<any, number> => {
    const result: Map<any, number> = new Map<any, number>();

    forEach(arr, (val: any) => {
        // @ts-ignore: .get() value will always be defined, as we check with .has() beforehand
        result.set(val, result.has(val) ? result.get(val) + 1 : 1);
    });

    return result;
};

export default arrCount;
