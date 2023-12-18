import { Waves } from "../../public/Icons/Waves";
import { WavesBg } from "../../public/svgs/WavesBg";
import { NewAreaChart } from "@/components/Charts/AreaChart";
import { Highlight } from "@/components/Charts/Highlight";
import { getSeaTemperature, getSunData } from "@/actions";
import { parseStormGlassData } from "../../utils/parseData";
import { OptionTabs } from "@/components/Tabs";

export default async function Home() {
  const seaResults = getSeaTemperature(-22.980813, -43.186482);
  const sunResults = getSunData(-22.980813, -43.186482);

  const [sea, sun] = await Promise.all([seaResults, sunResults]);

  const parsedHours = parseStormGlassData(sea.hours);
  const hoursLength = sea.hours.length - 1;

  return (
    <div className="w-screen h-screen relative">
      <WavesBg />
      <div className="ml-20 mr-20 mt-9 lg:ml-32 lg:mr-32 xl:ml-60 xl:mr-60 h-full">
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
          <div>
            {/* // Tabs here */}
            <OptionTabs />
            <div className=" flex flex-col gap-4 bg-transparentBg rounded-xl p-5 border border-transparentBorder">
              <div className="grid grid-cols-3 gap-4">
                <Highlight
                  text="Sea Temperature"
                  metric={sea.hours[hoursLength].waterTemperature.sg - 4}
                  metricType="sea"
                />
                <Highlight
                  text="Air Temperature"
                  metric={sea.hours[hoursLength].airTemperature.sg}
                  metricType="air"
                />
                <Highlight
                  text="Humity Now"
                  metric={`${sea.hours[hoursLength].humidity.sg}%`}
                  metricType="humidity"
                />
              </div>
              <NewAreaChart fetchedData={parsedHours} />
            </div>
          </div>
        </section>
        <footer className="mt-12 text-xs text-transparentText font-neueMontrealRegular">
          Made by{" "}
          <a
            className="text-blackText underline"
            href="https://twitter.com/mrncst"
          >
            Mariana
          </a>
        </footer>
      </div>
    </div>
  );
}
