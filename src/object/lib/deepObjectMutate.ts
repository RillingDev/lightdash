import { forEach, isObject } from "lodash";

/**
 * @private
 */
const deepObjectMutate = (
    target: any,
    mutator: (val: object) => void,
    stack: Set<object> = new Set<object>()
): void => {
    if (isObject(target) && !stack.has(target)) {
        forEach(target, (val) => {
            const newStack = new Set(stack);
            newStack.add(target);
            deepObjectMutate(val, mutator, newStack);
        });
        mutator(target);
    }
};

export { deepObjectMutate };
