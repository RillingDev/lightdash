import { ITypedObject } from "../../obj/lib/ITypedObject";

// Using forEachEntryMapper here causes weird dynamic imports in the type defs.
type forEachEntryIterator<T> = (
    key: string,
    val: T,
    index: number,
    obj: ITypedObject<T>
) => void;

export { forEachEntryIterator };
