import isTypeOf from "./typeOf";

/**
 * Checks if a value is a symbol
 *
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * //returns true
 * isSymbol(Symbol())
 *
 * @example
 * //returns false
 * isSymbol("foo")
 */
const isSymbol = (val: any): boolean => isTypeOf(val, "symbol");

export default isSymbol;
