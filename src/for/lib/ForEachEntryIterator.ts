import { AnyObject } from "../../obj/lib/AnyObject";

// Using forEachEntryMapper here causes weird dynamic imports in the type defs.
type ForEachEntryIterator<T> = (val: T, key: string, obj: AnyObject) => void;

export { ForEachEntryIterator };
