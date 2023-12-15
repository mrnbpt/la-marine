import { Card, Metric, Text } from "@tremor/react";

interface HighlightType {
  text: string;
  metric: number;
}

export function Highlight({ text, metric }: HighlightType) {
  return (
    <Card
      className="max-w-xs mx-auto"
      decoration="top"
      decorationColor={"indigo"}
    >
      <Text>{text}</Text>
      <Metric>{metric}</Metric>
    </Card>
  );
}
