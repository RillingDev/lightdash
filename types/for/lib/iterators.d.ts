import { ITypedObject } from "../../obj/lib/typedObject";
declare type forEachIterator<T> = (val: T, index: number, arr: T[]) => void;
declare type forEachMapper<T, U> = (val: T, index: number, arr: T[]) => U;
declare type forEachEntryIterator<T> = (key: string, val: T, index: number, obj: ITypedObject<T>) => void;
declare type forEachEntryMapper<T, U> = (key: string, val: T, index: number, obj: ITypedObject<T>) => U;
export { forEachIterator, forEachMapper, forEachEntryIterator, forEachEntryMapper };
