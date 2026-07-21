import ExpenseItem from "./ExpenseItem";
import type { Expense } from "../types";

/* 【型エイリアス】型定義 */
type ExpenseListProps = {
  /* Expense型のオブジェクトが入った配列 */
  expenses: Expense[];
  /* string型のidを受け取って何も返さない関数 */
  /* idがstring型なのはtype.tsのExpense型に揃えたため */
  onApprove: (id: string) => void;
};

/* Reactコンポーネントを作るための関数 */
export default function ExpenseList({
  /* ExpenseListProps型のオブジェクト */
  /* 初期値設定の必要なし */
  expenses,
  onApprove,
}: ExpenseListProps) {
  /* 【if文で条件分岐】配列の中身がない(経費情報がない)場合
  ∵ 早期リターン(Early Return)というReactでよく使われる書き方
  -> 可読性◎
    ・JSXのネストが増えない
    ・「データがない場合はここで終了」という処理の流れがわかりやすい */
  if (expenses.length === 0) {
    return <p>登録された経費はありません。</p>;
  }

  /* 配列の中身がある(経費情報が1つ以上ある)場合の処理 */
  return (
    <ul>
      {/* 【.map()メソッド】配列の中身を1つ1つ取り出して実行する処理 */}
      {expenses.map((expense) => (
        /* ExpenseItemコンポーネントにProps(値)を渡している */
        <ExpenseItem
          /* 【.map()】keyに一意な値を指定する(データ固有の重複しないidが最適)
          前回の一覧と今回の一覧を比較して変わったところだけ更新
          -> Reactの再描画を効率的に行う */
          key={expense.id}
          expense={expense}
          onApprove={onApprove}
        />
      ))}
    </ul>
  );
}