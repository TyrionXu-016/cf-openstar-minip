"use client";

import ReactECharts from "echarts-for-react";

export function StatsChart() {
  const option = {
    tooltip: { trigger: "axis" },
    grid: { left: 10, right: 10, top: 30, bottom: 10, containLabel: true },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      axisLine: { lineStyle: { color: "#6f8ec9" } },
      axisLabel: { color: "#b7c6e5" },
    },
    yAxis: {
      type: "value",
      axisLine: { lineStyle: { color: "#6f8ec9" } },
      splitLine: { lineStyle: { color: "rgba(146,172,226,0.18)" } },
      axisLabel: { color: "#b7c6e5" },
    },
    series: [
      {
        name: "活跃管理操作",
        type: "line",
        smooth: true,
        data: [32, 41, 39, 58, 49, 71, 65],
        areaStyle: {
          color: "rgba(108,165,255,0.22)",
        },
        lineStyle: {
          width: 3,
          color: "#6ca5ff",
        },
        itemStyle: { color: "#8bb9ff" },
      },
    ],
  };

  return <ReactECharts style={{ height: 260 }} option={option} />;
}
