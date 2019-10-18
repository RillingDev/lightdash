// Using forEachEntryMapper here causes weird dynamic imports in the type defs.
type ForEachIterator<T> = (val: T, index: number, arr: T[]) => void;

export { ForEachIterator };
