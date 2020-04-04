import { forEach, isObject } from "lodash";
/**
 * @private
 */
const deepObjectMutate = (target, mutator) => {
    if (isObject(target)) {
        forEach(target, (val) => deepObjectMutate(val, mutator));
        mutator(target);
    }
};
export { deepObjectMutate };
//# sourceMappingURL=deepObjectMutate.js.map