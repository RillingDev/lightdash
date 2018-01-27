type forTimesIterator = (index: number) => void;


type forEachIterator<T> = (
    val: T | T[],
    index: number,
    arr: T[] | undefined
) => void;

type forEachMapper<T> = (
    val: T | T[],
    index: number,
    arr: T[] | undefined
) => any;

type forEachEntryIterator<T> = (
    key: PropertyKey,
    val: T | IGenericObject<T>,
    index: number,
    obj: IGenericObject<T> | undefined
) => void;

type forEachEntryMapper<T> = (
    key: PropertyKey,
    val: T | IGenericObject<T>,
    index: number,
    obj: IGenericObject<T> | undefined
) => any;

type entry<T> = [PropertyKey, T | IGenericObject<T>];

type entries<T> = entry<T>[];

interface IGenericObject<T> {
    [key: string]: T;
}
interface IGenericClass {
    new(): any;
}

export {
    forTimesIterator,
    forEachIterator,
    forEachMapper,
    forEachEntryIterator,
    forEachEntryMapper,
    entry,
    entries,
    IGenericObject,
    IGenericClass
};
