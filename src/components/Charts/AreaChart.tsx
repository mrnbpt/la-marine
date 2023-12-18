import { AreaChart, Card, Title } from "@tremor/react";

interface FetchedDataType {
  date: string;
  "Sea Temperature": number;
  "Air Temperature": number;
}

interface NewAreaChartProps {
  fetchedData: FetchedDataType[];
}

export const NewAreaChart: React.FC<NewAreaChartProps> = ({ fetchedData }) => {
  return (
    <Card className="flex-1">
      <Title>Sea Temperature and Air Temperature</Title>
      <AreaChart
        showGridLines={true}
        className="mt-4"
        data={fetchedData}
        index="date"
        categories={["Sea Temperature", "Air Temperature"]}
        colors={["#2B73FF", "#A1E3FF"]}
      />
    </Card>
  );
};
