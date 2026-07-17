import type { Category } from "../types";

type Props = {
  category: "すべて" | Category;
  sortOrder: "asc" | "desc";
  onCategoryChange: (category: "すべて" | Category) => void;
  onSortChange: (order: "asc" | "desc") => void;
};

export default function ExpenseFilter({
  category,
  sortOrder,
  onCategoryChange,
  onSortChange,
}: Props) {
  return (
    <div>
      <label>
        カテゴリ：
        <select
          value={category}
          onChange={(e) =>
            onCategoryChange(e.target.value as "すべて" | Category)
          }
        >
          <option value="すべて">すべて</option>
          <option value="交通費">交通費</option>
          <option value="消耗品">消耗品</option>
          <option value="会議費">会議費</option>
          <option value="その他">その他</option>
        </select>
      </label>

      <label style={{ marginLeft: "16px" }}>
        並び順：
        <select
          value={sortOrder}
          onChange={(e) =>
            onSortChange(e.target.value as "asc" | "desc")
          }
        >
          <option value="asc">金額昇順</option>
          <option value="desc">金額降順</option>
        </select>
      </label>
    </div>
  );
}