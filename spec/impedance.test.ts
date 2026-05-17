import * as imp from "../functions/impedance";

describe("Impedance", () => {

    test("inductiveReactance: 60 Hz, 0.1 H ≈ 37.699 Ω", () => {
        expect(imp.inductiveReactance(60, 0.1)).toBeCloseTo(37.699, 3);
    });

    test("capacitiveReactance: 60 Hz, 100 µF ≈ 26.526 Ω", () => {
        expect(imp.capacitiveReactance(60, 100e-6)).toBeCloseTo(26.526, 3);
    });

    test("impedance: 3 Ω resistance, 4 Ω reactance → |Z| = 5 Ω", () => {
        expect(imp.impedance(3, 4)).toBe(5);
    });

    test("impedance: purely resistive (0 reactance) equals resistance", () => {
        expect(imp.impedance(10, 0)).toBe(10);
    });

    test("phaseAngle: 0 Ω resistance, 1 Ω reactance = π/2 rad", () => {
        expect(imp.phaseAngle(0, 1)).toBeCloseTo(Math.PI / 2, 10);
    });

    test("phaseAngle: equal R and X = π/4 rad (45°)", () => {
        expect(imp.phaseAngle(1, 1)).toBeCloseTo(Math.PI / 4, 10);
    });

    test("resonantFrequency: 1 mH, 1 µF ≈ 5032.9 Hz", () => {
        expect(imp.resonantFrequency(1e-3, 1e-6)).toBeCloseTo(5032.9, 0);
    });

});
