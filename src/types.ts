type Class = any;
type ForEachIterator = (val?: any, index?: number, arr?: any[]) => void;
type ForEachEntryIterator = (val?: any, key?: string, index?: number, obj?: object) => void;

export {
    Class,
    ForEachEntryIterator,
    ForEachIterator,
};
