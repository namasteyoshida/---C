import { useMemo, useState } from "react";
import "./App.css";

import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseSummary from "./components/ExpenseSummary";
import ExpenseList from "./components/ExpenseList";
import ExpenseForm from "./components/ExpenseForm";

import { initialExpenses } from "./datas/expenses";
import type { Category, Expense } from "./types";

import { filterExpensesByCategory } from "./utils/filterExpensesByCategory";
import { sortExpensesByAmount } from "./utils/sortExpensesByAmount";

export default function App() {
  // State
  const [expenses, setExpenses] = useState<Expense[]>(initialExpenses);
  const [category, setCategory] = useState<"すべて" | Category>("すべて");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  // 絞り込み
  const filteredExpenses = filterExpensesByCategory(expenses, category);

  // 並び替え
  const displayExpenses = useMemo(
    () => sortExpensesByAmount(filteredExpenses, sortOrder),
    [filteredExpenses, sortOrder]
  );

  // 登録
  const handleAdd = (expense: Omit<Expense, "id" | "approved">) => {
    setExpenses((prev) => [
      ...prev,
      {
        ...expense,
        id: crypto.randomUUID(),
        approved: false,
      },
    ]);
  };

  // 承認
  const handleApprove = (id: string) => {
    setExpenses((prev) =>
      prev.map((expense) =>
        expense.id === id
          ? { ...expense, approved: true }
          : expense
      )
    );
  };

  return (
    <div className="App">
      <h1>KeihiNote 💰</h1>

      <ExpenseSummary expenses={expenses} />

      <ExpenseFilter
        category={category}
        sortOrder={sortOrder}
        onCategoryChange={setCategory}
        onSortChange={setSortOrder}
      />

      <ExpenseList
        expenses={displayExpenses}
        onApprove={handleApprove}
      />

      <ExpenseForm onAdd={handleAdd} />
    </div>
  );
}