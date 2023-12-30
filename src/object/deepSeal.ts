import { visit } from "./lib/visit.js";

/**
 * Recursively seals an objects and all own non-function sub-objects.
 *
 * Note that the input object is being mutated.
 *
 * @since 12.0.0
 * @category Object
 * @see deepFreeze
 * @see Object.seal
 * @param object Object to recursively seal.
 * @example
 * const a = {a: {b: 2}, b: [1, {foo: "foo"}], c: 2};
 *
 * deepSeal(a)
 * // => object and all sub-objects are sealed.
 */
export const deepSeal = (object: object): void => {
	visit(object, Object.seal);
};
