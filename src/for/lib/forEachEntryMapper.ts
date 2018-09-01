import { ITypedObject } from "../../obj/lib/ITypedObject";

type forEachEntryMapper<T, U> = (
    key: string,
    val: T,
    index: number,
    obj: ITypedObject<T>
) => U;

export { forEachEntryMapper };
