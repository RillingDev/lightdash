"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const groupMapReducingBy_1 = require("../../../src/array/groupMapReducingBy");
describe("groupMapReducingBy", () => {
    it("groups items", () => {
        expect(groupMapReducingBy_1.groupMapReducingBy(["foo", "bar", "fizz", "buzz"], val => val.charAt(0), () => {
            return {
                count: 0,
                matches: []
            };
        }, (current, val) => {
            current.count++;
            current.matches.push(val);
            return current;
        })).toEqual(new Map([
            ["f", { count: 2, matches: ["foo", "fizz"] }],
            ["b", { count: 2, matches: ["bar", "buzz"] }]
        ]));
    });
});
