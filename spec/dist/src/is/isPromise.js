"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Checks if a value is a promise.
 *
 * @since 3.0.0
 * @memberOf Is
 * @param value Value to check.
 * @returns If the value is a promise.
 * @example
 * isPromise(new Promise((resolve, reject) => resolve("foo")));
 * // => true
 *
 * isPromise(() => "foo");
 * // => false
 */
const isPromise = (value) => value instanceof Promise;
exports.isPromise = isPromise;
