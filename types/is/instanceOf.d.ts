import { anyClass } from "./lib/anyClass";
/**
 * Checks if the value is an instance of any of the given classes.
 * If at least one class gives back true, true is returned.
 *
 * @since 1.0.0
 * @param val Value to check.
 * @param targets Classes to check.
 * @returns If the value is an instance of the class.
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
declare const isInstanceOf: (val: any, ...targets: anyClass[]) => boolean;
export { isInstanceOf, anyClass };
