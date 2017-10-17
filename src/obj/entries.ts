import {
    Entry,
} from "../types";

/**
 * Returns an array of the objects entries
 *
 * @since 1.0.0
 * @param {Object} obj
 * @returns {any[]} Array<[key: any, val: any]>]
 */
const objEntries = (obj: object): Entry[] => Object.entries(obj);

export default objEntries;
