/**
 * Checks if an object has a certain own key.
 *
 * `obj.hasOwnProperty` shorthand.
 *
 * @function hasOwnProperty
 * @memberof Has
 * @since 2.8.0
 * @param {Object} obj
 * @param {string} key
 * @returns {boolean}
 * @example
 * // returns true
 * hasOwnProperty([1, 2, 3], "0")
 * hasOwnProperty({foo: 0}, "foo")
 *
 * @example
 * // returns false
 * hasOwnProperty([], "forEach")
 * hasOwnProperty("foo", "replace")
 */
declare const hasOwnProperty: (obj: object, key: string) => boolean;
export default hasOwnProperty;
