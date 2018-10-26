/**
 * Shuffles an array randomly and returns it, using the Fisher-Yates shuffle algorithm.
 *
 * @memberof Random
 * @since 5.0.0
 * @param {any[]} arr Array to shuffle
 * @returns {any[]} Shuffled array.
 * @example
 * randShuffle([1,2,3])
 * // => [3,1,2]
 */
declare const randShuffle: <T>(arr: T[]) => T[];
export { randShuffle };
