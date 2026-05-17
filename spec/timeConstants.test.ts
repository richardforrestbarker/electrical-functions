import * as tc from "../functions/timeConstants";

describe("Time Constants", () => {

    test("RC: 1 kΩ, 1 mF → τ = 1 s", () => {
        expect(tc.rcTimeConstant(1000, 0.001)).toBeCloseTo(1, 10);
    });

    test("RL: 100 mH, 10 Ω → τ = 0.01 s", () => {
        expect(tc.rlTimeConstant(0.1, 10)).toBeCloseTo(0.01, 10);
    });

});

describe("Capacitor Transient Response", () => {

    test("charge voltage at t = τ: ≈63.2% of supply", () => {
        const tau = 1;
        const v = tc.capacitorChargeVoltage(10, tau, tau);
        expect(v).toBeCloseTo(10 * (1 - 1 / Math.E), 5);
    });

    test("charge voltage at t = 0 is 0 V", () => {
        expect(tc.capacitorChargeVoltage(10, 0, 1)).toBeCloseTo(0, 10);
    });

    test("discharge voltage at t = τ: ≈36.8% of initial", () => {
        const tau = 1;
        const v = tc.capacitorDischargeVoltage(10, tau, tau);
        expect(v).toBeCloseTo(10 / Math.E, 5);
    });

    test("discharge voltage at t = 0 equals initial voltage", () => {
        expect(tc.capacitorDischargeVoltage(10, 0, 1)).toBeCloseTo(10, 10);
    });

});

describe("Inductor Transient Response", () => {

    test("current rise at t = τ: ≈63.2% of supply current", () => {
        const tau = 0.01;
        const i = tc.inductorCurrentRise(5, tau, tau);
        expect(i).toBeCloseTo(5 * (1 - 1 / Math.E), 5);
    });

});

describe("Energy Storage", () => {

    test("capacitor energy: 100 µF at 10 V = 5 mJ", () => {
        expect(tc.capacitorEnergy(100e-6, 10)).toBeCloseTo(5e-3, 10);
    });

    test("inductor energy: 10 mH at 2 A = 20 mJ", () => {
        expect(tc.inductorEnergy(10e-3, 2)).toBeCloseTo(20e-3, 10);
    });

    test("capacitor charge: 100 µF at 12 V = 1200 µC", () => {
        expect(tc.capacitorCharge(100e-6, 12)).toBeCloseTo(1200e-6, 15);
    });

});
