import isDefined from "../is/defined";

/**
 * Checks if a target has a length key
 *
 * @since 2.0.0
 * @param {any} target
 * @returns {boolean}
 * @example
 * //returns true
 * isArrayLike([])
 * isArrayLike({length:0})
 * isArrayLike("foo")
 *
 * @example
 * //returns false
 * isArrayLike({})
 * isArrayLike(null)
 * isArrayLike(1)
 */
const hasLength = (target: any): boolean => isDefined(target.length);

export default hasLength;
