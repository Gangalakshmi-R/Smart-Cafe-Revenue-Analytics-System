import os
from urllib import response

import google.generativeai as genai

from dotenv import load_dotenv

load_dotenv()

API_KEY = os.getenv("GEMINI_API_KEY")

genai.configure(
    api_key=API_KEY
    
)

model = genai.GenerativeModel(
    "gemini-flash-latest"
)

def generate_business_report(
    prediction,
    target,
    risk,
    achievement
):

    prompt = f"""
You are a senior coffee shop business consultant.

Coffee Shop Metrics:

Predicted Daily Revenue: ₹{prediction}
Target Daily Revenue: ₹{target}
Achievement: {achievement}%
Risk Level: {risk}

Provide:

1. Executive Summary
2. Coffee Shop Performance Analysis
3. Customer Traffic Analysis
4. Three Actionable Recommendations

Focus on:
- Customer traffic
- Average order value
- Marketing effectiveness
- Staffing optimization
- Operating hours

Keep response under 150 words.
"""

    response = model.generate_content(
        prompt
    )

    print(response.text)
    return response.text