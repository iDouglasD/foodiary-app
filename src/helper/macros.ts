import { MacroProgress } from "../types/macro";

export function calcMacroPercentage({ goal, current }: MacroProgress) {
  const percentage = (current / goal) * 100;
  return Math.min(percentage, 100);
}