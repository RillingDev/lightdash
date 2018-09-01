import { arrCount } from "../../src/arr/count";

describe("arrCount", () => {
    it("collects by count", () => {
        expect(
            arrCount([1, 1, 2, 2, 1, 3, 4, 1])
        ).toEqual(new Map([[1, 4], [2, 2], [3, 1], [4, 1]]));
    });
});
