import { toPairs } from "lodash";
/**
 * Creates a map from an objects entries, mapping the keys and values.
 *
 * @since 13.0.0
 * @category Lang
 * @param object Object to use.
 * @param keyMapper Function mapping keys.
 * @param valueMapper Function mapping values.
 * @returns Map created from the object.
 * @example
 * toMap({a: 1, b: 4, c: 5}, key => { return { key }; }, value => value * 2)
 * // => Map{{key: "a"}: 2, {key: "b"}: 8, {key: "a"}: 10}
 */
const toMapBy = (object, keyMapper, valueMapper) => new Map(toPairs(object).map(([key, val]) => [
    keyMapper(key, val),
    valueMapper(key, val),
]));
export { toMapBy };
//# sourceMappingURL=toMapBy.js.map