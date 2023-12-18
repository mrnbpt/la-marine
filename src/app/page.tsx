import { Waves } from "../../public/Icons/Waves";
import { WavesBg } from "../../public/svgs/WavesBg";
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
    <>
      <div className="relative hidden md:block top-[-60px] right-0">
        <WavesBg />
      </div>
      <div className="w-screen flex mt-8 md:mt-16 mb-12 md:mb-16">
        <div className="flex-1 ml-4 mr-4 md:ml-20 md:mr-20 md:mt-9 lg:ml-32 lg:mr-32 xl:ml-60 xl:mr-60">
          <section className="flex flex-col gap-12 md:gap-16">
            <div className="flex flex-col gap-2 md:gap-4">
              <h1 className="font-formula text-3xl md:text-heading max-w-lg leading-tight bg-gradient-to-r from-gradientBlue1 from-10% via-gradientBlue2 via-45% to-gradientBlue3 to-90% text-transparent bg-clip-text">
                Daily insights for water activities
              </h1>
              <p className="text-transparentText text-base max-w-md">
                Guiding your coastal adventures with daily sea conditions and
                personalized insights
              </p>
            </div>
            <OptionTabs
              data={sea}
              parsedHours={parsedHours}
              hoursLength={hoursLength}
            />
          </section>
          <footer className="mt-6 text-right text-xs text-transparentText">
            Designed and built by{" "}
            <a
              className="text-blackText underline decoration-blackText"
              href="https://twitter.com/mrncst"
            >
              Mariana
            </a>
          </footer>
        </div>
      </div>
    </>
  );
}
