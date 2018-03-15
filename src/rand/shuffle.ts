import arrRemoveIndex from "../arr/removeIndex";
import randNumber from "./number";

/**
 * Shuffles an array randomly and returns it
 *
 * Fisher Yates Shuffle Algorithm
 *
 * @function randShuffle
 * @memberof Random
 * @since 5.0.0
 * @param {any[]} arr
 * @returns {any[]}
 * @example
 * randShuffle([1,2,3])        //=> [3,1,2]
 */
const randShuffle = <T>(arr: T[]): T[] => {
    let input = Array.from(arr);
    const result: T[] = [];

    while (result.length < arr.length) {
        const index = randNumber(0, arr.length - 1);
        const val = input[index];

        result.push(val);
        input = arrRemoveIndex(input, index);
    }

    return result;
};

export default randShuffle;
