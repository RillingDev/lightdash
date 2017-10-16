import forEachEntry from "../for/eachEntry";
import hasKey from "../has/key";
import objKeys from "../obj/keys";
import isObject from "./object";

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

        // tslint:disable-next-line
        forEachEntry(a, (val_a: any, key: string): void => {
            // Only Check if the comparison didnt fail already
            if (result === true) {
                if (hasKey(b, key)) {
                    // tslint:disable-next-line
                    const val_b = b[key];

                    result = isEqual(val_a, val_b);
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
