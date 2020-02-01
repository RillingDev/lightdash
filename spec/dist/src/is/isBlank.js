"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
/**
 * Checks if the string is blank (no non-space content).
 *
 * @since 11.0.0
 * @category Is
 * @param str String to use.
 * @returns If the file is blank.
 * @example
 * isBlank("")
 * // => true
 *
 * isBlank("  ")
 * // => true
 *
 * isBlank(" foo ")
 * // => false
 */
const isBlank = (str) => lodash_1.isEmpty(str.trim());
exports.isBlank = isBlank;
