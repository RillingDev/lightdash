/**
 * Checks if the string is blank (no non-space content).
 *
 * @since 11.0.0
 * @memberOf Is
 * @param str String to use.
 * @returns If the file is blank.
 * @example
 * isBlank("")
 * // => true
 *
 * isBlank("  ")
 * // => true
 *
 * isBlank(" foo ")
 * // => false
 */
declare const isBlank: (str: string) => boolean;
export { isBlank };
