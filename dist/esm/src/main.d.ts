/// <reference types="lodash" />
import { isBlank } from "./is/isBlank";
import { isPromise } from "./is/isPromise";
import { toMap } from "./lang/toMap";
import { distance } from "./string/distance";
import { pascalCase } from "./string/pascalCase";
import { similar } from "./string/similar";
import { matchAll } from "./string/matchAll";
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
    toMap: <T>(object: import("lodash").Dictionary<T> | import("lodash").NumericDictionary<T>) => Map<string | number | symbol, T>;
};
/**
 * @namespace String
 */
declare const l_String: {
    distance: (str1: string, str2: string) => number;
    pascalCase: (str: string) => string;
    similar: (str: string, collection: import("lodash").List<string>, returnFull?: boolean) => import("lodash").List<string> | Map<number, import("lodash").List<string>>;
    matchAll: (str: string, pattern: RegExp) => RegExpExecArray[];
};
/**
 * @namespace Array
 */
declare const l_Array: {
    removeIndex: <T>(collection: import("lodash").List<T>, targetIndex: number) => T[];
    removeItem: <T_1>(collection: import("lodash").List<T_1>, targetValue: T_1, removeAll?: boolean) => import("lodash").List<T_1>;
    step: <T_2>(collection: import("lodash").List<T_2>, n: number) => import("lodash").List<T_2>;
    groupMapBy: <T_3, TKey>(collection: import("lodash").List<T_3>, keyFn: import("lodash").ListIterator<T_3, TKey>) => Map<TKey, T_3[]>;
    groupMapReducingBy: <T_4, TKey_1, TMerged>(collection: import("lodash").List<T_4>, keyProducer: import("lodash").ListIterator<T_4, TKey_1>, initializer: import("lodash").ListIterator<T_4, TMerged>, reducer: (current: TMerged, value: T_4, index: number, collection: import("lodash").List<T_4>) => TMerged) => Map<TKey_1, TMerged>;
};
/**
 * @namespace Object
 */
declare const l_Object: {
    decycle: <T>(collection: import("lodash").Dictionary<T> | import("lodash").NumericDictionary<T> | import("lodash").List<T>, replacer?: (val: T | import("lodash").Dictionary<T> | import("lodash").NumericDictionary<T> | import("lodash").List<T>, key: string | number | symbol, _collection: import("lodash").Dictionary<T | import("lodash").Dictionary<T> | import("lodash").NumericDictionary<T> | import("lodash").List<T>> | import("lodash").NumericDictionary<T | import("lodash").Dictionary<T> | import("lodash").NumericDictionary<T> | import("lodash").List<T>> | import("lodash").List<T | import("lodash").Dictionary<T> | import("lodash").NumericDictionary<T> | import("lodash").List<T>>) => any, references?: WeakSet<any>) => import("lodash").List<any> | import("lodash").Dictionary<any> | import("lodash").NumericDictionary<any>;
    name: (value: any) => string | null;
};
/**
 * @namespace Search
 */
declare const l_Search: {
    binarySearch: (arr: import("lodash").List<number>, search: number) => number | null;
};
export { isPromise, toMap, pascalCase, distance, similar, matchAll, isBlank, step, removeIndex, removeItem, groupMapBy, groupMapReducingBy, decycle, name, binarySearch, l_Is, l_Lang, l_String, l_Array, l_Object, l_Search };
//# sourceMappingURL=main.d.ts.map