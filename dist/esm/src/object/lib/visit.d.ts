/**
 * Helper method recursively executing the callback against all object properties.
 * Only object-like values will have the callback executed.
 * If the same reference is encountered after the first time, it will be skipped.
 *
 * @private
 */
declare const visit: (root: object, callback: (val: object) => void) => void;
export { visit };
//# sourceMappingURL=visit.d.ts.map