import { visit } from "./lib/visit.js";

/**
 * Recursively freezes an objects and all own non-function sub-objects.
 *
 * Note that the input object is being mutated.
 *
 * @since 12.0.0
 * @category Object
 * @see deepSeal
 * @see Object.freeze
 * @param object Object to recursively freeze.
 * @example
 * const a = {a: {b: 2}, b: [1, {foo: "foo"}], c: 2};
 *
 * deepFreeze(a)
 * // => object and all sub-objects are frozen.
 */
export const deepFreeze = (object: object): void => {
	visit(object, Object.freeze);
};
