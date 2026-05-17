/**
 * Series and parallel combinations for resistors, capacitors, and inductors.
 * Units: ohms (Ω), farads (F), henries (H).
 */

// ── Resistors ──────────────────────────────────────────────────────────────

/** Series: R = R1 + R2 + … + Rn */
export function seriesResistance(...resistances: number[]): number {
    return resistances.reduce((sum, r) => sum + r, 0);
}

/** Parallel: 1/R = 1/R1 + 1/R2 + … + 1/Rn */
export function parallelResistance(...resistances: number[]): number {
    return 1 / resistances.reduce((sum, r) => sum + 1 / r, 0);
}

// ── Capacitors ─────────────────────────────────────────────────────────────

/** Series: 1/C = 1/C1 + 1/C2 + … + 1/Cn */
export function seriesCapacitance(...capacitances: number[]): number {
    return 1 / capacitances.reduce((sum, c) => sum + 1 / c, 0);
}

/** Parallel: C = C1 + C2 + … + Cn */
export function parallelCapacitance(...capacitances: number[]): number {
    return capacitances.reduce((sum, c) => sum + c, 0);
}

// ── Inductors ──────────────────────────────────────────────────────────────

/** Series (no mutual inductance): L = L1 + L2 + … + Ln */
export function seriesInductance(...inductances: number[]): number {
    return inductances.reduce((sum, l) => sum + l, 0);
}

/** Parallel (no mutual inductance): 1/L = 1/L1 + 1/L2 + … + 1/Ln */
export function parallelInductance(...inductances: number[]): number {
    return 1 / inductances.reduce((sum, l) => sum + 1 / l, 0);
}
