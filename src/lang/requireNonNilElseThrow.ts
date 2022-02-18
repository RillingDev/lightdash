/**
 * Throws an exception if the value is nil, returns the value otherwise.
 *
 * @since 13.0.0
 * @category Lang
 * @param value Value to check.
 * @param errorSupplier Supplier for the error to be thrown.
 * @returns The value provided with guarantee to be non-nil.
 * @throws Error if value is nil.
 * @example
 * requireNonNilElseThrow("foo", () => new TypeError())
 * // => "foo"
 *
 * requireNonNilElseThrow(null, () => new TypeError())
 * // => throws TypeError
 */
export const requireNonNilElseThrow = <T>(
	value: T | null | undefined,
	errorSupplier: () => Error
): T => {
	if (value == null) {
		throw errorSupplier();
	}
	return value;
};
