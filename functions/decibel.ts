import constants from "./common/constants"
/**
 * calculates the log (base 10) of the ratio between power in and power out
 * @param powerIn the power in to the circuit in watts
 * @param powerOut the power out to the circuit in watts
 * @returns the log (base 10) of the ratio between power in and power out
 */
export function db(powerIn: number, powerOut: number): number {
    const ratio = powerIn / powerOut;
    return Math.log10(ratio);
}

/**
 * calculates the dBm 
 * @param powerIn the power in to the circuit in watts
 * @returns the log (base 10) of the ratio between power in and power out
 */
export function dBm(power: number): number {
    const ratio = power / constants.scales.milli;
    return Math.log10(ratio);
}
/**
 * 
 * @param dBm millidecibels
 * @returns power in watts assuming ration was to millidecibels
 */
export function power(dBm: number): number {
    dBm = dBm / 10;
    let p = Math.pow(10, dBm);
    return p * constants.scales.milli;
}