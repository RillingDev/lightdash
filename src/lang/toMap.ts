/**
 * Creates a map from the own entries of an object.
 *
 * @since 1.0.0
 * @category Lang
 * @see toMapBy
 * @param object Object to use.
 * @returns Map created from the object.
 * @example
 * toMap({a: 1, b: 4, c: 5})
 * // => Map{"a": 1, "b": 4, "c": 5}
 */
export const toMap = <TValue>(
	object: Record<string, TValue>
): Map<string, TValue> => new Map(Object.entries(object));
