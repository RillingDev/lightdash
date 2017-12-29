declare type forTimesIterator = (index: number) => void;
declare type forEachIterator = (val: any, index: number, arr: any[] | undefined) => void;
declare type forEachEntryIterator = (val: any, key: any, index: number, obj: object | undefined) => void;
declare type entry = [string, any];
declare type entries = entry[];
interface IGenericObject {
    [key: string]: any;
}
interface IGenericClass {
    new (): any;
}
export { forTimesIterator, forEachIterator, forEachEntryIterator, entry, entries, IGenericObject, IGenericClass };
