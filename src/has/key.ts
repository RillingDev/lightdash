import isDefined from "../is/defined";

/**
 * Checks if a target has a certain key
 *
 * @since 1.0.0
 * @param {any} target
 * @param {string} key
 * @returns {boolean}
 * @example
 * //returns true
 * isArrayLike([1,2,3],"0")
 * isArrayLike({length:0},"length")
 * isArrayLike("foo","replace")
 *
 * @example
 * //returns false
 * isArrayLike({},"foo")
 * isArrayLike(null,"foo")
 * isArrayLike(1,"foo")
 */
const hasKey = (target: any, key: string): boolean => isDefined(target[key]);

export default hasKey;
