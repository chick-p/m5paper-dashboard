export function round(num: number, digit = 1): number {
  return Math.round(num * Math.pow(10, digit)) / Math.pow(10, digit);
}
