import {
    Entry,
} from "../types";

/**
 * Returns an array of the objects entries
 *
 * @param {Object} obj
 * @returns {Entry[]}
 */
const objEntries = (obj: object): Entry[] => Object.entries(obj);

export default objEntries;
