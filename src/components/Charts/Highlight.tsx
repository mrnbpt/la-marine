import { Card, Metric, Text } from "@tremor/react";

interface HighlightType {
  text: string;
  metric: any;
  metricType: string;
}

export function Highlight({ text, metric, metricType }: HighlightType) {
  return (
    <Card className="flex flex-col gap-3">
      <div className="flex flex-col gap-2">
        <div
          className={`h-1 w-8 rounded-full ${
            metricType === "sea"
              ? metric < 19
                ? "bg-red-500"
                : metric >= 20 && metric <= 21
                ? "bg-yellow-500"
                : "bg-green-500"
              : metricType === "air"
              ? metric > 26
                ? "bg-red-500"
                : metric >= 23 && metric <= 26
                ? "bg-yellow-500"
                : "bg-green-500"
              : metricType === "precipitation"
              ? metric > 80
                ? "bg-red-500"
                : metric >= 20 && metric <= 80
                ? "bg-yellow-500"
                : "bg-green-500"
              : metricType === "currentSpeed"
              ? metric > 2
                ? "bg-red-500"
                : metric >= 1 && metric <= 2
                ? "bg-yellow-500"
                : "bg-green-500"
              : metricType === "wavePeriod"
              ? metric > 10
                ? "bg-red-500"
                : metric >= 2 && metric <= 10
                ? "bg-yellow-500"
                : "bg-green-500"
              : metricType === "wave"
              ? metric > 3
                ? "bg-red-500"
                : metric >= 1 && metric <= 3
                ? "bg-yellow-500"
                : "bg-green-500"
              : metricType === "humidity"
              ? metric > 70
                ? "bg-red-500"
                : metric >= 50 && metric <= 70
                ? "bg-yellow-500"
                : "bg-green-500"
              : "bg-gray-500"
          }`}
        ></div>
        <Text className="font-neueMontrealRegular">{text}</Text>
      </div>
      <Metric className="font-medium font-neueMontrealRegular">{metric}</Metric>
    </Card>
  );
}
