type forTimesIterator = (index: number) => void;
type forEachIterator = (
    val: any,
    index: number,
    arr: any[] | undefined
) => void;
type forEachEntryIterator = (
    val: any,
    key: any,
    index: number,
    obj: object | undefined
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
