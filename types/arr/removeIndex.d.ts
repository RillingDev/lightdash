/**
 * Returns an array with the item at the index removed.
 *
 * @since 2.8.0
 * @param collection Array to use.
 * @param targetIndex Index to remove.
 * @returns Array with the index removed.
 * @example
 * removeIndex(["foo", "bar", "fizz"], 1)
 * // => ["foo", "fizz"]
 */
declare const removeIndex: <T>(collection: ArrayLike<T>, targetIndex: number) => T[];
export { removeIndex };
