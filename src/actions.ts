import { latestFormattedDate, dayMinusSeven } from "../utils/dayCalculation";

export async function getSeaTemperature(lat: number, lng: number) {
  const start = dayMinusSeven;
  const end = latestFormattedDate;
  const params =
    "waterTemperature,waveHeight,airTemperature,humidity,precipitation,windWaveHeight,currentSpeed,wavePeriod";

  const res = await fetch(
    `https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}&start=${start}&end=${end}`,
    {
      headers: {
        Authorization: process.env.STORMGLASS_APIKEY?.toString()!,
      },
      next: { revalidate: 3600 },
    }
  );
  const parsed = await res.json();
  return parsed;
}

export async function getSunData(lat: number, lng: number) {
  const start = dayMinusSeven;
  const end = latestFormattedDate;
  const params = "uvIndex";

  const res = await fetch(
    `https://api.stormglass.io/v2/solar/point?lat=${lat}&lng=${lng}&params=${params}&start=${start}&end=${end}`,
    {
      headers: {
        Authorization: process.env.STORMGLASS_APIKEY?.toString()!,
      },
      next: { revalidate: 3600 },
    }
  );
  const parsed = await res.json();
  return parsed;
}
