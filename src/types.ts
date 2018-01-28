import { IGenericObject } from "./interfaces";

type forTimesIterator = (index: number) => void;


type forEachIterator<T> = (
    val: T,
    index: number,
    arr: T[]
) => void;

type forEachMapper<T, U> = (
    val: T,
    index: number,
    arr: T[]
) => U;


type forEachEntryIterator<T> = (
    key: string,
    val: T,
    index: number,
    obj: IGenericObject<T>
) => void;

type forEachEntryMapper<T, U> = (
    key: string,
    val: T,
    index: number,
    obj: IGenericObject<T>
) => U;


type entry<T> = [string, nestedObjItem<T>];

type entries<T> = entry<T>[];


type nestedArrItem<T> = T | T[];

type nestedArr<T> = nestedArrItem<T>[];


type nestedObjItem<T> = T | IGenericObject<T>

type nestedObj<T> = IGenericObject<nestedObjItem<T>>;

export {
    forTimesIterator,
    forEachIterator,
    forEachMapper,
    forEachEntryIterator,
    forEachEntryMapper,
    entry,
    entries,
    nestedArrItem,
    nestedArr,
    nestedObjItem,
    nestedObj
};
