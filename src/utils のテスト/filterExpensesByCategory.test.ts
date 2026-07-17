import { describe, it, expect } from "vitest";
import { filterExpensesByCategory } from "../utils/filterExpensesByCategory";
import type { Expense } from "../types";

const expenses: Expense[] = [
  {
    id: "1",
    title: "電車",
    category: "交通費",
    amount: 1000,
    date: "2026-07-10",
    approved: true,
  },
  {
    id: "2",
    title: "マウス",
    category: "消耗品",
    amount: 3000,
    date: "2026-07-11",
    approved: false,
  },
  {
    id: "3",
    title: "お茶",
    category: "会議費",
    amount: 2000,
    date: "2026-07-12",
    approved: false,
  },
];

describe("filterExpensesByCategory", () => {
  it("交通費だけ取得できる", () => {
    const result = filterExpensesByCategory(expenses, "交通費");

    expect(result).toHaveLength(1);
    expect(result[0].category).toBe("交通費");
  });

  it("すべてを選択すると全件返る", () => {
    const result = filterExpensesByCategory(expenses, "すべて");

    expect(result).toEqual(expenses);
  });

  it("空配列を渡すと空配列が返る", () => {
    expect(filterExpensesByCategory([], "交通費")).toEqual([]);
  });
});