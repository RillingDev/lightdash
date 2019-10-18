import { randNumber } from "./number";
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
const randShuffle = (arr) => {
    const shuffled = Array.from(arr);
    let length = shuffled.length;
    while (length--) {
        const index = randNumber(0, length);
        const temp = shuffled[length];
        shuffled[length] = shuffled[index];
        shuffled[index] = temp;
    }
    return shuffled;
};
export { randShuffle };
//# sourceMappingURL=shuffle.js.map