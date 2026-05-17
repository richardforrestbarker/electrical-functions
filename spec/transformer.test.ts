import * as tr from "../functions/transformer";

describe("Transformer", () => {

    test("turnsRatio: 100:10 = 10", () => {
        expect(tr.turnsRatio(100, 10)).toBe(10);
    });

    test("secondaryVoltage: 120 V, 100:10 turns → 12 V (step-down)", () => {
        expect(tr.secondaryVoltage(120, 100, 10)).toBeCloseTo(12, 10);
    });

    test("secondaryVoltage: 120 V, 10:100 turns → 1200 V (step-up)", () => {
        expect(tr.secondaryVoltage(120, 10, 100)).toBeCloseTo(1200, 10);
    });

    test("primaryVoltage: reverse of secondaryVoltage", () => {
        expect(tr.primaryVoltage(12, 100, 10)).toBeCloseTo(120, 10);
    });

    test("secondaryCurrent: 1 A primary, 100:10 turns → 10 A secondary", () => {
        expect(tr.secondaryCurrent(1, 100, 10)).toBeCloseTo(10, 10);
    });

    test("primaryCurrent: reverse of secondaryCurrent", () => {
        expect(tr.primaryCurrent(10, 100, 10)).toBeCloseTo(1, 10);
    });

    test("reflectedImpedance: 8 Ω load, 10:1 turns → 800 Ω at primary", () => {
        expect(tr.reflectedImpedance(8, 10, 1)).toBeCloseTo(800, 10);
    });

    test("power is conserved: V1×I1 = V2×I2", () => {
        const v1 = 120, i1 = 1, n1 = 100, n2 = 10;
        const v2 = tr.secondaryVoltage(v1, n1, n2);
        const i2 = tr.secondaryCurrent(i1, n1, n2);
        expect(v1 * i1).toBeCloseTo(v2 * i2, 10);
    });

});
