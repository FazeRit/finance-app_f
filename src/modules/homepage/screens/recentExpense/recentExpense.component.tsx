/** @jsxImportSource @emotion/react */
import { useMemo } from "react";
import { useGetExpenses } from "../../hooks/useGetExpenses";
import NoDataFound from "../../../../shared/components/noDataFound/noDataFound.component";
import Loading from "../../../../shared/components/loading/loading.component";
import { styles } from "./recentExpense.styles";

export interface Expense {
  id: number;
  amount: number;
  description: string;
  categoryId: number;
  date: string;
  category: null | { name: string };
}

const RecentExpenseList = () => {
  const { isPending, data: expenses } = useGetExpenses({ take: 3 });

  const RecentExpenseHeader = useMemo(
    () => (
      <thead css={styles.tableHeader}>
        <tr>
          <th>Date</th>
          <th>Category</th>
          <th>Description</th>
          <th>Amount</th>
        </tr>
      </thead>
    ),
    []
  );

  if (isPending) {
    return <Loading />;
  }

  if (!expenses || expenses.length === 0) {
    return <NoDataFound />;
  }

  return (
    <div css={styles.container}>
      <p css={styles.title}>Recent Expenses</p>
      <table css={styles.table}>
        {RecentExpenseHeader}
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id} css={styles.tableRow}>
              <td>
                {new Date(expense.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </td>
              <td>
                <span css={styles.categoryBadge}>
                  {expense.category?.name || "Uncategorized"}
                </span>
              </td>
              <td>{expense.description}</td>
              <td css={styles.amount}>${expense.amount.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentExpenseList;
