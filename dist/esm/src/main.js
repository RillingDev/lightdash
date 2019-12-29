/* eslint-disable @typescript-eslint/camelcase */
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
const l_Is = {
    isPromise,
    isBlank
};
/**
 * @namespace Lang
 */
const l_Lang = {
    toMap
};
/**
 * @namespace String
 */
const l_String = {
    distance,
    pascalCase,
    similar,
    matchAll
};
/**
 * @namespace Array
 */
const l_Array = {
    removeIndex,
    removeItem,
    step,
    groupMapBy,
    groupMapReducingBy
};
/**
 * @namespace Object
 */
const l_Object = {
    decycle,
    name
};
/**
 * @namespace Search
 */
const l_Search = {
    binarySearch
};
export { isPromise, toMap, pascalCase, distance, similar, matchAll, isBlank, step, removeIndex, removeItem, groupMapBy, groupMapReducingBy, decycle, name, binarySearch, l_Is, l_Lang, l_String, l_Array, l_Object, l_Search };
//# sourceMappingURL=main.js.map