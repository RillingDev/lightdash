import { visit } from "./lib/visit";
/**
 * Recursively seals objects, useful for constant objects.
 *
 * This function mutates the input value and calls Object.seal() recursively on all sub-objects.
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
const deepSeal = (object) => visit(object, Object.seal);
export { deepSeal };
//# sourceMappingURL=deepSeal.js.map