// src/types/Expense.ts

export type Category =
  | "交通費"
  | "消耗品"
  | "会議費"
  | "その他";

export interface Expense {
  id: string;
  title: string;
  date: string;
  category: Category;
  amount: number;
  memo ?: string;
  approved: boolean;
}