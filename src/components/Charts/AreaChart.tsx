import { AreaChart, Card, Title } from "@tremor/react";

const chartdata = [
  {
    date: "Jan 22",
    "Sea Temperature": 2890,
    "Air Temperature": 2338,
  },
  {
    date: "Feb 22",
    "Sea Temperature": 2756,
    "Air Temperature": 2103,
  },
  {
    date: "Mar 22",
    "Sea Temperature": 3322,
    "Air Temperature": 2194,
  },
  {
    date: "Apr 22",
    "Sea Temperature": 3470,
    "Air Temperature": 2108,
  },
  {
    date: "May 22",
    "Sea Temperature": 3475,
    "Air Temperature": 1812,
  },
  {
    date: "Jun 22",
    "Sea Temperature": 3129,
    "Air Temperature": 1726,
  },
];

const valueFormatter = function (number: number) {
  return "$ " + new Intl.NumberFormat("us").format(number).toString();
};

export function NewAreaChart() {
  return (
    <Card>
      <Title>Newsletter revenue over time (USD)</Title>
      <AreaChart
        className="h-72 mt-4"
        data={chartdata}
        index="date"
        categories={["Sea Temperature", "Air Temperature"]}
        colors={["indigo", "cyan"]}
      />
    </Card>
  );
}
