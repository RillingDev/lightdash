"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const groupMapReducingBy_1 = require("./groupMapReducingBy");
/**
 * Collects the values of an array in a map as array values,
 * using the return value of the function as key.
 *
 * @since 6.1.0
 * @memberOf Array
 * @param collection Collection to group.
 * @param keyFn Function to use for grouping.
 * @returns Grouped map.
 * @example
 * groupMapBy([1, 2, 3, 4, 5], val => val % 2)
 * // => Map{0: [2, 4], 1: [1, 3, 5]}
 */
const groupMapBy = (collection, keyFn) => groupMapReducingBy_1.groupMapReducingBy(collection, keyFn, () => [], (current, value) => lodash_1.concat(current, value));
exports.groupMapBy = groupMapBy;
