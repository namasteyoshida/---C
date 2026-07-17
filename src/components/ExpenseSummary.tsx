import { calcSummary } from "../utils/calcSummary";
import type { Expense } from "../types";

type Props = {
  expenses: Expense[];
};

export default function ExpenseSummary({ expenses }: Props) {
  const summary = calcSummary(expenses);

  return (
    <div>
      <p>件数：{summary.count}件</p>
      <p>合計：{summary.total.toLocaleString()}円</p>
      <p>未承認：{summary.unapprovedTotal.toLocaleString()}円</p>
    </div>
  );
}