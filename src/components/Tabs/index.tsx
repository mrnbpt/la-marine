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
          className={`text-blackText py-2 px-3 rounded-lg data-[state=inactive]:hover:bg-blackText data-[state=inactive]:hover:text-white data-[state=active]:text-white transition-colors duration-200 ${
            currentTab === "tab1" && "bg-blackText"
          }`}
          value="tab1"
        >
          Swimming
        </Tabs.Trigger>
        <Tabs.Trigger
          className={`text-blackText py-2 px-3 rounded-lg data-[state=inactive]:hover:bg-blackText data-[state=inactive]:hover:text-white data-[state=active]:text-white transition-colors duration-200 ${
            currentTab === "tab2" && "bg-blackText"
          }`}
          value="tab2"
        >
          Bathing
        </Tabs.Trigger>
        <Tabs.Trigger
          className={`text-blackText py-2 px-3 rounded-lg data-[state=inactive]:hover:bg-blackText data-[state=inactive]:hover:text-white data-[state=active]:text-white transition-colors duration-200 ${
            currentTab === "tab3" && "bg-blackText"
          }`}
          value="tab3"
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
          <div className="flex flex-col gap-4 bg-transparentBg rounded-xl p-5 border border-transparentBorder">
            <div className="grid grid-cols-3 gap-4">
              <Highlight
                text="Sea Temperature"
                metric={data.hours[hoursLength].waterTemperature.sg - 3}
                metricType="sea"
              />
              <Highlight
                text="Air Temperature"
                metric={data.hours[hoursLength].airTemperature.sg}
                metricType="air"
              />
              <Highlight
                text="Humity Now"
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
          <div className=" flex flex-col gap-4 bg-transparentBg rounded-xl p-5 border border-transparentBorder">
            <div className="grid grid-cols-3 gap-4">
              <Highlight
                text="Sea Temperature Tab 2"
                metric={data.hours[hoursLength].waterTemperature.sg - 3}
                metricType="sea"
              />
              <Highlight
                text="Air Temperature"
                metric={data.hours[hoursLength].airTemperature.sg}
                metricType="air"
              />
              <Highlight
                text="Humity Now"
                metric={`${data.hours[hoursLength].humidity.sg}%`}
                metricType="humidity"
              />
            </div>
            <NewAreaChart fetchedData={parsedHours} />
          </div>
        </motion.div>
      </Tabs.Content>
      <Tabs.Content value="tab3">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className=" flex flex-col gap-4 bg-transparentBg rounded-xl p-5 border border-transparentBorder">
            <div className="grid grid-cols-3 gap-4">
              <Highlight
                text="Sea Temperature Tab 3"
                metric={data.hours[hoursLength].waterTemperature.sg - 3}
                metricType="sea"
              />
              <Highlight
                text="Air Temperature"
                metric={data.hours[hoursLength].airTemperature.sg}
                metricType="air"
              />
              <Highlight
                text="Humity Now"
                metric={`${data.hours[hoursLength].humidity.sg}%`}
                metricType="humidity"
              />
            </div>
            <NewAreaChart fetchedData={parsedHours} />
          </div>
        </motion.div>
      </Tabs.Content>
    </Tabs.Root>
  );
}
