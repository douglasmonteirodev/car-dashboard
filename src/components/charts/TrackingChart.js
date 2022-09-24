import React from "react";
import trakingData from "../../assets/dummy-data/trackingData";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
const TrackingChart = () => {
  return (
    <ResponsiveContainer width='100%'>
      <LineChart>
        <CartesianGrid strokeDasharray='0' stroke='#b7ffe913' />
        <XAxis dataKey='name' fill='#ddd' stroke='#ddd' />

        <Line
          type='monotone'
          dataKey='km'
          data={trakingData}
          stroke='#e1424e'
          strokeWidth={2}
          activeDot={{ r: 8 }}
        />

        <Tooltip wrapperClassName='tooltip__style' />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default TrackingChart;
