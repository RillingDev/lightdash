import {
    Dictionary,
    isArrayLike,
    isObjectLike,
    List,
    map,
    mapValues,
    NumericDictionary,
} from "lodash";

/**
 * @private
 */
type Collection<T> = Dictionary<T> | NumericDictionary<T> | List<T>;

/**
 * @private
 */
type CollectionIterator<T, U> = (
    val: T,
    key: PropertyKey,
    _collection: Collection<T>
) => U;

// TODO: find a way to properly avoid any's here.
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
const decycle = <TValue,UResult>(
    collection: Collection<TValue>,
    replacer: CollectionIterator<TValue | Collection<TValue>, any> = (): null =>
        null,
    references: WeakSet<any> = new WeakSet()
): Collection<any> => {
    const decycler: CollectionIterator<TValue | Collection<TValue>, any> = (
        value,
        key,
        _collection
    ): any => {
        if (references.has(value)) {
            return replacer(value, key, _collection);
        }

        if (isObjectLike(value)) {
            return decycle(<Collection<TValue>>value, replacer, references);
        }

        return value;
    };

    references.add(collection);
    return isArrayLike(collection)
        ? map(collection, decycler)
        : mapValues(collection, decycler);
};

export { decycle };
