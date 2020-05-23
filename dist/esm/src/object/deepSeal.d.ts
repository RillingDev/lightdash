/**
 * Recursively seals objects, useful for constant objects.
 *
 * This function mutates the input value and calls Object.seal() recursively on all sub-objects.
 *
 * @since 12.0.0
 * @category Object
 * @param target Object to recursively seal.
 * @example
 * const a = {a: {b: 2}, b: [1, {foo: "foo"}], c: 2};
 *
 * deepSeal(a)
 * // => object and all sub-objects are sealed.
 */
declare const deepSeal: (target: object) => void;
export { deepSeal };
//# sourceMappingURL=deepSeal.d.ts.map