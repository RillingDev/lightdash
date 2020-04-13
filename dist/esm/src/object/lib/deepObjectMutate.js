import { forEach, isObject } from "lodash";
/**
 * @private
 */
const deepObjectMutate = (target, mutator, stack = []) => {
    if (isObject(target) && !stack.includes(target)) {
        forEach(target, (val) => deepObjectMutate(val, mutator, [...stack, target]));
        mutator(target);
    }
};
export { deepObjectMutate };
//# sourceMappingURL=deepObjectMutate.js.map