import arrCount from "./count";

/**
 * Returns an array of all elements that exist in the first array and at least once in one of the other arrays.
 *
 * @function arrIntersection
 * @memberof Array
 * @since 2.0.0
 * @param {any[]} arr
 * @param {...any[]} values
 * @returns {any[]}
 * @example
 * // returns [1, 3]
 * arrIntersection([1, 2, 3], [1, "foo", 3])
 *
 * @example
 * // returns [2]
 * arrIntersection([1, 2, 3], ["foo"], [2, 0, 2])
 */
const arrIntersection = <T>(arr: T[], ...values: any[]): T[] => {
    const valuesCounted = arrCount([].concat(...values));

    // @ts-ignore: ts seems to pull the wrong data for arrCount
    return arr.filter((item: T) => valuesCounted.has(item));
};

export default arrIntersection;
