import objEntries from "../obj/entries";

/**
 * Creates a Map from an Object
 *
 * @since 1.0.0
 * @param {Object} obj
 * @returns {Map}
 */
const mapFromObject = (obj: object) => new Map(objEntries(obj));

export default mapFromObject;
