import { ITypedObject } from "../../obj/lib/typedObject";

type forEachIterator<T> = (val: T, index: number, arr: T[]) => void;
type forEachMapper<T, U> = (val: T, index: number, arr: T[]) => U;

type forEachEntryIterator<T> = (
    key: string,
    val: T,
    index: number,
    obj: ITypedObject<T>
) => void;

type forEachEntryMapper<T, U> = (
    key: string,
    val: T,
    index: number,
    obj: ITypedObject<T>
) => U;

export {
    forEachIterator,
    forEachMapper,
    forEachEntryIterator,
    forEachEntryMapper
};
