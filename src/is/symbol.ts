import { isTypeOf } from "./typeOf";

/**
 * Checks if a value is a symbol.
 *
 * @memberof Is
 * @since 1.0.0
 * @param {any} val Value to check.
 * @returns {boolean} If the value is a symbol.
 * @example
 * isSymbol(Symbol())
 * // => true
 *
 * isSymbol(Symbol.split)
 * // => true
 *
 * isSymbol("foo")
 * // => false
 */
const isSymbol = (val: any): val is symbol => isTypeOf(val, "symbol");

export { isSymbol };
