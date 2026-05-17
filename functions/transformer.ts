/**
 * Ideal transformer calculations.
 * Units: volts (V), amperes (A), turns (dimensionless).
 *
 * Relationships: N1/N2 = V1/V2 = I2/I1
 */

/** Turns ratio: n = N1 / N2 */
export function turnsRatio(primaryTurns: number, secondaryTurns: number): number {
    return primaryTurns / secondaryTurns;
}

/** Secondary voltage: V2 = V1 × (N2 / N1) */
export function secondaryVoltage(
    primaryVoltage: number,
    primaryTurns: number,
    secondaryTurns: number
): number {
    return primaryVoltage * (secondaryTurns / primaryTurns);
}

/** Primary voltage: V1 = V2 × (N1 / N2) */
export function primaryVoltage(
    secondaryVoltageV: number,
    primaryTurns: number,
    secondaryTurns: number
): number {
    return secondaryVoltageV * (primaryTurns / secondaryTurns);
}

/** Secondary current: I2 = I1 × (N1 / N2) */
export function secondaryCurrent(
    primaryCurrent: number,
    primaryTurns: number,
    secondaryTurns: number
): number {
    return primaryCurrent * (primaryTurns / secondaryTurns);
}

/** Primary current: I1 = I2 × (N2 / N1) */
export function primaryCurrent(
    secondaryCurrentA: number,
    primaryTurns: number,
    secondaryTurns: number
): number {
    return secondaryCurrentA * (secondaryTurns / primaryTurns);
}

/**
 * Reflected impedance seen at primary: Zp = Zs × (N1/N2)²
 * Useful for impedance matching.
 */
export function reflectedImpedance(
    secondaryImpedance: number,
    primaryTurns: number,
    secondaryTurns: number
): number {
    const n = primaryTurns / secondaryTurns;
    return secondaryImpedance * n * n;
}
