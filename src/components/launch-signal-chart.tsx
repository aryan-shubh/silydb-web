"use client";

import * as React from "react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

const chartData = [
  { date: "2026-05-20", stratchain: 22, chartscale: 16 },
  { date: "2026-05-21", stratchain: 28, chartscale: 19 },
  { date: "2026-05-22", stratchain: 24, chartscale: 18 },
  { date: "2026-05-23", stratchain: 39, chartscale: 27 },
  { date: "2026-05-24", stratchain: 43, chartscale: 31 },
  { date: "2026-05-25", stratchain: 38, chartscale: 29 },
  { date: "2026-05-26", stratchain: 52, chartscale: 35 },
  { date: "2026-05-27", stratchain: 61, chartscale: 44 },
  { date: "2026-05-28", stratchain: 57, chartscale: 41 },
  { date: "2026-05-29", stratchain: 72, chartscale: 56 },
  { date: "2026-05-30", stratchain: 68, chartscale: 52 },
  { date: "2026-05-31", stratchain: 81, chartscale: 63 },
  { date: "2026-06-01", stratchain: 78, chartscale: 61 },
  { date: "2026-06-02", stratchain: 88, chartscale: 69 },
];

const chartConfig = {
  signal: {
    label: "Signal",
  },
  stratchain: {
    label: "StratChain",
    color: "var(--chart-1)",
  },
  chartscale: {
    label: "ChartScale",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

const chartOptions = ["stratchain", "chartscale"] as const;

export function LaunchSignalChart() {
  const [activeChart, setActiveChart] =
    React.useState<(typeof chartOptions)[number]>("stratchain");

  const total = React.useMemo(
    () => ({
      stratchain: chartData.reduce((sum, item) => sum + item.stratchain, 0),
      chartscale: chartData.reduce((sum, item) => sum + item.chartscale, 0),
    }),
    [],
  );

  return (
    <div>
      <div className="grid grid-cols-2 border-b border-white/10">
        {chartOptions.map((key) => (
          <button
            type="button"
            key={key}
            data-active={activeChart === key}
            className="flex h-16 min-w-0 flex-col justify-center border-r border-white/10 px-4 text-left last:border-r-0 hover:bg-white/5 data-[active=true]:bg-white/10"
            onClick={() => setActiveChart(key)}
          >
            <span className="truncate text-xs text-white/50">
              {chartConfig[key].label}
            </span>
            <span className="mt-1 text-xl leading-none font-semibold text-white">
              {total[key].toLocaleString()}
            </span>
          </button>
        ))}
      </div>
      <div className="pt-5">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-48 w-full text-white/70"
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{ left: 8, right: 8, top: 4, bottom: 0 }}
          >
            <CartesianGrid vertical={false} stroke="rgba(255,255,255,0.12)" />
            <YAxis hide domain={[0, 100]} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={28}
              tickFormatter={(value: string) =>
                new Date(value).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }
            />
            <ChartTooltip
              cursor={{ fill: "rgba(255,255,255,0.08)" }}
              content={
                <ChartTooltipContent
                  className="w-36"
                  nameKey="signal"
                  labelFormatter={(value) =>
                    new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })
                  }
                />
              }
            />
            <Bar
              dataKey={activeChart}
              fill={`var(--color-${activeChart})`}
              radius={[3, 3, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </div>
    </div>
  );
}
