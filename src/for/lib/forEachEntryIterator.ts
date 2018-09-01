import { ITypedObject } from "../../obj/lib/ITypedObject";

type forEachEntryIterator<T> = (
    key: string,
    val: T,
    index: number,
    obj: ITypedObject<T>
) => void;

export { forEachEntryIterator };
