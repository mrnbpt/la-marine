import { Card, Metric, Text } from "@tremor/react";

interface HighlightType {
  text: string;
  metric: number;
}

export function Highlight({ text, metric }: HighlightType) {
  return (
    <Card className="flex flex-col gap-2">
      <div className="flex flex-col gap-2">
        <div className="h-1 w-8 bg-green-500 rounded-full"></div>
        <Text className="font-neueMontrealRegular">{text}</Text>
      </div>
      <Metric className="font-medium font-neueMontrealRegular">{metric}</Metric>
    </Card>
  );
}
