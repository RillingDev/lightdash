import objEntries from "../obj/entries";

/**
 * Creates a map from an object
 *
 * @since 1.0.0
 * @param {Object} obj
 * @returns {Map}
 * @example
 * //returns Map{a:1, b:4, c:5}
 * mapFromObject({a:1,b:4,c:5})
 */
const mapFromObject = (obj: object) => new Map(objEntries(obj));

export default mapFromObject;
