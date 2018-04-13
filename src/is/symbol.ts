import isTypeOf from "./typeOf";

/**
 * Checks if a value is a symbol.
 *
 * @function isSymbol
 * @memberof Is
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * isSymbol(Symbol())
 * // => true
 *
 * isSymbol(Symbol.split)
 * // => true
 *
 * @example
 * isSymbol("foo")
 * // => false
 */
const isSymbol = (val: any): boolean => isTypeOf(val, "symbol");

export default isSymbol;
