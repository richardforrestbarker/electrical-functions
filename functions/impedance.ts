/**
 * AC impedance and reactance calculations.
 * Units: hertz (Hz), henries (H), farads (F), ohms (Ω).
 */

/** Inductive reactance: XL = 2π × f × L */
export function inductiveReactance(frequency: number, inductance: number): number {
    return 2 * Math.PI * frequency * inductance;
}

/** Capacitive reactance: XC = 1 / (2π × f × C) */
export function capacitiveReactance(frequency: number, capacitance: number): number {
    return 1 / (2 * Math.PI * frequency * capacitance);
}

/**
 * Magnitude of complex impedance: |Z| = √(R² + X²)
 * @param resistance ohms
 * @param reactance net reactance (XL - XC) in ohms
 */
export function impedance(resistance: number, reactance: number): number {
    return Math.sqrt(resistance * resistance + reactance * reactance);
}

/** Phase angle of impedance in radians: θ = atan(X / R) */
export function phaseAngle(resistance: number, reactance: number): number {
    return Math.atan2(reactance, resistance);
}

/** Resonant frequency of an LC circuit: f = 1 / (2π × √(L × C)) */
export function resonantFrequency(inductance: number, capacitance: number): number {
    return 1 / (2 * Math.PI * Math.sqrt(inductance * capacitance));
}
