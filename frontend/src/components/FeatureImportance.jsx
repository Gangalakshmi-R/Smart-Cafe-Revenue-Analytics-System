import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
}
from "recharts";

function FeatureImportance({

  importance

}) {

  return (

    <div className="chart-card">

      <h2>Feature Importance</h2>

      <ResponsiveContainer
        width="100%"
        height={250}
      >

        <BarChart
          data={importance}
        >

          <XAxis
            dataKey="feature"
             stroke="#FFE0B2"
  tick={{ fill: "#FFE0B2" }}
          />

          <YAxis
           stroke="#FFE0B2"
  tick={{ fill: "#FFE0B2" }} />

          <Tooltip />

          <Bar
            dataKey="importance"
            fill="#D4A373"
          />

        </BarChart>

      </ResponsiveContainer>

    </div>

  );

}

export default FeatureImportance;