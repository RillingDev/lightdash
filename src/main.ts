import isArguments from "./is/arguments";
import isArray from "./is/array";
import isArrayBuffer from "./is/arrayBuffer";
import isArrayLike from "./is/arrayLike";
import isArrayTyped from "./is/arrayTyped";
import isBoolean from "./is/boolean";
import isDate from "./is/date";
import isEmpty from "./is/empty";
import isEqual from "./is/equal";
import isError from "./is/error";
import isFunction from "./is/function";
import isIndex from "./is/index";
import isInstanceOf from "./is/instanceOf";
import isMap from "./is/map";
import isNil from "./is/nil";
import isNumber from "./is/number";
import isObject from "./is/object";
import isObjectLike from "./is/objectLike";
import isObjectPlain from "./is/objectPlain";
import isPromise from "./is/promise";
import isRegExp from "./is/regExp";
import isSet from "./is/set";
import isString from "./is/string";
import isSymbol from "./is/symbol";
import isTypeOf from "./is/typeOf";
import isUndefined from "./is/undefined";

import hasPath from "./has/path";

import getPath from "./get/path";
import getSize from "./get/size";

import forEachDeep from "./for/eachDeep";
import forEachEntry from "./for/eachEntry";
import forEachEntryDeep from "./for/eachEntryDeep";

import arrChunk from "./arr/chunk";
import arrCompact from "./arr/compact";
import arrCount from "./arr/count";
import arrDifference from "./arr/difference";
import arrFromDeep from "./arr/fromDeep";
import arrIntersection from "./arr/intersection";
import arrMapDeep from "./arr/mapDeep";
import arrRemoveIndex from "./arr/removeIndex";
import arrRemoveItem from "./arr/removeItem";
import arrStep from "./arr/step";
import arrUniq from "./arr/uniq";

import objDecycle from "./obj/decycle";
import objDefaults from "./obj/defaults";
import objDefaultsDeep from "./obj/defaultsDeep";
import objFrom from "./obj/from";
import objFromDeep from "./obj/fromDeep";
import objMap from "./obj/map";
import objMapDeep from "./obj/mapDeep";

import mapFromObject from "./map/fromObject";

import fnAttempt from "./fn/attempt";
import fnCurry from "./fn/curry";
import fnThrottle from "./fn/throttle";

import numAverage from "./num/average";
import numClamp from "./num/clamp";
import numMedian from "./num/median";
import numSum from "./num/sum";

import randItem from "./rand/item";
import randNumber from "./rand/number";
import randShuffle from "./rand/shuffle";

import algBinarySearch from "./alg/binarySearch";

export {
    isEqual,
    isInstanceOf,
    isTypeOf,
    isUndefined,
    isNil,
    isNumber,
    isString,
    isBoolean,
    isSymbol,
    isObject,
    isObjectLike,
    isObjectPlain,
    isArray,
    isArrayLike,
    isArrayBuffer,
    isArrayTyped,
    isPromise,
    isMap,
    isSet,
    isDate,
    isRegExp,
    isFunction,
    isArguments,
    isError,
    isEmpty,
    isIndex,
    hasPath,
    getPath,
    getSize,
    forEachDeep,
    forEachEntry,
    forEachEntryDeep,
    arrFromDeep,
    arrMapDeep,
    arrCompact,
    arrChunk,
    arrStep,
    arrRemoveIndex,
    arrRemoveItem,
    arrCount,
    arrDifference,
    arrIntersection,
    arrUniq,
    objFrom,
    objFromDeep,
    objMap,
    objMapDeep,
    objDefaults,
    objDefaultsDeep,
    objDecycle,
    mapFromObject,
    fnThrottle,
    fnAttempt,
    fnCurry,
    numClamp,
    numSum,
    numAverage,
    numMedian,
    randNumber,
    randItem,
    randShuffle,
    algBinarySearch
};
/**
 * Value checking, type checking, and comparison
 * @namespace Is
 */

/**
 * Check if a target has something
 * @namespace Has
 */

/**
 * Get value from a target
 * @namespace Get
 */

/**
 * Looping through ranges, arrays and objects
 * @namespace For
 */

/**
 * Array manipulation and analysis
 * @namespace Array
 */

/**
 * Object manipulation and analysis
 * @namespace Object
 */

/**
 * Map manipulation
 * @namespace Map
 */

/**
 * Function manipulation
 * @namespace Fn
 */

/**
 * Number manipulation and comparison
 * @namespace Number
 */

/**
 * Random number generation and value picking
 * @namespace Random
 */

/**
 * Generic algorithms
 * @namespace Algorithm
 */
