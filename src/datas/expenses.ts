import type { Expense } from "../types";

export const initialExpenses: Expense[] = [
  {
    id: crypto.randomUUID(),
    title: "客先訪問（電車）",
    category: "交通費",
    amount: 1200,
    date: "2026-07-10",
    approved: true,
    memo: "〇〇株式会社への訪問",
  },
  {
    id: crypto.randomUUID(),
    title: "モニター購入",
    category: "消耗品",
    amount: 28000,
    date: "2026-07-11",
    approved: false,
    memo: "業務用モニター",
  },
  {
    id: crypto.randomUUID(),
    title: "打ち合わせ茶菓子",
    category: "会議費",
    amount: 1800,
    date: "2026-07-14",
    approved: false,
    memo: "社内会議",
  },
  {
    id: crypto.randomUUID(),
    title: "文房具購入",
    category: "消耗品",
    amount: 1500,
    date: "2026-07-15",
    approved: true,
    memo: "ボールペン・ノート",
  },
  {
    id: crypto.randomUUID(),
    title: "宅配便送料",
    category: "その他",
    amount: 900,
    date: "2026-07-16",
    approved: false,
    memo: "書類発送",
  },
];