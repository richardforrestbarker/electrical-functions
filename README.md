# electrical-functions

A TypeScript library of electrical engineering calculations. All math is implemented explicitly — no external math libraries.

## Modules

### Ohm's Law — `functions/ohm.ts`

DC voltage, current, resistance, and power.

| Function | Formula | Returns |
|---|---|---|
| `voltage(current, resistance)` | V = I × R | volts |
| `current(voltage, resistance)` | I = V / R | amperes |
| `resistance(voltage, current)` | R = V / I | ohms |
| `powerFromVI(voltage, current)` | P = V × I | watts |
| `powerFromIR(current, resistance)` | P = I² × R | watts |
| `powerFromVR(voltage, resistance)` | P = V² / R | watts |

```ts
import { voltage, current, resistance, powerFromVI } from "./functions/ohm";

voltage(2, 5);       // → 10 V
current(10, 5);      // → 2 A
resistance(10, 2);   // → 5 Ω
powerFromVI(10, 2);  // → 20 W
```

---

### Impedance — `functions/impedance.ts`

AC reactance, impedance magnitude, phase angle, and resonance.

| Function | Formula | Returns |
|---|---|---|
| `inductiveReactance(frequency, inductance)` | XL = 2π × f × L | ohms |
| `capacitiveReactance(frequency, capacitance)` | XC = 1 / (2π × f × C) | ohms |
| `impedance(resistance, reactance)` | \|Z\| = √(R² + X²) | ohms |
| `phaseAngle(resistance, reactance)` | θ = atan2(X, R) | radians |
| `resonantFrequency(inductance, capacitance)` | f = 1 / (2π√(LC)) | hertz |

```ts
import { inductiveReactance, impedance, resonantFrequency } from "./functions/impedance";

inductiveReactance(60, 0.1);        // → ~37.7 Ω  (60 Hz, 100 mH)
impedance(3, 4);                    // → 5 Ω       (3-4-5 triangle)
resonantFrequency(1e-3, 1e-6);      // → ~5033 Hz  (1 mH, 1 µF)
```

---

### AC Power — `functions/acPower.ts`

Real, reactive, and apparent power; power factor.

| Function | Formula | Returns |
|---|---|---|
| `realPower(voltage, current, phaseAngleRad)` | P = V × I × cos(θ) | watts |
| `reactivePower(voltage, current, phaseAngleRad)` | Q = V × I × sin(θ) | VAR |
| `apparentPower(voltage, current)` | S = V × I | VA |
| `powerFactor(realPower, apparentPower)` | PF = P / S | dimensionless |
| `phaseAngleFromPowerFactor(pf)` | θ = acos(PF) | radians |

```ts
import { realPower, apparentPower, powerFactor } from "./functions/acPower";

realPower(120, 10, 0);          // → 1200 W  (unity power factor)
apparentPower(120, 10);         // → 1200 VA
powerFactor(600, 1000);         // → 0.6
```

---

### Voltage & Current Dividers — `functions/dividers.ts`

| Function | Formula | Returns |
|---|---|---|
| `voltageDivider(vin, r1, r2)` | Vout = Vin × R2 / (R1 + R2) | volts |
| `currentDivider(totalCurrent, r1, r2)` | I₁ = It × R2 / (R1 + R2) | amperes |

```ts
import { voltageDivider, currentDivider } from "./functions/dividers";

voltageDivider(12, 20, 10);     // → 4 V
currentDivider(10, 20, 10);     // → ~3.33 A  (through the 20 Ω branch)
```

---

### Series & Parallel Combinations — `functions/seriesParallel.ts`

| Function | Description |
|---|---|
| `seriesResistance(...r)` | R = R1 + R2 + … |
| `parallelResistance(...r)` | 1/R = 1/R1 + 1/R2 + … |
| `seriesCapacitance(...c)` | 1/C = 1/C1 + 1/C2 + … |
| `parallelCapacitance(...c)` | C = C1 + C2 + … |
| `seriesInductance(...l)` | L = L1 + L2 + … |
| `parallelInductance(...l)` | 1/L = 1/L1 + 1/L2 + … |

```ts
import { seriesResistance, parallelResistance } from "./functions/seriesParallel";

seriesResistance(10, 20, 30);   // → 60 Ω
parallelResistance(10, 10);     // → 5 Ω
```

---

### Time Constants & Transients — `functions/timeConstants.ts`

