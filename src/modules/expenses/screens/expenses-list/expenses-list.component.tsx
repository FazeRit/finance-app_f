/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import NoDataFound from "../../../../shared/components/noDataFound/noDataFound.component";
import Loading from "../../../../shared/components/loading/loading.component";
import { useGetExpenses } from "../../../homepage/hooks/useGetExpenses";
import { ExpenseHeader } from "../../../../shared/components/expense-header/expense-header.component";
import { styles } from "./expenses-list.styles";
import { useExpenseStore } from "../../store/expenses.store";
import { FaTrash } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import IconComponent from "../../../../shared/components/icon/icon.component";
import { useDeleteExpense } from "../../hooks/useDeleteExpense";
import UpdateExpense from "../edit-expense/edit-expense.component";

const ExpensesList = () => {
  const {
    page,
    limit,
    sort,
    expenses,
    totalPages,
    setPage,
    setLimit,
    setSort,
    setExpenses,
    setTotal,
    setTotalPages,
  } = useExpenseStore();

  const [selectedExpenseId, setSelectedExpenseId] = useState<number | null>(
    null
  );
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const { mutate, isPending: isDeleting } = useDeleteExpense();
  const { isPending, data: expensesData } = useGetExpenses({
    page,
    limit,
    sort,
  });

  useEffect(() => {
    if (expensesData) {
      setExpenses(expensesData.data);
      setTotal(expensesData.total);
      setTotalPages(expensesData.totalPages);
    }
  }, [expensesData, setExpenses, setTotal, setTotalPages]);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  const handleLimitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLimit(Number(event.target.value));
    setPage(1);
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(event.target.value as "asc" | "desc");
    setPage(1);
  };

  const handleEditClick = (expenseId: number) => {
    setSelectedExpenseId(expenseId);
    setIsEditModalOpen(true);
  };

  if (isPending) {
    return <Loading />;
  }

  if (!expenses || expenses.length === 0) {
    return <NoDataFound />;
  }

  return (
    <div css={styles.container}>
      <p css={styles.title}>Expenses</p>
      <div>
        <label css={styles.label}>
          Sort by Date:
          <select
            css={styles.paginationSelect}
            value={sort}
            onChange={handleSortChange}
            disabled={isEditModalOpen}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </label>
      </div>
      <table css={styles.table}>
        <ExpenseHeader />
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
              <td>
                <button
                  disabled={isDeleting || isEditModalOpen}
                  onClick={() => mutate(expense.id)}
                  title="Delete expense"
                >
                  <IconComponent icon={FaTrash} size={12} />
                </button>
              </td>
              <td>
                <button
                  onClick={() => handleEditClick(expense.id)}
                  title="Edit expense"
                  disabled={isEditModalOpen && selectedExpenseId !== expense.id}
                >
                  <IconComponent icon={MdEdit} size={12} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div css={styles.paginationContainer}>
        <button
          css={styles.paginationButton}
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1 || isEditModalOpen}
        >
          Previous
        </button>
        <span css={styles.paginationText}>
          Page {page} of {totalPages}
        </span>
        <button
          css={styles.paginationButton}
          onClick={() => handlePageChange(page + 1)}
          disabled={page === totalPages || isEditModalOpen}
        >
          Next
        </button>
        <select
          css={styles.paginationSelect}
          value={limit}
          onChange={handleLimitChange}
          disabled={isEditModalOpen}
        >
          <option value={5}>5 per page</option>
          <option value={10}>10 per page</option>
          <option value={20}>20 per page</option>
        </select>
      </div>
      {isEditModalOpen && selectedExpenseId && (
        <UpdateExpense
          isOpen={isEditModalOpen}
          onClose={() => {
            setIsEditModalOpen(false);
            setSelectedExpenseId(null);
          }}
          id={selectedExpenseId}
        />
      )}
    </div>
  );
};

export default ExpensesList;
