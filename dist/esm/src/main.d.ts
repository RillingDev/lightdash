import { isIndex } from "./is/_index";
import { isArrayBuffer } from "./is/arrayBuffer";
import { isArrayLike } from "./is/arrayLike";
import { isArrayTyped } from "./is/arrayTyped";
import { isBoolean } from "./is/boolean";
import { isDate } from "./is/date";
import { isEmpty } from "./is/empty";
import { isEqual } from "./is/equal";
import { isError } from "./is/error";
import { isFunction } from "./is/function";
import { isInstanceOf } from "./is/instanceOf";
import { isMap } from "./is/map";
import { isNil } from "./is/nil";
import { isNumber } from "./is/number";
import { isObject } from "./is/object";
import { isObjectLike } from "./is/objectLike";
import { isObjectPlain } from "./is/objectPlain";
import { isPromise } from "./is/promise";
import { isRegExp } from "./is/regExp";
import { isSet } from "./is/set";
import { isString } from "./is/string";
import { isSymbol } from "./is/symbol";
import { isTypeOf } from "./is/typeOf";
import { isUndefined } from "./is/undefined";
import { isWeakMap } from "./is/weakMap";
import { isWeakSet } from "./is/weakSet";
import { getName } from "./get/name";
import { getPath } from "./get/path";
import { getSize } from "./get/size";
import { numClamp } from "./num/clamp";
import { numSafe } from "./num/safe";
import { strDistance } from "./str/distance";
import { strFromKebabCase } from "./str/fromKebabCase";
import { strFromPascalCase } from "./str/fromPascalCase";
import { strFromSnakeCase } from "./str/fromSnakeCase";
import { strSimilar } from "./str/similar";
import { strToCamelCase } from "./str/toCamelCase";
import { strToKebabCase } from "./str/toKebabCase";
import { strToPascalCase } from "./str/toPascalCase";
import { strToSnakeCase } from "./str/toSnakeCase";
import { arrChunk } from "./arr/chunk";
import { arrCollect } from "./arr/collect";
import { arrCompact } from "./arr/compact";
import { arrCount } from "./arr/count";
import { arrDifference } from "./arr/difference";
import { arrFromDeep } from "./arr/fromDeep";
import { arrIntersection } from "./arr/intersection";
import { arrMapDeep } from "./arr/mapDeep";
import { arrRemoveIndex } from "./arr/removeIndex";
import { arrRemoveItem } from "./arr/removeItem";
import { arrStep } from "./arr/step";
import { arrUniq } from "./arr/uniq";
import { objDecycle } from "./obj/decycle";
import { objDefaults } from "./obj/defaults";
import { objDefaultsDeep } from "./obj/defaultsDeep";
import { objFrom } from "./obj/from";
import { objFromDeep } from "./obj/fromDeep";
import { objMap } from "./obj/map";
import { objMapDeep } from "./obj/mapDeep";
import { mapFromObject } from "./map/fromObject";
import { forEachDeep } from "./for/eachDeep";
import { forEachEntry } from "./for/eachEntry";
import { forEachEntryDeep } from "./for/eachEntryDeep";
import { fnDebounce } from "./fn/debounce";
import { fnThrottle } from "./fn/throttle";
import { searchBinary } from "./search/binary";
import { arrMerge } from "./arr/merge";
import { randItem } from "./rand/item";
import { randNumber } from "./rand/number";
import { randShuffle } from "./rand/shuffle";
/**
 * Value checking, type checking, and comparison.
 *
 * Note that some equivalents found in lodash are not provided here due to native equivalents:
 * - isArray -> Array.isArray
 * - isInteger -> Number.isInteger
 * - isSafeInteger -> Number.isSafeInteger
 * - isFinite -> Number.isFinite
 * - isNaN -> Number.isNaN
 *
 * @namespace Is
 */
