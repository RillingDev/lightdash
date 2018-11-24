import { IAnyObject } from "../../obj/lib/IAnyObject";

// Using forEachEntryMapper here causes weird dynamic imports in the type defs.
type forEachEntryIterator<T> = (val: T, key: string, obj: IAnyObject) => void;

export { forEachEntryIterator };
