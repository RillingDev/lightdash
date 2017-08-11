"use strict";

const packageJson = require("../package.json");
const {
    DIR_DIST
} = require("../tasks/lib/constants");
const myLib = require(`../${DIR_DIST}/${packageJson.namespace.file}.common.js`);

describe("Main test", function () {
    it("Normal case", function () {
        expect(myLib.add(1, 1)).toBe(2);
    });
});
