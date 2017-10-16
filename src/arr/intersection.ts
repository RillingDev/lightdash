import forEach from "../for/each";
import arrCount from "./count";

/**
 * Returns an array of all elements that exist in all given arrays
 *
 * @param {...any[]} arrs
 * @returns {any[]}
 */
const arrIntersection = (...arrs: any[]): any[] => arrCount([].concat(...arrs))
    .filter((pair) => pair[1] === arrs.length)
    .map((pair) => pair[0]);

export default arrIntersection;
