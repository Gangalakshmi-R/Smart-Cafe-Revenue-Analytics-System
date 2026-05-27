from flask import Flask, request, jsonify

from flask_cors import CORS

import pandas as pd

import numpy as np

import joblib


app = Flask(__name__)

CORS(app)


# =========================
# LOAD GOOGLE SHEET DATA
# =========================

sheet_id = "1i5iFNYoLfwOCQ5oxVaZDFZt9Xjlb6-LO6oOmcLmmRdg"

url = f"https://docs.google.com/spreadsheets/d/{sheet_id}/export?format=csv"

df = pd.read_csv(url)

print(df.head())


# =========================
# LOAD TRAINED MODEL
# =========================

model = joblib.load('xgboost_model.pkl')


# =========================
# HOME ROUTE
# =========================

@app.route('/')
def home():

    return "Coffee Shop Revenue Prediction API Running"


# =========================
# PREDICTION ROUTE
# =========================

@app.route('/predict', methods=['POST'])
def predict():

    try:

        data = request.json

        features = np.array([[

            float(data['Number_of_Customers_Per_Day']),

            float(data['Average_Order_Value']),

            float(data['Operating_Hours_Per_Day']),

            float(data['Number_of_Employees']),

            float(data['Marketing_Spend_Per_Day']),

            float(data['Location_Foot_Traffic'])

        ]])

        prediction = model.predict(features)[0]

        return jsonify({

            'prediction': round(float(prediction), 2)

        })

    except Exception as e:

        return jsonify({

            'error': str(e)

        })


# =========================
# RUN FLASK APP
# =========================

if __name__ == '__main__':

    app.run(debug=True)