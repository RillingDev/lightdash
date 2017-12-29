/**
 * Value, type checking and comparison
 * @namespace Is
 */
import isArguments from "./is/arguments";
import isArray from "./is/array";
import isArrayBuffer from "./is/arrayBuffer";
import isArrayLike from "./is/arrayLike";
import isArrayTyped from "./is/arrayTyped";
import isBoolean from "./is/boolean";
import isDate from "./is/date";
import isDefined from "./is/defined";
import isEmpty from "./is/empty";
import isEqual from "./is/equal";
import isError from "./is/error";
import isFinite from "./is/finite";
import isFunction from "./is/function";
import isInstanceOf from "./is/instanceOf";
import isInteger from "./is/integer";
import isMap from "./is/map";
import isNaN from "./is/nan";
import isNil from "./is/nil";
import isNumber from "./is/number";
import isObject from "./is/object";
import isObjectLike from "./is/objectLike";
import isObjectPlain from "./is/objectPlain";
import isPrimitive from "./is/primitive";
import isPromise from "./is/promise";
import isRegExp from "./is/regExp";
import isSet from "./is/set";
import isString from "./is/string";
import isSymbol from "./is/symbol";
import isTypeOf from "./is/typeOf";
import isUndefined from "./is/undefined";
/**
 * Checks if a target has something
 * @namespace Has
 */
import hasKey from "./has/key";
import hasOwnProperty from "./has/ownProperty";
import hasPath from "./has/path";
/**
 * Gets target data
 * @namespace Get
 */
import getPath from "./get/path";
/**
 * Looping through iterables
 * @namespace For
 */
import forEach from "./for/each";
import forEachDeep from "./for/eachDeep";
import forEachEntry from "./for/eachEntry";
import forEachEntryDeep from "./for/eachEntryDeep";
import forTimes from "./for/times";
/**
 * Array manipulation and analysis
 * @namespace Array
 */
import arrChunk from "./arr/chunk";
import arrCompact from "./arr/compact";
import arrCount from "./arr/count";
import arrDifference from "./arr/difference";
import arrFlattenDeep from "./arr/flattenDeep";
import arrFrom from "./arr/from";
import arrFromDeep from "./arr/fromDeep";
import arrIntersection from "./arr/intersection";
import arrMapDeep from "./arr/mapDeep";
import arrRemoveIndex from "./arr/removeIndex";
import arrRemoveItem from "./arr/removeItem";
import arrStep from "./arr/step";
import arrUniq from "./arr/uniq";
/**
 * Object manipulation and analysis
 * @namespace Object
 */
import objDefaults from "./obj/defaults";
import objDefaultsDeep from "./obj/defaultsDeep";
import objDefineProperty from "./obj/defineProperty";
import objEntries from "./obj/entries";
import objFrom from "./obj/from";
import objFromDeep from "./obj/fromDeep";
import objKeys from "./obj/keys";
import objMap from "./obj/map";
import objMapDeep from "./obj/mapDeep";
import objMerge from "./obj/merge";
import objValues from "./obj/values";
/**
 * Map manipulation and analysis
 * @namespace Map
 */
import mapFromObject from "./map/fromObject";
/**
 * Function manipulation
 * @namespace Fn
 */
import fnAttempt from "./fn/attempt";
import fnCurry from "./fn/curry";
import fnThrottle from "./fn/throttle";
/**
 * Number generation and checking
 * @namespace Number
 */
import numberClamp from "./number/clamp";
import numberInRange from "./number/inRange";
/**
 * Random number generation
 * @namespace Random
 */
import randomItem from "./random/item";
import randomNumber from "./random/number";
export { isEqual, isInstanceOf, isTypeOf, isUndefined, isDefined, isNil, isPrimitive, isNumber, isString, isBoolean, isSymbol, isObject, isObjectLike, isObjectPlain, isArray, isArrayLike, isArrayBuffer, isArrayTyped, isPromise, isMap, isSet, isDate, isRegExp, isFunction, isArguments, isError, isEmpty, isFinite, isInteger, isNaN, hasKey, hasPath, hasOwnProperty, getPath, forTimes, forEach, forEachDeep, forEachEntry, forEachEntryDeep, arrFrom, arrFromDeep, arrMapDeep, arrFlattenDeep, arrCompact, arrChunk, arrStep, arrRemoveIndex, arrRemoveItem, arrCount, arrDifference, arrIntersection, arrUniq, objFrom, objFromDeep, objMap, objMapDeep, objDefaults, objDefaultsDeep, objMerge, objDefineProperty, objKeys, objValues, objEntries, mapFromObject, fnThrottle, fnAttempt, fnCurry, numberInRange, numberClamp, randomNumber, randomItem };
