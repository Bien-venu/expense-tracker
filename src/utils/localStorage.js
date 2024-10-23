
const EXPENSES_KEY = "expenses";

export const getExpenses = () => {
  const expenses = localStorage.getItem(EXPENSES_KEY);
  return expenses ? JSON.parse(expenses) : [];
};

export const saveExpenses = (expenses) => {
  localStorage.setItem(EXPENSES_KEY, JSON.stringify(expenses));
};

export const clearExpenses = () => {
  localStorage.removeItem(EXPENSES_KEY);
};