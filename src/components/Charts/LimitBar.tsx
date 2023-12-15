import { Card, CategoryBar, Flex, Text } from "@tremor/react";

interface LimitBarType {
  text: string;
  metric: number;
}

export function LimitBar({ text, metric }: LimitBarType) {
  return (
    <Card className="max-w-sm mx-auto">
      <Flex>
        <Text>{text}</Text>
        <Text>{metric}</Text>
      </Flex>
      <CategoryBar
        values={[40, 30, 20, 10]}
        colors={["emerald", "yellow", "orange", "rose"]}
        markerValue={62}
        className="mt-3"
      />
    </Card>
  );
}
