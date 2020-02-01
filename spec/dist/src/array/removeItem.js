"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const removeIndex_1 = require("./removeIndex");
/**
 * Returns a new collection with instances of the given item removed.
 *
 * @since 2.8.0
 * @category Array
 * @param collection Collection to use.
 * @param targetValue Item to remove.
 * @param removeAll If all occurrences should be removed, otherwise just the first occurrence will.
 * @returns Collection with the item removed.
 * @example
 * removeItem(["foo", "bar", "fizz", "bar"], "bar")
 * // => ["foo", "fizz"]
 *
 * removeItem(["foo", "bar", "fizz", "bar"], "bar", false)
 * // => ["foo", "fizz", "bar"]
 */
const removeItem = (collection, targetValue, removeAll = true) => removeAll
    ? lodash_1.filter(collection, value => value !== targetValue)
    : removeIndex_1.removeIndex(collection, lodash_1.indexOf(collection, targetValue));
exports.removeItem = removeItem;
