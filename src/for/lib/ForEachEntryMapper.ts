import { AnyObject } from "../../obj/lib/AnyObject";

type ForEachEntryMapper<T, U> = (val: T, key: string, obj: AnyObject) => U;

export { ForEachEntryMapper };
