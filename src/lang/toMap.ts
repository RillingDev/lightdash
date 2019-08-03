import { Dictionary, NumericDictionary, toPairs } from "lodash";

/**
 * Creates a map from an objects entries.
 *
 * @since 1.0.0
 * @memberOf Lang
 * @param object Object to use.
 * @returns Map created from the object.
 * @example
 * toMap({a: 1, b: 4, c: 5})
 * // => Map{a: 1, b: 4, c: 5}
 */
const toMap = <T>(
    object: Dictionary<T> | NumericDictionary<T>
): Map<PropertyKey, T> => new Map(toPairs(object));

export { toMap };
