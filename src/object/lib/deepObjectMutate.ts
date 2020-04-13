import { forEach, isObject } from "lodash";

/**
 * @private
 */
const deepObjectMutate = (
    target: any,
    mutator: (val: object) => void,
    stack: object[] = []
): void => {
    if (isObject(target) && !stack.includes(target)) {
        forEach(target, (val) =>
            deepObjectMutate(val, mutator, [...stack, target])
        );
        mutator(target);
    }
};

export { deepObjectMutate };
