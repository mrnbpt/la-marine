import { Card, Metric, Text } from "@tremor/react";

interface HighlightType {
  text: string;
  metric: number;
}

export function Highlight({ text, metric }: HighlightType) {
  return (
    <Card
      className="flex flex-col gap-1"
      decoration="top"
      decorationColor={"indigo"}
    >
      <Text>{text}</Text>
      <Metric className="font-medium">{metric}</Metric>
    </Card>
  );
}
