import * as ohm from "../functions/ohm";

describe("Ohm's Law", () => {

    test("voltage: 2 A through 5 Ω = 10 V", () => {
        expect(ohm.voltage(2, 5)).toBe(10);
    });

    test("current: 10 V across 5 Ω = 2 A", () => {
        expect(ohm.current(10, 5)).toBe(2);
    });

    test("resistance: 10 V at 2 A = 5 Ω", () => {
        expect(ohm.resistance(10, 2)).toBe(5);
    });

    test("powerFromVI: 10 V × 2 A = 20 W", () => {
        expect(ohm.powerFromVI(10, 2)).toBe(20);
    });

    test("powerFromIR: 2 A through 5 Ω = 20 W", () => {
        expect(ohm.powerFromIR(2, 5)).toBe(20);
    });

    test("powerFromVR: 10 V across 5 Ω = 20 W", () => {
        expect(ohm.powerFromVR(10, 5)).toBe(20);
    });

    test("V, I, R are self-consistent", () => {
        const v = 12;
        const r = 4;
        const i = ohm.current(v, r);
        expect(ohm.voltage(i, r)).toBeCloseTo(v, 10);
    });

});
