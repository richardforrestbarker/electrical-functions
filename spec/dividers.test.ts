import * as div from "../functions/dividers";

describe("Voltage Divider", () => {

    test("equal resistors halve the voltage", () => {
        expect(div.voltageDivider(10, 10, 10)).toBe(5);
    });

    test("12 V with 20 Ω / 10 Ω → 4 V", () => {
        expect(div.voltageDivider(12, 20, 10)).toBeCloseTo(4, 10);
    });

    test("full voltage when R1 = 0", () => {
        expect(div.voltageDivider(5, 0, 100)).toBe(5);
    });

});

describe("Current Divider", () => {

    test("equal resistors split current evenly", () => {
        expect(div.currentDivider(10, 10, 10)).toBe(5);
    });

    test("10 A total: branch with 20 Ω gets 1/3 of current", () => {
        expect(div.currentDivider(10, 20, 10)).toBeCloseTo(10 / 3, 10);
    });

    test("10 A total: branch with 10 Ω gets 2/3 of current", () => {
        expect(div.currentDivider(10, 10, 20)).toBeCloseTo(20 / 3, 10);
    });

});
