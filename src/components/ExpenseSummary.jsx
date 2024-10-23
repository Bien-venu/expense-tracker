import React from "react";
import ExpenseChart from "./ExpenseChart";

const ExpenseSummary = ({ expenses }) => {
  const totalAmount = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  const formattedAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(totalAmount);

  return (
    <div className=" flex flex-col justify-center items-center gap-4 h-fit rounded border border-gray-200 mb-6">
      <ExpenseChart expenses={expenses} />
      <h2 className="text-base flex items-center flex-wrap gap-2 border-t border-gray-200 px-6 p-3 text-center w-full h font-normal">
        <span>Total Expenses:</span>
        <span className=" font-semibold">{formattedAmount}</span>
      </h2>
    </div>
  );
};

export default ExpenseSummary;
