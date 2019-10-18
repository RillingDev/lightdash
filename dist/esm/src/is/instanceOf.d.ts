import { AnyClass } from "./lib/AnyClass";
/**
 * Checks if the value is an instance of any of the given classes.
 * If at least one class gives back true, true is returned.
 *
 * @memberof Is
 * @since 1.0.0
 * @param {any} val Value to check.
 * @param {...Class} targets Classes to check.
 * @returns {boolean} If the value is an instance of the class.
 * @example
 * isInstanceOf([], Array)
 * // => true
 *
 * isInstanceOf([], Map, Set, Array)
 * // => true
 *
 * isInstanceOf({}, Array, Set)
 * // => false
 */
declare const isInstanceOf: (val: any, ...targets: AnyClass[]) => boolean;
export { isInstanceOf, AnyClass };
//# sourceMappingURL=instanceOf.d.ts.map