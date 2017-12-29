/**
 * Adds a property to an object with optional custom flags.
 *
 * `Object.defineProperty` shorthand.
 *
 * @function objDefineProperty
 * @memberof Object
 * @since 2.8.0
 * @param {Object} obj
 * @param {string} key
 * @param {any} val
 * @param {boolean} [enumerable=true]
 * @param {boolean} [writable=true]
 * @param {boolean} [configurable=true]
 * @returns {Object}
 * @example
 * // returns a = {"foo": 1}
 * const a={};
 * objDefineProperty(a, "foo", 1)
 */
declare const objDefineProperty: (obj: object, key: string, val: any, enumerable?: boolean, writable?: boolean, configurable?: boolean) => object;
export default objDefineProperty;