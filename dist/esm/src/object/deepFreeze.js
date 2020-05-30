import { visit } from "./lib/visit";
/**
 * Recursively freezes objects, useful for constant objects.
 *
 * This function mutates the input value and calls Object.freeze() recursively on all sub-objects.
 *
 * @since 12.0.0
 * @category Object
 * @param object Object to recursively freeze.
 * @example
 * const a = {a: {b: 2}, b: [1, {foo: "foo"}], c: 2};
 *
 * deepFreeze(a)
 * // => object and all sub-objects are frozen.
 */
const deepFreeze = (object) => visit(object, Object.freeze);
export { deepFreeze };
//# sourceMappingURL=deepFreeze.js.map