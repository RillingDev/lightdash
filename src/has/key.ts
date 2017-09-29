import isDefined from "../is/defined";

/**
 * Checks if a target has a certain key
 *
 * @param {any} target
 * @param {string} key
 * @returns {boolean}
 */
const hasKey = (target: any, key: string): boolean => isDefined(target[key]);

export default hasKey;
