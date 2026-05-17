/**
 * Ohm's Law and DC Power calculations.
 * All units: volts (V), amperes (A), ohms (Ω), watts (W).
 */

export function voltage(current: number, resistance: number): number {
    return current * resistance;
}

export function current(voltage: number, resistance: number): number {
    return voltage / resistance;
}

export function resistance(voltage: number, current: number): number {
    return voltage / current;
}

/** P = V × I */
export function powerFromVI(voltage: number, current: number): number {
    return voltage * current;
}

/** P = I² × R */
export function powerFromIR(current: number, resistance: number): number {
    return current * current * resistance;
}

/** P = V² / R */
export function powerFromVR(voltage: number, resistance: number): number {
    return (voltage * voltage) / resistance;
}
