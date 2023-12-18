import { format, parseISO } from "date-fns";

interface StormGlassDataType {
  airTemperature: { [key: string]: number };
  humidity: any;
  precipitation: any;
  time: string;
  waterTemperature: { [key: string]: number };
  waveHeight: any;
}

export function parseStormGlassData(data: StormGlassDataType[]) {
  const parsedData = data.map((item) => {
    const dateObj = parseISO(item.time);
    const date = format(dateObj, "PPpp");
    return {
      date: date,
      "Sea Temperature": +item.waterTemperature.sg - 3,
      "Air Temperature": item.airTemperature.sg,
    };
  });
  return parsedData;
}
