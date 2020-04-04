import { forEach, isObject } from "lodash";

/**
 * @private
 */
const deepObjectMutate = (
    target: any,
    mutator: (val: object) => void
): void => {
    if (isObject(target)) {
        forEach(target, (val) => deepObjectMutate(val, mutator));
        mutator(target);
    }
};

export { deepObjectMutate };
