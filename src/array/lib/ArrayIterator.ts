/**
 * Function called for each item in an array.
 */
export type ArrayIterator<TValue, UResult> = (
	value: TValue,
	index: number,
	collection: readonly TValue[],
) => UResult;
