import { uniq } from "lodash";

/**
 * Retrieves the corresponding enum item for a value;
 * This can be useful for mapping external data to properly typed data.
 * NOTE: due to the way enums work in TypeScript, a handful of quirks apply:
 * - Do not use enums where the same value is used for multiple items!
 * Either value will be found, however the typing that is returned cannot be guaranteed.
 * - `const` enums cannot be used due to being inlined during compilation.
 *
 * @since 13.0.0
 * @category Enum
 * @param targetEnum Enum to get an item of.
 * @param targetValue Item value to search.
 * @returns Enum item or null if none matched
 * @throws TypeError if not all values in enum are unique.
 * @example
 * enum MyStringEnum {
 *    FOO = "Foo",
 *    BAR = "Bar",
 * }
 * findByValue<MyStringEnum>(MyStringEnum, "Foo");
 * // => MyStringEnum.FOO
 *
 * enum MyStringEnum {
 *    FOO = "Foo",
 *    BAR = "Bar",
 * }
 * findByValue<MyStringEnum>(MyStringEnum, "Fizz");
 * // => null
 */
export const findByValue = <TEnum>(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    targetEnum: Record<string, TEnum[any]>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    targetValue: TEnum[any]
): TEnum | null => {
    const values = Object.values(targetEnum);

    if (uniq(values).length !== values.length) {
        throw new TypeError(
            "Enums where the same value is used for multiple items are not supported!"
        );
    }
    for (const value of values) {
        if (value === targetValue) {
            return (value as unknown) as TEnum;
        }
    }
    return null;
};
