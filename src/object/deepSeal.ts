import { visit } from "./lib/visit.js";

/**
 * Recursively seals objects, useful for constant objects.
 *
 * This function mutates the input value and seals all sub-objects recursively.
 *
 * @since 12.0.0
 * @category Object
 * @param object Object to recursively seal.
 * @example
 * const a = {a: {b: 2}, b: [1, {foo: "foo"}], c: 2};
 *
 * deepSeal(a)
 * // => object and all sub-objects are sealed.
 */
export const deepSeal = (object: object): void => visit(object, Object.seal);
