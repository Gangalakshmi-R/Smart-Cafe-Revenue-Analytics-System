import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
}
from "recharts";

function ForecastChart({ forecast }) {

  return (

    <div className="chart-card">

      <h2>7-Day Revenue Forecast</h2>

      <ResponsiveContainer
        width="100%"
        height={250}
      >

        <LineChart data={forecast}>

          <XAxis dataKey="day" 
          stroke="#FFE0B2"
          tick={{ fill: "#FFE0B2" }}/>

          <YAxis
           stroke="#FFE0B2"
          tick={{ fill: "#FFE0B2" }}
           />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#D4A373"
            strokeWidth={4}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>

  );

}

export default ForecastChart;