import React from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";

const ExpenseList = ({
  expenses,
  filterCategory,
  deleteExpense,
  startEdit,
}) => {
  const filteredExpenses = expenses.filter(
    (expense) =>
      filterCategory === "" ||
      expense.category.toLowerCase().includes(filterCategory.toLowerCase())
  );

  return (
    <div className=" rounded-lg">
      <ul className="space-y-4">
        {filteredExpenses.map((expense, index) => (
          <li
            key={index}
            className="flex flex-wrap gap-2 justify-between items-center border text-sm p-2 px-4 rounded"
          >
            <div>
              <p className="font-semibold">{expense.description}</p>
              <p className="text-gray-500">
                {expense.category} | {expense.date}
              </p>
            </div>
            <div className="flex items-center">
              <span className=" font-semibold mr-4">
                ${expense.amount.toFixed(2)}
              </span>
              <button
                onClick={() => startEdit(index)}
                className="text-blue-500 hover:text-blue-700 mr-2"
              >
                <FiEdit />
              </button>
              <button
                onClick={() => deleteExpense(index)}
                className="text-red-500 hover:text-red-700"
              >
                <FiTrash2 />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
