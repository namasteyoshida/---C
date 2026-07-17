import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import type { Category, Expense } from "../types";


type ExpenseFormProps = {
  onAdd: (expense: Omit<Expense, "id" | "approved">) => void;
};

const schema = yup.object({
  title: yup
    .string()
    .label("件名")
    .transform((value) => value.trim())
    .required("${label}は必須入力です。")
    .max(30, "${label}は30文字以内で入力してください。"),

  date: yup
    .string()
    .label("日付")
    .required("${label}は必須入力です。"),

  category: yup
    .mixed<Category>()
    .label("カテゴリ")
    .oneOf(["交通費", "消耗品", "会議費", "その他"], "カテゴリは正しく選択してください。")
    .required("${label}は必須入力です。"),

  amount: yup
    .number()
    .label("金額")
    .typeError("${label}は必須入力です。")
    .integer("${label}は整数で入力してください。")
    .min(1, "${label}は1円以上で入力してください。")
    .max(300000, "${label}は300,000円以下で入力してください。")
    .test(
      "hundred",
      "金額は100円単位で入力してください。",
      (value) => value !== undefined && value % 100 === 0
    )
    .required("${label}は必須入力です。"),

//   memo: yup
//     .string()
//     .label("用途メモ")
//     .max(100, "${label}は100文字以内で入力してください。"),
    memo: yup
        .string()
        .label("用途メモ")
        .max(100, "${label}は100文字以内で入力してください。")
        .notRequired()
}).required();

type FormData = {
  title: string;
  date: string;
  category: Category;
  amount: number;
  memo?: string;
};

function ExpenseForm({ onAdd }: ExpenseFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema) as never,
  });

  const onSubmit = (data: FormData) => {
    onAdd({
      title: data.title,
      date: data.date,
      category: data.category,
      amount: data.amount,
      memo: data.memo ?? "",
    });

    reset({
        title: "",
        date: "",
        category: undefined,
        amount: undefined,
        memo: "",
        });
    };

  return (
    <form className="expense-form" onSubmit={handleSubmit(onSubmit)}>
      <h2>経費を登録</h2>

      <div className="form-group">
        <label htmlFor="title">件名</label>
        <input id="title" type="text" {...register("title")} />
        <p className="error">{errors.title?.message}</p>
      </div>

      <div className="form-group">
        <label htmlFor="date">日付</label>
        <input id="date" type="date" {...register("date")} />
        <p className="error">{errors.date?.message}</p>
      </div>

      <div className="form-group">
        <label htmlFor="category">カテゴリ</label>
        <select id="category" {...register("category")}>
          <option value="">選択してください</option>
          <option value="交通費">交通費</option>
          <option value="消耗品">消耗品</option>
          <option value="会議費">会議費</option>
          <option value="その他">その他</option>
        </select>
        <p className="error">{errors.category?.message}</p>
      </div>

      <div className="form-group">
        <label htmlFor="amount">金額</label>
        <input id="amount" type="number" {...register("amount")} />
        <p className="error">{errors.amount?.message}</p>
      </div>

      <div className="form-group">
        <label htmlFor="memo">用途メモ</label>
        <textarea id="memo" rows={3} {...register("memo")} />
        <p className="error">{errors.memo?.message}</p>
      </div>

      <button type="submit">登録する</button>
    </form>
  );
}

export default ExpenseForm;