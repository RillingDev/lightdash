import { IGenericObject } from "./interfaces";
declare type forTimesIterator = (index: number) => void;
declare type forEachIterator<T> = (val: T, index: number, arr: T[]) => void;
declare type forEachMapper<T, U> = (val: T, index: number, arr: T[]) => U;
declare type forEachEntryIterator<T> = (key: string, val: T, index: number, obj: IGenericObject<T>) => void;
declare type forEachEntryMapper<T, U> = (key: string, val: T, index: number, obj: IGenericObject<T>) => U;
export { forTimesIterator, forEachIterator, forEachMapper, forEachEntryIterator, forEachEntryMapper };
