import constants from "./common/constants";

export default function wavelength(frequency: number): number {
    return constants.universal.lightSpeed / frequency;
}