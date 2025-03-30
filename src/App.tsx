import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import "./styles/index.css";

Chart.register(ArcElement, Tooltip, Legend);

const App = () => {
  const data = {
    labels: ["Completed", "Pending", "Overdue"],
    datasets: [
      {
        data: [60, 30, 10],
        backgroundColor: ["#36A2EB", "#FFCE56", "#FF6384"],
        hoverBackgroundColor: ["#36A2EB", "#FFCE56", "#FF6384"],
      },
    ],
  };

  return (
    <div>
      <h2 className="font-bold text-[42px]">Compliance Status</h2>
      <Pie data={data} />
    </div>
  );
};

export default App;
