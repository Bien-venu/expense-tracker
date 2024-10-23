import React, { useState, useEffect } from "react";

const ExpenseForm = ({
  addExpense,
  editExpense,
  editingExpense,
  cancelEdit,
}) => {
  const [form, setForm] = useState({
    amount: "",
    category: "",
    date: "",
    description: "",
  });

  useEffect(() => {
    if (editingExpense) {
      setForm(editingExpense);
    }
  }, [editingExpense]);

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.amount || !form.category || !form.date || !form.description) {
      alert("All fields are required");
      return;
    }

    if (editingExpense) {
      editExpense({ ...form, amount: parseFloat(form.amount) });
    } else {
      addExpense({ ...form, amount: parseFloat(form.amount) });
    }

    setForm({ amount: "", category: "", date: "", description: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 border flex-1 h-fit border-gray-200 rounded flex gap-4 flex-col"
    >
      <h2 className="text-xl font-semibold">
        {editingExpense ? "Edit Expense" : "Add Expense"}
      </h2>
      <div className="grid grid-cols-1 gap-4">
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={form.amount}
          onChange={handleInputChange}
          className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Category (e.g., Food, Transport)"
          value={form.category}
          onChange={handleInputChange}
          className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleInputChange}
          className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleInputChange}
          className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="flex justify-end space-x-4">
        {editingExpense && (
          <button
            type="button"
            onClick={cancelEdit}
            className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
          >
            Cancel
          </button>
        )}
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          {editingExpense ? "Update Expense" : "Add Expense"}
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
