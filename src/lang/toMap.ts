import { toMapBy } from "./toMapBy.js";

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
	object: Record<PropertyKey, TValue> | ArrayLike<TValue>
): Map<string, TValue> =>
	toMapBy(
		object,
		(key) => key,
		(key, value) => value
	);
