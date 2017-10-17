import forEach from "../for/each";
import {
    ElementCounted,
} from "../types";
import arrClone from "./clone";

/**
 * Counts how many times an element appears in an array and returns an array containing [value,count] pairs
 *
 * @since 2.0.0
 * @param {any[]} arr
 * @returns {any[]} Array<[element: any, count: number]>
 * @example
 * //returns [[1,4],[2,2],[3,1],[4,1]]
 * arrCount([1,1,2,2,1,3,4,1])
 */
const arrCount = (arr: any[]): ElementCounted[] => {
    const result: Map<any, number> = new Map();

    forEach(arr, (val) => {
        result.set(val, result.has(val) ? result.get(val) + 1 : 1);
    });

    // tslint:disable-next-line
    return arrClone(result);
};

export default arrCount;
