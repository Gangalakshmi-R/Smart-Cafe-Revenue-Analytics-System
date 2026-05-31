import React from "react";

function HistoricalTable({ data }) {

  return (

    <div className="chart-card">

      <h2>

        Live Business Records

      </h2>

      <table className="history-table">

        <thead>

          <tr>

            <th>Revenue</th>

            <th>Customers</th>

            <th>Order Value</th>

            <th>Employees</th>

          </tr>

        </thead>

        <tbody>

          {

            data.map((item, index) => (

              <tr key={index}>

                <td>

                  ₹ {Number(item.Daily_Revenue).toFixed(2)}

                </td>

                <td>

                  {item.Number_of_Customers_Per_Day}

                </td>

                <td>

                  ₹ {Number(item.Average_Order_Value).toFixed(2)}

                </td>

                <td>

                  {item.Number_of_Employees}

                </td>

              </tr>

            ))

          }

        </tbody>

      </table>

    </div>

  );

}

export default HistoricalTable;