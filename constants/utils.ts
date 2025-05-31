export function getPipDifference(
  entryPrice: number,
  existPrice: number,
  pips: number = 0.0001,
): number {
  const pipsDifference = Math.abs(entryPrice - existPrice) / pips;
  const decimalPlaces = 4; // Adjust this based on your requirements
  return parseFloat(pipsDifference.toFixed(decimalPlaces));
}
