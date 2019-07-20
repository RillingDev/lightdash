/// <reference types="lodash" />
import { isBlank } from "./is/isBlank";
import { isPromise } from "./is/isPromise";
import { toMap } from "./lang/toMap";
import { distance } from "./string/distance";
import { pascalCase } from "./string/pascalCase";
import { similar } from "./string/similar";
import { groupMapBy } from "./array/groupMapBy";
import { groupMapReducingBy } from "./array/groupMapReducingBy";
import { removeIndex } from "./array/removeIndex";
import { removeItem } from "./array/removeItem";
import { step } from "./array/step";
import { decycle } from "./object/decycle";
import { name } from "./object/name";
import { binarySearch } from "./search/binarySearch";
/**
 * @namespace Is
 */
declare const l_Is: {
    isPromise: (value: any) => value is Promise<any>;
    isBlank: (str: string) => boolean;
};
/**
 * @namespace Lang
 */
declare const l_Lang: {
    toMap: <T>(object: import("lodash").Dictionary<T> | import("lodash").NumericDictionary<T>) => Map<any, T>;
};
/**
 * @namespace String
 */
declare const l_String: {
    distance: (str1: string, str2: string) => number;
    pascalCase: (str: string) => string;
    similar: (str: string, collection: ArrayLike<string>, returnFull?: boolean) => ArrayLike<string> | Map<number, ArrayLike<string>>;
};
/**
 * @namespace Array
 */
declare const l_Array: {
    removeIndex: <T>(collection: ArrayLike<T>, targetIndex: number) => T[];
    removeItem: <T>(collection: ArrayLike<T>, targetValue: T, removeAll?: boolean) => ArrayLike<T>;
    step: <T>(collection: ArrayLike<T>, n: number) => ArrayLike<T>;
    groupMapBy: <T, TKey>(collection: ArrayLike<T>, keyFn: import("lodash").ListIterator<T, TKey>) => Map<TKey, T[]>;
    groupMapReducingBy: <T, TKey, TMerged>(collection: ArrayLike<T>, keyProducer: import("lodash").ListIterator<T, TKey>, initializer: import("lodash").ListIterator<T, TMerged>, reducer: (current: TMerged, value: T, index: number, collection: ArrayLike<T>) => TMerged) => Map<TKey, TMerged>;
};
/**
 * @namespace Object
 */
declare const l_Object: {
    decycle: <T>(collection: import("lodash").Dictionary<T> | ArrayLike<T>, replacer?: import("lodash").ObjectIterator<T, any> | import("lodash").ListIterator<T, any>, references?: WeakSet<any>) => import("lodash").Dictionary<any> | ArrayLike<any>;
    name: (value: any) => string | null;
};
/**
 * @namespace Search
 */
declare const l_Search: {
    binarySearch: (arr: ArrayLike<number>, search: number) => number | null;
};
export { isPromise, toMap, pascalCase, distance, similar, isBlank, step, removeIndex, removeItem, groupMapBy, groupMapReducingBy, decycle, name, binarySearch, l_Is, l_Lang, l_String, l_Array, l_Object, l_Search };
