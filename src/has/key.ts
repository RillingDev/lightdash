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
 * hasKey([1,2,3],"0")
 * hasKey({length:0},"length")
 * hasKey("foo","replace")
 *
 * @example
 * //returns false
 * hasKey({},"foo")
 * hasKey(null,"foo")
 * hasKey(1,"foo")
 */
const hasKey = (target: any, key: string): boolean => isDefined(target[key]);

export default hasKey;
