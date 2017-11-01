type forTimesIterator = (index?: number) => void;
type forEachIterator = (val?: any, index?: number, arr?: any[]) => void;
type forEachEntryIterator = (val?: any, key?: string, index?: number, obj?: object) => void;

interface IGenericObject {
    [key: string]: any;
}
interface IGenericClass {
    new(): any
}
interface IEntry {
    [index: number]: Array<[string, any]>;
}

export {
    forTimesIterator,
    forEachIterator,
    forEachEntryIterator,

    IGenericObject,
    IGenericClass,
    IEntry,
};