declare const l_Is: {
    isEqual: (a: any, b: any) => boolean;
    isInstanceOf: (val: any, ...targets: import("./is/lib/AnyClass").AnyClass[]) => boolean;
    isTypeOf: (val: any, ...types: string[]) => boolean;
    isUndefined: (val: any) => val is undefined;
    isNil: (val: any) => val is null | undefined;
    isNumber: (val: any) => val is number;
    isString: (val: any) => val is string;
    isBoolean: (val: any) => val is boolean;
    isSymbol: (val: any) => val is symbol;
    isObject: (val: any) => val is import("./obj/lib/AnyObject").AnyObject;
    isObjectLike: (val: any) => boolean;
    isObjectPlain: (val: any) => val is object;
    isArrayLike: (val: any) => val is ArrayLike<any>;
    isArrayBuffer: (val: any) => val is ArrayBuffer;
    isArrayTyped: (val: any) => val is Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Float32Array | Float64Array;
    isPromise: (val: any) => val is Promise<any>;
    isMap: (val: any) => val is Map<any, any>;
    isSet: (val: any) => val is Set<any>;
    isWeakMap: (val: any) => val is WeakMap<any, any>;
    isWeakSet: (val: any) => val is WeakSet<any>;
    isDate: (val: any) => val is Date;
    isRegExp: (val: any) => val is RegExp;
    isFunction: (val: any) => val is import("./fn/lib/AnyFn").AnyFn<any>;
    isError: (val: any) => val is Error;
    isEmpty: (val: any) => boolean;
    isIndex: (val: any) => boolean;
};
/**
 * Get values and properties of a target.
 *
 * @namespace Get
 */
declare const l_Get: {
    getPath: (target: any, path: string[]) => any;
    getSize: (val: any) => number;
    getName: (val: any) => string | null;
};
/**
 * Number manipulation and comparison.
 *
 * @namespace Number
 */
declare const l_Number: {
    numClamp: (val: number, min: number, max: number) => number;
    numSafe: (val: number) => number;
};
/**
 * String manipulation and comparison.
 *
 * @namespace String
 */
declare const l_String: {
    strDistance: (str1: string, str2: string) => number;
    strSimilar: (str: string, list: string[], returnFull?: boolean) => string[] | Map<number, string[]>;
    strFromKebabCase: (str: string) => string[];
    strFromPascalCase: (str: string) => string[];
    strFromSnakeCase: (str: string) => string[];
    strToCamelCase: (arr: string[]) => string;
    strToKebabCase: (arr: string[]) => string;
    strToPascalCase: (arr: string[]) => string;
    strToSnakeCase: (arr: string[]) => string;
};
/**
 * Array manipulation and analysis.
 *
 * @namespace Array
 */
declare const l_Array: {
    arrFromDeep: <T>(arr: T[]) => T[];
    arrMapDeep: (arr: any[], fn: import("./for/lib/ForEachMapper").ForEachMapper<any, any>) => any[];
    arrCompact: <T_1>(arr: T_1[]) => T_1[];
    arrMerge: <T_2>(...values: T_2[][]) => T_2[];
    arrChunk: <T_3>(arr: T_3[], chunk: number) => T_3[][];
    arrStep: <T_4>(arr: T_4[], step: number) => T_4[];
    arrRemoveIndex: <T_5>(arr: T_5[], targetIndex: number) => T_5[];
    arrRemoveItem: <T_6>(arr: T_6[], targetItem: T_6, removeAll?: boolean) => T_6[];
    arrCount: <T_7>(arr: T_7[]) => Map<T_7, number>;
    arrCollect: <T_8, U>(arr: T_8[], fn: import("./for/lib/ForEachMapper").ForEachMapper<T_8, U>) => Map<U, T_8[]>;
    arrDifference: <T_9>(arr: T_9[], ...values: T_9[][]) => T_9[];
    arrIntersection: <T_10>(arr: T_10[], ...values: T_10[][]) => T_10[];
    arrUniq: <T_11>(arr: T_11[]) => T_11[];
};
/**
 * Object manipulation and analysis.
 *
 * @namespace Object
 */
