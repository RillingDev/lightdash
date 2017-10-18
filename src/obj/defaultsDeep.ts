/* import isNil from "../is/nil";
import isObject from "../is/object";
import {
    IGenericObject,
} from "../types";
import objMap from "./map"; */

/* const objDefaultsDeep = (obj: IGenericObject, objDefault: object): object => objMap(objDefault,
    (val, key, index, valDefaultCurrent) => {
        const valCurrent = obj[key];

        console.log({ val, key, valDefaultCurrent, valCurrent });

        if (isNil(valCurrent)) {
            return valDefaultCurrent;
        } else if (isObject(valDefaultCurrent)) {
            return objDefaultsDeep(valCurrent, valDefaultCurrent);
        } else {
            return valCurrent;
        }
    });

export default objDefaultsDeep; */
