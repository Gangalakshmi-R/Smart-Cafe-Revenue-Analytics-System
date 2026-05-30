from flask import Flask, request, jsonify
from flask_cors import CORS

import pandas as pd
import numpy as np
import joblib

app = Flask(__name__)
CORS(app)

# =====================================
# LOAD GOOGLE SHEET DATA
# =====================================

sheet_id = "1i5iFNYoLfwOCQ5oxVaZDFZt9Xjlb6-LO6oOmcLmmRdg"

url = f"https://docs.google.com/spreadsheets/d/{sheet_id}/export?format=csv"

df = pd.read_csv(url)

print("Google Sheet Loaded Successfully")

# =====================================
# LOAD MODEL
# =====================================

model = joblib.load("xgboost_model.pkl")

# =====================================
# FEATURE NAMES
# =====================================

feature_names = [
    "Customers",
    "Order Value",
    "Operating Hours",
    "Employees",
    "Marketing Spend",
    "Foot Traffic"
]

# =====================================
# HOME
# =====================================

@app.route("/")
def home():

    return jsonify({
        "message": "Smart Cafe Revenue Intelligence API Running"
    })


# =====================================
# GET HISTORICAL DATA
# =====================================

@app.route("/historical-data")
def historical_data():

    latest_data = df.tail(20)

    return jsonify(
        latest_data.to_dict(
            orient="records"
        )
    )


# =====================================
# FEATURE IMPORTANCE
# =====================================

@app.route("/feature-importance")
def feature_importance():

    try:

        importances = model.feature_importances_

        result = []

        for feature, score in zip(
            feature_names,
            importances
        ):

            result.append({

                "feature": feature,

                "importance": round(
                    float(score) * 100,
                    2
                )

            })

        result = sorted(
            result,
            key=lambda x: x["importance"],
            reverse=True
        )

        return jsonify(result)

    except Exception as e:

        return jsonify({
            "error": str(e)
        })


# =====================================
# PREDICTION
# =====================================

@app.route("/predict", methods=["POST"])
def predict():

    try:

        data = request.json

        customers = float(
            data["Number_of_Customers_Per_Day"]
        )

        order_value = float(
            data["Average_Order_Value"]
        )

        hours = float(
            data["Operating_Hours_Per_Day"]
        )

        employees = float(
            data["Number_of_Employees"]
        )

        marketing = float(
            data["Marketing_Spend_Per_Day"]
        )

        traffic = float(
            data["Location_Foot_Traffic"]
        )

        target = float(
            data["Target_Revenue"]
        )

        features = np.array([[

            customers,
            order_value,
            hours,
            employees,
            marketing,
            traffic

        ]])

        prediction = float(
            model.predict(features)[0]
        )

        # =========================
        # FORECAST
        # =========================

        forecast = []

        current = prediction

        for day in range(1, 8):

            current = current * 1.05

            forecast.append({

                "day": f"Day {day}",

                "revenue": round(
                    current,
                    2
                )

            })

        # =========================
        # KPI METRICS
        # =========================

        achievement = (
            prediction / target
        ) * 100

        revenue_gap = (
            target - prediction
        )

        if prediction >= target:

            status = "Target Achieved"

            risk = "Low"

        elif achievement >= 75:

            status = "Near Target"

            risk = "Medium"

        else:

            status = "Below Target"

            risk = "High"

        # =========================
        # BUSINESS INSIGHTS
        # =========================

        insights = [

            f"Expected revenue is ₹{round(prediction,2)}.",

            f"Target achievement is {round(achievement,2)}%.",

            "Customer traffic significantly impacts revenue performance.",

            "Marketing spend and average order value can improve revenue growth.",

            f"Business risk level is {risk}."

        ]

        return jsonify({

            "prediction":
            round(prediction, 2),

            "target":
            target,

            "achievement":
            round(achievement, 2),

            "revenue_gap":
            round(revenue_gap, 2),

            "status":
            status,

            "risk":
            risk,

            "forecast":
            forecast,

            "insights":
            insights

        })

    except Exception as e:

        return jsonify({
            "error": str(e)
        })


# =====================================
# DASHBOARD ANALYTICS
# =====================================

@app.route("/analytics")
def analytics():

    try:

        total_records = len(df)

        avg_revenue = round(
            df["Revenue"].mean(),
            2
        )

        max_revenue = round(
            df["Revenue"].max(),
            2
        )

        min_revenue = round(
            df["Revenue"].min(),
            2
        )

        return jsonify({

            "total_records":
            total_records,

            "average_revenue":
            avg_revenue,

            "max_revenue":
            max_revenue,

            "min_revenue":
            min_revenue

        })

    except Exception as e:

        return jsonify({
            "error": str(e)
        })


# =====================================
# RUN
# =====================================

if __name__ == "__main__":

    app.run(
        debug=True,
        host="0.0.0.0",
        port=5000
    )