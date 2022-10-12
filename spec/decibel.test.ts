import * as subject from "../functions/decibel";
import constants from "../functions/common/constants"
describe("Decibels", () => { 
    
    beforeEach(() => {
        
    });

    afterEach(() => {
        
    });

    test('the decibel of 0.2 to .001 is 23', () => {
        expect(subject.db(0.2, constants.scales.milli)).toBe(23);
    });

    test('200 millwatts of power is +23dBm', () => {
        expect(subject.dBm(0.2)).toBe(23);
    });

    test('23 dBm is 200 milliwatts', () => {
        expect(subject.power(23)).toBeCloseTo(199.52, 2);
    });

})