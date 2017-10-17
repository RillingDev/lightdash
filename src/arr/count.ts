import forEach from "../for/each";
import {
    ElementCounted,
} from "../types";
import arrClone from "./clone";

/**
 * Counts how many times an element appears in an array
 *
 * @since 2.0.0
 * @param {any[]} arr
 * @returns {any[]} Array<[element: any, count: number]>
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
