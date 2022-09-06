import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import "./chart.scss";

const Chart = ({ aspect, title }) => {
  const screenSize = window.matchMedia("(max-width: 790px)");
  const data = [
    { name: "January", Total: 1200 },
    { name: "February", Total: 2100 },
    { name: "March", Total: 800 },
    { name: "April", Total: 1600 },
    { name: "May", Total: 900 },
    { name: "June", Total: 1700 },
  ];

  return (
    <div className="chart">
      <div className="title">{title}</div>
      <ResponsiveContainer
        width="100%"
        aspect={aspect ? aspect : undefined}
        height={!aspect ? (screenSize.matches ? 300 : 400) : undefined}
      >
        <AreaChart
          width={730}
          height={250}
          data={data}
          className="areaChart"
          margin={
            screenSize.matches
              ? { top: 15, right: 15, left: 30, bottom: 0 }
              : { top: 15, right: 30, left: 0, bottom: 0 }
          }
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" fontSize="12px" />
          {!screenSize.matches && <YAxis dataKey="Total" />}
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
