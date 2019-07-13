import { IAnyObject } from "./lib/IAnyObject";
/**
 * Recursively sets every nil property of object to the value from the default object.
 *
 * @since 2.7.0
 * @param {Object} obj Object to default.
 * @param {Object} objDefault Object containing the default values.
 * @returns {Object} Object containing the default values in keys it did not have or had nil value in.
 * @example
 * objDefaultsDeep({a: [1, 2], c: {f: "x"}}, {a: [1, 2, 3], b: 2, c: {f: "y"}})
 * // => {a: [1, 2, 3], b: 2, c: {f: "x"}}
 */
declare const objDefaultsDeep: (obj: IAnyObject, objDefault: IAnyObject) => IAnyObject;
export { objDefaultsDeep };
