import { ITypedObject } from "../obj/lib/ITypedObject";

/**
 * Creates a map from an object.
 *
 * @memberof Map
 * @since 1.0.0
 * @param {Object} obj Object to use.
 * @returns {Map} Map created from the object.
 * @example
 * mapFromObject({a: 1, b: 4, c: 5})
 * // => Map<string,number>{a: 1, b: 4, c: 5}
 */
const mapFromObject = <T>(obj: ITypedObject<T>): Map<string, T> =>
    new Map(Object.entries(obj));

export { mapFromObject };
