import { isObject } from "lodash";
/**
 * Helper method recursively executing the callback against all object properties.
 * Only object-like values will have the callback executed.
 * If the same reference is encountered after the first time, it will be skipped.
 *
 * @private
 */
const visit = (root, callback) => {
    const visitStack = new WeakSet();
    const visitObject = (target) => {
        visitStack.add(target);
        for (const prop of Object.values(target)) {
            if (isObject(prop) && !visitStack.has(prop)) {
                visitObject(prop);
            }
        }
        callback(target);
    };
    visitObject(root);
};
export { visit };
//# sourceMappingURL=visit.js.map