# ☕ Smart Café Revenue Analytics System

An AI-powered full-stack web application that predicts coffee shop daily revenue using Machine Learning and interactive analytics dashboards.

This project combines:
- React + Vite frontend
- Flask backend API
- XGBoost Machine Learning model
- Business KPI analytics
- Interactive data visualization

---

# 🚀 Features

✅ AI-Based Revenue Prediction  
✅ Interactive Café Analytics Dashboard  
✅ Modern Coffee-Themed UI  
✅ Animated Input Cards  
✅ Revenue Comparison Charts  
✅ Revenue Target Analysis  
✅ KPI Business Metrics  
✅ AI Business Insights  
✅ Flask REST API  
✅ XGBoost Machine Learning Model  
✅ Responsive Dashboard Design  

---

# 🧠 Machine Learning Model

## Model Used
- XGBoost Regressor

## Target Variable
- Daily_Revenue

## Input Features
- Number_of_Customers_Per_Day
- Average_Order_Value
- Operating_Hours_Per_Day
- Number_of_Employees
- Marketing_Spend_Per_Day
- Location_Foot_Traffic

---

# 📊 Dashboard Analytics

The analytics dashboard includes:

- Predicted Revenue
- Revenue Target Comparison
- Revenue Achievement Percentage
- KPI Cards
- Revenue Charts
- Business Insights
- Growth Analysis
- AI Confidence Metrics

---

# 📊 Dataset Source

The dataset is dynamically loaded from a Google Sheets link using Pandas.

```python
import pandas as pd

sheet_id = "YOUR_SHEET_ID"

url = f"https://docs.google.com/spreadsheets/d/{sheet_id}/export?format=csv"

df = pd.read_csv(url)
```

This allows:
- Live cloud-based dataset access
- Easier dataset updates
- No local CSV dependency

---

# 🛠 Tech Stack

## Frontend
- React
- Vite
- Axios
- Framer Motion
- Recharts

## Backend
- Flask
- Flask-CORS
- Pandas
- NumPy
- Joblib

## Machine Learning
- XGBoost
- Scikit-learn

---

# 📁 Project Structure

```bash
frontend/
│
├── src/
│   ├── components/
│   │   └── InputCards.jsx
│   │
│   ├── pages/
│   │   ├── InputPage.jsx
│   │   └── ResultPage.jsx
│   │
│   ├── index.css
│   ├── App.jsx
│   └── main.jsx
│
backend/
│
├── app.py
├── modelling.ipynb
└── xgboost_model.pkl
```

---

# ⚙️ Installation

## 1️⃣ Clone Repository

```bash
git clone <your-github-link>
```

---

# 2️⃣ Frontend Setup

```bash
cd frontend

npm install
```

Install required frontend packages:

```bash
npm install axios react-router-dom framer-motion recharts
```

Run frontend:

```bash
npm run dev
```

---

# 3️⃣ Backend Setup

```bash
cd backend
```

Install backend dependencies:

```bash
pip install flask flask-cors pandas numpy scikit-learn xgboost joblib
```

Run Flask backend:

```bash
python app.py
```

---

# 📈 Model Training

Inside `modelling.ipynb`:

```python
from xgboost import XGBRegressor

xgb_model = XGBRegressor(

    n_estimators=100,
    learning_rate=0.1,
    max_depth=5,
    random_state=42
)

xgb_model.fit(X_train, Y_train)
```

Save model:

```python
import joblib as jb

jb.dump(
    xgb_model,
    'xgboost_model.pkl'
)
```

---

# 📌 Application Workflow

```text
User Inputs
      ↓
React Frontend
      ↓
Flask API
      ↓
XGBoost Model
      ↓
Revenue Prediction
      ↓
Analytics Dashboard
```

---

# 🎯 Future Enhancements

- Live Business Data Integration
- Google Sheets Real-Time Updates
- AI Recommendation System
- Revenue Forecasting
- Authentication System
- Cloud Deployment
- Historical Trend Analytics
- Smart Business Insights

---

# 🌟 Project Highlights

This project demonstrates:

- Full-stack web development
- Machine learning deployment
- Interactive analytics dashboards
- Business intelligence concepts
- Real-world forecasting workflow
- API integration
- Modern UI/UX design

---

# 👨‍💻 Author

Gangalakshmi Raja

Developed as a Full Stack Machine Learning Analytics Project using:
- React
- Flask
- XGBoost
- Recharts

---

# 📌 Output

The system predicts:

✅ Daily Revenue  
✅ Revenue Performance  
✅ Revenue Target Achievement  
✅ Business Growth Insights  
✅ KPI Analytics  

through an AI-powered analytics dashboard.