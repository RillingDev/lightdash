declare type forTimesIterator = (index: number) => void;
declare type forEachIterator<T> = (val: T, index: number, arr: T[]) => void;
declare type forEachMapper<T, U> = (val: T, index: number, arr: T[]) => U;
declare type forEachEntryIterator<T> = (key: string, val: T, index: number, obj: {
    [key: PropertyKey]: T;
}) => void;
declare type forEachEntryMapper<T, U> = (key: string, val: T, index: number, obj: {
    [key: PropertyKey]: T;
}) => U;
declare type objectStringKeyed = {
    [key: string]: any;
};
export { forTimesIterator, forEachIterator, forEachMapper, forEachEntryIterator, forEachEntryMapper, objectStringKeyed };
