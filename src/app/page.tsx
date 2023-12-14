import { Waves } from "@/components/Icons/Waves";
import latestFormattedDate from "../../utils/dayCalculation";

export default async function Home() {
  const lat = -22.970722;
  const lng = -43.182365;
  const start = "2023-12-13";
  const end = latestFormattedDate.toString();
  const params = "waterTemperature";

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
          <div className="bg-transparentBg rounded-l p-5 h-64">
            <span>teste</span>
          </div>
        </section>
      </div>
    </div>
  );
}
