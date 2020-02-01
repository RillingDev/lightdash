"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
/**
 * Creates a PascalCase string from a string.
 *
 * @since 6.2.0
 * @category String
 * @param str String to use.
 * @returns PascalCase string of the input string.
 * @example
 * pascalCase("fooBar")
 * // => "FooBar"
 *
 * pascalCase("__foo_bar__")
 * // => "FizzBuzzBazz"
 */
const pascalCase = (str) => lodash_1.upperFirst(lodash_1.camelCase(str));
exports.pascalCase = pascalCase;
