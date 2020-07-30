/**
 * Gets the value of a map entry by its key, throwing if the map does not contain the key.
 *
 * @since 13.0.0
 * @category Map
 * @param map Map to check against.
 * @param key Key to get the value for.
 * @returns The corresponding value.
 * @throws Error if map does not contain key.
 * @example
 * getExistingElseThrow(new Map([["key", 1]]), "key")
 * // => 1
 *
 * getExistingElseThrow(new Map([["key", 1]]), "foo")
 * // => throws TypeError
 */
const getExistingElseThrow = <TKey, UValue>(
    map: Map<TKey, UValue>,
    key: TKey
): UValue => {
    if (!map.has(key)) {
        const mapKeysVisualization = JSON.stringify(Array.from(map.keys()));
        throw new TypeError(
            `Could not find key '${String(
                key
            )}' in map keys '${mapKeysVisualization}'.`
        );
    }
    return map.get(key)!;
};

export { getExistingElseThrow };
