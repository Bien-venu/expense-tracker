import React, { useState, useEffect } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseSummary from "./components/ExpenseSummary";
import { getExpenses, saveExpenses } from "./utils/localStorage";

const App = () => {
  const [expenses, setExpenses] = useState(getExpenses());
  const [editingExpense, setEditingExpense] = useState(null);
  const [filterCategory, setFilterCategory] = useState("");

  useEffect(() => {
    saveExpenses(expenses);
  }, [expenses]);

  const uniqueCategories = Array.from(
    new Set(expenses.map((expense) => expense.category))
  );

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const deleteExpense = (index) => {
    const updatedExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(updatedExpenses);
  };

  const startEdit = (index) => {
    setEditingExpense({ ...expenses[index], index });
  };

  const editExpense = (updatedExpense) => {
    const updatedExpenses = expenses.map((expense, index) =>
      index === updatedExpense.index ? updatedExpense : expense
    );
    setExpenses(updatedExpenses);
    setEditingExpense(null);
  };

  const cancelEdit = () => {
    setEditingExpense(null);
  };

  return (
    <div className="lg:w-1/2 sm:w-11/12 w-full mx-auto p-6 flex flex-col gap-6">
      <h1 className="text-2xl font-semibold text-center">Expense Tracker</h1>
      <ExpenseForm
        addExpense={addExpense}
        editExpense={editExpense}
        editingExpense={editingExpense}
        cancelEdit={cancelEdit}
      />
      <ExpenseSummary expenses={expenses} />
      <div className="flex flex-col border border-gray-200 rounded gap-4 p-4 flex-1">
        <div className="flex flex-wrap gap-2 items-center justify-between">
          <h2 className="text-lg font-semibold">Expenses List</h2>
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="p-3 border rounded w-fit outline-none"
          >
            <option value="">All Categories</option>
            {uniqueCategories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <ExpenseList
          expenses={expenses}
          filterCategory={filterCategory}
          deleteExpense={deleteExpense}
          startEdit={startEdit}
        />
      </div>
    </div>
  );
};

export default App;
