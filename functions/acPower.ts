/**
 * AC power calculations.
 * Units: volts (V), amperes (A), watts (W), volt-amperes-reactive (VAR),
 *        volt-amperes (VA), radians (rad).
 */

/** Real (active) power: P = V × I × cos(θ) */
export function realPower(voltage: number, current: number, phaseAngleRad: number): number {
    return voltage * current * Math.cos(phaseAngleRad);
}

/** Reactive power: Q = V × I × sin(θ) */
export function reactivePower(voltage: number, current: number, phaseAngleRad: number): number {
    return voltage * current * Math.sin(phaseAngleRad);
}

/** Apparent power: S = V × I */
export function apparentPower(voltage: number, current: number): number {
    return voltage * current;
}

/** Power factor: PF = P / S = cos(θ) */
export function powerFactor(realPowerW: number, apparentPowerVA: number): number {
    return realPowerW / apparentPowerVA;
}

/** Phase angle from power factor: θ = acos(PF) */
export function phaseAngleFromPowerFactor(pf: number): number {
    return Math.acos(pf);
}
