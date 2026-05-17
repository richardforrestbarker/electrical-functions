import constants from "./common/constants"
/**
 * calculates the decibel ratio between power in and power out: dB = 10 × log₁₀(P1/P2)
 * @param powerIn the input power in watts
 * @param powerOut the output power in watts
 * @returns power ratio in decibels
 */
export function db(powerIn: number, powerOut: number): number {
    const ratio = powerIn / powerOut;
    return 10 * Math.log10(ratio);
}

/**
 * calculates the power level in dBm (relative to 1 milliwatt): dBm = 10 × log₁₀(P / 1mW)
 * @param power power in watts
 * @returns power level in dBm
 */
export function dBm(power: number): number {
    const ratio = power / constants.scales.milli;
    return 10 * Math.log10(ratio);
}

/**
 * converts a dBm value back to milliwatts: mW = 10^(dBm/10)
 * @param dBm power level in dBm
 * @returns power in milliwatts
 */
export function power(dBm: number): number {
    return Math.pow(10, dBm / 10);
}