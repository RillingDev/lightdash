import { Dictionary, List, NumericDictionary } from "lodash";
/**
 * @private
 */
declare type Collection<T> = Dictionary<T> | NumericDictionary<T> | List<T>;
/**
 * @private
 */
declare type CollectionIterator<T, U> = (val: T, key: PropertyKey, _collection: Collection<T>) => U;
/**
 * Replaces every circular reference in an object with a value, defaulting to null.
 *
 * Can take a custom replacer function.
 *
 * @since 6.0.0
 * @category Object
 * @param collection Object to decycle.
 * @param replacer Circular reference value replacer function
 * @param references WeakSet prefilled with encountered references, not recommended to provide this manually.
 * @returns Decycled object.
 * @example
 * const a = {a: {}, b: 1, c: 2};
 *
 * a.a = a;
 *
 * decycle(a)
 * // => {a: null, b: 1, c: 2}
 *
 * decycle(a, key => `_${key}`)
 * // => {a: "_a", b: 1, c: 2}
 */
declare const decycle: <TValue, UResult>(collection: Collection<TValue>, replacer?: CollectionIterator<TValue | Dictionary<TValue> | NumericDictionary<TValue> | List<TValue>, any>, references?: WeakSet<any>) => Collection<any>;
export { decycle };
//# sourceMappingURL=decycle.d.ts.map