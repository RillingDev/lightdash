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
    obj: { [key: PropertyKey]: T }
) => void;

type forEachEntryMapper<T, U> = (
    key: string,
    val: T,
    index: number,
    obj: { [key: PropertyKey]: T }
) => U;


type objectStringKeyed = { [key: string]: any };

export {
    forTimesIterator,
    forEachIterator,
    forEachMapper,
    forEachEntryIterator,
    forEachEntryMapper,
    objectStringKeyed
};
