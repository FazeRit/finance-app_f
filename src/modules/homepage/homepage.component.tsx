/** @jsxImportSource @emotion/react */
import CategoryByMonth from "./diagrams/categoryByMonth/categoryByMonth.component";
import { styles } from "./homepage.styles";
import TotalExpenseByMonth from './diagrams/totalExpenseByMonth/totalExpenseByMonth.component';
import TotalExpenseByYear from "./diagrams/totalExpenseByYear/totalExpenseByYear.component";
import RecentExpenseList from './screens/recent-expenses/recentExpense.component';
import QuickActions from "./screens/quick-actions/quick-actions.component";

const HomePage = () => {
  return (
    <div css={styles.container}>
      <div css={styles.sectionTop}>
        <QuickActions />
        <RecentExpenseList />
      </div>
      <div css={styles.diagramContainer}>
        <div css={styles.diagram}>
          <CategoryByMonth />
        </div>
        <div css={styles.diagram}>
          <TotalExpenseByMonth />
        </div>
        <div css={styles.diagram}>
          <TotalExpenseByYear />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
