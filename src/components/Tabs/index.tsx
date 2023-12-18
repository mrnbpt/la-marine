"use client";

import * as Tabs from "@radix-ui/react-tabs";
import { Highlight } from "../Charts/Highlight";
import { NewAreaChart } from "../Charts/AreaChart";
import { useState } from "react";

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
      <Tabs.List className="bg-red-300 gap-2 p-1 rounded-full mb-4 inline-flex">
        <Tabs.Trigger
          className={`py-2 px-4 rounded-full data-[state=active]:text-white ${
            currentTab === "tab1" && "bg-blue-200"
          }`}
          value="tab1"
        >
          Swimming
        </Tabs.Trigger>
        <Tabs.Trigger
          className={`py-2 px-4 rounded-full data-[state=active]:text-white ${
            currentTab === "tab2" && "bg-blue-200"
          }`}
          value="tab2"
        >
          Bathing
        </Tabs.Trigger>
        <Tabs.Trigger
          className={`py-2 px-4 rounded-full data-[state=active]:text-white ${
            currentTab === "tab3" && "bg-blue-200"
          }`}
          value="tab3"
        >
          Surfing
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="tab1">
        <div className=" flex flex-col gap-4 bg-transparentBg rounded-xl p-5 border border-transparentBorder">
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
      </Tabs.Content>
      <Tabs.Content value="tab2">
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
      </Tabs.Content>
      <Tabs.Content value="tab3">
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
      </Tabs.Content>
    </Tabs.Root>
  );
}
