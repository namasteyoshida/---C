# 経費管理アプリ

## 概要

React + TypeScript を用いて作成した経費管理アプリです。

登録済みの経費を一覧表示し、カテゴリによる絞り込みや金額による並び替え、集計表示、経費登録、承認機能を実装しています。

---

## 開発環境

- React
- TypeScript
- Vite
- React Hook Form
- Yup
- Vitest

---

## 起動手順

### 1. パッケージをインストール

```bash
pnpm install
```

### 2. 開発サーバーを起動

```bash
pnpm dev
```

ブラウザで表示されたURL（通常は http://localhost:5173 ）へアクセスしてください。

---

## コンポーネント構成

```
App
├── Panel
│   ├── ExpenseSummary
│   ├── ExpenseFilter
│   └── ExpenseList
│       └── ExpenseItem
└── ExpenseForm
```

---

## メンバー担当

### A（増田）

- ExpenseList
- ExpenseItem
- 一覧表示（F-1）
- 承認状態の条件分岐（F-2）
- 承認ボタン（F-7）

### B（西）

- ExpenseForm
- Yupスキーマ
- 新規登録フォーム（F-6）

### C（吉田）

- ExpenseFilter
- ExpenseSummary
- utils
- 絞り込み（F-3）
- 並び替え（F-4）
- 集計表示（F-5）

---

## 実装した主な機能

- 経費一覧表示
- カテゴリによる絞り込み
- 金額の昇順・降順ソート
- 件数・合計金額・未承認金額の集計表示
- React Hook Form + Yup を利用した入力フォーム
- 経費の追加
- 承認状態の更新
- CSS Modules によるスタイル管理

---

## ディレクトリ構成

```
src
├── components
│   ├── ExpenseList.tsx
│   ├── ExpenseForm.tsx
│   ├── ExpenseFilter.tsx
│   ├── ExpenseItem.module.css
│   ├── ExpenseItem.tsx
│   └── ExpenseSummary.tsx
├── types.ts
├── App.css
├── App.tsx
├── main.tsx
└── utils
    ├── calcSummary.ts
    ├── filterExpensesByCategory.ts
    └── sortExpensesByAmount.ts
```

---

## 実装できなかった要件

### 単体テスト(Vitest)
- 理解するのに十分な時間を確保することができなかったため。

### MUIを用いたレイアウト
- 実装する時間を確保することができなかったため。