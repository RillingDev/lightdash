type Class = any;
type Entry = [string, any];

type ForTimesIterator = (val?: number) => void;
type ForEachIterator = (val?: any, index?: number, arr?: any[]) => void;
type ForEachEntryIterator = (val?: any, key?: string, index?: number, obj?: object) => void;

interface IGenericObject {
    [key: string]: any;
}

export {
    Class,
    Entry,

    ForTimesIterator,
    ForEachEntryIterator,
    ForEachIterator,

    IGenericObject,
};
