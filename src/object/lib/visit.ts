/**
 * @internal
 */
const isObject = (value: unknown): value is object =>
	value != null && typeof value == "object";

/**
 * Helper method recursively executing the callback against all own properties.
 * Only non-function object values will have the callback executed.
 * If the same reference is encountered after the first time, it will be skipped.
 *
 * @internal
 */
export const visit = (
	root: object,
	callback: (value: object) => void,
): void => {
	const visitStack = new WeakSet();
	const visitObject = (target: object): void => {
		visitStack.add(target);
		Object.values(target).forEach((value) => {
			if (isObject(value) && !visitStack.has(value)) {
				visitObject(value);
			}
		});
		callback(target);
	};
	visitObject(root);
};
