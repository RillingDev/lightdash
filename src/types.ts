type forTimesIterator = (index?: any) => void;
type forEachIterator = (val?: any, index?: any, arr?: any[]) => void;
type forEachEntryIterator = (
    val?: any,
    key?: any,
    index?: any,
    obj?: object | undefined
) => void;

type entry = [string, any];
type entries = entry[];

interface IGenericObject {
    [key: string]: any;
}
interface IGenericClass {
    new (): any;
}

export {
    forTimesIterator,
    forEachIterator,
    forEachEntryIterator,
    entry,
    entries,
    IGenericObject,
    IGenericClass
};