| Function | Formula | Returns |
|---|---|---|
| `rcTimeConstant(resistance, capacitance)` | τ = R × C | seconds |
| `rlTimeConstant(inductance, resistance)` | τ = L / R | seconds |
| `capacitorChargeVoltage(Vs, t, τ)` | v(t) = Vs × (1 − e^(−t/τ)) | volts |
| `capacitorDischargeVoltage(V0, t, τ)` | v(t) = V0 × e^(−t/τ) | volts |
| `inductorCurrentRise(Is, t, τ)` | i(t) = Is × (1 − e^(−t/τ)) | amperes |
| `capacitorEnergy(capacitance, voltage)` | E = ½CV² | joules |
| `inductorEnergy(inductance, current)` | E = ½LI² | joules |
| `capacitorCharge(capacitance, voltage)` | Q = CV | coulombs |

```ts
import { rcTimeConstant, capacitorChargeVoltage, capacitorEnergy } from "./functions/timeConstants";

rcTimeConstant(1000, 0.001);            // → 1 s
capacitorChargeVoltage(10, 1, 1);       // → ~6.32 V  (at t = τ)
capacitorEnergy(100e-6, 10);            // → 5 mJ
```

---

### Transformers — `functions/transformer.ts`

Ideal transformer calculations based on N1/N2 = V1/V2 = I2/I1.

| Function | Description | Returns |
|---|---|---|
| `turnsRatio(n1, n2)` | n = N1 / N2 | dimensionless |
| `secondaryVoltage(v1, n1, n2)` | V2 = V1 × (N2/N1) | volts |
| `primaryVoltage(v2, n1, n2)` | V1 = V2 × (N1/N2) | volts |
| `secondaryCurrent(i1, n1, n2)` | I2 = I1 × (N1/N2) | amperes |
| `primaryCurrent(i2, n1, n2)` | I1 = I2 × (N2/N1) | amperes |
| `reflectedImpedance(zs, n1, n2)` | Zp = Zs × (N1/N2)² | ohms |

```ts
import { secondaryVoltage, reflectedImpedance } from "./functions/transformer";

secondaryVoltage(120, 100, 10);     // → 12 V   (10:1 step-down)
reflectedImpedance(8, 10, 1);       // → 800 Ω  (impedance matching)
```

---

### Decibels — `functions/decibel.ts`

| Function | Description | Returns |
|---|---|---|
| `db(powerIn, powerOut)` | Log₁₀ ratio of power | dB |
| `dBm(power)` | Power relative to 1 mW | dBm |
| `power(dBm)` | dBm back to watts | watts |

```ts
import { db, dBm, power } from "./functions/decibel";

dBm(0.2);    // → 23 dBm  (200 mW)
power(23);   // → ~0.1995 W
```

---

### Wavelength — `functions/wavelength.ts`

```ts
import wavelength from "./functions/wavelength";

wavelength(2.4e9);  // → ~0.1249 m  (2.4 GHz)
```

---

## Project Structure

```
electrical-functions/
├── functions/
│   ├── common/
│   │   └── constants.ts       # Physical constants
│   ├── acPower.ts             # Real, reactive, apparent power; power factor
│   ├── decibel.ts             # dB, dBm, power conversions
│   ├── dividers.ts            # Voltage and current dividers
│   ├── impedance.ts           # Reactance, impedance, resonant frequency
│   ├── ohm.ts                 # Ohm's law and DC power
│   ├── seriesParallel.ts      # Series/parallel R, C, L combinations
│   ├── timeConstants.ts       # RC/RL time constants, transients, energy
│   ├── transformer.ts         # Ideal transformer calculations
│   └── wavelength.ts          # Wavelength from frequency
├── spec/
│   ├── acPower.test.ts
│   ├── decibel.test.ts
│   ├── dividers.test.ts
│   ├── impedance.test.ts
│   ├── ohm.test.ts
│   ├── seriesParallel.test.ts
│   ├── timeConstants.test.ts
│   └── transformer.test.ts
├── jest.config.ts
├── tsconfig.json
└── package.json
```

## Prerequisites

- [Node.js](https://nodejs.org/) (v14+)
- npm

## Install

```bash
npm install
```

## Build

Compiles TypeScript to JavaScript in the `dist/` directory:

```bash
npm run build
```

## Test

```bash
npm test
```

Tests use [Jest](https://jestjs.io/) with `ts-jest` for direct TypeScript execution.
