/**
 * Finds all regex matches in a string. Meant to be used with a global regex.
 *
 * @since 11.0.0
 * @category String
 * @param str String to match against.
 * @param pattern SRegex pattern to match.
 * @returns Array of all matches.
 * @example
 * matchAll("Kitten", /t/g)
 * // => [[0: "t"], [1: "t"]]
 *
 * matchAll("Kitten", /f/g)
 * // => []
 */
declare const matchAll: (str: string, pattern: RegExp) => RegExpExecArray[];
export { matchAll };
//# sourceMappingURL=matchAll.d.ts.map