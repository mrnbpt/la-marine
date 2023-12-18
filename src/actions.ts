import { todayFormatted, d7Formatted } from "../utils/dayCalculation";

export async function getSeaTemperature(lat: number, lng: number) {
  const start = d7Formatted;
  const end = todayFormatted;
  const params =
    "waterTemperature,waveHeight,airTemperature,humidity,precipitation,windWaveHeight,currentSpeed,wavePeriod";

  const res = await fetch(
    `https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}&start=${start}&end=${end}`,
    {
      next: { revalidate: 3600 },
      headers: {
        Authorization: process.env.STORMGLASS_APIKEY?.toString()!,
      },
    }
  );
  const parsed = await res.json();
  return parsed;
}

export async function getSunData(lat: number, lng: number) {
  const start = d7Formatted;
  const end = todayFormatted;
  const params = "uvIndex";

  const res = await fetch(
    `https://api.stormglass.io/v2/solar/point?lat=${lat}&lng=${lng}&params=${params}&start=${start}&end=${end}`,
    {
      next: { revalidate: 3600 },
      headers: {
        Authorization: process.env.STORMGLASS_APIKEY?.toString()!,
      },
    }
  );
  const parsed = await res.json();
  return parsed;
}
