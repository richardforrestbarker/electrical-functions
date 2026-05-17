import * as ac from "../functions/acPower";

describe("AC Power", () => {

    test("realPower: 120 V, 10 A, 0 rad phase = 1200 W", () => {
        expect(ac.realPower(120, 10, 0)).toBeCloseTo(1200, 5);
    });

    test("realPower: 120 V, 10 A, π/2 rad phase ≈ 0 W", () => {
        expect(ac.realPower(120, 10, Math.PI / 2)).toBeCloseTo(0, 5);
    });

    test("reactivePower: 120 V, 10 A, 0 rad = 0 VAR", () => {
        expect(ac.reactivePower(120, 10, 0)).toBeCloseTo(0, 5);
    });

    test("reactivePower: 120 V, 10 A, π/2 rad = 1200 VAR", () => {
        expect(ac.reactivePower(120, 10, Math.PI / 2)).toBeCloseTo(1200, 5);
    });

    test("apparentPower: 120 V, 10 A = 1200 VA", () => {
        expect(ac.apparentPower(120, 10)).toBe(1200);
    });

    test("powerFactor: 600 W / 1000 VA = 0.6", () => {
        expect(ac.powerFactor(600, 1000)).toBeCloseTo(0.6, 10);
    });

    test("powerFactor: unity when real equals apparent", () => {
        expect(ac.powerFactor(1200, 1200)).toBe(1);
    });

    test("phaseAngleFromPowerFactor: PF=1 → 0 rad", () => {
        expect(ac.phaseAngleFromPowerFactor(1)).toBeCloseTo(0, 10);
    });

    test("phaseAngleFromPowerFactor: PF=0.6 ≈ 0.9273 rad (53.13°)", () => {
        expect(ac.phaseAngleFromPowerFactor(0.6)).toBeCloseTo(0.9273, 4);
    });

});
