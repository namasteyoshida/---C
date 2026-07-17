import styles from "./ExpenseItem.module.css";
import type { Expense } from "../types";

/* 【型エイリアス】型定義 */
type ExpenseItemProps = {
  /* Expense型のオブジェクト */
  expense: Expense;
  /* string型のidを受け取って何も返さない関数 */
  /* idがstring型なのはtype.tsのExpense型に揃えたため */
  onApprove: (id: string) => void;
};

/* Reactコンポーネントを作るための関数 */
export default function ExpenseItem({
  /* ExpenseItemProps型のオブジェクト */
  /* 初期値設定の必要なし */
  expense,
  onApprove,
}: ExpenseItemProps) {

  /* 画面の表示内容 */
  return (
    <li className={styles.expenseItem}>
      <h3 className={styles.title}>{expense.title}</h3>

      <p>カテゴリ：{expense.category}</p>

      <p>支払日：{expense.date}</p>

      <p>
        金額：
        <span
          /* 【三項演算子】
          金額が10,000円以上の場合、クラス名をつけて強調表示 */
          className={
            expense.amount >= 10000 ? styles.highAmount : ""
          }
        >
          ¥{expense.amount.toLocaleString()}
        </span>

        {/* 【三項演算子】
        金額が10,000円以上の場合、(高額経費)と表示 */}
        {expense.amount >= 10000 && (
          <span className={styles.hignAmountLabel}>
            （高額経費）
          </span>
        )}
      </p>

      {expense.memo && (
        <p>メモ：{expense.memo}</p>
      )}

      {/* 【三項演算子】∵ JSXの中ではif文が書けない */}
      {expense.approved ? (
        /* expense.approvedがtrueの場合 */
        <span className={styles.approved}>
          ✔ 承認済み
        </span>
      ) : (
        /* expense.approvedがfalseの場合 */
        <button
          className={styles.approveButton}
          /* ボタンがクリックされたらexpense.idの経費を承認する */
          onClick={() => onApprove(expense.id)}
        >
          承認する
        </button>
      )}
    </li>
  );
}