import { randNumber } from "./number";

/**
 * Shuffles an array randomly and returns it.
 *
 * Fisher-Yates shuffle algorithm.
 *
 * @memberof Random
 * @since 5.0.0
 * @param {any[]} arr
 * @returns {any[]}
 * @example
 * randShuffle([1,2,3])
 * // => [3,1,2]
 */
const randShuffle = <T>(arr: T[]): T[] => {
    const result = Array.from(arr);
    let length = result.length;

    while (length--) {
        const index = randNumber(0, length);
        const temp = result[length];

        result[length] = result[index];
        result[index] = temp;
    }

    return result;
};

export { randShuffle };
