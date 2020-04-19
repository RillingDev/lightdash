import { isObject } from "lodash";
/**
 * @private
 */
const deepObjectMutate = (target, mutator, stack = new Set()) => {
    if (isObject(target) && !stack.has(target)) {
        for (const val of Object.values(target)) {
            const newStack = new Set(stack);
            newStack.add(target);
            deepObjectMutate(val, mutator, newStack);
        }
        mutator(target);
    }
};
export { deepObjectMutate };
//# sourceMappingURL=deepObjectMutate.js.map