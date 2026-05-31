import React, {
  useState,
  useEffect
} from "react";

import axios from "axios";

import InputCards from "../components/InputCards";

import ForecastChart from "../components/ForecastChart";

import FeatureImportance from "../components/FeatureImportance";

import HistoricalTable from "../components/HistoricalTable";

import generatePDF from "../utils/generatePDF";

function Dashboard() {

  const [formData, setFormData] = useState({

    Number_of_Customers_Per_Day: "",

    Average_Order_Value: "",

    Operating_Hours_Per_Day: "",

    Number_of_Employees: "",

    Marketing_Spend_Per_Day: "",

    Location_Foot_Traffic: "",

    Target_Revenue: ""

  });

  const [ historicalData, setHistoricalData] = useState([]);

  const [result, setResult] = useState(null);

  const [aiReport,setAiReport] = useState("");

  const [importance, setImportance] = useState([]);

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value

    });

  };

 const handleAIReport = async () => {

  try {

    console.log("Button clicked");

    const response = await axios.post(

      "/generate-report",

      {

        prediction: result.prediction,

        target: result.target,

        risk: result.risk,

        achievement: result.achievement

      }

    );

    console.log(response.data);
    console.log(result);

    setAiReport(
      response.data.report
    );

  }

  catch(err){

    console.log(err);

  }

};

  useEffect(() => {

    axios

      .get(
        "/feature-importance"
      )

      .then((res) => {

        setImportance(res.data);

      })

      .catch((err) => {

        console.log(err);

      });

  }, []);

  const handlePredict = async () => {

    try {

      const response =
        await axios.post(

          "/predict",

          formData

        );
console.log(formData);
      setResult(response.data);

    }

    catch (err) {

      console.log(err);

    }

    axios

.get(

 "/historical-data"

)

.then((res)=>{

 setHistoricalData(

  res.data

 );

})

.catch((err)=>{

 console.log(err);

});

  };

  return (

    <div className="dashboard-container">

      {/* LEFT PANEL */}

      <div className="left-panel">

        <h1 className="title">

          ☕  Smart Cafe Revenue Intelligence
        </h1>

        <div className="grid-container">

          <InputCards
            label="Daily Customers"
            name="Number_of_Customers_Per_Day"
            placeholder="Customers"
            handleChange={handleChange}
          />

          <InputCards
            label="Avg Order Value"
            name="Average_Order_Value"
            placeholder="Order Value"
            handleChange={handleChange}
          />

          <InputCards
            label="Operating Hours"
            name="Operating_Hours_Per_Day"
            placeholder="Hours"
            handleChange={handleChange}
          />

          <InputCards
            label="Employees"
            name="Number_of_Employees"
            placeholder="Employees"
            handleChange={handleChange}
          />

          <InputCards
            label="Marketing Spend"
            name="Marketing_Spend_Per_Day"
            placeholder="Marketing"
            handleChange={handleChange}
          />

          <InputCards
            label="Foot Traffic"
            name="Location_Foot_Traffic"
            placeholder="Traffic"
            handleChange={handleChange}
          />

        </div>

        <div style={{ marginTop: "10px" }}>

          <InputCards

            label="Target Revenue"

            name="Target_Revenue"

            placeholder="Target Revenue"

            handleChange={handleChange}

          />

        </div>

        <button

          className="predict-btn"

          onClick={handlePredict}

        >

          Generate Intelligence

        </button>

      </div>

      {/* RIGHT PANEL */}

      <div className="right-panel">

        {result && (

          <>

            {/* KPI CARDS */}

            <div className="kpi-grid">

              <div className="kpi-card">

                <h3>Revenue</h3>

                <p>

                  ₹ {Math.round(result.prediction)}

                </p>

              </div>

              <div className="kpi-card">

                <h3>Target</h3>

                <p>

                  ₹ {Math.round(result.target)}

                </p>

              </div>

              <div className="kpi-card">

                <h3>Achievement</h3>

                <p>

                  {result.achievement}%

                </p>

              </div>

              <div className="kpi-card">

                <h3>Risk Level</h3>

                <p>

                  {result.risk}

                </p>

              </div>

              <div className="kpi-card">

                <h3>Status</h3>

                <p>

                  {result.status}

                </p>

              </div>

              <div className="kpi-card">

                <h3>Revenue Gap</h3>

                <p>

                  ₹ {Math.round(result.revenue_gap)}

                </p>

              </div>

            </div>

            {/* SUMMARY */}

            <div className="summary-card">

              <h2>

                Revenue Intelligence Summary

              </h2>

              <div className="summary-grid">

                <div>

                  Predicted Revenue :   

                  <strong>

                    ₹ {Math.round(result.prediction)}

                  </strong>

                </div>

                <div>

                  Target Revenue :

                  <strong>

                    ₹ {Math.round(result.target)}

                  </strong>

                </div>

                <div>

                  Achievement :

                  <strong>

                    {result.achievement}%

                  </strong>

                </div>

                <div>

                  Risk :

                  <strong>

                    {result.risk}

                  </strong>

                </div>

              </div>

            </div>

            {/* EXECUTIVE DECISION */}

            <div className="summary-card">

              <h2>

                Executive Decision

              </h2>

              <p>

                {
                  result.status === "Target Achieved"

                    ? "Revenue target exceeded. Current strategy is performing effectively."

                    : result.status === "Near Target"

                      ? "Revenue is close to target. Minor improvements may achieve business goals."

                      : "Revenue is below target. Review customer traffic and marketing strategy."
                }

              </p>

            </div>

            {/* PROGRESS */}

            <div className="performance-card">

              <h2>

                Target Achievement

              </h2>

              <div className="progress-bar">

                <div

                  className="progress-fill"

                  style={{

                    width: `${Math.min(

                      result.achievement,

                      100

                    )}%`

                  }}

                />

              </div>

              <p>

                {result.achievement}% Completed

              </p>

            </div>

            {/* FORECAST */}

            <ForecastChart

              forecast={

                result.forecast

              }

            />

            {/* FEATURE IMPORTANCE */}

            <FeatureImportance

              importance={

                importance

              }

            />

            {/* AI INSIGHTS */}

            <div className="insight-card">

              <h2>

                AI Business Insights

              </h2>

              <ul>

                {

                  result.insights?.map(

                    (item, index) => (

                      <li key={index}>

                        {item}

                      </li>

                    )

                  )

                }

              </ul>

            </div>

{/* LIVE BUSINESS RECORDS */}

            <HistoricalTable

 data={historicalData}

/>
<button

 className="pdf-btn"

 onClick={()=>

  generatePDF(result)

 }

>

 📄 Download Business Report

</button>

<button
 className="pdf-btn"
 onClick={handleAIReport}
>
 🤖 Generate AI Report
</button>

{
 aiReport &&

 <div className="insight-card">

  <h2>

   Gemini AI Business Analysis

  </h2>

  <pre>

   {aiReport}

  </pre>

 </div>
}


          </>

        )}

      </div>
      

    </div>

  );

}

export default Dashboard;