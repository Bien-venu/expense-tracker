import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const ExpenseChart = ({ expenses }) => {
  const categoryData = expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
    return acc;
  }, {});

  const data = {
    labels: Object.keys(categoryData),
    datasets: [
      {
        data: Object.values(categoryData),
        backgroundColor: [
          "#4ade80",
          "#60a5fa",
          "#f87171",
          "#fbbf24",
          "#a78bfa",
        ],
      },
    ],
  };

  return (
    <div className=" flex flex-col p-6">
      <h3 className="text-xl font-semibold text-center mb-4">Expenses Breakdown</h3>
      <div className="flex w-64 sm:w-96 sm:h-96">
        <Doughnut data={data} />
      </div>
    </div>
  );
};

export default ExpenseChart;
