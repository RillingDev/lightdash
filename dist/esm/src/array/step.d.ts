import { List } from "lodash";
/**
 * Returns a new collection with every n-th item from the input array.
 *
 * @since 1.0.0
 * @memberOf Array
 * @param collection Collection to use.
 * @param n Step to use.
 * @returns Stepped collection.
 * @example
 * step([1, 2, 3, 4, 5, 6], 2)
 * // => [1, 3, 5]
 */
declare const step: <T>(collection: List<T>, n: number) => List<T>;
export { step };
//# sourceMappingURL=step.d.ts.map