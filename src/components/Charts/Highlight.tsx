import { Card, Metric, Text } from "@tremor/react";

interface HighlightType {
  text: string;
  metric: number;
}

export function Highlight({ text, metric }: HighlightType) {
  return (
    <Card
      className="flex flex-col gap-2"
      decoration="left"
      decorationColor={"#093FA9"}
    >
      <Text className="font-neueMontrealRegular">{text}</Text>
      <Metric className="font-medium font-neueMontrealRegular">{metric}</Metric>
    </Card>
  );
}
