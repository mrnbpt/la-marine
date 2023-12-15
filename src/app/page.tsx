import { Waves } from "@/components/Icons/Waves";
import latestFormattedDate from "../../utils/dayCalculation";
import { NewAreaChart } from "@/components/Charts/AreaChart";
import { Highlight } from "@/components/Charts/Highlight";
import { LimitBar } from "@/components/Charts/LimitBar";
import { parseData } from "../../utils/parseData";

export default async function Home() {
  const lat = -22.980645;
  const lng = -43.188332;
  const start = "2023-12-13";
  const end = latestFormattedDate.toString();
  const params =
    "waterTemperature,waveHeight,airTemperature,humidity,precipitation";

  const res = await fetch(
    `https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}&start=${start}&end=${end}`,
    {
      headers: {
        Authorization: process.env.STORMGLASS_APIKEY?.toString()!,
      },
      // next: { revalidate: 80000 },
    }
  );
  const json = await res.json();
  const parsedData = parseData(json.hours);
  console.log(json);

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
            <div className="flex gap-4">
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
