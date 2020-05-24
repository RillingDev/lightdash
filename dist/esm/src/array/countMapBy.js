import { groupMapReducingBy } from "./groupMapReducingBy";
/**
 * Counts the values of an array in a map,
 * using the return value of the function as key.
 *
 * @since 12.0.0
 * @category Array
 * @param collection Collection to count.
 * @param keyMapper Function to use for key generation.
 * @returns Count map.
 * @example
 * countMapBy([1, 2, 4, 2, 4, 4], val => val)
 * // => Map{1: 1, 2: 2, 4: 3}
 */
const countMapBy = (collection, keyMapper) => groupMapReducingBy(collection, keyMapper, () => 0, (current) => current + 1);
export { countMapBy };
//# sourceMappingURL=countMapBy.js.map