import { identity, toPairs } from "lodash";
/**
 * Creates a map from an objects entries.
 *
 * @since 1.0.0
 * @category Lang
 * @param object Object to use.
 * @param keyMapper Function mapping keys, defaulting to identity.
 * @param valueMapper Function mapping values, defaulting to identity.
 * @returns Map created from the object.
 * @example
 * toMap({a: 1, b: 4, c: 5})
 * // => Map{"a": 1, "b": 4, "c": 5}
 *
 * toMap({a: 1, b: 4, c: 5}, key => { return { key }; }, value => value * 2)
 * // => Map{{key: "a"}: 2, {key: "b"}: 8, {key: "a"}: 10}
 */
const toMap = (object, keyMapper = identity, valueMapper = identity) => new Map(toPairs(object).map(([key, val]) => [keyMapper(key), valueMapper(val)]));
export { toMap };
//# sourceMappingURL=toMap.js.map