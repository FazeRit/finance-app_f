/** @jsxImportSource @emotion/react */
import NoDataFound from "../../../../shared/components/noDataFound/noDataFound.component";
import Loading from "../../../../shared/components/loading/loading.component";
import { useGetExpenses } from "../../hooks/useGetExpenses";
import { styles } from "./recentExpense.styles";
import { ExpenseHeader } from "../../../../shared/components/expense-header/expense-header.component";
import { Expense } from "../../../expenses/api/expenses.api";

const RecentExpenseList = () => {
  const { isPending, data: expenses } = useGetExpenses({ take: 3 });

  if (isPending) {
    return <Loading />;
  }

  if (!expenses || expenses.data.length === 0) {
    return <NoDataFound />;
  }

  return (
    <div css={styles.container}>
      <p css={styles.title}>Recent Expenses</p>
      <table css={styles.table}>
        <ExpenseHeader />
        <tbody>
          {expenses.data.map((expense: Expense) => (
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
