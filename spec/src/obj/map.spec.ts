import { objMap } from "../../../src/obj/map";

describe("objMap", () => {
    it("maps obj", () => {
        expect(objMap({ a: 4, b: 2 }, val => val * 2)).toEqual({
            a: 8,
            b: 4
        });
    });
});
