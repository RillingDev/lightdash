"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
/**
 * Creates a map from an objects entries.
 *
 * @since 1.0.0
 * @memberOf Lang
 * @param object Object to use.
 * @returns Map created from the object.
 * @example
 * toMap({a: 1, b: 4, c: 5})
 * // => Map{a: 1, b: 4, c: 5}
 */
const toMap = (object) => new Map(lodash_1.toPairs(object));
exports.toMap = toMap;
