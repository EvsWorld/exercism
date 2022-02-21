function roundToTwo(num) {
  return +(Math.round(num + "e+2") + "e-2");
}

export function age(planet: string, seconds: number): number {
  // throw new Error('Remove this statement and implement this function')
  const earthSeconds = 31557600;
  const earthDays = 365.25;

  const planets: { [key: string]: number } = {
    mercury: 0.2408467,
    venus: 0.61519726,
    earth: 1,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132,
  };
  return roundToTwo(seconds / (planets[planet] * earthSeconds));
}
