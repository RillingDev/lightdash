"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
/**
 * Returns a new array with the item at the given index removed.
 *
 * @since 2.8.0
 * @memberOf Array
 * @param collection Collection to use.
 * @param targetIndex Index to remove.
 * @returns Collection with the index removed.
 * @example
 * removeIndex(["foo", "bar", "fizz"], 1)
 * // => ["foo", "fizz"]
 */
const removeIndex = (collection, targetIndex) => lodash_1.filter(collection, (value, index) => index !== targetIndex);
exports.removeIndex = removeIndex;
//# sourceMappingURL=removeIndex.js.map