import objEntries from "../obj/entries";

/**
 * Creates a Map from an Object
 * @param {Object} obj
 * @returns {Map}
 */
const mapFromObject = (obj: object) => new Map(objEntries(obj));

export default mapFromObject;
