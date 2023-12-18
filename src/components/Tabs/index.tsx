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
      <Tabs.List className="gap-2 mb-4 inline-flex">
        <Tabs.Trigger
          className={`text-transparentText text-sm font-medium py-1 px-3 rounded-full data-[state=inactive]:hover:bg-blueBrandLight data-[state=inactive]:hover:text-white data-[state=active]:text-white transition-colors duration-200 ${
            currentTab === "tab1" && "bg-blueBrandLight"
          }`}
          value="tab1"
        >
          <span>Swimming</span>
        </Tabs.Trigger>
        <Tabs.Trigger
          className={`text-transparentText text-sm font-medium py-1 px-3 rounded-full data-[state=inactive]:hover:bg-blueBrandLight data-[state=inactive]:hover:text-white data-[state=active]:text-white transition-colors duration-200 ${
            currentTab === "tab2" && "bg-blueBrandLight"
          }`}
          value="tab2"
        >
          Surfing
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="tab1">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex flex-col gap-4 bg-transparentBg rounded-xl p-5">
            <div className="grid grid-cols-3 gap-4">
              <Highlight
                text="Sea Temperature (C°)"
                metric={data.hours[hoursLength].waterTemperature.sg - 3}
                metricType="sea"
              />
              <Highlight
                text="Air Temperature (C°)"
                metric={data.hours[hoursLength].airTemperature.sg}
                metricType="air"
              />
              <Highlight
                text="Humidity Now"
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
            <div className="grid grid-cols-3 gap-4">
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
