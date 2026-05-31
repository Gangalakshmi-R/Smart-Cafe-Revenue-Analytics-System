import jsPDF from "jspdf";

const generatePDF = (result) => {

  const doc = new jsPDF();

  doc.setFontSize(20);

  doc.text(
    "Smart Cafe Revenue Intelligence Report",
    20,
    20
  );

  doc.setFontSize(12);

  doc.text(
    `Predicted Revenue: ₹${Math.round(result.prediction)}`,
    20,
    50
  );

  doc.text(
    `Target Revenue: ₹${Math.round(result.target)}`,
    20,
    65
  );

  doc.text(
    `Achievement: ${result.achievement}%`,
    20,
    80
  );

  doc.text(
    `Risk Level: ${result.risk}`,
    20,
    95
  );

  doc.text(
    `Status: ${result.status}`,
    20,
    110
  );

  doc.text(
    `Revenue Gap: ₹${Math.round(result.revenue_gap)}`,
    20,
    125
  );

  doc.text(
    "AI Business Insights:",
    20,
    150
  );

  let y = 165;

  result.insights?.forEach((item) => {

    doc.text(
      `• ${item}`,
      25,
      y
    );

    y += 15;

  });

  doc.save(
    "Smart_Cafe_Report.pdf"
  );

};

export default generatePDF;