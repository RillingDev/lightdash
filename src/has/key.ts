import isObject from "../is/object";

/**
 * Checks if a target has a certain key
 *
 * @function hasKey
 * @memberof Has
 * @since 1.0.0
 * @param {any} target
 * @param {string} key
 * @returns {boolean}
 * @example
 * //returns true
 * hasKey([1, 2, 3], "0")
 * hasKey({foo: 0}, "foo")
 *
 * @example
 * //returns false
 * hasKey({}, "foo")
 * hasKey("foo", "replace")
 */
const hasKey = (target: any, key: string): boolean => isObject(target) && key in target;

export default hasKey;
