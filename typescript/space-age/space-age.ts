function roundTo(n: number, digits: number) {
  if (digits === undefined) {
    digits = 0;
  }

  var multiplicator = Math.pow(10, digits);
  n = parseFloat((n * multiplicator).toFixed(11));
  var test = Math.round(n) / multiplicator;
  return +test.toFixed(digits);
}

type Planets =
  | "mercury"
  | "venus"
  | "earth"
  | "mars"
  | "jupiter"
  | "saturn"
  | "uranus"
  | "neptune";

const orbitRatio: { [key in Planets]: number } = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
};

type Planet = keyof typeof orbitRatio;

export function age(planet: Planet, seconds: number): number {
  // throw new Error('Remove this statement and implement this function')
  const earthSeconds = 31557600;
  const earthDays = 365.25;

  return roundTo(seconds / (orbitRatio[planet] * earthSeconds), 2);
}

// can't input fake
// age("fake", 23);
