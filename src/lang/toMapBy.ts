import type { Dictionary, NumericDictionary } from "lodash";
import { toPairs } from "lodash";

/**
 * Creates a map from an objects entries.
 *
 * @since 13.0.0
 * @category Lang
 * @param object Object to use.
 * @param keyMapper Function mapping an object key to a map key.
 * @param valueMapper Function mapping an object value to a map value.
 * @returns Map created from the object.
 * @example
 * toMap({a: 1, b: 4, c: 5}, key => { return { key }; }, value => value * 2)
 * // => Map{{key: "a"}: 2, {key: "b"}: 8, {key: "a"}: 10}
 */
const toMapBy = <TValue, UKey, VInitialValue>(
	object: Dictionary<VInitialValue> | NumericDictionary<VInitialValue>,
	keyMapper: (key: string, val: VInitialValue) => UKey,
	valueMapper: (key: string, value: VInitialValue) => TValue
): Map<UKey, TValue> =>
	new Map(
		toPairs(object).map(([key, val]) => [
			keyMapper(key, val),
			valueMapper(key, val),
		])
	);

export { toMapBy };
