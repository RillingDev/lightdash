/**
 * Retrieves the corresponding enum item for a key;
 * This can be useful for mapping external data to properly typed data.
 * NOTE: due to the way enums work in TypeScript, a handful of quirks apply:
 * - `const` enums cannot be used due to being inlined during compilation.
 *
 * @since 13.0.0
 * @category Enum
 * @param targetEnum Enum to get an item of.
 * @param targetKey Item key to search.
 * @returns Enum item or null if none matched
 * @example
 * enum MyStringEnum {
 *    FOO = "Foo",
 *    BAR = "Bar",
 * }
 * findByKey<MyStringEnum>(MyStringEnum, "FOO");
 * // => MyStringEnum.FOO
 *
 * enum MyStringEnum {
 *    FOO = "Foo",
 *    BAR = "Bar",
 * }
 * findByKey<MyStringEnum>(MyStringEnum, "FIZZ");
 * // => null
 */
export const findByKey = <TEnum>(
    targetEnum: Record<string, TEnum>,
    targetKey: string
): TEnum | null => {
    if (targetKey in targetEnum) {
        return targetEnum[targetKey];
    }
    return null;
};
