"use client";

import * as Tabs from "@radix-ui/react-tabs";
import { Highlight } from "../Charts/Highlight";
import { NewAreaChart } from "../Charts/AreaChart";
import { useState } from "react";
import { motion } from "framer-motion";

interface DataHourData {
  sg: number;
  airTemperature: {
    sg: number;
  };
  humidity: {
    sg: number;
  };
  waterTemperature: {
    sg: number;
  };
}

interface DataType {
  data: {
    hours: {
      [key: string]: DataHourData;
    }[];
  };
}

interface DataContainerType extends DataType {
  hoursLength: number;
  parsedHours: {
    date: string;
    "Sea Temperature": number;
    "Air Temperature": number;
  }[];
}

export function OptionTabs({
  data,
  parsedHours,
  hoursLength,
}: DataContainerType) {
  const [currentTab, setCurrentTab] = useState("tab1");

  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <div className="flex justify-between items-center mb-4">
        <Tabs.List className="gap-2 inline-flex">
          <Tabs.Trigger
            className={`text-transparentText text-sm font-medium py-1 px-3 rounded-full  data-[state=inactive]:hover:text-blueBrandLight data-[state=active]:text-blueBrandLight transition-colors duration-200 ${
              currentTab === "tab1" && "text-blueBrandLight bg-transparentBg"
            }`}
            value="tab1"
          >
            <span>Swimming</span>
          </Tabs.Trigger>
          <Tabs.Trigger
            className={`text-transparentText text-sm font-medium py-1 px-3 rounded-full data-[state=inactive]:hover:text-blueBrandLight data-[state=active]:text-blueBrandLight transition-colors duration-200 ${
              currentTab === "tab2" && "text-blueBrandLight bg-transparentBg"
            }`}
            value="tab2"
          >
            Surfing
          </Tabs.Trigger>
        </Tabs.List>
        <div className="flex items-center gap-2 bg-transparentBg rounded-full px-3 py-1 text-transparentText">
          <div className="rounded-full h-2 w-2 bg-green-400" />
          <span className="text-sm">Copacabana, RJ</span>
        </div>
      </div>
      <Tabs.Content value="tab1">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex flex-col gap-4 bg-transparentBg rounded-xl p-5">
            <div className="grid xs:grid-rows-3 md:grid-cols-3 gap-4">
              <Highlight
                text="Sea Temperature (C°)"
                metric={data.hours[hoursLength - 6].waterTemperature.sg - 2}
                metricType="sea"
              />
              <Highlight
                text="Air Temperature (C°)"
                metric={data.hours[hoursLength].airTemperature.sg}
                metricType="air"
              />
              <Highlight
                text="Humidity"
                metric={`${data.hours[hoursLength].humidity.sg}%`}
                metricType="humidity"
              />
            </div>
            <NewAreaChart fetchedData={parsedHours} />
          </div>
        </motion.div>
      </Tabs.Content>
      <Tabs.Content value="tab2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className=" flex flex-col gap-4 bg-transparentBg rounded-xl p-5">
            <div className="grid xs:grid-rows-3 md:grid-cols-3 gap-4">
              <Highlight
                text="Wave Height (m)"
                metric={data.hours[hoursLength].waveHeight.sg}
                metricType="wave"
              />
              <Highlight
                text="Current Speed"
                metric={data.hours[hoursLength].currentSpeed.sg}
                metricType="currentSpeed"
              />
              <Highlight
                text="Wave Period (s)"
                metric={data.hours[hoursLength].wavePeriod.sg}
                metricType="wavePeriod"
              />
            </div>
            <NewAreaChart fetchedData={parsedHours} />
          </div>
        </motion.div>
      </Tabs.Content>
    </Tabs.Root>
  );
}
