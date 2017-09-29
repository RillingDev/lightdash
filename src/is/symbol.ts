import isTypeOf from "./typeOf";

/**
 * Checks if a value is a symbol
 *
 * @param {*} val
 * @returns {boolean}
 */
const isSymbol = (val: any): boolean => isTypeOf(val, "symbol");

export default isSymbol;
