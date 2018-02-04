const { objDefaultsDeep } = require("../../dist/lightdash.common");

describe("objDefaultsDeep", () => {
    it("Simple", () => {
        expect(
            objDefaultsDeep(
                {
                    a: 1,
                    c: 5
                },
                {
                    a: 1,
                    b: 2,
                    c: 3
                }
            )
        ).toEqual({
            a: 1,
            b: 2,
            c: 5
        });
    });

    it("Array 1", () => {
        expect(
            objDefaultsDeep(
                {
                    a: 1,
                    c: 5
                },
                {
                    a: 1,
                    b: 2,
                    c: 3,
                    d: [1, 2, 3]
                }
            )
        ).toEqual({
            a: 1,
            b: 2,
            c: 5,
            d: [1, 2, 3]
        });
    });

    it("Array 2", () => {
        expect(
            objDefaultsDeep(
                {
                    a: 1,
                    c: 5,
                    d: [1, 2],
                    e: {
                        a: 1
                    }
                },
                {
                    a: 1,
                    b: 2,
                    c: 3,
                    d: [1, 2, 3],
                    e: {
                        a: 6
                    }
                }
            )
        ).toEqual({
            a: 1,
            b: 2,
            c: 5,
            d: [1, 2, 3],
            e: {
                a: 1
            }
        });
    });

    it("Array 3", () => {
        expect(
            objDefaultsDeep(
                {
                    d: [20, 10],
                    e: {
                        a: 1,
                        x: []
                    }
                },
                {
                    d: [1, 2, 3, 4, 5],
                    e: {
                        a: 1,
                        x: [
                            {
                                a: 1
                            }
                        ]
                    }
                }
            )
        ).toEqual({
            d: [20, 10, 3, 4, 5],
            e: {
                a: 1,
                x: [
                    {
                        a: 1
                    }
                ]
            }
        });
    });

    it("Array 4", () => {
        expect(
            objDefaultsDeep(
                {
                    name: "foo",
                    args: [{ val: 1 }]
                },
                {
                    name: "default",
                    args: [{ val: 1 }]
                }
            )
        ).toEqual({
            name: "foo",
            args: [{ val: 1 }]
        });
    });
});
