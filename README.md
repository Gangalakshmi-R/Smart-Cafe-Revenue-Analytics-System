# ☕ Smart Cafe Revenue Intelligence Platform

An AI-powered Business Intelligence platform that predicts coffee shop revenue using Machine Learning, analyzes business performance, generates executive insights using Gemini AI, and provides interactive analytics dashboards.

---

## 🚀 Live Demo

🔗 https://smart-cafe-revenue-analytics-system.onrender.com

---

## 📌 Project Overview

The Smart Cafe Revenue Intelligence Platform helps coffee shop owners forecast daily revenue and make data-driven business decisions.

The system combines:

* Machine Learning (XGBoost)
* Business Analytics
* Google Sheets Live Data Integration
* Gemini AI Recommendations
* Interactive Dashboard
* PDF Report Generation

Users can enter business metrics such as customer count, average order value, operating hours, marketing spend, employee count, and foot traffic to receive revenue predictions along with actionable business insights.

---

## ✨ Features

### 📈 Revenue Prediction

* Predicts daily revenue using a trained XGBoost model.
* Provides accurate business forecasting based on operational metrics.
* Generates real-time predictions from user inputs.

### 📊 Business Intelligence Dashboard

* Revenue KPI Cards
* Revenue Achievement Analysis
* Revenue Gap Calculation
* Business Risk Assessment
* Interactive Visualizations

### 🔮 Revenue Forecasting

* Generates a 7-day revenue forecast.
* Helps businesses plan future operations.
* Displays projected growth trends.

### 📉 Feature Importance Analysis

* Visualizes the impact of each business metric on revenue.
* Powered by XGBoost Feature Importance.
* Helps identify the most influential revenue drivers.

### 📋 Historical Business Records

* Fetches live business data from Google Sheets.
* Displays recent operational records.
* Enables comparison with predicted results.

### 🤖 Gemini AI Business Consultant

* Generates AI-powered executive reports.
* Provides business recommendations.
* Suggests revenue improvement strategies.
* Offers actionable decision-making insights.

### 📄 PDF Report Generation

* Downloads professional business reports.
* Includes predictions, KPIs, forecasts, and AI insights.
* Supports business documentation and reporting.

### ☁️ Cloud Deployment

* Fully deployed on Render.
* Accessible from anywhere through a web browser.

---

## 🏗️ System Architecture

```text
User Input
     │
     ▼
React Dashboard
     │
     ▼
Flask API
     │
     ▼
XGBoost Model
     │
     ▼
Revenue Prediction
     │
     ▼
Business Analytics Engine
     │
     ▼
Gemini AI Recommendations
     │
     ▼
PDF Report Generation
```

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* Axios
* Recharts
* Framer Motion

### Backend

* Flask
* Flask-CORS

### Machine Learning

* XGBoost
* Pandas
* NumPy
* Joblib

### AI Integration

* Google Gemini API

### Data Source

* Google Sheets API

### Deployment

* Render

---

## 📊 Input Parameters

The prediction model uses the following business metrics:

| Feature                     | Description                |
| --------------------------- | -------------------------- |
| Number of Customers Per Day | Daily customer count       |
| Average Order Value         | Average customer spending  |
| Operating Hours Per Day     | Daily operating duration   |
| Number of Employees         | Staff count                |
| Marketing Spend Per Day     | Daily marketing investment |
| Location Foot Traffic       | Estimated customer traffic |
| Target Revenue              | Business revenue goal      |

---

## 📈 Output Metrics

The platform generates:

* Predicted Revenue
* Revenue Achievement Percentage
* Revenue Gap Analysis
* Business Risk Level
* Revenue Forecast Trend
* Feature Importance Ranking
* AI Business Recommendations
* Downloadable PDF Report

---

## 🤖 AI Report Example

### Executive Summary

The coffee shop is projected to achieve 81% of its target revenue. Customer traffic and average order value are the strongest contributors to business performance.

### Revenue Analysis

Revenue performance is stable, but additional customer acquisition strategies could help bridge the gap between current performance and target revenue.

### Recommendations

* Introduce combo offers to increase average order value.
* Improve marketing campaigns during peak hours.
* Optimize staffing based on customer traffic patterns.

---

## 📂 Project Structure

```text
ML_CoffeeShop
│
├── frontend
│   ├── src
│   ├── components
│   ├── pages
│   ├── assets
│   └── package.json
│
└── model
    ├── app.py
    ├── gemini_service.py
    ├── xgboost_model.pkl
    ├── requirements.txt
    ├── static
    └── .env
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/Gangalakshmi-R/Smart-Cafe-Revenue-Analytics-System.git
```

### Backend Setup

```bash
cd model

pip install -r requirements.txt

python app.py
```

### Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

---

## 🌐 Deployment

The application is deployed on Render and can be accessed through:

https://smart-cafe-revenue-analytics-system.onrender.com

---

## 🔥 Key Highlights

✅ End-to-End Full Stack Application

✅ Machine Learning Revenue Prediction

✅ XGBoost-Based Forecasting

✅ Live Google Sheets Integration

✅ Gemini AI Business Recommendations

✅ Interactive Analytics Dashboard

✅ Historical Data Analysis

✅ PDF Report Generation

✅ Cloud Deploymen

---

## 👩‍💻 Author

**Gangalakshmi Raja**
---

## ⭐ Future Enhancements

* Real-Time Data Streaming
* Customer Segmentation Analysis
* Demand Forecasting
* Automated Email Reports
* Multi-Store Analytics
* LLM-Powered Business Chat Assistant
* Mobile Application Version

---

### If you find this project useful, consider giving it a ⭐ on GitHub.
