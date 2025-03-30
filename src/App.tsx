import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
Chart.register(ArcElement, Tooltip, Legend);

const App: React.FC = () => {
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
    <div className="bg-white rounded p-4 font-bold">
      <h2 className="text-lg font-semibold mb-4">Compliance Status</h2>
      <Pie data={data} />
    </div>
  );
};

export default App;
