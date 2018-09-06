// Using forEachEntryMapper here causes weird dynamic imports in the type defs.
type forEachIterator<T> = (val: T, index: number, arr: T[]) => void;

export { forEachIterator };
