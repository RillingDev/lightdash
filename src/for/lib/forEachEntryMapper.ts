import { IAnyObject } from "../../obj/lib/IAnyObject";

type forEachEntryMapper<T, U> = (val: T, key: string, obj: IAnyObject) => U;

export { forEachEntryMapper };
