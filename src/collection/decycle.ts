import {
    Dictionary,
    isArrayLike,
    isObjectLike,
    List,
    ListIterator,
    map,
    mapValues,
    ObjectIterator
} from "lodash";

/**
 * Replaces every circular reference in an object with a value, defaulting to null.
 *
 * Can take a custom replacer function.
 *
 * @since 6.0.0
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
const decycle = <T>(
    collection: Dictionary<T> | List<T>,
    replacer: ObjectIterator<T, any> | ListIterator<T, any> = () => null,
    references: WeakSet<any> = new WeakSet<any>()
): Dictionary<any> | List<any> => {
    // TODO: find a way to properly avoid any's here.
    const decycler = (value: any, key: any, _collection: any) => {
        if (references.has(value)) {
            return replacer(value, key, _collection);
        }

        if (isObjectLike(value)) {
            return decycle(value, replacer, references);
        }

        return value;
    };

    references.add(collection);
    return isArrayLike(collection)
        ? map(collection, decycler)
        : mapValues(collection, decycler);
};

export { decycle };
