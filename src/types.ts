export type Category =
  | "交通費"
  | "消耗品"
  | "会議費"
  | "その他";

export type Expense = {
  id: string;
  title: string;
  category: Category;
  amount: number;
  date: string;
  approved: boolean;
  memo?: string;
};