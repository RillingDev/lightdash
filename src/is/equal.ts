import isObject from "./object";
import hasKey from "../has/key";
import forEachEntry from "../for/eachEntry";

/**
 * Deeply checks if the contents of two values are the same
 *
 * @param {*} a
 * @param {*} b
 * @returns {boolean}
 */
const isEqual = (a: any, b: any): boolean => {
    if (a === b) {
        return true;
    }

    if (isObject(a) && isObject(b) && objKeys(a).length === objKeys(b).length) {
        let result = true;

        forEachEntry(a, (aVal: any, key: string): void => {
            // Only Check if the comparison didnt fail already
            if (result === true) {
                if (hasKey(b, key)) {
                    const bVal = b[key];

                    result = isEqual(aVal, bVal);
                } else {
                    result = false;
                }
            }
        });

        return result;
    }

    return false;
};

export default isEqual;
