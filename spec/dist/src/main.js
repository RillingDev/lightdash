"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isBlank_1 = require("./is/isBlank");
exports.isBlank = isBlank_1.isBlank;
const isPromise_1 = require("./is/isPromise");
exports.isPromise = isPromise_1.isPromise;
const toMap_1 = require("./lang/toMap");
exports.toMap = toMap_1.toMap;
const distance_1 = require("./string/distance");
exports.distance = distance_1.distance;
const pascalCase_1 = require("./string/pascalCase");
exports.pascalCase = pascalCase_1.pascalCase;
const similar_1 = require("./string/similar");
exports.similar = similar_1.similar;
const matchAll_1 = require("./string/matchAll");
exports.matchAll = matchAll_1.matchAll;
const groupMapBy_1 = require("./array/groupMapBy");
exports.groupMapBy = groupMapBy_1.groupMapBy;
const groupMapReducingBy_1 = require("./array/groupMapReducingBy");
exports.groupMapReducingBy = groupMapReducingBy_1.groupMapReducingBy;
const removeIndex_1 = require("./array/removeIndex");
exports.removeIndex = removeIndex_1.removeIndex;
const removeItem_1 = require("./array/removeItem");
exports.removeItem = removeItem_1.removeItem;
const step_1 = require("./array/step");
exports.step = step_1.step;
const decycle_1 = require("./object/decycle");
exports.decycle = decycle_1.decycle;
const name_1 = require("./object/name");
exports.name = name_1.name;
const binarySearch_1 = require("./search/binarySearch");
exports.binarySearch = binarySearch_1.binarySearch;
/**
 * @namespace Is
 */
const l_Is = {
    isPromise: isPromise_1.isPromise,
    isBlank: isBlank_1.isBlank
};
exports.l_Is = l_Is;
/**
 * @namespace Lang
 */
const l_Lang = {
    toMap: toMap_1.toMap
};
exports.l_Lang = l_Lang;
/**
 * @namespace String
 */
const l_String = {
    distance: distance_1.distance,
    pascalCase: pascalCase_1.pascalCase,
    similar: similar_1.similar,
    matchAll: matchAll_1.matchAll
};
exports.l_String = l_String;
/**
 * @namespace Array
 */
const l_Array = {
    removeIndex: removeIndex_1.removeIndex,
    removeItem: removeItem_1.removeItem,
    step: step_1.step,
    groupMapBy: groupMapBy_1.groupMapBy,
    groupMapReducingBy: groupMapReducingBy_1.groupMapReducingBy
};
exports.l_Array = l_Array;
/**
 * @namespace Object
 */
const l_Object = {
    decycle: decycle_1.decycle,
    name: name_1.name
};
exports.l_Object = l_Object;
/**
 * @namespace Search
 */
const l_Search = {
    binarySearch: binarySearch_1.binarySearch
};
exports.l_Search = l_Search;
//# sourceMappingURL=main.js.map