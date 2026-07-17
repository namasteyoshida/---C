import { describe, it, expect } from "vitest";
import { sortExpensesByAmount } from "../utils/sortExpensesByAmount";
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

describe("sortExpensesByAmount", () => {
  it("昇順に並び替えられる", () => {
    const result = sortExpensesByAmount(expenses, "asc");

    expect(result.map((expense) => expense.amount)).toEqual([
      1000, 2000, 3000,
    ]);
  });

  it("降順に並び替えられる", () => {
    const result = sortExpensesByAmount(expenses, "desc");

    expect(result.map((expense) => expense.amount)).toEqual([
      3000, 2000, 1000,
    ]);
  });

  it("空配列を渡すと空配列が返る", () => {
    expect(sortExpensesByAmount([], "asc")).toEqual([]);
  });

  it("元の配列を変更しない", () => {
    const copy = [...expenses];

    sortExpensesByAmount(expenses, "asc");

    expect(expenses).toEqual(copy);
  });
});