/** @jsxImportSource @emotion/react */
import Card from "../../shared/components/card/card.component";
import IconComponent from "../../shared/components/icon/icon.component";
import { PATHS } from "../../shared/constants/path-options";
import CategoryByMonth from "./diagrams/categoryByMonth/categoryByMonth.component";
import { styles } from "./homepage.styles";
import { FaPlus } from "react-icons/fa6";
import { FaUpload } from "react-icons/fa";
import { FaList } from "react-icons/fa6";
import TotalExpenseByMonth from './diagrams/totalExpenseByMonth/totalExpenseByMonth.component';
import TotalExpenseByYear from "./diagrams/totalExpenseByYear/totalExpenseByYear.component";
import RecentExpenseList from './screens/recentExpense/recentExpense.component';

const HomePage = () => {
  return (
    <div css={styles.container}>
      <div css={styles.sectionTop}>
        <div css={styles.quickActions}>
          <p css={styles.quickText}>Quick options</p>
          <div css={styles.cardContainer}>
            <Card
              to={PATHS.expenses.root}
              text={`Add Expense`}
              icon={<IconComponent icon={FaPlus} size={24} />}
            />
            <Card
              to={PATHS.categories.root}
              text={`Categories`}
              icon={<IconComponent icon={FaList} size={24} />}
            />
            <Card
              to={PATHS.expenses.uploadBankStatement}
              text={`Upload Statement`}
              icon={<IconComponent icon={FaUpload} size={24} />}
            />
          </div>
        </div>
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
