/**
 * Shuffles an array randomly and returns it.
 *
 * Fisher-Yates shuffle algorithm.
 *
 * @function randShuffle
 * @memberof Random
 * @since 5.0.0
 * @param {any[]} arr
 * @returns {any[]}
 * @example
 * randShuffle([1,2,3])
 * // => [3,1,2]
 */
declare const randShuffle: <T>(arr: T[]) => T[];
export default randShuffle;
