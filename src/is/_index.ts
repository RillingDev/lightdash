// File is named "_index.ts" to avoid it being treated as a module index file.

/**
 * Checks if a value is a valid index.
 *
 * A value is a valid index if its positive and an integer.
 *
 * @memberof Is
 * @since 5.0.0
 * @param {any} val Value to check.
 * @returns {boolean} If the value is a valid index.
 * @example
 * isIndex(123)
 * // => true
 *
 * isIndex(0.43)
 * // => false
 *
 * isIndex(-4)
 * // => false
 *
 * isIndex(Infinity)
 * // => false
 */
const isIndex = (val: any): boolean => Number.isInteger(val) && val >= 0;

export { isIndex };
