import { distance } from "../../../src/string/distance";

describe("distance", () => {
    it("gets distance", () => {
        expect(distance("Kitten", "Sitting")).toBe(3);
        expect(distance("String", "Stribng")).toBe(1);
        expect(distance("foo", "foo")).toBe(0);
    });
});
