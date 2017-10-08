import isDefined from "../is/defined";

/**
 * Checks if a target has a length key
 *
 * @param {any} target
 * @returns {boolean}
 */
const hasLength = (target: any): boolean => isDefined(target.length);

export default hasLength;
