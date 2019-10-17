"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const step_1 = require("../../../src/array/step");
describe("step", () => {
    it("steps items", () => {
        expect(step_1.step([1, 2, 3, 4, 5, 6], 2)).toEqual([1, 3, 5]);
    });
});
//# sourceMappingURL=step.spec.js.map