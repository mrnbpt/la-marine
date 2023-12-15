import { Waves } from "@/components/Icons/Waves";
import { latestFormattedDate, dayMinusSeven } from "../../utils/dayCalculation";
import { NewAreaChart } from "@/components/Charts/AreaChart";
import { Highlight } from "@/components/Charts/Highlight";
import { LimitBar } from "@/components/Charts/LimitBar";
import { parseData } from "../../utils/parseData";

export default async function Home() {
  const lat = -22.96785;
  const lng = -43.178982;
  const start = dayMinusSeven;
  const end = latestFormattedDate;
  const params =
    "waterTemperature,waveHeight,airTemperature,humidity,precipitation";

  // Fetching Sea Data
  const sea = await fetch(
    `https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}&start=${start}&end=${end}`,
    {
      headers: {
        Authorization: process.env.STORMGLASS_APIKEY?.toString()!,
      },
      // next: { revalidate: 80000 },
    }
  );
  const seaJson = await sea.json();
  const parsedData = parseData(seaJson.hours);

  // Fetching Temperature Data
  const options = { method: "GET", headers: { accept: "application/json" } };
  const temp = await fetch(
    "https://api.tomorrow.io/v4/weather/history/recent?location=rio%20de%20janeiro&timesteps=1h&apikey=izHyzeMAz76XObTDducsbls5fw6fj7M0",
    options
  );

  const tempJson = await temp.json();

  console.log(tempJson);

  return (
    <div className="w-screen h-screen">
      <div className="ml-20 mr-20 mt-9 lg:ml-32 lg:mr-32 xl:ml-48 xl:mr-48">
        <header className="flex items-center gap-2">
          <Waves />
          <span className="font-neueMachina leading-[14px] text-blueBrand">
            La Marine
          </span>
        </header>
        <section className="flex flex-col gap-20 mt-20">
          <div className="flex flex-col gap-2">
            <h1 className="font-formula text-heading max-w-lg leading-tight bg-gradient-to-r from-gradientBlue1 from-10% via-gradientBlue2 via-45% to-gradientBlue3 to-90% text-transparent bg-clip-text">
              Daily insights for water activities
            </h1>
            <p className="text-transparentText font-neueMontrealRegular max-w-md">
              Guiding your coastal adventures with daily sea conditions and
              personalized insights
            </p>
          </div>
          <div className=" flex flex-col gap-4 bg-transparentBg rounded-xl p-5">
            <div className="grid grid-cols-3 gap-4">
              <Highlight text="Sea Temperature" metric={25.5} />
              <Highlight text="Sea Temperature" metric={25.5} />
              <LimitBar text={"UV Index"} metric={40} />
            </div>
            <NewAreaChart fetchedData={parsedData} />
          </div>
        </section>
      </div>
    </div>
  );
}
