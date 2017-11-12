import isObjectLike from "../is/objectLike";
import objClone from "./clone";
import objMapDeep from "./mapDeep";

/**
 * Deeply creates a new object with the entries of the input object
 *
 * @function objCloneDeep
 * @memberof Object
 * @since 1.0.0
 * @param {Object} obj
 * @returns {Object}
 * @example
 * //returns a = {a:{b:2,c:{a:10,b:20}}, b = {a:{b:2,c:{a:123,b:20}}}
 * const a = {a:{b:2,c:{a:10,b:20}}};
 * const b = objCloneDeep(a);
 *
 * b.a.c.a = 123;
 */
const objCloneDeep = (obj: object): object => objMapDeep(
    objClone(obj),
    (val: any) => isObjectLike(val) ? objClone(val) : val);

export default objCloneDeep;
