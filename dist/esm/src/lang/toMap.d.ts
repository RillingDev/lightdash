import { Dictionary, NumericDictionary } from "lodash";
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
declare const toMap: <TValue, UKey, VInitialValue>(object: Dictionary<VInitialValue> | NumericDictionary<VInitialValue>, keyMapper?: (key: string | number | symbol) => UKey, valueMapper?: (value: VInitialValue) => TValue) => Map<UKey, TValue>;
export { toMap };
//# sourceMappingURL=toMap.d.ts.map