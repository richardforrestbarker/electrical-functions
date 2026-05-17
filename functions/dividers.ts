/**
 * Voltage and current divider calculations.
 * Units: volts (V), amperes (A), ohms (Ω).
 */

/**
 * Voltage divider output: Vout = Vin × R2 / (R1 + R2)
 * @param vin input voltage
 * @param r1 top resistor (between Vin and Vout)
 * @param r2 bottom resistor (between Vout and GND)
 */
export function voltageDivider(vin: number, r1: number, r2: number): number {
    return vin * r2 / (r1 + r2);
}

/**
 * Current through one branch of a parallel resistor pair.
 * I1 = Itotal × R2 / (R1 + R2)
 * @param totalCurrent total current entering the parallel combination
 * @param r1 resistance of the branch whose current is returned
 * @param r2 resistance of the other branch
 */
export function currentDivider(totalCurrent: number, r1: number, r2: number): number {
    return totalCurrent * r2 / (r1 + r2);
}