declare const l_Object: {
    objFrom: <T>(obj: T) => T;
    objFromDeep: (obj: import("./obj/lib/AnyObject").AnyObject) => import("./obj/lib/AnyObject").AnyObject;
    objMap: (obj: import("./obj/lib/AnyObject").AnyObject, fn: import("./for/lib/ForEachEntryMapper").ForEachEntryMapper<any, any>) => import("./obj/lib/AnyObject").AnyObject;
    objMapDeep: (obj: import("./obj/lib/AnyObject").AnyObject, fn: import("./for/lib/ForEachEntryMapper").ForEachEntryMapper<any, any>) => import("./obj/lib/AnyObject").AnyObject;
    objDefaults: (obj: import("./obj/lib/AnyObject").AnyObject, objDefault: import("./obj/lib/AnyObject").AnyObject) => import("./obj/lib/AnyObject").AnyObject;
    objDefaultsDeep: (obj: import("./obj/lib/AnyObject").AnyObject, objDefault: import("./obj/lib/AnyObject").AnyObject) => import("./obj/lib/AnyObject").AnyObject;
    objDecycle: (obj: import("./obj/lib/AnyObject").AnyObject, fn?: import("./for/lib/ForEachEntryMapper").ForEachEntryMapper<any, any>, references?: WeakSet<any>) => import("./obj/lib/AnyObject").AnyObject;
};
/**
 * Map manipulation.
 *
 * @namespace Map
 */
declare const l_Map: {
    mapFromObject: (obj: import("./obj/lib/AnyObject").AnyObject) => Map<string, any>;
};
/**
 * Looping through ranges, arrays and objects.
 *
 * @namespace For
 */
declare const l_For: {
    forEachDeep: (arr: any[], fn: import("./for/lib/ForEachIterator").ForEachIterator<any>) => void;
    forEachEntry: (obj: import("./obj/lib/AnyObject").AnyObject, fn: import("./for/lib/ForEachEntryIterator").ForEachEntryIterator<any>) => void;
    forEachEntryDeep: (obj: import("./obj/lib/AnyObject").AnyObject, fn: import("./for/lib/ForEachEntryIterator").ForEachEntryIterator<any>) => void;
};
/**
 * Function manipulation.
 *
 * @namespace Fn
 */
declare const l_Fn: {
    fnDebounce: (fn: import("./fn/lib/AnyVoidFn").AnyVoidFn<any>, timeout: number) => import("./fn/lib/AnyVoidFn").AnyVoidFn<any>;
    fnThrottle: (fn: import("./fn/lib/AnyVoidFn").AnyVoidFn<any>, timeout: number) => import("./fn/lib/AnyVoidFn").AnyVoidFn<any>;
};
/**
 * Array and object search.
 *
 * @namespace Search
 */
declare const l_Search: {
    searchBinary: (arr: number[], search: number) => number | null;
};
/**
 * Random number generation and value picking.
 *
 * @namespace Random
 */
declare const l_Random: {
    randNumber: (min?: number, max?: number, float?: boolean) => number;
    randItem: <T>(arr: T[]) => T;
    randShuffle: <T_1>(arr: T_1[]) => T_1[];
};
export { l_Is, l_Get, l_Number, l_String, l_Array, l_Object, l_Map, l_Fn, l_For, l_Search, l_Random, isEqual, isInstanceOf, isTypeOf, isUndefined, isNil, isNumber, isString, isBoolean, isSymbol, isObject, isObjectLike, isObjectPlain, isArrayLike, isArrayBuffer, isArrayTyped, isPromise, isMap, isSet, isWeakMap, isWeakSet, isDate, isRegExp, isFunction, isError, isEmpty, isIndex, getPath, getSize, getName, numClamp, numSafe, strDistance, strSimilar, strFromKebabCase, strFromPascalCase, strFromSnakeCase, strToCamelCase, strToKebabCase, strToPascalCase, strToSnakeCase, arrFromDeep, arrMapDeep, arrCompact, arrMerge, arrChunk, arrStep, arrRemoveIndex, arrRemoveItem, arrCount, arrCollect, arrDifference, arrIntersection, arrUniq, objFrom, objFromDeep, objMap, objMapDeep, objDefaults, objDefaultsDeep, objDecycle, mapFromObject, fnDebounce, fnThrottle, forEachDeep, forEachEntry, forEachEntryDeep, searchBinary, randNumber, randItem, randShuffle };
//# sourceMappingURL=main.d.ts.map