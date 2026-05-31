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
You are a senior business intelligence consultant for coffee shops.

Business Metrics:

Predicted Revenue: ₹{prediction}
Target Revenue: ₹{target}
Achievement: {achievement}%
Risk Level: {risk}

Generate a professional business report.

Requirements:
- Do NOT use markdown.
- Do NOT use ** symbols.
- Do NOT use bullet symbols such as *, -, or #.
- Use plain text only.
- Keep the report concise and professional.
- Maximum 150 words.

Format exactly as:

Executive Summary:
Write 2-3 sentences summarizing the business performance.

Performance Analysis:
Analyze revenue achievement, risk level, and operational performance.

Recommendations:
1. Recommendation one
2. Recommendation two
3. Recommendation three

Conclusion:
Provide a short concluding statement.
"""

    response = model.generate_content(
        prompt
    )

    print(response.text)
    return response.text