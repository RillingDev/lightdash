import { isEmpty } from "../../src/is/empty";

describe("isEmpty", () => {
    it("checks if empty", () => {
        expect(isEmpty([])).toBeTruthy();
        expect(isEmpty({})).toBeTruthy();
        expect(isEmpty("")).toBeTruthy();
        expect(isEmpty(123)).toBeTruthy();
        expect(isEmpty(null)).toBeTruthy();
        expect(isEmpty("foo")).toBeFalsy();
        expect(isEmpty([1, 2])).toBeFalsy();
        expect(isEmpty({ a: 1 })).toBeFalsy();
        expect(isEmpty(new Map([["foo", 1]]))).toBeFalsy();
    });
});
