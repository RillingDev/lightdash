import { strDistance } from "../../src/str/distance";

describe("strDistance", () => {
    it("gets distance", () => {
        expect(strDistance("Kitten", "Sitting")).toBe(3);
        expect(strDistance("String", "Stribng")).toBe(1);
        expect(strDistance("foo", "foo")).toBe(0);
    });
});
