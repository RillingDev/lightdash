import { distance } from "../../src/str/distance";

describe("distance", () => {
    it("gets distance", () => {
        expect(distance("Kitten", "Sitting")).toBe(3);
        expect(distance("String", "Stribng")).toBe(1);
        expect(distance("foo", "foo")).toBe(0);
    });
});
