import { format, parseISO } from "date-fns";

interface OriginalFormat {
  airTemperature: { [key: string]: number };
  humidity: any;
  precipitation: any;
  time: string;
  waterTemperature: { [key: string]: number };
  waveHeight: any;
}

export function parseData(data: OriginalFormat[]) {
  const parsedData = data.map((item) => {
    const dateObj = parseISO(item.time);
    console.log(dateObj);
    const date = format(dateObj, "PPpp");
    console.log(date);
    return {
      date: date,
      "Sea Temperature": item.waterTemperature.sg,
      "Air Temperature": item.airTemperature.sg,
    };
  });
  return parsedData;
}
