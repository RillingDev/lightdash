import forEach from "../for/each";
import arrClone from "./clone";

const arrCount = (arr: any[]): Array<[any, number]> => {
    const result: Map<any, number> = new Map();

    forEach(arr, (val) => {
        result.set(val, result.has(val) ? result.get(val) + 1 : 1);
    });

    // tslint:disable-next-line
    return arrClone(result);
};

export default arrCount;
