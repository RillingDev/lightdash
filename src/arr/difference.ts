import forEach from "../for/each";
import arrCount from "./count";

/**
 * Returns an array of all elements that only exist in one of every given arrays
 *
 * @since 2.0.0
 * @param {...any[]} arrs
 * @returns {any[]}
 * @example
 * //returns [2,"foo"]
 * arrDifference([1,2,3],[1,"foo",3])
 *
 * @example
 * //returns [2,"foo"]
 * arrDifference([1,2,3],[1,"foo",3], [0,0,0])
 */
const arrDifference = (...arrs: any[]): any[] => arrCount([].concat(...arrs))
    .filter((pair) => pair[1] === 1)
    .map((pair) => pair[0]);

export default arrDifference;
