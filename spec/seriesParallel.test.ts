import * as sp from "../functions/seriesParallel";

describe("Series & Parallel Resistors", () => {

    test("series: 10 + 20 + 30 = 60 Ω", () => {
        expect(sp.seriesResistance(10, 20, 30)).toBe(60);
    });

    test("parallel: two equal 10 Ω = 5 Ω", () => {
        expect(sp.parallelResistance(10, 10)).toBe(5);
    });

    test("parallel: three equal 30 Ω = 10 Ω", () => {
        expect(sp.parallelResistance(30, 30, 30)).toBeCloseTo(10, 10);
    });

});

describe("Series & Parallel Capacitors", () => {

    test("parallel: 10 µF + 10 µF = 20 µF", () => {
        expect(sp.parallelCapacitance(10e-6, 10e-6)).toBeCloseTo(20e-6, 20);
    });

    test("series: two equal 10 µF = 5 µF", () => {
        expect(sp.seriesCapacitance(10e-6, 10e-6)).toBeCloseTo(5e-6, 20);
    });

    test("series three equal 30 µF = 10 µF", () => {
        expect(sp.seriesCapacitance(30e-6, 30e-6, 30e-6)).toBeCloseTo(10e-6, 20);
    });

});

describe("Series & Parallel Inductors", () => {

    test("series: 5 mH + 10 mH = 15 mH", () => {
        expect(sp.seriesInductance(5e-3, 10e-3)).toBeCloseTo(15e-3, 10);
    });

    test("parallel: two equal 10 mH = 5 mH", () => {
        expect(sp.parallelInductance(10e-3, 10e-3)).toBeCloseTo(5e-3, 10);
    });

    test("parallel three equal 30 mH = 10 mH", () => {
        expect(sp.parallelInductance(30e-3, 30e-3, 30e-3)).toBeCloseTo(10e-3, 10);
    });

});
