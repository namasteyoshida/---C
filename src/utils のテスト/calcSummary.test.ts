import { describe, it, expect } from "vitest";
import { calcSummary } from "../utils/calcSummary";
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

describe("calcSummary", () => {
  it("件数・合計・未承認合計を計算できる", () => {
    const result = calcSummary(expenses);

    expect(result).toEqual({
      count: 3,
      total: 6000,
      unapprovedTotal: 5000,
    });
  });

  it("空配列を渡すとすべて0になる", () => {
    expect(calcSummary([])).toEqual({
      count: 0,
      total: 0,
      unapprovedTotal: 0,
    });
  });
});