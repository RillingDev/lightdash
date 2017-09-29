import objEntries from "../obj/entries";
import {
    ForEachEntryIterator,
} from "../types";
import forEach from "./each";

/**
 * Iterate over each entry of an object
 *
 * @param {object} obj
 * @param {ForEachEntryIterator} fn
 */
const forEachEntry = (obj: object, fn: ForEachEntryIterator): void => {
    forEach(objEntries(obj), (entry, index) => {
        fn(entry[1], entry[0], index, obj);
    });
};

export default forEachEntry;
