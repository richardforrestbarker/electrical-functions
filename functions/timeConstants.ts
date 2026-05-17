/**
 * RC and RL time constants, capacitor/inductor transient response, and energy storage.
 * Units: seconds (s), ohms (Ω), farads (F), henries (H), volts (V), amperes (A), joules (J).
 */

/** RC time constant: τ = R × C */
export function rcTimeConstant(resistance: number, capacitance: number): number {
    return resistance * capacitance;
}

/** RL time constant: τ = L / R */
export function rlTimeConstant(inductance: number, resistance: number): number {
    return inductance / resistance;
}

/**
 * Capacitor voltage while charging toward Vs:
 * v(t) = Vs × (1 − e^(−t/τ))
 */
export function capacitorChargeVoltage(
    supplyVoltage: number,
    time: number,
    timeConstant: number
): number {
    return supplyVoltage * (1 - Math.pow(Math.E, -time / timeConstant));
}

/**
 * Capacitor voltage while discharging from V0:
 * v(t) = V0 × e^(−t/τ)
 */
export function capacitorDischargeVoltage(
    initialVoltage: number,
    time: number,
    timeConstant: number
): number {
    return initialVoltage * Math.pow(Math.E, -time / timeConstant);
}

/**
 * Inductor current while energising toward Is:
 * i(t) = Is × (1 − e^(−t/τ))
 */
export function inductorCurrentRise(
    supplyCurrentAmps: number,
    time: number,
    timeConstant: number
): number {
    return supplyCurrentAmps * (1 - Math.pow(Math.E, -time / timeConstant));
}

/** Energy stored in a capacitor: E = ½ × C × V² */
export function capacitorEnergy(capacitance: number, voltage: number): number {
    return 0.5 * capacitance * voltage * voltage;
}

/** Energy stored in an inductor: E = ½ × L × I² */
export function inductorEnergy(inductance: number, current: number): number {
    return 0.5 * inductance * current * current;
}

/** Charge stored on a capacitor: Q = C × V */
export function capacitorCharge(capacitance: number, voltage: number): number {
    return capacitance * voltage;
}
