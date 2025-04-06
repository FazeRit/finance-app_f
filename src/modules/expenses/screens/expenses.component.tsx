/** @jsxImportSource @emotion/react */
import AddExpense from './add-expenses/add-expenses.component';
import ExpensesList from './expenses-list/expenses-list.component';
import { styles } from './expenses.styles';

const Expenses = () => {
    return (
      <div css={styles.container}>
        <div css={styles.sectionTop}>
          <AddExpense />
          <ExpensesList />
        </div>
      </div>
    );
};

export default Expenses;