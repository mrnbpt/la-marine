import { Card, CategoryBar, Flex, Text } from "@tremor/react";

interface LimitBarType {
  text: string;
  metric: number;
}

export function LimitBar({ text, metric }: LimitBarType) {
  return (
    <Card>
      <Flex>
        <Text>{text}</Text>
        <Text>{metric}</Text>
      </Flex>
      <CategoryBar
        values={[5, 10, 12, 14]}
        colors={["emerald", "yellow", "orange", "rose"]}
        markerValue={4}
        className="mt-3"
      />
    </Card>
  );
}
